import styled from 'styled-components';

export const GifContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ResponsiveIframe = styled.iframe`
  /* position: absolute; */
  display: flex;
  /* overflow-x: auto; */
  flex-direction: row;
  /* top: 0; */
  /* left: 0; */
  /* bottom: 0; */
  /* right: 0; */
  width: 480;
  height: 360;
`;