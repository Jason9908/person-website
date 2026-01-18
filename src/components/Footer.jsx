import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>关于</h3>
          <p>
            柯柯 - CSDN全栈领域新星博主、阿里云专家、工信部认证物联网技术开发工程师。
            热爱分享技术，带你一起边学边赚！
          </p>
        </div>
        <div className="footer-section">
          <h3>快速链接</h3>
          <ul>
            <li><a href="#about">关于我</a></li>
            <li><a href="#timeline">人生时间线</a></li>
            <li><a href="#experience">我的成就</a></li>
            <li><a href="#personality">人格特质</a></li>
            <li><a href="#bookmarks">收藏网站</a></li>
            <li><a href="#services">技术支持服务</a></li>
            <li><a href="#contact">联系</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>关注我</h3>
          <ul>
            <li><a href="https://Jasonakeke.blog.csdn.net" target="_blank" rel="noopener noreferrer">CSDN: Jasonakeke</a></li>
            <li><a href="#contact">公众号: Jasonakeke (扫码)</a></li>
            <li><a href="#contact">微信: (扫码添加)</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} 柯柯的网站. 边学边赚，一起成长！</p>
      </div>
    </footer>
  )
}

export default Footer
