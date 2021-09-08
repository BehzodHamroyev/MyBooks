import styled from "styled-components";

export const BookWrapper = styled.div`
  padding: 0 20px;
  background-color: ${(props) => props.color.body} !important;
  color: ${(props) => props.color.color} !important ;
  .rounded {
    border-radius: 15px !important;
  }
  .banerBook {
    background-color: ${(props) => props.color.cardBgColor} !important;
  }
  a {
    color: ${(props) => props.color.a} !important;
    &:hover {
      color: ${(props) => props.color.aHover} !important;
    }
  }
  .star {
    color: ${(props) => props.color.color} !important ;
  }

`;