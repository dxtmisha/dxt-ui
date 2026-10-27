import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{$t as n,At as r,B as i,D as a,Dt as o,Et as s,Ft as ee,Ht as c,It as l,Jt as u,Pt as d,Rt as f,at as p,h as te,mn as m,un as h}from"./library-ByXZ2YPj.js";import{N as g,_,a as v,d as y,f as b,i as x,k as S,n as ne,p as re,s as ie,t as ae}from"./wiki-CfN0XtvQ.js";import{n as C,t as oe}from"./AriaStaticInclude-B7pfWpnd-ByY5HQzX.js";import{n as se,t as ce}from"./ProgressInclude-DN4otBM7-Be4emksf.js";import{n as le,t as ue}from"./EnabledInclude-B0gdl7cf-DiP9Ssl-.js";import{n as de,t as fe}from"./SkeletonInclude-CIeNLqUF-vgVNOtFs.js";import{n as pe,t as me}from"./LabelInclude-VdD0o-a0-CMD-JztE.js";import{n as he,t as ge}from"./IconInclude-CLaP7e7x-BNIBFBnt.js";import{n as _e,t as ve}from"./CaptionInclude-DgFjTQJd-CHX7vl7m.js";import{n as ye,t as be}from"./ImageInclude-CwOv50rs-CDvVPyXe.js";import{n as xe,t as Se}from"./Image-AOghbe00.js";import{n as Ce,t as we}from"./TextInclude-BD6x3h_g-C2E9k1CV.js";import{n as Te,t as Ee}from"./ButtonInclude-w4b-KCRc-B2pvHMy9.js";import{n as De,t as Oe}from"./Button-CA_Yf8gj.js";import{n as ke,t as Ae}from"./Icon-RGUycOTw.js";import{n as je,t as Me}from"./D1Skeleton-fWB3UQoT.js";import{n as Ne,t as Pe}from"./Progress-BhOF-vhr.js";import{n as Fe,t as Ie}from"./D1Dialog-Bm6mRsdq.js";import{i as Le,n as Re,r as ze,t as Be}from"./ImageCrop-DGE_1cm3.js";var w,Ve,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{oe(),Ce(),se(),ue(),be(),fe(),pe(),he(),Ee(),_e(),ze(),r(),S(),o(),w=class{props;constructor(e){this.props=e}get(){return this.props.appearance??`list`}is(e){return this.get()===e}isCircular(){return this.isCompact()||this.isTile()}isCompact(){return this.is(`compact`)}isList(){return this.is(`list`)}isTile(){return this.is(`tile`)}},Ve=class{props;event;text;constructor(e,t,n){this.props=e,this.event=t,this.text=n}get crop(){return this.getButton(this.text.crop,this.props.iconCrop)}get delete(){return this.getButton(this.text.delete,this.props.iconDelete,this.props.confirmDelete===!1?this.event.onDelete:void 0)}get retry(){return this.getButton(this.text.retry,this.props.iconRetry,this.event.onRetry)}getButton(e,t,n){let r={title:e,icon:t,disabled:this.props.disabled,readonly:this.props.readonly,...C.label(e),...C.disabled(!!this.props.disabled),...C.readonly(!!this.props.readonly)};return n&&(r.onClick=n),r}},T=class{props;text;current=h();value=h();constructor(e,t){this.props=e,this.text=t,n(()=>this.props.value?.crop,e=>this.updateCoordinator(e),{immediate:!0})}get coordinator(){return this.value.value??this.props.value?.crop}get dialog(){return{label:this.text.crop,closeButton:!0,clickOkAndClose:!0,beforeOpening:this.reset,onOk:this.onSave}}is(){return!!this.props.crop}onResize=e=>{this.current.value=e.coordinator};updateCoordinator(e=this.props.value?.crop){return this.value.value=e,this.current.value=e,this}reset=()=>(this.current.value=this.value.value,!0);onSave=()=>{this.value.value=this.current.value}},E=class{props;event;text;constructor(e,t,n){this.props=e,this.event=t,this.text=n}get dialog(){return{icon:this.props.iconWarning,description:this.text.deleteConfirm,clickOkAndClose:!0,onOk:this.event.onDelete}}is(){return this.props.confirmDelete!==!1}},D=class{props;file;emits;constructor(e,t,n){this.props=e,this.file=t,this.emits=n}onCrop=()=>{this.emits?.(`crop`,this.file.get())};onDelete=e=>{e?.stopPropagation(),this.emits?.(`delete`,this.file.get())};onRetry=e=>{e?.stopPropagation(),this.emits?.(`retry`,this.file.get())}},O=class{props;crop;mediaFile=d(()=>{let e=this.getSource();if(e)return new s(e)});constructor(e,t){this.props=e,this.crop=t}get image(){return this.imageOriginal??this.getIcon()}get imageOriginal(){if(this.props.image)return this.props.image;if(this.thumbnail)return this.thumbnail;if(this.isImage())return this.src??this.getFile()}get thumbnail(){return this.props.value?.thumbnail}get name(){return this.getFile()?.name||this.props.value?.name||``}get size(){return i(this.getFile()?.size??this.props.value?.size??0)}get sizeFormatted(){return new te().sizeFile(this.size)}get src(){return this.props.value?.value}isImage(){return!!(this.mediaFile.value?.isImage()||this.props.value?.type?.startsWith(`image/`)||this.getFile()?.type?.startsWith(`image/`))}get(){let e=this.getFile(),t=this.crop.coordinator;if(e)return{...this.props.value,file:e,crop:t,name:e.name||this.props.value?.name,size:e.size,type:e.type||this.props.value?.type||void 0,lastModified:e.lastModified||this.props.value?.lastModified};if(this.props.value)return{...this.props.value,crop:t}}getFile=()=>this.props.file??this.props.value?.file;getIcon=()=>this.mediaFile.value?.icon;getSource(){return this.thumbnail??this.getFile()??this.src??(this.name||void 0)}},k=class{props;file;appearance;status;constructor(e,t,n,r){this.props=e,this.file=t,this.appearance=n,this.status=r}get max(){return this.file.size}get progressProps(){let e={visible:this.status.isUploading()};return this.appearance.isTile()||(e.position=`static`),this.isDeterminate()&&(e.value=this.value,e.max=this.max),this.appearance.isCircular()?{...e,circular:!0}:{...e,linear:!0}}get value(){return p(this.props.loading)&&`value`in this.props.loading?i(this.props.loading.value??0):0}isDeterminate(){return p(this.props.loading)&&`value`in this.props.loading}},A=class{props;file;text;constructor(e,t,n){this.props=e,this.file=t,this.text=n}get message(){return this.isUploading()?this.text.loadingFile:this.isUploaded()?this.text.uploadSuccess:this.isError()?this.text.error:this.file.sizeFormatted}get status(){return this.props.loading?`uploading`:this.props.status??`idle`}is(e){return this.status===e}isError(){return this.is(`error`)}isIdle(){return this.is(`idle`)}isUploaded(){return this.is(`uploaded`)}isUploading(){return this.is(`uploading`)}},j=class{props;element;naming;components;slots;emits;appearance;button;buttonCrop;buttonDelete;buttonRetry;caption;crop;delete;enabled;event;file;iconStatus;image;imageCrop;label;progress;progressValue;skeleton;status;text;constructor(e,t,n,r,i,a,o={}){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a;let{ButtonIncludeConstructor:s=Te,CaptionIncludeConstructor:ee=ve,EnabledConstructor:c=le,IconIncludeConstructor:l=ge,ImageIncludeConstructor:u=ye,ImageCropIncludeConstructor:d=Le,InputFileItemAppearanceConstructor:f=w,InputFileItemButtonConstructor:p=Ve,InputFileItemCropConstructor:te=T,InputFileItemDeleteConstructor:m=E,InputFileItemEventConstructor:h=D,InputFileItemFileConstructor:g=O,InputFileItemProgressConstructor:_=k,InputFileItemStatusConstructor:v=A,LabelIncludeConstructor:y=me,ProgressIncludeConstructor:b=ce,SkeletonIncludeConstructor:x=de,TextIncludeConstructor:S=we}=o;this.appearance=new f(this.props),this.enabled=new c(this.props),this.text=new S(this.props),this.crop=new te(this.props,this.text),this.file=new g(this.props,this.crop),this.event=new h(this.props,this.file,this.emits),this.delete=new m(this.props,this.event,this.text),this.status=new v(this.props,this.file,this.text),this.progressValue=new _(this.props,this.file,this.appearance,this.status),this.button=new p(this.props,this.event,this.text),this.buttonCrop=new s(this.naming,this.props,this.components,()=>this.button.crop,`buttonCrop`),this.buttonDelete=new s(this.naming,this.props,this.components,()=>this.button.delete,`buttonDelete`),this.buttonRetry=new s(this.naming,this.props,this.components,()=>this.button.retry,`buttonRetry`),this.caption=new ee({},this.naming),this.iconStatus=new l(()=>({selected:this.status.isUploaded(),icon:{icon:this.props.iconError,iconActive:this.props.iconSuccess,success:this.status.isUploaded(),error:this.status.isError()}}),this.naming,this.components),this.image=new u(this.naming,()=>({...this.props,image:this.file.image,coordinator:this.crop.coordinator}),this.components,()=>({alt:this.file.name})),this.imageCrop=new d(this.naming,this.props,this.components,()=>({coordinator:this.crop.coordinator,image:this.file.imageOriginal,onResize:this.crop.onResize})),this.label=new y(()=>({label:this.file.name}),this.naming),this.progress=new b(this.naming,()=>({...this.props,loading:this.props.loading??this.status.isUploading()}),this.components,()=>this.progressProps),this.skeleton=new x(this.props,this.naming,[`classBackground`])}get aria(){return{...C.disabled(this.props.disabled),...C.busy(this.status.isUploading())}}get progressProps(){let e={visible:this.status.isUploading()};return this.appearance.isTile()||(e.position=`static`),this.progressValue.isDeterminate()&&(e.value=this.progressValue.value,e.max=this.progressValue.max),this.appearance.isCircular()?{...e,circular:!0}:{...e,linear:!0}}},M=class extends _{item;constructor(e,t,n,r=j){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{getFile:this.item.file.getFile,getStatus:()=>this.item.status.status,getCrop:()=>this.item.crop.coordinator,delete:()=>this.item.event.onDelete(),retry:()=>this.item.event.onRetry()}}initClasses(){return{main:{},thumbnail:this.naming.getSubClass(`thumbnail`),body:this.naming.getSubClass(`body`),label:this.naming.getSubClass(`label`),caption:this.naming.getSubClass(`caption`),progress:this.naming.getSubClass(`progress`),actions:this.naming.getSubClass(`actions`),buttonCrop:this.naming.getSubClass(`buttonCrop`),buttonDelete:this.naming.getSubClass(`buttonDelete`),buttonRetry:this.naming.getSubClass(`buttonRetry`)}}initStyles(){return{}}initRender(){return f(`div`,{...this.getAttrs(),...this.item.aria,class:this.classes?.value.main},this.renderChildren())}renderChildren=()=>this.item.appearance.isTile()?this.renderTile():this.item.appearance.isCompact()?this.renderCompact():this.renderList();renderTile=()=>[...this.renderThumbnail(),...this.renderProgress(),...this.renderActions()];renderCompact=()=>[...this.item.label.render(),...this.renderStatus(),...this.renderActions()];renderList=()=>[...this.renderThumbnail(),...this.renderBody(),...this.renderActions()];renderActions=()=>this.props.readonly?[]:[f(`div`,{class:this.classes?.value.actions},[...this.renderButtonRetry(),...this.renderDialogCrop(),...this.renderDialog()])];renderBody=()=>[f(`div`,{class:this.classes?.value.body},[...this.item.label.render(),...this.renderProgress(),...this.renderCaption()])];renderButtonCrop=e=>this.item.buttonCrop.render(void 0,g(e?.binds,{class:this.classes?.value.buttonCrop}));renderButtonDelete=e=>this.item.buttonDelete.render(void 0,g(e?.binds,{class:this.classes?.value.buttonDelete}));renderButtonRetry=()=>this.item.status.isError()?this.item.buttonRetry.render(void 0,{class:this.classes?.value.buttonRetry}):[];renderCaption=()=>this.item.caption.render([...this.renderStatus(),this.item.status.message]);renderCrop=()=>this.item.imageCrop.render();renderDialog=()=>this.item.delete.is()&&this.components?.is(`dialog`)?this.components.render(`dialog`,this.item.delete.dialog,{control:this.renderButtonDelete}):this.renderButtonDelete();renderDialogCrop=()=>this.item.crop.is()&&this.components?.is(`dialog`)?this.components.render(`dialog`,this.item.crop.dialog,{default:this.renderCrop,control:this.renderButtonCrop}):[];renderProgress=()=>this.item.status.isUploading()?this.item.progress.render(void 0,{class:this.classes?.value.progress}):[];renderStatus=()=>this.item.status.isUploaded()||this.item.status.isError()?this.item.iconStatus.renderIcon():[];renderThumbnail=()=>[f(`div`,{class:this.classes?.value.thumbnail},this.item.image.render())]},N={confirmDelete:!0,crop:!0,appearance:`list`,status:`idle`}})))()}var F;function I(){return(I=e((()=>{Fe(),F=Ie})))()}var L,R;function z(){return(z=e((()=>{P(),L={appearance:[`list`,`compact`,`tile`],status:[`uploading`,`uploaded`,`error`,`idle`],palette:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},R={...N,iconCrop:`crop`,iconDelete:`delete`,iconRetry:`refresh`,iconSuccess:`check_circle`,iconError:`cancel`,iconWarning:`error`,appearance:`list`,status:`idle`}})))()}var B;function V(){return(V=e((()=>{r(),S(),P(),De(),I(),ke(),xe(),Re(),Ne(),z(),B=l({name:`D1InputFileItem`,__name:`D1InputFileItem`,props:c({readonly:{type:Boolean},disabled:{type:Boolean},image:{},imageAttrs:{},imageCropAttrs:{},loading:{type:[Boolean,Object]},buttonAttrs:{},isSkeleton:{type:Boolean},textCrop:{type:[String,Function]},textDeleteConfirm:{type:[String,Function]},textDelete:{type:[String,Function]},textError:{type:[String,Function]},textLoadingFile:{type:[String,Function]},textRetry:{type:[String,Function]},textUploadSuccess:{type:[String,Function]},selected:{type:Boolean},value:{},file:{},crop:{type:Boolean},confirmDelete:{type:Boolean},iconCrop:{},iconDelete:{},iconRetry:{},iconSuccess:{},iconError:{},iconWarning:{},focus:{type:Boolean},appearance:{},status:{},palette:{}},R),emits:[`crop`,`delete`,`retry`],setup(e,{expose:t,emit:n}){let r=n,i=e,o=d(()=>({main:{"d1-inputFileItem":!0,"d1-inputFileItem--focus":i.focus,"d1-inputFileItem--selected":i.selected,"d1-inputFileItem--disabled":i.disabled,"d1-inputFileItem--readonly":i.readonly,[`d1-inputFileItem--appearance--${i.appearance}`]:a(L.appearance,i.appearance),[`d1-inputFileItem--status--${i.status}`]:a(L.status,i.status),[`d1-palette d1-palette--${i.palette}`]:a(L.palette,i.palette)}})),s=d(()=>({})),c=new M(`d1.inputFileItem`,i,{emits:r,classes:o,styles:s,components:{button:Oe,dialog:F,icon:Ae,image:Se,imageCrop:Be,progress:Pe},compMod:{buttonCrop:d(()=>({secondary:!0,roundedFull:!0,size:`xs`,palette:`neutral`,inverse:i.appearance===`tile`})),buttonDelete:d(()=>({secondary:!0,roundedFull:!0,size:`xs`,palette:`neutral`,inverse:i.appearance===`tile`})),buttonRetry:d(()=>({secondary:!0,roundedFull:!0,size:`xs`,palette:`neutral`,inverse:i.appearance===`tile`}))}}),l=c.render();return t(c.expose()),(e,t)=>(u(),ee(m(l)))}})})))()}var H;function U(){return(U=e((()=>{V(),H=B,B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{name:`D1InputFileItem`,exportName:`default`,displayName:`D1InputFileItem`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/InputFileItem/D1InputFileItem.vue`]})})))()}var W,G,K,q;function He(){return(He=e((()=>{ae(),z(),W=[{name:`appearance`,type:`string`,option:[`list`,`compact`,`tile`]},{name:`buttonAttrs`,type:`ConstrBind<ButtonProps>`},{name:`confirmDelete`,type:`boolean`},{name:`crop`,type:`boolean`},{name:`disabled`,type:`boolean`},{name:`file`,type:`File`},{name:`focus`,type:`boolean`},{name:`iconCrop`,type:`string`},{name:`iconDelete`,type:`string`},{name:`iconError`,type:`string`},{name:`iconRetry`,type:`string`},{name:`iconSuccess`,type:`string`},{name:`iconWarning`,type:`string`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`imageCropAttrs`,type:`ConstrBind<ImageCropProps>`},{name:`isSkeleton`,type:`boolean`},{name:`loading`,type:`boolean | ConstrBind<ProgressProps>`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`readonly`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`status`,type:`string`,option:[`uploading`,`uploaded`,`error`,`idle`]},{name:`textCrop`,type:`TextValue`},{name:`textDelete`,type:`TextValue`},{name:`textDeleteConfirm`,type:`TextValue`},{name:`textError`,type:`TextValue`},{name:`textLoadingFile`,type:`TextValue`},{name:`textRetry`,type:`TextValue`},{name:`textUploadSuccess`,type:`TextValue`},{name:`value`,type:`FieldFileValue`}],G=[{name:`actions`,description:`Actions slot / Слот действий`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot / Слот по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`thumbnail`,description:`Thumbnail slot / Слот миниатюры`,properties:[{name:`props`,type:`(any) | undefined`}]}],K=[{name:`crop`,description:`Crop event / Событие кадрирования`,properties:[{name:`file?`,type:`FieldFileValue | undefined`}]},{name:`delete`,description:`Delete event / Событие удаления`,properties:[{name:`file?`,type:`FieldFileValue | undefined`}]},{name:`retry`,description:`Retry event / Событие повтора`,properties:[{name:`file?`,type:`FieldFileValue | undefined`}]}],q={component:`InputFileItem`,props:W,slots:G,events:K,defaults:R,wikiDesign:ne}})))()}var J;function Y(){return(Y=e((()=>{b(),ie(),He(),J=new y(q.component,q.props,q.defaults,q.wikiDesign,v,re)})))()}var Ue=t({InputFileItem:()=>X,InputFileItemAppearance:()=>Z,InputFileItemSkeleton:()=>Q,__namedExportsOrder:()=>Ge,default:()=>We}),We,X,Z,Q,Ge;function $(){return($=e((()=>{U(),Y(),je(),ie(),We={title:`Ui/InputFileItem`,component:H,parameters:{design:`d1`,docs:{description:{component:J.getDescription()}}},argTypes:J.getWiki(),args:J.getValues()},X={},Z={name:`Режимы отображения и состояния`,render:()=>({components:{D1InputFileItem:H},setup(){return{image1:x}},template:`
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
                :loading="{ visible: true, value: 1400000 }"
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
            <div class="wiki-storybook-column">
              <D1InputFileItem
                appearance="compact"
                status="idle"
                :value="{ name: 'document.pdf', size: 1048576 }"
              />
              <D1InputFileItem
                appearance="compact"
                status="uploading"
                :loading="{ visible: true, value: 500000 }"
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
                :value="{ name: 'scenery.jpg', size: 4194304, thumbnail: 'https://picsum.photos/200/200?random=1' }"
              />
              <D1InputFileItem
                appearance="tile"
                status="uploading"
                :loading="{ visible: true, value: 1400000 }"
                :value="{ name: 'uploading.jpg', size: 2097152, thumbnail: 'https://picsum.photos/200/200?random=2' }"
              />
              <D1InputFileItem
                appearance="tile"
                status="uploaded"
                :value="{ name: 'photo.jpg', size: 3145728, thumbnail: 'https://picsum.photos/200/200?random=3' }"
              />
              <D1InputFileItem
                appearance="tile"
                status="error"
                :value="{ name: 'corrupted.jpg', size: 1048576, thumbnail: 'https://picsum.photos/200/200?random=4' }"
              />
              <D1InputFileItem
                appearance="tile"
                status="idle"
                :value="{ name: 'document.pdf', size: 1048576 }"
              />
              <D1InputFileItem
                appearance="tile"
                status="uploading"
                :loading="{ visible: true, value: 650000 }"
                :value="{ name: 'archive.zip', size: 2097152 }"
              />
              <D1InputFileItem
                appearance="tile"
                status="uploaded"
                :value="{ name: 'spreadsheet.xlsx', size: 524288 }"
              />
              <D1InputFileItem
                appearance="tile"
                status="error"
                :value="{ name: 'presentation.key', size: 8388608 }"
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
    `})},Q={name:`Скелетон`,render:()=>({components:{D1InputFileItem:H,D1Skeleton:Me},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1InputFileItem isSkeleton :value="{ name: 'loading-file.pdf', size: 1048576 }" />
          </div>
        </D1Skeleton>
    `})},Ge=[`InputFileItem`,`InputFileItemAppearance`,`InputFileItemSkeleton`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
                :loading="{ visible: true, value: 1400000 }"
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
            <div class="wiki-storybook-column">
              <D1InputFileItem
                appearance="compact"
                status="idle"
                :value="{ name: 'document.pdf', size: 1048576 }"
              />
              <D1InputFileItem
                appearance="compact"
                status="uploading"
                :loading="{ visible: true, value: 500000 }"
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
                :value="{ name: 'scenery.jpg', size: 4194304, thumbnail: 'https://picsum.photos/200/200?random=1' }"
              />
              <D1InputFileItem
                appearance="tile"
                status="uploading"
                :loading="{ visible: true, value: 1400000 }"
                :value="{ name: 'uploading.jpg', size: 2097152, thumbnail: 'https://picsum.photos/200/200?random=2' }"
              />
              <D1InputFileItem
                appearance="tile"
                status="uploaded"
                :value="{ name: 'photo.jpg', size: 3145728, thumbnail: 'https://picsum.photos/200/200?random=3' }"
              />
              <D1InputFileItem
                appearance="tile"
                status="error"
                :value="{ name: 'corrupted.jpg', size: 1048576, thumbnail: 'https://picsum.photos/200/200?random=4' }"
              />
              <D1InputFileItem
                appearance="tile"
                status="idle"
                :value="{ name: 'document.pdf', size: 1048576 }"
              />
              <D1InputFileItem
                appearance="tile"
                status="uploading"
                :loading="{ visible: true, value: 650000 }"
                :value="{ name: 'archive.zip', size: 2097152 }"
              />
              <D1InputFileItem
                appearance="tile"
                status="uploaded"
                :value="{ name: 'spreadsheet.xlsx', size: 524288 }"
              />
              <D1InputFileItem
                appearance="tile"
                status="error"
                :value="{ name: 'presentation.key', size: 8388608 }"
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
}`,...Q.parameters?.docs?.source}}}})))()}export{$ as a,Q as i,X as n,J as o,Z as r,Y as s,Ue as t};