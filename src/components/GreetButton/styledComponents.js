import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
`
export const Button = styled.button`
  background-color: ${props => (props.isClicked ? '#db1c48' : '#ffffff')};
  border: ${props => (props.isClicked ? 'none' : '1px solid #db1c48')};
  border-radius: 15px;
  color: ${props => (props.isClicked ? '#ffffff' : '#db1c48')};
  height: 27px;
  width: 80px;
  margin-right: 20px;
`
