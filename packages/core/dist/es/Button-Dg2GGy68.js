import { defineComponent as h, useSlots as k, ref as v, computed as C, createBlock as s, openBlock as a, resolveDynamicComponent as z, unref as I, normalizeClass as T, withCtx as S, renderSlot as r, createCommentVNode as u, createVNode as $, normalizeStyle as d } from "vue";
import { I as p } from "./Icon-DAhViZ2t.js";
import { t as w } from "./vendor-Du2X6fOs.js";
import { _ as D, w as E } from "./utils-D328kvYA.js";
const N = /* @__PURE__ */ h({
  name: "ErButton",
  __name: "Button",
  props: {
    tag: { default: "button" },
    type: {},
    size: {},
    plain: { type: Boolean },
    round: { type: Boolean },
    circle: { type: Boolean },
    disabled: { type: Boolean },
    autofocus: { type: Boolean },
    nativeType: { default: "button" },
    icon: {},
    loading: { type: Boolean },
    loadingIcon: {},
    useThrottle: { type: Boolean, default: !0 },
    throttleDuration: { default: 500 }
  },
  emits: ["click"],
  setup(c, { expose: f, emit: m }) {
    const y = c, g = m, B = k(), o = v(), t = C(() => ({
      marginRight: B.default ? "6px" : "0px"
    })), n = (e) => {
      g("click", e);
    }, b = w(n, y.throttleDuration);
    return f({
      ref: o
    }), (e, l) => (a(), s(z(e.tag), {
      autofocus: e.autofocus,
      ref_key: "_ref",
      ref: o,
      class: T(["er-button", {
        [`er-button--${e.type}`]: e.type,
        [`er-button--${e.size}`]: e.size,
        "is-plain": e.plain,
        "is-round": e.round,
        "is-circle": e.circle,
        "is-disabled": e.disabled,
        "is-loading": e.loading
      }]),
      disabled: e.disabled || e.loading ? !0 : void 0,
      type: e.tag === "button" ? e.nativeType : void 0,
      onClick: l[0] || (l[0] = (i) => e.useThrottle ? I(b)(i) : n(i))
    }, {
      default: S(() => [
        e.loading ? r(e.$slots, "loading", { key: 0 }, () => [
          $(p, {
            class: "loading-icon",
            icon: e.loadingIcon ?? "spinner",
            style: d(t.value),
            size: "1x"
          }, null, 8, ["icon", "style"])
        ], !0) : u("", !0),
        e.icon && !e.loading ? (a(), s(p, {
          key: 1,
          icon: e.icon,
          size: "sm",
          style: d(t.value)
        }, null, 8, ["icon", "style"])) : u("", !0),
        r(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["autofocus", "class", "disabled", "type"]));
  }
}), V = /* @__PURE__ */ D(N, [["__scopeId", "data-v-3bcfc4ec"]]), A = E(V);
export {
  A as E
};
