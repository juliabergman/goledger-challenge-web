import React from 'react';
import { Link } from 'react-router-dom';
import logobranca from '../../assets/img/logo branca.svg';
import logoRoxa from '../../assets/img/logo roxa.svg';
import './styles.css'


function Header(props) {
    return (

        <header>
            <div className="menu container-grid">

                <img className="logo" src={props.logo == 'branco' ? logobranca : logoRoxa} />
                <div className="lista">
                    <nav>
                        <ul >
                            <li><Link style={{ color: `${props.text}`, backgroundImage: `${props.fundo}` }} to="/">Home</Link></li>
                            <li><Link style={{ color: `${props.text}`, backgroundImage: `${props.fundo}` }} to="/eventos">Eventos</Link></li>
                            <li><Link style={{ color: `${props.text}`, backgroundImage: `${props.fundo}` }} to="/carros">Carros</Link></li>
                            <li><Link style={{ color: `${props.text}`, backgroundImage: `${props.fundo}` }} to="/pilotos">Pilotos</Link></li>
                            <li><Link style={{ color: `${props.text}`, backgroundImage: `${props.fundo}` }} to="/equipes">Equipes</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    );
}

export default Header;