import Roadmap from "../Components/RoadMap";
import React from "react";
import { 
  Layout, 
  Monitor, 
  Users, 
  Search, 
  UserCheck, 
  BarChart, 
  CheckSquare, 
  PenTool, 
  MousePointer, 
  Layers, 
  Smartphone, 
  Briefcase, 
  Calendar 
} from "lucide-react";
const sections = [
  {
    title: "الأساسيات",
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    children: [
      {
        title: "مبادئ تصميم واجهة المستخدم (UI)",
        icon: <Monitor className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "فهم أساسيات تصميم الواجهات",
          "إتقان التسلسل الهرمي البصري",
          "تطبيق نظرية الألوان",
          "اختيار الخطوط المناسبة",
          "إنشاء تخطيطات متوازنة",
          "استخدام التباعد والمحاذاة",
          "تصميم واجهات متجاوبة"
        ],
        description: [
          "مبادئ تصميم واجهة المستخدم هي الأساس لإنشاء واجهات جذابة وسهلة الاستخدام.",
          "التسلسل الهرمي البصري يرشد المستخدم للتركيز على العناصر المهمة.",
          "نظرية الألوان تُستخدم لخلق تناغم بصري وإثارة المشاعر.",
          "اختيار الخطوط يؤثر على القراءة والجمالية.",
          "التخطيطات المتوازنة تُحسن تجربة التصفح.",
          "التباعد والمحاذاة يضمنان وضوح التصميم.",
          "الواجهات المتجاوبة تتكيف مع مختلف الأجهزة.",
          "يُعتبر ضروريًا لتصميم تطبيقات ومواقع حديثة.",
          "يُساعد في بناء تجربة مستخدم سلسة.",
          "يُحسن الانطباع الأول للمنتج.",
          "يُشكل الأساس لتعلم تصميم UX."
        ],
        resources: {
          arabicFree: [
            { name: "أكاديمية حسوب", url: "https://academy.hsoub.com/" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Smashing Magazine", url: "https://www.smashingmagazine.com/category/ui-design/" },
            { name: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/" }
          ],
          paid: [
            { name: "Udemy UI Design Course", url: "https://www.udemy.com/topic/ui-design/" },
            { name: "Coursera UI Design", url: "https://www.coursera.org/courses?query=ui%20design" }
          ]
        }
      },
      {
        title: "مبادئ تجربة المستخدم (UX)",
        icon: <Users className="w-5 h-5 text-yellow-400" />,
        learningOutcomes: [
          "فهم رحلة المستخدم",
          "إجراء بحوث المستخدم",
          "إنشاء شخصيات المستخدم",
          "تحليل احتياجات المستخدم",
          "تطبيق مبادئ التصميم التفاعلي",
          "إنشاء خرائط تجربة المستخدم",
          "تقييم سهولة الاستخدام"
        ],
        description: [
          "مبادئ تجربة المستخدم تركز على تحسين تفاعل المستخدم مع المنتج.",
          "رحلة المستخدم توضح مراحل التفاعل مع المنتج.",
          "بحوث المستخدم تُساعد في فهم احتياجات الجمهور.",
          "شخصيات المستخدم تُمثل المستخدمين المستهدفين.",
          "تحليل الاحتياجات يُحدد متطلبات التصميم.",
          "التصميم التفاعلي يُركز على سهولة التفاعل.",
          "خرائط تجربة المستخدم تُظهر نقاط الألم والفرص.",
          "تقييم سهولة الاستخدام يُحسن تجربة المنتج.",
          "يُعتبر ضروريًا لتصميم منتجات تتمحور حول المستخدم.",
          "يُساعد في زيادة رضا العملاء.",
          "يُحسن كفاءة التفاعل مع المنتج."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "UX Design Institute", url: "https://www.uxdesigninstitute.com/blog/" },
            { name: "Interaction Design Foundation", url: "https://www.interaction-design.org/literature" }
          ],
          paid: [
            { name: "Udemy UX Design Course", url: "https://www.udemy.com/topic/ux-design/" },
            { name: "Pluralsight UX Design", url: "https://www.pluralsight.com/courses/ux-design-fundamentals" }
          ]
        }
      },
      {
        title: "أدوات التصميم",
        icon: <PenTool className="w-5 h-5 text-red-400" />,
        learningOutcomes: [
          "إتقان Figma",
          "استخدام Adobe XD",
          "تصميم باستخدام Sketch",
          "إنشاء نماذج تفاعلية",
          "إدارة مكتبات التصميم",
          "التعاون مع فرق التطوير",
          "تصدير الأصول للتطوير"
        ],
        description: [
          "أدوات التصميم تُستخدم لإنشاء واجهات وتجارب مستخدم احترافية.",
          "Figma يُتيح التصميم التعاوني في الوقت الفعلي.",
          "Adobe XD يُستخدم لتصميم وتجربة النماذج الأولية.",
          "Sketch يُركز على تصميم واجهات لنظام macOS.",
          "النماذج التفاعلية تُظهر كيفية عمل التصميم.",
          "مكتبات التصميم تُسهل إعادة استخدام العناصر.",
          "التعاون مع المطورين يضمن دقة التنفيذ.",
          "تصدير الأصول يُساعد في تطوير المنتج النهائي.",
          "يُعتبر ضروريًا لإنتاج تصاميم عالية الجودة.",
          "يُساعد في تسريع عملية التصميم.",
          "يُحسن التواصل بين فرق التصميم والتطوير."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Figma Tutorials", url: "https://www.figma.com/community" },
            { name: "Adobe XD Tutorials", url: "https://www.adobe.com/products/xd/learn.html" }
          ],
          paid: [
            { name: "Udemy Figma Course", url: "https://www.udemy.com/topic/figma/" },
            { name: "Pluralsight Design Tools", url: "https://www.pluralsight.com/courses/figma-fundamentals" }
          ]
        }
      }
    ]
  },
  {
    title: "بحوث وتحليلات المستخدم",
    icon: <Search className="w-6 h-6 text-cyan-400" />,
    children: [
      {
        title: "بحوث المستخدم",
        icon: <UserCheck className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "إجراء المقابلات مع المستخدمين",
          "تصميم الاستبيانات",
          "إجراء اختبارات المستخدم",
          "تحليل البيانات النوعية",
          "تحليل البيانات الكمية",
          "إنشاء تقارير البحث",
          "تطبيق نتائج البحث"
        ],
        description: [
          "بحوث المستخدم تُساعد في فهم احتياجات وتوقعات المستخدمين.",
          "المقابلات تُوفر رؤى عميقة حول سلوك المستخدم.",
          "الاستبيانات تجمع بيانات من جمهور واسع.",
          "اختبارات المستخدم تُظهر كيفية تفاعل المستخدم مع المنتج.",
          "تحليل البيانات النوعية يكشف عن الأنماط والمشكلات.",
          "تحليل البيانات الكمية يُقدم إحصاءات دقيقة.",
          "تقارير البحث تُوجه قرارات التصميم.",
          "تطبيق النتائج يُحسن جودة المنتج.",
          "يُعتبر ضروريًا لتصميم يركز على المستخدم.",
          "يُساعد في تقليل التخمين في التصميم.",
          "يُحسن رضا المستخدم عن المنتج."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Interaction Design Foundation", url: "https://www.interaction-design.org/literature/topics/user-research" },
            { name: "UX Planet", url: "https://uxplanet.org/" }
          ],
          paid: [
            { name: "Udemy User Research Course", url: "https://www.udemy.com/topic/user-experience-design/" },
            { name: "Coursera User Research", url: "https://www.coursera.org/courses?query=user%20research" }
          ]
        }
      },
      {
        title: "تحليلات المنتج",
        icon: <BarChart className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "استخدام Google Analytics",
          "تحليل سلوك المستخدم",
          "قياس مؤشرات الأداء (KPIs)",
          "إنشاء خرائط الحرارة",
          "تتبع مسارات المستخدم",
          "تحسين التحويلات",
          "إعداد تقارير الأداء"
        ],
        description: [
          "تحليلات المنتج تُساعد في قياس أداء المنتج وتحسينه.",
          "Google Analytics يُظهر كيفية تفاعل المستخدمين مع الموقع.",
          "تحليل السلوك يكشف عن أنماط استخدام المنتج.",
          "مؤشرات الأداء تُقيم نجاح المنتج.",
          "خرائط الحرارة تُظهر المناطق الأكثر تفاعلاً.",
          "تتبع المسارات يُحسن تدفق المستخدم.",
          "تحسين التحويلات يزيد من فعالية المنتج.",
          "تقارير الأداء تُوجه قرارات التحسين.",
          "يُعتبر ضروريًا لتحسين تجربة المستخدم.",
          "يُساعد في اتخاذ قرارات قائمة على البيانات.",
          "يُحسن عائد الاستثمار للمنتج."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Google Analytics Academy", url: "https://analytics.google.com/analytics/academy/" },
            { name: "Mixpanel Guides", url: "https://mixpanel.com/blog/" }
          ],
          paid: [
            { name: "Udemy Analytics Course", url: "https://www.udemy.com/topic/google-analytics/" },
            { name: "Pluralsight Analytics", url: "https://www.pluralsight.com/courses/google-analytics-fundamentals" }
          ]
        }
      },
      {
        title: "اختبارات المستخدم",
        icon: <CheckSquare className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "إجراء اختبارات الاستخدام",
          "تصميم سيناريوهات الاختبار",
          "تسجيل ملاحظات المستخدم",
          "تحليل نتائج الاختبار",
          "تحسين التصميم بناءً على النتائج",
          "استخدام أدوات الاختبار",
          "إعداد تقارير الاختبار"
        ],
        description: [
          "اختبارات المستخدم تُساعد في تحديد مشكلات التصميم وتحسينها.",
          "اختبارات الاستخدام تُظهر كيفية تفاعل المستخدم مع المنتج.",
          "سيناريوهات الاختبار تُحاكي حالات الاستخدام الحقيقية.",
          "تسجيل الملاحظات يُوفر بيانات قيمة للتحسين.",
          "تحليل النتائج يكشف عن نقاط الضعف في التصميم.",
          "تحسين التصميم يعتمد على ملاحظات المستخدمين.",
          "أدوات مثل UserTesting تُسهل إجراء الاختبارات.",
          "تقارير الاختبار تُوجه قرارات التصميم.",
          "يُعتبر ضروريًا لضمان جودة المنتج.",
          "يُساعد في تحسين رضا المستخدم.",
          "يُقلل من التكاليف المرتبطة بالتصحيح لاحقًا."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Usability.gov", url: "https://www.usability.gov/how-to-and-tools/methods/user-testing.html" },
            { name: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/usability-testing/" }
          ],
          paid: [
            { name: "Udemy Usability Testing Course", url: "https://www.udemy.com/topic/user-experience-design/" },
            { name: "Coursera Usability Testing", url: "https://www.coursera.org/courses?query=usability%20testing" }
          ]
        }
      }
    ]
  },
  {
    title: "تصميم الواجهات المتقدم",
    icon: <PenTool className="w-6 h-6 text-purple-400" />,
    children: [
      {
        title: "تصميم التفاعل",
        icon: <MousePointer className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "تصميم التفاعلات الدقيقة",
          "إنشاء انتقالات سلسة",
          "تطبيق مبادئ الحركة",
          "تصميم إيماءات التفاعل",
          "استخدام أدوات النماذج المتحركة",
          "تحسين تجربة التفاعل",
          "اختبار التفاعلات"
        ],
        description: [
          "تصميم التفاعل يُركز على تحسين تفاعل المستخدم مع الواجهة.",
          "التفاعلات الدقيقة تُضيف إحساسًا بالاستجابة للعناصر.",
          "الانتقالات السلسة تُحسن تدفق تجربة المستخدم.",
          "مبادئ الحركة تُعزز الجمالية والوظيفية.",
          "إيماءات التفاعل تُستخدم في الأجهزة اللمسية.",
          "أدوات مثل Principle تُنشئ نماذج متحركة.",
          "تحسين التفاعل يزيد من جاذبية المنتج.",
          "اختبار التفاعلات يضمن عملها بسلاسة.",
          "يُعتبر ضروريًا لتصميم واجهات حديثة.",
          "يُساعد في إنشاء تجارب مميزة.",
          "يُحسن التفاعل بين المستخدم والمنتج."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Interaction Design Foundation", url: "https://www.interaction-design.org/literature/topics/interaction-design" },
            { name: "Motion Design School", url: "https://motiondesign.school/free-tutorials/" }
          ],
          paid: [
            { name: "Udemy Interaction Design Course", url: "https://www.udemy.com/topic/interaction-design/" },
            { name: "Pluralsight Interaction Design", url: "https://www.pluralsight.com/courses/interaction-design-fundamentals" }
          ]
        }
      },
      {
        title: "تصميم الأنظمة",
        icon: <Layers className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "إنشاء أنظمة تصميم",
          "إدارة مكتبات المكونات",
          "تطوير أنماط بصرية متسقة",
          "إنشاء إرشادات التصميم",
          "التعاون مع فرق التطوير",
          "تحديث أنظمة التصميم",
          "تطبيق أنظمة على مشاريع متعددة"
        ],
        description: [
          "تصميم الأنظمة يُنشئ إطارًا موحدًا لتصميم المنتجات.",
          "أنظمة التصميم تُوفر مكونات قابلة لإعادة الاستخدام.",
          "مكتبات المكونات تُسهل التصميم المتسق.",
          "الأنماط البصرية تُحافظ على هوية العلامة التجارية.",
          "إرشادات التصميم تُوجه فرق التصميم والتطوير.",
          "التعاون مع المطورين يضمن تنفيذًا دقيقًا.",
          "تحديث الأنظمة يُبقي التصميم حديثًا.",
          "التطبيق على مشاريع متعددة يُحسن الكفاءة.",
          "يُعتبر ضروريًا للمشاريع الكبيرة.",
          "يُساعد في تقليل التناقضات في التصميم.",
          "يُحسن سرعة تطوير المنتج."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Material Design", url: "https://material.io/design" },
            { name: "Design Systems", url: "https://www.designsystems.com/" }
          ],
          paid: [
            { name: "Udemy Design Systems Course", url: "https://www.udemy.com/topic/design-systems/" },
            { name: "Pluralsight Design Systems", url: "https://www.pluralsight.com/courses/design-systems-fundamentals" }
          ]
        }
      },
      {
        title: "تصميم المنتجات الرقمية",
        icon: <Smartphone className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "تصميم تطبيقات الهاتف",
          "تصميم مواقع الويب",
          "إنشاء نماذج أولية عالية الدقة",
          "تطبيق مبادئ التصميم المتجاوب",
          "تحسين تجربة المستخدم",
          "اختبار التصميم على الأجهزة",
          "إدارة دورة حياة المنتج"
        ],
        description: [
          "تصميم المنتجات الرقمية يُركز على إنشاء تطبيقات ومواقع جذابة.",
          "تطبيقات الهاتف تتطلب تصميمًا يراعي شاشات صغيرة.",
          "مواقع الويب تتطلب تصميمًا متجاوبًا لجميع الأجهزة.",
          "النماذج الأولية تُظهر المنتج قبل التطوير.",
          "التصميم المتجاوب يضمن تجربة متسقة.",
          "تحسين تجربة المستخدم يزيد من رضا العملاء.",
          "اختبار التصميم على الأجهزة يكشف المشكلات.",
          "إدارة دورة الحياة تُحسن تطور المنتج.",
          "يُعتبر ضروريًا لإطلاق منتجات ناجحة.",
          "يُساعد في بناء هوية رقمية قوية.",
          "يُحسن التفاعل مع المنتجات الرقمية."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Dribbble", url: "https://dribbble.com/" },
            { name: "Behance", url: "https://www.behance.net/" }
          ],
          paid: [
            { name: "Udemy Digital Product Design", url: "https://www.udemy.com/topic/product-design/" },
            { name: "Pluralsight Product Design", url: "https://www.pluralsight.com/courses/digital-product-design" }
          ]
        }
      }
    ]
  },
  {
    title: "إدارة المشاريع والتعاون",
    icon: <Briefcase className="w-6 h-6 text-orange-400" />,
    children: [
      {
        title: "إدارة المشاريع",
        icon: <Calendar className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "تخطيط مشاريع التصميم",
          "إدارة الجدول الزمني",
          "تطبيق منهجيات Agile",
          "إدارة الموارد",
          "متابعة التقدم",
          "حل المشكلات",
          "تقييم أداء المشروع"
        ],
        description: [
          "إدارة المشاريع تُضمن تنفيذ تصاميم UI/UX بكفاءة.",
          "التخطيط يُحدد الأهداف والمهام المطلوبة.",
          "الجدول الزمني يُبقي المشروع على المسار الصحيح.",
          "منهجيات Agile تُحسن المرونة في التصميم.",
          "إدارة الموارد تُوزع المهام بفعالية.",
          "متابعة التقدم تُظهر حالة المشروع.",
          "حل المشكلات يُحافظ على جودة التصميم.",
          "تقييم الأداء يُحسن المشاريع المستقبلية.",
          "يُعتبر ضروريًا لإدارة فرق التصميم.",
          "يُساعد في تلبية توقعات العملاء.",
          "يُحسن كفاءة تنفيذ المشاريع."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Scrum.org", url: "https://www.scrum.org/" },
            { name: "Trello Guides", url: "https://trello.com/guide" }
          ],
          paid: [
            { name: "Udemy Project Management Course", url: "https://www.udemy.com/topic/project-management/" },
            { name: "Pluralsight Project Management", url: "https://www.pluralsight.com/courses/project-management-fundamentals" }
          ]
        }
      },
      {
        title: "التعاون مع الفرق",
        icon: <Users className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "التعاون مع المطورين",
          "التواصل مع أصحاب المصلحة",
          "استخدام أدوات التعاون",
          "إدارة التعليقات",
          "تنظيم ورش عمل التصميم",
          "تسليم التصاميم",
          "حل النزاعات"
        ],
        description: [
          "التعاون مع الفرق يُضمن تنفيذ تصاميم UI/UX بدقة.",
          "التعاون مع المطورين يُحسن تحويل التصاميم إلى كود.",
          "التواصل مع أصحاب المصلحة يُوضح متطلبات المشروع.",
          "أدوات مثل Slack وFigma تُسهل التعاون.",
          "إدارة التعليقات تُحسن جودة التصميم.",
          "ورش عمل التصميم تُعزز الإبداع الجماعي.",
          "تسليم التصاميم يتطلب تنظيمًا ووضوحًا.",
          "حل النزاعات يُحافظ على سير العمل.",
          "يُعتبر ضروريًا لمشاريع الفرق الكبيرة.",
          "يُساعد في تحقيق رؤية موحدة.",
          "يُحسن كفاءة سير العمل."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Atlassian Collaboration", url: "https://www.atlassian.com/work-management/collaboration" },
            { name: "InVision Blog", url: "https://www.invisionapp.com/inside-design/" }
          ],
          paid: [
            { name: "Udemy Collaboration Course", url: "https://www.udemy.com/topic/team-collaboration/" },
            { name: "Pluralsight Collaboration", url: "https://www.pluralsight.com/courses/collaboration-skills" }
          ]
        }
      },
      {
        title: "إدارة المحفظة",
        icon: <Briefcase className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "إنشاء محفظة احترافية",
          "عرض المشاريع بشكل جذاب",
          "كتابة دراسات حالة",
          "تحسين المحفظة للوظائف",
          "استخدام منصات المحفظة",
          "تحديث المحفظة بانتظام",
          "تسويق المحفظة"
        ],
        description: [
          "إدارة المحفظة تُظهر مهارات UI/UX لأصحاب العمل.",
          "المحفظة الاحترافية تُبرز أفضل أعمالك.",
          "عرض المشاريع يُوضح عملية التصميم.",
          "دراسات الحالة تُشرح التحديات والحلول.",
          "تحسين المحفظة يُزيد من فرص التوظيف.",
          "منصات مثل Behance تُعرض أعمالك عالميًا.",
          "التحديث المنتظم يُبقي المحفظة حديثة.",
          "تسويق المحفظة يُعزز رؤيتك المهنية.",
          "يُعتبر ضروريًا للتقدم الوظيفي.",
          "يُساعد في بناء علامة تجارية شخصية.",
          "يُحسن فرص التواصل المهني."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Dribbble Portfolio Tips", url: "https://dribbble.com/stories" },
            { name: "UX Collective", url: "https://uxdesign.cc/" }
          ],
          paid: [
            { name: "Udemy Portfolio Course", url: "https://www.udemy.com/topic/portfolio/" },
            { name: "Pluralsight Portfolio", url: "https://www.pluralsight.com/courses/building-ux-design-portfolio" }
          ]
        }
      }
    ]
  }
]

export default function UIUX(){
    return (
        <Roadmap title={"UI-Ux"} sections={sections}/>
    )
}