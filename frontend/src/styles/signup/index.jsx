import styled from 'styled-components';
import fonts from '../tools/fonts.json';
import colors from '../tools/colors.json';
// icons
import { LeftOutlined } from '@ant-design/icons';


export const Header = styled.header`
    display: flex;
    height: 12vh;
    align-items: center;
    padding-left: 5%;
    padding-top: 3vh;
    h2 {
        margin-left: 1.5%;
        color: ${colors.black};
        font-size: 35px;
        font-family: ${fonts.titles};
    }
    @media screen and (max-width: 850px) {
        h2 {
            font-size: 30px;
        }
    }
    @media screen and (max-width: 650px) {
        height: 15vh;
        margin-top: 3vh;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 1vh 5%;
        h2 {
            margin-top: 3vh;
        }
    }
    `
export const Header_title = styled.div`
    display: flex;
    height: 12vh;
    align-items: center;
    padding-left: 6%;
    /* padding-top: 1vh; */
    h3 {
        margin-left: 1.5%;
        color: ${colors.full_black};
        font-size: 25px;
        font-weight: 10;
        font-family: ${fonts.titles};
    }
    @media screen and (max-width: 850px) {
        padding: 0 5%;
        h3 {
            font-size: 20px;
        }
    }
    @media screen and (max-width: 400px) {
        h3 {
            font-size: 17px;
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
`

export const Message = styled.p`
    margin: 0 20%;
    text-align: center;
    font-family: ${fonts.letters2};
    @media screen and (max-width: 650px) {
        margin:0 5%;      
    }
`