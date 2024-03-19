import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/color'
import { Loader } from '../../utils/style/atom'
import { useFetch, useTheme } from '../../utils/hooks'
import { Link } from 'react-router-dom'

const CardsContainer = styled.div`

  display: flex;
  flex-direction : column;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => theme === 'light' ? '#000000' : '#ffffff'};
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Freelances() {
  const { theme } = useTheme()
  const { data, isLoading, error } = useFetch(
    `https://api-deployed-react-shiny-agency.onrender.com/freelances`
  )

  const freelancersList = data?.freelancersList

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <div style={{marginTop:"20px"}}>
      <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
      <PageSubtitle theme={theme}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} />
        </LoaderWrapper>
      ) : (
      <CardsContainer className="container">
          {freelancersList?.map((profile) => (
            <div className='row' key={`freelance-${profile.id}`}>
                <Link  to={`/profile/${profile.id}`} style={{textDecoration: "none"}} >
                <Card
                  
                  label={profile.job}
                  title={profile.name}
                  picture={profile.picture}
                  theme={theme}
                 
                />
                </Link>
            </div>
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances