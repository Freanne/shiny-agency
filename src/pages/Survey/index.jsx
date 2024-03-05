import {Link, useParams } from "react-router-dom"
import { useContext} from "react"
import { Loader } from "../../utils/style/atom"
import { SurveyContext } from "../../utils/context"
import styled from "styled-components"
import colors from "../../utils/style/color"
import { useFetch } from "../../utils/hooks"

const LinkWrapper = styled.div`
padding-top: 30px;
& a {
  color: black;
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
`

const QuestionContent = styled.span`
margin: 30px;
`

const RepplyWrapper = styled.div`
`
const ReplyBox = styled.button`
border: none;
height: 100px;
width: 200px;
display: flex;
align-items: center;
justify-content: center;
background-color: ${colors.backgroundLight};
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
`


function Survey() {
    const {questionNumber} = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = (questionNumberInt === 1 ? 1 : questionNumberInt - 1)
    const nextQuestionNumber = questionNumberInt + 1
    const {answers, saveAnswers} = useContext(SurveyContext)

    
    function saveReply(answer) {
        saveAnswers({ [questionNumber]: answer })
      }

      const { data, isLoading,error } = useFetch(`http://localhost:8000/survey`)

      const { surveyData } = data

      if (error) {
        return <span>Oups il y a eu un problème</span>
      }
    return (
        <SurveyContainer>
           
            <QuestionTitle>Question {questionNumber}
            </QuestionTitle>
            {isLoading ? (
        <Loader />
    ) : (

            <QuestionContent > 
                {  surveyData[questionNumber]}
            </QuestionContent>
    )}
        {answers && (
            <RepplyWrapper >
                <ReplyBox 
                    onClick={() => saveReply(true)}
                    isSelected={answers[questionNumber] === true}
                >
                    Oui
                </ReplyBox>
               
                <ReplyBox
                    onClick={() => saveReply(false)}
                    isSelected={answers[questionNumber] === false}
                >
                    Non 
                </ReplyBox>
            </RepplyWrapper>
        )}
            <LinkWrapper>
                <Link to={`/survey/${prevQuestionNumber}`} style={{margin:"100px", color:"black"}}>Précédent</Link>
                {surveyData && surveyData[questionNumberInt + 1] ? (
                    <Link to= {`/survey/${nextQuestionNumber}`}  style={{margin:"100px", color:"black"}}> Suivante </Link>
                    
                ) : (
                    <Link to="/results" style={{margin:"100px", color:"black"}}>Résultats</Link>
                )}
            </LinkWrapper>
            
        </SurveyContainer>
    )
}

export default Survey