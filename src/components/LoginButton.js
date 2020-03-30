import React, {Component} from 'react';
import styled from 'styled-components'

class Button extends Component {
    constructor(props){
            super(props)
            this.state={
                disabled:false,
            }
    }
    handleCondition(){
        this.setState({disabled:true})
        if(this.props.onPress){this.props.onPress()}
        setTimeout(()=>{this.setState({disabled:false})},200)
    }
    render(){
        let {disabled} = this.state
        return(
            <GotoButton 
                    type="button"
                    disabled =  {disabled}
                    onClick={()=>{this.handleCondition()}} 
            >
                {this.props.label&&this.props.label}
            </GotoButton>
        )
    }
}

const GotoButton = styled.button`
    margin-top: 20px;
    width: 80%;
    height: 50px;
    padding: 0 25px 0 25px;
    border-radius: 30px!important;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-image: ${props=>props.disabled?'none':'url("/gradientBtnBg.png")'};
    background-size: cover;
    border:none;
    border-width:0px;
    outline:none;
    box-shadow:5px 5px 5px #7e62ac83;
    color:white;
`
export default Button