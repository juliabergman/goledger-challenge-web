import React, { useState } from "react";
import Header from "../../components/Header";
import './styles.css';
import Modal from '../../components/Modal';





function Eventos() {
    const[visibilidadeModal, setvisibilidadeModal ] = useState(false)
    return (
        <div>
            <Header />
            <div className="container-grid">
                <div className="pesquisa-adicionar">
                    <form>
                        <input className="pesquisa" type="text" placeholder="Procure aqui :)" />
                    </form>
                    <button className="adicionar-btn">+</button>
                </div>
                <h1>Eventos</h1>
                <section className="lista-cards container-grid">
                    <article href="abrirModal" className="card">
                        <span>31/07</span>
                        <h2>Nome</h2>
                        <p>Premiação: <span>1.000000</span></p>
                        <p>Equipe vencedora: equipe</p>
                    </article>
                </section>
            </div>           
                <Modal/>
        </div>

    );
}

export default Eventos;