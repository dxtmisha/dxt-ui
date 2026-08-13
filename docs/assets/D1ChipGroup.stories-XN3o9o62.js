import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,Lt as a,Mt as o,Nt as s,dt as c,in as l,jt as u,tn as d}from"./library-CUIf7uCS.js";import{O as f,d as p,j as m,k as h,l as g,m as _,n as v,p as y,r as b,t as x,u as S,x as C}from"./wiki-wIqBVsyI.js";import{n as w,t as T}from"./EventClickInclude-CZ1iA_Fp-BOBjazBg.js";import{n as E,t as D}from"./ModelValueInclude-DJiM9rJi-COKzt6EY.js";import{n as O,t as k}from"./Chip-B_MAxx6t.js";var A,j,M;function N(){return(N=e((()=>{w(),E(),r(),f(),A=class{constructor(e,t,n,r,i,a,o,s,c={}){y(this,`props`,void 0),y(this,`refs`,void 0),y(this,`element`,void 0),y(this,`classDesign`,void 0),y(this,`className`,void 0),y(this,`components`,void 0),y(this,`slots`,void 0),y(this,`emits`,void 0),y(this,`data`,void 0),y(this,`event`,void 0),y(this,`model`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{EventClickIncludeConstructor:l=T,ListDataRefConstructor:u=C,ModelValueIncludeConstructor:d=D}=c;this.event=new l(void 0,void 0,this.emits),this.model=new d(`selected`,this.emits,this.event,this.refs.selected,this.refs.readonly,this.refs.multiple),this.data=new u(this.refs.list,void 0,void 0,void 0,void 0,this.model.value,this.refs.keyValue,this.refs.keyLabel)}getList(){return this.data.fullData.value}},j={readonly:!0},M=class extends h{constructor(e,t,n,r=A){super(e,t,n),y(this,`item`,void 0),y(this,`renderList`,()=>c(this.item.getList(),e=>this.renderItem(e))),y(this,`renderItem`,e=>this.components.renderOne(`chip`,m({class:this.classes?.value.item,iconHide:this.props.iconWhenSelected&&!e.selected,onClick:this.item.model.onClick},this.props.chipAttrs,e),void 0,e.index)),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){let e=this.renderList();return this.initSlot(`default`,e),s(`div`,{...this.getAttrs(),class:this.classes?.value.main},e)}}})))()}var P;function F(){return(F=e((()=>{N(),P={...j}})))()}var I;function L(){return(L=e((()=>{r(),N(),O(),F(),I=o({name:`D1ChipGroup`,__name:`D1ChipGroup`,props:a({modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function},readonly:{type:Boolean},selected:{type:[Number,String,Boolean,Array]},list:{},iconWhenSelected:{type:Boolean},multiple:{type:Boolean},keyLabel:{},keyValue:{},chipAttrs:{}},P),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`],setup(e,{expose:t,emit:r}){let a=r,o=e,s=n(()=>({main:{"d1-chipGroup":!0}})),c=n(()=>({})),d=new M(`d1.chipGroup`,o,{emits:a,classes:s,styles:c,components:{chip:k}}),f=d.render();return t(d.expose()),(e,t)=>(i(),u(l(f)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1ChipGroup`,exportName:`default`,displayName:`D1ChipGroup`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/ChipGroup/D1ChipGroup.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{x(),F(),B=[{name:`chipAttrs`,type:`ConstrBind<ChipProps>`},{name:`iconWhenSelected`,type:`boolean`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`list`,type:`ChipGroupData`},{name:`modelSelected`,type:`ListSelectedList`},{name:`multiple`,type:`boolean`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`readonly`,type:`boolean`},{name:`selected`,type:`ListSelectedList`}],V=[{name:`default`,description:`Slot for displaying a custom list of chips/ Слот для отображения пользовательского списка чипов`,properties:[{name:`props`,type:`(any) | undefined`}]}],H=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],U={component:`ChipGroup`,props:B,slots:V,events:H,defaults:P,wikiDesign:v}})))()}var G;function K(){return(K=e((()=>{p(),g(),W(),G=new S(U.component,U.props,U.defaults,U.wikiDesign,b,_)})))()}var q=t({ChipGroup:()=>Y,ChipGroupSelection:()=>X,ChipGroupVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),r(),J={title:`Ui/ChipGroup`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={},X={name:`Состояния выбора`,render:()=>({components:{D1ChipGroup:R},template:`
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
    `})},Z={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1ChipGroup:R},setup(){return{multipleSelected:d([`option1`,`option3`])}},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`ChipGroup`,`ChipGroupSelection`,`ChipGroupVModel`]})))()}export{$ as a,q as i,X as n,G as o,Z as r,K as s,Y as t};