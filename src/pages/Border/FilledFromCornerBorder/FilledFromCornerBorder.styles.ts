import styled from 'styled-components';
import { FilledFromCornerBorderStyles } from './FilledFromCornerBorder';

const BORDER_COLOR = '#0170fe';

export const StyledFilledFromCornerBorder = styled.div<{ borderStyles: FilledFromCornerBorderStyles }>`
  position: relative;
  border: 1px solid ${BORDER_COLOR};
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: ${(props) => props.borderStyles.initBorderWidth}px;
    height: ${(props) => props.borderStyles.initBorderHeight}px;
    transition: all ${(props) => props.borderStyles.duration}s ease-in-out;
  }

  &::before {
    top: -${(props) => props.borderStyles.distance}px;
    left: -${(props) => props.borderStyles.distance}px;
    border-top: ${(props) => props.borderStyles.thickness}px solid ${BORDER_COLOR};
    border-left: ${(props) => props.borderStyles.thickness}px solid ${BORDER_COLOR};
  }

  &::after {
    bottom: -${(props) => props.borderStyles.distance}px;
    right: -${(props) => props.borderStyles.distance}px;
    border-bottom: ${(props) => props.borderStyles.thickness}px solid ${BORDER_COLOR};
    border-right: ${(props) => props.borderStyles.thickness}px solid ${BORDER_COLOR};
  }

  &:hover {
    &::before,
    &::after {
      width: calc(100% + ${(props) => props.borderStyles.distance * 2}px);
      height: calc(100% + ${(props) => props.borderStyles.distance * 2}px);
    }
  }
`;
