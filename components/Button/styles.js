import styled from 'styled-components';

export default styled.button`
  padding: 19px 0;
  text-transform: unset;
  background: ${props => (props.color === 'primary' ? '#FF8500' : '#0a57a2')};
  color: #F9F9F9; 
  font-weight: bold;
  width: 200px;
  display: block;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
  transition: all 0.3s ease-in;
  &:hover {
    background: ${props => (props.color === 'primary' ? '#ED8221' : '#1B78CD')};
  }
`;         