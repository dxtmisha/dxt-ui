import{n as e,r as t}from"./chunk-BneVvdWh.js";import{It as n,gt as r}from"./iframe-InwAcaLb.js";import{a as i,d as a,l as o,m as s,n as c,t as l,u}from"./wiki-DiKtF90Q.js";import{i as d,n as f,r as p,t as m}from"./D1MotionAxis-7OQGXFRT.js";var h,g,_=e((()=>{u(),l(),d(),h=[{name:`animationHeight`,type:`boolean`},{name:`axis`,type:`string`,option:[`x`,`y`,`z`]},{name:`direction`,type:`string`,option:[`next`,`back`,`auto`]},{name:`inDom`,type:`boolean`},{name:`inDomSlide`,type:`string[]`},{name:`modelSelected`,type:`string`},{name:`onUpdate:modelSelected`,type:`(value: string) => void`},{name:`onUpdate:selected`,type:`(value: string) => void`},{name:`selected`,type:`string`}],g={component:`MotionAxis`,props:h,defaults:p,wikiDesign:c}})),v,y=e((()=>{u(),i(),_(),v=new a(g.component,g.props,g.defaults,g.wikiDesign,o,s)})),b=t({MotionAxis:()=>S,MotionAxisBasic:()=>C,MotionAxisScroll:()=>w,MotionAxisVModel:()=>T,__namedExportsOrder:()=>E,default:()=>x}),x,S,C,w,T,E,D=e((()=>{f(),y(),r(),x={title:`Ui/MotionAxis`,component:m,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1MotionAxis:m},setup:()=>({args:e}),template:`
      <D1MotionAxis v-bind="args">
      <template #slide1>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</p>
        </div>
      </template>
      <template #slide2>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum.</p>
        </div>
      </template>
      <template #slide3>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.</p>
          <p>Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        </div>
      </template>
    </D1MotionAxis>
    `})},C={name:`Базовое использование`,render:()=>({components:{D1MotionAxis:m},setup(){return{selected:n(`slide1`)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'slide1'">1</button>
            <button class="wiki-storybook-button" @click="selected = 'slide2'">2</button>
            <button class="wiki-storybook-button" @click="selected = 'slide3'">3</button>
          </div>

          <D1MotionAxis :selected="selected">
            <template #slide1>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Short content.</p>
              </div>
            </template>
            <template #slide2>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Medium length content. This slide has a bit more text to demonstrate the transition.</p>
              </div>
            </template>
            <template #slide3>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Long content. This slide contains significantly more text to demonstrate the smooth height animation capabilities of the MotionAxis component. It should expand the container height when active.</p>
                <p>Additional paragraph for extra height.</p>
              </div>
            </template>
          </D1MotionAxis>
        </div>
    `})},w={name:`Управление скроллом`,render:()=>({components:{D1MotionAxis:m},setup(){return{selected:n(`short`)}},template:`
        <div class="wiki-storybook-flex-column d1-motionAxis__scroll">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'short'">short</button>
            <button class="wiki-storybook-button" @click="selected = 'long'">long</button>
          </div>

          <D1MotionAxis :selected="selected">
            <template #short>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Short content
              </div>
            </template>
            <template #long>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Long content that causes scrolling.<br>
                Scroll down to see more.<br>
                ...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>
                End of content.
              </div>
            </template>
          </D1MotionAxis>
        </div>
    `})},T={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1MotionAxis:m},setup(){return{selected:n(`slide1`)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'slide1'">Select Slide 1</button>
            <button class="wiki-storybook-button" @click="selected = 'slide2'">Select Slide 2</button>
            <button class="wiki-storybook-button" @click="selected = 'slide3'">Select Slide 3</button>
          </div>
          <div class="wiki-storybook-item--padding">
            Current value: {{ selected }}
          </div>

          <D1MotionAxis v-model:selected="selected">
            <template #slide1>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 1
              </div>
            </template>
            <template #slide2>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 2
              </div>
            </template>
            <template #slide3>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 3
              </div>
            </template>
          </D1MotionAxis>
        </div>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1MotionAxis
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1MotionAxis v-bind="args">
      <template #slide1>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</p>
        </div>
      </template>
      <template #slide2>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum.</p>
        </div>
      </template>
      <template #slide3>
        <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.</p>
          <p>Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        </div>
      </template>
    </D1MotionAxis>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Базовое использование',
  render: () => ({
    components: {
      D1MotionAxis
    },
    setup() {
      const selected = ref('slide1');
      return {
        selected
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'slide1'">1</button>
            <button class="wiki-storybook-button" @click="selected = 'slide2'">2</button>
            <button class="wiki-storybook-button" @click="selected = 'slide3'">3</button>
          </div>

          <D1MotionAxis :selected="selected">
            <template #slide1>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Short content.</p>
              </div>
            </template>
            <template #slide2>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Medium length content. This slide has a bit more text to demonstrate the transition.</p>
              </div>
            </template>
            <template #slide3>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                <p>Long content. This slide contains significantly more text to demonstrate the smooth height animation capabilities of the MotionAxis component. It should expand the container height when active.</p>
                <p>Additional paragraph for extra height.</p>
              </div>
            </template>
          </D1MotionAxis>
        </div>
    \`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Управление скроллом',
  render: () => ({
    components: {
      D1MotionAxis
    },
    setup() {
      const selected = ref('short');
      return {
        selected
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column d1-motionAxis__scroll">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'short'">short</button>
            <button class="wiki-storybook-button" @click="selected = 'long'">long</button>
          </div>

          <D1MotionAxis :selected="selected">
            <template #short>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Short content
              </div>
            </template>
            <template #long>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Long content that causes scrolling.<br>
                Scroll down to see more.<br>
                ...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>...<br>
                End of content.
              </div>
            </template>
          </D1MotionAxis>
        </div>
    \`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1MotionAxis
    },
    setup() {
      const selected = ref('slide1');
      return {
        selected
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = 'slide1'">Select Slide 1</button>
            <button class="wiki-storybook-button" @click="selected = 'slide2'">Select Slide 2</button>
            <button class="wiki-storybook-button" @click="selected = 'slide3'">Select Slide 3</button>
          </div>
          <div class="wiki-storybook-item--padding">
            Current value: {{ selected }}
          </div>

          <D1MotionAxis v-model:selected="selected">
            <template #slide1>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 1
              </div>
            </template>
            <template #slide2>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 2
              </div>
            </template>
            <template #slide3>
              <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
                Slide 3
              </div>
            </template>
          </D1MotionAxis>
        </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E=[`MotionAxis`,`MotionAxisBasic`,`MotionAxisScroll`,`MotionAxisVModel`]}));D();export{S as MotionAxis,C as MotionAxisBasic,w as MotionAxisScroll,T as MotionAxisVModel,E as __namedExportsOrder,x as default,y as i,D as n,v as r,b as t};