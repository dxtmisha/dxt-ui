// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'

import { TextInclude } from '../../../classes/TextInclude'
import { InputFileItemFile } from '../InputFileItemFile'
import { InputFileItemStatus } from '../InputFileItemStatus'
import type { InputFileItemPropsBasic } from '../props'

describe('InputFileItemStatus', () => {
  const createHelper = (props: Partial<InputFileItemPropsBasic> = {}) => {
    const fullProps = { ...props } as InputFileItemPropsBasic
    const text = new TextInclude(fullProps)
    const fileItem = new InputFileItemFile(fullProps)
    const statusItem = new InputFileItemStatus(fullProps, fileItem, text)

    return { fileItem, statusItem, text }
  }

  describe('status and is method', () => {
    it('detects uploading state via loading prop', () => {
      const { statusItem } = createHelper({ loading: true })
      expect(statusItem.status).toBe('uploading')
      expect(statusItem.is('uploading')).toBe(true)
      expect(statusItem.is('uploaded')).toBe(false)
      expect(statusItem.is('error')).toBe(false)
      expect(statusItem.is('idle')).toBe(false)
    })

    it('detects uploading state via status prop', () => {
      const { statusItem } = createHelper({ status: 'uploading' })
      expect(statusItem.status).toBe('uploading')
      expect(statusItem.is('uploading')).toBe(true)
    })

    it('detects error state via status prop', () => {
      const { statusItem } = createHelper({ status: 'error' })
      expect(statusItem.status).toBe('error')
      expect(statusItem.is('error')).toBe(true)
      expect(statusItem.is('uploading')).toBe(false)
      expect(statusItem.is('uploaded')).toBe(false)
      expect(statusItem.is('idle')).toBe(false)
    })

    it('detects uploaded state via status prop', () => {
      const { statusItem } = createHelper({ status: 'uploaded' })
      expect(statusItem.status).toBe('uploaded')
      expect(statusItem.is('uploaded')).toBe(true)
      expect(statusItem.is('uploading')).toBe(false)
      expect(statusItem.is('error')).toBe(false)
      expect(statusItem.is('idle')).toBe(false)
    })

    it('defaults to idle state when no active state is set', () => {
      const { statusItem } = createHelper({})
      expect(statusItem.status).toBe('idle')
      expect(statusItem.is('idle')).toBe(true)
      expect(statusItem.is('uploading')).toBe(false)
      expect(statusItem.is('uploaded')).toBe(false)
      expect(statusItem.is('error')).toBe(false)
    })
  })

  describe('message', () => {
    it('returns custom textLoadingFile or translated uploading text when uploading', () => {
      const { statusItem: customStatus } = createHelper({
        loading: true,
        textLoadingFile: 'Custom uploading message'
      })
      expect(customStatus.message).toBe('Custom uploading message')

      const { statusItem: defaultStatus } = createHelper({ loading: true })
      expect(defaultStatus.message).toBe('Uploading your file')
    })

    it('returns custom textError or default error message when in error state', () => {
      const { statusItem: customErrorStatus } = createHelper({
        status: 'error',
        textError: 'Upload failed'
      })
      expect(customErrorStatus.message).toBe('Upload failed')

      const { statusItem: defaultErrorStatus } = createHelper({ status: 'error' })
      expect(defaultErrorStatus.message).toBe('Error')
    })

    it('returns custom textUploadSuccess or default success message when uploaded', () => {
      const { statusItem: customSuccessStatus } = createHelper({
        status: 'uploaded',
        textUploadSuccess: 'Done uploading'
      })
      expect(customSuccessStatus.message).toBe('Done uploading')

      const { statusItem: defaultSuccessStatus } = createHelper({ status: 'uploaded' })
      expect(defaultSuccessStatus.message).toBe('File uploaded successfully')
    })

    it('returns caption if provided in idle state', () => {
      const { statusItem } = createHelper({ caption: 'Uploaded 2 hours ago' })
      expect(statusItem.message).toBe('Uploaded 2 hours ago')
    })

    it('falls back to formatted file size in idle state', () => {
      const { statusItem } = createHelper({ value: { size: 72 * 1024 * 1024 } })
      expect(statusItem.message).toBe('72 MB')
    })
  })
})
