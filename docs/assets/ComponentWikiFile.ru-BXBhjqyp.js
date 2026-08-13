import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/ComponentWikiFile - Утилита для файлов Wiki`}),`
`,(0,c.jsx)(t.h1,{id:`класс-componentwikifile`,children:`Класс ComponentWikiFile`}),`
`,(0,c.jsx)(t.p,{children:`Специализированный утилитный класс, предназначенный для работы с отдельными файлами в процессе генерации вики. Он предоставляет надежные методы для чтения, записи и управления метаданными, такими как даты обновления и версионность файлов.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление метаданными`}),` — автоматически извлекает и обновляет маркер "`,(0,c.jsx)(t.strong,{children:`Date: ...`}),`" внутри содержимого файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Умная запись`}),` — автоматически удаляет markdown-блоки кода при сохранении и выполняет запись только при изменении содержимого.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка версионности`}),` — опционально сохраняет предыдущую версию файла, переименовывая её с суффиксом `,(0,c.jsx)(t.code,{children:`__old.txt`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Абстракция путей`}),` — интегрируется с `,(0,c.jsx)(t.code,{children:`PropertiesFile`}),` для выполнения файловых операций с использованием согласованных сегментов пути.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:`Инициализируйте с сегментами пути и конфигурацией для обработки даты и версионности.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`paths: string[]`}),` — сегменты пути к файлу.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDate: boolean = false`}),` — если `,(0,c.jsx)(t.code,{children:`true`}),`, автоматически управляет маркером даты в содержимом.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isOld: boolean = true`}),` — если `,(0,c.jsx)(t.code,{children:`true`}),`, сохраняет предыдущую версию перед перезаписью.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentWikiFile } from '@dxtmisha/scripts'

const file = new ComponentWikiFile(['docs', 'Guide.mdx'], true, true)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`информация`,children:`Информация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPath(): string`}),` — возвращает полный абсолютный путь к файлу.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDate(): Datetime`}),` — извлекает и возвращает дату из содержимого файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`read(): string`}),` — считывает и возвращает всё содержимое файла.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`write(content: string): void`}),` — записывает обработанное содержимое в файл, обрабатывая версионность и обновление даты, если это настроено.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`управление-обновлениями-документации`,children:`Управление обновлениями документации`}),`
`,(0,c.jsx)(t.p,{children:`Автоматическое обновление документации с сохранением резервной копии предыдущей версии.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const docFile = new ComponentWikiFile(['wiki', 'MyComponent.mdx'], true, true)
docFile.write('# Новое содержимое')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};