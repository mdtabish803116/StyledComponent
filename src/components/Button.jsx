import styled from "styled-components";

const WrapperDiv = styled.div`
     margin-top : 60px;
     font-family : sans-serif;
     display : flex;
     justify-content : space-around;
`

const StyledButton = styled.button`
     background : ${(props) => (props.background === "teal"?"teal":"none")};
     color : ${(props) => (props.color === "white"?"white":(props.color === "teal")?"teal":"black")};
     padding : 10px 20px;
     border : ${(props) => (props.border === "solid"?"1px solid black":(props.border === "dashed")?"1px dashed black":"none")};
     font-size : 18px;
     border-radius : 4px;
     cursor : pointer;

     &:hover {
        transform : scale(1.2);
        transition : transform 1s 0s;
     }
`

const Button = () => {
    return(
          <WrapperDiv>
               <StyledButton background = "teal" color = "white">Primary Button</StyledButton>
               <StyledButton border = "solid">Default Button</StyledButton>
               <StyledButton border = "dashed">Dashed Button</StyledButton>
               <StyledButton>Text Button</StyledButton>
               <StyledButton color = "teal">Link Button</StyledButton>
          </WrapperDiv>
    )
}

export default Button;
