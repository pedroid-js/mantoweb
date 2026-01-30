"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import DonationWidget from "@/components/DonationWidget";
import { fadeInUp } from "@/lib/motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function DonatePage() {
  const { language } = useLanguage();

  const content = {
    en: {
      backButton: "Back to Home",
      title: "Support the Initiative",
      subtitle: "Every contribution supports scientific outreach and education",
      whyDonate: "Why Your Support Matters",
      reasons: [
        "Fund scientific outreach programs",
        "Support open educational materials",
        "Enable public research projects",
        "Join a collective movement",
      ],
      security: {
        title: "Your Security Matters",
        points: [
          "Industry-standard encryption",
          "Secure payment processing",
          "No data sold to third parties",
          "Quarterly transparency reports",
        ],
      },
    },
    es: {
      backButton: "Volver al Inicio",
      title: "Apoya la Iniciativa",
      subtitle: "Cada contribución apoya divulgación científica y educación",
      whyDonate: "Por Qué Tu Apoyo Importa",
      reasons: [
        "Financiar programas de divulgación científica",
        "Apoyar materiales educativos abiertos",
        "Habilitar proyectos de investigación pública",
        "Unirse a un movimiento colectivo",
      ],
      security: {
        title: "Tu Seguridad Importa",
        points: [
          "Encriptación estándar de la industria",
          "Procesamiento de pagos seguro",
          "No vendemos datos a terceros",
          "Informes de transparencia trimestrales",
        ],
      },
    },
    ko: {
      backButton: "홈으로 돌아가기",
      title: "이니셔티브 지원",
      subtitle: "모든 기여는 과학 홍보와 교육을 지원합니다",
      whyDonate: "귀하의 지원이 중요한 이유",
      reasons: [
        "과학 홍보 프로그램 자금 지원",
        "공개 교육 자료 지원",
        "공공 연구 프로젝트 활성화",
        "집단 운동에 참여",
      ],
      security: {
        title: "귀하의 보안이 중요합니다",
        points: [
          "업계 표준 암호화",
          "안전한 결제 처리",
          "제3자에게 데이터 판매 안 함",
          "분기별 투명성 보고서",
        ],
      },
    },
    ja: {
      backButton: "ホームに戻る",
      title: "イニシアチブを支援",
      subtitle: "すべての寄付は科学的アウトリーチと教育を支援します",
      whyDonate: "あなたのサポートが重要な理由",
      reasons: [
        "科学的アウトリーチプログラムへの資金提供",
        "オープン教育資料のサポート",
        "公共研究プロジェクトの実現",
        "集団運動への参加",
      ],
      security: {
        title: "あなたのセキュリティが重要です",
        points: [
          "業界標準の暗号化",
          "安全な決済処理",
          "第三者へのデータ販売なし",
          "四半期ごとの透明性レポート",
        ],
      },
    },
    zh: {
      backButton: "返回首页",
      title: "支持这项倡议",
      subtitle: "每一份贡献都支持科学推广和教育",
      whyDonate: "为什么您的支持很重要",
      reasons: [
        "资助科学推广项目",
        "支持开放教育材料",
        "促进公共研究项目",
        "加入集体运动",
      ],
      security: {
        title: "您的安全很重要",
        points: [
          "行业标准加密",
          "安全支付处理",
          "不向第三方出售数据",
          "季度透明度报告",
        ],
      },
    },
    hi: {
      backButton: "होम पर वापस जाएं",
      title: "पहल का समर्थन करें",
      subtitle: "हर योगदान वैज्ञानिक पहुंच और शिक्षा का समर्थन करता है",
      whyDonate: "आपका समर्थन क्यों मायने रखता है",
      reasons: [
        "वैज्ञानिक पहुंच कार्यक्रमों को वित्त पोषित करें",
        "खुली शैक्षिक सामग्री का समर्थन करें",
        "सार्वजनिक अनुसंधान परियोजनाओं को सक्षम करें",
        "सामूहिक आंदोलन में शामिल हों",
      ],
      security: {
        title: "आपकी सुरक्षा मायने रखती है",
        points: [
          "उद्योग-मानक एन्क्रिप्शन",
          "सुरक्षित भुगतान प्रसंस्करण",
          "तीसरे पक्षों को कोई डेटा नहीं बेचा गया",
          "त्रैमासिक पारदर्शिता रिपोर्ट",
        ],
      },
    },
    bn: {
      backButton: "হোমে ফিরে যান",
      title: "উদ্যোগ সমর্থন করুন",
      subtitle: "প্রতিটি অবদান বৈজ্ঞানিক বিস্তার এবং শিক্ষা সমর্থন করে",
      whyDonate: "আপনার সমর্থন কেন গুরুত্বপূর্ণ",
      reasons: [
        "বৈজ্ঞানিক বিস্তার কর্মসূচিতে তহবিল দিন",
        "উন্মুক্ত শিক্ষা উপকরণ সমর্থন করুন",
        "সর্বজনীন গবেষণা প্রকল্প সক্ষম করুন",
        "একটি সমষ্টিগত আন্দোলনে যোগ দিন",
      ],
      security: {
        title: "আপনার নিরাপত্তা গুরুত্বপূর্ণ",
        points: [
          "শিল্প-মানক এনক্রিপশন",
          "সুরক্ষিত পেমেন্ট প্রক্রিয়াকরণ",
          "তৃতীয় পক্ষের কাছে কোনো ডেটা বিক্রি করা হয় না",
          "ত্রৈমাসিক স্বচ্ছতা প্রতিবেদন",
        ],
      },
    },
    pt: {
      backButton: "Voltar ao Início",
      title: "Apoie a Iniciativa",
      subtitle: "Cada contribuição apoia divulgação científica e educação",
      whyDonate: "Por Que Seu Apoio Importa",
      reasons: [
        "Financiar programas de divulgação científica",
        "Apoiar materiais educacionais abertos",
        "Habilitar projetos de pesquisa pública",
        "Junte-se a um movimento coletivo",
      ],
      security: {
        title: "Sua Segurança Importa",
        points: [
          "Criptografia de padrão industrial",
          "Processamento de pagamento seguro",
          "Nenhum dado vendido a terceiros",
          "Relatórios trimestrais de transparência",
        ],
      },
    },
    ru: {
      backButton: "Вернуться на главную",
      title: "Поддержите инициативу",
      subtitle: "Каждый вклад поддерживает научную деятельность и образование",
      whyDonate: "Почему ваша поддержка важна",
      reasons: [
        "Финансировать программы научно-просветительской деятельности",
        "Поддержать открытые образовательные материалы",
        "Обеспечить публичные исследовательские проекты",
        "Присоединиться к коллективному движению",
      ],
      security: {
        title: "Ваша безопасность важна",
        points: [
          "Шифрование промышленного стандарта",
          "Безопасная обработка платежей",
          "Данные не продаются третьим лицам",
          "Квартальные отчеты о прозрачности",
        ],
      },
    },
  };

  const t = content[language];

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
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donation Widget */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <DonationWidget language={language} />
          </motion.div>

          {/* Why Donate */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">{t.whyDonate}</h2>
              <div className="space-y-4">
                {t.reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-foreground/80">{reason}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-muted/20 backdrop-blur-sm rounded-2xl p-6 border border-muted/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-4">{t.security.title}</h3>
              <ul className="space-y-3">
                {t.security.points.map((point, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-foreground/70">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
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
