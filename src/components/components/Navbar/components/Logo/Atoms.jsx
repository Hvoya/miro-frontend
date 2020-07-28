import styled from 'styled-components';
import AngleIcon from '../../../../icons/AngleIcon';

export const SRoot = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 88px;
  width: 280px;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary};
  z-index: ${(props) => props.zIndex};

  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 88px;

  font-size: 30px;
`;

export const SArrowBlock = styled.div`
  position: absolute;
  height: 88px;
  width: 20px;
  left: 100%;
  top: 0;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(AngleIcon)`
  transform: rotate(-90deg) translateY(1px);
  height: 15px;
  color: ${({ theme }) => theme.colors.secondary};

  path {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;
