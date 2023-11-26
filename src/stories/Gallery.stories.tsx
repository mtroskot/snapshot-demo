import type { Meta, StoryObj } from "@storybook/react";
import Gallery from "@/components/Gallery";

const meta = {
  title: "components/Gallery",
  component: Gallery,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args:{imageUrls:['/image.png','/image.png','/image.png']}
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Gallery: Story = {};
