import React from 'react';
import { Link } from 'react-router-dom';
import { FaHouseUser,FaPhoneSquareAlt,FaMapMarkerAlt,FaRegEnvelope,FaFacebookSquare,FaInstagram } from "react-icons/fa";
import { listFooter } from './styleComponents';


function Footer() {
    return (
        <>
            <div className='flex items-start justify-around border-b border-gray-400 py-2 bg-black mt-2'>
                <div className='basis-1/4'> </div>
                <div className='basis-1/2 items-center'>
                    <ul className='flex flex-col items-start justify-around min-h-[150px]'>
                    
                        <li className={listFooter}> 
                        <div className='flex flex-row content-aroud'> 
                        <div> <FaHouseUser style={{color: 'green ', fontSize: '5 rem'}}/> </div>                                           
                        <div><Link className='pl-2' to="/">INICIO</Link></div>
                        </div>
                        </li>
                        <li className={listFooter}>
                           <Link to="Productos">PRODUCTOS</Link>         
                        </li>
                        <li className={listFooter}>REDRAGON</li>
                        <li className={listFooter}>OFERTA DEL DIA</li>
                        <li className={listFooter}>Como comprar</li>
                        <li className={listFooter}>Contacto</li>
                    </ul>
                </div>
                <div className='basis-1/2 items-center'>
                    <ul className='flex flex-col items-start justify-around min-h-[150px]'>                        
                        <li className={listFooter}>
                           < div className='flex flex-row' >   
                               <div> <FaPhoneSquareAlt style={{color: 'green ', fontSize: '5 rem'}}/> </div>
                               <div className='pl-2' >Telefono</div>
                           </div>
                        </li>
                        <li className={listFooter}>
                          < div className='flex flex-row' >
                            <div> <FaMapMarkerAlt style={{color: 'green ', fontSize: '5 rem'}}/> </div>    
                            <div className='pl-2' >Dirección</div>                            
                          </div>
                        </li>
                        <li className={listFooter}>
                           < div className='flex flex-row' >
                              <div> <FaRegEnvelope style={{color: 'green ', fontSize: '5 rem'}}/> </div>    
                              <div className='pl-2' >Mail</div>                            
                           </div>   
                        </li>
                        <li className={listFooter}>
                           <div className='flex flex-row' >
                               <div> <FaFacebookSquare style={{color: 'green ', fontSize: '5 rem'}}/> </div>    
                               <div className='pl-2' >Facebook</div>                            
                           </div>      
                        </li>
                        <li className={listFooter}>
                           <div className='flex flex-row' >
                               <div> <FaInstagram style={{color: 'green ', fontSize: '5 rem'}}/> </div>    
                               <div className='pl-2' >instagram</div>                            
                           </div>      
                        </li>
                    </ul>
                </div>
            </div>
            <div className='' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50 }}>
                Copyright © 2022
            </div>
        </>
    );
}
 
export default Footer;