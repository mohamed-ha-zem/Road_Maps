import Roadmap from "../Components/RoadMap";
import React from "react";
import { 
  Database, 
  BookOpen, 
  Code, 
  Layout, 
  Network, 
  Gauge, 
  Shield, 
  Globe, 
  Server, 
  Key, 
  Lock, 
  Briefcase, 
  PenTool
} from "lucide-react";

const sections = [
  {
    title: "الأساسيات",
    icon: <Database className="w-6 h-6 text-blue-400" />,
    children: [
      {
        title: "مفاهيم قواعد البيانات",
        icon: <BookOpen className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "فهم أنواع قواعد البيانات",
          "التعرف على النماذج العلائقية",
          "إدراك مفهوم التطبيع",
          "فهم مفاتيح قواعد البيانات",
          "استيعاب العلاقات بين الجداول",
          "معرفة أساسيات SQL",
          "التعرف على قواعد البيانات غير العلائقية"
        ],
        description: [
          "مفاهيم قواعد البيانات هي الأساس لإدارة البيانات بكفاءة.",
          "تشمل الأنواع: العلائقية (مثل MySQL) وغير العلائقية (مثل MongoDB).",
          "النماذج العلائقية تُنظم البيانات في جداول مترابطة.",
          "التطبيع يُقلل التكرار ويُحسن تنظيم البيانات.",
          "المفاتيح (الأساسية والخارجية) تُحافظ على سلامة البيانات.",
          "العلاقات (واحد إلى واحد، واحد إلى متعدد) تُحدد التفاعل بين الجداول.",
          "SQL هي لغة قياسية لإدارة قواعد البيانات العلائقية.",
          "قواعد البيانات غير العلائقية تُستخدم للبيانات غير المهيكلة.",
          "يُعتبر ضروريًا لفهم كيفية تخزين البيانات واسترجاعها.",
          "يُساعد في بناء قاعدة قوية لتطوير التطبيقات.",
          "يُحسن القدرة على تصميم قواعد بيانات فعالة."
        ],
        resources: {
          arabicFree: [
            { name: "أكاديمية حسوب", url: "https://academy.hsoub.com/" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "W3Schools SQL", url: "https://www.w3schools.com/sql/" },
            { name: "Database Design Tutorial", url: "https://www.guru99.com/database-design.html" }
          ],
          paid: [
            { name: "Udemy Database Course", url: "https://www.udemy.com/topic/database-management/" },
            { name: "Pluralsight Database Fundamentals", url: "https://www.pluralsight.com/courses/database-fundamentals" }
          ]
        }
      },
      {
        title: "لغة SQL",
        icon: <Code className="w-5 h-5 text-yellow-400" />,
        learningOutcomes: [
          "كتابة استعلامات SELECT",
          "استخدام JOIN لربط الجداول",
          "إجراء عمليات INSERT وUPDATE وDELETE",
          "إنشاء الجداول والمفاتيح",
          "استخدام الدوال التجميعية",
          "كتابة استعلامات فرعية",
          "إدارة قيود البيانات"
        ],
        description: [
          "SQL هي لغة أساسية لإدارة قواعد البيانات العلائقية.",
          "استعلامات SELECT تُستخدم لاسترجاع البيانات.",
          "JOIN يربط بين الجداول بناءً على العلاقات.",
          "INSERT تضيف بيانات جديدة، UPDATE تُعدل البيانات، DELETE تُزيلها.",
          "إنشاء الجداول يتضمن تحديد الأعمدة والمفاتيح.",
          "الدوال التجميعية (مثل COUNT، SUM) تُحلل البيانات.",
          "الاستعلامات الفرعية تُستخدم لاستعلامات معقدة.",
          "قيود البيانات (مثل NOT NULL) تُحافظ على سلامة البيانات.",
          "يُعتبر ضروريًا لتطوير تطبيقات تعتمد على قواعد البيانات.",
          "يُساعد في تحسين كفاءة استرجاع البيانات.",
          "يُحسن القدرة على تحليل البيانات."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "SQLZoo", url: "https://sqlzoo.net/" },
            { name: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial/" }
          ],
          paid: [
            { name: "Udemy SQL Course", url: "https://www.udemy.com/topic/sql/" },
            { name: "Pluralsight SQL", url: "https://www.pluralsight.com/courses/sql-fundamentals" }
          ]
        }
      },
      {
        title: "أدوات إدارة قواعد البيانات",
        icon: <PenTool className="w-5 h-5 text-red-400" />,
        learningOutcomes: [
          "استخدام MySQL Workbench",
          "إدارة قواعد البيانات بـ phpMyAdmin",
          "التعامل مع PostgreSQL عبر pgAdmin",
          "إعداد بيئات قواعد البيانات",
          "تصدير واستيراد البيانات",
          "مراقبة أداء قواعد البيانات",
          "إدارة المستخدمين والصلاحيات"
        ],
        description: [
          "أدوات إدارة قواعد البيانات تُسهل التحكم في البيانات.",
          "MySQL Workbench يوفر واجهة رسومية لإدارة MySQL.",
          "phpMyAdmin يُستخدم لإدارة قواعد بيانات MySQL عبر الويب.",
          "pgAdmin يُدير قواعد بيانات PostgreSQL بسهولة.",
          "إعداد البيئات يتضمن تثبيت وتهيئة قواعد البيانات.",
          "تصدير/استيراد البيانات يُساعد في نقل البيانات.",
          "مراقبة الأداء تُحسن استجابة قواعد البيانات.",
          "إدارة الصلاحيات تُؤمن قواعد البيانات.",
          "يُعتبر ضروريًا لإدارة قواعد بيانات فعالة.",
          "يُساعد في تسريع عمليات الصيانة.",
          "يُحسن الأمان والكفاءة."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "MySQL Workbench Docs", url: "https://dev.mysql.com/doc/workbench/en/" },
            { name: "pgAdmin Docs", url: "https://www.pgadmin.org/docs/" }
          ],
          paid: [
            { name: "Udemy Database Tools Course", url: "https://www.udemy.com/topic/database-management/" },
            { name: "Pluralsight Database Tools", url: "https://www.pluralsight.com/courses/database-administration" }
          ]
        }
      }
    ]
  },
  {
    title: "تصميم قواعد البيانات",
    icon: <Layout className="w-6 h-6 text-cyan-400" />,
    children: [
      {
        title: "نمذجة البيانات",
        icon: <Network className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "إنشاء مخططات ERD",
          "تصميم النماذج المنطقية",
          "تصميم النماذج الفيزيائية",
          "تحديد العلاقات بين الكيانات",
          "تطبيق قواعد التطبيع",
          "استخدام أدوات النمذجة",
          "تحليل متطلبات البيانات"
        ],
        description: [
          "نمذجة البيانات تُحدد هيكلية قواعد البيانات.",
          "مخططات ERD (Entity-Relationship Diagram) تُوضح الكيانات والعلاقات.",
          "النماذج المنطقية تُركز على تنظيم البيانات بشكل مستقل.",
          "النماذج الفيزيائية تُحدد كيفية تخزين البيانات فعليًا.",
          "العلاقات تُحدد كيفية ارتباط الكيانات.",
          "التطبيع يُقلل التكرار ويُحسن الكفاءة.",
          "أدوات مثل Lucidchart تُسهل إنشاء المخططات.",
          "تحليل المتطلبات يضمن تلبية احتياجات التطبيق.",
          "يُعتبر ضروريًا لتصميم قواعد بيانات قوية.",
          "يُساعد في تحسين أداء التطبيقات.",
          "يُحسن دقة استرجاع البيانات."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Lucidchart ERD Guide", url: "https://www.lucidchart.com/pages/er-diagrams" },
            { name: "Vertabelo Academy", url: "https://academy.vertabelo.com/" }
          ],
          paid: [
            { name: "Udemy Data Modeling Course", url: "https://www.udemy.com/topic/database-design/" },
            { name: "Pluralsight Data Modeling", url: "https://www.pluralsight.com/courses/data-modeling-fundamentals" }
          ]
        }
      },
      {
        title: "تحسين الأداء",
        icon: <Gauge className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "إنشاء فهارس (Indexes)",
          "تحسين استعلامات SQL",
          "تقسيم الجداول (Partitioning)",
          "إدارة الذاكرة المؤقتة",
          "مراقبة أداء قواعد البيانات",
          "استخدام أدوات التحليل",
          "تقليل زمن الاستجابة"
        ],
        description: [
          "تحسين الأداء يُعزز سرعة وكفاءة قواعد البيانات.",
          "الفهارس تُسرع استرجاع البيانات للاستعلامات المتكررة.",
          "تحسين استعلامات SQL يُقلل من استهلاك الموارد.",
          "تقسيم الجداول يُسهل إدارة البيانات الكبيرة.",
          "إدارة الذاكرة المؤقتة تُحسن أداء الاستعلامات.",
          "مراقبة الأداء تُكشف عن اختناقات النظام.",
          "أدوات مثل SQL Profiler تُحلل أداء الاستعلامات.",
          "تقليل زمن الاستجابة يُحسن تجربة المستخدم.",
          "يُعتبر ضروريًا لتطبيقات عالية الأداء.",
          "يُساعد في دعم أحمال البيانات الكبيرة.",
          "يُحسن موثوقية قواعد البيانات."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "MySQL Performance Tuning", url: "https://dev.mysql.com/doc/refman/8.0/en/optimization.html" },
            { name: "PostgreSQL Performance", url: "https://www.postgresql.org/docs/current/performance-tips.html" }
          ],
          paid: [
            { name: "Udemy Database Performance Course", url: "https://www.udemy.com/topic/database-management/" },
            { name: "Pluralsight Database Performance", url: "https://www.pluralsight.com/courses/database-performance-tuning" }
          ]
        }
      },
      {
        title: "النسخ الاحتياطي والاستعادة",
        icon: <Shield className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "إعداد خطط النسخ الاحتياطي",
          "تنفيذ النسخ الاحتياطي الكامل",
          "إجراء النسخ الاحتياطي التزايدي",
          "اختبار عمليات الاستعادة",
          "أتمتة النسخ الاحتياطي",
          "إدارة مساحة التخزين",
          "ضمان أمان النسخ"
        ],
        description: [
          "النسخ الاحتياطي والاستعادة يُحافظان على سلامة البيانات.",
          "خطط النسخ تحدد التكرار ونوع النسخ.",
          "النسخ الكامل يُخزن كل البيانات في وقت محدد.",
          "النسخ التزايدي يُخزن التغييرات فقط لتوفير المساحة.",
          "اختبار الاستعادة يضمن استعادة البيانات بنجاح.",
          "أتمتة النسخ تُقلل من الأخطاء البشرية.",
          "إدارة التخزين تُحسن استخدام الموارد.",
          "أمان النسخ يحمي البيانات من الوصول غير المصرح به.",
          "يُعتبر ضروريًا للحماية من فقدان البيانات.",
          "يُساعد في التعافي من الكوارث.",
          "يُحسن استمرارية الأعمال."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "MySQL Backup Guide", url: "https://dev.mysql.com/doc/refman/8.0/en/backup-and-recovery.html" },
            { name: "PostgreSQL Backup", url: "https://www.postgresql.org/docs/current/backup.html" }
          ],
          paid: [
            { name: "Udemy Database Backup Course", url: "https://www.udemy.com/topic/database-management/" },
            { name: "Pluralsight Backup and Recovery", url: "https://www.pluralsight.com/courses/database-backup-recovery" }
          ]
        }
      }
    ]
  },
  {
    title: "قواعد البيانات غير العلائقية",
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    children: [
      {
        title: "MongoDB",
        icon: <Database className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "إعداد MongoDB",
          "إنشاء مجموعات (Collections)",
          "إدارة المستندات (Documents)",
          "كتابة استعلامات MongoDB",
          "استخدام التجميع (Aggregation)",
          "إدارة الفهارس",
          "دمج MongoDB مع التطبيقات"
        ],
        description: [
          "MongoDB هي قاعدة بيانات غير علائقية تُخزن البيانات كمستندات JSON.",
          "إعداد MongoDB يتضمن تثبيت وتهيئة الخادم.",
          "المجموعات تُشابه الجداول ولكنها مرنة أكثر.",
          "المستندات تُخزن البيانات بشكل غير مهيكل.",
          "استعلامات MongoDB تُستخدم لاسترجاع وتحديث البيانات.",
          "التجميع يُحلل البيانات باستخدام خطوط معالجة.",
          "الفهارس تُحسن أداء الاستعلامات.",
          "الدمج مع التطبيقات يتم عبر مكتبات مثل Mongoose.",
          "يُعتبر ضروريًا لتطبيقات الويب الحديثة.",
          "يُساعد في إدارة بيانات غير مهيكلة.",
          "يُحسن المرونة في تصميم البيانات."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "MongoDB University", url: "https://learn.mongodb.com/" },
            { name: "MongoDB Docs", url: "https://docs.mongodb.com/" }
          ],
          paid: [
            { name: "Udemy MongoDB Course", url: "https://www.udemy.com/topic/mongodb/" },
            { name: "Pluralsight MongoDB", url: "https://www.pluralsight.com/courses/mongodb-fundamentals" }
          ]
        }
      },
      {
        title: "Cassandra",
        icon: <Server className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "إعداد Cassandra",
          "تصميم نماذج البيانات",
          "كتابة استعلامات CQL",
          "إدارة العقد (Nodes)",
          "ضمان التوزيع والتكرار",
          "تحسين الأداء",
          "مراقبة العناقيد (Clusters)"
        ],
        description: [
          "Cassandra هي قاعدة بيانات موزعة مصممة للتعامل مع بيانات ضخمة.",
          "إعداد Cassandra يتضمن تثبيت وتهيئة العناقيد.",
          "نماذج البيانات تُصمم بناءً على الاستعلامات.",
          "CQL (Cassandra Query Language) تُشبه SQL ولكن للبيانات الموزعة.",
          "إدارة العقد تُحافظ على استقرار العناقيد.",
          "التوزيع والتكرار يضمنان توافر البيانات.",
          "تحسين الأداء يُركز على تقليل التأخير.",
          "مراقبة العناقيد تُكشف عن المشكلات المحتملة.",
          "يُعتبر ضروريًا لتطبيقات البيانات الضخمة.",
          "يُساعد في تحقيق قابلية التوسع العالية.",
          "يُحسن موثوقية الأنظمة الموزعة."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "DataStax Academy", url: "https://www.datastax.com/learn" },
            { name: "Cassandra Docs", url: "https://cassandra.apache.org/doc/latest/" }
          ],
          paid: [
            { name: "Udemy Cassandra Course", url: "https://www.udemy.com/topic/apache-cassandra/" },
            { name: "Pluralsight Cassandra", url: "https://www.pluralsight.com/courses/apache-cassandra-fundamentals" }
          ]
        }
      },
      {
        title: "Redis",
        icon: <Key className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "إعداد Redis",
          "استخدام هياكل البيانات",
          "كتابة أوامر Redis",
          "إدارة الذاكرة المؤقتة",
          "تكوين التخزين المؤقت (Caching)",
          "ضمان الأداء العالي",
          "دمج Redis مع التطبيقات"
        ],
        description: [
          "Redis هي قاعدة بيانات في الذاكرة تُستخدم للتخزين المؤقت والأداء العالي.",
          "إعداد Redis يتضمن تثبيت وتهيئة الخادم.",
          "هياكل البيانات (مثل القوائم، المجموعات) تُدعم التطبيقات المتنوعة.",
          "أوامر Redis تُستخدم لإدارة البيانات بسرعة.",
          "إدارة الذاكرة تُحسن استخدام الموارد.",
          "التخزين المؤقت يُسرع استرجاع البيانات.",
          "الأداء العالي يجعل Redis مثاليًا للتطبيقات الوقتية.",
          "الدمج مع التطبيقات يتم عبر مكتبات العملاء.",
          "يُعتبر ضروريًا لتطبيقات الويب عالية السرعة.",
          "يُساعد في تحسين تجربة المستخدم.",
          "يُحسن كفاءة التطبيقات."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Redis University", url: "https://university.redis.com/" },
            { name: "Redis Docs", url: "https://redis.io/documentation" }
          ],
          paid: [
            { name: "Udemy Redis Course", url: "https://www.udemy.com/topic/redis/" },
            { name: "Pluralsight Redis", url: "https://www.pluralsight.com/courses/redis-fundamentals" }
          ]
        }
      }
    ]
  },
  {
    title: "إدارة قواعد البيانات المتقدمة",
    icon: <Server className="w-6 h-6 text-orange-400" />,
    children: [
      {
        title: "إدارة الأنظمة الموزعة",
        icon: <Globe className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "تصميم أنظمة موزعة",
          "إدارة التكرار (Replication)",
          "ضمان الاتساق (Consistency)",
          "إعداد التجزئة (Sharding)",
          "مراقبة الأنظمة الموزعة",
          "التعامل مع الفشل",
          "تحسين قابلية التوسع"
        ],
        description: [
          "إدارة الأنظمة الموزعة تُتيح التعامل مع بيانات ضخمة عبر خوادم متعددة.",
          "التصميم يُركز على التوزيع والأداء.",
          "التكرار يُحافظ على توافر البيانات.",
          "الاتساق يضمن دقة البيانات عبر العقد.",
          "التجزئة تُقسم البيانات لتحسين الأداء.",
          "المراقبة تُكشف عن مشكلات الأنظمة.",
          "التعامل مع الفشل يُقلل من التوقف.",
          "قابلية التوسع تُدعم النمو المستقبلي.",
          "يُعتبر ضروريًا لتطبيقات البيانات الضخمة.",
          "يُساعد في تحسين موثوقية الأنظمة.",
          "يُحسن أداء التطبيقات الموزعة."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Distributed Systems Guide", url: "https://www.datastax.com/resources/distributed-systems" },
            { name: "MongoDB Distributed Docs", url: "https://docs.mongodb.com/manual/core/sharding/" }
          ],
          paid: [
            { name: "Udemy Distributed Databases Course", url: "https://www.udemy.com/topic/database-management/" },
            { name: "Pluralsight Distributed Systems", url: "https://www.pluralsight.com/courses/distributed-databases" }
          ]
        }
      },
      {
        title: "أمان قواعد البيانات",
        icon: <Lock className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "تطبيق التشفير",
          "إدارة صلاحيات المستخدمين",
          "حماية البيانات الحساسة",
          "إجراء تدقيق الأمان",
          "منع هجمات SQL Injection",
          "إعداد جدران الحماية",
          "مراقبة محاولات الاختراق"
        ],
        description: [
          "أمان قواعد البيانات يحمي البيانات من الوصول غير المصرح به.",
          "التشفير يُؤمن البيانات أثناء التخزين والنقل.",
          "صلاحيات المستخدمين تُحدد من يمكنه الوصول للبيانات.",
          "حماية البيانات الحساسة تتطلب إخفاء الهوية (Masking).",
          "تدقيق الأمان يكشف عن الثغرات الأمنية.",
          "SQL Injection يُمنع باستخدام استعلامات معدة مسبقًا.",
          "جدران الحماية تُقيد الوصول إلى قواعد البيانات.",
          "مراقبة الاختراق تُنبه عن الأنشطة المشبوهة.",
          "يُعتبر ضروريًا لحماية بيانات العملاء.",
          "يُساعد في الامتثال للوائح الأمان.",
          "يُحسن الثقة في الأنظمة."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "OWASP Database Security", url: "https://owasp.org/www-project-top-ten/" },
            { name: "MySQL Security Guide", url: "https://dev.mysql.com/doc/refman/8.0/en/security.html" }
          ],
          paid: [
            { name: "Udemy Database Security Course", url: "https://www.udemy.com/topic/database-security/" },
            { name: "Pluralsight Database Security", url: "https://www.pluralsight.com/courses/database-security-fundamentals" }
          ]
        }
      },
      {
        title: "إدارة المشاريع",
        icon: <Briefcase className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "تخطيط مشاريع قواعد البيانات",
          "إدارة فرق التطوير",
          "تطبيق منهجيات Agile",
          "توثيق قواعد البيانات",
          "إدارة المخاطر",
          "متابعة التقدم",
          "تقييم الأداء"
        ],
        description: [
          "إدارة المشاريع تُضمن نجاح تطوير وصيانة قواعد البيانات.",
          "التخطيط يُحدد الأهداف والجدول الزمني.",
          "إدارة الفرق تُنسق بين المطورين ومديري قواعد البيانات.",
          "منهجيات Agile تُحسن المرونة في المشاريع.",
          "توثيق قواعد البيانات يُسهل الصيانة.",
          "إدارة المخاطر تُقلل من المشكلات المحتملة.",
          "متابعة التقدم تُبقي المشروع على المسار.",
          "تقييم الأداء يُحسن جودة النتائج.",
          "يُعتبر ضروريًا لإدارة مشاريع معقدة.",
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
            { name: "Udemy Project Management Course", url: "https://www.udemy.com/topic/project-management/" },
            { name: "Pluralsight Project Management", url: "https://www.pluralsight.com/courses/project-management-fundamentals" }
          ]
        }
      }
    ]
  }
]

export default function DataBase(){
    return (
        <Roadmap title={"Data-Base"} sections={sections}/>
    )
}