import { describe, expect, it, vi } from 'vitest'
import { AiAbstract } from '../AiAbstract'
import type { AiImageItem } from '../../../types/aiTypes'

class TestAi extends AiAbstract<any> {
  initCalls = 0
  toImagesCalls = 0
  toContentsCalls = 0
  mockResponse = 'test-response'

  protected async init(): Promise<void> {
    this.initCalls++
    this.ai = { ready: true }
  }

  protected toImages(): any {
    this.toImagesCalls++
    return this.images.map(img => ({ type: 'image', mime: img.mime }))
  }

  protected toContents(): any {
    this.toContentsCalls++
    return this.contents.map(c => ({ type: 'text', text: c }))
  }

  protected async response(model: string, contents: string): Promise<string> {
    return `${this.mockResponse}:${model}:${contents}`
  }

  // Expose protected method for testing
  public testGetMainContents(contents: string): string {
    return this.getMainContents(contents)
  }

  public getAiInstance() {
    return this.ai
  }
}

describe('AiAbstract', () => {
  it('initializes with key, model, and config', () => {
    const ai = new TestAi('test-key', 'gpt-4o', { temperature: 0.7 })

    expect(ai.getImages()).toEqual([])
    expect(ai.getContents()).toEqual([])
  })

  it('manages images: addImage, getImages, resetImages', () => {
    const ai = new TestAi('test-key', 'model-1')
    const img1: AiImageItem = { mime: 'image/png', base64: 'base64-1' }
    const img2: AiImageItem = { mime: 'image/jpeg', base64: 'base64-2' }

    ai.addImage(img1)
    expect(ai.getImages()).toEqual([img1])

    ai.addImage(img2)
    expect(ai.getImages()).toHaveLength(2)

    ai.resetImages()
    expect(ai.getImages()).toEqual([])
  })

  it('manages contents: addContent, getContents, resetContents', () => {
    const ai = new TestAi('test-key', 'model-1')

    ai.addContent('first block')
    expect(ai.getContents()).toEqual(['first block'])

    ai.addContent('second block')
    expect(ai.getContents()).toHaveLength(2)

    ai.resetContents()
    expect(ai.getContents()).toEqual([])
  })

  it('manages prompt accumulation and resetPrompt', () => {
    const ai = new TestAi('test-key', 'model-1')

    ai.addPrompt('System instructions line 1')
    ai.addPrompt('System instructions line 2')

    const mainContents = ai.testGetMainContents('User request')
    expect(mainContents).toContain('System instructions line 1')
    expect(mainContents).toContain('System instructions line 2')
    expect(mainContents).toContain('User request')

    ai.resetPrompt()
    expect(ai.testGetMainContents('User request')).toBe('\nUser request')
  })

  it('updates key, model, and config dynamically', () => {
    const ai = new TestAi('initial-key', 'initial-model', { temp: 0.5 })

    ai.setModel('new-model')
    ai.setConfig({ temp: 0.9 })

    expect(ai).toBeDefined()

    ai.setKey('new-key')
    expect(ai.getAiInstance()).toBeUndefined()
  })

  it('generates response by calling init and response', async () => {
    const ai = new TestAi('api-key', 'test-model')
    ai.addPrompt('System prompt')

    const result = await ai.generate('Generate something')

    expect(ai.initCalls).toBe(1)
    expect(result).toBe('test-response:test-model:\nSystem prompt\nGenerate something')
  })

  it('reuses initialized AI client on subsequent generate calls', async () => {
    const ai = new TestAi('api-key', 'test-model')

    await ai.generate('First')
    await ai.generate('Second')

    expect(ai.initCalls).toBe(1)
  })

  it('re-initializes client when setKey is called', async () => {
    const ai = new TestAi('api-key', 'test-model')

    await ai.generate('First')
    expect(ai.initCalls).toBe(1)

    ai.setKey('different-key')
    await ai.generate('Second')
    expect(ai.initCalls).toBe(2)
  })
})
