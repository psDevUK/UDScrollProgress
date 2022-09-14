import React from 'react';
import { withComponentFeatures } from 'universal-dashboard';
import ScrollProgressRead from 'react-scroll-progress-read';
const UDScrollProgress = props => {
  return <ScrollProgressRead
        key={props.id}
        backgroundColor={props.bgColor}
        barColor={props.color}
        height={props.height}
      />;
}

export default withComponentFeatures(UDScrollProgress)