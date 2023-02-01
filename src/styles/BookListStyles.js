import styled from "styled-components";

export const ContainerBooks = styled.div`
  position: relative;
  width: 100vw;
  .form-none{
    display: none;
  }
  .form-container{
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
  }
  
  header{
    position: fixed;
    top: 0;
    width: 100vw;
    background-image: url("https://static01.nyt.com/images/2019/12/17/books/review/17fatbooks/17fatbooks-superJumbo.jpg");
    background-size: cover;
    z-index: 1000;
  }
  .nav-container{
    width: 100%;
  }
  .cards__nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
  }
  .cards__nav-item{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    margin: 0 10px;
  }
  
  .cards__nav-btn{
    padding: 10px 15px;
    background-color: white;
    color: #070a1c;
    border-radius: 25px;
    font-size: 12px;
    transition: 0.5s;
    box-shadow: 0px 0px 10px 2px #956016;
    border: none;
    cursor: pointer;
  }
  .cards__nav-btn:hover{
    letter-spacing: 0.2em;
    box-shadow: 0px 0px 10px 5px #956016;
  }
  .users-container{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
    flex-wrap: wrap;
    gap: 20px;
    padding: 60px;
    margin-top: 210px;
    box-sizing: border-box;
    background-color: #956016c9;
  }
  .title{
    color: white;
    font-size: 50px;
    text-shadow: 2px 2px 5px #956016;
  }
  .principal-container__footer{
    color: white;
    text-shadow: 2px 2px 5px #000000;
    z-index: 1000;
    padding: 50px;
    text-align: center;
    font-size: 30px;
  }
  
  @media (max-width:720px){
    .cards__nav{
      flex-direction: column;
    }
  }
` 