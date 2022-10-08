import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styled from "styled-components"

export default function Session({ TitleContainer }) {
    const [session, setSession] = useState(null)
    const { movieId } = useParams()

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`
        const promise = axios.get(URL)
        promise.then(res => setSession(res.data))
        promise.catch(err => console.log(err.message))
    }, [])
    

    if (session === null || session === undefined) {
        return <TitleContainer>Carregando...</TitleContainer>
    }

    return (
        <SessionContainer>
            <TitleContainer>Selecione o horário</TitleContainer>
            {
                session !== null
                    ?
                    session.days.map((d, index) =>
                        <div key = {index} >
                            <p>{`${d.weekday} - ${d.date}`}</p>
                            {d.showtimes.map((s, index) =>
                                <Link key = {index} to={`/assentos/${s.id}`}>
                                    <button>{s.name}</button>
                                </Link>)}
                        </div>)
                    :
                    ""
            }

        </SessionContainer>
    )
}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
        margin-left: 24px;
    }
    
    button {
        width: 83px;
        height: 43px;
        left: 23px;
        top: 227px;
        background: #E8833A;
        border-radius: 3px;
        margin-right: 9px;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        margin: 22px 0;
        color: #293845;
    }
`