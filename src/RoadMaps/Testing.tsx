import Roadmap from "../Components/RoadMap";
import React from "react";
import { 
  CheckSquare, 
  Search, 
  Code, 
  AlertTriangle, 
  UserCheck, 
  CheckCircle, 
  Compass, 
   Users, 
  Bot, 
   Box, 
   Link, 
   Monitor, 
  Shield, 
  BarChart, 
  Lock, 
   Gauge, 
  Briefcase, 
  Clipboard, 
 
   Target 
} from "lucide-react";

const sections = [
  {
    title: "الأساسيات",
    icon: <CheckSquare className="w-6 h-6 text-blue-400" />,
    children: [
      {
        title: "مفاهيم الاختبار",
        icon: <Search className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "فهم أنواع الاختبارات",
          "التعرف على دورة حياة الاختبار",
          "إنشاء حالات اختبار",
          "تحديد متطلبات الاختبار",
          "فهم العيوب وإدارتها",
          "استخدام منهجيات الاختبار",
          "تقييم جودة البرمجيات"
        ],
        description: [
          "مفاهيم الاختبار هي الأساس لضمان جودة البرمجيات.",
          "تشمل أنواع الاختبارات: الوظيفي، غير الوظيفي، الآلي، واليدوي.",
          "دورة حياة الاختبار تشمل التخطيط، التصميم، التنفيذ، والتقرير.",
          "حالات الاختبار تُحدد السيناريوهات للتحقق من الوظائف.",
          "متطلبات الاختبار تُستخدم لتحديد نطاق العمل.",
          "إدارة العيوب تُساعد في تتبع المشكلات وإصلاحها.",
          "منهجيات مثل Agile وWaterfall تُوجه عملية الاختبار.",
          "تقييم الجودة يضمن تلبية توقعات العملاء.",
          "يُعتبر ضروريًا لفهم دور مهندس الاختبار.",
          "يُساعد في تحسين موثوقية المنتجات.",
          "يُشكل الأساس لجميع مسارات الاختبار."
        ],
        resources: {
          arabicFree: [
            { name: "أكاديمية حسوب", url: "https://academy.hsoub.com/" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "ISTQB Foundation", url: "https://www.istqb.org/" },
            { name: "Ministry of Testing", url: "https://www.ministryoftesting.com/" }
          ],
          paid: [
            { name: "Udemy Software Testing Course", url: "https://www.udemy.com/topic/software-testing/" },
            { name: "Pluralsight Testing Fundamentals", url: "https://www.pluralsight.com/courses/software-testing-fundamentals" }
          ]
        }
      },
      {
        title: "أساسيات البرمجة",
        icon: <Code className="w-5 h-5 text-yellow-400" />,
        learningOutcomes: [
          "إتقان Python للاختبار",
          "فهم JavaScript الأساسي",
          "استخدام أوامر Linux",
          "كتابة سكربتات بسيطة",
          "فهم هياكل البيانات",
          "استخدام Git لإدارة الكود",
          "التعامل مع APIs"
        ],
        description: [
          "أساسيات البرمجة ضرورية لإجراء اختبارات آلية متقدمة.",
          "Python تُستخدم في كتابة سكربتات الاختبار بسبب بساطتها.",
          "JavaScript تُستخدم لاختبار تطبيقات الويب.",
          "أوامر Linux تُستخدم في بيئات الاختبار الخادومية.",
          "السكربتات البسيطة تُؤتمت مهام الاختبار المتكررة.",
          "هياكل البيانات تُساعد في تنظيم بيانات الاختبار.",
          "Git يُستخدم لتتبع تغييرات سكربتات الاختبار.",
          "التعامل مع APIs يُساعد في اختبار التكامل.",
          "يُعتبر أساسيًا للانتقال إلى الاختبار الآلي.",
          "يُساعد في تحسين كفاءة الاختبار.",
          "يُحسن القدرة على حل المشكلات التقنية."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
            { name: "W3Schools", url: "https://www.w3schools.com/" }
          ],
          paid: [
            { name: "Udemy Programming Course", url: "https://www.udemy.com/topic/programming/" },
            { name: "Pluralsight Programming", url: "https://www.pluralsight.com/paths/software-development" }
          ]
        }
      },
      {
        title: "إدارة الأخطاء",
        icon: <AlertTriangle className="w-5 h-5 text-red-400" />,
        learningOutcomes: [
          "تسجيل الأخطاء بدقة",
          "تصنيف العيوب حسب الخطورة",
          "استخدام أدوات إدارة الأخطاء",
          "التواصل مع فرق التطوير",
          "تتبع دورة حياة العيب",
          "إعادة اختبار الإصلاحات",
          "تحليل أسباب الأخطاء"
        ],
        description: [
          "إدارة الأخطاء تُساعد في تحسين جودة البرمجيات.",
          "تسجيل الأخطاء يوفر وصفًا واضحًا للمشكلة.",
          "تصنيف العيوب يُحدد أولويات الإصلاح.",
          "أدوات مثل Jira وBugzilla تُسهل تتبع الأخطاء.",
          "التواصل مع المطورين يُسرع حل المشكلات.",
          "تتبع دورة حياة العيب يضمن إغلاقه بشكل صحيح.",
          "إعادة الاختبار تتحقق من فعالية الإصلاحات.",
          "تحليل الأسباب يُقلل من تكرار الأخطاء.",
          "يُعتبر ضروريًا للحفاظ على جودة المنتج.",
          "يُساعد في تحسين عمليات التطوير.",
          "يُحسن التعاون بين فرق الاختبار والتطوير."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Jira Tutorials", url: "https://www.atlassian.com/software/jira/guides" },
            { name: "Bugzilla Guide", url: "https://www.bugzilla.org/docs/" }
          ],
          paid: [
            { name: "Udemy Bug Tracking Course", url: "https://www.udemy.com/topic/software-testing/" },
            { name: "Pluralsight Defect Management", url: "https://www.pluralsight.com/courses/defect-management" }
          ]
        }
      }
    ]
  },
  {
    title: "الاختبار اليدوي",
    icon: <UserCheck className="w-6 h-6 text-cyan-400" />,
    children: [
      {
        title: "اختبار الوظائف",
        icon: <CheckCircle className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "تصميم حالات اختبار وظيفية",
          "تنفيذ اختبارات يدوية",
          "التحقق من المتطلبات",
          "اختبار واجهة المستخدم",
          "إعداد تقارير الاختبار",
          "التعامل مع حالات الحدود",
          "توثيق النتائج"
        ],
        description: [
          "اختبار الوظائف يتحقق من عمل البرمجيات وفق المتطلبات.",
          "حالات الاختبار تُحدد سيناريوهات الاستخدام الوظيفي.",
          "الاختبارات اليدوية تُنفذ خطوة بخطوة للتحقق من الوظائف.",
          "التحقق من المتطلبات يضمن تلبية احتياجات العميل.",
          "اختبار واجهة المستخدم يُركز على سهولة الاستخدام.",
          "تقارير الاختبار تُوثق النتائج والمشكلات.",
          "حالات الحدود تُختبر للكشف عن الأخطاء النادرة.",
          "توثيق النتائج يُسهل متابعة التحسينات.",
          "يُعتبر أساسيًا لضمان جودة المنتج.",
          "يُساعد في اكتشاف الأخطاء البشرية.",
          "يُحسن تجربة المستخدم النهائية."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "TestLodge", url: "https://blog.testlodge.com/" },
            { name: "Software Testing Help", url: "https://www.softwaretestinghelp.com/" }
          ],
          paid: [
            { name: "Udemy Manual Testing Course", url: "https://www.udemy.com/topic/software-testing/" },
            { name: "Pluralsight Manual Testing", url: "https://www.pluralsight.com/courses/manual-testing-fundamentals" }
          ]
        }
      },
      {
        title: "اختبار الاستكشافي",
        icon: <Compass className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "إجراء اختبارات بدون خطة",
          "اكتشاف العيوب غير المتوقعة",
          "تحليل سلوك النظام",
          "توثيق الملاحظات",
          "استخدام تقنيات الاستكشاف",
          "تقييم استقرار النظام",
          "تحسين تغطية الاختبار"
        ],
        description: [
          "الاختبار الاستكشافي يُركز على اكتشاف العيوب من خلال التجربة الحرة.",
          "يُجرى بدون حالات اختبار مُعدة مسبقًا.",
          "يُكتشف عيوبًا لا تُظهر في الاختبارات المخططة.",
          "تحليل السلوك يُظهر استجابة النظام في ظروف حقيقية.",
          "توثيق الملاحظات يُساعد في تحسين المنتج.",
          "تقنيات الاستكشاف تُعزز الإبداع في الاختبار.",
          "تقييم الاستقرار يُساعد في تحديد نقاط الضعف.",
          "يُحسن تغطية الاختبار لسيناريوهات غير متوقعة.",
          "يُعتبر ضروريًا للمنتجات المعقدة.",
          "يُساعد في محاكاة تجربة المستخدم الحقيقية.",
          "يُحسن جودة البرمجيات بشكل عام."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Exploratory Testing Explained", url: "https://www.satisfice.com/exploratory-testing" },
            { name: "Ministry of Testing", url: "https://www.ministryoftesting.com/" }
          ],
          paid: [
            { name: "Udemy Exploratory Testing Course", url: "https://www.udemy.com/topic/software-testing/" },
            { name: "Pluralsight Exploratory Testing", url: "https://www.pluralsight.com/courses/exploratory-testing" }
          ]
        }
      },
      {
        title: "اختبار سهولة الاستخدام",
        icon: <Users className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "تقييم تجربة المستخدم",
          "إجراء اختبارات المستخدم",
          "تحليل ملاحظات المستخدم",
          "تصميم سيناريوهات الاستخدام",
          "تحسين واجهة المستخدم",
          "استخدام أدوات الاختبار",
          "إعداد تقارير النتائج"
        ],
        description: [
          "اختبار سهولة الاستخدام يُركز على تحسين تجربة المستخدم.",
          "تقييم التجربة يكشف عن مشكلات التفاعل.",
          "اختبارات المستخدم تُظهر كيفية استخدام المنتج.",
          "تحليل الملاحظات يُوجه تحسينات التصميم.",
          "سيناريوهات الاستخدام تُحاكي تفاعل المستخدم.",
          "تحسين واجهة المستخدم يُعزز رضا العملاء.",
          "أدوات مثل UserTesting تُسهل جمع البيانات.",
          "تقارير النتائج تُوثق المشكلات والحلول.",
          "يُعتبر ضروريًا للمنتجات التي تركز على المستخدم.",
          "يُساعد في زيادة الاحتفاظ بالمستخدمين.",
          "يُحسن جاذبية المنتج."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/usability-testing/" },
            { name: "Usability.gov", url: "https://www.usability.gov/how-to-and-tools/methods/user-testing.html" }
          ],
          paid: [
            { name: "Udemy Usability Testing Course", url: "https://www.udemy.com/topic/software-testing/" },
            { name: "Pluralsight Usability Testing", url: "https://www.pluralsight.com/courses/usability-testing-fundamentals" }
          ]
        }
      }
    ]
  },
  {
    title: "الاختبار الآلي",
    icon: <Bot className="w-6 h-6 text-purple-400" />,
    children: [
      {
        title: "اختبار الوحدات",
        icon: <Box className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "كتابة اختبارات الوحدات",
          "استخدام إطار عمل JUnit",
          "استخدام إطار عمل Pytest",
          "إدارة حالات الاختبار",
          "تحليل تغطية الكود",
          "دمج الاختبارات في CI/CD",
          "توثيق الاختبارات"
        ],
        description: [
          "اختبار الوحدات يتحقق من عمل مكونات البرمجيات بشكل منفصل.",
          "اختبارات الوحدات تُكتب لكل دالة أو وحدة في الكود.",
          "JUnit يُستخدم لاختبار تطبيقات Java.",
          "Pytest يُستخدم لاختبار تطبيقات Python بسهولة.",
          "إدارة الحالات تُنظم سيناريوهات الاختبار.",
          "تغطية الكود تُقيس مدى اختبار الكود.",
          "التكامل مع CI/CD يُؤتمت تنفيذ الاختبارات.",
          "توثيق الاختبارات يُسهل صيانة الكود.",
          "يُعتبر ضروريًا لتطوير برمجيات موثوقة.",
          "يُساعد في اكتشاف الأخطاء مبكرًا.",
          "يُحسن جودة الكود بشكل عام."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "JUnit Documentation", url: "https://junit.org/junit5/docs/current/user-guide/" },
            { name: "Pytest Documentation", url: "https://docs.pytest.org/" }
          ],
          paid: [
            { name: "Udemy Unit Testing Course", url: "https://www.udemy.com/topic/unit-testing/" },
            { name: "Pluralsight Unit Testing", url: "https://www.pluralsight.com/courses/unit-testing-fundamentals" }
          ]
        }
      },
      {
        title: "اختبار التكامل",
        icon: <Link className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "تصميم اختبارات التكامل",
          "استخدام Postman ل APIs",
          "إعداد بيئات الاختبار",
          "اختبار التفاعلية بين المكونات",
          "إدارة بيانات الاختبار",
          "تحليل نتائج التكامل",
          "أتمتة اختبارات التكامل"
        ],
        description: [
          "اختبار التكامل يتحقق من عمل المكونات معًا.",
          "اختبارات التكامل تُصمم لسيناريوهات التفاعل.",
          "Postman يُخدم لاختبار APIs والتكم في المطلوب.",
          "بيئات الاختبار تُحاكي الإنتاجية.",
          "التفاعلية تُختبر للتأكد من تبادل البيانات.",
          "إدارة البيانات تُضمن دقة الاختبارات.",
          "تحليل النتائج تُكشف عن مشاكل التكامل.",
          "أتمتة الاختبارات تُسرع عملية التطوير.",
          "يُعتبر ضروريًا لتطبيقات معقدة.",
          "يُساعد في تقليل أخطاء التكامل.",
          "يُحسن استقرار المنتج."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Postman Learning Center", url: "https://learning.postman.com/" },
            { name: "REST API Testing", url: "https://www.softwaretestinghelp.com/rest-api-testing-tutorial/" }
          ],
          paid: [
            { name: "Udemy Integration Testing Course", url: "https://www.udemy.com/topic/api-testing/" },
            { name: "Pluralsight Integration Testing", url: "https://www.pluralsight.com/courses/integration-testing-fundamentals" }
          ]
        }
      },
      {
        title: "اختبار واجهة المستخدم الآلي",
        icon: <Monitor className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Use Selenium for UI testing",
          "Write tests with Cypress",
          "Automate browser interactions",
          "Test responsive designs",
          "Handle dynamic elements",
          "Integrate with CI/CD pipelines",
          "Analyze UI test results"
        ],
        description: [
          "Automated UI testing ensures consistent user interface behavior.",
          "Selenium automates browser actions for cross-browser testing.",
          "Cypress provides a modern framework for fast UI tests.",
          "Browser interactions simulate real user actions.",
          "Responsive designs are tested for various screen sizes.",
          "Dynamic elements like pop-ups are handled effectively.",
          "CI/CD integration ensures tests run on every code change.",
          "Result analysis identifies UI-specific issues.",
          "Essential for modern web and mobile applications.",
          "Improves testing efficiency and coverage.",
          "Enhances user experience by catching UI bugs."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Selenium Documentation", url: "https://www.selenium.dev/documentation/" },
            { name: "Cypress Documentation", url: "https://docs.cypress.io/" }
          ],
          paid: [
            { name: "Udemy UI Testing Course", url: "https://www.udemy.com/topic/selenium-testing/" },
            { name: "Pluralsight UI Testing", url: "https://www.pluralsight.com/courses/automated-ui-testing" }
          ]
        }
      }
    ]
  },
  {
    title: "اختبار الأداء والأمان",
    icon: <Shield className="w-6 h-6 text-orange-400" />,
    children: [
      {
        title: "اختبار الأداء",
        icon: <BarChart className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Conduct load testing",
          "Perform stress testing",
          "Use JMeter for performance",
          "Analyze performance metrics",
          "Optimize system performance",
          "Test scalability",
          "Document performance results"
        ],
        description: [
          "Performance testing ensures systems handle high loads effectively.",
          "Load testing checks system behavior under expected traffic.",
          "Stress testing identifies breaking points under extreme conditions.",
          "JMeter simulates user loads to measure performance.",
          "Metrics like response time and throughput guide optimization.",
          "Scalability testing ensures systems grow with demand.",
          "Optimization improves speed and resource usage.",
          "Documentation highlights performance bottlenecks.",
          "Critical for high-traffic applications.",
          "Improves user satisfaction with fast systems.",
          "Prevents downtime during peak usage."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "JMeter Tutorials", url: "https://jmeter.apache.org/usermanual/" },
            { name: "Performance Testing Guide", url: "https://www.ministryoftesting.com/" }
          ],
          paid: [
            { name: "Udemy Performance Testing Course", url: "https://www.udemy.com/topic/performance-testing/" },
            { name: "Pluralsight Performance Testing", url: "https://www.pluralsight.com/courses/performance-testing-fundamentals" }
          ]
        }
      },
      {
        title: "Security Testing",
        icon: <Lock className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "Identify vulnerabilities",
          "Perform penetration testing",
          "Use tools like OWASP ZAP",
          "Test for SQL injection",
          "Validate input security",
          "Analyze security reports",
          "Follow secure coding practices"
        ],
        description: [
          "Security testing protects systems from vulnerabilities and attacks.",
          "Vulnerability identification uncovers potential risks.",
          "Penetration testing simulates real-world attacks.",
          "OWASP ZAP automates security scanning.",
          "SQL injection tests check for data breaches.",
          "Input validation prevents malicious inputs.",
          "Security reports guide mitigation strategies.",
          "Secure coding reduces exploitable flaws.",
          "Essential for protecting sensitive data.",
          "Ensures compliance with security standards.",
          "Builds trust in software reliability."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "OWASP Testing Guide", url: "https://owasp.org/www-project-web-security-testing-guide/" },
            { name: "TryHackMe", url: "https://tryhackme.com/" }
          ],
          paid: [
            { name: "Udemy Security Testing Course", url: "https://www.udemy.com/topic/cyber-security-testing/" },
            { name: "Pluralsight Security Testing", url: "https://www.pluralsight.com/courses/security-testing-fundamentals" }
          ]
        }
      },
      {
        title: "Reliability Testing",
        icon: <Gauge className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Test system uptime",
          "Perform failover testing",
          "Simulate failure scenarios",
          "Measure recovery time",
          "Use monitoring tools",
          "Ensure high availability",
          "Document reliability metrics"
        ],
        description: [
          "Reliability testing ensures systems remain stable over time.",
          "Uptime testing verifies continuous service availability.",
          "Failover testing checks recovery from failures.",
          "Failure scenarios simulate crashes or outages.",
          "Recovery time measures how fast systems recover.",
          "Monitoring tools like Nagios track system health.",
          "High availability ensures minimal downtime.",
          "Metrics documentation informs reliability improvements.",
          "Critical for mission-critical applications.",
          "Enhances user trust in system stability.",
          "Reduces risks of unexpected failures."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Nagios Documentation", url: "https://www.nagios.org/documentation/" },
            { name: "Reliability Engineering Guide", url: "https://sre.google/sre-book/" }
          ],
          paid: [
            { name: "Udemy Reliability Testing Course", url: "https://www.udemy.com/topic/software-testing/" },
            { name: "Pluralsight Reliability Testing", url: "https://www.pluralsight.com/courses/reliability-testing" }
          ]
        }
      }
    ]
  },
  {
    title: "إدارة الاختبار والتعاون",
    icon: <Briefcase className="w-6 h-6 text-600" />,
    children: [
      {
        title: "Test Management",
        icon: <Clipboard className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Plan testing activities",
          "Use test management tools",
          "Track testing progress",
          "Manage test cases",
          "Generate test coverage reports",
          "Coordinate testing teams",
          "Evaluate testing outcomes"
        ],
        description: [
          "Test management organizes and optimizes testing processes.",
          "Planning defines testing scope, resources, and schedules.",
          "Tools like TestRail streamline test case management.",
          "Progress tracking ensures timely completion.",
          "Test cases are organized for efficient execution.",
          "Coverage reports highlight tested functionalities.",
          "Team coordination improves collaboration.",
          "Outcome evaluation informs quality decisions.",
          "Essential for large-scale testing projects.",
          "Improves testing efficiency and transparency.",
          "Ensures alignment with project goals."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "TestRail Guides", url: "https://www.gurock.com/testrail/docs/" },
            { name: "Ministry of Testing", url: "https://www.ministryoftesting.com/" }
          ],
          paid: [
            { name: "Udemy Test Management Course", url: "https://www.udemy.com/topic/software-testing/" },
            { name: "Pluralsight Test Management", url: "https://www.pluralsight.com/courses/test-management-fundamentals" }
          ]
        }
      },
      {
        title: "Collaboration with Teams",
        icon: <Users className="w-4 h-4 text-purple-600" />,
        learningOutcomes: [
          "Work with developers",
          "Communicate with stakeholders",
          "Use collaboration tools",
          "Integrate testing in DevOps",
          "Provide actionable feedback",
          "Resolve testing conflicts",
          "Document shared processes"
        ],
        description: [
          "Collaboration ensures testing aligns with development and business goals.",
          "Working with developers speeds up bug resolution.",
          "Stakeholder communication clarifies requirements.",
          "Tools like Slack and Jira enhance team coordination.",
          "DevOps integration embeds testing in development cycles.",
          "Actionable feedback improves code quality.",
          "Conflict resolution maintains team harmony.",
          "Documented processes streamline future collaboration.",
          "Critical for agile and cross-functional teams.",
          "Improves project delivery speed and quality.",
          "Fosters a culture of shared responsibility."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Atlassian Collaboration Guides", url: "https://www.atlassian.com/work-management/collaboration" },
            { name: "DevOps Testing", url: "https://devops.com/" }
          ],
          paid: [
            { name: "Udemy Collaboration Skills Course", url: "https://www.udemy.com/topic/team-collaboration/" },
            { name: "Pluralsight Collaboration", url: "https://www.pluralsight.com/courses/collaboration-skills" }
          ]
        }
      },
      {
        title: "Career in Testing",
        icon: <Target className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "Build a testing portfolio",
          "Prepare for testing certifications",
          "Write a strong resume",
          "Network in the testing community",
          "Apply for testing roles",
          "Stay updated with trends",
          "Develop soft skills"
        ],
        description: [
          "Building a career in testing requires strategic planning and skills.",
          "Portfolios showcase your testing projects and expertise.",
          "Certifications like ISTQB validate your knowledge.",
          "A strong resume highlights relevant experience.",
          "Networking connects you with industry professionals.",
          "Applying for roles targets QA and testing positions.",
          "Staying updated ensures relevance in the field.",
          "Soft skills like communication enhance team dynamics.",
          "Essential for advancing in the testing profession.",
          "Opens opportunities in QA automation and management.",
          "Builds a rewarding career in software quality."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "ISTQB Career Resources", url: "https://www.istqb.org/career-paths.html" },
            { name: "Ministry of Testing Community", url: "https://www.ministryoftesting.com/community" }
          ],
          paid: [
            { name: "Udemy QA Career Course", url: "https://www.udemy.com/topic/software-testing/" },
            { name: "Pluralsight QA Career", url: "https://www.pluralsight.com/courses/building-qa-career" }
          ]
        }
      }
    ]
  }
]

export default function Testing(){
    return (
        <Roadmap title={"Testing"} sections={sections}/>
    )
}