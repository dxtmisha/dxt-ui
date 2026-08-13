import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PackageInit - Инициализатор пакета`}),`
`,(0,c.jsx)(t.h1,{id:`класс-packageinit`,children:`Класс PackageInit`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PackageInit`}),` отвечает за базовую настройку структуры новых пакетов внутри дизайн-системы. Он управляет сканированием директорий и делегирует инициализацию отдельных файлов классу `,(0,c.jsx)(t.code,{children:`PackageInitItem`}),`, обеспечивая согласованную настройку окружения на основе предоставленных шаблонов и типов.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое развертывание структуры`}),` — автоматически создает необходимую иерархию папок для новых пакетов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инициализация на основе шаблонов`}),` — поддерживает различные типы пакетов и наборы шаблонов для гибкой настройки окружения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Рекурсивная работа с директориями`}),` — идентифицирует и обрабатывает пустые или новые директории в корне пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление жизненным циклом`}),` — предоставляет единую точку входа для запуска всей последовательности инициализации.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`PackageInit(type, templates, dir)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — идентификатор типа пакета (например, `,(0,c.jsx)(t.code,{children:`'functional'`}),`, `,(0,c.jsx)(t.code,{children:`'ui'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`templates?: string`}),` — необязательный список шаблонов (через запятую) для применения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir: string`}),` — базовая директория, где расположены пакеты (по умолчанию `,(0,c.jsx)(t.code,{children:`UI_DIR_PACKAGES`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PackageInit } from '@dxtmisha/scripts'

// Инициализация для 'functional' пакета с набором шаблонов
const initializer = new PackageInit('functional', 'basic,test')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — запускает процесс инициализации для всех идентифицированных директорий по целевому пути.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`подробный-процесс-инициализации`,children:`Подробный процесс инициализации`}),`
`,(0,c.jsxs)(t.p,{children:[`Метод `,(0,c.jsx)(t.code,{children:`make()`}),` следует определенной последовательности для обеспечения чистой настройки пакета:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сканирование`}),`: сканирует целевую директорию `,(0,c.jsx)(t.code,{children:`dir`}),` для поиска подпапок, требующих инициализации (обычно пустых).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Делегирование`}),`: для каждой найденной директории создает экземпляр `,(0,c.jsx)(t.code,{children:`PackageInitItem`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Выполнение`}),`: запускает метод `,(0,c.jsx)(t.code,{children:`make()`}),` у каждого `,(0,c.jsx)(t.code,{children:`PackageInitItem`}),`, который отвечает за фактическое создание файлов и применение шаблонов.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`поиск-целевых-директорий`,children:`Поиск целевых директорий`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс использует внутренний метод `,(0,c.jsx)(t.code,{children:`getDirs()`}),` для поиска директорий, которые являются "пустыми" (не содержат подпапок), и которые затем обрабатываются как корни новых компонентов пакета.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`protected getDirs(): string[] {
  return PropertiesFile.readDir(this.dir)
    .filter(
      path => PropertiesFile.readDir([this.dir, path]).length === 0
    )
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};