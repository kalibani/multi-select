import { Meta, StoryObj } from "@storybook/react";
import CustomSelect from "../components/UI/CustomSelect";
import { Option } from "../types/Option";

const options: Option[] = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option with icon 2" },
  { value: "3", label: "Option with number 3" },
  { value: "4", label: "Option long long long option 4" },
];

const meta = {
  title: "Components/Select",
  component: CustomSelect,
  argTypes: {
    isMultiple: { control: "boolean" },
    searchable: { control: "boolean" },
    portal: { control: "boolean" },
    zIndex: { control: { type: "number", min: 0, max: 2000 } },
    onChange: { action: "changed" }, // Use Storybook's action to log changes
  },
} satisfies Meta<typeof CustomSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: () => {},
    options: options,
    isMultiple: true,
    searchable: true,
    portal: false,
    zIndex: 100,
  },
};
