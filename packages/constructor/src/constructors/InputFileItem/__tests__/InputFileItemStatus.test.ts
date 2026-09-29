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

  describe('status and boolean flags', () => {
    it('detects uploading state via loading prop', () => {
      const { statusItem } = createHelper({ loading: true })
      expect(statusItem.status).toBe('uploading')
      expect(statusItem.isUploading).toBe(true)
      expect(statusItem.isUploaded).toBe(false)
      expect(statusItem.isError).toBe(false)
      expect(statusItem.isIdle).toBe(false)
    })

    it('detects uploading state via status prop', () => {
      const { statusItem } = createHelper({ status: 'uploading' })
      expect(statusItem.status).toBe('uploading')
      expect(statusItem.isUploading).toBe(true)
    })

    it('detects error state via status prop', () => {
      const { statusItem } = createHelper({ status: 'error' })
      expect(statusItem.status).toBe('error')
      expect(statusItem.isError).toBe(true)
      expect(statusItem.isUploading).toBe(false)
      expect(statusItem.isUploaded).toBe(false)
      expect(statusItem.isIdle).toBe(false)
    })

    it('detects uploaded state via status prop', () => {
      const { statusItem } = createHelper({ status: 'uploaded' })
      expect(statusItem.status).toBe('uploaded')
      expect(statusItem.isUploaded).toBe(true)
      expect(statusItem.isUploading).toBe(false)
      expect(statusItem.isError).toBe(false)
      expect(statusItem.isIdle).toBe(false)
    })

    it('defaults to idle state when no active state is set', () => {
      const { statusItem } = createHelper({})
      expect(statusItem.status).toBe('idle')
      expect(statusItem.isIdle).toBe(true)
      expect(statusItem.isUploading).toBe(false)
      expect(statusItem.isUploaded).toBe(false)
      expect(statusItem.isError).toBe(false)
    })
  })

  describe('message', () => {
    it('returns custom textLoadingFile or translated loading text when uploading', () => {
      const { statusItem: customStatus } = createHelper({
        loading: true,
        textLoadingFile: 'Custom uploading message'
      })
      expect(customStatus.message).toBe('Custom uploading message')

      const { statusItem: defaultStatus } = createHelper({ loading: true })
      expect(defaultStatus.message).toBe('Loading file ...')
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
      expect(defaultSuccessStatus.message).toBe('Upload successful')
    })

    it('returns caption if provided in idle state', () => {
      const { statusItem } = createHelper({ caption: 'Uploaded 2 hours ago' })
      expect(statusItem.message).toBe('Uploaded 2 hours ago')
    })

    it('falls back to formatted file size in idle state', () => {
      const { statusItem } = createHelper({ value: { size: 72 * 1024 * 1024 } })
      expect(statusItem.message).toBe('72 Mb')
    })
  })

  describe('progress', () => {
    it('returns numeric progress within 0-100 range', () => {
      const { statusItem } = createHelper({ progress: 45 })
      expect(statusItem.progress).toBe(45)
    })

    it('clamps progress to 0 when negative', () => {
      const { statusItem } = createHelper({ loading: { value: -10 } })
      expect(statusItem.progress).toBe(0)
    })

    it('clamps progress to 100 when exceeding 100', () => {
      const { statusItem } = createHelper({ loading: { value: 150 } })
      expect(statusItem.progress).toBe(100)
    })

    it('parses string progress', () => {
      const { statusItem } = createHelper({ loading: { value: '80' } })
      expect(statusItem.progress).toBe(80)
    })

    it('returns 0 when progress is undefined', () => {
      const { statusItem } = createHelper({})
      expect(statusItem.progress).toBe(0)
    })

    it('determines if progress is determinate', () => {
      const { statusItem: indeterminateStatus } = createHelper({})
      expect(indeterminateStatus.isProgressDeterminate).toBe(false)

      const { statusItem: determinateStatus } = createHelper({ loading: { value: 0 } })
      expect(determinateStatus.isProgressDeterminate).toBe(true)
    })
  })
})
