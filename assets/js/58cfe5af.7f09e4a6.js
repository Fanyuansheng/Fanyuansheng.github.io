"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8370],{3905:(n,e,t)=>{t.d(e,{Zo:()=>_,kt:()=>u});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=r.createContext({}),p=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},_=function(n){var e=p(n.components);return r.createElement(l.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,l=n.parentName,_=s(n,["components","mdxType","originalType","parentName"]),f=p(t),u=a,d=f["".concat(l,".").concat(u)]||f[u]||c[u]||o;return t?r.createElement(d,i(i({ref:e},_),{},{components:t})):r.createElement(d,i({ref:e},_))}));function u(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5702:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={slug:"python",title:"python\u7248\u7231\u5fc3\u4ee3\u7801",authors:{name:"\u8303\u8fdc\u6607",title:"\u524d\u7aef\u5f00\u53d1\u8005",url:"https://github.com/Fanyuansheng",image_url:"https://avatars.githubusercontent.com/u/92991772?v=4"},tags:["python","docusaurus"]},i="python\u7248\u7231\u5fc3\u4ee3\u7801",s={permalink:"/blog/python",editUrl:"https://github.com/Fanyuansheng/Fanyuansheng.github.io/blog/2022-11-28-python.md",source:"@site/blog/2022-11-28-python.md",title:"python\u7248\u7231\u5fc3\u4ee3\u7801",description:"",date:"2022-11-28T00:00:00.000Z",formattedDate:"2022\u5e7411\u670828\u65e5",tags:[{label:"python",permalink:"/blog/tags/python"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:4.37,hasTruncateMarker:!1,authors:[{name:"\u8303\u8fdc\u6607",title:"\u524d\u7aef\u5f00\u53d1\u8005",url:"https://github.com/Fanyuansheng",image_url:"https://avatars.githubusercontent.com/u/92991772?v=4",imageURL:"https://avatars.githubusercontent.com/u/92991772?v=4"}],frontMatter:{slug:"python",title:"python\u7248\u7231\u5fc3\u4ee3\u7801",authors:{name:"\u8303\u8fdc\u6607",title:"\u524d\u7aef\u5f00\u53d1\u8005",url:"https://github.com/Fanyuansheng",image_url:"https://avatars.githubusercontent.com/u/92991772?v=4",imageURL:"https://avatars.githubusercontent.com/u/92991772?v=4"},tags:["python","docusaurus"]},prevItem:{title:"Javascript\u7231\u5fc3\u4ee3\u7801",permalink:"/blog/Javascript"},nextItem:{title:"Git\u547d\u4ee4",permalink:"/blog/hello"}},l={authorsImageUrls:[void 0]},p=[],_={toc:p};function c(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},_,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import random\nfrom math import sin, cos, pi, log\nfrom tkinter import *\nimport ctypes\n\nuser32 = ctypes.windll.user32\nCANVAS_WIDTH = user32.GetSystemMetrics(0)  # \u753b\u5e03\u7684\u5bbd\nCANVAS_HEIGHT = user32.GetSystemMetrics(1)  # \u753b\u5e03\u7684\u9ad8\nCANVAS_CENTER_X = CANVAS_WIDTH / 2  # \u753b\u5e03\u4e2d\u5fc3\u7684X\u8f74\u5750\u6807\nCANVAS_CENTER_Y = CANVAS_HEIGHT / 2  # \u753b\u5e03\u4e2d\u5fc3\u7684Y\u8f74\u5750\u6807\nIMAGE_ENLARGE = 11  # \u653e\u5927\u6bd4\u4f8b\nHEART_COLOR = "#ff2121"  # \u5fc3\u7684\u989c\u8272\uff0c\u8fd9\u4e2a\u662f\u4e2d\u56fd\u7ea2\n\n\ndef heart_function(t, shrink_ratio: float = IMAGE_ENLARGE):\n    """\n    \u201c\u7231\u5fc3\u51fd\u6570\u751f\u6210\u5668\u201d\n    :param shrink_ratio: \u653e\u5927\u6bd4\u4f8b\n    :param t: \u53c2\u6570\n    :return: \u5750\u6807\n    """\n    # \u57fa\u7840\u51fd\u6570\n    x = 16 * (sin(t) ** 3)\n    y = -(13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t))\n\n    # \u653e\u5927\n    x *= shrink_ratio\n    y *= shrink_ratio\n\n    # \u79fb\u5230\u753b\u5e03\u4e2d\u592e\n    x += CANVAS_CENTER_X\n    y += CANVAS_CENTER_Y\n\n    return int(x), int(y)\n\n\ndef scatter_inside(x, y, beta=0.15):\n    """\n    \u968f\u673a\u5185\u90e8\u6269\u6563\n    :param x: \u539fx\n    :param y: \u539fy\n    :param beta: \u5f3a\u5ea6\n    :return: \u65b0\u5750\u6807\n    """\n    ratio_x = - beta * log(random.random())\n    ratio_y = - beta * log(random.random())\n\n    dx = ratio_x * (x - CANVAS_CENTER_X)\n    dy = ratio_y * (y - CANVAS_CENTER_Y)\n\n    return x - dx, y - dy\n\n\ndef shrink(x, y, ratio):\n    """\n    \u6296\u52a8\n    :param x: \u539fx\n    :param y: \u539fy\n    :param ratio: \u6bd4\u4f8b\n    :return: \u65b0\u5750\u6807\n    """\n    force = -1 / (((x - CANVAS_CENTER_X) ** 2 + (y - CANVAS_CENTER_Y) ** 2) ** 0.6)  # \u8fd9\u4e2a\u53c2\u6570...\n    dx = ratio * force * (x - CANVAS_CENTER_X)\n    dy = ratio * force * (y - CANVAS_CENTER_Y)\n    return x - dx, y - dy\n\n\ndef curve(p):\n    """\n    \u81ea\u5b9a\u4e49\u66f2\u7ebf\u51fd\u6570\uff0c\u8c03\u6574\u8df3\u52a8\u5468\u671f\n    :param p: \u53c2\u6570\n    :return: \u6b63\u5f26\n    """\n    # \u53ef\u4ee5\u5c1d\u8bd5\u6362\u5176\u4ed6\u7684\u52a8\u6001\u51fd\u6570\uff0c\u8fbe\u5230\u66f4\u6709\u529b\u91cf\u7684\u6548\u679c\uff08\u8d1d\u585e\u5c14\uff1f\uff09\n    return 2 * (2 * sin(4 * p)) / (2 * pi)\n\n\nclass Heart:\n    """\n    \u7231\u5fc3\u7c7b\n    """\n\n    def __init__(self, generate_frame=20):\n        self._points = set()  # \u539f\u59cb\u7231\u5fc3\u5750\u6807\u96c6\u5408\n        self._edge_diffusion_points = set()  # \u8fb9\u7f18\u6269\u6563\u6548\u679c\u70b9\u5750\u6807\u96c6\u5408\n        self._center_diffusion_points = set()  # \u4e2d\u5fc3\u6269\u6563\u6548\u679c\u70b9\u5750\u6807\u96c6\u5408\n        self.all_points = {}  # \u6bcf\u5e27\u52a8\u6001\u70b9\u5750\u6807\n        self.build(2000)\n\n        self.random_halo = 1000\n\n        self.generate_frame = generate_frame\n        for frame in range(generate_frame):\n            self.calc(frame)\n\n    def build(self, number):\n        # \u7231\u5fc3\n        for _ in range(number):\n            t = random.uniform(0, 2 * pi)  # \u968f\u673a\u4e0d\u5230\u7684\u5730\u65b9\u9020\u6210\u7231\u5fc3\u6709\u7f3a\u53e3\n            x, y = heart_function(t)\n            self._points.add((x, y))\n\n        # \u7231\u5fc3\u5185\u6269\u6563\n        for _x, _y in list(self._points):\n            for _ in range(3):\n                x, y = scatter_inside(_x, _y, 0.05)\n                self._edge_diffusion_points.add((x, y))\n\n        # \u7231\u5fc3\u5185\u518d\u6b21\u6269\u6563\n        point_list = list(self._points)\n        for _ in range(4000):\n            x, y = random.choice(point_list)\n            x, y = scatter_inside(x, y, 0.17)\n            self._center_diffusion_points.add((x, y))\n\n    @staticmethod\n    def calc_position(x, y, ratio):\n        # \u8c03\u6574\u7f29\u653e\u6bd4\u4f8b\n        force = 1 / (((x - CANVAS_CENTER_X) ** 2 + (y - CANVAS_CENTER_Y) ** 2) ** 0.520)  # \u9b54\u6cd5\u53c2\u6570\n\n        dx = ratio * force * (x - CANVAS_CENTER_X) + random.randint(-1, 1)\n        dy = ratio * force * (y - CANVAS_CENTER_Y) + random.randint(-1, 1)\n\n        return x - dx, y - dy\n\n    def calc(self, generate_frame):\n        ratio = 10 * curve(generate_frame / 10 * pi)  # \u5706\u6ed1\u7684\u5468\u671f\u7684\u7f29\u653e\u6bd4\u4f8b\n\n        halo_radius = int(4 + 6 * (1 + curve(generate_frame / 10 * pi)))\n        halo_number = int(3000 + 4000 * abs(curve(generate_frame / 10 * pi) ** 2))\n\n        all_points = []\n\n        # \u5149\u73af\n        heart_halo_point = set()  # \u5149\u73af\u7684\u70b9\u5750\u6807\u96c6\u5408\n        for _ in range(halo_number):\n            t = random.uniform(0, 2 * pi)  # \u968f\u673a\u4e0d\u5230\u7684\u5730\u65b9\u9020\u6210\u7231\u5fc3\u6709\u7f3a\u53e3\n            x, y = heart_function(t, shrink_ratio=11.6)  # \u9b54\u6cd5\u53c2\u6570\n            x, y = shrink(x, y, halo_radius)\n            if (x, y) not in heart_halo_point:\n                # \u5904\u7406\u65b0\u7684\u70b9\n                heart_halo_point.add((x, y))\n                x += random.randint(-14, 14)\n                y += random.randint(-14, 14)\n                size = random.choice((1, 2, 2))\n                all_points.append((x, y, size))\n\n        # \u8f6e\u5ed3\n        for x, y in self._points:\n            x, y = self.calc_position(x, y, ratio)\n            size = random.randint(1, 3)\n            all_points.append((x, y, size))\n\n        # \u5185\u5bb9\n        for x, y in self._edge_diffusion_points:\n            x, y = self.calc_position(x, y, ratio)\n            size = random.randint(1, 2)\n            all_points.append((x, y, size))\n\n        for x, y in self._center_diffusion_points:\n            x, y = self.calc_position(x, y, ratio)\n            size = random.randint(1, 2)\n            all_points.append((x, y, size))\n\n        self.all_points[generate_frame] = all_points\n\n    def render(self, render_canvas, render_frame):\n        for x, y, size in self.all_points[render_frame % self.generate_frame]:\n            render_canvas.create_rectangle(x, y, x + size, y + size, width=0, fill=HEART_COLOR)\n\n\ndef draw(main: Tk, render_canvas: Canvas, render_heart: Heart, render_frame=0):\n    render_canvas.delete(\'all\')\n    render_heart.render(render_canvas, render_frame)\n    main.after(160, draw, main, render_canvas, render_heart, render_frame + 1)\n\n\nif __name__ == \'__main__\':\n    root = Tk()  # \u4e00\u4e2aTk\n    root.attributes(\'-fullscreen\', True)  # \u5168\u5c4f\n    root.attributes(\'-alpha\', 0.9)  # \u900f\u660e\u5ea6\n    canvas = Canvas(root, bg=\'black\', height=CANVAS_HEIGHT, width=CANVAS_WIDTH)\n    canvas.pack()\n    heart = Heart()  # \u5fc3\n    draw(root, canvas, heart)  # \u5f00\u59cb\u753b\u753b~\n    root.mainloop()\n')))}c.isMDXComponent=!0}}]);