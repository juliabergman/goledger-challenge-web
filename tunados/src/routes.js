import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                {/* <Route path="/eventos"  element={<Eventos/>}/>
                <Route path="/carros"  element={<Carros/>} />
                <Route path="/pilotos" element={<Pilotos/>}  />
                <Route path="/equipe" element={<Equipe/>} */}
            </Routes>
        </BrowserRouter>
    )
}



export default AppRoutes;