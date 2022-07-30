import styled, { keyframes } from 'styled-components';
import { ConveyorBorderStyles } from './ConveyorBorder';

const BORDER_COLOR = '#0170fe';

const getConveyorKeyframes = (dashWidth: number) => keyframes`
  100% {
    background-position: ${dashWidth}px 0, 100% ${dashWidth}px, -${dashWidth}px 100%, 0 -${dashWidth}px;
  }
`;

export const StyledConveyorBorder = styled.div<{ borderStyles: ConveyorBorderStyles }>`
  outline: ${(props) => props.borderStyles.thickness}px solid ${BORDER_COLOR};
  outline-offset: -${(props) => props.borderStyles.thickness}px;
  transition: none;
  cursor: pointer;

  &:hover {
    outline: ${(props) => props.borderStyles.thickness}px solid transparent;
    transition: all 0.3s linear;
    background: linear-gradient(
          90deg,
          ${BORDER_COLOR} ${(props) => props.borderStyles.dashDistancePercent}%,
          transparent 0
        )
        repeat-x,
      linear-gradient(0, ${BORDER_COLOR} ${(props) => props.borderStyles.dashDistancePercent}%, transparent 0) repeat-y,
      linear-gradient(90deg, ${BORDER_COLOR} ${(props) => props.borderStyles.dashDistancePercent}%, transparent 0)
        repeat-x,
      linear-gradient(0, ${BORDER_COLOR} ${(props) => props.borderStyles.dashDistancePercent}%, transparent 0) repeat-y;
    background-size: ${(props) => props.borderStyles.dashWidth}px ${(props) => props.borderStyles.thickness}px,
      ${(props) => props.borderStyles.thickness}px ${(props) => props.borderStyles.dashWidth}px,
      ${(props) => props.borderStyles.dashWidth}px ${(props) => props.borderStyles.thickness}px,
      ${(props) => props.borderStyles.thickness}px ${(props) => props.borderStyles.dashWidth}px;
    background-position: 0 0, 100% 0, 0 100%, 0 0;
    animation: ${(props) => getConveyorKeyframes(props.borderStyles.dashWidth)} 0.3s linear infinite;
  }
`;
