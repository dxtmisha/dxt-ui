import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/# Команды/dxt-package - Инициализация структуры пакетов`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-package`,children:`dxt-package`}),`
`,(0,c.jsxs)(n.p,{children:[`Команда `,(0,c.jsx)(n.code,{children:`dxt-package`}),` автоматизирует инициализацию структуры нового пакета и среды разработки на основе предопределенных шаблонов. Под капотом она использует классы `,(0,c.jsx)(n.code,{children:`PackageInit`}),` и `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),` для обработки пустых директорий пакетов и их соответствующего заполнения.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое сканирование директорий`}),`: Автоматически сканирует настроенную базовую директорию (по умолчанию `,(0,c.jsx)(n.code,{children:`packages/`}),`) и выявляет пустые папки пакетов, требующие инициализации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Генерация на основе шаблонов`}),`: Поддерживает применение конкретных шаблонов для настройки процесса генерации, адаптируя создаваемую структуру в зависимости от указанного `,(0,c.jsx)(n.code,{children:`type`}),` пакета.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкая настройка`}),`: Позволяет переопределять тип пакета по умолчанию, шаблоны и целевую базовую директорию через аргументы командной строки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsx)(n.p,{children:`Процесс инициализации пакета упрощает создание новых пакетов:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Скрипт считывает переданные аргументы для определения типа пакета `,(0,c.jsx)(n.code,{children:`type`}),` (по умолчанию `,(0,c.jsx)(n.code,{children:`library`}),`), шаблонов `,(0,c.jsx)(n.code,{children:`templates`}),` и целевой директории `,(0,c.jsx)(n.code,{children:`dir`}),`.`]}),`
`,(0,c.jsx)(n.li,{children:`Он сканирует целевую директорию, чтобы найти любые пустые папки (директории без дочерних элементов).`}),`
`,(0,c.jsxs)(n.li,{children:[`Для каждой найденной пустой директории инициализируется экземпляр `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),`, в который передаются путь пакета, тип и шаблоны.`]}),`
`,(0,c.jsx)(n.li,{children:`Затем система обрабатывает эти конфигурации для генерации необходимых файлов и структуры среды для пакета, подготавливая его к разработке.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`настройка-и-запуск`,children:`Настройка и запуск`}),`
`,(0,c.jsxs)(n.p,{children:[`Чтобы инициализировать недавно созданные пустые папки пакетов со стандартным типом `,(0,c.jsx)(n.code,{children:`library`}),`, выполните:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-package
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Чтобы указать пользовательский тип пакета (например, `,(0,c.jsx)(n.code,{children:`vue`}),`), выполните:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-package vue
`})}),`
`,(0,c.jsx)(n.p,{children:`Чтобы указать пользовательский тип и применить конкретные шаблоны, передайте их в качестве аргументов:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-package vue "template1,template2"
`})}),`
`,(0,c.jsx)(n.p,{children:`Вы также можете указать пользовательскую базовую директорию в качестве третьего аргумента:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-package vue "template1" "packages/custom-dir"
`})}),`
`,(0,c.jsx)(n.h2,{id:`генерируемая-структура`,children:`Генерируемая структура`}),`
`,(0,c.jsx)(n.p,{children:`Когда команда обрабатывает пустую директорию, она создает базовые файлы, необходимые для заданного типа пакета и шаблонов. Обычно это включает структурные файлы, базовые конфигурации и точки входа, превращая пустую папку в полнофункциональную среду пакета внутри рабочего пространства.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};