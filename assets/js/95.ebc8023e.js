(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{310:function(e,t,r){"use strict";r.r(t);var s=r(0),o=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[r("a",{attrs:{href:"https://css-tricks.com/almanac/properties/o/overflow/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS Overflow"),r("OutboundLink")],1),e._v(" is a flexible CSS property that allows us to assign scroll bars to content and visibly hide elements outside of fixed widths.  This is useful for sliders, embed-able feeds of content, and neat parallax effects.")]),e._v(" "),r("p",[e._v("By default, our elements naturally expand to the heights of all nested elements.  The .content-container element here is centered at the screen with a maximum width of the image.  It's got a big red border around it and surrounds both the content and the image inside.")]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("If we want the container to only take up the height of the image, we can set a fixed height on the .content-container. This doesn't quite work, .content-container element's height is 332px, but the paragraph inside breaks outside of that height.")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("Now that we have a fixed height on the .content-container but, the content of the container is overflowing we can control the display of this overflowing content.")]),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("To hide the overflowing content, or any other content below our fixed height, we can set the "),r("a",{attrs:{href:"https://css-tricks.com/almanac/properties/o/overflow/",target:"_blank",rel:"noopener noreferrer"}},[e._v("css overflow property"),r("OutboundLink")],1),e._v(" to hidden. "),r("code",[e._v("overflow: hidden;")])]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),r("p",[e._v("We can set scroll bars for the overflowing content. This is a helpful technique for limited space.")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),r("p",[e._v("Even though the width of the content fits inside our .content-container element a disabled scroll bar is attached for left and right.  The overflow: scroll style assigns scroll bars to both top and bottom and left and right.  We can specifically set a scroll-bar to only the top and bottom.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),r("p",[e._v("Vice versa to the top/bottom scroll bar with overflow-y, we can set a scroll bar and for left/right.  In this example we've assembled a variety of slides inside a content-container and we can scroll left and right between the elements.")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),r("p",[e._v("In this example we are using position to move the grey box out of the containing element and then brining it back in the containing element on hover. CSS Transition property is used for smooth transition of the position left value.")]),e._v(" "),e._m(12)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"overflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overflow","aria-hidden":"true"}},[this._v("#")]),this._v(" Overflow")])},function(){var e=this.$createElement,t=this._self._c||e;return t("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"CSS Overflow",src:"//codepen.io/IMD/embed/VjwXBW/?height=265&theme-id=0&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),t("a",{attrs:{href:"https://codepen.io/IMD/pen/VjwXBW/"}},[this._v("CSS Overflow")]),this._v(" by IMD\n  ("),t("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),t("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var e=this.$createElement,t=this._self._c||e;return t("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"CSS Overflow",src:"//codepen.io/IMD/embed/RRwMYj/?height=265&theme-id=0&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),t("a",{attrs:{href:"https://codepen.io/IMD/pen/RRwMYj/"}},[this._v("CSS Overflow")]),this._v(" by IMD\n  ("),t("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),t("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overflow-hidden"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overflow-hidden","aria-hidden":"true"}},[this._v("#")]),this._v(" Overflow: hidden")])},function(){var e=this.$createElement,t=this._self._c||e;return t("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"CSS Overflow",src:"//codepen.io/IMD/embed/PzoRye/?height=265&theme-id=0&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),t("a",{attrs:{href:"https://codepen.io/IMD/pen/PzoRye/"}},[this._v("CSS Overflow")]),this._v(" by IMD\n  ("),t("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),t("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overflow-scroll"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overflow-scroll","aria-hidden":"true"}},[this._v("#")]),this._v(" Overflow: Scroll")])},function(){var e=this.$createElement,t=this._self._c||e;return t("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"CSS Overflow",src:"//codepen.io/IMD/embed/WxNzaL/?height=265&theme-id=0&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),t("a",{attrs:{href:"https://codepen.io/IMD/pen/WxNzaL/"}},[this._v("CSS Overflow")]),this._v(" by IMD\n  ("),t("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),t("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overflow-y-scroll"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overflow-y-scroll","aria-hidden":"true"}},[this._v("#")]),this._v(" Overflow-y: scroll")])},function(){var e=this.$createElement,t=this._self._c||e;return t("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"CSS Overflow",src:"//codepen.io/IMD/embed/ZOExZY/?height=265&theme-id=0&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),t("a",{attrs:{href:"https://codepen.io/IMD/pen/ZOExZY/"}},[this._v("CSS Overflow")]),this._v(" by IMD\n  ("),t("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),t("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overflow-x-scroll"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overflow-x-scroll","aria-hidden":"true"}},[this._v("#")]),this._v(" Overflow-x: scroll")])},function(){var e=this.$createElement,t=this._self._c||e;return t("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"Overflow-x",src:"//codepen.io/IMD/embed/JKjLVE/?height=265&theme-id=0&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),t("a",{attrs:{href:"https://codepen.io/IMD/pen/JKjLVE/"}},[this._v("Overflow-x")]),this._v(" by IMD\n  ("),t("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),t("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"example-overflow-with-position"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-overflow-with-position","aria-hidden":"true"}},[this._v("#")]),this._v(" Example: Overflow with Position")])},function(){var e=this.$createElement,t=this._self._c||e;return t("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"Overflow and Position",src:"https://codepen.io/IMD/embed/vYKXaYa?height=265&theme-id=dark&default-tab=css,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),t("a",{attrs:{href:"https://codepen.io/IMD/pen/vYKXaYa"}},[this._v("Overflow and Position")]),this._v(" by IMD\n  ("),t("a",{attrs:{href:"https://codepen.io/IMD"}},[this._v("@IMD")]),this._v(") on "),t("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])}],!1,null,null,null);t.default=o.exports}}]);