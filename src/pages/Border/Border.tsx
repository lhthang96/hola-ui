import React from 'react';
import { StyledBorderPage } from './Border.styles';
import { FilledFromCornerBorder } from './FilledFromCornerBorder';

export const Border: React.FC = () => {
  return (
    <StyledBorderPage>
      <FilledFromCornerBorder className="border-item" />
    </StyledBorderPage>
  );
};
