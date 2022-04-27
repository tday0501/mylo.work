import React from "react";
import Home from "../index";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../utils/theme";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Pages/Home",
  component: Home,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Home {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
