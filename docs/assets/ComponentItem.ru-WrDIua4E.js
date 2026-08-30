import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/ComponentItem - Генератор файлов компонента`}),`
`,(0,c.jsx)(t.h1,{id:`класс-componentitem`,children:`Класс ComponentItem`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`ComponentItem`}),` отвечает за создание и запись полного набора шаблонных файлов для конкретного компонента. Он загружает встроенные шаблоны (`,(0,c.jsx)(t.code,{children:`componentDocTemplates`}),`), выполняет контекстную замену плейсхолдеров и сохраняет файлы с корректными правами доступа.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Генерация 8 шаблонных файлов`}),`: Создает Vue 3 SFC (`,(0,c.jsx)(t.code,{children:`.vue`}),`), входную точку `,(0,c.jsx)(t.code,{children:`index.ts`}),`, типы `,(0,c.jsx)(t.code,{children:`types.ts`}),`, промпт материалов (`,(0,c.jsx)(t.code,{children:`materials/prompt.md`}),`), подкомпоненты (`,(0,c.jsx)(t.code,{children:`subcomponents/.gitignore`}),`) и документацию Storybook (`,(0,c.jsx)(t.code,{children:`wiki/ComponentDoc.mdx`}),`, `,(0,c.jsx)(t.code,{children:`wiki/ComponentDoc.stories.ts`}),`, `,(0,c.jsx)(t.code,{children:`wiki/prompt.md`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Динамическая замена плейсхолдеров`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ComponentDoc`}),` -> имя компонента в PascalCase (`,(0,c.jsx)(t.code,{children:`this.getName()`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`component-doc`}),` -> имя компонента в kebab-case (`,(0,c.jsx)(t.code,{children:`toKebabCase(this.getName())`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[project]`}),` -> имя пакета из `,(0,c.jsx)(t.code,{children:`package.json`}),` (`,(0,c.jsx)(t.code,{children:`this.getProjectName()`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[path]`}),` -> относительный путь компонента (`,(0,c.jsx)(t.code,{children:`src/components/ComponentName`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`_.gitignore.txt`}),` -> `,(0,c.jsx)(t.code,{children:`.gitignore`})]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление правами доступа`}),`: Вызывает `,(0,c.jsx)(t.code,{children:`PropertiesFile.chmod`}),` для всех записанных файлов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`конструктор`,children:`Конструктор`}),`
`,(0,c.jsx)(t.p,{children:`Принимает путь к директории компонента:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentItem } from '@dxtmisha/scripts'

const component = new ComponentItem('Button')
component.make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`свойства-класса`,children:`Свойства класса`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readonly path: string`}),` — относительный путь к директории компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected sample: Record<string, string>`}),` — карта файлов шаблонов (`,(0,c.jsx)(t.code,{children:`componentDocTemplates`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — основной метод генерации:`,`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Выводит в консоль имя компонента и путь (`,(0,c.jsx)(t.code,{children:`Component create: <Name>`}),`, `,(0,c.jsx)(t.code,{children:`path: <path>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Итерирует по всем шаблонам из `,(0,c.jsx)(t.code,{children:`getFilesSample()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Читает содержимое шаблона (`,(0,c.jsx)(t.code,{children:`readSample`}),`), выполняет подстановку данных (`,(0,c.jsx)(t.code,{children:`replacement`}),`) и записывает файл (`,(0,c.jsx)(t.code,{children:`writeFile`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Выводит в консоль `,(0,c.jsx)(t.code,{children:`end`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getFilePath(path: string): string[]`}),` — формирует путь назначения для выходного файла через `,(0,c.jsx)(t.code,{children:`getComponentPaths(this.path)`}),` с заменой имени файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getFilesSample(): string[]`}),` — возвращает список путей всех файлов шаблонов (`,(0,c.jsx)(t.code,{children:`Object.keys(this.sample)`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getName(): string`}),` — извлекает имя компонента из последнего сегмента пути `,(0,c.jsx)(t.code,{children:`this.path`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getProjectName(): string`}),` — возвращает имя проекта из `,(0,c.jsx)(t.code,{children:`package.json`}),` или `,(0,c.jsx)(t.code,{children:`'Project'`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readPackage(): Record<string, any>`}),` — считывает `,(0,c.jsx)(t.code,{children:`package.json`}),` текущего пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readSample(path: string): string`}),` — возвращает исходный текст шаблона по его ключу.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected replacement(contentOrPath: string): string`}),` — выполняет строковые подстановки плейсхолдеров в путях и содержимом файлов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected writeFile(path: string, content: string): void`}),` — записывает сгенерированный файл на диск через `,(0,c.jsx)(t.code,{children:`PropertiesFile.writeByPath`}),` и применяет `,(0,c.jsx)(t.code,{children:`PropertiesFile.chmod`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};