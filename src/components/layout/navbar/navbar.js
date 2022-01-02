import React, {useState, useEffect} from 'react'
import style from './navbar.module.css'
import Foto from  '../../../images/image-avatar.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import FotoCarrinho from '../../../images/image-product-1-thumbnail.jpg'
import Lixeira from '../../icons/icon-delete.svg'

function Navbar() {

    const [modal, setModal] = useState(false)
    const [carrinho, setCarrinho] = useState([])

     
        useEffect(() => {
            fetch('http://localhost:4000/carrinho', {
                method: "GET",
                headers: {"Content-Type": "application-/json"}
            })
            .then((response) => response.json())
            .then((data) => setCarrinho(data))
        },[])

   
       
    return (
        <div className={style.container}>
            <div className={style.parteUm}>
                <h1>
                    Sneakers
                </h1>

                <ul className={style.lista}>
                   <li>Collections</li>
                   <li>Men</li>
                   <li>Woman</li>
                   <li>About</li>
                   <li>Contact</li>
                </ul>
            </div>

            <div className={style.parteDois}>
                <div>
                   <AiOutlineShoppingCart size={35} onClick={() => setModal(true)}/>
                </div>

                <img className={style.foto} src={Foto} alt="Ricardo" />
            </div>

            {modal && 
            <div className={style.containerModal} onClick={() => setModal(false)}>
            <modal className={style.modal}>
                <div className={style.modalTitle}>
                Cart
                </div>
                <div className={style.modalBody}>
                   {carrinho ? carrinho.map((item, index) => {
                       return <div className={style.finalizarCarrinho}>
                           <img src={FotoCarrinho} alt="Produto" className={style.fotoProduto}/>
                       <div>
                           <div>Fall limited Edition Sneakers</div>
                           <div>$ 125,00 X {item.quantidade} <div className={style.resultadoFinal}>{item.quantidade * 125}</div></div> 
                       </div>

                        <div>
                            <img src={Lixeira} alt="Apagar" />
                        </div>
                       </div>
                   }) : null}
                   
                     <button className={style.checkout}>Checkout</button>
                </div>
            </modal>
            </div>
        }
        </div>
    )
}

export default Navbar
