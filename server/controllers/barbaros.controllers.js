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

export const getCliente = async (req, res) => {
  try {
    const id = Number(req.params.id)
    const [result] = await pool.query(
      "SELECT * FROM clientes WHERE id_cliente = ?", [id]
    )
    res.json(result)
  } catch (error) {
    console.error(error)
    req.status(500).json({ message: "Connection error"})
  }
}

export const getPedido = async(req, res) => {
  try{
    const id = Number(req.params.id)
    const [result] = await pool.query(
      "SELECT * FROM pedidos INNER JOIN clientes ON pedidos.id_cliente = clientes.id_cliente WHERE id_pedido = ?", [id]
    )
    res.json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Connection error"})
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
    const {tradicionales, espanoles, id_cliente, fecha_entrega} = req.body
    const [result] = await pool.query(
    "INSERT INTO pedidos (tradicionales, espanoles, id_cliente, fecha_entrega) VALUES (?, ?, ?, ?)", [tradicionales, espanoles, id_cliente, fecha_entrega]
  )
  console.log(result)
  res.json({
    id: result.id,
    tradicionales,
    espanoles,
    id_cliente,
    fecha_entrega
  })

  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Connection error" })
  }
}

export const deletePedido = async (req, res) => {
  try{
    const id = Number(req.params.id)
    const [result] = await pool.query(
      "DELETE FROM pedidos WHERE id_pedido = ?", [id]
    )
    if(result.affectedRows === 0){
      res.status(404).json({ message: "Pedido not found" })
    }
    else{
      res.status(204).json({ message: "Pedido deleted"})
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Connection error"})
  }
}

export const deleteCliente = async (req, res) => {
  try{
    const id = Number(req.params.id)
    const [result] = await pool.query(
      "DELETE FROM clientes WHERE id_cliente = ?", [id]
    )
    if(result.affectedRows === 0){
      res.status(404).json({ message: "Cliente not found" })
    } else {
      res.status(204).json({ message: "Cliente deleted"})
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Connection error" })
  }
}

