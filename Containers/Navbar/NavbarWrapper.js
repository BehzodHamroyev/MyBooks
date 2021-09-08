import styled from 'styled-components';

const NavbarWrapper = styled.div`
  & {
    padding: 0 40px;
    height: 100%;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center !important;
    background-color: ${props=>props?.color?.navbarBg};
     .logo {
      width: 90px;
    }
  }
`;
export default NavbarWrapper;
