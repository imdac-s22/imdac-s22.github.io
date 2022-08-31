(window.webpackJsonp=window.webpackJsonp||[]).push([[554],{769:function(e,t,r){"use strict";r.r(t);var s=r(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("After Vue CLI, successfully generates the project, the project folder should have a directory structure that looks similar to this:")]),e._v(" "),e._m(1),e._m(2),e._v(" "),r("p",[e._v("Having all these files and directories can seem a little overwhelming at first, but each directory has its purpose and we will walk through each one.")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.oreilly.com/library/view/vuejs-understanding-its/9781939902597/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js: Understanding its Tools and Ecosystem"),r("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"directory-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" Directory Structure")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("- node_modules\n- public\n  |- favicon.ico\n  |- index.html\n- src\n  |- assets\n  |- components\n    |- HelloWorld.vue\n  |- router\n    |- index.js\n  |- views\n    |- About.vue\n    |- Home.vue\n  |- App.vue\n  |- main.js\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),t("p",[this._v("Your may directory structure may look slightly different depending on which dependencies and plugins you have included with your project.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-node-modules-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-node-modules-directory","aria-hidden":"true"}},[this._v("#")]),this._v(" The node_modules Directory")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("The "),r("code",[e._v("node_modules")]),e._v(" directory contains all of the npm packages needed for your application to run. Every time you run the command"),r("code",[e._v("npm install some-package")]),e._v("; the package "),r("code",[e._v("some-package")]),e._v(" will download and be stored in this folder. From here, you can "),r("code",[e._v("import")]),e._v(" dependencies into your Vue.js project or reference them manually in an HTML page.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-public-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-public-directory","aria-hidden":"true"}},[this._v("#")]),this._v(" The public Directory")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("The "),r("code",[e._v("public")]),e._v(" directory is the public facing part of your site and is what the user will have access to when they visit your site. By default, this directory will contains your "),r("code",[e._v("index.html")]),e._v(" file. The "),r("code",[e._v("index.html")]),e._v(" is, like on most other web page, is the default starting point for the your Vue application and every part of your Vue app gets bootstrapped and injected into it. The "),r("code",[e._v("public")]),e._v(" directory may also contain the "),r("code",[e._v("favicon.ico")]),e._v(" image.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-src-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-src-directory","aria-hidden":"true"}},[this._v("#")]),this._v(" The src Directory")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("src")]),this._v(" directory is the most important directory in the whole project. This directory will contain a majority of your files that makes up your project. This includes single file components, stylesheets, assets and more. From the diagram above, we also know that the "),t("code",[this._v("src")]),this._v(" directory contains directories of its own. We will look at those directories now.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-assets-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-assets-directory","aria-hidden":"true"}},[this._v("#")]),this._v(" The assets Directory")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("src/assets")]),this._v(" directory is used to store your application's assets like images and stylesheets. Such assets could be placed in the "),t("code",[this._v("public")]),this._v(" directory, but there are benefits to keeping them in the "),t("code",[this._v("src/assets")]),this._v(" directory.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-components-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-components-directory","aria-hidden":"true"}},[this._v("#")]),this._v(" The components Directory")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("src/components")]),this._v(" directory is where the your application's component files will be stored. Component files are single "),t("code",[this._v(".vue")]),this._v(" files which contain all the of code including HTML template, JavaScript and CSS necessary for the component.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-router-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-router-directory","aria-hidden":"true"}},[this._v("#")]),this._v(" The router Directory")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("router")]),this._v(" directory is for router files. These files define your URL routes and which component gets loaded when the URL address is visited.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-store-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-store-directory","aria-hidden":"true"}},[this._v("#")]),this._v(" The store Directory")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("store")]),this._v(" directory is for Vuex stores.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-views-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-views-directory","aria-hidden":"true"}},[this._v("#")]),this._v(" The views Directory")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("views")]),this._v(' directory, as the name suggests, will contain view files, which single file components that act as "pages" or containers that structure their child components.')])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"app-vue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-vue","aria-hidden":"true"}},[this._v("#")]),this._v(" App.vue")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("App.vue")]),this._v(" file is a single component in which all other views and components get injected into. This is a great place to add global components that should be shared across the app like "),t("code",[this._v("Header.vue")]),this._v(" and "),t("code",[this._v("Footer.vue")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"main-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#main-js","aria-hidden":"true"}},[this._v("#")]),this._v(" Main.js")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("main.js")]),this._v(" file is your single Vue Instance in which the App.vue, routes, and all their components get injected into.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);t.default=i.exports}}]);