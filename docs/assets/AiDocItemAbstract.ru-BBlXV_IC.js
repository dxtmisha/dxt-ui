import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/scripts/Classes/AiDocItemAbstract - Базовый класс автоматизации документации"}),`
`,n.jsx(e.h1,{id:"класс-aidocitemabstract",children:"Класс AiDocItemAbstract"}),`
`,n.jsx(e.p,{children:"Абстрактный базовый класс для автоматизации генерации документации с использованием ИИ. Он управляет жизненным циклом чтения исходных файлов, сбора контекста (код, демо, промпты) и координации с сервисом ИИ для создания или обновления файлов MDX и исходного кода."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматизированный жизненный цикл"})," — координирует чтение кода, выполнение сборки и генерацию обновлений документации."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление контекстом"})," — встроенная логика для сбора кода компонентов, исходного кода и фиктивных демо-данных для контекста ИИ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Умные обновления"})," — автоматически сравнивает даты изменения, чтобы определить, требуется ли повторная генерация."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Система шаблонов"})," — поддерживает шаблоны промптов и динамическую замену заголовков (например, ",n.jsx(e.code,{children:"[title]"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция со сборкой"})," — взаимодействует с ",n.jsx(e.code,{children:"BuildItem"}),", чтобы убедиться, что код собирается перед документированием."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Выборочная генерация"})," — поддержка пропуска генерации с помощью маркера ",n.jsx(e.code,{children:"// wiki:build-none"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Поскольку ",n.jsx(e.code,{children:"AiDocItemAbstract"})," является абстрактным классом, его необходимо расширить. Конкретные классы должны предоставить пути к файлам демо и шаблонам промптов."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры конструктора:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: string"})," — базовый путь к директории исходных файлов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: GitFileItem"})," — информация о конкретном документируемом файле."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Пример расширения и использования AiDocItemAbstract
class MyComponentDoc extends AiDocItemAbstract {
  protected pathDemo = ['path', 'to', 'demo.ts']
  protected pathPrompt = ['path', 'to', 'prompt.txt']
}

const doc = new MyComponentDoc('/source/dir', gitFileItem)
await doc.make() // Запускает цикл документирования
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"жизненный-цикл",children:"Жизненный цикл"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"make(): Promise<void>"})," — Основная точка входа. Проверяет необходимость обновления, подготавливает контекст, вызывает ИИ и записывает результаты."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isBuildDisabled(): boolean"})," — Проверяет, содержит ли исходный файл маркер ",n.jsx(e.code,{children:"// wiki:build-none"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"абстрактные-методы-для-реализации",children:"Абстрактные методы (Для реализации)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getPathWiki(): string[]"})," — Логика определения пути к целевому файлу Wiki на основе расположения исходного файла."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getItemDate(): Date"})," — Получает дату изменения файла из ",n.jsx(e.code,{children:"GitFileItem"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getTitle(): string"})," — Формирует стандартизированный заголовок для документации."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"readDemo(): string"})," — Читает содержимое настроенного демо-файла."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"readPrompt(): string"})," — Читает и подготавливает шаблон промпта, заменяя плейсхолдеры, такие как ",n.jsx(e.code,{children:"[wikiLanguage]"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"makeAi(): void"})," — Наполняет экземпляр ИИ соответствующим контекстом (код, демо и т. д.)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"initName(content: string): string"})," — Заменяет плейсхолдер ",n.jsx(e.code,{children:"[title]"})," в сгенерированном контенте."]}),`
`]}),`
`,n.jsx(e.h2,{id:"типы",children:"Типы"}),`
`,n.jsx(e.h3,{id:"gitfileitem",children:"GitFileItem"}),`
`,n.jsx(e.p,{children:"Представляет информацию о файле, управляемом Git."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: string"})," — относительный путь к файлу."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"pathByOS: string"})," — абсолютный путь, специфичный для ОС."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"date: string"})," — дата последнего изменения."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: any"})," — зарезервировано для дополнительных метаданных."]}),`
`]})]})}function j(i={}){const{wrapper:e}={...c(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{j as default};
