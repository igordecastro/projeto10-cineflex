import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styled from "styled-components"

export default function Session({ TitleContainer, movies }) {
    const [session, setSession] = useState(null)
    const { movieId } = useParams()
    console.log(movies)

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
        <>
            <SessionContainer>
                <TitleContainer>Selecione o horário</TitleContainer>
                {
                    session !== null
                        ?
                        session.days.map((d, index) =>
                            <div key={index} >
                                <p>{`${d.weekday} - ${d.date}`}</p>
                                {d.showtimes.map((s, index) =>
                                    <Link key={index} to={`/assentos/${s.id}`}>
                                        <button>{s.name}</button>
                                    </Link>)}
                            </div>)
                        :
                        ""
                }
            </SessionContainer>
            <HeaderContainer>
                <div>
                    <img src={movies[movieId -1].posterURL} />
                </div>
                <h2>{movies[movieId - 1].title}</h2>
            </HeaderContainer>
        </>)
}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
        margin-left: 24px;
    }
    div:last-child {
        margin-bottom: 120px;
    }
    button {
        width: 83px;
        height: 43px;
        left: 23px;
        top: 227px;
        background: #E8833A;
        border-radius: 3px;
        margin-right: 9px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.02em;
        color: #FFFFFF;
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
    div{
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
        width: 169px;
        height: 40px;
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