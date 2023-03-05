import styled from 'styled-components';

export const StyledProductCard = styled.li`
  border-radius: 5px;
  transition: 0.3s;
  list-style: none;
  width: 300px;

  .imageBox {
    img {
      width: 100%;
      heigth: 90%;
      object-fit: contain;    
      border-radius: 5px;
    }
  }
`;
