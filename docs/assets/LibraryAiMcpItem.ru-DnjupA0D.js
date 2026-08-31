import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/LibraryAiMcpItem - Обработчик MCP ресурсов для отдельного пакета`}),`
`,(0,c.jsx)(t.h1,{id:`класс-libraryaimcpitem`,children:`Класс LibraryAiMcpItem`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`LibraryAiMcpItem`}),` представляет отдельный элемент пакета при сборке глобального манифеста MCP и управляет обнаружением и чтением конфигурационных файлов `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Проверка наличия манифеста`}),` — проверяет наличие файла `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),` в целевой директории пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Безопасное чтение`}),` — считывает и валидирует массив определений ресурсов MCP.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка составных путей`}),` — оперирует сегментами путей для кроссплатформенной совместимости.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir: string[]`}),` — `,(0,c.jsxs)(t.em,{children:[`(опционально, по умолчанию `,(0,c.jsx)(t.code,{children:`[]`}),`)`]}),` сегменты пути к директории пакета.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryAiMcpItem } from '@dxtmisha/scripts'

const item = new LibraryAiMcpItem(['packages', 'core'])
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`ismcp-boolean`,children:(0,c.jsx)(t.code,{children:`isMcp(): boolean`})}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если в директории пакета присутствует файл `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`make-recordstring-any--undefined`,children:(0,c.jsx)(t.code,{children:`make(): Record<string, any>[] | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Читает и возвращает массив определений ресурсов MCP или `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryAiMcpItem } from '@dxtmisha/scripts'

const item = new LibraryAiMcpItem(['packages', 'core'])

if (item.isMcp()) {
  const resources = item.make()
  console.log(resources)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};