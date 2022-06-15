import React from "react";
import Input from "./Input";

export default {
  title: "form/Input",
  component: Input,
  // decorators: [
  //   (Story) => (
  //     <div className="center">
  //       <Story />
  //     </div>
  //   ),
  // ],
};

export const Small = () => <Input size="small" placeholder="Samll size" />;
export const Medium = () => <Input size="medium" placeholder="medium size" />;
export const Large = () => <Input size="large" placeholder="Large size" />;
