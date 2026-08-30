import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";function i(e){let t={code:`code`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:`разница-между-modal-actionsheet-и-dialog`,children:`Разница между Modal, ActionSheet и Dialog`}),`
`,(0,o.jsxs)(t.p,{children:[`Все три компонента построены на базе `,(0,o.jsx)(t.strong,{children:`Window`}),`, но имеют различное назначение и поведение:`]}),`
`,(0,o.jsx)(t.h3,{id:`modal`,children:`Modal`}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`Modal`}),` — модальное окно с центрированным позиционированием для контента, требующего немедленного внимания пользователя.`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[`Использует `,(0,o.jsx)(t.code,{children:`adaptive: 'modal'`}),` режим Window`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Центрированное позиционирование`}),` по умолчанию`]}),`
`,(0,o.jsx)(t.li,{children:`Полупрозрачный оверлей блокирует взаимодействие с основным интерфейсом`}),`
`,(0,o.jsxs)(t.li,{children:[`Закрывается по ESC и клику вне области (если не установлен `,(0,o.jsx)(t.code,{children:`persistent`}),`)`]}),`
`,(0,o.jsx)(t.li,{children:`Поддерживает слоты для заголовка, контента и футера`}),`
`,(0,o.jsx)(t.li,{children:`Интегрирован с компонентами Bars и Actions`}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Типичные сценарии:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Диалоги подтверждения действий`}),`
`,(0,o.jsx)(t.li,{children:`Формы создания/редактирования записей`}),`
`,(0,o.jsx)(t.li,{children:`Предупреждения и информационные сообщения`}),`
`,(0,o.jsx)(t.li,{children:`Просмотр детальной информации`}),`
`]}),`
`,(0,o.jsx)(t.hr,{}),`
`,(0,o.jsx)(t.h3,{id:`actionsheet`,children:`ActionSheet`}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`ActionSheet`}),` — модальная панель с набором действий, появляющаяся снизу экрана (на мобильных устройствах) или в виде контекстного меню.`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[`Использует `,(0,o.jsx)(t.code,{children:`adaptive: 'actionSheet'`}),` режим Window`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Позиционирование снизу`}),` экрана на мобильных устройствах`]}),`
`,(0,o.jsxs)(t.li,{children:[`Поддержка `,(0,o.jsx)(t.strong,{children:`жеста свайпа вниз`}),` для закрытия (`,(0,o.jsx)(t.code,{children:`touchClose`}),`)`]}),`
`,(0,o.jsxs)(t.li,{children:[`Автоматически добавляет разделители между элементами (`,(0,o.jsx)(t.code,{children:`divider: true`}),`)`]}),`
`,(0,o.jsx)(t.li,{children:`Адаптивное поведение: может трансформироваться в modal на больших экранах`}),`
`,(0,o.jsx)(t.li,{children:`Специализирован для списков действий`}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Типичные сценарии:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Меню действий с объектом (редактировать, удалить, поделиться)`}),`
`,(0,o.jsx)(t.li,{children:`Выбор опции из списка`}),`
`,(0,o.jsx)(t.li,{children:`Контекстные меню на мобильных устройствах`}),`
`,(0,o.jsx)(t.li,{children:`Действия, требующие быстрого доступа`}),`
`]}),`
`,(0,o.jsx)(t.hr,{}),`
`,(0,o.jsx)(t.h3,{id:`dialog`,children:`Dialog`}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`Dialog`}),` — компонент для диалоговых окон с упрощенным API.`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Обычно является еще более упрощенной оберткой над Modal`}),`
`,(0,o.jsx)(t.li,{children:`Может иметь предустановленные стили для системных диалогов`}),`
`,(0,o.jsx)(t.li,{children:`Часто используется для простых подтверждений (да/нет, ОК/Отмена)`}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Типичные сценарии:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsx)(t.li,{children:`Простые подтверждения (alert, confirm)`}),`
`,(0,o.jsx)(t.li,{children:`Системные уведомления`}),`
`,(0,o.jsx)(t.li,{children:`Быстрые диалоги без сложного контента`}),`
`]}),`
`,(0,o.jsx)(t.hr,{}),`
`,(0,o.jsx)(t.h3,{id:`выбор-компонента`,children:`Выбор компонента`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Используйте Modal`}),`, когда нужно показать форму, детальную информацию или контент, требующий внимания пользователя`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Используйте ActionSheet`}),`, когда нужно предложить список действий, особенно на мобильных устройствах`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Используйте Dialog`}),`, когда нужно простое подтверждение или системное уведомление`]}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=r(),t()})))()}s();export{a as default};