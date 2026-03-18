import{D as P,E as f,F as D,I as b,c as m,J as v}from"./iframe-okvuAVTt.js";import{T as k,k as w}from"./BlockDesign-DHCkcwP1-DrccDTew.js";import{w as T,W as _,a as x,b as S}from"./wiki-BeTUR4cU.js";import"./jsx-runtime-u17CrQMm.js";class B extends w{}const I={tag:"main",tagHeader:"h1"};class H extends k{constructor(i,r,l,p=B){super(i,r,l,p)}}const g={...I},e=P({name:"D1Page",__name:"D1Page",props:b({label:{},labelId:{},description:{},descriptionId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},headline:{},tag:{},tagHeader:{}},g),setup(t,{expose:i,emit:r}){const l=r,p=t,u=m(()=>({main:{"d1-page":!0}})),h=m(()=>({})),d=new H("d1.page",p,{emits:l,classes:u,styles:h}),y=d.render();return i(d.expose()),(L,j)=>(v(),f(D(y)))}});e.__docgenInfo=Object.assign({displayName:e.name??e.__name},{name:"D1Page",exportName:"default",displayName:"D1Page",description:"",tags:{},sourceFiles:["/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Page/D1Page.vue"]});const C=[{name:"caption",type:"string | number"},{name:"captionDecorative",type:"boolean"},{name:"description",type:"string | number"},{name:"descriptionId",type:"string"},{name:"headline",type:"string"},{name:"icon",type:"IconValue<IconPropsBasic>"},{name:"iconAttrs",type:"ConstrBind<IconPropsBasic>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconPalette",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"selected",type:"boolean"},{name:"tag",type:"string"},{name:"tagHeader",type:"string"}],s={component:"Page",props:C,defaults:g,wikiDesign:T},c=new _(s.component,s.props,s.defaults,s.wikiDesign,x,S),O={title:"Ui/Page",component:e,parameters:{design:"d1",docs:{description:{component:c.getDescription()}}},argTypes:c.getWiki(),args:c.getValues()},n={render:t=>({components:{D1Page:e},setup:()=>({args:t}),template:`
      <D1Page v-bind="args">
        <p>
          The Page component is designed to wrap the unique content of a document.
          It defaults to using the <code>&lt;main&gt;</code> HTML tag, ensuring that the primary content is correctly identified by assistive technologies and search engines.
        </p>
        <p>
          It provides a comprehensive set of features for page-level content presentation, including headlines, labels, descriptions, and icons.
          The default tag for the headline is set to <code>&lt;h1&gt;</code>, establishing the top-level heading for the page.
        </p>
        <p>
          Use Page to encapsulate the core content of your view, separating it from repeated elements like navigation bars or footers.
        </p>
      </D1Page>
    `})},a={name:"Базовые",render:()=>({components:{D1Page:e},template:`
        <div class="wiki-storybook-flex-column">
          <D1Page>
            <p>Simple page content wrapper.</p>
          </D1Page>
          <D1Page label="Documentation" description="Learn how to use the library">
            <p>Welcome to the documentation page.</p>
          </D1Page>
          <D1Page headline="Dashboard Overview" label="Analytics">
            <div style="height: 100px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
              Chart Placeholder
            </div>
          </D1Page>
        </div>
    `})},o={name:"Использование слотов",render:()=>({components:{D1Page:e},template:`
        <D1Page>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Page>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Page
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Page v-bind="args">
        <p>
          The Page component is designed to wrap the unique content of a document.
          It defaults to using the <code>&lt;main&gt;</code> HTML tag, ensuring that the primary content is correctly identified by assistive technologies and search engines.
        </p>
        <p>
          It provides a comprehensive set of features for page-level content presentation, including headlines, labels, descriptions, and icons.
          The default tag for the headline is set to <code>&lt;h1&gt;</code>, establishing the top-level heading for the page.
        </p>
        <p>
          Use Page to encapsulate the core content of your view, separating it from repeated elements like navigation bars or footers.
        </p>
      </D1Page>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Page
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Page>
            <p>Simple page content wrapper.</p>
          </D1Page>
          <D1Page label="Documentation" description="Learn how to use the library">
            <p>Welcome to the documentation page.</p>
          </D1Page>
          <D1Page headline="Dashboard Overview" label="Analytics">
            <div style="height: 100px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
              Chart Placeholder
            </div>
          </D1Page>
        </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Page
    },
    template: \`
        <D1Page>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Page>
    \`
  })
}`,...o.parameters?.docs?.source}}};const W=["Page","PageBasic","PageSlots"],V=Object.freeze(Object.defineProperty({__proto__:null,Page:n,PageBasic:a,PageSlots:o,__namedExportsOrder:W,default:O},Symbol.toStringTag,{value:"Module"}));export{V as P,n as a,c as b,a as c,o as d};
