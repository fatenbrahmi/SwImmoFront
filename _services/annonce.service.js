/** Import des modules nécessaires */
import Axios from './axios.service'

let createAnnonce = (annonceData) => {
    return Axios.post('/annonces', annonceData)
}

let getAnnonces = () => {
    return Axios.get('/annonces')
}

let getAnnonceById = (id) => {
    return Axios.get('/annonces/' + id)
}

let updateAnnonce = (id, annonceData) => {
    return Axios.patch('/annonces/' + id, annonceData)
}

let deleteAnnonce = (id) => {
    return Axios.delete('/annonces/' + id)
}

export const annonceService = {
    createAnnonce,
    getAnnonces,
    getAnnonceById,
    updateAnnonce,
    deleteAnnonce
}
