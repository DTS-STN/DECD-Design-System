import React from "react";
import { Quote } from "./Quote";

// export default {
//   title: "Not Used/Utility/Quote",
//   component: Quote,
// };

const Template = (args) => <Quote {...args}></Quote>;

export const Primary = Template.bind({});

Primary.args = {
  text: "Some quote",
  author: "Author",
};
