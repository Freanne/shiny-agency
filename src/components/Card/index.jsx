import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/color'
import { Component } from 'react'


const CardLabel = styled.span`
    
    color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
    font-size: 22px;
    font-weight: bold;
    justify-self: center;
    text-align: center;
    margin-bottom: 15px;
    
   
`
const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    justify-self: center;
    align-self: center;
    margin-bottom: 15px;

`
const CardTitle = styled.span`
    justify-self: center;
    text-align:center;
    color: ${({ theme }) => theme === 'light' ? '#000000' : '#ffffff'};
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction : column;
    padding: 15px;
    background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    border-radius: 30px;
    width: 300px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
class Card extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isFavorite: true,
      }
    }
  
    render() {
      const { theme, picture, label, title } = this.props
  
      return (
        <CardWrapper theme={theme} onClick={this.setFavorite}>
          <CardLabel theme={theme}>{label}</CardLabel>
          <CardImage src={picture} alt="freelance" />
          <CardTitle theme={theme}>{title}</CardTitle>
        </CardWrapper>
      )
    }
  }


// function Card({ label, title, picture }) {
//     const {theme} = useTheme()

//     return (
//         <CardWrapper theme={theme}>
//             <CardLabel theme={theme}>{label}</CardLabel>
//             <CardImage src={picture} alt="freelance" />
//             <CardTitle theme={theme}>{title}</CardTitle>
//         </CardWrapper>
//     )
// }
Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
}
Card.defaultProps ={
    label: ' Mon label par défaut',
    title: 'Titre par défaut',
    picture:'Par défaut',
    theme:'light',
}
export default Card