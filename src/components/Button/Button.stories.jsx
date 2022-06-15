import React from "react";
import Button from "./Button";

export default {
  title: "form/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "danger", "secondary", "success"],
    },
    // onClick: {
    //   action: "clicked",
    // },
    // onMouseUp: {
    //   action: "Up!!",
    // },
  },
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => (
  <Button {...args} onClick={() => console.log("clicked!!")} />
);

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};
