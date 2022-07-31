package mx.sherpa.challenge.bean;

import mx.sherpa.challenge.entity.PostEntity;

import java.util.List;

public class AllResponse {
    private long found;

    public long getFound() {
        return found;
    }

    public void setFound(long found) {
        this.found = found;
    }

    public List<PostEntity> getResults() {
        return results;
    }

    public void setResults(List<PostEntity> results) {
        this.results = results;
    }

    private List<PostEntity> results;
}
