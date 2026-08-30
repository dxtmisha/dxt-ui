import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/AiAbstract - Абстрактный базовый класс AI`}),`
`,(0,c.jsx)(t.h1,{id:`класс-aiabstract`,children:`Класс AiAbstract`}),`
`,(0,c.jsx)(t.p,{children:`Абстрактный базовый класс, предназначенный для обеспечения общей механики различных интеграций с ИИ. Он управляет накоплением промптов, выбором моделей и предоставляет унифицированный рабочий процесс для получения ответов от различных провайдеров ИИ.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Накопление промптов`}),` — механизмы для сбора и компоновки контекста запроса перед его отправкой в модель.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление моделями`}),` — простое переключение между различными моделями ИИ в рамках одного экземпляра.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Унифицированный процесс`}),` — стандартизированный метод `,(0,c.jsx)(t.code,{children:`generate`}),`, который нормализует процесс получения ответа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка изображений и контента`}),` — встроенные методы для накопления изображений и дополнительного текстового содержимого для мультимодальных моделей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chainable API`}),` — большинство методов настройки поддерживают цепочку вызовов (чейнинг) для удобства разработки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Точки расширения`}),` — четкие хуки реализации (`,(0,c.jsx)(t.code,{children:`init`}),`, `,(0,c.jsx)(t.code,{children:`response`}),`, `,(0,c.jsx)(t.code,{children:`toImages`}),`, `,(0,c.jsx)(t.code,{children:`toContents`}),`) для конкретных сервисов ИИ (например, OpenAI, Anthropic).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Поскольку `,(0,c.jsx)(t.code,{children:`AiAbstract`}),` является абстрактным классом, его нельзя инициализировать напрямую. Вы должны использовать конкретную реализацию (например, `,(0,c.jsx)(t.code,{children:`AiOpenAI`}),` или `,(0,c.jsx)(t.code,{children:`AiAnthropic`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — API-ключ для сервиса ИИ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — начальный идентификатор модели (например, 'gpt-4o').`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`config: Record<string, any>`}),` — объект дополнительной конфигурации (по умолчанию `,(0,c.jsx)(t.code,{children:`{}`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Пример использования конкретной реализации
const ai = new AiOpenAI(process.env.OPENAI_API_KEY, 'gpt-4o')

// Добавление контекста
ai.addPrompt('Вы — полезный помощник.')
  .addContent('Объясните квантовую физику простыми словами.')

// Генерация ответа
const response = await ai.generate('Сделайте акцент на корпускулярно-волновом дуализме.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`информационные`,children:`Информационные`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getImages(): AiImageList`}),` — Возвращает список накопленных изображений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getContents(): string[]`}),` — Возвращает список накопленного дополнительного содержимого.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`настройка-сеттеры`,children:`Настройка (Сеттеры)`}),`
`,(0,c.jsx)(t.p,{children:`Методы этой группы поддерживают цепочку вызовов.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKey(key: string): this`}),` — Устанавливает или переключает API-ключ. Переинициализирует клиент, если он уже активен.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setModel(model: string): this`}),` — Переключает текущую модель для генерации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setConfig(config: Record<string, any>): this`}),` — Устанавливает или обновляет объект конфигурации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addPrompt(prompt: string): void`}),` — Добавляет новую строку в постоянный буфер промпта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addImage(image: AiImageItem): this`}),` — Добавляет изображение в список накопления.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addContent(content: string): this`}),` — Добавляет текстовый контент в список накопления.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`generate(contents: string): Promise<string>`}),` — Основной метод для запуска генерации ИИ. Объединяет накопленный промпт с переданной строкой и вызывает конкретную реализацию.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetImages(): this`}),` — Очищает список накопленных изображений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetContents(): this`}),` — Очищает список накопленного содержимого.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetPrompt(): void`}),` — Полностью очищает постоянный префикс промпта.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`абстрактные-методы-для-реализации`,children:`Абстрактные методы (Для реализации)`}),`
`,(0,c.jsxs)(t.p,{children:[`При наследовании от `,(0,c.jsx)(t.code,{children:`AiAbstract`}),` необходимо реализовать следующие защищенные методы:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Обработка инициализации клиента, аутентификации и настройки транспорта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toImages(): void`}),` — Логика преобразования накопленных изображений в формат, специфичный для провайдера.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toContents(): void`}),` — Логика преобразования накопленного содержимого в формат, специфичный для провайдера.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Основная логика вызова конкретной модели ИИ и возврата результата в виде строки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h3,{id:`aiimagelist`,children:`AiImageList`}),`
`,(0,c.jsxs)(t.p,{children:[`Массив объектов `,(0,c.jsx)(t.code,{children:`AiImageItem`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type AiImageList = AiImageItem[]
`})}),`
`,(0,c.jsx)(t.h3,{id:`aiimageitem`,children:`AiImageItem`}),`
`,(0,c.jsx)(t.p,{children:`Представляет изображение в формате base64.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime: string`}),` — MIME-тип изображения (например, 'image/png').`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`base64: string`}),` — данные изображения в кодировке base64.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type AiImageItem = {
  mime: string
  base64: string
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};