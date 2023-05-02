import {useState} from 'react'
import {
  BgContainer,
  Container,
  Heading,
  Para,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, updatePassword] = useState('')

  const onchangePassword = event => {
    updatePassword(event.target.value)
  }

  const notValid = password.length < 8

  return (
    <BgContainer>
      <Container>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input type="password" value={password} onChange={onchangePassword} />
        {notValid && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </Container>
    </BgContainer>
  )
}

export default PasswordValidator
