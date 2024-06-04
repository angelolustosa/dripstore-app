//import './App.css'
import { useEffect, useState } from 'react'
import DataTable from './components/table/DataTable.jsx'
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);

  const getProdutos = async () => {
    const URL_PRODUTOS = 'https://dc-store-api-ka0t.onrender.com/api/produtos'
    
    try {
      const response = await axios.get(URL_PRODUTOS)
      //console.log(response.data)
      setData(response.data)
    } catch (error) {
      console.log(`Erro ao buscar o produto: ${error}`);
    }
  }
  
  useEffect(() => {
    getProdutos()
  }, [])

  return (
    <>
      <DataTable data={data} />
    </>
  )
}

export default App
