import React from 'react'
import './Contact.css'

function Contact() {
  const contactMethods = [
    {
      icon: '📝',
      title: 'CSDN博客',
      value: 'Jasonakeke (8K粉)',
      link: 'https://Jasonakeke.blog.csdn.net'
    },
    {
      icon: '💬',
      title: '公众号',
      value: 'Jasonakeke',
      qrcode: '/img/gzh.jpg'
    },
    {
      icon: '📱',
      title: '微信',
      value: '扫码添加',
      qrcode: '/img/wechat.jpg'
    },
    {
      icon: '🤝',
      title: '合作咨询',
      value: '欢迎联系',
      link: '#contact'
    }
  ]

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">联系我</h2>
      <p className="section-subtitle">
        有项目合作、技术交流或编程学习？欢迎随时联系我
      </p>
      <div className="contact-content">
        <div className="contact-methods">
          {contactMethods.map((method, index) => (
            method.qrcode ? (
              <div key={index} className="contact-card qrcode-card">
                <span className="contact-icon">{method.icon}</span>
                <div className="contact-info">
                  <h3 className="contact-title">{method.title}</h3>
                  <p className="contact-value">{method.value}</p>
                  <img src={method.qrcode} alt={method.title} className="qrcode-image" />
                </div>
              </div>
            ) : (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <span className="contact-icon">{method.icon}</span>
                <div className="contact-info">
                  <h3 className="contact-title">{method.title}</h3>
                  <p className="contact-value">{method.value}</p>
                </div>
              </a>
            )
          ))}
        </div>
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h3>发送消息</h3>
            <div className="form-group">
              <label htmlFor="name">姓名</label>
              <input type="text" id="name" placeholder="请输入您的姓名" />
            </div>
            <div className="form-group">
              <label htmlFor="email">邮箱</label>
              <input type="email" id="email" placeholder="请输入您的邮箱" />
            </div>
            <div className="form-group">
              <label htmlFor="message">消息</label>
              <textarea
                id="message"
                rows="5"
                placeholder="请输入您想说的话..."
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              发送消息
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
