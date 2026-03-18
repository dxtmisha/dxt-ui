import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as d}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"@dxtmisha/ru/scripts/Classes/AiAbstract - Абстрактный базовый класс AI"}),`
`,n.jsx(e.h1,{id:"класс-aiabstract",children:"Класс AiAbstract"}),`
`,n.jsx(e.p,{children:"Абстрактный базовый класс, предназначенный для обеспечения общей механики различных интеграций с ИИ. Он управляет накоплением промптов, выбором моделей и предоставляет унифицированный рабочий процесс для получения ответов от различных провайдеров ИИ."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Накопление промптов"})," — механизмы для сбора и компоновки контекста запроса перед его отправкой в модель."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление моделями"})," — простое переключение между различными моделями ИИ в рамках одного экземпляра."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Унифицированный процесс"})," — стандартизированный метод ",n.jsx(e.code,{children:"generate"}),", который нормализует процесс получения ответа."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поддержка изображений и контента"})," — встроенные методы для накопления изображений и дополнительного текстового содержимого для мультимодальных моделей."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Chainable API"})," — большинство методов настройки поддерживают цепочку вызовов (чейнинг) для удобства разработки."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Точки расширения"})," — четкие хуки реализации (",n.jsx(e.code,{children:"init"}),", ",n.jsx(e.code,{children:"response"}),", ",n.jsx(e.code,{children:"toImages"}),", ",n.jsx(e.code,{children:"toContents"}),") для конкретных сервисов ИИ (например, OpenAI, Anthropic)."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Поскольку ",n.jsx(e.code,{children:"AiAbstract"})," является абстрактным классом, его нельзя инициализировать напрямую. Вы должны использовать конкретную реализацию (например, ",n.jsx(e.code,{children:"AiOpenAI"})," или ",n.jsx(e.code,{children:"AiAnthropic"}),")."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры конструктора:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"key: string"})," — API-ключ для сервиса ИИ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"model: string"})," — начальный идентификатор модели (например, 'gpt-4o')."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Пример использования конкретной реализации
const ai = new AiOpenAI(process.env.OPENAI_API_KEY, 'gpt-4o')

// Добавление контекста
ai.addPrompt('Вы — полезный помощник.')
  .addContent('Объясните квантовую физику простыми словами.')

// Генерация ответа
const response = await ai.generate('Сделайте акцент на корпускулярно-волновом дуализме.')
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"информационные",children:"Информационные"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getImages(): AiImageList"})," — Возвращает список накопленных изображений."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getContents(): string[]"})," — Возвращает список накопленного дополнительного содержимого."]}),`
`]}),`
`,n.jsx(e.h3,{id:"настройка-сеттеры",children:"Настройка (Сеттеры)"}),`
`,n.jsx(e.p,{children:"Методы этой группы поддерживают цепочку вызовов."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setKey(key: string): this"})," — Устанавливает или переключает API-ключ. Переинициализирует клиент, если он уже активен."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setModel(model: string): this"})," — Переключает текущую модель для генерации."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"addPrompt(prompt: string): void"})," — Добавляет новую строку в постоянный буфер промпта."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"addImage(image: AiImageItem): this"})," — Добавляет изображение в список накопления."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"addContent(content: string): this"})," — Добавляет текстовый контент в список накопления."]}),`
`]}),`
`,n.jsx(e.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"generate(contents: string): Promise<string>"})," — Основной метод для запуска генерации ИИ. Объединяет накопленный промпт с переданной строкой и вызывает конкретную реализацию."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"resetImages(): this"})," — Очищает список накопленных изображений."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"resetContents(): this"})," — Очищает список накопленного содержимого."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"resetPrompt(): void"})," — Полностью очищает постоянный префикс промпта."]}),`
`]}),`
`,n.jsx(e.h2,{id:"абстрактные-методы-для-реализации",children:"Абстрактные методы (Для реализации)"}),`
`,n.jsxs(e.p,{children:["При наследовании от ",n.jsx(e.code,{children:"AiAbstract"})," необходимо реализовать следующие защищенные методы:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"init(): void"})," — Обработка инициализации клиента, аутентификации и настройки транспорта."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"toImages(): void"})," — Логика преобразования накопленных изображений в формат, специфичный для провайдера."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"toContents(): void"})," — Логика преобразования накопленного содержимого в формат, специфичный для провайдера."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"response(model: string, contents: string): Promise<string>"})," — Основная логика вызова конкретной модели ИИ и возврата результата в виде строки."]}),`
`]}),`
`,n.jsx(e.h2,{id:"типы",children:"Типы"}),`
`,n.jsx(e.h3,{id:"aiimagelist",children:"AiImageList"}),`
`,n.jsxs(e.p,{children:["Массив объектов ",n.jsx(e.code,{children:"AiImageItem"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type AiImageList = AiImageItem[]
`})}),`
`,n.jsx(e.h3,{id:"aiimageitem",children:"AiImageItem"}),`
`,n.jsx(e.p,{children:"Представляет изображение в формате base64."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"mime: string"})," — MIME-тип изображения (например, 'image/png')."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"base64: string"})," — данные изображения в кодировке base64."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type AiImageItem = {
  mime: string
  base64: string
}
`})})]})}function j(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};
