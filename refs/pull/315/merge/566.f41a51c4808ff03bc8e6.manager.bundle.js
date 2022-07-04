"use strict";(self.webpackChunk_dts_stn_decd_design_system=self.webpackChunk_dts_stn_decd_design_system||[]).push([[566],{48566:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SyntaxHighlighter:function(){return SyntaxHighlighter},createCopyToClipboardFunction:function(){return createCopyToClipboardFunction},default:function(){return SyntaxHighlighter}});__webpack_require__(35666),__webpack_require__(41539),__webpack_require__(69720),__webpack_require__(19601),__webpack_require__(73210),__webpack_require__(39714),__webpack_require__(82526),__webpack_require__(41817),__webpack_require__(32165),__webpack_require__(66992),__webpack_require__(78783),__webpack_require__(33948),__webpack_require__(47042),__webpack_require__(68309),__webpack_require__(91038),__webpack_require__(74916);var index_f6d446d8=__webpack_require__(91068),react=__webpack_require__(67294),esm=__webpack_require__(23827),dist_esm=__webpack_require__(65316),jsx=__webpack_require__(96412),prism_jsx=__webpack_require__.n(jsx)(),bash=__webpack_require__(6979),prism_bash=__webpack_require__.n(bash)(),css=__webpack_require__(12049),prism_css=__webpack_require__.n(css)(),js_extras=__webpack_require__(46155),prism_js_extras=__webpack_require__.n(js_extras)(),json=__webpack_require__(45950),prism_json=__webpack_require__.n(json)(),graphql=__webpack_require__(94055),prism_graphql=__webpack_require__.n(graphql)(),markup=__webpack_require__(2717),prism_markup=__webpack_require__.n(markup)(),markdown=__webpack_require__(90542),prism_markdown=__webpack_require__.n(markdown)(),yaml=__webpack_require__(65039),prism_yaml=__webpack_require__.n(yaml)(),tsx=__webpack_require__(87041),prism_tsx=__webpack_require__.n(tsx)(),typescript=__webpack_require__(4979),prism_typescript=__webpack_require__.n(typescript)(),prism_light=__webpack_require__(13216);__webpack_require__(35032),__webpack_require__(80129);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var syntaxhighlighter_75381027_navigator=index_f6d446d8.w.navigator,syntaxhighlighter_75381027_document=index_f6d446d8.w.document,globalWindow=index_f6d446d8.w.window;prism_light.Z.registerLanguage("jsextra",prism_js_extras),prism_light.Z.registerLanguage("jsx",prism_jsx),prism_light.Z.registerLanguage("json",prism_json),prism_light.Z.registerLanguage("yml",prism_yaml),prism_light.Z.registerLanguage("md",prism_markdown),prism_light.Z.registerLanguage("bash",prism_bash),prism_light.Z.registerLanguage("css",prism_css),prism_light.Z.registerLanguage("html",prism_markup),prism_light.Z.registerLanguage("tsx",prism_tsx),prism_light.Z.registerLanguage("typescript",prism_typescript),prism_light.Z.registerLanguage("graphql",prism_graphql);var themedSyntax=(0,index_f6d446d8.m)(2)((function(theme){return Object.entries(theme.code||{}).reduce((function(acc,_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],val=_ref2[1];return Object.assign(Object.assign({},acc),function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}({},"* .".concat(key),val))}),{})})),copyToClipboard=createCopyToClipboardFunction();function createCopyToClipboardFunction(){var _this=this;return(null==syntaxhighlighter_75381027_navigator?void 0:syntaxhighlighter_75381027_navigator.clipboard)?function(text){return syntaxhighlighter_75381027_navigator.clipboard.writeText(text)}:function(text){return(0,index_f6d446d8._)(_this,void 0,void 0,regeneratorRuntime.mark((function _callee(){var tmp,focus;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:tmp=syntaxhighlighter_75381027_document.createElement("TEXTAREA"),focus=syntaxhighlighter_75381027_document.activeElement,tmp.value=text,syntaxhighlighter_75381027_document.body.appendChild(tmp),tmp.select(),syntaxhighlighter_75381027_document.execCommand("copy"),syntaxhighlighter_75381027_document.body.removeChild(tmp),focus.focus();case 8:case"end":return _context.stop()}}),_callee)})))}}var Wrapper=dist_esm.styled.div((function(_ref3){return{position:"relative",overflow:"hidden",color:_ref3.theme.color.defaultText}}),(function(_ref4){var theme=_ref4.theme;return _ref4.bordered?{border:"1px solid ".concat(theme.appBorderColor),borderRadius:theme.borderRadius,background:theme.background.content}:{}})),Scroller=(0,dist_esm.styled)((function(_ref5){var children=_ref5.children,className=_ref5.className;return react.createElement(index_f6d446d8.S,{horizontal:!0,vertical:!0,className:className},children)}))({position:"relative"},(function(_ref6){var theme=_ref6.theme;return themedSyntax(theme)})),Pre=dist_esm.styled.pre((function(_ref7){var theme=_ref7.theme;return{display:"flex",justifyContent:"flex-start",margin:0,padding:_ref7.padded?theme.layoutMargin:0}})),Code=dist_esm.styled.div((function(_ref8){return{flex:1,paddingLeft:2,paddingRight:_ref8.theme.layoutMargin,opacity:1}})),SyntaxHighlighter=function SyntaxHighlighter(_a){var children=_a.children,_a$language=_a.language,language=void 0===_a$language?"jsx":_a$language,_a$copyable=_a.copyable,copyable=void 0!==_a$copyable&&_a$copyable,_a$bordered=_a.bordered,bordered=void 0!==_a$bordered&&_a$bordered,_a$padded=_a.padded,padded=void 0!==_a$padded&&_a$padded,_a$format=_a.format,format=void 0===_a$format||_a$format,_a$formatter=_a.formatter,formatter=void 0===_a$formatter?null:_a$formatter,_a$className=_a.className,className=void 0===_a$className?null:_a$className,_a$showLineNumbers=_a.showLineNumbers,showLineNumbers=void 0!==_a$showLineNumbers&&_a$showLineNumbers,rest=(0,index_f6d446d8.a)(_a,["children","language","copyable","bordered","padded","format","formatter","className","showLineNumbers"]);if("string"!=typeof children||!children.trim())return null;var highlightableCode=formatter?formatter(format,children):children.trim(),_useState2=_slicedToArray((0,react.useState)(!1),2),copied=_useState2[0],setCopied=_useState2[1],onClick=(0,react.useCallback)((function(e){e.preventDefault();var selectedText=globalWindow.getSelection().toString(),textToCopy="click"!==e.type&&selectedText?selectedText:highlightableCode;copyToClipboard(textToCopy).then((function(){setCopied(!0),globalWindow.setTimeout((function(){return setCopied(!1)}),1500)})).catch(esm.kg.error)}),[]);return react.createElement(Wrapper,{bordered:bordered,padded:padded,className:className,onCopyCapture:onClick},react.createElement(Scroller,null,react.createElement(prism_light.Z,Object.assign({padded:padded||bordered,language:language,showLineNumbers:showLineNumbers,showInlineLineNumbers:showLineNumbers,useInlineStyles:!1,PreTag:Pre,CodeTag:Code,lineNumberContainerStyle:{}},rest),highlightableCode)),copyable?react.createElement(index_f6d446d8.A,{actionItems:[{title:copied?"Copied":"Copy",onClick:onClick}]}):null)}}}]);