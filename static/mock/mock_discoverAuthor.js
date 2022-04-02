let mock_discoverAuthor = [
  {
    id: '001',
    author: '玉脸小肥龙',
    desc: '玉脸小肥龙，知名作家；暗下思量，摘下满天星。',
    avator: 'https://img3.sycdn.imooc.com/5e9993b90001ada905000500-140-140.jpg',
    followed: true
  },
  {
    id: '002',
    author: '述那北',
    desc: '在草原上临风',
    avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589110946168&di=793b8cac83dae3ab2e286737cba510e7&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F07%2F20180907083255_uovte.thumb.700_0.jpg'
  },
  {
    id: '003',
    author: '席萌',
    desc: '中国作家协会会员，江苏省签约作家，苏州市作家协会儿童文学分会副会长。',
    avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589110946168&di=e4ce646380415bc2493c58583e9f4ae1&imgtype=0&src=http%3A%2F%2Fimg.jpjww.com%2Fimg%2F6bcb27708d8515a9.jpg'
  },
  {
    id: '004',
    author: '张修齐',
    desc: '学四年级起，只要是假期',
    avator: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3068698990,704320414&fm=26&gp=0.jpg'
  },
  {
    id: '005',
    author: '张家豪',
    desc: '母亲必定每天让她写作文',
    avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589110946165&di=bfd719bfa5b496efbe3aa03fff6ebd75&imgtype=0&src=http%3A%2F%2Fimg1.touxiang.cn%2Fuploads%2F20120912%2F12-005911_532.jpg',
    followed: true
  },
  {
    id: '006',
    author: 'Ethan',
    desc: '1985年，她走过小镇的石板路，来到苏州幼儿师范学校读书',
    avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589110946165&di=dc12e72e816f21a8aaf736f73cd7b3db&imgtype=0&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2019-03-16%2F080146283.jpg'
  },
  {
    id: '007',
    author: '王知源',
    desc: '在幼儿师范学校学习音乐、舞蹈、钢琴、绘画',
    avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589110946165&di=19b7f95bd4410450c1411d9e3bbea075&imgtype=0&src=http%3A%2F%2Ftupian.qqw21.com%2Farticle%2FUploadPic%2F2020-4%2F20204112111769722.jpg'
  },
  {
    id: '008',
    author: '林润琛',
    desc: '她的兴趣，始终在文学创作，她担任了学校的文学社社长和童话剧团团长',
    avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589110946165&di=24ed12d449b3ed4cb8861195da795571&imgtype=0&src=http%3A%2F%2Fimg1.touxiang.cn%2Fuploads%2F20121024%2F24-060450_303.jpg'
  },
  {
    id: '009',
    author: '常悦颜',
    desc: '母校把她派到苏州大学幼儿园担任教师',
    avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589110946163&di=5e77b2094e1a97c35deaa11a7e620b0d&imgtype=0&src=http%3A%2F%2Fimg2.woyaogexing.com%2F2017%2F05%2F17%2F262d16f86f8a0e95%2521400x400_big.jpg'
  },
  {
    id: '010',
    author: '浩宸',
    desc: '期间，她接受了南京师范大学学前教育管理的学习，阅读了儿童心理学、教育学等书籍',
    avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589111247027&di=a8d5cf92bcc0659d74d515615c2308a2&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201510%2F18%2F20151018124050_vuEcm.jpeg',
    followed: true
  },
  {
    id: '011',
    author: '尚昱辰',
    desc: '撰写了幼儿园语言教学方面的论文和教材教法文章，其中《去年的树》教材教法曾被人大复刊转载',
    avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589111247025&di=fa899fb5f5405315138bb652de742eb9&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F23%2F20160123190350_dZRHG.jpeg'
  },
  {
    id: '012',
    author: '萧泽恩',
    desc: '主编了幼儿园语言参考书和练习册',
    avator: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3951455180,1065060146&fm=26&gp=0.jpg',
    followed: true
  },
  {
    id: '013',
    author: '赵俊和',
    desc: '先进的教育理念、儿童观影响了她的创作，使她的童话作品表现出主题多元化、想象新颖、现代感强、幽默等倾向',
    avator: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3255547792,183230677&fm=26&gp=0.jpg'
  },
  {
    id: '014',
    author: '吕雨昕',
    desc: '她就职于苏州大学社会学院',
    avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589111247027&di=93d7b3ebce8ec7b30ca67cfc135444ac&imgtype=0&src=http%3A%2F%2Fimg.wxcha.com%2Ffile%2F201904%2F30%2F147da7b949.jpg%3Fdown'
  },
  {
    id: '015',
    author: '萱萱',
    desc: '生活方式的改变使她的创作发生了变化，她的作品开始探讨成长问题、心理健康问题',
    avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589111247026&di=3130fcc5f028d1c9b823b83ac44a0653&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201608%2F14%2F20160814134004_H2tzf.png'
  },
]

module.exports = { mock_discoverAuthor }
