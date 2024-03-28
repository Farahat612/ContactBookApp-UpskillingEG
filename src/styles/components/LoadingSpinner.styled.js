import styled from 'styled-components'

export const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 10px;

  h4 {
    margin-right: 10px;
    transform: translateY(-3px);
  }

  img {
    width: 30px;
  }
`
