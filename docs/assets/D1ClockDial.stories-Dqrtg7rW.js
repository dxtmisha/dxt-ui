import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{$ as n,Bt as r,Dt as i,Ft as a,Gt as o,It as s,M as c,Nt as l,Ot as u,Pt as d,Ut as f,bt as p,dt as m,g as h,in as g,kt as _,p as v,sn as y}from"./library-CO1fW2cN.js";import{E as b,O as ee,d as te,f as ne,i as re,l as ie,n as ae,t as oe,u as se}from"./wiki-BMj2WokS.js";import{n as x,t as ce}from"./AriaStaticInclude-DoPfNULn-CgdAxtFN.js";import{n as le,t as ue}from"./EnabledInclude-BNFNe4Fq-BJoPNyNt.js";import{n as de,t as fe}from"./ModelValueInclude-BypGaGVO-p-Vy-evW.js";var S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{ce(),ue(),de(),_(),b(),u(),S=class{constructor(e,t,n,r){i(this,`props`,void 0),i(this,`className`,void 0),i(this,`list`,void 0),i(this,`valueItem`,void 0),this.props=e,this.className=t,this.list=n,this.valueItem=r}get styleHour(){if(this.valueItem.isHourVisible()){let e=30*this.valueItem.hour;return this.valueItem.isMinuteVisible()&&(e+=30/60*this.valueItem.minute),this.valueItem.isSecondVisible()&&(e+=30/3600*this.valueItem.second),{[`--${this.className}-sys-arrowRotate`]:`${e}deg`}}return{}}get styleMinute(){if(this.valueItem.isMinuteVisible()){let e=6*this.valueItem.minute;return this.valueItem.isSecondVisible()&&(e+=360/3600*this.valueItem.second),{[`--${this.className}-sys-arrowRotate`]:`${e}deg`}}return{}}get styleSecond(){if(this.valueItem.isSecondVisible()){let e=6*this.valueItem.second;return{[`--${this.className}-sys-arrowRotate`]:`${e}deg`}}return{}}get styleSelect(){if(this.valueItem.isArrowSelectVisible()){let e=this.list.rotate*this.valueItem.value;return{[`--${this.className}-sys-arrowRotate`]:`${e}deg`}}return{}}},C=class{constructor(e,t,n,r,a){i(this,`props`,void 0),i(this,`emitsItem`,void 0),i(this,`enabled`,void 0),i(this,`list`,void 0),i(this,`valueItem`,void 0),i(this,`decrease`,()=>{!this.enabled.isEnabled||this.props.clock||this.step(!1)}),i(this,`increase`,()=>{!this.enabled.isEnabled||this.props.clock||this.step(!0)}),i(this,`toEdge`,e=>{let t=this.getEnabledMarks();if(t.length===0)return;let n=e?t[t.length-1]:t[0];n&&this.updateValue(n.value)}),this.props=e,this.emitsItem=t,this.enabled=n,this.list=r,this.valueItem=a}findClosestIndex(e,t){let n=0,r=1/0;for(let i=0;i<t.length;i++){let a=Math.abs(t[i].value-e);a<r&&(r=a,n=i)}return n}getEnabledMarks(){return this.list.marks.value.filter(e=>!e.disabled)}getNextIndex(e,t,n){return t?(e+1)%n:(e-1+n)%n}step(e){let t=this.getEnabledMarks();if(t.length===0||this.stepInitial(e,t))return;let n=this.valueItem.value,r=t.findIndex(e=>e.value===n),i=r===-1?this.findClosestIndex(n,t):r,a=t[this.getNextIndex(i,e,t.length)];a&&this.updateValue(a.value)}stepInitial(e,t){if(this.valueItem.isSelectVisible())return!1;let n=e?t[0]:t[t.length-1];return this.updateValue(n.value),!0}updateValue(e){this.valueItem.set(e),this.emitsItem.emit(`input`),this.emitsItem.emit(`change`)}},w=class{constructor(e,t,n,r){i(this,`props`,void 0),i(this,`list`,void 0),i(this,`valueItem`,void 0),i(this,`emits`,void 0),this.props=e,this.list=t,this.valueItem=n,this.emits=r}emit(e=`input`){let t=this.valueItem.value,n=this.list.find(t),r={clock:this.props.type,item:n,value:t};if(e===`input`){var i,a;(i=this.emits)==null||i.call(this,`input`,r,t),(a=this.emits)==null||a.call(this,`inputLite`,t)}else if(e===`change`){var o,s;(o=this.emits)==null||o.call(this,`change`,r,t),(s=this.emits)==null||s.call(this,`changeLite`,t)}}},T=class{constructor(e,t,n,r,a,o,s){i(this,`props`,void 0),i(this,`control`,void 0),i(this,`emitsItem`,void 0),i(this,`enabled`,void 0),i(this,`model`,void 0),i(this,`select`,void 0),i(this,`element`,void 0),i(this,`isChanged`,!1),i(this,`isDragging`,!1),i(this,`onClick`,e=>{var t,n;if(!this.enabled.isEnabled||this.props.clock)return;(t=this.element)==null||(t=t.value)==null||t.focus();let r=e.target?.closest(`[data-value]`);if((r==null||(n=r.dataset)==null?void 0:n.value)!==void 0){let e=Number(r.dataset.value);isNaN(e)||(this.model.set(e),this.emitsItem.emit(`input`),this.emitsItem.emit(`change`))}}),i(this,`onKeydown`,e=>{if(!(!this.enabled.isEnabled||this.props.clock))switch(h(e)){case`ArrowRight`:case`ArrowUp`:e.preventDefault(),this.control.increase();break;case`ArrowLeft`:case`ArrowDown`:e.preventDefault(),this.control.decrease();break;case`Home`:e.preventDefault(),this.control.toEdge(!1);break;case`End`:e.preventDefault(),this.control.toEdge(!0)}}),i(this,`onStart`,e=>{var t;!this.enabled.isEnabled||this.props.clock||`button`in e&&e.button!==0||((t=this.element)==null||(t=t.value)==null||t.focus(),e.preventDefault(),this.isDragging=!0,this.isChanged=!1,this.updateByCoordinates(e),this.startListeners())}),i(this,`onPointerEnd`,()=>{this.isDragging&&(this.isDragging=!1,this.stopListeners(),this.isChanged&&=(this.emitsItem.emit(`change`),!1))}),i(this,`onPointerMove`,e=>{this.isDragging&&this.updateByCoordinates(e)}),this.props=e,this.control=t,this.emitsItem=n,this.enabled=r,this.model=a,this.select=o,this.element=s,f(()=>{this.stopListeners()})}startListeners(){window.addEventListener(`mousemove`,this.onPointerMove),window.addEventListener(`mouseup`,this.onPointerEnd),window.addEventListener(`touchmove`,this.onPointerMove,{passive:!1}),window.addEventListener(`touchend`,this.onPointerEnd),window.addEventListener(`touchcancel`,this.onPointerEnd)}stopListeners(){window.removeEventListener(`mousemove`,this.onPointerMove),window.removeEventListener(`mouseup`,this.onPointerEnd),window.removeEventListener(`touchmove`,this.onPointerMove),window.removeEventListener(`touchend`,this.onPointerEnd),window.removeEventListener(`touchcancel`,this.onPointerEnd)}updateByCoordinates(e){let{x:t,y:n}=c(e);this.select.selectByCoordinates(t,n)&&(this.isChanged=!0,this.emitsItem.emit(`input`))}},E=class{constructor(e,t){i(this,`props`,void 0),i(this,`className`,void 0),i(this,`marks`,l(()=>{let e=[],t=this.maxCount,n=this.rotate,r=p(this.props.min??0),i=p(this.props.max??60),a=p(this.props.step??1);for(let o=1;o<=t;o++){let s=o===t&&t!==12?0:o,c=`${n*o}deg`,l=s<10?`0${s}`:`${s}`,u=t===24&&(s>12||s===0),d=a<=1||(s-r)%a===0,f=!!this.props.disabled||s<r||s>i||!d;e.push({name:l,rotate:c,section:u,style:{[`--${this.className}-sys-valueRotate`]:c},value:s,disabled:f})}return e})),this.props=e,this.className=t}get maxCount(){switch(this.props.type){case`12`:return 12;case`24`:return 24;default:return 60}}get rotate(){switch(this.props.type){case`12`:case`24`:return 30;default:return 6}}isSection(e){let t=this.find(e);return!!(t!=null&&t.section)}find(e){if(e!==void 0&&e!==-1)return this.marks.value.find(t=>t.value===e)}},D=class{constructor(e,t,n,r){i(this,`props`,void 0),i(this,`list`,void 0),i(this,`model`,void 0),i(this,`enabled`,void 0),i(this,`itemElements`,new Map),i(this,`selectByCoordinates`,(e,t)=>{if(!this.enabled.isEnabled)return null;let n=this.list.marks.value,r,i;for(let a=0;a<n.length;a++){let o=n[a];if(o.disabled)continue;let s=this.itemElements.get(a);if(!s)continue;let c=s.getBoundingClientRect(),l=c.left+c.width/2,u=c.top+c.height/2,d=e-l,f=t-u,p=d*d+f*f;(r===void 0||p<r)&&(r=p,i=o)}return i&&!i.disabled&&i.value!==this.model.getValue()?(this.model.set(i.value),i):null}),this.props=e,this.list=t,this.model=n,this.enabled=r}setElement(e,t){t?this.itemElements.set(e,t):this.itemElements.delete(e)}reset(){return this.itemElements.clear(),this}},O=class{constructor(e,t){i(this,`props`,void 0),i(this,`model`,void 0),this.props=e,this.model=t}get hour(){return this.props.hour??0}get minute(){return this.props.minute??0}get second(){return this.props.second??0}get text(){let e=new Date(1970,0,1,this.hour,this.minute,this.second);return new v().date(e,this.isSecondVisible()?`time`:`hour-minute`,void 0,this.props.type===`24`)}get value(){return Number(this.model.getValue()??0)}isArrowSelectVisible(){return this.isSelectVisible()&&(this.props.type!==`12`||this.value>0)}isHourVisible(){return!n(this.props.hour)}isMinuteVisible(){return!n(this.props.minute)}isSecondVisible(){return!n(this.props.second)}isSelectVisible(){return!this.props.clock&&!n(this.model.getValue())}isTextVisible(){return!!(this.props.clock&&this.props.showTime)}set(e){this.model.set(e)}},k=class{constructor(e,t,n,r,a,o,s,c,u={}){i(this,`props`,void 0),i(this,`refs`,void 0),i(this,`element`,void 0),i(this,`classDesign`,void 0),i(this,`className`,void 0),i(this,`components`,void 0),i(this,`slots`,void 0),i(this,`emits`,void 0),i(this,`arrows`,void 0),i(this,`control`,void 0),i(this,`emitsItem`,void 0),i(this,`enabled`,void 0),i(this,`event`,void 0),i(this,`list`,void 0),i(this,`model`,void 0),i(this,`select`,void 0),i(this,`valueItem`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=a,this.components=o,this.slots=s,this.emits=c;let{EnabledIncludeConstructor:d=le,ModelValueIncludeConstructor:f=fe,ClockDialListConstructor:p=E,ClockDialValueConstructor:m=O,ClockDialArrowsConstructor:h=S,ClockDialSelectConstructor:g=D,ClockDialEmitConstructor:_=w,ClockDialControlConstructor:v=C,ClockDialEventConstructor:y=T}=u;this.enabled=new d(e),this.model=new f(`value`,c,void 0,l(()=>this.props.modelValue??this.props.value),t.readonly),this.list=new p(e,a),this.valueItem=new m(e,this.model),this.arrows=new h(e,a,this.list,this.valueItem),this.select=new g(e,this.list,this.model,this.enabled),this.emitsItem=new _(e,this.list,this.valueItem,c),this.control=new v(e,this.emitsItem,this.enabled,this.list,this.valueItem),this.event=new y(e,this.control,this.emitsItem,this.enabled,this.model,this.select,this.element)}get aria(){return this.props.clock?{...x.role(`timer`),...x.label(this.valueItem.text),...this.enabled.aria}:{...x.role(`slider`),...x.valueMinMax(this.valueItem.value,this.props.min,this.props.max),...this.enabled.aria}}get binds(){return{tabindex:this.tabindex,onKeydown:this.event.onKeydown,...this.aria}}get classes(){return{[`${this.className}--section`]:this.list.isSection(this.valueItem.value),[`${this.className}--selected`]:this.valueItem.isSelectVisible()}}get styles(){return{}}get tabindex(){return this.props.clock?void 0:this.enabled.isEnabled?0:-1}},A=class extends ee{constructor(e,t,n,r=k){super(e,t,n),i(this,`item`,void 0),i(this,`renderList`,()=>{let e=this.item.list.marks.value,t=this.item.valueItem.value;this.item.select.reset();let n=e.map((e,n)=>{var r;let i=e.value===t&&this.item.valueItem.isSelectVisible(),a=(r=this.slots)!=null&&r.item?this.initSlot(`item`,void 0,{item:e}):e.name;return s(`span`,{key:`${e.value}-${n}`,class:{[`${this.classes?.value.value}`]:!0,[`${this.classes?.value.value}--selected`]:i,[`${this.classes?.value.value}--disabled`]:e.disabled},"data-value":e.value,style:e.style,onClick:this.item.event.onClick},[s(`span`,{ref:e=>this.item.select.setElement(n,e),class:this.classes?.value.name},a)])});return[s(`div`,this.getKeyClass(`list`),n)]}),i(this,`renderInfo`,()=>{let e=[];return this.item.valueItem.isArrowSelectVisible()?e.push(s(`span`,{class:[this.classes?.value.arrow,this.classes?.value.arrowSelect],style:this.item.arrows.styleSelect})):this.props.clock&&(this.item.valueItem.isHourVisible()&&e.push(s(`span`,{class:[this.classes?.value.arrow,this.classes?.value.arrowHour],style:this.item.arrows.styleHour})),this.item.valueItem.isMinuteVisible()&&e.push(s(`span`,{class:[this.classes?.value.arrow,this.classes?.value.arrowMinute],style:this.item.arrows.styleMinute})),this.item.valueItem.isSecondVisible()&&e.push(s(`span`,{class:[this.classes?.value.arrow,this.classes?.value.arrowSecond],style:this.item.arrows.styleSecond}))),[s(`div`,this.getKeyClass(`info`),e)]}),i(this,`renderPoint`,()=>[s(`div`,this.getKeyClass(`point`))]),i(this,`renderDial`,()=>{let e=this.initSlot(`default`)??(this.item.valueItem.isTextVisible()?this.item.valueItem.text:void 0);return[s(`div`,this.getKeyClass(`dial`),e)]}),i(this,`renderCensor`,()=>this.item.valueItem.isSelectVisible()?[s(`div`,{class:this.classes?.value.censor,onMousedown:this.item.event.onStart,onTouchstart:this.item.event.onStart})]:[]),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{getValue:this.item.model.getValue,setValue:this.item.model.set,selectByCoordinates:this.item.select.selectByCoordinates}}initClasses(){return{main:{...this.item.classes},list:this.getSubClass(`list`),value:this.getSubClass(`value`),name:this.getSubClass(`name`),info:this.getSubClass(`info`),arrow:this.getSubClass(`arrow`),arrowHour:this.getSubClass(`arrowHour`),arrowMinute:this.getSubClass(`arrowMinute`),arrowSecond:this.getSubClass(`arrowSecond`),arrowSelect:this.getSubClass(`arrowSelect`),point:this.getSubClass(`point`),dial:this.getSubClass(`dial`),censor:this.getSubClass(`censor`)}}initStyles(){return{...this.item.styles}}initRender(){let e=[...this.renderList(),...this.renderInfo(),...this.renderPoint(),...this.renderDial(),...this.renderCensor()];return s(`div`,{ref:this.element,class:this.classes?.value.main,style:this.styles?.value,...this.item.binds},e)}},j={min:0,max:60,step:1,type:`12`}})))()}var N,P;function F(){return(F=e((()=>{M(),N={type:[`12`,`24`,`minute`,`second`],palette:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},P={...j,type:`12`}})))()}var I;function L(){return(L=e((()=>{_(),b(),M(),F(),I=a({name:`D1ClockDial`,__name:`D1ClockDial`,props:r({modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},readonly:{type:Boolean},disabled:{type:Boolean},step:{},min:{},max:{},value:{},hour:{},minute:{},second:{},clock:{type:Boolean},showTime:{type:Boolean},type:{},palette:{}},P),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:n}){let r=n,i=e,a=l(()=>({main:{"d1-clockDial":!0,"d1-clockDial--disabled":i.disabled,"d1-clockDial--readonly":i.readonly,[`d1-clockDial--type--${i.type}`]:m(N.type,i.type),[`d1-palette d1-palette--${i.palette}`]:m(N.palette,i.palette)}})),s=l(()=>({})),c=new A(`d1.clockDial`,i,{emits:r,classes:a,styles:s}),u=c.render();return t(c.expose()),(e,t)=>(o(),d(y(u)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1ClockDial`,exportName:`default`,displayName:`D1ClockDial`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/ClockDial/D1ClockDial.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{oe(),F(),B=[{name:`clock`,type:`boolean`},{name:`disabled`,type:`boolean`},{name:`hour`,type:`number`},{name:`max`,type:`NumberOrString`},{name:`min`,type:`NumberOrString`},{name:`minute`,type:`number`},{name:`modelValue`,type:`number`},{name:`onUpdate:modelValue`,type:`((value: number) => void)`},{name:`onUpdate:value`,type:`((value: number) => void)`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`readonly`,type:`boolean`},{name:`second`,type:`number`},{name:`showTime`,type:`boolean`},{name:`step`,type:`NumberOrString`},{name:`type`,type:`string`,option:[`12`,`24`,`minute`,`second`]},{name:`value`,type:`number`}],V=[{name:`default`,description:`Default center dial slot / Слот по умолчанию для центрального циферблата`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`item`,description:`Custom clock item slot / Слот для пользовательского элемента часов`,properties:[{name:`props`,type:`(ClockDialMarkSlot) | undefined`}]}],H=[{name:`change`,description:`Change event triggered on interaction end / Событие изменения, вызываемое при завершении взаимодействия`,properties:[{name:`event`,type:`ClockDialEventItem`},{name:`value`,type:`number`}]},{name:`changeLite`,description:`Change event lite version / Упрощенная версия события изменения`,properties:[{name:`value`,type:`number`}]},{name:`input`,description:`Input event triggered on selection change / Событие ввода, вызываемое при изменении выбора`,properties:[{name:`event`,type:`ClockDialEventItem`},{name:`value`,type:`number`}]},{name:`inputLite`,description:`Input event lite version / Упрощенная версия события ввода`,properties:[{name:`value`,type:`number`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`number`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`number`}]}],U={component:`ClockDial`,props:B,slots:V,events:H,defaults:P,wikiDesign:ae}})))()}var G;function K(){return(K=e((()=>{te(),ie(),W(),G=new se(U.component,U.props,U.defaults,U.wikiDesign,re,ne)})))()}var pe=t({ClockDial:()=>J,ClockDialClock:()=>Z,ClockDialType:()=>Y,ClockDialVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),_(),q={title:`Ui/ClockDial`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={render:e=>({components:{D1ClockDial:R},setup:()=>({args:e}),template:`
      <D1ClockDial v-bind="args" />
    `})},Y={name:`Типы циферблата и ограничения`,render:()=>({components:{D1ClockDial:R},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">12-Hour</div>
            <D1ClockDial type="12" :value="10" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">24-Hour (min: 9, max: 18)</div>
            <D1ClockDial
              type="24"
              :value="16"
              :min="9"
              :max="18"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Minute (step: 5)</div>
            <D1ClockDial
              type="minute"
              :value="45"
              :step="5"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Second</div>
            <D1ClockDial type="second" :value="30" />
          </div>
        </div>
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1ClockDial:R},setup(){return{hour:g(9)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Selected hour: {{ hour }}</span>
            <button class="wiki-storybook-button" @click="hour = 12">Set 12</button>
            <button class="wiki-storybook-button" @click="hour = 6">Set 6</button>
          </div>
          <D1ClockDial
            v-model="hour"
            type="12"
          />
        </div>
    `})},Z={name:`Режим часов со стрелками`,render:()=>({components:{D1ClockDial:R},template:`
        <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
          <div class="wiki-storybook-item__label">10:15:30</div>
          <D1ClockDial
            clock
            type="12"
            :hour="10"
            :minute="15"
            :second="30"
          />
        </div>
    `})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1ClockDial
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1ClockDial v-bind="args" />
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Типы циферблата и ограничения',
  render: () => ({
    components: {
      D1ClockDial
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">12-Hour</div>
            <D1ClockDial type="12" :value="10" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">24-Hour (min: 9, max: 18)</div>
            <D1ClockDial
              type="24"
              :value="16"
              :min="9"
              :max="18"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Minute (step: 5)</div>
            <D1ClockDial
              type="minute"
              :value="45"
              :step="5"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Second</div>
            <D1ClockDial type="second" :value="30" />
          </div>
        </div>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1ClockDial
    },
    setup() {
      const hour = ref(9);
      return {
        hour
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Selected hour: {{ hour }}</span>
            <button class="wiki-storybook-button" @click="hour = 12">Set 12</button>
            <button class="wiki-storybook-button" @click="hour = 6">Set 6</button>
          </div>
          <D1ClockDial
            v-model="hour"
            type="12"
          />
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Режим часов со стрелками',
  render: () => ({
    components: {
      D1ClockDial
    },
    template: \`
        <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
          <div class="wiki-storybook-item__label">10:15:30</div>
          <D1ClockDial
            clock
            type="12"
            :hour="10"
            :minute="15"
            :second="30"
          />
        </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`ClockDial`,`ClockDialType`,`ClockDialVModel`,`ClockDialClock`]})))()}export{pe as a,K as c,X as i,Z as n,$ as o,Y as r,G as s,J as t};