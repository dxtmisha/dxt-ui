import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{B as n,Bt as r,Dt as i,Mt as a,Nt as o,Pt as s,Q as c,Rt as l,Ut as u,Wt as d,an as f,jt as p,nn as m,qt as h,rn as g}from"./library-BfcLFF_v.js";import{O as _,d as ee,i as te,k as ne,l as re,m as v,n as ie,p as y,t as ae,u as oe}from"./wiki-BHyzKkJP.js";import{n as se,t as ce}from"./ModelInclude-BLHqo2zE-C-RXp8tC.js";import{n as b,t as x}from"./D1Button-vg-ww9SG.js";import{l as le,u as ue}from"./FieldEventInclude-wMYAgNzB-BVZXP3A2.js";import{n as de,t as S}from"./D1Input-D2M4rnld.js";var C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{se(),ue(),i(),_(),c(),C=class{constructor(){y(this,`item`,g([])),y(this,`getValue`,e=>this.getElementValue(this.item.value.find(t=>t.name===e))),y(this,`clearByName`,(e,t)=>{for(let n of this.item.value)n.name===e&&n.id!==t&&(n.data=void 0,this.setElementValue(n,void 0));return this}),y(this,`updateData`,(e,t)=>{let n=this.item.value.find(t=>t.id===e);n&&(this.clearByName(n.name,n.id),n.data=t)}),y(this,`reset`,e=>this.setValuesAll(e??{})),y(this,`register`,e=>{this.item.value.includes(e)||(this.item.value=[...this.item.value,e])})}isError(){return this.item.value.some(e=>typeof e.checkValidity==`function`&&!e.checkValidity()||e.data?.status===!1)}get(){return this.item}getData(){let e={};return this.item.value.forEach(t=>{e[t.name]=t.data??{value:this.getElementValue(t)}}),e}getValues(){let e={};return this.item.value.forEach(t=>{let r=this.getElementValue(t);n(r)||(e[t.name]=r)}),e}set(e,t){for(let n of this.item.value)n.name===e&&this.setElementValue(n,t);return this}setValues(e){return Object.entries(e).forEach(([e,t])=>{this.set(e,t)}),this}setValuesAll(e){for(let n of this.item.value){var t;let r=e[n.name];r!==(n==null||(t=n.getValue)==null?void 0:t.call(n))&&(r===void 0?typeof n.clear==`function`?n.clear():this.setElementValue(n,void 0):this.setElementValue(n,r))}return this}getElementValue(e){var t,n;return(e==null||(t=e.data)==null?void 0:t.value)??(e==null||(n=e.getValue)==null?void 0:n.call(e))??void 0}setElementValue(e,t){return typeof e.setValue==`function`?e.setValue(t):e.value&&(e.value.value=t),this}},w=class{constructor(e){y(this,`element`,void 0),y(this,`item`,m({})),y(this,`update`,()=>{let e={},t=this.element.value;return t!=null&&t.elements&&Array.from(t.elements).forEach(t=>{this.isInput(t)&&(e[t.name]={value:this.getElementValue(t),validationMessage:t.validationMessage,validity:t.validity,status:typeof t.checkValidity!=`function`||t.checkValidity()})}),this.item.value=e,this}),y(this,`reset`,e=>this.setValuesAll(e??{})),this.element=e,this.update(),r(()=>{h(this.element,()=>{this.update()},{immediate:!0})})}isError(){return this.element.value?!this.element.value.checkValidity():Object.values(this.item.value).some(e=>e.status===!1)}get(){return this.item.value}getValue(e){return this.item.value[e]?.value}getValues(){let e={};return Object.entries(this.item.value).forEach(([t,n])=>{e[t]=n.value}),e}set(e,t){let n=this.element.value;if(n!=null&&n.elements){let r=n.elements.namedItem(e);r&&(this.setElementValue(r,t),this.update())}return this}setValues(e){return Object.entries(e).forEach(([e,t])=>{this.set(e,t)}),this}setValuesAll(e){let t=this.element.value;return t!=null&&t.elements&&Array.from(t.elements).forEach(t=>{if(`name`in t&&t.name){let n=e[t.name];this.setElementValue(t,n)}}),this.update(),this}isInput(e){if(!(`name`in e)||!e.name)return!1;let t=e;return!(t.type===`radio`&&!t.checked||[`button`,`submit`,`reset`,`image`].includes(t.type))}getElementValue(e){return e.type===`checkbox`?e.checked:e.value}setElementValue(e,t){if(typeof RadioNodeList<`u`&&e instanceof RadioNodeList){e.value=String(t??``);return}if(e instanceof HTMLInputElement){if([`button`,`submit`,`reset`,`image`].includes(e.type))return;e.type===`checkbox`?e.checked=!!t:e.type===`radio`?e.checked=t!=null&&e.value===String(t):e.value=t??``;return}e instanceof HTMLButtonElement||`value`in e&&(e.value=t??``)}},T=class{constructor(e,t,n){y(this,`props`,void 0),y(this,`elements`,void 0),y(this,`native`,void 0),y(this,`error`,m(!1)),y(this,`errors`,m({})),y(this,`checkValidity`,()=>!this.isError()),y(this,`reset`,()=>(this.error.value=!1,this.errors.value={},this)),y(this,`update`,()=>(this.error.value=this.isError(),this.errors.value=this.props.native?this.getErrorsNative():this.getErrorsElements(),this)),this.props=e,this.elements=t,this.native=n,r(()=>{h([()=>this.props.native,this.elements.item,this.native.item],()=>{this.update()},{deep:!0,immediate:!0})})}get(){return this.error.value}getErrors(){return this.errors.value}isError(){return this.props.native?this.native.isError():this.elements.isError()}getErrorsElements(){let e={};return this.elements.item.value.forEach(t=>{if(typeof t.checkValidity==`function`&&!t.checkValidity()||t.data?.status===!1){let n=t.getValidationMessage?.call(t)||t.data?.validationMessage||t.data?.validityMessage||``;e[t.name]=n}}),e}getErrorsNative(){let e={};return Object.entries(this.native.get()).forEach(([t,n])=>{n.status===!1&&(e[t]=n.validationMessage??n.validityMessage??``)}),e}},E=class{constructor(e,t,n,r){y(this,`props`,void 0),y(this,`value`,void 0),y(this,`emits`,void 0),y(this,`model`,void 0),y(this,`onChange`,e=>{var t,n,r,i;let{data:a,values:o}=this.getData();(t=this.emits)==null||t.call(this,`change`,e,a,o),(n=this.emits)==null||n.call(this,`changeLite`,a,o),(r=this.emits)==null||r.call(this,`changeValues`,o),(i=this.model)==null||i.emit(o)}),y(this,`onInput`,e=>{var t,n,r;this.value.update();let{data:i,values:a}=this.getData();if(e){var o;(o=this.emits)==null||o.call(this,`input`,e,i,a)}(t=this.emits)==null||t.call(this,`inputLite`,i,a),(n=this.emits)==null||n.call(this,`inputValues`,a),(r=this.model)==null||r.emit(a)}),y(this,`onReset`,e=>{if(e?.preventDefault(),this.value.reset(),e){var t;(t=this.emits)==null||t.call(this,`reset`,e)}this.onInput(e),this.onChange(e)}),y(this,`onSubmit`,e=>{var t;(t=this.emits)==null||t.call(this,`submit`,e)}),this.props=e,this.value=t,this.emits=n,this.model=r}getData(){return{data:this.value.getData(),values:this.value.get()}}},D=class{constructor(e,t){y(this,`elements`,void 0),y(this,`event`,void 0),y(this,`updateData`,(e,t,n)=>{console.log(`updateData`,e,t),this.elements.updateData(e,t),this.event.onInput(n)}),this.elements=e,this.event=t,d(le,{getValue:this.elements.getValue,register:this.elements.register,updateData:this.updateData})}},O=class{constructor(e,t,n,i){var a,o;y(this,`props`,void 0),y(this,`refs`,void 0),y(this,`elements`,void 0),y(this,`native`,void 0),y(this,`cache`,{}),y(this,`get`,()=>{var e;return(e=this.props)!=null&&e.native?this.native?.getValues()??{}:this.elements?.getValues()??{}}),y(this,`reset`,()=>{var e;if((e=this.props)!=null&&e.native){var t;(t=this.native)==null||t.reset(this.cache)}else{var n;(n=this.elements)==null||n.reset(this.cache)}}),y(this,`set`,(e,t)=>{var n;if((n=this.props)!=null&&n.native){var r;(r=this.native)==null||r.set(e,t)}else{var i;(i=this.elements)==null||i.set(e,t)}}),y(this,`setValues`,e=>{var t;if((t=this.props)!=null&&t.native){var n;(n=this.native)==null||n.setValues(e)}else{var r;(r=this.elements)==null||r.setValues(e)}}),y(this,`setValuesAll`,e=>{var t;if((t=this.props)!=null&&t.native){var n;(n=this.native)==null||n.setValuesAll(e)}else{var r;(r=this.elements)==null||r.setValuesAll(e)}}),y(this,`update`,()=>{var e;if((e=this.props)!=null&&e.native){var t;(t=this.native)==null||t.update()}return this}),this.props=e,this.refs=t,this.elements=n,this.native=i,(a=this.props)!=null&&a.value?this.cache={...this.props.value}:(o=this.props)!=null&&o.modelValue&&(this.cache={...this.props.modelValue}),r(()=>{var e,t;this.setValues(this.cache),(e=this.refs)!=null&&e.value&&h(this.refs.value,e=>{e&&this.setValuesAll(e)}),(t=this.refs)!=null&&t.modelValue&&h(this.refs.modelValue,e=>{e&&this.setValuesAll(e)})})}getCache(){return this.cache}getData(){var e;return(e=this.props)!=null&&e.native?this.native?.get()??{}:this.elements?.getData()??{}}getValue(e){var t;return(t=this.props)!=null&&t.native?this.native?.getValue(e):this.elements?.getValue(e)}},k=class{constructor(e,t,n,r,i,a,o,s,c={}){y(this,`props`,void 0),y(this,`refs`,void 0),y(this,`element`,void 0),y(this,`classDesign`,void 0),y(this,`className`,void 0),y(this,`components`,void 0),y(this,`slots`,void 0),y(this,`emits`,void 0),y(this,`elements`,void 0),y(this,`error`,void 0),y(this,`event`,void 0),y(this,`model`,void 0),y(this,`native`,void 0),y(this,`provide`,void 0),y(this,`value`,void 0),y(this,`submit`,()=>{let e=this.element.value;e&&(typeof e.requestSubmit==`function`?e.requestSubmit():e.submit())}),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{FormElementsConstructor:l=C,FormElementsNativeConstructor:u=w,FormErrorConstructor:d=T,FormEventConstructor:f=E,FormProvideConstructor:p=D,FormValueConstructor:m=O,ModelIncludeConstructor:h=ce}=c;this.elements=new l,this.native=new u(this.element),this.value=new m(this.props,this.refs,this.elements,this.native),this.error=new d(this.props,this.elements,this.native),this.model=new h(`value`,s),this.event=new f(this.props,this.value,s,this.model),this.provide=new p(this.elements,this.event)}get binds(){return{action:this.props.action,autocomplete:this.props.autocomplete,enctype:this.props.enctype,method:this.props.method,novalidate:!0,target:this.props.target,onChange:this.event.onChange,onInput:this.event.onInput,onReset:this.event.onReset,onSubmit:this.event.onSubmit}}},A={},j=class extends ne{constructor(e,t,n,r=k){super(e,t,n),y(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{checkValidity:this.item.error.checkValidity,getValues:this.item.value.get,reset:this.item.value.reset,set:this.item.value.set,setValues:e=>{this.item.value.setValues(e),this.item.model.emit(e)},setValuesAll:e=>{this.item.value.setValuesAll(e),this.item.model.emit(e)},submit:this.item.submit}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=[];return this.initSlot(`header`,e),this.initSlot(`default`,e),this.initSlot(`footer`,e),s(`form`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.binds},e)}}})))()}var N;function P(){return(P=e((()=>{M(),N={...A}})))()}var F;function I(){return(I=e((()=>{i(),M(),P(),F=o({name:`D1Form`,__name:`D1Form`,props:l({modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},value:{},native:{type:Boolean},action:{},method:{},enctype:{},target:{},autocomplete:{}},N),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`inputValues`,`change`,`changeLite`,`changeValues`,`reset`,`submit`],setup(e,{expose:t,emit:n}){let r=n,i=e,o=p(()=>({main:{"d1-form":!0}})),s=p(()=>({})),c=new j(`d1.form`,i,{emits:r,classes:o,styles:s}),l=c.render();return t(c.expose()),(e,t)=>(u(),a(f(l)))}})})))()}var L;function R(){return(R=e((()=>{I(),L=F,F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{name:`D1Form`,exportName:`default`,displayName:`D1Form`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Form/D1Form.vue`]})})))()}var z,B,V,H;function U(){return(U=e((()=>{ae(),P(),z=[{name:`action`,type:`string`},{name:`autocomplete`,type:`string`},{name:`enctype`,type:`string`},{name:`method`,type:`string`},{name:`modelValue`,type:`FormElementsValues`},{name:`native`,type:`boolean`},{name:`onUpdate:modelValue`,type:`((value: FormElementsValues) => void)`},{name:`onUpdate:value`,type:`((value: FormElementsValues) => void)`},{name:`target`,type:`string`},{name:`value`,type:`FormElementsValues`}],B=[{name:`default`,description:`Default slot for form content and input elements /
Основной слот для содержимого формы и элементов ввода`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`footer`,description:`Footer slot for form actions and buttons /
Слот подвала для действий и кнопок формы`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`header`,description:`Header slot for form title or top controls /
Слот заголовка для названия формы или верхних элементов управления`,properties:[{name:`props`,type:`(any) | undefined`}]}],V=[{name:`change`,description:`Form change event / Событие изменения формы`,properties:[{name:`event`,type:`InputEvent`},{name:`data`,type:`FormElementsData`},{name:`values`,type:`FormElementsValues`}]},{name:`changeLite`,description:`Form change event (lite version) / Событие изменения формы (упрощенная версия)`,properties:[{name:`data`,type:`FormElementsData`},{name:`values`,type:`FormElementsValues`}]},{name:`changeValues`,description:`Form change values event / Событие значений изменения формы`,properties:[{name:`values`,type:`FormElementsValues`}]},{name:`input`,description:`Form input event / Событие ввода формы`,properties:[{name:`event`,type:`InputEvent`},{name:`data`,type:`FormElementsData`},{name:`values`,type:`FormElementsValues`}]},{name:`inputLite`,description:`Form input event (lite version) / Событие ввода формы (упрощенная версия)`,properties:[{name:`data`,type:`FormElementsData`},{name:`values`,type:`FormElementsValues`}]},{name:`inputValues`,description:`Form input values event / Событие значений ввода формы`,properties:[{name:`values`,type:`FormElementsValues`}]},{name:`reset`,description:`Form reset event / Событие сброса формы`,properties:[{name:`event`,type:`Event`}]},{name:`submit`,description:`Form submission event / Событие отправки формы`,properties:[{name:`event`,type:`SubmitEvent`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`string`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`string`}]}],H={component:`Form`,props:z,slots:B,events:V,defaults:N,wikiDesign:ie}})))()}var W;function G(){return(G=e((()=>{ee(),re(),U(),W=new oe(H.component,H.props,H.defaults,H.wikiDesign,te,v)})))()}var fe=t({Form:()=>q,FormBasic:()=>J,FormNative:()=>Y,FormSlots:()=>Z,FormVModel:()=>X,__namedExportsOrder:()=>Q,default:()=>K}),K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{R(),G(),de(),b(),i(),K={title:`Ui/Form`,component:L,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},q={render:e=>({components:{D1Form:L},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
          <D1Form v-bind="args">
            <template #default>
              <div class="wiki-storybook-flex-column">
                <input class="wiki-storybook-input" name="username" placeholder="Username" />
                <input class="wiki-storybook-input" name="email" type="email" placeholder="Email" />
                <button class="wiki-storybook-button" type="submit">Submit</button>
              </div>
            </template>
          </D1Form>
        </div>
      </div>
    `})},J={name:`Базовая форма`,render:()=>({components:{D1Form:L,D1Input:S,D1Button:x},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1Form
              action="/api/submit"
              method="post"
            >
              <div class="wiki-storybook-flex-column">
                <D1Input name="username" label="Username" placeholder="Enter username" />
                <D1Input name="email" type="email" label="Email" placeholder="Enter email" />
                <div class="wiki-storybook-flex">
                  <D1Button type="submit">Submit</D1Button>
                  <D1Button type="reset">Reset</D1Button>
                </div>
              </div>
            </D1Form>
          </div>
        </div>
    `})},Y={name:`Нативные элементы формы`,render:()=>({components:{D1Form:L},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1Form
              :native="true"
            >
              <div class="wiki-storybook-flex-column">
                <label class="wiki-storybook-flex-column">
                  Text:
                  <input class="wiki-storybook-input" name="title" value="Default Title" />
                </label>
                <label class="wiki-storybook-flex-column">
                  Role:
                  <select class="wiki-storybook-input" name="role">
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                  </select>
                </label>
                <label class="wiki-storybook-flex-align-center">
                  <input name="subscribe" type="checkbox" checked />
                  Subscribe to newsletter
                </label>
                <div class="wiki-storybook-flex">
                  <button class="wiki-storybook-button" type="submit">Save</button>
                  <button class="wiki-storybook-button" type="reset">Reset</button>
                </div>
              </div>
            </D1Form>
          </div>
        </div>
    `})},X={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Form:L,D1Input:S,D1Button:x},setup(){return{formValue:m({username:`john_doe`,email:`john@example.com`})}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current values: <strong>{{ formValue }}</strong></span>
            <button
              class="wiki-storybook-button"
              @click="formValue = { username: 'alice', email: 'alice@example.com' }"
            >
              Set Alice
            </button>
            <button
              class="wiki-storybook-button"
              @click="formValue = {}"
            >
              Clear
            </button>
          </div>

          <div class="wiki-storybook-group">
            <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
              <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom Components</div>
              <D1Form v-model="formValue">
                <div class="wiki-storybook-flex-column">
                  <D1Input name="username" label="Username" placeholder="Enter username" />
                  <D1Input name="email" type="email" label="Email" placeholder="Enter email" />
                  <div class="wiki-storybook-flex">
                    <D1Button type="submit">Submit</D1Button>
                    <D1Button type="reset">Reset</D1Button>
                  </div>
                </div>
              </D1Form>
            </div>

            <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
              <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Native Elements</div>
              <D1Form
                v-model="formValue"
                :native="true"
              >
                <div class="wiki-storybook-flex-column">
                  <label class="wiki-storybook-flex-column">
                    Username:
                    <input class="wiki-storybook-input" name="username" />
                  </label>
                  <label class="wiki-storybook-flex-column">
                    Email:
                    <input class="wiki-storybook-input" name="email" type="email" />
                  </label>
                  <div class="wiki-storybook-flex">
                    <button class="wiki-storybook-button" type="submit">Submit</button>
                    <button class="wiki-storybook-button" type="reset">Reset</button>
                  </div>
                </div>
              </D1Form>
            </div>
          </div>
        </div>
    `})},Z={name:`Использование слотов (header, default, footer)`,render:()=>({components:{D1Form:L},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1Form>
              <template #header>
                <h3>Registration Form</h3>
              </template>
              <template #default>
                <div class="wiki-storybook-flex-column">
                  <input class="wiki-storybook-input" name="firstName" placeholder="First Name" />
                  <input class="wiki-storybook-input" name="lastName" placeholder="Last Name" />
                </div>
              </template>
              <template #footer>
                <div class="wiki-storybook-flex">
                  <button class="wiki-storybook-button" type="reset">Cancel</button>
                  <button class="wiki-storybook-button" type="submit">Register</button>
                </div>
              </template>
            </D1Form>
          </div>
        </div>
    `})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Form
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-group">
        <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
          <D1Form v-bind="args">
            <template #default>
              <div class="wiki-storybook-flex-column">
                <input class="wiki-storybook-input" name="username" placeholder="Username" />
                <input class="wiki-storybook-input" name="email" type="email" placeholder="Email" />
                <button class="wiki-storybook-button" type="submit">Submit</button>
              </div>
            </template>
          </D1Form>
        </div>
      </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Базовая форма',
  render: () => ({
    components: {
      D1Form,
      D1Input,
      D1Button
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1Form
              action="/api/submit"
              method="post"
            >
              <div class="wiki-storybook-flex-column">
                <D1Input name="username" label="Username" placeholder="Enter username" />
                <D1Input name="email" type="email" label="Email" placeholder="Enter email" />
                <div class="wiki-storybook-flex">
                  <D1Button type="submit">Submit</D1Button>
                  <D1Button type="reset">Reset</D1Button>
                </div>
              </div>
            </D1Form>
          </div>
        </div>
    \`
  })
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Нативные элементы формы',
  render: () => ({
    components: {
      D1Form
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1Form
              :native="true"
            >
              <div class="wiki-storybook-flex-column">
                <label class="wiki-storybook-flex-column">
                  Text:
                  <input class="wiki-storybook-input" name="title" value="Default Title" />
                </label>
                <label class="wiki-storybook-flex-column">
                  Role:
                  <select class="wiki-storybook-input" name="role">
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                  </select>
                </label>
                <label class="wiki-storybook-flex-align-center">
                  <input name="subscribe" type="checkbox" checked />
                  Subscribe to newsletter
                </label>
                <div class="wiki-storybook-flex">
                  <button class="wiki-storybook-button" type="submit">Save</button>
                  <button class="wiki-storybook-button" type="reset">Reset</button>
                </div>
              </div>
            </D1Form>
          </div>
        </div>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1Form,
      D1Input,
      D1Button
    },
    setup() {
      return {
        formValue: ref({
          username: 'john_doe',
          email: 'john@example.com'
        })
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current values: <strong>{{ formValue }}</strong></span>
            <button
              class="wiki-storybook-button"
              @click="formValue = { username: 'alice', email: 'alice@example.com' }"
            >
              Set Alice
            </button>
            <button
              class="wiki-storybook-button"
              @click="formValue = {}"
            >
              Clear
            </button>
          </div>

          <div class="wiki-storybook-group">
            <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
              <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom Components</div>
              <D1Form v-model="formValue">
                <div class="wiki-storybook-flex-column">
                  <D1Input name="username" label="Username" placeholder="Enter username" />
                  <D1Input name="email" type="email" label="Email" placeholder="Enter email" />
                  <div class="wiki-storybook-flex">
                    <D1Button type="submit">Submit</D1Button>
                    <D1Button type="reset">Reset</D1Button>
                  </div>
                </div>
              </D1Form>
            </div>

            <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
              <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Native Elements</div>
              <D1Form
                v-model="formValue"
                :native="true"
              >
                <div class="wiki-storybook-flex-column">
                  <label class="wiki-storybook-flex-column">
                    Username:
                    <input class="wiki-storybook-input" name="username" />
                  </label>
                  <label class="wiki-storybook-flex-column">
                    Email:
                    <input class="wiki-storybook-input" name="email" type="email" />
                  </label>
                  <div class="wiki-storybook-flex">
                    <button class="wiki-storybook-button" type="submit">Submit</button>
                    <button class="wiki-storybook-button" type="reset">Reset</button>
                  </div>
                </div>
              </D1Form>
            </div>
          </div>
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов (header, default, footer)',
  render: () => ({
    components: {
      D1Form
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1Form>
              <template #header>
                <h3>Registration Form</h3>
              </template>
              <template #default>
                <div class="wiki-storybook-flex-column">
                  <input class="wiki-storybook-input" name="firstName" placeholder="First Name" />
                  <input class="wiki-storybook-input" name="lastName" placeholder="Last Name" />
                </div>
              </template>
              <template #footer>
                <div class="wiki-storybook-flex">
                  <button class="wiki-storybook-button" type="reset">Cancel</button>
                  <button class="wiki-storybook-button" type="submit">Register</button>
                </div>
              </template>
            </D1Form>
          </div>
        </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`Form`,`FormBasic`,`FormNative`,`FormVModel`,`FormSlots`]})))()}export{Z as a,W as c,Y as i,G as l,q as n,X as o,J as r,$ as s,fe as t};