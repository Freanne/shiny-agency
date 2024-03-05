import image from "../../assets/undraw_page_not_found_su7k 1.png"
function Error(){
    return(
        <div style={{backgroundColor:"#F9F9FC", alignContent:"center", justifyContent:"center", fontSize:"30px", fontFamily:"Trebuchet MS", paddingLeft:"200px" }}>
            <p style={{paddingLeft:"350px" , paddingTop:"20px"}}>Oups...</p>
            <img src={image} alt="" style={{width:""}}/>
            <p style={{paddingLeft:"200px"}}>Il semblerait qu'il y ait un problème</p>
        </div>
    )
}

export default Error