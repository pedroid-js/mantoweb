"use client";

import { motion } from "framer-motion";
import { ArrowLeft, FileText, Users, AlertCircle, Shield, Scale, BookOpen } from "lucide-react";
import Link from "next/link";
import { fadeInUp } from "@/lib/motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function TermsPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      backButton: "Back to Home",
      title: "Terms of Service",
      subtitle: "Agreement for using our platform",
      lastUpdated: "Last updated: January 30, 2026",
      sections: [
        {
          icon: "users",
          title: "1. Acceptance of Terms",
          content: "By accessing and using the Mantossalvo platform, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
        },
        {
          icon: "bookopen",
          title: "2. Use of Platform",
          content: "You may use our platform to make voluntary contributions to support scientific outreach and education initiatives. All contributions are final and non-refundable unless required by law. You must be at least 18 years old or have parental consent to use our services.",
        },
        {
          icon: "shield",
          title: "3. User Responsibilities",
          content: "You agree to provide accurate information, use the platform in compliance with all applicable laws, not engage in fraudulent or malicious activities, and respect the intellectual property rights of Mantossalvo and third parties.",
        },
        {
          icon: "filetext",
          title: "4. Contributions and Payments",
          content: "All financial contributions are processed through secure third-party payment processors. We do not store your payment card information. Contributions support scientific research, education materials, and public outreach projects as described in our transparency reports.",
        },
        {
          icon: "alert",
          title: "5. Limitation of Liability",
          content: "Mantossalvo is provided 'as is' without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability shall not exceed the amount of your contribution.",
        },
        {
          icon: "scale",
          title: "6. Governing Law",
          content: "These Terms are governed by international law and the laws of the jurisdictions where we operate. Any disputes will be resolved through arbitration in accordance with international arbitration rules.",
        },
      ],
      additional: {
        title: "Additional Information",
        items: [
          "We reserve the right to modify these Terms at any time with notice",
          "Continued use of the platform constitutes acceptance of modified terms",
          "We may terminate or suspend access for violations of these terms",
          "All content on the platform is protected by copyright and trademark laws",
        ],
      },
      contact: {
        title: "Questions About These Terms?",
        description: "If you have any questions about our Terms of Service, please contact us at:",
        email: "legal@mantossalvo.com",
      },
    },
    es: {
      backButton: "Volver al Inicio",
      title: "Términos de Servicio",
      subtitle: "Acuerdo para usar nuestra plataforma",
      lastUpdated: "Última actualización: 30 de enero de 2026",
      sections: [
        {
          icon: "users",
          title: "1. Aceptación de Términos",
          content: "Al acceder y usar la plataforma Mantossalvo, aceptas y acuerdas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con estos términos, por favor no uses nuestros servicios.",
        },
        {
          icon: "bookopen",
          title: "2. Uso de la Plataforma",
          content: "Puedes usar nuestra plataforma para hacer contribuciones voluntarias para apoyar iniciativas de divulgación científica y educación. Todas las contribuciones son finales y no reembolsables a menos que lo exija la ley. Debes tener al menos 18 años o contar con el consentimiento de tus padres para usar nuestros servicios.",
        },
        {
          icon: "shield",
          title: "3. Responsabilidades del Usuario",
          content: "Aceptas proporcionar información precisa, usar la plataforma en cumplimiento con todas las leyes aplicables, no participar en actividades fraudulentas o maliciosas, y respetar los derechos de propiedad intelectual de Mantossalvo y terceros.",
        },
        {
          icon: "filetext",
          title: "4. Contribuciones y Pagos",
          content: "Todas las contribuciones financieras se procesan a través de procesadores de pago seguros de terceros. No almacenamos la información de tu tarjeta de pago. Las contribuciones apoyan investigación científica, materiales educativos y proyectos de divulgación pública como se describe en nuestros informes de transparencia.",
        },
        {
          icon: "alert",
          title: "5. Limitación de Responsabilidad",
          content: "Mantossalvo se proporciona 'tal cual' sin garantías de ningún tipo. No somos responsables de ningún daño indirecto, incidental o consecuente que surja del uso de la plataforma. Nuestra responsabilidad total no excederá el monto de tu contribución.",
        },
        {
          icon: "scale",
          title: "6. Ley Aplicable",
          content: "Estos Términos se rigen por la ley internacional y las leyes de las jurisdicciones donde operamos. Cualquier disputa se resolverá mediante arbitraje de acuerdo con las reglas de arbitraje internacional.",
        },
      ],
      additional: {
        title: "Información Adicional",
        items: [
          "Nos reservamos el derecho de modificar estos Términos en cualquier momento con aviso",
          "El uso continuo de la plataforma constituye aceptación de los términos modificados",
          "Podemos terminar o suspender el acceso por violaciones de estos términos",
          "Todo el contenido de la plataforma está protegido por leyes de derechos de autor y marcas registradas",
        ],
      },
      contact: {
        title: "¿Preguntas sobre estos Términos?",
        description: "Si tienes alguna pregunta sobre nuestros Términos de Servicio, contáctanos en:",
        email: "legal@mantossalvo.com",
      },
    },
    ko: {
      backButton: "홈으로 돌아가기",
      title: "서비스 약관",
      subtitle: "플랫폼 사용 계약",
      lastUpdated: "마지막 업데이트: 2026년 1월 30일",
      sections: [
        {
          icon: "users",
          title: "1. 약관 동의",
          content: "Mantossalvo 플랫폼에 접근하고 사용함으로써 귀하는 이 서비스 약관에 구속되는 것에 동의합니다. 이 약관에 동의하지 않으시면 서비스를 사용하지 마십시오.",
        },
        {
          icon: "bookopen",
          title: "2. 플랫폼 사용",
          content: "귀하는 과학 홍보 및 교육 이니셔티브를 지원하기 위해 자발적 기여를 하기 위해 플랫폼을 사용할 수 있습니다. 모든 기여는 최종적이며 법률에서 요구하지 않는 한 환불되지 않습니다. 서비스를 사용하려면 최소 18세 이상이거나 부모의 동의가 있어야 합니다.",
        },
        {
          icon: "shield",
          title: "3. 사용자 책임",
          content: "귀하는 정확한 정보를 제공하고, 모든 적용 가능한 법률을 준수하여 플랫폼을 사용하고, 사기 또는 악의적인 활동에 참여하지 않으며, Mantossalvo 및 제3자의 지적 재산권을 존중하는 데 동의합니다.",
        },
        {
          icon: "filetext",
          title: "4. 기여 및 결제",
          content: "모든 금융 기여는 안전한 제3자 결제 처리업체를 통해 처리됩니다. 귀하의 결제 카드 정보를 저장하지 않습니다. 기여는 투명성 보고서에 설명된 대로 과학 연구, 교육 자료 및 공공 홍보 프로젝트를 지원합니다.",
        },
        {
          icon: "alert",
          title: "5. 책임의 제한",
          content: "Mantossalvo는 어떠한 종류의 보증도 없이 '있는 그대로' 제공됩니다. 플랫폼 사용으로 인해 발생하는 간접적, 우발적 또는 결과적 손해에 대해 책임을 지지 않습니다. 당사의 총 책임은 귀하의 기여 금액을 초과하지 않습니다.",
        },
        {
          icon: "scale",
          title: "6. 준거법",
          content: "이 약관은 국제법과 우리가 운영하는 관할 지역의 법률에 의해 관리됩니다. 모든 분쟁은 국제 중재 규칙에 따라 중재를 통해 해결됩니다.",
        },
      ],
      additional: {
        title: "추가 정보",
        items: [
          "통지와 함께 언제든지 이 약관을 수정할 권리를 보유합니다",
          "플랫폼의 지속적인 사용은 수정된 약관의 수락을 구성합니다",
          "이러한 약관 위반 시 액세스를 종료하거나 일시 중단할 수 있습니다",
          "플랫폼의 모든 콘텐츠는 저작권 및 상표법으로 보호됩니다",
        ],
      },
      contact: {
        title: "이 약관에 대한 질문이 있으신가요?",
        description: "서비스 약관에 대한 질문이 있으시면 다음으로 문의하십시오:",
        email: "legal@mantossalvo.com",
      },
    },
    ja: {
      backButton: "ホームに戻る",
      title: "利用規約",
      subtitle: "プラットフォーム使用のための契約",
      lastUpdated: "最終更新日: 2026年1月30日",
      sections: [
        {
          icon: "users",
          title: "1. 利用規約の承諾",
          content: "Mantossalvoプラットフォームにアクセスし使用することにより、この利用規約に拘束されることに同意します。これらの規約に同意しない場合は、サービスを使用しないでください。",
        },
        {
          icon: "bookopen",
          title: "2. プラットフォームの使用",
          content: "科学的アウトリーチと教育イニシアチブをサポートするために自発的な寄付を行うために、プラットフォームを使用できます。すべての寄付は最終的なものであり、法律で要求されない限り返金不可です。サービスを使用するには、18歳以上であるか、保護者の同意が必要です。",
        },
        {
          icon: "shield",
          title: "3. ユーザーの責任",
          content: "正確な情報を提供し、適用されるすべての法律を遵守してプラットフォームを使用し、詐欺的または悪意のある活動に関与せず、Mantossalvoおよび第三者の知的財産権を尊重することに同意します。",
        },
        {
          icon: "filetext",
          title: "4. 寄付と支払い",
          content: "すべての金融寄付は、安全な第三者決済処理業者を通じて処理されます。お客様の支払いカード情報は保存しません。寄付は、透明性レポートに記載されているように、科学研究、教育資料、公共アウトリーチプロジェクトをサポートします。",
        },
        {
          icon: "alert",
          title: "5. 責任の制限",
          content: "Mantossalvoは、いかなる種類の保証もなく「現状のまま」提供されます。プラットフォームの使用から生じる間接的、偶発的、または結果的な損害については責任を負いません。当社の総責任は、お客様の寄付額を超えないものとします。",
        },
        {
          icon: "scale",
          title: "6. 準拠法",
          content: "これらの規約は、国際法および当社が事業を行う管轄区域の法律によって規制されます。すべての紛争は、国際仲裁規則に従って仲裁により解決されます。",
        },
      ],
      additional: {
        title: "追加情報",
        items: [
          "通知とともにいつでもこれらの規約を変更する権利を留保します",
          "プラットフォームの継続的な使用は、変更された規約の受諾を構成します",
          "これらの規約違反に対してアクセスを終了または停止することがあります",
          "プラットフォーム上のすべてのコンテンツは著作権および商標法によって保護されています",
        ],
      },
      contact: {
        title: "これらの規約についてのご質問は？",
        description: "利用規約についてご質問がある場合は、以下までお問い合わせください：",
        email: "legal@mantossalvo.com",
      },
    },
    zh: {
      backButton: "返回首页",
      title: "服务条款",
      subtitle: "使用我们平台的协议",
      lastUpdated: "最后更新：2026年1月30日",
      sections: [
        {
          icon: "users",
          title: "1. 接受条款",
          content: "通过访问和使用Mantossalvo平台，您接受并同意受这些服务条款的约束。如果您不同意这些条款，请不要使用我们的服务。",
        },
        {
          icon: "bookopen",
          title: "2. 平台使用",
          content: "您可以使用我们的平台进行自愿捐款，以支持科学普及和教育倡议。除非法律要求，否则所有捐款都是最终的且不可退款。您必须年满18岁或获得父母同意才能使用我们的服务。",
        },
        {
          icon: "shield",
          title: "3. 用户责任",
          content: "您同意提供准确的信息，遵守所有适用法律使用平台，不参与欺诈或恶意活动，并尊重Mantossalvo和第三方的知识产权。",
        },
        {
          icon: "filetext",
          title: "4. 捐款和付款",
          content: "所有金融捐款都通过安全的第三方支付处理商处理。我们不存储您的支付卡信息。捐款支持科学研究、教育材料和公共宣传项目，如我们的透明度报告所述。",
        },
        {
          icon: "alert",
          title: "5. 责任限制",
          content: "Mantossalvo按\"现状\"提供，不提供任何形式的保证。我们对因您使用平台而产生的任何间接、附带或后果性损害不承担责任。我们的总责任不得超过您的捐款金额。",
        },
        {
          icon: "scale",
          title: "6. 适用法律",
          content: "这些条款受国际法和我们运营所在司法管辖区法律的管辖。任何争议将根据国际仲裁规则通过仲裁解决。",
        },
      ],
      additional: {
        title: "附加信息",
        items: [
          "我们保留随时修改这些条款并通知的权利",
          "继续使用平台即表示接受修改后的条款",
          "我们可能会因违反这些条款而终止或暂停访问",
          "平台上的所有内容均受版权和商标法保护",
        ],
      },
      contact: {
        title: "关于这些条款有疑问？",
        description: "如果您对我们的服务条款有任何疑问，请通过以下方式联系我们：",
        email: "legal@mantossalvo.com",
      },
    },
    hi: {
      backButton: "होम पर वापस जाएं",
      title: "सेवा की शर्तें",
      subtitle: "हमारे प्लेटफ़ॉर्म का उपयोग करने के लिए समझौता",
      lastUpdated: "अंतिम अपडेट: 30 जनवरी, 2026",
      sections: [
        {
          icon: "users",
          title: "1. शर्तों की स्वीकृति",
          content: "Mantossalvo प्लेटफ़ॉर्म तक पहुंच और उपयोग करके, आप इन सेवा की शर्तों से बंधे होने के लिए स्वीकार और सहमत हैं। यदि आप इन शर्तों से सहमत नहीं हैं, तो कृपया हमारी सेवाओं का उपयोग न करें।",
        },
        {
          icon: "bookopen",
          title: "2. प्लेटफ़ॉर्म का उपयोग",
          content: "आप वैज्ञानिक आउटरीच और शिक्षा पहलों का समर्थन करने के लिए स्वैच्छिक योगदान करने के लिए हमारे प्लेटफ़ॉर्म का उपयोग कर सकते हैं। सभी योगदान अंतिम और गैर-वापसी योग्य हैं जब तक कि कानून द्वारा आवश्यक न हो। हमारी सेवाओं का उपयोग करने के लिए आपकी आयु कम से कम 18 वर्ष होनी चाहिए या माता-पिता की सहमति होनी चाहिए।",
        },
        {
          icon: "shield",
          title: "3. उपयोगकर्ता जिम्मेदारियां",
          content: "आप सटीक जानकारी प्रदान करने, सभी लागू कानूनों का अनुपालन करते हुए प्लेटफ़ॉर्म का उपयोग करने, धोखाधड़ी या दुर्भावनापूर्ण गतिविधियों में शामिल नहीं होने और Mantossalvo और तीसरे पक्ष के बौद्धिक संपदा अधिकारों का सम्मान करने के लिए सहमत हैं।",
        },
        {
          icon: "filetext",
          title: "4. योगदान और भुगतान",
          content: "सभी वित्तीय योगदान सुरक्षित तीसरे पक्ष के भुगतान प्रोसेसर के माध्यम से संसाधित किए जाते हैं। हम आपकी भुगतान कार्ड जानकारी संग्रहीत नहीं करते हैं। योगदान वैज्ञानिक अनुसंधान, शैक्षिक सामग्री और सार्वजनिक आउटरीच परियोजनाओं का समर्थन करते हैं जैसा कि हमारी पारदर्शिता रिपोर्ट में वर्णित है।",
        },
        {
          icon: "alert",
          title: "5. दायित्व की सीमा",
          content: "Mantossalvo किसी भी प्रकार की वारंटी के बिना 'जैसा है' प्रदान किया जाता है। हम प्लेटफ़ॉर्म के आपके उपयोग से उत्पन्न किसी भी अप्रत्यक्ष, आकस्मिक या परिणामी क्षति के लिए उत्तरदायी नहीं हैं। हमारा कुल दायित्व आपके योगदान की राशि से अधिक नहीं होगा।",
        },
        {
          icon: "scale",
          title: "6. लागू कानून",
          content: "ये शर्तें अंतर्राष्ट्रीय कानून और उन क्षेत्राधिकारों के कानूनों द्वारा शासित हैं जहां हम काम करते हैं। किसी भी विवाद को अंतर्राष्ट्रीय मध्यस्थता नियमों के अनुसार मध्यस्थता के माध्यम से हल किया जाएगा।",
        },
      ],
      additional: {
        title: "अतिरिक्त जानकारी",
        items: [
          "हम सूचना के साथ किसी भी समय इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं",
          "प्लेटफ़ॉर्म का निरंतर उपयोग संशोधित शर्तों की स्वीकृति का गठन करता है",
          "हम इन शर्तों के उल्लंघन के लिए पहुंच को समाप्त या निलंबित कर सकते हैं",
          "प्लेटफ़ॉर्म पर सभी सामग्री कॉपीराइट और ट्रेडमार्क कानूनों द्वारा संरक्षित है",
        ],
      },
      contact: {
        title: "इन शर्तों के बारे में प्रश्न?",
        description: "यदि आपके पास हमारी सेवा की शर्तों के बारे में कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:",
        email: "legal@mantossalvo.com",
      },
    },
    bn: {
      backButton: "হোমে ফিরে যান",
      title: "সেবার শর্তাবলী",
      subtitle: "আমাদের প্ল্যাটফর্ম ব্যবহারের জন্য চুক্তি",
      lastUpdated: "সর্বশেষ আপডেট: ৩০ জানুয়ারি, ২০২৬",
      sections: [
        {
          icon: "users",
          title: "১. শর্তাবলীর স্বীকৃতি",
          content: "Mantossalvo প্ল্যাটফর্ম অ্যাক্সেস এবং ব্যবহার করে, আপনি এই সেবার শর্তাবলীর দ্বারা আবদ্ধ হতে স্বীকার এবং সম্মত হন। যদি আপনি এই শর্তাবলীর সাথে একমত না হন, তাহলে দয়া করে আমাদের সেবা ব্যবহার করবেন না।",
        },
        {
          icon: "bookopen",
          title: "২. প্ল্যাটফর্মের ব্যবহার",
          content: "আপনি বৈজ্ঞানিক আউটরিচ এবং শিক্ষা উদ্যোগ সমর্থন করার জন্য স্বেচ্ছায় অবদান রাখতে আমাদের প্ল্যাটফর্ম ব্যবহার করতে পারেন। সমস্ত অবদান চূড়ান্ত এবং ফেরতযোগ্য নয় যদি না আইন দ্বারা প্রয়োজন হয়। আমাদের সেবা ব্যবহার করতে আপনার বয়স কমপক্ষে ১৮ বছর হতে হবে বা পিতামাতার সম্মতি থাকতে হবে।",
        },
        {
          icon: "shield",
          title: "৩. ব্যবহারকারীর দায়িত্ব",
          content: "আপনি সঠিক তথ্য প্রদান করতে, সমস্ত প্রযোজ্য আইন মেনে প্ল্যাটফর্ম ব্যবহার করতে, প্রতারণামূলক বা ক্ষতিকর কার্যকলাপে জড়িত না হতে এবং Mantossalvo এবং তৃতীয় পক্ষের বৌদ্ধিক সম্পত্তি অধিকার সম্মান করতে সম্মত হন।",
        },
        {
          icon: "filetext",
          title: "৪. অবদান এবং পেমেন্ট",
          content: "সমস্ত আর্থিক অবদান নিরাপদ তৃতীয় পক্ষের পেমেন্ট প্রসেসরের মাধ্যমে প্রক্রিয়া করা হয়। আমরা আপনার পেমেন্ট কার্ড তথ্য সংরক্ষণ করি না। অবদান বৈজ্ঞানিক গবেষণা, শিক্ষা উপকরণ এবং জনসাধারণের আউটরিচ প্রকল্প সমর্থন করে যেমন আমাদের স্বচ্ছতা প্রতিবেদনে বর্ণিত।",
        },
        {
          icon: "alert",
          title: "৫. দায়বদ্ধতার সীমাবদ্ধতা",
          content: "Mantossalvo কোনো ধরনের ওয়ারেন্টি ছাড়াই 'যেমন আছে' প্রদান করা হয়। প্ল্যাটফর্মের আপনার ব্যবহার থেকে উদ্ভূত কোনো পরোক্ষ, আকস্মিক বা ফলস্বরূপ ক্ষতির জন্য আমরা দায়ী নই। আমাদের মোট দায়বদ্ধতা আপনার অবদানের পরিমাণ অতিক্রম করবে না।",
        },
        {
          icon: "scale",
          title: "৬. শাসক আইন",
          content: "এই শর্তাবলী আন্তর্জাতিক আইন এবং যেখানে আমরা কাজ করি সেই এখতিয়ারের আইন দ্বারা নিয়ন্ত্রিত হয়। যেকোনো বিরোধ আন্তর্জাতিক সালিসি নিয়ম অনুসারে সালিসির মাধ্যমে সমাধান করা হবে।",
        },
      ],
      additional: {
        title: "অতিরিক্ত তথ্য",
        items: [
          "আমরা নোটিশ সহ যেকোনো সময় এই শর্তাবলী পরিবর্তন করার অধিকার সংরক্ষণ করি",
          "প্ল্যাটফর্মের অব্যাহত ব্যবহার সংশোধিত শর্তাবলীর স্বীকৃতি গঠন করে",
          "আমরা এই শর্তাবলীর লঙ্ঘনের জন্য অ্যাক্সেস বন্ধ বা স্থগিত করতে পারি",
          "প্ল্যাটফর্মের সমস্ত বিষয়বস্তু কপিরাইট এবং ট্রেডমার্ক আইন দ্বারা সুরক্ষিত",
        ],
      },
      contact: {
        title: "এই শর্তাবলী সম্পর্কে প্রশ্ন?",
        description: "যদি আপনার আমাদের সেবার শর্তাবলী সম্পর্কে কোনো প্রশ্ন থাকে, তাহলে দয়া করে আমাদের সাথে যোগাযোগ করুন:",
        email: "legal@mantossalvo.com",
      },
    },
    pt: {
      backButton: "Voltar à Página Inicial",
      title: "Termos de Serviço",
      subtitle: "Acordo para usar nossa plataforma",
      lastUpdated: "Última atualização: 30 de janeiro de 2026",
      sections: [
        {
          icon: "users",
          title: "1. Aceitação dos Termos",
          content: "Ao acessar e usar a plataforma Mantossalvo, você aceita e concorda em ficar vinculado a estes Termos de Serviço. Se você não concordar com estes termos, por favor não use nossos serviços.",
        },
        {
          icon: "bookopen",
          title: "2. Uso da Plataforma",
          content: "Você pode usar nossa plataforma para fazer contribuições voluntárias para apoiar iniciativas de divulgação científica e educação. Todas as contribuições são finais e não reembolsáveis, a menos que exigido por lei. Você deve ter pelo menos 18 anos ou ter consentimento dos pais para usar nossos serviços.",
        },
        {
          icon: "shield",
          title: "3. Responsabilidades do Usuário",
          content: "Você concorda em fornecer informações precisas, usar a plataforma em conformidade com todas as leis aplicáveis, não se envolver em atividades fraudulentas ou maliciosas e respeitar os direitos de propriedade intelectual do Mantossalvo e de terceiros.",
        },
        {
          icon: "filetext",
          title: "4. Contribuições e Pagamentos",
          content: "Todas as contribuições financeiras são processadas através de processadores de pagamento seguros de terceiros. Não armazenamos informações do seu cartão de pagamento. As contribuições apoiam pesquisa científica, materiais educacionais e projetos de divulgação pública conforme descrito em nossos relatórios de transparência.",
        },
        {
          icon: "alert",
          title: "5. Limitação de Responsabilidade",
          content: "O Mantossalvo é fornecido 'como está' sem garantias de qualquer tipo. Não somos responsáveis por quaisquer danos indiretos, incidentais ou consequentes decorrentes do uso da plataforma. Nossa responsabilidade total não excederá o valor da sua contribuição.",
        },
        {
          icon: "scale",
          title: "6. Lei Aplicável",
          content: "Estes Termos são regidos pelo direito internacional e pelas leis das jurisdições onde operamos. Quaisquer disputas serão resolvidas através de arbitragem de acordo com as regras de arbitragem internacional.",
        },
      ],
      additional: {
        title: "Informações Adicionais",
        items: [
          "Reservamo-nos o direito de modificar estes Termos a qualquer momento com aviso",
          "O uso contínuo da plataforma constitui aceitação dos termos modificados",
          "Podemos encerrar ou suspender o acesso por violações destes termos",
          "Todo o conteúdo da plataforma é protegido por leis de direitos autorais e marcas registradas",
        ],
      },
      contact: {
        title: "Perguntas Sobre Estes Termos?",
        description: "Se você tiver alguma dúvida sobre nossos Termos de Serviço, entre em contato conosco em:",
        email: "legal@mantossalvo.com",
      },
    },
    ru: {
      backButton: "Вернуться на главную",
      title: "Условия использования",
      subtitle: "Соглашение об использовании нашей платформы",
      lastUpdated: "Последнее обновление: 30 января 2026 г.",
      sections: [
        {
          icon: "users",
          title: "1. Принятие условий",
          content: "Получая доступ и используя платформу Mantossalvo, вы принимаете и соглашаетесь соблюдать эти Условия использования. Если вы не согласны с этими условиями, пожалуйста, не используйте наши услуги.",
        },
        {
          icon: "bookopen",
          title: "2. Использование платформы",
          content: "Вы можете использовать нашу платформу для добровольных взносов в поддержку научной просветительской деятельности и образовательных инициатив. Все взносы являются окончательными и не подлежат возврату, если это не требуется законом. Для использования наших услуг вам должно быть не менее 18 лет или у вас должно быть согласие родителей.",
        },
        {
          icon: "shield",
          title: "3. Обязанности пользователя",
          content: "Вы соглашаетесь предоставлять точную информацию, использовать платформу в соответствии со всеми применимыми законами, не участвовать в мошеннических или вредоносных действиях и уважать права интеллектуальной собственности Mantossalvo и третьих лиц.",
        },
        {
          icon: "filetext",
          title: "4. Взносы и платежи",
          content: "Все финансовые взносы обрабатываются через безопасных сторонних платежных процессоров. Мы не храним информацию о вашей платежной карте. Взносы поддерживают научные исследования, образовательные материалы и проекты по общественной просветительской деятельности, как описано в наших отчетах о прозрачности.",
        },
        {
          icon: "alert",
          title: "5. Ограничение ответственности",
          content: "Mantossalvo предоставляется 'как есть' без каких-либо гарантий. Мы не несем ответственности за любые косвенные, случайные или последующие убытки, возникающие в результате использования вами платформы. Наша общая ответственность не будет превышать сумму вашего взноса.",
        },
        {
          icon: "scale",
          title: "6. Применимое право",
          content: "Настоящие Условия регулируются международным правом и законами юрисдикций, в которых мы работаем. Любые споры будут разрешаться посредством арбитража в соответствии с международными арбитражными правилами.",
        },
      ],
      additional: {
        title: "Дополнительная информация",
        items: [
          "Мы оставляем за собой право изменять эти Условия в любое время с уведомлением",
          "Продолжение использования платформы означает принятие измененных условий",
          "Мы можем прекратить или приостановить доступ в случае нарушения этих условий",
          "Все содержимое платформы защищено законами об авторском праве и товарных знаках",
        ],
      },
      contact: {
        title: "Вопросы об этих условиях?",
        description: "Если у вас есть вопросы о наших Условиях использования, свяжитесь с нами по адресу:",
        email: "legal@mantossalvo.com",
      },
    },
  };

  const t = content[language];

  const iconMap = {
    users: Users,
    bookopen: BookOpen,
    shield: Shield,
    filetext: FileText,
    alert: AlertCircle,
    scale: Scale,
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
                    <p className="text-foreground/70 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Information */}
        <motion.div
          className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">{t.additional.title}</h2>
          <ul className="space-y-3">
            {t.additional.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-foreground/70 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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
