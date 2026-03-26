import{n as e,r as t}from"./chunk-BneVvdWh.js";import{It as n,gt as r}from"./iframe-InwAcaLb.js";import{a as i,d as a,l as o,m as s,n as c,t as l,u}from"./wiki-DiKtF90Q.js";import{i as d,n as f,r as p,t as m}from"./D1Progress-v8Jdz3E4.js";var h,g,_=e((()=>{u(),l(),d(),h=[{name:`ariaLabel`,type:`string`},{name:`circular`,type:`boolean`},{name:`delay`,type:`string | number`},{name:`delayHide`,type:`string | number`},{name:`dense`,type:`boolean`},{name:`indeterminate`,type:`string`,option:[`type1`,`type2`,`type3`]},{name:`inverse`,type:`boolean`},{name:`linear`,type:`boolean`},{name:`max`,type:`string | number`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`point`,type:`boolean`},{name:`position`,type:`string`,option:[`top`,`bottom`,`static`]},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`]},{name:`textLoading`,type:`TextValue`},{name:`value`,type:`string | number`},{name:`visible`,type:`boolean`}],g={component:`Progress`,props:h,defaults:p,wikiDesign:c}})),v,y=e((()=>{u(),i(),_(),v=new a(g.component,g.props,g.defaults,g.wikiDesign,o,s)})),b=t({Progress:()=>S,ProgressCircular:()=>T,ProgressDelays:()=>D,ProgressLinear:()=>w,ProgressTypes:()=>C,ProgressValues:()=>E,__namedExportsOrder:()=>O,default:()=>x}),x,S,C,w,T,E,D,O,k=e((()=>{f(),y(),r(),x={title:`Ui/Progress`,component:m,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1Progress:m},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <D1Progress v-bind="args"/>
      </div>
    `})},C={name:`Типы`,render:()=>({components:{D1Progress:m},template:`
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
    `})},w={name:`Линейный прогресс`,render:()=>({components:{D1Progress:m},template:`
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
    `})},T={name:`Круглый прогресс`,render:()=>({components:{D1Progress:m},template:`
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
    `})},E={name:`Значения`,render:()=>({components:{D1Progress:m},template:`
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
    `})},D={name:`Задержки`,render:()=>({components:{D1Progress:m},setup(){let e=n(!1);return{visible:e,onClick:()=>{e.value=!e.value}}},template:`
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
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Progress`,`ProgressTypes`,`ProgressLinear`,`ProgressCircular`,`ProgressValues`,`ProgressDelays`]}));k();export{S as Progress,T as ProgressCircular,D as ProgressDelays,w as ProgressLinear,C as ProgressTypes,E as ProgressValues,O as __namedExportsOrder,x as default,y as i,k as n,v as r,b as t};