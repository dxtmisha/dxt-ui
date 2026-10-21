// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { computed, reactive, ref } from 'vue'
import { ImageText } from '../ImageText'
import { ImageType } from '../ImageType'
import type { ImageData } from '../ImageData'
import type { ImageProps } from '../props'

describe('ImageText', () => {
  const isMounted = ref(true)

  const createHelper = (props: ImageProps, imageValue?: unknown) => {
    const type = new ImageType(props, isMounted)
    const mockData = {
      image: computed(() => imageValue)
    } as unknown as ImageData

    return new ImageText(props, () => type, () => mockData)
  }

  it.each([undefined, null, '', ' '].map(value => ({ value })))('returns undefined for empty input %j', ({ value }) => {
    const helper = createHelper({ value } as ImageProps)
    expect(helper.get()).toBeUndefined()
  })

  it.each([
    ['$home', 'home'],
    ['material-home', 'home'],
    ['filled-home', 'home'],
    ['outlined-home', 'home'],
    ['round-home', 'home'],
    ['sharp-home', 'home'],
    ['two-tone-home', 'home'],
    ['$account_circle', 'account_circle'],
    ['home', 'home'],
    ['f-vn', 'VN']
  ])('prepares display text for %s as %s', (value, expected) => {
    const helper = createHelper({ value })
    expect(helper.get()).toBe(expected)
  })

  it('returns PDF viewer url when type is PDF and image is a string', () => {
    const pdfUrl = '/document.pdf?token=test#page=2&toolbar=0&scrollbar=1'
    const helper = createHelper({ value: 'document.pdf' }, pdfUrl)
    expect(helper.get()).toBe(pdfUrl)
  })

  it('reactively updates when input changes', () => {
    const props = reactive<ImageProps>({ value: '$home' })
    const type = new ImageType(props, isMounted)
    const mockData = { image: computed(() => undefined) } as unknown as ImageData
    const helper = new ImageText(props, () => type, () => mockData)

    expect(helper.get()).toBe('home')
    props.value = 'material-account_circle'
    expect(helper.get()).toBe('account_circle')
    props.value = 'f-vn'
    expect(helper.get()).toBe('VN')
    props.value = '#fff'
    expect(helper.get()).toBeUndefined()
  })
})
