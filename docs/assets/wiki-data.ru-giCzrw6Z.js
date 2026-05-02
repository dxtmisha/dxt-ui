import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI/# Настройка данных Wiki`}),`
`,(0,c.jsx)(n.h1,{id:`настройка-данных-wiki`,children:`Настройка данных Wiki`}),`
`,(0,c.jsxs)(n.p,{children:[`Для управления демонстрационными данными и аргументами Storybook в рамках конкретного проекта (например, `,(0,c.jsx)(n.code,{children:`d1`}),`) используется файл `,(0,c.jsx)(n.code,{children:`src/wiki/wiki.ts`}),`. Этот файл позволяет дополнять или переопределять глобальные настройки Wiki, заданные в основном пакете `,(0,c.jsx)(n.code,{children:`@dxtmisha/wiki`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`зачем-это-нужно`,children:`Зачем это нужно?`}),`
`,(0,c.jsxs)(n.p,{children:[`Файл `,(0,c.jsx)(n.code,{children:`wiki.ts`}),` служит центральной точкой конфигурации для:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Переопределения значений по умолчанию для аргументов Storybook (например, текста кнопок или иконок).`}),`
`,(0,c.jsx)(n.li,{children:`Настройки списков выбора (options) для специфичных для проекта ресурсов.`}),`
`,(0,c.jsx)(n.li,{children:`Добавления уникальных демонстрационных данных, которые не входят в базовую библиотеку.`}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`как-работать-с-файлом`,children:`Как работать с файлом`}),`
`,(0,c.jsxs)(n.p,{children:[`В каждом пакете компонентов (например, в `,(0,c.jsx)(n.code,{children:`@dxtmisha/d1`}),`) файл `,(0,c.jsx)(n.code,{children:`src/wiki/wiki.ts`}),` экспортирует объект типа `,(0,c.jsx)(n.code,{children:`StorybookArgsToList`}),`. Этот объект импортирует базовые данные `,(0,c.jsx)(n.code,{children:`wiki`}),` и модифицирует их по необходимости.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StorybookControl, StorybookCategory, type StorybookArgsToList } from '@dxtmisha/wiki'
import { wiki } from '@dxtmisha/wiki/media'

export const wikiD1: StorybookArgsToList = {
  // 1. Наследование: Переопределяем существующий аргумент 'image.value'
  'image.value': {
    ...wiki['image.value'],
    options: {
      ...wiki['image.value']?.options,
      value: 'mail-01'
    }
  },

  // 2. Новый параметр: Создаем полностью новое свойство
  'my.new.parameter': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.technical,
      description: 'Описание полностью нового параметра, которого нет в базе',
      value: 'Default Value'
    }
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`принципы-именования-ключей`,children:`Принципы именования ключей`}),`
`,(0,c.jsxs)(n.p,{children:[`Выбор названия ключа в объекте `,(0,c.jsx)(n.code,{children:`wiki`}),` определяет область применения настроек:`]}),`
`,(0,c.jsx)(n.h4,{id:`глобальные-свойства`,children:`Глобальные свойства`}),`
`,(0,c.jsxs)(n.p,{children:[`Если ключ состоит только из названия свойства (например, `,(0,c.jsx)(n.code,{children:`value`}),`, `,(0,c.jsx)(n.code,{children:`size`}),`, `,(0,c.jsx)(n.code,{children:`text`}),`), настройки считаются `,(0,c.jsx)(n.strong,{children:`глобальными`}),`. Они автоматически применяются ко всем компонентам, в которых присутствует данное свойство. Это удобно для задания единых описаний или типов контролов для всей библиотеки.`]}),`
`,(0,c.jsx)(n.h4,{id:`специфичные-свойства`,children:`Специфичные свойства`}),`
`,(0,c.jsxs)(n.p,{children:[`Если ключ содержит точку, он интерпретируется как `,(0,c.jsx)(n.code,{children:`[ComponentName].[PropertyName]`}),` (например, `,(0,c.jsx)(n.code,{children:`button.size`}),`, `,(0,c.jsx)(n.code,{children:`input.value`}),`).`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Настройки применяются `,(0,c.jsx)(n.strong,{children:`только к указанному компоненту`}),`.`]}),`
`,(0,c.jsx)(n.li,{children:`Эти значения имеют приоритет перед глобальными настройками.`}),`
`,(0,c.jsx)(n.li,{children:`Позволяет задать уникальное поведение или значения по умолчанию для конкретного элемента, не затрагивая остальные.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`структура-типов-данных`,children:`Структура типов данных`}),`
`,(0,c.jsxs)(n.p,{children:[`Для корректной настройки файла `,(0,c.jsx)(n.code,{children:`wiki.ts`}),` важно понимать структуру используемых типов. Ниже приведено детальное описание основного типа `,(0,c.jsx)(n.code,{children:`StorybookArgsToList`}),` и его составляющих.`]}),`
`,(0,c.jsx)(n.h3,{id:`storybookargstolist`,children:(0,c.jsx)(n.code,{children:`StorybookArgsToList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Это объектный тип (`,(0,c.jsx)(n.code,{children:`Record`}),`), используемый для конфигурации аргументов.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ключ (Key)`}),`: Название аргумента (строка).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Значение (Value)`}),`: Объект типа `,(0,c.jsx)(n.code,{children:`StorybookArgsToItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`storybookargstoitem`,children:(0,c.jsx)(n.code,{children:`StorybookArgsToItem`})}),`
`,(0,c.jsx)(n.p,{children:`Описывает конфигурацию конкретного элемента управления в Storybook.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: StorybookControl`}),` — определяет тип интерфейса для управления значением (текстовое поле, переключатель и т.д.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: StorybookArgsToOptionsByType`}),` — объект расширенных настроек поведения и отображения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDemo?: boolean`}),` — указывает, что параметр предназначен только для демонстрации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`demo?: any`}),` — демонстрационные данные, которые будут подставлены в примеры.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hide?: boolean`}),` — позволяет скрыть параметр из таблицы аргументов, если он является чисто техническим.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`storybookargstooptionsbytype`,children:(0,c.jsx)(n.code,{children:`StorybookArgsToOptionsByType`})}),`
`,(0,c.jsx)(n.p,{children:`Объект для настройки метаданных и ограничений аргумента.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`category?: StorybookCategory`}),` — название категории для группировки в таблице (используйте значения из перечисления `,(0,c.jsx)(n.code,{children:`StorybookCategory`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: any`}),` — текущее значение аргумента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: string | number | boolean`}),` — значение, которое будет отображаться как "по умолчанию" в документации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`description?: string | Record<string, string>`}),` — описание свойства. Может быть строкой или объектом для разных языков.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: string[] | Record<string, string>`}),` — список доступных вариантов для выбора (актуально для типов `,(0,c.jsx)(n.code,{children:`select`}),` или `,(0,c.jsx)(n.code,{children:`radio`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`min?: number`}),` / `,(0,c.jsx)(n.code,{children:`max?: number`}),` — минимальное и максимальное значение для числовых контролов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`order?: number`}),` — числовой индекс для сортировки аргументов в списке.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`перечисления-enums`,children:`Перечисления (Enums)`}),`
`,(0,c.jsx)(n.h4,{id:`storybookcontrol`,children:(0,c.jsx)(n.code,{children:`StorybookControl`})}),`
`,(0,c.jsx)(n.p,{children:`Определяет визуальный тип контрола:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text`}),` — текстовое поле.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`boolean`}),` — переключатель (true/false).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`number`}),` — ввод числа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`select`}),` — выпадающий список (требует заполнения `,(0,c.jsx)(n.code,{children:`options`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`object`}),` — редактор JSON-объектов.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`storybookcategory`,children:(0,c.jsx)(n.code,{children:`StorybookCategory`})}),`
`,(0,c.jsx)(n.p,{children:`Используется для группировки свойств в логические блоки:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Values`}),` — основные значения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Styles`}),` — параметры внешнего вида.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Technical`}),` — технические и внутренние настройки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Adaptive`}),` — параметры адаптивности.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Status`}),` — состояния компонента.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};