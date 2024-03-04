import {Link, useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { Loader } from "../../utils/style/atom"

function Survey() {
    const {questionNumber} = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = (questionNumberInt === 1 ? 1 : questionNumberInt - 1)
    const nextQuestionNumber = questionNumberInt + 1
    const [surveyData, setSurveyData] = useState({})
    const [isDataLoading, setDataLoading] = useState(false)

 
    useEffect(() => {
        setDataLoading(true)
        fetch(`http://localhost:8000/survey`)
        .then((response) => response.json())
        .then(({ surveyData }) => {
        setSurveyData(surveyData)
        setDataLoading(false)
        })
    }, [])


    return (
        <div>
           
            <h2 
                style={{textDecoration:"underline", textAlign:"center", fontFamily:"Trebuchet MS"}}
            >Question {questionNumber}
            </h2>
            {isDataLoading ? (
        <Loader />
    ) : (

            <p style={{textAlign:"center", paddingTop:"50px", fontFamily:"Trebuchet MS" }}> { surveyData[questionNumber]}</p>
    )}
            <div style={{display:"flex", justifyContent:"center", paddingTop:"70px", fontFamily:"Trebuchet MS" }}>
                <div style={{border:"1px black solid", justifyContent: "center", margin:"20px", borderRadius:"15px", backgroundColor:"#F9F9FC"}}>
                    <p style={{ margin : "30px" }}>Oui</p>
                </div>
               
                <div style={{border:"1px black solid", justifyContent: "center",margin:"20px", borderRadius:"15px", backgroundColor:"#F9F9FC" }}>
                    <p style={{ margin : "30px" }}>Non </p>
                </div>
            </div>
            <div style={{textAlign:"center", marginRight:"10px", paddingTop:"100px", fontFamily:"Trebuchet MS" }}>
                <Link to={`/survey/${prevQuestionNumber}`} style={{margin:"100px", color:"black"}}>Précédent</Link>
                {questionNumberInt === 10 ? (
                    <Link to="/results" style={{margin:"100px", color:"black"}}>Résultats</Link>
                ) : (
                    <Link to= {`/survey/${nextQuestionNumber}`}  style={{margin:"100px", color:"black"}}> Suivante </Link>
                )}
            </div>
            
        </div>
    )
}

export default Survey