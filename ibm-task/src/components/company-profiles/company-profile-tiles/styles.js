import styled from 'styled-components'

export const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;

  .single-tile {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    border: 1px solid #ced4da;
    padding: 8px;
    width: 250px;
    border-radius: 6px;

    p {
      color: black;
      font-size: 18px;
      text-align: left;
      margin: 4px 0;
    }

    button {
      background: transparent;
      border: none;
      margin: 0;
      padding: 0;
      text-align: left;
      cursor: pointer;

      strong {
        color: #0d6efd;
        font-size: 18px;

        :hover {
          color: #0b5ed7;
          transition: transform color ease-in-out 0.1s;
        }
      }
    }
  }

  @media screen and (max-width: 1070px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 555px) {
    grid-template-columns: 1fr;

    .single-tile {
      width: 100%;
    }
  }
`
