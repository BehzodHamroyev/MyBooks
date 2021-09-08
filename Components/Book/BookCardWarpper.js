import styled from 'styled-components';

export const BookCardWrapper = styled.div`
  background-color: ${(props) => props?.color?.cardBgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: ${(props) => props?.color?.color};
  height: 100%;
  width: 100%;
  padding: 10px 20px;
  box-shadow: 0px 2px 4px 0 transparent;
  transition: linear all 0.2s;
  border-radius: 10px;

  &:hover {
    box-shadow: 0px 6px 8px 0 transparent;
  }
  .lineThrough {
    text-decoration: line-through;
  }
  .star {
    color: ${(props) => props?.color?.color};
  }
`;
