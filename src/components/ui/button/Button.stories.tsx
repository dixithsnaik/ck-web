import type { Meta, StoryObj } from "@storybook/react";
import { Button, buttonVariants } from "./button";
import type { VariantProps } from "class-variance-authority";

// Extract the variant and size types directly from buttonVariants
type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>;
type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>;

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"] as ButtonVariant[],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"] as ButtonSize[],
    },
    asChild: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click me",
    variant: "default",
    size: "default",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {(["default", "destructive", "outline", "secondary", "ghost", "link"] as ButtonVariant[]).map(
        (variant) => (
          <Button key={variant} variant={variant}>
            {variant}
          </Button>
        )
      )}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {(["sm", "default", "lg", "icon"] as ButtonSize[]).map((size) => (
        <Button key={size} size={size}>
          {size === "icon" ? "🔍" : size}
        </Button>
      ))}
    </div>
  ),
};

export const AsLink: Story = {
  render: () => (
    <a className={buttonVariants({ variant: "link" })} href="#">
      Styled Link
    </a>
  ),
};
