import React from 'react'
import ModeloTarjeta from '../Main/ModeloTarjeta'
import { Barrita } from './style'

const Porductos = () => {
  return (
    <div className='lg:pt-40 ml-6 lg:flex md:flex md:grid-cols-1'>
        <div className="" >
            <ul >
               <li className={Barrita} >Componentes PC</li>
               <li className={Barrita} >Compuestos Tecnicos</li>
               <li className={Barrita} >Conectividad</li>
               <li className={Barrita} >Marcos</li>
               <li className={Barrita} >Modding</li>
               <li className={Barrita} >Monitores</li>
               <li className={Barrita} >OFERTA DEL DIA</li>
               <li className={Barrita} >OUTLET</li>
               <li className={Barrita} >Perifericos</li>
               <li className={Barrita} >PORDUCTOS DESTACADOS</li>
            </ul>
        </div>
        <div className='flex justify-evenly flex-wrap'>
          <ModeloTarjeta/>
          <ModeloTarjeta/>
          <ModeloTarjeta/>
          <ModeloTarjeta/>
        </div>
    </div>
  )
}

export default Porductos