// //import DefaultPicture from '../../assets/profile.png'
// import { useEffect, useState } from 'react'
// import Card from '../../components/Card'
// import styled from 'styled-components'
// import { Loader } from '../../utils/style/atom'


// const CardsContainer = styled.div`
//     display: grid;
//     gap: 24px;
//     grid-template-rows: 350px 350px;
//     grid-template-columns: repeat(2, 1fr);
//     align-items: center;
//     justify-items: center;
    
// `
// const LoaderWrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `


// function Freelances() {
//     const [isDataLoading, setDataLoading] = useState(false)
//     const [error, setError] = useState(false)
//     const [freelancersList, setFreelancesList] = useState([])
  
//     useEffect(() => {
//       async function fetchFreelances() {
//         setDataLoading(true)
//         try {
//           const response = await fetch(`http://localhost:8000/freelances`)
//           const { freelancersList } = await response.json()
//           setFreelancesList(freelancersList)
//         } catch (err) {
//           console.log('===== error =====', err)
//           setError(true)
//         } finally {
//           setDataLoading(false)
//         }
//       }
//       fetchFreelances()
//     }, [])
  
//     if (error) {
//       return <span>Oups il y a eu un problème</span>
//     }

//     return (
//         <div style={{textAlign:"center"}}>
//              <h1 >Trouver votre prestataire</h1>
//              <p style={{color:"#8186A0", fontSize:"20px"}}>Chez Shiny nous réunissons les meilleurs profils pour vous.</p>
//              {isDataLoading ? (
//                 <LoaderWrapper>
//                     <Loader/>
//                 </LoaderWrapper>
//              ) : (

            
             
//              <CardsContainer>
             
//                 {freelancersList.map((profile, index) => (
//                     <Card
//                         key={`${profile.name}-${index}`}
//                         label={profile.jobTitle}
//                         picture={profile.picture}
//                         title={profile.name}
//                     />
//                 ))}
//             </CardsContainer>
//              )}
//         </div>
    
        
//     )
// }
// export default Freelances


import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/color'
import { Loader } from '../../utils/style/atom'
import { useFetch, useTheme } from '../../utils/hooks'

const CardsContainer = styled.div`
  display: grid;
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
    <div>
      <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
      <PageSubtitle theme={theme}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList?.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances