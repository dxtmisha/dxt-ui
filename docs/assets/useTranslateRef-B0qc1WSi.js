import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-Dqnce8mp.js";import{M as l}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function t(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/functional/ru/Composables/useTranslateRef"}),`
`,n.jsx(e.h1,{id:"композабл-usetranslateref",children:"Композабл useTranslateRef"}),`
`,n.jsx(e.p,{children:"Композабл для получения переведённых текстов по массиву ключей или строке с ключом. Предоставляет реактивную переменную, которая автоматически обновляется при изменении языка приложения. Поддерживает динамическую подгрузку переводов с сервера и шаблонизацию текстов с подстановкой значений."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Реактивные переводы"})," — автоматическое обновление при смене языка"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Массовая загрузка"})," — получение нескольких переводов за один раз"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Динамическая подгрузка"})," — автоматическая загрузка отсутствующих переводов с сервера"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Шаблонизация"})," — подстановка значений в текст перевода"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Синхронный fallback"})," — мгновенный возврат ключа до загрузки перевода"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Типобезопасность"})," — полная поддержка TypeScript с автоматическим выводом типов"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Оптимизация запросов"})," — батчинг запросов к серверу (160ms таймаут)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция с Geo"})," — автоматическое определение языка из геолокации"]}),`
`]}),`
`,n.jsx(e.h2,{id:"функция",children:"Функция"}),`
`,n.jsx(e.h3,{id:"usetranslateref",children:n.jsx(e.code,{children:"useTranslateRef"})}),`
`,n.jsx(e.p,{children:"Создаёт реактивную переменную с переводами по массиву ключей."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"names: (string | string[])[]"})," — массив ключей переводов или массивов с ключом и параметрами для шаблона"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ShallowRef<TranslateList<T>>"})," — реактивный объект с переводами"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useTranslateRef } from '@dxtmisha/functional'

// Простой перевод
const texts = useTranslateRef(['hello', 'goodbye', 'welcome'])
console.log(texts.value.hello) // 'Привет'
console.log(texts.value.goodbye) // 'До свидания'

// С шаблонизацией
const messages = useTranslateRef([
  ['greeting', 'Иван'],
  ['count', '5']
])
console.log(messages.value.greeting) // 'Привет, Иван!'
console.log(messages.value.count) // 'Найдено: 5 элементов'
`})}),`
`,n.jsxs(e.h3,{id:"t-алиас",children:[n.jsx(e.code,{children:"t"})," (алиас)"]}),`
`,n.jsxs(e.p,{children:["Короткий алиас для ",n.jsx(e.code,{children:"useTranslateRef"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"names: string[]"})," — массив ключей переводов"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"ShallowRef<TranslateList<T>>"})," — реактивный объект с переводами"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { t } from '@dxtmisha/functional'

// Короткая запись
const texts = t(['save', 'cancel', 'delete'])
console.log(texts.value.save) // 'Сохранить'
`})}),`
`,n.jsx(e.h2,{id:"основное-использование",children:"Основное использование"}),`
`,n.jsx(e.h3,{id:"базовый-перевод",children:"Базовый перевод"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useTranslateRef } from '@dxtmisha/functional'

// Получение нескольких переводов
const translations = useTranslateRef([
  'button.save',
  'button.cancel',
  'message.success'
])

// Доступ к переводам
console.log(translations.value['button.save']) // 'Сохранить'
console.log(translations.value['button.cancel']) // 'Отмена'
console.log(translations.value['message.success']) // 'Успешно!'

// Автоматическое обновление при смене языка
// Geo.setLocation('en-US')
// translations.value['button.save'] === 'Save'
`})}),`
`,n.jsxs(e.h3,{id:"использование-алиаса-t",children:["Использование алиаса ",n.jsx(e.code,{children:"t"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { t } from '@dxtmisha/functional'

// Короткая запись для переводов
const texts = t(['home', 'about', 'contact'])

console.log(texts.value.home) // 'Главная'
console.log(texts.value.about) // 'О нас'
console.log(texts.value.contact) // 'Контакты'
`})}),`
`,n.jsx(e.h2,{id:"использование-в-компонентах",children:"Использование в компонентах"}),`
`,n.jsx(e.h3,{id:"базовая-форма",children:"Базовая форма"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useTranslateRef } from '@dxtmisha/functional'

export default {
  setup() {
    const t = useTranslateRef([
      'form.name',
      'form.email',
      'form.submit',
      'form.reset'
    ])

    return { t }
  }
}

// Template:
// <form>
//   <input :placeholder="t['form.name']" />
//   <input :placeholder="t['form.email']" />
//   <button>{{ t['form.submit'] }}</button>
//   <button type="reset">{{ t['form.reset'] }}</button>
// </form>
`})}),`
`,n.jsx(e.h3,{id:"навигационное-меню",children:"Навигационное меню"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { t } from '@dxtmisha/functional'

export default {
  setup() {
    const menu = t([
      'menu.home',
      'menu.products',
      'menu.services',
      'menu.contact'
    ])

    return { menu }
  }
}

// Template:
// <nav>
//   <a href="/">{{ menu['menu.home'] }}</a>
//   <a href="/products">{{ menu['menu.products'] }}</a>
//   <a href="/services">{{ menu['menu.services'] }}</a>
//   <a href="/contact">{{ menu['menu.contact'] }}</a>
// </nav>
`})}),`
`,n.jsx(e.h2,{id:"шаблонизация-текстов",children:"Шаблонизация текстов"}),`
`,n.jsx(e.h3,{id:"подстановка-значений",children:"Подстановка значений"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useTranslateRef } from '@dxtmisha/functional'

// Переводы с параметрами
// Файл переводов: { "greeting": "Привет, {0}!", "items": "Найдено {0} из {1}" }
const messages = useTranslateRef([
  ['greeting', 'Иван'],
  ['items', '5', '10']
])

console.log(messages.value.greeting) // 'Привет, Иван!'
console.log(messages.value.items) // 'Найдено 5 из 10'
`})}),`
`,n.jsx(e.h3,{id:"динамические-параметры",children:"Динамические параметры"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { ref, computed } from 'vue'
import { useTranslateRef } from '@dxtmisha/functional'

export default {
  setup() {
    const userName = ref('Иван')
    const count = ref(5)

    // Базовые переводы
    const t = useTranslateRef(['welcome', 'total'])

    // Динамическая подстановка в шаблоне
    const welcomeMessage = computed(() =>
      t.value.welcome.replace('{0}', userName.value)
    )

    const totalMessage = computed(() =>
      t.value.total.replace('{0}', count.value)
    )

    return { welcomeMessage, totalMessage }
  }
}
`})}),`
`,n.jsx(e.h2,{id:"автоматическое-обновление-при-смене-языка",children:"Автоматическое обновление при смене языка"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { watch } from 'vue'
import { useTranslateRef } from '@dxtmisha/functional'
import { Geo } from '@dxtmisha/functional'

// Переводы автоматически обновляются при смене языка
const texts = useTranslateRef(['title', 'description'])

console.log(texts.value.title) // 'Заголовок' (ru-RU)

// Смена языка
Geo.setLocation('en-US')

// texts.value автоматически обновится
// texts.value.title === 'Title'

// Можно отслеживать изменения
watch(() => texts.value, (newTranslations) => {
  console.log('Переводы обновлены:', newTranslations)
})
`})}),`
`,n.jsx(e.h2,{id:"интеграция-с-классом-translate",children:"Интеграция с классом Translate"}),`
`,n.jsxs(e.p,{children:["Композабл использует класс ",n.jsx(e.code,{children:"Translate"})," для управления переводами:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Translate } from '@dxtmisha/functional'

// Установка URL для загрузки переводов
Translate.setUrl('/api/translations')

// Установка имени параметра запроса
Translate.setPropsName('keys')

// Добавление переводов вручную (для SSR или тестов)
Translate.addSync({
  'button.save': 'Сохранить',
  'button.cancel': 'Отмена'
})

// Получение одного перевода
const text = await Translate.get('button.save')
console.log(text) // 'Сохранить'

// Синхронное получение
const syncText = Translate.getSync('button.save')
console.log(syncText) // 'Сохранить'
`})}),`
`,n.jsx(e.h2,{id:"примеры-использования",children:"Примеры использования"}),`
`,n.jsx(e.h3,{id:"таблица-данных",children:"Таблица данных"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const table = useTranslateRef([
  'table.name',
  'table.email',
  'table.status',
  'table.actions'
])

// В шаблоне:
// <thead>
//   <th>{{ table['table.name'] }}</th>
//   <th>{{ table['table.email'] }}</th>
//   <th>{{ table['table.status'] }}</th>
//   <th>{{ table['table.actions'] }}</th>
// </thead>
`})}),`
`,n.jsx(e.h3,{id:"сообщения-валидации",children:"Сообщения валидации"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const validation = useTranslateRef([
  'validation.required',
  'validation.email',
  'validation.minLength',
  'validation.maxLength'
])

const validateField = (value) => {
  if (!value) return validation.value['validation.required']
  if (value.length < 3) return validation.value['validation.minLength']
  return null
}
`})}),`
`,n.jsx(e.h3,{id:"динамический-контент",children:"Динамический контент"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { computed } from 'vue'

const status = ref('pending')
const messages = useTranslateRef([
  'status.pending',
  'status.approved',
  'status.rejected'
])

const statusText = computed(() =>
  messages.value[\`status.\${status.value}\`]
)

console.log(statusText.value) // 'Ожидает' (когда status = 'pending')
`})})]})}function h(s={}){const{wrapper:e}={...a(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{h as default};
