import React from 'react';
import {QRCodeCanvas} from 'qrcode.react';

const About = () => {
  return (
    <div>
      About Me
      <QRCodeCanvas value="https://reactjs.org/" />,
    </div>
  );
};

export default About;