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
    category: MediaFileCategory.font,
    group: MediaFileGroup.category
  },
  {
    code: 'image',
    name: 'Image',
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
    category: MediaFileCategory.video,
    group: MediaFileGroup.category
  },

  // Specific file formats and extensions / Конкретные форматы и расширения файлов
  {
    code: '7z',
    name: '7-Zip',
    category: MediaFileCategory.archive,
    group: MediaFileGroup.standard
  },
  {
    code: 'aac',
    name: 'AAC Audio',
    category: MediaFileCategory.audio,
    group: MediaFileGroup.standard
  },
  {
    code: 'ai',
    name: 'Adobe Illustrator',
    category: MediaFileCategory.vector,
    group: MediaFileGroup.standard
  },
  {
    code: 'apk',
    name: 'Android Package',
    category: MediaFileCategory.executable,
    group: MediaFileGroup.standard
  },
  {
    code: 'app',
    name: 'Application',
    category: MediaFileCategory.executable,
    group: MediaFileGroup.standard
  },
  {
    code: 'avi',
    name: 'AVI Video',
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'blank',
    name: 'Blank File',
    category: MediaFileCategory.system,
    group: MediaFileGroup.standard
  },
  {
    code: 'bmp',
    name: 'Bitmap Image',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'book',
    name: 'E-Book',
    category: MediaFileCategory.text,
    group: MediaFileGroup.standard
  },
  {
    code: 'c',
    name: 'C Source Code',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'cpp',
    name: 'C++ Source Code',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'css',
    name: 'Cascading Style Sheets',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'csv',
    name: 'CSV Spreadsheet',
    category: MediaFileCategory.table,
    group: MediaFileGroup.standard
  },
  {
    code: 'db',
    name: 'Database File',
    category: MediaFileCategory.database,
    group: MediaFileGroup.standard
  },
  {
    code: 'dmg',
    name: 'Apple Disk Image',
    category: MediaFileCategory.executable,
    group: MediaFileGroup.standard
  },
  {
    code: 'doc',
    name: 'Word Document',
    category: MediaFileCategory.document,
    group: MediaFileGroup.standard
  },
  {
    code: 'docx',
    name: 'Word Document XML',
    category: MediaFileCategory.document,
    group: MediaFileGroup.standard
  },
  {
    code: 'eps',
    name: 'Encapsulated PostScript',
    category: MediaFileCategory.vector,
    group: MediaFileGroup.standard
  },
  {
    code: 'exe',
    name: 'Executable File',
    category: MediaFileCategory.executable,
    group: MediaFileGroup.standard
  },
  {
    code: 'fig',
    name: 'Figma Design',
    category: MediaFileCategory.vector,
    group: MediaFileGroup.standard
  },
  {
    code: 'flac',
    name: 'FLAC Audio',
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
    category: MediaFileCategory.folder,
    group: MediaFileGroup.standard
  },
  {
    code: 'gif',
    name: 'GIF Image',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'gz',
    name: 'Gzip Archive',
    category: MediaFileCategory.archive,
    group: MediaFileGroup.standard
  },
  {
    code: 'html',
    name: 'HTML Document',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'ico',
    name: 'Icon Image',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'iso',
    name: 'Disk Image',
    category: MediaFileCategory.executable,
    group: MediaFileGroup.standard
  },
  {
    code: 'java',
    name: 'Java Source Code',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'jpeg',
    name: 'JPEG Image',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'jpg',
    name: 'JPG Image',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'js',
    name: 'JavaScript',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'json',
    name: 'JSON Document',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'm4a',
    name: 'M4A Audio',
    category: MediaFileCategory.audio,
    group: MediaFileGroup.standard
  },
  {
    code: 'md',
    name: 'Markdown Document',
    category: MediaFileCategory.text,
    group: MediaFileGroup.standard
  },
  {
    code: 'mkv',
    name: 'Matroska Video',
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'mov',
    name: 'QuickTime Video',
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'mp3',
    name: 'MP3 Audio',
    category: MediaFileCategory.audio,
    group: MediaFileGroup.standard
  },
  {
    code: 'mp4',
    name: 'MP4 Video',
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'odp',
    name: 'OpenDocument Presentation',
    category: MediaFileCategory.presentation,
    group: MediaFileGroup.standard
  },
  {
    code: 'ods',
    name: 'OpenDocument Spreadsheet',
    category: MediaFileCategory.table,
    group: MediaFileGroup.standard
  },
  {
    code: 'odt',
    name: 'OpenDocument Text',
    category: MediaFileCategory.document,
    group: MediaFileGroup.standard
  },
  {
    code: 'ogg',
    name: 'Ogg Vorbis Audio',
    category: MediaFileCategory.audio,
    group: MediaFileGroup.standard
  },
  {
    code: 'pdf',
    name: 'PDF Document',
    category: MediaFileCategory.document,
    group: MediaFileGroup.standard
  },
  {
    code: 'php',
    name: 'PHP Script',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'png',
    name: 'PNG Image',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'ppt',
    name: 'PowerPoint Presentation',
    category: MediaFileCategory.presentation,
    group: MediaFileGroup.standard
  },
  {
    code: 'pptx',
    name: 'PowerPoint Presentation XML',
    category: MediaFileCategory.presentation,
    group: MediaFileGroup.standard
  },
  {
    code: 'psd',
    name: 'Adobe Photoshop',
    category: MediaFileCategory.vector,
    group: MediaFileGroup.standard
  },
  {
    code: 'py',
    name: 'Python Script',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'rar',
    name: 'RAR Archive',
    category: MediaFileCategory.archive,
    group: MediaFileGroup.standard
  },
  {
    code: 'rtf',
    name: 'Rich Text Format',
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
    category: MediaFileCategory.table,
    group: MediaFileGroup.standard
  },
  {
    code: 'sql',
    name: 'SQL Database Script',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'svg',
    name: 'Scalable Vector Graphics',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'table',
    name: 'Data Table',
    category: MediaFileCategory.table,
    group: MediaFileGroup.standard
  },
  {
    code: 'tar',
    name: 'Tar Archive',
    category: MediaFileCategory.archive,
    group: MediaFileGroup.standard
  },
  {
    code: 'text',
    name: 'Text Document',
    category: MediaFileCategory.text,
    group: MediaFileGroup.standard
  },
  {
    code: 'tiff',
    name: 'TIFF Image',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'ts',
    name: 'TypeScript',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'txt',
    name: 'Text File',
    category: MediaFileCategory.text,
    group: MediaFileGroup.standard
  },
  {
    code: 'unknown',
    name: 'Unknown File',
    category: MediaFileCategory.system,
    group: MediaFileGroup.standard
  },
  {
    code: 'wav',
    name: 'WAV Audio',
    category: MediaFileCategory.audio,
    group: MediaFileGroup.standard
  },
  {
    code: 'webm',
    name: 'WebM Video',
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'webp',
    name: 'WebP Image',
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'wmv',
    name: 'Windows Media Video',
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'xls',
    name: 'Excel Spreadsheet',
    category: MediaFileCategory.table,
    group: MediaFileGroup.standard
  },
  {
    code: 'xlsx',
    name: 'Excel Spreadsheet XML',
    category: MediaFileCategory.table,
    group: MediaFileGroup.standard
  },
  {
    code: 'xml',
    name: 'XML Document',
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'zip',
    name: 'ZIP Archive',
    category: MediaFileCategory.archive,
    group: MediaFileGroup.standard
  }
]
