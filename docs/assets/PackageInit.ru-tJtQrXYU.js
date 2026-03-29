import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/PackageInit - Инициализатор пакета`}),`
`,(0,c.jsx)(n.h1,{id:`класс-packageinit`,children:`Класс PackageInit`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PackageInit`}),` отвечает за базовую настройку структуры новых пакетов внутри дизайн-системы. Он управляет сканированием директорий и делегирует инициализацию отдельных файлов классу `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),`, обеспечивая согласованную настройку окружения на основе предоставленных шаблонов и типов.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое развертывание структуры`}),` — автоматически создает необходимую иерархию папок для новых пакетов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инициализация на основе шаблонов`}),` — поддерживает различные типы пакетов и наборы шаблонов для гибкой настройки окружения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Рекурсивная работа с директориями`}),` — идентифицирует и обрабатывает пустые или новые директории в корне пакета.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление жизненным циклом`}),` — предоставляет единую точку входа для запуска всей последовательности инициализации.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`PackageInit(type, templates, dir)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — идентификатор типа пакета (например, `,(0,c.jsx)(n.code,{children:`'functional'`}),`, `,(0,c.jsx)(n.code,{children:`'ui'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`templates?: string`}),` — необязательный список шаблонов (через запятую) для применения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dir: string`}),` — базовая директория, где расположены пакеты (по умолчанию `,(0,c.jsx)(n.code,{children:`UI_DIR_PACKAGES`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PackageInit } from '@dxtmisha/scripts'

// Инициализация для 'functional' пакета с набором шаблонов
const initializer = new PackageInit('functional', 'basic,test')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — запускает процесс инициализации для всех идентифицированных директорий по целевому пути.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`подробный-процесс-инициализации`,children:`Подробный процесс инициализации`}),`
`,(0,c.jsxs)(n.p,{children:[`Метод `,(0,c.jsx)(n.code,{children:`make()`}),` следует определенной последовательности для обеспечения чистой настройки пакета:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сканирование`}),`: сканирует целевую директорию `,(0,c.jsx)(n.code,{children:`dir`}),` для поиска подпапок, требующих инициализации (обычно пустых).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Делегирование`}),`: для каждой найденной директории создает экземпляр `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Выполнение`}),`: запускает метод `,(0,c.jsx)(n.code,{children:`make()`}),` у каждого `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),`, который отвечает за фактическое создание файлов и применение шаблонов.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`поиск-целевых-директорий`,children:`Поиск целевых директорий`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс использует внутренний метод `,(0,c.jsx)(n.code,{children:`getDirs()`}),` для поиска директорий, которые являются "пустыми" (не содержат подпапок), и которые затем обрабатываются как корни новых компонентов пакета.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`protected getDirs(): string[] {
  return PropertiesFile.readDir(this.dir)
    .filter(
      path => PropertiesFile.readDir([this.dir, path]).length === 0
    )
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};