import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Eventos from './pages/Eventos';
import Carros from './pages/Carros';
import Pilotos from './pages/Pilotos'
import Equipes from './pages/Equipes';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/eventos"  element={<Eventos/>}/>
                <Route path="/carros"  element={<Carros/>} />
                <Route path="/pilotos" element={<Pilotos/>}  />
                <Route path="/equipes" element={<Equipes/>} />
            </Routes>
        </BrowserRouter>
    )
}



export default AppRoutes;