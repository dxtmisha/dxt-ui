import { beforeEach, describe, expect, it } from 'vitest'
import { fileIcons, registerFileIcons } from '../../files'
import { MediaFileCategory, MediaFileGroup } from '../../types/fileTypes'
import { MediaFile } from '../MediaFile'
import { MediaFileIcon } from '../MediaFileIcon'

describe('MediaFile', () => {
  beforeEach(() => {
    MediaFileIcon.reset()
  })

  describe('name and baseName', () => {
    it('should extract name and baseName from full URL with query parameters and hash', () => {
      const file = new MediaFile('https://example.com/assets/report.final.pdf?v=2.1#page=5')

      expect(file.name).toBe('report.final.pdf')
      expect(file.baseName).toBe('report.final')
    })

    it('should extract name and baseName from relative file paths with query parameters and hash without slashes', () => {
      const fileWithQuery = new MediaFile('avatar.png?v=123')
      expect(fileWithQuery.name).toBe('avatar.png')
      expect(fileWithQuery.baseName).toBe('avatar')

      const fileWithHash = new MediaFile('document.pdf#page=5')
      expect(fileWithHash.name).toBe('document.pdf')
      expect(fileWithHash.baseName).toBe('document')
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

    it('should return empty string for paths with a trailing slash', () => {
      const dirUrl = new MediaFile('https://example.com/assets/photos/')
      expect(dirUrl.name).toBe('')
      expect(dirUrl.baseName).toBe('')

      const dirPath = new MediaFile('/var/www/uploads/')
      expect(dirPath.name).toBe('')
      expect(dirPath.baseName).toBe('')
    })

    it('should safely decode URL percent-encoded characters in filename', () => {
      const encodedUrl = new MediaFile('https://example.com/files/Quarterly%20Report%202026.pdf')
      expect(encodedUrl.name).toBe('Quarterly Report 2026.pdf')
      expect(encodedUrl.baseName).toBe('Quarterly Report 2026')
      expect(encodedUrl.extension).toBe('pdf')
      expect(encodedUrl.isDocument()).toBe(true)

      const cyrillicUrl = new MediaFile('https://example.com/assets/%D0%BE%D1%82%D1%87%D0%B5%D1%82.docx')
      expect(cyrillicUrl.name).toBe('отчет.docx')
      expect(cyrillicUrl.baseName).toBe('отчет')
      expect(cyrillicUrl.extension).toBe('docx')
      expect(cyrillicUrl.isDocument()).toBe(true)

      const malformedUrl = new MediaFile('https://example.com/files/100%discount.pdf')
      expect(malformedUrl.name).toBe('100%discount.pdf')
      expect(malformedUrl.baseName).toBe('100%discount')
      expect(malformedUrl.extension).toBe('pdf')
    })

    it('should lazily cache name calculation across repeated accesses', () => {
      const file = new MediaFile('https://example.com/assets/report.pdf?v=2#page=1')
      expect(file.name).toBe('report.pdf')
      expect(file.name).toBe('report.pdf')
    })
  })

  describe('extension', () => {
    it('should extract extension from file links and URLs', () => {
      const urlFile = new MediaFile('https://example.com/images/cat.JPEG?w=800#hash')
      expect(urlFile.extension).toBe('jpeg')

      const pathFile = new MediaFile('/tmp/files/document.PDF')
      expect(pathFile.extension).toBe('pdf')

      const relativeQueryFile = new MediaFile('avatar.png?v=123')
      expect(relativeQueryFile.extension).toBe('png')

      const relativeHashFile = new MediaFile('document.pdf#page=5')
      expect(relativeHashFile.extension).toBe('pdf')
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

      const codeWithQuery = new MediaFile('png?v=123')
      expect(codeWithQuery.name).toBe('png')
      expect(codeWithQuery.extension).toBe('png')
      expect(codeWithQuery.isImage()).toBe(true)

      const categoryWithQuery = new MediaFile('archive?v=1')
      expect(categoryWithQuery.name).toBe('archive')
      expect(categoryWithQuery.extension).toBe('archive')
      expect(categoryWithQuery.isArchive()).toBe(true)
    })

    it('should return empty string for empty input', () => {
      const file = new MediaFile('')
      expect(file.extension).toBe('')
    })

    it('should lazily cache extension calculation across repeated accesses', () => {
      const file = new MediaFile('photo.png')
      expect(file.extension).toBe('png')
      expect(file.extension).toBe('png')
    })
  })

  describe('extensions', () => {
    it('should return array of supported extensions for recognized file', () => {
      const file = new MediaFile('document.docx')
      expect(file.extensions).toEqual(['docx', 'dotx'])

      const cpp = new MediaFile('main.cpp')
      expect(cpp.extensions).toContain('cpp')
      expect(cpp.extensions).toContain('cxx')

      const book = new MediaFile('novel.epub')
      expect(book.extensions).toContain('epub')
      expect(book.extensions).toContain('mobi')
    })

    it('should resolve item when created with secondary extension', () => {
      const dotx = new MediaFile('template.dotx')
      expect(dotx.item.code).toBe('docx')
      expect(dotx.category).toBe(MediaFileCategory.document)
      expect(dotx.isDocument()).toBe(true)

      const htm = new MediaFile('index.htm')
      expect(htm.item.code).toBe('html')
      expect(htm.isCode()).toBe(true)
    })

    it('should fallback to [extension] for unknown file with extension', () => {
      const unknownFile = new MediaFile('unknown.xyz')
      expect(unknownFile.extensions).toEqual(['xyz'])
    })

    it('should return undefined for file without extension', () => {
      const noExtFile = new MediaFile('https://example.com/api/download')
      expect(noExtFile.extensions).toBeUndefined()
    })

    it('should return a shallow copy of extensions to protect catalog from mutations', () => {
      const file1 = new MediaFile('document.docx')
      const extList = file1.extensions

      if (extList) {
        extList.push('custom_mutated')
      }

      const file2 = new MediaFile('document.docx')
      expect(file2.extensions).toEqual(['docx', 'dotx'])
      expect(file2.extensions).not.toContain('custom_mutated')
    })

    it('should lazily cache extensions calculation across repeated accesses', () => {
      const file = new MediaFile('document.docx')
      const first = file.extensions
      const second = file.extensions
      expect(first).toBe(second)

      const unknownFile = new MediaFile('unknown.xyz')
      expect(unknownFile.extensions).toBe(unknownFile.extensions)
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

    it('should return system category for unknown extension or empty string', () => {
      expect(new MediaFile('unknown.xyz').category).toBe(MediaFileCategory.system)
      expect(new MediaFile('').category).toBe(MediaFileCategory.system)
    })
  })

  describe('icon', () => {
    it('should return empty string when default or custom icon is not registered', () => {
      const pngFile = new MediaFile('image.png')
      expect(pngFile.icon).toBe('')

      const unknownFile = new MediaFile('unknown.unrecognized')
      expect(unknownFile.icon).toBe('')
    })

    it('should return matching SVG icon for recognized extension when registered', () => {
      registerFileIcons()

      const pngFile = new MediaFile('image.png')
      expect(pngFile.icon).toBe(fileIcons.png)

      const pdfFile = new MediaFile('pdf')
      expect(pdfFile.icon).toBe(fileIcons.pdf)
    })

    it('should return registered custom icon when present', () => {
      MediaFileIcon.add('png', 'custom-png-icon')

      const file = new MediaFile('image.png')
      expect(file.icon).toBe('custom-png-icon')
    })

    it('should return default fallback icon when extension is not found or empty and icons are registered', () => {
      registerFileIcons()

      const unknownFile = new MediaFile('unknown.unrecognized')
      expect(unknownFile.icon).toBe(fileIcons.file)

      const emptyFile = new MediaFile('')
      expect(emptyFile.icon).toBe(fileIcons.file)
    })
  })

  describe('item', () => {
    it('should return metadata item for valid file extension', () => {
      const file = new MediaFile('data.csv')
      const item = file.item

      expect(item).toBeDefined()
      expect(item.code).toBe('csv')
      expect(item.name).toBe('CSV Spreadsheet')
      expect(item.category).toBe(MediaFileCategory.table)
    })

    it('should return default neutral item for unknown extension', () => {
      const file = new MediaFile('file.completely_unregistered_extension')
      expect(file.item).toBeDefined()
      expect(file.item.code).toBe('file')
    })

    it('should lazily cache item calculation across repeated accesses', () => {
      const file = new MediaFile('data.csv')
      const first = file.item
      const second = file.item
      expect(first).toBe(second)
    })
  })

  describe('mime', () => {
    it('should return correct MIME type for known files and extensions', () => {
      expect(new MediaFile('photo.png').mime).toBe('image/png')
      expect(new MediaFile('document.pdf').mime).toBe('application/pdf')
      expect(new MediaFile('video.mp4').mime).toBe('video/mp4')
      expect(new MediaFile('archive.zip').mime).toBe('application/zip')
      expect(new MediaFile('audio.mp3').mime).toBe('audio/mpeg')
    })

    it('should resolve item when created with MIME type string', () => {
      const file = new MediaFile('image/png')
      expect(file.mime).toBe('image/png')
      expect(file.name).toBe('')
      expect(file.baseName).toBe('')
      expect(file.extension).toBe('png')
      expect(file.extensions).toEqual(['png'])
      expect(file.isImage()).toBe(true)
      expect(file.category).toBe(MediaFileCategory.image)

      const fileWithQuery = new MediaFile('image/png?param=1')
      expect(fileWithQuery.mime).toBe('image/png')
      expect(fileWithQuery.name).toBe('')
      expect(fileWithQuery.baseName).toBe('')
      expect(fileWithQuery.extension).toBe('png')
      expect(fileWithQuery.isImage()).toBe(true)
    })

    it('should resolve category item and empty extension when created with category MIME type', () => {
      const file = new MediaFile('audio/*')
      expect(file.mime).toBe('audio/*')
      expect(file.name).toBe('')
      expect(file.baseName).toBe('')
      expect(file.extension).toBe('')
      expect(file.extensions).toBeUndefined()
      expect(file.category).toBe(MediaFileCategory.audio)
      expect(file.isAudio()).toBe(true)
      expect(file.isCategoryGroup()).toBe(true)
    })

    it('should return default fallback MIME type for unknown file', () => {
      expect(new MediaFile('unknown.xyz').mime).toBe('application/octet-stream')
    })
  })

  describe('File and Blob object input and explicit MIME parameter', () => {
    it('should support File instance as input', () => {
      const browserFile = new File(['content'], 'avatar.png', { type: 'image/png' })
      const mediaFile = new MediaFile(browserFile)

      expect(mediaFile.name).toBe('avatar.png')
      expect(mediaFile.baseName).toBe('avatar')
      expect(mediaFile.extension).toBe('png')
      expect(mediaFile.mime).toBe('image/png')
      expect(mediaFile.file).toBe(browserFile)
      expect(mediaFile.blob).toBe(browserFile)
      expect(mediaFile.isImage()).toBe(true)
      expect(mediaFile.category).toBe(MediaFileCategory.image)
    })

    it('should support Blob instance as input', () => {
      const binaryBlob = new Blob(['sample-data'], { type: 'image/png' })
      const mediaFile = new MediaFile(binaryBlob)

      expect(mediaFile.name).toBe('')
      expect(mediaFile.baseName).toBe('')
      expect(mediaFile.extension).toBe('png')
      expect(mediaFile.mime).toBe('image/png')
      expect(mediaFile.file).toBeUndefined()
      expect(mediaFile.blob).toBe(binaryBlob)
      expect(mediaFile.isImage()).toBe(true)
      expect(mediaFile.category).toBe(MediaFileCategory.image)
    })

    it('should resolve plain text Blob', () => {
      const textBlob = new Blob(['hello world'], { type: 'text/plain' })
      const mediaFile = new MediaFile(textBlob)

      expect(mediaFile.name).toBe('')
      expect(mediaFile.extension).toBe('txt')
      expect(mediaFile.mime).toBe('text/plain')
      expect(mediaFile.isText()).toBe(true)
      expect(mediaFile.category).toBe(MediaFileCategory.text)
    })

    it('should handle untyped Blob gracefully', () => {
      const untypedBlob = new Blob(['untyped'])
      const mediaFile = new MediaFile(untypedBlob)

      expect(mediaFile.name).toBe('')
      expect(mediaFile.extension).toBe('')
      expect(mediaFile.isSystem()).toBe(true)
      expect(mediaFile.category).toBe(MediaFileCategory.system)
    })

    it('should support explicit MIME type with Blob input', () => {
      const untypedBlob = new Blob(['data'])
      const mediaFile = new MediaFile(untypedBlob, 'application/pdf')

      expect(mediaFile.name).toBe('')
      expect(mediaFile.extension).toBe('pdf')
      expect(mediaFile.mime).toBe('application/pdf')
      expect(mediaFile.isDocument()).toBe(true)
      expect(mediaFile.category).toBe(MediaFileCategory.document)
    })

    it('should resolve File without extension using its MIME type', () => {
      const blobFile = new File(['data'], 'document', { type: 'application/pdf' })
      const mediaFile = new MediaFile(blobFile)

      expect(mediaFile.name).toBe('document')
      expect(mediaFile.baseName).toBe('document')
      expect(mediaFile.extension).toBe('pdf')
      expect(mediaFile.mime).toBe('application/pdf')
      expect(mediaFile.isDocument()).toBe(true)
      expect(mediaFile.category).toBe(MediaFileCategory.document)

      const untypedFile = new File(['data'], 'unknown-doc')
      const untypedMediaFile = new MediaFile(untypedFile)
      expect(untypedMediaFile.extension).toBe('')
    })

    it('should support explicit MIME type as second constructor argument', () => {
      const file = new MediaFile('upload-file', 'image/jpeg')

      expect(file.name).toBe('upload-file')
      expect(file.extension).toBe('jpeg')
      expect(file.mime).toBe('image/jpeg')
      expect(file.isImage()).toBe(true)
      expect(file.category).toBe(MediaFileCategory.image)
    })

    it('should prioritize explicit MIME type over file.type if provided', () => {
      const browserFile = new File(['content'], 'archive', { type: 'application/octet-stream' })
      const mediaFile = new MediaFile(browserFile, 'application/zip')

      expect(mediaFile.extension).toBe('zip')
      expect(mediaFile.mime).toBe('application/zip')
      expect(mediaFile.isArchive()).toBe(true)
      expect(mediaFile.category).toBe(MediaFileCategory.archive)
    })

    it('should normalize uppercase explicit MIME type to lowercase', () => {
      const fileWithUpperMime = new MediaFile('document.pdf', 'APPLICATION/PDF')
      expect(fileWithUpperMime.mime).toBe('application/pdf')
      expect(fileWithUpperMime.extension).toBe('pdf')
      expect(fileWithUpperMime.isDocument()).toBe(true)

      const blobWithUpperMime = new Blob(['data'], { type: 'IMAGE/PNG' })
      const mediaFile = new MediaFile(blobWithUpperMime)
      expect(mediaFile.mime).toBe('image/png')
      expect(mediaFile.extension).toBe('png')
      expect(mediaFile.isImage()).toBe(true)
    })

    it('should return undefined for file and blob getters when initialized with string', () => {
      const mediaFile = new MediaFile('report.xlsx')
      expect(mediaFile.file).toBeUndefined()
      expect(mediaFile.blob).toBeUndefined()
    })
  })

  describe('is* category checkers', () => {
    it('should correctly identify archive files', () => {
      expect(new MediaFile('data.zip').isArchive()).toBe(true)
      expect(new MediaFile('backup.7z').isArchive()).toBe(true)
      expect(new MediaFile('photo.png').isArchive()).toBe(false)
    })

    it('should correctly identify audio files', () => {
      expect(new MediaFile('song.mp3').isAudio()).toBe(true)
      expect(new MediaFile('track.flac').isAudio()).toBe(true)
      expect(new MediaFile('video.mp4').isAudio()).toBe(false)
    })

    it('should correctly identify code files', () => {
      expect(new MediaFile('index.ts').isCode()).toBe(true)
      expect(new MediaFile('script.js').isCode()).toBe(true)
      expect(new MediaFile('data.json').isCode()).toBe(true)
      expect(new MediaFile('photo.png').isCode()).toBe(false)
    })

    it('should correctly identify config files', () => {
      expect(new MediaFile('config').isConfig()).toBe(true)
      expect(new MediaFile('settings').isConfig()).toBe(true)
      expect(new MediaFile('photo.png').isConfig()).toBe(false)
    })

    it('should correctly identify database files', () => {
      expect(new MediaFile('app.db').isDatabase()).toBe(true)
      expect(new MediaFile('data.sqlite').isDatabase()).toBe(true)
      expect(new MediaFile('database').isDatabase()).toBe(true)
      expect(new MediaFile('photo.png').isDatabase()).toBe(false)
    })

    it('should correctly identify document files', () => {
      expect(new MediaFile('document.docx').isDocument()).toBe(true)
      expect(new MediaFile('manual.pdf').isDocument()).toBe(true)
      expect(new MediaFile('notes.rtf').isDocument()).toBe(true)
      expect(new MediaFile('audio.wav').isDocument()).toBe(false)
    })

    it('should correctly identify executable files', () => {
      expect(new MediaFile('setup.exe').isExecutable()).toBe(true)
      expect(new MediaFile('installer.dmg').isExecutable()).toBe(true)
      expect(new MediaFile('app.apk').isExecutable()).toBe(true)
      expect(new MediaFile('doc.pdf').isExecutable()).toBe(false)
    })

    it('should correctly identify folder items', () => {
      expect(new MediaFile('folder').isFolder()).toBe(true)
      expect(new MediaFile('folder-open').isFolder()).toBe(true)
      expect(new MediaFile('folder-zip').isFolder()).toBe(true)
      expect(new MediaFile('doc.pdf').isFolder()).toBe(false)
    })

    it('should correctly identify font files', () => {
      expect(new MediaFile('font').isFont()).toBe(true)
      expect(new MediaFile('font/*').isFont()).toBe(true)
      expect(new MediaFile('photo.png').isFont()).toBe(false)
    })

    it('should correctly identify image files', () => {
      expect(new MediaFile('photo.jpeg').isImage()).toBe(true)
      expect(new MediaFile('icon.svg').isImage()).toBe(true)
      expect(new MediaFile('picture.webp').isImage()).toBe(true)
      expect(new MediaFile('doc.pdf').isImage()).toBe(false)
    })

    it('should correctly identify presentation files', () => {
      expect(new MediaFile('slides.pptx').isPresentation()).toBe(true)
      expect(new MediaFile('presentation.odp').isPresentation()).toBe(true)
      expect(new MediaFile('deck.ppt').isPresentation()).toBe(true)
      expect(new MediaFile('table.xlsx').isPresentation()).toBe(false)
    })

    it('should correctly identify system files', () => {
      expect(new MediaFile('unknown.xyz').isSystem()).toBe(true)
      expect(new MediaFile('').isSystem()).toBe(true)
      expect(new MediaFile('file').isSystem()).toBe(true)
      expect(new MediaFile('photo.png').isSystem()).toBe(false)
    })

    it('should correctly identify table files', () => {
      expect(new MediaFile('sheet.xlsx').isTable()).toBe(true)
      expect(new MediaFile('report.csv').isTable()).toBe(true)
      expect(new MediaFile('archive.rar').isTable()).toBe(false)
    })

    it('should correctly identify text files', () => {
      expect(new MediaFile('readme.txt').isText()).toBe(true)
      expect(new MediaFile('doc.md').isText()).toBe(true)
      expect(new MediaFile('novel.book').isText()).toBe(true)
      expect(new MediaFile('photo.png').isText()).toBe(false)
    })

    it('should correctly identify vector graphics files', () => {
      expect(new MediaFile('logo.ai').isVector()).toBe(true)
      expect(new MediaFile('drawing.eps').isVector()).toBe(true)
      expect(new MediaFile('design.fig').isVector()).toBe(true)
      expect(new MediaFile('vector').isVector()).toBe(true)
      expect(new MediaFile('photo.jpeg').isVector()).toBe(false)
    })

    it('should correctly identify video files', () => {
      expect(new MediaFile('clip.mp4').isVideo()).toBe(true)
      expect(new MediaFile('stream.webm').isVideo()).toBe(true)
      expect(new MediaFile('movie.mkv').isVideo()).toBe(true)
      expect(new MediaFile('song.mp3').isVideo()).toBe(false)
    })
  })

  describe('group and group checkers', () => {
    it('should identify neutral general file', () => {
      const file = new MediaFile('file')
      expect(file.group).toBe(MediaFileGroup.neutral)
      expect(file.isNeutral()).toBe(true)
      expect(file.isCategoryGroup()).toBe(false)
      expect(file.isStandard()).toBe(false)
    })

    it('should identify category neutral icon', () => {
      const file = new MediaFile('archive')
      expect(file.group).toBe(MediaFileGroup.category)
      expect(file.isNeutral()).toBe(false)
      expect(file.isCategoryGroup()).toBe(true)
      expect(file.isStandard()).toBe(false)
    })

    it('should identify standard file format', () => {
      const file = new MediaFile('photo.png')
      expect(file.group).toBe(MediaFileGroup.standard)
      expect(file.isNeutral()).toBe(false)
      expect(file.isCategoryGroup()).toBe(false)
      expect(file.isStandard()).toBe(true)
    })
  })

  describe('Data URL input', () => {
    it('should correctly detect MIME, extension and category from Data URL without bloating name', () => {
      const dataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
      const file = new MediaFile(dataUrl)

      expect(file.mime).toBe('image/png')
      expect(file.extension).toBe('png')
      expect(file.extensions).toEqual(['png'])
      expect(file.isImage()).toBe(true)
      expect(file.category).toBe(MediaFileCategory.image)
      expect(file.name).toBe('')
      expect(file.baseName).toBe('')
    })

    it('should handle SVG data URL', () => {
      const svgDataUrl = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>'
      const file = new MediaFile(svgDataUrl)

      expect(file.mime).toBe('image/svg+xml')
      expect(file.extension).toBe('svg')
      expect(file.isImage()).toBe(true)
      expect(file.category).toBe(MediaFileCategory.image)
      expect(file.name).toBe('')
      expect(file.baseName).toBe('')
    })

    it('should handle uppercase MIME type in Data URL', () => {
      const dataUrl = 'data:IMAGE/JPEG;base64,/9j/4AAQSkZJRg=='
      const file = new MediaFile(dataUrl)

      expect(file.mime).toBe('image/jpeg')
      expect(file.extension).toBe('jpeg')
      expect(file.isImage()).toBe(true)
      expect(file.category).toBe(MediaFileCategory.image)
    })

    it('should resolve primary extension from extensions array rather than code when detected from MIME', () => {
      const textDataUrl = 'data:text/plain;charset=utf-8,Hello%20World'
      const file = new MediaFile(textDataUrl)

      expect(file.mime).toBe('text/plain')
      expect(file.extension).toBe('txt')
      expect(file.isText()).toBe(true)

      const epubDataUrl = 'data:application/epub+zip;base64,AAAA'
      const epubFile = new MediaFile(epubDataUrl)

      expect(epubFile.mime).toBe('application/epub+zip')
      expect(epubFile.extension).toBe('epub')
    })

    it('should handle data URL with unknown MIME type gracefully', () => {
      const dataUrl = 'data:application/x-custom-unknown;base64,AAAA'
      const file = new MediaFile(dataUrl)

      expect(file.mime).toBe('application/x-custom-unknown')
      expect(file.isSystem()).toBe(true)
      expect(file.name).toBe('')
    })

    it('should identify Data URL with isDataUrl()', () => {
      const dataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUg=='
      const file = new MediaFile(dataUrl)
      expect(file.isDataUrl()).toBe(true)

      const regularFile = new MediaFile('photo.png')
      expect(regularFile.isDataUrl()).toBe(false)

      const fileObj = new MediaFile(new File(['data'], 'test.png', { type: 'image/png' }))
      expect(fileObj.isDataUrl()).toBe(false)
    })
  })

  describe('Blob URL input', () => {
    it('should identify Blob URL with isBlobUrl()', () => {
      const blobUrl = new MediaFile('blob:http://localhost:5173/0d4f3b89-8d76-4be9-813c-04c7df8b49e1')
      expect(blobUrl.isBlobUrl()).toBe(true)
      expect(blobUrl.isDataUrl()).toBe(false)
      expect(blobUrl.isUrl()).toBe(false)

      const regularUrl = new MediaFile('https://example.com/photo.png')
      expect(regularUrl.isBlobUrl()).toBe(false)

      const regularFile = new MediaFile('photo.png')
      expect(regularFile.isBlobUrl()).toBe(false)
    })

    it('should return empty string for name and baseName for Blob URLs', () => {
      const blobUrl = new MediaFile('blob:https://example.com/d949437d-b633-4df4-8d48-319efdb27244')
      expect(blobUrl.name).toBe('')
      expect(blobUrl.baseName).toBe('')
      expect(blobUrl.extension).toBe('')
      expect(blobUrl.isSystem()).toBe(true)
    })

    it('should support explicit MIME type with Blob URL', () => {
      const blobUrl = new MediaFile('blob:http://localhost:3000/1234-5678', 'image/png')
      expect(blobUrl.name).toBe('')
      expect(blobUrl.baseName).toBe('')
      expect(blobUrl.extension).toBe('png')
      expect(blobUrl.mime).toBe('image/png')
      expect(blobUrl.isImage()).toBe(true)
      expect(blobUrl.category).toBe(MediaFileCategory.image)
    })
  })

  describe('URL input and protocol handling', () => {
    it('should identify URLs with isUrl()', () => {
      expect(new MediaFile('https://example.com/photo.png').isUrl()).toBe(true)
      expect(new MediaFile('http://localhost:3000/report.pdf').isUrl()).toBe(true)
      expect(new MediaFile('photo.png').isUrl()).toBe(false)
      expect(new MediaFile('/var/www/photo.png').isUrl()).toBe(false)
      expect(new MediaFile('data:image/png;base64,...').isUrl()).toBe(false)
    })

    it('should correctly extract file name and extension from URL when https:// is stripped', () => {
      const file = new MediaFile('https://example.com/assets/report.final.pdf?v=2.1#page=5')
      expect(file.name).toBe('report.final.pdf')
      expect(file.baseName).toBe('report.final')
      expect(file.extension).toBe('pdf')
      expect(file.isDocument()).toBe(true)
    })

    it('should strip domain and protocol completely and return empty name and extension for root domain URLs', () => {
      const rootUrl = new MediaFile('https://example.com')
      expect(rootUrl.name).toBe('')
      expect(rootUrl.baseName).toBe('')
      expect(rootUrl.extension).toBe('')
      expect(rootUrl.extensions).toBeUndefined()
      expect(rootUrl.isUrl()).toBe(true)
      expect(rootUrl.isSystem()).toBe(true)

      const rootUrlWithSlash = new MediaFile('https://example.com/')
      expect(rootUrlWithSlash.name).toBe('')
      expect(rootUrlWithSlash.baseName).toBe('')
      expect(rootUrlWithSlash.extension).toBe('')
      expect(rootUrlWithSlash.isUrl()).toBe(true)

      const localhostWithPort = new MediaFile('http://localhost:3000')
      expect(localhostWithPort.name).toBe('')
      expect(localhostWithPort.baseName).toBe('')
      expect(localhostWithPort.extension).toBe('')
      expect(localhostWithPort.isUrl()).toBe(true)

      const domainWithQuery = new MediaFile('https://example.com?query=1#hash')
      expect(domainWithQuery.name).toBe('')
      expect(domainWithQuery.baseName).toBe('')
      expect(domainWithQuery.extension).toBe('')
      expect(domainWithQuery.isUrl()).toBe(true)
    })
  })

  describe('Whitespace sanitization', () => {
    it('should trim surrounding whitespace from filenames and extensions', () => {
      const paddedFile = new MediaFile('   avatar.png   ')
      expect(paddedFile.name).toBe('avatar.png')
      expect(paddedFile.baseName).toBe('avatar')
      expect(paddedFile.extension).toBe('png')
      expect(paddedFile.isImage()).toBe(true)

      const paddedExt = new MediaFile('  pdf  ')
      expect(paddedExt.extension).toBe('pdf')
      expect(paddedExt.isDocument()).toBe(true)
    })

    it('should handle whitespace in URLs and MIME types', () => {
      const paddedUrl = new MediaFile('   https://example.com/assets/report.pdf   ')
      expect(paddedUrl.isUrl()).toBe(true)
      expect(paddedUrl.name).toBe('report.pdf')
      expect(paddedUrl.extension).toBe('pdf')

      const paddedMime = new MediaFile('document', '  text/plain  ')
      expect(paddedMime.mime).toBe('text/plain')
      expect(paddedMime.extension).toBe('txt')
      expect(paddedMime.isText()).toBe(true)
    })

    it('should trim tabs and newlines from input', () => {
      const tabNewlineFile = new MediaFile('\t\n  avatar.png  \r\n')
      expect(tabNewlineFile.name).toBe('avatar.png')
      expect(tabNewlineFile.baseName).toBe('avatar')
      expect(tabNewlineFile.extension).toBe('png')
      expect(tabNewlineFile.isImage()).toBe(true)
    })

    it('should handle whitespace-only input gracefully', () => {
      const whitespaceFile = new MediaFile('    ')
      expect(whitespaceFile.name).toBe('')
      expect(whitespaceFile.baseName).toBe('')
      expect(whitespaceFile.extension).toBe('')
      expect(whitespaceFile.isNeutral()).toBe(true)
    })
  })

  describe('Multiple dots and extension edge cases', () => {
    it('should handle filenames with multiple dots', () => {
      const file = new MediaFile('archive.tar.gz')
      expect(file.name).toBe('archive.tar.gz')
      expect(file.baseName).toBe('archive.tar')
      expect(file.extension).toBe('gz')
      expect(file.isArchive()).toBe(true)

      const codeFile = new MediaFile('app.component.spec.ts')
      expect(codeFile.name).toBe('app.component.spec.ts')
      expect(codeFile.baseName).toBe('app.component.spec')
      expect(codeFile.extension).toBe('ts')
      expect(codeFile.isCode()).toBe(true)
    })

    it('should handle trailing dots gracefully', () => {
      const file = new MediaFile('filename.')
      expect(file.name).toBe('filename.')
      expect(file.baseName).toBe('filename')
      expect(file.extension).toBe('')
      expect(file.isSystem()).toBe(true)
    })

    it('should handle leading dots in hidden files', () => {
      const envFile = new MediaFile('.env')
      expect(envFile.name).toBe('.env')
      expect(envFile.baseName).toBe('.env')
      expect(envFile.extension).toBe('env')
      expect(envFile.isSystem()).toBe(true)

      const dockerFile = new MediaFile('.dockerignore')
      expect(dockerFile.name).toBe('.dockerignore')
      expect(dockerFile.baseName).toBe('.dockerignore')
      expect(dockerFile.extension).toBe('dockerignore')
    })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('should handle path traversal sequences without crashing', () => {
      const unixTraversal = new MediaFile('../../../etc/passwd')
      expect(unixTraversal.name).toBe('passwd')
      expect(unixTraversal.baseName).toBe('passwd')
      expect(unixTraversal.extension).toBe('')

      const windowsTraversal = new MediaFile('..\\..\\windows\\system32\\cmd.exe')
      expect(windowsTraversal.name).toBe('cmd.exe')
      expect(windowsTraversal.baseName).toBe('cmd')
      expect(windowsTraversal.extension).toBe('exe')
      expect(windowsTraversal.isExecutable()).toBe(true)
    })

    it('should handle HTML and script tags in filename safely', () => {
      const xssFile = new MediaFile('"><script>alert("xss")<script>.png')
      expect(xssFile.name).toBe('"><script>alert("xss")<script>.png')
      expect(xssFile.baseName).toBe('"><script>alert("xss")<script>')
      expect(xssFile.extension).toBe('png')
      expect(xssFile.isImage()).toBe(true)

      const imgPayload = new MediaFile('"><img src=x onerror=1>.pdf')
      expect(imgPayload.name).toBe('"><img src=x onerror=1>.pdf')
      expect(imgPayload.baseName).toBe('"><img src=x onerror=1>')
      expect(imgPayload.extension).toBe('pdf')
      expect(imgPayload.isDocument()).toBe(true)
    })

    it('should not confuse dots in query parameters with file extension', () => {
      const file = new MediaFile('https://example.com/download/file.pdf?file=photo.jpg&version=1.0.0#sec.3')
      expect(file.name).toBe('file.pdf')
      expect(file.baseName).toBe('file')
      expect(file.extension).toBe('pdf')
      expect(file.isDocument()).toBe(true)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should handle Vietnamese filenames and characters', () => {
      const viFile = new MediaFile('tài liệu dự án.pdf')
      expect(viFile.name).toBe('tài liệu dự án.pdf')
      expect(viFile.baseName).toBe('tài liệu dự án')
      expect(viFile.extension).toBe('pdf')
      expect(viFile.isDocument()).toBe(true)

      const encodedViUrl = new MediaFile('https://example.com/files/%C4%91%E1%BB%81%20%C3%A1n%20nghi%C3%AAn%20c%E1%BB%A9u.docx')
      expect(encodedViUrl.name).toBe('đề án nghiên cứu.docx')
      expect(encodedViUrl.baseName).toBe('đề án nghiên cứu')
      expect(encodedViUrl.extension).toBe('docx')
      expect(encodedViUrl.isDocument()).toBe(true)
    })

    it('should handle CJK characters in filename', () => {
      const zhFile = new MediaFile('财务报表_2026.xlsx')
      expect(zhFile.name).toBe('财务报表_2026.xlsx')
      expect(zhFile.baseName).toBe('财务报表_2026')
      expect(zhFile.extension).toBe('xlsx')
      expect(zhFile.isTable()).toBe(true)

      const jaFile = new MediaFile('プレゼンテーション.pptx')
      expect(jaFile.name).toBe('プレゼンテーション.pptx')
      expect(jaFile.baseName).toBe('プレゼンテーション')
      expect(jaFile.extension).toBe('pptx')
      expect(jaFile.isPresentation()).toBe(true)
    })

    it('should handle Emojis in filename', () => {
      const emojiFile = new MediaFile('📁_vacation/🎉_party_video.mp4')
      expect(emojiFile.name).toBe('🎉_party_video.mp4')
      expect(emojiFile.baseName).toBe('🎉_party_video')
      expect(emojiFile.extension).toBe('mp4')
      expect(emojiFile.isVideo()).toBe(true)
    })
  })

  describe('reset', () => {
    it('should reset all cached values and return this instance', () => {
      const file = new MediaFile('https://example.com/assets/report.pdf?v=2#page=1')
      const initialExt = file.extension
      const initialExts = file.extensions
      const initialItem = file.item
      const initialName = file.name

      expect(file.reset()).toBe(file)
      expect(file.extension).toBe(initialExt)
      expect(file.extensions).toEqual(initialExts)
      expect(file.extensions).not.toBe(initialExts)
      expect(file.item).toEqual(initialItem)
      expect(file.name).toBe(initialName)
    })

    it('should memoize rawMime and allow resetting it via reset()', () => {
      const file = new MediaFile('data:image/png;base64,iVBORw0KGgo=')
      expect(file.mime).toBe('image/png')
      expect(file.mime).toBe('image/png')

      expect(file.reset()).toBe(file)
      expect(file.mime).toBe('image/png')
    })

    it('should support chained operations after reset', () => {
      const file = new MediaFile('archive.tar.gz')
      expect(file.extension).toBe('gz')
      expect(file.reset().isArchive()).toBe(true)
      expect(file.reset().reset().extension).toBe('gz')
    })
  })
})
