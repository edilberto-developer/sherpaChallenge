package mx.sherpa.challenge.bean;

import mx.sherpa.challenge.entity.UserEntity;

import java.util.List;

public class AllResponse {
    private long found;

    public long getFound() {
        return found;
    }

    public void setFound(long found) {
        this.found = found;
    }

    public List<UserEntity> getResults() {
        return results;
    }

    public void setResults(List<UserEntity> results) {
        this.results = results;
    }

    private List<UserEntity> results;
}
