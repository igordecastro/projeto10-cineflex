import axios from "axios"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Form({ selectedSeats, form, setForm }) {
    const navigate = useNavigate();
    const selectedSeatsIds = [];

    selectedSeats.forEach(e => {
        selectedSeatsIds.push(e.id)
    });
    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function makeReservation(e) {
        e.preventDefault()

        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
        const promise = axios.post(URL, {
            ids: selectedSeatsIds,
            name: form.name,
            cpf: form.cpf
        })
        promise.then(() => navigate("/sucesso"))
    }
    return (
        <FormContainer onSubmit={makeReservation}>
            <label htmlFor="name">Nome do comprador:</label>
            <input onChange={handleForm} value={form.name} name="name" type="text" placeholder="Digite seu nome..." />
            <label htmlFor="cpf">CPF do comprador:</label>
            <input onChange={handleForm} value={form.cpf} name="cpf" type="text" placeholder="Digite seu CPF..." />
            <ButtonReservationContainer>
                <button>Reservar assento(s)</button>
            </ButtonReservationContainer>
        </FormContainer>
    )
}

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin: 30px auto 130px auto;
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
        margin-top: 7px;
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
const ButtonReservationContainer = styled.div`
    display: flex;
    justify-content: center;
    button {
        cursor: pointer;
        margin-top: 20px;
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
        color: #FFFFFF;
    }
`