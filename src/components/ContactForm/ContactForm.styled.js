import styled from '@emotion/styled';

export const ContactForm = styled.form`
  display: block;
  outline: 1px solid gray;
  max-width: 550px;
  padding: 30px;
  margin-top: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: whitesmoke;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-bottom: 30px;
  font-size: 20px;
`;

export const Input = styled.input`
  display: inline-blcok;
  height: 25px;
  margin-top: 15px;
  min-width: 300px;
  margin-right: 80px;
  margin-left: auto;
`;

export const Button = styled.button`
  font-size: 15px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
`;
