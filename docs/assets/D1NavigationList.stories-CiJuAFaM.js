import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Rt as a,Ut as o,an as s,jt as c,ut as l}from"./library-BfcLFF_v.js";import{O as u,d,i as f,l as p,m,n as h,t as g,u as _}from"./wiki-BHyzKkJP.js";import{n as v,t as y}from"./ListMenu-D8dg_ONz.js";import{a as b,i as x,n as S,o as C,r as w,s as T,t as E}from"./Input-BKOqpKHe.js";import{n as D,t as O}from"./NavigationItem-DCMcGtON.js";var k,A;function j(){return(j=e((()=>{T(),k={...C,tag:`a`,axis:`y`},A=class extends b{}})))()}var M,N;function P(){return(P=e((()=>{j(),M={axis:[`x`,`y`]},N={...k,iconArrowDown:`keyboard_arrow_down`,iconArrowRight:`keyboard_arrow_right`,iconSearch:`search`,inputSearchAttrs:{fieldAttrs:{size:`sm`}},axis:`y`}})))()}var F;function I(){return(I=e((()=>{n(),u(),j(),D(),x(),v(),S(),P(),F=i({name:`D1NavigationList`,__name:`D1NavigationList`,props:a({role:{},ariaMultiselectable:{type:Boolean},textNotFound:{type:[String,Function]},focus:{type:[Number,String,Boolean]},selected:{type:[Number,String,Boolean,Array]},disabled:{type:Boolean},lite:{type:Boolean},list:{},liteThreshold:{},highlight:{},highlightLengthStart:{},showSearch:{type:Boolean},filterMode:{type:Boolean},keyLabel:{},keyValue:{},max:{},tag:{},axis:{},divider:{type:Boolean},selectionStyle:{},itemAttrs:{},itemManagementAttrs:{},itemGroupAttrs:{},itemMenuAttrs:{},inputSearchAttrs:{},iconArrowDown:{},iconArrowRight:{},iconSearch:{},roleItem:{},tabindex:{},control:{type:Boolean}},N),emits:[`click`,`clickLite`,`close`],setup(e,{expose:t,emit:n}){let i=n,a=e,u=c(()=>({main:{"d1-navigationList":!0,[`d1-navigationList--axis--${a.axis}`]:l(M.axis,a.axis),"d1-navigationList--divider":a.divider}})),d=c(()=>({})),f=new A(`d1.navigationList`,a,{emits:i,classes:u,styles:d,components:{listItem:O,listGroup:w,listMenu:y,input:E}}),p=f.render();return t(f.expose()),(e,t)=>(o(),r(s(p)))}})})))()}var L;function R(){return(R=e((()=>{I(),L=F,F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{name:`D1NavigationList`,exportName:`default`,displayName:`D1NavigationList`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/NavigationList/D1NavigationList.vue`]})})))()}var z,B,V,H;function U(){return(U=e((()=>{g(),P(),z=[{name:`ariaMultiselectable`,type:`boolean`},{name:`axis`,type:`string`,option:[`x`,`y`]},{name:`control`,type:`boolean`},{name:`disabled`,type:`boolean`},{name:`divider`,type:`boolean`},{name:`filterMode`,type:`boolean`},{name:`focus`,type:`NumberOrStringOrBoolean`},{name:`highlight`,type:`string`},{name:`highlightLengthStart`,type:`number`},{name:`iconArrowDown`,type:`IconValue<IconProps>`},{name:`iconArrowRight`,type:`IconValue<IconProps>`},{name:`iconSearch`,type:`IconValue<IconProps>`},{name:`inputSearchAttrs`,type:`ConstrBind<InputProps>`},{name:`itemAttrs`,type:`ConstrBind<NavigationItemProps>`},{name:`itemGroupAttrs`,type:`ConstrBind<NavigationItemProps>`},{name:`itemManagementAttrs`,type:`ConstrBind<NavigationItemProps>`},{name:`itemMenuAttrs`,type:`ConstrBind<NavigationItemProps>`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`list`,type:`ListRecord<NavigationItemProps>`},{name:`lite`,type:`boolean`},{name:`liteThreshold`,type:`number`},{name:`max`,type:`string | number`},{name:`role`,type:`string`},{name:`roleItem`,type:`string`},{name:`selected`,type:`ListSelectedList`},{name:`selectionStyle`,type:`string`,option:[`checkbox`,`none`,`radio`,`checkmark`]},{name:`showSearch`,type:`boolean`},{name:`tabindex`,type:`string | number`},{name:`tag`,type:`string`,option:[`div`,`button`,`a`,`span`]},{name:`textNotFound`,type:`TextValue`}],B=[],V=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`close`,description:`Event for closing the list/ Событие закрытия списка`}],H={component:`NavigationList`,props:z,slots:B,events:V,defaults:N,wikiDesign:h}})))()}var W;function G(){return(G=e((()=>{d(),p(),U(),W=new _(H.component,H.props,H.defaults,H.wikiDesign,f,m)})))()}var K=t({NavigationList:()=>J,NavigationListHighlight:()=>Y,__namedExportsOrder:()=>X,default:()=>q}),q,J,Y,X;function Z(){return(Z=e((()=>{R(),G(),q={title:`Ui/NavigationList`,component:L,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},J={},Y={name:`Выделение`,render:()=>({components:{D1NavigationList:L},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1NavigationList
              :list="[
                {label: 'User Management', value: 'users', icon: 'people'},
                {label: 'Role Permissions', value: 'roles', icon: 'security'},
                {label: 'System Logs', value: 'logs', icon: 'receipt_long'}
              ]"
              highlight="manag"
              :highlightLengthStart="4"
            />
          </div>
        </div>
    `})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Выделение',
  render: () => ({
    components: {
      D1NavigationList
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <D1NavigationList
              :list="[
                {label: 'User Management', value: 'users', icon: 'people'},
                {label: 'Role Permissions', value: 'roles', icon: 'security'},
                {label: 'System Logs', value: 'logs', icon: 'receipt_long'}
              ]"
              highlight="manag"
              :highlightLengthStart="4"
            />
          </div>
        </div>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X=[`NavigationList`,`NavigationListHighlight`]})))()}export{W as a,Z as i,J as n,G as o,Y as r,K as t};