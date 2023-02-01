import styled from "styled-components";

export const ContainerHome = styled.div`
  background-image: url("https://static01.nyt.com/images/2019/12/17/books/review/17fatbooks/17fatbooks-superJumbo.jpg");
  height: 100vh;
  width: 100vw;
`;
export const Book = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
  background: #fff;
  transform-style: preserve-3d;
  transform: translate(-50%, -50%) perspective(2000px);
  box-shadow: inset 300px 0 50px rgba(0, 0, 0, 0.5),
    0 20px 100px rgba(0, 0, 0, 0.5);
  transition: 1s;
  :hover {
    transform: translate(-50%, -50%) perspective(2000px) rotate(-10deg);
    box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.5),
      0 10px 100px rgba(0, 0, 0, 0.5);
  }
  ::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 0;
    width: 100%;
    height: 5px;
    background: #956016;
    transform-origin: bottom;
    transform: skewX(-45deg);
  }
  ::after {
    content: "";
    position: absolute;
    top: 0px;
    right: -5px;
    width: 5px;
    height: 100%;
    background: #956016;
    transform-origin: left;
    transform: skewY(-45deg);
  }
  .imgBox {
    color: white;
    text-align: center;
    background-color: #956016;
    width: 100%;
    height: 100%;
    position: relative;
    transform-origin: left;
    transition: 1s;
    font-size: 80px;
    line-height: 100px;
  }
  .content__button{
    position: absolute;
    display: none;
    top: 200px;
    left: 90px;
    padding: 10px 15px;
    background-color: rgb(212, 212, 212);
    color: #070a1c;
    border-radius: 25px;
    font-size: 10px;
    transition: 0.5s;
    box-shadow: 0px 0px 10px 0px #956016;
    :hover{
      scale: 1.2;
    }
  }

  :hover .imgBox{
    transform: rotateY(-180deg);
  }

  :hover  .content__button{
    display: flex;
  }
  .footer{
    position: absolute;
    color: #070a1c;
    bottom: 50px;
    left: 70px;
  }
`;

