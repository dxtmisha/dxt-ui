// export:none

import { isObject, toArray } from '@dxtmisha/functional-basic'

import { type PropertyItemInput } from '../../../types/propertyTypes'

export type ConvectorShadowItem = {
  type: string
  color: string
  x: string
  y: string
  blur: string
  spread: string
}

/**
 * Transforming data into shadow.
 *
 * Преобразование данных в тень.
 * @param item values for conversion/ значения для преобразования
 */
export function convectorShadow(item: PropertyItemInput): void {
  const data: string | ConvectorShadowItem | ConvectorShadowItem[] = item?.value

  if (isObject(data)) {
    const shadows: string[] = []

    toArray(data)
      .forEach((item) => {
        const shadow: string[] = []
        const {
          type,
          color,
          x,
          y,
          blur,
          spread
        } = item

        const colorValue = color.match(/^{/)
          ? `@ui.toCustomVarRgb(${color})`
          : color

        if (type === 'innerShadow') {
          shadow.push('inset')
        }

        shadow.push(
          x && x !== '0' && x.match(/^[0-9]+$/) ? `${x}px` : x ?? '0',
          y && y !== '0' && y.match(/^[0-9]+$/) ? `${y}px` : y ?? '0',
          blur && blur !== '0' && blur.match(/^[0-9]+$/) ? `${blur}px` : blur ?? '0',
          spread && spread !== '0' && spread.match(/^-?[0-9]+$/) ? `${spread}px` : spread ?? '0',
          colorValue ?? 'rgba(0, 0, 0, 1)'
        )

        shadows.push(shadow.join(' ').trim())
      })

    item.value = shadows.join(', ')
  }
}
