import styled from '@emotion/styled';

export const Form = styled.form`
   max-width: 400px;
  margin: 0 auto;
  padding: 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const FormButton = styled.button`
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;

export const FormInput = styled.input`
   width: 100%;
  height: 22px;
  padding: 4px;
  border-radius: 4px 0 0 4px;
  border: 1px solid #c2c2c2;
  border-right: none;
  outline: none;
`;