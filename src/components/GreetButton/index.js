import LanguageContext from '../../context/LanguageContext'
import {ButtonContainer, Button} from './styledComponents'

const GreetButton = props => {
  const {isClicked, details} = props
  const {buttonText} = details

  return (
    <LanguageContext.Consumer>
      {value => {
        const {onLanChange} = value

        const onChanger = () => {
          onLanChange(buttonText)
          console.log('triggered')
        }

        return (
          <ButtonContainer>
            <Button isClicked={isClicked} onClick={onChanger}>
              {buttonText}
            </Button>
          </ButtonContainer>
        )
      }}
    </LanguageContext.Consumer>
  )
}

export default GreetButton
