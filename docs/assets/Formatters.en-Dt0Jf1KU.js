import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/Formatters - Data Formatting Utility`}),`
`,(0,c.jsx)(n.h1,{id:`formatters-class`,children:`Formatters Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A specialized class for formatting data lists based on a provided configuration. It serves as a bridge between raw data and localized, human-readable strings, utilizing the `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` singleton for consistent formatting across different locales.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Declarative Configuration`}),` — Define formatting rules once and apply them to the entire dataset.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Support for Multiple Types`}),` — Built-in support for currencies, dates, names, numbers, plurals, and units.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Custom Transformations`}),` — The ability to provide your own functions for unique formatting needs.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Typing`}),` — Full TypeScript support for items, parameters, and resulting formatted lists.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automatic Key Generation`}),` — Automatically adds formatted values to items with the `,(0,c.jsx)(n.code,{children:`Format`}),` suffix (e.g., `,(0,c.jsx)(n.code,{children:`price`}),` becomes `,(0,c.jsx)(n.code,{children:`priceFormat`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the constructor `,(0,c.jsx)(n.code,{children:`Formatters(options, list)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Options extends FormattersOptionsList`}),` — type of formatting parameters.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`List extends FormattersListProp`}),` — type of input data (array or single item).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Item extends FormattersItemProp<List>`}),` — type of a single item in the list.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: Options`}),` — formatting parameters for each column/property.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list?: List`}),` — initial data list for formatting.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Formatters } from '@dxtmisha/functional-basic'

// 1. Defining formatting parameters
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
  }
}

// 2. Raw data
const data = [
  {
    price: 100,
    currency: 'USD',
    created: '2024-03-07T12:00:00',
    name: 'John',
    surname: 'Doe'
  }
]

// 3. Initialization
const formatter = new Formatters(options, data)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`processing`,children:`Processing`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`to(): FormattersReturn<List, Options>`}),` — Processes the data and returns the result. If the input was an array, returns a new array of enriched items. If it was a single item — a single object. Adds properties with the `,(0,c.jsx)(n.code,{children:`Format`}),` suffix.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setList(list?: List): this`}),` — Updates the data for formatting. Supports chaining.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`information`,children:`Information`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Checks if data is set for processing.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isArray(): boolean`}),` — Whether the current data is an array.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`length(): number`}),` — Returns the count of records in the list.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): FormattersList<Item>`}),` — Returns the current list as an array.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOptions(): Options`}),` — Returns the current formatting configuration.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`formatting-types-and-parameters`,children:`Formatting Types and Parameters`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`FormattersOptionsList`}),` configuration is a dictionary where keys correspond to property names in the data (dot notation `,(0,c.jsx)(n.code,{children:`path.to.prop`}),` is supported), and values are `,(0,c.jsx)(n.code,{children:`FormattersOptionsItem`}),` objects.`]}),`
`,(0,c.jsxs)(n.h3,{id:`general-structure-of-formattersoptionsitem`,children:[`General Structure of `,(0,c.jsx)(n.code,{children:`FormattersOptionsItem`})]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: FormattersType`}),` — Formatter type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (value, item, options) => string`}),` — Custom transformation function.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Options`}),` — Parameter object, the structure of which depends on the selected `,(0,c.jsx)(n.code,{children:`type`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`detailed-type-description`,children:`Detailed Type Description`}),`
`,(0,c.jsxs)(n.h4,{id:`1-currency-currency`,children:[`1. Currency (`,(0,c.jsx)(n.code,{children:`currency`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Used for localized display of monetary values.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`currencyPropName?: string`}),` — Property name in the item from which the currency code is taken (default is `,(0,c.jsx)(n.code,{children:`currency`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: string | Intl.NumberFormatOptions`}),` — You can pass a fixed code (e.g., `,(0,c.jsx)(n.code,{children:`'USD'`}),`) or an `,(0,c.jsx)(n.code,{children:`Intl.NumberFormat`}),` settings object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`numberOnly?: boolean`}),` — If `,(0,c.jsx)(n.code,{children:`true`}),`, returns only the formatted number without the currency symbol.`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`2-date-date`,children:[`2. Date (`,(0,c.jsx)(n.code,{children:`date`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Formatting dates and times via `,(0,c.jsx)(n.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: GeoDate`}),` — Preset format:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`full`}),` — Full date and time.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`datetime`}),` — Date and time (without seconds).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date`}),` — Date only.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`time`}),` — Time only.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`year-month`}),`, `,(0,c.jsx)(n.code,{children:`year`}),`, `,(0,c.jsx)(n.code,{children:`month`}),`, `,(0,c.jsx)(n.code,{children:`day`}),`, `,(0,c.jsx)(n.code,{children:`day-month`}),`, `,(0,c.jsx)(n.code,{children:`hour-minute`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.DateTimeFormatOptions`}),` — Standard `,(0,c.jsx)(n.code,{children:`Intl`}),` parameters (e.g., `,(0,c.jsx)(n.code,{children:`month: 'long'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hour24?: boolean`}),` — If `,(0,c.jsx)(n.code,{children:`true`}),`, forces 24-hour mode.`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`3-name-name`,children:[`3. Name (`,(0,c.jsx)(n.code,{children:`name`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Combines full name parts in the correct order.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastPropName?: string`}),` — Field for the last name (default is `,(0,c.jsx)(n.code,{children:`lastName`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`firstPropName?: string`}),` — Field for the first name (default is `,(0,c.jsx)(n.code,{children:`firstName`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`surname?: string`}),` — Field for the middle name/surname (default is `,(0,c.jsx)(n.code,{children:`surname`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`short?: boolean`}),` — If `,(0,c.jsx)(n.code,{children:`true`}),`, outputs the last name and initials (e.g., "Doe J.").`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`4-number-number`,children:[`4. Number (`,(0,c.jsx)(n.code,{children:`number`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Standard number formatting with digit separation.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — `,(0,c.jsx)(n.code,{children:`Intl`}),` parameters (number of decimal places, style, etc.).`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`5-plural-plural`,children:[`5. Plural (`,(0,c.jsx)(n.code,{children:`plural`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Choosing the correct word form depending on the number.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`words: string`}),` — Word forms via the `,(0,c.jsx)(n.code,{children:`|`}),` separator.`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`For English: `,(0,c.jsx)(n.code,{children:`"apple|apples"`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`For Russian: `,(0,c.jsx)(n.code,{children:`"яблоко|яблока|яблок"`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.PluralRulesOptions`}),` — Pluralization rule settings.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`optionsNumber?: Intl.NumberFormatOptions`}),` — Settings for formatting the number itself that is output before the word.`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`6-unit-unit`,children:[`6. Unit (`,(0,c.jsx)(n.code,{children:`unit`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Adding units of measurement (km, kg, l).`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unit: string`}),` — Unit of measurement code (e.g., `,(0,c.jsx)(n.code,{children:`'kilometer'`}),`, `,(0,c.jsx)(n.code,{children:`'kilogram'`}),`, `,(0,c.jsx)(n.code,{children:`'liter'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — Formatting parameters for the numeric part.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`using-dot-notation`,children:`Using Dot Notation`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const options = {
  'user.profile.age': { type: 'number' }
}
const data = { user: { profile: { age: 25 } } }
const formatter = new Formatters(options, data)

const result = formatter.to()
// result.userProfileAgeFormat === "25"
`})}),`
`,(0,c.jsx)(n.h3,{id:`custom-transformation`,children:`Custom Transformation`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const options = {
  status: {
    // Custom function takes precedence over type
    transformation: (value, item) => {
       return value === 'active' ? \`✅ \${item.name} is online\` : '❌ Offline'
    }
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};