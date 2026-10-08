import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,in as c,jt as l,tn as u}from"./library-C6UyfMBX.js";import{D as d,d as f,f as p,g as m,i as h,n as ee,s as te,t as ne,u as re}from"./wiki-Cqdd-d3l.js";import{n as g,t as ie}from"./AriaStaticInclude-B7pfWpnd-C1oc8ai_.js";import{n as ae,t as oe}from"./EnabledInclude-B0gdl7cf-Kmkn25j8.js";import{n as se,t as _}from"./TextInclude-Bh7pGgEs-C4LrRuLb.js";import{n as ce,t as le}from"./D1Skeleton-PNuSU8Wy.js";import{i as ue,n as de,r as fe,t as v}from"./FieldMessage-Cmq6mEex.js";import{i as y,n as b,r as x,t as S}from"./Dropzone-KFFqF1nW.js";import{i as C,n as w,r as T,t as E}from"./FieldLabel-BpKj1W0p.js";var D,O,k,A,j;function M(){return(M=e((()=>{ie(),se(),oe(),ue(),x(),C(),n(),d(),D=class{files;dropzone;constructor(e,t){this.files=e,this.dropzone=t}open=()=>{this.dropzone.expose.open?.()};onDropzoneInput=(e,t)=>{this.files.setFiles(t.value)}},O=class{props;emits;constructor(e,t){this.props=e,this.emits=t}setFiles(e){if(!e||e.length===0)return[];let t=Array.from(e);return this.props.maxFileSize&&(t=t.filter(e=>e.size<=this.props.maxFileSize)),t.length>0&&this.emits?.(`add`,t),t}},k=class{props;refs;element;classDesign;className;components;slots;emits;dropzone;enabled;files;eventItem;label;message;text;constructor(e,t,n,r,i,a,o,s,c={}){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{DropzoneIncludeConstructor:l=y,EnabledConstructor:u=ae,FieldLabelConstructor:d=T,FieldMessageConstructor:f=fe,InputFileDropzoneEventConstructor:p=D,InputFileDropzoneFilesConstructor:m=O,TextIncludeConstructor:h=_}=c;this.files=new m(this.props,this.emits),this.enabled=new u(this.props),this.text=new h(this.props),this.dropzone=new l(this.className,this.props,this.components,()=>({accept:this.props.accept,multiple:this.props.multiple,disabled:this.props.disabled,readonly:this.props.readonly,isSkeleton:this.props.isSkeleton,textDropzone:this.text.dropzone,onInput:this.eventItem.onDropzoneInput})),this.eventItem=new p(this.files,this.dropzone),this.label=new d(this.className,this.props,this.components,()=>({isSkeleton:this.props.isSkeleton})),this.message=new f(this.className,this.props,this.components)}},A=class extends m{item;constructor(e,t,n,r=k){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{open:this.item.eventItem.open}}initClasses(){return{main:{},body:this.getSubClass(`body`),dropzone:this.getSubClass(`dropzone`)}}initStyles(){return{}}initRender(){return a(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...g.labelledby(this.item.label.id),...g.describedby(this.item.message.id)},[...this.item.label.render(this.slots),...this.renderBody(),...this.item.message.render()])}renderBody=()=>[a(`div`,this.getKeyClass(`body`),this.renderDropzone())];renderDropzone=()=>this.item.dropzone.render(void 0,{class:this.classes?.value.dropzone})},j={}})))()}var N;function P(){return(P=e((()=>{M(),N={...j}})))()}var F;function I(){return(I=e((()=>{n(),M(),b(),w(),de(),P(),F=i({name:`D1InputFileDropzone`,__name:`D1InputFileDropzone`,props:o({dropzoneLabel:{},dropzoneDescription:{},dropzoneIcon:{},dropzoneAttrs:{},readonly:{type:Boolean},disabled:{type:Boolean},label:{},labelId:{},counter:{},counterShow:{type:Boolean},counterTemplate:{},counterId:{},maxlength:{},fieldCounterAttrs:{},required:{type:Boolean},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},hasHtmlCode:{type:Boolean},helperMessage:{},validationMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},isSkeleton:{type:Boolean},textDropzone:{type:[String,Function]},accept:{},multiple:{type:Boolean},maxFileSize:{}},N),emits:[`add`],setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-inputFileDropzone":!0,"d1-inputFileDropzone--disabled":a.disabled,"d1-inputFileDropzone--readonly":a.readonly}})),u=l(()=>({})),d=new A(`d1.inputFileDropzone`,a,{emits:i,classes:o,styles:u,components:{dropzone:S,fieldLabel:E,fieldMessage:v}}),f=d.render();return t(d.expose()),(e,t)=>(s(),r(c(f)))}})})))()}var L;function R(){return(R=e((()=>{I(),L=F,F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{name:`D1InputFileDropzone`,exportName:`default`,displayName:`D1InputFileDropzone`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/InputFileDropzone/D1InputFileDropzone.vue`]})})))()}var z,B,V,H;function U(){return(U=e((()=>{ne(),P(),z=[{name:`accept`,type:`string`},{name:`counter`,type:`string | number`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`counterTemplate`,type:`string`},{name:`disabled`,type:`boolean`},{name:`dropzoneAttrs`,type:`ConstrBind<DropzoneProps>`},{name:`dropzoneDescription`,type:`string | number`},{name:`dropzoneIcon`,type:`IconValue<IconProps>`},{name:`dropzoneLabel`,type:`NumberOrString`},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounterProps>`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabelProps>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessageProps>`},{name:`forceShowMessage`,type:`boolean`},{name:`hasHtmlCode`,type:`boolean`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`maxFileSize`,type:`number`},{name:`maxlength`,type:`string | number`},{name:`multiple`,type:`boolean`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`textDropzone`,type:`TextValue`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`}],B=[{name:`default`,description:`Default slot / Слот по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]}],V=[{name:`add`,description:`Event triggered when files are added / Событие при добавлении файлов`,properties:[{name:`files`,type:`File[]`}]}],H={component:`InputFileDropzone`,props:z,slots:B,events:V,defaults:N,wikiDesign:ee}})))()}var W;function G(){return(G=e((()=>{f(),te(),U(),W=new re(H.component,H.props,H.defaults,H.wikiDesign,h,p)})))()}var K=t({InputFileDropzone:()=>J,InputFileDropzoneBasic:()=>Y,InputFileDropzoneSkeleton:()=>X,InputFileDropzoneSlots:()=>Z,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q;function $(){return($=e((()=>{R(),G(),ce(),n(),q={title:`Ui/InputFileDropzone`,component:L,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},J={},Y={name:`Базовое использование и событие Add`,render:()=>({components:{D1InputFileDropzone:L},setup(){let e=u([]);return{files:e,onAdd:t=>{e.value=[...e.value,...t]}}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">Files added: {{ files.length }}</span>
          </div>
          <D1InputFileDropzone
            label="Drop files here or click to upload"
            helperMessage="Supports PNG, JPG, PDF up to 5MB"
            accept="image/*,.pdf"
            :maxFileSize="5242880"
            @add="onAdd"
          />
        </div>
    `})},X={name:`Скелетон`,render:()=>({components:{D1InputFileDropzone:L,D1Skeleton:le},template:`
        <D1Skeleton :active="true">
          <D1InputFileDropzone isSkeleton label="Drop files here" />
        </D1Skeleton>
    `})},Z={name:`Использование слотов`,render:()=>({components:{D1InputFileDropzone:L},template:`
        <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
          <D1InputFileDropzone>
            <template #label>
              <strong>Custom Document Label</strong>
            </template>
            <template #default>
              <em>Custom dropzone content slot</em>
            </template>
          </D1InputFileDropzone>
        </div>
    `})},Q=[`InputFileDropzone`,`InputFileDropzoneBasic`,`InputFileDropzoneSkeleton`,`InputFileDropzoneSlots`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Базовое использование и событие Add',
  render: () => ({
    components: {
      D1InputFileDropzone
    },
    setup() {
      const files = ref<File[]>([]);
      const onAdd = (newFiles: File[]) => {
        files.value = [...files.value, ...newFiles];
      };
      return {
        files,
        onAdd
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">Files added: {{ files.length }}</span>
          </div>
          <D1InputFileDropzone
            label="Drop files here or click to upload"
            helperMessage="Supports PNG, JPG, PDF up to 5MB"
            accept="image/*,.pdf"
            :maxFileSize="5242880"
            @add="onAdd"
          />
        </div>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1InputFileDropzone,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <D1InputFileDropzone isSkeleton label="Drop files here" />
        </D1Skeleton>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1InputFileDropzone
    },
    template: \`
        <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
          <D1InputFileDropzone>
            <template #label>
              <strong>Custom Document Label</strong>
            </template>
            <template #default>
              <em>Custom dropzone content slot</em>
            </template>
          </D1InputFileDropzone>
        </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}}})))()}export{Z as a,G as c,X as i,J as n,$ as o,Y as r,W as s,K as t};