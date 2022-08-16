import { Router } from 'express'
import { usersController } from './src/controllers/usersController.js'


const routes = Router()


routes.get('/users', usersController.listarUsuario)

routes.post('/users', usersController.criarUsuario)


//STATUS CODE
//200 E 201
//404


// GET - Ler os dadoso
// POST - criar os dados
// PUT/PATCH - editar os dados
// DELETE - deletar os dados

export { routes }