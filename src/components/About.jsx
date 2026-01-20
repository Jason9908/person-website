import React from 'react'
import './About.css'
import { logoBase64 } from '../images.js'

function About() {
  const logoImage = logoBase64
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">你好，我是柯柯</h1>
          <p className="about-subtitle">庐山人在湖南资兴 | 8K粉技术博主</p>
          <p className="about-description">
            CSDN全栈领域新星博主、阿里云专家、工信部权威认证物联网技术开发工程师。
            热爱分享技术，坚持100天发博客，带你一起边学边赚！
          </p>
          <div className="about-badges">
            <h3>荣誉标签</h3>
            <div className="badges-grid">
              <span className="badge-item">🏆 CSDN全栈领域新星博主</span>
              <span className="badge-item">☁️ 阿里云专家</span>
              <span className="badge-item">📱 物联网技术开发工程师</span>
            </div>
          </div>
          <div className="about-communities">
            <h3>圈子</h3>
            <div className="communities-grid">
              <span className="community-tag">破局会员</span>
              <span className="community-tag">一人公司俱乐部</span>
              <span className="community-tag">小灰风云会</span>
            </div>
          </div>
          <div className="about-skills">
            <h3>技能</h3>
            <div className="skills-grid">
              <span className="skill-tag">C/C++</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">嵌入式</span>
              <span className="skill-tag">Web开发</span>
              <span className="skill-tag">数据库</span>
            </div>
          </div>
          <div className="about-actions">
            <a href="#contact" className="btn btn-primary">联系我</a>
            <a href="#experience" className="btn btn-secondary">了解更多</a>
          </div>
        </div>
        <div className="about-image">
          <img src={logoImage} alt="柯柯头像" className="avatar-image" />
        </div>
      </div>
    </section>
  )
}

export default About
