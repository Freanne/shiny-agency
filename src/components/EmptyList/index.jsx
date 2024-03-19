import { useTheme } from '../../utils/hooks'
import styled from 'styled-components'
import colors from '../../utils/style/color'
import EmptyIllustration from '../../assets/undraw_missed_chances_k3cq 1.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  text-align:center;
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

function EmptyList(params) {
    const { theme } = useTheme()
    return (
        <Container theme={theme} className='container'>
          <div className='row'>
          <Title theme={theme}>Dommage...</Title>
            <Illustration src={EmptyIllustration} />
            <SubTitle theme={theme}>
            Il semblerait que vous n’ayez besoin d’aucune compétence
            </SubTitle>
          </div>

      </Container>
    )
}

export default EmptyList