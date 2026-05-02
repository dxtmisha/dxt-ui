import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI/# Создание и управление компонентом`}),`
`,(0,c.jsx)(n.h1,{id:`создание-и-управление-компонентом`,children:`Создание и управление компонентом`}),`
`,(0,c.jsxs)(n.p,{children:[`Процесс разработки в системе `,(0,c.jsx)(n.strong,{children:`DXT UI`}),` максимально автоматизирован с помощью скриптов генерации кода. Основная идея заключается в том, что разработчик описывает метаданные компонента, а система сама создает и обновляет необходимые файлы (пропсы, стили, шаблоны).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm run ui
npm run ui [ComponentName]
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Команда `,(0,c.jsx)(n.code,{children:`npm run ui`}),` — это основной инструмент для работы с компонентами. Она автоматически сканирует директории, находит новые или измененные папки и синхронизирует все связанные файлы (`,(0,c.jsx)(n.code,{children:`props.ts`}),`, `,(0,c.jsx)(n.code,{children:`styleToken.scss`}),`, `,(0,c.jsx)(n.code,{children:`.vue`}),`) на основе данных из `,(0,c.jsx)(n.code,{children:`properties.json`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Чтобы создать или обновить конкретный компонент, просто запустите команду после внесения изменений в его папку.`}),`
`,(0,c.jsx)(n.li,{children:`Чтобы полностью пересобрать библиотеку и обновить все экспорты, запустите команду без параметров.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`создание-нового-компонента`,children:`Создание нового компонента`}),`
`,(0,c.jsx)(n.p,{children:`Чтобы создать новый компонент "с нуля", выполните следующие шаги:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Создайте директорию`}),`: В папке `,(0,c.jsx)(n.code,{children:`src/components/Ui/`}),` (или в вашем проекте) создайте новую папку с названием компонента (например, `,(0,c.jsx)(n.code,{children:`MyButton`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Запустите инициализацию`}),`: Выполните команду `,(0,c.jsx)(n.code,{children:`ui`}),` (или `,(0,c.jsx)(n.code,{children:`npm run ui`}),`). Скрипт автоматически обнаружит новую папку и создаст в ней необходимые файлы.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm run ui
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Система создаст файл `,(0,c.jsx)(n.code,{children:`properties.json`}),` с базовой структурой, а также все вспомогательные файлы (props, styles, vue).`]}),`
`,(0,c.jsxs)(n.ol,{start:`3`,children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Заполните свойства`}),`: Отредактируйте созданный файл `,(0,c.jsx)(n.code,{children:`properties.json`}),`, добавив модификаторы и токены.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синхронизируйте изменения`}),`: Снова запустите команду `,(0,c.jsx)(n.code,{children:`ui`}),`, чтобы обновить все связанные файлы на основе ваших изменений.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm run ui
`})}),`
`,(0,c.jsx)(n.h3,{id:`результат-генерации`,children:`Результат генерации`}),`
`,(0,c.jsx)(n.p,{children:`Система автоматически создаст следующие файлы на основе ваших метаданных и выбранного конструктора:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props.ts`}),` — типизированные свойства, расширяющие конструктор и определяющие значения по умолчанию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleToken.scss`}),` — SCSS-токены и миксины.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`DesignComponent.vue`}),` — основной Vue-компонент с логикой инициализации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index.ts`}),`, `,(0,c.jsx)(n.code,{children:`wiki.ts`}),`, `,(0,c.jsx)(n.code,{children:`stories.ts`}),` — файлы экспорта, документации и историй.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`настройка-зависимостей-в-vue`,children:`Настройка зависимостей в Vue`}),`
`,(0,c.jsxs)(n.p,{children:[`В созданном `,(0,c.jsx)(n.code,{children:`.vue`}),` файле при инициализации класса `,(0,c.jsx)(n.code,{children:`Design`}),` (например, `,(0,c.jsx)(n.code,{children:`BarsDesign`}),`) вы можете передать объект `,(0,c.jsx)(n.code,{children:`components`}),`. Это позволяет подключить дочерние компоненты, которые требуются для работы текущего (например, иконки или индикаторы загрузки).`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Подключайте только те компоненты, которые действительно используются. Если какой-то зависимый компонент (например, `,(0,c.jsx)(n.code,{children:`ripple`}),`) не нужен в вашей реализации, его можно просто не указывать в объекте.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Для управления свойствами дочерних компонентов используйте параметр `,(0,c.jsx)(n.code,{children:`compMod`}),`. Это позволяет передавать значения по умолчанию для пропсов внутренних элементов (например, установить размер или стиль кнопки внутри панели навигации).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const design = new BarsDesign('my.bars', props, {
  emits,
  classes: classesToken,
  components: {
    button: MyButton
  },
  compMod: {
    button: {
      text: true,
      size: 'xs',
      inverse: true
    }
  }
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`работа-с-props-и-значениями-по-умолчанию`,children:`Работа с Props и значениями по умолчанию`}),`
`,(0,c.jsxs)(n.p,{children:[`Файл `,(0,c.jsx)(n.code,{children:`props.ts`}),` содержит объект `,(0,c.jsx)(n.code,{children:`defaults`}),`, который объединяет стандартные значения из конструктора и специфичные для вашего компонента настройки.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Пример в файле `,(0,c.jsx)(n.code,{children:`props.ts`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`export const defaults: object = {
  ...defaultsBars,
  iconBack: 'arrow_back',
  paddingByIndent: true
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`обновление-компонента`,children:`Обновление компонента`}),`
`,(0,c.jsxs)(n.p,{children:[`Если вам нужно изменить свойства компонента (добавить модификатор, изменить токен или CSS-значение), следуйте правилу `,(0,c.jsx)(n.strong,{children:`"Source of Truth"`}),`:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Отредактируйте файл `,(0,c.jsx)(n.code,{children:`properties.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Повторно запустите команду:`,`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm run ui MyButton
`})}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Скрипт автоматически обновит `,(0,c.jsx)(n.code,{children:`props.ts`}),` (добавит новые типы), `,(0,c.jsx)(n.code,{children:`styleToken.scss`}),` (обновит переменные) и шаблоны, сохраняя при этом целостность архитектуры.`]}),`
`,(0,c.jsx)(n.h2,{id:`пересборка-всей-библиотеки`,children:`Пересборка всей библиотеки`}),`
`,(0,c.jsxs)(n.p,{children:[`Когда вы работаете сразу над несколькими компонентами или хотите обновить глобальные экспорты библиотеки (media, plugins, types), используйте команду `,(0,c.jsx)(n.code,{children:`ui`}),` без аргументов:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm run ui
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};