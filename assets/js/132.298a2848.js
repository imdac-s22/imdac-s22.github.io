(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{347:function(t,e,a){"use strict";a.r(e);var i=a(0),s=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"git-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-workflow","aria-hidden":"true"}},[t._v("#")]),t._v(" Git Workflow")]),t._v(" "),a("p",[t._v("Git has a workflow that can be a little confusing for new developers, and it works like this.")]),t._v(" "),a("p",[t._v("When a new file is created in a directory that has been initialized with a Git repository, that file will be marked by Git as "),a("strong",[t._v("untracked")]),t._v(". This means there is a new file that Git does not have in its history. To start versioning the file is a two-step process.")]),t._v(" "),a("p",[t._v("The first step is to add the file to the "),a("strong",[t._v("staging")]),t._v(" area. The staging area is where we put files that are ready for Git to "),a("strong",[t._v("commit")]),t._v(". The staging area is important in the Git workflow because it allows us to commit some files, but not others, because only the files that are in the staging area will be committed.")]),t._v(" "),a("p",[t._v("After moving files to the stage area, they can be committed. Committing a file is like taking a snapshot of the file at that precise moment. It can then be quickly retrieved in the future, even if further changes have been made. You can think of committing like saving. The more often you commit, the more tracking of the file progress Git will store.")]),t._v(" "),a("p",[t._v("If a change is made to an existing file tracked by Git, it will be marked as "),a("strong",[t._v("modified")]),t._v(". Modified files require the same process of adding the file to the staging area and committing the changes.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stage the newly added or modified file")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stage about.html\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# commit the changes with a message")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Adds about page.'")]),t._v("\n")])])])])}],!1,null,null,null);e.default=s.exports}}]);