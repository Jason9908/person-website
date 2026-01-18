import React from 'react'
import './Personality.css'

function Personality() {
  const traits = [
    {
      name: '顽强不屈',
      icon: '💪',
      description: '从出生有残疾到学会走路，从被人看不起到考上大学',
      color: '#ef4444'
    },
    {
      name: '勤奋好学',
      icon: '📖',
      description: '大学期间敲了20万行代码，只要学不死就往死里学',
      color: '#3b82f6'
    },
    {
      name: '乐于助人',
      icon: '🤝',
      description: '帮同学安装软件200遍，解答无数技术问题，当班级的"救火队员"',
      color: '#10b981'
    },
    {
      name: '边学边赚',
      icon: '💰',
      description: '30分钟C++线程赚200元，Flask项目换显示屏，数据库试卷80元',
      color: '#f59e0b'
    },
    {
      name: '感恩之心',
      icon: '❤️',
      description: '特别感谢父母和家人对我不离不弃，虽然一次又一次内疚',
      color: '#ec4899'
    },
    {
      name: '闷骚外表',
      icon: '🎭',
      description: '别看我平时嘻嘻哈哈，其实是以笑容掩盖心中痛处',
      color: '#8b5cf6'
    },
    {
      name: '行动力强',
      icon: '⚡',
      description: '说干就干，两天手撸EasyX飞机大战，25分钟完成C++线程项目',
      color: '#f97316'
    },
    {
      name: '永不放弃',
      icon: '🔥',
      description: '面试失败多次依然坚持，从0到1打通技术变现闭环',
      color: '#dc2626'
    }
  ]

  const mottoes = [
    '只要学不死，就往死里学',
    '我希望人生来过一次，给我多点表达能力，少点记忆',
    '闷骚的野蛮生长',
    '我想在编程界打出一片属于自己的天地'
  ]

  return (
    <section id="personality" className="personality">
      <h2 className="section-title">我的人格特质</h2>
      <p className="section-subtitle">
        了解真正的柯柯 - 不只是技术博主，更是一个有故事的人
      </p>

      <div className="personality-intro">
        <div className="intro-text">
          <h3>我是谁？</h3>
          <p>
            我是郭樟柯，一个1999年出生在湖南郴州的程序员。因为出生时的意外，
            我有了二级肢体残疾和二级智力残疾。但我不甘心被命运定义，
            用"闷骚的野蛮生长"来形容我的人生再合适不过了。
          </p>
          <p>
            我用笑容掩盖内心的痛处，用代码表达无法言说的情感。
            从被人看不起到CSDN 8K粉博主，从接不到私活到边学边赚，
            这一路走来，我证明了：起点不重要，重要的是你是否愿意拼命往上爬。
          </p>
        </div>
      </div>

      <div className="traits-grid">
        {traits.map((trait, index) => (
          <div key={index} className="trait-card" style={{ '--trait-color': trait.color }}>
            <div className="trait-icon" style={{ backgroundColor: trait.color }}>
              {trait.icon}
            </div>
            <h3 className="trait-name">{trait.name}</h3>
            <p className="trait-description">{trait.description}</p>
          </div>
        ))}
      </div>

      <div className="mottoes-section">
        <h3>我的座右铭</h3>
        <div className="mottoes-list">
          {mottoes.map((motto, index) => (
            <div key={index} className="motto-item">
              <span className="motto-quote">"</span>
              <p className="motto-text">{motto}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="personality-footer">
        <p>
          "我想在编程界打出一片属于自己的天地，虽然现在还是未完成时，但我相信，
          只要继续努力，终会有一天能画出圆满的句号。"
        </p>
      </div>
    </section>
  )
}

export default Personality
