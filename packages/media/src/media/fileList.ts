import fileIcon7z from '../assets/files/7z.svg'
import fileIconAac from '../assets/files/aac.svg'
import fileIconAi from '../assets/files/ai.svg'
import fileIconApk from '../assets/files/apk.svg'
import fileIconApp from '../assets/files/app.svg'
import fileIconArchive from '../assets/files/archive.svg'
import fileIconAudio from '../assets/files/audio.svg'
import fileIconAvi from '../assets/files/avi.svg'
import fileIconBlank from '../assets/files/blank.svg'
import fileIconBmp from '../assets/files/bmp.svg'
import fileIconBook from '../assets/files/book.svg'
import fileIconC from '../assets/files/c.svg'
import fileIconCode from '../assets/files/code.svg'
import fileIconConfig from '../assets/files/config.svg'
import fileIconCpp from '../assets/files/cpp.svg'
import fileIconCss from '../assets/files/css.svg'
import fileIconCsv from '../assets/files/csv.svg'
import fileIconDatabase from '../assets/files/database.svg'
import fileIconDb from '../assets/files/db.svg'
import fileIconDmg from '../assets/files/dmg.svg'
import fileIconDoc from '../assets/files/doc.svg'
import fileIconDocument from '../assets/files/document.svg'
import fileIconDocx from '../assets/files/docx.svg'
import fileIconEps from '../assets/files/eps.svg'
import fileIconExe from '../assets/files/exe.svg'
import fileIconExecutable from '../assets/files/executable.svg'
import fileIconFig from '../assets/files/fig.svg'
import fileIconFile from '../assets/files/file.svg'
import fileIconFlac from '../assets/files/flac.svg'
import fileIconFolderOpen from '../assets/files/folder-open.svg'
import fileIconFolderZip from '../assets/files/folder-zip.svg'
import fileIconFolder from '../assets/files/folder.svg'
import fileIconFont from '../assets/files/font.svg'
import fileIconGif from '../assets/files/gif.svg'
import fileIconGz from '../assets/files/gz.svg'
import fileIconHtml from '../assets/files/html.svg'
import fileIconIco from '../assets/files/ico.svg'
import fileIconImage from '../assets/files/image.svg'
import fileIconIso from '../assets/files/iso.svg'
import fileIconJava from '../assets/files/java.svg'
import fileIconJpeg from '../assets/files/jpeg.svg'
import fileIconJpg from '../assets/files/jpg.svg'
import fileIconJs from '../assets/files/js.svg'
import fileIconJson from '../assets/files/json.svg'
import fileIconM4a from '../assets/files/m4a.svg'
import fileIconMd from '../assets/files/md.svg'
import fileIconMkv from '../assets/files/mkv.svg'
import fileIconMov from '../assets/files/mov.svg'
import fileIconMp3 from '../assets/files/mp3.svg'
import fileIconMp4 from '../assets/files/mp4.svg'
import fileIconOdp from '../assets/files/odp.svg'
import fileIconOds from '../assets/files/ods.svg'
import fileIconOdt from '../assets/files/odt.svg'
import fileIconOgg from '../assets/files/ogg.svg'
import fileIconPdf from '../assets/files/pdf.svg'
import fileIconPhp from '../assets/files/php.svg'
import fileIconPng from '../assets/files/png.svg'
import fileIconPpt from '../assets/files/ppt.svg'
import fileIconPptx from '../assets/files/pptx.svg'
import fileIconPresentation from '../assets/files/presentation.svg'
import fileIconPsd from '../assets/files/psd.svg'
import fileIconPy from '../assets/files/py.svg'
import fileIconRar from '../assets/files/rar.svg'
import fileIconRtf from '../assets/files/rtf.svg'
import fileIconSettings from '../assets/files/settings.svg'
import fileIconSpreadsheet from '../assets/files/spreadsheet.svg'
import fileIconSql from '../assets/files/sql.svg'
import fileIconSvg from '../assets/files/svg.svg'
import fileIconTable from '../assets/files/table.svg'
import fileIconTar from '../assets/files/tar.svg'
import fileIconText from '../assets/files/text.svg'
import fileIconTiff from '../assets/files/tiff.svg'
import fileIconTs from '../assets/files/ts.svg'
import fileIconTxt from '../assets/files/txt.svg'
import fileIconUnknown from '../assets/files/unknown.svg'
import fileIconVector from '../assets/files/vector.svg'
import fileIconVideo from '../assets/files/video.svg'
import fileIconWav from '../assets/files/wav.svg'
import fileIconWebm from '../assets/files/webm.svg'
import fileIconWebp from '../assets/files/webp.svg'
import fileIconWmv from '../assets/files/wmv.svg'
import fileIconXls from '../assets/files/xls.svg'
import fileIconXlsx from '../assets/files/xlsx.svg'
import fileIconXml from '../assets/files/xml.svg'
import fileIconZip from '../assets/files/zip.svg'

import {
  MediaFileCategory,
  MediaFileGroup,
  type MediaFileIcons,
  type MediaFileList
} from '../types/fileTypes'

/**
 * File icons dictionary by code /
 * Словарь иконок файлов по коду
 */
export const fileIcons: MediaFileIcons = {
  // Default neutral file icon / Основная нейтральная иконка файла
  'file': fileIconFile,

  // Category neutral icons / Нейтральные иконки категорий
  'archive': fileIconArchive,
  'audio': fileIconAudio,
  'code': fileIconCode,
  'config': fileIconConfig,
  'database': fileIconDatabase,
  'document': fileIconDocument,
  'executable': fileIconExecutable,
  'folder': fileIconFolder,
  'font': fileIconFont,
  'image': fileIconImage,
  'presentation': fileIconPresentation,
  'table': fileIconTable,
  'text': fileIconText,
  'vector': fileIconVector,
  'video': fileIconVideo,

  // Specific file formats and extensions / Конкретные форматы и расширения файлов
  '7z': fileIcon7z,
  'aac': fileIconAac,
  'ai': fileIconAi,
  'apk': fileIconApk,
  'app': fileIconApp,
  'avi': fileIconAvi,
  'blank': fileIconBlank,
  'bmp': fileIconBmp,
  'book': fileIconBook,
  'c': fileIconC,
  'cpp': fileIconCpp,
  'css': fileIconCss,
  'csv': fileIconCsv,
  'db': fileIconDb,
  'dmg': fileIconDmg,
  'doc': fileIconDoc,
  'docx': fileIconDocx,
  'eps': fileIconEps,
  'exe': fileIconExe,
  'fig': fileIconFig,
  'flac': fileIconFlac,
  'folder-open': fileIconFolderOpen,
  'folder-zip': fileIconFolderZip,
  'gif': fileIconGif,
  'gz': fileIconGz,
  'html': fileIconHtml,
  'ico': fileIconIco,
  'iso': fileIconIso,
  'java': fileIconJava,
  'jpeg': fileIconJpeg,
  'jpg': fileIconJpg,
  'js': fileIconJs,
  'json': fileIconJson,
  'm4a': fileIconM4a,
  'md': fileIconMd,
  'mkv': fileIconMkv,
  'mov': fileIconMov,
  'mp3': fileIconMp3,
  'mp4': fileIconMp4,
  'odp': fileIconOdp,
  'ods': fileIconOds,
  'odt': fileIconOdt,
  'ogg': fileIconOgg,
  'pdf': fileIconPdf,
  'php': fileIconPhp,
  'png': fileIconPng,
  'ppt': fileIconPpt,
  'pptx': fileIconPptx,
  'psd': fileIconPsd,
  'py': fileIconPy,
  'rar': fileIconRar,
  'rtf': fileIconRtf,
  'settings': fileIconSettings,
  'spreadsheet': fileIconSpreadsheet,
  'sql': fileIconSql,
  'svg': fileIconSvg,
  'tar': fileIconTar,
  'tiff': fileIconTiff,
  'ts': fileIconTs,
  'txt': fileIconTxt,
  'unknown': fileIconUnknown,
  'wav': fileIconWav,
  'webm': fileIconWebm,
  'webp': fileIconWebp,
  'wmv': fileIconWmv,
  'xls': fileIconXls,
  'xlsx': fileIconXlsx,
  'xml': fileIconXml,
  'zip': fileIconZip
}

/**
 * Structured list of supported file types and categories /
 * Структурированный список поддерживаемых типов файлов и категорий
 */
export const fileList: MediaFileList = [
  // Default neutral file icon / Основная нейтральная иконка файла
  {
    code: 'file',
    name: 'File',
    icon: fileIconFile,
    category: MediaFileCategory.system,
    group: MediaFileGroup.neutral
  },

  // Category neutral icons / Нейтральные иконки категорий
  {
    code: 'archive',
    name: 'Archive',
    icon: fileIconArchive,
    category: MediaFileCategory.archive,
    group: MediaFileGroup.category
  },
  {
    code: 'audio',
    name: 'Audio',
    icon: fileIconAudio,
    category: MediaFileCategory.audio,
    group: MediaFileGroup.category
  },
  {
    code: 'code',
    name: 'Source Code',
    icon: fileIconCode,
    category: MediaFileCategory.code,
    group: MediaFileGroup.category
  },
  {
    code: 'config',
    name: 'Configuration',
    icon: fileIconConfig,
    category: MediaFileCategory.config,
    group: MediaFileGroup.category
  },
  {
    code: 'database',
    name: 'Database',
    icon: fileIconDatabase,
    category: MediaFileCategory.database,
    group: MediaFileGroup.category
  },
  {
    code: 'document',
    name: 'Document',
    icon: fileIconDocument,
    category: MediaFileCategory.document,
    group: MediaFileGroup.category
  },
  {
    code: 'executable',
    name: 'Executable',
    icon: fileIconExecutable,
    category: MediaFileCategory.executable,
    group: MediaFileGroup.category
  },
  {
    code: 'folder',
    name: 'Folder',
    icon: fileIconFolder,
    category: MediaFileCategory.folder,
    group: MediaFileGroup.category
  },
  {
    code: 'font',
    name: 'Font',
    icon: fileIconFont,
    category: MediaFileCategory.font,
    group: MediaFileGroup.category
  },
  {
    code: 'image',
    name: 'Image',
    icon: fileIconImage,
    category: MediaFileCategory.image,
    group: MediaFileGroup.category
  },
  {
    code: 'presentation',
    name: 'Presentation',
    icon: fileIconPresentation,
    category: MediaFileCategory.presentation,
    group: MediaFileGroup.category
  },
  {
    code: 'table',
    name: 'Data Table',
    icon: fileIconTable,
    category: MediaFileCategory.table,
    group: MediaFileGroup.category
  },
  {
    code: 'text',
    name: 'Text Document',
    icon: fileIconText,
    category: MediaFileCategory.text,
    group: MediaFileGroup.category
  },
  {
    code: 'vector',
    name: 'Vector Graphic',
    icon: fileIconVector,
    category: MediaFileCategory.vector,
    group: MediaFileGroup.category
  },
  {
    code: 'video',
    name: 'Video',
    icon: fileIconVideo,
    category: MediaFileCategory.video,
    group: MediaFileGroup.category
  },

  // Specific file formats and extensions / Конкретные форматы и расширения файлов
  {
    code: '7z',
    name: '7-Zip',
    icon: fileIcon7z,
    category: MediaFileCategory.archive,
    group: MediaFileGroup.standard
  },
  {
    code: 'aac',
    name: 'AAC Audio',
    icon: fileIconAac,
    category: MediaFileCategory.audio,
    group: MediaFileGroup.standard
  },
  {
    code: 'ai',
    name: 'Adobe Illustrator',
    icon: fileIconAi,
    category: MediaFileCategory.vector,
    group: MediaFileGroup.standard
  },
  {
    code: 'apk',
    name: 'Android Package',
    icon: fileIconApk,
    category: MediaFileCategory.executable,
    group: MediaFileGroup.standard
  },
  {
    code: 'app',
    name: 'Application',
    icon: fileIconApp,
    category: MediaFileCategory.executable,
    group: MediaFileGroup.standard
  },
  {
    code: 'avi',
    name: 'AVI Video',
    icon: fileIconAvi,
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'blank',
    name: 'Blank File',
    icon: fileIconBlank,
    category: MediaFileCategory.system,
    group: MediaFileGroup.standard
  },
  {
    code: 'bmp',
    name: 'Bitmap Image',
    icon: fileIconBmp,
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'book',
    name: 'E-Book',
    icon: fileIconBook,
    category: MediaFileCategory.text,
    group: MediaFileGroup.standard
  },
  {
    code: 'c',
    name: 'C Source Code',
    icon: fileIconC,
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'cpp',
    name: 'C++ Source Code',
    icon: fileIconCpp,
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'css',
    name: 'Cascading Style Sheets',
    icon: fileIconCss,
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'csv',
    name: 'CSV Spreadsheet',
    icon: fileIconCsv,
    category: MediaFileCategory.table,
    group: MediaFileGroup.standard
  },
  {
    code: 'db',
    name: 'Database File',
    icon: fileIconDb,
    category: MediaFileCategory.database,
    group: MediaFileGroup.standard
  },
  {
    code: 'dmg',
    name: 'Apple Disk Image',
    icon: fileIconDmg,
    category: MediaFileCategory.executable,
    group: MediaFileGroup.standard
  },
  {
    code: 'doc',
    name: 'Word Document',
    icon: fileIconDoc,
    category: MediaFileCategory.document,
    group: MediaFileGroup.standard
  },
  {
    code: 'docx',
    name: 'Word Document XML',
    icon: fileIconDocx,
    category: MediaFileCategory.document,
    group: MediaFileGroup.standard
  },
  {
    code: 'eps',
    name: 'Encapsulated PostScript',
    icon: fileIconEps,
    category: MediaFileCategory.vector,
    group: MediaFileGroup.standard
  },
  {
    code: 'exe',
    name: 'Executable File',
    icon: fileIconExe,
    category: MediaFileCategory.executable,
    group: MediaFileGroup.standard
  },
  {
    code: 'fig',
    name: 'Figma Design',
    icon: fileIconFig,
    category: MediaFileCategory.vector,
    group: MediaFileGroup.standard
  },
  {
    code: 'flac',
    name: 'FLAC Audio',
    icon: fileIconFlac,
    category: MediaFileCategory.audio,
    group: MediaFileGroup.standard
  },
  {
    code: 'folder-open',
    name: 'Open Folder',
    icon: fileIconFolderOpen,
    category: MediaFileCategory.folder,
    group: MediaFileGroup.standard
  },
  {
    code: 'folder-zip',
    name: 'Compressed Folder',
    icon: fileIconFolderZip,
    category: MediaFileCategory.folder,
    group: MediaFileGroup.standard
  },
  {
    code: 'gif',
    name: 'GIF Image',
    icon: fileIconGif,
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'gz',
    name: 'Gzip Archive',
    icon: fileIconGz,
    category: MediaFileCategory.archive,
    group: MediaFileGroup.standard
  },
  {
    code: 'html',
    name: 'HTML Document',
    icon: fileIconHtml,
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'ico',
    name: 'Icon Image',
    icon: fileIconIco,
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'iso',
    name: 'Disk Image',
    icon: fileIconIso,
    category: MediaFileCategory.executable,
    group: MediaFileGroup.standard
  },
  {
    code: 'java',
    name: 'Java Source Code',
    icon: fileIconJava,
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'jpeg',
    name: 'JPEG Image',
    icon: fileIconJpeg,
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'jpg',
    name: 'JPG Image',
    icon: fileIconJpg,
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'js',
    name: 'JavaScript',
    icon: fileIconJs,
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'json',
    name: 'JSON Document',
    icon: fileIconJson,
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'm4a',
    name: 'M4A Audio',
    icon: fileIconM4a,
    category: MediaFileCategory.audio,
    group: MediaFileGroup.standard
  },
  {
    code: 'md',
    name: 'Markdown Document',
    icon: fileIconMd,
    category: MediaFileCategory.text,
    group: MediaFileGroup.standard
  },
  {
    code: 'mkv',
    name: 'Matroska Video',
    icon: fileIconMkv,
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'mov',
    name: 'QuickTime Video',
    icon: fileIconMov,
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'mp3',
    name: 'MP3 Audio',
    icon: fileIconMp3,
    category: MediaFileCategory.audio,
    group: MediaFileGroup.standard
  },
  {
    code: 'mp4',
    name: 'MP4 Video',
    icon: fileIconMp4,
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'odp',
    name: 'OpenDocument Presentation',
    icon: fileIconOdp,
    category: MediaFileCategory.presentation,
    group: MediaFileGroup.standard
  },
  {
    code: 'ods',
    name: 'OpenDocument Spreadsheet',
    icon: fileIconOds,
    category: MediaFileCategory.table,
    group: MediaFileGroup.standard
  },
  {
    code: 'odt',
    name: 'OpenDocument Text',
    icon: fileIconOdt,
    category: MediaFileCategory.document,
    group: MediaFileGroup.standard
  },
  {
    code: 'ogg',
    name: 'Ogg Vorbis Audio',
    icon: fileIconOgg,
    category: MediaFileCategory.audio,
    group: MediaFileGroup.standard
  },
  {
    code: 'pdf',
    name: 'PDF Document',
    icon: fileIconPdf,
    category: MediaFileCategory.document,
    group: MediaFileGroup.standard
  },
  {
    code: 'php',
    name: 'PHP Script',
    icon: fileIconPhp,
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'png',
    name: 'PNG Image',
    icon: fileIconPng,
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'ppt',
    name: 'PowerPoint Presentation',
    icon: fileIconPpt,
    category: MediaFileCategory.presentation,
    group: MediaFileGroup.standard
  },
  {
    code: 'pptx',
    name: 'PowerPoint Presentation XML',
    icon: fileIconPptx,
    category: MediaFileCategory.presentation,
    group: MediaFileGroup.standard
  },
  {
    code: 'psd',
    name: 'Adobe Photoshop',
    icon: fileIconPsd,
    category: MediaFileCategory.vector,
    group: MediaFileGroup.standard
  },
  {
    code: 'py',
    name: 'Python Script',
    icon: fileIconPy,
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'rar',
    name: 'RAR Archive',
    icon: fileIconRar,
    category: MediaFileCategory.archive,
    group: MediaFileGroup.standard
  },
  {
    code: 'rtf',
    name: 'Rich Text Format',
    icon: fileIconRtf,
    category: MediaFileCategory.document,
    group: MediaFileGroup.standard
  },
  {
    code: 'settings',
    name: 'Settings',
    icon: fileIconSettings,
    category: MediaFileCategory.config,
    group: MediaFileGroup.standard
  },
  {
    code: 'spreadsheet',
    name: 'Spreadsheet',
    icon: fileIconSpreadsheet,
    category: MediaFileCategory.table,
    group: MediaFileGroup.standard
  },
  {
    code: 'sql',
    name: 'SQL Database Script',
    icon: fileIconSql,
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'svg',
    name: 'Scalable Vector Graphics',
    icon: fileIconSvg,
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'tar',
    name: 'Tar Archive',
    icon: fileIconTar,
    category: MediaFileCategory.archive,
    group: MediaFileGroup.standard
  },
  {
    code: 'tiff',
    name: 'TIFF Image',
    icon: fileIconTiff,
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'ts',
    name: 'TypeScript',
    icon: fileIconTs,
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'txt',
    name: 'Text File',
    icon: fileIconTxt,
    category: MediaFileCategory.text,
    group: MediaFileGroup.standard
  },
  {
    code: 'unknown',
    name: 'Unknown File',
    icon: fileIconUnknown,
    category: MediaFileCategory.system,
    group: MediaFileGroup.standard
  },
  {
    code: 'wav',
    name: 'WAV Audio',
    icon: fileIconWav,
    category: MediaFileCategory.audio,
    group: MediaFileGroup.standard
  },
  {
    code: 'webm',
    name: 'WebM Video',
    icon: fileIconWebm,
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'webp',
    name: 'WebP Image',
    icon: fileIconWebp,
    category: MediaFileCategory.image,
    group: MediaFileGroup.standard
  },
  {
    code: 'wmv',
    name: 'Windows Media Video',
    icon: fileIconWmv,
    category: MediaFileCategory.video,
    group: MediaFileGroup.standard
  },
  {
    code: 'xls',
    name: 'Excel Spreadsheet',
    icon: fileIconXls,
    category: MediaFileCategory.table,
    group: MediaFileGroup.standard
  },
  {
    code: 'xlsx',
    name: 'Excel Spreadsheet XML',
    icon: fileIconXlsx,
    category: MediaFileCategory.table,
    group: MediaFileGroup.standard
  },
  {
    code: 'xml',
    name: 'XML Document',
    icon: fileIconXml,
    category: MediaFileCategory.code,
    group: MediaFileGroup.standard
  },
  {
    code: 'zip',
    name: 'ZIP Archive',
    icon: fileIconZip,
    category: MediaFileCategory.archive,
    group: MediaFileGroup.standard
  }
]
