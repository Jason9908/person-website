import React from 'react'
import './Experience.css'

function Experience() {
  const achievements = [
    {
      icon: '💰',
      title: '边学边赚',
      description: '30分钟边学边赚C++线程200元',
      highlight: true
    },
    {
      icon: '🖥️',
      title: '私活换设备',
      description: '一单私活赚一个显示屏',
      highlight: true
    },
    {
      icon: '📝',
      title: '坚持创作',
      description: 'CSDN坚持100天发博客，一篇博文赚一个开发板',
      highlight: true
    },
    {
      icon: '👥',
      title: '带团队',
      description: '带15个同学做项目',
      highlight: false
    },
    {
      icon: '⚡',
      title: '高效学习',
      description: '一天完成一周的实训，30分钟高分通过C语言二级',
      highlight: false
    },
    {
      icon: '🎮',
      title: '快速开发',
      description: '两天手撸代码完成EasyX飞机大战',
      highlight: false
    },
    {
      icon: '💻',
      title: '月入设备',
      description: '靠接软件私活一个月换苹果电脑',
      highlight: true
    },
    {
      icon: '🗄️',
      title: '技术变现',
      description: '数据库试卷5个SQL赚50元（别人给80）',
      highlight: false
    },
    {
      icon: '🚀',
      title: '远程部署',
      description: '一个远程部署就150到手',
      highlight: false
    },
    {
      icon: '🌐',
      title: '项目交付',
      description: '一个Flask项目6个网页500元',
      highlight: true
    },
    {
      icon: '🎯',
      title: 'CSDN成就',
      description: '8K粉丝账号：Jasonakeke',
      highlight: true
    },
    {
      icon: '📢',
      title: '公众号',
      description: 'Jasonakeke - 分享技术与变现',
      highlight: true
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">我的成就</h2>
      <p className="section-subtitle">
        边学边赚，用技术变现的精彩瞬间
      </p>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`achievement-card ${achievement.highlight ? 'highlight' : ''}`}
          >
            <span className="achievement-card-icon">{achievement.icon}</span>
            <h3 className="achievement-card-title">{achievement.title}</h3>
            <p className="achievement-card-desc">{achievement.description}</p>
            {achievement.highlight && <span className="achievement-badge">🔥 精彩</span>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
