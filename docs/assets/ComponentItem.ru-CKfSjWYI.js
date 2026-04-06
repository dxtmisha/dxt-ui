import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/ComponentItem - Генератор файлов компонента`}),`
`,(0,c.jsx)(n.h1,{id:`класс-componentitem`,children:`Класс ComponentItem`}),`
`,(0,c.jsx)(n.p,{children:`Специализированный класс для генерации отдельных файлов компонентов на основе шаблонов. Он управляет всем процессом создания: от чтения образцов шаблонов до выполнения динамических замен строк и установки правильных разрешений файловой системы.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`На основе шаблонов`}),` — использует централизованный репозиторий шаблонов компонентов для единообразной генерации файлов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамические замены`}),` — автоматически заменяет маркеры, такие как `,(0,c.jsx)(n.code,{children:`ComponentDoc`}),`, `,(0,c.jsx)(n.code,{children:`[project]`}),` и `,(0,c.jsx)(n.code,{children:`[path]`}),`, на контекстные значения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка плейсхолдеров`}),` — обрабатывает преобразования как в camelCase (имена классов), так и в kebab-case (имена файлов).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление правами`}),` — гарантирует, что сгенерированные файлы имеют правильные права на выполнение, чтение и запись.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`ComponentItem(path)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — относительный или абсолютный путь к директории, в которой будет создан компонент.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ComponentItem } from '@dxtmisha/scripts'

const component = new ComponentItem('src/components/MyComponent')

// Генерация файлов
component.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — основной метод, который считывает все файлы шаблонов и записывает их обработанные версии в директорию компонента.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`ручное-создание-заготовки`,children:`Ручное создание заготовки`}),`
`,(0,c.jsxs)(n.p,{children:[`В то время как `,(0,c.jsx)(n.code,{children:`ComponentCreator`}),` управляет пакетным созданием, `,(0,c.jsx)(n.code,{children:`ComponentItem`}),` можно использовать напрямую для точного контроля над конкретным компонентом.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const item = new ComponentItem('packages/ui/src/components/Avatar')
item.make()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};