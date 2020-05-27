# wecblog-vue

> My impeccable Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

#### sitemap demo
<?xml version="1.0" encoding="UTF-8"?>
  <urlset>  -- for baidu
  <urlset xmlns="http://www.google.com/schemas/sitemap/0.84">  -- for google
    <url>
      <loc>http://www.quzhaota.cn</loc>
      <lastmod>2020-01-01</lastmod>
      <changefreq> always </ changefreq > // 页面可能发生更改的频率(选填项) 。//有效值为：always、hourly、daily、weekly、monthly、yearly、never
      <priority>1.0</priority >  // 此网页的优先级。有效值范围从 0.0 到 1.0 (选填项) 。0.0优先级最低、1.0最高。
    </url>
  </urlset>

#### sitemapindex demo
<sitemapindex>
  <sitemap>
    <loc>http://www.example.com/map1.xml</loc>识别Sitemap的位置(必填项)。这里提供的信息是您分割的Sitemap文件存放路径。
    <lastmod>2010-01-01</lastmod>识别相对Sitemap文件的修改时间(选填项)。格式为<lastmod>年-月-日</lastmod>
  </sitemap>
</sitemapindex>

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
