import { beforeEach, describe, expect, it } from 'vitest'
import { FileSvg, fileIcons } from '../../media/fileList'
import { MediaFileCategory } from '../../types/fileTypes'
import { MediaFile } from '../MediaFile'

describe('MediaFile', () => {
  beforeEach(() => {
    // Reset custom icons registry before each test to avoid test pollution
    for (const key in MediaFile.icons) {
      delete MediaFile.icons[key]
    }
  })

  describe('static getList', () => {
    it('should return the full list of file configurations', () => {
      const list = MediaFile.getList()

      expect(Array.isArray(list)).toBe(true)
      expect(list.length).toBeGreaterThan(0)

      const pngItem = list.find(item => item.code === 'png')
      expect(pngItem).toBeDefined()
      expect(pngItem?.name).toBe('PNG Image')
      expect(pngItem?.category).toBe(MediaFileCategory.image)
    })
  })

  describe('static get', () => {
    it('should return undefined for a non-existent code', () => {
      expect(MediaFile.get('nonexistent_code')).toBeUndefined()
    })

    it('should return a shallow copy of the file configuration item', () => {
      const item1 = MediaFile.get('pdf')
      const item2 = MediaFile.get('pdf')

      expect(item1).toBeDefined()
      expect(item2).toBeDefined()
      expect(item1).not.toBe(item2)
      expect(item1?.code).toBe('pdf')
      expect(item1?.name).toBe('PDF Document')
      expect(item1?.category).toBe(MediaFileCategory.document)
    })

    it('should normalize code by trimming and lowercase', () => {
      const item = MediaFile.get('  PNG  ')

      expect(item).toBeDefined()
      expect(item?.code).toBe('png')
    })

    it('should include the registered custom icon if present', () => {
      MediaFile.addIcon('pdf', 'custom-pdf-svg')

      const item = MediaFile.get('pdf')
      expect(item?.icon).toBe('custom-pdf-svg')
    })
  })

  describe('static addIcon and addIcons', () => {
    it('should register a single custom icon', () => {
      MediaFile.addIcon('custom_code', 'custom-svg')

      expect(MediaFile.icons.custom_code).toBe('custom-svg')
    })

    it('should register multiple custom icons', () => {
      MediaFile.addIcons({
        pdf: 'custom-pdf',
        png: 'custom-png'
      })

      expect(MediaFile.icons.pdf).toBe('custom-pdf')
      expect(MediaFile.icons.png).toBe('custom-png')
      expect(MediaFile.get('pdf')?.icon).toBe('custom-pdf')
      expect(MediaFile.get('png')?.icon).toBe('custom-png')
    })
  })

  describe('name and baseName', () => {
    it('should extract name and baseName from full URL with query parameters and hash', () => {
      const file = new MediaFile('https://example.com/assets/report.final.pdf?v=2.1#page=5')

      expect(file.name).toBe('report.final.pdf')
      expect(file.baseName).toBe('report.final')
    })

    it('should extract name and baseName from Unix and Windows file paths', () => {
      const unixFile = new MediaFile('/var/www/uploads/avatar.png')
      expect(unixFile.name).toBe('avatar.png')
      expect(unixFile.baseName).toBe('avatar')

      const windowsFile = new MediaFile('C:\\Users\\User\\Documents\\presentation.pptx')
      expect(windowsFile.name).toBe('presentation.pptx')
      expect(windowsFile.baseName).toBe('presentation')
    })

    it('should handle simple filenames', () => {
      const file = new MediaFile('archive.tar.gz')

      expect(file.name).toBe('archive.tar.gz')
      expect(file.baseName).toBe('archive.tar')
    })

    it('should handle hidden files and dot files', () => {
      const dotFile = new MediaFile('.gitignore')

      expect(dotFile.name).toBe('.gitignore')
      expect(dotFile.baseName).toBe('.gitignore')
    })

    it('should return empty string for empty input', () => {
      const emptyFile = new MediaFile('')

      expect(emptyFile.name).toBe('')
      expect(emptyFile.baseName).toBe('')
    })

    it('should return raw input when input is a pure file type code', () => {
      const codeFile = new MediaFile('png')

      expect(codeFile.name).toBe('png')
      expect(codeFile.baseName).toBe('png')
    })
  })

  describe('extension', () => {
    it('should extract extension from file links and URLs', () => {
      const urlFile = new MediaFile('https://example.com/images/cat.JPEG?w=800#hash')
      expect(urlFile.extension).toBe('jpeg')

      const pathFile = new MediaFile('/tmp/files/document.PDF')
      expect(pathFile.extension).toBe('pdf')
    })

    it('should return empty string for file links without extension', () => {
      const urlWithoutExt = new MediaFile('https://example.com/api/download')
      expect(urlWithoutExt.extension).toBe('')

      const pathWithoutExt = new MediaFile('/etc/nginx/nginx')
      expect(pathWithoutExt.extension).toBe('')
    })

    it('should extract extension from simple filenames', () => {
      const file = new MediaFile('presentation.pptx')
      expect(file.extension).toBe('pptx')
    })

    it('should extract extension from dotted extension strings', () => {
      const file = new MediaFile('.png')
      expect(file.extension).toBe('png')
    })

    it('should extract extension from plain file type codes', () => {
      const file = new MediaFile('7z')
      expect(file.extension).toBe('7z')

      const uppercase = new MediaFile('DOCX')
      expect(uppercase.extension).toBe('docx')
    })

    it('should return empty string for empty input', () => {
      const file = new MediaFile('')
      expect(file.extension).toBe('')
    })
  })

  describe('category', () => {
    it('should resolve correct category from known extensions and file codes', () => {
      expect(new MediaFile('photo.png').category).toBe(MediaFileCategory.image)
      expect(new MediaFile('video.mp4').category).toBe(MediaFileCategory.video)
      expect(new MediaFile('audio.mp3').category).toBe(MediaFileCategory.audio)
      expect(new MediaFile('doc.pdf').category).toBe(MediaFileCategory.document)
      expect(new MediaFile('archive.7z').category).toBe(MediaFileCategory.archive)
      expect(new MediaFile('code.ts').category).toBe(MediaFileCategory.code)
      expect(new MediaFile('table.xlsx').category).toBe(MediaFileCategory.table)
      expect(new MediaFile('presentation.pptx').category).toBe(MediaFileCategory.presentation)
    })

    it('should return undefined for unknown extension or empty string', () => {
      expect(new MediaFile('unknown.xyz').category).toBeUndefined()
      expect(new MediaFile('').category).toBeUndefined()
    })
  })

  describe('icon', () => {
    it('should return matching SVG icon for recognized extension', () => {
      const pngFile = new MediaFile('image.png')
      expect(pngFile.icon).toBe(fileIcons.png)

      const pdfFile = new MediaFile('pdf')
      expect(pdfFile.icon).toBe(fileIcons.pdf)
    })

    it('should return registered custom icon when present', () => {
      MediaFile.addIcon('png', 'custom-png-icon')

      const file = new MediaFile('image.png')
      expect(file.icon).toBe('custom-png-icon')
    })

    it('should return default fallback FileSvg when extension is not found or empty', () => {
      const unknownFile = new MediaFile('unknown.unrecognized')
      expect(unknownFile.icon).toBe(fileIcons.file ?? FileSvg)

      const emptyFile = new MediaFile('')
      expect(emptyFile.icon).toBe(fileIcons.file ?? FileSvg)
    })
  })

  describe('item', () => {
    it('should return metadata item for valid file extension', () => {
      const file = new MediaFile('data.csv')
      const item = file.item

      expect(item).toBeDefined()
      expect(item?.code).toBe('csv')
      expect(item?.name).toBe('CSV Spreadsheet')
      expect(item?.category).toBe(MediaFileCategory.table)
    })

    it('should return undefined for unknown extension', () => {
      const file = new MediaFile('file.completely_unregistered_extension')
      expect(file.item).toBeUndefined()
    })
  })

  describe('is* category checkers', () => {
    it('should correctly identify archive files', () => {
      expect(new MediaFile('data.zip').isArchive).toBe(true)
      expect(new MediaFile('backup.7z').isArchive).toBe(true)
      expect(new MediaFile('photo.png').isArchive).toBe(false)
    })

    it('should correctly identify audio files', () => {
      expect(new MediaFile('song.mp3').isAudio).toBe(true)
      expect(new MediaFile('track.flac').isAudio).toBe(true)
      expect(new MediaFile('video.mp4').isAudio).toBe(false)
    })

    it('should correctly identify code files', () => {
      expect(new MediaFile('index.ts').isCode).toBe(true)
      expect(new MediaFile('script.js').isCode).toBe(true)
      expect(new MediaFile('data.json').isCode).toBe(true)
      expect(new MediaFile('photo.png').isCode).toBe(false)
    })

    it('should correctly identify document files', () => {
      expect(new MediaFile('document.docx').isDocument).toBe(true)
      expect(new MediaFile('manual.pdf').isDocument).toBe(true)
      expect(new MediaFile('notes.rtf').isDocument).toBe(true)
      expect(new MediaFile('audio.wav').isDocument).toBe(false)
    })

    it('should correctly identify image files', () => {
      expect(new MediaFile('photo.jpeg').isImage).toBe(true)
      expect(new MediaFile('icon.svg').isImage).toBe(true)
      expect(new MediaFile('picture.webp').isImage).toBe(true)
      expect(new MediaFile('doc.pdf').isImage).toBe(false)
    })

    it('should correctly identify presentation files', () => {
      expect(new MediaFile('slides.pptx').isPresentation).toBe(true)
      expect(new MediaFile('presentation.odp').isPresentation).toBe(true)
      expect(new MediaFile('deck.ppt').isPresentation).toBe(true)
      expect(new MediaFile('table.xlsx').isPresentation).toBe(false)
    })

    it('should correctly identify table files', () => {
      expect(new MediaFile('sheet.xlsx').isTable).toBe(true)
      expect(new MediaFile('report.csv').isTable).toBe(true)
      expect(new MediaFile('archive.rar').isTable).toBe(false)
    })

    it('should correctly identify video files', () => {
      expect(new MediaFile('clip.mp4').isVideo).toBe(true)
      expect(new MediaFile('stream.webm').isVideo).toBe(true)
      expect(new MediaFile('movie.mkv').isVideo).toBe(true)
      expect(new MediaFile('song.mp3').isVideo).toBe(false)
    })
  })
})
