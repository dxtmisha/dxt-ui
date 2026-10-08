import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/media/1. Иконки файлов`}),`
`,(0,c.jsx)(t.h1,{id:`иконки-файлов-подключение-и-интеграция`,children:`Иконки файлов: подключение и интеграция`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` предоставляет самодостаточную подсистему иконок и метаданных файлов без внешних зависимостей, ориентированную на современные веб-приложения и дизайн-системы. Она включает более 85 векторных SVG-иконок, автоматическую классификацию форматов и различные сценарии подключения — от использования словаря до динамического анализа и глобального переопределения иконок.`]}),`
`,(0,c.jsx)(t.h2,{id:`способы-подключения`,children:`Способы подключения`}),`
`,(0,c.jsx)(t.p,{children:`В зависимости от архитектуры вашего проекта доступны три основных сценария работы с иконками файлов:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Словарь иконок и регистрация (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/files`}),`)`]}),` — доступ к иконкам по коду из словаря `,(0,c.jsx)(t.code,{children:`fileIcons`}),` или их пакетная регистрация через `,(0,c.jsx)(t.code,{children:`registerFileIcons()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Динамическое определение через `,(0,c.jsx)(t.code,{children:`MediaFile`})]}),` — идеально для загрузки файлов, списков загрузок и таблиц, где пути или объекты `,(0,c.jsx)(t.code,{children:`File`}),` поступают во время выполнения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Реестр кастомных иконок через `,(0,c.jsx)(t.code,{children:`MediaFileIcon`})]}),` — позволяет переопределять встроенные иконки или регистрировать собственные корпоративные форматы глобально для всего приложения.`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`модуль-filests-dxtmishamediafiles`,children:[`Модуль `,(0,c.jsx)(t.code,{children:`files.ts`}),` (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/files`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Модуль `,(0,c.jsx)(t.code,{children:`files.ts`}),` служит основным источником векторных SVG-ассетов файлов в пакете. Он экспортирует:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Словарь `,(0,c.jsx)(t.code,{children:`fileIcons`}),`, объединяющий все иконки по кодам форматов и категориям.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Функцию пакетной инициализации `,(0,c.jsx)(t.code,{children:`registerFileIcons()`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Обратите внимание: отдельные иконки не экспортируются в виде отдельных именованных переменных; доступ ко всем SVG осуществляется через словарь `,(0,c.jsx)(t.code,{children:`fileIcons`}),` либо динамически через классы `,(0,c.jsx)(t.code,{children:`MediaFile`}),` / `,(0,c.jsx)(t.code,{children:`MediaFiles`}),`.`]}),`
`,(0,c.jsxs)(t.h3,{id:`1-функция-registerfileicons`,children:[`1. Функция `,(0,c.jsx)(t.code,{children:`registerFileIcons()`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Функция `,(0,c.jsx)(t.code,{children:`registerFileIcons()`}),` регистрирует все стандартные встроенные SVG-иконки из словаря `,(0,c.jsx)(t.code,{children:`fileIcons`}),` в статическом реестре `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),` за один вызов:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { registerFileIcons } from '@dxtmisha/media/files'

// Регистрирует все стандартные иконки файлов в реестре MediaFileIcon
registerFileIcons()
`})}),`
`,(0,c.jsxs)(t.p,{children:[`После вызова этой функции все методы `,(0,c.jsx)(t.code,{children:`MediaFileIcon.get(code)`}),` и `,(0,c.jsx)(t.code,{children:`MediaFiles.get(code)`}),` мгновенно получают доступ ко всем зарегистрированным векторным иконкам во всем приложении.`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-словарь-fileicons`,children:[`2. Словарь `,(0,c.jsx)(t.code,{children:`fileIcons`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Объект `,(0,c.jsx)(t.code,{children:`fileIcons`}),` представляет собой типизированный словарь (`,(0,c.jsx)(t.code,{children:`MediaFileIcons`}),`), в котором сопоставлены коды форматов, категорий и нейтральные идентификаторы со строками SVG-разметки:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Основная нейтральная иконка файла`}),`: `,(0,c.jsx)(t.code,{children:`fileIcons['file']`}),` — универсальная иконка файла по умолчанию.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Нейтральные иконки категорий`}),`: `,(0,c.jsx)(t.code,{children:`fileIcons['archive']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['audio']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['code']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['config']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['database']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['document']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['executable']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['folder']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['font']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['image']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['presentation']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['table']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['text']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['vector']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['video']`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Конкретные форматы`}),`: `,(0,c.jsx)(t.code,{children:`fileIcons['7z']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['pdf']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['docx']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['png']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['zip']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['xlsx']`}),` и более 70 других.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { fileIcons } from '@dxtmisha/media/files'

// Прямой доступ к словарю по коду формата или категории
const pdfSvg = fileIcons['pdf']
const documentCategorySvg = fileIcons['document']
const defaultFileSvg = fileIcons['file']
`})}),`
`,(0,c.jsx)(t.p,{children:`В шаблонах Vue 3:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<template>
  <div class="file-item">
    <span class="file-icon" v-html="fileIcons['pdf']" />
    <span class="file-name">Annual_Report.pdf</span>
  </div>
</template>

<script setup lang="ts">
import { fileIcons } from '@dxtmisha/media/files'
<\/script>
`})}),`
`,(0,c.jsxs)(t.h2,{id:`динамическое-определение-через-mediafile`,children:[`Динамическое определение через `,(0,c.jsx)(t.code,{children:`MediaFile`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Для работы с загруженными пользователем файлами, внешними ссылками или записями в базе данных используйте класс `,(0,c.jsx)(t.code,{children:`MediaFile`}),`. Он анализирует имена файлов, пути или объекты `,(0,c.jsx)(t.code,{children:`File`}),` и автоматически определяет расширение, категорию и соответствующую SVG-иконку:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFile, MediaFileCategory } from '@dxtmisha/media'

// Из удаленного URL с query-параметрами и хэшем
const remoteFile = new MediaFile('https://cdn.example.com/docs/spec.2026.docx?v=3#summary')

console.log(remoteFile.name)        // 'spec.2026.docx'
console.log(remoteFile.baseName)    // 'spec.2026'
console.log(remoteFile.extension)   // 'docx'
console.log(remoteFile.category)    // MediaFileCategory.document
console.log(remoteFile.isDocument()) // true

// Готовая SVG-разметка иконки (кастомная, если зарегистрирована, или встроенная)
const svgMarkup = remoteFile.icon
`})}),`
`,(0,c.jsxs)(t.h3,{id:`поддержка-объектов-file-из-браузера`,children:[`Поддержка объектов `,(0,c.jsx)(t.code,{children:`File`}),` из браузера`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`MediaFile`}),` нативно принимает стандартные объекты `,(0,c.jsx)(t.code,{children:`File`}),` (например, из `,(0,c.jsx)(t.code,{children:`<input type="file">`}),` или Drag-and-Drop области):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    const media = new MediaFile(file)

    console.log(media.name)        // Имя файла из браузера
    console.log(media.mime)        // Нативный MIME-тип (например, 'image/png')
    console.log(media.isImage())   // true
    console.log(media.icon)        // Векторная разметка иконки
  }
}
`})}),`
`,(0,c.jsxs)(t.h2,{id:`регистрация-кастомных-иконок-через-mediafileicon`,children:[`Регистрация кастомных иконок через `,(0,c.jsx)(t.code,{children:`MediaFileIcon`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Если в проекте требуются брендовые стилизованные иконки или поддержка редких проприетарных расширений, зарегистрируйте их глобально с помощью `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`регистрация-одной-иконки`,children:`Регистрация одной иконки`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFileIcon } from '@dxtmisha/media'

// Регистрация кастомной SVG-иконки для расширения или кода формата
MediaFileIcon.add('fig', '<svg viewBox="0 0 24 24"><path d="..."/></svg>')

// Проверка наличия и получение иконки
if (MediaFileIcon.has('fig')) {
  console.log(MediaFileIcon.get('fig'))
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`пакетная-регистрация-иконок`,children:`Пакетная регистрация иконок`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFileIcon } from '@dxtmisha/media'

MediaFileIcon.addList({
  sketch: '<svg class="custom-sketch">...</svg>',
  blender: '<svg class="custom-blend">...</svg>',
  cad: '<svg class="custom-cad">...</svg>'
})
`})}),`
`,(0,c.jsxs)(t.p,{children:[`После регистрации любой вызов `,(0,c.jsx)(t.code,{children:`new MediaFile('design.sketch').icon`}),` или `,(0,c.jsx)(t.code,{children:`MediaFiles.get('sketch')`}),` автоматически вернет вашу пользовательскую SVG-иконку.`]}),`
`,(0,c.jsxs)(t.h2,{id:`запросы-к-каталогу-через-mediafiles`,children:[`Запросы к каталогу через `,(0,c.jsx)(t.code,{children:`MediaFiles`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`MediaFiles`}),` предоставляет статические методы для работы со встроенным каталогом форматов без создания экземпляров:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFiles, MediaFileCategory } from '@dxtmisha/media'

// Проверка, является ли строка ссылкой или путем
MediaFiles.isLink('https://example.com/asset.zip') // true
MediaFiles.isLink('archive.zip')                   // false

// Получение метаданных формата по расширению
const item = MediaFiles.get('xlsx')
console.log(item?.name)       // 'Excel'
console.log(item?.category)   // 'table'
console.log(item?.extensions) // ['xls', 'xlsx']

// Получение общей нейтральной иконки категории (например, для неизвестных изображений)
const categoryNeutral = MediaFiles.getByCategory(MediaFileCategory.image)

// Базовая нейтральная иконка файла
const defaultNeutral = MediaFiles.getNeutral()
`})}),`
`,(0,c.jsxs)(t.h2,{id:`интеграция-с-dxtmishafunctional-basic-icons`,children:[`Интеграция с `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional-basic`}),` (`,(0,c.jsx)(t.code,{children:`Icons`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Иконки файлов можно зарегистрировать в глобальном реестре `,(0,c.jsx)(t.code,{children:`Icons`}),`, чтобы использовать их в любых компонентах дизайн-системы:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { Icons } from '@dxtmisha/functional-basic'
import { fileIcons } from '@dxtmisha/media/files'

// Регистрация в глобальном хранилище иконок из словаря fileIcons
Icons.add('file-pdf', fileIcons['pdf'])
Icons.add('file-zip', fileIcons['zip'])

// Использование в любой части приложения
const iconSvg = await Icons.get('file-pdf')
`})}),`
`,(0,c.jsx)(t.h2,{id:`поддерживаемые-категории-файлов`,children:`Поддерживаемые категории файлов`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Archive (`,(0,c.jsx)(t.code,{children:`archive`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`zip`}),`, `,(0,c.jsx)(t.code,{children:`rar`}),`, `,(0,c.jsx)(t.code,{children:`7z`}),`, `,(0,c.jsx)(t.code,{children:`tar`}),`, `,(0,c.jsx)(t.code,{children:`gz`}),`, `,(0,c.jsx)(t.code,{children:`iso`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Audio (`,(0,c.jsx)(t.code,{children:`audio`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`mp3`}),`, `,(0,c.jsx)(t.code,{children:`wav`}),`, `,(0,c.jsx)(t.code,{children:`flac`}),`, `,(0,c.jsx)(t.code,{children:`aac`}),`, `,(0,c.jsx)(t.code,{children:`ogg`}),`, `,(0,c.jsx)(t.code,{children:`m4a`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Code (`,(0,c.jsx)(t.code,{children:`code`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`ts`}),`, `,(0,c.jsx)(t.code,{children:`js`}),`, `,(0,c.jsx)(t.code,{children:`json`}),`, `,(0,c.jsx)(t.code,{children:`html`}),`, `,(0,c.jsx)(t.code,{children:`css`}),`, `,(0,c.jsx)(t.code,{children:`py`}),`, `,(0,c.jsx)(t.code,{children:`cpp`}),`, `,(0,c.jsx)(t.code,{children:`php`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Document (`,(0,c.jsx)(t.code,{children:`document`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`pdf`}),`, `,(0,c.jsx)(t.code,{children:`doc`}),`, `,(0,c.jsx)(t.code,{children:`docx`}),`, `,(0,c.jsx)(t.code,{children:`odt`}),`, `,(0,c.jsx)(t.code,{children:`rtf`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Image (`,(0,c.jsx)(t.code,{children:`image`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`png`}),`, `,(0,c.jsx)(t.code,{children:`jpg`}),`, `,(0,c.jsx)(t.code,{children:`jpeg`}),`, `,(0,c.jsx)(t.code,{children:`gif`}),`, `,(0,c.jsx)(t.code,{children:`svg`}),`, `,(0,c.jsx)(t.code,{children:`webp`}),`, `,(0,c.jsx)(t.code,{children:`bmp`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Presentation (`,(0,c.jsx)(t.code,{children:`presentation`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`ppt`}),`, `,(0,c.jsx)(t.code,{children:`pptx`}),`, `,(0,c.jsx)(t.code,{children:`odp`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Table (`,(0,c.jsx)(t.code,{children:`table`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`xls`}),`, `,(0,c.jsx)(t.code,{children:`xlsx`}),`, `,(0,c.jsx)(t.code,{children:`csv`}),`, `,(0,c.jsx)(t.code,{children:`ods`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Video (`,(0,c.jsx)(t.code,{children:`video`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`mp4`}),`, `,(0,c.jsx)(t.code,{children:`webm`}),`, `,(0,c.jsx)(t.code,{children:`mkv`}),`, `,(0,c.jsx)(t.code,{children:`avi`}),`, `,(0,c.jsx)(t.code,{children:`mov`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`System (`,(0,c.jsx)(t.code,{children:`system`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`exe`}),`, `,(0,c.jsx)(t.code,{children:`apk`}),`, `,(0,c.jsx)(t.code,{children:`dmg`}),`, `,(0,c.jsx)(t.code,{children:`app`})]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};