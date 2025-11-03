import { resizeImageByMax } from '@dxtmisha/functional-basic'

export function ensureMaxSize(
  file: Uint8Array,
  maxSize: number = 720
): string {
  const blob = new Blob([file as any], { type: 'image/jpg' })
  const image = URL.createObjectURL(blob)
  const value = resizeImageByMax(image, maxSize)

  console.log('image', maxSize, value)

  return image
}
