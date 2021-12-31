import React from 'react'
import style from './navbar.module.css'
import Foto from  '../../../images/image-avatar.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'

function Navbar() {
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
                   <AiOutlineShoppingCart size={35}/>
                </div>

                <img className={style.foto} src={Foto} alt="Ricardo" />
            </div>
        </div>
    )
}

export default Navbar
