import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Movies({ TitleContainer }) {
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        const promise = axios.get(URL)
        promise.then((res) => setMovies(res.data))

    }, [])

    if (movies === null) {
        return "Carregando..."
    }

    return (<>
        <TitleContainer>Selecione o Filme</TitleContainer>
        <MoviesContainer>
            {movies.map((m) =>
            <Link to={`sessoes/${m.id}`} key={m.id}>
                <MovieContainer >
                    <div>
                        <img src={m.posterURL} alt="Movie Poster" />
                    </div>
                </MovieContainer>
            </Link>)}
        </MoviesContainer>
    </>
    )
}

const MoviesContainer = styled.div`
    width: 420px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
`
const MovieContainer = styled.div`
    div {
        background: #FFFFFF;
        width: 145px;
        height: 209px;
        margin: 11px 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 129px;
            height: 193px;
        }
    }
`