import React from "react";
import Header from "../../components/Header";
import './styles.css'

function Home() {
    return (
        <div>
            <div className="conteudo_home">
                <Header logo='branco' text="#fff" fundo="linear-gradient(rgb(248, 248, 248), rgb(255, 255, 255))" />
                <div className="apresentacao_menu container-grid">
                    <h1>O melhor site do universo para amantes de corrida.</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;