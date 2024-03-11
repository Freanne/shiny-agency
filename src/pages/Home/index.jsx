import React from "react"
import image from "../../assets/undraw_Resume_re_hkth 1.png"
import StyledLink from "../../utils/style/atom"
import styled from "styled-components"

export function sum (a, b) {
    return a + b 
}




function Home(){
    return(
        <div style={{display: "flex",
backgroundColor:"#F9F9FC",
alignContent:"center", 
paddingTop:" 100px ", fontSize:"30px", 
fontFamily:"Trebuchet MS"}}>
    
             <div style={{paddingLeft:"70px ", paddingTop:"60px"}}>
                 <h2> Répérer vos besoins,<br /> on s'occupe du reste, <br />avec les meilleurs talents </h2>
                 <StyledLink to = "/survey/1" $isFullLink>
                 Faire le test
                 </StyledLink>
             </div>
                
                 <img src={image} alt="" width={400}  style={{marginRight:" 10px ", paddingBottom:"60px"}}/>
           
         </div>
    )
}

export default Home

// import styled from 'styled-components'
// import colors from '../../utils/style/color'
// import StyledLink  from '../../utils/style/atom'
// import HomeIllustration from '../../assets/undraw_Resume_re_hkth 1.png'

// const HomeWrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `

// const HomerContainer = styled.div`
//   margin: 30px;
//   background-color: ${colors.background};
//   padding: 60px 90px;
//   display: flex;
//   flex-direction: row;
//   max-width: 1200px;
// `

// const LeftCol = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   flex: 1;
//   ${StyledLink} {
//     max-width: 250px;
//   }
// `

// const StyledTitle = styled.h2`
//   padding-bottom: 30px;
//   max-width: 280px;
//   line-height: 50px;
// `

// const Illustration = styled.img`
//   flex: 1;
// `

// function Home() {
//   return (
//     <HomeWrapper>
//       <HomerContainer>
//         <LeftCol>
//           <StyledTitle>
//             Repérez vos besoins, on s’occupe du reste, avec les meilleurs
//             talents
//           </StyledTitle>
//           <StyledLink to="/survey/1" $isFullLink>
//             Faire le test
//           </StyledLink>
//         </LeftCol>
//         <Illustration src={HomeIllustration} />
//       </HomerContainer>
//     </HomeWrapper>
//   )
// }

// export default Home