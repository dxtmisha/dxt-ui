import { createElement } from '@dxtmisha/functional-basic'

export function ensureMaxSize(
  file: Uint8Array,
  maxSize: number = 720
): string {
  const blob = new Blob([file as any], { type: 'image/jpg' })
  const image = URL.createObjectURL(blob)
  const element = createElement<HTMLImageElement>(
    undefined,
    'img',
    { src: image }
  )

  console.log('image', maxSize, element)

  return image
}
