package mx.sherpa.challenge.service;

import mx.sherpa.challenge.bean.UserUpdateBean;
import mx.sherpa.challenge.entity.UserEntity;
import mx.sherpa.challenge.exception.UserExistsException;
import mx.sherpa.challenge.exception.UserNotActiveException;
import mx.sherpa.challenge.exception.UserNotFoundException;
import mx.sherpa.challenge.repository.UsersRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import java.util.List;

import static mx.sherpa.challenge.util.Constants.USER_EXISTS;
import static mx.sherpa.challenge.util.Constants.USER_NOT_EXISTS;
import static mx.sherpa.challenge.util.Constants.USER_INACTIVE;

/**
 * Service class
 *
 * @author Edilberto Ventura Camacho
 * @version 1.0
 * @since 1.0
 */
@ApplicationScoped
public class UserService implements IUserService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);

    @Inject
    private UsersRepository usersRepository;

    @Override
    public UserEntity getUserById(final long id) throws UserNotFoundException {
        return usersRepository.findByIdOptional(id).orElseThrow(() ->
                new UserNotFoundException(USER_NOT_EXISTS));
    }

    @Override
    public UserEntity getUserByEmail(String email) throws UserNotFoundException, UserNotActiveException {
        UserEntity userFound = usersRepository.findByEmail(email);
        if(userFound == null) {
            throw new UserNotFoundException(USER_NOT_EXISTS);
        }
        if(!userFound.isActive()) {
            throw new UserNotActiveException(USER_INACTIVE);
        }
        return userFound;
    }

    @Override
    public List<UserEntity> getAllUsers() {
        LOGGER.info("Fetch all users");

        return usersRepository.listAll();
    }

    @Transactional
    @Override
    public UserEntity updateUser(final long idUser, final UserUpdateBean user) throws UserNotFoundException, UserExistsException {
        LOGGER.info("Update one user: {}", idUser);
        UserEntity userEmailFound = usersRepository.findByEmail(user.getEmail());
        if (userEmailFound != null && userEmailFound.getId() != idUser) {
            throw new UserExistsException(USER_EXISTS);
        }

        UserEntity userFound = getUserById(idUser);
        userFound.setEmail(user.getEmail());
        userFound.setName(user.getName());
        userFound.setLname(user.getLname());
        userFound.setSname(user.getSname());

        usersRepository.persist(userFound);

        return userFound;
    }

    @Transactional
    @Override
    public UserEntity saveUser(final UserEntity user) throws UserExistsException {
        LOGGER.info("Create one user: {}", user);
        UserEntity userFound = usersRepository.findByEmail(user.getEmail());
        if (userFound != null) {
            throw new UserExistsException(USER_EXISTS);
        }
        usersRepository.persistAndFlush(user);

        return user;
    }

    @Transactional
    @Override
    public void deleteUser(final long id) throws UserNotFoundException {
        usersRepository.delete(getUserById(id));
    }
}
