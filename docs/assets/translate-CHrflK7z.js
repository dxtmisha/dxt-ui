import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-DB_maGql.js";import{M as r}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/functional/ru/Classes/Translate"}),`
`,n.jsx(e.h1,{id:"класс-translate",children:"Класс Translate"}),`
`,n.jsx(e.p,{children:"Статический класс для управления переводами и локализованным текстом. Предоставляет методы для получения, кеширования и отображения переведённого контента с поддержкой замены шаблонов и автоматическим определением локали."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Получение переводов"})," — извлекает переводы с серверного API"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Кеширование текста"})," — интеллектуальная система кеширования с пакетными запросами"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Замена шаблонов"})," — поддержка замены плейсхолдеров в переводах"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Учёт локали"})," — автоматически использует текущую географическую локаль"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Пакетная обработка"})," — группирует множественные запросы переводов для эффективности"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Синхронный и асинхронный режимы"})," — как синхронное, так и асинхронное получение текста"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Операции со списками"})," — получение нескольких переводов одним вызовом"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Динамическая загрузка"})," — загружает переводы по требованию"]}),`
`]}),`
`,n.jsx(e.h2,{id:"базовое-использование",children:"Базовое использование"}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Асинхронно получает текст перевода по коду с опциональной заменой шаблона."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — код перевода"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"replacement?: string[] | Record<string, string | number>"})," — значения для замены шаблона (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Promise<string>"})," — переведённый текст"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Translate } from '@dxtmisha/functional'

// Базовый перевод
const text = await Translate.get('welcome.message')
// Возвращает: "Добро пожаловать в наше приложение"

// С заменой массивом
const greeting = await Translate.get('hello.user', ['Иван'])
// Шаблон: "Привет, [0]!" → Результат: "Привет, Иван!"

// С заменой объектом
const message = await Translate.get('items.count', { count: 5, type: 'товаров' })
// Шаблон: "У вас [count] [type]" → Результат: "У вас 5 товаров"
`})}),`
`,n.jsx(e.h3,{id:"getsync",children:n.jsx(e.code,{children:"getSync"})}),`
`,n.jsx(e.p,{children:"Синхронно получает текст перевода (возвращает из кеша или запасной вариант)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — код перевода"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"first?: boolean"})," — если false, возвращает пустую строку когда текст не найден (по умолчанию: false)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"replacement?: string[] | Record<string, string | number>"})," — значения для замены шаблона (опционально)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — переведённый текст или запасной вариант"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Получить кешированный перевод
const text = Translate.getSync('button.save')
// Возвращает: "Сохранить" (из кеша) или "button.save" (запасной вариант)

// Вернуть пустую строку если не найдено
const empty = Translate.getSync('missing.key', false)
// Возвращает: "" если нет в кеше

// С заменой
const message = Translate.getSync('welcome.user', true, ['Алиса'])
// Возвращает: "Добро пожаловать, Алиса!" или запасной вариант
`})}),`
`,n.jsx(e.h2,{id:"пакетные-операции",children:"Пакетные операции"}),`
`,n.jsx(e.h3,{id:"getlist",children:n.jsx(e.code,{children:"getList"})}),`
`,n.jsx(e.p,{children:"Асинхронно получает несколько переводов как объект."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"names: TranslateCode[]"})," — массив кодов переводов или массивов [код, ...замены]"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Promise<TranslateList<T>>"})," — объект с парами код-текст"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Простой список
const texts = await Translate.getList(['save', 'cancel', 'submit'])
// Возвращает: { save: "Сохранить", cancel: "Отмена", submit: "Отправить" }

// С заменами
const messages = await Translate.getList([
  'welcome.user',
  ['items.count', '5', 'книг'],
  'goodbye.message'
])
// Возвращает объект с обработанными шаблонами
`})}),`
`,n.jsx(e.h3,{id:"getlistsync",children:n.jsx(e.code,{children:"getListSync"})}),`
`,n.jsx(e.p,{children:"Синхронно получает несколько переводов из кеша."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"names: TranslateCode[]"})," — массив кодов переводов"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"first?: boolean"})," — поведение запасного варианта когда текст не найден (по умолчанию: false)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"TranslateList<T>"})," — объект с парами код-текст"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Получить кешированные переводы
const texts = Translate.getListSync(['save', 'cancel', 'delete'])
// Возвращает: { save: "Сохранить", cancel: "Отмена", delete: "Удалить" }

// С поведением запасного варианта
const empty = Translate.getListSync(['missing.key'], false)
// Возвращает: { 'missing.key': '' }
`})}),`
`,n.jsx(e.h2,{id:"управление-данными",children:"Управление данными"}),`
`,n.jsx(e.h3,{id:"add",children:n.jsx(e.code,{children:"add"})}),`
`,n.jsx(e.p,{children:"Добавляет коды переводов в очередь загрузки для пакетного получения."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"names: string | string[]"})," — код(ы) перевода для загрузки"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Promise<void>"})," — разрешается когда переводы загружены"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Добавить один перевод
await Translate.add('new.message')

// Добавить несколько переводов
await Translate.add(['header.title', 'footer.copyright', 'menu.items'])

// Автоматическая пакетировка (запросы группируются в течение 160мс)
Translate.add('text1') // В очереди
Translate.add('text2') // В очереди
Translate.add('text3') // Все отправлены одним запросом
`})}),`
`,n.jsx(e.h3,{id:"addsync",children:n.jsx(e.code,{children:"addSync"})}),`
`,n.jsx(e.p,{children:"Напрямую добавляет переводы в кеш (для разработки/тестирования)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: Record<string, string>"})," — пары ключ-значение переводов"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Добавить переводы напрямую
Translate.addSync({
  'welcome.message': 'Добро пожаловать в наше приложение',
  'button.save': 'Сохранить изменения',
  'error.required': 'Это поле обязательно'
})

// Переводы доступны немедленно
const text = Translate.getSync('welcome.message') // "Добро пожаловать в наше приложение"
`})}),`
`,n.jsx(e.h3,{id:"addnormalorsync",children:n.jsx(e.code,{children:"addNormalOrSync"})}),`
`,n.jsx(e.p,{children:"Интеллектуально добавляет переводы в зависимости от окружения (вызов API vs прямое)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: Record<string, string>"})," — данные переводов"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Promise<void>"})," — разрешается когда добавлено"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Автоматически выбирает метод на основе Api.isLocalhost()
await Translate.addNormalOrSync({
  'app.title': 'Моё приложение',
  'nav.home': 'Главная',
  'nav.about': 'О нас'
})
// Разработка: добавляет напрямую в кеш
// Продакшен: ставит в очередь для API запроса
`})}),`
`,n.jsx(e.h2,{id:"конфигурация",children:"Конфигурация"}),`
`,n.jsx(e.h3,{id:"seturl",children:n.jsx(e.code,{children:"setUrl"})}),`
`,n.jsx(e.p,{children:"Изменяет API endpoint для запросов переводов."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"url: string"})," — путь к API endpoint"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Translate"})," — ссылка на класс для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Изменить endpoint API переводов
Translate.setUrl('/api/v2/translations')

// Цепочка вызовов
Translate.setUrl('/custom/translate').setPropsName('translations')
`})}),`
`,n.jsx(e.h3,{id:"setpropsname",children:n.jsx(e.code,{children:"setPropsName"})}),`
`,n.jsx(e.p,{children:"Изменяет имя параметра запроса для кодов переводов."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — имя параметра для API запросов"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Translate"})," — ссылка на класс для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Изменить имя параметра запроса
Translate.setPropsName('codes')

// API запрос будет использовать: { codes: ['text1', 'text2'] }
// Вместо по умолчанию: { list: ['text1', 'text2'] }
`})}),`
`,n.jsx(e.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(e.h3,{id:"базовая-настройка-переводов",children:"Базовая настройка переводов"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Translate } from '@dxtmisha/functional'

// Настроить endpoint переводов
Translate.setUrl('/api/translations')

// Загрузить начальные переводы
await Translate.add(['app.title', 'nav.menu', 'footer.copyright'])

// Использовать переводы
const title = await Translate.get('app.title')
document.title = title
`})}),`
`,n.jsx(e.h3,{id:"сообщения-валидации-формы",children:"Сообщения валидации формы"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Загрузить сообщения валидации
const validationTexts = await Translate.getList([
  'validation.required',
  'validation.email',
  ['validation.minLength', '8'], // С заменой
  'validation.password'
])

// Использовать в валидации
if (!email) {
  showError(validationTexts['validation.required'])
}
if (password.length < 8) {
  showError(validationTexts['validation.minLength']) // "Минимум 8 символов"
}
`})}),`
`,n.jsx(e.h3,{id:"динамическая-загрузка-контента",children:"Динамическая загрузка контента"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Инициализация компонента
class MyComponent {
  async loadTexts() {
    // Добавить нужные переводы в очередь
    await Translate.add([
      'component.title',
      'component.description',
      'button.action'
    ])

    // Обновить UI
    this.updateTexts()
  }

  updateTexts() {
    // Получить кешированные переводы немедленно
    this.title = Translate.getSync('component.title')
    this.description = Translate.getSync('component.description')
    this.buttonText = Translate.getSync('button.action')
  }
}
`})}),`
`,n.jsx(e.h3,{id:"примеры-замены-шаблонов",children:"Примеры замены шаблонов"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Замена на основе массива
const welcome = await Translate.get('welcome.user', ['Иван', 'Иванов'])
// Шаблон: "Добро пожаловать, [0] [1]!" → "Добро пожаловать, Иван Иванов!"

// Замена на основе объекта
const notification = await Translate.get('notification.message', {
  user: 'Алиса',
  count: 3,
  item: 'сообщения'
})
// Шаблон: "Привет [user], у вас [count] новых [item]"
// Результат: "Привет Алиса, у вас 3 новых сообщения"

// Сложный шаблон
const status = await Translate.get('order.status', {
  id: '#12345',
  status: 'отправлен',
  date: '15.01.2024'
})
// Шаблон: "Заказ [id] [status] [date]"
// Результат: "Заказ #12345 отправлен 15.01.2024"
`})})]})}function x(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
