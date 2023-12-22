import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Carousel, CarouselSlide } from './index'

const meta: Meta<typeof Carousel> = {
  title: 'Example/Carousel',
  component: Carousel,
}

export default meta

type Story = StoryObj<typeof Carousel>

export const Primary: Story = {
  args: {
    placeholder: 'Primary Carousel',
    slides: [
      {
        slideUrl: 'https://picsum.photos/id/237/200/300',
        altText: 'Slide 1',
      },
      {
        slideUrl: 'https://picsum.photos/seed/picsum/200/300',
        altText: 'Slide 2',
      },
      // Add more slides here
    ],
    maxWidth: 'max-w-4xl',
    maxHeight: 'max-h-96',
  },
}

export const Secondary: Story = {
  args: {
    placeholder: 'Secondary Carousel',
    slides: [
      // Different set of slides
    ],
    maxWidth: 'max-w-2xl',
    maxHeight: 'max-h-48',
  },
}

export const FullWidth: Story = {
  args: {
    placeholder: 'Full Width Carousel',
    slides: [
      // Slides array
    ],
    maxWidth: 'max-w-full',
    maxHeight: 'max-h-screen',
  },
}
