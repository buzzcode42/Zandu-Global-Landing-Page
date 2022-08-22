import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    position: relative;
    width: 100%;
    height: 100vh;
    padding-bottom: 40%;
    user-select: none;
    width: 100%;
    background: #f6f7f8;
    box-shadow: 0 0 22px rgba(0, 0, 0, 0.5);

    input {
      display: none;
    }
  `}
`

export const ImageWrapper = styled.div`
  ${({ image }) => css`
    background-image: ${`url(${image})`};
    background-size: cover;
    background-position: center center;
    position: absolute;
    width: 100%;
    height: 300%;
    visibility: hidden;

    @keyframes scroll {
      0% {
        opacity: 0.3;
      }
      100% {
        opacity: 1;
      }
    }
  `}
`

const Move = styled.label`
  ${() => css`
    width: 12%;
    height: inherit;
    position: absolute;
    top: 0;
    transition: 0.45s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      width: 60%;
      padding-bottom: 400rem;
      position: relative;
    }

    > div > span {
      position: absolute;
      top: 25%;
      width: 0px;
      height: 0px;
    }
  `}
`

export const Prev = styled(Move)`
  ${() => css`
    left: 0;

    > div > span {
      left: 30%;
      width: 25%;
      height: 0;
      padding-top: 25%;
      padding-bottom: 25%;
      overflow: hidden;
      &::after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        margin-top: -500px;
        border-top: 500px solid transparent;
        border-bottom: 500px solid transparent;
        border-right: 500px solid gray;
      }
    }
  `}
`

export const Next = styled(Move)`
  ${() => css`
    right: 0;
    > div > span {
      right: 30%;
      width: 0;
      height: 0;
      padding-top: 25%;
      padding-bottom: 25%;
      padding-left: 25%;
      overflow: hidden;
      &::after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        margin-top: -500px;
        margin-left: -500px;
        border-top: 500px solid transparent;
        border-bottom: 500px solid transparent;
        border-left: 500px solid gray;
      }
    }
  `}
`