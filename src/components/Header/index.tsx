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
        <p>Here are all your processes <a href='https://help.pipefy.com/'>learn more</a>.</p>
      </Content>
    </Box>
  )
}
