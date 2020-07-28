import styled from 'styled-components';

export const SRoot = styled.div`
  position: relative;
  z-index: ${(props) => props.zIndex};
  width: 88px;
  height: 88px;
`;

export const SBottomShard = styled.div`
  width: 100%;
  height: 50%;
  background-color: black;
`;

export const STopShardsGroup = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
`;

export const STopLeftShard = styled.div`
  width: 50%;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
`;

export const STopRightShard = styled.div`
  width: 50%;
  height: 100%;
  background: white;
`;
