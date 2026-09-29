import {
  MediaFileCategory,
  MediaFileGroup,
  type MediaFileList
} from '../types/fileTypes'

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
    category: MediaFileCategory.system,
    group: MediaFileGroup.neutral
  },

  // Category neutral icons / Нейтральные иконки категорий
  {
    code: 'archive',
    name: 'Archive',
    category: MediaFileCategory.archive,
    group: MediaFileGroup.category
  },
  {
    code: 'audio',
    name: 'Audio',
    mime: 'audio/*',
    category: MediaFileCategory.audio,
    group: MediaFileGroup.category
  },
  {
    code: 'code',
    name: 'Source Code',
    category: MediaFileCategory.code,
    group: MediaFileGroup.category
  },
  {
    code: 'config',
    name: 'Configuration',
    category: MediaFileCategory.config,
    group: MediaFileGroup.category
  },
  {
    code: 'database',
    name: 'Database',
    category: MediaFileCategory.database,
    group: MediaFileGroup.category
  },
  {
    code: 'document',
    name: 'Document',
    category: MediaFileCategory.document,
    group: MediaFileGroup.category
  },
  {
    code: 'executable',
    name: 'Executable',
    category: MediaFileCategory.executable,
    group: MediaFileGroup.category
  },
  {
    code: 'folder',
    name: 'Folder',
    category: MediaFileCategory.folder,
    group: MediaFileGroup.category
  },
  {
    code: 'font',
    name: 'Font',
    mime: 'font/*',
    category: MediaFileCategory.font,
    group: MediaFileGroup.category
  },
  {
    code: 'image',
    name: 'Image',
    mime: 'image/*',
    category: MediaFileCategory.image,
    group: MediaFileGroup.category
  },
  {
    code: 'presentation',
    name: 'Presentation',
    category: MediaFileCategory.presentation,
    group: MediaFileGroup.category
  },
  {
    code: 'table',
    name: 'Data Table',
    category: MediaFileCategory.table,
    group: MediaFileGroup.category
  },
  {
    code: 'text',
    name: 'Text Document',
    mime: 'text/*',
    category: MediaFileCategory.text,
    group: MediaFileGroup.category
  },
  {
    code: 'vector',
    name: 'Vector Graphic',
    category: MediaFileCategory.vector,
    group: MediaFileGroup.category
  },
  {
    code: 'video',
    name: 'Video',
    mime: 'video/*',
    category: MediaFileCategory.video,
    group: MediaFileGroup.category
  },

  // Specific file formats and extensions / Конкретные форматы и расширения файлов
  {
    code: '7z',
    name: '7-Zip',
    extensions: ['7z'],
    mime: 'application/x-7z-compressed',
    category: MediaFileCategory.archive,
    group: MediaFileGroup.standard
  },
  {
    code: 'aac',
    name: 'AAC Audio',
    extensions: ['aac'],
    mime: 'audio/aac',
    category: MediaFileCategory.audio,
    group: MediaFileGroup.standard
  },
  {
    code: 'ai',
    name: 'Adobe Illustrator',
    extensions: ['ai'],
    mime: 'application/postscript',
    category: MediaFileCategory.vector,
    group: MediaFileGroup.standard
  },
  {
    code: 'apk',
    name: 'Android Package',
    extensions: ['apk'],
    mime: 'application/vnd.android.package-archive',
    category: MediaFileCategory.executable,
    group: MediaFileGroup.standard
  },
  {
    code: 'app',
    name: 'Application',
    extensions: ['app'],
    mime: 'application/x-executable',
    category: MediaFileCategory.executable,
    group: MediaFileGroup.standard
  },
  {
    code: 'avi',
    name: 'AVI Video',
    extensions: ['avi'],
    mime: 'video/x-msvideo',
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'blank',
    name: 'Blank File',
    mime: 'application/octet-stream',
    category: MediaFileCategory.system,
    group: MediaFileGroup.standard
  },
  {
    code: 'bmp',
    name: 'Bitmap Image',
    extensions: ['bmp', 'dib'],
    mime: 'image/bmp',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'book',
    name: 'E-Book',
    extensions: ['epub', 'mobi', 'azw', 'azw3', 'fb2'],
    mime: 'application/epub+zip',
    category: MediaFileCategory.text,
    group: MediaFileGroup.standard
  },
  {
    code: 'c',
    name: 'C Source Code',
    extensions: ['c', 'h'],
    mime: 'text/x-c',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'cpp',
    name: 'C++ Source Code',
    extensions: ['cpp', 'cxx', 'cc', 'hpp', 'hxx', 'hh'],
    mime: 'text/x-c',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'css',
    name: 'Cascading Style Sheets',
    extensions: ['css'],
    mime: 'text/css',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'csv',
    name: 'CSV Spreadsheet',
    extensions: ['csv'],
    mime: 'text/csv',
    category: MediaFileCategory.table,
    group: MediaFileGroup.standard
  },
  {
    code: 'db',
    name: 'Database File',
    extensions: ['db', 'sqlite', 'sqlite3'],
    mime: 'application/x-sqlite3',
    category: MediaFileCategory.database,
    group: MediaFileGroup.standard
  },
  {
    code: 'dmg',
    name: 'Apple Disk Image',
    extensions: ['dmg'],
    mime: 'application/x-apple-diskimage',
    category: MediaFileCategory.executable,
    group: MediaFileGroup.standard
  },
  {
    code: 'doc',
    name: 'Word Document',
    extensions: ['doc', 'dot'],
    mime: 'application/msword',
    category: MediaFileCategory.document,
    group: MediaFileGroup.standard
  },
  {
    code: 'docx',
    name: 'Word Document XML',
    extensions: ['docx', 'dotx'],
    mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    category: MediaFileCategory.document,
    group: MediaFileGroup.standard
  },
  {
    code: 'eps',
    name: 'Encapsulated PostScript',
    extensions: ['eps'],
    mime: 'application/postscript',
    category: MediaFileCategory.vector,
    group: MediaFileGroup.standard
  },
  {
    code: 'exe',
    name: 'Executable File',
    extensions: ['exe', 'msi'],
    mime: 'application/x-msdownload',
    category: MediaFileCategory.executable,
    group: MediaFileGroup.standard
  },
  {
    code: 'fig',
    name: 'Figma Design',
    extensions: ['fig'],
    mime: 'application/x-figma',
    category: MediaFileCategory.vector,
    group: MediaFileGroup.standard
  },
  {
    code: 'flac',
    name: 'FLAC Audio',
    extensions: ['flac'],
    mime: 'audio/flac',
    category: MediaFileCategory.audio,
    group: MediaFileGroup.standard
  },
  {
    code: 'folder-open',
    name: 'Open Folder',
    category: MediaFileCategory.folder,
    group: MediaFileGroup.standard
  },
  {
    code: 'folder-zip',
    name: 'Compressed Folder',
    extensions: ['zip'],
    mime: 'application/zip',
    category: MediaFileCategory.folder,
    group: MediaFileGroup.standard
  },
  {
    code: 'gif',
    name: 'GIF Image',
    extensions: ['gif'],
    mime: 'image/gif',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'gz',
    name: 'Gzip Archive',
    extensions: ['gz', 'gzip'],
    mime: 'application/gzip',
    category: MediaFileCategory.archive,
    group: MediaFileGroup.standard
  },
  {
    code: 'html',
    name: 'HTML Document',
    extensions: ['html', 'htm'],
    mime: 'text/html',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'ico',
    name: 'Icon Image',
    extensions: ['ico'],
    mime: 'image/x-icon',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'iso',
    name: 'Disk Image',
    extensions: ['iso'],
    mime: 'application/x-iso9660-image',
    category: MediaFileCategory.executable,
    group: MediaFileGroup.standard
  },
  {
    code: 'java',
    name: 'Java Source Code',
    extensions: ['java', 'class', 'jar'],
    mime: 'text/x-java-source',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'jpeg',
    name: 'JPEG Image',
    extensions: ['jpeg', 'jpg'],
    mime: 'image/jpeg',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'jpg',
    name: 'JPG Image',
    extensions: ['jpg', 'jpeg'],
    mime: 'image/jpeg',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'js',
    name: 'JavaScript',
    extensions: ['js', 'mjs', 'cjs'],
    mime: 'text/javascript',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'json',
    name: 'JSON Document',
    extensions: ['json'],
    mime: 'application/json',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'm4a',
    name: 'M4A Audio',
    extensions: ['m4a'],
    mime: 'audio/mp4',
    category: MediaFileCategory.audio,
    group: MediaFileGroup.standard
  },
  {
    code: 'md',
    name: 'Markdown Document',
    extensions: ['md', 'markdown'],
    mime: 'text/markdown',
    category: MediaFileCategory.text,
    group: MediaFileGroup.standard
  },
  {
    code: 'mkv',
    name: 'Matroska Video',
    extensions: ['mkv'],
    mime: 'video/x-matroska',
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'mov',
    name: 'QuickTime Video',
    extensions: ['mov'],
    mime: 'video/quicktime',
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'mp3',
    name: 'MP3 Audio',
    extensions: ['mp3'],
    mime: 'audio/mpeg',
    category: MediaFileCategory.audio,
    group: MediaFileGroup.standard
  },
  {
    code: 'mp4',
    name: 'MP4 Video',
    extensions: ['mp4', 'm4v'],
    mime: 'video/mp4',
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'odp',
    name: 'OpenDocument Presentation',
    extensions: ['odp'],
    mime: 'application/vnd.oasis.opendocument.presentation',
    category: MediaFileCategory.presentation,
    group: MediaFileGroup.standard
  },
  {
    code: 'ods',
    name: 'OpenDocument Spreadsheet',
    extensions: ['ods'],
    mime: 'application/vnd.oasis.opendocument.spreadsheet',
    category: MediaFileCategory.table,
    group: MediaFileGroup.standard
  },
  {
    code: 'odt',
    name: 'OpenDocument Text',
    extensions: ['odt'],
    mime: 'application/vnd.oasis.opendocument.text',
    category: MediaFileCategory.document,
    group: MediaFileGroup.standard
  },
  {
    code: 'ogg',
    name: 'Ogg Vorbis Audio',
    extensions: ['ogg', 'oga'],
    mime: 'audio/ogg',
    category: MediaFileCategory.audio,
    group: MediaFileGroup.standard
  },
  {
    code: 'pdf',
    name: 'PDF Document',
    extensions: ['pdf'],
    mime: 'application/pdf',
    category: MediaFileCategory.document,
    group: MediaFileGroup.standard
  },
  {
    code: 'php',
    name: 'PHP Script',
    extensions: ['php', 'phtml'],
    mime: 'application/x-httpd-php',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'png',
    name: 'PNG Image',
    extensions: ['png'],
    mime: 'image/png',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'ppt',
    name: 'PowerPoint Presentation',
    extensions: ['ppt', 'pps'],
    mime: 'application/vnd.ms-powerpoint',
    category: MediaFileCategory.presentation,
    group: MediaFileGroup.standard
  },
  {
    code: 'pptx',
    name: 'PowerPoint Presentation XML',
    extensions: ['pptx', 'ppsx'],
    mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    category: MediaFileCategory.presentation,
    group: MediaFileGroup.standard
  },
  {
    code: 'psd',
    name: 'Adobe Photoshop',
    extensions: ['psd'],
    mime: 'image/vnd.adobe.photoshop',
    category: MediaFileCategory.vector,
    group: MediaFileGroup.standard
  },
  {
    code: 'py',
    name: 'Python Script',
    extensions: ['py', 'pyw'],
    mime: 'text/x-python',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'rar',
    name: 'RAR Archive',
    extensions: ['rar'],
    mime: 'application/vnd.rar',
    category: MediaFileCategory.archive,
    group: MediaFileGroup.standard
  },
  {
    code: 'rtf',
    name: 'Rich Text Format',
    extensions: ['rtf'],
    mime: 'application/rtf',
    category: MediaFileCategory.document,
    group: MediaFileGroup.standard
  },
  {
    code: 'settings',
    name: 'Settings',
    category: MediaFileCategory.config,
    group: MediaFileGroup.standard
  },
  {
    code: 'spreadsheet',
    name: 'Spreadsheet',
    extensions: ['xlsx', 'xls'],
    mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    category: MediaFileCategory.table,
    group: MediaFileGroup.standard
  },
  {
    code: 'sql',
    name: 'SQL Database Script',
    extensions: ['sql'],
    mime: 'application/sql',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'svg',
    name: 'Scalable Vector Graphics',
    extensions: ['svg', 'svgz'],
    mime: 'image/svg+xml',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'table',
    name: 'Data Table',
    extensions: ['csv', 'tsv'],
    mime: 'text/csv',
    category: MediaFileCategory.table,
    group: MediaFileGroup.standard
  },
  {
    code: 'tar',
    name: 'Tar Archive',
    extensions: ['tar'],
    mime: 'application/x-tar',
    category: MediaFileCategory.archive,
    group: MediaFileGroup.standard
  },
  {
    code: 'text',
    name: 'Text Document',
    extensions: ['txt', 'text'],
    mime: 'text/plain',
    category: MediaFileCategory.text,
    group: MediaFileGroup.standard
  },
  {
    code: 'tiff',
    name: 'TIFF Image',
    extensions: ['tiff', 'tif'],
    mime: 'image/tiff',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'ts',
    name: 'TypeScript',
    extensions: ['ts', 'mts', 'cts'],
    mime: 'text/typescript',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'txt',
    name: 'Text File',
    extensions: ['txt', 'text'],
    mime: 'text/plain',
    category: MediaFileCategory.text,
    group: MediaFileGroup.standard
  },
  {
    code: 'unknown',
    name: 'Unknown File',
    mime: 'application/octet-stream',
    category: MediaFileCategory.system,
    group: MediaFileGroup.standard
  },
  {
    code: 'wav',
    name: 'WAV Audio',
    extensions: ['wav'],
    mime: 'audio/wav',
    category: MediaFileCategory.audio,
    group: MediaFileGroup.standard
  },
  {
    code: 'webm',
    name: 'WebM Video',
    extensions: ['webm'],
    mime: 'video/webm',
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'webp',
    name: 'WebP Image',
    extensions: ['webp'],
    mime: 'image/webp',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'wmv',
    name: 'Windows Media Video',
    extensions: ['wmv'],
    mime: 'video/x-ms-wmv',
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'xls',
    name: 'Excel Spreadsheet',
    extensions: ['xls', 'xlt'],
    mime: 'application/vnd.ms-excel',
    category: MediaFileCategory.table,
    group: MediaFileGroup.standard
  },
  {
    code: 'xlsx',
    name: 'Excel Spreadsheet XML',
    extensions: ['xlsx', 'xltx'],
    mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    category: MediaFileCategory.table,
    group: MediaFileGroup.standard
  },
  {
    code: 'xml',
    name: 'XML Document',
    extensions: ['xml'],
    mime: 'application/xml',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'zip',
    name: 'ZIP Archive',
    extensions: ['zip'],
    mime: 'application/zip',
    category: MediaFileCategory.archive,
    group: MediaFileGroup.standard
  }
]
