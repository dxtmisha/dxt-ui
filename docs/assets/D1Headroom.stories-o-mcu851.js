import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,Ht as o,It as s,J as c,Nt as l,Ot as u,Pt as d,Ut as f,Vt as p,Yt as m,Z as h,in as g,kt as _,sn as v}from"./library-CO1fW2cN.js";import{E as y,O as b,d as x,f as S,i as C,l as w,n as T,t as E,u as D}from"./wiki-BMj2WokS.js";var O;function k(){return(k=e((()=>{_(),y(),u(),O=class{constructor(e,t,n,i=`headroom`,a){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`element`,void 0),r(this,`className`,void 0),r(this,`emits`,void 0),r(this,`value`,g(0)),r(this,`disappearsValue`,g(0)),r(this,`isSticky`,l(()=>this.value.value>0)),r(this,`transformValue`,l(()=>Math.min(this.value.value,this.transformThreshold))),r(this,`transformPercent`,l(()=>this.transformThreshold>0?1/this.transformThreshold*this.transformValue.value:0)),r(this,`valuePrevious`,g(0)),r(this,`valueDifference`,l(()=>this.valuePrevious.value-this.value.value)),r(this,`eventScroll`,void 0),r(this,`update`,()=>{this.updateValue().updateData().updateTransform().updateDisappears()}),r(this,`onScroll`,()=>{var e;return this.update(),(e=this.emits)==null||e.call(this,`headroomScroll`,this.eventItem),this}),this.props=e,this.refs=t,this.element=n,this.className=i,this.emits=a,o(async()=>{await p(),m(this.isSticky,()=>this.emits?.call(this,`headroomSticky`,this.eventItem)),m([this.refs.disappears,this.refs.transformThreshold,this.refs.scrollElement],()=>this.toggle(),{immediate:!0})}),f(()=>this.stop())}get expose(){return{isSticky:this.isSticky,getValues:()=>this.eventItem,update:this.update}}get eventElement(){return h(this.props.scrollElement)??window}get eventItem(){return{value:this.value.value,disappearsValue:this.disappearsValue.value,isSticky:this.isSticky.value,transformThreshold:this.transformThreshold,transformValue:this.transformValue.value,transformPercent:this.transformPercent.value,valueDifference:this.valueDifference.value}}get transformThreshold(){return this.props.transformThreshold??0}getDisappearsOffset(){if(!this.element.value)return 0;let{height:e,top:t}=this.getElementRect(),n=this.value.value,r=this.transformThreshold,i=(e+64)*-1,a=t+this.valueDifference.value;return a>0||r>0&&r!==this.transformValue.value?0:a<n*-1?n*-1:a<i?i:a}getElementRect(){let e=this.element.value;if(e){let t=e.getBoundingClientRect();return{height:t.height,top:t.top-this.getScrollElementTop()}}return{height:0,top:0}}getScrollElementTop(){let e=this.eventElement;return e&&e!==window&&`getBoundingClientRect`in e?e.getBoundingClientRect().top:0}getScroll(){let e=this.eventElement;return`scrollY`in e?e.scrollY:e.scrollTop}start(){let e=this.eventElement;return this.eventScroll&&this.eventScroll.stop(),this.eventScroll=new c(e,`scroll`,this.onScroll).start(),this}stop(){var e;return(e=this.eventScroll)==null||e.stop(),this.eventScroll=void 0,this}toggle(){return this.props.disappears||this.transformThreshold>0?(this.updateValue().update(),this.start()):this.stop(),this}updateData(){let e=this.element.value;return e&&(this.isSticky.value?e.dataset.headroom=`sticky`:e.dataset.headroom=`none`,this.valueDifference.value<0?e.dataset.headroomDirection=`down`:this.valueDifference.value>0?e.dataset.headroomDirection=`up`:e.dataset.headroomDirection=`none`,this.transformThreshold>0?e.dataset.headroomTransform=String(this.transformThreshold):delete e.dataset.headroomTransform),this}updateDisappears(){let e=this.element.value;return e&&this.props.disappears?(this.disappearsValue.value=this.getDisappearsOffset(),e.style.setProperty(`--${this.className}-sys-top`,`${this.disappearsValue.value}px`)):this.disappearsValue.value=0,this}updateTransform(){let e=this.element.value;return e&&(e.style.setProperty(`--${this.className}-sys-threshold`,`${this.transformThreshold}px`),e.style.setProperty(`--${this.className}-sys-value`,`${this.transformValue.value}px`),e.style.setProperty(`--${this.className}-sys-percent`,`${this.transformPercent.value}`),e.style.setProperty(`--${this.className}-sys-difference`,`${this.valueDifference.value}px`)),this}updateValue(){return this.valuePrevious.value=this.value.value,this.value.value=this.getScroll(),this.getElementRect(),this}}})))()}var A,j,M;function N(){return(N=e((()=>{k(),_(),y(),u(),A=class{constructor(e,t,n,i,a,o,s,c,l={}){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`element`,void 0),r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`slots`,void 0),r(this,`emits`,void 0),r(this,`headroom`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c;let{HeadroomConstructor:u=O}=l;this.headroom=new u(this.props,this.refs,this.element,this.className,this.emits)}get tag(){return this.props.tag??`div`}},j={tag:`div`,transform:0},M=class extends b{constructor(e,t,n,i=A){super(e,t,n),r(this,`item`,void 0),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.headroom.expose}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return s(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.initSlot(`default`))}}})))()}var P;function F(){return(F=e((()=>{N(),P={...j}})))()}var I;function L(){return(L=e((()=>{_(),N(),F(),I=i({name:`D1Headroom`,__name:`D1Headroom`,props:n({scrollElement:{},disappears:{type:Boolean},transformThreshold:{},tag:{}},P),emits:[`headroomScroll`,`headroomSticky`],setup(e,{expose:t,emit:n}){let r=n,i=e,o=l(()=>({main:{"d1-headroom":!0,"d1-headroom--disappears":i.disappears}})),s=l(()=>({})),c=new M(`d1.headroom`,i,{emits:r,classes:o,styles:s}),u=c.render();return t(c.expose()),(e,t)=>(a(),d(v(u)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1Headroom`,exportName:`default`,displayName:`D1Headroom`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Headroom/D1Headroom.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{E(),F(),B=[{name:`disappears`,type:`boolean`},{name:`scrollElement`,type:`string | ElementOrWindow`},{name:`tag`,type:`string`},{name:`transformThreshold`,type:`number`}],V=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],H=[{name:`headroomScroll`,properties:[{name:`event`,type:`HeadroomEventItem`}]},{name:`headroomSticky`,properties:[{name:`event`,type:`HeadroomEventItem`}]}],U={component:`Headroom`,props:B,slots:V,events:H,defaults:P,wikiDesign:T}})))()}var G;function K(){return(K=e((()=>{x(),w(),W(),G=new D(U.component,U.props,U.defaults,U.wikiDesign,C,S)})))()}var q=t({Headroom:()=>Y,__namedExportsOrder:()=>X,default:()=>J}),J,Y,X;function Z(){return(Z=e((()=>{z(),K(),J={title:`Ui/Headroom`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={args:{disappears:!0,transformThreshold:128},render:e=>({components:{D1Headroom:R},setup:()=>({args:e}),template:`
      <div
        id="wiki-descriptions-headroom"
        class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto"
      >
        <D1Headroom
          scrollElement="#wiki-descriptions-headroom"
          class="wiki-storybook-item--center wiki-storybook-item--padding wiki-storybook-dummy wiki-storybook-dummy--color--green"
          style="height: 48px;"
          v-bind="args"
        >
          Headroom Sticky Header Content
        </D1Headroom>
        <h3>Modern Web Interfaces and User Experience Design</h3>
        <p>In today's digital landscape, creating high-quality user interfaces has become a critical aspect of web application development. User interface components must not only be functional but also provide intuitive interaction patterns that enhance the overall user experience. The evolution of web technologies has enabled developers to create more sophisticated and engaging interfaces.</p>

        <p>Scrollbars and sticky headers play a particularly important role in content navigation and information architecture. They allow users to easily navigate through large volumes of information while maintaining context and orientation within the document structure. Modern scrollbars and headers should be adaptive, responsive, and visually appealing while providing consistent behavior across different platforms and devices.</p>

        <h4>Principles of Effective Design Implementation</h4>
        <p>Effective headroom design takes into account multiple factors ranging from performance optimization to accessibility compliance. It's essential to ensure smooth animations, proper handling of scroll events, and sticky positioning. Cross-browser compatibility remains a top priority, especially when dealing with custom scroll implementations.</p>

        <p>Users expect sticky headers to work predictably and uniformly throughout all parts of an application. This requires thorough testing and optimization for various usage scenarios, including mobile devices, desktop computers, and touch-enabled interfaces. The component must handle edge cases gracefully and provide appropriate feedback for user interactions.</p>

        <h4>Technical Architecture and Scroll Management</h4>
        <p>When developing sticky headers and scroll-responsive components, performance optimization becomes crucial. Scroll event handlers should be lightweight and avoid triggering heavy layout recalculations or layout thrashing. Utilizing CSS custom properties and transform matrices allows hardware-accelerated animations that keep scrolling smooth at high frame rates.</p>

        <p>Dynamic header transformation provides contextual visual cues to users as they explore dense documentation or long articles. As the user scrolls down, the header can shrink or hide to maximize screen real estate, and upon scrolling back up, it smoothly reappears to provide immediate access to primary navigation links and actions.</p>

        <h4>Accessibility and Responsive Adaptation</h4>
        <p>Accessibility considerations should be built into sticky layout components from the beginning. Screen readers and keyboard navigation must operate seamlessly regardless of visual transform states or dynamic positioning shifts. Ensuring proper focus management and semantic landmark roles allows all users to navigate application pages with confidence.</p>

        <p>Responsive design strategies require sticky elements to adapt gracefully across desktop monitors, tablets, and mobile smartphones. Touch interaction patterns, dynamic viewport boundaries, and safe area insets must be accounted for to deliver a unified and polished application experience.</p>
      </div>
    `})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    disappears: true,
    transformThreshold: 128
  },
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Headroom
    },
    setup: () => ({
      args
    }),
    template: \`
      <div
        id="wiki-descriptions-headroom"
        class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowAuto"
      >
        <D1Headroom
          scrollElement="#wiki-descriptions-headroom"
          class="wiki-storybook-item--center wiki-storybook-item--padding wiki-storybook-dummy wiki-storybook-dummy--color--green"
          style="height: 48px;"
          v-bind="args"
        >
          Headroom Sticky Header Content
        </D1Headroom>
        <h3>Modern Web Interfaces and User Experience Design</h3>
        <p>In today's digital landscape, creating high-quality user interfaces has become a critical aspect of web application development. User interface components must not only be functional but also provide intuitive interaction patterns that enhance the overall user experience. The evolution of web technologies has enabled developers to create more sophisticated and engaging interfaces.</p>

        <p>Scrollbars and sticky headers play a particularly important role in content navigation and information architecture. They allow users to easily navigate through large volumes of information while maintaining context and orientation within the document structure. Modern scrollbars and headers should be adaptive, responsive, and visually appealing while providing consistent behavior across different platforms and devices.</p>

        <h4>Principles of Effective Design Implementation</h4>
        <p>Effective headroom design takes into account multiple factors ranging from performance optimization to accessibility compliance. It's essential to ensure smooth animations, proper handling of scroll events, and sticky positioning. Cross-browser compatibility remains a top priority, especially when dealing with custom scroll implementations.</p>

        <p>Users expect sticky headers to work predictably and uniformly throughout all parts of an application. This requires thorough testing and optimization for various usage scenarios, including mobile devices, desktop computers, and touch-enabled interfaces. The component must handle edge cases gracefully and provide appropriate feedback for user interactions.</p>

        <h4>Technical Architecture and Scroll Management</h4>
        <p>When developing sticky headers and scroll-responsive components, performance optimization becomes crucial. Scroll event handlers should be lightweight and avoid triggering heavy layout recalculations or layout thrashing. Utilizing CSS custom properties and transform matrices allows hardware-accelerated animations that keep scrolling smooth at high frame rates.</p>

        <p>Dynamic header transformation provides contextual visual cues to users as they explore dense documentation or long articles. As the user scrolls down, the header can shrink or hide to maximize screen real estate, and upon scrolling back up, it smoothly reappears to provide immediate access to primary navigation links and actions.</p>

        <h4>Accessibility and Responsive Adaptation</h4>
        <p>Accessibility considerations should be built into sticky layout components from the beginning. Screen readers and keyboard navigation must operate seamlessly regardless of visual transform states or dynamic positioning shifts. Ensuring proper focus management and semantic landmark roles allows all users to navigate application pages with confidence.</p>

        <p>Responsive design strategies require sticky elements to adapt gracefully across desktop monitors, tablets, and mobile smartphones. Touch interaction patterns, dynamic viewport boundaries, and safe area insets must be accounted for to deliver a unified and polished application experience.</p>
      </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...Y.parameters?.docs?.source}}},X=[`Headroom`]})))()}export{K as a,G as i,Y as n,Z as r,q as t};