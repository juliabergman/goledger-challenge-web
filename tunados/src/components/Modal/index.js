import React from 'react';
import {Link} from 'react-router-dom';        
import Lixeira from '../../assets/img/lixeira.svg';
import Sair from '../../assets/img/sair.svg';
import Editar from '../../assets/img/editar.svg';
import Salvar from '../../assets/img/salvar.svg';

import './styles.css'


function Modal(){
    return(
        <form class="modal">
            <div class="apagar-fechar">
                <button class="btn-modal">
                <img src={Lixeira}/>
                </button>
                <button class="btn-modal">
                <img src={Sair}/>
                </button>
            </div>

            <div class="campo-modal">
                <label for="data-evento">Data</label>
                <input id="data-evento" class="input_modal" type="text"/>
            </div>

            <div class="campo-modal">
                <label for="nome-evento">Nome</label>
                <input id="nome-evento" class="input_modal" type="text"/>
            </div>

            <div class="campo-modal">
                <label for="premiacao-evento">Premiação</label>
                <input id="premiacao-evento" class="input_modal" type="text"/>
            </div>

            <div class="campo-modal">
                <label for="vencedor-evento">Equipe vencedora</label>
                <input id="vencedor-evento" class="input_modal" type="text"/>
            </div>

            <div class="editar-salvar">
                <button class="btn-modal">
                    <img src={Editar}/>
                </button>
                <button class="btn-modal">
                <img src={Salvar}/>
                </button>
            </div>

        </form>
        
        
    );
}

export default Modal;