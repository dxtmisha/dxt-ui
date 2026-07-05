import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Bt as n,Ft as r,Gt as i,Jt as a,Lt as o,Rt as s,Ut as c,Xt as l,an as u,d,it as f,nn as p,rt as m,tt as h,u as g,zt as _}from"./iframe-B-LNhFWZ.js";import{d as v,f as y,m as b,n as x,o as S,p as C,s as w,t as ee,u as te}from"./wiki-DgltPJFG.js";import{n as ne,t as re}from"./ModelInclude-zsqgq6XZ-BDSuND0X.js";var T,E,D,O,k,A,j,M,N=t((()=>{y(),ne(),r(),g(),h(),T=class e{constructor(t,n,r){C(this,`element`,void 0),C(this,`classDesign`,void 0),C(this,`className`,void 0),C(this,`list`,void 0),C(this,`id`,`selectable-area--${f()}`),this.element=t,this.classDesign=n,this.className=r,this.list=e.getClassesList(n)}isMain(e){return!this.findItem(e)&&e.closest(`.${this.className}`)===this.getElement()}getId(){return this.id}getName(){return this.className}getElement(){return this.element.value}getRect(){return this.element.value?.getBoundingClientRect()}findClick(e){return e.closest(`.${this.id}.${this.list.click}, .${this.id} .${this.list.click}`)||void 0}findItem(e){return e.closest(`.${this.id}`)||void 0}findByValue(e){return this.element.value?.querySelector(`.${this.id}[data-value="${e}"]`)||void 0}findItems(){let e=this.element.value?.querySelectorAll(`.${this.id}`);return e?Array.from(e):[]}findSelection(){let e=this.element.value?.querySelectorAll(`.${this.id}.${this.list.selected}`);return e?Array.from(e):[]}setBlockSelection(e=!1){e?document.body.classList.add(this.list.body):document.body.classList.remove(this.list.body)}static getClassesList(e){let t=`${e}-selectableArea`;return{body:`${t}__blockSelection`,show:`${t}__square--show`,selected:`${t}__item--selected`,click:`${t}__click`}}},E=class{constructor(e,t,n){C(this,`classes`,void 0),C(this,`item`,void 0),C(this,`emits`,void 0),C(this,`on`,()=>{requestAnimationFrame(()=>{var e;let t=this.item.getNewArray();(e=this.emits)==null||e.call(this,`selected`,{items:this.classes.findItems(),itemsSelected:this.classes.findSelection(),selected:t,focus:t.length>0?t[t.length-1]:void 0})})}),this.classes=e,this.item=t,this.emits=n,i(()=>{l(this.item.item,this.on)})}},D=class{constructor(e,t,n,r){C(this,`props`,void 0),C(this,`classes`,void 0),C(this,`item`,void 0),C(this,`square`,void 0),C(this,`onClick`,e=>{if(this.props.disabled)return;let t=e.target;if(this.classes.findClick(t)){var n;let i=this.classes.findItem(t),a=i==null||(n=i.dataset)==null?void 0:n.value;if(a!==void 0){var r;(r=window.getSelection())==null||r.removeAllRanges();let t=e,n=t.shiftKey,i=t.ctrlKey||t.metaKey;n?this.item.selectionByShift(a):i||this.props.active?this.item.selectionByMeta(a):this.item.selectionByClick(a)}}}),C(this,`onMousedown`,e=>{if(!this.props.active&&!this.props.disabled&&!e.ctrlKey&&!e.shiftKey&&this.classes.isMain(e.target)){let t=this.classes.getRect();if(!t)return;let n=e.metaKey?[...this.item.get()]:[],r=this.getCoordinates(e);this.square.start({x:r.x-t.left,y:r.y-t.top},n),this.addListeners(),this.classes.setBlockSelection(!0)}}),C(this,`onMousemove`,e=>{if(this.isEnd(e)||this.isNoButtons(e)){e.preventDefault(),e.stopPropagation(),this.square.selectionBySquare(),this.square.end(),this.classes.setBlockSelection(!1),this.removeListeners(),this.item.set(this.square.getSelectedCurrent());return}let t=this.classes.getRect(),n=this.getCoordinates(e);t&&(this.square.move({x:n.x-t.left,y:n.y-t.top}),this.item.set(this.square.getSelectedCurrent()))}),this.props=e,this.classes=t,this.item=n,this.square=r}get binds(){return{onMousedown:this.onMousedown,onTouchstart:this.onMousedown}}isEnd(e){return[`mouseup`,`contextmenu`,`touchend`,`touchcancel`].includes(e.type)}isNoButtons(e){return e instanceof MouseEvent&&e.buttons===0}getCoordinates(e){return e instanceof MouseEvent?{x:e.clientX,y:e.clientY}:e instanceof TouchEvent&&e.touches.length>0?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:0,y:0}}addListeners(){window.addEventListener(`mousemove`,this.onMousemove),window.addEventListener(`mouseup`,this.onMousemove),window.addEventListener(`touchmove`,this.onMousemove,{passive:!1}),window.addEventListener(`touchend`,this.onMousemove,{passive:!1}),window.addEventListener(`touchcancel`,this.onMousemove,{passive:!1})}removeListeners(){window.removeEventListener(`mousemove`,this.onMousemove),window.removeEventListener(`mouseup`,this.onMousemove),window.removeEventListener(`touchmove`,this.onMousemove),window.removeEventListener(`touchend`,this.onMousemove),window.removeEventListener(`touchcancel`,this.onMousemove)}},O=class{constructor(e,t,n){C(this,`props`,void 0),C(this,`refs`,void 0),C(this,`classes`,void 0),C(this,`item`,p([])),C(this,`lastSelection`,void 0),C(this,`set`,e=>{this.item.value=m(e)}),C(this,`reset`,()=>{this.item.value=[]}),this.props=e,this.refs=t,this.classes=n,this.updateItemByProps(),i(()=>{l([t.selected],()=>{this.updateItemByProps(),this.updateSelection()},{deep:!0}),l(this.item,()=>this.updateSelection(),{deep:!0})})}get(){return this.item.value}getNewArray(){return[...this.item.value]}selectionByClick(e){return this.lastSelection=this.classes.findByValue(e),this.item.value=[e],this}selectionByMeta(e){let t=[...this.item.value],n=t.indexOf(e);return n===-1?t.push(e):t.splice(n,1),this.item.value=t,this}selectionByShift(e){if(this.lastSelection&&this.lastSelection.dataset?.value!==String(e)){let n=this.classes.findItems(),r=[],i=!1,a=!1;for(let o of n){var t;if((o===this.lastSelection||o.dataset?.value===String(e))&&(i?a=!0:i=!0),i&&(t=o.dataset)!=null&&t.value&&r.push(o.dataset.value),a)break}this.item.value=r}else this.selectionByClick(e);return this}updateItemByProps(){return this.props.selected?this.item.value=m(this.props.selected):this.item.value=[],this}updateSelection(){let e=this.item.value;return this.classes.findItems().forEach(t=>{let n=t.dataset?.value;n!==void 0&&e.includes(n)?t.classList.add(this.classes.list.selected):t.classList.remove(this.classes.list.selected)}),this}},k=class{constructor(e){C(this,`classes`,void 0),C(this,`squareElement`,p()),C(this,`selectedStart`,[]),C(this,`selectedCurrent`,[]),C(this,`client`,{x:0,y:0}),C(this,`property`,void 0),this.classes=e;let t=this.classes.getName();this.property={x:`--${t}-sys-square-x`,y:`--${t}-sys-square-y`,width:`--${t}-sys-square-width`,height:`--${t}-sys-square-height`}}getSquare(){return this.squareElement}getSelectedCurrent(){return this.selectedCurrent}selectionBySquare(){let e=this.squareElement.value;if(!e)return;let t=e.getBoundingClientRect(),n=this.classes.findItems();this.selectedCurrent=[...this.selectedStart],n.forEach(e=>{let n=e.getBoundingClientRect(),r=e.dataset?.value;if(n.right<t.left||n.bottom<t.top||n.left>t.right||n.top>t.bottom||!r)return;let i=this.selectedCurrent.indexOf(r);i===-1?this.selectedCurrent.push(r):this.selectedCurrent.splice(i,1)})}updateSquare(e){let t=e.x-this.client.x,n=e.y-this.client.y,r=this.squareElement.value;r&&(r.style.setProperty(this.property.x,`${t<0?e.x:this.client.x}px`),r.style.setProperty(this.property.y,`${n<0?e.y:this.client.y}px`),r.style.setProperty(this.property.width,`${Math.abs(t)}px`),r.style.setProperty(this.property.height,`${Math.abs(n)}px`))}start(e,t){let n=this.squareElement.value;this.client=e,this.selectedStart=t,this.updateSquare(e),n&&n.classList.add(this.classes.list.show)}move(e){this.updateSquare(e),this.selectionBySquare()}end(){let e=this.squareElement.value;e&&e.classList.remove(this.classes.list.show)}},A=class{constructor(e,t,n,r,i,a,o,s,c={}){C(this,`props`,void 0),C(this,`refs`,void 0),C(this,`element`,void 0),C(this,`classDesign`,void 0),C(this,`className`,void 0),C(this,`components`,void 0),C(this,`slots`,void 0),C(this,`emits`,void 0),C(this,`classes`,void 0),C(this,`item`,void 0),C(this,`square`,void 0),C(this,`emit`,void 0),C(this,`events`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{ModelIncludeConstructor:l=re,SelectableAreaClassesConstructor:u=T,SelectableAreaEmitConstructor:d=E,SelectableAreaEventsConstructor:f=D,SelectableAreaItemConstructor:p=O,SelectableAreaSquareConstructor:m=k}=c;this.classes=new u(n,r,i),this.item=new p(e,t,this.classes),this.square=new m(this.classes),this.emit=new d(this.classes,this.item,this.emits),this.events=new f(this.props,this.classes,this.item,this.square),new l(`selected`,this.emits,this.item.item)}get tag(){return this.props.tag||`div`}get slotData(){return{className:`${this.className}__item ${this.classes.getId()}`,classSelection:this.classes.list.selected,classClick:this.classes.list.click,selected:this.item.get(),onClick:this.events.onClick}}},j={tag:`div`},M=class extends d{constructor(e,t,r,i=A){super(e,t,r),C(this,`item`,void 0),C(this,`renderSquare`,()=>n(`div`,{ref:this.item.square.squareElement,class:this.classes?.value.square})),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{reset:this.item.item.reset,setSelected:this.item.item.set}}initClasses(){return{main:{},item:this.getSubClass(`item`),square:this.getSubClass(`square`)}}initStyles(){return{}}initRender(){let e=[];return this.initSlot(`default`,e,this.item.slotData),e.push(this.renderSquare()),n(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.events.binds},e)}}})),P,F=t((()=>{N(),P={...j}})),ie=t((()=>{})),I,L=t((()=>{r(),N(),F(),ie(),I=_({name:`D1SelectableArea`,__name:`D1SelectableArea`,props:c({modelSelected:{},"onUpdate:selected":{type:Function},"onUpdate:modelSelected":{type:Function},disabled:{type:Boolean},active:{type:Boolean},selected:{},tag:{}},P),emits:[`update:selected`,`update:modelSelected`,`selected`],setup(e,{expose:t,emit:n}){let r=new M(`d1.selectableArea`,e,{emits:n,classes:o(()=>({main:{"d1-selectableArea":!0}})),styles:o(()=>({}))}),i=r.render();return t(r.expose()),(e,t)=>(a(),s(u(i)))}})})),R,z=t((()=>{L(),L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1SelectableArea`,exportName:`default`,displayName:`D1SelectableArea`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/SelectableArea/D1SelectableArea.vue`]})})),B,V,H,U,W=t((()=>{ee(),F(),B=[{name:`active`,type:`boolean`},{name:`disabled`,type:`boolean`},{name:`modelSelected`,type:`string`},{name:`onUpdate:modelSelected`,type:`((value: string) => void)`},{name:`onUpdate:selected`,type:`((value: string) => void)`},{name:`selected`,type:`string | string[]`},{name:`tag`,type:`string`}],V=[{name:`default`,description:`Default slot containing the selectable children / Дефолтный слот, содержащий выделяемые дочерние элементы`,properties:[{name:`props`,type:`(SelectableAreaControl) | undefined`}]}],H=[{name:`selected`,description:`Event triggered when items are selected / Событие, вызываемое при выборе элементов`,properties:[{name:`parameters`,type:`SelectableAreaEventParameters`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`string`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`string`}]}],U={component:`SelectableArea`,props:B,slots:V,events:H,defaults:P,wikiDesign:x}})),G,K=t((()=>{v(),w(),W(),G=new te(U.component,U.props,U.defaults,U.wikiDesign,S,b)})),q=e({SelectableArea:()=>Y,SelectableAreaBasic:()=>X,SelectableAreaVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=t((()=>{z(),K(),r(),J={title:`Ui/SelectableArea`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={render:e=>({components:{D1SelectableArea:R},setup:()=>({args:e}),template:`
      <D1SelectableArea v-bind="args">
      <template #default="{ className, classClick, onClick }">
        <div
          class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
          <div
            v-for="item in 12"
            :key="item"
            :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center', className, classClick]"
            :data-value="'item-' + item"
            style="overflow: visible;"
            @click="onClick"
          >
            Item {{ item }}
          </div>
        </div>
      </template>
    </D1SelectableArea>
    `})},X={name:`Базовый`,render:()=>({components:{D1SelectableArea:R},template:`
        <D1SelectableArea>
          <template #default="{ className, classClick, onClick }">
            <div class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
              <div
                v-for="item in 6"
                :key="item"
                :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center', className, classClick]"
                :data-value="'item-' + item"
                @click="onClick"
              >
                Item {{ item }}
              </div>
            </div>
          </template>
        </D1SelectableArea>
    `})},Z={name:`v-model`,render:()=>({components:{D1SelectableArea:R},setup(){return{selected:p([`item-2`,`item-3`])}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Selected items: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = []">Reset</button>
            <button class="wiki-storybook-button" @click="selected = ['item-1', 'item-2', 'item-3']">Select 1-3</button>
          </div>

          <D1SelectableArea
            v-model:selected="selected"
          >
            <template #default="{ className, classSelection, classClick, onClick }">
              <div class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
                <div
                  v-for="item in 6"
                  :key="item"
                  :class="[
                    'wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center',
                    className,
                    classClick,
                    selected.includes('item-' + item) && classSelection
                  ]"
                  :data-value="'item-' + item"
                  @click="onClick"
                >
                  Item {{ item }}
                </div>
              </div>
            </template>
          </D1SelectableArea>
        </div>
    `})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1SelectableArea
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1SelectableArea v-bind="args">
      <template #default="{ className, classClick, onClick }">
        <div
          class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
          <div
            v-for="item in 12"
            :key="item"
            :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center', className, classClick]"
            :data-value="'item-' + item"
            style="overflow: visible;"
            @click="onClick"
          >
            Item {{ item }}
          </div>
        </div>
      </template>
    </D1SelectableArea>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Базовый',
  render: () => ({
    components: {
      D1SelectableArea
    },
    template: \`
        <D1SelectableArea>
          <template #default="{ className, classClick, onClick }">
            <div class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
              <div
                v-for="item in 6"
                :key="item"
                :class="['wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center', className, classClick]"
                :data-value="'item-' + item"
                @click="onClick"
              >
                Item {{ item }}
              </div>
            </div>
          </template>
        </D1SelectableArea>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'v-model',
  render: () => ({
    components: {
      D1SelectableArea
    },
    setup() {
      return {
        selected: ref(['item-2', 'item-3'])
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Selected items: {{ selected }}</span>
            <button class="wiki-storybook-button" @click="selected = []">Reset</button>
            <button class="wiki-storybook-button" @click="selected = ['item-1', 'item-2', 'item-3']">Select 1-3</button>
          </div>

          <D1SelectableArea
            v-model:selected="selected"
          >
            <template #default="{ className, classSelection, classClick, onClick }">
              <div class="wiki-storybook-group wiki-storybook-group--gapX3 wiki-storybook-item--paddingX2">
                <div
                  v-for="item in 6"
                  :key="item"
                  :class="[
                    'wiki-storybook-item wiki-storybook-item--squared--xs wiki-storybook-item--center',
                    className,
                    classClick,
                    selected.includes('item-' + item) && classSelection
                  ]"
                  :data-value="'item-' + item"
                  @click="onClick"
                >
                  Item {{ item }}
                </div>
              </div>
            </template>
          </D1SelectableArea>
        </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`SelectableArea`,`SelectableAreaBasic`,`SelectableAreaVModel`]}));$();export{Y as SelectableArea,X as SelectableAreaBasic,Z as SelectableAreaVModel,Q as __namedExportsOrder,J as default,K as i,$ as n,G as r,q as t};