import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SRoot = styled.div`
  display: flex;

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Link = styled(NavLink)`
  font-size: 1.6rem;
  white-space: nowrap;
`;
