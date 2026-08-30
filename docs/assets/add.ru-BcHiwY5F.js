import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`добавление-уведомлений`,children:`Добавление уведомлений`}),`
`,(0,c.jsxs)(t.p,{children:[`Основной метод взаимодействия с компонентом `,(0,c.jsx)(t.code,{children:`Snackbar`}),` — добавление новых сообщений в очередь.`]}),`
`,(0,c.jsx)(t.h3,{id:`метод-add`,children:`Метод add()`}),`
`,(0,c.jsxs)(t.p,{children:[`Через инстанс компонента (`,(0,c.jsx)(t.code,{children:`ref`}),`) доступен объект `,(0,c.jsx)(t.code,{children:`data`}),`, предоставляющий метод `,(0,c.jsx)(t.code,{children:`add(item: SnackbarValue)`}),`. Параметр `,(0,c.jsx)(t.code,{children:`item`}),` определяет конфигурацию и поведение добавляемого уведомления.`]}),`
`,(0,c.jsx)(i,{code:`
snackbar.value?.data.add({
data: {
  label: 'Заголовок уведомления',
  description: 'Описание происходящего события'
}
})
`,language:`typescript`}),`
`,(0,c.jsx)(t.h3,{id:`структура-snackbarvalue`,children:`Структура SnackbarValue`}),`
`,(0,c.jsx)(t.p,{children:`Объект конфигурации включает следующие свойства:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`data`})}),` (`,(0,c.jsx)(t.code,{children:`SnackbarItemProps`}),`) — параметры для отображаемого компонента (по умолчанию `,(0,c.jsx)(t.code,{children:`SnackbarItem`}),`). Здесь передаются заголовок (`,(0,c.jsx)(t.code,{children:`label`}),`), описание (`,(0,c.jsx)(t.code,{children:`description`}),`), иконка (`,(0,c.jsx)(t.code,{children:`icon`}),`), кнопки действий и прочие визуальные данные.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`component`})}),` (`,(0,c.jsx)(t.code,{children:`any`}),`) — позволяет передать пользовательский Vue-компонент для рендеринга вместо стандартного `,(0,c.jsx)(t.code,{children:`SnackbarItem`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`highPriority`})}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`) — при значении `,(0,c.jsx)(t.code,{children:`true`}),` уведомление отображается в отдельном приоритетном контейнере (обычно закрепленном сверху или в начале списка).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`delay`})}),` (`,(0,c.jsx)(t.code,{children:`number`}),`) — индивидуальное время жизни уведомления в миллисекундах. Если не указано, используется глобальное значение `,(0,c.jsx)(t.code,{children:`delay`}),` из настроек `,(0,c.jsx)(t.code,{children:`Snackbar`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`value`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`) — уникальный ключ уведомления. Если не передан, генерируется автоматически. Необходим для ручного удаления сообщения через метод `,(0,c.jsx)(t.code,{children:`remove(value)`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`использование-кастомных-компонентов`,children:`Использование кастомных компонентов`}),`
`,(0,c.jsxs)(t.p,{children:[`Для вывода уведомлений с нестандартной версткой можно передать свой компонент через свойство `,(0,c.jsx)(t.code,{children:`component`}),`. При этом все свойства, указанные в объекте `,(0,c.jsx)(t.code,{children:`data`}),`, будут переданы в ваш компонент как `,(0,c.jsx)(t.code,{children:`props`}),`.`]}),`
`,(0,c.jsx)(i,{code:`
import MyAlert from './MyAlert.vue'

snackbar.value?.data.add({
component: MyAlert,
data: {
  title: 'Внимание!',
  message: 'Это сообщение в кастомном стиле'
}
})
`,language:`typescript`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`highPriority`}),` рекомендуется использовать для критических системных уведомлений или ошибок авторизации, чтобы они гарантированно привлекали внимание пользователя и отображались отдельно от общего потока сообщений.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};