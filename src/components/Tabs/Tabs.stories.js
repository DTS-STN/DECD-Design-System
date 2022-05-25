import { Tabs } from "./Tabs";
export default {
  title: "Components/Tabs",
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "Tabs",
  tabs: [
    {
      title: "tab1",
      children: <p>this is tab 1 dksad dsnkadn adks wkw adk </p>,
    },
    {
      title: "tab2",
      children: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      ),
    },
    {
      title: "tab3",
      children: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea comenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.
        </p>
      ),
    },
  ],
};
