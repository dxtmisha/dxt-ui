import type { MediaFileList } from '../types/fileTypes'

/**
 * Structured list of supported file types and categories /
 * Структурированный список поддерживаемых типов файлов и категорий
 */
export const fileList: MediaFileList = [
  // Default neutral file icon / Основная нейтральная иконка файла
  {
    code: 'file',
    name: 'File',
    mime: 'application/octet-stream',
    category: 'system',
    group: 'neutral'
  },

  // Category neutral icons / Нейтральные иконки категорий
  {
    code: 'archive',
    name: 'Archive',
    category: 'archive',
    group: 'category'
  },
  {
    code: 'audio',
    name: 'Audio',
    mime: 'audio/*',
    category: 'audio',
    group: 'category'
  },
  {
    code: 'code',
    name: 'Source Code',
    category: 'code',
    group: 'category'
  },
  {
    code: 'config',
    name: 'Configuration',
    category: 'config',
    group: 'category'
  },
  {
    code: 'database',
    name: 'Database',
    category: 'database',
    group: 'category'
  },
  {
    code: 'document',
    name: 'Document',
    category: 'document',
    group: 'category'
  },
  {
    code: 'executable',
    name: 'Executable',
    category: 'executable',
    group: 'category'
  },
  {
    code: 'folder',
    name: 'Folder',
    category: 'folder',
    group: 'category'
  },
  {
    code: 'font',
    name: 'Font',
    mime: 'font/*',
    category: 'font',
    group: 'category'
  },
  {
    code: 'image',
    name: 'Image',
    mime: 'image/*',
    category: 'image',
    group: 'category'
  },
  {
    code: 'presentation',
    name: 'Presentation',
    category: 'presentation',
    group: 'category'
  },
  {
    code: 'table',
    name: 'Data Table',
    category: 'table',
    group: 'category'
  },
  {
    code: 'text',
    name: 'Text Document',
    mime: 'text/*',
    category: 'text',
    group: 'category'
  },
  {
    code: 'vector',
    name: 'Vector Graphic',
    category: 'vector',
    group: 'category'
  },
  {
    code: 'video',
    name: 'Video',
    mime: 'video/*',
    category: 'video',
    group: 'category'
  },

  // Specific file formats and extensions / Конкретные форматы и расширения файлов
  {
    code: '7z',
    name: '7-Zip',
    extensions: ['7z'],
    mime: 'application/x-7z-compressed',
    category: 'archive',
    group: 'standard'
  },
  {
    code: 'aac',
    name: 'AAC Audio',
    extensions: ['aac'],
    mime: 'audio/aac',
    category: 'audio',
    group: 'standard'
  },
  {
    code: 'ai',
    name: 'Adobe Illustrator',
    extensions: ['ai'],
    mime: 'application/postscript',
    category: 'vector',
    group: 'standard'
  },
  {
    code: 'apk',
    name: 'Android Package',
    extensions: ['apk'],
    mime: 'application/vnd.android.package-archive',
    category: 'executable',
    group: 'standard'
  },
  {
    code: 'app',
    name: 'Application',
    extensions: ['app'],
    mime: 'application/x-executable',
    category: 'executable',
    group: 'standard'
  },
  {
    code: 'avi',
    name: 'AVI Video',
    extensions: ['avi'],
    mime: 'video/x-msvideo',
    category: 'video',
    group: 'standard'
  },
  {
    code: 'blank',
    name: 'Blank File',
    mime: 'application/octet-stream',
    category: 'system',
    group: 'standard'
  },
  {
    code: 'bmp',
    name: 'Bitmap Image',
    extensions: ['bmp', 'dib'],
    mime: 'image/bmp',
    category: 'image',
    group: 'standard'
  },
  {
    code: 'book',
    name: 'E-Book',
    extensions: ['epub', 'mobi', 'azw', 'azw3', 'fb2'],
    mime: 'application/epub+zip',
    category: 'text',
    group: 'standard'
  },
  {
    code: 'c',
    name: 'C Source Code',
    extensions: ['c', 'h'],
    mime: 'text/x-c',
    category: 'code',
    group: 'standard'
  },
  {
    code: 'cpp',
    name: 'C++ Source Code',
    extensions: ['cpp', 'cxx', 'cc', 'hpp', 'hxx', 'hh'],
    mime: 'text/x-c',
    category: 'code',
    group: 'standard'
  },
  {
    code: 'css',
    name: 'Cascading Style Sheets',
    extensions: ['css'],
    mime: 'text/css',
    category: 'code',
    group: 'standard'
  },
  {
    code: 'csv',
    name: 'CSV Spreadsheet',
    extensions: ['csv'],
    mime: 'text/csv',
    category: 'table',
    group: 'standard'
  },
  {
    code: 'db',
    name: 'Database File',
    extensions: ['db', 'sqlite', 'sqlite3'],
    mime: 'application/x-sqlite3',
    category: 'database',
    group: 'standard'
  },
  {
    code: 'dmg',
    name: 'Apple Disk Image',
    extensions: ['dmg'],
    mime: 'application/x-apple-diskimage',
    category: 'executable',
    group: 'standard'
  },
  {
    code: 'doc',
    name: 'Word Document',
    extensions: ['doc', 'dot'],
    mime: 'application/msword',
    category: 'document',
    group: 'standard'
  },
  {
    code: 'docx',
    name: 'Word Document XML',
    extensions: ['docx', 'dotx'],
    mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    category: 'document',
    group: 'standard'
  },
  {
    code: 'eps',
    name: 'Encapsulated PostScript',
    extensions: ['eps'],
    mime: 'application/postscript',
    category: 'vector',
    group: 'standard'
  },
  {
    code: 'exe',
    name: 'Executable File',
    extensions: ['exe', 'msi'],
    mime: 'application/x-msdownload',
    category: 'executable',
    group: 'standard'
  },
  {
    code: 'fig',
    name: 'Figma Design',
    extensions: ['fig'],
    mime: 'application/x-figma',
    category: 'vector',
    group: 'standard'
  },
  {
    code: 'flac',
    name: 'FLAC Audio',
    extensions: ['flac'],
    mime: 'audio/flac',
    category: 'audio',
    group: 'standard'
  },
  {
    code: 'folder-open',
    name: 'Open Folder',
    category: 'folder',
    group: 'standard'
  },
  {
    code: 'folder-zip',
    name: 'Compressed Folder',
    extensions: ['zip'],
    mime: 'application/zip',
    category: 'folder',
    group: 'standard'
  },
  {
    code: 'gif',
    name: 'GIF Image',
    extensions: ['gif'],
    mime: 'image/gif',
    category: 'image',
    group: 'standard'
  },
  {
    code: 'gz',
    name: 'Gzip Archive',
    extensions: ['gz', 'gzip'],
    mime: 'application/gzip',
    category: 'archive',
    group: 'standard'
  },
  {
    code: 'html',
    name: 'HTML Document',
    extensions: ['html', 'htm'],
    mime: 'text/html',
    category: 'code',
    group: 'standard'
  },
  {
    code: 'ico',
    name: 'Icon Image',
    extensions: ['ico'],
    mime: 'image/x-icon',
    category: 'image',
    group: 'standard'
  },
  {
    code: 'iso',
    name: 'Disk Image',
    extensions: ['iso'],
    mime: 'application/x-iso9660-image',
    category: 'executable',
    group: 'standard'
  },
  {
    code: 'java',
    name: 'Java Source Code',
    extensions: ['java', 'class', 'jar'],
    mime: 'text/x-java-source',
    category: 'code',
    group: 'standard'
  },
  {
    code: 'jpeg',
    name: 'JPEG Image',
    extensions: ['jpeg', 'jpg'],
    mime: 'image/jpeg',
    category: 'image',
    group: 'standard'
  },
  {
    code: 'jpg',
    name: 'JPG Image',
    extensions: ['jpg', 'jpeg'],
    mime: 'image/jpeg',
    category: 'image',
    group: 'standard'
  },
  {
    code: 'js',
    name: 'JavaScript',
    extensions: ['js', 'mjs', 'cjs'],
    mime: 'text/javascript',
    category: 'code',
    group: 'standard'
  },
  {
    code: 'json',
    name: 'JSON Document',
    extensions: ['json'],
    mime: 'application/json',
    category: 'code',
    group: 'standard'
  },
  {
    code: 'm4a',
    name: 'M4A Audio',
    extensions: ['m4a'],
    mime: 'audio/mp4',
    category: 'audio',
    group: 'standard'
  },
  {
    code: 'md',
    name: 'Markdown Document',
    extensions: ['md', 'markdown'],
    mime: 'text/markdown',
    category: 'text',
    group: 'standard'
  },
  {
    code: 'mkv',
    name: 'Matroska Video',
    extensions: ['mkv'],
    mime: 'video/x-matroska',
    category: 'video',
    group: 'standard'
  },
  {
    code: 'mov',
    name: 'QuickTime Video',
    extensions: ['mov'],
    mime: 'video/quicktime',
    category: 'video',
    group: 'standard'
  },
  {
    code: 'mp3',
    name: 'MP3 Audio',
    extensions: ['mp3'],
    mime: 'audio/mpeg',
    category: 'audio',
    group: 'standard'
  },
  {
    code: 'mp4',
    name: 'MP4 Video',
    extensions: ['mp4', 'm4v'],
    mime: 'video/mp4',
    category: 'video',
    group: 'standard'
  },
  {
    code: 'odp',
    name: 'OpenDocument Presentation',
    extensions: ['odp'],
    mime: 'application/vnd.oasis.opendocument.presentation',
    category: 'presentation',
    group: 'standard'
  },
  {
    code: 'ods',
    name: 'OpenDocument Spreadsheet',
    extensions: ['ods'],
    mime: 'application/vnd.oasis.opendocument.spreadsheet',
    category: 'table',
    group: 'standard'
  },
  {
    code: 'odt',
    name: 'OpenDocument Text',
    extensions: ['odt'],
    mime: 'application/vnd.oasis.opendocument.text',
    category: 'document',
    group: 'standard'
  },
  {
    code: 'ogg',
    name: 'Ogg Vorbis Audio',
    extensions: ['ogg', 'oga'],
    mime: 'audio/ogg',
    category: 'audio',
    group: 'standard'
  },
  {
    code: 'pdf',
    name: 'PDF Document',
    extensions: ['pdf'],
    mime: 'application/pdf',
    category: 'document',
    group: 'standard'
  },
  {
    code: 'php',
    name: 'PHP Script',
    extensions: ['php', 'phtml'],
    mime: 'application/x-httpd-php',
    category: 'code',
    group: 'standard'
  },
  {
    code: 'png',
    name: 'PNG Image',
    extensions: ['png'],
    mime: 'image/png',
    category: 'image',
    group: 'standard'
  },
  {
    code: 'ppt',
    name: 'PowerPoint Presentation',
    extensions: ['ppt', 'pps'],
    mime: 'application/vnd.ms-powerpoint',
    category: 'presentation',
    group: 'standard'
  },
  {
    code: 'pptx',
    name: 'PowerPoint Presentation XML',
    extensions: ['pptx', 'ppsx'],
    mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    category: 'presentation',
    group: 'standard'
  },
  {
    code: 'psd',
    name: 'Adobe Photoshop',
    extensions: ['psd'],
    mime: 'image/vnd.adobe.photoshop',
    category: 'vector',
    group: 'standard'
  },
  {
    code: 'py',
    name: 'Python Script',
    extensions: ['py', 'pyw'],
    mime: 'text/x-python',
    category: 'code',
    group: 'standard'
  },
  {
    code: 'rar',
    name: 'RAR Archive',
    extensions: ['rar'],
    mime: 'application/vnd.rar',
    category: 'archive',
    group: 'standard'
  },
  {
    code: 'rtf',
    name: 'Rich Text Format',
    extensions: ['rtf'],
    mime: 'application/rtf',
    category: 'document',
    group: 'standard'
  },
  {
    code: 'settings',
    name: 'Settings',
    category: 'config',
    group: 'standard'
  },
  {
    code: 'spreadsheet',
    name: 'Spreadsheet',
    extensions: ['xlsx', 'xls'],
    mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    category: 'table',
    group: 'standard'
  },
  {
    code: 'sql',
    name: 'SQL Database Script',
    extensions: ['sql'],
    mime: 'application/sql',
    category: 'code',
    group: 'standard'
  },
  {
    code: 'svg',
    name: 'Scalable Vector Graphics',
    extensions: ['svg', 'svgz'],
    mime: 'image/svg+xml',
    category: 'image',
    group: 'standard'
  },
  {
    code: 'table',
    name: 'Data Table',
    extensions: ['csv', 'tsv'],
    mime: 'text/csv',
    category: 'table',
    group: 'standard'
  },
  {
    code: 'tar',
    name: 'Tar Archive',
    extensions: ['tar'],
    mime: 'application/x-tar',
    category: 'archive',
    group: 'standard'
  },
  {
    code: 'text',
    name: 'Text Document',
    extensions: ['txt', 'text'],
    mime: 'text/plain',
    category: 'text',
    group: 'standard'
  },
  {
    code: 'tiff',
    name: 'TIFF Image',
    extensions: ['tiff', 'tif'],
    mime: 'image/tiff',
    category: 'image',
    group: 'standard'
  },
  {
    code: 'ts',
    name: 'TypeScript',
    extensions: ['ts', 'mts', 'cts'],
    mime: 'text/typescript',
    category: 'code',
    group: 'standard'
  },
  {
    code: 'txt',
    name: 'Text File',
    extensions: ['txt', 'text'],
    mime: 'text/plain',
    category: 'text',
    group: 'standard'
  },
  {
    code: 'unknown',
    name: 'Unknown File',
    mime: 'application/octet-stream',
    category: 'system',
    group: 'standard'
  },
  {
    code: 'wav',
    name: 'WAV Audio',
    extensions: ['wav'],
    mime: 'audio/wav',
    category: 'audio',
    group: 'standard'
  },
  {
    code: 'webm',
    name: 'WebM Video',
    extensions: ['webm'],
    mime: 'video/webm',
    category: 'video',
    group: 'standard'
  },
  {
    code: 'webp',
    name: 'WebP Image',
    extensions: ['webp'],
    mime: 'image/webp',
    category: 'image',
    group: 'standard'
  },
  {
    code: 'wmv',
    name: 'Windows Media Video',
    extensions: ['wmv'],
    mime: 'video/x-ms-wmv',
    category: 'video',
    group: 'standard'
  },
  {
    code: 'xls',
    name: 'Excel Spreadsheet',
    extensions: ['xls', 'xlt'],
    mime: 'application/vnd.ms-excel',
    category: 'table',
    group: 'standard'
  },
  {
    code: 'xlsx',
    name: 'Excel Spreadsheet XML',
    extensions: ['xlsx', 'xltx'],
    mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    category: 'table',
    group: 'standard'
  },
  {
    code: 'xml',
    name: 'XML Document',
    extensions: ['xml'],
    mime: 'application/xml',
    category: 'code',
    group: 'standard'
  },
  {
    code: 'zip',
    name: 'ZIP Archive',
    extensions: ['zip'],
    mime: 'application/zip',
    category: 'archive',
    group: 'standard'
  }
]
