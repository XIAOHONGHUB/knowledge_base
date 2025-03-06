module.exports = [
  {text: '首页', link: '/'},
  {
    text: '嵌入式',
    link: '/Embedded/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: []
  },
  {
    text: '前端', 
    link: '/web/',
    items: []
  },
  {
    text: '后端', 
    link: '/backEnd/',
    items: []
  },
  {
    text: '考试',
    link: '/examination/',
    items: []
  },
  {
    text: '旅行', 
    link: '/nationalExamination/',
    items: []
  },
  {text: '归档', link: '/archives/'},
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]