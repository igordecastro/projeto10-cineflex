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
        console.log(seatToBeSelected)
        console.log(selectedSeats)
        if (!selectedSeats.includes(seatToBeSelected) && seatToBeSelected.isAvailable) {
            setSelectedSeats([...selectedSeats, seatToBeSelected])
        } else if (selectedSeats.includes(seatToBeSelected)){
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
                    >
                        {s.name > 9 ? s.name : `0${s.name}`}
                    </SeatContainer>
                )}
            </SeatsContainer>
            <Description SeatContainer={SeatContainer} />
            <Form selectedSeats={selectedSeats} form={form} setForm={setForm}/>
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