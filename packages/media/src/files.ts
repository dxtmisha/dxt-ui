import fileIcon7z from './assets/files/7z.svg'
import fileIconAac from './assets/files/aac.svg'
import fileIconAi from './assets/files/ai.svg'
import fileIconApk from './assets/files/apk.svg'
import fileIconApp from './assets/files/app.svg'
import fileIconArchive from './assets/files/archive.svg'
import fileIconAudio from './assets/files/audio.svg'
import fileIconAvi from './assets/files/avi.svg'
import fileIconBlank from './assets/files/blank.svg'
import fileIconBmp from './assets/files/bmp.svg'
import fileIconBook from './assets/files/book.svg'
import fileIconC from './assets/files/c.svg'
import fileIconCode from './assets/files/code.svg'
import fileIconConfig from './assets/files/config.svg'
import fileIconCpp from './assets/files/cpp.svg'
import fileIconCss from './assets/files/css.svg'
import fileIconCsv from './assets/files/csv.svg'
import fileIconDatabase from './assets/files/database.svg'
import fileIconDb from './assets/files/db.svg'
import fileIconDmg from './assets/files/dmg.svg'
import fileIconDoc from './assets/files/doc.svg'
import fileIconDocument from './assets/files/document.svg'
import fileIconDocx from './assets/files/docx.svg'
import fileIconEps from './assets/files/eps.svg'
import fileIconExe from './assets/files/exe.svg'
import fileIconExecutable from './assets/files/executable.svg'
import fileIconFig from './assets/files/fig.svg'
import fileIconFile from './assets/files/file.svg'
import fileIconFlac from './assets/files/flac.svg'
import fileIconFolderOpen from './assets/files/folder-open.svg'
import fileIconFolderZip from './assets/files/folder-zip.svg'
import fileIconFolder from './assets/files/folder.svg'
import fileIconFont from './assets/files/font.svg'
import fileIconGif from './assets/files/gif.svg'
import fileIconGz from './assets/files/gz.svg'
import fileIconHtml from './assets/files/html.svg'
import fileIconIco from './assets/files/ico.svg'
import fileIconImage from './assets/files/image.svg'
import fileIconIso from './assets/files/iso.svg'
import fileIconJava from './assets/files/java.svg'
import fileIconJpeg from './assets/files/jpeg.svg'
import fileIconJpg from './assets/files/jpg.svg'
import fileIconJs from './assets/files/js.svg'
import fileIconJson from './assets/files/json.svg'
import fileIconM4a from './assets/files/m4a.svg'
import fileIconMd from './assets/files/md.svg'
import fileIconMkv from './assets/files/mkv.svg'
import fileIconMov from './assets/files/mov.svg'
import fileIconMp3 from './assets/files/mp3.svg'
import fileIconMp4 from './assets/files/mp4.svg'
import fileIconOdp from './assets/files/odp.svg'
import fileIconOds from './assets/files/ods.svg'
import fileIconOdt from './assets/files/odt.svg'
import fileIconOgg from './assets/files/ogg.svg'
import fileIconPdf from './assets/files/pdf.svg'
import fileIconPhp from './assets/files/php.svg'
import fileIconPng from './assets/files/png.svg'
import fileIconPpt from './assets/files/ppt.svg'
import fileIconPptx from './assets/files/pptx.svg'
import fileIconPresentation from './assets/files/presentation.svg'
import fileIconPsd from './assets/files/psd.svg'
import fileIconPy from './assets/files/py.svg'
import fileIconRar from './assets/files/rar.svg'
import fileIconRtf from './assets/files/rtf.svg'
import fileIconSettings from './assets/files/settings.svg'
import fileIconSpreadsheet from './assets/files/spreadsheet.svg'
import fileIconSql from './assets/files/sql.svg'
import fileIconSvg from './assets/files/svg.svg'
import fileIconTable from './assets/files/table.svg'
import fileIconTar from './assets/files/tar.svg'
import fileIconText from './assets/files/text.svg'
import fileIconTiff from './assets/files/tiff.svg'
import fileIconTs from './assets/files/ts.svg'
import fileIconTxt from './assets/files/txt.svg'
import fileIconUnknown from './assets/files/unknown.svg'
import fileIconVector from './assets/files/vector.svg'
import fileIconVideo from './assets/files/video.svg'
import fileIconWav from './assets/files/wav.svg'
import fileIconWebm from './assets/files/webm.svg'
import fileIconWebp from './assets/files/webp.svg'
import fileIconWmv from './assets/files/wmv.svg'
import fileIconXls from './assets/files/xls.svg'
import fileIconXlsx from './assets/files/xlsx.svg'
import fileIconXml from './assets/files/xml.svg'
import fileIconZip from './assets/files/zip.svg'

import { MediaFileIcon } from './classes/MediaFileIcon'
import type { MediaFileIcons } from './types/fileTypes'

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
 * Registers default file icons in the MediaFileIcon registry.
 *
 * Регистрирует стандартные иконки файлов в реестре MediaFileIcon.
 */
export function registerFileIcons(): void {
  MediaFileIcon.addList(fileIcons)
}

export {
  fileIcon7z,
  fileIconAac,
  fileIconAi,
  fileIconApk,
  fileIconApp,
  fileIconArchive,
  fileIconAudio,
  fileIconAvi,
  fileIconBlank,
  fileIconBmp,
  fileIconBook,
  fileIconC,
  fileIconCode,
  fileIconConfig,
  fileIconCpp,
  fileIconCss,
  fileIconCsv,
  fileIconDatabase,
  fileIconDb,
  fileIconDmg,
  fileIconDoc,
  fileIconDocument,
  fileIconDocx,
  fileIconEps,
  fileIconExe,
  fileIconExecutable,
  fileIconFig,
  fileIconFile,
  fileIconFlac,
  fileIconFolderOpen,
  fileIconFolderZip,
  fileIconFolder,
  fileIconFont,
  fileIconGif,
  fileIconGz,
  fileIconHtml,
  fileIconIco,
  fileIconIso,
  fileIconJava,
  fileIconJpeg,
  fileIconJpg,
  fileIconJs,
  fileIconJson,
  fileIconM4a,
  fileIconMd,
  fileIconMkv,
  fileIconMov,
  fileIconMp3,
  fileIconMp4,
  fileIconOdp,
  fileIconOds,
  fileIconOdt,
  fileIconOgg,
  fileIconPdf,
  fileIconPhp,
  fileIconPng,
  fileIconPpt,
  fileIconPptx,
  fileIconPresentation,
  fileIconPsd,
  fileIconPy,
  fileIconRar,
  fileIconRtf,
  fileIconSettings,
  fileIconSpreadsheet,
  fileIconSql,
  fileIconSvg,
  fileIconTable,
  fileIconTar,
  fileIconText,
  fileIconTiff,
  fileIconTs,
  fileIconTxt,
  fileIconUnknown,
  fileIconVector,
  fileIconVideo,
  fileIconWav,
  fileIconWebm,
  fileIconWebp,
  fileIconWmv,
  fileIconXls,
  fileIconXlsx,
  fileIconXml,
  fileIconZip
}
