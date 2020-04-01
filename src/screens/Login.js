import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const  FINAL_VALID_BORDER = '1px solid #24ace2';
const  FINAL_INVALID_BORDER = '1px solid #f26d7d';
const  VALID_BORDER = '1px solid #cfd5e6';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputMode: "password",
            email:"",
            emailIsValid:true,
            password:"",
            passwordIsVald:true,
            emailContainerBorder:VALID_BORDER,
            passwordContainerBorder:VALID_BORDER
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
        if(!emailValid){
            this.setState({emailContainerBorder:FINAL_INVALID_BORDER})
        }
        if(this.state.password.length>0){
            this.setState({
                passwordIsVald:true
            })
        }else{
            this.setState({passwordIsVald:false})
            this.setState({passwordContainerBorder:FINAL_INVALID_BORDER})
        }
    }
    emailChanged=(e)=>{
        var emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if(!!emailValid){
            this.setState({emailContainerBorder:FINAL_VALID_BORDER})
        }
        else{
            this.setState({emailContainerBorder:VALID_BORDER})
        }
        this.setState({
            email:e.target.value,
            emailIsValid:true,

        })
    }
    passwordChanged=(e)=>{
        this.setState({
            password:e.target.value,
            passwordIsVald:true,
            passwordContainerBorder:FINAL_VALID_BORDER
        })
    }

    render() {
        let { inputMode,emailIsValid,email,password,passwordIsVald,emailContainerBorder,passwordContainerBorder } = this.state
        return (
            <LoginScreen>
                <LoginContainer>
                    <LeftPad>
                        <LoginForm auto>
                            <LoginFormTitleText>Welcome back</LoginFormTitleText>
                            <CredentialContainer valid={emailIsValid} border={emailContainerBorder}>
                                {email.length===0&&<CredentialLabel>Email</CredentialLabel>}
                                <CredentialInput  type="email" value={email} onChange={this.emailChanged}/>
                            </CredentialContainer>
                            <CredentialContainer  valid={passwordIsVald} border={passwordContainerBorder}>
                                {password.length===0&&<CredentialLabel>Password</CredentialLabel>}
                                <CredentialInput  type={inputMode} value={password} onChange={this.passwordChanged}/>
                                <ShowPasswordIcon src={require('../asset/show-password.png')} alt="" className="show-password" onClick={()=>{this.changeMode()}}/>
                            </CredentialContainer>
                            <ForgotPasswordLabel><TryAgainWarn>{!emailIsValid?"Try again or ":""}</TryAgainWarn>Reset password</ForgotPasswordLabel>
                            <Button onPress={()=>{this.handleOnClick()}} label={"Login"}/>
                        </LoginForm>
                    </LeftPad>
                    <RightPad>
                        <Logo src={require("../components/logo.svg")} alt=""/>
                    </RightPad>
                </LoginContainer>
            </LoginScreen>
        )
    }
}
export default Login

const LoginScreen = styled.div`
    display:flex;
    height:100vh;
    width:100%;
    background-image: url("/background.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
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
const TryAgainWarn = styled.span`
    font-size:13px!important;
    color: #ff7572;
    font-family:'Gotham';
    font-weight:300;
    
`
const RightPad = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    flex-direction:row;
    position:relative;

`
const Logo = styled.img`
    margin-left:30%;
`
const LoginForm = styled.div`
    background-color: white;
    padding: 20px;
    width: 400px!important;

`
const LoginFormTitleText = styled.div`

    margin-bottom: 20px!important;
    font-size: 40px;
    font-family:'Raleway';
    font-weight:300;
    font-color:#000000;
    letter-spacing:5px;
    
    
`
const ForgotPasswordLabel = styled.div`
    font-size:13px!important;
    color: #24ACE2!important;
    font-family:'Gotham';
    text-align: right;
    font-weight: 300;
    cursor: pointer;
    width:396px;
`
//border:${props=>props.valid?'1px solid #24ace2':'1px solid #f26d7d'};
const CredentialContainer = styled.div`
    width:396px;
    height:59px;
    border:${props=>props.border};
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    border-radius:4px;
    margin:7px 0 17px 0;
`
const CredentialLabel = styled.div`
    color:#6470AC;
    font-size:14px;
    font-weight:bold;
    font-family:Raleway;
    padding-left:14px;
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
