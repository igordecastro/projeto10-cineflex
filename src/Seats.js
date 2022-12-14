import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import colors from "./colors"
import Description from "./Description"
import Form from "./Form"

export default function Seats({ TitleContainer, seats, setSeats, selectedSeats, setSelectedSeats, form, setForm }) {
    const { seatId } = useParams()
    const { GREY, GREY_BORDER, GREEN, GREEN_BORDER, YELLOW, YELLOW_BORDER } = colors

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${seatId}/seats`
        const promise = axios.get(URL)
        promise.then(res => setSeats(res.data))
        promise.catch(err => alert(err.message))

    }, [])

    function checkAvailability(obj) {
        if (obj.isAvailable && selectedSeats.includes(obj)) {
            return [GREEN, GREEN_BORDER]
        } else if (obj.isAvailable) {
            return [GREY, GREY_BORDER]
        } else return [YELLOW, YELLOW_BORDER]
    }

    function selectSeat(seatToBeSelected) {
        if (!selectedSeats.includes(seatToBeSelected) && seatToBeSelected.isAvailable) {
            setSelectedSeats([...selectedSeats, seatToBeSelected])
        } else if (selectedSeats.includes(seatToBeSelected)) {
            const newSeats = selectedSeats.filter(seat => seat !== seatToBeSelected)
            setSelectedSeats(newSeats)
        } else alert("Esse assento não está disponível")
    }

    if (seats.seats === null || seats.seats === undefined) {
        return <TitleContainer>Carregando...</TitleContainer>
    }

    return (
        <>
            <TitleContainer>Selecione o(s) assento(s)</TitleContainer>
            <SeatsContainer>
                {seats.seats.map((s, index) =>
                    <SeatContainer
                        key={index}
                        color={checkAvailability(s)}
                        onClick={() => selectSeat(s)}
                        data-identifier="seat"
                    >
                        {s.name > 9 ? s.name : `0${s.name}`}
                    </SeatContainer>
                )}
            </SeatsContainer>
            <Description SeatContainer={SeatContainer} />
            <Form selectedSeats={selectedSeats} form={form} setForm={setForm} />
            <HeaderContainer>
                <span>
                    <img src={seats.movie.posterURL} alt="filme selecionado"/>
                </span>
                <div data-identifier="movie-and-session-infos-preview">
                    <h2>{seats.movie.title}</h2>
                    <h2>{`${seats.day.weekday} - ${seats.name}`}</h2>
                </div>
            </HeaderContainer>
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
        background: ${props => props.color[0]};
        border: 1px solid ${props => props.color[1]};
        border-radius: 12px;
        cursor: pointer;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #000000;
`
const HeaderContainer = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 117px;
    bottom: 0;
    left: 0;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    
    span{
        margin-left: 10px;
        width: 64px;
        height: 89px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
    }
    img{
        width: 48px;
        height: 72px;
    }
    h2{
        margin-left: 14px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: #293845;
    }
`