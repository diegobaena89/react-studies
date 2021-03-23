import React from 'react'
import './App.css'

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
]

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email:'',
    senha:'',
    cep:'',
    rua:'',
    bairro:'',
    cidade:'',
    estado:''
  });

  const [response, setResponse] = React.useState(null);
  const [textarea, setTextarea] = React.useState('');
  const [select, setSelect] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [termos, setTermos] = React.useState(false);

  function handleChange({ target }){
    const {id, value} = target;
    setForm({...form, [id]: value})
  }

  function handleSubmit(event){
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then(response => {
      setResponse(response);
    })
  }

  function handleChange({target}) {
    setProduto(target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({id, label, type}) => (
        <div key={id}>
        <label htmlFor={id}>{label}</label>
        <input 
        type={type}
        id={id}
        value={form[id]} 
        onChange={handleChange} 
        />
      </div>
      ))}
      <select 
      value={select} 
      id="produtos"
      onChange={({ target }) => setSelect(target.value)}
      >
        <option disabled value="">Selecione um Produto</option>
      <option value="notebook">Notebook</option>
      <option value="smartphone">Smartphone</option>
      <option value="tablet">Tablet</option>
      </select>
      <br />
      {select}
      <br />
      <div>
      <label>
        <input type="radio"
        onChange={handleChange}
        name="produto" 
        value="smartphone"/>
          Smartphone
      </label>
      <label>
        <input 
        type="radio" 
        onChange={handleChange}
        name="produto" 
        value="notebook"/>
          Notebook
      </label>
        </div>
      <br />
      <label htmlFor="checkbox" value={termos} checked={termos}
      onChange={({target}) => setTermos(target.checkeds)}
      >
        <input type="checkbox" />
        Aceito os termos.
      </label>
      <br />
      <textarea value={textarea}
      onChange={({target}) => setTextarea(target.value)} />
      {response && response.ok && <p>Formulário Enviado!</p>}
      <br />
    <button>Enviar</button>
    </form>
  );
};

export default App
