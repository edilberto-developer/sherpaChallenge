import { getUrisPost } from "./map-uris-post"
import { getUrisUser } from "./map-uris-user"

export const getMapUris = (env: any) => {
    return {
        ...getUrisUser(env),
        ...getUrisPost(env)
    }
}