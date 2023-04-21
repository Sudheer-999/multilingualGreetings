import LanguageContext from '../../context/LanguageContext'
import {
  Container,
  Head,
  ButtonList,
  ImageEl,
  Sub,
  HeadItem,
  GreetItem,
  GreetingContainer,
} from './styledComponents'
import GreetButton from '../GreetButton'

const Greeting = () => (
  <LanguageContext.Consumer>
    {value => {
      const {languageGreetingsList, activeLanguage} = value

      const currentList = languageGreetingsList.filter(
        eachItem => eachItem.buttonText === activeLanguage,
      )
      console.log(currentList[0].imageUrl)

      return (
        <Container>
          <Sub>
            <HeadItem>
              <Head>Multilingual Greetings</Head>
            </HeadItem>
            <ButtonList>
              {languageGreetingsList.map(eachItem => (
                <GreetButton
                  details={eachItem}
                  key={eachItem.id}
                  isClicked={activeLanguage === eachItem.buttonText}
                />
              ))}
            </ButtonList>
            <GreetingContainer>
              <GreetItem key={currentList[0].id}>
                <ImageEl
                  src={currentList[0].imageUrl}
                  alt={currentList[0].imageAltText}
                />
              </GreetItem>
            </GreetingContainer>
          </Sub>
        </Container>
      )
    }}
  </LanguageContext.Consumer>
)

export default Greeting
