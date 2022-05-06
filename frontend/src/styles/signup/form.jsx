import styled from "styled-components";
import colors from "../tools/colors.json";
import fonts from "../tools/fonts.json";


export const Form = styled.form`
    width: 80%;
    margin: 0vh 10%;
    display: flex;
    flex-direction: column;
    button {
        background: ${colors.orange};
        padding: 2.3vh 0;
        /* margin-top: 2vh; */
        margin: 2vh 25%;
        border: none;
        color: wheat;
        font-size: 25px;
        cursor: pointer;
        &:hover {
            transition: .3s ease-in-out ;
            background: #ec2222;
        }
    }
    @media screen and (max-width: 750px) {
        width: 86%;
        margin: 0vh 7%;
    }
    @media screen and (max-width: 450px) {
        width: 90%;
        margin: 0vh 5%;
    }
    `

export const Input = styled.input`
    margin: 1vh 0;
    padding: 2vh 2%;
    outline: none;
    border: 2.5px solid white;
    &:hover {
        border: 2.5px solid lightblue;
        background: lightblue;
    }
    &:focus {
        outline: none;
        /* color: white; */
        background-color: #e8e8e8;
        border: 2.5px solid ${({state}) => state.isValid || state.isValid === null ? 'green': 'red'};
    }
`