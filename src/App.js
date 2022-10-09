import Header from "./Header"
import Movies from "./Movies"
import Session from "./Session"
import GlobalStyle from "./GlobalStyle"
import Seats from "./Seats"
import Success from "./Success"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react"

export default function App() {
    const [movies, setMovies] = useState(null)
    const [seats, setSeats] = useState([])
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [form, setForm] = useState({
        name: "",
        cpf: ""
    })

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Movies movies={movies} setMovies={setMovies} TitleContainer={TitleContainer} />} />
                <Route path="/sessoes/:movieId" element={<Session movies={movies} TitleContainer={TitleContainer} />} />
                <Route path="/assentos/:seatId" element={
                    <Seats
                        TitleContainer={TitleContainer}
                        seats={seats}
                        setSeats={setSeats}
                        selectedSeats={selectedSeats}
                        setSelectedSeats={setSelectedSeats}
                        form={form}
                        setForm={setForm}
                    />}
                />
                <Route path="/sucesso" element={<Success seats={seats} selectedSeats={selectedSeats} form={form}/>} />
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