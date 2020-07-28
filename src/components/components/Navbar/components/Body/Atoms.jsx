import styled from 'styled-components';

export const SRoot = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  height: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
  padding-left: 28px;
`;
