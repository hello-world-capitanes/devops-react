import { useState } from "react"
import {BsFillTrashFill} from 'react-icons/bs'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'


function Lista ({listaDatos, setListaDatos, handleModalShow}){

    function borrarElemento(nombre){
        setListaDatos((list)=>{
            const nuevaLista = list.filter((item)=> item.Nombre!==nombre)
            return nuevaLista
        })
    }

    function subir(index){
        let listaAux= [...listaDatos]
        const elemAnterior = listaAux[index-1]
        listaAux[index-1]=listaAux[index]
        listaAux[index]=elemAnterior
        setListaDatos(listaAux)
    }
    function bajar(index){
        let listaAux= [...listaDatos]
        const elemPosterior = listaAux[index+1]
        listaAux[index+1]=listaAux[index]
        listaAux[index]=elemPosterior
        setListaDatos(listaAux)
    }
    
    return (
    <div className="listContainer d-flex">
        <h2>Users List</h2>
        <ul>
        {listaDatos.map((item, index) => (
            <li className="listElement" key={item.id} onDoubleClick={() => handleModalShow(true, item.id)}>
                <strong>Nombre:</strong> {item.Nombre}, <strong>Acepta:</strong> {item.Acepta ? 'Sí' : 'No'}, <strong>Provincia:</strong> {item.Provincia}
                <div className="d-flex buttonContainer">
                    <button 
                        className="buttons red" 
                        onClick={() => borrarElemento(item.Nombre)}>
                            <BsFillTrashFill className="buttonIcon"/>
                    </button>
                    <button 
                        className="buttons blue"
                        disabled={(0===index) ? true : false} 
                        onClick={() => subir(index)}>
                            <BsFillArrowUpCircleFill className="buttonIcon"/>
                    </button>
                    <button 
                        className="buttons green" 
                        disabled={(listaDatos.length-1===index) ? true : false} 
                        onClick={() => bajar(index)}>
                            <BsFillArrowDownCircleFill className="buttonIcon"/>
                    </button>
                </div>
            </li>
        ))}
        </ul>
    </div>
    );

}

export default Lista