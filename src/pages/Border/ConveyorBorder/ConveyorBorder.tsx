import { defaultsDeep } from 'lodash';
import React, { ComponentPropsWithRef, useMemo } from 'react';
import { StyledConveyorBorder } from './ConveyorBorder.styles';

export type ConveyorBorderStyles = {
  /**
   * Thickness of the border
   */
  thickness?: number;

  /**
   * Transition duration
   */
  duration?: number;

  /**
   * The width for each dash
   */
  dashWidth?: number;

  /**
   * The percentage of distance between dashes to dash width
   */
  dashDistancePercent?: number;
};

type ConveyorBorderProps = ComponentPropsWithRef<'div'> & {
  borderStyles?: ConveyorBorderStyles;
};

const DEFAULT_BORDER_STYLES: ConveyorBorderStyles = {
  thickness: 1,
  duration: 0.3,
  dashWidth: 4,
  dashDistancePercent: 50,
};

export const ConveyorBorder: React.FC<ConveyorBorderProps> = (props) => {
  const { borderStyles: propsBorderStyles } = props;
  const borderStyles = useMemo(() => defaultsDeep(propsBorderStyles || {}, DEFAULT_BORDER_STYLES), [propsBorderStyles]);

  return <StyledConveyorBorder borderStyles={borderStyles} {...props} />;
};
