"use strict";(self.webpackChunk_meragi_meragi_design=self.webpackChunk_meragi_meragi_design||[]).push([[183],{"./src/components/Drawer/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>Drawer_Drawer_Drawer});var index_module=__webpack_require__("./node_modules/@radix-ui/react-dialog/dist/index.module.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),common=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/utils/common.tsx")),Button=__webpack_require__("./src/components/Button/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Drawer=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].use[3]!./src/components/Drawer/Drawer.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Drawer.Z,options);Drawer.Z&&Drawer.Z.locals&&Drawer.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Drawer_Drawer_Drawer=({children,direction="right",size="small",defaultOpen,controlled=!0,control="Open",open,onOpenChange})=>{const rootProps=controlled?{}:{open,onOpenChange};return(0,jsx_runtime.jsxs)(index_module.fC,{defaultOpen,...rootProps,children:[(0,jsx_runtime.jsx)(index_module.xz,{asChild:!0,children:(0,common.H)(control)?(0,jsx_runtime.jsx)(Button.z,{className:"Button violet",children:control}):control}),(0,jsx_runtime.jsxs)(index_module.h_,{children:[(0,jsx_runtime.jsx)(index_module.aV,{className:"overlay"}),(0,jsx_runtime.jsx)(index_module.VY,{className:classnames_default()("drawer-content ",direction,size),children})]})]})};Drawer_Drawer_Drawer.displayName="Drawer";try{Drawer_Drawer_Drawer.displayName="Drawer",Drawer_Drawer_Drawer.__docgenInfo={description:"",displayName:"Drawer",props:{children:{defaultValue:null,description:"Content of Drawer.",name:"children",required:!1,type:{name:"ReactNode"}},direction:{defaultValue:{value:"right"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},controlled:{defaultValue:{value:"true"},description:"Whether the Drawer component is controlled or uncontrolled.",name:"controlled",required:!1,type:{name:"boolean"}},control:{defaultValue:{value:"Open"},description:"Text or component to trigger the Drawer when in controlled mode.",name:"control",required:!1,type:{name:"ReactNode"}},defaultOpen:{defaultValue:null,description:"Whether the Drawer should be open by default.",name:"defaultOpen",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"Whether the Drawer is open or closed (in uncontrolled mode).",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Function to call when the open state of the Drawer changes (in uncontrolled mode).",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/Drawer.tsx#Drawer"]={docgenInfo:Drawer_Drawer_Drawer.__docgenInfo,name:"Drawer",path:"src/components/Drawer/Drawer.tsx#Drawer"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].use[3]!./src/components/Drawer/Drawer.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".overlay{background-color:#333;position:fixed;inset:0;opacity:.8;animation:overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)}.drawer-content{position:fixed;background-color:#fff;box-shadow:0 0 10px rgba(0,0,0,.2);overflow-y:auto;z-index:1000}.drawer-content.right{top:0;right:0;bottom:0}.drawer-content.right.small{animation:right-slide-small-out .15s ease-in-out forwards;width:400px}.drawer-content.right.medium{animation:right-slide-medium-out .15s ease-in-out forwards;width:550px}.drawer-content.right.large{animation:right-slide-large-out .15s ease-in-out forwards;width:700px}.drawer-content.left{top:0;left:0;bottom:0}.drawer-content.left.small{animation:left-slide-small-out .15s ease-in-out forwards;width:400px}.drawer-content.left.medium{animation:left-slide-medium-out .15s ease-in-out forwards;width:550px}.drawer-content.left.large{animation:left-slide-large-out .15s ease-in-out forwards;width:700px}.drawer-content.top{top:0;left:0;right:0}.drawer-content.top.small{animation:top-slide-small-out .15s ease-in-out forwards;height:400px}.drawer-content.top.medium{animation:top-slide-medium-out .15s ease-in-out forwards;height:550px}.drawer-content.top.large{animation:top-slide-large-out .15s ease-in-out forwards;height:700px}.drawer-content.bottom{bottom:0;left:0;right:0}.drawer-content.bottom.small{animation:bottom-slide-small-out .15s ease-in-out forwards;height:400px}.drawer-content.bottom.medium{animation:bottom-slide-medium-out .15s ease-in-out forwards;height:550px}.drawer-content.bottom.large{animation:bottom-slide-large-out .15s ease-in-out forwards;height:700px}.drawer-content[data-state=open].right.small{animation:right-slide-small-in .15s ease-in-out forwards}.drawer-content[data-state=open].right.medium{animation:right-slide-medium-in .15s ease-in-out forwards}.drawer-content[data-state=open].right.large{animation:right-slide-large-in .15s ease-in-out forwards}.drawer-content[data-state=open].left.small{animation:left-slide-small-in .15s ease-in-out forwards}.drawer-content[data-state=open].left.medium{animation:left-slide-medium-in .15s ease-in-out forwards}.drawer-content[data-state=open].left.large{animation:left-slide-large-in .15s ease-in-out forwards}.drawer-content[data-state=open].top.small{animation:top-slide-small-in .15s ease-in-out forwards}.drawer-content[data-state=open].top.medium{animation:top-slide-medium-in .15s ease-in-out forwards}.drawer-content[data-state=open].top.large{animation:top-slide-large-in .15s ease-in-out forwards}.drawer-content[data-state=open].bottom.small{animation:bottom-slide-small-in .15s ease-in-out forwards}.drawer-content[data-state=open].bottom.medium{animation:bottom-slide-medium-in .15s ease-in-out forwards}.drawer-content[data-state=open].bottom.large{animation:bottom-slide-large-in .15s ease-in-out forwards}.drawer-content:focus{outline:none}.drawer-content .actions{display:flex;justify-content:flex-end;margin-top:5px;margin-bottom:-20px;padding-top:5px}@keyframes top-slide-small-in{from{transform:translateY(-400px)}to{transform:translateY(0)}}@keyframes top-slide-small-out{from{transform:translateY(0)}to{transform:translateY(-400px)}}@keyframes bottom-slide-small-in{from{transform:translateY(400px)}to{transform:translateY(0)}}@keyframes bottom-slide-small-out{from{transform:translateY(0)}to{transform:translateY(400px)}}@keyframes left-slide-small-in{from{transform:translateX(-400px)}to{transform:translateX(0)}}@keyframes left-slide-small-out{from{transform:translateX(0)}to{transform:translateX(-400px)}}@keyframes right-slide-small-in{from{transform:translateX(400px)}to{transform:translateX(0)}}@keyframes right-slide-small-out{from{transform:translateX(0)}to{transform:translateX(400px)}}@keyframes top-slide-medium-in{from{transform:translateY(-550px)}to{transform:translateY(0)}}@keyframes top-slide-medium-out{from{transform:translateY(0)}to{transform:translateY(-550px)}}@keyframes bottom-slide-medium-in{from{transform:translateY(550px)}to{transform:translateY(0)}}@keyframes bottom-slide-medium-out{from{transform:translateY(0)}to{transform:translateY(550px)}}@keyframes left-slide-medium-in{from{transform:translateX(-550px)}to{transform:translateX(0)}}@keyframes left-slide-medium-out{from{transform:translateX(0)}to{transform:translateX(-550px)}}@keyframes right-slide-medium-in{from{transform:translateX(550px)}to{transform:translateX(0)}}@keyframes right-slide-medium-out{from{transform:translateX(0)}to{transform:translateX(550px)}}@keyframes top-slide-large-in{from{transform:translateY(-700px)}to{transform:translateY(0)}}@keyframes top-slide-large-out{from{transform:translateY(0)}to{transform:translateY(-700px)}}@keyframes bottom-slide-large-in{from{transform:translateY(700px)}to{transform:translateY(0)}}@keyframes bottom-slide-large-out{from{transform:translateY(0)}to{transform:translateY(700px)}}@keyframes left-slide-large-in{from{transform:translateX(-700px)}to{transform:translateX(0)}}@keyframes left-slide-large-out{from{transform:translateX(0)}to{transform:translateX(-700px)}}@keyframes right-slide-large-in{from{transform:translateX(700px)}to{transform:translateX(0)}}@keyframes right-slide-large-out{from{transform:translateX(0)}to{transform:translateX(700px)}}","",{version:3,sources:["webpack://./src/components/Drawer/Drawer.scss","webpack://./src/_colors.scss"],names:[],mappings:"AA0CA,SACE,qBCdS,CDeT,cAAA,CACA,OAAA,CACA,UA5CgB,CA6ChB,yDAAA,CAGF,gBACI,cAAA,CACA,qBAAA,CACA,kCAAA,CACA,eAAA,CACA,YAAA,CAGA,sBACI,KAAA,CACA,OAAA,CACA,QAAA,CA3CN,4BACE,yDAAA,CACA,WAAA,CAFF,6BACE,0DAAA,CACA,WAAA,CAFF,4BACE,yDAAA,CACA,WAAA,CA8CA,qBACI,KAAA,CACA,MAAA,CACA,QAAA,CAnDN,2BACE,wDAAA,CACA,WAAA,CAFF,4BACE,yDAAA,CACA,WAAA,CAFF,2BACE,wDAAA,CACA,WAAA,CAqDA,oBACI,KAAA,CACA,MAAA,CACA,OAAA,CA1DN,0BACE,uDAAA,CACA,YAAA,CAFF,2BACE,wDAAA,CACA,YAAA,CAFF,0BACE,uDAAA,CACA,YAAA,CA4DA,uBACI,QAAA,CACA,MAAA,CACA,OAAA,CAjEN,6BACE,0DAAA,CACA,YAAA,CAFF,8BACE,2DAAA,CACA,YAAA,CAFF,6BACE,0DAAA,CACA,YAAA,CAKF,6CACE,wDAAA,CADF,8CACE,yDAAA,CADF,6CACE,wDAAA,CADF,4CACE,uDAAA,CADF,6CACE,wDAAA,CADF,4CACE,uDAAA,CADF,2CACE,sDAAA,CADF,4CACE,uDAAA,CADF,2CACE,sDAAA,CADF,8CACE,yDAAA,CADF,+CACE,0DAAA,CADF,8CACE,yDAAA,CA+EF,sBACE,YAAA,CAGF,yBACE,YAAA,CACA,wBAAA,CACA,cAAA,CACA,mBAAA,CACA,eAAA,CAWF,8BACE,KACE,4BAAA,CAEF,GACE,uBAAA,CAAA,CAIJ,+BACE,KACE,uBAAA,CAEF,GACE,4BAAA,CAAA,CAdJ,iCACE,KACE,2BAAA,CAEF,GACE,uBAAA,CAAA,CAIJ,kCACE,KACE,uBAAA,CAEF,GACE,2BAAA,CAAA,CAdJ,+BACE,KACE,4BAAA,CAEF,GACE,uBAAA,CAAA,CAIJ,gCACE,KACE,uBAAA,CAEF,GACE,4BAAA,CAAA,CAdJ,gCACE,KACE,2BAAA,CAEF,GACE,uBAAA,CAAA,CAIJ,iCACE,KACE,uBAAA,CAEF,GACE,2BAAA,CAAA,CAdJ,+BACE,KACE,4BAAA,CAEF,GACE,uBAAA,CAAA,CAIJ,gCACE,KACE,uBAAA,CAEF,GACE,4BAAA,CAAA,CAdJ,kCACE,KACE,2BAAA,CAEF,GACE,uBAAA,CAAA,CAIJ,mCACE,KACE,uBAAA,CAEF,GACE,2BAAA,CAAA,CAdJ,gCACE,KACE,4BAAA,CAEF,GACE,uBAAA,CAAA,CAIJ,iCACE,KACE,uBAAA,CAEF,GACE,4BAAA,CAAA,CAdJ,iCACE,KACE,2BAAA,CAEF,GACE,uBAAA,CAAA,CAIJ,kCACE,KACE,uBAAA,CAEF,GACE,2BAAA,CAAA,CAdJ,8BACE,KACE,4BAAA,CAEF,GACE,uBAAA,CAAA,CAIJ,+BACE,KACE,uBAAA,CAEF,GACE,4BAAA,CAAA,CAdJ,iCACE,KACE,2BAAA,CAEF,GACE,uBAAA,CAAA,CAIJ,kCACE,KACE,uBAAA,CAEF,GACE,2BAAA,CAAA,CAdJ,+BACE,KACE,4BAAA,CAEF,GACE,uBAAA,CAAA,CAIJ,gCACE,KACE,uBAAA,CAEF,GACE,4BAAA,CAAA,CAdJ,gCACE,KACE,2BAAA,CAEF,GACE,uBAAA,CAAA,CAIJ,iCACE,KACE,uBAAA,CAEF,GACE,2BAAA,CAAA",sourcesContent:["@import '../../colors';\n\n$overlay-opacity: .8;\n\n$sizes: (\n  'small': 400px,\n  'medium': 550px,\n  'large': 700px\n);\n\n@mixin size-animation-out($size, $distance, $direction) {\n  $type: height;\n  @if $direction == left {\n    $type: width;\n  } @else if $direction == right {\n    $type: width;\n  }\n\n  &.#{$size} {\n    animation: #{$direction}-slide-#{$size}-out 0.15s ease-in-out forwards;\n    #{$type}: #{$distance};\n  }\n}\n\n@mixin size-animation-in($size, $distance, $direction) {\n  &.#{$size} {\n    animation: #{$direction}-slide-#{$size}-in 0.15s ease-in-out forwards;\n  }\n}\n\n@mixin from-size-list-out($direction) {\n  @each $size, $distance in $sizes {\n    @include size-animation-out($size, $distance, $direction);\n  };\n}\n\n@mixin from-size-list-in($direction) {\n  @each $size, $distance in $sizes {\n    @include size-animation-in($size, $distance, $direction);\n  };\n}\n\n.overlay {\n  background-color: $black-90;\n  position: fixed;\n  inset: 0;\n  opacity: $overlay-opacity;\n  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.drawer-content {\n    position: fixed;\n    background-color: #fff;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    overflow-y: auto;\n    z-index: 1000;\n    \n\n    &.right {\n        top: 0;\n        right: 0;\n        bottom: 0;\n\n        @include from-size-list-out(right);\n    }\n\n    &.left {\n        top: 0;\n        left: 0;\n        bottom: 0;\n        @include from-size-list-out(left);\n    }\n\n    &.top {\n        top: 0;\n        left: 0;\n        right: 0;\n        @include from-size-list-out(top);\n    }\n\n    &.bottom {\n        bottom: 0;\n        left: 0;\n        right: 0;\n        @include from-size-list-out(bottom);\n    }\n\n    &[data-state=\"open\"] {\n        &.right {\n          @include from-size-list-in(right);\n        }\n\n        &.left {\n          @include from-size-list-in(left);\n        }\n\n        &.top {\n          @include from-size-list-in(top);\n        }\n\n        &.bottom {\n          @include from-size-list-in(bottom);\n        }\n    }\n\n  &:focus {\n    outline: none;\n  }\n\n  .actions {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 5px;\n    margin-bottom: -20px;\n    padding-top: 5px;\n  }\n\n}\n\n@mixin slide-keyframes($name, $direction, $distance) {\n    \n    $distance-value: if($direction == 'left' or $direction == 'top', -$distance, $distance);\n\n  $movement: if($direction == 'left', 'X', if($direction == 'right', 'X', 'Y'));\n  \n  @keyframes #{$name}-in {\n    from {\n      transform: translate#{$movement}(#{$distance-value});\n    }\n    to {\n      transform: translate#{$movement}(0);\n    }\n  }\n\n  @keyframes #{$name}-out {\n    from {\n      transform: translate#{$movement}(0);\n    }\n    to {\n      transform: translate#{$movement}(#{$distance-value});\n    }\n  }\n}\n\n@each $size, $distance in $sizes {\n    @include slide-keyframes(top-slide-#{$size}, top, $distance);\n    @include slide-keyframes(bottom-slide-#{$size}, bottom, $distance);\n    @include slide-keyframes(left-slide-#{$size}, left, $distance);\n    @include slide-keyframes(right-slide-#{$size}, right, $distance);\n  }","@use 'sass:math';\n\n// Base Colors\n$red: #de340c;\n$orange: #ff991f;\n$green: #02875a;\n$blue: #0052cc;\n$purple: #5243aa;\n$cyan: #00b8d9;\n$gray: #a4adba;\n\n$gray-10: #f5f7fa;\n$gray-20: #dddee1;\n$gray-30: #bac2cc;\n$gray-40: #a1abb6;\n$gray-50: #8a97a3;\n$gray-60: #6c757d;\n$gray-70: #4e5b66;\n$gray-80: #364047;\n$gray-90: #1f2933;\n\n$black-10: #f2f2f2;\n$black-20: #e5e5e5;\n$black-30: #cccccc;\n$black-40: #b3b3b3;\n$black-50: #999999;\n$black-60: #808080;\n$black-70: #666666;\n$black-80: #4d4d4d;\n$black-90: #333333;\n\n// Brand Colors\n$primary: #5E2EA9;\n$secondary: #EB5C5C;\n$tertiary: #FCCC61;\n\n// Neutral Colors\n$dark: #0b0514;\n$light: #ffffff;\n\n// Shades of Base Colors\n$red-10: mix($red, $gray-10, 10%);\n$red-20: mix($red, $gray-10, 20%);\n$red-30: mix($red, $gray-10, 30%);\n$red-40: mix($red, $gray-10, 40%);\n$red-50: mix($red, $gray-10, 50%);\n$red-60: mix($red, $gray-10, 60%);\n$red-70: mix($red, $gray-10, 70%);\n$red-80: mix($red, $gray-10, 80%);\n$red-90: mix($red, $gray-10, 90%);\n\n$orange-10: mix($orange, $gray-10, 10%);\n$orange-20: mix($orange, $gray-10, 20%);\n$orange-30: mix($orange, $gray-10, 30%);\n$orange-40: mix($orange, $gray-10, 40%);\n$orange-50: mix($orange, $gray-10, 50%);\n$orange-60: mix($orange, $gray-10, 60%);\n$orange-70: mix($orange, $gray-10, 70%);\n$orange-80: mix($orange, $gray-10, 80%);\n$orange-90: mix($orange, $gray-10, 90%);\n\n$green-10: mix($green, $gray-10, 10%);\n$green-20: mix($green, $gray-10, 20%);\n$green-30: mix($green, $gray-10, 30%);\n$green-40: mix($green, $gray-10, 40%);\n$green-50: mix($green, $gray-10, 50%);\n$green-60: mix($green, $gray-10, 60%);\n$green-70: mix($green, $gray-10, 70%);\n$green-80: mix($green, $gray-10, 80%);\n$green-90: mix($green, $gray-10, 90%);\n\n$blue-10: mix($blue, $gray-10, 10%);\n$blue-20: mix($blue, $gray-10, 20%);\n$blue-30: mix($blue, $gray-10, 30%);\n$blue-40: mix($blue, $gray-10, 40%);\n$blue-50: mix($blue, $gray-10, 50%);\n$blue-60: mix($blue, $gray-10, 60%);\n$blue-70: mix($blue, $gray-10, 70%);\n$blue-80: mix($blue, $gray-10, 80%);\n$blue-90: mix($blue, $gray-10, 90%);\n\n$purple-10: mix($purple, $gray-10, 10%);\n$purple-20: mix($purple, $gray-10, 20%);\n$purple-30: mix($purple, $gray-10, 30%);\n$purple-40: mix($purple, $gray-10, 40%);\n$purple-50: mix($purple, $gray-10, 50%);\n$purple-60: mix($purple, $gray-10, 60%);\n$purple-70: mix($purple, $gray-10, 70%);\n$purple-80: mix($purple, $gray-10, 80%);\n$purple-90: mix($purple, $gray-10, 90%);\n\n$cyan-10: mix($cyan, $gray-10, 10%);\n$cyan-20: mix($cyan, $gray-10, 20%);\n$cyan-30: mix($cyan, $gray-10, 30%);\n$cyan-40: mix($cyan, $gray-10, 40%);\n$cyan-50: mix($cyan, $gray-10, 50%);\n$cyan-60: mix($cyan, $gray-10, 60%);\n$cyan-70: mix($cyan, $gray-10, 70%);\n$cyan-80: mix($cyan, $gray-10, 80%);\n$cyan-90: mix($cyan, $gray-10, 90%);\n\n// Semantic colors\n$danger: $red;\n$warning: $orange;\n$success: $green;\n$info: $blue;\n\n// Darken and lighten shades for semantic colors\n$danger-dark: darken($danger, 10%);\n$danger-light: lighten($danger, 10%);\n\n$warning-dark: darken($warning, 10%);\n$warning-light: lighten($warning, 10%);\n\n$success-dark: darken($success, 10%);\n$success-light: lighten($success, 10%);\n\n$info-dark: darken($info, 10%);\n$info-light: lighten($info, 10%);\n\n// State colors\n$enable: 100%;\n$disable: 50%;\n$focus: 75%;\n$hover: 90%;\n\n// Generate base color states\n$red-enable: rgba($red, $enable);\n$red-disable: rgba($red, $disable);\n$red-focus: rgba($red, $focus);\n$red-hover: rgba($red, $hover);\n\n$orange-enable: rgba($orange, $enable);\n$orange-disable: rgba($orange, $disable);\n$orange-focus: rgba($orange, $focus);\n$orange-hover: rgba($orange, $hover);\n\n$green-enable: rgba($green, $enable);\n$green-disable: rgba($green, $disable);\n$green-focus: rgba($green, $focus);\n$green-hover: rgba($green, $hover);\n\n$blue-enable: rgba($blue, $enable);\n$blue-disable: rgba($blue, $disable);\n$blue-focus: rgba($blue, $focus);\n$blue-hover: rgba($blue, $hover);\n\n$purple-enable: rgba($purple, $enable);\n$purple-disable: rgba($purple, $disable);\n$purple-focus: rgba($purple, $focus);\n$purple-hover: rgba($purple, $hover);\n\n$cyan-enable: rgba($cyan, $enable);\n$cyan-disable: rgba($cyan, $disable);\n$cyan-focus: rgba($cyan, $focus);\n$cyan-hover: rgba($cyan, $hover);\n\n$gray-enable: rgba($gray, $enable);\n$gray-disable: rgba($gray, $disable);\n$gray-focus: rgba($gray, $focus);\n$gray-hover: rgba($gray, $hover);\n\n// Generate brand color states\n$primary-enable: rgba($primary, $enable);\n$primary-disable: rgba($primary, $disable);\n$primary-focus: rgba($primary, $focus);\n$primary-hover: rgba($primary, $hover);\n\n$secondary-enable: rgba($secondary, $enable);\n$secondary-disable: rgba($secondary, $disable);\n$secondary-focus: rgba($secondary, $focus);\n$secondary-hover: rgba($secondary, $hover);\n\n$tertiary-enable: rgba($tertiary, $enable);\n$tertiary-disable: rgba($tertiary, $disable);\n$tertiary-focus: rgba($tertiary, $focus);\n$tertiary-hover: rgba($tertiary, $hover);\n\n$danger-enable: rgba($danger, $enable);\n$danger-disable: rgba($danger, $disable);\n$danger-focus: rgba($danger, $focus);\n$danger-hover: rgba($danger, $hover);\n\n$success-enable: rgba($success, $enable);\n$success-disable: rgba($success, $disable);\n$success-focus: rgba($success, $focus);\n$success-hover: rgba($success, $hover);\n\n$warning-enable: rgba($warning, $enable);\n$warning-disable: rgba($warning, $disable);\n$warning-focus: rgba($warning, $focus);\n$warning-hover: rgba($warning, $hover);\n\n$info-enable: rgba($info, $enable);\n$info-disable: rgba($info, $disable);\n$info-focus: rgba($info, $focus);\n$info-hover: rgba($info, $hover);\n\n// Generate text color\n$text-dark: #0b0514;\n$text-light: #ffffff;\n$text-disabled: #a4adba;\n$text-secondary: #5243aa;\n\n$text-color: $dark;\n$link-text-color: $primary;\n\n// calculate based on background color\n\n@function get-contrast-color($bg-color) {\n    $r: red($bg-color);\n    $g: green($bg-color);\n    $b: blue($bg-color);\n    $yiq: math.div(($r * 299) + ($g * 587) + ($b * 114), 1000) or calc((($r * 299) + ($g * 587) + ($b * 114)) / 1000);\n    \n    @if ($yiq >= 128) {\n      @return $text-dark;\n    } @else {\n      @return $text-light;\n    }\n  }\n  \n// Border ColorsYy\n$border-color: $gray-30;\n$border-hover-color: $gray-50;\n\n// Shadow Colors\n$shadow-color: rgba($text-dark, 0.2);\n$shadow-hover-color: rgba($text-dark, 0.4);"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);