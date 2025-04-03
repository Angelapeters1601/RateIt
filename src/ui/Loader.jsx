import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.fullscreen ? '100vh' : 'auto'};
  padding: ${props => props.fullscreen ? '0' : '2rem'};
`;

const LoaderSpinner = styled.div`
  width: ${props => props.size || '64px'};
  height: ${props => props.size || '64px'};
  border-radius: 50%;
  background: linear-gradient(45deg, #ff4d4d, #f9cb28, #4d79ff, #6f42c1);
  background-size: 600% 600%;
  animation: ${gradientAnimation} 2s ease infinite;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    background: white;
    border-radius: 50%;
  }
`;

function Loader ({ size, fullscreen, className }) {
  <LoaderContainer fullscreen={fullscreen} className={className}>
    <LoaderSpinner size={size} />
  </LoaderContainer>
};
export default Loader