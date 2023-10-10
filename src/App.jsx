import { useState, useContext } from 'react'
import Modal from './components/Modal'
import './App.css'
import Form from './components/Form'
import defaultUsers from './assets/DefaultsUsers.json'
import { Select } from './components/SelectorComponent'
import { ThemeContext} from './contexts/ThemeContext'

import Lista from './components/Lista/Lista'



function App() {

  const {theme, changeTheme} = useContext(ThemeContext)
  const [show, setShow] = useState(false)
  const [listaDatos, setListaDatos] = useState(defaultUsers);
  const [id, setId] = useState();

  const handleModalShow = (boolean, id) => {
    setShow((prevShow) => prevShow = boolean)
    setId(id)
  }
  
 
  return (
    <div className={theme}>
      <button onClick={changeTheme} className="bnt_theme">Cambiar tema</button>
      <div className={"d-flex"}>
        <Form listaDatos={listaDatos} setListaDatos={setListaDatos}></Form>
        {show ? 
        <Modal listaDatos={listaDatos} id={id} handleModalShow={handleModalShow} /> :
        <Lista 
            listaDatos={listaDatos} 
            setListaDatos={setListaDatos}
            handleModalShow={handleModalShow}>
        </Lista>
        }
      </div>
    </div>
    
      

  )
}

export default App
