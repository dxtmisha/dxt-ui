import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,C as r,Dt as i,Mt as a,Nt as o,Pt as s,Rt as c,Ut as l,Vt as u,i as d,in as f,jt as p,qt as m,tn as h,zt as g}from"./library-C6UyfMBX.js";import{D as _,d as v,f as y,g as b,i as x,n as S,s as C,t as w,u as T}from"./wiki-Cqdd-d3l.js";var E;function D(){return(D=e((()=>{i(),_(),E=class{props;refs;element;className;emits;value=h(0);disappearsValue=h(0);isSticky=p(()=>this.value.value>0);transformValue=p(()=>Math.min(this.value.value,this.transformThreshold));transformPercent=p(()=>this.transformThreshold>0?1/this.transformThreshold*this.transformValue.value:0);valuePrevious=h(0);valueDifference=p(()=>this.valuePrevious.value-this.value.value);eventScroll;constructor(e,t,r,i=`headroom`,a){this.props=e,this.refs=t,this.element=r,this.className=i,this.emits=a,n(async()=>{await g(),m(this.isSticky,()=>this.emits?.(`headroomSticky`,this.eventItem)),m([this.refs.disappears,this.refs.transformThreshold,this.refs.scrollElement],()=>this.toggle(),{immediate:!0})}),u(()=>this.stop())}get expose(){return{isSticky:this.isSticky,getValues:()=>this.eventItem,update:this.update}}update=()=>{this.updateValue().updateData().updateTransform().updateDisappears()};get eventElement(){return r(this.props.scrollElement)??window}get eventItem(){return{value:this.value.value,disappearsValue:this.disappearsValue.value,isSticky:this.isSticky.value,transformThreshold:this.transformThreshold,transformValue:this.transformValue.value,transformPercent:this.transformPercent.value,valueDifference:this.valueDifference.value}}get transformThreshold(){return this.props.transformThreshold??0}getDisappearsOffset(){if(!this.element.value)return 0;let{height:e,top:t}=this.getElementRect(),n=this.value.value,r=this.transformThreshold,i=(e+64)*-1,a=t+this.valueDifference.value;return a>0||r>0&&r!==this.transformValue.value?0:a<n*-1?n*-1:a<i?i:a}getElementRect(){let e=this.element.value;if(e){let t=e.getBoundingClientRect();return{height:t.height,top:t.top-this.getScrollElementTop()}}return{height:0,top:0}}getScrollElementTop(){let e=this.eventElement;return e&&e!==window&&`getBoundingClientRect`in e?e.getBoundingClientRect().top:0}getScroll(){let e=this.eventElement;return`scrollY`in e?e.scrollY:e.scrollTop}onScroll=()=>(this.update(),this.emits?.(`headroomScroll`,this.eventItem),this);start(){let e=this.eventElement;return this.eventScroll&&this.eventScroll.stop(),this.eventScroll=new d(e,`scroll`,this.onScroll).start(),this}stop(){return this.eventScroll?.stop(),this.eventScroll=void 0,this}toggle(){return this.props.disappears||this.transformThreshold>0?(this.updateValue().update(),this.start()):this.stop(),this}updateData(){let e=this.element.value;return e&&(this.isSticky.value?e.dataset.headroom=`sticky`:e.dataset.headroom=`none`,this.valueDifference.value<0?e.dataset.headroomDirection=`down`:this.valueDifference.value>0?e.dataset.headroomDirection=`up`:e.dataset.headroomDirection=`none`,this.transformThreshold>0?e.dataset.headroomTransform=String(this.transformThreshold):delete e.dataset.headroomTransform),this}updateDisappears(){let e=this.element.value;return e&&this.props.disappears?(this.disappearsValue.value=this.getDisappearsOffset(),e.style.setProperty(`--${this.className}-sys-top`,`${this.disappearsValue.value}px`)):this.disappearsValue.value=0,this}updateTransform(){let e=this.element.value;return e&&(e.style.setProperty(`--${this.className}-sys-threshold`,`${this.transformThreshold}px`),e.style.setProperty(`--${this.className}-sys-value`,`${this.transformValue.value}px`),e.style.setProperty(`--${this.className}-sys-percent`,`${this.transformPercent.value}`),e.style.setProperty(`--${this.className}-sys-difference`,`${this.valueDifference.value}px`)),this}updateValue(){return this.valuePrevious.value=this.value.value,this.value.value=this.getScroll(),this.getElementRect(),this}}})))()}var O,k,A;function j(){return(j=e((()=>{D(),i(),_(),O=class{props;refs;element;classDesign;className;components;slots;emits;headroom;constructor(e,t,n,r,i,a,o,s,c={}){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{HeadroomConstructor:l=E}=c;this.headroom=new l(this.props,this.refs,this.element,this.className,this.emits)}get tag(){return this.props.tag??`div`}},k={tag:`div`,transform:0},A=class extends b{item;constructor(e,t,n,r=O){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.headroom.expose}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return s(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.initSlot(`default`))}}})))()}var M;function N(){return(N=e((()=>{j(),M={...k}})))()}var P;function F(){return(F=e((()=>{i(),j(),N(),P=o({name:`D1Headroom`,__name:`D1Headroom`,props:c({scrollElement:{},disappears:{type:Boolean},transformThreshold:{},tag:{}},M),emits:[`headroomScroll`,`headroomSticky`],setup(e,{expose:t,emit:n}){let r=n,i=e,o=p(()=>({main:{"d1-headroom":!0,"d1-headroom--disappears":i.disappears}})),s=p(()=>({})),c=new A(`d1.headroom`,i,{emits:r,classes:o,styles:s}),u=c.render();return t(c.expose()),(e,t)=>(l(),a(f(u)))}})})))()}var I;function L(){return(L=e((()=>{F(),I=P,P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{name:`D1Headroom`,exportName:`default`,displayName:`D1Headroom`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Headroom/D1Headroom.vue`]})})))()}var R,z,B,V;function H(){return(H=e((()=>{w(),N(),R=[{name:`disappears`,type:`boolean`},{name:`scrollElement`,type:`string | ElementOrWindow`},{name:`tag`,type:`string`},{name:`transformThreshold`,type:`number`}],z=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],B=[{name:`headroomScroll`,properties:[{name:`event`,type:`HeadroomEventItem`}]},{name:`headroomSticky`,properties:[{name:`event`,type:`HeadroomEventItem`}]}],V={component:`Headroom`,props:R,slots:z,events:B,defaults:M,wikiDesign:S}})))()}var U;function W(){return(W=e((()=>{v(),C(),H(),U=new T(V.component,V.props,V.defaults,V.wikiDesign,x,y)})))()}var G=t({Headroom:()=>q,__namedExportsOrder:()=>J,default:()=>K}),K,q,J;function Y(){return(Y=e((()=>{L(),W(),K={title:`Ui/Headroom`,component:I,parameters:{design:`d1`,docs:{description:{component:U.getDescription()}}},argTypes:U.getWiki(),args:U.getValues()},q={args:{disappears:!0,transformThreshold:128},render:e=>({components:{D1Headroom:I},setup:()=>({args:e}),template:`
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
    `})},J=[`Headroom`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}}})))()}export{W as a,U as i,q as n,Y as r,G as t};