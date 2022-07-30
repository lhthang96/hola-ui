import React from 'react';
import { StyledBorderPage } from './Border.styles';
import { ConveyorBorder } from './ConveyorBorder';
import { FilledFromCornerBorder } from './FilledFromCornerBorder';

export const Border: React.FC = () => {
  return (
    <StyledBorderPage>
      <FilledFromCornerBorder className="border-item" />
      <ConveyorBorder className="border-item" />
    </StyledBorderPage>
  );
};
