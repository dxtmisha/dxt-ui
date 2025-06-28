/** @jsxImportSource react */

import React from 'react'
import {
  Canvas,
  Controls,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks'

export const StorybookMain = (
  {
    name,
    description,
    story
  }: {
    name: string
    description: string
    story: any
  }
): React.ReactNode => (
  <>
    <Title children={name} />
    <Subtitle children={description} />
    <Canvas of={story} />
    <Controls of={story} />
  </>
)
