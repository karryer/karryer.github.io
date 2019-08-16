> 作者：小螃蟹

请将文章所在的文件夹压缩为`zip`压缩包，尽量不要使用`rar`格式。

你可以任选一种投稿方式：
* 将压缩包发送到邮箱`fooapp@qq.com`。
* 将压缩包发给QQ`1341927894`。


<!--<head>-->
  <link rel="stylesheet" href="https://unpkg.com/vssue/dist/vssue.min.css">
<!--</head>-->

<!--<body>-->
  <div id="vssue"></div>
  <script src="https://unpkg.com/vue/dist/vue.runtime.min.js"></script>
  <script src="https://unpkg.com/vssue/dist/vssue.github.min.js"></script>
  <script>
    new Vue({
      el: '#vssue',
      render: h => h('Vssue', {
        props: {
          title: 'Vssue Dev',
          options: {
            owner: 'karryer',
            repo: 'karryer.github.io',
            clientId: '7aa5f973fdce362ce388',
            clientSecret: '55f8d6962f040539dca3ca97c4a7c0341df997e7',
          },
        }
      })
    })
  </script>
<!--</body>-->

