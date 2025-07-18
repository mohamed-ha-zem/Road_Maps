import Roadmap from "../Components/RoadMap";
import React from "react";
import { 
  Cpu, 
  CircuitBoard, 
  Zap, 
  Code, 
  Microchip, 
  Link, 
  Server, 
  Clock, 
  Globe, 
  Shield, 
  Briefcase, 
  Clipboard, 
  Wrench, 
  PenTool
} from "lucide-react";
const sections = [
  {
    title: "الأساسيات",
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    children: [
      {
        title: "مفاهيم الأنظمة المدمجة",
        icon: <CircuitBoard className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "فهم الأنظمة المدمجة",
          "التعرف على المكونات الأساسية",
          "معرفة أنواع المتحكمات الدقيقة",
          "استيعاب دور البرمجيات المدمجة",
          "فهم قيود الأنظمة المدمجة",
          "التعرف على التطبيقات العملية",
          "إدراك دور الأجهزة والبرمجيات"
        ],
        description: [
          "مفاهيم الأنظمة المدمجة هي الأساس لفهم هذا المجال التقني.",
          "الأنظمة المدمجة هي أجهزة كمبيوتر متخصصة مدمجة في منتجات.",
          "تشمل المكونات: المتحكمات الدقيقة، أجهزة الاستشعار، والمشغلات.",
          "المتحكمات الدقيقة مثل AVR وARM تُستخدم على نطاق واسع.",
          "البرمجيات المدمجة تُدير الأجهزة وتُنفذ المهام.",
          "القيود تشمل الطاقة، الذاكرة، والحجم.",
          "التطبيقات تشمل السيارات، الأجهزة الطبية، والإلكترونيات الاستهلاكية.",
          "يُعتبر ضروريًا لفهم التفاعل بين الأجهزة والبرمجيات.",
          "يُساعد في بناء قاعدة قوية لتطوير الأنظمة.",
          "يُحسن القدرة على تحليل متطلبات المشروع.",
          "يُشكل الأساس لتعلم البرمجة والتصميم."
        ],
        resources: {
          arabicFree: [
            { name: "أكاديمية حسوب", url: "https://academy.hsoub.com/" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Embedded Systems Tutorial", url: "https://www.tutorialspoint.com/embedded_systems/" },
            { name: "All About Circuits", url: "https://www.allaboutcircuits.com/technical-articles/embedded-systems/" }
          ],
          paid: [
            { name: "Udemy Embedded Systems Course", url: "https://www.udemy.com/topic/embedded-systems/" },
            { name: "Coursera Embedded Systems", url: "https://www.coursera.org/courses?query=embedded%20systems" }
          ]
        }
      },
      {
        title: "الإلكترونيات الأساسية",
        icon: <Zap className="w-5 h-5 text-yellow-400" />,
        learningOutcomes: [
          "فهم الدوائر الكهربائية",
          "التعرف على المقاومات والمكثفات",
          "إدراك عمل الترانزستورات",
          "قراءة المخططات الإلكترونية",
          "استخدام أدوات القياس",
          "تصميم دوائر بسيطة",
          "فهم مصادر الطاقة"
        ],
        description: [
          "الإلكترونيات الأساسية ضرورية لتصميم الأنظمة المدمجة.",
          "الدوائر الكهربائية تُشكل أساس الأجهزة الإلكترونية.",
          "المقاومات والمكثفات تُستخدم للتحكم في التيار والجهد.",
          "الترانزستورات تُستخدم كمفاتيح أو مكبرات.",
          "المخططات الإلكترونية تُوضح تصميم الدوائر.",
          "أدوات مثل المالتيميتر تُستخدم لقياس الخصائص الكهربائية.",
          "تصميم الدوائر يُمكن من إنشاء أنظمة مخصصة.",
          "مصادر الطاقة تُزود الأنظمة بالطاقة اللازمة.",
          "يُعتبر ضروريًا لفهم الأجهزة المدمجة.",
          "يُساعد في تصحيح أخطاء الأجهزة.",
          "يُحسن القدرة على تصميم حلول إلكترونية."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Khan Academy Electronics", url: "https://www.khanacademy.org/science/electrical-engineering" },
            { name: "SparkFun Electronics", url: "https://learn.sparkfun.com/tutorials" }
          ],
          paid: [
            { name: "Udemy Electronics Course", url: "https://www.udemy.com/topic/electronics/" },
            { name: "Pluralsight Electronics", url: "https://www.pluralsight.com/courses/electronics-fundamentals" }
          ]
        }
      },
      {
        title: "أساسيات البرمجة",
        icon: <Code className="w-5 h-5 text-red-400" />,
        learningOutcomes: [
          "إتقان لغة C",
          "فهم أساسيات C++",
          "كتابة برامج للمتحكمات",
          "استخدام أدوات التطوير",
          "فهم هياكل البيانات",
          "إدارة الذاكرة",
          "استخدام Git للتحكم بالإصدارات"
        ],
        description: [
          "البرمجة هي المهارة الأساسية لتطوير البرمجيات المدمجة.",
          "لغة C تُستخدم على نطاق واسع بسبب كفاءتها وتحكمها المنخفض المستوى.",
          "C++ تُضيف ميزات البرمجة الكائنية لتطبيقات معقدة.",
          "البرامج تُكتب للتحكم في المتحكمات الدقيقة.",
          "أدوات التطوير مثل IDEs تُسهل كتابة وتصحيح الكود.",
          "هياكل البيانات تُنظم البيانات بكفاءة.",
          "إدارة الذاكرة تُحسن استخدام الموارد المحدودة.",
          "Git يُستخدم لتتبع التغييرات في الكود.",
          "يُعتبر ضروريًا لتطوير أنظمة مدمجة موثوقة.",
          "يُساعد في تحسين أداء البرمجيات.",
          "يُحسن القدرة على حل المشكلات التقنية."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "freeCodeCamp C Tutorial", url: "https://www.freecodecamp.org/news/learn-c-programming/" },
            { name: "Learn-C.org", url: "https://www.learn-c.org/" }
          ],
          paid: [
            { name: "Udemy C Programming Course", url: "https://www.udemy.com/topic/c-programming/" },
            { name: "Pluralsight C Programming", url: "https://www.pluralsight.com/courses/c-fundamentals" }
          ]
        }
      }
    ]
  },
  {
    title: "تطوير الأنظمة المدمجة",
    icon: <PenTool className="w-6 h-6 text-cyan-400" />,
    children: [
      {
        title: "برمجة المتحكمات الدقيقة",
        icon: <Microchip className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "برمجة Arduino",
          "برمجة STM32",
          "إعداد بيئة التطوير",
          "كتابة برامج للمدخلات/المخرجات",
          "التعامل مع المقاطعات",
          "استخدام المؤقتات",
          "تصحيح أخطاء البرمجيات"
        ],
        description: [
          "برمجة المتحكمات الدقيقة تُمكن من التحكم في الأجهزة المدمجة.",
          "Arduino يُستخدم لتطوير النماذج الأولية بسهولة.",
          "STM32 يوفر أداءً عاليًا لتطبيقات متقدمة.",
          "بيئة التطوير تشمل IDEs مثل Arduino IDE وKeil.",
          "برامج المدخلات/المخرجات تُدير أجهزة الاستشعار والمشغلات.",
          "المقاطعات تُتيح استجابة سريعة للأحداث.",
          "المؤقتات تُستخدم لتوقيت العمليات بدقة.",
          "تصحيح الأخطاء يُحسن موثوقية البرمجيات.",
          "يُعتبر ضروريًا لتطوير أنظمة مدمجة وظيفية.",
          "يُساعد في تحقيق التحكم الدقيق بالأجهزة.",
          "يُحسن كفاءة الأنظمة المدمجة."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Arduino Tutorials", url: "https://www.arduino.cc/en/Tutorial/HomePage" },
            { name: "STM32 Documentation", url: "https://www.st.com/en/microcontrollers-microprocessors/stm32.html" }
          ],
          paid: [
            { name: "Udemy Arduino Course", url: "https://www.udemy.com/topic/arduino/" },
            { name: "Pluralsight Microcontrollers", url: "https://www.pluralsight.com/courses/microcontroller-programming" }
          ]
        }
      },
      {
        title: "تصميم الأجهزة",
        icon: <CircuitBoard className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "تصميم لوحات PCB",
          "استخدام أدوات مثل Eagle",
          "اختيار المكونات المناسبة",
          "إنشاء مخططات الدوائر",
          "محاكاة الدوائر",
          "تصنيع اللوحات",
          "اختبار الأجهزة"
        ],
        description: [
          "تصميم الأجهزة يُركز على إنشاء الأجزاء المادية للأنظمة المدمجة.",
          "لوحات PCB (Printed Circuit Boards) تُربط المكونات الإلكترونية.",
          "أدوات مثل Eagle تُستخدم لتصميم الدوائر واللوحات.",
          "اختيار المكونات يعتمد على متطلبات الأداء والتكلفة.",
          "مخططات الدوائر تُوضح التوصيلات الكهربائية.",
          "محاكاة الدوائر تُقلل من الأخطاء قبل التصنيع.",
          "تصنيع اللوحات يتطلب التعاون مع مصانع متخصصة.",
          "اختبار الأجهزة يتحقق من عمل الدوائر.",
          "يُعتبر ضروريًا لإنشاء أنظمة مدمجة مخصصة.",
          "يُساعد في تحسين متانة الأجهزة.",
          "يُحسن القدرة على تطوير منتجات مبتكرة."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "KiCad Tutorials", url: "https://www.kicad.org/help/tutorials/" },
            { name: "Eagle Tutorials", url: "https://www.autodesk.com/products/eagle/overview" }
          ],
          paid: [
            { name: "Udemy PCB Design Course", url: "https://www.udemy.com/topic/pcb-design/" },
            { name: "Pluralsight PCB Design", url: "https://www.pluralsight.com/courses/pcb-design-fundamentals" }
          ]
        }
      },
      {
        title: "واجهات الاتصال",
        icon: <Link className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "فهم بروتوكولات UART",
          "استخدام I2C وSPI",
          "إعداد اتصالات Bluetooth",
          "التعامل مع Wi-Fi",
          "اختبار بروتوكولات الاتصال",
          "تصميم أنظمة متصلة",
          "ضمان أمان الاتصالات"
        ],
        description: [
          "واجهات الاتصال تُمكن الأنظمة المدمجة من التفاعل مع الأجهزة الأخرى.",
          "UART يُستخدم للاتصال التسلسلي البسيط.",
          "I2C وSPI يُستخدمان للاتصال بين المتحكمات والأجهزة الطرفية.",
          "Bluetooth يُتيح الاتصال اللاسلكي قصير المدى.",
          "Wi-Fi يُمكن الأنظمة من الاتصال بالإنترنت.",
          "اختبار البروتوكولات يضمن موثوقية الاتصال.",
          "الأنظمة المتصلة تُستخدم في إنترنت الأشياء (IoT).",
          "أمان الاتصالات يحمي البيانات من الاختراق.",
          "يُعتبر ضروريًا لتطوير أنظمة ذكية.",
          "يُساعد في بناء أنظمة متكاملة.",
          "يُحسن وظائف الأنظمة المدمجة."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "SparkFun Protocols", url: "https://learn.sparkfun.com/tutorials/serial-communication" },
            { name: "Adafruit IoT Guides", url: "https://learn.adafruit.com/category/internet-of-things-iot" }
          ],
          paid: [
            { name: "Udemy IoT Course", url: "https://www.udemy.com/topic/internet-of-things/" },
            { name: "Pluralsight IoT", url: "https://www.pluralsight.com/courses/iot-fundamentals" }
          ]
        }
      }
    ]
  },
  {
    title: "الأنظمة المدمجة المتقدمة",
    icon: <Server className="w-6 h-6 text-purple-400" />,
    children: [
      {
        title: "أنظمة الوقت الفعلي (RTOS)",
        icon: <Clock className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "فهم أنظمة RTOS",
          "استخدام FreeRTOS",
          "إدارة المهام (Tasks)",
          "التعامل مع المقاطعات",
          "ضمان التوقيت الدقيق",
          "تصحيح أخطاء RTOS",
          "تحسين أداء النظام"
        ],
        description: [
          "أنظمة الوقت الفعلي تُستخدم في التطبيقات التي تتطلب توقيتًا دقيقًا.",
          "RTOS تُدير المهام والموارد بكفاءة.",
          "FreeRTOS هو نظام مفتوح المصدر شائع الاستخدام.",
          "المهام تُنفذ عمليات متعددة بشكل متزامن.",
          "المقاطعات تُتيح استجابة فورية للأحداث.",
          "التوقيت الدقيق ضروري لتطبيقات مثل التحكم الصناعي.",
          "تصحيح الأخطاء يُحسن استقرار النظام.",
          "تحسين الأداء يُقلل من التأخير.",
          "يُعتبر ضروريًا لتطبيقات معقدة.",
          "يُساعد في تحقيق استجابة سريعة.",
          "يُحسن موثوقية الأنظمة."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "FreeRTOS Documentation", url: "https://www.freertos.org/Documentation/RTOS.html" },
            { name: "Real-Time Systems Guide", url: "https://www.embedded.com/real-time-operating-systems-rtos-101/" }
          ],
          paid: [
            { name: "Udemy RTOS Course", url: "https://www.udemy.com/topic/embedded-systems/" },
            { name: "Pluralsight RTOS", url: "https://www.pluralsight.com/courses/real-time-operating-systems" }
          ]
        }
      },
      {
        title: "إنترنت الأشياء (IoT)",
        icon: <Globe className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "تصميم أنظمة IoT",
          "استخدام MQTT وCoAP",
          "دمج أجهزة الاستشعار",
          "إعداد السحابة (Cloud)",
          "تحليل بيانات IoT",
          "ضمان أمان الأنظمة",
          "اختبار أنظمة IoT"
        ],
        description: [
          "إنترنت الأشياء يربط الأنظمة المدمجة بالإنترنت لتطبيقات ذكية.",
          "تصميم IoT يتضمن الأجهزة، الشبكات، والسحابة.",
          "MQTT وCoAP هما بروتوكولات خفيفة للاتصال.",
          "أجهزة الاستشعار تُجمع البيانات من البيئة.",
          "السحابة تُخزن وتُحلل بيانات IoT.",
          "تحليل البيانات يُوفر رؤى لتحسين الأنظمة.",
          "أمان الأنظمة يحمي من الهجمات السيبرانية.",
          "اختبار الأنظمة يضمن عملها بسلاسة.",
          "يُعتبر ضروريًا لتطوير أنظمة ذكية.",
          "يُساعد في بناء حلول مبتكرة.",
          "يُحسن كفاءة التطبيقات."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "AWS IoT Tutorials", url: "https://aws.amazon.com/iot/getting-started/" },
            { name: "Adafruit IoT Guides", url: "https://learn.adafruit.com/category/internet-of-things-iot" }
          ],
          paid: [
            { name: "Udemy IoT Course", url: "https://www.udemy.com/topic/internet-of-things/" },
            { name: "Pluralsight IoT", url: "https://www.pluralsight.com/courses/iot-fundamentals" }
          ]
        }
      },
      {
        title: "أمان الأنظمة المدمجة",
        icon: <Shield className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "تطبيق التشفير",
          "إدارة المفاتيح الأمنية",
          "حماية البيانات المخزنة",
          "ضمان أمان الاتصالات",
          "اختبار الثغرات الأمنية",
          "تحديث البرمجيات الثابتة",
          "التعامل مع الهجمات"
        ],
        description: [
          "أمان الأنظمة المدمجة يحمي الأجهزة من التهديدات السيبرانية.",
          "التشفير يُؤمن البيانات أثناء النقل والتخزين.",
          "إدارة المفاتيح تُحافظ على سرية البيانات.",
          "حماية البيانات تُمنع الوصول غير المصرح به.",
          "أمان الاتصالات يُستخدم بروتوكولات مثل TLS.",
          "اختبار الثغرات يكشف نقاط الضعف.",
          "تحديث البرمجيات يُصلح الثغرات الأمنية.",
          "التعامل مع الهجمات يتطلب خطط استجابة.",
          "يُعتبر ضروريًا لأنظمة متصلة.",
          "يُساعد في حماية بيانات المستخدم.",
          "يُحسن الثقة في الأنظمة."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "OWASP Embedded Security", url: "https://owasp.org/www-project-iot-security/" },
            { name: "Arm Security Guides", url: "https://developer.arm.com/security" }
          ],
          paid: [
            { name: "Udemy Embedded Security Course", url: "https://www.udemy.com/topic/embedded-systems/" },
            { name: "Pluralsight Embedded Security", url: "https://www.pluralsight.com/courses/embedded-systems-security" }
          ]
        }
      }
    ]
  },
  {
    title: "إدارة المشاريع والتطبيقات العملية",
    icon: <Briefcase className="w-6 h-6 text-orange-400" />,
    children: [
      {
        title: "إدارة مشاريع الأنظمة المدمجة",
        icon: <Clipboard className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "تخطيط مشاريع الأنظمة",
          "إدارة فرق التطوير",
          "تطبيق منهجيات Agile",
          "توثيق المشاريع",
          "إدارة المخاطر",
          "متابعة التقدم",
          "تقييم الأداء"
        ],
        description: [
          "إدارة المشاريع تُضمن نجاح تطوير الأنظمة المدمجة.",
          "التخطيط يُحدد الأهداف، الموارد، والجدول الزمني.",
          "إدارة الفرق تُنسق بين المهندسين والمبرمجين.",
          "منهجيات Agile تُحسن المرونة والتكيف.",
          "توثيق المشاريع يُسهل صيانة الأنظمة.",
          "إدارة المخاطر تُقلل من المشكلات التقنية.",
          "متابعة التقدم تُبقي المشروع على المسار.",
          "تقييم الأداء يُحسن جودة المنتج.",
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
            { name: "Udemy Project Management Course", url: "https://www.udemy.com/topic/project-management/" },
            { name: "Pluralsight Project Management", url: "https://www.pluralsight.com/courses/project-management-fundamentals" }
          ]
        }
      },
      {
        title: "تطبيقات عملية",
        icon: <Wrench className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "تطوير مشاريع Arduino",
          "إنشاء أنظمة تحكم",
          "تصميم أجهزة IoT",
          "اختبار الأنظمة في بيئات حقيقية",
          "تحليل أداء المشاريع",
          "دمج الأنظمة مع التطبيقات",
          "تقديم المشاريع"
        ],
        description: [
          "التطبيقات العملية تُمكن من تطبيق المعرفة في مشاريع حقيقية.",
          "مشاريع Arduino تُستخدم لتطوير نماذج أولية سريعة.",
          "أنظمة التحكم تُستخدم في الروبوتات والأتمتة.",
          "أجهزة IoT تُربط الأنظمة بالإنترنت.",
          "اختبار الأنظمة يتحقق من عملها في ظروف حقيقية.",
          "تحليل الأداء يُحسن كفاءة المشاريع.",
          "الدمج مع التطبيقات يُتيح واجهات مستخدم.",
          "تقديم المشاريع يُظهر النتائج لأصحاب المصلحة.",
          "يُعتبر ضروريًا لاكتساب خبرة عملية.",
          "يُساعد في بناء محفظة مشاريع.",
          "يُحسن القدرة على حل المشكلات."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Instructables Projects", url: "https://www.instructables.com/circuits/" },
            { name: "Hackster.io", url: "https://www.hackster.io/projects" }
          ],
          paid: [
            { name: "Udemy Embedded Projects Course", url: "https://www.udemy.com/topic/embedded-systems/" },
            { name: "Pluralsight Embedded Projects", url: "https://www.pluralsight.com/courses/embedded-systems-projects" }
          ]
        }
      },
      {
        title: "بناء المسار المهني",
        icon: <Briefcase className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "إنشاء محفظة مشاريع",
          "الحصول على شهادات معتمدة",
          "كتابة سيرة ذاتية قوية",
          "التواصل مع مجتمع المطورين",
          "التقديم لوظائف الأنظمة المدمجة",
          "متابعة التقنيات الحديثة",
          "تطوير المهارات الشخصية"
        ],
        description: [
          "بناء المسار المهني يُركز على التقدم في مجال الأنظمة المدمجة.",
          "المحفظة تُظهر المشاريع العملية والخبرة.",
          "الشهادات مثل ARM Certified Engineer تُعزز المصداقية.",
          "السيرة الذاتية تُبرز المهارات والإنجازات.",
          "التواصل يُتيح فرصًا مهنية جديدة.",
          "التقديم لوظائف يستهدف أدوار مثل مهندس أنظمة مدمجة.",
          "متابعة التقنيات تُبقيك محدثًا في المجال.",
          "المهارات الشخصية تُحسن التعاون والقيادة.",
          "يُعتبر ضروريًا للتقدم المهني.",
          "يُساعد في بناء علامة تجارية شخصية.",
          "يُحسن فرص التوظيف."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "LinkedIn Learning Career Tips", url: "https://www.linkedin.com/learning/" },
            { name: "Embedded.fm", url: "https://embedded.fm/" }
          ],
          paid: [
            { name: "Udemy Career Development Course", url: "https://www.udemy.com/topic/career-development/" },
            { name: "Pluralsight Career Skills", url: "https://www.pluralsight.com/courses/career-skills" }
          ]
        }
      }
    ]
  }
]

export default function Embedded(){
    return (
        <Roadmap title={"Embedded"} sections={sections}/>
    )
}
