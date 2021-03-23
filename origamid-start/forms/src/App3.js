import React from 'react'

const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if(target.checked){
      setCores([...cores, target.value])
    } else {
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }
  
  return (
    <form>
      <label>
        <input
        type="checkbox" 
        value="Azul"
        //checked={cores}
        onChange={handleChange}
        />
        Azul
      </label>
      <br />
      <label>
        <input
        type="checkbox" 
        value="Vermelho"
        //checked={cores}
        onChange={handleChange}
        />
        Vermelho
      </label>
    </form>
  )
}

export default App
