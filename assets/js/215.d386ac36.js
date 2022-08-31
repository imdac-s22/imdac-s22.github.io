(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{430:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"expressions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expressions","aria-hidden":"true"}},[s._v("#")]),s._v(" Expressions")]),s._v(" "),e("p",[s._v("In programming, an expression is a fragment of code which can be evaluated—resulting in a single value.")]),s._v(" "),e("h2",{attrs:{id:"evaluating-expressions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#evaluating-expressions","aria-hidden":"true"}},[s._v("#")]),s._v(" Evaluating Expressions")]),s._v(" "),e("p",[s._v("Consider this expression: "),e("code",[s._v("1 + 1")])]),s._v(" "),e("p",[s._v("Evaluating it will result in a value of "),e("code",[s._v("2")]),s._v(".")]),s._v(" "),e("p",[s._v("What about this expression: "),e("code",[s._v("1 == 1")])]),s._v(" "),e("p",[s._v("This is a comparison operation which checks if the left and right operands are equal. Since they are, the result of this expression will be "),e("code",[s._v("true")]),s._v(". Note that this is not a text value, but rather a boolean value of "),e("code",[s._v("true")]),s._v(" (as opposed to "),e("code",[s._v("false")]),s._v(", the only other option for booleans).")]),s._v(" "),e("h2",{attrs:{id:"using-expressions-with-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-expressions-with-variables","aria-hidden":"true"}},[s._v("#")]),s._v(" Using Expressions with Variables")]),s._v(" "),e("p",[s._v("Often, an expression will be evaluated and its result assigned to a variable. Here's how we'd to that in JavaScript.")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" value "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),e("p",[s._v("It's a trivial example, but useful for understanding how expressions are evaluated.")]),s._v(" "),e("ol",[e("li",[s._v("The expression "),e("code",[s._v("1 + 1")]),s._v(" is first evaluated to "),e("code",[s._v("2")])]),s._v(" "),e("li",[s._v("The variable "),e("code",[s._v("value")]),s._v(" is then assigned the result")])]),s._v(" "),e("h2",{attrs:{id:"other-expression-uses"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#other-expression-uses","aria-hidden":"true"}},[s._v("#")]),s._v(" Other Expression Uses")]),s._v(" "),e("p",[s._v("We've seen so far that we can compute numerical values with expressions.")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Result: 5")]),s._v("\n")])])]),e("p",[s._v("However, sometimes we need to see if a value comparison equates to true or false. These are called boolean expressions.")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Result: true")]),s._v("\n")])])]),e("p",[s._v("This expression involves a comparison which can either be true or false—comparisons don't evaluate to numerical values. Comparisons are commonly used when determining when to run conditional code, or when to end a loop.")]),s._v(" "),e("p",[s._v("Here are a few more examples:")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" value "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Result: true")]),s._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Result: true (best practice)")]),s._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Result: true")]),s._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Result: false")]),s._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\t\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Result: true")]),s._v("\n")])])]),e("h2",{attrs:{id:"complex-expressions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#complex-expressions","aria-hidden":"true"}},[s._v("#")]),s._v(" Complex Expressions")]),s._v(" "),e("p",[s._v("Multiple expressions can be evaluated together using logical operators.")]),s._v(" "),e("p",[s._v("The logical AND "),e("code",[s._v("&&")]),s._v(" will only evaluate to "),e("code",[s._v("true")]),s._v(" if all expresions involved are "),e("code",[s._v("true")]),s._v(".")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Result: true")]),s._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Result: false")]),s._v("\n")])])]),e("p",[s._v("The logical OR "),e("code",[s._v("||")]),s._v(" will evaluate to "),e("code",[s._v("true")]),s._v(" if at least one of the expressions involved is true.")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Result: true")]),s._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Result: false")]),s._v("\n")])])]),e("p",[s._v("The logical NOT "),e("code",[s._v("!")]),s._v(" will convert "),e("code",[s._v("false")]),s._v(" to "),e("code",[s._v("true")]),s._v(" and vice versa.")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Result: true")]),s._v("\n")])])]),e("h2",{attrs:{id:"truthy-and-falsy-expressions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#truthy-and-falsy-expressions","aria-hidden":"true"}},[s._v("#")]),s._v(" Truthy and Falsy Expressions")]),s._v(" "),e("p",[s._v("In programming, we can also perform some rather strange, but useful expression evaluations. Truthy and falsy expressions give general information about a variable without dealing with specific values. Truthy and falsy is best understood in the context of conditional code execution which is covered later in the course.")]),s._v(" "),e("p",[s._v("Here are some examples of falsy values:")]),s._v(" "),e("ol",[e("li",[s._v("A variable with a numerical value of "),e("code",[s._v("0")])]),s._v(" "),e("li",[s._v("An empty string (piece of text) "),e("code",[s._v("''")]),s._v(" or "),e("code",[s._v('""')])]),s._v(" "),e("li",[s._v("A variable with a "),e("code",[s._v("null")]),s._v(" or "),e("code",[s._v("undefined")]),s._v(" value")])]),s._v(" "),e("p",[s._v("Here are some examples of truthy values:")]),s._v(" "),e("ol",[e("li",[s._v("A variable with any non-zero number")]),s._v(" "),e("li",[s._v("A string (piece of text) containing at least one character")]),s._v(" "),e("li",[s._v("An empty array "),e("code",[s._v("[]")]),s._v(" or object "),e("code",[s._v("{}")])])])])}],!1,null,null,null);t.default=n.exports}}]);