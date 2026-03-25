import { computed as e, shallowRef as t } from "vue";
import { fetchTopLevelFrames as n } from "@dxtmisha/figma";
//#region src/composables/useFigmaUiFrames.ts
var r = t();
function i() {
	let i = e(() => {
		var e;
		return (e = r.value) == null ? [] : e;
	}), a = t(!1);
	return r.value || (a.value = !0, n((e) => {
		r.value = e, a.value = !1;
	})), {
		frames: i,
		loading: a
	};
}
//#endregion
export { i as useFigmaUiFrames };
