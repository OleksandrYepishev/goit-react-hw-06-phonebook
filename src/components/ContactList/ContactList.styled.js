import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  outline: 1px solid gray;
  padding: 30px;
  max-width: 550px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 25px;
  font-weight: normal;
  background-color: whitesmoke;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 0.25fr;
  margin-bottom: 10px;
  font-style: italic;
`;

export const Button = styled.button`
  padding: 5px;
  border-radius: 7px;
  cursor: pointer;
`;
