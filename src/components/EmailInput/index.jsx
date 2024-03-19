import { useState } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../utils/hooks'
import colors from '../../utils/style/color'

const InputWrapper = styled.div`
  color: ${({ theme }) => theme === 'light' ? colors.dark : 'white'};
  display: flex;
  flex-direction: column;
  align-items:center;
  margin-top:30px;
`

const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  background-color: transparent;
  border-bottom: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  margin-top: 5px;
  margin-bottom: 15px;
`

function EmailInput() {
  const [inputValue, setInputValue] = useState('')
  const { theme } = useTheme()

  return (
    <InputWrapper theme={theme} className=''>
      <StyledLabel theme={theme}>Adresse email</StyledLabel>
      <StyledInput
        theme={theme}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValue}
    </InputWrapper>
  )
}

export default EmailInput