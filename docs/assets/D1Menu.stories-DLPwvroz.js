import{d as u,_ as i}from"./D1Menu-xwJcyOBv.js";import{W as c,w as d,a as b,b as p}from"./wiki-fb_eBW86.js";import{r as a}from"./iframe-BlCC38XJ.js";import"./jsx-runtime-D_zvdyIk.js";const m=[{name:"ajax",type:"string | (() => NormalOrPromise<ListRecord<ListItemProps>>)"},{name:"autoClose",type:"boolean"},{name:"barsAdaptive",type:"string",option:["showAlways","showSm","showMd","showLg","showXl","show2xl"]},{name:"barsAttrs",type:"ConstrBind<BarsProps>"},{name:"barsBackHide",type:"boolean"},{name:"barsDescription",type:"string"},{name:"barsHide",type:"boolean"},{name:"barsLabel",type:"string | number"},{name:"barsList",type:"Bars['bars']"},{name:"cache",type:"boolean"},{name:"disabled",type:"boolean"},{name:"filterMode",type:"boolean"},{name:"hideList",type:"boolean"},{name:"highlight",type:"string"},{name:"highlightLengthStart",type:"number"},{name:"isSelectedByValue",type:"boolean"},{name:"itemAttrs",type:"ConstrBind<ListItemProps>"},{name:"keyLabel",type:"string"},{name:"keyValue",type:"string"},{name:"list",type:"ListRecord<ListItemProps>"},{name:"listAttrs",type:"ConstrBind<ListProps>"},{name:"liteThreshold",type:"number"},{name:"max",type:"string | number"},{name:"modelSelected",type:"string"},{name:"onUpdate:modelSelected",type:"(value: string) => void"},{name:"onUpdate:selected",type:"(value: string) => void"},{name:"request",type:"ApiFetch"},{name:"selected",type:"ListSelectedList"},{name:"step",type:"string | number"},{name:"tag",type:"string"},{name:"windowAttrs",type:"ConstrBind<WindowProps>"}],l=new c("Menu",m,u,d,b,p),k={title:"Ui/Menu",component:i,parameters:{design:"d1",docs:{description:{component:l.getDescription()}}},argTypes:l.getWiki(),args:l.getValues()},e={render:n=>({components:{D1Menu:i},setup:()=>({args:n}),template:`
      <D1Menu v-bind="args">
      <template #control="{binds}">
        <button class="wiki-storybook-button" v-bind="binds">Open Menu</button>
      </template>
    </D1Menu>
    `})},t={name:"Навигация с previous/next",render:()=>({components:{D1Menu:i},setup(){return{selectedValue:a("color2"),colors:a([{label:"[1]Red",value:"color1",icon:"palette"},{label:"[2]Green",value:"color2",icon:"palette"},{label:"[3]Blue",value:"color3",icon:"palette"},{label:"[4]Yellow",value:"color4",icon:"palette"},{label:"[5]Purple",value:"color5",icon:"palette"},{label:"[6]Orange",value:"color6",icon:"palette"}]),step:a(1)}},template:`
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
    `})},o={name:"AJAX Загрузка",render:()=>({components:{D1Menu:i},setup(){return{loadMenuData:()=>new Promise(r=>setTimeout(()=>r([{label:"Dashboard",value:"dashboard",icon:"dashboard"},{label:"Users",value:"users",icon:"people"},{label:"Settings",value:"settings",icon:"settings"},{label:"Reports",value:"reports",icon:"assessment"}]),512))}},template:`
        <D1Menu :ajax="loadMenuData" selected="settings">
          <template #control="{binds, loading}">
            <button class="wiki-storybook-button" v-bind="binds">
              Open AJAX Menu (loading: {{ loading }})
            </button>
          </template>
        </D1Menu>
    `})},s={name:"Двусторонняя привязка (v-model)",render:()=>({components:{D1Menu:i},setup(){return{selectedValue:a("settings"),menuItems:a([{label:"Dashboard",value:"dashboard",icon:"dashboard"},{label:"Users",value:"users",icon:"people"},{label:"Settings",value:"settings",icon:"settings"},{label:"Reports",value:"reports",icon:"assessment"},{label:"Help",value:"help",icon:"help"}])}},template:`
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
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const v=["Menu","MenuNavigation","MenuAjax","MenuVModel"],x=Object.freeze(Object.defineProperty({__proto__:null,Menu:e,MenuAjax:o,MenuNavigation:t,MenuVModel:s,__namedExportsOrder:v,default:k},Symbol.toStringTag,{value:"Module"}));export{x as M,e as a,l as b,t as c,o as d,s as e};
