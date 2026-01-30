"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Lock, Eye, Shield, Database, UserCheck, Globe } from "lucide-react";
import Link from "next/link";
import { fadeInUp } from "@/lib/motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function PrivacyPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      backButton: "Back to Home",
      title: "Privacy Policy",
      subtitle: "How we protect and handle your data",
      lastUpdated: "Last updated: January 30, 2026",
      sections: [
        {
          icon: "database",
          title: "Data We Collect",
          items: [
            "Email address (optional, only if you choose to provide it)",
            "Donation amount and currency preference",
            "Browser and device information for analytics",
            "IP address for security and fraud prevention",
          ],
        },
        {
          icon: "lock",
          title: "How We Use Your Data",
          items: [
            "Process your contributions securely",
            "Send updates about the initiative (only if requested)",
            "Improve our platform and user experience",
            "Comply with legal and regulatory requirements",
          ],
        },
        {
          icon: "shield",
          title: "Data Protection",
          items: [
            "Industry-standard encryption (TLS 1.3) for all data transmission",
            "Secure storage with encrypted databases",
            "Regular security audits and penetration testing",
            "Strict access controls and authentication",
          ],
        },
        {
          icon: "usercheck",
          title: "Your Rights",
          items: [
            "Access your personal data at any time",
            "Request correction of inaccurate data",
            "Request deletion of your data (right to be forgotten)",
            "Opt-out of communications at any time",
          ],
        },
        {
          icon: "eye",
          title: "Data Sharing",
          items: [
            "We never sell your data to third parties",
            "Payment processors only receive necessary transaction data",
            "Aggregated, anonymized data may be used for transparency reports",
            "Legal disclosure only when required by law",
          ],
        },
        {
          icon: "globe",
          title: "International Compliance",
          items: [
            "GDPR compliant (European Union)",
            "CCPA compliant (California, USA)",
            "Data residency options available",
            "Regular compliance audits",
          ],
        },
      ],
      contact: {
        title: "Questions About Privacy?",
        description: "If you have any questions or concerns about our privacy practices, please contact us at:",
        email: "privacy@mantossalvo.com",
      },
    },
    es: {
      backButton: "Volver al Inicio",
      title: "Política de Privacidad",
      subtitle: "Cómo protegemos y manejamos tus datos",
      lastUpdated: "Última actualización: 30 de enero de 2026",
      sections: [
        {
          icon: "database",
          title: "Datos que Recopilamos",
          items: [
            "Dirección de correo electrónico (opcional, solo si decides proporcionarla)",
            "Monto de donación y preferencia de moneda",
            "Información del navegador y dispositivo para análisis",
            "Dirección IP para seguridad y prevención de fraude",
          ],
        },
        {
          icon: "lock",
          title: "Cómo Usamos Tus Datos",
          items: [
            "Procesar tus contribuciones de forma segura",
            "Enviar actualizaciones sobre la iniciativa (solo si lo solicitas)",
            "Mejorar nuestra plataforma y experiencia de usuario",
            "Cumplir con requisitos legales y regulatorios",
          ],
        },
        {
          icon: "shield",
          title: "Protección de Datos",
          items: [
            "Cifrado estándar de la industria (TLS 1.3) para toda transmisión de datos",
            "Almacenamiento seguro con bases de datos cifradas",
            "Auditorías de seguridad y pruebas de penetración regulares",
            "Controles de acceso y autenticación estrictos",
          ],
        },
        {
          icon: "usercheck",
          title: "Tus Derechos",
          items: [
            "Acceder a tus datos personales en cualquier momento",
            "Solicitar corrección de datos inexactos",
            "Solicitar eliminación de tus datos (derecho al olvido)",
            "Cancelar suscripción de comunicaciones en cualquier momento",
          ],
        },
        {
          icon: "eye",
          title: "Compartir Datos",
          items: [
            "Nunca vendemos tus datos a terceros",
            "Los procesadores de pago solo reciben datos de transacción necesarios",
            "Datos agregados y anonimizados pueden usarse para informes de transparencia",
            "Divulgación legal solo cuando lo requiera la ley",
          ],
        },
        {
          icon: "globe",
          title: "Cumplimiento Internacional",
          items: [
            "Cumplimiento con GDPR (Unión Europea)",
            "Cumplimiento con CCPA (California, EE.UU.)",
            "Opciones de residencia de datos disponibles",
            "Auditorías de cumplimiento regulares",
          ],
        },
      ],
      contact: {
        title: "¿Preguntas sobre Privacidad?",
        description: "Si tienes alguna pregunta o inquietud sobre nuestras prácticas de privacidad, contáctanos en:",
        email: "privacy@mantossalvo.com",
      },
    },
    ko: {
      backButton: "홈으로 돌아가기",
      title: "개인정보 보호정책",
      subtitle: "귀하의 데이터를 보호하고 처리하는 방법",
      lastUpdated: "마지막 업데이트: 2026년 1월 30일",
      sections: [
        {
          icon: "database",
          title: "수집하는 데이터",
          items: [
            "이메일 주소 (선택사항, 제공하기로 선택한 경우에만)",
            "기부 금액 및 통화 선호도",
            "분석을 위한 브라우저 및 장치 정보",
            "보안 및 사기 방지를 위한 IP 주소",
          ],
        },
        {
          icon: "lock",
          title: "데이터 사용 방법",
          items: [
            "기여금을 안전하게 처리",
            "이니셔티브에 대한 업데이트 전송 (요청한 경우에만)",
            "플랫폼 및 사용자 경험 개선",
            "법적 및 규제 요구사항 준수",
          ],
        },
        {
          icon: "shield",
          title: "데이터 보호",
          items: [
            "모든 데이터 전송에 대한 업계 표준 암호화 (TLS 1.3)",
            "암호화된 데이터베이스를 통한 안전한 저장",
            "정기적인 보안 감사 및 침투 테스트",
            "엄격한 액세스 제어 및 인증",
          ],
        },
        {
          icon: "usercheck",
          title: "귀하의 권리",
          items: [
            "언제든지 개인 데이터에 액세스",
            "부정확한 데이터 수정 요청",
            "데이터 삭제 요청 (잊혀질 권리)",
            "언제든지 커뮤니케이션 수신 거부",
          ],
        },
        {
          icon: "eye",
          title: "데이터 공유",
          items: [
            "제3자에게 귀하의 데이터를 절대 판매하지 않습니다",
            "결제 처리업체는 필요한 거래 데이터만 받습니다",
            "집계되고 익명화된 데이터는 투명성 보고서에 사용될 수 있습니다",
            "법적 공개는 법률에서 요구하는 경우에만",
          ],
        },
        {
          icon: "globe",
          title: "국제 규정 준수",
          items: [
            "GDPR 준수 (유럽 연합)",
            "CCPA 준수 (캘리포니아, 미국)",
            "데이터 거주 옵션 사용 가능",
            "정기적인 규정 준수 감사",
          ],
        },
      ],
      contact: {
        title: "개인정보에 대한 질문이 있으신가요?",
        description: "개인정보 보호 관행에 대한 질문이나 우려사항이 있으시면 다음으로 문의하십시오:",
        email: "privacy@mantossalvo.com",
      },
    },
    ja: {
      backButton: "ホームに戻る",
      title: "プライバシーポリシー",
      subtitle: "お客様のデータを保護し、処理する方法",
      lastUpdated: "最終更新日: 2026年1月30日",
      sections: [
        {
          icon: "database",
          title: "収集するデータ",
          items: [
            "メールアドレス（オプション、提供を選択した場合のみ）",
            "寄付額と通貨の設定",
            "分析用のブラウザとデバイス情報",
            "セキュリティと不正防止のためのIPアドレス",
          ],
        },
        {
          icon: "lock",
          title: "データの使用方法",
          items: [
            "寄付を安全に処理",
            "イニシアチブに関する更新を送信（リクエストした場合のみ）",
            "プラットフォームとユーザーエクスペリエンスの向上",
            "法的および規制要件への準拠",
          ],
        },
        {
          icon: "shield",
          title: "データ保護",
          items: [
            "すべてのデータ送信に業界標準の暗号化（TLS 1.3）",
            "暗号化されたデータベースによる安全な保存",
            "定期的なセキュリティ監査とペネトレーションテスト",
            "厳格なアクセス制御と認証",
          ],
        },
        {
          icon: "usercheck",
          title: "お客様の権利",
          items: [
            "いつでも個人データにアクセス",
            "不正確なデータの修正を要求",
            "データの削除を要求（忘れられる権利）",
            "いつでもコミュニケーションをオプトアウト",
          ],
        },
        {
          icon: "eye",
          title: "データ共有",
          items: [
            "第三者にお客様のデータを販売することはありません",
            "決済処理業者は必要な取引データのみを受け取ります",
            "集約された匿名化されたデータは透明性レポートに使用される場合があります",
            "法的開示は法律で要求された場合のみ",
          ],
        },
        {
          icon: "globe",
          title: "国際的なコンプライアンス",
          items: [
            "GDPR準拠（欧州連合）",
            "CCPA準拠（カリフォルニア州、米国）",
            "データレジデンシーオプションが利用可能",
            "定期的なコンプライアンス監査",
          ],
        },
      ],
      contact: {
        title: "プライバシーについてのご質問は？",
        description: "プライバシー慣行についてご質問や懸念がある場合は、以下までお問い合わせください：",
        email: "privacy@mantossalvo.com",
      },
    },
    zh: {
      backButton: "返回首页",
      title: "隐私政策",
      subtitle: "我们如何保护和处理您的数据",
      lastUpdated: "最后更新：2026年1月30日",
      sections: [
        {
          icon: "database",
          title: "我们收集的数据",
          items: [
            "电子邮件地址（可选，仅在您选择提供时）",
            "捐款金额和货币偏好",
            "用于分析的浏览器和设备信息",
            "用于安全和防欺诈的IP地址",
          ],
        },
        {
          icon: "lock",
          title: "我们如何使用您的数据",
          items: [
            "安全地处理您的捐款",
            "发送有关倡议的更新（仅在请求时）",
            "改善我们的平台和用户体验",
            "遵守法律和监管要求",
          ],
        },
        {
          icon: "shield",
          title: "数据保护",
          items: [
            "所有数据传输的行业标准加密（TLS 1.3）",
            "使用加密数据库进行安全存储",
            "定期安全审计和渗透测试",
            "严格的访问控制和身份验证",
          ],
        },
        {
          icon: "usercheck",
          title: "您的权利",
          items: [
            "随时访问您的个人数据",
            "请求更正不准确的数据",
            "请求删除您的数据（被遗忘权）",
            "随时退出通讯",
          ],
        },
        {
          icon: "eye",
          title: "数据共享",
          items: [
            "我们绝不会将您的数据出售给第三方",
            "支付处理商仅接收必要的交易数据",
            "汇总的匿名数据可能用于透明度报告",
            "仅在法律要求时进行法律披露",
          ],
        },
        {
          icon: "globe",
          title: "国际合规",
          items: [
            "符合GDPR（欧盟）",
            "符合CCPA（美国加利福尼亚州）",
            "提供数据驻留选项",
            "定期合规审计",
          ],
        },
      ],
      contact: {
        title: "有关隐私的问题？",
        description: "如果您对我们的隐私做法有任何问题或疑虑，请通过以下方式联系我们：",
        email: "privacy@mantossalvo.com",
      },
    },
    hi: {
      backButton: "होम पर वापस जाएं",
      title: "गोपनीयता नीति",
      subtitle: "हम आपके डेटा की सुरक्षा और प्रबंधन कैसे करते हैं",
      lastUpdated: "अंतिम अपडेट: 30 जनवरी, 2026",
      sections: [
        {
          icon: "database",
          title: "हम जो डेटा एकत्र करते हैं",
          items: [
            "ईमेल पता (वैकल्पिक, केवल तभी जब आप इसे प्रदान करना चुनते हैं)",
            "दान राशि और मुद्रा प्राथमिकता",
            "विश्लेषण के लिए ब्राउज़र और डिवाइस जानकारी",
            "सुरक्षा और धोखाधड़ी रोकथाम के लिए IP पता",
          ],
        },
        {
          icon: "lock",
          title: "हम आपके डेटा का उपयोग कैसे करते हैं",
          items: [
            "आपके योगदान को सुरक्षित रूप से प्रोसेस करें",
            "पहल के बारे में अपडेट भेजें (केवल अनुरोध किए जाने पर)",
            "हमारे प्लेटफ़ॉर्म और उपयोगकर्ता अनुभव में सुधार करें",
            "कानूनी और नियामक आवश्यकताओं का अनुपालन करें",
          ],
        },
        {
          icon: "shield",
          title: "डेटा सुरक्षा",
          items: [
            "सभी डेटा ट्रांसमिशन के लिए उद्योग-मानक एन्क्रिप्शन (TLS 1.3)",
            "एन्क्रिप्टेड डेटाबेस के साथ सुरक्षित भंडारण",
            "नियमित सुरक्षा ऑडिट और पेनिट्रेशन परीक्षण",
            "सख्त पहुंच नियंत्रण और प्रमाणीकरण",
          ],
        },
        {
          icon: "usercheck",
          title: "आपके अधिकार",
          items: [
            "किसी भी समय अपने व्यक्तिगत डेटा तक पहुंचें",
            "गलत डेटा के सुधार का अनुरोध करें",
            "अपने डेटा को हटाने का अनुरोध करें (भूल जाने का अधिकार)",
            "किसी भी समय संचार से बाहर निकलें",
          ],
        },
        {
          icon: "eye",
          title: "डेटा साझाकरण",
          items: [
            "हम कभी भी आपका डेटा तीसरे पक्ष को नहीं बेचते हैं",
            "भुगतान प्रोसेसर केवल आवश्यक लेनदेन डेटा प्राप्त करते हैं",
            "समग्र, गुमनाम डेटा का उपयोग पारदर्शिता रिपोर्ट के लिए किया जा सकता है",
            "कानूनी खुलासा केवल कानून द्वारा आवश्यक होने पर",
          ],
        },
        {
          icon: "globe",
          title: "अंतर्राष्ट्रीय अनुपालन",
          items: [
            "GDPR अनुपालक (यूरोपीय संघ)",
            "CCPA अनुपालक (कैलिफोर्निया, यूएसए)",
            "डेटा रेजिडेंसी विकल्प उपलब्ध",
            "नियमित अनुपालन ऑडिट",
          ],
        },
      ],
      contact: {
        title: "गोपनीयता के बारे में प्रश्न?",
        description: "यदि आपके पास हमारी गोपनीयता प्रथाओं के बारे में कोई प्रश्न या चिंता है, तो कृपया हमसे संपर्क करें:",
        email: "privacy@mantossalvo.com",
      },
    },
    bn: {
      backButton: "হোমে ফিরে যান",
      title: "গোপনীয়তা নীতি",
      subtitle: "আমরা কীভাবে আপনার ডেটা সুরক্ষা এবং পরিচালনা করি",
      lastUpdated: "সর্বশেষ আপডেট: ৩০ জানুয়ারি, ২০২৬",
      sections: [
        {
          icon: "database",
          title: "আমরা যে ডেটা সংগ্রহ করি",
          items: [
            "ইমেল ঠিকানা (ঐচ্ছিক, শুধুমাত্র যদি আপনি প্রদান করতে চান)",
            "দান পরিমাণ এবং মুদ্রা পছন্দ",
            "বিশ্লেষণের জন্য ব্রাউজার এবং ডিভাইস তথ্য",
            "নিরাপত্তা এবং জালিয়াতি প্রতিরোধের জন্য IP ঠিকানা",
          ],
        },
        {
          icon: "lock",
          title: "আমরা কীভাবে আপনার ডেটা ব্যবহার করি",
          items: [
            "আপনার অবদান নিরাপদে প্রক্রিয়া করুন",
            "উদ্যোগ সম্পর্কে আপডেট পাঠান (শুধুমাত্র অনুরোধ করা হলে)",
            "আমাদের প্ল্যাটফর্ম এবং ব্যবহারকারীর অভিজ্ঞতা উন্নত করুন",
            "আইনি এবং নিয়ন্ত্রক প্রয়োজনীয়তা মেনে চলুন",
          ],
        },
        {
          icon: "shield",
          title: "ডেটা সুরক্ষা",
          items: [
            "সমস্ত ডেটা ট্রান্সমিশনের জন্য শিল্প-মানক এনক্রিপশন (TLS 1.3)",
            "এনক্রিপ্ট করা ডাটাবেস সহ নিরাপদ স্টোরেজ",
            "নিয়মিত নিরাপত্তা নিরীক্ষা এবং পেনিট্রেশন পরীক্ষা",
            "কঠোর অ্যাক্সেস নিয়ন্ত্রণ এবং প্রমাণীকরণ",
          ],
        },
        {
          icon: "usercheck",
          title: "আপনার অধিকার",
          items: [
            "যেকোনো সময় আপনার ব্যক্তিগত ডেটা অ্যাক্সেস করুন",
            "ভুল ডেটার সংশোধনের অনুরোধ করুন",
            "আপনার ডেটা মুছে ফেলার অনুরোধ করুন (ভুলে যাওয়ার অধিকার)",
            "যেকোনো সময় যোগাযোগ থেকে অপ্ট-আউট করুন",
          ],
        },
        {
          icon: "eye",
          title: "ডেটা শেয়ারিং",
          items: [
            "আমরা কখনই তৃতীয় পক্ষের কাছে আপনার ডেটা বিক্রি করি না",
            "পেমেন্ট প্রসেসররা শুধুমাত্র প্রয়োজনীয় লেনদেন ডেটা পান",
            "সমষ্টিগত, বেনামী ডেটা স্বচ্ছতা প্রতিবেদনের জন্য ব্যবহার করা হতে পারে",
            "আইনি প্রকাশ শুধুমাত্র আইন দ্বারা প্রয়োজন হলে",
          ],
        },
        {
          icon: "globe",
          title: "আন্তর্জাতিক সম্মতি",
          items: [
            "GDPR সম্মত (ইউরোপীয় ইউনিয়ন)",
            "CCPA সম্মত (ক্যালিফোর্নিয়া, ইউএসএ)",
            "ডেটা রেসিডেন্সি বিকল্প উপলব্ধ",
            "নিয়মিত সম্মতি নিরীক্ষা",
          ],
        },
      ],
      contact: {
        title: "গোপনীয়তা সম্পর্কে প্রশ্ন?",
        description: "যদি আমাদের গোপনীয়তা অনুশীলন সম্পর্কে আপনার কোন প্রশ্ন বা উদ্বেগ থাকে, তাহলে দয়া করে আমাদের সাথে যোগাযোগ করুন:",
        email: "privacy@mantossalvo.com",
      },
    },
    pt: {
      backButton: "Voltar à Página Inicial",
      title: "Política de Privacidade",
      subtitle: "Como protegemos e tratamos seus dados",
      lastUpdated: "Última atualização: 30 de janeiro de 2026",
      sections: [
        {
          icon: "database",
          title: "Dados que Coletamos",
          items: [
            "Endereço de e-mail (opcional, apenas se você optar por fornecê-lo)",
            "Valor da doação e preferência de moeda",
            "Informações do navegador e dispositivo para análise",
            "Endereço IP para segurança e prevenção de fraudes",
          ],
        },
        {
          icon: "lock",
          title: "Como Usamos Seus Dados",
          items: [
            "Processar suas contribuições de forma segura",
            "Enviar atualizações sobre a iniciativa (apenas se solicitado)",
            "Melhorar nossa plataforma e experiência do usuário",
            "Cumprir requisitos legais e regulatórios",
          ],
        },
        {
          icon: "shield",
          title: "Proteção de Dados",
          items: [
            "Criptografia padrão da indústria (TLS 1.3) para toda transmissão de dados",
            "Armazenamento seguro com bancos de dados criptografados",
            "Auditorias de segurança e testes de penetração regulares",
            "Controles de acesso e autenticação rigorosos",
          ],
        },
        {
          icon: "usercheck",
          title: "Seus Direitos",
          items: [
            "Acessar seus dados pessoais a qualquer momento",
            "Solicitar correção de dados imprecisos",
            "Solicitar exclusão de seus dados (direito ao esquecimento)",
            "Cancelar comunicações a qualquer momento",
          ],
        },
        {
          icon: "eye",
          title: "Compartilhamento de Dados",
          items: [
            "Nunca vendemos seus dados a terceiros",
            "Processadores de pagamento recebem apenas dados de transação necessários",
            "Dados agregados e anonimizados podem ser usados para relatórios de transparência",
            "Divulgação legal apenas quando exigido por lei",
          ],
        },
        {
          icon: "globe",
          title: "Conformidade Internacional",
          items: [
            "Conforme GDPR (União Europeia)",
            "Conforme CCPA (Califórnia, EUA)",
            "Opções de residência de dados disponíveis",
            "Auditorias de conformidade regulares",
          ],
        },
      ],
      contact: {
        title: "Perguntas Sobre Privacidade?",
        description: "Se você tiver alguma dúvida ou preocupação sobre nossas práticas de privacidade, entre em contato conosco em:",
        email: "privacy@mantossalvo.com",
      },
    },
    ru: {
      backButton: "Вернуться на главную",
      title: "Политика конфиденциальности",
      subtitle: "Как мы защищаем и обрабатываем ваши данные",
      lastUpdated: "Последнее обновление: 30 января 2026 г.",
      sections: [
        {
          icon: "database",
          title: "Данные, которые мы собираем",
          items: [
            "Адрес электронной почты (необязательно, только если вы решите его предоставить)",
            "Сумма пожертвования и предпочтение валюты",
            "Информация о браузере и устройстве для аналитики",
            "IP-адрес для безопасности и предотвращения мошенничества",
          ],
        },
        {
          icon: "lock",
          title: "Как мы используем ваши данные",
          items: [
            "Безопасно обрабатывать ваши взносы",
            "Отправлять обновления об инициативе (только по запросу)",
            "Улучшать нашу платформу и пользовательский опыт",
            "Соблюдать юридические и регуляторные требования",
          ],
        },
        {
          icon: "shield",
          title: "Защита данных",
          items: [
            "Отраслевое шифрование (TLS 1.3) для всей передачи данных",
            "Безопасное хранение с зашифрованными базами данных",
            "Регулярные проверки безопасности и тесты на проникновение",
            "Строгий контроль доступа и аутентификация",
          ],
        },
        {
          icon: "usercheck",
          title: "Ваши права",
          items: [
            "Доступ к вашим персональным данным в любое время",
            "Запрос на исправление неточных данных",
            "Запрос на удаление ваших данных (право быть забытым)",
            "Отказ от коммуникаций в любое время",
          ],
        },
        {
          icon: "eye",
          title: "Обмен данными",
          items: [
            "Мы никогда не продаем ваши данные третьим лицам",
            "Платежные процессоры получают только необходимые данные транзакций",
            "Агрегированные анонимные данные могут использоваться для отчетов о прозрачности",
            "Юридическое раскрытие только при требовании закона",
          ],
        },
        {
          icon: "globe",
          title: "Международное соответствие",
          items: [
            "Соответствие GDPR (Европейский Союз)",
            "Соответствие CCPA (Калифорния, США)",
            "Доступны варианты размещения данных",
            "Регулярные проверки соответствия",
          ],
        },
      ],
      contact: {
        title: "Вопросы о конфиденциальности?",
        description: "Если у вас есть вопросы или опасения по поводу наших методов обеспечения конфиденциальности, свяжитесь с нами по адресу:",
        email: "privacy@mantossalvo.com",
      },
    },
  };

  const t = content[language];

  const iconMap = {
    database: Database,
    lock: Lock,
    shield: Shield,
    usercheck: UserCheck,
    eye: Eye,
    globe: Globe,
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
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto mb-4">{t.subtitle}</p>
          <p className="text-sm text-foreground/40">{t.lastUpdated}</p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8 mb-16">
          {t.sections.map((section, index) => {
            const Icon = iconMap[section.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-foreground/70 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact */}
        <motion.div
          className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-lg text-foreground/80 mb-4">{t.contact.description}</p>
          <a
            href={`mailto:${t.contact.email}`}
            className="text-accent hover:text-primary font-semibold text-xl transition-colors"
          >
            {t.contact.email}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
