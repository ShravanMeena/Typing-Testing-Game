import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding: 40px;
  border-radius: 5px;
  border: 1px solid #31363d;
`;

export const Heading = styled.h1`
  font-size: 30px;
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const Congratulations = styled.p`
  font-size: 30px;
  color: green;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding-left: 15px;
  margin: 20px;
  height: 45px;

  background: #171b22;
  border: 1px solid #31363d;
  outline: none;
  border-radius: 5px;

  color: #c9d1d9;
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  height: 50px;
  font-size: 18px;
  background: #171b22;
  border: 1px solid #31363d;
  outline: none;
  border-radius: 5px;
  color: #c9d1d9;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

// for landing.js
export const Landing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 5px;
  border: 1px solid #31363d;
`;
