import { describe, expect, it, vi } from 'vitest'
import { StylesTool } from '../StylesTool'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'
import { UI_DIRS_STYLES } from '../../../config'

describe('StylesTool', () => {
  it('returns target directory array incorporating project name', () => {
    vi.spyOn(PropertiesConfig, 'getProjectName').mockReturnValue('dxt')
    expect(StylesTool.getDir()).toEqual([...UI_DIRS_STYLES, 'dxt'])
  })

  it('returns default indentation space and computes multi-level spacing', () => {
    expect(StylesTool.getSpace()).toBe('  ')
    expect(StylesTool.addSpace(0)).toBe('')
    expect(StylesTool.addSpace(1)).toBe('  ')
    expect(StylesTool.addSpace(3)).toBe('      ')
  })

  it('generates SCSS import, use, and forward directives', () => {
    expect(StylesTool.addImport('./vars')).toBe('@import "./vars";')
    expect(StylesTool.addUse('./vars')).toBe('@use "./vars";')
    expect(StylesTool.addForward('./vars')).toBe('@forward "./vars";')
    expect(StylesTool.addImportProperties()).toBe('@use "@dxtmisha/styles" as ui;')
  })

  it('joins array of lines into multiline string with \\r\\n', () => {
    expect(StylesTool.join(['line1', 'line2', 'line3'])).toBe('line1\r\nline2\r\nline3')
    expect(StylesTool.join([])).toBe('')
  })

  it('increases indentation by one level', () => {
    expect(StylesTool.increaseSpace('  ')).toBe('    ')
    expect(StylesTool.increaseSpace('')).toBe('  ')
  })

  it('interpolates SCSS function calls in CSS values', () => {
    expect(StylesTool.toFunctionCss('calc(@fn(10px) + 2px)')).toBe('calc(#{fn(10px)} + 2px)')
    expect(StylesTool.toFunctionCss('16px')).toBe('16px')
    expect(StylesTool.toFunctionCss('@palette.color(primary)')).toBe('#{palette.color(primary)}')
  })
})
