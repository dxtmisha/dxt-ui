import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/BuildItem - Менеджер сборки компонентов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-builditem`,children:`Класс BuildItem`}),`
`,(0,c.jsx)(n.p,{children:`Отвечает за оркестрацию процесса сборки отдельных компонентов с использованием Vite. Класс управляет временными конфигурациями сборки, запускает конвейер компиляции и агрегирует полученные файлы в единый снимок кода.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Изоляция конфигурации`}),` — Безопасно переименовывает существующие конфиги Vite перед сборкой и восстанавливает их по завершении.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с Vite`}),` — Генерирует динамические конфигурации Vite на основе шаблона, специфичного для компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Агрегация результатов`}),` — Рекурсивно считывает файлы из временной директории дистрибутива и объединяет их в один файл `,(0,c.jsx)(n.code,{children:`code.txt`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Обработка ошибок`}),` — Отслеживает статус сборки и обрабатывает коды выхода окружения при сбоях.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление хранилищем`}),` — Предоставляет методы для получения и очистки временных путей дистрибутива.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Инициализируйте `,(0,c.jsx)(n.code,{children:`BuildItem`}),`, указав целевой путь к компоненту.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — целевой путь к директории компонента для сборки.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BuildItem } from '@dxtmisha/scripts'

const builder = new BuildItem('packages/components/Button')

// Запуск процесса сборки
await builder.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): Promise<boolean>`}),` — координирует полный жизненный цикл сборки: резервное копирование конфига, выполнение сборки и восстановление файлов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCode(): string`}),` — возвращает содержимое агрегированного снимка кода, созданного в процессе сборки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`removeDir(): void`}),` — безвозвратно удаляет временную директорию дистрибутива.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`внутренний-процесс-сборки`,children:`Внутренний процесс сборки`}),`
`,(0,c.jsx)(n.p,{children:`Процесс сборки следует строгому жизненному циклу для обеспечения безопасности окружения и согласованности вывода:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Резервное копирование конфигурации`}),` — Переименовывает существующий `,(0,c.jsx)(n.code,{children:`vite.config.ts`}),` в `,(0,c.jsx)(n.code,{children:`vite.config.workers.ts`}),`, чтобы предотвратить его перезапись или вмешательство в процесс сборки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синтез шаблона`}),` — Читает специальный шаблон Vite для компонентов и динамически подставляет в него целевой путь.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Выполнение в оболочке`}),` — Запускает команду `,(0,c.jsx)(n.code,{children:`npm run build`}),` через дочерний процесс, перехватывая и логируя весь вывод.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Восстановление`}),` — Безопасно восстанавливает оригинальный `,(0,c.jsx)(n.code,{children:`vite.config.ts`}),` из резервной копии сразу после завершения сборки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Агрегация`}),` — Рекурсивно сканирует директорию дистрибутива, оборачивает содержимое каждого файла в идентифицирующий комментарий и записывает итоговый результат в `,(0,c.jsx)(n.code,{children:`code.txt`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};