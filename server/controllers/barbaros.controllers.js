import { pool } from '../db.js'

export const getPedidos = async (req, res) => {
  try{
    const [pedidos] = await pool.query(
      "SELECT * FROM pedidos inner join clientes ON pedidos.id_cliente = clientes.id_cliente"
    )
    res.json(pedidos)
  } catch (error) {
    console.error(error)
    res.status(500),json({ message: "Connection error" })
  }
}

export const getClientes = async (req, res) => {
  try {
    const [clientes] = await pool.query(
      "SELECT * FROM clientes"
    )
    res.json(clientes)
  } catch (error) {
    console.log(error)
  }
}

export const createCliente = async (req, res) => {
  try {
    const {nombre, telefono, direccion} = req.body
    const result = await pool.query(
      "INSERT INTO clientes (nombre, telefono, direccion) VALUES (?, ?, ?)", [nombre, telefono, direccion]
    )
    console.log(result)
    res.json({
      id: result.id,
      nombre,
      telefono,
      direccion
    })
  } catch (error) {
    return res.status(500).json({ message: "Connection error"})
  }
}

export const createPedido = async (req, res) => {
  try {
    const {tradicionales, espanoles, cliente_id, fecha_entrega} = req.body
    const result = await pool.query(
    "INSERT INTO pedidos (tradicionales, espanoles, cliente_id, fecha_entrega) VALUES (?, ?, ?, ?)", [tradicionales, espanoles, cliente_id, fecha_entrega]
  )
  console.log(result)
  res.json({
    id: result.id,
    tradicionales,
    espanoles,
    cliente_id,
    fecha_entrega
  })

  } catch (error) {
    return res.status(500).json({ message: "Connection error" })
  }
}