import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Ht as n,xt as r}from"./iframe-yo6yIkeP.js";import{a as i,d as a,m as o,n as s,o as c,t as l,u}from"./wiki-Ck-JDNL8.js";import{i as d,n as f,r as p,t as m}from"./D1Progress-BNNOQXJZ.js";var h,g,_,v,y=e((()=>{l(),d(),h=[{name:`ariaLabel`,type:`string | undefined`},{name:`circular`,type:`boolean | undefined`},{name:`clientOnly`,type:`boolean | undefined`},{name:`delay`,type:`string | number | undefined`},{name:`delayHide`,type:`string | number | undefined`},{name:`dense`,type:`boolean | undefined`},{name:`indeterminate`,type:`string | undefined`,option:[`type1`,`type2`,`type3`]},{name:`inverse`,type:`boolean | undefined`},{name:`linear`,type:`boolean | undefined`},{name:`max`,type:`string | number | undefined`},{name:`palette`,type:`string | undefined`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`point`,type:`boolean | undefined`},{name:`position`,type:`string | undefined`,option:[`top`,`bottom`,`static`]},{name:`size`,type:`string | undefined`,option:[`sm`,`md`,`lg`]},{name:`textLoading`,type:`TextValue`},{name:`value`,type:`string | number | undefined`},{name:`visible`,type:`boolean | undefined`}],g=[],_=[],v={component:`Progress`,props:h,slots:g,events:_,defaults:p,wikiDesign:s}})),b,x=e((()=>{a(),c(),y(),b=new u(v.component,v.props,v.defaults,v.wikiDesign,i,o)})),S=t({Progress:()=>w,ProgressCircular:()=>D,ProgressDelays:()=>k,ProgressLinear:()=>E,ProgressTypes:()=>T,ProgressValues:()=>O,__namedExportsOrder:()=>A,default:()=>C}),C,w,T,E,D,O,k,A,j=e((()=>{f(),x(),r(),C={title:`Ui/Progress`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1Progress:m},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--center">
        <D1Progress v-bind="args"/>
      </div>
    `})},T={name:`Типы`,render:()=>({components:{D1Progress:m},template:`
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
    `})},E={name:`Линейный прогресс`,render:()=>({components:{D1Progress:m},template:`
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
    `})},D={name:`Круглый прогресс`,render:()=>({components:{D1Progress:m},template:`
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
    `})},O={name:`Значения`,render:()=>({components:{D1Progress:m},template:`
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
    `})},k={name:`Задержки`,render:()=>({components:{D1Progress:m},setup(){let e=n(!1);return{visible:e,onClick:()=>{e.value=!e.value}}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="onClick">Visible: {{ visible }}</button>
          </div>

          <div>
            <div class="wiki-storybook-group">
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
          </div>
        </div>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="onClick">Visible: {{ visible }}</button>
          </div>

          <div>
            <div class="wiki-storybook-group">
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
          </div>
        </div>
    \`
  })
}`,...k.parameters?.docs?.source}}},A=[`Progress`,`ProgressTypes`,`ProgressLinear`,`ProgressCircular`,`ProgressValues`,`ProgressDelays`]}));j();export{w as Progress,D as ProgressCircular,k as ProgressDelays,E as ProgressLinear,T as ProgressTypes,O as ProgressValues,A as __namedExportsOrder,C as default,x as i,j as n,b as r,S as t};