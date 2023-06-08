import axios from "axios"

export const cli = axios.create()

export function getRooms(game: string, region: string) {
    return cli.get("/api/list_rooms", {
        params: {
            game,
            region,
        }
    })
}
