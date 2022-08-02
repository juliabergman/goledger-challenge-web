import React from 'react';
import {Link} from 'react-router-dom';        
import logo from '../../assets/img/logo roxa.svg';
import './styles.css'


function Header(){
    return(
        
        <header>
            <div className="menu container-grid">
                
                <img className="logo" src={logo}/>
                <div className="lista">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/eventos">Eventos</Link></li>
                            <li><Link to="/carros">Carros</Link></li>
                            <li><Link to="/pilotos">Pilotos</Link></li>
                            <li><Link to="/equipes">Equipes</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        
    );
}

export default Header;