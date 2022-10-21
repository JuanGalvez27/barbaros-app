import axios from "axios"

export const getProdutos = async () => 
  await axios.get("http://localhost:4000/productos")
