import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/7. Команды/dxt-package - Инициализация структуры пакетов`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-package`,children:`dxt-package`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-package`}),` автоматизирует инициализацию структуры нового пакета и среды разработки на основе предопределенных шаблонов. Под капотом она использует классы `,(0,c.jsx)(t.code,{children:`PackageInit`}),` и `,(0,c.jsx)(t.code,{children:`PackageInitItem`}),` для обработки пустых директорий пакетов и их соответствующего заполнения.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое сканирование директорий`}),`: Автоматически сканирует настроенную базовую директорию (по умолчанию `,(0,c.jsx)(t.code,{children:`packages/`}),`) и выявляет пустые папки пакетов, требующие инициализации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Генерация на основе шаблонов`}),`: Поддерживает применение конкретных шаблонов для настройки процесса генерации, адаптируя создаваемую структуру в зависимости от указанного `,(0,c.jsx)(t.code,{children:`type`}),` пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Гибкая настройка`}),`: Позволяет переопределять тип пакета по умолчанию, шаблоны и целевую базовую директорию через опции командной строки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsx)(t.p,{children:`Процесс инициализации пакета упрощает создание новых пакетов:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Скрипт считывает переданные опции для определения типа пакета `,(0,c.jsx)(t.code,{children:`type`}),` (по умолчанию `,(0,c.jsx)(t.code,{children:`library`}),`), шаблонов `,(0,c.jsx)(t.code,{children:`templates`}),` и целевой директории `,(0,c.jsx)(t.code,{children:`dir`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`Он сканирует целевую директорию, чтобы найти любые пустые папки (директории без дочерних элементов).`}),`
`,(0,c.jsxs)(t.li,{children:[`Для каждой найденной пустой директории инициализируется экземпляр `,(0,c.jsx)(t.code,{children:`PackageInitItem`}),`, в который передаются путь пакета, тип и шаблоны.`]}),`
`,(0,c.jsx)(t.li,{children:`Затем система обрабатывает эти конфигурации для генерации необходимых файлов и структуры среды для пакета, подготавливая его к разработке.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`настройка-и-запуск`,children:`Настройка и запуск`}),`
`,(0,c.jsxs)(t.p,{children:[`Чтобы инициализировать недавно созданные пустые папки пакетов со стандартным типом `,(0,c.jsx)(t.code,{children:`library`}),`, выполните:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Чтобы указать пользовательский тип пакета (например, `,(0,c.jsx)(t.code,{children:`vue`}),`), выполните:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package --type vue
`})}),`
`,(0,c.jsx)(t.p,{children:`Чтобы применить конкретные шаблоны, объедините их с типом:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package --type vue --templates "template1,template2"
`})}),`
`,(0,c.jsx)(t.p,{children:`Вы также можете указать пользовательскую базовую директорию:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package --type vue --templates "template1" --dir packages/custom-dir
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Выполните `,(0,c.jsx)(t.code,{children:`npx dxt-package --help`}),`, чтобы вывести полный список доступных опций.`]}),`
`,(0,c.jsx)(t.h2,{id:`генерируемая-структура`,children:`Генерируемая структура`}),`
`,(0,c.jsx)(t.p,{children:`Когда команда обрабатывает пустую директорию, она создает базовые файлы, необходимые для заданного типа пакета и шаблонов. Обычно это включает структурные файлы, базовые конфигурации и точки входа, превращая пустую папку в полнофункциональную среду пакета внутри рабочего пространства.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};