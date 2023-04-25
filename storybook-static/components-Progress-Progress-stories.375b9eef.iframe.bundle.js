/*! For license information please see components-Progress-Progress-stories.375b9eef.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_meragi_meragi_design=self.webpackChunk_meragi_meragi_design||[]).push([[650],{"./node_modules/@radix-ui/react-context/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>$c512c27ab02ef895$export$50c7b4e9d9f19c1,k:()=>$c512c27ab02ef895$export$fd42f52fd3ae1109});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName,defaultContext){const Context=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);function Provider(props){const{children,...context}=props,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>context),Object.values(context));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider,{value},children)}return Provider.displayName=rootComponentName+"Provider",[Provider,function useContext(consumerName){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]}function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext)));return function useScope(scope){const contexts=(null==scope?void 0:scope[scopeName])||scopeContexts;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName,defaultContext){const BaseContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext),index=defaultContexts.length;function Provider(props){const{scope,children,...context}=props,Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>context),Object.values(context));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider,{value},children)}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,function useContext(consumerName,scope){const Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},$c512c27ab02ef895$var$composeContextScopes(createScope,...createContextScopeDeps)]}function $c512c27ab02ef895$var$composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope1=()=>{const scopeHooks=scopes.map((createScope=>({useScope:createScope(),scopeName:createScope.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes1=scopeHooks.reduce(((nextScopes,{useScope,scopeName})=>({...nextScopes,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({[`__scope${baseScope.scopeName}`]:nextScopes1})),[nextScopes1])}};return createScope1.scopeName=baseScope.scopeName,createScope1}},"./node_modules/@radix-ui/react-progress/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{fC:()=>$67824d98245208a0$export$be92b6f5f03c0fe9,z$:()=>$67824d98245208a0$export$adb584737d712b70});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.module.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.module.js");const $67824d98245208a0$var$DEFAULT_MAX=100,[$67824d98245208a0$var$createProgressContext,$67824d98245208a0$export$388eb2d8f6d3261f]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)("Progress"),[$67824d98245208a0$var$ProgressProvider,$67824d98245208a0$var$useProgressContext]=$67824d98245208a0$var$createProgressContext("Progress"),$67824d98245208a0$export$b25a304ec7d746bb=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeProgress,value:valueProp,max:maxProp,getValueLabel=$67824d98245208a0$var$defaultGetValueLabel,...progressProps}=props,max=$67824d98245208a0$var$isValidMaxNumber(maxProp)?maxProp:$67824d98245208a0$var$DEFAULT_MAX,value=$67824d98245208a0$var$isValidValueNumber(valueProp,max)?valueProp:null,valueLabel=$67824d98245208a0$var$isNumber(value)?getValueLabel(value,max):void 0;return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($67824d98245208a0$var$ProgressProvider,{scope:__scopeProgress,value,max},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.WV.div,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({"aria-valuemax":max,"aria-valuemin":0,"aria-valuenow":$67824d98245208a0$var$isNumber(value)?value:void 0,"aria-valuetext":valueLabel,role:"progressbar","data-state":$67824d98245208a0$var$getProgressState(value,max),"data-value":null!=value?value:void 0,"data-max":max},progressProps,{ref:forwardedRef})))}));$67824d98245208a0$export$b25a304ec7d746bb.propTypes={max(props,propName,componentName){const propValue=props[propName],strVal=String(propValue);return propValue&&!$67824d98245208a0$var$isValidMaxNumber(propValue)?new Error(function $67824d98245208a0$var$getInvalidMaxError(propValue,componentName){return`Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${$67824d98245208a0$var$DEFAULT_MAX}\`.`}(strVal,componentName)):null},value(props,propName,componentName){const valueProp=props[propName],strVal=String(valueProp),max=$67824d98245208a0$var$isValidMaxNumber(props.max)?props.max:$67824d98245208a0$var$DEFAULT_MAX;return null==valueProp||$67824d98245208a0$var$isValidValueNumber(valueProp,max)?null:new Error(function $67824d98245208a0$var$getInvalidValueError(propValue,componentName){return`Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or ${$67824d98245208a0$var$DEFAULT_MAX} if no \`max\` prop is set)\n  - \`null\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`}(strVal,componentName))}};const $67824d98245208a0$export$2b776f7e7ee60dbd=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{var _context$value;const{__scopeProgress,...indicatorProps}=props,context=$67824d98245208a0$var$useProgressContext("ProgressIndicator",__scopeProgress);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.WV.div,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({"data-state":$67824d98245208a0$var$getProgressState(context.value,context.max),"data-value":null!==(_context$value=context.value)&&void 0!==_context$value?_context$value:void 0,"data-max":context.max},indicatorProps,{ref:forwardedRef}))}));function $67824d98245208a0$var$defaultGetValueLabel(value,max){return`${Math.round(value/max*100)}%`}function $67824d98245208a0$var$getProgressState(value,maxValue){return null==value?"indeterminate":value===maxValue?"complete":"loading"}function $67824d98245208a0$var$isNumber(value){return"number"==typeof value}function $67824d98245208a0$var$isValidMaxNumber(max){return $67824d98245208a0$var$isNumber(max)&&!isNaN(max)&&max>0}function $67824d98245208a0$var$isValidValueNumber(value,max){return $67824d98245208a0$var$isNumber(value)&&!isNaN(value)&&value<=max&&value>=0}const $67824d98245208a0$export$be92b6f5f03c0fe9=$67824d98245208a0$export$b25a304ec7d746bb,$67824d98245208a0$export$adb584737d712b70=$67824d98245208a0$export$2b776f7e7ee60dbd},"./src/components/Progress/Progress.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Wrapped:()=>Wrapped,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Progress/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Progress",component:___WEBPACK_IMPORTED_MODULE_1__.E},Default={args:{value:78,width:300}},Wrapped={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:300},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.E,{value:73})})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 78,\n    width: 300\n  }\n}",...Default.parameters?.docs?.source}}},Wrapped.parameters={...Wrapped.parameters,docs:{...Wrapped.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    return <div style={{\n      width: 300\n    }}>\n        <Progress value={73} />\n      </div>;\n  }\n}",...Wrapped.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Wrapped"]},"./src/components/Progress/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Progress_Progress_Progress});var index_module=__webpack_require__("./node_modules/@radix-ui/react-progress/dist/index.module.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Progress=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].use[3]!./src/components/Progress/Progress.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Progress.Z,options);Progress.Z&&Progress.Z.locals&&Progress.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Progress_Progress_Progress=({value,color="primary",size="small",width="inherit",height})=>{const[progress,setProgress]=react.useState(0);return react.useEffect((()=>{const timer=setTimeout((()=>setProgress(value)),200);return()=>clearTimeout(timer)}),[]),react.useEffect((()=>{const timer=setTimeout((()=>setProgress(value)),200);return()=>clearTimeout(timer)}),[value]),(0,jsx_runtime.jsx)(index_module.fC,{className:classnames_default()("progress",size),style:{width,height},value:progress,children:(0,jsx_runtime.jsx)(index_module.z$,{className:classnames_default()("indicator",color),style:{transform:`translateX(-${100-progress}%)`}})})};Progress_Progress_Progress.displayName="Progress";try{Progress_Progress_Progress.displayName="Progress",Progress_Progress_Progress.__docgenInfo={description:"",displayName:"Progress",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'}]}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},width:{defaultValue:{value:"inherit"},description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Progress/Progress.tsx#Progress"]={docgenInfo:Progress_Progress_Progress.__docgenInfo,name:"Progress",path:"src/components/Progress/Progress.tsx#Progress"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].use[3]!./src/components/Progress/Progress.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".progress{position:relative;overflow:hidden;background:#dddee1;border:1px solid #bac2cc;border-radius:99999px;transform:translateZ(0)}.progress.small{height:5px}.progress.medium{height:10px}.progress.large{height:15px}.progress .indicator{width:100%;height:100%;transition:transform 660ms cubic-bezier(0.65, 0, 0.35, 1);border-radius:99999px}.progress .indicator.primary{background-color:#5e2ea9}.progress .indicator.success{background-color:#02875a}.progress .indicator.warning{background-color:#ff991f}.progress .indicator.danger{background-color:#de340c}.progress .indicator.info{background-color:#0052cc}","",{version:3,sources:["webpack://./src/components/Progress/Progress.scss","webpack://./src/_colors.scss"],names:[],mappings:"AAUA,UACE,iBAAA,CACA,eAAA,CACA,kBCDQ,CDER,wBAAA,CACA,qBAAA,CAGA,uBAAA,CAEA,gBACE,UAAA,CAGF,iBACE,WAAA,CAGF,gBACE,WAAA,CAGF,qBAEE,UAAA,CACA,WAAA,CACA,yDAAA,CACA,qBAAA,CAjCA,6BACI,wBC2BE,CD5BN,6BACI,wBAAA,CADJ,6BACI,wBCDC,CAAA,4BDCD,wBCFF,CDCF,0BACI,wBCCD",sourcesContent:["@import '../../colors';\n\n\n@mixin generate-color($name, $color) {\n    &.#{$name}{\n        background-color: $color;\n    }\n}\n\n\n.progress {\n  position: relative;\n  overflow: hidden;\n  background: $gray-20;\n  border: 1px solid $border-color;\n  border-radius: 99999px;\n  /* Fix overflow clipping in Safari */\n  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */\n  transform: translateZ(0);\n\n  &.small {\n    height: 5px\n  }\n\n  &.medium {\n    height: 10px\n  }\n\n  &.large {\n    height: 15px\n  }\n\n  .indicator {\n    \n    width: 100%;\n    height: 100%;\n    transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);\n    border-radius: 99999px;\n\n    @include generate-color(primary, $primary);\n    @include generate-color(success, $success);\n    @include generate-color(warning, $warning);\n    @include generate-color(danger, $danger);\n    @include generate-color(info, $info);\n  }\n}","@use 'sass:math';\n\n// Base Colors\n$red: #de340c;\n$orange: #ff991f;\n$green: #02875a;\n$blue: #0052cc;\n$purple: #5243aa;\n$cyan: #00b8d9;\n$gray: #a4adba;\n\n$gray-10: #f5f7fa;\n$gray-20: #dddee1;\n$gray-30: #bac2cc;\n$gray-40: #a1abb6;\n$gray-50: #8a97a3;\n$gray-60: #6c757d;\n$gray-70: #4e5b66;\n$gray-80: #364047;\n$gray-90: #1f2933;\n\n$black-10: #f2f2f2;\n$black-20: #e5e5e5;\n$black-30: #cccccc;\n$black-40: #b3b3b3;\n$black-50: #999999;\n$black-60: #808080;\n$black-70: #666666;\n$black-80: #4d4d4d;\n$black-90: #333333;\n\n// Brand Colors\n$primary: #5E2EA9;\n$secondary: #EB5C5C;\n$tertiary: #FCCC61;\n\n// Neutral Colors\n$dark: #0b0514;\n$light: #ffffff;\n\n// Shades of Base Colors\n$red-10: mix($red, $gray-10, 10%);\n$red-20: mix($red, $gray-10, 20%);\n$red-30: mix($red, $gray-10, 30%);\n$red-40: mix($red, $gray-10, 40%);\n$red-50: mix($red, $gray-10, 50%);\n$red-60: mix($red, $gray-10, 60%);\n$red-70: mix($red, $gray-10, 70%);\n$red-80: mix($red, $gray-10, 80%);\n$red-90: mix($red, $gray-10, 90%);\n\n$orange-10: mix($orange, $gray-10, 10%);\n$orange-20: mix($orange, $gray-10, 20%);\n$orange-30: mix($orange, $gray-10, 30%);\n$orange-40: mix($orange, $gray-10, 40%);\n$orange-50: mix($orange, $gray-10, 50%);\n$orange-60: mix($orange, $gray-10, 60%);\n$orange-70: mix($orange, $gray-10, 70%);\n$orange-80: mix($orange, $gray-10, 80%);\n$orange-90: mix($orange, $gray-10, 90%);\n\n$green-10: mix($green, $gray-10, 10%);\n$green-20: mix($green, $gray-10, 20%);\n$green-30: mix($green, $gray-10, 30%);\n$green-40: mix($green, $gray-10, 40%);\n$green-50: mix($green, $gray-10, 50%);\n$green-60: mix($green, $gray-10, 60%);\n$green-70: mix($green, $gray-10, 70%);\n$green-80: mix($green, $gray-10, 80%);\n$green-90: mix($green, $gray-10, 90%);\n\n$blue-10: mix($blue, $gray-10, 10%);\n$blue-20: mix($blue, $gray-10, 20%);\n$blue-30: mix($blue, $gray-10, 30%);\n$blue-40: mix($blue, $gray-10, 40%);\n$blue-50: mix($blue, $gray-10, 50%);\n$blue-60: mix($blue, $gray-10, 60%);\n$blue-70: mix($blue, $gray-10, 70%);\n$blue-80: mix($blue, $gray-10, 80%);\n$blue-90: mix($blue, $gray-10, 90%);\n\n$purple-10: mix($purple, $gray-10, 10%);\n$purple-20: mix($purple, $gray-10, 20%);\n$purple-30: mix($purple, $gray-10, 30%);\n$purple-40: mix($purple, $gray-10, 40%);\n$purple-50: mix($purple, $gray-10, 50%);\n$purple-60: mix($purple, $gray-10, 60%);\n$purple-70: mix($purple, $gray-10, 70%);\n$purple-80: mix($purple, $gray-10, 80%);\n$purple-90: mix($purple, $gray-10, 90%);\n\n$cyan-10: mix($cyan, $gray-10, 10%);\n$cyan-20: mix($cyan, $gray-10, 20%);\n$cyan-30: mix($cyan, $gray-10, 30%);\n$cyan-40: mix($cyan, $gray-10, 40%);\n$cyan-50: mix($cyan, $gray-10, 50%);\n$cyan-60: mix($cyan, $gray-10, 60%);\n$cyan-70: mix($cyan, $gray-10, 70%);\n$cyan-80: mix($cyan, $gray-10, 80%);\n$cyan-90: mix($cyan, $gray-10, 90%);\n\n// Semantic colors\n$danger: $red;\n$warning: $orange;\n$success: $green;\n$info: $blue;\n\n// Darken and lighten shades for semantic colors\n$danger-dark: darken($danger, 10%);\n$danger-light: lighten($danger, 10%);\n\n$warning-dark: darken($warning, 10%);\n$warning-light: lighten($warning, 10%);\n\n$success-dark: darken($success, 10%);\n$success-light: lighten($success, 10%);\n\n$info-dark: darken($info, 10%);\n$info-light: lighten($info, 10%);\n\n// State colors\n$enable: 100%;\n$disable: 50%;\n$focus: 75%;\n$hover: 90%;\n\n// Generate base color states\n$red-enable: rgba($red, $enable);\n$red-disable: rgba($red, $disable);\n$red-focus: rgba($red, $focus);\n$red-hover: rgba($red, $hover);\n\n$orange-enable: rgba($orange, $enable);\n$orange-disable: rgba($orange, $disable);\n$orange-focus: rgba($orange, $focus);\n$orange-hover: rgba($orange, $hover);\n\n$green-enable: rgba($green, $enable);\n$green-disable: rgba($green, $disable);\n$green-focus: rgba($green, $focus);\n$green-hover: rgba($green, $hover);\n\n$blue-enable: rgba($blue, $enable);\n$blue-disable: rgba($blue, $disable);\n$blue-focus: rgba($blue, $focus);\n$blue-hover: rgba($blue, $hover);\n\n$purple-enable: rgba($purple, $enable);\n$purple-disable: rgba($purple, $disable);\n$purple-focus: rgba($purple, $focus);\n$purple-hover: rgba($purple, $hover);\n\n$cyan-enable: rgba($cyan, $enable);\n$cyan-disable: rgba($cyan, $disable);\n$cyan-focus: rgba($cyan, $focus);\n$cyan-hover: rgba($cyan, $hover);\n\n$gray-enable: rgba($gray, $enable);\n$gray-disable: rgba($gray, $disable);\n$gray-focus: rgba($gray, $focus);\n$gray-hover: rgba($gray, $hover);\n\n// Generate brand color states\n$primary-enable: rgba($primary, $enable);\n$primary-disable: rgba($primary, $disable);\n$primary-focus: rgba($primary, $focus);\n$primary-hover: rgba($primary, $hover);\n\n$secondary-enable: rgba($secondary, $enable);\n$secondary-disable: rgba($secondary, $disable);\n$secondary-focus: rgba($secondary, $focus);\n$secondary-hover: rgba($secondary, $hover);\n\n$tertiary-enable: rgba($tertiary, $enable);\n$tertiary-disable: rgba($tertiary, $disable);\n$tertiary-focus: rgba($tertiary, $focus);\n$tertiary-hover: rgba($tertiary, $hover);\n\n$danger-enable: rgba($danger, $enable);\n$danger-disable: rgba($danger, $disable);\n$danger-focus: rgba($danger, $focus);\n$danger-hover: rgba($danger, $hover);\n\n$success-enable: rgba($success, $enable);\n$success-disable: rgba($success, $disable);\n$success-focus: rgba($success, $focus);\n$success-hover: rgba($success, $hover);\n\n$warning-enable: rgba($warning, $enable);\n$warning-disable: rgba($warning, $disable);\n$warning-focus: rgba($warning, $focus);\n$warning-hover: rgba($warning, $hover);\n\n$info-enable: rgba($info, $enable);\n$info-disable: rgba($info, $disable);\n$info-focus: rgba($info, $focus);\n$info-hover: rgba($info, $hover);\n\n// Generate text color\n$text-dark: #0b0514;\n$text-light: #ffffff;\n$text-disabled: #a4adba;\n$text-secondary: #5243aa;\n\n$text-color: $dark;\n$link-text-color: $primary;\n\n// calculate based on background color\n\n@function get-contrast-color($bg-color) {\n    $r: red($bg-color);\n    $g: green($bg-color);\n    $b: blue($bg-color);\n    $yiq: math.div(($r * 299) + ($g * 587) + ($b * 114), 1000) or calc((($r * 299) + ($g * 587) + ($b * 114)) / 1000);\n    \n    @if ($yiq >= 128) {\n      @return $text-dark;\n    } @else {\n      @return $text-light;\n    }\n  }\n  \n// Border ColorsYy\n$border-color: $gray-30;\n$border-hover-color: $gray-50;\n\n// Shadow Colors\n$shadow-color: rgba($text-dark, 0.2);\n$shadow-hover-color: rgba($text-dark, 0.4);"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);