import { Meta, StoryObj } from "@storybook/react";
import Select from "../components/UI/Select";
import { Option } from "../types/Option";

const options: Option[] = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option with icon 2" },
  { value: "3", label: "Option with number 3" },
  { value: "4", label: "long long long long option 4" },
  { value: "5", label: "long long long long long option 5" },
  { value: "6", label: "long long long long long long option 6" },
  { value: "7", label: "long long long long long long option 7" },
];

const meta = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    options: {
      control: {
        type: "object",
      },
    },
    multiple: { control: "boolean" },
    withSearch: { control: "boolean" },
    portal: { control: "boolean" },
    zIndex: { control: { type: "number", min: 0, max: 2000 } },
    onChange: { action: "changed" },
    outlined: { control: "boolean" },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options,
    multiple: true,
    onChange: () => {},
    withSearch: true,
    portal: false,
    outlined: false,
    zIndex: 100,
  },
};
