import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,tn as r}from"./library-C6UyfMBX.js";import{a as i,d as a,f as o,i as s,n as c,s as l,t as u,u as d}from"./wiki-Cqdd-d3l.js";import{i as f,n as p,r as m,t as h}from"./D1Skeleton-PNuSU8Wy.js";var g,_,v,y;function b(){return(b=e((()=>{u(),f(),g=[{name:`active`,type:`boolean`},{name:`delay`,type:`string | number`},{name:`delayHide`,type:`string | number`},{name:`invisible`,type:`boolean`}],_=[{name:`default`,description:`Slot for default skeleton content / Слот для основного содержимого скелета`,properties:[{name:`props`,type:`(SkeletonClassesList) | undefined`}]}],v=[],y={component:`Skeleton`,props:g,slots:_,events:v,defaults:m,wikiDesign:c}})))()}var x;function S(){return(S=e((()=>{a(),l(),b(),x=new d(y.component,y.props,y.defaults,y.wikiDesign,s,o)})))()}var C=t({Skeleton:()=>T,SkeletonBasic:()=>E,SkeletonDelays:()=>D,__namedExportsOrder:()=>O,default:()=>w}),w,T,E,D,O;function k(){return(k=e((()=>{p(),S(),n(),l(),w={title:`Ui/Skeleton`,component:h,parameters:{design:`d1`,docs:{description:{component:x.getDescription()}}},argTypes:x.getWiki(),args:x.getValues()},T={render:e=>({components:{D1Skeleton:h},setup:()=>({args:e}),template:`
      <D1Skeleton v-bind="args">
      <div class="wiki-storybook-card d1-skeleton__background">
        <div class="wiki-storybook-card__image d1-skeleton__background" style="background-image: url('${i}')"/>
        <div class="wiki-storybook-card__content">
          <div>
            <div class="wiki-storybook-card__label d1-skeleton__text">Product Name</div>
            <div class="wiki-storybook-card__information d1-skeleton__textVariant">Short description</div>
          </div>
          <div class="wiki-storybook-card__description d1-skeleton__text">
            Detailed product description that tells about its main features and advantages.
          </div>
          <div class="wiki-storybook-card__actions">
            <button class="wiki-storybook-button d1-skeleton__background">Buy Now</button>
          </div>
        </div>
      </div>
    </D1Skeleton>
    `})},E={name:`Базовое использование`,render:()=>({components:{D1Skeleton:h},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">text</div>
            <D1Skeleton :active="true">
              <div class="d1-skeleton__text">Text placeholder</div>
              <div class="d1-skeleton__text">Text placeholder</div>
              <div class="d1-skeleton__text">Text placeholder</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">textVariant</div>
            <D1Skeleton :active="true">
              <div class="d1-skeleton__textVariant">Text placeholder</div>
              <div class="d1-skeleton__textVariant">Text placeholder</div>
              <div class="d1-skeleton__textVariant">Text placeholder</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">background</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__background"
                style="width: 128px; height: 128px;"
              >
                Text placeholder
              </div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">backgroundVariant</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__backgroundVariant"
                style="width: 128px; height: 128px;"
              >
                Background Variant
              </div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">border</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__border"
                style="width: 128px; height: 128px; border: 2px solid #ccc;"
              >
                Border placeholder
              </div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">borderVariant</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__borderVariant"
                style="width: 128px; height: 128px; border: 2px solid #ccc;"
              >
                Border Variant
              </div>
            </D1Skeleton>
          </div>
        </div>
    `})},D={name:`Задержки`,render:()=>({components:{D1Skeleton:h},setup(){let e=r(!1);return{active:e,onClick:()=>{e.value=!e.value}}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="onClick">Active: {{ active }}</button>
          </div>

          <div>
            <div class="wiki-storybook-group">
              <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">Standard delay (360/0)</div>
                <D1Skeleton :active="active" delay="360" delayHide="0">
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                </D1Skeleton>
              </div>

              <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">Slow appearance (1000/0)</div>
                <D1Skeleton :active="active" delay="1000" delayHide="0">
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                </D1Skeleton>
              </div>

              <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">Delay before hiding (0/1000)</div>
                <D1Skeleton :active="active" delay="0" delayHide="1000">
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                </D1Skeleton>
              </div>

              <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">No delays (0/0)</div>
                <D1Skeleton :active="active" delay="0" delayHide="0">
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                </D1Skeleton>
              </div>
            </div>
          </div>
        </div>
    `})},O=[`Skeleton`,`SkeletonBasic`,`SkeletonDelays`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Skeleton
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Skeleton v-bind="args">
      <div class="wiki-storybook-card d1-skeleton__background">
        <div class="wiki-storybook-card__image d1-skeleton__background" style="background-image: url('\${image1}')"/>
        <div class="wiki-storybook-card__content">
          <div>
            <div class="wiki-storybook-card__label d1-skeleton__text">Product Name</div>
            <div class="wiki-storybook-card__information d1-skeleton__textVariant">Short description</div>
          </div>
          <div class="wiki-storybook-card__description d1-skeleton__text">
            Detailed product description that tells about its main features and advantages.
          </div>
          <div class="wiki-storybook-card__actions">
            <button class="wiki-storybook-button d1-skeleton__background">Buy Now</button>
          </div>
        </div>
      </div>
    </D1Skeleton>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Базовое использование',
  render: () => ({
    components: {
      D1Skeleton
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">text</div>
            <D1Skeleton :active="true">
              <div class="d1-skeleton__text">Text placeholder</div>
              <div class="d1-skeleton__text">Text placeholder</div>
              <div class="d1-skeleton__text">Text placeholder</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">textVariant</div>
            <D1Skeleton :active="true">
              <div class="d1-skeleton__textVariant">Text placeholder</div>
              <div class="d1-skeleton__textVariant">Text placeholder</div>
              <div class="d1-skeleton__textVariant">Text placeholder</div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">background</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__background"
                style="width: 128px; height: 128px;"
              >
                Text placeholder
              </div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">backgroundVariant</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__backgroundVariant"
                style="width: 128px; height: 128px;"
              >
                Background Variant
              </div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">border</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__border"
                style="width: 128px; height: 128px; border: 2px solid #ccc;"
              >
                Border placeholder
              </div>
            </D1Skeleton>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">borderVariant</div>
            <D1Skeleton :active="true">
              <div
                class="d1-skeleton__borderVariant"
                style="width: 128px; height: 128px; border: 2px solid #ccc;"
              >
                Border Variant
              </div>
            </D1Skeleton>
          </div>
        </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Задержки',
  render: () => ({
    components: {
      D1Skeleton
    },
    setup() {
      const active = ref(false);
      return {
        active,
        onClick: () => {
          active.value = !active.value;
        }
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="onClick">Active: {{ active }}</button>
          </div>

          <div>
            <div class="wiki-storybook-group">
              <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">Standard delay (360/0)</div>
                <D1Skeleton :active="active" delay="360" delayHide="0">
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                </D1Skeleton>
              </div>

              <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">Slow appearance (1000/0)</div>
                <D1Skeleton :active="active" delay="1000" delayHide="0">
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                </D1Skeleton>
              </div>

              <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">Delay before hiding (0/1000)</div>
                <D1Skeleton :active="active" delay="0" delayHide="1000">
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                </D1Skeleton>
              </div>

              <div class="wiki-storybook-item wiki-storybook-item--squared--md wiki-storybook-item--center">
                <div class="wiki-storybook-item__label">No delays (0/0)</div>
                <D1Skeleton :active="active" delay="0" delayHide="0">
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                  <div class="d1-skeleton__text">Text placeholder</div>
                </D1Skeleton>
              </div>
            </div>
          </div>
        </div>
    \`
  })
}`,...D.parameters?.docs?.source}}}})))()}export{k as a,D as i,T as n,x as o,E as r,S as s,C as t};