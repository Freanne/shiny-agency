
import styled from "styled-components"

import shinylight from '../../assets/shiny-logo_shiny-logo-light 1.png'
import shinyDark from '../../assets/shiny-logo_shiny-logo-dark 1.svg'
import StyledLink from "../../utils/style/atom"
import { useTheme } from "../../utils/hooks"

const HomeLogo = styled.img`
height : 70px

`
const NavContainer = styled.nav`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => `
  background-color: ${theme.backgroundColor};
  color: ${theme.color};
`}
`

function Header() {
    const {theme } = useTheme()
    const logo = theme === 'light' ? shinylight : shinyDark;
    return(
        <NavContainer theme={theme}>
            <HomeLogo src={logo} alt="logo" theme ={theme}/>
            <StyledLink to = "/" theme={theme}>Accueil</StyledLink>
            <StyledLink to = "/freelances" theme={theme}>Profils</StyledLink>
            <StyledLink to = "/survey/1" theme={theme} $isFullLink>
                Faire le test
            </StyledLink>
        </NavContainer>
    )
}

export default Header