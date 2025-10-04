import{c as o,r as x,T as V,F as K,a8 as T,a9 as O,aa as H,a2 as D,$ as U,ab as C,U as B,z as G,ac as F,E as L,ad as q,L as z,ae as W,af as Z,ag as Q,w as S,ah as J,ai as tt,aj as et,x as it,ak as st,d as at,h as k,k as rt,m as ot,s as E,l as nt,n as lt,u as ht,o as ut}from"./iframe-BGVIV1-M.js";import{W as ct,w as mt,a as pt,b as kt}from"./wiki-BNdC282o.js";import"./jsx-runtime-D_zvdyIk.js";class dt{constructor(t){this.props=t}item=o(()=>this.props.type??"text");isNumber(){return this.item.value==="number"}isNumberFormat(){return this.item.value==="number-format"}isCurrency(){return this.item.value==="currency"}isCurrencyOrNumber(){return this.isNumber()||this.isNumberFormat()||this.isCurrency()}isTime(){return["full","datetime","time","hour-minute","hour","minute","second"].indexOf(this.item.value)!==-1}isDate(){return this.isTime()||["date","year","year-month","month","day","day-month"].indexOf(this.item.value)!==-1}getByDate(){return this.isDate()?this.item.value:"date"}}class bt{chars=[];start=!1;is(){return this.chars.length>0}get(){return this.chars}add(t){return this.chars.push(t),this}go(t){return this.start?(this.add(t),!1):(this.goStart(),!0)}goStart(){return this.start=!0,this}reset(){return this.resetChars(),this.start=!1,this}resetChars(){return this.chars=[],this}}class gt{constructor(t){this.buffer=t}value=!1;is(){return this.value}in(){this.value=!0,this.buffer.reset()}out(){this.value=!1,this.buffer.reset()}}class vt{length=x(0);is(){return this.length.value>0}get(){return this.length.value}set(t){return this.length.value=t,this}}class yt{item=x({});is(t){return Number(this.item.value?.[t])>0}getByIndex(t){return this.item.value?.[t]??0}add(t){return this.item.value={...this.item.value,[t]:this.getByIndex(t)+1},this}pop(t){return this.is(t)?(this.item.value={...this.item.value,[t]:this.getByIndex(t)-1},!0):!1}reset(){return this.item.value={},this}expandMask(t){let e=t;return V(this.item.value,(i,s)=>{e=e.replace(K(s,"g","([:value]+)"),a=>`${a}${T(s,i)}`)}),e}}class ft{item=x("");is(){return this.item.value!==""}isChar(t){return this.item.value===t}set(t){return this.item.value=t,this}reset(){return this.set("")}}const wt={Y:"[0-9]{4}",M:{type:"number",min:"1",max:"12"},D:r=>({type:"number",min:"1",max:new O(`${r?.Y?.value??"2000"}-${r?.M?.value??"01"}-01`).getMaxDay().toString()}),h:{type:"number",min:"0",max:"23"},m:{type:"number",min:"0",max:"59"},s:{type:"number",min:"0",max:"59"}},_t={Y:"y",M:"m",D:"d",h:"h",m:"m",s:"s"};class Mt{constructor(t,e){this.props=t,this.type=e}mask=o(()=>this.getDatetime().setHour24(!0).locale(void 0,"2-digit").replace("1987","YYYY").replace("12","MM").replace("18","DD").replace("10","hh").replace("20","mm").replace("30","ss").split(""));getDatetime(t){return new O(t??"1987-12-18T10:20:30",this.type.getByDate(),this.props.language)}getValue(t){return this.getDatetime(t).locale(void 0,"2-digit")}getValueStandard(t){const e=this.getValueStandardFull(t);return e===""?"":this.getDatetime(e).standard(!1)}getValueStandardFull(t){const e=`${t?.Y?.value||"2000"}-${t?.M?.value||"01"}-${t?.D?.value||"01"}T${t?.h?.value||"00"}:${t?.m?.value||"00"}:${t?.s?.value||"00"}`;return isNaN(Date.parse(e))?"":e}getPattern(){return wt}getSpecialDate(){return["Y","M","D"]}getSpecialFull(){return[...this.getSpecialDate(),"h","m","s"]}getView(t){return _t?.[t]}}class St{constructor(t,e,i){this.props=t,this.type=e,this.rubberItem=i}special={n:{},f:{defaultValue:"0"}};rubber=o(()=>({n:{rubber:!0,transitionChar:this.getDecimal(),maxLength:10},f:{rubber:this.isFractionRubber(),maxLength:4}}));view=o(()=>this.type.isNumber()?"⁠":"0");fraction=o(()=>{if(this.type.isCurrency())return 2;const t=this.props.fraction;return typeof t=="number"?t:typeof t=="string"&&t.match(/[0-9]+/)?Number(t):this.rubberItem.is("f")?this.rubberItem.getByIndex("f")+1:t===!0?1:0});mask=o(()=>this.type.isCurrency()?this.toSpecial(this.getCurrency()):this.type.isNumberFormat()?this.toSpecial(this.getNumberFormat()):this.toSpecial(this.getNumber()));isFractionRubber(){return this.props.fraction===!0}getValueStandard(t){if(this.type.isNumber())return t?.n?.value||"";const e=`${t?.n?.value||"0"}.${t?.f?.value||"0"}`;return e==="0.0"?"0":e}getNumber(){return this.getNumberForString()}getNumberFormat(){return this.getIntl().number(this.getNumberForString(),{maximumFractionDigits:9})}getCurrency(){return this.getIntl().currency(this.getNumberForString(),void 0,this.props.currencyHide)}getDecimal(){return[this.getIntl().decimal(),"."]}getSpecial(){return Object.keys(this.special)}getIntl(){return new H(this.props.language)}getNumberForString(){const t=this.fraction.value,e=T("9",this.rubberItem.getByIndex("n")+1),i=t?`.${T("3",t)}`:"",s=this.type.isCurrency()&&this.props.currency?` ${this.props.currency}`:"";return`${e}${i}${s}`}toSpecial(t){return t.replace(/9/ig,"n").replace(/3/ig,"f").split("")}}let Dt=class{constructor(t,e,i,s){this.props=t,this.type=e,this.date=i,this.format=s}item=o(()=>{if(this.type.isCurrencyOrNumber())return this.format.getSpecial();if(this.type.isTime())return this.date.getSpecialFull();if(this.type.isDate())return this.date.getSpecialDate();const t=this.special.value;return D(t)?t:U(t)?Object.keys(t):[t]});rubberList=o(()=>{const t={};return C(this.special.value)&&V(this.special.value,(e,i)=>{e?.rubber&&(t[i]=e)}),t});isSpecial(t){return this.item.value.indexOf(t)!==-1}isDefault(t){return!!this.getDefault(t)}getDefault(t){return this.getSpecialItem(t)?.defaultValue}getMatch(t){return this.getSpecialItem(t)?.match}getPattern(t){return this.getSpecialItem(t)?.pattern}getView(t){return this.getSpecialItem(t)?.view}special=o(()=>this.type.isCurrencyOrNumber()?this.format.special:this.props.special??"*");getSpecialItem(t){const e=this.special.value;if(C(e)&&t in e)return e[t]}};const N=/[0-9]/;let Ct=class{constructor(t,e){this.props=t,this.special=e}is(t,e){const i=this.get(e);return i instanceof RegExp?!!t.match(i):B(i)?!!t.match(new RegExp(i)):!!t.match(N)}get(t){return(t&&this.special.getMatch(t))??this.props.match??N}filter(t){const e=this.special.item.value;return t.split("").filter(i=>e.find(s=>this.is(i,s)))}};class p{constructor(t,e=p.getGroupDefault(),i){this.pattern=t,this.group=e,this.code=i,this.input=G(void 0,"input",this.getAttributes())}input;check(t){const e=this.input;return e?(e.type==="checkbox"||e.type==="radio"?e.checked=!!t:e.value=F(t),this.checkByInput(e)):{group:this.group,status:!0,value:t}}checkByInput(t){return{group:this.group,input:t,status:t.checkValidity(),validationMessage:t.validationMessage,validity:t.validity,validityMessage:this.code?.get(t.validity),required:t.required,pattern:this.pattern,value:t.value}}getAttributes(){const t=this.pattern;if(L(t)){const e=q(t);if(L(e))return B(e)?{pattern:e}:e}return{}}static getGroupDefault(){return"check"}}class xt{constructor(t,e,i,s){this.props=t,this.type=e,this.date=i,this.special=s}item=o(()=>{const t={};return V(this.list.value,(e,i)=>{t[i]=new p(e,i)}),this.props.check&&(t.check=new p(this.props.check)),t});list=o(()=>{const t=this.getByType();for(const e in t){const i=this.getPattern(e);t[e]&&(B(i)?Object.assign(t[e],{pattern:i}):C(i)&&C(t[e])&&Object.assign(t[e],i))}return t});isCheck(){return!!this.props.check}getInput(t=p.getGroupDefault()){return this.item.value?.[t]}getByType(){if(this.type.isDate())return this.date.getPattern();const t={};return this.special.item.value.forEach(e=>{t[e]={}}),t}getPattern(t){return(t&&this.special.getPattern(t))??this.props.pattern}}const Bt={special:"*",match:/[0-9]/,type:"text",groupSave:!0,view:"_",visible:!0};class It{constructor(t,e){this.props=t,this.type=e}isEnd(){return this.props.align!=="left"&&(this.props.dir==="rtl"||this.type.isCurrency()&&!this.props.currencyHide||this.type.isNumberFormat())}isRight(){return this.props.align==="right"||this.isEnd()}}class Tt{constructor(t,e,i,s,a,n,l){this.props=t,this.type=e,this.rubberItem=i,this.rubberTransition=s,this.special=a,this.match=n,this.format=l}isTransition(t){return this.transition.value.indexOf(t)>=0}get(t){return this.list.value?.[t]}update(t,e,i){const s=this.get(e),a=t?.[e];return s&&a?z(i,s?.transitionChar)||s?.maxLength&&s?.maxLength<=a?.chars.length?(this.rubberTransition.set(e),!1):(a.end&&this.match.is(i,e)&&!this.rubberTransition.isChar(e)&&(this.rubberItem.add(e),this.rubberTransition.reset()),!0):!1}pop(t){return this.rubberItem.pop(t)}reset(){return this.rubberItem.reset(),this.rubberTransition.reset(),this}list=o(()=>{const t=this.special.rubberList.value;return this.type.isCurrencyOrNumber()?W(this.format.rubber.value,t):t});transition=o(()=>Z(Object.values(this.list.value).filter(t=>"transitionChar"in t&&(B(t.transitionChar)||D(t.transitionChar))),"transitionChar").flat())}class Ft{constructor(t,e,i,s,a,n,l){this.props=t,this.type=e,this.rubberItem=i,this.characterLength=s,this.date=a,this.format=n,this.special=l}item=o(()=>this.type.isCurrencyOrNumber()?this.format.mask.value:this.type.isDate()?this.date.mask.value:this.basic.value);info=o(()=>{const t=[];let e=0;return this.item.value.forEach((i,s)=>{this.special.isSpecial(i)&&(t.push({index:e,key:s,char:i}),e++)}),t});maxLength=o(()=>{const t=this.getMask();return D(t)?Q(t):this.item.value.length});get(t){return this.item.value?.[t]??""}getByChar(t,e=-1){let i=e;return this.item.value.forEach((s,a)=>{s===t&&a>=e&&(i=a)}),i}getLength(){return this.item.value.length}getLengthBySpecial(){return this.info.value.length}getQuantity(t,e){if(t===e)return 1;let i=0;for(let s=t;s<e;s++)this.special.isSpecial(this.get(s))&&i++;return i}maskActive=o(()=>{const t=this.getMask();return D(t)?t.find(e=>this.getSpecialLength(e)>=this.characterLength.get())||t?.[t.length-1]||"":t});basic=o(()=>this.rubberItem.expandMask(this.maskActive.value).split(""));getMask(){return this.props.mask??""}getSpecialLength(t){return t.split("").filter(e=>this.special.isSpecial(e)).length}}class Lt{constructor(t,e){this.special=t,this.mask=e}value=0;immediate=0;shift=!1;get(){return this.value}getFirst(){return this.mask.info.value?.[0]?.key??0}getFocus(){return this.getCharacter(this.value)}getNext(){return this.getCharacter(this.value+1)}getPrevious(){return this.getCharacter(this.value-1)}getImmediate(){return this.getCharacter(this.immediate)}getShift(){return this.shift?this.value>0?this.getCharacter(this.value-1)+1:0:this.getFocus()}set(t){return this.value=t,this}setByMask(t,e=!0){if(e){let i,s;this.mask.info.value.forEach(a=>{i===void 0&&a.key>=t&&(i=a.index),a.key<=t&&(s=a.index)}),this.set(i!==void 0?i:this.mask.getLengthBySpecial()),this.setImmediate(s!==void 0?s:this.mask.getLengthBySpecial())}return this}setImmediate(t){return this.immediate=t,this}setShift(t){return this.shift=t,this}resetImmediate(){return this.immediate=this.value<=0?0:this.value-1,this}goBack(){return this.value>0&&this.value--,this}goNext(){return this.value<=this.mask.getLength()&&this.value++,this}getCharacter(t){for(const e of this.mask.info.value)if(e.index>=t)return e.key;return this.mask.getLength()}}const M="~",Vt="_";class Et{constructor(t,e,i,s,a,n){this.props=t,this.rubberItem=e,this.characterLength=i,this.special=s,this.mask=a,this.selection=n}item=x([]);is(){return this.item.value.length>0}isCharDelete(){const t=this.selection.get();return t in this.item.value&&this.item.value[t]===M}getFocus(){return this.mask.get(this.selection.getFocus())}getImmediate(){return this.mask.get(this.selection.getImmediate())}getNext(){return this.mask.get(this.selection.getNext())}add(t){return this.item.value.splice(this.selection.get(),this.isCharDelete()?1:0,t),this.selection.goNext().resetImmediate(),this.updateLength(),this}pop(){const t=this.selection.get()-1;return this.isSpecialNextAnother()?this.item.value[t]=M:(this.item.value.splice(t,1),this.updateLength()),this.selection.goBack().resetImmediate(),this}reset(){return this.item.value=[],this.selection.set(0).resetImmediate(),this.updateLength(),this}shift(t=1){return this.characterLength.set(this.item.value.length+t),this}isSpecialNextAnother(){const t=this.selection.get()-1,e=this.item.value.length;if(this.props.groupSave&&t>=0&&t<=e){const i=this.mask.info.value,s=i?.[t]?.char;if(s&&!this.rubberItem.is(s)){for(let a=t;a<e;a++)if(i?.[a]){const n=i[a]?.char;if(n&&this.special.isSpecial(n)&&s!==n)return!0}}}return!1}updateLength(){return this.characterLength.set(this.item.value.length),this}}class Nt{constructor(t,e,i,s){this.rubberTransition=t,this.mask=e,this.special=i,this.character=s}item=o(()=>{const t=this.character.item.value,e=[];let i=0;for(const s of this.mask.item.value)if(!this.special.isSpecial(s))e.push(s);else if(i in t){if(e.push(String(t[i++])),i>t.length&&this.rubberTransition.is()&&!this.rubberTransition.isChar(s))break}else break;return e.join("")});is(){return this.getLength()>0}getChar(t){return this.item.value?.[t]}getLength(){return this.item.value.length}}class At{constructor(t,e,i,s,a,n,l){this.props=t,this.type=e,this.date=i,this.format=s,this.mask=a,this.special=n,this.valueBasic=l,S(this.info,(h,u)=>{this.type.isDate()&&(this.infoCache=u)})}infoCache;info=o(()=>{const t=this.valueBasic.item.value,e={};return this.mask.item.value.forEach((i,s)=>{if(this.special.isSpecial(i)){const a=this.add(e,i);this.isStandard(s)&&t[s]!==M&&a.chars.push(String(t[s])),a.maxLength++,a.end=a.maxLength===a.chars.length,a.full=this.special.isDefault(i)||a.end,a.value=a.full?a.chars.join(""):""}}),e});item=o(()=>this.getValue(this.info.value));isFull=o(()=>{for(const t of Object.values(this.info.value))if(!t.full)return!1;return!0});isEnd=o(()=>{for(const t of Object.values(this.info.value))if(!t.end)return!1;return!0});getValueCache(){return this.infoCache?this.getValue(this.infoCache):this.item.value}getForCheck(){const t=this.item.value;return{group:p.getGroupDefault(),value:t,maxLength:t.length,full:this.isFull.value,end:this.isEnd.value,chars:t.split("")}}getInfoItem(t){return this.info.value?.[t]}valueFinal=o(()=>{const t=this.valueBasic.item.value.split(""),e=this.mask.item.value;let i="";for(const s in e)if(s in t)i+=t[s];else if(e[s]){const a=this.special.getDefault(e[s]);a&&(i+=a)}return i});isStandard(t){return!!this.valueBasic.getChar(t)}getValue(t){return this.type.isCurrencyOrNumber()?this.format.getValueStandard(t):this.type.isDate()?this.isFull.value?this.date.getValueStandard(t):"":this.props.fullOnly&&!this.isFull.value?"":this.valueFinal.value}add(t,e){return e in t||(t[e]={group:e,value:"",maxLength:0,full:!1,end:!1,chars:[]}),t[e]}}let Ot=class{constructor(t,e){this.pattern=t,this.value=e}item=o(()=>{for(const t of Object.values(this.pattern.item.value)){const e=this.value.getInfoItem(t.group);if(e&&e.full){const i=t.check(e.value);if(i&&!i.status)return{...i,value:this.value.item.value}}}return this.getValidationCheck()});isError(t){const e=this.item.value?.group;return!!(e&&(e===t||e===p.getGroupDefault()))}checkValidity(){return this.item.value===void 0}getValidationCheck(){if(this.value.isFull.value){const t=this.value.getForCheck();if(this.pattern.isCheck()){const e=this.pattern.getInput(t.group)?.check(t.value);if(e&&!e.status)return e}return{status:!0,value:t.value,isFull:!0}}return{status:!0,value:this.value.item.value,isFull:!1}}};class Xt{constructor(t,e,i,s,a,n,l,h,u,m){this.props=t,this.type=e,this.date=i,this.format=s,this.special=a,this.rubber=n,this.mask=l,this.valueBasic=h,this.validation=u,this.classNameItem=`${m}__character__item`}classNameItem;item=o(()=>{const t=[],e=this.valueBasic.item.value;return this.mask.item.value.forEach((i,s)=>{const a=e?.[s];t.push({className:`${this.classNameItem} ${this.classNameItem}--${this.getStatus(i,a)}`,value:this.getValue(i,a)})}),t});input=o(()=>{const t=[],e=this.mask.item.value;return this.valueBasic.item.value.split("").forEach((i,s)=>{i===M?t.push(this.getSpecialToView(e?.[s]??"")??i):t.push(i)}),t.join("")});isValue(t){return!!(t&&t!==M)}getStatus(t,e){return this.isValue(e)?this.special.isSpecial(t)?this.validation.isError(t)?"error":"special":"standard":this.rubber.isTransition(t)?"transition":"placeholder"}getValue(t,e){return this.isValue(e)?e:this.getSpecialToView(t)}getSpecialToView(t){return this.special.isSpecial(t)?this.getViewChar(t)??this.special.getView(t)??this.props.view??Vt:t}getViewChar(t){if(this.type.isDate())return this.date.getView(t);if(this.type.isCurrencyOrNumber())return this.format.view.value}}class $t{constructor(t,e){this.validation=t,this.emits=e}type;event;isValue(){return!!(this.type&&["input","change"].indexOf(this.type)>=0)}go(){if(this.type&&this.event){const t=this.isValue()?this.validation.item.value:void 0;this.emits?.(this.type,this.event,t),(this.type==="inputLite"||this.type==="changeLite")&&this.emits?.(this.type,t)}return this}set(t,e){return this.setType(t),this.setEvent(e),this}setType(t){return this.type=t,this}setEvent(t){return this.event=t,this}reset(){return this.resetType(),this.resetEvent(),this}resetType(){return this.type=void 0,this}resetEvent(){return this.event=void 0,this}}class Pt{constructor(t,e,i,s,a,n,l,h,u,m,$,P,R,Y,j){this.type=t,this.buffer=e,this.focus=i,this.rubberTransition=s,this.date=a,this.special=n,this.match=l,this.rubber=h,this.mask=u,this.selection=m,this.character=$,this.valueBasic=P,this.value=R,this.emit=Y,this.element=j}add(t,e,i=!0){let s=!1;return this.selection.setByMask(t,i),this.rubberTransition.reset(),J(e).forEach(a=>{const n=this.character.getFocus(),l=this.character.getImmediate();this.selection.setShift(this.rubber.update(this.value.info.value,l,a)),this.rubberTransition.is()&&this.selection.setByMask(this.mask.getByChar(this.rubberTransition.item.value,this.selection.getImmediate())+1,i),this.match.is(a,n)&&(this.character.shift(),this.character.getFocus()&&(this.mask.maxLength.value>this.valueBasic.getLength()||this.character.isCharDelete())&&(this.character.add(a),s=!0))}),this.goSelection(),s}pop(t,e=t,i=!0){if(t>=0&&e<=this.mask.maxLength.value){let s=this.mask.getQuantity(t,e);for(i&&this.selection.setByMask(e);s--;)this.rubberTransition.reset(),this.character.pop(),this.character.shift(0),this.selection.setShift(this.rubber.pop(this.character.getFocus()));this.goSelection()}return this}reset(t=""){if(this.character.reset(),this.rubber.reset(),L(t)){const e=this.type.isDate()?this.date.getValue(t):t;this.add(0,this.extra(e.split("")))}return this}extra(t){if(this.character.is())return t;const e=this.mask.item.value,i=[...t];let s=this.match.get(this.mask.info.value?.[0]?.char),a=0;if(s)for(const n in e){const l=e[n];if(l){if(this.special.isSpecial(l)){for(let h=a;h<i.length&&(a++,!i?.[h]?.match(s));h++);s=this.match.get(l)}else if(l.match(s)){let h=!1;for(let u=a;u<i.length;u++){const m=i[u];if(a++,m?.match(s)){l===m?(i.splice(u,1),a--):h=!0;break}}if(h)break}}}return i}goSelection(t=!0){return this.focus.is()&&requestAnimationFrame(()=>{if(this.element.value&&(!t||!this.goBuffer())){const e=this.valueBasic.getLength(),i=this.selection.getShift(),s=e<i?e:i;this.element.value.selectionEnd=s,this.element.value.selectionStart=s}}),this}goBuffer(){return this.buffer.is()?(this.add(this.selection.getShift(),this.buffer.get()),this.buffer.resetChars(),!0):(this.buffer.reset(),this.emit.go(),!1)}}class Rt{constructor(t,e,i,s,a,n,l,h){this.buffer=t,this.focus=e,this.characterLength=i,this.right=s,this.selection=a,this.valueBasic=n,this.emit=l,this.data=h}change=!1;unidentified;onFocus=t=>{this.change=!1,this.focus.in(),this.emit.set("focus",t).go()};onBlur=t=>{this.change&&this.emit.setType("change").go(),this.focus.out(),this.emit.set("blur",t).go()};onKeydown=t=>{const e=this.getSelectionInfo(t),{start:i,end:s}=e;this.emit.set("keydown",t).go(),!this.isMetaKey(t)&&(this.isKey(t)?t.key==="Backspace"?(i>0||i!==s)&&this.data.pop(i,s):t.key.length<=1&&(i===s?this.buffer.go(t.key)&&this.data.add(i,t.key):(this.buffer.goStart(),this.data.pop(i,s).add(this.selection.getShift(),t.key))):this.unidentified=e)};onKeyup=t=>{this.emit.set("keyup",t).go(),!this.isMetaKey(t)&&this.isKey(t)&&["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].indexOf(t.key)>=0&&(this.makeToEnd(t),this.makeToStart(t))};onBeforeinput=t=>{this.emit.set("beforeinput",t).go(),this.unidentified||(this.makeChange(t),tt(t))};onInput=t=>{if(this.unidentified){const e=t.target;(this.unidentified.length>e.value.length||this.unidentified.start!==this.unidentified.end)&&this.data.pop(this.unidentified.start,this.unidentified.end),"data"in t?t.data&&this.buffer.go(t.data)&&this.data.add(this.unidentified.start,t.data):this.data.reset(e.value),this.makeChange(t),this.unidentified=void 0}};onPaste=t=>{const{start:e,end:i}=this.getSelectionInfo(t);et(t).then(s=>{const a=s.split("");e===i?this.data.add(e,this.data.extra(a)):this.data.pop(e,i).add(this.selection.getShift(),this.data.extra(a)),this.change=!0,this.emit.set("paste",t).go()}).catch(s=>console.error("getClipboardData",s))};onChange=t=>{const e=t.target;this.data.reset(e.value),this.emit.set("change",t).go()};onClick=t=>{this.makeToEnd(t),this.makeToStart(t)};isMetaKey(t){return t.metaKey||t.altKey||t.ctrlKey}isKey(t){return"key"in t&&t.key!=="Unidentified"}getSelectionInfo(t){const e=t.target;return{target:e,start:e.selectionStart??0,end:e.selectionEnd??0,length:e.value.length}}makeChange(t){this.change=!0,this.emit.set("input",t),!this.buffer.is()&&(this.emit.go(),this.emit.resetType())}makeToEnd(t){if(this.right.isRight()){const e=this.valueBasic.getLength(),{target:i,start:s,end:a}=this.getSelectionInfo(t);s>e&&(i.selectionStart=e),a>e&&(i.selectionEnd=e)}}makeToStart(t){const e=this.selection.getFirst(),{target:i,start:s}=this.getSelectionInfo(t);s<e&&(i.selectionStart=e,i.selectionEnd=e)}}let Yt=class{constructor(t,e,i,s,a,n,l,h){this.props=t,this.refs=e,this.element=i,this.classDesign=s,this.className=a,this.components=n,this.slots=l,this.emits=h,this.type=new dt(this.props),this.buffer=new bt,this.focus=new gt(this.buffer),this.characterLength=new vt,this.rubberItem=new yt,this.rubberTransition=new ft,this.date=new Mt(this.props,this.type),this.format=new St(this.props,this.type,this.rubberItem),this.special=new Dt(this.props,this.type,this.date,this.format),this.match=new Ct(this.props,this.special),this.pattern=new xt(this.props,this.type,this.date,this.special),this.right=new It(this.props,this.type),this.rubber=new Tt(this.props,this.type,this.rubberItem,this.rubberTransition,this.special,this.match,this.format),this.item=new Ft(this.props,this.type,this.rubberItem,this.characterLength,this.date,this.format,this.special),this.selection=new Lt(this.special,this.item),this.character=new Et(this.props,this.rubberItem,this.characterLength,this.special,this.item,this.selection),this.valueBasic=new Nt(this.rubberTransition,this.item,this.special,this.character),this.value=new At(this.props,this.type,this.date,this.format,this.item,this.special,this.valueBasic),this.validation=new Ot(this.pattern,this.value),this.view=new Xt(this.props,this.type,this.date,this.format,this.special,this.rubber,this.item,this.valueBasic,this.validation,this.className),this.emit=new $t(this.validation,this.emits),this.data=new Pt(this.type,this.buffer,this.focus,this.rubberTransition,this.date,this.special,this.match,this.rubber,this.item,this.selection,this.character,this.valueBasic,this.value,this.emit,this.element),this.event=new Rt(this.buffer,this.focus,this.characterLength,this.right,this.selection,this.valueBasic,this.emit,this.data),S([e.value],()=>this.reset(t.value)),S(this.basic,()=>this.data.goSelection(!1)),S([it.getStandard(),e.language],()=>this.reset(this.value.getValueCache())),t.value&&this.data.reset(F(t.value))}type;buffer;focus;characterLength;rubberItem;rubberTransition;date;format;special;match;pattern;right;rubber;item;selection;character;valueBasic;value;validation;view;emit;data;event;basic=o(()=>{if(this.right.isRight()){let t="";return this.view.item.value.forEach(e=>{t+=e.value}),t}return this.view.input.value});classes=o(()=>({[`${this.className}--value`]:this.characterLength.is(),[`${this.className}--end`]:this.right.isEnd()}));set=t=>this.reset(t);reset(t){const e=F(t);return e!==this.props.valueDefault&&(this.value.item.value!==e||this.valueBasic.item.value!==e&&!st(e))?(this.data.reset(e),this.emit.set("reset",{}).go(),!0):!1}clear=()=>{this.data.reset((this.props.valueDefault??"").toString()),this.emit.set("reset",{}).go(),this.element.value?.focus()}};class jt extends at{item;constructor(t,e,i){super(t,e,i),this.item=new Yt(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{valueBasic:this.item.basic,value:this.item.value.item,setValue:this.item.set,clear:this.item.clear}}initClasses(){return{main:this.item.classes.value,input:this.getSubClass("input"),character:this.getSubClass("character"),characterItem:this.getSubClass("character__item")}}initStyles(){return{}}initRender(){const t=[...this.renderData(),...this.renderInput(),...this.renderView()];return k("span",{...this.getAttrs(),class:this.classes?.value.main},t)}renderData=()=>this.props.name?[k("input",{type:"hidden",name:this.props.name,value:this.item.value.item.value})]:[];renderInput=()=>[k("input",{...this.props.inputAttrs,ref:this.element,class:this.classes?.value.input,type:"text",value:this.item.basic.value,onFocus:this.item.event.onFocus,onBlur:this.item.event.onBlur,onKeydown:this.item.event.onKeydown,onKeyup:this.item.event.onKeyup,onBeforeinput:this.item.event.onBeforeinput,onInput:this.item.event.onInput,onChange:this.item.event.onChange,onPaste:this.item.event.onPaste,onClick:this.item.event.onClick})];renderView=()=>{const t=this.item.view.item.value,e=[];let i;return t.length>0?t.forEach((s,a)=>{e.push(k("span",{key:a,class:s.className,innerHTML:s.value===" "?"&nbsp;":s.value}))}):i="&nbsp;",[k("span",{class:this.classes?.value.character,"data-length":"1",innerHTML:i},e)]}}const A={align:["left","right"],dir:["ltr","rtl"]},X={...Bt,visible:!0},c=rt({name:"D1Mask",__name:"D1Mask",props:ot({name:{},value:{},valueDefault:{},currency:{},currencyHide:{type:Boolean},fullOnly:{type:Boolean},mask:{},special:{},match:{},groupSave:{type:Boolean},pattern:{type:[String,Object,Function]},check:{type:[String,Object,Function]},fraction:{type:[String,Boolean,Number]},type:{},view:{},inputAttrs:{},language:{},visible:{type:Boolean},visiblePartly:{type:Boolean},align:{},dir:{}},X),emits:["focus","blur","keydown","keyup","beforeinput","input","inputLite","change","changeLite","paste","reset"],setup(r,{expose:t,emit:e}){const i=e,s=r,a=o(()=>({main:{"d1-mask":!0,"d1-mask--visible":s.visible,"d1-mask--visiblePartly":s.visiblePartly,[`d1-mask--align--${s.align}`]:E(A.align,s.align),[`d1-mask--dir--${s.dir}`]:E(A.dir,s.dir)}})),n=o(()=>({})),l=new jt("d1.mask",s,{emits:i,classes:a,styles:n}),h=l.render();return t(l.expose()),(u,m)=>(ut(),nt(lt(ht(h))))}});c.__docgenInfo={name:"D1Mask",exportName:"default",displayName:"D1Mask",description:"",tags:{},props:[{name:"dir",required:!1,type:{name:"union",elements:[{name:'"ltr"'},{name:'"rtl"'}]}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'}]}},{name:"visiblePartly",required:!1,type:{name:"boolean"}},{name:"visible",required:!1,type:{name:"boolean"}}],sourceFiles:["/Volumes/T7/Git/dxt-ui/packages/d1/src/components/Ui/Mask/D1Mask.vue"]};const Kt=[{name:"align",type:"string",option:["left","right"]},{name:"check",type:"FieldPatternItemOrFunction"},{name:"currency",type:"string"},{name:"currencyHide",type:"boolean"},{name:"dir",type:"string",option:["ltr","rtl"]},{name:"fraction",type:"MaskFractionItem"},{name:"fullOnly",type:"boolean"},{name:"groupSave",type:"boolean"},{name:"inputAttrs",type:"Partial<HTMLInputElement>"},{name:"language",type:"string"},{name:"mask",type:"MaskList"},{name:"match",type:"MaskMatchItem"},{name:"name",type:"string"},{name:"pattern",type:"FieldPatternItemOrFunction"},{name:"special",type:"MaskSpecialProp"},{name:"type",type:"string",option:["number","full","datetime","date","year-month","year","month","day","day-month","time","hour-minute","hour","minute","second","text","number-format","currency"]},{name:"value",type:"string | number"},{name:"valueDefault",type:"string | number"},{name:"view",type:"string"},{name:"visible",type:"boolean"},{name:"visiblePartly",type:"boolean"}],I=new ct("Mask",Kt,X,mt,pt,kt),Ht={title:"Ui/Mask",component:c,parameters:{design:"d1",docs:{description:{component:I.getDescription()}}},argTypes:I.getWiki(),args:I.getValues()},d={render:r=>({components:{D1Mask:c},setup:()=>({args:r}),template:`
      <div class="wiki-storybook-group" >
      <D1Mask
        class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
        v-bind="args"
      />
    </div>
    `})},b={name:"Примеры масок",render:()=>({components:{D1Mask:c},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Phone number format (+1 area code)</div>
            <D1Mask :mask="'+1 *** *** ** **'" placeholder="Enter phone number"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Auto format selection (multiple masks)</div>
            <D1Mask
              :mask="['*** *** ***', '**** **** ****']"
              placeholder="Auto format selection"
            />
          </div>
        </div>
    `})},g={name:"Специальные символы",render:()=>({components:{D1Mask:c},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default special symbol (*)</div>
            <D1Mask :mask="'+7 *** *** ** **'" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom special symbol (X)</div>
            <D1Mask :mask="'XX.XX.XXXX'" special="X" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple special symbols (*, #, X)</div>
            <D1Mask :mask="'***-###-XXX'" :special="['*', '#', 'X']" />
          </div>
        </div>
    `})},v={name:"Валидация",render:()=>({components:{D1Mask:c},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Pattern validation (6-9 digits only)</div>
            <D1Mask :mask="'*** *** ***'" pattern="[6-9]+" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Group-specific pattern (*, # groups)</div>
            <D1Mask :mask="'**:##'" :special="['*', '#']" :pattern="'[6-9]+'"/>
          </div>
        </div>
    `})},y={name:"Навигация по группам (groupSave)",render:()=>({components:{D1Mask:c},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Smart navigation enabled (groupSave: true)</div>
            <D1Mask :mask="'****-####'" :special="['*', '#']" :groupSave="true" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Smart navigation disabled (groupSave: false)</div>
            <D1Mask :mask="'****-####'" :special="['*', '#']" :groupSave="false" />
          </div>
        </div>
    `})},f={name:"Допустимые символы (match)",render:()=>({components:{D1Mask:c},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">HEX characters (0-9, A-F)</div>
            <D1Mask :mask="'***-***'" match="[A-F0-9]" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Letters only (A-Z, a-z)</div>
            <D1Mask :mask="'***-***'" match="[A-Za-z]" />
          </div>
        </div>
    `})},w={name:"Числовые типы",render:()=>({components:{D1Mask:c},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Simple number</div>
            <D1Mask type="number" :fraction="2" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Formatted number with separators</div>
            <D1Mask type="number-format" language="ru" :fraction="2" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Currency (RUB)</div>
            <D1Mask type="currency" currency="RUB" language="ru" />
          </div>
        </div>
    `})},_={name:"Типы дат и времени",render:()=>({components:{D1Mask:c},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Full date (DD.MM.YYYY)</div>
            <D1Mask type="date" language="ru" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Date and time</div>
            <D1Mask type="datetime" language="ru" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Time only (HH:MM)</div>
            <D1Mask type="hour-minute" />
          </div>
        </div>
    `})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Mask
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-group" >
      <D1Mask
        class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
        v-bind="args"
      />
    </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Примеры масок',
  render: () => ({
    components: {
      D1Mask
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Phone number format (+1 area code)</div>
            <D1Mask :mask="'+1 *** *** ** **'" placeholder="Enter phone number"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Auto format selection (multiple masks)</div>
            <D1Mask
              :mask="['*** *** ***', '**** **** ****']"
              placeholder="Auto format selection"
            />
          </div>
        </div>
    \`
  })
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Специальные символы',
  render: () => ({
    components: {
      D1Mask
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default special symbol (*)</div>
            <D1Mask :mask="'+7 *** *** ** **'" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom special symbol (X)</div>
            <D1Mask :mask="'XX.XX.XXXX'" special="X" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple special symbols (*, #, X)</div>
            <D1Mask :mask="'***-###-XXX'" :special="['*', '#', 'X']" />
          </div>
        </div>
    \`
  })
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Валидация',
  render: () => ({
    components: {
      D1Mask
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Pattern validation (6-9 digits only)</div>
            <D1Mask :mask="'*** *** ***'" pattern="[6-9]+" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Group-specific pattern (*, # groups)</div>
            <D1Mask :mask="'**:##'" :special="['*', '#']" :pattern="'[6-9]+'"/>
          </div>
        </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Навигация по группам (groupSave)',
  render: () => ({
    components: {
      D1Mask
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Smart navigation enabled (groupSave: true)</div>
            <D1Mask :mask="'****-####'" :special="['*', '#']" :groupSave="true" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Smart navigation disabled (groupSave: false)</div>
            <D1Mask :mask="'****-####'" :special="['*', '#']" :groupSave="false" />
          </div>
        </div>
    \`
  })
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Допустимые символы (match)',
  render: () => ({
    components: {
      D1Mask
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">HEX characters (0-9, A-F)</div>
            <D1Mask :mask="'***-***'" match="[A-F0-9]" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Letters only (A-Z, a-z)</div>
            <D1Mask :mask="'***-***'" match="[A-Za-z]" />
          </div>
        </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Числовые типы',
  render: () => ({
    components: {
      D1Mask
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Simple number</div>
            <D1Mask type="number" :fraction="2" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Formatted number with separators</div>
            <D1Mask type="number-format" language="ru" :fraction="2" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Currency (RUB)</div>
            <D1Mask type="currency" currency="RUB" language="ru" />
          </div>
        </div>
    \`
  })
}`,...w.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Типы дат и времени',
  render: () => ({
    components: {
      D1Mask
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Full date (DD.MM.YYYY)</div>
            <D1Mask type="date" language="ru" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Date and time</div>
            <D1Mask type="datetime" language="ru" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Time only (HH:MM)</div>
            <D1Mask type="hour-minute" />
          </div>
        </div>
    \`
  })
}`,..._.parameters?.docs?.source}}};const Ut=["Mask","MaskBasic","MaskSpecial","MaskValidation","MaskGroupSave","MaskMatch","MaskNumberTypes","MaskDateTypes"],te=Object.freeze(Object.defineProperty({__proto__:null,Mask:d,MaskBasic:b,MaskDateTypes:_,MaskGroupSave:y,MaskMatch:f,MaskNumberTypes:w,MaskSpecial:g,MaskValidation:v,__namedExportsOrder:Ut,default:Ht},Symbol.toStringTag,{value:"Module"}));export{te as M,d as a,I as b,b as c,g as d,y as e,f,v as g,w as h,_ as i};
