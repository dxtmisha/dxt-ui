import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,R as o,Rt as s,Ut as c,Vt as l,in as u,jt as d,m as f,nt as p,o as m,tn as h,v as g,yt as _}from"./library-C6UyfMBX.js";import{D as v,d as ee,f as te,g as y,i as ne,n as re,s as ie,t as ae,u as oe}from"./wiki-Cqdd-d3l.js";import{n as b,t as se}from"./AriaStaticInclude-B7pfWpnd-C1oc8ai_.js";import{n as ce,t as le}from"./EnabledInclude-B0gdl7cf-Kmkn25j8.js";import{n as ue,t as x}from"./ModelValueInclude-DK2ZpGrS-C_TnDBXZ.js";var S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{se(),le(),ue(),n(),v(),S=class{props;className;list;valueItem;constructor(e,t,n,r){this.props=e,this.className=t,this.list=n,this.valueItem=r}get styleHour(){if(this.valueItem.isHourVisible()){let e=30*this.valueItem.hour;return this.valueItem.isMinuteVisible()&&(e+=30/60*this.valueItem.minute),this.valueItem.isSecondVisible()&&(e+=30/3600*this.valueItem.second),{[`--${this.className}-sys-arrowRotate`]:`${e}deg`}}return{}}get styleMinute(){if(this.valueItem.isMinuteVisible()){let e=6*this.valueItem.minute;return this.valueItem.isSecondVisible()&&(e+=360/3600*this.valueItem.second),{[`--${this.className}-sys-arrowRotate`]:`${e}deg`}}return{}}get styleSecond(){if(this.valueItem.isSecondVisible()){let e=6*this.valueItem.second;return{[`--${this.className}-sys-arrowRotate`]:`${e}deg`}}return{}}get styleSelect(){if(this.valueItem.isArrowSelectVisible()){let e=this.list.rotate*this.valueItem.value;return{[`--${this.className}-sys-arrowRotate`]:`${e}deg`}}return{}}},C=class{props;emitsItem;enabled;list;valueItem;constructor(e,t,n,r,i){this.props=e,this.emitsItem=t,this.enabled=n,this.list=r,this.valueItem=i}decrease=()=>{this.enabled.isEnabled&&!this.props.clock&&this.step(!1)};increase=()=>{this.enabled.isEnabled&&!this.props.clock&&this.step(!0)};toEdge=e=>{let t=this.getEnabledMarks();if(t.length===0)return;let n=e?t[t.length-1]:t[0];n&&this.updateValue(n.value)};findClosestIndex(e,t){let n=0,r=1/0;for(let i=0;i<t.length;i++){let a=Math.abs(t[i].value-e);a<r&&(r=a,n=i)}return n}getEnabledMarks(){return this.list.marks.value.filter(e=>!e.disabled)}getNextIndex(e,t,n){return t?(e+1)%n:(e-1+n)%n}step(e){let t=this.getEnabledMarks();if(t.length===0||this.stepInitial(e,t))return;let n=this.valueItem.value,r=t.findIndex(e=>e.value===n),i=r===-1?this.findClosestIndex(n,t):r,a=t[this.getNextIndex(i,e,t.length)];a&&this.updateValue(a.value)}stepInitial(e,t){if(this.valueItem.isSelectVisible())return!1;let n=e?t[0]:t[t.length-1];return this.updateValue(n.value),!0}updateValue(e){this.valueItem.set(e),this.emitsItem.emit(`input`),this.emitsItem.emit(`change`)}},w=class{props;list;valueItem;emits;constructor(e,t,n,r){this.props=e,this.list=t,this.valueItem=n,this.emits=r}emit(e=`input`){let t=this.valueItem.value,n=this.list.find(t),r={clock:this.props.type,item:n,value:t};e===`input`?(this.emits?.(`input`,r,t),this.emits?.(`inputLite`,t)):e===`change`&&(this.emits?.(`change`,r,t),this.emits?.(`changeLite`,t))}},T=class{props;control;emitsItem;enabled;model;select;element;isChanged=!1;isDragging=!1;constructor(e,t,n,r,i,a,o){this.props=e,this.control=t,this.emitsItem=n,this.enabled=r,this.model=i,this.select=a,this.element=o,l(()=>{this.stopListeners()})}onClick=e=>{if(!this.enabled.isEnabled||this.props.clock)return;this.element?.value?.focus();let t=e.target?.closest(`[data-value]`);if(t?.dataset?.value!==void 0){let e=Number(t.dataset.value);isNaN(e)||(this.model.set(e),this.emitsItem.emit(`input`),this.emitsItem.emit(`change`))}};onKeydown=e=>{if(this.enabled.isEnabled&&!this.props.clock)switch(g(e)){case`ArrowRight`:case`ArrowUp`:e.preventDefault(),this.control.increase();break;case`ArrowLeft`:case`ArrowDown`:e.preventDefault(),this.control.decrease();break;case`Home`:e.preventDefault(),this.control.toEdge(!1);break;case`End`:e.preventDefault(),this.control.toEdge(!0)}};onStart=e=>{!this.enabled.isEnabled||this.props.clock||`button`in e&&e.button!==0||(this.element?.value?.focus(),e.preventDefault(),this.isDragging=!0,this.isChanged=!1,this.updateByCoordinates(e),this.startListeners())};onPointerEnd=()=>{this.isDragging&&(this.isDragging=!1,this.stopListeners(),this.isChanged&&=(this.emitsItem.emit(`change`),!1))};onPointerMove=e=>{this.isDragging&&this.updateByCoordinates(e)};startListeners(){window.addEventListener(`mousemove`,this.onPointerMove),window.addEventListener(`mouseup`,this.onPointerEnd),window.addEventListener(`touchmove`,this.onPointerMove,{passive:!1}),window.addEventListener(`touchend`,this.onPointerEnd),window.addEventListener(`touchcancel`,this.onPointerEnd)}stopListeners(){window.removeEventListener(`mousemove`,this.onPointerMove),window.removeEventListener(`mouseup`,this.onPointerEnd),window.removeEventListener(`touchmove`,this.onPointerMove),window.removeEventListener(`touchend`,this.onPointerEnd),window.removeEventListener(`touchcancel`,this.onPointerEnd)}updateByCoordinates(e){let{x:t,y:n}=m(e);this.select.selectByCoordinates(t,n)&&(this.isChanged=!0,this.emitsItem.emit(`input`))}},E=class{props;className;marks=d(()=>{let e=[],t=this.maxCount,n=this.rotate,r=_(this.props.min??0),i=_(this.props.max??60),a=_(this.props.step??1);for(let o=1;o<=t;o++){let s=o===t&&t!==12?0:o,c=`${n*o}deg`,l=s<10?`0${s}`:`${s}`,u=t===24&&(s>12||s===0),d=a<=1||(s-r)%a===0,f=!!this.props.disabled||s<r||s>i||!d;e.push({name:l,rotate:c,section:u,style:{[`--${this.className}-sys-valueRotate`]:c},value:s,disabled:f})}return e});constructor(e,t){this.props=e,this.className=t}get maxCount(){switch(this.props.type){case`12`:return 12;case`24`:return 24;default:return 60}}get rotate(){switch(this.props.type){case`12`:case`24`:return 30;default:return 6}}isSection(e){return!!this.find(e)?.section}find(e){if(e!==void 0&&e!==-1)return this.marks.value.find(t=>t.value===e)}},D=class{props;list;model;enabled;itemElements=new Map;constructor(e,t,n,r){this.props=e,this.list=t,this.model=n,this.enabled=r}setElement(e,t){t?this.itemElements.set(e,t):this.itemElements.delete(e)}reset(){return this.itemElements.clear(),this}selectByCoordinates=(e,t)=>{if(!this.enabled.isEnabled)return null;let n=this.list.marks.value,r,i;for(let a=0;a<n.length;a++){let o=n[a];if(o.disabled)continue;let s=this.itemElements.get(a);if(!s)continue;let c=s.getBoundingClientRect(),l=c.left+c.width/2,u=c.top+c.height/2,d=e-l,f=t-u,p=d*d+f*f;(r===void 0||p<r)&&(r=p,i=o)}return i&&!i.disabled&&i.value!==this.model.get()?(this.model.set(i.value),i):null}},O=class{props;model;constructor(e,t){this.props=e,this.model=t}get hour(){return this.props.hour??0}get minute(){return this.props.minute??0}get second(){return this.props.second??0}get text(){let e=new Date(1970,0,1,this.hour,this.minute,this.second);return new f().date(e,this.isSecondVisible()?`time`:`hour-minute`,void 0,this.props.type===`24`)}get value(){return Number(this.model.get()??0)}isArrowSelectVisible(){return this.isSelectVisible()&&(this.props.type!==`12`||this.value>0)}isHourVisible(){return!o(this.props.hour)}isMinuteVisible(){return!o(this.props.minute)}isSecondVisible(){return!o(this.props.second)}isSelectVisible(){return!this.props.clock&&!o(this.model.get())}isTextVisible(){return!!(this.props.clock&&this.props.showTime)}set(e){this.model.set(e)}},k=class{props;refs;element;classDesign;className;components;slots;emits;arrows;control;emitsItem;enabled;event;list;model;select;valueItem;constructor(e,t,n,r,i,a,o,s,c={}){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{EnabledIncludeConstructor:l=ce,ModelValueIncludeConstructor:u=x,ClockDialListConstructor:f=E,ClockDialValueConstructor:p=O,ClockDialArrowsConstructor:m=S,ClockDialSelectConstructor:h=D,ClockDialEmitConstructor:g=w,ClockDialControlConstructor:_=C,ClockDialEventConstructor:v=T}=c;this.enabled=new l(e),this.model=new u(`value`,s,void 0,d(()=>this.props.modelValue??this.props.value),t.readonly),this.list=new f(e,i),this.valueItem=new p(e,this.model),this.arrows=new m(e,i,this.list,this.valueItem),this.select=new h(e,this.list,this.model,this.enabled),this.emitsItem=new g(e,this.list,this.valueItem,s),this.control=new _(e,this.emitsItem,this.enabled,this.list,this.valueItem),this.event=new v(e,this.control,this.emitsItem,this.enabled,this.model,this.select,this.element)}get aria(){return this.props.clock?{...b.role(`timer`),...b.label(this.valueItem.text),...this.enabled.aria}:{...b.role(`slider`),...b.valueMinMax(this.valueItem.value,this.props.min,this.props.max),...this.enabled.aria}}get binds(){return{tabindex:this.tabindex,onKeydown:this.event.onKeydown,...this.aria}}get classes(){return{[`${this.className}--section`]:this.list.isSection(this.valueItem.value),[`${this.className}--selected`]:this.valueItem.isSelectVisible()}}get styles(){return{}}get tabindex(){return this.props.clock?void 0:this.enabled.isEnabled?0:-1}},A=class extends y{item;constructor(e,t,n,r=k){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{getValue:this.item.model.get,setValue:this.item.model.set,selectByCoordinates:this.item.select.selectByCoordinates}}initClasses(){return{main:{...this.item.classes},list:this.getSubClass(`list`),value:this.getSubClass(`value`),name:this.getSubClass(`name`),info:this.getSubClass(`info`),arrow:this.getSubClass(`arrow`),arrowHour:this.getSubClass(`arrowHour`),arrowMinute:this.getSubClass(`arrowMinute`),arrowSecond:this.getSubClass(`arrowSecond`),arrowSelect:this.getSubClass(`arrowSelect`),point:this.getSubClass(`point`),dial:this.getSubClass(`dial`),censor:this.getSubClass(`censor`)}}initStyles(){return{...this.item.styles}}initRender(){let e=[...this.renderList(),...this.renderInfo(),...this.renderPoint(),...this.renderDial(),...this.renderCensor()];return a(`div`,{ref:this.element,class:this.classes?.value.main,style:this.styles?.value,...this.item.binds},e)}renderList=()=>{let e=this.item.list.marks.value,t=this.item.valueItem.value;this.item.select.reset();let n=e.map((e,n)=>{let r=e.value===t&&this.item.valueItem.isSelectVisible(),i=this.slots?.item?this.initSlot(`item`,void 0,{item:e}):e.name;return a(`span`,{key:`${e.value}-${n}`,class:{[`${this.classes?.value.value}`]:!0,[`${this.classes?.value.value}--selected`]:r,[`${this.classes?.value.value}--disabled`]:e.disabled},"data-value":e.value,style:e.style,onClick:this.item.event.onClick},[a(`span`,{ref:e=>this.item.select.setElement(n,e),class:this.classes?.value.name},i)])});return[a(`div`,this.getKeyClass(`list`),n)]};renderInfo=()=>{let e=[];return this.item.valueItem.isArrowSelectVisible()?e.push(a(`span`,{class:[this.classes?.value.arrow,this.classes?.value.arrowSelect],style:this.item.arrows.styleSelect})):this.props.clock&&(this.item.valueItem.isHourVisible()&&e.push(a(`span`,{class:[this.classes?.value.arrow,this.classes?.value.arrowHour],style:this.item.arrows.styleHour})),this.item.valueItem.isMinuteVisible()&&e.push(a(`span`,{class:[this.classes?.value.arrow,this.classes?.value.arrowMinute],style:this.item.arrows.styleMinute})),this.item.valueItem.isSecondVisible()&&e.push(a(`span`,{class:[this.classes?.value.arrow,this.classes?.value.arrowSecond],style:this.item.arrows.styleSecond}))),[a(`div`,this.getKeyClass(`info`),e)]};renderPoint=()=>[a(`div`,this.getKeyClass(`point`))];renderDial=()=>{let e=this.initSlot(`default`)??(this.item.valueItem.isTextVisible()?this.item.valueItem.text:void 0);return[a(`div`,this.getKeyClass(`dial`),e)]};renderCensor=()=>this.item.valueItem.isSelectVisible()?[a(`div`,{class:this.classes?.value.censor,onMousedown:this.item.event.onStart,onTouchstart:this.item.event.onStart})]:[]},j={min:0,max:60,step:1,type:`12`}})))()}var N,P;function F(){return(F=e((()=>{M(),N={type:[`12`,`24`,`minute`,`second`],palette:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},P={...j,type:`12`}})))()}var I;function L(){return(L=e((()=>{n(),v(),M(),F(),I=i({name:`D1ClockDial`,__name:`D1ClockDial`,props:s({modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},readonly:{type:Boolean},disabled:{type:Boolean},step:{},min:{},max:{},value:{},hour:{},minute:{},second:{},clock:{type:Boolean},showTime:{type:Boolean},type:{},palette:{}},P),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:n}){let i=n,a=e,o=d(()=>({main:{"d1-clockDial":!0,"d1-clockDial--disabled":a.disabled,"d1-clockDial--readonly":a.readonly,[`d1-clockDial--type--${a.type}`]:p(N.type,a.type),[`d1-palette d1-palette--${a.palette}`]:p(N.palette,a.palette)}})),s=d(()=>({})),l=new A(`d1.clockDial`,a,{emits:i,classes:o,styles:s}),f=l.render();return t(l.expose()),(e,t)=>(c(),r(u(f)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1ClockDial`,exportName:`default`,displayName:`D1ClockDial`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/ClockDial/D1ClockDial.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{ae(),F(),B=[{name:`clock`,type:`boolean`},{name:`disabled`,type:`boolean`},{name:`hour`,type:`number`},{name:`max`,type:`NumberOrString`},{name:`min`,type:`NumberOrString`},{name:`minute`,type:`number`},{name:`modelValue`,type:`number`},{name:`onUpdate:modelValue`,type:`((value: number) => void)`},{name:`onUpdate:value`,type:`((value: number) => void)`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`readonly`,type:`boolean`},{name:`second`,type:`number`},{name:`showTime`,type:`boolean`},{name:`step`,type:`NumberOrString`},{name:`type`,type:`string`,option:[`12`,`24`,`minute`,`second`]},{name:`value`,type:`number`}],V=[{name:`default`,description:`Default center dial slot / Слот по умолчанию для центрального циферблата`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`item`,description:`Custom clock item slot / Слот для пользовательского элемента часов`,properties:[{name:`props`,type:`(ClockDialMarkSlot) | undefined`}]}],H=[{name:`change`,description:`Change event triggered on interaction end / Событие изменения, вызываемое при завершении взаимодействия`,properties:[{name:`event`,type:`ClockDialEventItem`},{name:`value`,type:`number`}]},{name:`changeLite`,description:`Change event lite version / Упрощенная версия события изменения`,properties:[{name:`value`,type:`number`}]},{name:`input`,description:`Input event triggered on selection change / Событие ввода, вызываемое при изменении выбора`,properties:[{name:`event`,type:`ClockDialEventItem`},{name:`value`,type:`number`}]},{name:`inputLite`,description:`Input event lite version / Упрощенная версия события ввода`,properties:[{name:`value`,type:`number`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`number`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`number`}]}],U={component:`ClockDial`,props:B,slots:V,events:H,defaults:P,wikiDesign:re}})))()}var G;function K(){return(K=e((()=>{ee(),ie(),W(),G=new oe(U.component,U.props,U.defaults,U.wikiDesign,ne,te)})))()}var de=t({ClockDial:()=>J,ClockDialClock:()=>Z,ClockDialType:()=>Y,ClockDialVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),n(),q={title:`Ui/ClockDial`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={render:e=>({components:{D1ClockDial:R},setup:()=>({args:e}),template:`
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
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1ClockDial:R},setup(){return{hour:h(9)}},template:`
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
    `})},Q=[`ClockDial`,`ClockDialType`,`ClockDialVModel`,`ClockDialClock`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}export{de as a,K as c,X as i,Z as n,$ as o,Y as r,G as s,J as t};