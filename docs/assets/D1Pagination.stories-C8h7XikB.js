import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,in as c,jt as l,lt as u,nt as d,qt as f,tn as p}from"./library-C6UyfMBX.js";import{C as m,D as h,d as g,f as _,g as v,i as y,n as b,s as ee,t as te,u as ne}from"./wiki-Cqdd-d3l.js";import{n as re,t as x}from"./EventClickInclude-BePe4mYM-CJXSyzTR.js";import{n as ie,t as ae}from"./ModelInclude-CSCLC3Le-BPdhkRTk.js";import{n as S,t as oe}from"./AriaStaticInclude-B7pfWpnd-C1oc8ai_.js";import{n as C,t as se}from"./TextInclude-Bh7pGgEs-C4LrRuLb.js";import{n as w,t as ce}from"./Button-Iibh6i9Z.js";import{n as le,t as ue}from"./AreaInclude-BWxoOp5M-dakKMbbq.js";import{n as de,t as fe}from"./FocusDirectionInclude-BTjziCHh-9FxOqI5I.js";import{n as pe,t as me}from"./Menu-tv9h0SC1.js";var T,E,D,O,k,A,j;function M(){return(M=e((()=>{oe(),C(),x(),ae(),le(),de(),n(),h(),T=class{props;event;emits;modelValue;modelRows;constructor(e,t,n,r,i){this.props=e,this.event=t,this.emits=n,this.modelValue=r,this.modelRows=i}onClick=(e,t)=>{switch(t?.type){case`more`:this.onMore(e,t);break;case`morePrev`:this.onMorePrev(e,t);break;case`rows`:this.onRows(e,t),this.modelRows?.emit(t?.value??1);break;default:this.modelValue?.emit(t?.value??1)}this.event.onClick(e,t)};onMore=(e,t)=>{this.emits?.(`more`,e,t),this.emits?.(`moreLite`,t)};onMorePrev=(e,t)=>{this.emits?.(`morePrev`,e,t),this.emits?.(`morePrevLite`,t)};onRows=(e,t)=>{this.emits?.(`rows`,e,t),this.emits?.(`rowsLite`,t)}},E=class{props;refs;text;emits;valueItem=p(1);rowsItem=p(1);constructor(e,t,n,r){this.props=e,this.refs=t,this.text=n,this.emits=r,f([this.refs.value,this.refs.modelValue,this.refs.rows,this.refs.modelRows],()=>{this.valueItem.value=Number(this.props.modelValue??this.props.value??1),this.rowsItem.value=Number(this.props.modelRows??this.props.rows??1)},{immediate:!0})}info=l(()=>{let e=this.text?.info;if(e){let t=this.count,n=this.rows,r=this.value*n,i=r-n+1,a=r<t?r:t;return e.replace(`[item]`,`${i}-${a}`).replace(`[count]`,t.toString())}return``});get count(){return Number(this.props.count??0)}get pagesCount(){return Math.ceil(this.count/this.rows)}get rows(){return this.rowsItem.value}get value(){return this.valueItem.value}get visible(){return Number(this.props.visible??3)}get ends(){return Number(this.props.ends??1)}},D=class{props;page;event;text;constructor(e,t,n,r){this.props=e,this.page=t,this.event=n,this.text=r}pagination=l(()=>{let e=[],t=this.page.visible,n=this.page.value-Math.floor(t/2);n+t>this.page.pagesCount&&(n=this.page.pagesCount-t+1),n<1&&(n=1);for(let r=n;r<n+t;r++)r<=this.page.pagesCount&&e.push(this.getPageItem(r));return e});paginationFirst=l(()=>{let e=this.pagination.value[0]??0,t=[];if(this.props.showEnds&&e){let n=Math.min(this.page.ends,e.value-1);for(let e=1;e<=n;e++)t.push(this.getPageItem(e))}return t});paginationLast=l(()=>{let e=this.pagination.value[this.pagination.value.length-1],t=[];if(this.props.showEnds&&e){let n=Math.max(e.value+1,this.page.pagesCount-this.page.ends+1);for(let e=n;e<=this.page.pagesCount;e++)t.push(this.getPageItem(e))}return t});showFirstEllipsis=l(()=>{let e=this.pagination.value[0];return!!(this.props.showEnds&&e&&this.page.ends<e.value-1)});showLastEllipsis=l(()=>{let e=this.pagination.value[this.pagination.value.length-1];return!!(this.props.showEnds&&e&&this.page.pagesCount-this.page.ends>e.value)});get back(){let e=this.page.value;return{...this.binds,key:`item__back`,icon:this.props.iconArrowLeft,value:e-1,disabled:e<=1,title:this.text?.previous,...S.label(this.text?.previous),"data-event-type":`back`}}get next(){let e=this.page.value;return{...this.binds,key:`item__next`,icon:this.props.iconArrowRight,value:e+1,disabled:e>=this.page.pagesCount,title:this.text?.next,...S.label(this.text?.next),"data-event-type":`next`}}get first(){return{...this.binds,key:`item__first`,icon:this.props.iconArrowFirst,value:1,disabled:this.page.value<=1,title:this.text?.first,...S.label(this.text?.first),"data-event-type":`first`}}get last(){return{...this.binds,key:`item__last`,icon:this.props.iconArrowLast,value:this.page.pagesCount,disabled:this.page.value>=this.page.pagesCount,title:this.text?.last,...S.label(this.text?.last),"data-event-type":`last`}}get more(){return{...this.binds,key:`item__more`,label:this.text?.more,value:this.page.value+1,...S.label(this.text?.more),"data-event-type":`more`,...this.props.buttonMoreAttrs}}get morePrev(){return{...this.binds,key:`item__morePrev`,label:this.text?.morePrev,value:this.page.value-1,...S.label(this.text?.morePrev),"data-event-type":`morePrev`,...this.props.buttonMorePrevAttrs}}get menu(){return{...this.binds,key:`menuControl`,label:this.props.rows?.toString(),iconTrailing:this.props.iconArrowDown,...S.label(this.text?.rowsPerPage),onClick:void 0,...this.props.buttonMenuAttrs}}showMore(){return!!(this.props.showMore&&this.page.pagesCount&&this.page.value<this.page.pagesCount)}showMorePrev(){return!!(this.props.showMorePrev&&this.page.pagesCount&&this.page.value>1)}get binds(){return{hasLabelMinWidth:!1,onClick:this.event?.onClick,tabindex:-1,...this.props.buttonAttrs}}getPageItem(e){return{...this.binds,key:`item__${e}`,label:e.toString(),value:e,selected:this.page.value===e,...S.label(`${this.text?.page} ${e}`.trim()),"data-event-type":`page`}}},O=class{props;event;text;constructor(e,t,n){this.props=e,this.event=t,this.text=n}menuList=l(()=>{if(this.props.menuRows)return u(this.props.menuRows,e=>({value:e,label:e.toString()}))});get labelRowsPerPage(){return this.text?.rowsPerPage}get binds(){return{key:`menuRows`,selected:this.props.rows,list:this.menuList.value,onClick:this.event?.onClick,itemAttrs:{"data-event-type":`rows`},...this.props.menuAttrs}}},k=class{props;refs;element;classDesign;className;components;slots;emits;text;page;eventClick;event;focusDirection;button;menuRows;area;constructor(e,t,n,r,i,a,o,s,c={}){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{AreaIncludeConstructor:l=ue,EventClickIncludeConstructor:u=re,FocusDirectionIncludeConstructor:d=fe,ModelIncludeConstructor:f=ie,PaginationButtonConstructor:p=D,PaginationEventConstructor:m=T,PaginationMenuRowsConstructor:h=O,PaginationPageConstructor:g=E,TextIncludeConstructor:_=se}=c;this.text=new _(e),this.page=new g(e,t,this.text,s),this.eventClick=new u(e,void 0,s),this.event=new m(e,this.eventClick,s,new f(`value`,s,this.page.valueItem),new f(`rows`,s,this.page.rowsItem)),this.focusDirection=new d(this.element,`.${i}__button:not(:disabled)`,`.${this.classDesign}-button--selected`,`${this.classDesign}-button--focus`),this.button=new p(e,this.page,this.event,this.text),this.menuRows=new h(e,this.event,this.text),this.area=new l(e)}get binds(){return{...this.focusDirection.binds,...S.role(`navigation`)}}},A={value:1,visible:3,ends:1,ellipsis:`...`,hideIfOne:!0,showPagination:!0,showArrows:!0,showFirstLast:!0,showRowsPerPageLabel:!0},j=class extends v{item;constructor(e,t,n,r=k){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},button:this.getSubClass(`button`),navigation:this.getSubClass(`navigation`),more:this.getSubClass(`more`),morePrev:this.getSubClass(`morePrev`),info:this.getSubClass(`info`),menuRows:this.getSubClass(`menuRows`),menuRowsLabel:this.getSubClass(`menuRows__label`),ellipsis:this.getSubClass(`ellipsis`),spacer:this.getSubClass(`spacer`)}}initStyles(){return{}}initRender(){if(!this.props.hideIfOne||this.item.page.pagesCount>1){let e=[];return this.initSlot(`leading`,e),e.push(...this.renderMorePrev(),...this.renderMore(),...this.renderInfo(),...this.renderMenu()),this.initSlot(`info`,e),e.push(...this.renderSpacer(),...this.renderNavigation()),this.initSlot(`trailing`,e),a(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.binds},e)}}renderMore=()=>{if(this.item.button.showMore()){let e=this.renderButton({...this.item.button.more,class:this.classes?.value.more},`more`);if(e)return[e]}return[]};renderMorePrev=()=>{if(this.item.button.showMorePrev()){let e=this.renderButton({...this.item.button.morePrev,class:this.classes?.value.morePrev},`morePrev`);if(e)return[e]}return[]};renderInfo=()=>this.props.showInfo?[a(`div`,this.getKeyClass(`info`),this.item.page.info.value)]:[];renderMenu=()=>{if(this.props.menuRows&&this.props.menuRows.length>0){let e=[...this.renderMenuLabel(),...this.renderMenuControl()];return[a(`div`,this.getKeyClass(`menuRows`),e)]}return[]};renderMenuLabel=()=>this.props.showRowsPerPageLabel?[a(`div`,this.getKeyClass(`menuRowsLabel`),this.item.menuRows.labelRowsPerPage)]:[];renderMenuControl=()=>{let e=this.components.renderOne(`menu`,this.item.menuRows.binds,{control:this.renderMenuButton});return e?[e]:[]};renderMenuButton=e=>this.renderButton({...this.item.button.menu,iconTurn:e.open.value,...e.binds});renderNavigation=()=>this.props.showPagination?[a(`div`,this.getKeyClass(`navigation`),[...this.renderFirst(),...this.renderBack(),...this.renderPaginationFirst(),...this.renderFirstEllipsis(),...this.renderPagination(),...this.renderLastEllipsis(),...this.renderPaginationLast(),...this.renderNext(),...this.renderLast()])]:[];renderPagination=()=>{let e=[];return this.item.button.pagination.value.forEach(t=>{let n=this.renderButton(t);n&&e.push(n)}),e};renderPaginationFirst=()=>{let e=[];return this.item.button.paginationFirst.value.forEach(t=>{let n=this.renderButton(t);n&&e.push(n)}),e};renderPaginationLast=()=>{let e=[];return this.item.button.paginationLast.value.forEach(t=>{let n=this.renderButton(t);n&&e.push(n)}),e};renderFirstEllipsis=()=>this.item.button.showFirstEllipsis.value?this.renderEllipsis():[];renderLastEllipsis=()=>this.item.button.showLastEllipsis.value?this.renderEllipsis():[];renderFirst=()=>{if(this.props.showFirstLast){let e=this.renderButton(this.item.button.first);if(e)return[e]}return[]};renderLast=()=>{if(this.props.showFirstLast){let e=this.renderButton(this.item.button.last);if(e)return[e]}return[]};renderBack=()=>{if(this.props.showArrows){let e=this.renderButton(this.item.button.back);if(e)return[e]}return[]};renderNext=()=>{if(this.props.showArrows){let e=this.renderButton(this.item.button.next);if(e)return[e]}return[]};renderButton=(e,t=e.selected?`selected`:void 0)=>this.components.renderOne(`button`,m(e,{class:this.classes?.value.button}),void 0,t);renderEllipsis=()=>[a(`span`,this.getKeyClass(`ellipsis`),this.props.ellipsis)];renderSpacer=()=>[a(`div`,this.getKeyClass(`spacer`))]}})))()}var N,P;function F(){return(F=e((()=>{M(),N={adaptive:[`lineAlways`,`lineSm`,`lineMd`,`lineLg`,`lineXl`,`line2xl`],adaptiveMore:[`lineAlways`,`lineSm`,`lineMd`,`lineLg`,`lineXl`,`line2xl`],adaptiveMorePrev:[`lineAlways`,`lineSm`,`lineMd`,`lineLg`,`lineXl`,`line2xl`]},P={...A,iconArrowDown:`arrow_drop_down`,iconArrowFirst:`first_page`,iconArrowLast:`last_page`,iconArrowLeft:`chevron_left`,iconArrowRight:`chevron_right`,adaptive:`lineMd`,adaptiveMore:`lineLg`,adaptiveMorePrev:`lineLg`}})))()}var I;function L(){return(L=e((()=>{n(),h(),M(),w(),pe(),F(),I=i({name:`D1Pagination`,__name:`D1Pagination`,props:o({textFirst:{type:[String,Function]},textLast:{type:[String,Function]},textMore:{type:[String,Function]},textMorePrev:{type:[String,Function]},textRowsPerPage:{type:[String,Function]},textInfo:{type:[String,Function]},textPrevious:{type:[String,Function]},textNext:{type:[String,Function]},area:{},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},value:{},count:{},rows:{},menuRows:{},visible:{},ends:{},ellipsis:{},hideIfOne:{type:Boolean},showPagination:{type:Boolean},showArrows:{type:Boolean},showFirstLast:{type:Boolean},showEnds:{type:Boolean},showMore:{type:Boolean},showMorePrev:{type:Boolean},showInfo:{type:Boolean},showRowsPerPageLabel:{type:Boolean},iconArrowDown:{},iconArrowFirst:{},iconArrowLast:{},iconArrowLeft:{},iconArrowRight:{},buttonAttrs:{},buttonMoreAttrs:{},buttonMorePrevAttrs:{},buttonMenuAttrs:{},menuAttrs:{},modelRows:{},"onUpdate:rows":{type:Function},"onUpdate:modelRows":{type:Function},adaptive:{},adaptiveMore:{},adaptiveMorePrev:{}},P),emits:[`click`,`clickLite`,`update:value`,`update:modelValue`,`update:rows`,`update:modelRows`,`more`,`moreLite`,`morePrev`,`morePrevLite`,`rows`,`rowsLite`],setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-pagination":!0,[`d1-pagination--adaptive--${a.adaptive}`]:d(N.adaptive,a.adaptive),[`d1-pagination--adaptiveMore--${a.adaptiveMore}`]:d(N.adaptiveMore,a.adaptiveMore),[`d1-pagination--adaptiveMorePrev--${a.adaptiveMorePrev}`]:d(N.adaptiveMorePrev,a.adaptiveMorePrev)}})),u=l(()=>({})),f=new j(`d1.pagination`,a,{emits:i,classes:o,styles:u,components:{button:ce,menu:me},compMod:{button:{text:!0,size:`sm`,inverse:!0},selected:{secondary:!0,size:`sm`},more:{secondary:!0,size:`sm`},morePrev:{secondary:!0,size:`sm`,inverse:!0}}}),p=f.render();return t(f.expose()),(e,t)=>(s(),r(c(p)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1Pagination`,exportName:`default`,displayName:`D1Pagination`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Pagination/D1Pagination.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{te(),F(),B=[{name:`adaptive`,type:`string`,option:[`lineAlways`,`lineSm`,`lineMd`,`lineLg`,`lineXl`,`line2xl`]},{name:`adaptiveMore`,type:`string`,option:[`lineAlways`,`lineSm`,`lineMd`,`lineLg`,`lineXl`,`line2xl`]},{name:`adaptiveMorePrev`,type:`string`,option:[`lineAlways`,`lineSm`,`lineMd`,`lineLg`,`lineXl`,`line2xl`]},{name:`area`,type:`string`},{name:`buttonAttrs`,type:`ConstrBind<ButtonProps>`},{name:`buttonMenuAttrs`,type:`ConstrBind<ButtonProps>`},{name:`buttonMoreAttrs`,type:`ConstrBind<ButtonProps>`},{name:`buttonMorePrevAttrs`,type:`ConstrBind<ButtonProps>`},{name:`count`,type:`string | number`},{name:`ellipsis`,type:`string`},{name:`ends`,type:`number`},{name:`hideIfOne`,type:`boolean`},{name:`iconArrowDown`,type:`IconValue<IconProps>`},{name:`iconArrowFirst`,type:`IconValue<IconProps>`},{name:`iconArrowLast`,type:`IconValue<IconProps>`},{name:`iconArrowLeft`,type:`IconValue<IconProps>`},{name:`iconArrowRight`,type:`IconValue<IconProps>`},{name:`menuAttrs`,type:`ConstrBind<MenuProps>`},{name:`menuRows`,type:`number[]`},{name:`modelRows`,type:`string | number`},{name:`modelValue`,type:`string | number`},{name:`onUpdate:modelRows`,type:`((value: string | number) => void)`},{name:`onUpdate:modelValue`,type:`((value: string | number) => void)`},{name:`onUpdate:rows`,type:`((value: string | number) => void)`},{name:`onUpdate:value`,type:`((value: string | number) => void)`},{name:`rows`,type:`string | number`},{name:`showArrows`,type:`boolean`},{name:`showEnds`,type:`boolean`},{name:`showFirstLast`,type:`boolean`},{name:`showInfo`,type:`boolean`},{name:`showMore`,type:`boolean`},{name:`showMorePrev`,type:`boolean`},{name:`showPagination`,type:`boolean`},{name:`showRowsPerPageLabel`,type:`boolean`},{name:`textFirst`,type:`TextValue`},{name:`textInfo`,type:`TextValue`},{name:`textLast`,type:`TextValue`},{name:`textMore`,type:`TextValue`},{name:`textMorePrev`,type:`TextValue`},{name:`textNext`,type:`TextValue`},{name:`textPrevious`,type:`TextValue`},{name:`textRowsPerPage`,type:`TextValue`},{name:`value`,type:`string | number`},{name:`visible`,type:`number`}],V=[{name:`info`,description:`Slot in the middle before the spacer / Слот в середине перед разделителем (spacer)`,properties:[{name:`props`,type:`(() => any) | undefined`}]},{name:`leading`,description:`Slot at the very beginning of the component / Слот в самом начале компонента`,properties:[{name:`props`,type:`(() => any) | undefined`}]},{name:`trailing`,description:`Slot at the very end of the component / Слот в самом конце компонента`,properties:[{name:`props`,type:`(() => any) | undefined`}]}],H=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`more`,properties:[{name:`event`,type:`MouseEvent`},{name:`options?`,type:`EventClickValue | undefined`}]},{name:`moreLite`,properties:[{name:`options?`,type:`EventClickValue | undefined`}]},{name:`morePrev`,properties:[{name:`event`,type:`MouseEvent`},{name:`options?`,type:`EventClickValue | undefined`}]},{name:`morePrevLite`,properties:[{name:`options?`,type:`EventClickValue | undefined`}]},{name:`rows`,properties:[{name:`event`,type:`MouseEvent`},{name:`options?`,type:`EventClickValue | undefined`}]},{name:`rowsLite`,properties:[{name:`options?`,type:`EventClickValue | undefined`}]},{name:`update:modelRows`,properties:[{name:`value`,type:`number`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`number`}]},{name:`update:rows`,properties:[{name:`value`,type:`number`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`number`}]}],U={component:`Pagination`,props:B,slots:V,events:H,defaults:P,wikiDesign:b}})))()}var G;function K(){return(K=e((()=>{g(),ee(),W(),G=new ne(U.component,U.props,U.defaults,U.wikiDesign,y,_)})))()}var he=t({Pagination:()=>J,PaginationBasic:()=>Y,PaginationShowMore:()=>X,PaginationVModel:()=>Z,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),n(),q={title:`Ui/Pagination`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={},Y={name:`Базовый`,render:()=>({components:{D1Pagination:R},setup(){return{}},template:`
        <D1Pagination
          :count="100"
          :rows="10"
        />
    `})},X={name:`Показать еще / Показать предыдущие`,render:()=>({components:{D1Pagination:R},template:`
        <div class="wiki-storybook-flex-column">
          <D1Pagination
            :count="100"
            :rows="10"
            :value="5"
            show-more-prev
          />

          <D1Pagination
            :count="100"
            :rows="10"
            :value="5"
            show-more
          />
        </div>
    `})},Z={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Pagination:R},setup(){return{page:p(1),rows:p(10),menuRows:[5,10,20,50]}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Page: <strong>{{ page }}</strong></span>
            <span>Rows per page: <strong>{{ rows }}</strong></span>
            <button class="wiki-storybook-button" @click="page = 5">Go to Page 5</button>
            <button class="wiki-storybook-button" @click="rows = 20">Set Rows to 20</button>
          </div>

          <D1Pagination
            v-model:value="page"
            v-model:rows="rows"
            :count="100"
            :menu-rows="menuRows"
            show-info
          />
        </div>
    `})},Q=[`Pagination`,`PaginationBasic`,`PaginationShowMore`,`PaginationVModel`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Базовый',
  render: () => ({
    components: {
      D1Pagination
    },
    setup() {
      return {};
    },
    template: \`
        <D1Pagination
          :count="100"
          :rows="10"
        />
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Показать еще / Показать предыдущие',
  render: () => ({
    components: {
      D1Pagination
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Pagination
            :count="100"
            :rows="10"
            :value="5"
            show-more-prev
          />

          <D1Pagination
            :count="100"
            :rows="10"
            :value="5"
            show-more
          />
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1Pagination
    },
    setup() {
      const page = ref(1);
      const rows = ref(10);
      const menuRows = [5, 10, 20, 50];
      return {
        page,
        rows,
        menuRows
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Page: <strong>{{ page }}</strong></span>
            <span>Rows per page: <strong>{{ rows }}</strong></span>
            <button class="wiki-storybook-button" @click="page = 5">Go to Page 5</button>
            <button class="wiki-storybook-button" @click="rows = 20">Set Rows to 20</button>
          </div>

          <D1Pagination
            v-model:value="page"
            v-model:rows="rows"
            :count="100"
            :menu-rows="menuRows"
            show-info
          />
        </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}}})))()}export{Z as a,K as c,X as i,J as n,$ as o,Y as r,G as s,he as t};