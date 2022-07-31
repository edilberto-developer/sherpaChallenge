package mx.sherpa.challenge.service;

import mx.sherpa.challenge.bean.UserUpdateBean;
import mx.sherpa.challenge.entity.UserEntity;
import mx.sherpa.challenge.exception.UserExistsException;
import mx.sherpa.challenge.exception.UserNotActiveException;
import mx.sherpa.challenge.exception.UserNotFoundException;

import java.util.List;

public interface IUserService {
    UserEntity getUserById(long id) throws UserNotFoundException;

    UserEntity getUserByEmail(String emailck) throws UserNotFoundException, UserNotActiveException;

    List<UserEntity> getAllUsers();

    UserEntity updateUser(final long idUser, final UserUpdateBean user) throws UserNotFoundException, UserExistsException;

    UserEntity saveUser(UserEntity user) throws UserExistsException;

    void deleteUser(long id) throws UserNotFoundException;
}
