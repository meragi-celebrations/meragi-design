/*! For license information please see components-Label-Label-stories.b0ad6f02.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_meragi_meragi_design=self.webpackChunk_meragi_meragi_design||[]).push([[224],{"./node_modules/@radix-ui/react-label/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>$b73a6c6685e72184$export$be92b6f5f03c0fe9});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.module.js");const $b73a6c6685e72184$export$b04be29aa201d4f5=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__.WV.label,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.Z)({},props,{ref:forwardedRef,onMouseDown:event=>{var _props$onMouseDown;null===(_props$onMouseDown=props.onMouseDown)||void 0===_props$onMouseDown||_props$onMouseDown.call(props,event),!event.defaultPrevented&&event.detail>1&&event.preventDefault()}})))),$b73a6c6685e72184$export$be92b6f5f03c0fe9=$b73a6c6685e72184$export$b04be29aa201d4f5},"./src/components/Label/Label.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ForInput:()=>ForInput,Side:()=>Side,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Label/index.ts"),_Input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Input/index.ts"),_Select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Select/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Label",component:___WEBPACK_IMPORTED_MODULE_1__._},options=[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}],Default={args:{name:"test",label:"Label",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Select__WEBPACK_IMPORTED_MODULE_3__.P,{options})}},Side={args:{label:"Label",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Select__WEBPACK_IMPORTED_MODULE_3__.P,{}),options,position:"side"}},ForInput={args:{name:"test",label:"Label",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_2__.I,{}),position:"side",onChange:()=>{console.log("worked?")}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'test',\n    label: 'Label',\n    children: <Select options={options} />\n  }\n}",...Default.parameters?.docs?.source}}},Side.parameters={...Side.parameters,docs:{...Side.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Label',\n    children: <Select />,\n    options: options,\n    position: 'side'\n  }\n}",...Side.parameters?.docs?.source}}},ForInput.parameters={...ForInput.parameters,docs:{...ForInput.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'test',\n    label: 'Label',\n    children: <Input />,\n    position: 'side',\n    onChange: () => {\n      console.log('worked?');\n    }\n  }\n}",...ForInput.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Side","ForInput"]},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>Text_Text_Text,Z:()=>components_Text_Text});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Text=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].use[3]!./src/components/Text/Text.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Text.Z,options);Text.Z&&Text.Z.locals&&Text.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text_Text_Text=({strong=!1,italic=!1,children,link=!1,href,target,rel,type="default",variant="body"})=>{const classNames=`text ${variant} ${type}`;return link?(0,jsx_runtime.jsx)("span",{className:classNames,children:(0,jsx_runtime.jsx)("a",{href,target,rel,children:strong?(0,jsx_runtime.jsx)("strong",{children:italic?(0,jsx_runtime.jsx)("em",{children}):children}):italic?(0,jsx_runtime.jsx)("em",{children}):children})}):(0,jsx_runtime.jsx)("span",{className:classNames,children:strong?(0,jsx_runtime.jsx)("strong",{children:italic?(0,jsx_runtime.jsx)("em",{children}):children}):italic?(0,jsx_runtime.jsx)("em",{children}):children})};Text_Text_Text.displayName="Text";const components_Text_Text=Text_Text_Text;try{Text_Text_Text.displayName="Text",Text_Text_Text.__docgenInfo={description:"",displayName:"Text",props:{variant:{defaultValue:{value:"body"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"code"'},{value:'"description"'}]}},strong:{defaultValue:{value:"false"},description:"",name:"strong",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"brand"'},{value:'"default"'}]}},italic:{defaultValue:{value:"false"},description:"",name:"italic",required:!1,type:{name:"boolean"}},link:{defaultValue:{value:"false"},description:"",name:"link",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text_Text_Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.x});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Text/Text.tsx")},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].use[3]!./src/components/Text/Text.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.text{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.text.body{font-size:15px;line-height:24px}.text.body.danger{color:#de340c}.text.body.success{color:#02875a}.text.body.warning{color:#ff991f}.text.body.info{color:#0052cc}.text.body.brand{color:#5e2ea9}.text.h1{font-size:35px;line-height:40px;font-weight:500;letter-spacing:-0.01em;margin-top:52px}.text.h1.danger{color:#de340c}.text.h1.success{color:#02875a}.text.h1.warning{color:#ff991f}.text.h1.info{color:#0052cc}.text.h1.brand{color:#5e2ea9}.text.h2{font-size:29px;line-height:40px;font-weight:600;letter-spacing:-0.01em;margin-top:40px}.text.h2.danger{color:#de340c}.text.h2.success{color:#02875a}.text.h2.warning{color:#ff991f}.text.h2.info{color:#0052cc}.text.h2.brand{color:#5e2ea9}.text.h3{font-size:24px;line-height:28px;font-weight:500;letter-spacing:-0.0008em;margin-top:40px}.text.h3.danger{color:#de340c}.text.h3.success{color:#02875a}.text.h3.warning{color:#ff991f}.text.h3.info{color:#0052cc}.text.h3.brand{color:#5e2ea9}.text.h4{font-size:20px;line-height:24px;font-weight:500;letter-spacing:-0.0008em;margin-top:28px}.text.h4.danger{color:#de340c}.text.h4.success{color:#02875a}.text.h4.warning{color:#ff991f}.text.h4.info{color:#0052cc}.text.h4.brand{color:#5e2ea9}.text.h5{font-size:16px;line-height:20px;font-weight:600;letter-spacing:-0.006em;margin-top:24px}.text.h5.danger{color:#de340c}.text.h5.success{color:#02875a}.text.h5.warning{color:#ff991f}.text.h5.info{color:#0052cc}.text.h5.brand{color:#5e2ea9}.text.h6{font-size:14px;line-height:16px;font-weight:600;letter-spacing:-0.003em;margin-top:16px}.text.h6.danger{color:#de340c}.text.h6.success{color:#02875a}.text.h6.warning{color:#ff991f}.text.h6.info{color:#0052cc}.text.h6.brand{color:#5e2ea9}.text.code{font-family:"Roboto Mono",monospace}.text.code.danger{color:#de340c}.text.code.success{color:#02875a}.text.code.warning{color:#ff991f}.text.code.info{color:#0052cc}.text.code.brand{color:#5e2ea9}.text a{color:#5e2ea9 !important;text-decoration:underline}.text a:hover,.text a:focus,.text a:visited,.text a:active{color:inherit;text-decoration:inherit}',"",{version:3,sources:["webpack://./src/components/Text/Text.scss","webpack://./src/_variables.scss","webpack://./src/_colors.scss"],names:[],mappings:"AAGA,MACE,uICHY,CDKZ,WACE,cCIa,CDHb,gBCYe,CDVf,kBACE,aERA,CFWF,mBACE,aEVE,CFaJ,mBACE,aEfG,CFkBL,gBACE,aEjBC,CFoBH,iBACE,aEKI,CFDR,SACE,cC3BW,CD4BX,gBCnBa,CDoBb,eCXa,CDYb,sBCHgB,CDIhB,eCKY,CDHZ,gBACE,aEpCA,CFuCF,iBACE,aEtCE,CFyCJ,iBACE,aE3CG,CF8CL,cACE,aE7CC,CFgDH,eACE,aEvBI,CF2BR,SACE,cCtDW,CDuDX,gBC/Ca,CDgDb,eCtCa,CDuCb,sBC9BgB,CD+BhB,eCtBY,CDwBZ,gBACE,aEhEA,CFmEF,iBACE,aElEE,CFqEJ,iBACE,aEvEG,CF0EL,cACE,aEzEC,CF4EH,eACE,aEnDI,CFuDR,SACE,cCjFW,CDkFX,gBCzEa,CD0Eb,eCjEa,CDkEb,wBCxDgB,CDyDhB,eCjDY,CDmDZ,gBACE,aE5FA,CF+FF,iBACE,aE9FE,CFiGJ,iBACE,aEnGG,CFsGL,cACE,aErGC,CFwGH,eACE,aE/EI,CFmFR,SACE,cC5GW,CD6GX,gBCpGa,CDqGb,eC5Fa,CD6Fb,wBCpFgB,CDqFhB,eC5EY,CD8EZ,gBACE,aExHA,CF2HF,iBACE,aE1HE,CF6HJ,iBACE,aE/HG,CFkIL,cACE,aEjIC,CFoIH,eACE,aE3GI,CF+GR,SACE,cCvIW,CDwIX,gBC/Ha,CDgIb,eCvHa,CDwHb,uBC/GgB,CDgHhB,eCvGY,CDyGZ,gBACE,aEpJA,CFuJF,iBACE,aEtJE,CFyJJ,iBACE,aE3JG,CF8JL,cACE,aE7JC,CFgKH,eACE,aEvII,CF2IR,SACE,cClKW,CDmKX,gBC1Ja,CD2Jb,eClJa,CDmJb,uBC1IgB,CD2IhB,eClIY,CDoIZ,gBACE,aEhLA,CFmLF,iBACE,aElLE,CFqLJ,iBACE,aEvLG,CF0LL,cACE,aEzLC,CF4LH,eACE,aEnKI,CFuKR,WACE,mCCtMqB,CDwMrB,kBACE,aExMA,CF2MF,mBACE,aE1ME,CF6MJ,mBACE,aE/MG,CFkNL,gBACE,aEjNC,CFoNH,iBACE,aE3LI,CF+LR,QACE,wBAAA,CAEA,yBAAA,CAEA,2DAIE,aAAA,CACA,uBAAA",sourcesContent:['@import "../../variables";\n@import "../../colors";\n\n.text {\n  font-family: $font-family;\n\n  &.body {\n    font-size: $font-size-base;\n    line-height: $line-height-base;\n\n    &.danger {\n      color: $danger;\n    }\n\n    &.success {\n      color: $success;\n    }\n\n    &.warning {\n      color: $warning;\n    }\n\n    &.info {\n      color: $info;\n    }\n\n    &.brand {\n      color: $primary;\n    }\n  }\n\n  &.h1 {\n    font-size: $font-size-h1;\n    line-height: $line-height-h1;\n    font-weight: $font-weight-h1;\n    letter-spacing: $letter-spacing-h1;\n    margin-top: $margin-top-h1;\n\n    &.danger {\n      color: $danger;\n    }\n\n    &.success {\n      color: $success;\n    }\n\n    &.warning {\n      color: $warning;\n    }\n\n    &.info {\n      color: $info;\n    }\n\n    &.brand {\n      color: $primary;\n    }\n  }\n\n  &.h2 {\n    font-size: $font-size-h2;\n    line-height: $line-height-h1;\n    font-weight: $font-weight-h2;\n    letter-spacing: $letter-spacing-h2;\n    margin-top: $margin-top-h2;\n\n    &.danger {\n      color: $danger;\n    }\n\n    &.success {\n      color: $success;\n    }\n\n    &.warning {\n      color: $warning;\n    }\n\n    &.info {\n      color: $info;\n    }\n\n    &.brand {\n      color: $primary;\n    }\n  }\n\n  &.h3 {\n    font-size: $font-size-h3;\n    line-height: $line-height-h3;\n    font-weight: $font-weight-h3;\n    letter-spacing: $letter-spacing-h4;\n    margin-top: $margin-top-h3;\n\n    &.danger {\n      color: $danger;\n    }\n\n    &.success {\n      color: $success;\n    }\n\n    &.warning {\n      color: $warning;\n    }\n\n    &.info {\n      color: $info;\n    }\n\n    &.brand {\n      color: $primary;\n    }\n  }\n\n  &.h4 {\n    font-size: $font-size-h4;\n    line-height: $line-height-h4;\n    font-weight: $font-weight-h4;\n    letter-spacing: $letter-spacing-h4;\n    margin-top: $margin-top-h4;\n\n    &.danger {\n      color: $danger;\n    }\n\n    &.success {\n      color: $success;\n    }\n\n    &.warning {\n      color: $warning;\n    }\n\n    &.info {\n      color: $info;\n    }\n\n    &.brand {\n      color: $primary;\n    }\n  }\n\n  &.h5 {\n    font-size: $font-size-h5;\n    line-height: $line-height-h5;\n    font-weight: $font-weight-h5;\n    letter-spacing: $letter-spacing-h5;\n    margin-top: $margin-top-h5;\n\n    &.danger {\n      color: $danger;\n    }\n\n    &.success {\n      color: $success;\n    }\n\n    &.warning {\n      color: $warning;\n    }\n\n    &.info {\n      color: $info;\n    }\n\n    &.brand {\n      color: $primary;\n    }\n  }\n\n  &.h6 {\n    font-size: $font-size-h6;\n    line-height: $line-height-h6;\n    font-weight: $font-weight-h6;\n    letter-spacing: $letter-spacing-h6;\n    margin-top: $margin-top-h6;\n\n    &.danger {\n      color: $danger;\n    }\n\n    &.success {\n      color: $success;\n    }\n\n    &.warning {\n      color: $warning;\n    }\n\n    &.info {\n      color: $info;\n    }\n\n    &.brand {\n      color: $primary;\n    }\n  }\n\n  &.code {\n    font-family: $font-family-monospaced;\n\n    &.danger {\n      color: $danger;\n    }\n\n    &.success {\n      color: $success;\n    }\n\n    &.warning {\n      color: $warning;\n    }\n\n    &.info {\n      color: $info;\n    }\n\n    &.brand {\n      color: $primary;\n    }\n  }\n\n  a {\n    color: $link-text-color !important;\n    \n    text-decoration: underline;\n\n    &:hover,\n    &:focus,\n    &:visited,\n    &:active {\n      color: inherit;\n      text-decoration: inherit;\n    }\n  }\n}',"// Font family\n$font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n$font-family-monospaced: 'Roboto Mono', monospace;\n\n// Font sizes\n$font-size-h1: 35px;\n$font-size-h2: 29px;\n$font-size-h3: 24px;\n$font-size-h4: 20px;\n$font-size-h5: 16px;\n$font-size-h6: 14px;\n$font-size-base: 15px;\n\n// Line heights\n$line-height-h1: 40px;\n$line-height-h2: 32px;\n$line-height-h3: 28px;\n$line-height-h4: 24px;\n$line-height-h5: 20px;\n$line-height-h6: 16px;\n$line-height-base: 24px;\n\n// Font weights\n$font-weight-h1: 500;\n$font-weight-h2: 600;\n$font-weight-h3: 500;\n$font-weight-h4: 500;\n$font-weight-h5: 600;\n$font-weight-h6: 600;\n$font-weight-base: 400;\n\n// Letter spacing\n$letter-spacing-h1: -0.01em;\n$letter-spacing-h2: -0.01em;\n$letter-spacing-h3: -0.01em;\n$letter-spacing-h4: -0.0008em;\n$letter-spacing-h5: -0.006em;\n$letter-spacing-h6: -0.003em;\n$letter-spacing-base: 0;\n\n// Margins\n$margin-top-h1: 52px;\n$margin-top-h2: 40px;\n$margin-top-h3: 40px;\n$margin-top-h4: 28px;\n$margin-top-h5: 24px;\n$margin-top-h6: 16px;\n$margin-top-base: 0;\n\n// Borders\n$border-radius-small: 2.5px;\n$border-radius-circle: 50%;\n\n$border-width-thin: 1px;\n$border-width-thick: 2px;\n\n$border-style-solid: solid;\n$border-style-dashed: dashed;\n$border-style-dotted: dotted;","@use 'sass:math';\n\n// Base Colors\n$red: #de340c;\n$orange: #ff991f;\n$green: #02875a;\n$blue: #0052cc;\n$purple: #5243aa;\n$cyan: #00b8d9;\n$gray: #a4adba;\n\n$gray-10: #f5f7fa;\n$gray-20: #dddee1;\n$gray-30: #bac2cc;\n$gray-40: #a1abb6;\n$gray-50: #8a97a3;\n$gray-60: #6c757d;\n$gray-70: #4e5b66;\n$gray-80: #364047;\n$gray-90: #1f2933;\n\n$black-10: #f2f2f2;\n$black-20: #e5e5e5;\n$black-30: #cccccc;\n$black-40: #b3b3b3;\n$black-50: #999999;\n$black-60: #808080;\n$black-70: #666666;\n$black-80: #4d4d4d;\n$black-90: #333333;\n\n// Brand Colors\n$primary: #5E2EA9;\n$secondary: #EB5C5C;\n$tertiary: #FCCC61;\n\n// Neutral Colors\n$dark: #0b0514;\n$light: #ffffff;\n\n// Shades of Base Colors\n$red-10: mix($red, $gray-10, 10%);\n$red-20: mix($red, $gray-10, 20%);\n$red-30: mix($red, $gray-10, 30%);\n$red-40: mix($red, $gray-10, 40%);\n$red-50: mix($red, $gray-10, 50%);\n$red-60: mix($red, $gray-10, 60%);\n$red-70: mix($red, $gray-10, 70%);\n$red-80: mix($red, $gray-10, 80%);\n$red-90: mix($red, $gray-10, 90%);\n\n$orange-10: mix($orange, $gray-10, 10%);\n$orange-20: mix($orange, $gray-10, 20%);\n$orange-30: mix($orange, $gray-10, 30%);\n$orange-40: mix($orange, $gray-10, 40%);\n$orange-50: mix($orange, $gray-10, 50%);\n$orange-60: mix($orange, $gray-10, 60%);\n$orange-70: mix($orange, $gray-10, 70%);\n$orange-80: mix($orange, $gray-10, 80%);\n$orange-90: mix($orange, $gray-10, 90%);\n\n$green-10: mix($green, $gray-10, 10%);\n$green-20: mix($green, $gray-10, 20%);\n$green-30: mix($green, $gray-10, 30%);\n$green-40: mix($green, $gray-10, 40%);\n$green-50: mix($green, $gray-10, 50%);\n$green-60: mix($green, $gray-10, 60%);\n$green-70: mix($green, $gray-10, 70%);\n$green-80: mix($green, $gray-10, 80%);\n$green-90: mix($green, $gray-10, 90%);\n\n$blue-10: mix($blue, $gray-10, 10%);\n$blue-20: mix($blue, $gray-10, 20%);\n$blue-30: mix($blue, $gray-10, 30%);\n$blue-40: mix($blue, $gray-10, 40%);\n$blue-50: mix($blue, $gray-10, 50%);\n$blue-60: mix($blue, $gray-10, 60%);\n$blue-70: mix($blue, $gray-10, 70%);\n$blue-80: mix($blue, $gray-10, 80%);\n$blue-90: mix($blue, $gray-10, 90%);\n\n$purple-10: mix($purple, $gray-10, 10%);\n$purple-20: mix($purple, $gray-10, 20%);\n$purple-30: mix($purple, $gray-10, 30%);\n$purple-40: mix($purple, $gray-10, 40%);\n$purple-50: mix($purple, $gray-10, 50%);\n$purple-60: mix($purple, $gray-10, 60%);\n$purple-70: mix($purple, $gray-10, 70%);\n$purple-80: mix($purple, $gray-10, 80%);\n$purple-90: mix($purple, $gray-10, 90%);\n\n$cyan-10: mix($cyan, $gray-10, 10%);\n$cyan-20: mix($cyan, $gray-10, 20%);\n$cyan-30: mix($cyan, $gray-10, 30%);\n$cyan-40: mix($cyan, $gray-10, 40%);\n$cyan-50: mix($cyan, $gray-10, 50%);\n$cyan-60: mix($cyan, $gray-10, 60%);\n$cyan-70: mix($cyan, $gray-10, 70%);\n$cyan-80: mix($cyan, $gray-10, 80%);\n$cyan-90: mix($cyan, $gray-10, 90%);\n\n// Semantic colors\n$danger: $red;\n$warning: $orange;\n$success: $green;\n$info: $blue;\n\n// Darken and lighten shades for semantic colors\n$danger-dark: darken($danger, 10%);\n$danger-light: lighten($danger, 10%);\n\n$warning-dark: darken($warning, 10%);\n$warning-light: lighten($warning, 10%);\n\n$success-dark: darken($success, 10%);\n$success-light: lighten($success, 10%);\n\n$info-dark: darken($info, 10%);\n$info-light: lighten($info, 10%);\n\n// State colors\n$enable: 100%;\n$disable: 50%;\n$focus: 75%;\n$hover: 90%;\n\n// Generate base color states\n$red-enable: rgba($red, $enable);\n$red-disable: rgba($red, $disable);\n$red-focus: rgba($red, $focus);\n$red-hover: rgba($red, $hover);\n\n$orange-enable: rgba($orange, $enable);\n$orange-disable: rgba($orange, $disable);\n$orange-focus: rgba($orange, $focus);\n$orange-hover: rgba($orange, $hover);\n\n$green-enable: rgba($green, $enable);\n$green-disable: rgba($green, $disable);\n$green-focus: rgba($green, $focus);\n$green-hover: rgba($green, $hover);\n\n$blue-enable: rgba($blue, $enable);\n$blue-disable: rgba($blue, $disable);\n$blue-focus: rgba($blue, $focus);\n$blue-hover: rgba($blue, $hover);\n\n$purple-enable: rgba($purple, $enable);\n$purple-disable: rgba($purple, $disable);\n$purple-focus: rgba($purple, $focus);\n$purple-hover: rgba($purple, $hover);\n\n$cyan-enable: rgba($cyan, $enable);\n$cyan-disable: rgba($cyan, $disable);\n$cyan-focus: rgba($cyan, $focus);\n$cyan-hover: rgba($cyan, $hover);\n\n$gray-enable: rgba($gray, $enable);\n$gray-disable: rgba($gray, $disable);\n$gray-focus: rgba($gray, $focus);\n$gray-hover: rgba($gray, $hover);\n\n// Generate brand color states\n$primary-enable: rgba($primary, $enable);\n$primary-disable: rgba($primary, $disable);\n$primary-focus: rgba($primary, $focus);\n$primary-hover: rgba($primary, $hover);\n\n$secondary-enable: rgba($secondary, $enable);\n$secondary-disable: rgba($secondary, $disable);\n$secondary-focus: rgba($secondary, $focus);\n$secondary-hover: rgba($secondary, $hover);\n\n$tertiary-enable: rgba($tertiary, $enable);\n$tertiary-disable: rgba($tertiary, $disable);\n$tertiary-focus: rgba($tertiary, $focus);\n$tertiary-hover: rgba($tertiary, $hover);\n\n$danger-enable: rgba($danger, $enable);\n$danger-disable: rgba($danger, $disable);\n$danger-focus: rgba($danger, $focus);\n$danger-hover: rgba($danger, $hover);\n\n$success-enable: rgba($success, $enable);\n$success-disable: rgba($success, $disable);\n$success-focus: rgba($success, $focus);\n$success-hover: rgba($success, $hover);\n\n$warning-enable: rgba($warning, $enable);\n$warning-disable: rgba($warning, $disable);\n$warning-focus: rgba($warning, $focus);\n$warning-hover: rgba($warning, $hover);\n\n$info-enable: rgba($info, $enable);\n$info-disable: rgba($info, $disable);\n$info-focus: rgba($info, $focus);\n$info-hover: rgba($info, $hover);\n\n// Generate text color\n$text-dark: #0b0514;\n$text-light: #ffffff;\n$text-disabled: #a4adba;\n$text-secondary: #5243aa;\n\n$text-color: $dark;\n$link-text-color: $primary;\n\n// calculate based on background color\n\n@function get-contrast-color($bg-color) {\n    $r: red($bg-color);\n    $g: green($bg-color);\n    $b: blue($bg-color);\n    $yiq: math.div(($r * 299) + ($g * 587) + ($b * 114), 1000) or calc((($r * 299) + ($g * 587) + ($b * 114)) / 1000);\n    \n    @if ($yiq >= 128) {\n      @return $text-dark;\n    } @else {\n      @return $text-light;\n    }\n  }\n  \n// Border ColorsYy\n$border-color: $gray-30;\n$border-hover-color: $gray-50;\n\n// Shadow Colors\n$shadow-color: rgba($text-dark, 0.2);\n$shadow-hover-color: rgba($text-dark, 0.4);"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);