/** @jsxImportSource react */

import React from 'react'

import { WikiStorybookDescriptions } from '../../classes/WikiStorybookDescriptions'

/**
 * Component for displaying Storybook component descriptions in the wiki
 *
 * Компонент для отображения описаний компонентов Storybook в вики
 * @param componentName - Name of the component to find in the descriptions/ Имя компонента для поиска в описаниях
 * @param type - Type of the description to retrieve/ тип описания для получения
 */
export const StorybookDescriptions = (
  {
    componentName,
    type
  }: {
    componentName: string
    type: string
  }
): React.ReactNode => {
  return new WikiStorybookDescriptions(componentName)
    .getDescriptionByType(type)
}
