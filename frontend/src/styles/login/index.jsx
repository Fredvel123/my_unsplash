import styled from "styled-components";
import colors from '../tools/colors.json';
import fonts from '../tools/fonts.json';
// icons
import { LeftOutlined } from '@ant-design/icons';

export const Header = styled.header`
    .head {
        display: flex;
        height: 15vh;
        align-items: center;
        margin: 0 5%;
        h2 {
            font-size: 22px;
            font-family: ${fonts.titles};
            margin-left: 3%;
        }
    }
    h3 {
        font-family: ${fonts.letters2};
        font-weight: 50;
        font-size: 25px;
        margin-left: 7%;
    }
    @media screen and (max-width: 850px) {
        .head {
            h2 {
                font-size: 20px;
            }
        }
    }
    @media screen and (max-width: 650px) {
        .head {
            display: flex;
            height: 20vh;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin: 0 5%;
            h2 {
                font-size: 22px;
                margin-top: 3vh;
                font-family: ${fonts.titles};
                margin-left: 0%;
            }
        }
        h3 {
            margin-top: 2vh;
            margin:2vh  5%;
            font-size: 16px;
        }
    }
`


export const IconBack = styled(LeftOutlined)`
    color: ${colors.orange};
    font-size: 50px;
    font-weight: 300;
    &:hover {
        transition: .4s ease-in-out;
        color: #fd8662;
    }
    @media screen and (max-width: 850px) {
        font-size: 40px;
    }
    @media screen and (max-width: 650px) {
        font-size: 40px;
        margin-left: 0%;
    }
`