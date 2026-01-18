import React, { useState } from 'react'
import './Bookmarks.css'

function Bookmarks() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    {
      id: 'learning',
      name: '编程学习',
      icon: '📚',
      links: [
        { name: 'CSDN', url: 'https://Jasonakeke.blog.csdn.net', description: '我的CSDN博客' },
        { name: '博客园', url: 'https://www.cnblogs.com', description: '技术博客社区' },
        { name: '廖雪峰', url: 'https://www.liaoxuefeng.com', description: 'Python/Java教程' },
        { name: 'C语言中文网', url: 'http://c.biancheng.net', description: 'C语言入门教程' },
        { name: 'Linux命令', url: 'https://www.linuxcool.com', description: 'Linux命令大全' },
        { name: 'JavaGuide', url: 'https://snailclimb.top/JavaGuide', description: 'Java核心知识' }
      ]
    },
    {
      id: 'tools',
      name: '开发工具',
      icon: '🛠️',
      links: [
        { name: 'GitHub', url: 'https://github.com', description: '全球最大代码托管平台' },
        { name: 'Gitee', url: 'https://gitee.com', description: '国内代码托管平台' },
        { name: 'JetBrains', url: 'https://www.jetbrains.com', description: 'IDE开发工具' },
        { name: 'Stack Overflow', url: 'https://stackoverflow.com', description: '程序员问答社区' },
        { name: 'MDN Web文档', url: 'https://developer.mozilla.org', description: 'Web开发权威文档' },
        { name: 'SegmentFault', url: 'https://segmentfault.com', description: '中文技术社区' }
      ]
    },
    {
      id: 'online-tools',
      name: '在线工具',
      icon: '⚡',
      links: [
        { name: 'ProcessOn', url: 'https://www.processon.com', description: '在线流程图工具' },
        { name: 'Excalidraw', url: 'https://excalidraw.com', description: '手绘风格白板工具' },
        { name: '在线工具', url: 'https://tool.lu', description: '开发者在线工具集' },
        { name: 'JSON在线', url: 'https://www.sojson.com', description: 'JSON格式化工具' },
        { name: 'Carbon', url: 'https://carbon.now.sh', description: '代码美图生成器' },
        { name: 'ColorHunt', url: 'https://colorhunt.co', description: '配色方案收集' }
      ]
    },
    {
      id: 'platforms',
      name: '学习平台',
      icon: '🎓',
      links: [
        { name: '慕课网', url: 'https://www.imooc.com', description: 'IT技能学习平台' },
        { name: '网易云课堂', url: 'https://study.163.com', description: '在线课程平台' },
        { name: '学堂在线', url: 'https://next.xuetangx.com', description: '国家精品课程' },
        { name: 'MOOC', url: 'https://www.icourse163.org', description: '中国大学MOOC' },
        { name: 'B站', url: 'https://www.bilibili.com', description: '海量技术视频' },
        { name: '牛客网', url: 'https://www.nowcoder.com', description: '求职刷题平台' }
      ]
    },
    {
      id: 'resources',
      name: '技术资源',
      icon: '📖',
      links: [
        { name: 'Apache ECharts', url: 'https://www.echartsjs.com', description: '数据可视化库' },
        { name: 'Vue.js', url: 'https://cn.vuejs.org', description: '渐进式JS框架' },
        { name: 'jQuery', url: 'https://jquery.com', description: 'JavaScript库' },
        { name: 'EasyX文档', url: 'https://docs.easyx.cn', description: 'C语言图形库' },
        { name: 'Qt', url: 'https://blog.csdn.net/lg930320', description: '跨平台应用框架' },
        { name: '力扣', url: 'https://leetcode-cn.com', description: '算法刷题平台' }
      ]
    },
    {
      id: 'community',
      name: '技术社区',
      icon: '👥',
      links: [
        { name: 'OSCHINA', url: 'https://www.oschina.net', description: '开源技术社区' },
        { name: 'InfoQ', url: 'https://www.infoq.com', description: '技术新闻与趋势' },
        { name: '51CTO', url: 'https://www.51cto.com', description: 'IT技术分享社区' },
        { name: '脚本之家', url: 'https://www.jb51.net', description: '编程脚本资源' },
        { name: '图灵社区', url: 'https://www.ituring.com.cn', description: '技术书籍社区' },
        { name: '云栖社区', url: 'https://yq.aliyun.com', description: '阿里云开发者社区' }
      ]
    },
    {
      id: 'career',
      name: '求职考试',
      icon: '💼',
      links: [
        { name: '学信网', url: 'https://www.chsi.com.cn', description: '学历查询平台' },
        { name: '考研帮', url: 'http://www.kaoyan.com', description: '考研交流社区' },
        { name: '软考', url: 'http://www.ruankao.org.cn', description: '计算机资格考试' },
        { name: '程序员客栈', url: 'https://www.proginn.com', description: '自由职业平台' },
        { name: '牛耳', url: 'http://www.newer2001.com', description: 'IT职业教育' },
        { name: '大鹏教育', url: 'https://www.dapengjiaoyu.cn', description: '在线IT培训' }
      ]
    },
    {
      id: 'other',
      name: '其他收藏',
      icon: '🔖',
      links: [
        { name: '破局行动', url: 'https://aipoju.com/action', description: '个人成长社区' },
        { name: '小鹅通', url: 'https://study.xiaoe-tech.com', description: '知识付费工具' },
        { name: '百度脑图', url: 'https://naotu.baidu.com', description: '在线思维导图' },
        { name: '去背景', url: 'https://www.remove.bg', description: '图片背景移除' },
        { name: 'icon', url: 'http://www.easyicon.net', description: '图标素材下载' },
        { name: 'Google', url: 'https://www.google.hk', description: '搜索引擎' }
      ]
    }
  ]

  const filteredCategories = activeCategory === 'all'
    ? categories
    : categories.filter(cat => cat.id === activeCategory)

  return (
    <section id="bookmarks" className="bookmarks">
      <h2 className="section-title">我的收藏</h2>
      <p className="section-subtitle">
        常用学习资源、开发工具和技术社区 - 导入自浏览器收藏夹
      </p>

      <div className="category-tabs">
        <button
          className={`tab-button ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          全部
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`tab-button ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      <div className="bookmarks-grid">
        {filteredCategories.map((category, index) => (
          <div key={index} className="bookmark-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-name">{category.name}</h3>
              <span className="category-count">{category.links.length} 个</span>
            </div>
            <ul className="bookmark-list">
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex} className="bookmark-item">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bookmark-link"
                  >
                    <div className="bookmark-info">
                      <h4 className="bookmark-name">{link.name}</h4>
                      <p className="bookmark-description">{link.description}</p>
                    </div>
                    <span className="bookmark-arrow">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Bookmarks
