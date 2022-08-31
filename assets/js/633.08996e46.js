(window.webpackJsonp=window.webpackJsonp||[]).push([[633],{848:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"sassy-shapes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sassy-shapes","aria-hidden":"true"}},[e._v("#")]),e._v(" Sassy Shapes "),s("Badge",{attrs:{text:"Exercise",vertical:"middle"}})],1),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("Download the "),s("a",{attrs:{href:"https://github.com/imdac/mtm6201-sassy-shapes/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sassy Shapes starter files"),s("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("The following requirements must be met in order to complete the assignment successfully:")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("The screenshot below shows what the completed version should look like.")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"objective"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#objective","aria-hidden":"true"}},[this._v("#")]),this._v(" Objective")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For this exercise, you will create the necessary CSS to display three different shapes each in five different colors. Each shape / color combination will be represented by a class with the name "),t("em",[this._v("shape")]),this._v("-"),t("em",[this._v("color")]),this._v(". (ex. .square-red). Sass will be used to generate all the necessary CSS.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"starter-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#starter-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Starter Files")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("Create a single mixin, "),s("code",[e._v("shape")]),e._v(", that will be used to create the CSS for a specific shape and color.\n"),s("ol",[s("li",[e._v("The mixin should take two parameters, "),s("code",[e._v("$shape")]),e._v(" and "),s("code",[e._v("$color")]),e._v(".")]),e._v(" "),s("li",[e._v("The mixin should check for the value of "),s("code",[e._v("$shape")]),e._v(" using "),s("code",[e._v("@if")]),e._v(" rule and extend, using "),s("code",[e._v("@extend")]),e._v(", the corresponding placeholder (e.g. "),s("code",[e._v("%square")]),e._v(") provided in the starter files.")]),e._v(" "),s("li",[e._v("After extending each shape, override each property using the default color ("),s("code",[e._v("black")]),e._v(") with "),s("code",[e._v("$color")]),e._v(" (e.g. "),s("code",[e._v("background-color: $color;")]),e._v(")")])])]),e._v(" "),s("li",[e._v("Create all of the shape-color classes\n"),s("ol",[s("li",[e._v("Use the "),s("code",[e._v("@each")]),e._v(" rule with the provided "),s("code",[e._v("$shapes")]),e._v(" and "),s("code",[e._v("$colors")]),e._v(" lists. You will need to use nested "),s("code",[e._v("@each")]),e._v(" rules.")]),e._v(" "),s("li",[e._v("Inside the inner "),s("code",[e._v("@each")]),e._v(" rule, create the all of the shape-color class selectors (i.e. "),s("code",[e._v(".square-red")]),e._v(", "),s("code",[e._v(".square-blue")]),e._v(") using the interpolation syntax ("),s("code",[e._v("#{$shape}")]),e._v(")")]),e._v(" "),s("li",[e._v("Inside the selector, call the "),s("code",[e._v("shape")]),e._v(" mixin passing a shape and color to the mixin")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/sassy-shapes-mtm6201.png",alt:"Completed version of Sassy Shapes"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"rubric"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rubric","aria-hidden":"true"}},[this._v("#")]),this._v(" Rubric")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Task")]),e._v(" "),s("th",{staticStyle:{"text-align":"center"}},[e._v("Points")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Creates a "),s("code",[e._v("shape")]),e._v(" mixin with two parameters")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("5")])]),e._v(" "),s("tr",[s("td",[e._v("Checks for a "),s("code",[e._v("'square'")]),e._v(" shape")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("5")])]),e._v(" "),s("tr",[s("td",[e._v("Extends and override the "),s("code",[e._v("%square")]),e._v(" placeholder")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("5")])]),e._v(" "),s("tr",[s("td",[e._v("Checks for a "),s("code",[e._v("'circle'")]),e._v(" shape")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("5")])]),e._v(" "),s("tr",[s("td",[e._v("Extends and override the "),s("code",[e._v("%circle")]),e._v(" placeholder")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("5")])]),e._v(" "),s("tr",[s("td",[e._v("Checks for a "),s("code",[e._v("'pentagon'")]),e._v(" shape")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("5")])]),e._v(" "),s("tr",[s("td",[e._v("Extends and override the "),s("code",[e._v("%pentagon")]),e._v(" placeholder")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("5")])]),e._v(" "),s("tr",[s("td",[e._v("Creates nested "),s("code",[e._v("@each")]),e._v(" rules using the "),s("code",[e._v("$colors")]),e._v(" and "),s("code",[e._v("$shapes")]),e._v(" lists")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("5")])]),e._v(" "),s("tr",[s("td",[e._v("Generates the shape-color class selectors using the interpolation syntax")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("5")])]),e._v(" "),s("tr",[s("td",[e._v("Calls the "),s("code",[e._v("shape")]),e._v(" mixin passing the value for the "),s("code",[e._v("$shape")]),e._v(" and "),s("code",[e._v("$color")])]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("5")])]),e._v(" "),s("tr",[s("td",[s("strong",[e._v("Total")])]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[e._v("50")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"submission"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#submission","aria-hidden":"true"}},[this._v("#")]),this._v(" Submission")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Submit the "),t("em",[this._v("style.scss")]),this._v(" file to the "),t("strong",[this._v("Sassy Shapes")]),this._v(" assignment on BrightSpace.")])}],!1,null,null,null);t.default=r.exports}}]);