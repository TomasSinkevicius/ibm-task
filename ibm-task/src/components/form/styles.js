import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  label {
    margin-bottom: 8px;
    font-size: 18px;
  }
  input {
    margin-bottom: 8px;
    border: 1px solid black;
    color: black;
    padding: 4px;
    cursor: pointer;
  }

  p {
    color: red;
    font-size: 18px;
    margin: 0 0 8px;
  }
`
