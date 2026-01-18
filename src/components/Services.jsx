import React from 'react'
import './Services.css'

function Services() {
  const services = [
    {
      icon: '🎯',
      title: '全栈开发入门指导',
      description: '涵盖前端与后端基础，助您快速入门',
      features: [
        '前端开发（HTML/CSS/JavaScript/React/Vue）',
        '后端开发（Java/Python/C/C++/嵌入式）',
        '数据库设计与操作',
        '版本控制',
        '项目实战与代码审查'
      ]
    },
    {
      icon: '🔧',
      title: '软件故障排查与优化',
      description: '解决电脑系统、软件的常见问题与性能提升',
      features: [
        'Windows系统优化与故障修复',
        '软件安装失败问题解决',
        '电脑卡顿、蓝屏等故障排查',
        '软件兼容性问题处理',
        '系统性能提升建议',
        '软件平替'
      ]
    },
    {
      icon: '⚙️',
      title: '软件安装与环境配置',
      description: '为您安全、正确地安装并配置各类办公、开发及工具软件',
      features: [
        '开发环境搭建',
        '数据库安装与配置',
        '办公软件安装（Office、WPS等）',
        '工具软件配置',
        '远程部署与环境调试'
      ]
    }
  ]

  return (
    <section id="services" className="services">
      <h2 className="section-title">技术支持服务</h2>
      <p className="section-subtitle">
        提供专业的技术支持服务，帮你解决各类技术难题
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a href="#contact" className="service-link">
              了解更多 <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
