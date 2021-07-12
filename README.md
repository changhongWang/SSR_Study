## 登录接口

http://47.95.113.63/ssr/api/login.json?secret=*

## 检查登录接口

http://47.95.113.63/ssr/api/isLogin.json?secret=*

## 登出接口

http://47.95.113.63/ssr/api/logout.json?secret=*

## 访问翻译项接口

http://47.95.113.63/ssr/api/translations.json?secret=*

用户登录，就展示 <Link>翻译列表</Link><Link>登出</Link>
未登录展示 登录按钮

Todolist

1. webpack 升级
2. babel 升级
3. webpack cssloader 支持 postcss 和 sass
4. 区分开发环境线上环境 压缩 混淆

## SEO

title 和 description 对网站排名影响不大，主要用于提升转化率

原创
链接出去的网站尽量跟本网站相关

### 如何增强网站排名

外链内链
外部链接越多 说明网站影响力越大
图片如果做到原创、高清，也能增强影响力

### SEO 可以用预渲染

(仅仅需要 SEO，不需要渲染速度)
访问网页，拿到网页内容 生成一个 HTML
可以用 preRender 实现(prerender.io 预渲染原理)

### 如何区分普通用户和爬虫

可以在项目最外层架一层 nginx 服务器，nginx 根据 UA 判断，决定将请求转发给 React 服务器还是预渲染服务器
