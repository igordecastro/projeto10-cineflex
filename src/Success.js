import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Success({ seats, form, selectedSeats }) {
    const navigate = useNavigate();
    return (
        <>
            <SuccessTitleContainer>
                <p>Pedido feito com sucesso!</p>
            </SuccessTitleContainer>
            <InfosContainer>
                <h1>FIlme e sessão</h1>
                <p>{seats.movie.title}</p>
                <p>{`${seats.day.date} - ${seats.name}`}</p>
                <h1>Ingressos</h1>
                    {selectedSeats.map((s) => 
                    <p key={s.name}>Assento {s.name}</p>)}
                <h1>Comprador</h1>
                <p>Nome: {form.name}</p>
                <p>CPF: {form.cpf}</p>
                <ButtonHomeContainer onClick={() => navigate("/")}>Voltar para home</ButtonHomeContainer>
            </InfosContainer>
        </>)
}
const SuccessTitleContainer = styled.div`
    width: 190px;
    display: flex;
    font-family: 'Roboto';
    font-style: normal;
    display: flex;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #247A6B;
    margin: 80px auto 0 auto;
`
const InfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        margin-top: 25px;
        width: 374px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
    p {
    width: 374px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
    }
`
const ButtonHomeContainer = styled.button`
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
`