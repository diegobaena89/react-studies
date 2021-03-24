import React from 'react'
import Filho from './componentes/Filho'
import Pai from './componentes/Pai'

const App = () => {
  return (
    <div>
      <Pai nome="Paulo" sobrenome="Silva">
        {/* Como passar os componentes filhos pelo componente main */}
        <Filho nome="Pedro"/>
        <Filho nome="Pedro"/>
        <Filho nome="Pedro"/>

      </Pai>
    </div>
  )
}

export default App