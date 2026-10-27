import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/media/Classes/MediaFileIcon - Реестр кастомных иконок файлов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-mediafileicon`,children:`Класс MediaFileIcon`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),` — это `,(0,c.jsx)(t.strong,{children:`основной статический класс (Static)`}),`, предназначенный для регистрации, хранения, нормализации и применения пользовательских SVG-иконок для расширений и кодов типов файлов. Он выступает централизованным реестром иконок, используемым классами `,(0,c.jsx)(t.code,{children:`MediaFiles`}),` и `,(0,c.jsx)(t.code,{children:`MediaFile`}),` для переопределения стандартных векторных иконок в дизайн-системе.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Статический реестр`}),` — хранит изолированный от прототипа словарь пользовательской SVG-разметки в памяти (`,(0,c.jsx)(t.code,{children:`Object.create(null)`}),`), привязанный к нормализованным кодам файлов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Цепочечные вызовы (Fluent Chaining)`}),` — методы `,(0,c.jsx)(t.code,{children:`add`}),`, `,(0,c.jsx)(t.code,{children:`addList`}),` и `,(0,c.jsx)(t.code,{children:`reset`}),` возвращают класс `,(0,c.jsx)(t.code,{children:`typeof MediaFileIcon`}),`, позволяя выстраивать удобные цепочки регистрации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Комплексная нормализация кодов`}),` — автоматически удаляет граничные пробелы и точки, отсекает параметры MIME (после `,(0,c.jsx)(t.code,{children:`;`}),`) и приводит коды к нижнему регистру (`,(0,c.jsx)(t.code,{children:`toCode`}),`), обеспечивая регистронезависимый поиск.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Одиночная и пакетная регистрация`}),` — предоставляет удобные методы для регистрации отдельных иконок с очисткой граничных пробелов (`,(0,c.jsx)(t.code,{children:`add`}),`) или массового добавления словаря (`,(0,c.jsx)(t.code,{children:`addList`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Бесшовное обогащение метаданных`}),` — создает защитную копию объекта `,(0,c.jsx)(t.code,{children:`MediaFileItem`}),` с клонированием массива `,(0,c.jsx)(t.code,{children:`extensions`}),` и подстановкой кастомной иконки через метод `,(0,c.jsx)(t.code,{children:`toItem`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Высокая производительность`}),` — внутренний флаг быстрого выхода (`,(0,c.jsx)(t.code,{children:`hasCustomIcons`}),`) обеспечивает проверку за O(1) без накладных расходов при пустом реестре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Отсутствие зависимостей runtime`}),` — чистые строковые операции и манипуляции со словарем, полная изоморфность и безопасность для SSR.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс является статическим и не требует создания экземпляров. Все методы вызываются напрямую через `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`реестр-и-управление`,children:`Реестр и управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get icons(): Readonly<MediaFileIcons>`}),` — возвращает снимок словаря всех зарегистрированных кастомных иконок для чтения (без свойств прототипа `,(0,c.jsx)(t.code,{children:`Object.prototype`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static has(code: string): boolean`}),` — проверяет, зарегистрирована ли пользовательская иконка для указанного кода файла или расширения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get(code: string): string | undefined`}),` — возвращает строку кастомной SVG-иконки для указанного кода или расширения, либо `,(0,c.jsx)(t.code,{children:`undefined`}),`, если иконка не найдена.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static add(code: string, icon: string): typeof MediaFileIcon`}),` — регистрирует пользовательскую строку SVG-иконки (с автоматической обрезкой граничных пробелов) для конкретного кода файла или расширения. Возвращает класс для вызова по цепочке.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static addList(icons: MediaFileIcons): typeof MediaFileIcon`}),` — пакетно регистрирует несколько пользовательских SVG-иконок из переданного словаря. Возвращает класс для вызова по цепочке.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static remove(code: string): boolean`}),` — удаляет кастомную иконку по коду файла или расширению, возвращая `,(0,c.jsx)(t.code,{children:`true`}),`, если иконка существовала и была удалена.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static reset(): typeof MediaFileIcon`}),` — полностью сбрасывает и очищает реестр всех зарегистрированных кастомных иконок. Возвращает класс для вызова по цепочке.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`нормализация-и-трансформация-элементов`,children:`Нормализация и трансформация элементов`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static toCode(code: string): string`}),` — преобразует код файла или расширение в нормализованный формат (удаление граничных точек и пробелов, отсечение MIME-параметров после `,(0,c.jsx)(t.code,{children:`;`}),` и приведение к нижнему регистру).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static toItem<T extends MediaFileItem | undefined = undefined>(item?: T): MediaFileItemReturn<T>`}),` — создает защитную поверхностную копию элемента файла и его массива расширений с подстановкой кастомной иконки по каскаду приоритетов (`,(0,c.jsx)(t.code,{children:`code`}),` -> `,(0,c.jsx)(t.code,{children:`extensions`}),` -> `,(0,c.jsx)(t.code,{children:`mime`}),` -> `,(0,c.jsx)(t.code,{children:`category`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h3,{id:`mediafileicons`,children:`MediaFileIcons`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Record<string, string>`}),` — словарь сопоставления нормализованных кодов и расширений файлов со строками SVG-разметки.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafileitem`,children:`MediaFileItem`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string`}),` — код типа файла или расширение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — понятное пользователю отображаемое название формата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon?: string`}),` — разрешенная или кастомная SVG-разметка иконки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extensions?: string[]`}),` — список поддерживаемых расширений файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime?: string`}),` — связанный MIME-тип.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category?: MediaFileCategoryValue`}),` — категория файла верхнего уровня.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group?: MediaFileGroupValue`}),` — группа классификации (`,(0,c.jsx)(t.code,{children:`neutral`}),`, `,(0,c.jsx)(t.code,{children:`category`}),`, `,(0,c.jsx)(t.code,{children:`standard`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafileitemreturnt`,children:(0,c.jsx)(t.code,{children:`MediaFileItemReturn<T>`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`T extends MediaFileItem ? MediaFileItem : undefined`}),` — условный результирующий тип возврата в зависимости от наличия входного элемента.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFileIcon } from '@dxtmisha/media'

// Регистрация через цепочечные вызовы (method chaining)
MediaFileIcon
  .reset()
  .add('sketch', '<svg class="icon-sketch">...</svg>')
  .addList({
    psd: '<svg class="icon-psd">...</svg>',
    ai: '<svg class="icon-ai">...</svg>'
  })

// Проверка наличия и получение иконки
if (MediaFileIcon.has('sketch')) {
  const iconMarkup = MediaFileIcon.get('sketch')
  console.log(iconMarkup)
}

// Получение снимка всех зарегистрированных иконок
const allIcons = MediaFileIcon.icons
console.log(allIcons.sketch)

// Нормализация кода файла (отсекает пробелы, краевые точки и параметры MIME)
console.log(MediaFileIcon.toCode('  ..DOCX..  ')) // 'docx'
console.log(MediaFileIcon.toCode('text/plain; charset=utf-8')) // 'text/plain'

// Удаление конкретной иконки
MediaFileIcon.remove('sketch')

// Полный сброс всех зарегистрированных иконок
MediaFileIcon.reset()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};