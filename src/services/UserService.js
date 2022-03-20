import axios from "axios"

export function editProfile(keycloak, userUpdatedData) {
    const url = keycloak.createAccountUrl().split('?')[0];

    return axios({
        method: 'post',
        url: url,
        headers: {
            'Authorization': `Bearer ${keycloak.token}`
        },
        data: userUpdatedData
    })
}

export function getUser(username, askerUsername) {
    const url = 'http://localhost:8484/api/users';

    return axios({
        method: 'post',
        url: url,
        headers: {
            'Content-Type': 'text/plain'
        },
        data: username
    })
}