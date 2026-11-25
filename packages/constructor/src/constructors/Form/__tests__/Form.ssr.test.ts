// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, inject, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { FORM_NAME_ELEMENT, type FormElementRegistration } from '../basicTypes'
import { Form } from '../Form'
import { FormDesign } from '../FormDesign'
import type { FormPropsBasic } from '../props'

describe('Form (SSR)', () => {
  const naming = new DesignName('d1.form')

  it('should initialize Form orchestrator and resolve bindings in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const scope = effectScope()
    const element = ref<HTMLFormElement>()
    const props = reactive<FormPropsBasic>({
      action: '/api/register',
      autocomplete: 'on',
      enctype: 'multipart/form-data',
      method: 'post',
      target: '_self'
    })

    scope.run(() => {
      const form = new Form(props, element, naming)

      expect(form.binds.action).toBe('/api/register')
      expect(form.binds.autocomplete).toBe('on')
      expect(form.binds.enctype).toBe('multipart/form-data')
      expect(form.binds.method).toBe('post')
      expect(form.binds.novalidate).toBe(true)
      expect(form.binds.target).toBe('_self')
      expect(form.getValues()).toEqual({})
      expect(form.checkValidity()).toBe(true)
      expect(() => form.submit()).not.toThrow()
    })

    scope.stop()
  })

  it('should render full FormDesign with slots and child provide/inject in SSR to valid HTML', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const SsrChildField = defineComponent({
      name: 'SsrChildField',
      setup() {
        const context = inject<FormElementRegistration | undefined>(FORM_NAME_ELEMENT, undefined)

        context?.register({
          id: 'ssr-email',
          name: 'email',
          value: ref('ssr@example.com'),
          getValue: () => 'ssr@example.com',
          setValue: () => {},
          clear: () => {},
          isChanged: () => false,
          checkValidity: () => true,
          getValidationMessage: () => ''
        })

        return () => h('input', { name: 'email', value: String(context?.getValue('email') ?? '') })
      }
    })

    const TestForm = defineComponent({
      setup() {
        const props: FormPropsBasic = {
          action: '/ssr-submit',
          method: 'post',
          value: { email: 'ssr@example.com' }
        }
        const design = new FormDesign('d1.form', props)
        const render = design.render()
        return () => h(render)
      }
    })

    const Root = defineComponent({
      setup() {
        return () => h(TestForm, null, {
          header: () => [h('header', 'SSR Header')],
          default: () => [h(SsrChildField)],
          footer: () => [h('footer', 'SSR Footer')]
        })
      }
    })

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const app = createSSRApp(Root)
    const html = await renderToString(app)

    expect(html).toContain('<form')
    expect(html).toContain('action="/ssr-submit"')
    expect(html).toContain('method="post"')
    expect(html).toContain('novalidate')
    expect(html).toContain('<header>SSR Header</header>')
    expect(html).toContain('value="ssr@example.com"')
    expect(html).toContain('<footer>SSR Footer</footer>')
  })

  it('should render native and controlled variants cleanly across isolated SSR requests', async () => {
    const variants: FormPropsBasic[] = [
      {},
      { native: true, action: '/native', method: 'get' },
      { modelValue: { username: 'user-a' } },
      { value: { username: 'user-b' }, native: true }
    ]

    for (const variantProps of variants) {
      const TestComponent = defineComponent({
        setup() {
          const design = new FormDesign('d1.form', variantProps)
          const render = design.render()
          return () => h(render)
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const app = createSSRApp(TestComponent)
      const html = await renderToString(app)

      expect(typeof html).toBe('string')
      expect(html).toContain('<form')
      expect(html).toContain('novalidate')
    }
  })
})
