import React from 'react';
import styled from '@emotion/styled';
import theme from '../theme';

interface Props {
  className?: string;
}

const Element = styled.div({
  width: '100%',
  padding: theme.spacing[4],
  backgroundColor: theme.colors.white,
  borderRadius: theme.borderRad.default,
  boxShadow:
    '0 6px 12px -2px rgba(50,50,93,.25), 0 3px 7px -3px rgba(0,0,0,.3)',
  // boxShadow:
  //   '0px 15px 35px rgba(50, 50, 93, 0.25), 0px 5px 15px rgba(0, 0, 0, 0.07)',
});

const Card: React.FunctionComponent<Props> = ({ className, ...others }) => {
  return <Element className={className} {...others} />;
};

export default Card;
