import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/Formatters - Data Formatting Utility`}),`
`,(0,c.jsx)(n.h1,{id:`formatters-class`,children:`Formatters Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A specialized class for formatting lists of data based on provided configuration. It acts as a bridge between raw data and localized, human-readable strings, leveraging the `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` singleton for consistent formatting across different locales.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Declarative Configuration`}),` — Define formatting rules once and apply them to an entire dataset.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Support for Multiple Types`}),` — Built-in support for currency, dates, names, numbers, plurals, and units.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Custom Transformations`}),` — Ability to provide custom functions for unique formatting needs.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type Safety`}),` — Full TypeScript support for items, options, and resulting formatted lists.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automatic Key Generation`}),` — Automatically adds formatted values to items with a `,(0,c.jsx)(n.code,{children:`Format`}),` suffix (e.g., `,(0,c.jsx)(n.code,{children:`price`}),` becomes `,(0,c.jsx)(n.code,{children:`priceFormat`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`Formatters(options, list)`}),` constructor.`]}),`
`,(0,c.jsx)(n.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Options extends FormattersOptionsList`}),` — type of formatting options.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`List extends FormattersList<FormattersListItem> | FormattersListItem`}),` — type of the input data (array or single item).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Item extends (List extends any[] ? List[number] : List)`}),` — type of a single item in the list.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: Options`}),` — formatting options for each column/property.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list?: List`}),` — initial list of data to format.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Formatters } from '@dxtmisha/functional-basic'

// 1. Define formatting options
const options = {
  price: { 
    type: 'currency', 
    options: { currencyPropName: 'currency' } 
  },
  created: { 
    type: 'date', 
    options: { type: 'datetime' } 
  },
  user: {
    type: 'name',
    options: { lastPropName: 'surname', firstPropName: 'name' }
  },
  weight: { 
    type: 'unit', 
    options: { unit: 'kilogram' } 
  },
  count: { 
    type: 'plural', 
    options: { words: 'apple|apples' } 
  },
  status: {
    transformation: (value: number) => value === 1 ? 'Active' : 'Inactive'
  }
}

// 2. Initial data (can be an array or a single object)
const data = [
  {
    price: 100,
    currency: 'USD',
    created: '2024-03-07T12:00:00',
    name: 'John',
    surname: 'Doe',
    weight: 75,
    count: 5,
    status: 1
  }
]

// 3. Initialization
const formatter = new Formatters(options, data)
`})}),`
`,(0,c.jsx)(n.h2,{id:`processing-data`,children:`Processing Data`}),`
`,(0,c.jsx)(n.h3,{id:`to`,children:(0,c.jsx)(n.code,{children:`to`})}),`
`,(0,c.jsx)(n.p,{children:`Processes the data and returns the result. If the input was an array, it returns a new array of enriched items. If the input was a single item, it returns that single enriched item.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`FormattersListColumns<Item, Options> | FormattersListColumnItem<Item, Options>`}),` — enriched data with additional `,(0,c.jsx)(n.code,{children:`*Format`}),` properties.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const result = formatter.to()
/*
Result (if array): [
  { 
    id: 101, 
    price: 100, 
    currency: 'USD', 
    priceFormat: '$100.00', 
    status: 1, 
    statusFormat: 'Active',
    ... 
  }
]

Result (if single item): { 
  price: 100, 
  priceFormat: '$100.00', 
  ... 
}
*/
`})}),`
`,(0,c.jsx)(n.h2,{id:`retrieval-and-data-management`,children:`Retrieval and Data Management`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Checks if the list/item is set.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isArray(): boolean`}),` — Checks if the current data is an array.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`length(): number`}),` — Returns the count of records in the list.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): Item[]`}),` — Returns the current list of data as an array.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOptions(): Options`}),` — Returns the current formatting configuration mapping.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setList(list?: List): this`}),` — Updates the data and returns the instance for chaining.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`configuration-structure`,children:`Configuration Structure`}),`
`,(0,c.jsxs)(n.p,{children:[`The configuration object passed to the constructor is a map where each key corresponds to a property name in your data. Each value must follow the `,(0,c.jsx)(n.code,{children:`FormattersOptionsItem`}),` structure.`]}),`
`,(0,c.jsx)(n.h3,{id:`main-item-structure`,children:`Main Item Structure`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`{
  // 1. Specify the formatting type
  type: 'currency' | 'date' | 'name' | 'number' | 'plural' | 'unit',

  // 2. Pass type-specific parameters here
  options: { ... },

  // 3. Or use a custom function (overrides type-specific logic)
  transformation: (value, item, options) => string
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`specific-parameters`,children:`Specific Parameters`}),`
`,(0,c.jsxs)(n.p,{children:[`Below are the parameters available within the `,(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`options`})}),` property for each type.`]}),`
`,(0,c.jsxs)(n.h3,{id:`currency-currency`,children:[`Currency (`,(0,c.jsx)(n.code,{children:`currency`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`currencyPropName?: string`}),` — Property in the item containing the currency code (defaults to `,(0,c.jsx)(n.code,{children:`item.currency`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: string | Intl.NumberFormatOptions`}),` — Fixed currency code or full `,(0,c.jsx)(n.code,{children:`Intl`}),` options.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`numberOnly?: boolean`}),` — If `,(0,c.jsx)(n.code,{children:`true`}),`, returns only the formatted number without the symbol.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`date-date`,children:[`Date (`,(0,c.jsx)(n.code,{children:`date`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: GeoDate`}),` — Preset type: `,(0,c.jsx)(n.code,{children:`full`}),`, `,(0,c.jsx)(n.code,{children:`datetime`}),`, `,(0,c.jsx)(n.code,{children:`date`}),`, `,(0,c.jsx)(n.code,{children:`year-month`}),`, `,(0,c.jsx)(n.code,{children:`year`}),`, `,(0,c.jsx)(n.code,{children:`month`}),`, `,(0,c.jsx)(n.code,{children:`day`}),`, `,(0,c.jsx)(n.code,{children:`day-month`}),`, `,(0,c.jsx)(n.code,{children:`time`}),`, `,(0,c.jsx)(n.code,{children:`hour-minute`}),`, `,(0,c.jsx)(n.code,{children:`hour`}),`, `,(0,c.jsx)(n.code,{children:`minute`}),`, `,(0,c.jsx)(n.code,{children:`second`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions`}),` — Additional `,(0,c.jsx)(n.code,{children:`Intl`}),` date options or month style.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hour24?: boolean`}),` — Forces 24-hour format if `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`name-name`,children:[`Name (`,(0,c.jsx)(n.code,{children:`name`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastPropName?: string`}),` — Field for last name (default: `,(0,c.jsx)(n.code,{children:`lastName`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`firstPropName?: string`}),` — Field for first name (default: `,(0,c.jsx)(n.code,{children:`firstName`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`surname?: string`}),` — Field for surname (default: `,(0,c.jsx)(n.code,{children:`surname`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`short?: boolean`}),` — Whether to use short format (initials).`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`number-number`,children:[`Number (`,(0,c.jsx)(n.code,{children:`number`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — Standard `,(0,c.jsx)(n.code,{children:`Intl`}),` number options.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`plural-plural`,children:[`Plural (`,(0,c.jsx)(n.code,{children:`plural`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`words: string`}),` — Word forms separated by `,(0,c.jsx)(n.code,{children:`|`}),` (e.g., `,(0,c.jsx)(n.code,{children:`"apple|apples"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.PluralRulesOptions`}),` — Plural rule settings.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`optionsNumber?: Intl.NumberFormatOptions`}),` — Formatting for the number itself.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`unit-unit`,children:[`Unit (`,(0,c.jsx)(n.code,{children:`unit`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unit: string | Intl.NumberFormatOptions`}),` — The unit to display (e.g., `,(0,c.jsx)(n.code,{children:`'kilometer'`}),`, `,(0,c.jsx)(n.code,{children:`'kilogram'`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};