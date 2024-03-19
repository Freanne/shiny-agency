import image from "../../assets/undraw_page_not_found_su7k 1.png"
import { useTheme } from "../../utils/hooks"
import styled from "styled-components"
import colors from "../../utils/style/color"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
  margin-top: 30px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const Title = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const SubTitle = styled.h3`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: normal;
`

const Illustration = styled.img`
  margin: 30px 0;
`

function Error(){
    const {theme} = useTheme()
    return(
        <Container theme={theme} className="container">
            <div className="row">
              <Title theme={theme}>Oups...</Title>
              <Illustration src={image} />
              <SubTitle theme={theme}>
                  Il semblerait qu'il y ait un problème
              </SubTitle>
            </div>
        </Container>
    )
}

export default Error