import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/ErrorCenter - Управление ошибками`}),`
`,(0,c.jsx)(n.h1,{id:`класс-errorcenter`,children:`Класс ErrorCenter`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ErrorCenter`}),` — это центральный инструмент для управления всеми ошибками в приложении. Он позволяет в одном месте регистрировать возможные причины ошибок, настраивать реакцию на них (например, показ уведомлений) и вызывать их из любой части кода.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Класс работает как статическая обертка (Static Bridge), направляя все запросы к единственному экземпляру `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`on(cause: ErrorCenterCauseItem): void`}),` — Запускает процесс обработки. Ищет данные в реестре, объединяет их и вызывает нужные функции обратного вызова.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`проверка`,children:`Проверка`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(code: string, group?: string): boolean`}),` — Проверяет, зарегистрирована ли ошибка.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code: string, group?: string): ErrorCenterCauseItem | undefined`}),` — Возвращает данные ошибки из реестра.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(cause: ErrorCenterCauseItem): void`}),` — Добавляет одну причину ошибки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addList(causes: ErrorCenterCauseList): void`}),` — Добавляет список ошибок (массовая регистрация).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): void`}),` — Регистрирует реакцию на группу ошибок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandlerList(handlers: ErrorCenterHandlerList): void`}),` — Пакетная регистрация нескольких обработчиков.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`вспомогательные`,children:`Вспомогательные`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): ErrorCenterInstance`}),` — Возвращает внутренний экземпляр класса.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h4,{id:`errorcentergroup`,children:(0,c.jsx)(n.code,{children:`ErrorCenterGroup`})}),`
`,(0,c.jsxs)(n.p,{children:[`Имя группы (например, 'api', 'auth') или `,(0,c.jsx)(n.code,{children:`undefined`}),` для общего обработчика.`]}),`
`,(0,c.jsx)(n.h4,{id:`errorcentercauseitem`,children:(0,c.jsx)(n.code,{children:`ErrorCenterCauseItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Объект, описывающий ошибку: `,(0,c.jsx)(n.code,{children:`group`}),`, `,(0,c.jsx)(n.code,{children:`code`}),` (обязательно), `,(0,c.jsx)(n.code,{children:`priority`}),`, `,(0,c.jsx)(n.code,{children:`label`}),`, `,(0,c.jsx)(n.code,{children:`message`}),`, `,(0,c.jsx)(n.code,{children:`details`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`руководство-по-работе`,children:`Руководство по работе`}),`
`,(0,c.jsx)(n.h3,{id:`шаг-1-регистрация-registry`,children:`Шаг 1: Регистрация (Registry)`}),`
`,(0,c.jsx)(n.p,{children:`Составьте словарь ошибок, чтобы хранить тексты отдельно от кода.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`ErrorCenter.add({
  group: 'auth',
  code: 'LOGIN_FAILED',
  label: 'Ошибка входа',
  message: 'Неверный пароль.'
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`шаг-2-подписка-handlers`,children:`Шаг 2: Подписка (Handlers)`}),`
`,(0,c.jsx)(n.p,{children:`Укажите, как приложение должно реагировать на группу ошибок.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`ErrorCenter.addHandler('auth', (cause) => {
  alert(cause.message);
});
`})}),`
`,(0,c.jsx)(n.h3,{id:`шаг-3-вызов-execution`,children:`Шаг 3: Вызов (Execution)`}),`
`,(0,c.jsx)(n.p,{children:`Вызовите ошибку по её коду и группе.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`ErrorCenter.on({ group: 'auth', code: 'LOGIN_FAILED' });
`})}),`
`,(0,c.jsx)(n.h2,{id:`стандартные-причины-ошибок`,children:`Стандартные причины ошибок`}),`
`,(0,c.jsx)(n.p,{children:`Класс уже содержит готовые описания для частых ситуаций.`}),`
`,(0,c.jsxs)(n.h4,{id:`группа-api-api`,children:[`Группа API (`,(0,c.jsx)(n.code,{children:`api`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Используется для ошибок сетевых запросов.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`forbidden`}),` — Доступ запрещен (403).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`notFound`}),` — Ресурс не найден (404).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`offline`}),` — Нет интернет-соединения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`server`}),` — Внутренняя ошибка сервера (500).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`timeout`}),` — Тайм-аут запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`unauthorized`}),` — Ошибка авторизации (401).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`unknown`}),` — Неизвестная ошибка.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`cacheClear`}),`, `,(0,c.jsx)(n.strong,{children:`cacheGet`}),`, `,(0,c.jsx)(n.strong,{children:`cacheRemove`}),`, `,(0,c.jsx)(n.strong,{children:`cacheSet`}),` — Ошибки при работе с кэшем.`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`группа-intl-intl`,children:[`Группа Intl (`,(0,c.jsx)(n.code,{children:`intl`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Ошибки при форматировании данных (даты, числа и т.д.).`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`datetime`}),`, `,(0,c.jsx)(n.strong,{children:`display`}),`, `,(0,c.jsx)(n.strong,{children:`number`}),`, `,(0,c.jsx)(n.strong,{children:`plural`}),`, `,(0,c.jsx)(n.strong,{children:`relative`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`invalid`}),` — Невалидная дата или неверный формат.`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`группа-storage-storage`,children:[`Группа Storage (`,(0,c.jsx)(n.code,{children:`storage`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Ошибки при работе с локальным или серверным хранилищем.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`context`}),` — Отсутствует контекст.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`error`}),` — Общий сбой записи/чтения.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`прочие-группы`,children:`Прочие группы`}),`
`,(0,c.jsxs)(n.p,{children:[`Для данных групп предусмотрен универсальный код ошибки `,(0,c.jsx)(n.code,{children:`error`}),`. Вызов осуществляется через `,(0,c.jsx)(n.code,{children:`ErrorCenter.on({ group: 'название_группы', code: 'error' })`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`broadcast`}),` — Ошибки при обмене данными между вкладками браузера.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`hydration`}),` — Ошибка при синхронизации данных между сервером и клиентом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`share`}),` — Ошибка при попытке поделиться контентом (Sharing API).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`transformation`}),` — Ошибка при преобразовании или парсинге данных.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`интеграция-с-системой-уведомлений`,children:`Интеграция с системой уведомлений`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ErrorCenter } from '@dxtmisha/functional-basic'

// Настраиваем один раз при старте приложения
ErrorCenter.addHandler('api', (cause) => {
  Toast.show(cause.label || 'Ошибка', cause.message);
});

// Используем в любом сервисе
async function loadData() {
  try {
    const data = await fetch('/api');
  } catch (e) {
    ErrorCenter.on({ group: 'api', code: 'server', details: e });
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`работа-с-кастомными-группами`,children:`Работа с кастомными группами`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// Регистрация на лету
ErrorCenter.on({
  group: 'upload',
  code: 'SIZE_LIMIT',
  label: 'Файл слишком велик',
  message: 'Максимум 5МБ'
});
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};