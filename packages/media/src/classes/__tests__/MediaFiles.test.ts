import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import {
  MediaFileCategory,
  MediaFileGroup,
  type MediaFileItem
} from '../../types/fileTypes'
import { MediaFileIcon } from '../MediaFileIcon'
import { MediaFiles } from '../MediaFiles'

describe('MediaFiles', () => {
  beforeEach(() => {
    MediaFileIcon.reset()
  })

  afterEach(() => {
    MediaFileIcon.reset()
  })

  describe('isLink', () => {
    describe('Standard functional requirements (Happy path)', () => {
      it('should return true for Unix absolute paths', () => {
        expect(MediaFiles.isLink('/var/log/app.log')).toBe(true)
        expect(MediaFiles.isLink('/root/documents/file.pdf')).toBe(true)
        expect(MediaFiles.isLink('/usr/local/bin/node')).toBe(true)
        expect(MediaFiles.isLink('/image.png')).toBe(true)
      })

      it('should return true for Unix relative paths', () => {
        expect(MediaFiles.isLink('./image.png')).toBe(true)
        expect(MediaFiles.isLink('../parent/file.pdf')).toBe(true)
        expect(MediaFiles.isLink('folder/subfolder/archive.zip')).toBe(true)
        expect(MediaFiles.isLink('src/assets/icon.svg')).toBe(true)
      })

      it('should return true for Windows file paths with backslashes', () => {
        expect(MediaFiles.isLink('C:\\Users\\Administrator\\document.docx')).toBe(true)
        expect(MediaFiles.isLink('D:\\media\\video.mp4')).toBe(true)
        expect(MediaFiles.isLink('folder\\subfolder\\file.txt')).toBe(true)
        expect(MediaFiles.isLink('.\\relative\\file.json')).toBe(true)
        expect(MediaFiles.isLink('..\\parent\\file.png')).toBe(true)
      })

      it('should return true for mixed slash paths', () => {
        expect(MediaFiles.isLink('folder/subfolder\\file.txt')).toBe(true)
        expect(MediaFiles.isLink('C:/Program Files/app\\run.exe')).toBe(true)
      })

      it('should return true for web URLs with http and https protocols', () => {
        expect(MediaFiles.isLink('http://example.com/assets/logo.png')).toBe(true)
        expect(MediaFiles.isLink('https://domain.org/documents/report.pdf')).toBe(true)
        expect(MediaFiles.isLink('https://cdn.test.io/images/avatar.jpg')).toBe(true)
      })

      it('should return true for URLs with ports, query parameters, and fragments', () => {
        expect(MediaFiles.isLink('https://example.com:8080/files/archive.zip?version=2.0#section-1')).toBe(true)
        expect(MediaFiles.isLink('http://localhost:3000/api/download?file=test.csv')).toBe(true)
      })

      it('should return true for specialized URL schemes (file, ftp, data, blob)', () => {
        expect(MediaFiles.isLink('file:///Users/username/report.pdf')).toBe(true)
        expect(MediaFiles.isLink('ftp://files.example.com/pub/archive.tar.gz')).toBe(true)
        expect(MediaFiles.isLink('blob:http://localhost:3000/d74268e3-0d33-4f1e-8be1-f2f5ab80fa9b')).toBe(true)
        expect(MediaFiles.isLink('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk')).toBe(true)
      })

      it('should return true for path traversal sequences', () => {
        expect(MediaFiles.isLink('../../etc/passwd')).toBe(true)
        expect(MediaFiles.isLink('..\\..\\Windows\\System32\\cmd.exe')).toBe(true)
      })

      it('should return true for unregistered slash-separated types not recognized as MIME', () => {
        expect(MediaFiles.isLink('custom/unregistered-format')).toBe(true)
        expect(MediaFiles.isLink('application/x-unknown-nonexistent-type')).toBe(true)
      })
    })

    describe('MIME type exclusion requirements', () => {
      it('should return false for valid registered MIME types despite containing slashes', () => {
        expect(MediaFiles.isLink('image/png')).toBe(false)
        expect(MediaFiles.isLink('image/jpeg')).toBe(false)
        expect(MediaFiles.isLink('image/svg+xml')).toBe(false)
        expect(MediaFiles.isLink('application/pdf')).toBe(false)
        expect(MediaFiles.isLink('application/zip')).toBe(false)
        expect(MediaFiles.isLink('text/plain')).toBe(false)
        expect(MediaFiles.isLink('application/octet-stream')).toBe(false)
      })

      it('should return false for registered wildcard category MIME types', () => {
        expect(MediaFiles.isLink('image/*')).toBe(false)
        expect(MediaFiles.isLink('video/*')).toBe(false)
        expect(MediaFiles.isLink('audio/*')).toBe(false)
        expect(MediaFiles.isLink('text/*')).toBe(false)
        expect(MediaFiles.isLink('font/*')).toBe(false)
      })

      it('should return false for registered MIME types with parameters, charset, or casing', () => {
        expect(MediaFiles.isLink('text/plain; charset=utf-8')).toBe(false)
        expect(MediaFiles.isLink('IMAGE/PNG')).toBe(false)
        expect(MediaFiles.isLink('  application/pdf  ')).toBe(false)
      })
    })

    describe('Boundary values and non-slash inputs', () => {
      it('should return false for plain file names without directory slashes', () => {
        expect(MediaFiles.isLink('report.pdf')).toBe(false)
        expect(MediaFiles.isLink('archive.tar.gz')).toBe(false)
        expect(MediaFiles.isLink('presentation.pptx')).toBe(false)
        expect(MediaFiles.isLink('image.png')).toBe(false)
      })

      it('should return false for raw file codes or extensions', () => {
        expect(MediaFiles.isLink('png')).toBe(false)
        expect(MediaFiles.isLink('pdf')).toBe(false)
        expect(MediaFiles.isLink('docx')).toBe(false)
        expect(MediaFiles.isLink('.docx')).toBe(false)
        expect(MediaFiles.isLink('file')).toBe(false)
      })

      it('should return false for empty, non-string, and whitespace-only strings', () => {
        expect(MediaFiles.isLink('')).toBe(false)
        expect(MediaFiles.isLink('   ')).toBe(false)
        expect(MediaFiles.isLink('\t\n\r')).toBe(false)
        // @ts-expect-error testing runtime safety for non-string inputs
        expect(MediaFiles.isLink(undefined)).toBe(false)
        // @ts-expect-error testing runtime safety for non-string inputs
        expect(MediaFiles.isLink(null)).toBe(false)
        // @ts-expect-error testing runtime safety for non-string inputs
        expect(MediaFiles.isLink(12345)).toBe(false)
      })

      it('should return false for arbitrary strings containing no slashes', () => {
        expect(MediaFiles.isLink('arbitrary-string-identifier')).toBe(false)
        expect(MediaFiles.isLink('1234567890')).toBe(false)
      })
    })

    describe('Multilingual and Unicode support', () => {
      it('should return true for paths containing Cyrillic characters', () => {
        expect(MediaFiles.isLink('/документы/отчет_2026.pdf')).toBe(true)
        expect(MediaFiles.isLink('C:\\Пользователи\\Иван\\Презентация.pptx')).toBe(true)
        expect(MediaFiles.isLink('архивы/бэкап.zip')).toBe(true)
      })

      it('should return true for paths containing Vietnamese diacritics', () => {
        expect(MediaFiles.isLink('/tài_liệu/báo_cáo_tài_chính.pdf')).toBe(true)
        expect(MediaFiles.isLink('hình_ảnh/ảnh_đẹp.png')).toBe(true)
      })

      it('should return true for paths containing spaces, special characters, and emojis', () => {
        expect(MediaFiles.isLink('/my documents/project (v1.0)/file [final].pdf')).toBe(true)
        expect(MediaFiles.isLink('folder/🚀_rocket_launch.mp4')).toBe(true)
      })
    })
  })

  describe('isMime', () => {
    describe('Standard functional requirements (Happy path)', () => {
      it('should return true for known standard MIME types', () => {
        expect(MediaFiles.isMime('image/png')).toBe(true)
        expect(MediaFiles.isMime('image/jpeg')).toBe(true)
        expect(MediaFiles.isMime('application/pdf')).toBe(true)
        expect(MediaFiles.isMime('application/zip')).toBe(true)
        expect(MediaFiles.isMime('text/plain')).toBe(true)
        expect(MediaFiles.isMime('application/octet-stream')).toBe(true)
        expect(MediaFiles.isMime('audio/aac')).toBe(true)
      })

      it('should return true for wildcard category MIME types', () => {
        expect(MediaFiles.isMime('image/*')).toBe(true)
        expect(MediaFiles.isMime('video/*')).toBe(true)
        expect(MediaFiles.isMime('audio/*')).toBe(true)
        expect(MediaFiles.isMime('text/*')).toBe(true)
        expect(MediaFiles.isMime('font/*')).toBe(true)
      })
    })

    describe('Normalization and parameter resilience', () => {
      it('should return true for uppercase and mixed-case MIME types', () => {
        expect(MediaFiles.isMime('IMAGE/PNG')).toBe(true)
        expect(MediaFiles.isMime('Application/Pdf')).toBe(true)
        expect(MediaFiles.isMime('Text/Plain')).toBe(true)
      })

      it('should return true for MIME types with leading and trailing whitespace', () => {
        expect(MediaFiles.isMime('  image/png  ')).toBe(true)
        expect(MediaFiles.isMime('\tapplication/pdf\n')).toBe(true)
      })

      it('should return true for MIME types containing parameters and charset suffixes', () => {
        expect(MediaFiles.isMime('text/plain; charset=utf-8')).toBe(true)
        expect(MediaFiles.isMime('text/plain; charset=iso-8859-1')).toBe(true)
        expect(MediaFiles.isMime('image/png; boundary=something')).toBe(true)
      })

      it('should return true for MIME types with leading and trailing dots', () => {
        expect(MediaFiles.isMime('.image/png.')).toBe(true)
        expect(MediaFiles.isMime('..application/pdf..')).toBe(true)
      })
    })

    describe('Negative and boundary conditions', () => {
      it('should return false for unregistered MIME types', () => {
        expect(MediaFiles.isMime('unregistered/unknown-mime')).toBe(false)
        expect(MediaFiles.isMime('application/x-custom-nonexistent')).toBe(false)
      })

      it('should return false for plain file extensions or codes', () => {
        expect(MediaFiles.isMime('png')).toBe(false)
        expect(MediaFiles.isMime('pdf')).toBe(false)
        expect(MediaFiles.isMime('docx')).toBe(false)
        expect(MediaFiles.isMime('file')).toBe(false)
      })

      it('should return false for file paths and URLs', () => {
        expect(MediaFiles.isMime('/var/log/file.txt')).toBe(false)
        expect(MediaFiles.isMime('https://example.com/file.pdf')).toBe(false)
        expect(MediaFiles.isMime('C:\\Users\\file.txt')).toBe(false)
        expect(MediaFiles.isMime('folder/file.png')).toBe(false)
      })

      it('should return false for empty or whitespace-only inputs', () => {
        expect(MediaFiles.isMime('')).toBe(false)
        expect(MediaFiles.isMime('   ')).toBe(false)
        expect(MediaFiles.isMime('\t\n')).toBe(false)
      })
    })
  })

  describe('get', () => {
    describe('Standard functional requirements (Happy path)', () => {
      it('should find file item by exact code', () => {
        const png = MediaFiles.get('png')
        expect(png).toBeDefined()
        expect(png.code).toBe('png')
        expect(png.name).toBe('PNG Image')
        expect(png.category).toBe(MediaFileCategory.image)
        expect(png.group).toBe(MediaFileGroup.standard)

        const pdf = MediaFiles.get('pdf')
        expect(pdf).toBeDefined()
        expect(pdf.code).toBe('pdf')
        expect(pdf.name).toBe('PDF Document')
        expect(pdf.category).toBe(MediaFileCategory.document)

        const zip = MediaFiles.get('zip')
        expect(zip).toBeDefined()
        expect(zip.code).toBe('zip')
        expect(zip.category).toBe(MediaFileCategory.archive)
      })

      it('should find file item by secondary extension declared in extensions array', () => {
        const markdown = MediaFiles.get('markdown')
        expect(markdown).toBeDefined()
        expect(markdown.code).toBe('md')
        expect(markdown.name).toBe('Markdown Document')

        const dotx = MediaFiles.get('dotx')
        expect(dotx).toBeDefined()
        expect(dotx.code).toBe('docx')

        const jpg = MediaFiles.get('jpg')
        expect(jpg).toBeDefined()
        expect(jpg.code).toBe('jpeg')

        const svgz = MediaFiles.get('svgz')
        expect(svgz).toBeDefined()
        expect(svgz.code).toBe('svg')

        const mjs = MediaFiles.get('mjs')
        expect(mjs).toBeDefined()
        expect(mjs.code).toBe('js')

        const gzip = MediaFiles.get('gzip')
        expect(gzip).toBeDefined()
        expect(gzip.code).toBe('gz')
      })

      it('should find file item by registered MIME type', () => {
        const byMimePng = MediaFiles.get('image/png')
        expect(byMimePng).toBeDefined()
        expect(byMimePng.code).toBe('png')

        const byMimePdf = MediaFiles.get('application/pdf')
        expect(byMimePdf).toBeDefined()
        expect(byMimePdf.code).toBe('pdf')

        const byMimeAudioWildcard = MediaFiles.get('audio/*')
        expect(byMimeAudioWildcard).toBeDefined()
        expect(byMimeAudioWildcard.code).toBe('audio')
      })

      it('should prioritize exact code match over secondary extension match', () => {
        const item = MediaFiles.get('zip')
        expect(item.code).toBe('zip')
      })
    })

    describe('Fallback to neutral item on missing or invalid inputs', () => {
      it('should return neutral file item for non-existent file codes', () => {
        const item = MediaFiles.get('nonexistent_random_code_12345')
        expect(item).toBeDefined()
        expect(item.code).toBe('file')
        expect(item.name).toBe('File')
        expect(item.category).toBe(MediaFileCategory.system)
        expect(item.group).toBe(MediaFileGroup.neutral)
      })

      it('should return neutral file item for empty string input', () => {
        const item = MediaFiles.get('')
        expect(item).toBeDefined()
        expect(item.code).toBe('file')
        expect(item.group).toBe(MediaFileGroup.neutral)
      })

      it('should return neutral file item for whitespace-only input', () => {
        const item = MediaFiles.get('     ')
        expect(item).toBeDefined()
        expect(item.code).toBe('file')
      })

      it('should return neutral file item for dots-only input', () => {
        const item = MediaFiles.get('...')
        expect(item).toBeDefined()
        expect(item.code).toBe('file')
      })
    })

    describe('Code normalization and parameter handling', () => {
      it('should normalize uppercase codes and extensions to lowercase', () => {
        const item1 = MediaFiles.get('PNG')
        expect(item1.code).toBe('png')

        const item2 = MediaFiles.get('PDF')
        expect(item2.code).toBe('pdf')

        const item3 = MediaFiles.get('DoCx')
        expect(item3.code).toBe('docx')
      })

      it('should strip leading and trailing whitespace', () => {
        const item = MediaFiles.get('   png   ')
        expect(item.code).toBe('png')
      })

      it('should strip leading and trailing dots', () => {
        const item1 = MediaFiles.get('.png')
        expect(item1.code).toBe('png')

        const item2 = MediaFiles.get('..pdf..')
        expect(item2.code).toBe('pdf')

        const item3 = MediaFiles.get(' .docx. ')
        expect(item3.code).toBe('docx')
      })

      it('should strip parameters separated by semicolons', () => {
        const item = MediaFiles.get('text/plain; charset=utf-8')
        expect(item.code).toBe('text')
      })
    })

    describe('Immutability and memory safety', () => {
      it('should return a new object instance on each call', () => {
        const item1 = MediaFiles.get('pdf')
        const item2 = MediaFiles.get('pdf')

        expect(item1).not.toBe(item2)
        expect(item1).toEqual(item2)
      })

      it('should clone extensions array to protect internal registry from mutation', () => {
        const item1 = MediaFiles.get('docx')
        const initialCount = item1.extensions?.length ?? 0

        item1.extensions?.push('mutated_ext_should_not_leak')
        expect(item1.extensions?.length).toBe(initialCount + 1)

        const item2 = MediaFiles.get('docx')
        expect(item2.extensions?.length).toBe(initialCount)
        expect(item2.extensions).not.toContain('mutated_ext_should_not_leak')
      })

      it('should not allow mutating item properties to alter internal registry', () => {
        const item1 = MediaFiles.get('png')
        const originalName = item1.name

        item1.name = 'Mutated PNG Name'

        const item2 = MediaFiles.get('png')
        expect(item2.name).toBe(originalName)
      })
    })

    describe('Custom icon integration via MediaFileIcon', () => {
      it('should apply registered custom icon by exact code', () => {
        MediaFileIcon.add('png', '<svg>custom-png</svg>')

        const item = MediaFiles.get('png')
        expect(item.icon).toBe('<svg>custom-png</svg>')
      })

      it('should apply registered custom icon when matched by extension alias', () => {
        MediaFileIcon.add('jpg', '<svg>custom-jpg</svg>')

        const item = MediaFiles.get('jpeg')
        expect(item.icon).toBe('<svg>custom-jpg</svg>')
      })

      it('should apply category-level custom icon if specific code icon is not registered', () => {
        MediaFileIcon.add('image', '<svg>category-image</svg>')

        const item = MediaFiles.get('png')
        expect(item.icon).toBe('<svg>category-image</svg>')
      })

      it('should remove custom icon after MediaFileIcon.reset()', () => {
        MediaFileIcon.add('png', '<svg>custom-png</svg>')
        expect(MediaFiles.get('png').icon).toBe('<svg>custom-png</svg>')

        MediaFileIcon.reset()
        expect(MediaFiles.get('png').icon).toBeUndefined()
      })
    })
  })

  describe('getByCategory', () => {
    describe('Standard functional requirements (Happy path)', () => {
      it('should return category neutral item when queried with MediaFileCategory enum', () => {
        const video = MediaFiles.getByCategory(MediaFileCategory.video)
        expect(video).toBeDefined()
        expect(video?.code).toBe('video')
        expect(video?.name).toBe('Video')
        expect(video?.category).toBe(MediaFileCategory.video)
        expect(video?.group).toBe(MediaFileGroup.category)

        const audio = MediaFiles.getByCategory(MediaFileCategory.audio)
        expect(audio).toBeDefined()
        expect(audio?.code).toBe('audio')
        expect(audio?.category).toBe(MediaFileCategory.audio)

        const image = MediaFiles.getByCategory(MediaFileCategory.image)
        expect(image).toBeDefined()
        expect(image?.code).toBe('image')
        expect(image?.category).toBe(MediaFileCategory.image)

        const archive = MediaFiles.getByCategory(MediaFileCategory.archive)
        expect(archive).toBeDefined()
        expect(archive?.code).toBe('archive')
        expect(archive?.category).toBe(MediaFileCategory.archive)

        const codeItem = MediaFiles.getByCategory(MediaFileCategory.code)
        expect(codeItem).toBeDefined()
        expect(codeItem?.code).toBe('code')
        expect(codeItem?.category).toBe(MediaFileCategory.code)

        const document = MediaFiles.getByCategory(MediaFileCategory.document)
        expect(document).toBeDefined()
        expect(document?.code).toBe('document')
        expect(document?.category).toBe(MediaFileCategory.document)

        const table = MediaFiles.getByCategory(MediaFileCategory.table)
        expect(table).toBeDefined()
        expect(table?.code).toBe('table')
        expect(table?.category).toBe(MediaFileCategory.table)
      })

      it('should return category neutral item when queried with category string names', () => {
        const presentation = MediaFiles.getByCategory('presentation')
        expect(presentation).toBeDefined()
        expect(presentation?.code).toBe('presentation')
        expect(presentation?.category).toBe('presentation')

        const folder = MediaFiles.getByCategory('folder')
        expect(folder).toBeDefined()
        expect(folder?.code).toBe('folder')
        expect(folder?.category).toBe('folder')

        const font = MediaFiles.getByCategory('font')
        expect(font).toBeDefined()
        expect(font?.code).toBe('font')
        expect(font?.category).toBe('font')

        const config = MediaFiles.getByCategory('config')
        expect(config).toBeDefined()
        expect(config?.code).toBe('config')
        expect(config?.category).toBe('config')

        const database = MediaFiles.getByCategory('database')
        expect(database).toBeDefined()
        expect(database?.code).toBe('database')
        expect(database?.category).toBe('database')

        const executable = MediaFiles.getByCategory('executable')
        expect(executable).toBeDefined()
        expect(executable?.code).toBe('executable')
        expect(executable?.category).toBe('executable')

        const vector = MediaFiles.getByCategory('vector')
        expect(vector).toBeDefined()
        expect(vector?.code).toBe('vector')
        expect(vector?.category).toBe('vector')

        const text = MediaFiles.getByCategory('text')
        expect(text).toBeDefined()
        expect(text?.code).toBe('text')
        expect(text?.category).toBe('text')
      })

      it('should return category neutral item when queried with MIME wildcard pattern', () => {
        const audio = MediaFiles.getByCategory('audio/*')
        expect(audio).toBeDefined()
        expect(audio?.code).toBe('audio')
        expect(audio?.category).toBe(MediaFileCategory.audio)

        const video = MediaFiles.getByCategory('video/*')
        expect(video).toBeDefined()
        expect(video?.code).toBe('video')
        expect(video?.category).toBe(MediaFileCategory.video)

        const image = MediaFiles.getByCategory('image/*')
        expect(image).toBeDefined()
        expect(image?.code).toBe('image')
        expect(image?.category).toBe(MediaFileCategory.image)

        const text = MediaFiles.getByCategory('text/*')
        expect(text).toBeDefined()
        expect(text?.code).toBe('text')
        expect(text?.category).toBe(MediaFileCategory.text)

        const font = MediaFiles.getByCategory('font/*')
        expect(font).toBeDefined()
        expect(font?.code).toBe('font')
        expect(font?.category).toBe(MediaFileCategory.font)
      })
    })

    describe('System category and file code resolution', () => {
      it('should return default neutral file item for MediaFileCategory.system', () => {
        const systemItem = MediaFiles.getByCategory(MediaFileCategory.system)
        expect(systemItem).toBeDefined()
        expect(systemItem?.code).toBe('file')
        expect(systemItem?.name).toBe('File')
        expect(systemItem?.category).toBe(MediaFileCategory.system)
        expect(systemItem?.group).toBe(MediaFileGroup.neutral)
      })

      it('should return default neutral file item when queried with string "file"', () => {
        const fileItem = MediaFiles.getByCategory('file')
        expect(fileItem).toBeDefined()
        expect(fileItem?.code).toBe('file')
        expect(fileItem?.group).toBe(MediaFileGroup.neutral)
      })
    })

    describe('Normalization and parameter resilience', () => {
      it('should normalize uppercase category queries to lowercase', () => {
        const video = MediaFiles.getByCategory('VIDEO')
        expect(video).toBeDefined()
        expect(video?.code).toBe('video')

        const imageWildcard = MediaFiles.getByCategory('IMAGE/*')
        expect(imageWildcard).toBeDefined()
        expect(imageWildcard?.code).toBe('image')
      })

      it('should strip leading and trailing whitespace', () => {
        const audio = MediaFiles.getByCategory('   audio   ')
        expect(audio).toBeDefined()
        expect(audio?.code).toBe('audio')
      })

      it('should strip leading and trailing dots', () => {
        const font = MediaFiles.getByCategory('.font.')
        expect(font).toBeDefined()
        expect(font?.code).toBe('font')
      })
    })

    describe('Negative conditions', () => {
      it('should return undefined for non-existent category strings', () => {
        expect(MediaFiles.getByCategory('unknown_category')).toBeUndefined()
        expect(MediaFiles.getByCategory('nonexistent')).toBeUndefined()
      })

      it('should return undefined for specific file extensions or format codes not representing categories', () => {
        expect(MediaFiles.getByCategory('mp4')).toBeUndefined()
        expect(MediaFiles.getByCategory('png')).toBeUndefined()
        expect(MediaFiles.getByCategory('pdf')).toBeUndefined()
        expect(MediaFiles.getByCategory('docx')).toBeUndefined()
      })

      it('should return undefined for empty or whitespace-only inputs', () => {
        expect(MediaFiles.getByCategory('')).toBeUndefined()
        expect(MediaFiles.getByCategory('   ')).toBeUndefined()
        expect(MediaFiles.getByCategory('\t\n')).toBeUndefined()
      })
    })

    describe('Immutability and instance isolation', () => {
      it('should return a new object instance on repeated calls', () => {
        const item1 = MediaFiles.getByCategory('video')
        const item2 = MediaFiles.getByCategory('video')

        expect(item1).toBeDefined()
        expect(item2).toBeDefined()
        expect(item1).not.toBe(item2)
        expect(item1).toEqual(item2)
      })

      it('should not allow modifying returned category item to affect internal category map', () => {
        const item1 = MediaFiles.getByCategory('video')
        const originalName = item1?.name

        if (item1) {
          item1.name = 'Tampered Video Category'
        }

        const item2 = MediaFiles.getByCategory('video')
        expect(item2?.name).toBe(originalName)
      })
    })

    describe('Custom icon integration via MediaFileIcon', () => {
      it('should apply registered custom icon to category neutral items', () => {
        MediaFileIcon.add('video', '<svg>custom-video-category</svg>')

        const video = MediaFiles.getByCategory('video')
        expect(video?.icon).toBe('<svg>custom-video-category</svg>')

        const videoWildcard = MediaFiles.getByCategory('video/*')
        expect(videoWildcard?.icon).toBe('<svg>custom-video-category</svg>')
      })

      it('should apply custom icon to neutral item when queried for system category', () => {
        MediaFileIcon.add('file', '<svg>custom-neutral-file</svg>')

        const systemItem = MediaFiles.getByCategory(MediaFileCategory.system)
        expect(systemItem?.icon).toBe('<svg>custom-neutral-file</svg>')
      })
    })
  })

  describe('getByMime', () => {
    describe('Standard functional requirements (Happy path)', () => {
      it('should find file item by exact registered MIME type', () => {
        const pdf = MediaFiles.getByMime('application/pdf')
        expect(pdf).toBeDefined()
        expect(pdf?.code).toBe('pdf')
        expect(pdf?.name).toBe('PDF Document')
        expect(pdf?.mime).toBe('application/pdf')
        expect(pdf?.category).toBe(MediaFileCategory.document)

        const png = MediaFiles.getByMime('image/png')
        expect(png).toBeDefined()
        expect(png?.code).toBe('png')
        expect(png?.mime).toBe('image/png')

        const jpeg = MediaFiles.getByMime('image/jpeg')
        expect(jpeg).toBeDefined()
        expect(jpeg?.code).toBe('jpeg')
        expect(jpeg?.mime).toBe('image/jpeg')

        const zip = MediaFiles.getByMime('application/zip')
        expect(zip).toBeDefined()
        expect(zip?.code).toBe('zip')
        expect(zip?.mime).toBe('application/zip')

        const svg = MediaFiles.getByMime('image/svg+xml')
        expect(svg).toBeDefined()
        expect(svg?.code).toBe('svg')
      })

      it('should find category item by wildcard MIME type', () => {
        const audio = MediaFiles.getByMime('audio/*')
        expect(audio).toBeDefined()
        expect(audio?.code).toBe('audio')
        expect(audio?.mime).toBe('audio/*')

        const video = MediaFiles.getByMime('video/*')
        expect(video).toBeDefined()
        expect(video?.code).toBe('video')
        expect(video?.mime).toBe('video/*')

        const image = MediaFiles.getByMime('image/*')
        expect(image).toBeDefined()
        expect(image?.code).toBe('image')
        expect(image?.mime).toBe('image/*')
      })

      it('should find neutral file item for application/octet-stream', () => {
        const octet = MediaFiles.getByMime('application/octet-stream')
        expect(octet).toBeDefined()
        expect(octet?.code).toBe('file')
        expect(octet?.group).toBe(MediaFileGroup.neutral)
      })
    })

    describe('Normalization and parameters resilience', () => {
      it('should normalize uppercase MIME types to lowercase', () => {
        const item = MediaFiles.getByMime('IMAGE/PNG')
        expect(item).toBeDefined()
        expect(item?.code).toBe('png')
      })

      it('should strip leading and trailing whitespace', () => {
        const item = MediaFiles.getByMime('   application/pdf   ')
        expect(item).toBeDefined()
        expect(item?.code).toBe('pdf')
      })

      it('should ignore charset and parameters separated by semicolons', () => {
        const item = MediaFiles.getByMime('text/plain; charset=utf-8')
        expect(item).toBeDefined()
        expect(item?.code).toBe('text')
      })
    })

    describe('Negative conditions', () => {
      it('should return undefined for unregistered MIME types', () => {
        expect(MediaFiles.getByMime('unknown/mime-type')).toBeUndefined()
        expect(MediaFiles.getByMime('application/x-custom-xyz')).toBeUndefined()
      })

      it('should return undefined for empty string or whitespace', () => {
        expect(MediaFiles.getByMime('')).toBeUndefined()
        expect(MediaFiles.getByMime('   ')).toBeUndefined()
        expect(MediaFiles.getByMime('\n\t')).toBeUndefined()
      })

      it('should return undefined for file names, paths, or plain extensions', () => {
        expect(MediaFiles.getByMime('file.pdf')).toBeUndefined()
        expect(MediaFiles.getByMime('png')).toBeUndefined()
        expect(MediaFiles.getByMime('/var/log/file.txt')).toBeUndefined()
      })
    })

    describe('Immutability and instance isolation', () => {
      it('should return a new object instance on repeated calls', () => {
        const item1 = MediaFiles.getByMime('application/pdf')
        const item2 = MediaFiles.getByMime('application/pdf')

        expect(item1).toBeDefined()
        expect(item2).toBeDefined()
        expect(item1).not.toBe(item2)
        expect(item1).toEqual(item2)
      })

      it('should not allow modifying returned item to alter internal registry', () => {
        const item1 = MediaFiles.getByMime('application/pdf')
        const originalName = item1?.name

        if (item1) {
          item1.name = 'Tampered PDF'
        }

        const item2 = MediaFiles.getByMime('application/pdf')
        expect(item2?.name).toBe(originalName)
      })
    })

    describe('Custom icon integration via MediaFileIcon', () => {
      it('should apply registered custom icon to item retrieved by MIME type', () => {
        MediaFileIcon.add('png', '<svg>custom-png-for-mime</svg>')

        const item = MediaFiles.getByMime('image/png')
        expect(item?.icon).toBe('<svg>custom-png-for-mime</svg>')
      })
    })
  })

  describe('getList', () => {
    describe('Standard functional requirements (Happy path)', () => {
      it('should return the complete list of file configurations', () => {
        const list = MediaFiles.getList()

        expect(Array.isArray(list)).toBe(true)
        expect(list.length).toBeGreaterThan(50)

        const png = list.find(item => item.code === 'png')
        expect(png).toBeDefined()
        expect(png?.name).toBe('PNG Image')
        expect(png?.category).toBe(MediaFileCategory.image)

        const neutral = list.find(item => item.group === MediaFileGroup.neutral)
        expect(neutral).toBeDefined()
        expect(neutral?.code).toBe('file')

        const videoCategory = list.find(item => item.code === 'video' && item.group === MediaFileGroup.category)
        expect(videoCategory).toBeDefined()
      })

      it('should verify all items in the list conform to MediaFileItem structure', () => {
        const list = MediaFiles.getList()

        for (const item of list) {
          expect(typeof item.code).toBe('string')
          expect(item.code.length).toBeGreaterThan(0)
          expect(typeof item.name).toBe('string')
          expect(item.name.length).toBeGreaterThan(0)
          if (item.extensions) {
            expect(Array.isArray(item.extensions)).toBe(true)
          }
        }
      })
    })

    describe('Immutability and instance isolation', () => {
      it('should return a new array instance on every invocation', () => {
        const list1 = MediaFiles.getList()
        const initialLength = list1.length

        list1.pop()
        expect(list1.length).toBe(initialLength - 1)

        const list2 = MediaFiles.getList()
        expect(list2.length).toBe(initialLength)
        expect(list1).not.toBe(list2)
      })

      it('should clone each item so mutations to items in getList do not affect subsequent calls', () => {
        const list1 = MediaFiles.getList()
        const firstItem = list1[0]
        const originalName = firstItem.name

        firstItem.name = 'Tampered In List 1'

        const list2 = MediaFiles.getList()
        expect(list2[0].name).toBe(originalName)
      })
    })

    describe('Custom icon integration via MediaFileIcon', () => {
      it('should apply registered custom icons to items in getList', () => {
        MediaFileIcon.add('png', '<svg>custom-png-in-list</svg>')
        MediaFileIcon.add('pdf', '<svg>custom-pdf-in-list</svg>')

        const list = MediaFiles.getList()
        const png = list.find(item => item.code === 'png')
        const pdf = list.find(item => item.code === 'pdf')

        expect(png?.icon).toBe('<svg>custom-png-in-list</svg>')
        expect(pdf?.icon).toBe('<svg>custom-pdf-in-list</svg>')
      })
    })
  })

  describe('getNeutral', () => {
    describe('Standard functional requirements (Happy path)', () => {
      it('should return the default neutral file item', () => {
        const neutral = MediaFiles.getNeutral()

        expect(neutral).toBeDefined()
        expect(neutral?.code).toBe('file')
        expect(neutral?.name).toBe('File')
        expect(neutral?.category).toBe(MediaFileCategory.system)
        expect(neutral?.group).toBe(MediaFileGroup.neutral)
        expect(neutral?.mime).toBe('application/octet-stream')
      })
    })

    describe('Immutability and instance isolation', () => {
      it('should return a new object instance on repeated calls', () => {
        const item1 = MediaFiles.getNeutral()
        const item2 = MediaFiles.getNeutral()

        expect(item1).toBeDefined()
        expect(item2).toBeDefined()
        expect(item1).not.toBe(item2)
        expect(item1).toEqual(item2)
      })

      it('should not allow mutations to alter the internal neutral item cache', () => {
        const item1 = MediaFiles.getNeutral()
        const originalName = item1?.name

        if (item1) {
          item1.name = 'Tampered Neutral File'
        }

        const item2 = MediaFiles.getNeutral()
        expect(item2?.name).toBe(originalName)
      })
    })

    describe('Custom icon integration via MediaFileIcon', () => {
      it('should apply custom icon when registered for "file"', () => {
        MediaFileIcon.add('file', '<svg>custom-neutral-file-icon</svg>')

        const neutral = MediaFiles.getNeutral()
        expect(neutral?.icon).toBe('<svg>custom-neutral-file-icon</svg>')
      })

      it('should revert to default when MediaFileIcon is reset', () => {
        MediaFileIcon.add('file', '<svg>custom-neutral-file-icon</svg>')
        expect(MediaFiles.getNeutral()?.icon).toBe('<svg>custom-neutral-file-icon</svg>')

        MediaFileIcon.reset()
        expect(MediaFiles.getNeutral()?.icon).toBeUndefined()
      })
    })
  })

  describe('Internal caches and protected methods coverage (via TestMediaFiles subclass)', () => {
    class TestMediaFiles extends MediaFiles {
      static testFind(code: string): MediaFileItem {
        return this.find(code)
      }

      static testFindByCategory(category: string): MediaFileItem | undefined {
        return this.findByCategory(category)
      }

      static testFindByCode(code: string): MediaFileItem | undefined {
        return this.findByCode(code)
      }

      static testFindByExtension(extension: string): MediaFileItem | undefined {
        return this.findByExtension(extension)
      }

      static testFindByMime(mime: string): MediaFileItem | undefined {
        return this.findByMime(mime)
      }

      static testFindNeutral(): MediaFileItem {
        return this.findNeutral()
      }

      static testInitCategory(): Map<string, Readonly<MediaFileItem>> {
        return this.initCategory()
      }

      static testToCategory(category: string): string {
        return this.toCategory(category)
      }
    }

    it('should safely return undefined for empty inputs in protected finder methods', () => {
      expect(TestMediaFiles.testFindByCode('')).toBeUndefined()
      expect(TestMediaFiles.testFindByExtension('')).toBeUndefined()
      expect(TestMediaFiles.testFindByMime('')).toBeUndefined()
      expect(TestMediaFiles.testFindByCategory('')).toBeUndefined()
    })

    it('should return neutral item when testFind is called with empty string', () => {
      const item = TestMediaFiles.testFind('')
      expect(item.code).toBe('file')
      expect(item.group).toBe(MediaFileGroup.neutral)
    })

    it('should normalize category strings using toCategory', () => {
      expect(TestMediaFiles.testToCategory('video/*')).toBe('video')
      expect(TestMediaFiles.testToCategory('audio/*')).toBe('audio')
      expect(TestMediaFiles.testToCategory('image')).toBe('image')
    })

    it('should reuse initialized internal categoryMap, codeMap, extensionMap, and mimeMap across multiple calls', () => {
      const categoryMap1 = TestMediaFiles.testInitCategory()
      const categoryMap2 = TestMediaFiles.testInitCategory()
      expect(categoryMap1).toBe(categoryMap2)

      const png1 = TestMediaFiles.testFindByCode('png')
      const png2 = TestMediaFiles.testFindByCode('png')
      expect(png1).toBe(png2)

      const ext1 = TestMediaFiles.testFindByExtension('markdown')
      const ext2 = TestMediaFiles.testFindByExtension('markdown')
      expect(ext1).toBe(ext2)

      const mime1 = TestMediaFiles.testFindByMime('image/png')
      const mime2 = TestMediaFiles.testFindByMime('image/png')
      expect(mime1).toBe(mime2)

      const neutral1 = TestMediaFiles.testFindNeutral()
      const neutral2 = TestMediaFiles.testFindNeutral()
      expect(neutral1).toBe(neutral2)
    })
  })
})
