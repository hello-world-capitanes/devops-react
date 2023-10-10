import { useState } from 'react';
import { Select } from './SelectorComponent';
import provincias from '../assets/provincias.json'


function Form({listaDatos, setListaDatos}) {

  const [form, setForm] = useState({
    Nombre: "",
    Acepta: "",
    Provincia: ""
  })

  
  const onChangeFormData = (e) => {
    e.preventDefault();
   if (e.target.name == "Checked") {
    setForm({...form, 
      [e.target.name] : e.target.checked,
    });
   }else{
    setForm({...form, 
      [e.target.name] : e.target.value,
    });
  }
   

  };

  const handleSubmit =(e)=>{
   e.preventDefault()

   setForm({...form, 
    id: Math.random()* new Date()
   })


  setListaDatos([...listaDatos, form])
   
  }

  const inputTypes = [
    {
      type: 'text',
      name: 'Nombre',
      value: form.Nombre,
      onChange: onChangeFormData
    },
    {
      type: 'checkbox',
      name: 'Acepta',
      onChange: onChangeFormData
    },
  ] 

  const createInputs = inputTypes.map((element) => {
    return (
      <div className='inputContainer'>
        <label htmlFor="#">{element.name}:</label>
        <input 
          className='input'
          type={element.type} 
          name={element.name} 
          value={element.value} 
          onChange={element.onChange}/>
      </div>
    )
  })

  return (
    <div className='form_container d-flex'>
      <h2>Formulario</h2>
      <form className='form_mainContainer' onSubmit={handleSubmit}>
        {createInputs}
        <Select data={provincias} listaDatos={form} setListaDatos={setForm}/>
        <button className='primaryButton' type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;