import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, BoxProps } from '@sk8-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento Box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null, // no control for this component
      },
    },
  },
} as Meta<BoxProps>

// Button variants
export const Primary: StoryObj<BoxProps> = {}
