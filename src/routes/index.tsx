import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Megasena from "../pages/Megasena";
import Quina from "../pages/Quina";
import Menu from "../components/Menu";

export default function AppRouter () {
    
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                    <Route path="/" index element={<Navigate to='/megasena' replace />} />
                    <Route path='/megasena' element={<Megasena />} />
                    <Route path='/quina' element={<Quina />} />
            </Routes>
        </BrowserRouter>
    )
}