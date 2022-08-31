(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{542:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("div",{staticClass:"watch"},[s("p",[s("a",{attrs:{href:"https://laracasts.com/series/laravel-6-from-scratch/episodes/14",target:"_blank",rel:"noopener noreferrer"}},[t._v('Watch "Layout Pages" on Laracasts'),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("One of the primary benefits of using Blade are "),s("a",{attrs:{href:"https://laravel.com/docs/6.x/blade#template-inheritance",target:"_blank",rel:"noopener noreferrer"}},[t._v("template inheritance"),s("OutboundLink")],1),t._v(". It allows a developer to create layout files that will hold common layout elements and extend them to other view templates.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"creating-layout-pages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-layout-pages","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating layout pages")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"defining-a-layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defining-a-layout","aria-hidden":"true"}},[this._v("#")]),this._v(" Defining a Layout")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v('The first step to using template inheritance to define a layout. The "master" layout will likely contain typical HTML mark-up, but will also include two Blade directives '),s("code",[t._v("@section")]),t._v(" and "),s("code",[t._v("@yield")]),t._v(". The "),s("code",[t._v("@section")]),t._v(" directive defines a section of content, while the "),s("code",[t._v("@yield")]),t._v(" directive is used to display the contents of a given section. The "),s("code",[t._v("@show")]),t._v(" directive is used to end a defined section and immediately yield or display the section.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" Stored in resources"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("views"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("layouts"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blade"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("App Name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        @"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("section")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sidebar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            This is the master sidebar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        @show\n\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"container"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            @"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'content'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"extending-a-layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extending-a-layout","aria-hidden":"true"}},[this._v("#")]),this._v(" Extending a Layout")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('When extending a "master" layout, the child view will use the '),e("code",[this._v("@extends")]),this._v(' directive to specify which layout the it should "inherit". Views which extend a Blade layout may inject content into the layout\'s sections using '),e("code",[this._v("@section")]),this._v(" directives. Remember, as seen in the example above, the contents of these sections will be displayed in the layout using "),e("code",[this._v("@yield")]),this._v(":")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" Stored in resources"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("views"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blade"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n@"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'layouts.app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("section")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Page Title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("section")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sidebar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    @"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("parent")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("This is appended to the master sidebar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n@endsection\n\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("section")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'content'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("This is my body content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n@endsection\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("In this example, the sidebar section is utilizing the "),s("code",[t._v("@parent")]),t._v(" directive to append (rather than overwriting) content to the layout's sidebar. The "),s("code",[t._v("@parent")]),t._v(" directive will be replaced by the content of the layout when the view is rendered. In the above example, "),s("code",[t._v("@endsection")]),t._v(" is used instead of "),s("code",[t._v("@show")]),t._v(". Using "),s("code",[t._v("@endsection")]),t._v(" means that the section will be defined, but not yielded.")])}],!1,null,null,null);e.default=n.exports}}]);