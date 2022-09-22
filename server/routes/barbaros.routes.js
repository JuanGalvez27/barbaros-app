import { Router } from 'express'
import {
  getClientes,
  getPedidos,
  createCliente,
  createPedido
} from '../controllers/barbaros.controllers.js'

const router = Router()

router.get('/api/pedidos', getPedidos)
router.get('/api/clientes', getClientes)
router.post('/api/clientes', createCliente)
router.post('/api/pedidos', createPedido)


export default router