/**
 * Ref: https://css-tricks.com/scroll-shadows-pure-css-parallax-game-back-on/
 */

import React from 'react';
import { StyledScrollbar } from './Scrollbar.styles';

export const Scrollbar: React.FC = () => {
  return (
    <StyledScrollbar>
      <div className="shadow-scrollbar-ctn">
        <div className="shadow-scrollbar-content" />
      </div>
    </StyledScrollbar>
  );
};
