import { a as e, i as t } from './preload-helper-Cv19cBWa.js'; import { a as n, d as r, l as i, m as a, n as o, t as s, u as c } from './wiki-CUC2UhNU.js'; import { n as l, t as u } from './D1Skeleton-atWhpGi3.js'; import { i as d, n as f, r as p, t as m } from './D1TableRecord-D0cvRJyo.js'; var h, g, _, v, y = t(() => { s(), d(), h = [{ name: `columns`, type: `string[]` }, { name: `disabled`, type: `boolean` }, { name: `index`, type: `string` }, { name: `isHeader`, type: `boolean` }, { name: `isSkeleton`, type: `boolean` }, { name: `item`, type: `Record<string, any>` }, { name: `selected`, type: `boolean` }, { name: `stickyLeft`, type: `string[]` }, { name: `stickyTop`, type: `boolean` }, { name: `tableItemAttrs`, type: `ConstrBind<TableItemProps>` }, { name: `tableItemColumnAttrs`, type: `Record<string, ConstrBind<TableItemProps>>` }], g = [], _ = [{ name: `sort`, description: `Event triggered when sort button is clicked / Событие, вызываемое при клике по кнопке сортировки`, properties: [{ name: `item`, type: `SortColumnItem` }] }], v = { component: `TableRecord`, props: h, slots: g, events: _, defaults: p, wikiDesign: o } }), b, x = t(() => { r(), i(), y(), b = new c(v.component, v.props, v.defaults, v.wikiDesign, n, a) }), S = e({ TableRecord: () => w, TableRecordIsHeader: () => T, TableRecordSkeleton: () => E, __namedExportsOrder: () => D, default: () => C }), C, w, T, E, D, O = t(() => {
  f(), x(), l(), C = { title: `Ui/TableRecord`, component: m, parameters: { design: `d1`, docs: { description: { component: b.getDescription() } } }, argTypes: b.getWiki(), args: b.getValues() }, w = { args: { disabled: !1, isHeader: !1, selected: !1, tableItemColumnAttrs: { name: { disabled: !0 } } }, render: e => ({ components: { D1TableRecord: m }, setup: () => ({ args: e }), template: `
      <table>
      <D1TableRecord v-bind="args" />
      <D1TableRecord v-bind="args" />
      <D1TableRecord v-bind="args" />
    </table>
    ` }) }, T = { name: `Строка заголовка`, render: () => ({ components: { D1TableRecord: m }, template: `
        <table style="border-collapse: collapse; width: 100%;">
          <thead>
            <D1TableRecord
              :isHeader="true"
              :columns="['id', 'name', 'role', 'status']"
              :item="{ id: 'ID', name: 'Имя', role: 'Должность', status: 'Статус' }"
            />
          </thead>
        </table>
    ` }) }, E = { name: `Загрузка скелетона`, render: () => ({ components: { D1TableRecord: m, D1Skeleton: u }, template: `
        <D1Skeleton :active="true">
          <table style="border-collapse: collapse; width: 100%;">
            <tbody>
              <D1TableRecord
                :isSkeleton="true"
                :columns="['id', 'name', 'role', 'status']"
                :item="{ id: '1', name: 'Misha', role: 'developer', status: 'active' }"
              />
            </tbody>
          </table>
        </D1Skeleton>
    ` }) }, w.parameters = { ...w.parameters, docs: { ...w.parameters?.docs, source: { originalSource: `{
  args: {
    disabled: false,
    isHeader: false,
    selected: false,
    tableItemColumnAttrs: {
      name: {
        disabled: true
      }
    }
  },
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1TableRecord
    },
    setup: () => ({
      args
    }),
    template: \`
      <table>
      <D1TableRecord v-bind="args" />
      <D1TableRecord v-bind="args" />
      <D1TableRecord v-bind="args" />
    </table>
    \`
  })
  // :story-main [!] System label / Системная метка
}`, ...w.parameters?.docs?.source } } }, T.parameters = { ...T.parameters, docs: { ...T.parameters?.docs, source: { originalSource: `{
  name: 'Строка заголовка',
  render: () => ({
    components: {
      D1TableRecord
    },
    template: \`
        <table style="border-collapse: collapse; width: 100%;">
          <thead>
            <D1TableRecord
              :isHeader="true"
              :columns="['id', 'name', 'role', 'status']"
              :item="{ id: 'ID', name: 'Имя', role: 'Должность', status: 'Статус' }"
            />
          </thead>
        </table>
    \`
  })
}`, ...T.parameters?.docs?.source } } }, E.parameters = { ...E.parameters, docs: { ...E.parameters?.docs, source: { originalSource: `{
  name: 'Загрузка скелетона',
  render: () => ({
    components: {
      D1TableRecord,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <table style="border-collapse: collapse; width: 100%;">
            <tbody>
              <D1TableRecord
                :isSkeleton="true"
                :columns="['id', 'name', 'role', 'status']"
                :item="{ id: '1', name: 'Misha', role: 'developer', status: 'active' }"
              />
            </tbody>
          </table>
        </D1Skeleton>
    \`
  })
}`, ...E.parameters?.docs?.source } } }, D = [`TableRecord`, `TableRecordIsHeader`, `TableRecordSkeleton`]
}); O(); export { w as TableRecord, T as TableRecordIsHeader, E as TableRecordSkeleton, D as __namedExportsOrder, C as default, x as i, O as n, b as r, S as t }
