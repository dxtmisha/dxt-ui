import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Ct as n,Et as r,Ft as i,Ht as a,Kt as o,Nt as s,Ot as c,Tt as l,a as ee,f as u,l as d,ot as te,t as f,wt as p,xt as m}from"./iframe-yo6yIkeP.js";import{a as ne,d as re,f as h,m as g,n as _,o as v,p as y,t as b,u as x}from"./wiki-Ck-JDNL8.js";import{c as S,s as C}from"./D1Icon-Bmj9etR0.js";import{n as w,t as T}from"./ModelInclude-B9usSTAS-DomJOYOv.js";import{n as E,t as D}from"./Chip-CndLIAYJ.js";var O,ie=e((()=>{h(),T(),m(),O=class{constructor(e,t,n,r,o){y(this,`value`,a()),y(this,`onClick`,(e,t)=>{var n,r;t&&`value`in t&&!((n=this.readonly)!=null&&n.value)&&(this.value.value=t.value),(r=this.event)==null||r.onClick(e,t)}),this.index=e,this.emits=t,this.event=n,this.inputValue=r,this.readonly=o,new w(this.index,this.emits,this.value),i([this.inputValue],()=>{this.value.value=this.inputValue?.value},{immediate:!0})}getValue(){return this.value.value}}})),k,A,j,M=e((()=>{h(),S(),ie(),m(),u(),k=class{constructor(e,t,n,r,i,a,o,s,c){y(this,`data`,void 0),y(this,`event`,void 0),y(this,`model`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{EventClickIncludeConstructor:l=C,ListDataRefConstructor:u=ee,ModelValueIncludeConstructor:d=O}=c??{};this.event=new l(void 0,void 0,this.emits),this.model=new d(`selected`,this.emits,this.event,this.refs.selected,this.refs.readonly),this.data=new u(this.refs.list,void 0,void 0,void 0,void 0,this.model.value,this.refs.keyValue,this.refs.keyLabel)}getList(){return this.data.fullData.value}},A={readonly:!0},j=class extends f{constructor(e,t,n,r=k){super(e,t,n),y(this,`item`,void 0),y(this,`renderList`,()=>te(this.item.getList(),e=>this.renderItem(e))),y(this,`renderItem`,e=>this.components.renderOne(`chip`,d({class:this.classes?.value.item,iconHide:this.props.iconWhenSelected&&!e.selected,onClick:this.item.model.onClick},this.props.chipAttrs,e),void 0,e.index)),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){let e=this.renderList();return this.initSlot(`default`,e),r(`div`,{...this.getAttrs(),class:this.classes?.value.main},e)}}})),N,P=e((()=>{M(),N={...A}})),F=e((()=>{})),I,L=e((()=>{m(),M(),E(),P(),F(),I=l({name:`D1ChipGroup`,__name:`D1ChipGroup`,props:c({modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function},readonly:{type:Boolean},selected:{type:[Number,String,Boolean,Array]},list:{},iconWhenSelected:{type:Boolean},keyLabel:{},keyValue:{},chipAttrs:{}},N),emits:[`click`,`clickLite`,`update:selected`,`update:modelSelected`],setup(e,{expose:t,emit:r}){let i=new j(`d1.chipGroup`,e,{emits:r,classes:n(()=>({main:{"d1-chipGroup":!0}})),styles:n(()=>({})),components:{chip:D}}),a=i.render();return t(i.expose()),(e,t)=>(s(),p(o(a)))}})})),R,z=e((()=>{L(),L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1ChipGroup`,exportName:`default`,displayName:`D1ChipGroup`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/ChipGroup/D1ChipGroup.vue`]})})),B,V,H,U,W=e((()=>{b(),P(),B=[{name:`chipAttrs`,type:`ConstrBind<ChipProps> | undefined`},{name:`iconWhenSelected`,type:`boolean | undefined`},{name:`keyLabel`,type:`string | undefined`},{name:`keyValue`,type:`string | undefined`},{name:`list`,type:`ChipGroupData | undefined`},{name:`modelSelected`,type:`ListSelectedList | undefined`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void) | undefined`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void) | undefined`},{name:`readonly`,type:`boolean | undefined`},{name:`selected`,type:`ListSelectedList | undefined`}],V=[{name:`default`,description:`Slot for displaying a custom list of chips/ Слот для отображения пользовательского списка чипов`,properties:[{name:`props`,type:`(any) | undefined`}]}],H=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`ListSelectedList`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`ListSelectedList`}]}],U={component:`ChipGroup`,props:B,slots:V,events:H,defaults:N,wikiDesign:_}})),G,K=e((()=>{re(),v(),W(),G=new x(U.component,U.props,U.defaults,U.wikiDesign,ne,g)})),q=t({ChipGroup:()=>Y,ChipGroupSelection:()=>X,ChipGroupVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=e((()=>{z(),K(),m(),J={title:`Ui/ChipGroup`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={},X={name:`Состояния выбора`,render:()=>({components:{D1ChipGroup:R},template:`
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
    `})},Z={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1ChipGroup:R},setup(){return{multipleSelected:a([`option1`,`option3`])}},template:`
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