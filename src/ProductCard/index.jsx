import { StyledProductCard } from './style';
import React from 'react';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';

const ProductCard = ({ name, img }) => {
  return (
    <StyledProductCard>
      <div className="imageBox">
        <img src={img} alt={name} />
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
