// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'

import { TextInclude } from '../../../classes/TextInclude'
import { InputFileItemFile } from '../InputFileItemFile'
import type { InputFileItemCrop } from '../InputFileItemCrop'
import { InputFileItemStatus } from '../InputFileItemStatus'
import type { InputFileItemProps } from '../props'

describe('InputFileItemStatus', () => {
  const createHelper = (props: Partial<InputFileItemProps> = {}) => {
    const fullProps = { ...props } as InputFileItemProps
    const text = new TextInclude(fullProps)
    const mockCrop = { coordinator: undefined } as unknown as InputFileItemCrop
    const fileItem = new InputFileItemFile(fullProps, mockCrop)
    const statusItem = new InputFileItemStatus(fullProps, fileItem, text)

    return { fileItem, statusItem, text }
  }

  describe('status and is methods', () => {
    it('detects uploading state via loading prop', () => {
      const { statusItem } = createHelper({ loading: true })
      expect(statusItem.status).toBe('uploading')
      expect(statusItem.is('uploading')).toBe(true)
      expect(statusItem.isUploading()).toBe(true)
      expect(statusItem.isUploaded()).toBe(false)
      expect(statusItem.isError()).toBe(false)
      expect(statusItem.isIdle()).toBe(false)
    })

    it('detects uploading state via status prop', () => {
      const { statusItem } = createHelper({ status: 'uploading' })
      expect(statusItem.status).toBe('uploading')
      expect(statusItem.is('uploading')).toBe(true)
      expect(statusItem.isUploading()).toBe(true)
    })

    it('detects error state via status prop', () => {
      const { statusItem } = createHelper({ status: 'error' })
      expect(statusItem.status).toBe('error')
      expect(statusItem.is('error')).toBe(true)
      expect(statusItem.isError()).toBe(true)
      expect(statusItem.isUploading()).toBe(false)
      expect(statusItem.isUploaded()).toBe(false)
      expect(statusItem.isIdle()).toBe(false)
    })

    it('detects uploaded state via status prop', () => {
      const { statusItem } = createHelper({ status: 'uploaded' })
      expect(statusItem.status).toBe('uploaded')
      expect(statusItem.is('uploaded')).toBe(true)
      expect(statusItem.isUploaded()).toBe(true)
      expect(statusItem.isUploading()).toBe(false)
      expect(statusItem.isError()).toBe(false)
      expect(statusItem.isIdle()).toBe(false)
    })

    it('defaults to idle state when no active state is set', () => {
      const { statusItem } = createHelper({})
      expect(statusItem.status).toBe('idle')
      expect(statusItem.is('idle')).toBe(true)
      expect(statusItem.isIdle()).toBe(true)
      expect(statusItem.isUploading()).toBe(false)
      expect(statusItem.isUploaded()).toBe(false)
      expect(statusItem.isError()).toBe(false)
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


    it('falls back to formatted file size in idle state', () => {
      const { statusItem } = createHelper({ value: { size: 72 * 1024 * 1024 } })
      expect(statusItem.message).toBe('72 MB')
    })
  })
})
