import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";

export default function Seats({ TitleContainer }) {
    const [seats, setSeats] = useState([])
    const { seatId } = useParams();

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${seatId}/seats`
        const promise = axios.get(URL)
        promise.then(res => setSeats(res.data))
        promise.catch(err => alert(err.message))
        console.log(seats)
    }, [])

    if (seats.seats === null || seats.seats === undefined) {
        return <TitleContainer>Carregando...</TitleContainer>
    }

    return (
        <>
            <TitleContainer>Selecione o(s) assento(s)</TitleContainer>
            <SeatsContainer>
                {seats.seats.map((s) =>
                    <SeatContainer>{s.name}</SeatContainer>
                )}
                <div>

                </div>
            </SeatsContainer>
            <FormContainer>
                <label htmlFor="name">Nome do comprador:</label>
                <input id="name" type="text" placeholder="Digite seu nome..." />
                <label htmlFor="cpf">CPF do comprador:</label>
                <input id="cpf" type="text" placeholder="Digite seu CPF..." />
            </FormContainer>
        </>
    )
}

const SeatsContainer = styled.div`
    width: 342px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
`
const SeatContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 19px 7px 0 0;
        box-sizing: border-box;
        width: 26px;
        height: 26px;
        background: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 12px;
`
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    align-items: center;
    label {
        width: 327px;
        height: 25px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #293845;
    }
    input {
        box-sizing: border-box;
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }
    input::placeholder{
        color: #AFAFAF;
        font-style: italic;
    }
`