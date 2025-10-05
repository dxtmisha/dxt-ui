import{d as l,_ as i}from"./D1Progress-BUe3C7Zf.js";import{W as d,w as m,a as b,b as c}from"./wiki-b8Pce8s9.js";import{r as y}from"./iframe-CpPdPYqc.js";import"./jsx-runtime-D_zvdyIk.js";const v=[{name:"circular",type:"boolean"},{name:"delay",type:"string | number"},{name:"delayHide",type:"string | number"},{name:"dense",type:"boolean"},{name:"indeterminate",type:"string",option:["type1","type2","type3"]},{name:"inverse",type:"boolean"},{name:"linear",type:"boolean"},{name:"max",type:"string | number"},{name:"palette",type:"string",option:["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","slate","gray","zinc","neutral","stone","black","white"]},{name:"point",type:"boolean"},{name:"position",type:"string",option:["top","bottom","static"]},{name:"size",type:"string",option:["sm","md","lg"]},{name:"value",type:"string | number"},{name:"visible",type:"boolean"}],k=new d("Progress",v,l,m,b,c),w={title:"Ui/Progress",component:i,parameters:{design:"d1",docs:{description:{component:k.getDescription()}}},argTypes:k.getWiki(),args:k.getValues()},o={render:e=>({components:{D1Progress:i},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <D1Progress v-bind="args"/>
      </div>
    `})},s={name:"Типы",render:()=>({components:{D1Progress:i},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Linear Progress</div>
            <D1Progress visible indeterminate="type2" linear position="static"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Circular Progress</div>
            <D1Progress visible indeterminate="type2" circular/>
          </div>
        </div>
    `})},t={name:"Линейный прогресс",render:()=>({components:{D1Progress:i},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Value: 50</div>
            <D1Progress visible linear position="static" :value="50" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Point</div>
            <D1Progress visible linear position="static" point :value="75" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Position: bottom</div>
            <D1Progress visible linear position="bottom" :value="60" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Indeterminate: type1</div>
            <D1Progress visible linear position="static" indeterminate="type1" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Indeterminate: type2</div>
            <D1Progress visible linear position="static" indeterminate="type2" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Indeterminate: type3</div>
            <D1Progress visible linear position="static" indeterminate="type3" />
          </div>
        </div>
    `})},r={name:"Круглый прогресс",render:()=>({components:{D1Progress:i},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <D1Progress visible circular :value="50" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Dense</div>
            <D1Progress visible circular dense :value="75" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Indeterminate</div>
            <D1Progress visible circular indeterminate="type1" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Dense Indeterminate</div>
            <D1Progress visible circular dense indeterminate="type2" />
          </div>
        </div>
    `})},a={name:"Значения",render:()=>({components:{D1Progress:i},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">value: 25, max: 100</div>
            <D1Progress visible position="static" :value="25" :max="100"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">value: 75, max: 100</div>
            <D1Progress visible position="static" :value="75" :max="100"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">value: 50, max: 200</div>
            <D1Progress visible circular :value="50" :max="200"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">value: 75, max: 100</div>
            <D1Progress visible circular :value="75" :max="200"/>
          </div>
        </div>
    `})},n={name:"Задержки",render:()=>({components:{D1Progress:i},setup(){const e=y(!1);return{visible:e,onClick:()=>{e.value=!e.value}}},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <button class="wiki-storybook-button" @click="onClick">Visible: {{ visible }}</button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Standard delays (360/200)</div>
            <D1Progress :visible="visible" circular position="static" delay="360" delayHide="200" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Fast appearance (100/200)</div>
            <D1Progress :visible="visible" linear position="static" delay="100" delayHide="200" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">No delays (0/0)</div>
            <D1Progress :visible="visible" linear position="static" delay="0" delayHide="0" />
          </div>
        </div>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Progress
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <D1Progress v-bind="args"/>
      </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Типы',
  render: () => ({
    components: {
      D1Progress
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Linear Progress</div>
            <D1Progress visible indeterminate="type2" linear position="static"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">Circular Progress</div>
            <D1Progress visible indeterminate="type2" circular/>
          </div>
        </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Линейный прогресс',
  render: () => ({
    components: {
      D1Progress
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Value: 50</div>
            <D1Progress visible linear position="static" :value="50" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Point</div>
            <D1Progress visible linear position="static" point :value="75" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Position: bottom</div>
            <D1Progress visible linear position="bottom" :value="60" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Indeterminate: type1</div>
            <D1Progress visible linear position="static" indeterminate="type1" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Indeterminate: type2</div>
            <D1Progress visible linear position="static" indeterminate="type2" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Indeterminate: type3</div>
            <D1Progress visible linear position="static" indeterminate="type3" />
          </div>
        </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Круглый прогресс',
  render: () => ({
    components: {
      D1Progress
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Basic</div>
            <D1Progress visible circular :value="50" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Dense</div>
            <D1Progress visible circular dense :value="75" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Indeterminate</div>
            <D1Progress visible circular indeterminate="type1" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Dense Indeterminate</div>
            <D1Progress visible circular dense indeterminate="type2" />
          </div>
        </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Значения',
  render: () => ({
    components: {
      D1Progress
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">value: 25, max: 100</div>
            <D1Progress visible position="static" :value="25" :max="100"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">value: 75, max: 100</div>
            <D1Progress visible position="static" :value="75" :max="100"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">value: 50, max: 200</div>
            <D1Progress visible circular :value="50" :max="200"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen">
            <div class="wiki-storybook-item__label">value: 75, max: 100</div>
            <D1Progress visible circular :value="75" :max="200"/>
          </div>
        </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Задержки',
  render: () => ({
    components: {
      D1Progress
    },
    setup() {
      const visible = ref(false);
      return {
        visible,
        onClick: () => {
          visible.value = !visible.value;
        }
      };
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <button class="wiki-storybook-button" @click="onClick">Visible: {{ visible }}</button>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Standard delays (360/200)</div>
            <D1Progress :visible="visible" circular position="static" delay="360" delayHide="200" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Fast appearance (100/200)</div>
            <D1Progress :visible="visible" linear position="static" delay="100" delayHide="200" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--widescreen wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">No delays (0/0)</div>
            <D1Progress :visible="visible" linear position="static" delay="0" delayHide="0" />
          </div>
        </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};const p=["Progress","ProgressTypes","ProgressLinear","ProgressCircular","ProgressValues","ProgressDelays"],D=Object.freeze(Object.defineProperty({__proto__:null,Progress:o,ProgressCircular:r,ProgressDelays:n,ProgressLinear:t,ProgressTypes:s,ProgressValues:a,__namedExportsOrder:p,default:w},Symbol.toStringTag,{value:"Module"}));export{D as P,o as a,k as b,s as c,t as d,r as e,a as f,n as g};
