(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{638:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("div",{staticClass:"watch"},[a("p",[a("a",{attrs:{href:"https://www.linkedin.com/learning/sass-essential-training/using-partials",target:"_blank",rel:"noopener noreferrer"}},[t._v('Watch "Using Partials" on LinkedIn Learning'),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://sass-lang.com/guide#topic-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Partials"),a("OutboundLink")],1),t._v(" are Sass files that contain little snippets of CSS or Sass that can be included into other Sass files. Partials are a great way to create modularized CSS, which is easier to maintain. To create a partial, simply add an underscore at the beginning of the filename. This will inform that Sass compiler not to compile this file directly.")]),t._v(" "),a("p",[t._v("To add a partial to another Sass file, the "),a("a",{attrs:{href:"https://sass-lang.com/documentation/at-rules/import",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("@import")]),a("OutboundLink")],1),t._v(" rule is used.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._m(4)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"sass-partials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sass-partials","aria-hidden":"true"}},[this._v("#")]),this._v(" Sass Partials")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("While the "),a("code",[t._v("@import")]),t._v(" rule can be used to import the partials, as of October 2019, the Sass team has begun discouraging it use in favor of the "),a("code",[t._v("@use")]),t._v(" rule.")]),t._v(" "),a("p",[t._v("However, at this time, "),a("code",[t._v("@use")]),t._v(" rule is not compatible with the compiler being used in this class. So, for now, we will continue to use "),a("code",[t._v("@import")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// _variables.scss")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$offwhite")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    #EEE8D6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$darkblue")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    #022933"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$yellow")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("      #FFBA00"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// _base.scss")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 62.5%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.8rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$font-main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$color-main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$color-backgrounds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 80%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h1,h2,h3,h4,h5,h6 ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$font-highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$color-headlines")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// style.scss")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"variables"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"base"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);