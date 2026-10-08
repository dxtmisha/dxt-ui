import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/media/Classes/MediaFile - Управление метаданными и иконками файлов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-mediafile`,children:`Класс MediaFile`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`MediaFile`}),` — это легковесная утилита, предназначенная для анализа путей к файлам, URL, имен файлов, кодов типов файлов и объектов `,(0,c.jsx)(t.code,{children:`File`}),`. Он определяет SVG-иконки файлов, извлекает расширения и базовые имена, а также классифицирует файлы по категориям (изображения, видео, документы, архивы и т.д.), опираясь на `,(0,c.jsx)(t.code,{children:`MediaFiles`}),` и `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Универсальный парсинг файлов`}),` — корректно обрабатывает объекты `,(0,c.jsx)(t.code,{children:`File`}),`, полные URL с query-параметрами и хэшем, абсолютные/относительные пути, имена файлов, расширения с точкой (`,(0,c.jsx)(t.code,{children:`.png`}),`) и чистые коды типов (`,(0,c.jsx)(t.code,{children:`png`}),`, `,(0,c.jsx)(t.code,{children:`pdf`}),`, `,(0,c.jsx)(t.code,{children:`7z`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Определение SVG-иконок`}),` — сопоставляет расширение с библиотекой из более чем 85 векторных иконок, используя иконку категории или нейтральную иконку по умолчанию при неизвестном формате.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка кастомных иконок`}),` — автоматически использует пользовательские SVG-иконки, зарегистрированные в `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Категоризация и проверки форматов`}),` — мгновенно определяет категорию файла и предоставляет вспомогательные методы (`,(0,c.jsx)(t.code,{children:`isImage`}),`, `,(0,c.jsx)(t.code,{children:`isVideo`}),`, `,(0,c.jsx)(t.code,{children:`isDocument`}),`, `,(0,c.jsx)(t.code,{children:`isStandard`}),` и т.д.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Отсутствие зависимостей runtime`}),` — чистое сопоставление строк и поиск по каталогу, полная изоморфность и безопасность для SSR.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Создайте экземпляр класса, передав объект `,(0,c.jsx)(t.code,{children:`File`}),`, ссылку на файл, URL, имя файла или код типа файла с возможностью указания явного MIME-типа:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFile } from '@dxtmisha/media'

// Из полного URL
const fileFromUrl = new MediaFile('https://example.com/assets/report.pdf?v=2#page=1')

// Из имени файла
const fileFromName = new MediaFile('archive.tar.gz')

// Из расширения или кода типа
const fileFromCode = new MediaFile('png')

// Из браузерного объекта File
const fileFromInput = new MediaFile(uploadedFile)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`свойства-и-атрибуты`,children:`Свойства и атрибуты`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`baseName: string`}),` — возвращает имя файла без расширения (например, `,(0,c.jsx)(t.code,{children:`'archive.tar'`}),` для `,(0,c.jsx)(t.code,{children:`'archive.tar.gz'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category: MediaFileCategory | undefined`}),` — возвращает категорию файла из перечисления (например, `,(0,c.jsx)(t.code,{children:`'image'`}),`, `,(0,c.jsx)(t.code,{children:`'video'`}),`, `,(0,c.jsx)(t.code,{children:`'document'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extension: string`}),` — возвращает нормализованное расширение файла в нижнем регистре без точки (например, `,(0,c.jsx)(t.code,{children:`'png'`}),`, `,(0,c.jsx)(t.code,{children:`'pdf'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extensions: string[] | undefined`}),` — возвращает список поддерживаемых расширений, связанных с форматом файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`file: File | undefined`}),` — возвращает исходный браузерный объект `,(0,c.jsx)(t.code,{children:`File`}),`, если экземпляр был создан на его основе.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group: MediaFileGroup | undefined`}),` — возвращает классификационную группу элемента файла (`,(0,c.jsx)(t.code,{children:`neutral`}),`, `,(0,c.jsx)(t.code,{children:`category`}),`, `,(0,c.jsx)(t.code,{children:`standard`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon: string`}),` — возвращает разрешенную строку SVG-разметки иконки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: MediaFileItem | undefined`}),` — возвращает полный объект метаданных из каталога файлов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime: string | undefined`}),` — возвращает определенный или явно переданный MIME-тип.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — возвращает полное имя файла, извлеченное из пути или URL (без query-параметров и хэша).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`проверки-категорий-и-классификации`,children:`Проверки категорий и классификации`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isArchive(): boolean`}),` — возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если файл относится к категории архивов (`,(0,c.jsx)(t.code,{children:`zip`}),`, `,(0,c.jsx)(t.code,{children:`rar`}),`, `,(0,c.jsx)(t.code,{children:`7z`}),`, `,(0,c.jsx)(t.code,{children:`tar`}),`, `,(0,c.jsx)(t.code,{children:`gz`}),` и др.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isAudio(): boolean`}),` — возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если файл относится к категории аудио (`,(0,c.jsx)(t.code,{children:`mp3`}),`, `,(0,c.jsx)(t.code,{children:`wav`}),`, `,(0,c.jsx)(t.code,{children:`flac`}),`, `,(0,c.jsx)(t.code,{children:`aac`}),`, `,(0,c.jsx)(t.code,{children:`ogg`}),` и др.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isCategory(): boolean`}),` — возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если файл представляет собой нейтральную иконку категории.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isCode(): boolean`}),` — возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если файл является исходным кодом или файлом данных (`,(0,c.jsx)(t.code,{children:`ts`}),`, `,(0,c.jsx)(t.code,{children:`js`}),`, `,(0,c.jsx)(t.code,{children:`json`}),`, `,(0,c.jsx)(t.code,{children:`html`}),`, `,(0,c.jsx)(t.code,{children:`css`}),`, `,(0,c.jsx)(t.code,{children:`py`}),` и др.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDocument(): boolean`}),` — возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если файл является документом (`,(0,c.jsx)(t.code,{children:`pdf`}),`, `,(0,c.jsx)(t.code,{children:`doc`}),`, `,(0,c.jsx)(t.code,{children:`docx`}),`, `,(0,c.jsx)(t.code,{children:`odt`}),`, `,(0,c.jsx)(t.code,{children:`rtf`}),` и др.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isImage(): boolean`}),` — возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если файл является изображением (`,(0,c.jsx)(t.code,{children:`png`}),`, `,(0,c.jsx)(t.code,{children:`jpg`}),`, `,(0,c.jsx)(t.code,{children:`jpeg`}),`, `,(0,c.jsx)(t.code,{children:`gif`}),`, `,(0,c.jsx)(t.code,{children:`svg`}),`, `,(0,c.jsx)(t.code,{children:`webp`}),` и др.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isNeutral(): boolean`}),` — возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если файл представляет собой базовую нейтральную иконку файла по умолчанию.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isPresentation(): boolean`}),` — возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если файл является презентацией (`,(0,c.jsx)(t.code,{children:`ppt`}),`, `,(0,c.jsx)(t.code,{children:`pptx`}),`, `,(0,c.jsx)(t.code,{children:`odp`}),`, `,(0,c.jsx)(t.code,{children:`presentation`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isStandard(): boolean`}),` — возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если файл представляет собой стандартный конкретный формат или расширение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isTable(): boolean`}),` — возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если файл является таблицей или структурированными данными (`,(0,c.jsx)(t.code,{children:`xls`}),`, `,(0,c.jsx)(t.code,{children:`xlsx`}),`, `,(0,c.jsx)(t.code,{children:`csv`}),`, `,(0,c.jsx)(t.code,{children:`ods`}),` и др.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isVideo(): boolean`}),` — возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если файл является видео (`,(0,c.jsx)(t.code,{children:`mp4`}),`, `,(0,c.jsx)(t.code,{children:`webm`}),`, `,(0,c.jsx)(t.code,{children:`mkv`}),`, `,(0,c.jsx)(t.code,{children:`avi`}),`, `,(0,c.jsx)(t.code,{children:`mov`}),` и др.).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h3,{id:`mediafilecategory`,children:`MediaFileCategory`}),`
`,(0,c.jsxs)(t.p,{children:[`Перечисление поддерживаемых категорий файлов: `,(0,c.jsx)(t.code,{children:`archive`}),`, `,(0,c.jsx)(t.code,{children:`audio`}),`, `,(0,c.jsx)(t.code,{children:`code`}),`, `,(0,c.jsx)(t.code,{children:`config`}),`, `,(0,c.jsx)(t.code,{children:`database`}),`, `,(0,c.jsx)(t.code,{children:`document`}),`, `,(0,c.jsx)(t.code,{children:`executable`}),`, `,(0,c.jsx)(t.code,{children:`folder`}),`, `,(0,c.jsx)(t.code,{children:`font`}),`, `,(0,c.jsx)(t.code,{children:`image`}),`, `,(0,c.jsx)(t.code,{children:`presentation`}),`, `,(0,c.jsx)(t.code,{children:`system`}),`, `,(0,c.jsx)(t.code,{children:`table`}),`, `,(0,c.jsx)(t.code,{children:`text`}),`, `,(0,c.jsx)(t.code,{children:`vector`}),`, `,(0,c.jsx)(t.code,{children:`video`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafilegroup`,children:`MediaFileGroup`}),`
`,(0,c.jsxs)(t.p,{children:[`Перечисление классификационных групп элементов файлов: `,(0,c.jsx)(t.code,{children:`neutral`}),`, `,(0,c.jsx)(t.code,{children:`category`}),`, `,(0,c.jsx)(t.code,{children:`standard`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafileitem`,children:`MediaFileItem`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string`}),` — уникальный код типа файла или первичное расширение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — понятное пользователю отображаемое название формата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extensions?: string[]`}),` — список поддерживаемых расширений файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime?: string`}),` — связанный MIME-тип.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon?: string`}),` — SVG-разметка иконки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category?: MediaFileCategoryValue`}),` — категория файла из перечисления.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group?: MediaFileGroupValue`}),` — классификационная группа элемента.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFile, MediaFileCategory } from '@dxtmisha/media'

const file = new MediaFile('https://domain.com/downloads/invoice.2026.pdf?download=true#top')

console.log(file.name) // 'invoice.2026.pdf'
console.log(file.baseName) // 'invoice.2026'
console.log(file.extension) // 'pdf'
console.log(file.category) // MediaFileCategory.document
console.log(file.isDocument()) // true
console.log(file.isImage()) // false

// SVG-разметка иконки, готовая к рендерингу
const svgString = file.icon
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};