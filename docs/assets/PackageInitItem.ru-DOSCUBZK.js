import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/PackageInitItem - Инициализатор элемента пакета`}),`
`,(0,c.jsx)(n.h1,{id:`класс-packageinititem`,children:`Класс PackageInitItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),` отвечает за детальную инициализацию отдельного компонента или подпакета. Он управляет жизненным циклом файлов — от применения шаблонов до интеграции с основной библиотекой, `,(0,c.jsx)(n.code,{children:`package.json`}),` и Storybook.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Генерация файлов`}),` — автоматически создает файлы на основе базовых образцов и специализированных шаблонов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамическая замена контента`}),` — автоматически разрешает такие плейсхолдеры, как `,(0,c.jsx)(n.code,{children:`[name]`}),` и `,(0,c.jsx)(n.code,{children:`@packages/library`}),` внутри сгенерированных файлов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с библиотекой`}),` — автоматически генерирует точки входа и регистрирует компонент в глобальной библиотеке.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление зависимостями`}),` — обновляет корневой `,(0,c.jsx)(n.code,{children:`package.json`}),`, включая новый пакет в зависимости (dependencies), экспорты (exports) и список файлов (files).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматизация Storybook`}),` — автоматически добавляет новые истории в конфигурацию Storybook.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`PackageInitItem(name, dir, type, templates)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — уникальное имя или идентификатор пути компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dir: string[]`}),` — массив абсолютного пути к целевой директории компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — идентификатор типа пакета (например, `,(0,c.jsx)(n.code,{children:`'functional'`}),`, `,(0,c.jsx)(n.code,{children:`'ui'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`templates?: string`}),` — необязательный список шаблонов (через запятую) для применения.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PackageInitItem } from '@dxtmisha/scripts'

const item = new PackageInitItem(
  'button',
  ['path', 'to', 'button'],
  'ui'
)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — выполняет полный цикл инициализации: создание файлов, обновление библиотеки, `,(0,c.jsx)(n.code,{children:`package.json`}),` и Storybook.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`рабочий-процесс-инициализации`,children:`Рабочий процесс инициализации`}),`
`,(0,c.jsxs)(n.p,{children:[`При вызове `,(0,c.jsx)(n.code,{children:`make()`}),` класс выполняет следующие шаги по порядку:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Создание структуры файлов`}),`: получает файлы-образцы из директории media/templates на основе типа пакета `,(0,c.jsx)(n.code,{children:`type`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Применение шаблонов`}),`: если указаны конкретные `,(0,c.jsx)(n.code,{children:`templates`}),`, он загружает и применяет их.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Запись файлов`}),`: записывает обработанные файлы в целевую директорию, выполняя необходимые замены контента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция (Библиотека)`}),`: если создается файл `,(0,c.jsx)(n.code,{children:`library.ts`}),`, он запускает автоматическую генерацию файлов экспорта в корне библиотеки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция (Пакет)`}),`: обновляет корневой `,(0,c.jsx)(n.code,{children:`package.json`}),` для регистрации зависимости воркспейса и экспортов нового пакета.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция (Storybook)`}),`: сканирует конфигурацию Storybook и добавляет шаблоны для включения историй нового компонента.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`внутренняя-логика-разрешения-имен`,children:`Внутренняя логика разрешения имен`}),`
`,(0,c.jsx)(n.p,{children:`Класс использует несколько внутренних помощников для разрешения имен:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`getName()`})}),`: нормализует имя компонента для использования в контенте файлов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`getCode()`})}),`: преобразует имя в код через дефис для идентификаторов пакетов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`getProjectName()`})}),`: разрешает полное имя NPM-пакета, включая префикс дизайна.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};