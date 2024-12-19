import './App.css'
import React, {useRef, useState} from 'react';

import { IMaskInput } from 'react-imask';

function App() {
  const [form, setForm] = useState("")

  function handleChange(event) {
    console.log('event 1', event.target.name)
    console.log('event 2', event.target.value)
    setForm({...form, [event.target.name]: event.target.value})
    console.log("form", form.altura)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if ((!form.altura && !form.peso) || !form.peso || !form.altura ) {
      alert("Os valores estão invalidos. Digite corretamento o valor")
    } else {
      const imc = form.peso / (form.altura * form.altura)
      console.log("imc", imc)
      alert("O seu IMC é" + imc)
    }
  }


return (
    <form onSubmit={handleSubmit}>
  <div className="container">
    <div className="form">
      <div className="container-input-label">
        <div className="children-container-input-label">
          <label>Digite sua Altura</label>
          <IMaskInput placeholder='Digite sua Altura' imask={Number} radix="."  onChange={handleChange} name='altura' />
        </div>

        <div className="children-container-input-label">
          <label>Digite seu Peso</label>
          <IMaskInput placeholder='Digite seu Peso' mask={Number} radix="."  onChange={handleChange} name='peso' />
        </div>

      </div>
      <div className='container-button'>
        <button>CALCULAR IMC</button>
      </div>
    </div>
  </div>
  </form>
  )
}

export default App
