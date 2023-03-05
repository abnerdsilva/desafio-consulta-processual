import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='container-fluid' style={{backgroundColor: '#c7c7c7', padding: '30px'}}>
        <h3 style={{textAlign:'left'}}>Buscar</h3>

        Selecione um tribunal para lsitar os processos ou buscar pelo número unificado.
        <br />
        <br />
        
        <select name="select" style={{width: '15rem', height: '30px'}} placeholder='Tribunal'>
          <option value="valor1" selected>Tribunal</option>
          <option value="valor2">Valor 2</option>
          <option value="valor3">Valor 3</option>
        </select>

        <input type="text" placeholder='Numero de processo' style={{width:'15rem', height: '30px', marginLeft: '20px', marginRight: '20px'}} />

        <button className='btn btn-secondary'>Buscar</button>
      </div>
    </div>
  )
}

export default App
