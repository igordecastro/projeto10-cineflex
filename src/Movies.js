import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

export default function Movies() {
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        const promise = axios.get(URL)
        promise.then((res) => setMovies(res.data))
        
    }, [])

    if(movies === null) {
        return "Carregando..."
    }
    
    return (
        <MoviesContainer>
            {movies.map((m) =>
                <Movie key={m.id}>
                    <div>
                        <img src={m.posterURL} alt="Movie Poster"/>
                    </div>
                </Movie>)}
        </MoviesContainer>
    )
}

const MoviesContainer = styled.div`
    width: 420px;
    height: 250px;
    display: flex;
    flex-wrap: wrap;
    margin: 90px auto;
`
const Movie = styled.div`
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