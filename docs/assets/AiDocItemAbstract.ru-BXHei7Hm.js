import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/AiDocItemAbstract - Базовый класс автоматизации документации`}),`
`,(0,c.jsx)(t.h1,{id:`класс-aidocitemabstract`,children:`Класс AiDocItemAbstract`}),`
`,(0,c.jsx)(t.p,{children:`Абстрактный базовый класс для автоматизации генерации документации с использованием ИИ. Он управляет жизненным циклом чтения исходных файлов, сбора контекста (код, демо, промпты) и координации с сервисом ИИ для создания или обновления файлов MDX и исходного кода.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматизированный жизненный цикл`}),` — координирует чтение кода, выполнение сборки и генерацию обновлений документации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление контекстом`}),` — встроенная логика для сбора кода компонентов, исходного кода и фиктивных демо-данных для контекста ИИ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Умные обновления`}),` — автоматически сравнивает даты изменения, чтобы определить, требуется ли повторная генерация.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Система шаблонов`}),` — поддерживает шаблоны промптов и динамическую замену заголовков (например, `,(0,c.jsx)(t.code,{children:`[title]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция со сборкой`}),` — взаимодействует с `,(0,c.jsx)(t.code,{children:`BuildItem`}),`, чтобы убедиться, что код собирается перед документированием.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Выборочная генерация`}),` — поддержка пропуска генерации с помощью маркера `,(0,c.jsx)(t.code,{children:`// wiki:build-none`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Поскольку `,(0,c.jsx)(t.code,{children:`AiDocItemAbstract`}),` является абстрактным классом, его необходимо расширить. Конкретные классы должны предоставить пути к файлам демо и шаблонам промптов.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — базовый путь к директории исходных файлов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: GitFileItem`}),` — информация о конкретном документируемом файле.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Пример расширения и использования AiDocItemAbstract
class MyComponentDoc extends AiDocItemAbstract {
  protected pathDemo = ['path', 'to', 'demo.ts']
  protected pathPrompt = ['path', 'to', 'prompt.txt']
}

const doc = new MyComponentDoc('/source/dir', gitFileItem)
await doc.make() // Запускает цикл документирования
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`жизненный-цикл`,children:`Жизненный цикл`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — Основная точка входа. Проверяет необходимость обновления, подготавливает контекст, вызывает ИИ и записывает результаты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isBuildDisabled(): boolean`}),` — Проверяет, содержит ли исходный файл маркер `,(0,c.jsx)(t.code,{children:`// wiki:build-none`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`абстрактные-методы-для-реализации`,children:`Абстрактные методы (Для реализации)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPathWiki(): string[]`}),` — Логика определения пути к целевому файлу Wiki на основе расположения исходного файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItemDate(): Date`}),` — Получает дату изменения файла из `,(0,c.jsx)(t.code,{children:`GitFileItem`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTitle(): string`}),` — Формирует стандартизированный заголовок для документации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`readDemo(): string`}),` — Читает содержимое настроенного демо-файла.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`readPrompt(): string`}),` — Читает и подготавливает шаблон промпта, заменяя плейсхолдеры, такие как `,(0,c.jsx)(t.code,{children:`[wikiLanguage]`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`makeAi(): void`}),` — Наполняет экземпляр ИИ соответствующим контекстом (код, демо и т. д.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initName(content: string): string`}),` — Заменяет плейсхолдер `,(0,c.jsx)(t.code,{children:`[title]`}),` в сгенерированном контенте.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h3,{id:`gitfileitem`,children:`GitFileItem`}),`
`,(0,c.jsx)(t.p,{children:`Представляет информацию о файле, управляемом Git.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — относительный путь к файлу.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pathByOS: string`}),` — абсолютный путь, специфичный для ОС.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date: string`}),` — дата последнего изменения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: any`}),` — зарезервировано для дополнительных метаданных.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};