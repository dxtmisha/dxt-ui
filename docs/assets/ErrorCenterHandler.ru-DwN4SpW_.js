import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/ErrorCenterHandler - Управление обработчиками`}),`
`,(0,c.jsx)(t.h1,{id:`класс-errorcenterhandler`,children:`Класс ErrorCenterHandler`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ErrorCenterHandler`}),` — это менеджер для управления функциями обратного вызова (обработчиками). Он позволяет привязывать логику к определенным группам ошибок и выполнять её, когда происходит соответствующее событие.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Регистрация обработчиков`}),` — удобное добавление функций обратного вызова к конкретным группам.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Глобальный обработчик`}),` — поддержка группы `,(0,c.jsx)(t.code,{children:`undefined`}),`, которая перехватывает любую ошибку без специфического обработчика.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Последовательное выполнение`}),` — запускает все зарегистрированные функции в порядке их добавления.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Настраиваемое логирование`}),` — вывод деталей ошибки в консоль с поддержкой фильтрации через функцию или полного отключения.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для создания экземпляра используйте конструктор `,(0,c.jsx)(t.code,{children:`ErrorCenterHandler(handlers, isConsole)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`handlers?: ErrorCenterHandlerList`}),` — начальный список обработчиков.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isConsole?: ErrorCenterHandlerIsConsole`}),` — флаг или функция фильтрации вывода в консоль (по умолчанию `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ErrorCenterHandler } from '@dxtmisha/functional-basic'

const handlers = new ErrorCenterHandler(
  [
    {
      group: 'api',
      handlers: [(cause) => console.log('API Error:', cause.code)]
    }
  ],
  false // Отключить вывод в консоль
);
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`on(cause: ErrorCenterCauseItem): this`}),` — Запускает цепочку обработчиков и выводит ошибку в консоль, если включено.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`проверка`,children:`Проверка`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`has(group: ErrorCenterGroup): boolean`}),` — Проверяет, есть ли обработчики для группы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(group: ErrorCenterGroup): ErrorCenterHandlerItem | undefined`}),` — Возвращает список функций для группы.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this`}),` — Добавляет одну функцию в группу.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addList(handlers: ErrorCenterHandlerList): this`}),` — Пакетная регистрация обработчиков.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setIsConsole(isConsole: ErrorCenterHandlerIsConsole): this`}),` — Устанавливает флаг или функцию фильтрации вывода в консоль.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h4,{id:`errorcentergroup`,children:(0,c.jsx)(t.code,{children:`ErrorCenterGroup`})}),`
`,(0,c.jsxs)(t.p,{children:[`Имя группы (`,(0,c.jsx)(t.code,{children:`string`}),`) или `,(0,c.jsx)(t.code,{children:`undefined`}),` для глобального перехвата.`]}),`
`,(0,c.jsx)(t.h4,{id:`errorcenterhandlercallback`,children:(0,c.jsx)(t.code,{children:`ErrorCenterHandlerCallback`})}),`
`,(0,c.jsxs)(t.p,{children:[`Функция обратного вызова: `,(0,c.jsx)(t.code,{children:`(cause: ErrorCenterCauseItem) => void`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`errorcenterhandlerisconsole`,children:(0,c.jsx)(t.code,{children:`ErrorCenterHandlerIsConsole`})}),`
`,(0,c.jsxs)(t.p,{children:[`Тип конфигурации вывода в консоль: `,(0,c.jsx)(t.code,{children:`boolean | ((cause: ErrorCenterCauseItem) => boolean)`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`errorcenterhandlerisconsolecallback`,children:(0,c.jsx)(t.code,{children:`ErrorCenterHandlerIsConsoleCallback`})}),`
`,(0,c.jsxs)(t.p,{children:[`Функция проверки вывода ошибки в консоль: `,(0,c.jsx)(t.code,{children:`(cause: ErrorCenterCauseItem) => boolean`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`errorcenterhandleritem`,children:(0,c.jsx)(t.code,{children:`ErrorCenterHandlerItem`})}),`
`,(0,c.jsx)(t.p,{children:`Связка группы и массива её функций.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group?: ErrorCenterGroup`}),` — целевая группа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`handlers: ErrorCenterHandlerCallback[]`}),` — список функций.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`изолированный-менеджер-с-фильтрацией-консоли`,children:`Изолированный менеджер с фильтрацией консоли`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const uploadHandlers = new ErrorCenterHandler();

// Фильтрация вывода в консоль: выводить только ошибки группы 'upload'
uploadHandlers.setIsConsole((cause) => cause.group === 'upload');

uploadHandlers.add('upload', (cause) => {
  if (cause.code === 'retry') {
    restartUpload();
  }
});

uploadHandlers.on({ group: 'upload', code: 'retry' });
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};