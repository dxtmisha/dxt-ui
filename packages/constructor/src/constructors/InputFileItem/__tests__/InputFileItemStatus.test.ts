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

    it('detects error state via boolean error prop', () => {
      const { statusItem } = createHelper({ error: true })
      expect(statusItem.status).toBe('error')
      expect(statusItem.isError).toBe(true)
      expect(statusItem.isUploading).toBe(false)
      expect(statusItem.isUploaded).toBe(false)
      expect(statusItem.isIdle).toBe(false)
    })

    it('detects error state via string error prop', () => {
      const { statusItem } = createHelper({ error: 'File is too large' })
      expect(statusItem.status).toBe('error')
      expect(statusItem.isError).toBe(true)
    })

    it('detects uploaded state via boolean success prop', () => {
      const { statusItem } = createHelper({ success: true })
      expect(statusItem.status).toBe('uploaded')
      expect(statusItem.isUploaded).toBe(true)
      expect(statusItem.isUploading).toBe(false)
      expect(statusItem.isError).toBe(false)
      expect(statusItem.isIdle).toBe(false)
    })

    it('detects uploaded state via status prop', () => {
      const { statusItem } = createHelper({ status: 'uploaded' })
      expect(statusItem.status).toBe('uploaded')
      expect(statusItem.isUploaded).toBe(true)
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
    it('returns custom messageLoading or translated loading text when uploading', () => {
      const { statusItem: customStatus } = createHelper({
        loading: true,
        messageLoading: 'Custom uploading message'
      })
      expect(customStatus.message).toBe('Custom uploading message')

      const { statusItem: defaultStatus } = createHelper({ loading: true })
      expect(defaultStatus.message).toBe('Loading file ...')
    })

    it('returns custom string error or default error message when in error state', () => {
      const { statusItem: stringErrorStatus } = createHelper({
        error: 'Network connection lost'
      })
      expect(stringErrorStatus.message).toBe('Network connection lost')

      const { statusItem: customErrorStatus } = createHelper({
        error: true,
        messageError: 'Upload failed'
      })
      expect(customErrorStatus.message).toBe('Upload failed')

      const { statusItem: defaultErrorStatus } = createHelper({ error: true })
      expect(defaultErrorStatus.message).toBe('Error')
    })

    it('returns custom string success or default success message when uploaded', () => {
      const { statusItem: stringSuccessStatus } = createHelper({
        success: 'File saved successfully'
      })
      expect(stringSuccessStatus.message).toBe('File saved successfully')

      const { statusItem: customSuccessStatus } = createHelper({
        success: true,
        messageSuccess: 'Done uploading'
      })
      expect(customSuccessStatus.message).toBe('Done uploading')

      const { statusItem: defaultSuccessStatus } = createHelper({ success: true })
      expect(defaultSuccessStatus.message).toBe('Upload successful')
    })

    it('returns caption if provided in idle state', () => {
      const { statusItem } = createHelper({ caption: 'Uploaded 2 hours ago' })
      expect(statusItem.message).toBe('Uploaded 2 hours ago')
    })

    it('falls back to formatted file size in idle state', () => {
      const { statusItem } = createHelper({ size: '72 Mb' })
      expect(statusItem.message).toBe('72 Mb')
    })
  })

  describe('progress', () => {
    it('returns numeric progress within 0-100 range', () => {
      const { statusItem } = createHelper({ progress: 45 })
      expect(statusItem.progress).toBe(45)
    })

    it('clamps progress to 0 when negative', () => {
      const { statusItem } = createHelper({ progress: -10 })
      expect(statusItem.progress).toBe(0)
    })

    it('clamps progress to 100 when exceeding 100', () => {
      const { statusItem } = createHelper({ progress: 150 })
      expect(statusItem.progress).toBe(100)
    })

    it('parses string progress', () => {
      const { statusItem } = createHelper({ progress: '80' })
      expect(statusItem.progress).toBe(80)
    })

    it('returns 0 when progress is undefined', () => {
      const { statusItem } = createHelper({})
      expect(statusItem.progress).toBe(0)
    })

    it('determines if progress is determinate', () => {
      const { statusItem: indeterminateStatus } = createHelper({})
      expect(indeterminateStatus.isProgressDeterminate).toBe(false)

      const { statusItem: determinateStatus } = createHelper({ progress: 0 })
      expect(determinateStatus.isProgressDeterminate).toBe(true)
    })
  })
})
