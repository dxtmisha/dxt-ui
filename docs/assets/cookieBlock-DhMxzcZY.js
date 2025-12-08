import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Zkkrlp1B.js";import{M as t}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function s(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/functional/ru/Classes/CookieBlock"}),`
`,n.jsx(e.h1,{id:"класс-cookieblock",children:"Класс CookieBlock"}),`
`,n.jsx(e.p,{children:"Статический класс для управления статусом доступа к cookie и соблюдения приватности. Предоставляет простой интерфейс для блокировки или разрешения cookie во всём приложении, интегрируясь с классом Cookie для обеспечения соответствия требованиям приватности как GDPR."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Глобальный контроль cookie"})," — централизованный контроль использования cookie во всём приложении"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Соблюдение приватности"})," — помогает реализовать GDPR, CCPA и другие регулирования приватности"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Постоянные настройки"})," — использует DataStorage для запоминания пользовательских настроек cookie"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция с классом Cookie"})," — класс Cookie автоматически учитывает настройки CookieBlock"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Простой API"})," — всего два метода для получения и установки статуса блокировки cookie"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Совместимость с браузерами"})," — безопасно работает во всех средах"]}),`
`]}),`
`,n.jsx(e.h2,{id:"основное-использование",children:"Основное использование"}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Получает текущий статус блокировки cookie."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"boolean"})," — true если cookie заблокированы, false если разрешены"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { CookieBlock } from '@dxtmisha/functional'

// Проверить, заблокированы ли cookie в данный момент
const isBlocked = CookieBlock.get()
console.log('Cookie заблокированы:', isBlocked) // false по умолчанию

if (isBlocked) {
  console.log('Cookie заблокированы пользовательскими настройками')
} else {
  console.log('Cookie разрешены')
}
`})}),`
`,n.jsx(e.h3,{id:"set",children:n.jsx(e.code,{children:"set"})}),`
`,n.jsx(e.p,{children:"Устанавливает статус блокировки cookie и сохраняет настройку."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: boolean"})," — true для блокировки cookie, false для разрешения"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Заблокировать все cookie
CookieBlock.set(true)
console.log('Cookie заблокированы:', CookieBlock.get()) // true

// Разрешить cookie
CookieBlock.set(false)
console.log('Cookie разрешены:', CookieBlock.get()) // false

// Настройка сохраняется между сессиями браузера
// Пользовательские предпочтения сохраняются в localStorage
`})}),`
`,n.jsx(e.h2,{id:"интеграция-с-классом-cookie",children:"Интеграция с классом Cookie"}),`
`,n.jsx(e.p,{children:"Класс CookieBlock автоматически предотвращает операции Cookie когда блокировка включена:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Cookie, CookieBlock } from '@dxtmisha/functional'

// Создать экземпляр cookie
const userPrefs = new Cookie('user-preferences')

// Изначально cookie разрешены
CookieBlock.set(false)
userPrefs.set({ theme: 'dark', language: 'ru' })
console.log('Сохранённые настройки:', userPrefs.get()) // { theme: 'dark', language: 'ru' }

// Заблокировать cookie
CookieBlock.set(true)

// Операции Cookie теперь предотвращены
userPrefs.set({ theme: 'light', language: 'en' }) // Это фактически не установит cookie
console.log('Настройки после блокировки:', userPrefs.get()) // Всё ещё { theme: 'dark', language: 'ru' }

// Разрешить cookie снова
CookieBlock.set(false)
userPrefs.set({ theme: 'light', language: 'en' }) // Теперь это работает
console.log('Обновлённые настройки:', userPrefs.get()) // { theme: 'light', language: 'en' }
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"согласие-на-cookie-по-gdpr",children:"Согласие на cookie по GDPR"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class CookieConsent {
  constructor() {
    this.consentCookie = new Cookie('cookie-consent')
  }

  showConsentBanner() {
    const consent = this.consentCookie.get()

    if (consent === undefined) {
      CookieBlock.set(true) // Блокировать до согласия
      this.displayBanner()
      return 'banner-shown'
    } else {
      CookieBlock.set(!consent.accepted)
      return consent.accepted ? 'cookies-allowed' : 'cookies-blocked'
    }
  }

  acceptCookies() {
    this.consentCookie.set({
      accepted: true,
      timestamp: Date.now()
    }, { age: 365 * 24 * 60 * 60 })

    CookieBlock.set(false)
    this.hideBanner()
  }

  rejectCookies() {
    this.consentCookie.set({
      accepted: false,
      timestamp: Date.now()
    }, { age: 365 * 24 * 60 * 60 })

    CookieBlock.set(true)
    this.hideBanner()
  }
}

// Использование
const consent = new CookieConsent()
const status = consent.showConsentBanner()
`})}),`
`,n.jsx(e.h3,{id:"управление-настройками-приватности",children:"Управление настройками приватности"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class PrivacyManager {
  constructor() {
    this.privacySettings = new Cookie('privacy-settings')
  }

  updatePrivacySettings(settings) {
    this.privacySettings.set(settings, { age: 365 * 24 * 60 * 60 })

    const shouldBlock = !(settings.functional || settings.analytics || settings.marketing)
    CookieBlock.set(shouldBlock)
  }

  hasConsentFor(category) {
    const settings = this.privacySettings.get({ essential: true })
    return settings[category] || false
  }

  acceptAll() {
    this.updatePrivacySettings({
      essential: true,
      functional: true,
      analytics: true,
      marketing: true
    })
  }

  rejectAll() {
    this.updatePrivacySettings({
      essential: true,
      functional: false,
      analytics: false,
      marketing: false
    })
  }
}

// Использование
const privacy = new PrivacyManager()
privacy.acceptAll()
console.log('Аналитика разрешена:', privacy.hasConsentFor('analytics'))
`})}),`
`,n.jsx(e.h3,{id:"инициализация-приложения",children:"Инициализация приложения"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class AppInitializer {
  static initializeCookieCompliance() {
    const consent = new Cookie('cookie-consent')
    const consentData = consent.get()

    if (!consentData) {
      CookieBlock.set(true) // Первый визит
      return 'pending-consent'
    } else {
      CookieBlock.set(!consentData.accepted)
      return consentData.accepted ? 'cookies-allowed' : 'cookies-blocked'
    }
  }
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', () => {
  const status = AppInitializer.initializeCookieCompliance()
  console.log('Cookie статус:', status)
})
`})}),`
`,n.jsx(e.p,{children:"Класс CookieBlock помогает обеспечить соответствие с GDPR, CCPA и другими законами о приватности, предоставляя основу для реализации управления cookie."})]})}function h(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{h as default};
