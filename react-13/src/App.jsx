import React from 'react'
import './App.css'
import styles from './App.module.css'
import styled from 'styled-components'


function QuoteBox(){

  const StyledContainer = styled.div`

    width:25em;
    height:10em;
    background-color: #eeeeee79;
    border-radius:20px;
    border-style: solid;
    border-color:#d8d8d8d5;
    transition:0.5s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:5px;
    gap:10px;


    &:hover{
      background-color:#ebebebab;
      box-shadow: #0000001d 1px 3px 8px;
    
    }

  `

  const StyledText = styled.p`

    font-size: 1.5rem;


    &:hover{
      color:black;
      cursor: pointer;
    
    }
  
  `


  const StyledHead = styled.h1`

    color:black;


    &:hover{
      color:grey;
      cursor: pointer;
    }
  
  `


  return(

    <>
      <div className='quote-box'>
        <h1 className='head'>Quote Box 1</h1>
        <p className='quote-text'>"The only limit to our realization of tomorrow is our doubts of today."</p>
        <p className='quote-author'>Franklin D. Roosevelt</p>
      </div>


      <div className={styles.divContainer}>
        <h1 className={styles.head}>Quote Box 2</h1>
        <p className={styles.quoteText}>"The only limit to our realization of tomorrow is our doubts of today."</p>
        <p className={styles.quoteAuthor}>Franklin D. Roosevelt</p>
      </div>


      <StyledContainer>
        <StyledHead>Quote Box 3</StyledHead>
        <StyledText>"The only limit to our realization of tomorrow is our doubts of today."</StyledText>
        <StyledText>Franklin D. Roosevelt</StyledText>
      </StyledContainer>
    </>
  )
}


export default QuoteBox