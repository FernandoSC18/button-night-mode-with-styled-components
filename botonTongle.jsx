import React, { useState } from "react";
import styled, {keyframes} from "styled-components";

export default function BotonToggle() {

    const [mode, setMode] = useState(false)

    const handleMode = () => {
        setMode(!mode)
    } 

    return <div>
        <ButtonNight onClick={handleMode} mode={mode}>
             
        </ButtonNight>  

        <ParrafoMode mode={mode}>
            {`Soy un texto estando en el modo ${mode ? 'noche' : 'de dia'}`}
        </ParrafoMode>
    </div>

} 

const ParrafoMode = styled.p`   
    font-weight: bold;
    padding: 15px;
    background: ${({mode}) => mode ? '#000' : '#FFF'};
    color: ${({mode}) => mode ? '#FFF' : '#000'};
`

const ButtonNight = styled.div`  
    width: 150px;
    height: 40px;
    margin: 5px; 
    position: relative;
    border-radius: 5px; 
    background: gray;
    &&:before{
        top: 0;
        left: 0;
        z-index: 1;
        content: "";
        display: block;
        position: absolute;
        width: 40px;
        height: 40px; 
        border-radius: 5px; 
        transition: all 1s; 
        background: ${({mode}) => mode ? '#000' : '#FFF'};
        background-size: cover;
        background-image: url( ${({mode}) => !mode ? '/iconos/sun.svg' : '/iconos/moon.svg'} );
        transform: ${({mode}) => mode ? 'translateX(0)' : 'translateX(calc(150px - 40px))'};
    }
` 

