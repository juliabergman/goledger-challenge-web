import React from "react";
import Header from "../../components/Header";
import './styles.css'

function Carros() {
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
                    <article className="card">
                        <h2>Modelo</h2>
                        <p>Piloto</p>
                    </article>
                </section>
            </div>
        </div>
    );
}

export default Carros;