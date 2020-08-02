import React from "react";

import { AudioInput } from "./audio-input";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const AudioContainer = styled.div``;
export class App extends React.Component {
  render() {
    return (
      <>
        <Container>
          <AudioContainer>
            <AudioInput />
          </AudioContainer>
        </Container>
      </>
    );
  }
}
