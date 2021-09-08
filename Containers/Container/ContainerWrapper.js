import styled from 'styled-components';

const ContainerWrapper = styled.div`
  .navabar {
    height: 80px;
    background-color: ${(props) => props.color.navbarBg};
    color: ${(props) => props.color.color};
  }
  .right {
    width: 100%;
    display: flex;
    min-height: 100vh;
    .sidebar {
      width: 260px !important;
      height: 100vh;
      overflow-y: auto;
      position: sticky;
      top: 0;
      left: 0;
      background-color: ${(props) => props.color.navbarBg} !important;
      a {
        color: ${(props) => props.color.a} !important;
      }
      a:hover {
        color: ${(props) => props.color.aHover} !important;
      }
    }
    .content {
      flex: 1;
      background-color: ${(props) => props.color.body} !important;
    }
  }
  @media only screen and (max-width: 900px) {
    .sidebar {
      position: absolute !important;
      top: 80px !important;
      left: 0;
      background-color: lightblue;
    }
  }
`;
export default ContainerWrapper;
