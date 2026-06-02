import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{At as n,Bt as r,Dt as i,Ft as a,Mt as o,Nt as s,Xt as c,i as l,kt as u,m as d,pt as f,qt as p,r as m,s as ee}from"./iframe-53vFWNoU.js";import{t as te}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as h,f as g,l as _,n as v,o as y,p as b,t as x,u as S}from"./wiki-DwIxUKqL.js";import{l as C,u as w}from"./D1Icon-D5nVRATx.js";import{n as T,t as E}from"./ModelValueInclude-BlQY-VqT-BDUviEiE.js";import{n as D,t as O}from"./Chip-Dun6LX7a.js";var k,A,j,M=t((()=>{g(),w(),T(),i(),d(),k=class{constructor(e,t,n,r,i,a,o,s,c={}){b(this,`props`,void 0),b(this,`refs`,void 0),b(this,`element`,void 0),b(this,`classDesign`,void 0),b(this,`className`,void 0),b(this,`components`,void 0),b(this,`slots`,void 0),b(this,`emits`,void 0),b(this,`data`,void 0),b(this,`event`,void 0),b(this,`model`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{EventClickIncludeConstructor:u=C,ListDataRefConstructor:d=l,ModelValueIncludeConstructor:f=E}=c;this.event=new u(void 0,void 0,this.emits),this.model=new f(`selected`,this.emits,this.event,this.refs.selected,this.refs.readonly,this.refs.multiple),this.data=new d(this.refs.list,void 0,void 0,void 0,void 0,this.model.value,this.refs.keyValue,this.refs.keyLabel)}getList(){return this.data.fullData.value}},A={readonly:!0},j=class extends m{constructor(e,t,n,r=k){super(e,t,n),b(this,`item`,void 0),b(this,`renderList`,()=>f(this.item.getList(),e=>this.renderItem(e))),b(this,`renderItem`,e=>this.components.renderOne(`chip`,ee({class:this.classes?.value.item,iconHide:this.props.iconWhenSelected&&!e.selected,onClick:this.item.model.onClick},this.props.chipAttrs,e),void 0,e.index)),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){let e=this.renderList();return this.initSlot(`default`,e),s(`div`,{...this.getAttrs(),class:this.classes?.value.main},e)}}})),N,P=t((()=>{M(),N={...A}})),F=t((()=>{})),I,L=t((()=>{i(),M(),D(),P(),F(),I=o({name:`D1ChipGroup`,__name:`D1ChipGroup`,props:a({modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function},readonly:{type:Boolean},selected:{type:[Number,String,Boolean,Array]},list:{},iconWhenSelected:{type:Boolean},multiple:{type:Boolean},keyLabel:{},keyValue:{},chipAttrs:{}},N),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`],setup(e,{expose:t,emit:i}){let a=new j(`d1.chipGroup`,e,{emits:i,classes:u(()=>({main:{"d1-chipGroup":!0}})),styles:u(()=>({})),components:{chip:O}}),o=a.render();return t(a.expose()),(e,t)=>(r(),n(c(o)))}})})),R,z=t((()=>{L(),L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1ChipGroup`,exportName:`default`,displayName:`D1ChipGroup`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/ChipGroup/D1ChipGroup.vue`]})})),B,V,H,U,W=t((()=>{x(),P(),B=[{name:`chipAttrs`,type:`ConstrBind<ChipProps>`},{name:`iconWhenSelected`,type:`boolean`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`list`,type:`ChipGroupData`},{name:`modelSelected`,type:`ListSelectedList`},{name:`multiple`,type:`boolean`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`readonly`,type:`boolean`},{name:`selected`,type:`ListSelectedList`}],V=[{name:`default`,description:`Slot for displaying a custom list of chips/ Слот для отображения пользовательского списка чипов`,properties:[{name:`props`,type:`(any) | undefined`}]}],H=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],U={component:`ChipGroup`,props:B,slots:V,events:H,defaults:N,wikiDesign:v}})),G,K=t((()=>{h(),y(),W(),G=new S(U.component,U.props,U.defaults,U.wikiDesign,_,te)})),q=e({ChipGroup:()=>Y,ChipGroupSelection:()=>X,ChipGroupVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=t((()=>{z(),K(),i(),J={title:`Ui/ChipGroup`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={},X={name:`Состояния выбора`,render:()=>({components:{D1ChipGroup:R},template:`
        <div class="wiki-storybook-flex-column">
          <D1ChipGroup :list="['Option 1', 'Option 2', 'Option 3']" selected="2"/>
          <D1ChipGroup :list="['Option 1', 'Option 2', 'Option 3', 'Option 4']" :selected="['2', '3']"/>
          <D1ChipGroup
            :list="[
              { label: 'Option 1', icon: 'check', value: 'option1' },
              { label: 'Option 2', icon: 'check', value: 'option2' },
              { label: 'Option 3', icon: 'check', value: 'option3' }
            ]"
            :selected="['option2']"
            :icon-when-selected="true"
          />
        </div>
    `})},Z={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1ChipGroup:R},setup(){return{multipleSelected:p([`option1`,`option3`])}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current value: {{ multipleSelected }}</span>
            <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2']">Select 1,2</button>
            <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2', 'option3']">Add 3</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="multipleSelected = []">Clear all</button>
          </div>
          <D1ChipGroup
            v-model:selected="multipleSelected"
            :list="[
              { label: 'Option 1', value: 'option1', icon: 'check' },
              { label: 'Option 2', value: 'option2', icon: 'check' },
              { label: 'Option 3', value: 'option3', icon: 'check' }
            ]"
            :readonly="false"
            :icon-when-selected="true"
          />
        </div>
    `})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Состояния выбора',
  render: () => ({
    components: {
      D1ChipGroup
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1ChipGroup :list="['Option 1', 'Option 2', 'Option 3']" selected="2"/>
          <D1ChipGroup :list="['Option 1', 'Option 2', 'Option 3', 'Option 4']" :selected="['2', '3']"/>
          <D1ChipGroup
            :list="[
              { label: 'Option 1', icon: 'check', value: 'option1' },
              { label: 'Option 2', icon: 'check', value: 'option2' },
              { label: 'Option 3', icon: 'check', value: 'option3' }
            ]"
            :selected="['option2']"
            :icon-when-selected="true"
          />
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1ChipGroup
    },
    setup() {
      return {
        multipleSelected: ref(['option1', 'option3'])
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current value: {{ multipleSelected }}</span>
            <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2']">Select 1,2</button>
            <button class="wiki-storybook-button" @click="multipleSelected = ['option1', 'option2', 'option3']">Add 3</button>
            <button class="wiki-storybook-button wiki-storybook-button--warning" @click="multipleSelected = []">Clear all</button>
          </div>
          <D1ChipGroup
            v-model:selected="multipleSelected"
            :list="[
              { label: 'Option 1', value: 'option1', icon: 'check' },
              { label: 'Option 2', value: 'option2', icon: 'check' },
              { label: 'Option 3', value: 'option3', icon: 'check' }
            ]"
            :readonly="false"
            :icon-when-selected="true"
          />
        </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`ChipGroup`,`ChipGroupSelection`,`ChipGroupVModel`]}));$();export{Y as ChipGroup,X as ChipGroupSelection,Z as ChipGroupVModel,Q as __namedExportsOrder,J as default,K as i,$ as n,G as r,q as t};