import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{P as n,a as r,b as i,c as a,d as o,g as s,i as c,k as l,s as u,t as d}from"./vue.esm-bundler-KrdxwWaE.js";import{f,o as p,ot as ee,t as te,u as ne}from"./iframe-UEhCQgdF.js";import{t as re}from"./wikiDescriptions-7XaHU3Yk-B5WkPyHr.js";import{a as m,d as h,f as g,n as _,o as v,p as y,t as b,u as x}from"./wiki-YLJtDFp2.js";import{l as S,u as C}from"./D1Icon-CzMiB96A.js";import{n as w,t as T}from"./ModelInclude-pmMKdRM8-tFNPlRrR.js";import{n as E,t as D}from"./Chip-Dy20IPQI.js";var O,ie=e((()=>{g(),T(),d(),O=class{constructor(e,t,n,r,a){y(this,`value`,l()),y(this,`onClick`,(e,t)=>{var n,r;t&&`value`in t&&!((n=this.readonly)!=null&&n.value)&&(this.value.value=t.value),(r=this.event)==null||r.onClick(e,t)}),this.index=e,this.emits=t,this.event=n,this.inputValue=r,this.readonly=a,new w(this.index,this.emits,this.value),i([this.inputValue],()=>{this.value.value=this.inputValue?.value},{immediate:!0})}getValue(){return this.value.value}}})),k,A,j,M=e((()=>{g(),C(),ie(),d(),f(),k=class{constructor(e,t,n,r,i,a,o,s,c){y(this,`data`,void 0),y(this,`event`,void 0),y(this,`model`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{EventClickIncludeConstructor:l=S,ListDataRefConstructor:u=p,ModelValueIncludeConstructor:d=O}=c??{};this.event=new l(void 0,void 0,this.emits),this.model=new d(`selected`,this.emits,this.event,this.refs.selected,this.refs.readonly),this.data=new u(this.refs.list,void 0,void 0,void 0,void 0,this.model.value,this.refs.keyValue,this.refs.keyLabel)}getList(){return this.data.fullData.value}},A={readonly:!0},j=class extends te{constructor(e,t,n,r=k){super(e,t,n),y(this,`item`,void 0),y(this,`renderList`,()=>ee(this.item.getList(),e=>this.renderItem(e))),y(this,`renderItem`,e=>this.components.renderOne(`chip`,ne({class:this.classes?.value.item,iconHide:this.props.iconWhenSelected&&!e.selected,onClick:this.item.model.onClick},this.props.chipAttrs,e),void 0,e.index)),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){let e=this.renderList();return this.initSlot(`default`,e),a(`div`,{...this.getAttrs(),class:this.classes?.value.main},e)}}})),N,P=e((()=>{M(),N={...A}})),F=e((()=>{})),I,L=e((()=>{d(),M(),E(),P(),F(),I=u({name:`D1ChipGroup`,__name:`D1ChipGroup`,props:o({modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function},readonly:{type:Boolean},selected:{type:[Number,String,Boolean,Array]},list:{},iconWhenSelected:{type:Boolean},keyLabel:{},keyValue:{},chipAttrs:{}},N),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`],setup(e,{expose:t,emit:i}){let a=new j(`d1.chipGroup`,e,{emits:i,classes:c(()=>({main:{"d1-chipGroup":!0}})),styles:c(()=>({})),components:{chip:D}}),o=a.render();return t(a.expose()),(e,t)=>(s(),r(n(o)))}})})),R,z=e((()=>{L(),L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1ChipGroup`,exportName:`default`,displayName:`D1ChipGroup`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/ChipGroup/D1ChipGroup.vue`]})})),B,V,H,U,W=e((()=>{b(),P(),B=[{name:`chipAttrs`,type:`ConstrBind<ChipProps> | undefined`},{name:`iconWhenSelected`,type:`boolean | undefined`},{name:`keyLabel`,type:`string | undefined`},{name:`keyValue`,type:`string | undefined`},{name:`list`,type:`ChipGroupData | undefined`},{name:`modelSelected`,type:`ListSelectedList | undefined`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void) | undefined`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void) | undefined`},{name:`readonly`,type:`boolean | undefined`},{name:`selected`,type:`ListSelectedList | undefined`}],V=[{name:`default`,description:`Slot for displaying a custom list of chips/ Слот для отображения пользовательского списка чипов`,properties:[{name:`props`,type:`(any) | undefined`}]}],H=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],U={component:`ChipGroup`,props:B,slots:V,events:H,defaults:N,wikiDesign:_}})),G,K=e((()=>{h(),v(),W(),G=new x(U.component,U.props,U.defaults,U.wikiDesign,m,re)})),q=t({ChipGroup:()=>Y,ChipGroupSelection:()=>X,ChipGroupVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=e((()=>{z(),K(),d(),J={title:`Ui/ChipGroup`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={},X={name:`Состояния выбора`,render:()=>({components:{D1ChipGroup:R},template:`
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
    `})},Z={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1ChipGroup:R},setup(){return{multipleSelected:l([`option1`,`option3`])}},template:`
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