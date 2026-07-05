import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/# Команды/dxt-types - Генератор определений типов для ИИ`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-types`,children:`dxt-types`}),`
`,(0,c.jsxs)(n.p,{children:[`Команда `,(0,c.jsx)(n.code,{children:`dxt-types`}),` собирает, очищает и сжимает файлы деклараций TypeScript (`,(0,c.jsx)(n.code,{children:`.d.ts`}),`) в оптимизированный для ИИ справочник типов. Она отфильтровывает внутренние детали реализации и использует ИИ для генерации инструкций разработчика.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Обработка деклараций`}),`: Рекурсивно собирает файлы `,(0,c.jsx)(n.code,{children:`.d.ts`}),` из папки вывода сборки (например, `,(0,c.jsx)(n.code,{children:`dist/`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Фильтрация инкапсуляции`}),`: Автоматически удаляет приватные, защищённые (protected) и неэкспортируемые члены, оставляя только публичный интерфейс (API).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Оптимизация для ИИ`}),`: Использует ИИ-модель для очистки комментариев и создания компактного, экономичного по токенам файла `,(0,c.jsx)(n.code,{children:`ai-types.md`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Создание технического описания`}),`: Запрашивает у ИИ структурированное руководство по возможностям библиотеки и сохраняет его в `,(0,c.jsx)(n.code,{children:`ai-developer.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сканирование деклараций`}),`: Скрипт обходит целевую папку сборки в поисках файлов `,(0,c.jsx)(n.code,{children:`.d.ts`}),`, игнорируя декларации Vue-компонентов и вики.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Объединение кода`}),`: Соединяет все подходящие файлы в единый текстовый поток в памяти.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Очистка с помощью ИИ (API)`}),`: Отправляет текст ИИ для удаления комментариев, импортов, скрытых методов и сжатия структуры.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сохранение типов`}),`: Записывает очищенные типы в `,(0,c.jsx)(n.code,{children:`ai-types.md`}),` вместе с правилами использования экспортов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Создание описания`}),`: Заставляет ИИ написать техническое резюме библиотеки и сохраняет его в файл `,(0,c.jsx)(n.code,{children:`ai-developer.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsxs)(n.p,{children:[`Запустите сборщик типов через `,(0,c.jsx)(n.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-types [build_dir]
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`build_dir`}),` (Необязательно): Директория для сканирования. По умолчанию `,(0,c.jsx)(n.code,{children:`dist`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};