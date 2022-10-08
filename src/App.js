import Header from "./Header"
import Movies from "./Movies"
import Session from "./Session"
import GlobalStyle from "./GlobalStyle"
import Seats from "./Seats"
import Success from "./Success"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Movies TitleContainer={TitleContainer}/>}/>
                <Route path="/sessoes/:movieId" element={<Session TitleContainer={TitleContainer}/>}/>
                <Route path="/assentos/:seatId" element={<Seats TitleContainer={TitleContainer}/>} />
                <Route path="/sucesso" element={<Success />} />
            </Routes>
        </BrowserRouter>
    )
}

const TitleContainer = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    width: 374px;
    height: 40px;
    margin: 100px auto 0 auto;
    color: #293845;
`