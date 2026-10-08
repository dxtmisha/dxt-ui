import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Ct as n,Dt as r,Mt as i,Nt as a,Pt as o,Rt as s,Ut as c,in as l,jt as u,m as d,mt as f,nt as p,wt as ee,yt as m}from"./library-C6UyfMBX.js";import{D as h,a as g,d as _,f as v,g as y,i as b,n as x,s as S,t as te,u as ne}from"./wiki-Cqdd-d3l.js";import{n as C,t as re}from"./AriaStaticInclude-B7pfWpnd-C1oc8ai_.js";import{n as ie,t as ae}from"./ProgressInclude-BFX2T6cK-B93qH_QL.js";import{n as oe,t as se}from"./EnabledInclude-B0gdl7cf-Kmkn25j8.js";import{n as ce,t as le}from"./SkeletonInclude-DJOvNI6P-Cqd7JeSw.js";import{n as ue,t as de}from"./LabelInclude-CWEQPAb8-jdG3a9TG.js";import{n as fe,t as pe}from"./IconInclude-CHU-skng-EVxedsh_.js";import{n as me,t as he}from"./CaptionInclude-CscBZYvB-CVpPgIZ3.js";import{n as ge,t as _e}from"./ImageInclude-hU1Z946m-CdLR1X4P.js";import{n as ve,t as ye}from"./Image-J28XS_3L.js";import{n as be,t as xe}from"./TextInclude-Bh7pGgEs-C4LrRuLb.js";import{n as Se,t as Ce}from"./ButtonInclude-CEENExhj-CMmA-hWB.js";import{n as we,t as Te}from"./Button-Iibh6i9Z.js";import{n as Ee,t as De}from"./Icon-C_C3biyC.js";import{n as Oe,t as ke}from"./D1Skeleton-PNuSU8Wy.js";import{n as Ae,t as je}from"./Progress-tzqvN_sN.js";import{n as Me,t as Ne}from"./D1Dialog-DIF4RXVc.js";var w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{re(),be(),ie(),se(),_e(),le(),ue(),fe(),Ce(),me(),r(),h(),n(),w=class{props;constructor(e){this.props=e}get(){return this.props.appearance??`list`}is(e){return this.get()===e}isCircular(){return this.isCompact()||this.isTile()}isCompact(){return this.is(`compact`)}isList(){return this.is(`list`)}isTile(){return this.is(`tile`)}},T=class{props;file;emits;constructor(e,t,n){this.props=e,this.file=t,this.emits=n}onDelete=e=>{e?.stopPropagation(),this.emits?.(`delete`,this.file.get())};onRetry=e=>{e?.stopPropagation(),this.emits?.(`retry`,this.file.get())}},E=class{props;mediaFile=u(()=>{let e=this.getSource();if(e)return new ee(e)});constructor(e){this.props=e}get image(){return this.props.image?this.props.image:this.thumbnail?this.thumbnail:this.isImage()?this.src??this.getFile():this.getIcon()}get thumbnail(){return this.props.value?.thumbnail}get name(){return this.getFile()?.name||this.props.value?.name||``}get size(){return m(this.getFile()?.size??this.props.value?.size??0)}get sizeFormatted(){return new d().sizeFile(this.size)}get src(){return this.props.value?.value}isImage(){return!!this.mediaFile.value?.isImage()}get(){let e=this.getFile();if(e)return{...this.props.value,file:e,name:e.name||this.props.value?.name,size:e.size,type:e.type||this.props.value?.type||void 0,lastModified:e.lastModified||this.props.value?.lastModified};if(this.props.value)return{...this.props.value}}getFile=()=>this.props.file??this.props.value?.file;getIcon=()=>this.mediaFile.value?.icon;getSource(){return this.thumbnail??this.getFile()??this.src??(this.name||void 0)}},D=class{props;file;constructor(e,t){this.props=e,this.file=t}get max(){return this.file.size}get value(){return f(this.props.loading)&&`value`in this.props.loading?m(this.props.loading.value??0):0}isDeterminate(){return f(this.props.loading)&&`value`in this.props.loading}},O=class{props;file;text;constructor(e,t,n){this.props=e,this.file=t,this.text=n}get message(){return this.isUploading()?this.text.loadingFile:this.isUploaded()?this.text.uploadSuccess:this.isError()?this.text.error:this.file.sizeFormatted}get status(){return this.props.loading?`uploading`:this.props.status??`idle`}is(e){return this.status===e}isError(){return this.is(`error`)}isIdle(){return this.is(`idle`)}isUploaded(){return this.is(`uploaded`)}isUploading(){return this.is(`uploading`)}},k=class{props;refs;element;classDesign;className;components;slots;emits;appearance;buttonDelete;buttonRetry;caption;enabled;event;file;iconStatus;image;label;progress;progressValue;skeleton;status;text;constructor(e,t,n,r,i,a,o,s,c={}){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{ButtonIncludeConstructor:l=Se,CaptionIncludeConstructor:u=he,EnabledConstructor:d=oe,IconIncludeConstructor:f=pe,ImageIncludeConstructor:p=ge,InputFileItemAppearanceConstructor:ee=w,InputFileItemEventConstructor:m=T,InputFileItemFileConstructor:h=E,InputFileItemProgressConstructor:g=D,InputFileItemStatusConstructor:_=O,LabelIncludeConstructor:v=de,ProgressIncludeConstructor:y=ae,SkeletonIncludeConstructor:b=ce,TextIncludeConstructor:x=xe}=c;this.appearance=new ee(this.props),this.enabled=new d(this.props),this.file=new h(this.props),this.text=new x(this.props),this.event=new m(this.props,this.file,this.emits),this.progressValue=new g(this.props,this.file),this.status=new _(this.props,this.file,this.text),this.buttonDelete=new l(this.className,this.props,this.components,()=>this.getButtonDelete(),`buttonDelete`),this.buttonRetry=new l(this.className,this.props,this.components,()=>this.getButtonRetry(),`buttonRetry`),this.caption=new u({},this.className),this.iconStatus=new f(()=>({selected:this.status.isUploaded(),icon:{icon:this.props.iconError,iconActive:this.props.iconSuccess,success:this.status.isUploaded(),error:this.status.isError()}}),this.className,this.components),this.image=new p(this.className,()=>({...this.props,image:this.file.image}),this.components,()=>({alt:this.file.name})),this.label=new v(()=>({label:this.file.name}),this.className),this.progress=new y(this.className,this.props,this.components,()=>this.progressProps),this.skeleton=new b(this.props,this.classDesign,[`classBackground`])}get aria(){return{...C.disabled(this.props.disabled),...C.busy(this.status.isUploading())}}get dialog(){return{icon:this.props.iconWarning,description:this.text.deleteConfirm,clickOkAndClose:!0,onOk:this.event.onDelete}}get progressProps(){let e={position:`static`,visible:this.status.isUploading()};return this.progressValue.isDeterminate()&&(e.value=this.progressValue.value,e.max=this.progressValue.max),this.appearance.isCircular()?{...e,circular:!0}:{...e,linear:!0}}getButtonDelete(){if(!this.props.readonly)return{title:this.text.delete,icon:this.props.iconDelete,disabled:this.props.disabled,readonly:this.props.readonly,onClick:this.props.confirmDelete===!1?this.event.onDelete:void 0,...C.label(this.text.delete),...C.disabled(!!this.props.disabled),...C.readonly(!!this.props.readonly)}}getButtonRetry(){if(!this.props.readonly)return{title:this.text.retry,icon:this.props.iconRetry,disabled:this.props.disabled,readonly:this.props.readonly,onClick:this.event.onRetry,...C.label(this.text.retry),...C.disabled(!!this.props.disabled),...C.readonly(!!this.props.readonly)}}},A=class extends y{item;constructor(e,t,n,r=k){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{getFile:this.item.file.getFile,getStatus:()=>this.item.status.status,delete:()=>this.item.event.onDelete(),retry:()=>this.item.event.onRetry()}}initClasses(){return{main:{},thumbnail:this.getSubClass(`thumbnail`),thumbnailImage:this.getSubClass(`thumbnailImage`),body:this.getSubClass(`body`),label:this.getSubClass(`label`),caption:this.getSubClass(`caption`),progress:this.getSubClass(`progress`),actions:this.getSubClass(`actions`),buttonDelete:this.getSubClass(`buttonDelete`),buttonRetry:this.getSubClass(`buttonRetry`)}}initStyles(){return{}}initRender(){return o(`div`,{...this.getAttrs(),...this.item.aria,class:this.classes?.value.main},this.renderChildren())}renderChildren=()=>this.item.appearance.isTile()?this.renderTile():this.item.appearance.isCompact()?this.renderCompact():this.renderList();renderTile=()=>[...this.renderThumbnail(),...this.renderProgress(),...this.renderActions()];renderCompact=()=>[...this.item.label.render(),...this.renderStatus(),...this.renderActions()];renderList=()=>[...this.renderThumbnail(),...this.renderBody(),...this.renderActions()];renderActions=()=>this.props.readonly?[]:[o(`div`,{class:this.classes?.value.actions},[...this.renderButtonRetry(),...this.renderDialog()])];renderBody=()=>[o(`div`,{class:this.classes?.value.body},[...this.item.label.render(),...this.renderProgress(),...this.renderCaption()])];renderButtonDelete=e=>this.item.buttonDelete.render(void 0,{...e?.binds,class:this.classes?.value.buttonDelete});renderButtonRetry=()=>this.item.status.isError()?this.item.buttonRetry.render(void 0,{class:this.classes?.value.buttonRetry}):[];renderCaption=()=>this.item.caption.render([...this.renderStatus(),this.item.status.message]);renderDialog=()=>this.props.confirmDelete!==!1&&this.components.is(`dialog`)?this.components.render(`dialog`,this.item.dialog,{control:this.renderButtonDelete}):this.renderButtonDelete();renderProgress=()=>this.item.status.isUploading()?this.item.progress.render(void 0,{class:this.classes?.value.progress}):[];renderStatus=()=>this.item.status.isUploaded()||this.item.status.isError()?this.item.iconStatus.renderIcon():[];renderThumbnail=()=>[o(`div`,{class:this.classes?.value.thumbnail},this.item.image.render(void 0,{class:this.classes?.value.thumbnailImage}))]},j={confirmDelete:!0,appearance:`list`,status:`idle`}})))()}var N;function P(){return(P=e((()=>{Me(),N=Ne})))()}var F,I;function L(){return(L=e((()=>{M(),F={appearance:[`list`,`compact`,`tile`],status:[`uploading`,`uploaded`,`error`,`idle`],palette:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},I={...j,iconDelete:`delete`,iconRetry:`refresh`,iconSuccess:`check_circle`,iconError:`cancel`,iconWarning:`error`,appearance:`list`,status:`idle`}})))()}var R;function z(){return(z=e((()=>{r(),h(),M(),we(),P(),Ee(),ve(),Ae(),L(),R=a({name:`D1InputFileItem`,__name:`D1InputFileItem`,props:s({readonly:{type:Boolean},disabled:{type:Boolean},image:{},imageAttrs:{},loading:{type:[Boolean,Object]},buttonAttrs:{},isSkeleton:{type:Boolean},textDeleteConfirm:{type:[String,Function]},textDelete:{type:[String,Function]},textError:{type:[String,Function]},textLoadingFile:{type:[String,Function]},textRetry:{type:[String,Function]},textUploadSuccess:{type:[String,Function]},selected:{type:Boolean},value:{},file:{},confirmDelete:{type:Boolean},iconDelete:{},iconRetry:{},iconSuccess:{},iconError:{},iconWarning:{},focus:{type:Boolean},appearance:{},status:{},palette:{}},I),emits:[`delete`,`retry`],setup(e,{expose:t,emit:n}){let r=n,a=e,o=u(()=>({main:{"d1-inputFileItem":!0,"d1-inputFileItem--focus":a.focus,"d1-inputFileItem--selected":a.selected,"d1-inputFileItem--disabled":a.disabled,"d1-inputFileItem--readonly":a.readonly,[`d1-inputFileItem--appearance--${a.appearance}`]:p(F.appearance,a.appearance),[`d1-inputFileItem--status--${a.status}`]:p(F.status,a.status),[`d1-palette d1-palette--${a.palette}`]:p(F.palette,a.palette)}})),s=u(()=>({})),d=new A(`d1.inputFileItem`,a,{emits:r,classes:o,styles:s,components:{button:Te,dialog:N,icon:De,image:ye,progress:je},compMod:{buttonDelete:{secondary:!0,roundedFull:!0,size:`xs`,palette:`neutral`},buttonRetry:{secondary:!0,roundedFull:!0,size:`xs`,palette:`neutral`}}}),f=d.render();return t(d.expose()),(e,t)=>(c(),i(l(f)))}})})))()}var B;function V(){return(V=e((()=>{z(),B=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{name:`D1InputFileItem`,exportName:`default`,displayName:`D1InputFileItem`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/InputFileItem/D1InputFileItem.vue`]})})))()}var H,U,W,G;function K(){return(K=e((()=>{te(),L(),H=[{name:`appearance`,type:`string`,option:[`list`,`compact`,`tile`]},{name:`buttonAttrs`,type:`ConstrBind<ButtonProps>`},{name:`confirmDelete`,type:`boolean`},{name:`disabled`,type:`boolean`},{name:`file`,type:`File`},{name:`focus`,type:`boolean`},{name:`iconDelete`,type:`string`},{name:`iconError`,type:`string`},{name:`iconRetry`,type:`string`},{name:`iconSuccess`,type:`string`},{name:`iconWarning`,type:`string`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`isSkeleton`,type:`boolean`},{name:`loading`,type:`boolean | ConstrBind<ProgressProps>`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`readonly`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`status`,type:`string`,option:[`uploading`,`uploaded`,`error`,`idle`]},{name:`textDelete`,type:`TextValue`},{name:`textDeleteConfirm`,type:`TextValue`},{name:`textError`,type:`TextValue`},{name:`textLoadingFile`,type:`TextValue`},{name:`textRetry`,type:`TextValue`},{name:`textUploadSuccess`,type:`TextValue`},{name:`value`,type:`FieldFileValue`}],U=[{name:`actions`,description:`Actions slot / Слот действий`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot / Слот по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`thumbnail`,description:`Thumbnail slot / Слот миниатюры`,properties:[{name:`props`,type:`(any) | undefined`}]}],W=[{name:`delete`,description:`Delete event / Событие удаления`,properties:[{name:`file?`,type:`FieldFileValue | undefined`}]},{name:`retry`,description:`Retry event / Событие повтора`,properties:[{name:`file?`,type:`FieldFileValue | undefined`}]}],G={component:`InputFileItem`,props:H,slots:U,events:W,defaults:I,wikiDesign:x}})))()}var q;function J(){return(J=e((()=>{_(),S(),K(),q=new ne(G.component,G.props,G.defaults,G.wikiDesign,b,v)})))()}var Pe=t({InputFileItem:()=>X,InputFileItemAppearance:()=>Z,InputFileItemSkeleton:()=>Q,__namedExportsOrder:()=>Fe,default:()=>Y}),Y,X,Z,Q,Fe;function $(){return($=e((()=>{V(),J(),Oe(),S(),Y={title:`Ui/InputFileItem`,component:B,parameters:{design:`d1`,docs:{description:{component:q.getDescription()}}},argTypes:q.getWiki(),args:q.getValues()},X={},Z={name:`Режимы отображения и состояния`,render:()=>({components:{D1InputFileItem:B},setup(){return{image1:g}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">List appearance:</span>
            <div class="wiki-storybook-flex-column">
              <D1InputFileItem
                appearance="list"
                status="idle"
                :value="{ name: 'document-contract.pdf', size: 1048576 }"
              />
              <D1InputFileItem
                appearance="list"
                status="uploading"
                :loading="{ value: 1400000 }"
                :value="{ name: 'image.jpg', size: 2097152, thumbnail: image1 }"
              />
              <D1InputFileItem
                appearance="list"
                status="uploaded"
                :value="{ name: 'photo.jpg', size: 3145728, thumbnail: 'https://picsum.photos/200/200?random=1' }"
              />
              <D1InputFileItem
                appearance="list"
                status="error"
                :value="{ name: 'archive-backup.zip', size: 5242880 }"
              />
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">Compact appearance:</span>
            <div class="wiki-storybook-flex">
              <D1InputFileItem
                appearance="compact"
                status="idle"
                :value="{ name: 'document.pdf', size: 1048576 }"
              />
              <D1InputFileItem
                appearance="compact"
                status="uploading"
                :loading="{ value: 500000 }"
                :value="{ name: 'archive.zip', size: 1048576 }"
              />
              <D1InputFileItem
                appearance="compact"
                status="uploaded"
                :value="{ name: 'avatar.png', size: 512000 }"
              />
              <D1InputFileItem
                appearance="compact"
                status="error"
                :value="{ name: 'invoice.pdf', size: 120000 }"
              />
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">Tile appearance:</span>
            <div class="wiki-storybook-flex">
              <D1InputFileItem
                appearance="tile"
                status="idle"
                :value="{ name: 'scenery.jpg', size: 4194304, thumbnail: image1 }"
              />
              <D1InputFileItem
                appearance="tile"
                status="uploading"
                :loading="{ value: 1400000 }"
                :value="{ name: 'uploading.jpg', size: 2097152, thumbnail: image1 }"
              />
              <D1InputFileItem
                appearance="tile"
                status="uploaded"
                :value="{ name: 'photo.jpg', size: 3145728, thumbnail: 'https://picsum.photos/200/200?random=1' }"
              />
              <D1InputFileItem
                appearance="tile"
                status="error"
                :value="{ name: 'corrupted.jpg', size: 1048576, thumbnail: image1 }"
              />
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">States:</span>
            <div class="wiki-storybook-flex-column">
              <D1InputFileItem
                selected
                :value="{ name: 'selected-item.pdf', size: 854000 }"
              />
              <D1InputFileItem
                disabled
                :value="{ name: 'disabled-file.docx', size: 420000 }"
              />
              <D1InputFileItem
                readonly
                :value="{ name: 'readonly-record.pdf', size: 1250000 }"
              />
            </div>
          </div>
        </div>
    `})},Q={name:`Скелетон`,render:()=>({components:{D1InputFileItem:B,D1Skeleton:ke},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1InputFileItem isSkeleton :value="{ name: 'loading-file.pdf', size: 1048576 }" />
          </div>
        </D1Skeleton>
    `})},Fe=[`InputFileItem`,`InputFileItemAppearance`,`InputFileItemSkeleton`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Режимы отображения и состояния',
  render: () => ({
    components: {
      D1InputFileItem
    },
    setup() {
      return {
        image1
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">List appearance:</span>
            <div class="wiki-storybook-flex-column">
              <D1InputFileItem
                appearance="list"
                status="idle"
                :value="{ name: 'document-contract.pdf', size: 1048576 }"
              />
              <D1InputFileItem
                appearance="list"
                status="uploading"
                :loading="{ value: 1400000 }"
                :value="{ name: 'image.jpg', size: 2097152, thumbnail: image1 }"
              />
              <D1InputFileItem
                appearance="list"
                status="uploaded"
                :value="{ name: 'photo.jpg', size: 3145728, thumbnail: 'https://picsum.photos/200/200?random=1' }"
              />
              <D1InputFileItem
                appearance="list"
                status="error"
                :value="{ name: 'archive-backup.zip', size: 5242880 }"
              />
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">Compact appearance:</span>
            <div class="wiki-storybook-flex">
              <D1InputFileItem
                appearance="compact"
                status="idle"
                :value="{ name: 'document.pdf', size: 1048576 }"
              />
              <D1InputFileItem
                appearance="compact"
                status="uploading"
                :loading="{ value: 500000 }"
                :value="{ name: 'archive.zip', size: 1048576 }"
              />
              <D1InputFileItem
                appearance="compact"
                status="uploaded"
                :value="{ name: 'avatar.png', size: 512000 }"
              />
              <D1InputFileItem
                appearance="compact"
                status="error"
                :value="{ name: 'invoice.pdf', size: 120000 }"
              />
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">Tile appearance:</span>
            <div class="wiki-storybook-flex">
              <D1InputFileItem
                appearance="tile"
                status="idle"
                :value="{ name: 'scenery.jpg', size: 4194304, thumbnail: image1 }"
              />
              <D1InputFileItem
                appearance="tile"
                status="uploading"
                :loading="{ value: 1400000 }"
                :value="{ name: 'uploading.jpg', size: 2097152, thumbnail: image1 }"
              />
              <D1InputFileItem
                appearance="tile"
                status="uploaded"
                :value="{ name: 'photo.jpg', size: 3145728, thumbnail: 'https://picsum.photos/200/200?random=1' }"
              />
              <D1InputFileItem
                appearance="tile"
                status="error"
                :value="{ name: 'corrupted.jpg', size: 1048576, thumbnail: image1 }"
              />
            </div>
          </div>

          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">States:</span>
            <div class="wiki-storybook-flex-column">
              <D1InputFileItem
                selected
                :value="{ name: 'selected-item.pdf', size: 854000 }"
              />
              <D1InputFileItem
                disabled
                :value="{ name: 'disabled-file.docx', size: 420000 }"
              />
              <D1InputFileItem
                readonly
                :value="{ name: 'readonly-record.pdf', size: 1250000 }"
              />
            </div>
          </div>
        </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1InputFileItem,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1InputFileItem isSkeleton :value="{ name: 'loading-file.pdf', size: 1048576 }" />
          </div>
        </D1Skeleton>
    \`
  })
}`,...Q.parameters?.docs?.source}}}})))()}export{$ as a,Q as i,X as n,q as o,Z as r,J as s,Pe as t};