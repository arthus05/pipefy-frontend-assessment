import {
  Box,
  Image,
  Content
} from './styles'

export const Header = () => {
  return (
    <Box className="App">
      <Image className="App-header">
        <img
          src="https://files.readme.io/9e810f9-small-developers3x.png"
          alt="logo"
        />
      </Image>
      <Content>
        <h1>Your Pipes</h1>
        <p>Here are all your processes <a target='_blank' href='https://help.pipefy.com/' rel="noreferrer">learn more</a>.</p>
      </Content>
    </Box>
  )
}
