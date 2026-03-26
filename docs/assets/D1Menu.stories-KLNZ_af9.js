import{n as e,r as t}from"./chunk-BneVvdWh.js";import{It as n,gt as r}from"./iframe-InwAcaLb.js";import{a as i,d as a,l as o,m as s,n as c,t as l,u}from"./wiki-DiKtF90Q.js";import{i as d,n as f,r as p,t as m}from"./D1Menu-j0Saf6Hh.js";var h,g,_=e((()=>{u(),l(),d(),h=[{name:`ajax`,type:`string | (() => NormalOrPromise<ListRecord<any>>)`},{name:`autoClose`,type:`boolean`},{name:`barsAdaptive`,type:`string`,option:[`showAlways`,`showSm`,`showMd`,`showLg`,`showXl`,`show2xl`]},{name:`barsAttrs`,type:`ConstrBind<Bars>`},{name:`barsBackHide`,type:`boolean`},{name:`barsDescription`,type:`string`},{name:`barsHide`,type:`boolean`},{name:`barsLabel`,type:`string | number`},{name:`barsList`,type:`Bars['bars']`},{name:`cache`,type:`boolean`},{name:`disabled`,type:`boolean`},{name:`embedded`,type:`boolean`},{name:`filterMode`,type:`boolean`},{name:`hideList`,type:`boolean`},{name:`highlight`,type:`string`},{name:`highlightLengthStart`,type:`number`},{name:`isSelectedByValue`,type:`boolean`},{name:`itemAttrs`,type:`ConstrBind<ListItem>`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`list`,type:`ListRecord<any>`},{name:`listAttrs`,type:`ConstrBind<List>`},{name:`liteThreshold`,type:`number`},{name:`max`,type:`string | number`},{name:`modelSelected`,type:`string`},{name:`onUpdate:modelSelected`,type:`(value: string) => void`},{name:`onUpdate:selected`,type:`(value: string) => void`},{name:`request`,type:`ApiFetch`},{name:`roleItem`,type:`string`},{name:`roleList`,type:`string`},{name:`selected`,type:`ListSelectedList`},{name:`step`,type:`string | number`},{name:`tag`,type:`string`},{name:`windowAttrs`,type:`ConstrBind<Window>`}],g={component:`Menu`,props:h,defaults:p,wikiDesign:c}})),v,y=e((()=>{u(),i(),_(),v=new a(g.component,g.props,g.defaults,g.wikiDesign,o,s)})),b=t({Menu:()=>S,MenuAjax:()=>w,MenuNavigation:()=>C,MenuVModel:()=>T,__namedExportsOrder:()=>E,default:()=>x}),x,S,C,w,T,E,D=e((()=>{f(),y(),r(),x={title:`Ui/Menu`,component:m,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1Menu:m},setup:()=>({args:e}),template:`
      <D1Menu v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Open Menu</button>
      </template>
    </D1Menu>
    `})},C={name:`Навигация с previous/next`,render:()=>({components:{D1Menu:m},setup(){return{selectedValue:n(`color2`),colors:n([{label:`[1]Red`,value:`color1`,icon:`palette`},{label:`[2]Green`,value:`color2`,icon:`palette`},{label:`[3]Blue`,value:`color3`,icon:`palette`},{label:`[4]Yellow`,value:`color4`,icon:`palette`},{label:`[5]Purple`,value:`color5`,icon:`palette`},{label:`[6]Orange`,value:`color6`,icon:`palette`}]),step:n(1)}},template:`
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
    `})},w={name:`AJAX Загрузка`,render:()=>({components:{D1Menu:m},setup(){return{loadMenuData:()=>new Promise(e=>setTimeout(()=>e([{label:`Dashboard`,value:`dashboard`,icon:`dashboard`},{label:`Users`,value:`users`,icon:`people`},{label:`Settings`,value:`settings`,icon:`settings`},{label:`Reports`,value:`reports`,icon:`assessment`}]),512))}},template:`
        <D1Menu :ajax="loadMenuData" selected="settings">
          <template #control="{binds, loading}">
            <button class="wiki-storybook-button" v-bind="binds">
              Open AJAX Menu (loading: {{ loading }})
            </button>
          </template>
        </D1Menu>
    `})},T={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Menu:m},setup(){return{selectedValue:n(`settings`),menuItems:n([{label:`Dashboard`,value:`dashboard`,icon:`dashboard`},{label:`Users`,value:`users`,icon:`people`},{label:`Settings`,value:`settings`,icon:`settings`},{label:`Reports`,value:`reports`,icon:`assessment`},{label:`Help`,value:`help`,icon:`help`}])}},template:`
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
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Menu`,`MenuNavigation`,`MenuAjax`,`MenuVModel`]}));D();export{S as Menu,w as MenuAjax,C as MenuNavigation,T as MenuVModel,E as __namedExportsOrder,x as default,y as i,D as n,v as r,b as t};