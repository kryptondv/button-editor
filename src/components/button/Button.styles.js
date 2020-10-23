import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${props => props.background};
  padding: ${props => props.paddingX} ${props => props.paddingY};
  color: ${props => props.color};
  border-radius: ${props => props.radius};
  font-size: ${props => props.fontSize};
  border: none;
  margin: 0 auto;
  display: block;
  cursor: pointer;
`;

export default StyledButton;
