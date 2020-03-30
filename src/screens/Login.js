import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../components/LoginButton'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputMode: "password",
            email:"",
            emailIsValid:true
        }
        
    }
    changeMode(){
        let {inputMode} = this.state
        if(inputMode==="password"){
            this.setState({inputMode:"text"})
        }else{this.setState({inputMode:"password"})}
    }
    handleOnClick(){
        var emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        this.setState({
            emailIsValid:!!emailValid
        })
    }
    emailChanged=(e)=>{
        this.setState({email:e.target.value})
    }
    render() {
        let { inputMode,emailIsValid } = this.state
        return (
            <LoginScreen>
                <LoginContainer>
                    <LeftPad>
                        <LoginForm auto>
                            <LoginFormTitleText>Welcome back</LoginFormTitleText>
                            {!emailIsValid&&<EmailWarn>Input valid email address</EmailWarn>}
                            <CredentialContainer>
                                <CredentialLabel>Email</CredentialLabel>
                                <CredentialInput  type="email" value={this.state.email} onChange={this.emailChanged}/>
                            </CredentialContainer>
                            <CredentialContainer>
                                <CredentialLabel>Password</CredentialLabel>
                                <CredentialInput  type={inputMode} />
                                <ShowPasswordIcon src={require('../asset/show-password.png')} alt="" className="show-password" onClick={()=>{this.changeMode()}}/>
                            </CredentialContainer>
                            <ForgotPasswordLabel><span className="try-again-label">{"Try again or "}</span>Reset password</ForgotPasswordLabel>
                            <Button onPress={()=>{this.handleOnClick()}} label={"Login"}/>
                        </LoginForm>
                    </LeftPad>
                    <RightPad/>
                </LoginContainer>
            </LoginScreen>
        )
    }
}
export default Login

const LoginScreen = styled.div`
    display:flex;
    flex:1;
    width:100%;
    height:100vh;
    background-image: url("/background.png");
    background-repeat: no-repeat;
    background-size: cover;
`
const LoginContainer= styled.div`
    flex:1;
    display:flex;
    flex-direction:row;
`
const LeftPad = styled.div`
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex:1;
`
const RightPad = styled.div`
    flex:1;
`
const LoginForm = styled.div`
    background-color: white;
    padding: 20px;
    width: 400px!important;
`
const LoginFormTitleText = styled.div`
    margin-bottom: 20px!important;
    font-size: 34px;
`
const ForgotPasswordLabel = styled.div`
    font-size:12px!important;
    color: #65c5ea!important;
    text-align: right;
    font-weight: bold;
    cursor: pointer;
`
const CredentialContainer = styled.div`
    width:100%;
    height:40;
    border:1px solid #cfd5e5;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    border-radius:4px;
    margin:7px 0 17px 0;
`
const CredentialLabel = styled.div`
    color:#7e62ac;
    padding:5px;
    font-weight:450;
`
const CredentialInput = styled.input`
    width:100%;
    text-align:right;
    padding-right:7px;
    border:transparent;
    outline:none;
`
const ShowPasswordIcon = styled.img`
    margin-right:7px;
    pointer:cursor;
`
const EmailWarn = styled.div`
    font-size:12px;
    color:red;
`
