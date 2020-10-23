import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${props => props.background};
  padding: ${props => props.paddingX}px ${props => props.paddingY}px;
  color: ${props => props.color};
  border-radius: ${props => props.radius}px;
  font-size: ${props => props.fontSize}px;
  border: none;
  margin: 0 auto;
  display: block;
  cursor: pointer;
`;

export default StyledButton;
