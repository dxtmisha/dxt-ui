import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/4. Создание компонентов`}),`
`,(0,c.jsx)(t.h1,{id:`создание-и-разработка-компонентов`,children:`Создание и разработка компонентов`}),`
`,(0,c.jsxs)(t.p,{children:[`В дизайн-системе `,(0,c.jsx)(t.strong,{children:`DXT UI`}),` процесс создания новых компонентов полностью автоматизирован с помощью команды `,(0,c.jsx)(t.code,{children:`dxt-component`}),`. Разработчику больше не нужно вручную создавать папки, настраивать шаблонные файлы, прописывать экспорты и конфигурации Storybook.`]}),`
`,(0,c.jsx)(t.p,{children:`Инструмент берет на себя рутину и за доли секунды разворачивает эталонную архитектуру для каждого нового компонента.`}),`
`,(0,c.jsx)(t.h2,{id:`преимущества-автоматизации`,children:`Преимущества автоматизации`}),`
`,(0,c.jsx)(t.h3,{id:`1-эталонная-структура-без-рутины-zero-boilerplate`,children:`1. Эталонная структура без рутины (Zero Boilerplate)`}),`
`,(0,c.jsxs)(t.p,{children:[`Вместо ручного создания файлов со сложными связями и импортами, разработчик создает только одну пустую папку. Команда `,(0,c.jsx)(t.code,{children:`dxt-component`}),` автоматически генерирует полную структуру, исключая опечатки в BEM-классах, путях и именах интерфейсов.`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-строгая-типизация-через-definesetupfncomponent`,children:[`2. Строгая типизация через `,(0,c.jsx)(t.code,{children:`DefineSetupFnComponent`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Сгенерированная точка входа `,(0,c.jsx)(t.code,{children:`index.ts`}),` использует типизированную обертку Vue 3, которая обеспечивает идеальный IntelliSense и точную проверку пропсов, слотов и событий в шаблонах проектов.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-готовая-интеграция-со-storybook-и-ии`,children:`3. Готовая интеграция со Storybook и ИИ`}),`
`,(0,c.jsxs)(t.p,{children:[`Каждый новый компонент сразу готов к запуску в Storybook и содержит специализированные промпты `,(0,c.jsx)(t.code,{children:`prompt.md`}),` для совместной разработки с AI-ассистентами.`]}),`
`,(0,c.jsx)(t.h2,{id:`пошаговое-руководство-что-нужно-делать`,children:`Пошаговое руководство (Что нужно делать)`}),`
`,(0,c.jsx)(t.h3,{id:`шаг-1-создайте-пустую-папку-компонента`,children:`Шаг 1. Создайте пустую папку компонента`}),`
`,(0,c.jsxs)(t.p,{children:[`В директории `,(0,c.jsx)(t.code,{children:`src/components/`}),` создайте новую пустую папку с именем компонента в PascalCase (например, `,(0,c.jsx)(t.code,{children:`Badge`}),` или `,(0,c.jsx)(t.code,{children:`UserAvatar`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`mkdir src/components/Badge
`})}),`
`,(0,c.jsx)(t.h3,{id:`шаг-2-запустите-команду-генерации`,children:`Шаг 2. Запустите команду генерации`}),`
`,(0,c.jsxs)(t.p,{children:[`Выполните команду `,(0,c.jsx)(t.code,{children:`dxt-component`}),` в терминале:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-component
`})}),`
`,(0,c.jsx)(t.p,{children:`Генератор автоматически найдет пустую папку и создаст в ней полный комплект файлов:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Component create: Badge
path: Badge
end
`})}),`
`,(0,c.jsx)(t.h3,{id:`шаг-3-изучите-сгенерированную-структуру`,children:`Шаг 3. Изучите сгенерированную структуру`}),`
`,(0,c.jsx)(t.p,{children:`В папке компонента появится 8 готовых файлов:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`src/components/Badge/
├── Badge.vue                  # Шаблон Vue 3 SFC (<script setup>, типы, стили)
├── index.ts                   # Точка входа с типизацией DefineSetupFnComponent
├── types.ts                   # Интерфейсы Props, Emits, Slots и Defaults
├── materials/
│   └── prompt.md              # Промпт для ИИ по материалам компонента
├── subcomponents/
│   └── .gitignore             # Изоляция локальных подкомпонентов
└── wiki/
    ├── Badge.mdx              # Документация Storybook в формате MDX
    ├── Badge.stories.ts       # Интерактивные истории Storybook Vue 3
    └── prompt.md              # Промпт для ИИ по документированию в Wiki
`})}),`
`,(0,c.jsx)(t.h3,{id:`шаг-4-опишите-свойства-и-типы-компонента`,children:`Шаг 4. Опишите свойства и типы компонента`}),`
`,(0,c.jsxs)(t.p,{children:[`Откройте `,(0,c.jsx)(t.code,{children:`types.ts`}),` и определите необходимые входные свойства (`,(0,c.jsx)(t.code,{children:`Props`}),`), события (`,(0,c.jsx)(t.code,{children:`Emits`}),`) и слоты (`,(0,c.jsx)(t.code,{children:`Slots`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`export type BadgeEmits = {
  click: [event: MouseEvent]
}

export interface BadgeSlots {
  default? (props: any): any
  icon? (props: any): any
}

export interface BadgeProps {
  label?: string
  color?: string
  outline?: boolean
}

export const BadgeDefaults: BadgeProps = {
  color: 'primary',
  outline: false
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`шаг-5-реализуйте-разметку-и-стили`,children:`Шаг 5. Реализуйте разметку и стили`}),`
`,(0,c.jsxs)(t.p,{children:[`Откройте `,(0,c.jsx)(t.code,{children:`Badge.vue`}),` и добавьте логику компонента и SCSS-стили:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<script setup lang="ts">
import {
  BadgeDefaults,
  type BadgeEmits,
  type BadgeProps,
  type BadgeSlots
} from './types'

defineOptions({
  name: 'Badge'
})

withDefaults(defineProps<BadgeProps>(), BadgeDefaults)
defineEmits<BadgeEmits>()
defineSlots<BadgeSlots>()
<\/script>

<template>
  <div class="badge">
    <slot name="icon" />
    <slot>{{ label }}</slot>
  </div>
</template>

<style lang="scss">
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
</style>
`})}),`
`,(0,c.jsx)(t.h3,{id:`шаг-6-настройте-документацию-и-превью-в-storybook`,children:`Шаг 6. Настройте документацию и превью в Storybook`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Для генерации историй и документации перетащите файл `,(0,c.jsx)(t.code,{children:`wiki/prompt.md`}),` в чат ИИ и попросите выполнить задачу (если кнопка отправки активна сразу после прикрепления файла, текст можно не писать).`]}),`
`,(0,c.jsxs)(t.li,{children:[`В файле `,(0,c.jsx)(t.code,{children:`wiki/Badge.stories.ts`}),` настройте тестовые сценарии использования компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[`В файле `,(0,c.jsx)(t.code,{children:`wiki/Badge.mdx`}),` добавьте текстовое описание, свойства и интерактивные демо.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Запустите Storybook (`,(0,c.jsx)(t.code,{children:`npm run storybook`}),`) для проверки отображения компонента.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`работа-с-директорией-materials-дизайн-материалы`,children:`Работа с директорией materials (Дизайн-материалы)`}),`
`,(0,c.jsxs)(t.p,{children:[`Папка `,(0,c.jsx)(t.code,{children:`materials/`}),` — это изолированное рабочее пространство компонента для сбора исходных дизайн-материалов, спецификаций и контекста разработки:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Файл `,(0,c.jsx)(t.code,{children:`prompt.md`})]}),`: Системный файл инструкций для ИИ-ассистентов, автоматически связанный со стандартами дизайн-системы (`,(0,c.jsx)(t.code,{children:`componentMaterials.md`}),`). В него разработчик вносит ссылки на Figma, описание состояний, пропсов и любые требования к реализации — всё, что должен знать ИИ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Дизайн-ассеты и скриншоты`}),`: Сюда сохраняются снимки экранов макетов Figma, SVG-иконки, схемы и варианты оформления компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Разработка через ИИ`}),`: Перетащите файл `,(0,c.jsx)(t.code,{children:`materials/prompt.md`}),` в чат ИИ и попросите выполнить задачу (если в окне чата сразу активна кнопка отправки, текст можно не писать). ИИ создаст готовый код строго по требованиям.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сохранение контекста`}),`: Папка остаётся в репозитории как единый источник проектных решений, позволяя в будущем легко восстановить контекст создания компонента.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`работа-с-директорией-wiki-документация-и-storybook`,children:`Работа с директорией wiki (Документация и Storybook)`}),`
`,(0,c.jsxs)(t.p,{children:[`Папка `,(0,c.jsx)(t.code,{children:`wiki/`}),` — это пространство компонента, предназначенное для интерактивных историй Storybook и технической документации:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Файл `,(0,c.jsx)(t.code,{children:`[ComponentName].mdx`})]}),`: Основная статья документации в формате MDX с интеграцией компонента `,(0,c.jsx)(t.code,{children:`<StorybookMain />`}),` из `,(0,c.jsx)(t.code,{children:`@dxtmisha/wiki/storybook`}),`, описанием пропсов и интерактивными демо.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Файл `,(0,c.jsx)(t.code,{children:`[ComponentName].stories.ts`})]}),`: Исполняемые истории Storybook Vue 3, демонстрирующие различные состояния и сценарии использования компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Файл `,(0,c.jsx)(t.code,{children:`prompt.md`})]}),`: Системный файл инструкций для ИИ-ассистентов, автоматически связанный со стандартами документации (`,(0,c.jsx)(t.code,{children:`componentWiki.md`}),`). В него разработчик может вписать любые пожелания по описанию компонента, примеры или особенности использования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Генерация через ИИ`}),`: Перетащите файл `,(0,c.jsx)(t.code,{children:`wiki/prompt.md`}),` в чат ИИ и попросите выполнить задачу (если в окне чата сразу активна кнопка отправки, текст можно не писать). ИИ автоматически проанализирует код компонента, типы и сформирует готовые истории и документацию.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`преимущества-перед-ручным-созданием`,children:`Преимущества перед ручным созданием`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Мгновенная скорость`}),`: Создание всех 8 файлов занимает менее 1 секунды вместо 5–10 минут ручной рутины.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Полная архитектурная целостность`}),`: Автоматически создаются все обязательные файлы, включая Storybook-истории, типизацию и промпты для ИИ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`100% точность кода`}),`: Исключены человеческие ошибки, опечатки в BEM-классах, относительных путях и именах типов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Готовность к разработке`}),`: Компонент готов к открытию в Storybook сразу после выполнения команды.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};