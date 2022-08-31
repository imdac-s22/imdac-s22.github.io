(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{584:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("While it is possible to use the "),s("code",[t._v("query()")]),t._v(" method with non-SELECT queries, it is not an ideal. Instead, it is better to use the "),s("a",{attrs:{href:"https://www.php.net/manual/en/pdo.exec.php",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("exec()")]),s("OutboundLink")],1),t._v(" method for it will return the number of rows affected.")]),t._v(" "),t._m(1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"executing-non-select-queries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executing-non-select-queries","aria-hidden":"true"}},[this._v("#")]),this._v(" Executing non-SELECT queries")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require_once")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"db.php"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sql")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v("\"INSERT INTO movies (`movie_title`, `director`, `year`, `genre_id`) \n          VALUES ('Pulp Fiction', 'Quentin Tarantino', 1994, 5)\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$result")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$db")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$result")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])])])])}],!1,null,null,null);e.default=n.exports}}]);