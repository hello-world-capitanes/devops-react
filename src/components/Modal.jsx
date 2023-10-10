import React, { useEffect, useState } from 'react'
import Title from './Title'

const Modal = ({
    handleModalShow,
    listaDatos,
    id
}) => {

    const [showElement, setShowElement] = useState([])

    useEffect(() => {
        listaDatos.filter((element) => {
            if(element.id === id) {
                setShowElement([element])
            }
        })
    }, [])
    
    const selectedElement = showElement.map((item) => {
        return (
            <div className='modalInfo d-flex' key={item.id}>
                <p>{item.Nombre}</p>
                <p>{item.Acepta}</p>
                <p>{item.Provincia}</p>
            </div>
        )
    })

  return (
    <div className='container d-flex'>
        <div className='d-flex modal_container'>
            <Title title={'Modal'}/>
            {selectedElement}
            <button className='primaryButton' onClick={() => handleModalShow(false)}>Close</button>
        </div>
    </div>
  )
}

export default Modal