import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/1. UI/4. Настройка данных Wiki`}),`
`,(0,c.jsx)(t.h1,{id:`настройка-данных-wiki`,children:`Настройка данных Wiki`}),`
`,(0,c.jsxs)(t.p,{children:[`Для управления демонстрационными данными и аргументами Storybook в рамках конкретного проекта (например, `,(0,c.jsx)(t.code,{children:`d1`}),`) используется файл `,(0,c.jsx)(t.code,{children:`src/wiki/wiki.ts`}),`. Этот файл позволяет дополнять или переопределять глобальные настройки Wiki, заданные в основном пакете `,(0,c.jsx)(t.code,{children:`@dxtmisha/wiki`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`зачем-это-нужно`,children:`Зачем это нужно?`}),`
`,(0,c.jsxs)(t.p,{children:[`Файл `,(0,c.jsx)(t.code,{children:`wiki.ts`}),` служит центральной точкой конфигурации для:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Переопределения значений по умолчанию для аргументов Storybook (например, текста кнопок или иконок).`}),`
`,(0,c.jsx)(t.li,{children:`Настройки списков выбора (options) для специфичных для проекта ресурсов.`}),`
`,(0,c.jsx)(t.li,{children:`Добавления уникальных демонстрационных данных, которые не входят в базовую библиотеку.`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`как-работать-с-файлом`,children:`Как работать с файлом`}),`
`,(0,c.jsxs)(t.p,{children:[`В каждом пакете компонентов (например, в `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`) файл `,(0,c.jsx)(t.code,{children:`src/wiki/wiki.ts`}),` экспортирует объект типа `,(0,c.jsx)(t.code,{children:`StorybookArgsToList`}),`. Этот объект импортирует базовые данные `,(0,c.jsx)(t.code,{children:`wiki`}),` и модифицирует их по необходимости.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { StorybookControl, StorybookCategory, type StorybookArgsToList } from '@dxtmisha/wiki'
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
`,(0,c.jsx)(t.h2,{id:`принципы-именования-ключей`,children:`Принципы именования ключей`}),`
`,(0,c.jsxs)(t.p,{children:[`Выбор названия ключа в объекте `,(0,c.jsx)(t.code,{children:`wiki`}),` определяет область применения настроек:`]}),`
`,(0,c.jsx)(t.h4,{id:`глобальные-свойства`,children:`Глобальные свойства`}),`
`,(0,c.jsxs)(t.p,{children:[`Если ключ состоит только из названия свойства (например, `,(0,c.jsx)(t.code,{children:`value`}),`, `,(0,c.jsx)(t.code,{children:`size`}),`, `,(0,c.jsx)(t.code,{children:`text`}),`), настройки считаются `,(0,c.jsx)(t.strong,{children:`глобальными`}),`. Они автоматически применяются ко всем компонентам, в которых присутствует данное свойство. Это удобно для задания единых описаний или типов контролов для всей библиотеки.`]}),`
`,(0,c.jsx)(t.h4,{id:`специфичные-свойства`,children:`Специфичные свойства`}),`
`,(0,c.jsxs)(t.p,{children:[`Если ключ содержит точку, он интерпретируется как `,(0,c.jsx)(t.code,{children:`[ComponentName].[PropertyName]`}),` (например, `,(0,c.jsx)(t.code,{children:`button.size`}),`, `,(0,c.jsx)(t.code,{children:`input.value`}),`).`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Настройки применяются `,(0,c.jsx)(t.strong,{children:`только к указанному компоненту`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`Эти значения имеют приоритет перед глобальными настройками.`}),`
`,(0,c.jsx)(t.li,{children:`Позволяет задать уникальное поведение или значения по умолчанию для конкретного элемента, не затрагивая остальные.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`структура-типов-данных`,children:`Структура типов данных`}),`
`,(0,c.jsxs)(t.p,{children:[`Для корректной настройки файла `,(0,c.jsx)(t.code,{children:`wiki.ts`}),` важно понимать структуру используемых типов. Ниже приведено детальное описание основного типа `,(0,c.jsx)(t.code,{children:`StorybookArgsToList`}),` и его составляющих.`]}),`
`,(0,c.jsx)(t.h3,{id:`storybookargstolist`,children:(0,c.jsx)(t.code,{children:`StorybookArgsToList`})}),`
`,(0,c.jsxs)(t.p,{children:[`Это объектный тип (`,(0,c.jsx)(t.code,{children:`Record`}),`), используемый для конфигурации аргументов.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ключ (Key)`}),`: Название аргумента (строка).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Значение (Value)`}),`: Объект типа `,(0,c.jsx)(t.code,{children:`StorybookArgsToItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`storybookargstoitem`,children:(0,c.jsx)(t.code,{children:`StorybookArgsToItem`})}),`
`,(0,c.jsx)(t.p,{children:`Описывает конфигурацию конкретного элемента управления в Storybook.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: StorybookControl`}),` — определяет тип интерфейса для управления значением (текстовое поле, переключатель и т.д.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: StorybookArgsToOptionsByType`}),` — объект расширенных настроек поведения и отображения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDemo?: boolean`}),` — указывает, что параметр предназначен только для демонстрации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`demo?: any`}),` — демонстрационные данные, которые будут подставлены в примеры.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`demoOptions?: Record<string, any>`}),` — дополнительные параметры демонстрации для элемента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hide?: boolean`}),` — позволяет скрыть параметр из таблицы аргументов, если он является чисто техническим.`]}),`
`]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`storybookargstooptionsbytype`,children:(0,c.jsx)(t.code,{children:`StorybookArgsToOptionsByType`})}),`
`,(0,c.jsx)(t.p,{children:`Объект для настройки метаданных и ограничений аргумента.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category?: StorybookCategory`}),` — название категории для группировки в таблице (используйте значения из перечисления `,(0,c.jsx)(t.code,{children:`StorybookCategory`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type?: StorybookControl | string | string[]`}),` — тип данных или целевой тип элемента управления (например, `,(0,c.jsx)(t.code,{children:`'string'`}),`, `,(0,c.jsx)(t.code,{children:`['string', 'File']`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: string | number | boolean`}),` — значение, которое будет отображаться как "по умолчанию" в документации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: any`}),` — текущее значение аргумента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`description?: StorybookArgsToDescription`}),` (`,(0,c.jsx)(t.code,{children:`string | Record<string, string>`}),`) — описание свойства. Может быть строкой или объектом с переводами по языкам (`,(0,c.jsx)(t.code,{children:`en`}),`, `,(0,c.jsx)(t.code,{children:`ru`}),`, `,(0,c.jsx)(t.code,{children:`vi`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: (string | number)[] | Record<string, string>`}),` — список доступных вариантов для выбора (актуально для типа `,(0,c.jsx)(t.code,{children:`select`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min?: number`}),` / `,(0,c.jsx)(t.code,{children:`max?: number`}),` — минимальное и максимальное значение для числовых контролов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`order?: number`}),` — числовой индекс для сортировки аргументов в списке.`]}),`
`]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`перечисления-enums`,children:`Перечисления (Enums)`}),`
`,(0,c.jsx)(t.h4,{id:`storybookcontrol`,children:(0,c.jsx)(t.code,{children:`StorybookControl`})}),`
`,(0,c.jsx)(t.p,{children:`Определяет визуальный тип контрола:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text`}),` — текстовое поле.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`string`}),` — строковый ввод.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`number`}),` — ввод числа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`boolean`}),` — переключатель (true/false).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`select`}),` — выпадающий список (требует заполнения `,(0,c.jsx)(t.code,{children:`options`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`array`}),` — ввод массива значений.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`object`}),` — редактор JSON-объектов.`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`storybookcategory`,children:(0,c.jsx)(t.code,{children:`StorybookCategory`})}),`
`,(0,c.jsx)(t.p,{children:`Используется для группировки свойств в логические блоки:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actions`}),` (`,(0,c.jsx)(t.code,{children:`'Actions'`}),`) — действия и события.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`adaptive`}),` (`,(0,c.jsx)(t.code,{children:`'Adaptive'`}),`) — параметры адаптивности и адаптивного выравнивания.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`aria`}),` (`,(0,c.jsx)(t.code,{children:`'ARIA'`}),`) — атрибуты доступности (ARIA).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`arrow`}),` (`,(0,c.jsx)(t.code,{children:`'Arrow'`}),`) — параметры стрелок и индикаторов направления.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`attributes`}),` (`,(0,c.jsx)(t.code,{children:`'Attributes'`}),`) — HTML-атрибуты и системные свойства.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`bars`}),` (`,(0,c.jsx)(t.code,{children:`'Bars'`}),`) — параметры полос, панелей и индикаторов прогресса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`counter`}),` (`,(0,c.jsx)(t.code,{children:`'Counter'`}),`) — параметры счетчиков и бейджей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`form`}),` (`,(0,c.jsx)(t.code,{children:`'Form'`}),`) — свойства формы и элементов ввода.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hook`}),` (`,(0,c.jsx)(t.code,{children:`'Hook'`}),`) — параметры хуков и composable-функций.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon`}),` (`,(0,c.jsx)(t.code,{children:`'Icon'`}),`) — параметры иконок.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`information`}),` (`,(0,c.jsx)(t.code,{children:`'Information'`}),`) — информационные свойства и подсказки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mask`}),` (`,(0,c.jsx)(t.code,{children:`'Mask'`}),`) — параметры масок ввода.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`option`}),` (`,(0,c.jsx)(t.code,{children:`'Options'`}),`) — опции и списки выбора.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search`}),` (`,(0,c.jsx)(t.code,{children:`'Search'`}),`) — параметры поиска и фильтрации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sort`}),` (`,(0,c.jsx)(t.code,{children:`'Sort'`}),`) — параметры сортировки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`status`}),` (`,(0,c.jsx)(t.code,{children:`'Status'`}),`) — состояния компонента (загрузка, ошибка, активность и др.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style`}),` (`,(0,c.jsx)(t.code,{children:`'Styles'`}),`) — параметры внешнего вида и стилей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`technical`}),` (`,(0,c.jsx)(t.code,{children:`'Technical'`}),`) — технические и внутренние настройки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text`}),` (`,(0,c.jsx)(t.code,{children:`'Text'`}),`) — текстовые параметры и типографика.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value`}),` (`,(0,c.jsx)(t.code,{children:`'Values'`}),`) — основные значения компонента.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};