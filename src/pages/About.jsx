import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Result } from "antd";

const About = () => {
  return (
    <div>
      <Result
        icon={<SmileOutlined />}
        title="感谢选择天堂电影院进行网上购票！"
        subTitle="Cảm ơn đã chọn ra phim thiên đường để mua vé trực tuyến!"
      />
    </div>
  );
};

export default About;
