import styled from 'styled-components';

const SidebarWrapper = styled.div`
  .active {
    width: 100%;
    color: white;
    background-color: ${props=>props.color.body};
    border-radius: 5px;
  }
`;
export default SidebarWrapper;
