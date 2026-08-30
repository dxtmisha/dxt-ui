import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/ErrorCenter - Управление ошибками`}),`
`,(0,c.jsx)(t.h1,{id:`класс-errorcenter`,children:`Класс ErrorCenter`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ErrorCenter`}),` — это центральный инструмент для управления всеми ошибками в приложении. Он позволяет в одном месте регистрировать возможные причины ошибок, настраивать реакцию на них (например, показ уведомлений) и вызывать их из любой части кода.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Класс работает как статическая обертка (Static Bridge), направляя все запросы к единственному экземпляру `,(0,c.jsx)(t.code,{children:`ErrorCenterInstance`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`on(cause: ErrorCenterCauseItem): void`}),` — Запускает процесс обработки. Ищет данные в реестре, объединяет их и вызывает нужные функции обратного вызова.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`проверка`,children:`Проверка`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`has(code: string, group?: string): boolean`}),` — Проверяет, зарегистрирована ли ошибка.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(code: string, group?: string): ErrorCenterCauseItem | undefined`}),` — Возвращает данные ошибки из реестра.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(cause: ErrorCenterCauseItem): void`}),` — Добавляет одну причину ошибки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addList(causes: ErrorCenterCauseList): void`}),` — Добавляет список ошибок (массовая регистрация).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): void`}),` — Регистрирует реакцию на группу ошибок.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addHandlerList(handlers: ErrorCenterHandlerList): void`}),` — Пакетная регистрация нескольких обработчиков.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setIsConsole(isConsole: ErrorCenterHandlerIsConsole): void`}),` — Устанавливает флаг или функцию фильтрации вывода в консоль.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`вспомогательные`,children:`Вспомогательные`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItem(): ErrorCenterInstance`}),` — Возвращает внутренний экземпляр класса.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h4,{id:`errorcentergroup`,children:(0,c.jsx)(t.code,{children:`ErrorCenterGroup`})}),`
`,(0,c.jsxs)(t.p,{children:[`Имя группы (например, 'api', 'auth') или `,(0,c.jsx)(t.code,{children:`undefined`}),` для общего обработчика.`]}),`
`,(0,c.jsx)(t.h4,{id:`errorcentercauseitem`,children:(0,c.jsx)(t.code,{children:`ErrorCenterCauseItem`})}),`
`,(0,c.jsxs)(t.p,{children:[`Объект, описывающий ошибку: `,(0,c.jsx)(t.code,{children:`group`}),`, `,(0,c.jsx)(t.code,{children:`code`}),` (обязательно), `,(0,c.jsx)(t.code,{children:`priority`}),`, `,(0,c.jsx)(t.code,{children:`label`}),`, `,(0,c.jsx)(t.code,{children:`message`}),`, `,(0,c.jsx)(t.code,{children:`details`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`руководство-по-работе`,children:`Руководство по работе`}),`
`,(0,c.jsx)(t.h3,{id:`шаг-1-регистрация-registry`,children:`Шаг 1: Регистрация (Registry)`}),`
`,(0,c.jsx)(t.p,{children:`Составьте словарь ошибок, чтобы хранить тексты отдельно от кода.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`ErrorCenter.add({
  group: 'auth',
  code: 'LOGIN_FAILED',
  label: 'Ошибка входа',
  message: 'Неверный пароль.'
})
`})}),`
`,(0,c.jsx)(t.h3,{id:`шаг-2-подписка-handlers`,children:`Шаг 2: Подписка (Handlers)`}),`
`,(0,c.jsx)(t.p,{children:`Укажите, как приложение должно реагировать на группу ошибок.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`ErrorCenter.addHandler('auth', (cause) => {
  alert(cause.message);
});
`})}),`
`,(0,c.jsx)(t.h3,{id:`шаг-3-вызов-execution`,children:`Шаг 3: Вызов (Execution)`}),`
`,(0,c.jsx)(t.p,{children:`Вызовите ошибку по её коду и группе.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`ErrorCenter.on({ group: 'auth', code: 'LOGIN_FAILED' });
`})}),`
`,(0,c.jsx)(t.h2,{id:`стандартные-причины-ошибок`,children:`Стандартные причины ошибок`}),`
`,(0,c.jsx)(t.p,{children:`Класс уже содержит готовые описания для частых ситуаций.`}),`
`,(0,c.jsxs)(t.h4,{id:`группа-api-api`,children:[`Группа API (`,(0,c.jsx)(t.code,{children:`api`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Используется для ошибок сетевых запросов.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`forbidden`}),` — Доступ запрещен (403).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`notFound`}),` — Ресурс не найден (404).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`offline`}),` — Нет интернет-соединения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`server`}),` — Внутренняя ошибка сервера (500).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`timeout`}),` — Тайм-аут запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`unauthorized`}),` — Ошибка авторизации (401).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`unknown`}),` — Неизвестная ошибка.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`cacheClear`}),`, `,(0,c.jsx)(t.strong,{children:`cacheGet`}),`, `,(0,c.jsx)(t.strong,{children:`cacheRemove`}),`, `,(0,c.jsx)(t.strong,{children:`cacheSet`}),` — Ошибки при работе с кэшем.`]}),`
`]}),`
`,(0,c.jsxs)(t.h4,{id:`группа-intl-intl`,children:[`Группа Intl (`,(0,c.jsx)(t.code,{children:`intl`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Ошибки при форматировании данных (даты, числа и т.д.).`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`datetime`}),`, `,(0,c.jsx)(t.strong,{children:`display`}),`, `,(0,c.jsx)(t.strong,{children:`number`}),`, `,(0,c.jsx)(t.strong,{children:`plural`}),`, `,(0,c.jsx)(t.strong,{children:`relative`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`invalid`}),` — Невалидная дата или неверный формат.`]}),`
`]}),`
`,(0,c.jsxs)(t.h4,{id:`группа-storage-storage`,children:[`Группа Storage (`,(0,c.jsx)(t.code,{children:`storage`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Ошибки при работе с локальным или серверным хранилищем.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`context`}),` — Отсутствует контекст.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`error`}),` — Общий сбой записи/чтения.`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`прочие-группы`,children:`Прочие группы`}),`
`,(0,c.jsxs)(t.p,{children:[`Для данных групп предусмотрен универсальный код ошибки `,(0,c.jsx)(t.code,{children:`error`}),`. Вызов осуществляется через `,(0,c.jsx)(t.code,{children:`ErrorCenter.on({ group: 'название_группы', code: 'error' })`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`broadcast`}),` — Ошибки при обмене данными между вкладками браузера.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`hydration`}),` — Ошибка при синхронизации данных между сервером и клиентом.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`share`}),` — Ошибка при попытке поделиться контентом (Sharing API).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`transformation`}),` — Ошибка при преобразовании или парсинге данных.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`интеграция-с-системой-уведомлений`,children:`Интеграция с системой уведомлений`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ErrorCenter } from '@dxtmisha/functional-basic'

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
`,(0,c.jsx)(t.h3,{id:`работа-с-кастомными-группами`,children:`Работа с кастомными группами`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Регистрация на лету
ErrorCenter.on({
  group: 'upload',
  code: 'SIZE_LIMIT',
  label: 'Файл слишком велик',
  message: 'Максимум 5МБ'
});
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};