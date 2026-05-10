import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{k as n,t as r}from"./vue.esm-bundler-KrdxwWaE.js";import{t as i}from"./wikiDescriptions-7XaHU3Yk-B5WkPyHr.js";import{a,d as o,n as s,o as c,t as l,u}from"./wiki-YLJtDFp2.js";import{i as d,n as f,r as p,t as m}from"./D1Menu-DUNOYmXW.js";var h,g,_,v,y=e((()=>{l(),d(),h=[{name:`ajax`,type:`string | (() => NormalOrPromise<ListRecord<ListItemProps>>) | undefined`},{name:`autoClose`,type:`boolean | undefined`},{name:`barsAdaptive`,type:`string | undefined`,option:[`showAlways`,`showSm`,`showMd`,`showLg`,`showXl`,`show2xl`]},{name:`barsAttrs`,type:`ConstrBind<BarsProps> | undefined`},{name:`barsBackHide`,type:`boolean | undefined`},{name:`barsDescription`,type:`string | undefined`},{name:`barsHide`,type:`boolean | undefined`},{name:`barsLabel`,type:`string | number | undefined`},{name:`barsList`,type:`ConstrBind<ButtonProps>[] | undefined`},{name:`cache`,type:`boolean | undefined`},{name:`disabled`,type:`boolean | undefined`},{name:`embedded`,type:`boolean | undefined`},{name:`filterMode`,type:`boolean | undefined`},{name:`hideList`,type:`boolean | undefined`},{name:`highlight`,type:`string | undefined`},{name:`highlightLengthStart`,type:`number | undefined`},{name:`isSelectedByValue`,type:`boolean | undefined`},{name:`itemAttrs`,type:`ConstrBind<ListItemProps> | undefined`},{name:`keyLabel`,type:`string | undefined`},{name:`keyValue`,type:`string | undefined`},{name:`list`,type:`ListRecord<ListItemProps> | undefined`},{name:`listAttrs`,type:`ConstrBind<ListProps> | undefined`},{name:`liteThreshold`,type:`number | undefined`},{name:`max`,type:`string | number | undefined`},{name:`modelSelected`,type:`string | undefined`},{name:`onUpdate:modelSelected`,type:`((value: string) => void) | undefined`},{name:`onUpdate:selected`,type:`((value: string) => void) | undefined`},{name:`request`,type:`ApiFetch | undefined`},{name:`roleItem`,type:`string | undefined`},{name:`roleList`,type:`string | undefined`},{name:`selected`,type:`ListSelectedList | undefined`},{name:`step`,type:`string | number | undefined`},{name:`tag`,type:`string | undefined`},{name:`windowAttrs`,type:`ConstrBind<WindowProps> | undefined`}],g=[{name:`contextBottom`,description:`Context slot for bottom area / Слот контекстной области снизу`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`contextTop`,description:`Context slot for top area / Слот контекстной области сверху`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`control`,description:`Control slot for window management / Слот управления для управления окном`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`footer`,description:`Footer slot for window bottom/ Слот подвала для низа окна`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]},{name:`title`,description:`Title slot for window title/ Слот заголовка для заголовка окна`,properties:[{name:`props`,type:`(MenuControlItem) | undefined`}]}],_=[{name:`bars`,description:`Click event for bars/ Событие клика для панелей`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`barsBack`,description:`Back button click event for bars/ Событие клика кнопки назад для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`barsLite`,description:`Simple click event for bars/ Простое событие клика для панелей`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`clickSlot`,description:`Event for clicking on a slot/ Событие клика по слоту`,properties:[{name:`value?`,type:`string | undefined`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`string`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`string`}]},{name:`updateValue`,description:`Event for updating the value/ Событие обновления значения`,properties:[{name:`value?`,type:`NumberOrStringOrBoolean | undefined`}]},{name:`window`,description:`Window event triggered on state change/ Событие окна при изменении состояния`,properties:[{name:`options`,type:`WindowEmitOptions`}]}],v={component:`Menu`,props:h,slots:g,events:_,defaults:p,wikiDesign:s}})),b,x=e((()=>{o(),c(),y(),b=new u(v.component,v.props,v.defaults,v.wikiDesign,a,i)})),S=t({Menu:()=>w,MenuAjax:()=>E,MenuNavigation:()=>T,MenuVModel:()=>D,__namedExportsOrder:()=>O,default:()=>C}),C,w,T,E,D,O,k=e((()=>{f(),x(),r(),C={title:`Ui/Menu`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1Menu:m},setup:()=>({args:e}),template:`
      <D1Menu v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Open Menu</button>
      </template>
    </D1Menu>
    `})},T={name:`Навигация с previous/next`,render:()=>({components:{D1Menu:m},setup(){return{selectedValue:n(`color2`),colors:n([{label:`[1]Red`,value:`color1`,icon:`palette`},{label:`[2]Green`,value:`color2`,icon:`palette`},{label:`[3]Blue`,value:`color3`,icon:`palette`},{label:`[4]Yellow`,value:`color4`,icon:`palette`},{label:`[5]Purple`,value:`color5`,icon:`palette`},{label:`[6]Orange`,value:`color6`,icon:`palette`}]),step:n(1)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">Step size:</div>
            <div class="wiki-storybook-flex">
              <button class="wiki-storybook-button" @click="step = 1">1 item</button>
              <button class="wiki-storybook-button" @click="step = 2">2 items</button>
              <button class="wiki-storybook-button" @click="step = 3">3 items</button>
            </div>
          </div>

          <D1Menu
            v-model:selected="selectedValue"
            :list="colors"
            :step="step"
            is-selected-by-value
          >
            <template #control="{previous, next, selectedNames, open}">
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <div class="wiki-storybook-flex">
                  <button
                    class="wiki-storybook-button"
                    @click="previous"
                    style="padding: 4px 12px;"
                  >
                    ◀ Previous
                  </button>
                  <div style="flex: 1; text-align: center; font-weight: 500;">
                    {{ selectedNames.value[0] || 'None' }}
                  </div>
                  <button
                    class="wiki-storybook-button"
                    @click="next"
                    style="padding: 4px 12px;"
                  >
                    Next ▶
                  </button>
                </div>
              </div>
            </template>
          </D1Menu>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div>Selected: {{ selectedValue }}</div>
            <div>Step: {{ step }}</div>
          </div>
        </div>
    `})},E={name:`AJAX Загрузка`,render:()=>({components:{D1Menu:m},setup(){return{loadMenuData:()=>new Promise(e=>setTimeout(()=>e([{label:`Dashboard`,value:`dashboard`,icon:`dashboard`},{label:`Users`,value:`users`,icon:`people`},{label:`Settings`,value:`settings`,icon:`settings`},{label:`Reports`,value:`reports`,icon:`assessment`}]),512))}},template:`
        <D1Menu :ajax="loadMenuData" selected="settings">
          <template #control="{binds, loading}">
            <button class="wiki-storybook-button" v-bind="binds">
              Open AJAX Menu (loading: {{ loading }})
            </button>
          </template>
        </D1Menu>
    `})},D={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Menu:m},setup(){return{selectedValue:n(`settings`),menuItems:n([{label:`Dashboard`,value:`dashboard`,icon:`dashboard`},{label:`Users`,value:`users`,icon:`people`},{label:`Settings`,value:`settings`,icon:`settings`},{label:`Reports`,value:`reports`,icon:`assessment`},{label:`Help`,value:`help`,icon:`help`}])}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selectedValue = 'dashboard'">Select Dashboard</button>
            <button class="wiki-storybook-button" @click="selectedValue = 'reports'">Select Reports</button>
            <button class="wiki-storybook-button" @click="selectedValue = ''">Clear</button>
          </div>
          <div class="wiki-storybook-flex">
            <D1Menu
              v-model:selected="selectedValue"
              :list="menuItems"
              is-selected-by-value
            >
              <template #control="{binds}">
                <button class="wiki-storybook-button" v-bind="binds">
                  Open Menu
                </button>
              </template>
            </D1Menu>
          </div>
          <div>Selected value: {{ selectedValue }}</div>
        </div>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Menu
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Menu v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Open Menu</button>
      </template>
    </D1Menu>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Навигация с previous/next',
  render: () => ({
    components: {
      D1Menu
    },
    setup() {
      return {
        selectedValue: ref('color2'),
        colors: ref([{
          label: '[1]Red',
          value: 'color1',
          icon: 'palette'
        }, {
          label: '[2]Green',
          value: 'color2',
          icon: 'palette'
        }, {
          label: '[3]Blue',
          value: 'color3',
          icon: 'palette'
        }, {
          label: '[4]Yellow',
          value: 'color4',
          icon: 'palette'
        }, {
          label: '[5]Purple',
          value: 'color5',
          icon: 'palette'
        }, {
          label: '[6]Orange',
          value: 'color6',
          icon: 'palette'
        }]),
        step: ref(1)
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label">Step size:</div>
            <div class="wiki-storybook-flex">
              <button class="wiki-storybook-button" @click="step = 1">1 item</button>
              <button class="wiki-storybook-button" @click="step = 2">2 items</button>
              <button class="wiki-storybook-button" @click="step = 3">3 items</button>
            </div>
          </div>

          <D1Menu
            v-model:selected="selectedValue"
            :list="colors"
            :step="step"
            is-selected-by-value
          >
            <template #control="{previous, next, selectedNames, open}">
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <div class="wiki-storybook-flex">
                  <button
                    class="wiki-storybook-button"
                    @click="previous"
                    style="padding: 4px 12px;"
                  >
                    ◀ Previous
                  </button>
                  <div style="flex: 1; text-align: center; font-weight: 500;">
                    {{ selectedNames.value[0] || 'None' }}
                  </div>
                  <button
                    class="wiki-storybook-button"
                    @click="next"
                    style="padding: 4px 12px;"
                  >
                    Next ▶
                  </button>
                </div>
              </div>
            </template>
          </D1Menu>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div>Selected: {{ selectedValue }}</div>
            <div>Step: {{ step }}</div>
          </div>
        </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'AJAX Загрузка',
  render: () => ({
    components: {
      D1Menu
    },
    setup() {
      const loadMenuData = () => new Promise(resolve => setTimeout(() => resolve([{
        label: 'Dashboard',
        value: 'dashboard',
        icon: 'dashboard'
      }, {
        label: 'Users',
        value: 'users',
        icon: 'people'
      }, {
        label: 'Settings',
        value: 'settings',
        icon: 'settings'
      }, {
        label: 'Reports',
        value: 'reports',
        icon: 'assessment'
      }]), 512));
      return {
        loadMenuData
      };
    },
    template: \`
        <D1Menu :ajax="loadMenuData" selected="settings">
          <template #control="{binds, loading}">
            <button class="wiki-storybook-button" v-bind="binds">
              Open AJAX Menu (loading: {{ loading }})
            </button>
          </template>
        </D1Menu>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1Menu
    },
    setup() {
      return {
        selectedValue: ref('settings'),
        menuItems: ref([{
          label: 'Dashboard',
          value: 'dashboard',
          icon: 'dashboard'
        }, {
          label: 'Users',
          value: 'users',
          icon: 'people'
        }, {
          label: 'Settings',
          value: 'settings',
          icon: 'settings'
        }, {
          label: 'Reports',
          value: 'reports',
          icon: 'assessment'
        }, {
          label: 'Help',
          value: 'help',
          icon: 'help'
        }])
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selectedValue = 'dashboard'">Select Dashboard</button>
            <button class="wiki-storybook-button" @click="selectedValue = 'reports'">Select Reports</button>
            <button class="wiki-storybook-button" @click="selectedValue = ''">Clear</button>
          </div>
          <div class="wiki-storybook-flex">
            <D1Menu
              v-model:selected="selectedValue"
              :list="menuItems"
              is-selected-by-value
            >
              <template #control="{binds}">
                <button class="wiki-storybook-button" v-bind="binds">
                  Open Menu
                </button>
              </template>
            </D1Menu>
          </div>
          <div>Selected value: {{ selectedValue }}</div>
        </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O=[`Menu`,`MenuNavigation`,`MenuAjax`,`MenuVModel`]}));k();export{w as Menu,E as MenuAjax,T as MenuNavigation,D as MenuVModel,O as __namedExportsOrder,C as default,x as i,k as n,b as r,S as t};