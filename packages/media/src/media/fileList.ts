import File7zSvg from '../assets/files/7z.svg'
import AacSvg from '../assets/files/aac.svg'
import AiSvg from '../assets/files/ai.svg'
import ApkSvg from '../assets/files/apk.svg'
import AppSvg from '../assets/files/app.svg'
import ArchiveSvg from '../assets/files/archive.svg'
import AudioSvg from '../assets/files/audio.svg'
import AviSvg from '../assets/files/avi.svg'
import BlankSvg from '../assets/files/blank.svg'
import BmpSvg from '../assets/files/bmp.svg'
import BookSvg from '../assets/files/book.svg'
import CSvg from '../assets/files/c.svg'
import CodeSvg from '../assets/files/code.svg'
import ConfigSvg from '../assets/files/config.svg'
import CppSvg from '../assets/files/cpp.svg'
import CssSvg from '../assets/files/css.svg'
import CsvSvg from '../assets/files/csv.svg'
import DatabaseSvg from '../assets/files/database.svg'
import DbSvg from '../assets/files/db.svg'
import DmgSvg from '../assets/files/dmg.svg'
import DocSvg from '../assets/files/doc.svg'
import DocumentSvg from '../assets/files/document.svg'
import DocxSvg from '../assets/files/docx.svg'
import EpsSvg from '../assets/files/eps.svg'
import ExeSvg from '../assets/files/exe.svg'
import ExecutableSvg from '../assets/files/executable.svg'
import FigSvg from '../assets/files/fig.svg'
import FileSvg from '../assets/files/file.svg'
import FlacSvg from '../assets/files/flac.svg'
import FolderOpenSvg from '../assets/files/folder-open.svg'
import FolderZipSvg from '../assets/files/folder-zip.svg'
import FolderSvg from '../assets/files/folder.svg'
import FontSvg from '../assets/files/font.svg'
import GifSvg from '../assets/files/gif.svg'
import GzSvg from '../assets/files/gz.svg'
import HtmlSvg from '../assets/files/html.svg'
import IcoSvg from '../assets/files/ico.svg'
import ImageSvg from '../assets/files/image.svg'
import IsoSvg from '../assets/files/iso.svg'
import JavaSvg from '../assets/files/java.svg'
import JpegSvg from '../assets/files/jpeg.svg'
import JpgSvg from '../assets/files/jpg.svg'
import JsSvg from '../assets/files/js.svg'
import JsonSvg from '../assets/files/json.svg'
import M4aSvg from '../assets/files/m4a.svg'
import MdSvg from '../assets/files/md.svg'
import MkvSvg from '../assets/files/mkv.svg'
import MovSvg from '../assets/files/mov.svg'
import Mp3Svg from '../assets/files/mp3.svg'
import Mp4Svg from '../assets/files/mp4.svg'
import OdpSvg from '../assets/files/odp.svg'
import OdsSvg from '../assets/files/ods.svg'
import OdtSvg from '../assets/files/odt.svg'
import OggSvg from '../assets/files/ogg.svg'
import PdfSvg from '../assets/files/pdf.svg'
import PhpSvg from '../assets/files/php.svg'
import PngSvg from '../assets/files/png.svg'
import PptSvg from '../assets/files/ppt.svg'
import PptxSvg from '../assets/files/pptx.svg'
import PresentationSvg from '../assets/files/presentation.svg'
import PsdSvg from '../assets/files/psd.svg'
import PySvg from '../assets/files/py.svg'
import RarSvg from '../assets/files/rar.svg'
import RtfSvg from '../assets/files/rtf.svg'
import SettingsSvg from '../assets/files/settings.svg'
import SpreadsheetSvg from '../assets/files/spreadsheet.svg'
import SqlSvg from '../assets/files/sql.svg'
import SvgSvg from '../assets/files/svg.svg'
import TableSvg from '../assets/files/table.svg'
import TarSvg from '../assets/files/tar.svg'
import TextSvg from '../assets/files/text.svg'
import TiffSvg from '../assets/files/tiff.svg'
import TsSvg from '../assets/files/ts.svg'
import TxtSvg from '../assets/files/txt.svg'
import UnknownSvg from '../assets/files/unknown.svg'
import VectorSvg from '../assets/files/vector.svg'
import VideoSvg from '../assets/files/video.svg'
import WavSvg from '../assets/files/wav.svg'
import WebmSvg from '../assets/files/webm.svg'
import WebpSvg from '../assets/files/webp.svg'
import WmvSvg from '../assets/files/wmv.svg'
import XlsSvg from '../assets/files/xls.svg'
import XlsxSvg from '../assets/files/xlsx.svg'
import XmlSvg from '../assets/files/xml.svg'
import ZipSvg from '../assets/files/zip.svg'

import {
  MediaFileCategory,
  type MediaFileIcons,
  type MediaFileList
} from '../types/fileTypes'

/**
 * File icons dictionary by code /
 * Словарь иконок файлов по коду
 */
export const fileIcons: MediaFileIcons = {
  '7z': File7zSvg,
  aac: AacSvg,
  ai: AiSvg,
  apk: ApkSvg,
  app: AppSvg,
  archive: ArchiveSvg,
  audio: AudioSvg,
  avi: AviSvg,
  blank: BlankSvg,
  bmp: BmpSvg,
  book: BookSvg,
  c: CSvg,
  code: CodeSvg,
  config: ConfigSvg,
  cpp: CppSvg,
  css: CssSvg,
  csv: CsvSvg,
  database: DatabaseSvg,
  db: DbSvg,
  dmg: DmgSvg,
  doc: DocSvg,
  document: DocumentSvg,
  docx: DocxSvg,
  eps: EpsSvg,
  exe: ExeSvg,
  executable: ExecutableSvg,
  fig: FigSvg,
  file: FileSvg,
  flac: FlacSvg,
  'folder-open': FolderOpenSvg,
  'folder-zip': FolderZipSvg,
  folder: FolderSvg,
  font: FontSvg,
  gif: GifSvg,
  gz: GzSvg,
  html: HtmlSvg,
  ico: IcoSvg,
  image: ImageSvg,
  iso: IsoSvg,
  java: JavaSvg,
  jpeg: JpegSvg,
  jpg: JpgSvg,
  js: JsSvg,
  json: JsonSvg,
  m4a: M4aSvg,
  md: MdSvg,
  mkv: MkvSvg,
  mov: MovSvg,
  mp3: Mp3Svg,
  mp4: Mp4Svg,
  odp: OdpSvg,
  ods: OdsSvg,
  odt: OdtSvg,
  ogg: OggSvg,
  pdf: PdfSvg,
  php: PhpSvg,
  png: PngSvg,
  ppt: PptSvg,
  pptx: PptxSvg,
  presentation: PresentationSvg,
  psd: PsdSvg,
  py: PySvg,
  rar: RarSvg,
  rtf: RtfSvg,
  settings: SettingsSvg,
  spreadsheet: SpreadsheetSvg,
  sql: SqlSvg,
  svg: SvgSvg,
  table: TableSvg,
  tar: TarSvg,
  text: TextSvg,
  tiff: TiffSvg,
  ts: TsSvg,
  txt: TxtSvg,
  unknown: UnknownSvg,
  vector: VectorSvg,
  video: VideoSvg,
  wav: WavSvg,
  webm: WebmSvg,
  webp: WebpSvg,
  wmv: WmvSvg,
  xls: XlsSvg,
  xlsx: XlsxSvg,
  xml: XmlSvg,
  zip: ZipSvg,
}

/**
 * Structured list of supported file types and categories /
 * Структурированный список поддерживаемых типов файлов и категорий
 */
export const fileList: MediaFileList = [
  {
    code: '7z',
    name: '7-Zip',
    icon: File7zSvg,
    category: MediaFileCategory.archive
  },
  {
    code: 'aac',
    name: 'AAC Audio',
    icon: AacSvg,
    category: MediaFileCategory.audio
  },
  {
    code: 'ai',
    name: 'Adobe Illustrator',
    icon: AiSvg,
    category: MediaFileCategory.vector
  },
  {
    code: 'apk',
    name: 'Android Package',
    icon: ApkSvg,
    category: MediaFileCategory.executable
  },
  {
    code: 'app',
    name: 'Application',
    icon: AppSvg,
    category: MediaFileCategory.executable
  },
  {
    code: 'archive',
    name: 'Archive',
    icon: ArchiveSvg,
    category: MediaFileCategory.archive
  },
  {
    code: 'audio',
    name: 'Audio',
    icon: AudioSvg,
    category: MediaFileCategory.audio
  },
  {
    code: 'avi',
    name: 'AVI Video',
    icon: AviSvg,
    category: MediaFileCategory.video
  },
  {
    code: 'blank',
    name: 'Blank File',
    icon: BlankSvg,
    category: MediaFileCategory.system
  },
  {
    code: 'bmp',
    name: 'Bitmap Image',
    icon: BmpSvg,
    category: MediaFileCategory.image
  },
  {
    code: 'book',
    name: 'E-Book',
    icon: BookSvg,
    category: MediaFileCategory.text
  },
  {
    code: 'c',
    name: 'C Source Code',
    icon: CSvg,
    category: MediaFileCategory.code
  },
  {
    code: 'code',
    name: 'Source Code',
    icon: CodeSvg,
    category: MediaFileCategory.code
  },
  {
    code: 'config',
    name: 'Configuration',
    icon: ConfigSvg,
    category: MediaFileCategory.config
  },
  {
    code: 'cpp',
    name: 'C++ Source Code',
    icon: CppSvg,
    category: MediaFileCategory.code
  },
  {
    code: 'css',
    name: 'Cascading Style Sheets',
    icon: CssSvg,
    category: MediaFileCategory.code
  },
  {
    code: 'csv',
    name: 'CSV Spreadsheet',
    icon: CsvSvg,
    category: MediaFileCategory.table
  },
  {
    code: 'database',
    name: 'Database',
    icon: DatabaseSvg,
    category: MediaFileCategory.database
  },
  {
    code: 'db',
    name: 'Database File',
    icon: DbSvg,
    category: MediaFileCategory.database
  },
  {
    code: 'dmg',
    name: 'Apple Disk Image',
    icon: DmgSvg,
    category: MediaFileCategory.executable
  },
  {
    code: 'doc',
    name: 'Word Document',
    icon: DocSvg,
    category: MediaFileCategory.document
  },
  {
    code: 'document',
    name: 'Document',
    icon: DocumentSvg,
    category: MediaFileCategory.document
  },
  {
    code: 'docx',
    name: 'Word Document XML',
    icon: DocxSvg,
    category: MediaFileCategory.document
  },
  {
    code: 'eps',
    name: 'Encapsulated PostScript',
    icon: EpsSvg,
    category: MediaFileCategory.vector
  },
  {
    code: 'exe',
    name: 'Executable File',
    icon: ExeSvg,
    category: MediaFileCategory.executable
  },
  {
    code: 'executable',
    name: 'Executable',
    icon: ExecutableSvg,
    category: MediaFileCategory.executable
  },
  {
    code: 'fig',
    name: 'Figma Design',
    icon: FigSvg,
    category: MediaFileCategory.vector
  },
  {
    code: 'file',
    name: 'File',
    icon: FileSvg,
    category: MediaFileCategory.system
  },
  {
    code: 'flac',
    name: 'FLAC Audio',
    icon: FlacSvg,
    category: MediaFileCategory.audio
  },
  {
    code: 'folder-open',
    name: 'Open Folder',
    icon: FolderOpenSvg,
    category: MediaFileCategory.folder
  },
  {
    code: 'folder-zip',
    name: 'Compressed Folder',
    icon: FolderZipSvg,
    category: MediaFileCategory.folder
  },
  {
    code: 'folder',
    name: 'Folder',
    icon: FolderSvg,
    category: MediaFileCategory.folder
  },
  {
    code: 'font',
    name: 'Font',
    icon: FontSvg,
    category: MediaFileCategory.font
  },
  {
    code: 'gif',
    name: 'GIF Image',
    icon: GifSvg,
    category: MediaFileCategory.image
  },
  {
    code: 'gz',
    name: 'Gzip Archive',
    icon: GzSvg,
    category: MediaFileCategory.archive
  },
  {
    code: 'html',
    name: 'HTML Document',
    icon: HtmlSvg,
    category: MediaFileCategory.code
  },
  {
    code: 'ico',
    name: 'Icon Image',
    icon: IcoSvg,
    category: MediaFileCategory.image
  },
  {
    code: 'image',
    name: 'Image',
    icon: ImageSvg,
    category: MediaFileCategory.image
  },
  {
    code: 'iso',
    name: 'Disk Image',
    icon: IsoSvg,
    category: MediaFileCategory.executable
  },
  {
    code: 'java',
    name: 'Java Source Code',
    icon: JavaSvg,
    category: MediaFileCategory.code
  },
  {
    code: 'jpeg',
    name: 'JPEG Image',
    icon: JpegSvg,
    category: MediaFileCategory.image
  },
  {
    code: 'jpg',
    name: 'JPG Image',
    icon: JpgSvg,
    category: MediaFileCategory.image
  },
  {
    code: 'js',
    name: 'JavaScript',
    icon: JsSvg,
    category: MediaFileCategory.code
  },
  {
    code: 'json',
    name: 'JSON Document',
    icon: JsonSvg,
    category: MediaFileCategory.code
  },
  {
    code: 'm4a',
    name: 'M4A Audio',
    icon: M4aSvg,
    category: MediaFileCategory.audio
  },
  {
    code: 'md',
    name: 'Markdown Document',
    icon: MdSvg,
    category: MediaFileCategory.text
  },
  {
    code: 'mkv',
    name: 'Matroska Video',
    icon: MkvSvg,
    category: MediaFileCategory.video
  },
  {
    code: 'mov',
    name: 'QuickTime Video',
    icon: MovSvg,
    category: MediaFileCategory.video
  },
  {
    code: 'mp3',
    name: 'MP3 Audio',
    icon: Mp3Svg,
    category: MediaFileCategory.audio
  },
  {
    code: 'mp4',
    name: 'MP4 Video',
    icon: Mp4Svg,
    category: MediaFileCategory.video
  },
  {
    code: 'odp',
    name: 'OpenDocument Presentation',
    icon: OdpSvg,
    category: MediaFileCategory.presentation
  },
  {
    code: 'ods',
    name: 'OpenDocument Spreadsheet',
    icon: OdsSvg,
    category: MediaFileCategory.table
  },
  {
    code: 'odt',
    name: 'OpenDocument Text',
    icon: OdtSvg,
    category: MediaFileCategory.document
  },
  {
    code: 'ogg',
    name: 'Ogg Vorbis Audio',
    icon: OggSvg,
    category: MediaFileCategory.audio
  },
  {
    code: 'pdf',
    name: 'PDF Document',
    icon: PdfSvg,
    category: MediaFileCategory.document
  },
  {
    code: 'php',
    name: 'PHP Script',
    icon: PhpSvg,
    category: MediaFileCategory.code
  },
  {
    code: 'png',
    name: 'PNG Image',
    icon: PngSvg,
    category: MediaFileCategory.image
  },
  {
    code: 'ppt',
    name: 'PowerPoint Presentation',
    icon: PptSvg,
    category: MediaFileCategory.presentation
  },
  {
    code: 'pptx',
    name: 'PowerPoint Presentation XML',
    icon: PptxSvg,
    category: MediaFileCategory.presentation
  },
  {
    code: 'presentation',
    name: 'Presentation',
    icon: PresentationSvg,
    category: MediaFileCategory.presentation
  },
  {
    code: 'psd',
    name: 'Adobe Photoshop',
    icon: PsdSvg,
    category: MediaFileCategory.vector
  },
  {
    code: 'py',
    name: 'Python Script',
    icon: PySvg,
    category: MediaFileCategory.code
  },
  {
    code: 'rar',
    name: 'RAR Archive',
    icon: RarSvg,
    category: MediaFileCategory.archive
  },
  {
    code: 'rtf',
    name: 'Rich Text Format',
    icon: RtfSvg,
    category: MediaFileCategory.document
  },
  {
    code: 'settings',
    name: 'Settings',
    icon: SettingsSvg,
    category: MediaFileCategory.config
  },
  {
    code: 'spreadsheet',
    name: 'Spreadsheet',
    icon: SpreadsheetSvg,
    category: MediaFileCategory.table
  },
  {
    code: 'sql',
    name: 'SQL Database Script',
    icon: SqlSvg,
    category: MediaFileCategory.code
  },
  {
    code: 'svg',
    name: 'Scalable Vector Graphics',
    icon: SvgSvg,
    category: MediaFileCategory.image
  },
  {
    code: 'table',
    name: 'Data Table',
    icon: TableSvg,
    category: MediaFileCategory.table
  },
  {
    code: 'tar',
    name: 'Tar Archive',
    icon: TarSvg,
    category: MediaFileCategory.archive
  },
  {
    code: 'text',
    name: 'Text Document',
    icon: TextSvg,
    category: MediaFileCategory.text
  },
  {
    code: 'tiff',
    name: 'TIFF Image',
    icon: TiffSvg,
    category: MediaFileCategory.image
  },
  {
    code: 'ts',
    name: 'TypeScript',
    icon: TsSvg,
    category: MediaFileCategory.code
  },
  {
    code: 'txt',
    name: 'Text File',
    icon: TxtSvg,
    category: MediaFileCategory.text
  },
  {
    code: 'unknown',
    name: 'Unknown File',
    icon: UnknownSvg,
    category: MediaFileCategory.system
  },
  {
    code: 'vector',
    name: 'Vector Graphic',
    icon: VectorSvg,
    category: MediaFileCategory.vector
  },
  {
    code: 'video',
    name: 'Video',
    icon: VideoSvg,
    category: MediaFileCategory.video
  },
  {
    code: 'wav',
    name: 'WAV Audio',
    icon: WavSvg,
    category: MediaFileCategory.audio
  },
  {
    code: 'webm',
    name: 'WebM Video',
    icon: WebmSvg,
    category: MediaFileCategory.video
  },
  {
    code: 'webp',
    name: 'WebP Image',
    icon: WebpSvg,
    category: MediaFileCategory.image
  },
  {
    code: 'wmv',
    name: 'Windows Media Video',
    icon: WmvSvg,
    category: MediaFileCategory.video
  },
  {
    code: 'xls',
    name: 'Excel Spreadsheet',
    icon: XlsSvg,
    category: MediaFileCategory.table
  },
  {
    code: 'xlsx',
    name: 'Excel Spreadsheet XML',
    icon: XlsxSvg,
    category: MediaFileCategory.table
  },
  {
    code: 'xml',
    name: 'XML Document',
    icon: XmlSvg,
    category: MediaFileCategory.code
  },
  {
    code: 'zip',
    name: 'ZIP Archive',
    icon: ZipSvg,
    category: MediaFileCategory.archive
  },
]

export {
  File7zSvg,
  AacSvg,
  AiSvg,
  ApkSvg,
  AppSvg,
  ArchiveSvg,
  AudioSvg,
  AviSvg,
  BlankSvg,
  BmpSvg,
  BookSvg,
  CSvg,
  CodeSvg,
  ConfigSvg,
  CppSvg,
  CssSvg,
  CsvSvg,
  DatabaseSvg,
  DbSvg,
  DmgSvg,
  DocSvg,
  DocumentSvg,
  DocxSvg,
  EpsSvg,
  ExeSvg,
  ExecutableSvg,
  FigSvg,
  FileSvg,
  FlacSvg,
  FolderOpenSvg,
  FolderZipSvg,
  FolderSvg,
  FontSvg,
  GifSvg,
  GzSvg,
  HtmlSvg,
  IcoSvg,
  ImageSvg,
  IsoSvg,
  JavaSvg,
  JpegSvg,
  JpgSvg,
  JsSvg,
  JsonSvg,
  M4aSvg,
  MdSvg,
  MkvSvg,
  MovSvg,
  Mp3Svg,
  Mp4Svg,
  OdpSvg,
  OdsSvg,
  OdtSvg,
  OggSvg,
  PdfSvg,
  PhpSvg,
  PngSvg,
  PptSvg,
  PptxSvg,
  PresentationSvg,
  PsdSvg,
  PySvg,
  RarSvg,
  RtfSvg,
  SettingsSvg,
  SpreadsheetSvg,
  SqlSvg,
  SvgSvg,
  TableSvg,
  TarSvg,
  TextSvg,
  TiffSvg,
  TsSvg,
  TxtSvg,
  UnknownSvg,
  VectorSvg,
  VideoSvg,
  WavSvg,
  WebmSvg,
  WebpSvg,
  WmvSvg,
  XlsSvg,
  XlsxSvg,
  XmlSvg,
  ZipSvg,
}
