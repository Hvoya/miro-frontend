import styled from 'styled-components';

export const SRoot = styled.nav`
  background: ${({ theme }) => theme.colors.tertiary};
  height: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;

  padding-top: 30px;
`;
