import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import './styles.css';
import Lixeira from '../../assets/img/lixeira.svg';
import Sair from '../../assets/img/sair.svg';
import Editar from '../../assets/img/editar.svg';
import Salvar from '../../assets/img/salvar.svg';
import api from '../../services/api';

function Eventos() {

    //api
    const [nome, setNome] = useState('')
    const [listaEventos, setListaeventos] = useState ([])


    
    useEffect(() => {
        // carrega eventos por método post
        async function carregarEventos (){
            try{
                const response= await api.post("/query/search", {
                    query:{
                        selector:{
                            "@assetType": "event"
                        }
                    }
                })

                console.log(response.data.result)
                setListaeventos(response.data.result)
            } catch(erro){
                console.log(erro)
            }
        }
        carregarEventos()

        for( let i = 0; i < listaEventos; i++){
            let evento = listaEventos[i]
            // listaEventos[i].winner.nome = carregarVencedor(evento.winner['@key'])
            // setListaeventos(...listaEventos, listaEventos[i].winner.nome = carregarVencedor(evento.winner['@key']) )
            setListaeventos(...listaEventos, listaEventos[i].name = carregarVencedor(evento.winner['@key']) )
        }
    }, [] )


// carrega vencedor
    async function carregarVencedor(key){
        try{
            const response= await api.post("/query/search", {
                query:{
                    selector:{
                        "@assetType": "team",
                        "@key": key
                    }
                }
            })

            return response.data.result[0].name
        } catch(erro){
            console.log(erro)
        }
    }

    //POST adicionar eventos
    function cadastrarEventos(){
        api.post("/invoke/createAsset")
    }
    //  PUT editar eventos
    function atualizarEventos(){
        api.put("/invoke/updateAsset")
    }
    // DELETE deletar eventos
    function deletarEventos(){
        api.delete("/invoke/deleteAsset")
    }

    // modal abrir
    const abreModal = () => {
        document.getElementById('modal').classList.add('mostrar')
    }

    const fecharModal = () => {
        document.getElementById('modal').classList.remove('mostrar')
    }

    // useEffect(carregarEventos, [])

    

    return (
    
        <div>
            <Header/>
            <div className="container-grid">
                <div className="pesquisa-adicionar">
                    <form>
                        <input className="pesquisa" type="text" placeholder="Procure aqui :)" />
                    </form>
                    
                </div>
                <div className="btn-e-titulo">
                <button onClick={abreModal}  className="adicionar-btn">+</button>
                <h1>Eventos</h1>
                </div>
                    <section className="lista-cards container-grid">
                        {
                            
                            listaEventos.map(evento => (
                                <article key={evento['@key']} href="abrirModal" className="card">
                                    <span>{new Date(evento.date).toLocaleDateString()}</span> 
                                    <h2 >{evento.name}</h2>
                                    <p>Premiação: <span>{evento.prize}</span></p>
                                    <p>Equipe vencedora: {evento.winner.nome}</p>
                                    <span className="editarModal" onClick={abreModal} >Editar</span>
                                </article>
                            ))
                        }
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
                        <label htmlFor="data-evento">Data</label>
                        <input id="data-evento" className="input_modal" type="text" />
                    </div>

                    <div className="campo-modal">
                        <label htmlFor="nome-evento">Nome</label>
                        <input id="nome-evento" className="input_modal" type="text" />
                    </div>

                    <div className="campo-modal">
                        <label htmlFor="premiacao-evento">Premiação</label>
                        <input id="premiacao-evento" className="input_modal" type="text" />
                    </div>

                    <div className="campo-modal">
                        <label htmlFor="vencedor-evento">Equipe vencedora</label>
                        <input id="vencedor-evento" className="input_modal" type="text" />
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

export default Eventos;