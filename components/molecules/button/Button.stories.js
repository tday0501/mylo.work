// Button.stories.js|jsx

import React from "react";

import Button from "./Button";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../../utils/theme";
import { TRY_MYLO } from "../../../utils/stringConstants";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Molecules/Button",
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    }, 
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  color: "primary",
  label: TRY_MYLO,
  size: 'small',
  style: {
    border: "1px solid #e06277",
    padding: "4px 24px"
  }
};
