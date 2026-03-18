import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/ru/scripts/Classes/BuildItem - Менеджер сборки компонентов"}),`
`,n.jsx(e.h1,{id:"класс-builditem",children:"Класс BuildItem"}),`
`,n.jsx(e.p,{children:"Отвечает за оркестрацию процесса сборки отдельных компонентов с использованием Vite. Класс управляет временными конфигурациями сборки, запускает конвейер компиляции и агрегирует полученные файлы в единый снимок кода."}),`
`,n.jsx(e.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Изоляция конфигурации"})," — Безопасно переименовывает существующие конфиги Vite перед сборкой и восстанавливает их по завершении."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция с Vite"})," — Генерирует динамические конфигурации Vite на основе шаблона, специфичного для компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Агрегация результатов"})," — Рекурсивно считывает файлы из временной директории дистрибутива и объединяет их в один файл ",n.jsx(e.code,{children:"code.txt"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Обработка ошибок"})," — Отслеживает статус сборки и обрабатывает коды выхода окружения при сбоях."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление хранилищем"})," — Предоставляет методы для получения и очистки временных путей дистрибутива."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Инициализируйте ",n.jsx(e.code,{children:"BuildItem"}),", указав целевой путь к компоненту."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: string"})," — целевой путь к директории компонента для сборки."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { BuildItem } from '@dxtmisha/scripts'

const builder = new BuildItem('packages/components/Button')

// Запуск процесса сборки
await builder.make()
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"make(): Promise<boolean>"})," — координирует полный жизненный цикл сборки: резервное копирование конфига, выполнение сборки и восстановление файлов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getCode(): string"})," — возвращает содержимое агрегированного снимка кода, созданного в процессе сборки."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"removeDir(): void"})," — безвозвратно удаляет временную директорию дистрибутива."]}),`
`]}),`
`,n.jsx(e.h2,{id:"внутренний-процесс-сборки",children:"Внутренний процесс сборки"}),`
`,n.jsx(e.p,{children:"Процесс сборки следует строгому жизненному циклу для обеспечения безопасности окружения и согласованности вывода:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Резервное копирование конфигурации"})," — Переименовывает существующий ",n.jsx(e.code,{children:"vite.config.ts"})," в ",n.jsx(e.code,{children:"vite.config.workers.ts"}),", чтобы предотвратить его перезапись или вмешательство в процесс сборки."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Синтез шаблона"})," — Читает специальный шаблон Vite для компонентов и динамически подставляет в него целевой путь."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Выполнение в оболочке"})," — Запускает команду ",n.jsx(e.code,{children:"npm run build"})," через дочерний процесс, перехватывая и логируя весь вывод."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Восстановление"})," — Безопасно восстанавливает оригинальный ",n.jsx(e.code,{children:"vite.config.ts"})," из резервной копии сразу после завершения сборки."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Агрегация"})," — Рекурсивно сканирует директорию дистрибутива, оборачивает содержимое каждого файла в идентифицирующий комментарий и записывает итоговый результат в ",n.jsx(e.code,{children:"code.txt"}),"."]}),`
`]})]})}function j(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};
