import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{t as n}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as r,l as i,n as a,o,t as s,u as c}from"./wiki-DwIxUKqL.js";import{i as l,n as u,r as d,t as f}from"./D1SnackbarItem-Dbcdnfw1.js";var p,m,h,g,_=t((()=>{s(),l(),p=[{name:`actionsAttrs`,type:`ConstrBind<ActionsProps>`},{name:`actionsHide`,type:`boolean`},{name:`actionsList`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`actionsSecondary`,type:`(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined`},{name:`area`,type:`string`},{name:`ariaLive`,type:`string`,option:[`off`,`polite`,`assertive`]},{name:`button`,type:`string | number | ConstrBind<ButtonProps>`},{name:`closeButton`,type:`boolean`},{name:`component`,type:`any`},{name:`componentProps`,type:`object`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`error`,type:`boolean`},{name:`html`,type:`string`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconAttrs`,type:`ConstrBind<IconProps>`},{name:`iconClose`,type:`IconValue<IconProps>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTrailing`,type:`IconValue<IconProps>`},{name:`iconTrailingDirOnly`,type:`boolean`},{name:`iconTrailingPalette`,type:`boolean`},{name:`iconTrailingTurnOnly`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`role`,type:`string`},{name:`selected`,type:`boolean`},{name:`success`,type:`boolean`},{name:`textClose`,type:`TextValue`},{name:`value`,type:`string`}],m=[{name:`body`,description:`Slot for the notification body/ Слот для содержимого уведомления`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]}],h=[{name:`actions`,description:`Click event for actions/ Событие клика для действий`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`actionsLite`,description:`Simple click event for actions/ Простое событие клика для действий`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`close`,description:`Event triggered when notification is closed/ Событие при закрытии уведомления`,properties:[{name:`value`,type:`string | undefined`}]}],g={component:`SnackbarItem`,props:p,slots:m,events:h,defaults:d,wikiDesign:a}})),v,y=t((()=>{r(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,i,n)})),b=e({SnackbarItem:()=>S,SnackbarItemBasic:()=>C,__namedExportsOrder:()=>w,default:()=>x}),x,S,C,w,T=t((()=>{u(),y(),x={title:`Ui/SnackbarItem`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={},C={name:`Базовые`,render:()=>({components:{D1SnackbarItem:f},template:`
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
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`SnackbarItem`,`SnackbarItemBasic`]}));T();export{S as SnackbarItem,C as SnackbarItemBasic,w as __namedExportsOrder,x as default,y as i,T as n,v as r,b as t};