"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4171],{3905:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>m});var i=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,i,a=function(t,n){if(null==t)return{};var e,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var c=i.createContext({}),l=function(t){var n=i.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},p=function(t){var n=l(t.components);return i.createElement(c.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(t,n){var e=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),h=l(e),m=a,f=h["".concat(c,".").concat(m)]||h[m]||u[m]||r;return e?i.createElement(f,o(o({ref:n},p),{},{components:e})):i.createElement(f,o({ref:n},p))}));function m(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var r=e.length,o=new Array(r);o[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var l=2;l<r;l++)o[l]=e[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,e)}h.displayName="MDXCreateElement"},5076:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=e(7462),a=(e(7294),e(3905));const r={slug:"Javascript",title:"Javascript\u7231\u5fc3\u4ee3\u7801",authors:{name:"\u8303\u8fdc\u6607",title:"\u524d\u7aef\u5f00\u53d1\u8005",url:"https://github.com/Fanyuansheng",image_url:"https://avatars.githubusercontent.com/u/92991772?v=4"},tags:["Javascript","docusaurus"]},o="Javascript\u7231\u5fc3\u4ee3\u7801",s={permalink:"/blog/Javascript",editUrl:"https://github.com/Fanyuansheng/Fanyuansheng.github.io/blog/2022-11-28-daima.md",source:"@site/blog/2022-11-28-daima.md",title:"Javascript\u7231\u5fc3\u4ee3\u7801",description:"",date:"2022-11-28T00:00:00.000Z",formattedDate:"2022\u5e7411\u670828\u65e5",tags:[{label:"Javascript",permalink:"/blog/tags/javascript"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:4.42,hasTruncateMarker:!1,authors:[{name:"\u8303\u8fdc\u6607",title:"\u524d\u7aef\u5f00\u53d1\u8005",url:"https://github.com/Fanyuansheng",image_url:"https://avatars.githubusercontent.com/u/92991772?v=4",imageURL:"https://avatars.githubusercontent.com/u/92991772?v=4"}],frontMatter:{slug:"Javascript",title:"Javascript\u7231\u5fc3\u4ee3\u7801",authors:{name:"\u8303\u8fdc\u6607",title:"\u524d\u7aef\u5f00\u53d1\u8005",url:"https://github.com/Fanyuansheng",image_url:"https://avatars.githubusercontent.com/u/92991772?v=4",imageURL:"https://avatars.githubusercontent.com/u/92991772?v=4"},tags:["Javascript","docusaurus"]},prevItem:{title:"C\u8bed\u8a00\u7231\u5fc3\u4ee3\u7801",permalink:"/blog/C"},nextItem:{title:"python\u7248\u7231\u5fc3\u4ee3\u7801",permalink:"/blog/python"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l};function u(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,i.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\n<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">\n<HTML>\n <HEAD>\n  <TITLE> heart </TITLE>\n  <META NAME="Generator" CONTENT="EditPlus">\n  <META NAME="Author" CONTENT="">\n  <META NAME="Keywords" CONTENT="">\n  <META NAME="Description" CONTENT="">\n  <style>\n  html, body {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  background: white;\n}\ncanvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n  </style>\n </HEAD>\n\n <BODY>\n  <canvas id="pinkboard"></canvas>\n  <script>\n  /*\n * Settings\n */\nvar settings = {\n  particles: {\n    length:   500, // maximum amount of particles\n    duration:   2, // particle duration in sec\n    velocity: 100, // particle velocity in pixels/sec\n    effect: -0.75, // play with this for a nice effect\n    size:      30, // particle size in pixels\n  },\n};\n\n/*\n * RequestAnimationFrame polyfill by Erik M\xf6ller\n */\n(function(){var b=0;var c=["ms","moz","webkit","o"];for(var a=0;a<c.length&&!window.requestAnimationFrame;++a){window.requestAnimationFrame=window[c[a]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[c[a]+"CancelAnimationFrame"]||window[c[a]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(h,e){var d=new Date().getTime();var f=Math.max(0,16-(d-b));var g=window.setTimeout(function(){h(d+f)},f);b=d+f;return g}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(d){clearTimeout(d)}}}());\n\n/*\n * Point class\n */\nvar Point = (function() {\n  function Point(x, y) {\n    this.x = (typeof x !== \'undefined\') ? x : 0;\n    this.y = (typeof y !== \'undefined\') ? y : 0;\n  }\n  Point.prototype.clone = function() {\n    return new Point(this.x, this.y);\n  };\n  Point.prototype.length = function(length) {\n    if (typeof length == \'undefined\')\n      return Math.sqrt(this.x * this.x + this.y * this.y);\n    this.normalize();\n    this.x *= length;\n    this.y *= length;\n    return this;\n  };\n  Point.prototype.normalize = function() {\n    var length = this.length();\n    this.x /= length;\n    this.y /= length;\n    return this;\n  };\n  return Point;\n})();\n\n/*\n * Particle class\n */\nvar Particle = (function() {\n  function Particle() {\n    this.position = new Point();\n    this.velocity = new Point();\n    this.acceleration = new Point();\n    this.age = 0;\n  }\n  Particle.prototype.initialize = function(x, y, dx, dy) {\n    this.position.x = x;\n    this.position.y = y;\n    this.velocity.x = dx;\n    this.velocity.y = dy;\n    this.acceleration.x = dx * settings.particles.effect;\n    this.acceleration.y = dy * settings.particles.effect;\n    this.age = 0;\n  };\n  Particle.prototype.update = function(deltaTime) {\n    this.position.x += this.velocity.x * deltaTime;\n    this.position.y += this.velocity.y * deltaTime;\n    this.velocity.x += this.acceleration.x * deltaTime;\n    this.velocity.y += this.acceleration.y * deltaTime;\n    this.age += deltaTime;\n  };\n  Particle.prototype.draw = function(context, image) {\n    function ease(t) {\n      return (--t) * t * t + 1;\n    }\n    var size = image.width * ease(this.age / settings.particles.duration);\n    context.globalAlpha = 1 - this.age / settings.particles.duration;\n    context.drawImage(image, this.position.x - size / 2, this.position.y - size / 2, size, size);\n  };\n  return Particle;\n})();\n\n/*\n * ParticlePool class\n */\nvar ParticlePool = (function() {\n  var particles,\n      firstActive = 0,\n      firstFree   = 0,\n      duration    = settings.particles.duration;\n  \n  function ParticlePool(length) {\n    // create and populate particle pool\n    particles = new Array(length);\n    for (var i = 0; i < particles.length; i++)\n      particles[i] = new Particle();\n  }\n  ParticlePool.prototype.add = function(x, y, dx, dy) {\n    particles[firstFree].initialize(x, y, dx, dy);\n    \n    // handle circular queue\n    firstFree++;\n    if (firstFree   == particles.length) firstFree   = 0;\n    if (firstActive == firstFree       ) firstActive++;\n    if (firstActive == particles.length) firstActive = 0;\n  };\n  ParticlePool.prototype.update = function(deltaTime) {\n    var i;\n    \n    // update active particles\n    if (firstActive < firstFree) {\n      for (i = firstActive; i < firstFree; i++)\n        particles[i].update(deltaTime);\n    }\n    if (firstFree < firstActive) {\n      for (i = firstActive; i < particles.length; i++)\n        particles[i].update(deltaTime);\n      for (i = 0; i < firstFree; i++)\n        particles[i].update(deltaTime);\n    }\n    \n    // remove inactive particles\n    while (particles[firstActive].age >= duration && firstActive != firstFree) {\n      firstActive++;\n      if (firstActive == particles.length) firstActive = 0;\n    }\n    \n    \n  };\n  ParticlePool.prototype.draw = function(context, image) {\n    // draw active particles\n    if (firstActive < firstFree) {\n      for (i = firstActive; i < firstFree; i++)\n        particles[i].draw(context, image);\n    }\n    if (firstFree < firstActive) {\n      for (i = firstActive; i < particles.length; i++)\n        particles[i].draw(context, image);\n      for (i = 0; i < firstFree; i++)\n        particles[i].draw(context, image);\n    }\n  };\n  return ParticlePool;\n})();\n\n/*\n * Putting it all together\n */\n(function(canvas) {\n  var context = canvas.getContext(\'2d\'),\n      particles = new ParticlePool(settings.particles.length),\n      particleRate = settings.particles.length / settings.particles.duration, // particles/sec\n      time;\n  \n  // get point on heart with -PI <= t <= PI\n  function pointOnHeart(t) {\n    return new Point(\n      160 * Math.pow(Math.sin(t), 3),\n      130 * Math.cos(t) - 50 * Math.cos(2 * t) - 20 * Math.cos(3 * t) - 10 * Math.cos(4 * t) + 25\n    );\n  }\n  \n  // creating the particle image using a dummy canvas\n  var image = (function() {\n    var canvas  = document.createElement(\'canvas\'),\n        context = canvas.getContext(\'2d\');\n    canvas.width  = settings.particles.size;\n    canvas.height = settings.particles.size;\n    // helper function to create the path\n    function to(t) {\n      var point = pointOnHeart(t);\n      point.x = settings.particles.size / 2 + point.x * settings.particles.size / 350;\n      point.y = settings.particles.size / 2 - point.y * settings.particles.size / 350;\n      return point;\n    }\n    // create the path\n    context.beginPath();\n    var t = -Math.PI;\n    var point = to(t);\n    context.moveTo(point.x, point.y);\n    while (t < Math.PI) {\n      t += 0.01; // baby steps!\n      point = to(t);\n      context.lineTo(point.x, point.y);\n    }\n    context.closePath();\n    // create the fill\n    context.fillStyle = \'red\';\n    context.fill();\n    // create the image\n    var image = new Image();\n    image.src = canvas.toDataURL();\n    return image;\n  })();\n  \n  // render that thing!\n  function render() {\n    // next animation frame\n    requestAnimationFrame(render);\n    \n    // update time\n    var newTime   = new Date().getTime() / 1000,\n        deltaTime = newTime - (time || newTime);\n    time = newTime;\n    \n    // clear canvas\n    context.clearRect(0, 0, canvas.width, canvas.height);\n    \n    // create new particles\n    var amount = particleRate * deltaTime;\n    for (var i = 0; i < amount; i++) {\n      var pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());\n      var dir = pos.clone().length(settings.particles.velocity);\n      particles.add(canvas.width / 2 + pos.x, canvas.height / 2 - pos.y, dir.x, -dir.y);\n    }\n    \n    // update and draw particles\n    particles.update(deltaTime);\n    particles.draw(context, image);\n  }\n  \n  // handle (re-)sizing of the canvas\n  function onResize() {\n    canvas.width  = canvas.clientWidth;\n    canvas.height = canvas.clientHeight;\n  }\n  window.onresize = onResize;\n  \n  // delay rendering bootstrap\n  setTimeout(function() {\n    onResize();\n    render();\n  }, 10);\n})(document.getElementById(\'pinkboard\'));\n  <\/script>\n </BODY>\n</HTML>\n')))}u.isMDXComponent=!0}}]);