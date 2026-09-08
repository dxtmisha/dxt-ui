import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DTffVoCm.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/GitIgnore - Управление .gitignore`}),`
`,(0,c.jsx)(t.h1,{id:`класс-gitignore`,children:`Класс GitIgnore`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс для автоматического управления и добавления записей в файл `,(0,c.jsx)(t.code,{children:`.gitignore`}),`. Позволяет гибко настраивать пути и комментарии через цепочку методов и безопасно записывать данные через вызов метода `,(0,c.jsx)(t.code,{children:`make()`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Нормализация путей`}),` — автоматическая очистка пробелов, удаление пустых значений и устранение дубликатов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Безопасная вставка`}),` — проверка существующих записей в `,(0,c.jsx)(t.code,{children:`.gitignore`}),` с учетом концевых и начальных слешей для предотвращения повторного добавления.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Заголовки секций`}),` — поддержка добавления комментариев `,(0,c.jsx)(t.code,{children:`# <comment>`}),` перед списком путей без дублирования уже существующих заголовков.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Мутабельный API`}),` — управление списком путей (`,(0,c.jsx)(t.code,{children:`addPaths`}),`, `,(0,c.jsx)(t.code,{children:`setPaths`}),`), комментарием (`,(0,c.jsx)(t.code,{children:`setComment`}),`) и путем к файлу (`,(0,c.jsx)(t.code,{children:`setGitignorePath`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`основные-методы`,children:`Основные методы`}),`
`,(0,c.jsx)(t.h3,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsxs)(t.p,{children:[`Генерирует и записывает пути в файл `,(0,c.jsx)(t.code,{children:`.gitignore`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если файл был дополнен новыми записями, иначе `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GitIgnore } from '@dxtmisha/scripts'

new GitIgnore([
  'ai-prompt.md',
  'ai-packages-types'
], 'AI Resources').make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`методы-изменения-состояния`,children:`Методы изменения состояния`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addPaths(paths: string | string[]): this`}),` — добавляет пути к текущему списку путей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setPaths(paths: string | string[]): this`}),` — заменяет текущий список путей новым набором.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPaths(): string[]`}),` — возвращает текущий массив путей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setComment(comment?: string): this`}),` — устанавливает заголовок-комментарий для секции.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComment(): string | undefined`}),` — возвращает текущий заголовок-комментарий.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setGitignorePath(path: PropertiesFilePath): this`}),` — устанавливает целевой путь к `,(0,c.jsx)(t.code,{children:`.gitignore`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getGitignorePath(): PropertiesFilePath`}),` — возвращает текущий путь к `,(0,c.jsx)(t.code,{children:`.gitignore`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getContent(): string`}),` — считывает и кэширует содержимое файла `,(0,c.jsx)(t.code,{children:`.gitignore`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetContent(): this`}),` — сбрасывает кэшированное содержимое.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример цепочки вызовов:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GitIgnore } from '@dxtmisha/scripts'

new GitIgnore()
  .addPaths(['dist', 'temp'])
  .addPaths('coverage')
  .setComment('Build Outputs')
  .make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};