import Roadmap from "../Components/RoadMap";
import React from "react";
import { 
  Lock, 
  Box, 
  Key, 
  Code, 
  FileText, 
  Shield, 
  Globe, 
  Monitor, 
  Link, 
  CheckSquare, 
  Server, 
  Network, 
  BarChart, 
  Briefcase, 
  PenTool
} from "lucide-react";
const sections = [
  {
    title: "الأساسيات",
    icon: <Lock className="w-6 h-6 text-blue-400" />,
    children: [
      {
        title: "مفاهيم البلوك تشين",
        icon: <Box className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "فهم اللامركزية",
          "معرفة كيفية عمل البلوك تشين",
          "التعرف على هيكل الكتل",
          "استيعاب آليات الإجماع",
          "فهم التشفير الأساسي",
          "التعرف على أنواع البلوك تشين",
          "معرفة تطبيقات البلوك تشين"
        ],
        description: [
          "مفاهيم البلوك تشين هي الأساس لفهم هذه التقنية الثورية.",
          "اللامركزية تعني توزيع التحكم عبر شبكة العقد بدلاً من مركز واحد.",
          "البلوك تشين عبارة عن سلسلة من الكتل التي تحتوي على بيانات مترابطة.",
          "آليات الإجماع مثل Proof of Work وProof of Stake تؤمن الشبكة.",
          "يستخدم التشفير لضمان أمان البيانات ومنع التلاعب.",
          "تشمل أنواع البلوك تشين: العامة، الخاصة، والهجينة.",
          "تُستخدم البلوك تشين في العملات الرقمية، سلاسل التوريد، والعقود الذكية.",
          "فهم هذه المفاهيم ضروري لتطوير التطبيقات اللامركزية.",
          "يُساعد في بناء قاعدة قوية لتعلم البرمجة في هذا المجال.",
          "يُحسن القدرة على تحليل حالات الاستخدام.",
          "يُعتبر الخطوة الأولى لتصبح مطور بلوك تشين."
        ],
        resources: {
          arabicFree: [
            { name: "أكاديمية حسوب", url: "https://academy.hsoub.com/" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Blockchain Basics (Coursera)", url: "https://www.coursera.org/learn/blockchain-basics" },
            { name: "CryptoZombies", url: "https://cryptozombies.io/" }
          ],
          paid: [
            { name: "Udemy Blockchain Course", url: "https://www.udemy.com/topic/blockchain/" },
            { name: "Pluralsight Blockchain", url: "https://www.pluralsight.com/paths/blockchain-fundamentals" }
          ]
        }
      },
      {
        title: "التشفير (Cryptography)",
        icon: <Key className="w-5 h-5 text-yellow-400" />,
        learningOutcomes: [
          "فهم التجزئة (Hashing)",
          "إتقان التوقيعات الرقمية",
          "استخدام التشفير المتماثل",
          "استخدام التشفير غير المتماثل",
          "معرفة المفاتيح العامة والخاصة",
          "تحليل هجمات التشفير",
          "تطبيق التشفير في البلوك تشين"
        ],
        description: [
          "التشفير هو العمود الفقري لأمان البلوك تشين.",
          "التجزئة تحول البيانات إلى سلسلة ثابتة الحجم للتحقق من السلامة.",
          "التوقيعات الرقمية تُستخدم للتحقق من صحة المعاملات.",
          "التشفير المتماثل يستخدم مفتاحًا واحدًا للتشفير وفك التشفير.",
          "التشفير غير المتماثل يستخدم مفتاحين (عام وخاص) للأمان.",
          "المفاتيح العامة والخاصة تُستخدم في تأمين المعاملات.",
          "تحليل هجمات التشفير يساعد في تحسين الأمان.",
          "يُطبق التشفير في تأمين الكتل والمحافظ الرقمية.",
          "يُعتبر ضروريًا لفهم أمان الشبكات اللامركزية.",
          "يُساعد في حماية البيانات الحساسة في التطبيقات.",
          "يُحسن الثقة في أنظمة البلوك تشين."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Khan Academy Cryptography", url: "https://www.khanacademy.org/computing/computer-science/cryptography" },
            { name: "Crypto101", url: "https://www.crypto101.io/" }
          ],
          paid: [
            { name: "Udemy Cryptography Course", url: "https://www.udemy.com/topic/cryptography/" },
            { name: "Coursera Cryptography", url: "https://www.coursera.org/learn/crypto" }
          ]
        }
      },
      {
        title: "أساسيات البرمجة",
        icon: <Code className="w-5 h-5 text-red-400" />,
        learningOutcomes: [
          "إتقان لغة JavaScript",
          "فهم Python الأساسي",
          "تعلم أساسيات C++",
          "استخدام Git للتحكم بالإصدارات",
          "فهم هياكل البيانات",
          "إتقان الخوارزميات الأساسية",
          "كتابة كود نظيف"
        ],
        description: [
          "البرمجة هي المهارة الأساسية لتطوير تطبيقات البلوك تشين.",
          "JavaScript تُستخدم في تطوير واجهات التطبيقات اللامركزية.",
          "Python تُستخدم في النماذج الأولية والسكربتات.",
          "C++ تُستخدم في تطوير بروتوكولات البلوك تشين الأساسية.",
          "Git يُستخدم لإدارة الكود والتعاون مع الفرق.",
          "هياكل البيانات مثل القوائم والأشجار تُستخدم في تنظيم البيانات.",
          "الخوارزميات تُحسن كفاءة معالجة المعاملات.",
          "كتابة كود نظيف يُسهل صيانة المشاريع.",
          "يُعتبر أساسيًا لتعلم لغات مثل Solidity.",
          "يُساعد في بناء تطبيقات قوية وآمنة.",
          "يُحسن القدرة على حل المشكلات التقنية."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
            { name: "CS50 Harvard", url: "https://cs50.harvard.edu/x/2023/" }
          ],
          paid: [
            { name: "Udemy Programming Course", url: "https://www.udemy.com/topic/programming/" },
            { name: "Pluralsight Programming", url: "https://www.pluralsight.com/paths/software-development" }
          ]
        }
      }
    ]
  },
  {
    title: "تطوير العقود الذكية",
    icon: <FileText className="w-6 h-6 text-cyan-400" />,
    children: [
      {
        title: "Solidity",
        icon: <Code className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "كتابة عقود ذكية باستخدام Solidity",
          "فهم متغيرات الحالة",
          "إنشاء دوال آمنة",
          "إدارة الأخطاء",
          "استخدام المكتبات",
          "اختبار العقود",
          "نشر العقود على Ethereum"
        ],
        description: [
          "Solidity هي اللغة الأساسية لتطوير العقود الذكية على Ethereum.",
          "تُستخدم لكتابة كود يُنفذ تلقائيًا على البلوك تشين.",
          "متغيرات الحالة تُخزن البيانات على البلوك تشين بشكل دائم.",
          "الدوال الآمنة تُقلل من مخاطر الهجمات مثل Reentrancy.",
          "إدارة الأخطاء تُحسن موثوقية العقود.",
          "المكتبات مثل OpenZeppelin تُسهل تطوير عقود آمنة.",
          "اختبار العقود يضمن عملها كما هو متوقع.",
          "نشر العقود يتطلب أدوات مثل Truffle أو Hardhat.",
          "يُعتبر ضروريًا لتطوير التطبيقات اللامركزية.",
          "يُساعد في أتمتة العمليات التجارية.",
          "يُحسن الشفافية في المعاملات."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "CryptoZombies", url: "https://cryptozombies.io/" },
            { name: "Solidity Docs", url: "https://docs.soliditylang.org/" }
          ],
          paid: [
            { name: "Udemy Solidity Course", url: "https://www.udemy.com/topic/solidity/" },
            { name: "Pluralsight Solidity", url: "https://www.pluralsight.com/courses/solidity-fundamentals" }
          ]
        }
      },
      {
        title: "أدوات التطوير",
        icon: <PenTool className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "استخدام Remix IDE",
          "إعداد Hardhat",
          "تكوين Truffle",
          "استخدام Ganache",
          "إدارة المشاريع باستخدام Git",
          "اختبار العقود باستخدام Mocha",
          "نشر العقود على شبكات الاختبار"
        ],
        description: [
          "أدوات التطوير تُسهل كتابة واختبار ونشر العقود الذكية.",
          "Remix IDE يُستخدم لكتابة وتجربة العقود بسهولة.",
          "Hardhat يوفر بيئة تطوير متقدمة مع أدوات اختبار.",
          "Truffle يُستخدم لإدارة مشاريع العقود الذكية.",
          "Ganache يُنشئ بلوك تشين محلي للاختبار.",
          "Git يُستخدم لتتبع التغييرات في الكود.",
          "Mocha يُستخدم لكتابة اختبارات آلية للعقود.",
          "شبكات الاختبار مثل Ropsten تُستخدم قبل النشر الفعلي.",
          "تُحسن كفاءة تطوير التطبيقات اللامركزية.",
          "تُقلل من الأخطاء أثناء التطوير.",
          "تُسرع عملية نشر العقود."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Hardhat Docs", url: "https://hardhat.org/" },
            { name: "Truffle Docs", url: "https://trufflesuite.com/docs/" }
          ],
          paid: [
            { name: "Udemy Blockchain Tools", url: "https://www.udemy.com/topic/blockchain/" },
            { name: "Pluralsight Blockchain Tools", url: "https://www.pluralsight.com/courses/blockchain-development-tools" }
          ]
        }
      },
      {
        title: "أمان العقود الذكية",
        icon: <Shield className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "فهم هجمات Reentrancy",
          "منع هجمات Overflow",
          "تطبيق أنماط أمان",
          "استخدام مكتبات آمنة",
          "إجراء تدقيق أمني",
          "اختبار الثغرات",
          "متابعة أفضل الممارسات"
        ],
        description: [
          "أمان العقود الذكية ضروري لحماية الأصول الرقمية.",
          "هجمات Reentrancy تُستغل الدوال غير المؤمنة.",
          "هجمات Overflow تحدث عند تجاوز حدود البيانات.",
          "أنماط الأمان مثل Checks-Effects-Interactions تُقلل المخاطر.",
          "مكتبات مثل OpenZeppelin توفر عقودًا آمنة مُختبرة.",
          "التدقيق الأمني يكشف الثغرات قبل النشر.",
          "اختبار الثغرات يضمن مقاومة العقود للهجمات.",
          "أفضل الممارسات تُحسن موثوقية العقود.",
          "يُعتبر أساسيًا لحماية التطبيقات اللامركزية.",
          "يُساعد في بناء الثقة مع المستخدمين.",
          "يُقلل من الخسائر المالية المحتملة."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "OpenZeppelin Docs", url: "https://docs.openzeppelin.com/" },
            { name: "Consensys Security", url: "https://consensys.net/diligence/" }
          ],
          paid: [
            { name: "Udemy Smart Contract Security", url: "https://www.udemy.com/topic/smart-contracts/" },
            { name: "Pluralsight Security", url: "https://www.pluralsight.com/courses/smart-contract-security" }
          ]
        }
      }
    ]
  },
  {
    title: "تطوير التطبيقات اللامركزية (DApps)",
    icon: <Globe className="w-6 h-6 text-red-400" />,
    children: [
      {
        title: "واجهات المستخدم",
        icon: <Monitor className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "تطوير واجهات باستخدام React",
          "دمج Web3.js",
          "استخدام Ethers.js",
          "إنشاء واجهات تفاعلية",
          "إدارة حالة التطبيق",
          "اختبار توافق الواجهة",
          "تحسين تجربة المستخدم"
        ],
        description: [
          "واجهات المستخدم تُمكن التفاعل مع التطبيقات اللامركزية.",
          "React تُستخدم لبناء واجهات ديناميكية وسريعة.",
          "Web3.js يُستخدم للتفاعل مع بلوك تشين Ethereum.",
          "Ethers.js يوفر واجهة برمجية بسيطة للتفاعل مع العقود.",
          "الواجهات التفاعلية تُحسن تجربة المستخدم.",
          "إدارة الحالة تُستخدم لتتبع بيانات التطبيق.",
          "اختبار التوافق يضمن عمل الواجهة على متصفحات مختلفة.",
          "تحسين تجربة المستخدم يزيد من اعتماد التطبيق.",
          "يُعتبر ضروريًا لتطوير تطبيقات سهلة الاستخدام.",
          "يُساعد في ربط العقود الذكية بالمستخدمين.",
          "يُحسن جاذبية التطبيقات اللامركزية."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "React Docs", url: "https://reactjs.org/" },
            { name: "Web3.js Docs", url: "https://web3js.readthedocs.io/" }
          ],
          paid: [
            { name: "Udemy React Course", url: "https://www.udemy.com/topic/react/" },
            { name: "Pluralsight Web3", url: "https://www.pluralsight.com/courses/web3-fundamentals" }
          ]
        }
      },
      {
        title: "تكامل البلوك تشين",
        icon: <Link className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "ربط التطبيقات بـ Ethereum",
          "إدارة المحافظ الرقمية",
          "التفاعل مع العقود الذكية",
          "استخدام شبكات الاختبار",
          "إدارة رسوم الغاز",
          "تحسين الأداء",
          "ضمان الأمان"
        ],
        description: [
          "تكامل البلوك تشين يربط التطبيقات بشبكات مثل Ethereum.",
          "المحافظ الرقمية مثل MetaMask تُستخدم لإدارة المعاملات.",
          "التفاعل مع العقود يتم عبر Web3.js أو Ethers.js.",
          "شبكات الاختبار مثل Goerli تُستخدم لتجربة التطبيقات.",
          "رسوم الغاز تُؤثر على تكلفة المعاملات.",
          "تحسين الأداء يُقلل من زمن استجابة التطبيق.",
          "ضمان الأمان يحمي التطبيق من الهجمات.",
          "يُعتبر أساسيًا لتشغيل التطبيقات اللامركزية.",
          "يُساعد في توفير تجربة مستخدم سلسة.",
          "يُحسن موثوقية التطبيقات.",
          "يُقلل من الأخطاء أثناء التكامل."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Ethers.js Docs", url: "https://docs.ethers.io/" },
            { name: "MetaMask Docs", url: "https://docs.metamask.io/" }
          ],
          paid: [
            { name: "Udemy DApp Course", url: "https://www.udemy.com/topic/blockchain/" },
            { name: "Pluralsight DApp", url: "https://www.pluralsight.com/courses/decentralized-apps-dapps" }
          ]
        }
      },
      {
        title: "اختبار التطبيقات",
        icon: <CheckSquare className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "كتابة اختبارات وحدة",
          "إجراء اختبارات تكامل",
          "استخدام أدوات مثل Hardhat",
          "اختبار الأداء",
          "اختبار الأمان",
          "محاكاة هجمات",
          "توثيق النتائج"
        ],
        description: [
          "اختبار التطبيقات يضمن عمل التطبيقات اللامركزية بكفاءة.",
          "اختبارات الوحدة تُركز على أجزاء محددة من الكود.",
          "اختبارات التكامل تتحقق من عمل الأجزاء معًا.",
          "Hardhat يوفر أدوات لاختبار العقود والتطبيقات.",
          "اختبار الأداء يقيس سرعة استجابة التطبيق.",
          "اختبار الأمان يكشف الثغرات المحتملة.",
          "محاكاة الهجمات تُساعد في تحسين الحماية.",
          "توثيق النتائج يُسهل صيانة التطبيق.",
          "يُعتبر ضروريًا لإطلاق تطبيقات موثوقة.",
          "يُساعد في تقليل الأخطاء بعد النشر.",
          "يُحسن جودة التطبيقات اللامركزية."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Hardhat Testing Docs", url: "https://hardhat.org/guides/testing.html" },
            { name: "Truffle Testing Docs", url: "https://trufflesuite.com/docs/truffle/testing/" }
          ],
          paid: [
            { name: "Udemy DApp Testing", url: "https://www.udemy.com/topic/blockchain/" },
            { name: "Pluralsight Testing", url: "https://www.pluralsight.com/courses/blockchain-testing" }
          ]
        }
      }
    ]
  },
  {
    title: "البلوك تشين المتقدم",
    icon: <Server className="w-6 h-6 text-purple-400" />,
    children: [
      {
        title: "بروتوكولات البلوك تشين",
        icon: <Network className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "فهم آليات الإجماع",
          "تطوير بروتوكولات مخصصة",
          "إدارة العقد",
          "تحسين القابلية للتوسع",
          "تصميم شبكات P2P",
          "استخدام Go أو Rust",
          "تحليل أداء البروتوكولات"
        ],
        description: [
          "بروتوكولات البلوك تشين هي الأساس لتشغيل الشبكات اللامركزية.",
          "آليات الإجماع مثل PoW وPoS تُحدد كيفية التحقق من المعاملات.",
          "البروتوكولات المخصصة تُستخدم في بلوك تشين خاصة أو هجينة.",
          "إدارة العقد تُحسن استقرار الشبكة.",
          "القابلية للتوسع تُعالج مشكلات الأداء في الشبكات الكبيرة.",
          "شبكات P2P تُمكن التواصل بين العقد بدون وسيط.",
          "لغات مثل Go وRust تُستخدم في تطوير البروتوكولات.",
          "تحليل الأداء يُحسن كفاءة الشبكة.",
          "يُعتبر ضروريًا لتطوير بلوك تشين مخصصة.",
          "يُساعد في بناء حلول مبتكرة.",
          "يُحسن موثوقية الشبكات اللامركزية."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Ethereum Whitepaper", url: "https://ethereum.org/en/whitepaper/" },
            { name: "Bitcoin Whitepaper", url: "https://bitcoin.org/bitcoin.pdf" }
          ],
          paid: [
            { name: "Udemy Blockchain Protocols", url: "https://www.udemy.com/topic/blockchain/" },
            { name: "Pluralsight Advanced Blockchain", url: "https://www.pluralsight.com/courses/advanced-blockchain" }
          ]
        }
      },
      {
        title: "القابلية للتوسع والتفاعل",
        icon: <BarChart className="w-5 h-5 text-cyan-400" />,
        learningOutcomes: [
          "فهم Layer 2 Solutions",
          "تطبيق Sharding",
          "استخدام Sidechains",
          "دمج Cross-Chain Bridges",
          "تحسين سرعة المعاملات",
          "تقليل تكاليف الغاز",
          "اختبار الحلول"
        ],
        description: [
          "القابلية للتوسع والتفاعل تُعالجان تحديات البلوك تشين الحديثة.",
          "حلول Layer 2 مثل Lightning Network تُحسن الأداء.",
          "Sharding يُقسم البلوك تشين إلى أجزاء لتسريع المعالجة.",
          "Sidechains تُمكن تشغيل تطبيقات مستقلة مع الربط الرئيسي.",
          "Cross-Chain Bridges تُتيح التواصل بين بلوك تشين مختلفة.",
          "تحسين سرعة المعاملات يُعزز تجربة المستخدم.",
          "تقليل تكاليف الغاز يجعل التطبيقات أكثر اقتصادية.",
          "اختبار الحلول يضمن استقرار النظام.",
          "يُعتبر ضروريًا لتطبيقات المستقبل.",
          "يُساعد في تحسين اعتماد البلوك تشين.",
          "يُحسن كفاءة الشبكات الكبيرة."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Polygon Docs", url: "https://docs.polygon.technology/" },
            { name: "Polkadot Docs", url: "https://polkadot.network/documentation/" }
          ],
          paid: [
            { name: "Udemy Scalability Course", url: "https://www.udemy.com/topic/blockchain/" },
            { name: "Pluralsight Scalability", url: "https://www.pluralsight.com/courses/blockchain-scalability" }
          ]
        }
      },
      {
        title: "إدارة المشاريع",
        icon: <Briefcase className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "تخطيط مشاريع البلوك تشين",
          "إدارة فرق التطوير",
          "تطبيق منهجيات Agile",
          "توثيق المشاريع",
          "إدارة المخاطر",
          "متابعة التقدم",
          "تقييم الأداء"
        ],
        description: [
          "إدارة المشاريع تُضمن نجاح تطوير تطبيقات البلوك تشين.",
          "التخطيط يُحدد الأهداف والجدول الزمني للمشروع.",
          "إدارة الفرق تُنسق بين المطورين والمصممين.",
          "منهجيات Agile تُحسن المرونة والتكيف مع التغييرات.",
          "توثيق المشاريع يُسهل صيانة الكود.",
          "إدارة المخاطر تُقلل من المشكلات المحتملة.",
          "متابعة التقدم تُبقي المشروع على المسار الصحيح.",
          "تقييم الأداء يُحسن جودة المنتج النهائي.",
          "يُعتبر ضروريًا لإطلاق مشاريع ناجحة.",
          "يُساعد في تحقيق توقعات العملاء.",
          "يُحسن كفاءة استخدام الموارد."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Scrum.org", url: "https://www.scrum.org/" },
            { name: "PMI Resources", url: "https://www.pmi.org/" }
          ],
          paid: [
            { name: "Udemy Project Management", url: "https://www.udemy.com/topic/project-management/" },
            { name: "Pluralsight PM", url: "https://www.pluralsight.com/courses/project-management-fundamentals" }
          ]
        }
      }
    ]
  }
]

export default function BlockChain(){
    return (
        <Roadmap title={"BlockChain"} sections={sections}/>
    )
}