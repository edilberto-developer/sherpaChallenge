package mx.sherpa.challenge.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import mx.sherpa.challenge.entity.UserEntity;

import javax.enterprise.context.ApplicationScoped;

/**
 * Repository class that contains the database access methods.
 *
 * @author Edilberto Ventura Camacho
 * @version 1.0
 * @since 1.0
 */
@ApplicationScoped
public class UsersRepository implements PanacheRepository<UserEntity> {

    public UserEntity findByEmail(final String email) {
        return find("email", email).firstResult();
    }
}
