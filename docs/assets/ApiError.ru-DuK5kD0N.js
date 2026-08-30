import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/ApiError - Утилита ошибок (Статическая)`}),`
`,(0,c.jsx)(t.h1,{id:`класс-apierror`,children:`Класс ApiError`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`ApiError`}),` является `,(0,c.jsx)(t.strong,{children:`основной утилитой (статической)`}),` для управления хранилищем ошибок API и идентификации сбоев. Он предоставляет централизованный синглтон-интерфейс для регистрации паттернов ошибок и преобразования сырых сетевых ответов в структурированные объекты `,(0,c.jsx)(t.code,{children:`ApiErrorItem`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Статический интерфейс`}),` — управление критериями ошибок и анализ ответов без необходимости создания экземпляра класса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Безопасный синглтон для SSR`}),` — использует `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` для поддержания изолированного хранилища ошибок для разных запросов во время серверного рендеринга.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Регистрация паттернов`}),` — простой API для добавления отдельных паттернов ошибок или массовых списков для глобальной идентификации ошибок.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление-хранилищем`,children:`Управление хранилищем`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStorage(): ApiErrorStorage`}),` — Возвращает внутренний синглтон-экземпляр хранилища ошибок.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(item: ApiErrorStorageItem | ApiErrorStorageList): void`}),` — Добавляет один или несколько паттернов ошибок в глобальное хранилище.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`анализ`,children:`Анализ`}),`
`,(0,c.jsx)(t.h4,{id:`getitem`,children:(0,c.jsx)(t.code,{children:`getItem`})}),`
`,(0,c.jsxs)(t.p,{children:[`Анализирует сырой ответ Fetch и создает структурированный экземпляр `,(0,c.jsx)(t.code,{children:`ApiErrorItem`}),`. Это основной метод для обработки сбоев API.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`method: ApiMethodItem`}),` — HTTP-метод запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response: Response`}),` — Сырой объект ответа Fetch.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`Promise<ApiErrorItem>`}),` — Структурированный объект ошибки, содержащий проанализированные детали.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`try {
  const response = await fetch('/api/user');
  if (!response.ok) {
    const errorItem = await ApiError.getItem(ApiMethodItem.get, response);
    console.error(errorItem.getMessage());
  }
} catch (e) {
  // Обработка сетевой ошибки
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};