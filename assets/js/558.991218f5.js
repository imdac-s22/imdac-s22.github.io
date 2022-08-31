(window.webpackJsonp=window.webpackJsonp||[]).push([[558],{773:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("As web projects get more complex, breaking up structure into more manageable parts known as components may become necessary. Components allow for a project's UI to be divided into reusable pieces, and in Vue, these "),n("a",{attrs:{href:"https://vuejs.org/guide/essentials/component-basics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Components"),n("OutboundLink")],1),t._v(" can be defined with their own name, data, and methods.")]),t._v(" "),n("p",[t._v("Before a Vue component can be used, it must be registered. "),n("a",{attrs:{href:"https://vuejs.org/guide/components/registration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Component Registration"),n("OutboundLink")],1),t._v(" can come in two forms: global or local.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),n("p",[t._v("Once registered, global components can be used in the template of any component within the application.")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vue-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-components","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue Components")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"global-registration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#global-registration","aria-hidden":"true"}},[this._v("#")]),this._v(" Global Registration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Components are made available globally using the "),e("code",[this._v("app.component()")]),this._v(" method on the current Vue Application.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyComponent'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("<")]),this._v("MyComponent")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("/>")])]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"local-registration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#local-registration","aria-hidden":"true"}},[this._v("#")]),this._v(" Local Registration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Local components have a few advantages over global components. They can create a more efficient build and prevent name crashing among multiple global components. Local registration is done using the "),e("code",[this._v("components")]),this._v(" option.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    MyComponent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Local components are "),e("strong",[this._v("NOT")]),this._v(" available to decedent components and will only be accessible by the component containing the implementation of the component.")])}],!1,null,null,null);e.default=s.exports}}]);