import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { animated } from 'react-spring';

export const SRoot = styled(NavLink)`
  display: flex;
  transition: background 0.3s;

  svg {
    fill: ${({ theme }) => theme.colors.secondary};
  }

  &.active {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const SText = styled(animated.div)`
  font-size: 1.4rem;
  font-weight: 300;
  white-space: nowrap;
`;

export const SInnerLink = styled(animated.div)`
  display: flex;
  height: 54px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SIcon = styled.div`
  width: 22px;
  display: flex;
  justify-content: center;
  margin-right: 25px;
`;
