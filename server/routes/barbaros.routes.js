import { Router } from 'express'
import {
  getClientes,
  getPedidos,
  createCliente,
  createPedido,
  deletePedido,
  deleteCliente,
  getCliente,
  getPedido
} from '../controllers/barbaros.controllers.js'

const router = Router()

// GET
router.get('/api/pedidos', getPedidos)
router.get('/api/clientes', getClientes)
router.get('/api/clientes/:id', getCliente)
router.get('/api/pedidos/:id', getPedido)

// POST
router.post('/api/clientes', createCliente)
router.post('/api/pedidos', createPedido)

// DELETE
router.delete('/api/pedidos/:id', deletePedido)
router.delete('/api/clientes/:id', deleteCliente)

// UPDATE

export default router