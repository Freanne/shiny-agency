import styled from "styled-components";
import colors from "../../utils/style/color"
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";
import EmailInput from "../EmailInput";

const FooterContainer = styled.footer`
display:flex;
align-items: center;
justify-content: center;
padding: 60px 0;

`

const NightModeButton = styled.button`
    background-color : transparent;
    border: none;
    cursor: pointer;
    color : ${colors.secondary};
    margin-right : 100px;
`

function Footer() {
    const {toggleTheme, theme} = useContext(ThemeContext)
    return (
        <FooterContainer>
            <NightModeButton onClick={() => toggleTheme()}> 
                Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
            </NightModeButton>
            <EmailInput/>
        
        </FooterContainer>
        )
    }
    
    export default Footer