package mx.sherpa.challenge.entity;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/**
 * @author Edilberto Ventura Camacho
 */
@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "email", nullable = false)
    @NotBlank
    @Size(max = 150)
    private String email;

    @Column(name = "password", nullable = false)
    @NotBlank
    @Size(max = 256)
    private String password;

    @Column(name = "name", nullable = false)
    @NotBlank
    @Size(max = 150)
    private String name;

    @Column(name = "lname", nullable = false)
    @NotBlank
    @Size(max = 150)
    private String lname;

    @Column(name = "sname")
    @Size(max = 150)
    private String sname;

    @Column(name = "role_id", nullable = false)
    @Min(1)
    @Max(20)
    private long roleId;

    @Column(name = "active", nullable = false)
    private boolean active;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getRoleId() {
        return roleId;
    }

    public void setRoleId(long roleId) {
        this.roleId = roleId;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    @Override
    public String toString() {
        return "UserEntity{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", lname='" + lname + '\'' +
                ", sname='" + sname + '\'' +
                ", roleId=" + roleId +
                ", active=" + active +
                '}';
    }
}
