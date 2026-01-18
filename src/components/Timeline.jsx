import React from 'react'
import './Timeline.css'

function Timeline() {
  const timelineEvents = [
    {
      year: '1999',
      title: '出生',
      description: '8月29日出生于湖南郴州兴宁医院，因脑出血导致二级肢体和智力残疾',
      icon: '👶',
      type: 'milestone'
    },
    {
      year: '2004',
      title: '学会走路',
      description: '5岁从黑暗中醒来，经过治疗终于学会走路',
      icon: '🚶',
      type: 'breakthrough'
    },
    {
      year: '2006',
      title: '入学',
      description: '7岁进入学校，开始真正的学生时代',
      icon: '📚',
      type: 'education'
    },
    {
      year: '2015',
      title: '高中时期',
      description: '在老家县城读普高，遇到一生难忘的人，完成高中学业',
      icon: '🏫',
      type: 'education'
    },
    {
      year: '2018',
      title: '大学',
      description: '进入大学学习物联网应用技术，"只要学不死，就往死里学"',
      icon: '🎓',
      type: 'education'
    },
    {
      year: '2019',
      title: '20万行代码',
      description: '大学期间疯狂学编程，敲了20万行代码，帮同学解决问题',
      icon: '💻',
      type: 'achievement'
    },
    {
      year: '2020',
      title: '疫情在家',
      description: '疫情期间在家上网课，靠着时断时续的手机热点完成学业',
      icon: '🏠',
      type: 'challenge'
    },
    {
      year: '2021',
      title: '毕业找工作',
      description: '到杭州找工作，BOSS聊1000多家，面试100多家，经历多次失败',
      icon: '💼',
      type: 'challenge'
    },
    {
      year: '2021',
      title: '第一单私活',
      description: '数据库试卷5个SQL赚50元，客户给了80元，从0到1打通闭环',
      icon: '💰',
      type: 'achievement'
    },
    {
      year: '2021',
      title: '边学边赚',
      description: 'C++线程25分钟赚200元，Flask项目换显示屏，学生成绩管理系统800元',
      icon: '🎯',
      type: 'achievement'
    },
    {
      year: '2024',
      title: '自媒体之路',
      description: '加入胜哥微天使，开始做IP，5个月私域从0到1100',
      icon: '📱',
      type: 'achievement'
    },
    {
      year: '2025',
      title: 'AI新方向',
      description: '获得香橙派 AI Pro，学习Cursor，50分钟完成聊天室项目赚175元',
      icon: '🤖',
      type: 'achievement'
    }
  ]

  return (
    <section id="timeline" className="timeline">
      <h2 className="section-title">我的人生时间线</h2>
      <p className="section-subtitle">
        闷骚的野蛮生长 - 从逆境到边学边赚
      </p>
      <div className="timeline-container">
        {timelineEvents.map((event, index) => (
          <div key={index} className={`timeline-item ${event.type}`}>
            <div className="timeline-marker">
              <span className="timeline-icon">{event.icon}</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-year">{event.year}</span>
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="timeline-quote">
        <p>"我希望人生来过一次，给我多点表达能力，少点记忆"</p>
        <p className="quote-author">— 柯柯</p>
      </div>
    </section>
  )
}

export default Timeline
