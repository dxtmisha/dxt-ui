import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/LibraryItems - Менеджер списка компонентов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-libraryitems`,children:`Класс LibraryItems`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`LibraryItems`}),` отвечает за управление списком компонентов в дизайн-системе. Он предоставляет утилиты для получения данных о компонентах, подсчета их количества, определения путей и записи данных в директорию библиотеки.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление компонентами`}),` — получает и организует компоненты по группам дизайна.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Определение путей`}),` — вычисляет правильные абсолютные пути для компонентов дизайн-системы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Утилита записи файлов`}),` — предоставляет стандартизированный способ записи файлов TypeScript и JSON в библиотеку, включая автоматически сгенерированные заголовки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с конфигурацией`}),` — бесшовно работает с `,(0,c.jsx)(t.code,{children:`PropertiesConfig`}),` и `,(0,c.jsx)(t.code,{children:`PropertiesFile`}),` для получения специфичных для проекта настроек.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Инициализируйте класс `,(0,c.jsx)(t.code,{children:`LibraryItems`}),` без аргументов.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryItems } from '@dxtmisha/scripts'

const items = new LibraryItems()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`получение-данных`,children:`Получение данных`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): LibraryAll`}),` — возвращает полный список компонентов, организованный по группам дизайна.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComponentList(): LibraryData[]`}),` — возвращает плоский массив всех компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCount(): number`}),` — возвращает общее количество компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComponentsPath(): string[]`}),` — возвращает элементы пути к директории компонентов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`write`,children:(0,c.jsx)(t.code,{children:`write`})}),`
`,(0,c.jsx)(t.p,{children:`Записывает переданные данные в файл внутри директории библиотеки. Автоматически добавляет заголовок о генерации файла для TypeScript файлов.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — название файла (без расширения).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: string[]`}),` — массив строк для записи. Каждая строка будет разделена символом переноса строки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extension: string = 'ts'`}),` — расширение файла. По умолчанию `,(0,c.jsx)(t.code,{children:`ts`}),`. Поддерживается также `,(0,c.jsx)(t.code,{children:`json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`items.write('my-feature', [
  'export const active = true',
  'export const count = 10'
])
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};