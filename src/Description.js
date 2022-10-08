import styled from "styled-components"
import colors from "./colors"

export default function Description({ SeatContainer }) {
    const { GREEN, GREEN_BORDER, GREY, GREY_BORDER, YELLOW, YELLOW_BORDER } = colors

    return(
        <DescriptionContainer>
                    <div>
                        <SeatContainer color={[GREEN, GREEN_BORDER]} />
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <SeatContainer color={[GREY, GREY_BORDER]} />
                        <p>Disponível</p>
                    </div>
                    <div>
                        <SeatContainer color={[YELLOW, YELLOW_BORDER]} />
                        <p>Indisponível</p>
                    </div>
                </DescriptionContainer>
    )
}

const DescriptionContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 382px;
    margin: 0 auto;
    font-family: 'Roboto';
    font-style: normal;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`