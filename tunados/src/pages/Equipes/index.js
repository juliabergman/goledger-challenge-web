import React from "react";
import Header from "../../components/Header";
import './styles.css';
import Lixeira from '../../assets/img/lixeira.svg';
import Sair from '../../assets/img/sair.svg';
import Editar from '../../assets/img/editar.svg';
import Salvar from '../../assets/img/salvar.svg';

function Equipes() {
    const abreModal = () => {
        document.getElementById('modal').classList.add('mostrar')
    }

    const fecharModal = () => {
        document.getElementById('modal').classList.remove('mostrar')
    }
    return (
        <div>
            <Header />
            <div className="container-grid">
                <div className="pesquisa-adicionar">
                    <form>
                        <input className="pesquisa" type="text" placeholder="Procure aqui :)" />
                    </form>
                </div>
                <div className="btn-e-titulo">
                <button onClick={abreModal}  className="adicionar-btn">+</button>
                <h1>Equipes</h1>
                </div>
                <section className="lista-cards container-grid">
                    <article className="card">
                        <h2>Nome</h2>
                        <span className="editarModal" onClick={abreModal} >Editar</span>
                    </article>
                </section>
            </div>

            <div id="modal" className="modal-container">
                <form className="modal">
                    <div className="apagar-fechar">
                        <button href="#fechar" title="Fechar" className="btn-modal fechar">
                            <img src={Lixeira} />
                        </button>
                        <button className="btn-modal">
                            <img onClick={() => fecharModal()} src={Sair} />
                        </button>
                    </div>

                    <div className="campo-modal">
                        <label for="nome-equipes">Nome</label>
                        <input id="nome-equipes" className="input_modal" type="text" />
                    </div>
                    <div className="editar-salvar">
                        <button className="btn-modal">
                            <img src={Editar} />
                        </button>
                        <button className="btn-modal">
                            <img src={Salvar} />
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Equipes;