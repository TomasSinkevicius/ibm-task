import styled from 'styled-components'

export const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;

  .single-tile {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    border: 1px solid black;
    padding: 4px;
    width: 200px;

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

      p {
        text-decoration: underline;
        color: blue;
      }
    }
  }

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;

    .single-tile {
      width: 100%;
    }
  }
`
