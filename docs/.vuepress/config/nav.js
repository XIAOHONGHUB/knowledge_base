module.exports = [
  {text: '首页', link: '/'},
  {
    text: '嵌入式',
    link: '/Embedded/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: []
  },
  {
    text: '软件', 
    link: '/backEnd/',
    items: []
  },
  {
    text: '考试',
    link: '/examination/',
    items: [
      {text: '软考', link: '/pages/kaoqianfenxi01/'},
      {text: '博客搭建', link: '/pages/41f87d890d0a02af/'},
    ]
  },
  {text: '归档', link: '/archives/'}
]