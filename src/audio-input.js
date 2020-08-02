import React from "react";

import { AudioAnalyser } from "./audio-analyser";

export class AudioInput extends React.Component {
  constructor() {
    super();
    this.audioRef = React.createRef();

    this.state = { mediaStream: null };
  }

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((mediaStream) => {
      const audio = this.audioRef.current;
      if ("srcObject" in audio) {
        audio.srcObject = mediaStream;
      } else {
        // Old version
        audio.src = window.URL.createObjectURL(mediaStream);
      }

      audio.onloadedmetadata = function (ev) {
        audio.play();
      };

      this.setState({ mediaStream });
    });
  }

  render() {
    return (
      <>
        <audio id="audio-player" ref={this.audioRef}></audio>
        {this.state.mediaStream ? (
          <AudioAnalyser audio={this.state.mediaStream} />
        ) : (
          ""
        )}
      </>
    );
  }
}
