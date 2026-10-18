// @vitest-environment node
import './testWarnings'
import { describe, expectTypeOf, it } from 'vitest'
import type { ComputedRef, CSSProperties } from 'vue'
import type { ImageCoordinator } from '../ImageCoordinator'
import type { ImageData } from '../ImageData'
import type { ImageDesign } from '../ImageDesign'
import type { ImageImg } from '../ImageImg'
import type { ImageAttrs, ImageItem, ImagePictureItem, ImagePictureList, ImageRootAttrs } from '../basicTypes'
import type { ImageProps } from '../props'
import type { ImageClasses, ImageComponents, ImageExpose } from '../types'

describe('Image (contracts checked by TypeScript)', () => {
  it('accepts supported sources and empty values while rejecting arbitrary objects and primitives', () => {
    expectTypeOf<ImageProps['value']>().not.toBeAny()
    expectTypeOf<ImageProps['value']>().toEqualTypeOf<string | File | ArrayBuffer | Uint8Array<ArrayBuffer> | null | undefined>()
    expectTypeOf<{ value: number }>().not.toExtend<ImageProps>()
    expectTypeOf<{ value: boolean }>().not.toExtend<ImageProps>()
    expectTypeOf<{ value: number[] }>().not.toExtend<ImageProps>()
    expectTypeOf<{ value: { name: string } }>().not.toExtend<ImageProps>()
  })

  it('accepts mutable and readonly coordinate tuples with one to four numbers', () => {
    expectTypeOf<ImageProps['coordinator']>().not.toBeAny()
    expectTypeOf<{ coordinator: [number] }>().toExtend<ImageProps>()
    expectTypeOf<{ coordinator: [number, number] }>().toExtend<ImageProps>()
    expectTypeOf<{ coordinator: readonly [number, number, number] }>().toExtend<ImageProps>()
    expectTypeOf<{ coordinator: readonly [number, number, number, number] }>().toExtend<ImageProps>()
    expectTypeOf<{ coordinator: null }>().toExtend<ImageProps>()
    expectTypeOf<{ coordinator: [] }>().not.toExtend<ImageProps>()
    expectTypeOf<{ coordinator: [number, number, number, number, number] }>().not.toExtend<ImageProps>()
    expectTypeOf<{ coordinator: [string] }>().not.toExtend<ImageProps>()
    expectTypeOf<{ coordinator: number[] }>().not.toExtend<ImageProps>()
    expectTypeOf<ImageCoordinator['is']>().toEqualTypeOf<() => boolean>()
  })

  it('limits fetch priority to the supported native values', () => {
    expectTypeOf<ImageProps['fetchPriority']>().toEqualTypeOf<'high' | 'low' | 'auto' | undefined>()
    expectTypeOf<{ fetchPriority: 'urgent' }>().not.toExtend<ImageProps>()
    expectTypeOf<{ fetchPriority: number }>().not.toExtend<ImageProps>()
  })

  it('types picture descriptors and keys while rejecting invalid attribute values', () => {
    expectTypeOf<ImagePictureItem['srcset']>().toEqualTypeOf<string | undefined>()
    expectTypeOf<ImagePictureItem['media']>().toEqualTypeOf<string | undefined>()
    expectTypeOf<ImagePictureItem['type']>().toEqualTypeOf<string | undefined>()
    expectTypeOf<{ key: string, srcset: string, media: string, type: string, sizes: string, width: number, height: number }>().toExtend<ImagePictureItem>()
    expectTypeOf<{ key: number, srcset: string }>().toExtend<ImagePictureItem>()
    expectTypeOf<{ srcset: number }>().not.toExtend<ImagePictureItem>()
    expectTypeOf<{ media: boolean }>().not.toExtend<ImagePictureItem>()
    expectTypeOf<{ type: number }>().not.toExtend<ImagePictureItem>()
    expectTypeOf<Record<string, string> | ImagePictureList>().toEqualTypeOf<NonNullable<ImageProps['picture']>>()
  })

  it('exposes typed native bindings and styles without DOM element methods', () => {
    expectTypeOf<ImageAttrs['src']>().toEqualTypeOf<string | null | undefined>()
    expectTypeOf<ImageAttrs['alt']>().toEqualTypeOf<string | undefined>()
    expectTypeOf<ImageAttrs['fetchPriority']>().toEqualTypeOf<ImageProps['fetchPriority']>()
    expectTypeOf<'decode'>().not.toExtend<keyof ImageAttrs>()
    expectTypeOf<'naturalWidth'>().not.toExtend<keyof ImageAttrs>()
    expectTypeOf<{ srcset: number }>().not.toExtend<ImageAttrs>()
    expectTypeOf<ImageImg['binds']['value']>().toEqualTypeOf<ImageAttrs>()
    expectTypeOf<ImageImg['picture']['value']>().toEqualTypeOf<ImagePictureList | undefined>()
    expectTypeOf<ImageImg['styles']>().toEqualTypeOf<CSSProperties>()
  })

  it('keeps renderer attribute computations typed', () => {
    expectTypeOf<ImageDesign<ImageComponents, ImageExpose, ImageClasses, ImageProps>['propsImage']['value']>().not.toBeAny()
    expectTypeOf<ImageDesign<ImageComponents, ImageExpose, ImageClasses, ImageProps>['propsImage']['value']>().toEqualTypeOf<ImageRootAttrs>()
    expectTypeOf<ImageDesign<ImageComponents, ImageExpose, ImageClasses, ImageProps>['propsMain']['value']>().not.toBeAny()
    expectTypeOf<ImageDesign<ImageComponents, ImageExpose, ImageClasses, ImageProps>['propsMain']['value']>().toEqualTypeOf<ImageRootAttrs>()
  })

  it('preserves readonly computed refs after data guards', () => {
    // These callbacks are compiled but never invoked / Эти обработчики компилируются, но никогда не вызываются
    expectTypeOf((data: ImageData): void => {
      if (data.is()) {
        expectTypeOf(data.image).toExtend<ComputedRef<string | ImageItem>>()
        expectTypeOf(data.image.value).toExtend<string | ImageItem>()
        expectTypeOf(data.image.value).extract<undefined>().toBeNever()
        expectTypeOf(data.image.value).not.toBeAny()
        // @ts-expect-error Computed data is readonly / Вычисляемые данные доступны только для чтения
        data.image.value = '/replacement.png'
      }
    }).toBeFunction()

    expectTypeOf((data: ImageData): void => {
      if (data.isLink()) {
        expectTypeOf(data.image).toExtend<ComputedRef<string>>()
        expectTypeOf(data.image.value).toExtend<string>()
        expectTypeOf(data.image.value).not.toBeAny()
        // @ts-expect-error Computed links are readonly / Вычисляемые ссылки доступны только для чтения
        data.image.value = '/replacement.png'
      }
    }).toBeFunction()

    expectTypeOf((data: ImageData): void => {
      if (data.isImage()) {
        expectTypeOf(data.image).toExtend<ComputedRef<ImageItem>>()
        expectTypeOf(data.image.value).toExtend<ImageItem>()
        expectTypeOf(data.image.value.src).toEqualTypeOf<string>()
        expectTypeOf(data.image.value.width).toEqualTypeOf<number>()
        expectTypeOf(data.image.value).not.toBeAny()
        // @ts-expect-error Computed images are readonly / Вычисляемые изображения доступны только для чтения
        data.image.value = { ...data.image.value }
      }
    }).toBeFunction()
  })
})
