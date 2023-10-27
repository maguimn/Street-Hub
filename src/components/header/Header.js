import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <nav className=" larguraPadrao">
                <div className="navPrincipal">
                    <div className="navImg">
                        <a href="#">
                            <img src="/images/logo-preto.png" alt="Logo Street Hub" />
                        </a>
                    </div>
                    <div className="navSearch">
                        <input type="search" placeholder="O que você procura?"></input>
                    </div>
                    <div className="navButtons ">

                        <button>
                            <div className="buttonImg">
                                <img src="/images/person-circle.svg" alt="icone de perfil " />
                            </div>
                            <p> Entrar </p>

                        </button>

                    </div>


                </div>
                <div className="navLinks">
                    <ul>
                        <li> <a> Home </a> </li>
                        <li> <a> Tênis </a> </li>
                        <li> <a> Roupas </a> </li>
                        <li> <a> Acessórios </a> </li>



                    </ul>
                </div>


            </nav>
        </header>
    )
}
export default Header