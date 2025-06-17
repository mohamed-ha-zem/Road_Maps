import { Code, Database, Server, Lock, TestTube, Rocket, FileTerminal, Globe, Box, Blocks } from "lucide-react";
import React from "react";
import Roadmap from "../Components/RoadMap";

const sections = [
  {
    title: "الأساسيات",
    icon: <Code className="w-6 h-6 text-amber-400" />,
    children: [
      {
        title: "Node.js",
        icon: <FileTerminal className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Understand Node.js architecture",
          "Work with modules and npm",
          "Handle asynchronous programming",
          "Build RESTful APIs",
          "Manage file system operations",
          "Use event-driven programming",
          "Debug Node.js applications"
        ],
        description: [
          "Node.js هي بيئة تشغيل JavaScript تُستخدم لبناء تطبيقات الخلفية.",
          "تتيح تشغيل JavaScript خارج المتصفح باستخدام محرك V8.",
          "تدعم البرمجة غير المتزامنة باستخدام callbacks، promises، وasync/await.",
          "تُستخدم لبناء واجهات برمجية (APIs) سريعة وقابلة للتوسع.",
          "توفر إدارة الملفات والتعامل مع نظام الملفات بسهولة.",
          "تعتمد على نموذج الحدث (event-driven) لتحسين الأداء.",
          "تُعتبر أساسية لتطوير تطبيقات الخلفية مثل الخوادم.",
          "تدعم مكتبات npm لإضافة وظائف إضافية بسهولة.",
          "تُستخدم مع أطر عمل مثل Express لتطوير التطبيقات.",
          "تُسهل تصحيح الأخطاء باستخدام أدوات مثل Node Inspector.",
          "تُعتبر خيارًا شائعًا لتطوير تطبيقات الويب الحديثة."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Node.js Docs", url: "https://nodejs.org/en/docs/" },
            { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" }
          ],
          paid: [
            { name: "Udemy Node.js Course", url: "https://www.udemy.com/topic/node-js/" },
            { name: "Pluralsight Node.js", url: "https://www.pluralsight.com/paths/node-js" }
          ]
        }
      },
      {
        title: "Express.js",
        icon: <Server className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Set up Express server",
          "Create RESTful APIs",
          "Handle middleware",
          "Manage routing",
          "Implement authentication",
          "Handle errors",
          "Optimize API performance"
        ],
        description: [
          "Express.js هو إطار عمل خفيف لبناء تطبيقات ويب وواجهات برمجية باستخدام Node.js.",
          "يُستخدم لإنشاء خوادم وواجهات برمجية (APIs) بسرعة وسهولة.",
          "يدعم الـ middleware لمعالجة الطلبات وإضافة وظائف إضافية.",
          "يوفر نظام توجيه (routing) قوي لإدارة الطلبات والمسارات.",
          "تُستخدم لبناء تطبيقات مثل المتاجر الإلكترونية ولوحات التحكم.",
          "تدعم إضافة المصادقة والتفويض باستخدام مكتبات مثل JWT.",
          "تُسهل معالجة الأخطاء لتحسين تجربة المستخدم.",
          "تُحسن أداء التطبيق من خلال تحسين إدارة الطلبات.",
          "تُعتبر من أشهر أطر العمل لتطوير الخلفية.",
          "تتكامل بسهولة مع قواعد البيانات ومكتبات أخرى.",
          "توفر هيكلية بسيطة ومرنة لتطوير التطبيقات."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Express.js Docs", url: "https://expressjs.com/" },
            { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified" }
          ],
          paid: [
            { name: "Udemy Express.js Course", url: "https://www.udemy.com/topic/express-js/" },
            { name: "Frontend Masters Express", url: "https://frontendmasters.com/courses/api-design-nodejs-v3/" }
          ]
        }
      },
      {
        title: "Databases (SQL)",
        icon: <Database className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "Understand relational databases",
          "Write SQL queries",
          "Design database schemas",
          "Perform CRUD operations",
          "Use joins and indexes",
          "Optimize query performance",
          "Integrate with Node.js"
        ],
        description: [
          "قواعد البيانات العلائقية (SQL) تُستخدم لتخزين البيانات وإدارتها بشكل منظم.",
          "تُتيح كتابة استعلامات SQL لجلب البيانات وتحديثها.",
          "تُستخدم لتصميم مخططات قواعد البيانات (schemas) بكفاءة.",
          "تدعم عمليات CRUD (Create, Read, Update, Delete) لإدارة البيانات.",
          "توفر الـ joins والـ indexes لتحسين الأداء وتسريع الاستعلامات.",
          "تُستخدم في تطبيقات مثل أنظمة إدارة المحتوى والمتاجر الإلكترونية.",
          "تتكامل مع Node.js باستخدام مكتبات مثل MySQL وPostgreSQL.",
          "تُحسن أداء التطبيق من خلال تحسين الاستعلامات.",
          "تُعتبر أساسية لتطوير تطبيقات الخلفية القوية.",
          "تدعم إدارة كميات كبيرة من البيانات بسهولة.",
          "توفر أدوات للنسخ الاحتياطي واستعادة البيانات."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "أكاديمية ترميز", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "W3Schools SQL", url: "https://www.w3schools.com/sql/" },
            { name: "SQL Zoo", url: "https://sqlzoo.net/" }
          ],
          paid: [
            { name: "Udemy SQL Course", url: "https://www.udemy.com/topic/sql/" },
            { name: "Pluralsight SQL", url: "https://www.pluralsight.com/paths/sql" }
          ]
        }
      }
    ]
  },
  {
    title: "قواعد البيانات المتقدمة",
    icon: <Database className="w-6 h-6 text-purple-500" />,
    children: [
      {
        title: "NoSQL (MongoDB)",
        icon: <Database className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Understand NoSQL databases",
          "Work with MongoDB",
          "Design document-based schemas",
          "Perform CRUD operations",
          "Use aggregation pipelines",
          "Optimize query performance",
          "Integrate with Node.js"
        ],
        description: [
          "MongoDB هي قاعدة بيانات NoSQL تُستخدم لتخزين البيانات بتنسيق JSON.",
          "تُتيح تخزين البيانات غير المهيكلة بمرونة عالية.",
          "تدعم تصميم المخططات بناءً على المستندات (documents).",
          "تُستخدم لإجراء عمليات CRUD بسهولة وسرعة.",
          "توفر الـ aggregation pipelines لتحليل البيانات المعقدة.",
          "تُستخدم في تطبيقات مثل الشبكات الاجتماعية والتجارة الإلكترونية.",
          "تتكامل مع Node.js باستخدام مكتبات مثل Mongoose.",
          "تُحسن أداء التطبيق من خلال تحسين الاستعلامات.",
          "تدعم التوسع الأفقي (horizontal scaling) لإدارة البيانات الكبيرة.",
          "توفر أدوات للنسخ الاحتياطي وإدارة البيانات.",
          "تُعتبر خيارًا شائعًا لتطبيقات الخلفية الحديثة."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "MongoDB Docs", url: "https://www.mongodb.com/docs/" },
            { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" }
          ],
          paid: [
            { name: "Udemy MongoDB Course", url: "https://www.udemy.com/topic/mongodb/" },
            { name: "Pluralsight MongoDB", url: "https://www.pluralsight.com/courses/mongodb-introduction" }
          ]
        }
      },
      {
        title: "ORM (Prisma/TypeORM)",
        icon: <Database className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand ORM concepts",
          "Work with Prisma/TypeORM",
          "Define database models",
          "Perform CRUD operations",
          "Handle relationships",
          "Optimize queries",
          "Integrate with Node.js"
        ],
        description: [
          "ORM (Object-Relational Mapping) تُستخدم لتبسيط التفاعل مع قواعد البيانات.",
          "Prisma وTypeORM هما أداتان شائعتان لإدارة قواعد البيانات في Node.js.",
          "تُتيح تعريف نماذج البيانات (models) باستخدام JavaScript/TypeScript.",
          "تدعم عمليات CRUD بطريقة برمجية دون كتابة استعلامات SQL مباشرة.",
          "تُسهل إدارة العلاقات بين الجداول مثل one-to-many وmany-to-many.",
          "تُستخدم في تطبيقات مثل أنظمة إدارة المحتوى والتجارة الإلكترونية.",
          "تُحسن أداء التطبيق من خلال تحسين الاستعلامات.",
          "تدعم التكامل مع قواعد بيانات SQL وNoSQL.",
          "تُقلل الأخطاء من خلال توفير أنواع ثابتة (مع TypeScript).",
          "تُسهل صيانة الكود في المشاريع الكبيرة.",
          "توفر أدوات CLI لإدارة المخططات والهجرات (migrations)."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Prisma Docs", url: "https://www.prisma.io/docs/" },
            { name: "TypeORM Docs", url: "https://typeorm.io/" }
          ],
          paid: [
            { name: "Udemy Prisma Course", url: "https://www.udemy.com/topic/prisma/" },
            { name: "Pluralsight TypeORM", url: "https://www.pluralsight.com/courses/typeorm-working" }
          ]
        }
      }
    ]
  },
  {
    title: "التوثيق والمصادقة",
    icon: <Lock className="w-6 h-6 text-red-400" />,
    children: [
      {
        title: "Authentication & Authorization",
        icon: <Lock className="w-5 h-5 text-red-300" />,
        learningOutcomes: [
          "Implement JWT authentication",
          "Use OAuth 2.0",
          "Handle user sessions",
          "Secure APIs with tokens",
          "Implement role-based access",
          "Manage password hashing",
          "Integrate with Node.js"
        ],
        description: [
          "المصادقة والتفويض هما عمليتا تأمين التطبيقات وإدارة الوصول.",
          "JWT (JSON Web Tokens) تُستخدم لتأمين الطلبات بين العميل والخادم.",
          "OAuth 2.0 تُتيح المصادقة عبر خدمات مثل Google وFacebook.",
          "تُستخدم لإدارة جلسات المستخدم (sessions) بشكل آمن.",
          "تدعم تأمين واجهات البرمجة (APIs) باستخدام التوكنات.",
          "تُتيح التحكم في الوصول بناءً على الأدوار (role-based access).",
          "تُستخدم في تطبيقات مثل المتاجر الإلكترونية ولوحات التحكم.",
          "تدعم تشفير كلمات المرور باستخدام مكتبات مثل bcrypt.",
          "تُحسن أمان التطبيق من خلال منع الوصول غير المصرح به.",
          "تتكامل مع Node.js وExpress بسهولة.",
          "تُعتبر ضرورية لتطوير تطبيقات الخلفية الآمنة."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Auth0 Docs", url: "https://auth0.com/docs/" },
            { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified" }
          ],
          paid: [
            { name: "Udemy Authentication Course", url: "https://www.udemy.com/topic/authentication/" },
            { name: "Pluralsight Authentication", url: "https://www.pluralsight.com/courses/implementing-authentication-authorization" }
          ]
        }
      }
    ]
  },
  {
    title: "الأطر المتقدمة",
    icon: <Blocks className="w-6 h-6 text-cyan-400" />,
    children: [
      {
        title: "NestJS",
        icon: <Server className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand NestJS architecture",
          "Create RESTful APIs",
          "Use TypeScript with NestJS",
          "Implement dependency injection",
          "Handle middleware",
          "Integrate with databases",
          "Deploy NestJS apps"
        ],
        description: [
          "NestJS هو إطار عمل Node.js قوي لبناء تطبيقات خلفية فعالة وقابلة للتوسع.",
          "يستخدم TypeScript لتحسين جودة الكود واكتشاف الأخطاء مبكرًا.",
          "يعتمد على المكونات (modules) لتنظيم الكود بشكل منظم.",
          "يدعم إنشاء واجهات برمجية (REST APIs) وGraphQL بسهولة.",
          "يوفر الـ dependency injection لإدارة الخدمات بكفاءة.",
          "تُستخدم لبناء تطبيقات معقدة مثل أنظمة إدارة المؤسسات.",
          "تتكامل مع قواعد البيانات مثل MongoDB وPostgreSQL.",
          "تدعم الـ middleware لمعالجة الطلبات وإضافة وظائف إضافية.",
          "تُسهل النشر على منصات مثل AWS وHeroku.",
          "تُعتبر خيارًا شائعًا لتطوير تطبيقات الخلفية الحديثة.",
          "توفر أدوات CLI لإنشاء وإدارة المشاريع بسهولة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "NestJS Docs", url: "https://docs.nestjs.com/" },
            { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" }
          ],
          paid: [
            { name: "Udemy NestJS Course", url: "https://www.udemy.com/topic/nestjs/" },
            { name: "Pluralsight NestJS", url: "https://www.pluralsight.com/courses/nestjs-fundamentals" }
          ]
        }
      }
    ]
  },
  {
    title: "GraphQL",
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    children: [
      {
        title: "GraphQL Basics",
        icon: <Globe className="w-5 h-5 text-purple-300" />,
        learningOutcomes: [
          "Understand GraphQL schema",
          "Write queries and mutations",
          "Implement resolvers",
          "Use Apollo Server",
          "Handle data fetching",
          "Optimize GraphQL performance",
          "Integrate with Node.js"
        ],
        description: [
          "GraphQL هي لغة استعلام لإنشاء واجهات برمجية مرنة وفعالة.",
          "تُتيح جلب البيانات بدقة بناءً على احتياجات العميل.",
          "تدعم الـ schemas لتحديد هيكلية البيانات بشكل واضح.",
          "تُستخدم لكتابة الاستعلامات (queries) والتحديثات (mutations).",
          "تُتيح الـ resolvers لمعالجة البيانات وإرجاعها للعميل.",
          "تُستخدم مع Apollo Server لإنشاء خوادم GraphQL بسهولة.",
          "تُستخدم في تطبيقات مثل الشبكات الاجتماعية والتجارة الإلكترونية.",
          "تُحسن الأداء من خلال تقليل البيانات غير الضرورية.",
          "تتكامل مع Node.js وأطر عمل مثل Express وNestJS.",
          "تُقلل تعقيد إدارة البيانات مقارنة بـ REST APIs.",
          "تُعتبر خيارًا حديثًا لتطوير واجهات برمجية متقدمة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "GraphQL Docs", url: "https://graphql.org/learn/" },
            { name: "Apollo Docs", url: "https://www.apollographql.com/docs/" }
          ],
          paid: [
            { name: "Udemy GraphQL Course", url: "https://www.udemy.com/topic/graphql/" },
            { name: "Frontend Masters GraphQL", url: "https://frontendmasters.com/courses/graphql/" }
          ]
        }
      }
    ]
  },
  {
    title: "Testing",
    icon: <TestTube className="w-6 h-6 text-red-400" />,
    children: [
      {
        title: "Unit & Integration Testing",
        icon: <TestTube className="w-5 h-5 text-red-300" />,
        learningOutcomes: [
          "Write unit tests with Jest",
          "Test API endpoints",
          "Mock database operations",
          "Use Supertest for integration",
          "Measure test coverage",
          "Handle edge cases",
          "Integrate with CI/CD"
        ],
        description: [
          "اختبار الوحدات والتكامل يضمن جودة واستقرار تطبيقات الخلفية.",
          "Jest هي أداة شائعة لكتابة اختبارات سريعة لـ Node.js وExpress.",
          "تُستخدم لاختبار نقاط النهاية (API endpoints) باستخدام Supertest.",
          "تدعم الـ mocking لمحاكاة عمليات قواعد البيانات والخدمات الخارجية.",
          "تُتيح قياس تغطية الاختبار لضمان شمولية الاختبارات.",
          "تُستخدم في المشاريع الكبيرة لتقليل الأخطاء قبل النشر.",
          "تدعم التكامل مع أنظمة CI/CD لأتمتة عمليات الاختبار.",
          "تُحسن صيانة الكود من خلال الكشف المبكر عن المشكلات.",
          "تُسهل اختبار الحالات الحدية لضمان استقرار التطبيق.",
          "تُعتبر ضرورية لتطوير تطبيقات خلفية قوية.",
          "توفر أدوات لاختبار التكامل مع قواعد البيانات وAPIs."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" }
          ],
          englishFree: [
            { name: "Jest Docs", url: "https://jestjs.io/docs/getting-started" },
            { name: "Supertest Docs", url: "https://github.com/visionmedia/supertest" }
          ],
          paid: [
            { name: "Udemy Testing Course", url: "https://www.udemy.com/topic/software-testing/" },
            { name: "Pluralsight Testing", url: "https://www.pluralsight.com/courses/node-js-testing" }
          ]
        }
      }
    ]
  },
  {
    title: "Deployment",
    icon: <Rocket className="w-6 h-6 text-green-400" />,
    children: [
      {
        title: "CI/CD + Hosting",
        icon: <Rocket className="w-5 h-5 text-green-300" />,
        learningOutcomes: [
          "Set up GitHub Actions",
          "Deploy to AWS",
          "Deploy to Heroku",
          "Configure CI/CD pipelines",
          "Use Docker containers",
          "Handle environment variables",
          "Monitor app performance"
        ],
        description: [
          "CI/CD يُحسن عملية نشر تطبيقات الخلفية من خلال الأتمتة.",
          "GitHub Actions يُتيح إعداد خطوط أنابيب للاختبار والنشر.",
          "AWS وHeroku هما منصتان شائعتان لنشر تطبيقات Node.js وNestJS.",
          "تُستخدم لتقليل الأخطاء أثناء النشر وضمان الاستقرار.",
          "تدعم إدارة متغيرات البيئة لتأمين التطبيقات.",
          "تُتيح مراقبة أداء التطبيق بعد النشر لتحسين التجربة.",
          "تُستخدم في المشاريع الكبيرة لضمان عمليات نشر موثوقة.",
          "تدعم استخدام Docker لتسهيل النشر والتوسع.",
          "تُسهل التكامل مع أدوات مثل Kubernetes لإدارة الحاويات.",
          "تُعتبر ضرورية لتطوير تطبيقات الإنتاج الحديثة.",
          "توفر أدوات لتحسين أوقات البناء وتقليل الموارد."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "AWS Docs", url: "https://aws.amazon.com/documentation/" },
            { name: "Heroku Docs", url: "https://devcenter.heroku.com/" }
          ],
          paid: [
            { name: "Udemy CI/CD Course", url: "https://www.udemy.com/topic/continuous-integration/" },
            { name: "Pluralsight CI/CD", url: "https://www.pluralsight.com/courses/building-ci-cd-pipeline-github-actions" }
          ]
        }
      }
    ]
  },
  {
    title: "الإضافات",
    icon: <Box className="w-6 h-6 text-teal-400" />,
    children: [
      {
        title: "WebSocket",
        icon: <Box className="w-5 h-5 text-blue-300" />,
        learningOutcomes: [
          "Understand WebSocket protocol",
          "Implement real-time communication",
          "Use Socket.IO",
          "Handle connection events",
          "Build chat applications",
          "Optimize WebSocket performance",
          "Integrate with Node.js"
        ],
        description: [
          "WebSocket هي تقنية لإنشاء اتصالات ثنائية في الوقت الفعلي بين العميل والخادم.",
          "تُستخدم لبناء تطبيقات مثل الدردشة والألعاب متعددة اللاعبين.",
          "Socket.IO هي مكتبة شائعة لتسهيل استخدام WebSocket في Node.js.",
          "تدعم إدارة أحداث الاتصال مثل الاتصال والانقطاع.",
          "تُستخدم في تطبيقات تتطلب تحديثات فورية مثل الإشعارات.",
          "تُحسن أداء التطبيق من خلال تقليل زمن الاستجابة.",
          "تتكامل بسهولة مع أطر عمل مثل Express وNestJS.",
          "تُسهل بناء تطبيقات الوقت الفعلي بكفاءة عالية.",
          "تدعم التوسع الأفقي لإدارة عدد كبير من الاتصالات.",
          "تُقلل تعقيد إدارة الاتصالات في التطبيقات الكبيرة.",
          "تُعتبر ضرورية لتطوير تطبيقات الوقت الفعلي الحديثة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" }
          ],
          englishFree: [
            { name: "Socket.IO Docs", url: "https://socket.io/docs/" },
            { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified" }
          ],
          paid: [
            { name: "Udemy WebSocket Course", url: "https://www.udemy.com/topic/websocket/" },
            { name: "Frontend Masters WebSocket", url: "https://frontendmasters.com/courses/websockets/" }
          ]
        }
      },
      {
        title: "Redis",
        icon: <Box className="w-5 h-5 text-red-300" />,
        learningOutcomes: [
          "Understand Redis architecture",
          "Use Redis for caching",
          "Implement pub/sub messaging",
          "Handle data persistence",
          "Optimize performance",
          "Integrate with Node.js",
          "Scale Redis deployments"
        ],
        description: [
          "Redis هي قاعدة بيانات في الذاكرة تُستخدم للتخزين المؤقت وتحسين الأداء.",
          "تُستخدم لتخزين البيانات بسرعة عالية في تطبيقات الخلفية.",
          "تدعم نموذج النشر/الاشتراك (pub/sub) للتواصل في الوقت الفعلي.",
          "تُتيح استمرارية البيانات (persistence) لحفظ البيانات على القرص.",
          "تُستخدم في تطبيقات مثل المتاجر الإلكترونية ولوحات التحكم.",
          "تُحسن أداء التطبيق من خلال تقليل زمن الاستجابة.",
          "تتكامل مع Node.js باستخدام مكتبات مثل node-redis.",
          "تدعم التوسع الأفقي لإدارة كميات كبيرة من البيانات.",
          "تُسهل إدارة الجلسات (sessions) في التطبيقات الكبيرة.",
          "تُقلل الضغط على قواعد البيانات الأساسية.",
          "تُعتبر خيارًا شائعًا لتحسين أداء تطبيقات الخلفية."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Redis Docs", url: "https://redis.io/docs/" },
            { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" }
          ],
          paid: [
            { name: "Udemy Redis Course", url: "https://www.udemy.com/topic/redis/" },
            { name: "Pluralsight Redis", url: "https://www.pluralsight.com/courses/redis-fundamentals" }
          ]
        }
      }
    ]
  }
]; 

// const Roadmap: React.FC<RoadmapProps> = ({ sections }) => {
export default function BackEnd(){
  return(
    <Roadmap title={"Back-End"} sections={sections}/>
  )
}
