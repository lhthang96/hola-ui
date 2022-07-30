import styled from 'styled-components';
import { FilledFromCornerBorderProps } from './FilledFromCornerBorder';

const BORDER_COLOR = '#0170fe';

export const StyledFilledFromCornerBorder = styled.div<FilledFromCornerBorderProps>`
  position: relative;
  border: 1px solid ${BORDER_COLOR};

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: ${(props): number => props.borderStyles.initBorderWidth}px;
    height: ${(props): number => props.borderStyles.initBorderHeight}px;
    transition: all ${(props): number => props.borderStyles.duration}s ease-in-out;
  }

  &::before {
    top: -${(props): number => props.borderStyles.distance}px;
    left: -${(props): number => props.borderStyles.distance}px;
    border-top: ${(props): number => props.borderStyles.thickness}px solid ${BORDER_COLOR};
    border-left: ${(props): number => props.borderStyles.thickness}px solid ${BORDER_COLOR};
  }

  &::after {
    bottom: -${(props): number => props.borderStyles.distance}px;
    right: -${(props): number => props.borderStyles.distance}px;
    border-bottom: ${(props): number => props.borderStyles.thickness}px solid ${BORDER_COLOR};
    border-right: ${(props): number => props.borderStyles.thickness}px solid ${BORDER_COLOR};
  }

  &:hover {
    &::before,
    &::after {
      width: calc(100% + ${(props): number => props.borderStyles.distance * 2}px);
      height: calc(100% + ${(props): number => props.borderStyles.distance * 2}px);
    }
  }
`;
