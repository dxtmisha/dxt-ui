import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as d}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"@dxtmisha/ru/scripts/bin/dxt-component - Генерация базовой структуры компонентов"}),`
`,n.jsx(e.h1,{id:"dxt-component",children:"dxt-component"}),`
`,n.jsxs(e.p,{children:["Команда ",n.jsx(e.code,{children:"dxt-component"})," обеспечивает быструю генерацию базовой структуры (скафолдинг) для дизайн-системы. Инструмент использует ",n.jsx(e.code,{children:"ComponentCreator"})," и ",n.jsx(e.code,{children:"ComponentItem"})," для автоматического обнаружения и первичной инициализации пустых директорий компонентов."]}),`
`,n.jsx(e.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическое создание директорий"}),": Обнаруживает пустые папки внутри ",n.jsx(e.code,{children:"src/components"})," и разворачивает базовый vue код из встроенных шаблонов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Динамическое внедрение шаблонов"}),": Автоматически заменяет общие системные плейсхолдеры (такие как имя ",n.jsx(e.code,{children:"ComponentDoc"})," и имя ",n.jsx(e.code,{children:"[project]"}),"), используя внутренние шаблоны незаметно для разработчика."]}),`
`]}),`
`,n.jsx(e.h2,{id:"как-это-работает",children:"Как это работает?"}),`
`,n.jsx(e.p,{children:"Этот процесс автоматизирует создание повторяющихся структур папок:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Класс ",n.jsx(e.code,{children:"ComponentCreator"})," действует как сканнер, проверяя все вложенные структуры строго внутри ",n.jsx(e.code,{children:"src/components"}),". Он фильтрует директории, которые полностью пусты."]}),`
`,n.jsxs(e.li,{children:["Для каждой пустой папки он инициирует ",n.jsx(e.code,{children:"ComponentItem"}),", который в свою очередь загружает предустановленные файлы шаблонов компонентов."]}),`
`,n.jsx(e.li,{children:"Выполняется строковая замена плейсхолдеров на реальные названия компонента и текущего рабочего проекта. Затем получившийся код записывается прямо в файловую систему."}),`
`]}),`
`,n.jsx(e.h2,{id:"настройка-и-запуск",children:"Настройка и запуск"}),`
`,n.jsxs(e.p,{children:["Для работы генератора не требуются сложные конфигурации. Инструмент динамически читает ваш ",n.jsx(e.code,{children:"package.json"}),", чтобы извлечь поле ",n.jsx(e.code,{children:"name"}),", которое затем автоматически подставляется вместо всех шаблонных маркеров ",n.jsx(e.code,{children:"[project]"}),"."]}),`
`,n.jsx(e.p,{children:"Чтобы найти все пустые папки компонентов и инициализировать создание базовой структуры в рабочем пространстве, просто выполните:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx dxt-component
`})}),`
`,n.jsx(e.h2,{id:"структура-генерируемых-файлов",children:"Структура генерируемых файлов"}),`
`,n.jsx(e.p,{children:"При инициализации нового компонента он наследует структуру из внутренних шаблонов:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"[ComponentName].vue"}),": Базовый компонент Vue 3 со структурой ",n.jsx(e.code,{children:"<script setup>"}),", импортом типов и скафолдингом ",n.jsx(e.code,{children:'<style lang="scss">'}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),": Стандартный экспорт компонента Vue (",n.jsx(e.code,{children:"export const [ComponentName]"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"types.ts"}),": Определения TypeScript для стандартных ",n.jsx(e.code,{children:"Props"}),", ",n.jsx(e.code,{children:"Emits"}),", ",n.jsx(e.code,{children:"Slots"})," и ",n.jsx(e.code,{children:"Defaults"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"subcomponents/"}),": Пустая директория (с ",n.jsx(e.code,{children:".gitignore"}),"), готовая для внутренних вложенных компонентов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"wiki/[ComponentName].mdx"}),": Готовый к запуску файл документации Storybook MDX, использующий ",n.jsx(e.code,{children:"@dxtmisha/wiki/storybook"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"wiki/[ComponentName].stories.ts"}),": Исполняемый скрипт Storybook Vue 3, определяющий превью компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"wiki/run.ts"}),": Исполняемый node-скрипт (сокращение), предназначенный для быстрого запуска команды ИИ-генерации ",n.jsx(e.code,{children:"dxt-component-wiki"})," специально для этого компонента."]}),`
`]})]})}function j(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(c,{...s})}):c(s)}export{j as default};
