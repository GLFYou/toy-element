import { defineComponent as r, computed as n, createElementBlock as s, openBlock as l, mergeProps as i, createVNode as c, unref as m, normalizeProps as y, guardReactiveProps as B } from "vue";
import { FontAwesomeIcon as u } from "@fortawesome/vue-fontawesome";
import { o as f } from "./vendor-Du2X6fOs.js";
import { _ as d, w as I } from "./utils-D328kvYA.js";
const v = /* @__PURE__ */ r({
  name: "ErIcon",
  inheritAttrs: !1,
  __name: "Icon",
  props: {
    border: { type: Boolean },
    fixedWidth: { type: Boolean },
    flip: {},
    icon: {},
    mask: {},
    listItem: { type: Boolean },
    pull: {},
    pulse: { type: Boolean },
    rotation: {},
    swapOpacity: { type: Boolean },
    size: {},
    spin: { type: Boolean },
    transform: {},
    symbol: { type: [Boolean, String] },
    title: {},
    inverse: { type: Boolean },
    bounce: { type: Boolean },
    shake: { type: Boolean },
    beat: { type: Boolean },
    fade: { type: Boolean },
    beatFade: { type: Boolean },
    spinPulse: { type: Boolean },
    spinReverse: { type: Boolean },
    type: {},
    color: {}
  },
  setup(a) {
    const o = a, t = n(() => f(o, ["type", "color"])), p = n(() => ({ color: o.color ?? void 0 }));
    return (e, b) => (l(), s("i", i({
      class: ["er-icon", { [`er-icon--${e.type}`]: e.type, "loading-ani": t.value.icon === "spinner" }],
      style: p.value
    }, e.$attrs), [
      c(m(u), y(B(t.value)), null, 16)
    ], 16));
  }
}), _ = /* @__PURE__ */ d(v, [["__scopeId", "data-v-29a835e4"]]), w = I(_);
export {
  w as E,
  _ as I
};
