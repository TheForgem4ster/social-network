import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "8ae06c9d-040e-448f-b487-fe6bad0de921"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {}).then(responce => responce.data)
    }
}

export const authMeAPI = {
    getAutMe () {
        return instance.get(`auth/me`).then(responce => responce.data)
    }
}

export const followAPI = {
    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`, {})
    },
    postUnfollow(userId) {
        return instance.post(`follow/${userId}`, {}, {})
    }
}