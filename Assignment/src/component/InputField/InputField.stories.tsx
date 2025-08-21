import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";
import type { InputFieldProps } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<InputFieldProps>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    helperText: "This is a helper text",
    variant: "outlined",
    size: "md",
  },
};

export const Invalid: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    invalid: true,
    errorMessage: "Invalid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "Can't type here",
    disabled: true,
  },
};

export const Variants: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    variant: "filled",
  },
};
