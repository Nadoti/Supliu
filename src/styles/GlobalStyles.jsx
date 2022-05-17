import {createGlobalStyle} from 'styled-components'
import background from '../Assets/background.png'

export const GlobalStyles = createGlobalStyle`

  :root {
    --gray-700: #747675
  }

  body {
    background: url(${background}) no-repeat center;
    height: 750px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  .react-modal-overlay {
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: white;
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
    text-align: center;
    display: flex;
    flex-direction: column;

    .btnFecharAlbumModal {
      position: absolute;
      top: -2.5rem;
      right: -.5rem;
      padding: 1rem;
      border-radius: 50%;
      border: 1px solid red;
      background: red;
      transition: all .2s;
      cursor: pointer;
      color: white;
      font-weight: bold;
      font-size: 1rem;

      &:hover {
        background: white;
        color: red;
      }
    }

    button {
      margin-top: 2rem;
    }

    input {
      margin-bottom: 1rem;
    }

    h4 {
      color: #000;
      margin-bottom: 1rem;
      font-size: 2rem;
    }
  }


`