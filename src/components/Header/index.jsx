
import styled from "styled-components"
import '../../utils/style/header.css'
import shinylight from '../../assets/shiny-logo_shiny-logo-light 1.png'
import shinyDark from '../../assets/shiny-logo_shiny-logo-dark 1.svg'
import StyledLink from "../../utils/style/atom"
import { useTheme } from "../../utils/hooks"
import { Link } from "react-router-dom"
import colors from "../../utils/style/color"

const HomeLogo = styled.img`
margin-top : 5px;
height : 50px

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
const MenuButton = styled.button`
    /* Vos styles pour le bouton de menu */
    background-color: ${colors.backgroundLight};
    
`;
const myLink = styled(Link)`
/* Vos styles pour le lien */
    color:black;
`;
 const LinkWrapper = styled.div`
 background-color:${({theme}) => theme === "light" ? colors.backgroundLight : colors.backgroundDark};

 `;
const LinkClick = styled.div`
color : ${({theme}) => theme === "light" ? "#000000": "#ffffff"};
`;


function Header() {
    const {theme } = useTheme()
    const logo = theme === 'light' ? shinylight : shinyDark;
    const handleLinkClick = (event, url) => {
        event.preventDefault();
        window.location.href = url; // Naviguer vers l'URL du lien
    };
    return(
        <NavContainer className="container" theme={theme}>
        <HomeLogo src={logo} alt="logo" className="sm-4" theme={theme} />
        <div className="nav justify-content-end">
            <div className="navbar d-md-none">
            <MenuButton theme={theme} className="navbar-toggler " type="button" id="MenuButton" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
            </MenuButton>
                <LinkWrapper theme={theme} className="offcanvas offcanvas-end" id="offcanvasDarkNavbar" aria-labelledby="MenuButton">
                    <button type="button" className="btn-close btn-close-black justify-align-end" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    <LinkClick theme={theme} className="offcanvas-body" style={{justifyContent:"center", color:"black"}}>
                        <StyledLink  theme={theme} className="nav-item nav-link" to="/" onClick={(event) => handleLinkClick(event, '/')}>Accueil</StyledLink>
                        <StyledLink theme={theme} className="nav-item nav-link" to="/freelances" onClick={(event) => handleLinkClick(event, '/freelances')}>Profils</StyledLink>
                        <StyledLink theme={theme} className="nav-item nav-link" to="/survey/1" onClick={(event) => handleLinkClick(event, '/survey/1')}>Faire le test</StyledLink>
                    </LinkClick>
                </LinkWrapper>
            </div>
            <div className="d-none d-md-block">
                <StyledLink to="/" theme={theme}>Accueil</StyledLink>
                <StyledLink to="/freelances" theme={theme}>Profils</StyledLink>
                <StyledLink to="/survey/1" theme={theme} $isFullLink>
                    Faire le test
                </StyledLink>
            </div>
        </div>
        </NavContainer>
        



        
    )
}

export default Header