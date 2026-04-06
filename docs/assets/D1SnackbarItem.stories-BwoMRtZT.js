import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Ht as n,St as r,_t as i,bt as a,f as o,kt as s,m as c,nt as l,wt as u,xt as d,yt as f}from"./iframe-DHvUfpTv.js";import{a as p,d as m,f as h,g,l as _,n as v,p as y,t as b,u as x}from"./wiki-COBgMBNI.js";import{a as S,c as C,o as w,s as T}from"./D1Icon-CBp6FETd.js";import{n as E,t as D}from"./AriaStaticInclude-CS1hPGyK-WhXq7-dT.js";import{n as O,t as ee}from"./LabelInclude-DoZ7EUYO-Dp-gb-W1.js";import{n as te,t as ne}from"./DescriptionInclude-B_Xf_j3l-D_XEcXi-.js";import{n as re,t as ie}from"./TextInclude-OwyVCAbS--R0mFFER.js";import{n as ae,t as oe}from"./ActionsInclude-BzyGXlK7-CwAgIu3q.js";import{a as se,o as ce}from"./D1Button-w0nQcjuA.js";import{n as le,t as ue}from"./Button-DMzdmjTI.js";import{n as de,t as fe}from"./Icon-Bi6-zMfS.js";import{n as k,t as A}from"./Actions-C25dRrXB.js";var j,M,N,P=e((()=>{D(),h(),re(),C(),ae(),ee(),te(),S(),ce(),i(),o(),j=class{constructor(e,t,n,r,i,a,o,s,c){y(this,`label`,void 0),y(this,`description`,void 0),y(this,`event`,void 0),y(this,`icon`,void 0),y(this,`button`,void 0),y(this,`actions`,void 0),y(this,`text`,void 0),y(this,`onClose`,()=>this.emits?.call(this,`close`,this.props.value)),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{ActionsConstructor:l=oe,ButtonConstructor:u=se,DescriptionConstructor:d=ne,EventConstructor:p=T,IconConstructor:m=w,LabelConstructor:h=O,TextConstructor:g=ie}=c??{};this.label=new h(e,i,void 0,o),this.description=new d(e,i,o),this.event=new p(void 0,void 0,s),this.icon=new m(e,i,a),this.button=new u(f(()=>this.props.button),i,a,void 0,{onClick:this.event.onClick}),this.actions=new l(e,i,a,s,{align:`left`}),this.text=new g(e)}},M={closeButton:!0,role:`status`},N=class extends c{constructor(e,t,n,i=j){super(e,t,n),y(this,`item`,void 0),y(this,`renderMain`,()=>[r(`div`,{key:`tool`,class:this.classes?.value.tool},[...this.item.icon.render(),...this.renderContext(),...this.item.button.render({class:this.classes?.value.button}),...this.renderClose()])]),y(this,`renderContext`,()=>[r(`div`,{key:`context`,class:this.classes?.value.context},[...this.item.label.render(),...this.item.description.render(),...this.renderBody()])]),y(this,`renderBody`,()=>{let e=[];return this.props.html&&e.push(r(`div`,{key:`body`,class:this.classes?.value.body,innerHTML:this.props.html})),this.slots&&`body`in this.slots&&e.push(r(`div`,{key:`body-slot`,class:this.classes?.value.body},this.initSlot(`body`))),this.props.component&&e.push(r(`div`,{key:`body-component`,class:this.classes?.value.body},r(this.props.component,this.props.componentProps))),e}),y(this,`renderClose`,()=>this.props.closeButton?this.components.render(`button`,{key:`button-close`,class:this.classes?.value.close,icon:this.props.iconClose,onclick:this.item.onClose,...E.label(this.item.text.close.value)},void 0,`button-close`):[]),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},tool:this.getSubClass(`tool`),icon:this.getSubClass(`icon`),trailing:this.getSubClass(`trailing`),context:this.getSubClass(`context`),label:this.getSubClass(`label`),description:this.getSubClass(`description`),body:this.getSubClass(`body`),button:this.getSubClass(`button`),close:this.getSubClass(`close`),actions:this.getSubClass(`actions`)}}initStyles(){return{}}initRender(){return r(`div`,{...this.getAttrs(),class:this.classes?.value.main,...E.role(this.props.role),...E.atomic(!0)},[...this.renderMain(),...this.item.actions.render()])}}})),F,I,L=e((()=>{P(),F={palette:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},I={...M,iconClose:`close`}})),R=e((()=>{})),z,B=e((()=>{i(),o(),P(),de(),le(),k(),L(),R(),z=d({name:`D1SnackbarItem`,__name:`D1SnackbarItem`,props:u({label:{},labelId:{},description:{},descriptionId:{},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},iconTrailing:{},iconTrailingTurnOnly:{type:Boolean},iconTrailingDirOnly:{type:Boolean},iconTrailingPalette:{type:Boolean},actionsHide:{type:Boolean},actionsList:{},actionsSecondary:{},actionsAttrs:{},role:{},textClose:{type:[String,Function]},button:{},html:{},component:{},componentProps:{},value:{},closeButton:{type:Boolean},iconClose:{},palette:{}},I),emits:[`actions`,`actionsLite`,`click`,`clickLite`,`close`],setup(e,{expose:t,emit:r}){let i=r,o=e,c=new N(`d1.snackbarItem`,o,{emits:i,classes:f(()=>({main:{"d1-snackbarItem":!0,[`d1-palette d1-palette--${o.palette}`]:l(F.palette,o.palette)}})),styles:f(()=>({})),components:{icon:fe,button:ue,actions:A},compMod:{button:{hasLabelMinWidth:!1},"button-close":{secondary:!0,roundedFull:!0,size:`xs`,palette:`neutral`,inverse:!0},actions:{padding:`none`,paddingByIndent:!1,buttonAttrs:{size:`sm`},buttonSecondaryAttrs:{text:!0,inverse:!0,size:`sm`}}}}),u=c.render();return t(c.expose()),(e,t)=>(s(),a(n(u)))}})})),V,pe=e((()=>{B(),B(),V=z,z.__docgenInfo=Object.assign({displayName:z.name??z.__name},{name:`D1SnackbarItem`,exportName:`default`,displayName:`D1SnackbarItem`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/SnackbarItem/D1SnackbarItem.vue`]})})),H,U,W,G,me=e((()=>{x(),b(),L(),H=[{name:`actionsAttrs`,type:`ConstrBind<ActionsPropsBasic>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`ConstrBind<ConstrBind<ButtonPropsBasic>[]>`},{name:`actionsSecondary`,type:`ConstrBind<ConstrBind<ButtonPropsBasic>[]>`},{name:`button`,type:`string | number | ConstrBind<ButtonPropsBasic>`},{name:`closeButton`,type:`boolean`},{name:`component`,type:`any`},{name:`componentProps`,type:`object`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`html`,type:`string`},{name:`icon`,type:`IconValue<IconPropsBasic>`},{name:`iconAttrs`,type:`ConstrBind<IconPropsBasic>`},{name:`iconClose`,type:`IconValue<IconPropsBasic>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTrailing`,type:`IconValue<IconPropsBasic>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`role`,type:`string`},{name:`selected`,type:`boolean`},{name:`textClose`,type:`TextValue`},{name:`value`,type:`string`}],U=[{name:`body`,description:`Slot for the notification body/ Слот для содержимого уведомления`},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`},{name:`description`,description:`Description slot/ Слот описания`}],W=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`close`,description:`Event triggered when notification is closed/ Событие при закрытии уведомления`,properties:[{name:`value`,type:`string`}]}],G={component:`SnackbarItem`,props:H,slots:U,events:W,defaults:I,wikiDesign:v}})),K,q=e((()=>{x(),p(),me(),K=new m(G.component,G.props,G.defaults,G.wikiDesign,_,g)})),J=t({SnackbarItem:()=>X,SnackbarItemBasic:()=>Z,__namedExportsOrder:()=>Q,default:()=>Y}),Y,X,Z,Q,$=e((()=>{pe(),q(),Y={title:`Ui/SnackbarItem`,component:V,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},X={},Z={name:`Базовые`,render:()=>({components:{D1SnackbarItem:V},template:`
        <div class="wiki-storybook-group">
          <D1SnackbarItem
            label="Detailed notification"
            description="Description text provides more context for the user."
            class="wiki-storybook-item--squared--lg"
          />
          <D1SnackbarItem
            label="Success message"
            icon="check_circle"
            class="wiki-storybook-item--squared--lg"
          />
          <D1SnackbarItem
            label="File deleted"
            icon="delete"
            button="Undo"
            class="wiki-storybook-item--squared--lg"
          />
          <D1SnackbarItem
            label="Connection lost"
            icon="wifi_off"
            :actions-list="[{ label: 'Retry', primary: true }]"
            class="wiki-storybook-item--squared--lg"
          />
        </div>
    `})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1SnackbarItem
    },
    template: \`
        <div class="wiki-storybook-group">
          <D1SnackbarItem
            label="Detailed notification"
            description="Description text provides more context for the user."
            class="wiki-storybook-item--squared--lg"
          />
          <D1SnackbarItem
            label="Success message"
            icon="check_circle"
            class="wiki-storybook-item--squared--lg"
          />
          <D1SnackbarItem
            label="File deleted"
            icon="delete"
            button="Undo"
            class="wiki-storybook-item--squared--lg"
          />
          <D1SnackbarItem
            label="Connection lost"
            icon="wifi_off"
            :actions-list="[{ label: 'Retry', primary: true }]"
            class="wiki-storybook-item--squared--lg"
          />
        </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`SnackbarItem`,`SnackbarItemBasic`]}));$();export{X as SnackbarItem,Z as SnackbarItemBasic,Q as __namedExportsOrder,Y as default,q as i,$ as n,K as r,J as t};