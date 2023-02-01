import styled from "styled-components";

export const ContainerForm = styled.form `
  position: relative;
  border: 1px solid #956016;
  padding: 25px;
  width: max-content;
  border-radius: 10px;
  background-color:#0000009b;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 0px 10px 3px #956016;
  animation: fadeIn 0.3s ease forwards;
  input{
    outline: none;
    border-radius: 5px;
    border: none;
    padding: 10px;
    box-shadow: 0px 0px 4px 3px #956016;
  }
  input:focus{
    box-shadow: 0px 0px 7px 7px #956016;
  }
  .form__required-message{
    color: white;
    font-size: 10px;
    text-shadow: 2px 2px 5px #956016;
  }

  @keyframes fadeIn{
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  .form__input{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .form__title,
  .form__item{
    color: white;
    font-size: 15px;
    text-shadow: 2px 2px 5px #956016;
  }
  .form__title{
    font-size: 25px;
  }
  .form__close{
    content: '';
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
    background-color: #000000;
    padding: 0 6px;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    box-shadow: 0px 0px 5px 3px #956016;
  }
  .form__close:hover{
    box-shadow: 0px 0px 5px 5px #956016;
  }
  .add-user{
    padding: 8px 25px;
    background-color: #000000;
    color: white;
    border-radius: 25px;
    font-size: 12px;
    transition: 0.5s;
    box-shadow: 0px 0px 10px 1px #956016;
    border: none;
    cursor: pointer;
  }
  .add-user:hover{
    letter-spacing: 0.2em;
    box-shadow: 0px 0px 10px 4px #956016;
  }
`