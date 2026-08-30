import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Functions/run - Выполнение команды пакета`}),`
`,(0,c.jsx)(t.h1,{id:`run`,children:(0,c.jsx)(t.code,{children:`run`})}),`
`,(0,c.jsx)(t.p,{children:`Асинхронная функция для выполнения терминальной команды внутри рабочей директории указанного пакета.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`packageFile: PackageFile`}),` — объект представления пакета, предоставляющий имя и путь к его рабочей директории.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`command: string`}),` — строка shell-команды для выполнения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`showStdout: boolean`}),` — `,(0,c.jsxs)(t.em,{children:[`(опционально, по умолчанию `,(0,c.jsx)(t.code,{children:`false`}),`)`]}),` флаг вывода `,(0,c.jsx)(t.code,{children:`stdout`}),` в консоль.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`showStderr: boolean`}),` — `,(0,c.jsxs)(t.em,{children:[`(опционально, по умолчанию `,(0,c.jsx)(t.code,{children:`false`}),`)`]}),` флаг вывода `,(0,c.jsx)(t.code,{children:`stderr`}),` в консоль.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<boolean>`}),` — возвращает `,(0,c.jsx)(t.code,{children:`true`}),`, если команда завершилась успешно (exit code 0), или `,(0,c.jsx)(t.code,{children:`false`}),` в случае возникновения ошибки.`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция выполняет команду асинхронно через `,(0,c.jsx)(t.code,{children:`child_process.exec`}),` внутри директории пакета `,(0,c.jsx)(t.code,{children:`packageFile.getDir()`}),`. При наличии ошибок выполнения функция перехватывает исключение, логирует ошибку и возвращает `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PackageFile, run } from '@dxtmisha/scripts'

const packageFile = new PackageFile(['packages', 'core'])
const success = await run(packageFile, 'npm run build', true, true)

if (success) {
  console.log('Сборка пакета прошла успешно')
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};