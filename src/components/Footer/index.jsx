import styled from "styled-components";
import colors from "../../utils/style/color"
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";
import EmailInput from "../EmailInput";

const FooterContainer = styled.footer`
display:flex;


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
        <FooterContainer className="row">
            <NightModeButton onClick={() => toggleTheme()}> 
                Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
            </NightModeButton>
            <EmailInput className="" />
        
        </FooterContainer>
        )
    }
    
    export default Footer