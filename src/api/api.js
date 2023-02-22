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
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn("Obsolete method. Please profileAPI object.")
        return profileAPI.getProfile(userId);

    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
      return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`).then(responce => responce.data);
    }
}
