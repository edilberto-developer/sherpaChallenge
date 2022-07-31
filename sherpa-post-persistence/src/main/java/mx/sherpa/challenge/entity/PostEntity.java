package mx.sherpa.challenge.entity;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

/**
 * @author Edilberto Ventura Camacho
 */
@Entity
@Table(name = "post")
public class PostEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "title", nullable = false)
    @NotBlank
    @Size(max = 250)
	private String title;

    @Column(name = "description", nullable = false)
    @NotBlank
    @Size(max = 256)
	private String description;

    @Column(name = "user", nullable = false)
    @NotBlank
    @Size(max = 256)
	private String user;

    @Column(name = "user_id", nullable = false)
	private long userId;

    @Column(name = "visits", nullable = false)
    private long visits;

    @Column(name = "likes", nullable = false)
    private long likes;

    @Column(name = "cdate", nullable = false)
    private Date cdate;

    @Column(name = "udate", nullable = false)
    private Date udate;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getVisits() {
        return visits;
    }

    public void setVisits(long visits) {
        this.visits = visits;
    }

    public long getLikes() {
        return likes;
    }

    public void setLikes(long likes) {
        this.likes = likes;
    }

    public Date getCdate() {
        return cdate;
    }

    public void setCdate(Date cdate) {
        this.cdate = cdate;
    }

    public Date getUdate() {
        return udate;
    }

    public void setUdate(Date udate) {
        this.udate = udate;
    }
}
