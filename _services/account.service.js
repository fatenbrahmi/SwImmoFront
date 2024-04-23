/** Import des modules nécessaires */
import Axios from './axios.service'
import store from '../store'

let login = (credentials) => {
    return Axios.post('/auth/login', credentials)
}
//localStorage est un objet JavaScript qui permet de stocker des données sous forme de paires clé-valeur dans le navigateur web
//Cela en fait un moyen pratique de stocker des informations telles que des jetons d'authentification, des préférences utilisateur ou d'autres données
let logout = () => {
    localStorage.removeItem('token')
}

//récupère le token d'authentification stocké dans le localStorage
let getToken = () => {
    return localStorage.getItem('token')
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}


// true si un token est présent, ce qui signifie que l'utilisateur est connecté, sinon elle renvoie false
let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

export const accountService = {
    login,
    logout,
    saveToken,
    getToken,
    isLogged
}