import { f as n } from "./vendor-Du2X6fOs.js";
function f(s) {
  return (t) => n(s, (r) => {
    t.use(r);
  });
}
const i = (s) => (s.install = (a) => {
  const t = (s == null ? void 0 : s.name) || "UnnamedComponent";
  a.component(t, s);
}, s), u = (s, a) => {
  const t = s.__vccOpts || s;
  for (const [r, l] of a)
    t[r] = l;
  return t;
};
export {
  u as _,
  f as m,
  i as w
};
