import React from "react";

const Sound = () => {
  let utter = new SpeechSynthesisUtterance();
  utter.lang = "en-US";
  utter.text = "Hello World";
  utter.volume = 0.5;

  utter.onend = function () {
    alert("speech has finished");
  };

  window.speechSynthesis.speak(utter);

  return <div>hi sasa</div>;
};

export default Sound;
