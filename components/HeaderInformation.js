import styled from 'styled-components'

const HeaderBackground = styled.div`
  background: url('/static/image/header.jpg') no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  display: block;
  width: 100%;
  height: 370px;
`;

const HeaderInformation = () => (
  <div>
    <HeaderBackground />
    Hello world
  </div> 
)

export default HeaderInformation;
