import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Primary Button",
    variant: "primary",
    asChild: false,
    className: "",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "primaryOutlined",
        "secondaryOutlined",
        "cancel",
      ],
    },
    asChild: {
      control: { type: "boolean" },
    },
    className: {
      control: { type: "text" },
    },
    children: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: "Primary Button",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary" className="mx-2">Primary Button</Button>
      <Button variant="secondary" className="mx-2">Secondary Button</Button>
      <Button variant="primaryOutlined" className="mx-2">Primary Outlined</Button>
      <Button variant="secondaryOutlined" className="mx-2">Secondary Outlined</Button>
      <Button variant="cancel" className="mx-2">Cancel</Button>
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary" className="mx-2">
        <span className="mr-2">Next</span>
        {/* Example custom content - you can swap for your own icons/components */}
        <svg width="16" height="16" fill="none"><path d="M1 8h14M9 3l6 5-6 5" stroke="#222" strokeWidth="2"/></svg>
      </Button>
      <Button variant="cancel" className="mx-2">
        <span>Cancel</span>
        {/* Add another icon or spinner here if you want */}
      </Button>
    </div>
  ),
};

export const AsAnchor: Story = {
  render: () => (
    <Button asChild variant="primary" className="mx-2">
      <a href="https://storybook.js.org" target="_blank" rel="noopener noreferrer">
        Button as a Link
      </a>
    </Button>
  ),
};
