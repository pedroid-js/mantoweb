"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, MapPin, Clock, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button";
import { fadeInUp } from "@/lib/motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const content = {
    en: {
      backButton: "Back to Home",
      title: "Get in Touch",
      subtitle: "We'd love to hear from you",
      form: {
        nameLabel: "Your Name",
        namePlaceholder: "John Doe",
        emailLabel: "Email Address",
        emailPlaceholder: "john@example.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "How can we help?",
        messageLabel: "Message",
        messagePlaceholder: "Tell us more about your inquiry...",
        submitButton: "Send Message",
        successMessage: "Thank you! We'll get back to you soon.",
      },
      info: [
        {
          icon: "mail",
          title: "Email",
          content: "contact@mantossalvo.com",
          link: "mailto:contact@mantossalvo.com",
        },
        {
          icon: "map",
          title: "Location",
          content: "Global Initiative\nOperating Worldwide",
          link: null,
        },
        {
          icon: "clock",
          title: "Response Time",
          content: "We typically respond within 24-48 hours",
          link: null,
        },
      ],
      reasons: {
        title: "Common Inquiries",
        items: [
          "General questions about the initiative",
          "Partnership opportunities",
          "Press and media inquiries",
          "Technical support",
          "Transparency reports",
          "Volunteer opportunities",
        ],
      },
    },
    es: {
      backButton: "Volver al Inicio",
      title: "Contáctanos",
      subtitle: "Nos encantaría saber de ti",
      form: {
        nameLabel: "Tu Nombre",
        namePlaceholder: "Juan Pérez",
        emailLabel: "Correo Electrónico",
        emailPlaceholder: "juan@ejemplo.com",
        subjectLabel: "Asunto",
        subjectPlaceholder: "¿Cómo podemos ayudarte?",
        messageLabel: "Mensaje",
        messagePlaceholder: "Cuéntanos más sobre tu consulta...",
        submitButton: "Enviar Mensaje",
        successMessage: "¡Gracias! Te responderemos pronto.",
      },
      info: [
        {
          icon: "mail",
          title: "Correo",
          content: "contact@mantossalvo.com",
          link: "mailto:contact@mantossalvo.com",
        },
        {
          icon: "map",
          title: "Ubicación",
          content: "Iniciativa Global\nOperando en Todo el Mundo",
          link: null,
        },
        {
          icon: "clock",
          title: "Tiempo de Respuesta",
          content: "Normalmente respondemos en 24-48 horas",
          link: null,
        },
      ],
      reasons: {
        title: "Consultas Comunes",
        items: [
          "Preguntas generales sobre la iniciativa",
          "Oportunidades de asociación",
          "Consultas de prensa y medios",
          "Soporte técnico",
          "Informes de transparencia",
          "Oportunidades de voluntariado",
        ],
      },
    },
    ko: {
      backButton: "홈으로 돌아가기",
      title: "문의하기",
      subtitle: "여러분의 의견을 듣고 싶습니다",
      form: {
        nameLabel: "이름",
        namePlaceholder: "홍길동",
        emailLabel: "이메일 주소",
        emailPlaceholder: "hong@example.com",
        subjectLabel: "제목",
        subjectPlaceholder: "어떻게 도와드릴까요?",
        messageLabel: "메시지",
        messagePlaceholder: "문의 사항을 자세히 알려주세요...",
        submitButton: "메시지 보내기",
        successMessage: "감사합니다! 곧 답변드리겠습니다.",
      },
      info: [
        {
          icon: "mail",
          title: "이메일",
          content: "contact@mantossalvo.com",
          link: "mailto:contact@mantossalvo.com",
        },
        {
          icon: "map",
          title: "위치",
          content: "글로벌 이니셔티브\n전 세계 운영",
          link: null,
        },
        {
          icon: "clock",
          title: "응답 시간",
          content: "일반적으로 24-48시간 내에 응답합니다",
          link: null,
        },
      ],
      reasons: {
        title: "일반적인 문의",
        items: [
          "이니셔티브에 대한 일반적인 질문",
          "파트너십 기회",
          "언론 및 미디어 문의",
          "기술 지원",
          "투명성 보고서",
          "자원봉사 기회",
        ],
      },
    },
    ja: {
      backButton: "ホームに戻る",
      title: "お問い合わせ",
      subtitle: "ぜひご連絡ください",
      form: {
        nameLabel: "お名前",
        namePlaceholder: "山田太郎",
        emailLabel: "メールアドレス",
        emailPlaceholder: "yamada@example.com",
        subjectLabel: "件名",
        subjectPlaceholder: "どのようにお手伝いできますか？",
        messageLabel: "メッセージ",
        messagePlaceholder: "お問い合わせ内容を詳しくお聞かせください...",
        submitButton: "メッセージを送信",
        successMessage: "ありがとうございます！すぐにご連絡いたします。",
      },
      info: [
        {
          icon: "mail",
          title: "メール",
          content: "contact@mantossalvo.com",
          link: "mailto:contact@mantossalvo.com",
        },
        {
          icon: "map",
          title: "所在地",
          content: "グローバルイニシアチブ\n世界中で運営",
          link: null,
        },
        {
          icon: "clock",
          title: "応答時間",
          content: "通常24〜48時間以内に返信いたします",
          link: null,
        },
      ],
      reasons: {
        title: "よくあるお問い合わせ",
        items: [
          "イニシアチブに関する一般的な質問",
          "パートナーシップの機会",
          "報道・メディアのお問い合わせ",
          "技術サポート",
          "透明性レポート",
          "ボランティアの機会",
        ],
      },
    },
    zh: {
      backButton: "返回首页",
      title: "联系我们",
      subtitle: "我们很乐意听取您的意见",
      form: {
        nameLabel: "您的姓名",
        namePlaceholder: "张三",
        emailLabel: "电子邮件地址",
        emailPlaceholder: "zhang@example.com",
        subjectLabel: "主题",
        subjectPlaceholder: "我们如何帮助您？",
        messageLabel: "消息",
        messagePlaceholder: "告诉我们更多关于您的询问...",
        submitButton: "发送消息",
        successMessage: "谢谢！我们会尽快回复您。",
      },
      info: [
        {
          icon: "mail",
          title: "电子邮件",
          content: "contact@mantossalvo.com",
          link: "mailto:contact@mantossalvo.com",
        },
        {
          icon: "map",
          title: "位置",
          content: "全球倡议\\n在全球运营",
          link: null,
        },
        {
          icon: "clock",
          title: "响应时间",
          content: "我们通常在24-48小时内回复",
          link: null,
        },
      ],
      reasons: {
        title: "常见问询",
        items: [
          "有关倡议的一般问题",
          "合作机会",
          "新闻和媒体询问",
          "技术支持",
          "透明度报告",
          "志愿者机会",
        ],
      },
    },
    hi: {
      backButton: "होम पर वापस जाएं",
      title: "संपर्क में रहें",
      subtitle: "हम आपसे सुनना पसंद करेंगे",
      form: {
        nameLabel: "आपका नाम",
        namePlaceholder: "राज कुमार",
        emailLabel: "ईमेल पता",
        emailPlaceholder: "raj@example.com",
        subjectLabel: "विषय",
        subjectPlaceholder: "हम कैसे मदद कर सकते हैं?",
        messageLabel: "संदेश",
        messagePlaceholder: "अपनी पूछताछ के बारे में अधिक बताएं...",
        submitButton: "संदेश भेजें",
        successMessage: "धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।",
      },
      info: [
        {
          icon: "mail",
          title: "ईमेल",
          content: "contact@mantossalvo.com",
          link: "mailto:contact@mantossalvo.com",
        },
        {
          icon: "map",
          title: "स्थान",
          content: "वैश्विक पहल\\nदुनिया भर में संचालन",
          link: null,
        },
        {
          icon: "clock",
          title: "प्रतिक्रिया समय",
          content: "हम आमतौर पर 24-48 घंटों के भीतर जवाब देते हैं",
          link: null,
        },
      ],
      reasons: {
        title: "सामान्य पूछताछ",
        items: [
          "पहल के बारे में सामान्य प्रश्न",
          "साझेदारी के अवसर",
          "प्रेस और मीडिया पूछताछ",
          "तकनीकी सहायता",
          "पारदर्शिता रिपोर्ट",
          "स्वयंसेवक के अवसर",
        ],
      },
    },
    bn: {
      backButton: "হোমে ফিরে যান",
      title: "যোগাযোগ করুন",
      subtitle: "আমরা আপনার কাছ থেকে শুনতে পছন্দ করব",
      form: {
        nameLabel: "আপনার নাম",
        namePlaceholder: "রহিম আহমেদ",
        emailLabel: "ইমেল ঠিকানা",
        emailPlaceholder: "rahim@example.com",
        subjectLabel: "বিষয়",
        subjectPlaceholder: "আমরা কীভাবে সাহায্য করতে পারি?",
        messageLabel: "বার্তা",
        messagePlaceholder: "আপনার অনুসন্ধান সম্পর্কে আরও বলুন...",
        submitButton: "বার্তা পাঠান",
        successMessage: "ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
      },
      info: [
        {
          icon: "mail",
          title: "ইমেল",
          content: "contact@mantossalvo.com",
          link: "mailto:contact@mantossalvo.com",
        },
        {
          icon: "map",
          title: "অবস্থান",
          content: "গ্লোবাল ইনিশিয়েটিভ\\nবিশ্বব্যাপী পরিচালনা",
          link: null,
        },
        {
          icon: "clock",
          title: "প্রতিক্রিয়া সময়",
          content: "আমরা সাধারণত ২৪-৪৮ ঘন্টার মধ্যে উত্তর দিই",
          link: null,
        },
      ],
      reasons: {
        title: "সাধারণ অনুসন্ধান",
        items: [
          "উদ্যোগ সম্পর্কে সাধারণ প্রশ্ন",
          "অংশীদারিত্বের সুযোগ",
          "প্রেস এবং মিডিয়া অনুসন্ধান",
          "প্রযুক্তিগত সহায়তা",
          "স্বচ্ছতা প্রতিবেদন",
          "স্বেচ্ছাসেবকের সুযোগ",
        ],
      },
    },
    pt: {
      backButton: "Voltar à Página Inicial",
      title: "Entre em Contato",
      subtitle: "Adoraríamos ouvir de você",
      form: {
        nameLabel: "Seu Nome",
        namePlaceholder: "João Silva",
        emailLabel: "Endereço de E-mail",
        emailPlaceholder: "joao@exemplo.com",
        subjectLabel: "Assunto",
        subjectPlaceholder: "Como podemos ajudar?",
        messageLabel: "Mensagem",
        messagePlaceholder: "Conte-nos mais sobre sua consulta...",
        submitButton: "Enviar Mensagem",
        successMessage: "Obrigado! Entraremos em contato em breve.",
      },
      info: [
        {
          icon: "mail",
          title: "E-mail",
          content: "contact@mantossalvo.com",
          link: "mailto:contact@mantossalvo.com",
        },
        {
          icon: "map",
          title: "Localização",
          content: "Iniciativa Global\\nOperando em Todo o Mundo",
          link: null,
        },
        {
          icon: "clock",
          title: "Tempo de Resposta",
          content: "Normalmente respondemos dentro de 24-48 horas",
          link: null,
        },
      ],
      reasons: {
        title: "Consultas Comuns",
        items: [
          "Perguntas gerais sobre a iniciativa",
          "Oportunidades de parceria",
          "Consultas de imprensa e mídia",
          "Suporte técnico",
          "Relatórios de transparência",
          "Oportunidades de voluntariado",
        ],
      },
    },
    ru: {
      backButton: "Вернуться на главную",
      title: "Свяжитесь с нами",
      subtitle: "Мы будем рады услышать вас",
      form: {
        nameLabel: "Ваше имя",
        namePlaceholder: "Иван Иванов",
        emailLabel: "Адрес электронной почты",
        emailPlaceholder: "ivan@example.com",
        subjectLabel: "Тема",
        subjectPlaceholder: "Как мы можем помочь?",
        messageLabel: "Сообщение",
        messagePlaceholder: "Расскажите подробнее о вашем запросе...",
        submitButton: "Отправить сообщение",
        successMessage: "Спасибо! Мы скоро с вами свяжемся.",
      },
      info: [
        {
          icon: "mail",
          title: "Электронная почта",
          content: "contact@mantossalvo.com",
          link: "mailto:contact@mantossalvo.com",
        },
        {
          icon: "map",
          title: "Местоположение",
          content: "Глобальная инициатива\\nРаботаем по всему миру",
          link: null,
        },
        {
          icon: "clock",
          title: "Время ответа",
          content: "Обычно мы отвечаем в течение 24-48 часов",
          link: null,
        },
      ],
      reasons: {
        title: "Частые запросы",
        items: [
          "Общие вопросы об инициативе",
          "Возможности партнерства",
          "Запросы прессы и СМИ",
          "Техническая поддержка",
          "Отчеты о прозрачности",
          "Возможности волонтерства",
        ],
      },
    },
  };

  const t = content[language];

  const iconMap = {
    mail: Mail,
    map: MapPin,
    clock: Clock,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/">
          <motion.button
            className="flex items-center space-x-2 text-foreground/60 hover:text-foreground mb-8 transition-colors"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t.backButton}</span>
          </motion.button>
        </Link>

        {/* Header */}
        <motion.div className="text-center mb-16" variants={fadeInUp} initial="initial" animate="animate">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-accent" />
                </div>
                <p className="text-xl font-semibold text-center">{t.form.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t.form.nameLabel}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.form.namePlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-muted/20 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.form.emailLabel}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.form.emailPlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-muted/20 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.form.subjectLabel}</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.form.subjectPlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-muted/20 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.form.messageLabel}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.form.messagePlaceholder}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-muted/20 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                  />
                </div>
                <Button type="submit" className="w-full">
                  {t.form.submitButton}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Reasons */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t.info.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <div
                    key={index}
                    className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-muted/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-foreground/60 hover:text-accent transition-colors whitespace-pre-line"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-foreground/60 whitespace-pre-line">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Common Reasons */}
            <motion.div
              className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-6">{t.reasons.title}</h3>
              <ul className="space-y-3">
                {t.reasons.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
