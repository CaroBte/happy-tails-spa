import React from "react";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"
import { Navbar, Footer } from "./layout";
import { Home, Buscar, Carrito, Perfil, SobreNosotros } from "./pages"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Navbar />} >
                <Route path="/" element={<Home />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/buscar" element={<Buscar />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/nosotros" element={<SobreNosotros />} />
            </Route >

        </>
    )
)