import { Link } from "react-router-dom"
import styled from "styled-components"

import shiny from '../../assets/shiny-logo_shiny-logo-light 1.png'
import StyledLink from "../../utils/style/atom"

const HomeLogo = styled.img`
height : 70px
`
const NavContainer = styled.nav`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
    return(
        <NavContainer>
            <HomeLogo src={shiny} alt="logo" />
            <StyledLink to = "/">Accueil</StyledLink>
            <StyledLink to = "/freelances">Profils</StyledLink>
            <StyledLink to = "/survey/1" $isFullLink>
                Faire le test
            </StyledLink>
        </NavContainer>
    )
}

export default Header