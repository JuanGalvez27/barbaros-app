import { Router } from 'express'
import {
  getClientes,
  getPedidos,
  createCliente,
} from '../controllers/barbaros.controllers.js'

const router = Router()

router.get('/api/pedidos', getPedidos)
router.get('/api/clientes', getClientes)
router.post('/api/clientes', createCliente)

export default router