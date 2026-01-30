"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Scale, Shield, FileText } from "lucide-react";
import Link from "next/link";
import { fadeInUp } from "@/lib/motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function LegalPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      backButton: "Back to Home",
      title: "Legal Information",
      subtitle: "Transparency and compliance in everything we do",
      sections: [
        {
          icon: "shield",
          title: "Data Protection",
          description: "We comply with GDPR, CCPA, and international data protection standards. Your privacy is our priority.",
        },
        {
          icon: "scale",
          title: "Legal Framework",
          description: "Our operations comply with international laws governing non-profit initiatives and scientific funding.",
        },
        {
          icon: "file",
          title: "Transparency",
          description: "All financial records and project reports are publicly accessible in our quarterly transparency reports.",
        },
      ],
      commitment: {
        title: "Our Commitment",
        description: "We are committed to operating with complete transparency and in full compliance with all applicable laws and regulations. Every contribution is handled with the highest standards of security and accountability.",
      },
      links: {
        title: "Important Documents",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact Us",
      },
    },
    es: {
      backButton: "Volver al Inicio",
      title: "Información Legal",
      subtitle: "Transparencia y cumplimiento en todo lo que hacemos",
      sections: [
        {
          icon: "shield",
          title: "Protección de Datos",
          description: "Cumplimos con GDPR, CCPA y estándares internacionales de protección de datos. Tu privacidad es nuestra prioridad.",
        },
        {
          icon: "scale",
          title: "Marco Legal",
          description: "Nuestras operaciones cumplen con las leyes internacionales que rigen las iniciativas sin fines de lucro y la financiación científica.",
        },
        {
          icon: "file",
          title: "Transparencia",
          description: "Todos los registros financieros e informes de proyectos son de acceso público en nuestros informes trimestrales de transparencia.",
        },
      ],
      commitment: {
        title: "Nuestro Compromiso",
        description: "Estamos comprometidos a operar con total transparencia y en pleno cumplimiento de todas las leyes y regulaciones aplicables. Cada contribución se maneja con los más altos estándares de seguridad y responsabilidad.",
      },
      links: {
        title: "Documentos Importantes",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
        contact: "Contáctanos",
      },
    },
    ko: {
      backButton: "홈으로 돌아가기",
      title: "법적 정보",
      subtitle: "우리가 하는 모든 일에 투명성과 규정 준수",
      sections: [
        {
          icon: "shield",
          title: "데이터 보호",
          description: "우리는 GDPR, CCPA 및 국제 데이터 보호 표준을 준수합니다. 귀하의 개인정보는 우리의 최우선 사항입니다.",
        },
        {
          icon: "scale",
          title: "법적 프레임워크",
          description: "우리의 운영은 비영리 이니셔티브 및 과학 자금 지원을 규율하는 국제법을 준수합니다.",
        },
        {
          icon: "file",
          title: "투명성",
          description: "모든 재무 기록 및 프로젝트 보고서는 분기별 투명성 보고서에서 공개적으로 액세스할 수 있습니다.",
        },
      ],
      commitment: {
        title: "우리의 약속",
        description: "우리는 완전한 투명성과 모든 적용 가능한 법률 및 규정을 완전히 준수하며 운영할 것을 약속합니다. 모든 기여는 최고 수준의 보안 및 책임성으로 처리됩니다.",
      },
      links: {
        title: "중요한 문서",
        privacy: "개인정보 보호정책",
        terms: "서비스 약관",
        contact: "문의하기",
      },
    },
    ja: {
      backButton: "ホームに戻る",
      title: "法的情報",
      subtitle: "私たちが行うすべてにおける透明性とコンプライアンス",
      sections: [
        {
          icon: "shield",
          title: "データ保護",
          description: "GDPR、CCPA、および国際データ保護基準に準拠しています。お客様のプライバシーが最優先事項です。",
        },
        {
          icon: "scale",
          title: "法的枠組み",
          description: "私たちの運営は、非営利イニシアチブと科学的資金調達を規制する国際法に準拠しています。",
        },
        {
          icon: "file",
          title: "透明性",
          description: "すべての財務記録とプロジェクトレポートは、四半期ごとの透明性レポートで公開されています。",
        },
      ],
      commitment: {
        title: "私たちの約束",
        description: "完全な透明性と、適用されるすべての法律および規制の完全な遵守をもって運営することを約束します。すべての寄付は、最高水準のセキュリティと説明責任で処理されます。",
      },
      links: {
        title: "重要な文書",
        privacy: "プライバシーポリシー",
        terms: "利用規約",
        contact: "お問い合わせ",
      },
    },
    zh: {
      backButton: "返回首页",
      title: "法律信息",
      subtitle: "我们所做的一切都保持透明和合规",
      sections: [
        {
          icon: "shield",
          title: "数据保护",
          description: "我们遵守GDPR、CCPA和国际数据保护标准。您的隐私是我们的首要任务。",
        },
        {
          icon: "scale",
          title: "法律框架",
          description: "我们的运营符合管理非营利倡议和科学资助的国际法律。",
        },
        {
          icon: "file",
          title: "透明度",
          description: "所有财务记录和项目报告都可在我们的季度透明度报告中公开访问。",
        },
      ],
      commitment: {
        title: "我们的承诺",
        description: "我们承诺以完全透明的方式运营，并全面遵守所有适用的法律法规。每一笔捐款都以最高标准的安全性和问责制处理。",
      },
      links: {
        title: "重要文件",
        privacy: "隐私政策",
        terms: "服务条款",
        contact: "联系我们",
      },
    },
    hi: {
      backButton: "होम पर वापस जाएं",
      title: "कानूनी जानकारी",
      subtitle: "हम जो कुछ भी करते हैं उसमें पारदर्शिता और अनुपालन",
      sections: [
        {
          icon: "shield",
          title: "डेटा सुरक्षा",
          description: "हम GDPR, CCPA और अंतर्राष्ट्रीय डेटा सुरक्षा मानकों का अनुपालन करते हैं। आपकी गोपनीयता हमारी प्राथमिकता है।",
        },
        {
          icon: "scale",
          title: "कानूनी ढांचा",
          description: "हमारा संचालन गैर-लाभकारी पहलों और वैज्ञानिक वित्तपोषण को नियंत्रित करने वाले अंतर्राष्ट्रीय कानूनों का अनुपालन करता है।",
        },
        {
          icon: "file",
          title: "पारदर्शिता",
          description: "सभी वित्तीय रिकॉर्ड और परियोजना रिपोर्ट हमारी त्रैमासिक पारदर्शिता रिपोर्ट में सार्वजनिक रूप से सुलभ हैं।",
        },
      ],
      commitment: {
        title: "हमारी प्रतिबद्धता",
        description: "हम पूर्ण पारदर्शिता के साथ और सभी लागू कानूनों और विनियमों का पूरी तरह से अनुपालन करते हुए काम करने के लिए प्रतिबद्ध हैं। प्रत्येक योगदान को सुरक्षा और जवाबदेही के उच्चतम मानकों के साथ संभाला जाता है।",
      },
      links: {
        title: "महत्वपूर्ण दस्तावेज़",
        privacy: "गोपनीयता नीति",
        terms: "सेवा की शर्तें",
        contact: "हमसे संपर्क करें",
      },
    },
    bn: {
      backButton: "হোমে ফিরে যান",
      title: "আইনি তথ্য",
      subtitle: "আমরা যা কিছু করি তাতে স্বচ্ছতা এবং সম্মতি",
      sections: [
        {
          icon: "shield",
          title: "ডেটা সুরক্ষা",
          description: "আমরা GDPR, CCPA এবং আন্তর্জাতিক ডেটা সুরক্ষা মান মেনে চলি। আপনার গোপনীয়তা আমাদের অগ্রাধিকার।",
        },
        {
          icon: "scale",
          title: "আইনি কাঠামো",
          description: "আমাদের কার্যক্রম অলাভজনক উদ্যোগ এবং বৈজ্ঞানিক তহবিল পরিচালনাকারী আন্তর্জাতিক আইন মেনে চলে।",
        },
        {
          icon: "file",
          title: "স্বচ্ছতা",
          description: "সমস্ত আর্থিক রেকর্ড এবং প্রকল্প প্রতিবেদন আমাদের ত্রৈমাসিক স্বচ্ছতা প্রতিবেদনে সর্বজনীনভাবে অ্যাক্সেসযোগ্য।",
        },
      ],
      commitment: {
        title: "আমাদের অঙ্গীকার",
        description: "আমরা সম্পূর্ণ স্বচ্ছতার সাথে এবং সমস্ত প্রযোজ্য আইন ও নিয়মকানুন সম্পূর্ণভাবে মেনে চলার জন্য প্রতিশ্রুতিবদ্ধ। প্রতিটি অবদান সর্বোচ্চ মানের নিরাপত্তা এবং জবাবদিহিতার সাথে পরিচালিত হয়।",
      },
      links: {
        title: "গুরুত্বপূর্ণ নথি",
        privacy: "গোপনীয়তা নীতি",
        terms: "সেবার শর্তাবলী",
        contact: "আমাদের সাথে যোগাযোগ করুন",
      },
    },
    pt: {
      backButton: "Voltar à Página Inicial",
      title: "Informações Legais",
      subtitle: "Transparência e conformidade em tudo o que fazemos",
      sections: [
        {
          icon: "shield",
          title: "Proteção de Dados",
          description: "Cumprimos com GDPR, CCPA e padrões internacionais de proteção de dados. Sua privacidade é nossa prioridade.",
        },
        {
          icon: "scale",
          title: "Estrutura Legal",
          description: "Nossas operações cumprem as leis internacionais que regem iniciativas sem fins lucrativos e financiamento científico.",
        },
        {
          icon: "file",
          title: "Transparência",
          description: "Todos os registros financeiros e relatórios de projetos são publicamente acessíveis em nossos relatórios trimestrais de transparência.",
        },
      ],
      commitment: {
        title: "Nosso Compromisso",
        description: "Estamos comprometidos em operar com total transparência e em plena conformidade com todas as leis e regulamentos aplicáveis. Cada contribuição é tratada com os mais altos padrões de segurança e responsabilidade.",
      },
      links: {
        title: "Documentos Importantes",
        privacy: "Política de Privacidade",
        terms: "Termos de Serviço",
        contact: "Entre em Contato",
      },
    },
    ru: {
      backButton: "Вернуться на главную",
      title: "Юридическая информация",
      subtitle: "Прозрачность и соответствие во всем, что мы делаем",
      sections: [
        {
          icon: "shield",
          title: "Защита данных",
          description: "Мы соблюдаем GDPR, CCPA и международные стандарты защиты данных. Ваша конфиденциальность — наш приоритет.",
        },
        {
          icon: "scale",
          title: "Правовая база",
          description: "Наша деятельность соответствует международным законам, регулирующим некоммерческие инициативы и научное финансирование.",
        },
        {
          icon: "file",
          title: "Прозрачность",
          description: "Все финансовые записи и отчеты о проектах находятся в открытом доступе в наших ежеквартальных отчетах о прозрачности.",
        },
      ],
      commitment: {
        title: "Наше обязательство",
        description: "Мы обязуемся работать с полной прозрачностью и в полном соответствии со всеми применимыми законами и правилами. Каждый вклад обрабатывается с высочайшими стандартами безопасности и подотчетности.",
      },
      links: {
        title: "Важные документы",
        privacy: "Политика конфиденциальности",
        terms: "Условия использования",
        contact: "Свяжитесь с нами",
      },
    },
  };

  const t = content[language];

  const iconMap = {
    shield: Shield,
    scale: Scale,
    file: FileText,
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

        {/* Sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.sections.map((section, index) => {
            const Icon = iconMap[section.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 hover:border-accent/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{section.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Commitment */}
        <motion.div
          className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-4">{t.commitment.title}</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">{t.commitment.description}</p>
        </motion.div>

        {/* Links */}
        <motion.div
          className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6">{t.links.title}</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/privacy"
              className="p-4 rounded-xl bg-muted/20 hover:bg-accent/10 border border-muted/20 hover:border-accent/50 transition-all text-center"
            >
              <p className="font-medium">{t.links.privacy}</p>
            </Link>
            <Link
              href="/terms"
              className="p-4 rounded-xl bg-muted/20 hover:bg-accent/10 border border-muted/20 hover:border-accent/50 transition-all text-center"
            >
              <p className="font-medium">{t.links.terms}</p>
            </Link>
            <Link
              href="/contact"
              className="p-4 rounded-xl bg-muted/20 hover:bg-accent/10 border border-muted/20 hover:border-accent/50 transition-all text-center"
            >
              <p className="font-medium">{t.links.contact}</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
