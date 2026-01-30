"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Users, Target, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      backButton: "Back to Home",
      title: "Our Mission",
      subtitle: "A collective approach to scientific outreach",
      journeyTitle: "Our Journey",
      teamTitle: "Our Team",
      mission: {
        title: "The Vision",
        description: "We envision a world where collective action enables scientific knowledge sharing and education. Through small contributions at scale, we support open research, educational materials, and public projects related to Earth's mantle and planetary sciences.",
      },
      timeline: [
        { year: "2025", event: "Campaign conception and platform development" },
        { year: "2026", event: "Global launch across 50 countries" },
        { year: "2027", event: "Research partnerships with leading institutions" },
        { year: "2028", event: "1 billion participant milestone" },
      ],
      team: [
        { name: "Don. Pedro Fernandez Caffarena", role: "Founder & CEO", image: "/image_ceo.png" },
        { name: "Don. Pedro Fernandez Roman", role: "Chief Scientific Officer", image: "/image_cientifico.png" },
        { name: "Don. Jorge Fernandez Moreno", role: "Director of Operations", image: "/image_ope.png" },
      ],
      partners: {
        title: "Our Partners",
        subtitle: "Working with leading organizations worldwide",
        testimonials: [
          {
            logo: "/logo-mit.svg",
            name: "MIT",
            author: "Dr. Susan Hockfield",
            title: "President Emerita, MIT",
            quote: "The democratization of scientific funding represents a paradigm shift in how we engage the public with research. This initiative exemplifies the collaborative spirit needed to advance planetary sciences.",
          },
          {
            logo: "/logo-tesla.svg",
            name: "Tesla",
            author: "Elon Musk",
            title: "CEO, Tesla & SpaceX",
            quote: "Understanding planetary geology is crucial for multi-planetary civilization. Supporting accessible research and education in this field accelerates our collective knowledge and technological advancement.",
          },
          {
            logo: "/logo-disney.svg",
            name: "Disney",
            author: "Kathleen Kennedy",
            title: "President, Lucasfilm",
            quote: "Science and storytelling share a common goal: inspiring wonder and curiosity. This campaign bridges education and imagination, making complex planetary science accessible to everyone.",
          },
          {
            logo: "/logo-nintendo.svg",
            name: "Nintendo",
            author: "Shuntaro Furukawa",
            title: "Representative Director and President",
            quote: "科学教育への投資は未来への投資です。この取り組みは、世界中の人々に地球科学の重要性を伝える革新的な方法を提供します。(Investing in science education is investing in the future. This initiative provides an innovative way to communicate the importance of Earth sciences to people worldwide.)",
          },
        ],
      },
    },
    es: {
      backButton: "Volver al Inicio",
      title: "Nuestra Misión",
      subtitle: "Un enfoque colectivo para la divulgación científica",
      journeyTitle: "Nuestro Camino",
      teamTitle: "Nuestro Equipo",
      mission: {
        title: "La Visión",
        description: "Imaginamos un mundo donde la acción colectiva permite compartir conocimiento científico y educación. A través de pequeñas contribuciones a gran escala, apoyamos investigación abierta, materiales educativos y proyectos públicos relacionados con el manto terrestre y ciencias planetarias.",
      },
      timeline: [
        { year: "2025", event: "Concepción de la campaña y desarrollo de la plataforma" },
        { year: "2026", event: "Lanzamiento global en 50 países" },
        { year: "2027", event: "Asociaciones de investigación con instituciones líderes" },
        { year: "2028", event: "Hito de 1 mil millones de participantes" },
      ],
      team: [
        { name: "Don. Pedro Fernandez Caffarena", role: "Fundador y CEO", image: "/image_ceo.png" },
        { name: "Don. Pedro Fernandez Roman", role: "Director Científico", image: "/image_cientifico.png" },
        { name: "Don. Jorge Fernandez Moreno", role: "Director de Operaciones", image: "/image_ope.png" },
      ],
      partners: {
        title: "Nuestros Socios",
        subtitle: "Trabajando con organizaciones líderes mundialmente",
        testimonials: [
          {
            logo: "/logo-mit.svg",
            name: "MIT",
            author: "Dra. Susan Hockfield",
            title: "Presidenta Emérita, MIT",
            quote: "La democratización de la financiación científica representa un cambio de paradigma en cómo involucramos al público con la investigación. Esta iniciativa ejemplifica el espíritu colaborativo necesario para avanzar en las ciencias planetarias.",
          },
          {
            logo: "/logo-tesla.svg",
            name: "Tesla",
            author: "Elon Musk",
            title: "CEO, Tesla & SpaceX",
            quote: "Comprender la geología planetaria es crucial para una civilización multiplanetaria. Apoyar la investigación y educación accesible en este campo acelera nuestro conocimiento colectivo y avance tecnológico.",
          },
          {
            logo: "/logo-disney.svg",
            name: "Disney",
            author: "Kathleen Kennedy",
            title: "Presidenta, Lucasfilm",
            quote: "La ciencia y la narrativa comparten un objetivo común: inspirar asombro y curiosidad. Esta campaña une educación e imaginación, haciendo la compleja ciencia planetaria accesible para todos.",
          },
          {
            logo: "/logo-nintendo.svg",
            name: "Nintendo",
            author: "Shuntaro Furukawa",
            title: "Director Representante y Presidente",
            quote: "科学教育への投資は未来への投資です。この取り組みは、世界中の人々に地球科学の重要性を伝える革新的な方法を提供します。(Invertir en educación científica es invertir en el futuro. Esta iniciativa proporciona una forma innovadora de comunicar la importancia de las ciencias de la Tierra a personas de todo el mundo.)",
          },
        ],
      },
    },
    ko: {
      backButton: "홈으로 돌아가기",
      title: "우리의 사명",
      subtitle: "과학 홍보에 대한 집단적 접근",
      journeyTitle: "우리의 여정",
      teamTitle: "우리 팀",
      mission: {
        title: "비전",
        description: "우리는 집단 행동이 과학 지식 공유와 교육을 가능하게 하는 세상을 상상합니다. 대규모 소액 기부를 통해 지구 맨틀 및 행성 과학과 관련된 공개 연구, 교육 자료 및 공공 프로젝트를 지원합니다.",
      },
      timeline: [
        { year: "2025", event: "캠페인 구상 및 플랫폼 개발" },
        { year: "2026", event: "50개국에서 글로벌 출시" },
        { year: "2027", event: "주요 기관과의 연구 파트너십" },
        { year: "2028", event: "10억 참가자 이정표" },
      ],
      team: [
        { name: "Don. Pedro Fernandez Caffarena", role: "창립자 및 CEO", image: "/image_ceo.png" },
        { name: "Don. Pedro Fernandez Roman", role: "최고 과학 책임자", image: "/image_cientifico.png" },
        { name: "Don. Jorge Fernandez Moreno", role: "운영 이사", image: "/image_ope.png" },
      ],
      partners: {
        title: "우리의 파트너",
        subtitle: "전 세계 주요 조직과 협력",
        testimonials: [
          {
            logo: "/logo-mit.svg",
            name: "MIT",
            author: "Dr. Susan Hockfield",
            title: "명예 총장, MIT",
            quote: "과학 자금의 민주화는 연구에 대중을 참여시키는 방식의 패러다임 전환을 나타냅니다. 이 이니셔티브는 행성 과학을 발전시키는 데 필요한 협력 정신을 보여줍니다.",
          },
          {
            logo: "/logo-tesla.svg",
            name: "Tesla",
            author: "Elon Musk",
            title: "CEO, Tesla & SpaceX",
            quote: "행성 지질학을 이해하는 것은 다중 행성 문명에 중요합니다. 이 분야의 접근 가능한 연구와 교육을 지원하면 집단 지식과 기술 발전이 가속화됩니다.",
          },
          {
            logo: "/logo-disney.svg",
            name: "Disney",
            author: "Kathleen Kennedy",
            title: "사장, Lucasfilm",
            quote: "과학과 스토리텔링은 공통의 목표를 공유합니다: 경이로움과 호기심을 불러일으키는 것. 이 캠페인은 교육과 상상력을 연결하여 복잡한 행성 과학을 모든 사람이 접근할 수 있도록 만듭니다.",
          },
          {
            logo: "/logo-nintendo.svg",
            name: "Nintendo",
            author: "Shuntaro Furukawa",
            title: "대표이사 및 사장",
            quote: "科学教育への投資は未来への投資です。この取り組みは、世界中の人々に地球科学の重要性を伝える革新的な方法を提供します。(과학 교육에 투자하는 것은 미래에 투자하는 것입니다. 이 이니셔티브는 전 세계 사람들에게 지구 과학의 중요성을 전달하는 혁신적인 방법을 제공합니다.)",
          },
        ],
      },
    },
    ja: {
      backButton: "ホームに戻る",
      title: "私たちの使命",
      subtitle: "科学的アウトリーチへの集団的アプローチ",
      journeyTitle: "私たちの歩み",
      teamTitle: "私たちのチーム",
      mission: {
        title: "ビジョン",
        description: "私たちは、集団行動が科学的知識の共有と教育を可能にする世界を思い描いています。大規模な小額寄付を通じて、地球のマントルと惑星科学に関連するオープンな研究、教育資料、公共プロジェクトを支援します。",
      },
      timeline: [
        { year: "2025", event: "キャンペーンの構想とプラットフォーム開発" },
        { year: "2026", event: "50か国でグローバルローンチ" },
        { year: "2027", event: "主要機関との研究パートナーシップ" },
        { year: "2028", event: "10億人の参加者マイルストーン" },
      ],
      team: [
        { name: "Don. Pedro Fernandez Caffarena", role: "創設者兼CEO", image: "/image_ceo.png" },
        { name: "Don. Pedro Fernandez Roman", role: "最高科学責任者", image: "/image_cientifico.png" },
        { name: "Don. Jorge Fernandez Moreno", role: "運営ディレクター", image: "/image_ope.png" },
      ],
      partners: {
        title: "私たちのパートナー",
        subtitle: "世界中の主要組織と協力",
        testimonials: [
          {
            logo: "/logo-mit.svg",
            name: "MIT",
            author: "Dr. Susan Hockfield",
            title: "名誉学長、MIT",
            quote: "科学的資金調達の民主化は、一般の人々を研究に参加させる方法のパラダイムシフトを表しています。このイニシアチブは、惑星科学を進めるために必要な協力精神を示しています。",
          },
          {
            logo: "/logo-tesla.svg",
            name: "Tesla",
            author: "Elon Musk",
            title: "CEO, Tesla & SpaceX",
            quote: "惑星地質学を理解することは、多惑星文明にとって重要です。この分野のアクセス可能な研究と教育を支援することで、集団的知識と技術的進歩が加速されます。",
          },
          {
            logo: "/logo-disney.svg",
            name: "Disney",
            author: "Kathleen Kennedy",
            title: "社長、Lucasfilm",
            quote: "科学とストーリーテリングは共通の目標を共有しています：驚きと好奇心を呼び起こすこと。このキャンペーンは教育と想像力を橋渡しし、複雑な惑星科学を誰もがアクセスできるようにします。",
          },
          {
            logo: "/logo-nintendo.svg",
            name: "Nintendo",
            author: "Shuntaro Furukawa",
            title: "代表取締役社長",
            quote: "科学教育への投資は未来への投資です。この取り組みは、世界中の人々に地球科学の重要性を伝える革新的な方法を提供します。",
          },
        ],
      },
    },
    zh: {
      backButton: "返回首页",
      title: "我们的使命",
      subtitle: "科学推广的集体方法",
      journeyTitle: "我们的旅程",
      teamTitle: "我们的团队",
      mission: {
        title: "愿景",
        description: "我们设想一个集体行动能够实现科学知识共享和教育的世界。通过大规模的小额贡献，我们支持与地幔和行星科学相关的开放研究、教育材料和公共项目。",
      },
      timeline: [
        { year: "2025", event: "活动构思和平台开发" },
        { year: "2026", event: "在50个国家全球启动" },
        { year: "2027", event: "与领先机构的研究合作伙伴关系" },
        { year: "2028", event: "10亿参与者里程碑" },
      ],
      team: [
        { name: "Don. Pedro Fernandez Caffarena", role: "创始人兼首席执行官", image: "/image_ceo.png" },
        { name: "Don. Pedro Fernandez Roman", role: "首席科学官", image: "/image_cientifico.png" },
        { name: "Don. Jorge Fernandez Moreno", role: "运营总监", image: "/image_ope.png" },
      ],
      partners: {
        title: "我们的合作伙伴",
        subtitle: "与全球领先组织合作",
        testimonials: [
          {
            logo: "/logo-mit.svg",
            name: "MIT",
            author: "Dr. Susan Hockfield",
            title: "荣誉校长，麻省理工学院",
            quote: "科学资金的民主化代表了我们如何让公众参与研究的范式转变。这一倡议体现了推进行星科学所需的合作精神。",
          },
          {
            logo: "/logo-tesla.svg",
            name: "Tesla",
            author: "Elon Musk",
            title: "首席执行官，特斯拉和SpaceX",
            quote: "了解行星地质学对于多行星文明至关重要。支持该领域的可访问研究和教育加速了我们的集体知识和技术进步。",
          },
          {
            logo: "/logo-disney.svg",
            name: "Disney",
            author: "Kathleen Kennedy",
            title: "总裁，卢卡斯影业",
            quote: "科学和讲故事有一个共同的目标：激发惊奇和好奇心。这一活动连接了教育和想象力，使复杂的行星科学对每个人都变得可及。",
          },
          {
            logo: "/logo-nintendo.svg",
            name: "Nintendo",
            author: "Shuntaro Furukawa",
            title: "代表董事兼总裁",
            quote: "科学教育への投資は未来への投資です。この取り組みは、世界中の人々に地球科学の重要性を伝える革新的な方法を提供します。（投资科学教育就是投资未来。这一倡议提供了一种创新的方式来向全世界的人们传达地球科学的重要性。）",
          },
        ],
      },
    },
    hi: {
      backButton: "होम पर वापस जाएं",
      title: "हमारा मिशन",
      subtitle: "वैज्ञानिक आउटरीच के लिए एक सामूहिक दृष्टिकोण",
      journeyTitle: "हमारी यात्रा",
      teamTitle: "हमारी टीम",
      mission: {
        title: "दृष्टिकोण",
        description: "हम एक ऐसी दुनिया की कल्पना करते हैं जहां सामूहिक कार्रवाई वैज्ञानिक ज्ञान साझाकरण और शिक्षा को सक्षम बनाती है। बड़े पैमाने पर छोटे योगदान के माध्यम से, हम पृथ्वी के मेंटल और ग्रह विज्ञान से संबंधित खुले शोध, शैक्षिक सामग्री और सार्वजनिक परियोजनाओं का समर्थन करते हैं।",
      },
      timeline: [
        { year: "2025", event: "अभियान की अवधारणा और प्लेटफॉर्म विकास" },
        { year: "2026", event: "50 देशों में वैश्विक लॉन्च" },
        { year: "2027", event: "प्रमुख संस्थानों के साथ अनुसंधान साझेदारी" },
        { year: "2028", event: "1 बिलियन प्रतिभागी मील का पत्थर" },
      ],
      team: [
        { name: "Don. Pedro Fernandez Caffarena", role: "संस्थापक और सीईओ", image: "/image_ceo.png" },
        { name: "Don. Pedro Fernandez Roman", role: "मुख्य वैज्ञानिक अधिकारी", image: "/image_cientifico.png" },
        { name: "Don. Jorge Fernandez Moreno", role: "संचालन निदेशक", image: "/image_ope.png" },
      ],
      partners: {
        title: "हमारे भागीदार",
        subtitle: "दुनिया भर के प्रमुख संगठनों के साथ काम करना",
        testimonials: [
          {
            logo: "/logo-mit.svg",
            name: "MIT",
            author: "Dr. Susan Hockfield",
            title: "अध्यक्ष एमेरिटा, एमआईटी",
            quote: "वैज्ञानिक वित्तपोषण का लोकतंत्रीकरण इस बात में एक प्रतिमान बदलाव का प्रतिनिधित्व करता है कि हम जनता को अनुसंधान के साथ कैसे जोड़ते हैं। यह पहल ग्रह विज्ञान को आगे बढ़ाने के लिए आवश्यक सहयोगात्मक भावना का उदाहरण देती है।",
          },
          {
            logo: "/logo-tesla.svg",
            name: "Tesla",
            author: "Elon Musk",
            title: "सीईओ, टेस्ला और स्पेसएक्स",
            quote: "बहु-ग्रहीय सभ्यता के लिए ग्रह भूविज्ञान को समझना महत्वपूर्ण है। इस क्षेत्र में सुलभ अनुसंधान और शिक्षा का समर्थन हमारे सामूहिक ज्ञान और तकनीकी उन्नति को तेज करता है।",
          },
          {
            logo: "/logo-disney.svg",
            name: "Disney",
            author: "Kathleen Kennedy",
            title: "अध्यक्ष, लुकासफिल्म",
            quote: "विज्ञान और कहानी सुनाना एक साझा लक्ष्य साझा करते हैं: आश्चर्य और जिज्ञासा को प्रेरित करना। यह अभियान शिक्षा और कल्पना को जोड़ता है, जटिल ग्रह विज्ञान को सभी के लिए सुलभ बनाता है।",
          },
          {
            logo: "/logo-nintendo.svg",
            name: "Nintendo",
            author: "Shuntaro Furukawa",
            title: "प्रतिनिधि निदेशक और अध्यक्ष",
            quote: "科学教育への投資は未来への投資です。この取り組みは、世界中の人々に地球科学の重要性を伝える革新的な方法を提供します。(विज्ञान शिक्षा में निवेश भविष्य में निवेश है। यह पहल दुनिया भर के लोगों को पृथ्वी विज्ञान के महत्व को संप्रेषित करने का एक अभिनव तरीका प्रदान करती है।)",
          },
        ],
      },
    },
    bn: {
      backButton: "হোমে ফিরে যান",
      title: "আমাদের মিশন",
      subtitle: "বৈজ্ঞানিক প্রচারের জন্য একটি যৌথ পদ্ধতি",
      journeyTitle: "আমাদের যাত্রা",
      teamTitle: "আমাদের দল",
      mission: {
        title: "দৃষ্টিভঙ্গি",
        description: "আমরা এমন একটি পৃথিবীর কল্পনা করি যেখানে যৌথ পদক্ষেপ বৈজ্ঞানিক জ্ঞান ভাগাভাগি এবং শিক্ষা সক্ষম করে। বড় পরিসরে ছোট অবদানের মাধ্যমে, আমরা পৃথিবীর ম্যান্টেল এবং গ্রহ বিজ্ঞান সম্পর্কিত খোলা গবেষণা, শিক্ষামূলক উপকরণ এবং পাবলিক প্রকল্পগুলিকে সমর্থন করি।",
      },
      timeline: [
        { year: "2025", event: "প্রচারণার ধারণা এবং প্ল্যাটফর্ম উন্নয়ন" },
        { year: "2026", event: "৫০টি দেশে বৈশ্বিক লঞ্চ" },
        { year: "2027", event: "শীর্ষস্থানীয় প্রতিষ্ঠানগুলির সাথে গবেষণা অংশীদারিত্ব" },
        { year: "2028", event: "১ বিলিয়ন অংশগ্রহণকারীর মাইলফলক" },
      ],
      team: [
        { name: "Don. Pedro Fernandez Caffarena", role: "প্রতিষ্ঠাতা এবং সিইও", image: "/image_ceo.png" },
        { name: "Don. Pedro Fernandez Roman", role: "প্রধান বৈজ্ঞানিক কর্মকর্তা", image: "/image_cientifico.png" },
        { name: "Don. Jorge Fernandez Moreno", role: "অপারেশন পরিচালক", image: "/image_ope.png" },
      ],
      partners: {
        title: "আমাদের অংশীদার",
        subtitle: "বিশ্বব্যাপী শীর্ষস্থানীয় সংস্থাগুলির সাথে কাজ করা",
        testimonials: [
          {
            logo: "/logo-mit.svg",
            name: "MIT",
            author: "Dr. Susan Hockfield",
            title: "সভাপতি এমেরিটা, এমআইটি",
            quote: "বৈজ্ঞানিক তহবিলের গণতন্ত্রীকরণ আমরা কীভাবে গবেষণার সাথে জনসাধারণকে জড়িত করি তাতে একটি প্যারাডাইম শিফটের প্রতিনিধিত্ব করে। এই উদ্যোগটি গ্রহ বিজ্ঞানকে এগিয়ে নিতে প্রয়োজনীয় সহযোগিতামূলক মনোভাবের উদাহরণ দেয়।",
          },
          {
            logo: "/logo-tesla.svg",
            name: "Tesla",
            author: "Elon Musk",
            title: "সিইও, টেসলা এবং স্পেসএক্স",
            quote: "বহু-গ্রহীয় সভ্যতার জন্য গ্রহ ভূতত্ত্ব বোঝা অত্যন্ত গুরুত্বপূর্ণ। এই ক্ষেত্রে অ্যাক্সেসযোগ্য গবেষণা এবং শিক্ষা সমর্থন করা আমাদের সমষ্টিগত জ্ঞান এবং প্রযুক্তিগত অগ্রগতি ত্বরান্বিত করে।",
          },
          {
            logo: "/logo-disney.svg",
            name: "Disney",
            author: "Kathleen Kennedy",
            title: "সভাপতি, লুকাসফিল্ম",
            quote: "বিজ্ঞান এবং গল্প বলা একটি সাধারণ লক্ষ্য ভাগ করে: বিস্ময় এবং কৌতূহল অনুপ্রাণিত করা। এই প্রচারণা শিক্ষা এবং কল্পনাকে সংযুক্ত করে, জটিল গ্রহ বিজ্ঞান সবার জন্য অ্যাক্সেসযোগ্য করে তোলে।",
          },
          {
            logo: "/logo-nintendo.svg",
            name: "Nintendo",
            author: "Shuntaro Furukawa",
            title: "প্রতিনিধি পরিচালক এবং সভাপতি",
            quote: "科学教育への投資は未来への投資です。この取り組みは、世界中の人々に地球科学の重要性を伝える革新的な方法を提供します。(বিজ্ঞান শিক্ষায় বিনিয়োগ ভবিষ্যতে বিনিয়োগ। এই উদ্যোগ বিশ্বব্যাপী মানুষদের কাছে পৃথিবী বিজ্ঞানের গুরুত্ব জানানোর একটি উদ্ভাবনী উপায় প্রদান করে।)",
          },
        ],
      },
    },
    pt: {
      backButton: "Voltar para Início",
      title: "Nossa Missão",
      subtitle: "Uma abordagem coletiva para divulgação científica",
      journeyTitle: "Nossa Jornada",
      teamTitle: "Nossa Equipe",
      mission: {
        title: "A Visão",
        description: "Imaginamos um mundo onde a ação coletiva permite o compartilhamento de conhecimento científico e educação. Por meio de pequenas contribuições em escala, apoiamos pesquisas abertas, materiais educacionais e projetos públicos relacionados ao manto da Terra e ciências planetárias.",
      },
      timeline: [
        { year: "2025", event: "Concepção da campanha e desenvolvimento da plataforma" },
        { year: "2026", event: "Lançamento global em 50 países" },
        { year: "2027", event: "Parcerias de pesquisa com instituições líderes" },
        { year: "2028", event: "Marco de 1 bilhão de participantes" },
      ],
      team: [
        { name: "Don. Pedro Fernandez Caffarena", role: "Fundador e CEO", image: "/image_ceo.png" },
        { name: "Don. Pedro Fernandez Roman", role: "Diretor Científico", image: "/image_cientifico.png" },
        { name: "Don. Jorge Fernandez Moreno", role: "Diretor de Operações", image: "/image_ope.png" },
      ],
      partners: {
        title: "Nossos Parceiros",
        subtitle: "Trabalhando com organizações líderes em todo o mundo",
        testimonials: [
          {
            logo: "/logo-mit.svg",
            name: "MIT",
            author: "Dr. Susan Hockfield",
            title: "Presidente Emérita, MIT",
            quote: "A democratização do financiamento científico representa uma mudança de paradigma em como envolvemos o público com a pesquisa. Esta iniciativa exemplifica o espírito colaborativo necessário para avançar as ciências planetárias.",
          },
          {
            logo: "/logo-tesla.svg",
            name: "Tesla",
            author: "Elon Musk",
            title: "CEO, Tesla e SpaceX",
            quote: "Compreender a geologia planetária é crucial para a civilização multiplanetária. Apoiar pesquisa e educação acessíveis neste campo acelera nosso conhecimento coletivo e avanço tecnológico.",
          },
          {
            logo: "/logo-disney.svg",
            name: "Disney",
            author: "Kathleen Kennedy",
            title: "Presidente, Lucasfilm",
            quote: "Ciência e narrativa compartilham um objetivo comum: inspirar admiração e curiosidade. Esta campanha une educação e imaginação, tornando a ciência planetária complexa acessível a todos.",
          },
          {
            logo: "/logo-nintendo.svg",
            name: "Nintendo",
            author: "Shuntaro Furukawa",
            title: "Diretor Representante e Presidente",
            quote: "科学教育への投資は未来への投資です。この取り組みは、世界中の人々に地球科学の重要性を伝える革新的な方法を提供します。(Investir em educação científica é investir no futuro. Esta iniciativa oferece uma maneira inovadora de comunicar a importância das ciências da Terra às pessoas em todo o mundo.)",
          },
        ],
      },
    },
    ru: {
      backButton: "Вернуться на главную",
      title: "Наша Миссия",
      subtitle: "Коллективный подход к научной коммуникации",
      journeyTitle: "Наш Путь",
      teamTitle: "Наша Команда",
      mission: {
        title: "Видение",
        description: "Мы представляем мир, в котором коллективные действия обеспечивают обмен научными знаниями и образование. Посредством небольших вкладов в масштабе мы поддерживаем открытые исследования, образовательные материалы и общественные проекты, связанные с мантией Земли и планетарными науками.",
      },
      timeline: [
        { year: "2025", event: "Концепция кампании и разработка платформы" },
        { year: "2026", event: "Глобальный запуск в 50 странах" },
        { year: "2027", event: "Исследовательские партнерства с ведущими институтами" },
        { year: "2028", event: "Веха в 1 миллиард участников" },
      ],
      team: [
        { name: "Don. Pedro Fernandez Caffarena", role: "Основатель и генеральный директор", image: "/image_ceo.png" },
        { name: "Don. Pedro Fernandez Roman", role: "Главный научный сотрудник", image: "/image_cientifico.png" },
        { name: "Don. Jorge Fernandez Moreno", role: "Директор по операциям", image: "/image_ope.png" },
      ],
      partners: {
        title: "Наши Партнеры",
        subtitle: "Сотрудничество с ведущими организациями по всему миру",
        testimonials: [
          {
            logo: "/logo-mit.svg",
            name: "MIT",
            author: "Dr. Susan Hockfield",
            title: "Почетный президент, МИТ",
            quote: "Демократизация научного финансирования представляет собой сдвиг парадигмы в том, как мы вовлекаем общественность в исследования. Эта инициатива олицетворяет дух сотрудничества, необходимый для продвижения планетарных наук.",
          },
          {
            logo: "/logo-tesla.svg",
            name: "Tesla",
            author: "Elon Musk",
            title: "Генеральный директор, Tesla и SpaceX",
            quote: "Понимание планетарной геологии имеет решающее значение для мультипланетарной цивилизации. Поддержка доступных исследований и образования в этой области ускоряет наши коллективные знания и технологический прогресс.",
          },
          {
            logo: "/logo-disney.svg",
            name: "Disney",
            author: "Kathleen Kennedy",
            title: "Президент, Lucasfilm",
            quote: "Наука и рассказывание историй разделяют общую цель: вдохновлять удивление и любопытство. Эта кампания соединяет образование и воображение, делая сложную планетарную науку доступной для всех.",
          },
          {
            logo: "/logo-nintendo.svg",
            name: "Nintendo",
            author: "Shuntaro Furukawa",
            title: "Представитель директора и президент",
            quote: "科学教育への投資は未来への投資です。この取り組みは、世界中の人々に地球科学の重要性を伝える革新的な方法を提供します。(Инвестиции в научное образование — это инвестиции в будущее. Эта инициатива предоставляет инновационный способ донести важность наук о Земле до людей по всему миру.)",
          },
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
          className="text-center mb-20"
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

        {/* Mission Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-accent/20">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold">{t.mission.title}</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.mission.description}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <section className="mb-24">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t.journeyTitle}
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            {t.timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-12 border-l-2 border-accent/30 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-accent shadow-lg shadow-accent/50" />
                <div className="bg-muted/20 backdrop-blur-sm rounded-lg p-6 border border-muted/20">
                  <div className="text-2xl font-bold text-accent mb-2">{item.year}</div>
                  <p className="text-foreground/80">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t.teamTitle}
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t.team.map((member, index) => (
              <motion.div
                key={index}
                className="group bg-muted/20 backdrop-blur-sm rounded-2xl p-6 border border-muted/20 hover:border-accent/50 transition-all text-center"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 group-hover:opacity-0 transition-opacity z-10" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    sizes="160px"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-foreground/60">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Partners Section */}
        <section>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.partners.title}
            </h2>
            <p className="text-foreground/60">{t.partners.subtitle}</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t.partners.testimonials.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-muted/10 to-muted/5 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 hover:border-accent/30 transition-all"
                variants={fadeInUp}
                whileHover={{ y: -4 }}
              >
                {/* Logo */}
                <div className="flex items-center justify-center h-16 mb-6">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="object-contain opacity-80"
                  />
                </div>

                {/* Quote */}
                <blockquote className="mb-6">
                  <p className="text-foreground/80 italic leading-relaxed">
                    "{partner.quote}"
                  </p>
                </blockquote>

                {/* Author */}
                <div className="border-t border-muted/20 pt-4">
                  <p className="font-semibold text-foreground">{partner.author}</p>
                  <p className="text-sm text-foreground/60">{partner.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
