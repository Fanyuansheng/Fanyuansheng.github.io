"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7996],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),s=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,u=f(t,["components","mdxType","originalType","parentName"]),p=s(n),y=a,m=p["".concat(i,".").concat(y)]||p[y]||c[y]||o;return n?r.createElement(m,l(l({ref:e},u),{},{components:n})):r.createElement(m,l({ref:e},u))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=p;var f={};for(var i in e)hasOwnProperty.call(e,i)&&(f[i]=e[i]);f.originalType=t,f.mdxType="string"==typeof t?t:a,l[1]=f;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2883:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>f,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={slug:"C",title:"C\u8bed\u8a00\u7231\u5fc3\u4ee3\u7801",authors:{name:"\u8303\u8fdc\u6607",title:"\u524d\u7aef\u5f00\u53d1\u8005",url:"https://github.com/Fanyuansheng",image_url:"https://avatars.githubusercontent.com/u/92991772?v=4"},tags:["C"]},l="C\u8bed\u8a00\u7231\u5fc3\u4ee3\u7801",f={permalink:"/blog/C",editUrl:"https://github.com/Fanyuansheng/Fanyuansheng.github.io/blog/2022-11-28-c.md",source:"@site/blog/2022-11-28-c.md",title:"C\u8bed\u8a00\u7231\u5fc3\u4ee3\u7801",description:"",date:"2022-11-28T00:00:00.000Z",formattedDate:"2022\u5e7411\u670828\u65e5",tags:[{label:"C",permalink:"/blog/tags/c"}],readingTime:1.45,hasTruncateMarker:!1,authors:[{name:"\u8303\u8fdc\u6607",title:"\u524d\u7aef\u5f00\u53d1\u8005",url:"https://github.com/Fanyuansheng",image_url:"https://avatars.githubusercontent.com/u/92991772?v=4",imageURL:"https://avatars.githubusercontent.com/u/92991772?v=4"}],frontMatter:{slug:"C",title:"C\u8bed\u8a00\u7231\u5fc3\u4ee3\u7801",authors:{name:"\u8303\u8fdc\u6607",title:"\u524d\u7aef\u5f00\u53d1\u8005",url:"https://github.com/Fanyuansheng",image_url:"https://avatars.githubusercontent.com/u/92991772?v=4",imageURL:"https://avatars.githubusercontent.com/u/92991772?v=4"},tags:["C"]},prevItem:{title:"VSCode\u7ec8\u7aef\u5e38\u7528\u547d\u4ee4\u548c\u5feb\u6377\u952e",permalink:"/blog/VSCode"},nextItem:{title:"Javascript\u7231\u5fc3\u4ee3\u7801",permalink:"/blog/Javascript"}},i={authorsImageUrls:[void 0]},s=[],u={toc:s};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#include <stdio.h>\n#include <math.h> \n#include <windows.h>\n#include <tchar.h>\n\n float f(float x, float y, float z){\n float a = x * x + 9.0f / 4.0f * y * y + z * z - 1;\n return a * a * a - x * x * z * z * z - 9.0f / 80.0f * y * y * z * z * z; \n}\n\n float h(float x, float z) {\n   for (float y = 1.0f; y >= 0.0f; y -= 0.001f)\n if (f(x, y, z)  <= 0.0f) \n return y;\n return 0.0f;\n }\n \n  int main(){\n  HANDLE o = GetStdHandle(STD_OUTPUT_HANDLE);\n  _TCHAR buffer[25][80] = { _T(' ') };\n  _TCHAR ramp[] = _T(\".:-=+*#%@\");\n  \n  for (float t = 0.0f;; t += 0.1f) {\n     int sy = 0;\n     float s = sinf(t);\n     float a = s * s * s * s * 0.2f;\n     for (float z = 1.3f; z > -1.2f; z -= 0.1f){\n     _TCHAR* p = &buffer[sy++][0];\n     float tz = z * (1.2f - a);\n     for (float x = -1.5; x < 1.5f; x += 0.05f) {\n     float tx = x * (1.2f + a);\n     float v = f(tx, 0.0f, tz);\n     if (v <= 0.0f){\n     float y0 = h(tx, tz);\n     float ny = 0.01f;\n     float nx = h(tx + ny, tz) - y0;\n     float nz = h(tx, tz + ny) - y0;\n     float nd = 1.0f / sqrtf(nx * nx + ny * ny + nz * nz);\n     float d = (nx + ny - nz) * nd * 0.5f + 0.5f;\n     *p++ = ramp[(int)(d * 5.0f)];\n }\n else\n     *p++ = ' ';\n }\n }\n \n     for (sy = 0; sy < 25; sy++){\n     COORD coord = { 0, sy };\n     SetConsoleCursorPosition(o, coord);\n     WriteConsole(o, buffer[sy], 79, NULL,0);\n }\n Sleep(33);\n }\n }\n\n")))}c.isMDXComponent=!0}}]);