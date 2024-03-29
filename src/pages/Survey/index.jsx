import {Link, useParams } from "react-router-dom"
import { useContext} from "react"
import { Loader } from "../../utils/style/atom"
import { SurveyContext } from "../../utils/context"
import styled from "styled-components"
import colors from "../../utils/style/color"
import { useFetch, useTheme } from "../../utils/hooks"

const LinkWrapper = styled.div`
padding-top: 30px;
& a {
  color: ${({theme}) => theme === 'light' ? "#000000" : "#ffffff"};
}
& a:first-of-type {
  margin-right: 20px;
}

`
const SurveyContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const QuestionTitle = styled.h2`
text-decoration: underline;
text-decoration-color: ${colors.primary};
color: ${({ theme }) => theme === 'light' ? '#000000' : '#ffffff'};
`

const QuestionContent = styled.span`
margin: 30px;
color: ${({ theme }) => theme === 'light' ? '#000000' : '#ffffff'};
`

const RepplyWrapper = styled.div`
display: flex;

`
const ReplyBox = styled.button`
border: none;
height: 100px;
width: 200px;
align-items: center;
justify-content: center;
background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
border-radius: 30px;
cursor: pointer;
margin-bottom: 10px;
box-shadow: ${(props) =>
  props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
&:first-child {
  margin-right: px;
}
&:last-of-type {
  margin-left: px;
}
color: ${({ theme }) => theme === 'light' ? '#000000' : '#ffffff'};
margin-left : 5px;
`


function Survey() {
    const {questionNumber} = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = (questionNumberInt === 1 ? 1 : questionNumberInt - 1)
    const nextQuestionNumber = questionNumberInt + 1
    const {answers, saveAnswers} = useContext(SurveyContext)
    const { theme } = useTheme()
    
    function saveReply(answer) {
        saveAnswers({ [questionNumber]: answer })
      }

      const { data, isLoading,error } = useFetch(`https://api-deployed-react-shiny-agency.onrender.com/survey`)

      const { surveyData } = data

      if (error) {
        return <span>Oups il y a eu un problème</span>
      }
    return (
        <SurveyContainer >
           
            <QuestionTitle theme={theme}>Question {questionNumber}
            </QuestionTitle>
            {isLoading ? (
        <Loader />
    ) : (

            <QuestionContent theme={theme}> 
                {  surveyData[questionNumber]}
            </QuestionContent>
    )}
        {answers && (
            <RepplyWrapper theme={theme} className="container row" >
                <ReplyBox 
                    onClick={() => saveReply(true)}
                    isSelected={answers[questionNumber] === true}
                    theme={theme}
                    className="col "
                >
                    Oui
                </ReplyBox>
               
                <ReplyBox
                    onClick={() => saveReply(false)}
                    isSelected={answers[questionNumber] === false}
                    theme = { theme }
                    className="col"
                >
                    Non 
                </ReplyBox>
            </RepplyWrapper>
        )}
            <LinkWrapper theme={theme}>
                <Link to={`/survey/${prevQuestionNumber}`} style={{margin:"30px"}}>Précédent</Link>
                {surveyData && surveyData[questionNumberInt + 1] ? (
                    <Link to= {`/survey/${nextQuestionNumber}`}  style={{margin:"30px"}}>Suivante</Link>
                    
                ) : (
                    <Link to="/results" style={{margin:"30px"}}>Résultats</Link>
                )}
            </LinkWrapper>
            
        </SurveyContainer>
    )
}

export default Survey