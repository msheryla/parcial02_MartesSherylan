import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";

import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

import { ConciertoAdmin } from "../../componentes/conciertos/ConciertoAdmin";
import { ConciertoCrear } from "../../componentes/conciertos/ConciertoCrear";
import { ConciertoListar } from "../../componentes/conciertos/ConciertoListar";


export const Ruteo = () => {
    return(
        <Routes>
            <Route path="/" element={<Inicio/>}/>

            <Route path="/conadm" element={<ConciertoAdmin />}/>
            <Route path="/ConciertoCrear" element={<ConciertoCrear />}/>
            <Route path="/conlis" element={<ConciertoListar />}/>



            

            <Route path="*" element={<NoEncontrado />}/>
        </Routes>
    )
};
