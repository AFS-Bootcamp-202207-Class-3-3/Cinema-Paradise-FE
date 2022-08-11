import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { SmileOutlined } from "@ant-design/icons";
import { Result } from "antd";

const About = () => {
  return (
    <div>
      About Me
      <QRCodeCanvas value="https://reactjs.org/" />,
      <Result
        icon={<SmileOutlined />}
        title="If you encounter problems, please contact us!"
      />
    </div>
  );
};

export default About;
