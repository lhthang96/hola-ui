import React, { ComponentPropsWithRef, useMemo } from 'react';
import { StyledFilledFromCornerBorder } from './FilledFromCornerBorder.styles';
import { defaultsDeep } from 'lodash';

export type FilledFromCornerBorderStyles = {
  /**
   * Distance between the pseudo border elements and the container
   */
  distance?: number;

  /**
   * The width of pseudo border elements in non-active state
   */
  initBorderWidth?: number;

  /**
   * The height of pseudo border elements in non-active state
   */
  initBorderHeight?: number;

  /**
   * The thickness of pseudo border element
   */
  thickness?: number;

  /**
   * Transition duration
   */
  duration?: number;
};

type FilledFromCornerBorderProps = ComponentPropsWithRef<'div'> & {
  borderStyles?: FilledFromCornerBorderStyles;
};

const DEFAULT_BORDER_STYLES: FilledFromCornerBorderStyles = {
  distance: 5,
  initBorderWidth: 20,
  initBorderHeight: 20,
  thickness: 1,
  duration: 0.3,
};

export const FilledFromCornerBorder: React.FC<FilledFromCornerBorderProps> = (props) => {
  const { borderStyles: propsBorderStyles } = props;
  const borderStyles = useMemo(() => defaultsDeep(propsBorderStyles || {}, DEFAULT_BORDER_STYLES), [propsBorderStyles]);

  return <StyledFilledFromCornerBorder borderStyles={borderStyles} {...props} />;
};
