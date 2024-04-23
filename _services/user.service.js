/** Import des modules nécessaires */
import Axios from './axios.service'


let getAllUsers = () => {
    return Axios.get('/users')
}

let getUser = (uid) => {
    return Axios.get('/users/'+uid)
}

let updateUser = (user) => {
    return Axios.patch('/users/'+user.id, user)
}

let createUser = (user) => {
    return Axios.put('/users', user)
}

let deleteUser = (uid) => {
    return Axios.delete('/users/'+uid)
}

export const userService = {
    getAllUsers,
    getUser,
    updateUser,
    createUser,
    deleteUser,
}