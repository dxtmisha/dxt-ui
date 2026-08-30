import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Компонент Avatar — это универсальный элемент интерфейса, используемый для визуального представления пользователей, сущностей или брендов. Он поддерживает несколько вариантов резервного отображения, бейджи статуса, скелетоны загрузки и интерактивные состояния.`}),`
`,(0,c.jsxs)(t.p,{children:[`Если передан URL изображения (`,(0,c.jsx)(t.code,{children:`src`}),`), Avatar пытается загрузить и отобразить его. Если изображение не удается загрузить или оно не указано, компонент автоматически переключается на отображение текстовых инициалов, сгенерированных на основе переданного имени в свойстве `,(0,c.jsx)(t.code,{children:`label`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ключевые особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Резервное отображение инициалов, автоматически генерируемых на основе имени (например, «Иван Иванов» -> «ИИ»)`}),`
`,(0,c.jsxs)(t.li,{children:[`Дополнительное управление сокращением текста (`,(0,c.jsx)(t.code,{children:`reduction`}),`) для принудительного отображения инициалов`]}),`
`,(0,c.jsx)(t.li,{children:`Поддержка рендеринга изображений с резервной обработкой ошибок загрузки`}),`
`,(0,c.jsx)(t.li,{children:`Встроенное состояние загрузки с анимацией скелетона`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка подключения бейджей статуса (например, точки индикатора присутствия в сети)`}),`
`,(0,c.jsx)(t.li,{children:`Доступное клавиатурное управление и поддержка ARIA-атрибутов (например, динамических ролей)`}),`
`,(0,c.jsxs)(t.li,{children:[`Интерактивная навигация с поддержкой стандартных ссылок, кастомных маршрутов роутера (`,(0,c.jsx)(t.code,{children:`to`}),`) и параметров клика.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Изображения профиля пользователя в меню шапки`}),`
`,(0,c.jsx)(t.li,{children:`Аватары участников чатов и обсуждений`}),`
`,(0,c.jsx)(t.li,{children:`Список членов команды или профили сотрудников`}),`
`,(0,c.jsx)(t.li,{children:`Списки контактов и карточки профилей`}),`
`,(0,c.jsx)(t.li,{children:`Интерактивные кнопки профиля, вызывающие выпадающие меню`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const userImage = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80";
<\/script>

<template>
<div class="avatar-examples">
  <!-- Аватар с инициалами по умолчанию -->
  <Avatar label="Иван Иванов" />

  <!-- Аватар с отключенным сокращением (показывает имя целиком) -->
  <Avatar label="Иван Иванов" :reduction="false" />

  <!-- Аватар с фотографией профиля -->
  <Avatar :src="userImage" label="Фото профиля" />

  <!-- Аватар с индикатором статуса присутствия в сети -->
  <Avatar label="Анна Колесникова" :badge="{ overlap: 'circular', dot: true }" />

  <!-- Интерактивный аватар-ссылка -->
  <Avatar label="Ссылка на профиль" href="/profile" />
</div>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Avatar разработан как надежное решение для отображения профиля пользователя, которое плавно переключается с фотографии на инициалы, сохраняя при этом полную доступность ARIA.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};