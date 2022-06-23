import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Img from "./img/inicio.png"
import Logo from "./img/logo.png"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }`

const Container = styled.div`
  padding:2em;
  `
const Home = styled.div`
    background-image: url(${Img});
    background-position: center;
    background-size:100%;
    height: 133vh;
    background-repeat: no-repeat;
    

  `
const Menu = styled.div`
  height: 10vh;
  padding-left: 2vw;
  list-style: none;
  display:flex;
  justify-content: space-between;
  aling-items: center;

   
  `
const BoxImg = styled.div`
 display:flex;
 align-items:center;
 `
const Lista = styled.div`
  width: 30vw;
  align-items: center;
  display:flex;
  justify-content: space-evenly;
  font-size: Hurme Geometric Sans 1, Regular;
  `



const BoxTitle = styled.div`
  height: 78vh;
  display:flex;
  justify-content:center; 
  align-items: flex-end;  
  font-size: 4vw; 
  font-family: Hurme Geometric Sans 1, SemiBold;
  color: #373737;
 
 `




export default function App() {


  return (
    <div>
      <GlobalStyle />
      <Container>
        <Home>
          <Menu>
            <BoxImg>
              <img src={Logo} width="45" />
            </BoxImg>
            <Lista>
              <li>ABOUT</li>
              <li>RECIPES</li>
              <li>SUBSCRIBE</li>
            </Lista>
          </Menu>
          <BoxTitle>
            <h1>RECIPES</h1>
          </BoxTitle>
        </Home>
      </Container>

    </div>


  );
}