import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  FileJson,
  LayoutTemplate,
  FileTerminal,
  Braces,
  Blocks,
  Globe,
  Atom,
  Layers,
  GitBranch,
  Puzzle,
  Type,
  Server,
  Workflow,
  TestTube,
  Rocket,
  Box,
  FormInput,
  Palette
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { BgContext } from "../Context/bgContext";

const sections = [
  {
    title: "الأساسيات",
    icon: <Code className="w-6 h-6 text-amber-400" />,
    children: [
      {
        title: "HTML",
        icon: <LayoutTemplate className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "Learn the basics of HTML structure",
          "Understand semantic HTML",
          "Create forms and validation",
          "Work with multimedia (images, videos)",
          "Build accessible web pages",
          "Use HTML5 APIs",
          "Organize content with proper tags"
        ],
        description: [
          "HTML هي لغة الترميز الأساسية لبناء صفحات الويب وتنظيم محتواها.",
          "تُستخدم لإنشاء الهيكلية الأساسية للمواقع مثل النصوص والصور.",
          "تدعم العناصر الدلالية (semantic) لتحسين إمكانية الوصول وSEO.",
          "تشمل ميزات HTML5 مثل Canvas وGeolocation لتجربة تفاعلية.",
          "تساعد في ضمان توافق المواقع مع مختلف المتصفحات والأجهزة.",
          "توفر أدوات لإنشاء نماذج تفاعلية مع التحقق من البيانات.",
          "تُعتبر الخطوة الأولى لأي مطور ويب مبتدئ أو محترف.",
          "تدعم إضافة الوسائط المتعددة مثل الفيديوهات والصوتيات.",
          "تُستخدم مع CSS وJavaScript لإنشاء تجارب ويب ديناميكية.",
          "تُسهل إنشاء صفحات ويب متجاوبة تناسب جميع الأجهزة.",
          "تُمكن المطورين من إنشاء محتوى منظم وسهل الصيانة."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "أكاديمية ترميز", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "W3Schools", url: "https://www.w3schools.com/html/" },
            { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" }
          ],
          paid: [
            { name: "Udemy HTML Course", url: "https://www.udemy.com/topic/html/" },
            { name: "Pluralsight HTML Path", url: "https://www.pluralsight.com/paths/html" }
          ]
        }
      },
      {
        title: "CSS",
        icon: <FileJson className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Master CSS syntax and selectors",
          "Create responsive layouts",
          "Understand Flexbox and Grid",
          "Apply animations and transitions",
          "Use CSS variables",
          "Style forms and buttons",
          "Optimize CSS for performance",
          "Use Tailwind CSS for utility-first styling",
          "Implement Bootstrap for rapid UI development"
        ],
        description: [
          "CSS هي لغة التنسيق الأساسية لتصميم صفحات الويب وتحسين مظهرها.",
          "تتحكم في الألوان، الخطوط، التخطيطات، والتباعد بين العناصر.",
          "تدعم التصميم المتجاوب لضمان توافق المواقع مع جميع الأجهزة.",
          "توفر أدوات مثل Flexbox وGrid لإنشاء تخطيطات معقدة بسهولة.",
          "تتيح إضافة تأثيرات بصرية مثل التحولات والرسوم المتحركة.",
          "تساعد في تحسين تجربة المستخدم من خلال واجهات جذابة وسلسة.",
          "تدعم المتغيرات (CSS Variables) لتسهيل إدارة الأنماط.",
          "تُستخدم لتصميم نماذج وأزرار تفاعلية تتماشى مع هوية الموقع.",
          "تُحسن أداء الموقع من خلال تحسين الأنماط وتقليل التعقيد.",
          "Tailwind CSS يوفر نهجًا قائمًا على الـ utility-first لتصميم سريع ومرن.",
          "Bootstrap يُسهل إنشاء واجهات متجاوبة باستخدام مكونات جاهزة."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "أكاديمية ترميز", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "CSS Tricks", url: "https://css-tricks.com/" },
            { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            { name: "Tailwind CSS Docs", url: "https://tailwindcss.com/docs" },
            { name: "Bootstrap Docs", url: "https://getbootstrap.com/docs" }
          ],
          paid: [
            { name: "Udemy CSS Course", url: "https://www.udemy.com/topic/css/" },
            { name: "Frontend Masters CSS", url: "https://frontendmasters.com/courses/css-grids-flexbox/" },
            { name: "Udemy Tailwind CSS Course", url: "https://www.udemy.com/topic/tailwind-css/" },
            { name: "Udemy Bootstrap Course", url: "https://www.udemy.com/topic/bootstrap/" }
          ]
        }
      },
      {
        title: "JavaScript",
        icon: <FileTerminal className="w-5 h-5 text-yellow-300" />,
        learningOutcomes: [
          "Understand variables and data types",
          "Master functions and scope",
          "Work with DOM manipulation",
          "Handle events and listeners",
          "Use arrays and objects",
          "Implement basic algorithms",
          "Learn asynchronous JavaScript"
        ],
        description: [
          "JavaScript هي لغة برمجة أساسية لإضافة التفاعلية لصفحات الويب.",
          "تُستخدم لتحريك العناصر، تحديث المحتوى ديناميكيًا، والتفاعل مع المستخدم.",
          "تتحكم في DOM لتغيير محتوى الصفحة بناءً على إجراءات المستخدم.",
          "تدعم البرمجة غير المتزامنة باستخدام Promises وasync/await.",
          "توفر أدوات لإنشاء تطبيقات ويب ديناميكية وتفاعلية.",
          "تُستخدم في كل من تطوير الواجهة الأمامية والخلفية (مع Node.js).",
          "تشمل ميزات مثل التعامل مع المصفوفات والكائنات بكفاءة.",
          "تُعتبر أساسية لفهم أطر عمل مثل React وVue.js.",
          "تساعد في بناء خوارزميات بسيطة لحل المشكلات البرمجية.",
          "تُحسن تجربة المستخدم من خلال إضافة ميزات تفاعلية متقدمة.",
          "تدعم تطوير تطبيقات الويب الحديثة بأداء عالٍ."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "JavaScript.info", url: "https://javascript.info/" },
            { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
          ],
          paid: [
            { name: "Udemy JavaScript Course", url: "https://www.udemy.com/topic/javascript/" },
            { name: "Pluralsight JavaScript Path", url: "https://www.pluralsight.com/paths/javascript" }
          ]
        }
      }
    ]
  },
  {
    title: "JavaScript المتقدم",
    icon: <Braces className="w-6 h-6 text-yellow-500" />,
    children: [
      {
        title: "DOM + APIs",
        icon: <Globe className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Manipulate DOM elements",
          "Fetch data from APIs",
          "Handle JSON responses",
          "Implement event delegation",
          "Understand CORS and security",
          "Build dynamic UI updates",
          "Optimize DOM performance"
        ],
        description: [
          "DOM هي واجهة برمجية للتفاعل مع عناصر صفحات الويب ديناميكيًا.",
          "تُتيح APIs جلب البيانات من مصادر خارجية مثل خوادم الطقس أو الشبكات الاجتماعية.",
          "تُستخدم لتحديث واجهات المستخدم بناءً على البيانات المستلمة.",
          "تدعم تقنيات مثل event delegation لتحسين أداء التفاعل مع الأحداث.",
          "تتطلب فهم CORS لضمان الأمان أثناء التواصل مع الخوادم.",
          "تُساعد في بناء تطبيقات ويب تفاعلية مثل لوحات التحكم.",
          "تُحسن تجربة المستخدم من خلال تحديثات فورية وسلسة.",
          "تتطلب تحسين الأداء لتقليل التأخير أثناء معالجة DOM.",
          "تُعتبر أساسية لتطوير تطبيقات الويب الحديثة.",
          "تُستخدم مع البرمجة غير المتزامنة لتحسين الكفاءة.",
          "توفر أدوات للتعامل مع البيانات بتنسيق JSON بسهولة."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/API" },
            { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified" }
          ],
          paid: [
            { name: "Udemy API Course", url: "https://www.udemy.com/topic/rest-api/" },
            { name: "Frontend Masters APIs", url: "https://frontendmasters.com/courses/api-design-nodejs-v3/" }
          ]
        }
      },
      {
        title: "ES6",
        icon: <Atom className="w-5 h-5 text-blue-500" />,
        learningOutcomes: [
          "Use arrow functions",
          "Understand destructuring",
          "Work with modules",
          "Implement promises",
          "Use spread/rest operators",
          "Learn template literals",
          "Master let/const"
        ],
        description: [
          "ES6 هي تحديث رئيسي للغة JavaScript قدم ميزات حديثة وفعالة.",
          "تُقدم ميزات مثل arrow functions لكتابة كود أكثر إيجازًا.",
          "تدعم الـ modules لتنظيم الكود وإعادة استخدامه بسهولة.",
          "توفر Promises وasync/await للتعامل مع العمليات غير المتزامنة.",
          "تُستخدم ميزات مثل spread/rest operators لتحسين التعامل مع البيانات.",
          "تُقدم template literals لتسهيل كتابة النصوص الديناميكية.",
          "تُحسن إنتاجية المطور من خلال كتابة كود أنظف وأكثر وضوحًا.",
          "تُستخدم في جميع أطر العمل الحديثة مثل React وVue.js.",
          "تدعم let/const لإدارة المتغيرات بشكل أكثر أمانًا.",
          "تُقلل الأخطاء البرمجية بفضل ميزات مثل destructuring.",
          "تُعتبر ضرورية لتطوير تطبيقات الويب المتقدمة."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "JavaScript.info", url: "https://javascript.info/es6" },
            { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified" }
          ],
          paid: [
            { name: "Udemy ES6 Course", url: "https://www.udemy.com/topic/es6/" },
            { name: "Pluralsight ES6", url: "https://www.pluralsight.com/courses/javascript-es6-introduction" }
          ]
        }
      },
      {
        title: "OOP",
        icon: <Layers className="w-5 h-5 text-pink-400" />,
        learningOutcomes: [
          "Understand classes and objects",
          "Implement inheritance",
          "Use encapsulation",
          "Apply polymorphism",
          "Work with prototypes",
          "Design reusable code",
          "Optimize object creation"
        ],
        description: [
          "OOP هي نهج برمجي يعتمد على الكائنات لتنظيم الكود بشكل فعال.",
          "تُستخدم لإنشاء كائنات تحتوي على بيانات وسلوكيات مترابطة.",
          "تدعم الوراثة لإعادة استخدام الكود وتقليل التكرار.",
          "توفر التغليف (encapsulation) لحماية البيانات من التعديل غير المصرح به.",
          "تُتيح تعدد الأشكال (polymorphism) للتعامل مع الكائنات بمرونة.",
          "تُستخدم في تطوير تطبيقات معقدة مثل الألعاب وتطبيقات الويب.",
          "تساعد في تحسين صيانة الكود وقابليته للتوسع.",
          "تدعم الـ prototypes في JavaScript لإنشاء كائنات ديناميكية.",
          "تُعتبر أساسية لفهم أطر عمل مثل React وAngular.",
          "تُقلل تعقيد الكود من خلال تقسيمه إلى وحدات صغيرة.",
          "تُحسن إنتاجية المطورين من خلال هيكلة الكود بشكل منظم."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming" },
            { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" }
          ],
          paid: [
            { name: "Udemy OOP Course", url: "https://www.udemy.com/topic/object-oriented-programming/" },
            { name: "Pluralsight OOP", url: "https://www.pluralsight.com/courses/javascript-objects-prototypes-patterns" }
          ]
        }
      }
    ]
  },
  {
    title: "Frameworks to CSS",
    icon: <Blocks className="w-6 h-6 text-cyan-400" />,
    children: [
      {
        title: "Tailwind CSS",
        icon: <Blocks className="w-5 h-5 text-teal-300" />,
        learningOutcomes: [
          "Understand utility-first CSS",
          "Apply responsive design",
          "Customize themes and configs",
          "Use Tailwind directives",
          "Optimize for production",
          "Integrate with frameworks",
          "Build layouts efficiently"
        ],
        description: [
          "Tailwind CSS هو إطار عمل CSS يعتمد على نهج الأدوات المساعدة (utility-first) لبناء واجهات مستخدم بسرعة.",
          "يوفر فئات جاهزة للاستخدام لتصميم الواجهات دون كتابة CSS مخصص.",
          "يدعم التصميم المتجاوب (responsive) باستخدام فئات مثل sm:، md:، lg:.",
          "يسمح بتخصيص الألوان والخطوط عبر ملف الإعدادات (tailwind.config.js).",
          "يُستخدم لبناء تطبيقات ويب حديثة مثل المتاجر الإلكترونية ولوحات التحكم.",
          "يُحسن سرعة التطوير بفضل نهجه القائم على الفئات الجاهزة.",
          "يتكامل بسهولة مع أطر عمل مثل React وVue.js وAngular.",
          "يوفر أدوات CLI لتوليد ملفات CSS محسنة للإنتاج.",
          "يُعتبر خفيف الوزن بعد تحسين الملفات باستخدام PurgeCSS.",
          "يُسهل إنشاء واجهات متسقة وسهلة الصيانة.",
          "يُعتبر من أكثر إطارات CSS شيوعًا في سوق العمل."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Tailwind CSS Docs", url: "https://tailwindcss.com/docs" },
            { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified" }
          ],
          paid: [
            { name: "Udemy Tailwind CSS Course", url: "https://www.udemy.com/topic/tailwind-css/" },
            { name: "Frontend Masters Tailwind", url: "https://frontendmasters.com/courses/tailwind-css/" }
          ]
        }
      },
      {
        title: "Bootstrap",
        icon: <Blocks className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "Understand grid system",
          "Use pre-built components",
          "Apply responsive utilities",
          "Customize with SASS",
          "Implement navigation bars",
          "Style forms and buttons",
          "Integrate with JavaScript"
        ],
        description: [
          "Bootstrap هو إطار عمل CSS شامل لبناء واجهات مستخدم متجاوبة وجذابة.",
          "يوفر نظام شبكة (grid system) قوي لتصميم تخطيطات مرنة.",
          "يحتوي على مكونات جاهزة مثل الأزرار، النماذج، وشريط التنقل.",
          "يدعم التصميم المتجاوب باستخدام فئات مثل col-md-، col-lg-.",
          "يسمح بتخصيص الأنماط باستخدام SASS وملفات الإعدادات.",
          "يُستخدم لبناء تطبيقات ويب مثل المواقع التجارية والمدونات.",
          "يتضمن مكونات JavaScript لإضافة تفاعلية مثل النوافذ المنبثقة.",
          "يُعتبر مناسبًا للمبتدئين بفضل سهولة استخدامه.",
          "يوفر مظهرًا متسقًا عبر المتصفحات المختلفة.",
          "تُسهل أدوات CLI الخاصة به إدارة المشاريع.",
          "يُعتبر من أقدم وأشهر إطارات CSS في سوق العمل."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Bootstrap Docs", url: "https://getbootstrap.com/docs/5.3/getting-started/introduction/" },
            { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" }
          ],
          paid: [
            { name: "Udemy Bootstrap Course", url: "https://www.udemy.com/topic/bootstrap/" },
            { name: "Pluralsight Bootstrap", url: "https://www.pluralsight.com/paths/bootstrap" }
          ]
        }
      },
      {
        title: "Sass",
        icon: <Blocks className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand Sass syntax and variables",
          "Use nesting for cleaner CSS",
          "Implement mixins and functions",
          "Work with partials and imports",
          "Apply inheritance with @extend",
          "Optimize CSS output",
          "Integrate with build tools"
        ],
        description: [
          "Sass هي لغة معالجة مسبقة لـ CSS تُضيف ميزات متقدمة لتسهيل كتابة الأنماط.",
          "تدعم المتغيرات (variables) لإدارة الألوان والأحجام بشكل مركزي.",
          "تُتيح التداخل (nesting) لتنظيم الأنماط بشكل أكثر وضوحًا وقراءة.",
          "توفر المزج (mixins) والدوال (functions) لإعادة استخدام الأنماط بسهولة.",
          "تدعم التقسيم إلى ملفات جزئية (partials) مع الاستيراد (@import) لتنظيم المشروع.",
          "تُتيح الوراثة (inheritance) باستخدام @extend لتقليل تكرار الكود.",
          "تُستخدم لبناء أنماط معقدة في تطبيقات الويب مثل المتاجر الإلكترونية.",
          "تُحسن صيانة الكود من خلال هيكلية منظمة وملفات مقسمة.",
          "تُقلل حجم ملفات CSS بعد التحويل بفضل الضغط والتحسين.",
          "تتكامل مع أدوات البناء مثل Webpack وVite لتسهيل التطوير.",
          "تُعتبر أداة شائعة في سوق العمل لتطوير واجهات حديثة."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Sass Official Docs", url: "https://sass-lang.com/documentation/" },
            { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" }
          ],
          paid: [
            { name: "Udemy Sass Course", url: "https://www.udemy.com/topic/sass/" },
            { name: "Pluralsight Sass", url: "https://www.pluralsight.com/courses/sass" }
          ]
        }
      }
    ]
  },
  {
    title: "Frameworks to js",
    icon: <Blocks className="w-6 h-6 text-cyan-400" />,
    children: [
      {
        title: "React",
        icon: <Blocks className="w-5 h-5 text-teal-300" />,
        learningOutcomes: [
          "Understand components and JSX",
          "Manage state with hooks",
          "Handle props and events",
          "Build reusable UI components",
          "Work with React Router",
          "Optimize rendering",
          "Integrate with APIs"
        ],
        description: [
          "React هي مكتبة JavaScript لبناء واجهات مستخدم تفاعلية وقابلة لإعادة الاستخدام.",
          "تعتمد على المكونات (components) لتقسيم الواجهة إلى وحدات صغيرة.",
          "تستخدم JSX لكتابة واجهات بطريقة مشابهة لـ HTML داخل JavaScript.",
          "تدعم إدارة الحالة باستخدام hooks مثل useState وuseEffect.",
          "تُتيح تمرير البيانات بين المكونات باستخدام props.",
          "تُستخدم لبناء تطبيقات ويب حديثة مثل تطبيقات الشبكات الاجتماعية.",
          "توفر أداء عالي بفضل Virtual DOM لتحديث العناصر بكفاءة.",
          "تُسهل إنشاء تطبيقات متعددة الصفحات باستخدام React Router.",
          "تُعتبر من أكثر المكتبات شيوعًا في سوق العمل.",
          "تدعم التكامل مع مكتبات مثل Redux وNext.js.",
          "تُمكن من بناء واجهات متجاوبة وسهلة الصيانة."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "React Official Docs", url: "https://react.dev/" },
            { name: "Scrimba React", url: "https://scrimba.com/learn/learnreact" }
          ],
          paid: [
            { name: "Udemy React Course", url: "https://www.udemy.com/topic/react/" },
            { name: "Frontend Masters React", url: "https://frontendmasters.com/courses/react/" }
          ]
        }
      },
      {
        title: "Angular",
        icon: <Blocks className="w-5 h-5 text-red-400" />,
        learningOutcomes: [
          "Understand Angular architecture",
          "Use components and directives",
          "Implement data binding",
          "Work with services and dependency injection",
          "Set up routing",
          "Handle forms and validation",
          "Integrate with APIs"
        ],
        description: [
          "Angular هو إطار عمل شامل لبناء تطبيقات ويب ديناميكية وقوية.",
          "يعتمد على المكونات (components) لتنظيم الواجهة بشكل منظم.",
          "يستخدم TypeScript لتحسين جودة الكود واكتشاف الأخطاء مبكرًا.",
          "يدعم الـ data binding لربط البيانات بالواجهة بسهولة.",
          "يوفر خدمات (services) وتزويد التبعيات (dependency injection) لإدارة المنطق.",
          "تُستخدم لبناء تطبيقات معقدة مثل أنظمة إدارة المؤسسات.",
          "يوفر نظام توجيه (routing) قوي لإنشاء تطبيقات متعددة الصفحات.",
          "يدعم النماذج التفاعلية مع التحقق من البيانات بسهولة.",
          "يُعتبر مناسبًا للمشاريع الكبيرة بفضل هيكليته القوية.",
          "تُسهل أدوات CLI الخاصة به إنشاء وإدارة المشاريع.",
          "تدعم التكامل مع مكتبات مثل NgRx لإدارة الحالة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Angular Docs", url: "https://angular.io/docs" },
            { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" }
          ],
          paid: [
            { name: "Udemy Angular Course", url: "https://www.udemy.com/topic/angular/" },
            { name: "Pluralsight Angular", url: "https://www.pluralsight.com/paths/angular" }
          ]
        }
      },
      {
        title: "Vue.js",
        icon: <Blocks className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Understand Vue components",
          "Use Vue directives",
          "Manage state with Vuex/Pinia",
          "Implement Vue Router",
          "Handle reactivity",
          "Build reusable UI",
          "Integrate with APIs"
        ],
        description: [
          "Vue.js هو إطار عمل خفيف ومرن لبناء واجهات مستخدم تفاعلية.",
          "يعتمد على المكونات (components) لتقسيم الواجهة إلى وحدات صغيرة.",
          "يستخدم التوجيهات (directives) لإضافة سلوكيات ديناميكية للعناصر.",
          "يدعم إدارة الحالة باستخدام Vuex أو Pinia للتطبيقات الكبيرة.",
          "يوفر Vue Router لإنشاء تطبيقات متعددة الصفحات بسهولة.",
          "تُستخدم لبناء تطبيقات ويب حديثة مثل لوحات التحكم والمتاجر.",
          "يتميز بنظام التفاعلية (reactivity) لتحديث الواجهة تلقائيًا.",
          "يُعتبر سهل التعلم مقارنة بأطر العمل الأخرى مثل Angular.",
          "تُسهل أدوات CLI الخاصة به إنشاء وإدارة المشاريع.",
          "يدعم التكامل مع إطار Nuxt.js لتطبيقات محسنة.",
          "يُوفر أداء عالي وتجربة تطوير سلسة."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Vue.js Docs", url: "https://vuejs.org/guide/introduction.html" },
            { name: "Vue Mastery", url: "https://www.vuemastery.com/" }
          ],
          paid: [
            { name: "Udemy Vue.js Course", url: "https://www.udemy.com/topic/vue-js/" },
            { name: "Frontend Masters Vue", url: "https://frontendmasters.com/courses/vue-3/" }
          ]
        }
      }
    ]
  },
  {
    title: "React Path",
    icon: <Blocks className="w-6 h-6 text-cyan-400" />,
    children: [
      {
        title: "React Basics",
        icon: <Puzzle className="w-5 h-5 text-teal-300" />,
        learningOutcomes: [
          "Understand components",
          "Use JSX syntax",
          "Manage state with useState",
          "Handle props",
          "Create reusable UI",
          "Work with events",
          "Render lists dynamically"
        ],
        description: [
          "React هي مكتبة JavaScript لبناء واجهات مستخدم تفاعلية وقابلة لإعادة الاستخدام.",
          "تعتمد على المكونات (components) لتقسيم الواجهة إلى وحدات صغيرة.",
          "تستخدم JSX لكتابة واجهات بطريقة مشابهة لـ HTML داخل JavaScript.",
          "تدعم إدارة الحالة باستخدام useState لتحديث الواجهة ديناميكيًا.",
          "تُتيح تمرير البيانات بين المكونات باستخدام props.",
          "تُستخدم لبناء تطبيقات ويب حديثة مثل تطبيقات الشبكات الاجتماعية.",
          "توفر أداء عالي بفضل Virtual DOM لتحديث العناصر بكفاءة.",
          "تُسهل إنشاء قوائم ديناميكية باستخدام الـ map function.",
          "تُعتبر من أكثر المكتبات شيوعًا في سوق العمل.",
          "تدعم التعامل مع الأحداث مثل النقر والإدخال بسهولة.",
          "تُمكن من بناء واجهات متجاوبة وسهلة الصيانة."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "React Official Docs", url: "https://react.dev/" },
            { name: "Scrimba React", url: "https://scrimba.com/learn/learnreact" }
          ],
          paid: [
            { name: "Udemy React Course", url: "https://www.udemy.com/topic/react/" },
            { name: "Frontend Masters React", url: "https://frontendmasters.com/courses/react/" }
          ]
        }
      },
      {
        title: "Hooks + Routing + Context",
        icon: <GitBranch className="w-5 h-5 text-indigo-400" />,
        learningOutcomes: [
          "Master useEffect and useContext",
          "Implement custom hooks",
          "Set up React Router",
          "Manage global state",
          "Optimize rendering",
          "Handle side effects",
          "Build multi-page apps"
        ],
        description: [
          "Hooks هي ميزة حديثة في React لإدارة الحالة والتأثيرات الجانبية.",
          "يُتيح useEffect التعامل مع العمليات مثل جلب البيانات أو الاشتراكات.",
          "يُستخدم useContext لإدارة الحالة العامة بين المكونات بسهولة.",
          "تُتيح React Router إنشاء تطبيقات متعددة الصفحات بتجربة سلسة.",
          "تُمكن المطورين من إنشاء custom hooks لإعادة استخدام المنطق.",
          "تُحسن أداء التطبيق من خلال تحسين عمليات الـ rendering.",
          "تُستخدم لبناء تطبيقات معقدة مثل المتاجر الإلكترونية.",
          "تدعم التعامل مع التأثيرات الجانبية مثل تحديثات واجهة المستخدم.",
          "تُعتبر ضرورية لتطوير تطبيقات React متقدمة.",
          "تُسهل إدارة التنقل بين الصفحات دون إعادة تحميل.",
          "تُوفر هيكلية مرنة لإدارة البيانات في التطبيقات الكبيرة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "React Router Docs", url: "https://reactrouter.com/" },
            { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" }
          ],
          paid: [
            { name: "Udemy React Hooks Course", url: "https://www.udemy.com/topic/react-hooks/" },
            { name: "Pluralsight React", url: "https://www.pluralsight.com/paths/react" }
          ]
        }
      },
      {
        title: "Next.js",
        icon: <Server className="w-5 h-5 text-gray-400" />,
        learningOutcomes: [
          "Understand Next.js file structure",
          "Create static and dynamic pages",
          "Use API routes",
          "Implement SSG and SSR",
          "Work with Next.js routing",
          "Optimize images",
          "Deploy Next.js apps"
        ],
        description: [
          "Next.js هو إطار عمل مبني على React لتطوير تطبيقات ويب سريعة.",
          "يوفر ميزات مثل Server-Side Rendering (SSR) وStatic Site Generation (SSG).",
          "يُستخدم لبناء مواقع ويب محسنة لمحركات البحث (SEO).",
          "يدعم API routes لإنشاء واجهات خلفية داخل التطبيق.",
          "يُسهل إنشاء صفحات ديناميكية وثابتة باستخدام نظام الملفات.",
          "يُحسن أداء الموقع من خلال تحسين الصور والموارد.",
          "تُستخدم في تطوير تطبيقات مثل المتاجر الإلكترونية والمدونات.",
          "يوفر نظام توجيه (routing) بسيط وفعال للتنقل بين الصفحات.",
          "تُسهل عملية النشر على منصات مثل Vercel وNetlify.",
          "تُعتبر من أكثر الأطر شيوعًا في تطوير الويب الحديث.",
          "تدعم التوافق مع مكتبات وأدوات React الأخرى."
        ],
        resources: {
          arabicFree: [
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Next.js Docs", url: "https://nextjs.org/docs" },
            { name: "Lee Robinson", url: "https://www.youtube.com/@leerob" }
          ],
          paid: [
            { name: "Udemy Next.js Course", url: "https://www.udemy.com/topic/nextjs/" },
            { name: "Frontend Masters Next.js", url: "https://frontendmasters.com/courses/next-js/" }
          ]
        }
      }
    ]
  },
  {
    title: "Angular Path",
    icon: <Blocks className="w-6 h-6 text-red-400" />,
    children: [
      {
        title: "Angular Basics",
        icon: <Puzzle className="w-5 h-5 text-red-300" />,
        learningOutcomes: [
          "Understand Angular modules",
          "Create components and directives",
          "Implement data binding",
          "Use services and dependency injection",
          "Set up routing",
          "Handle forms and validation",
          "Work with Angular CLI"
        ],
        description: [
          "Angular هو إطار عمل شامل لبناء تطبيقات ويب ديناميكية وقوية.",
          "يعتمد على المكونات (components) لتنظيم الواجهة بشكل منظم.",
          "يستخدم TypeScript لتحسين جودة الكود واكتشاف الأخطاء مبكرًا.",
          "يدعم الـ data binding لربط البيانات بالواجهة بسهولة.",
          "يوفر خدمات (services) وتزويد التبعيات (dependency injection) لإدارة المنطق.",
          "تُستخدم لبناء تطبيقات معقدة مثل أنظمة إدارة المؤسسات.",
          "يوفر نظام توجيه (routing) قوي لإنشاء تطبيقات متعددة الصفحات.",
          "يدعم النماذج التفاعلية مع التحقق من البيانات بسهولة.",
          "يُعتبر مناسبًا للمشاريع الكبيرة بفضل هيكليته القوية.",
          "تُسهل أدوات CLI الخاصة به إنشاء وإدارة المشاريع.",
          "تدعم التكامل مع مكتبات مثل NgRx لإدارة الحالة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Angular Docs", url: "https://angular.io/docs" },
            { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" }
          ],
          paid: [
            { name: "Udemy Angular Course", url: "https://www.udemy.com/topic/angular/" },
            { name: "Pluralsight Angular", url: "https://www.pluralsight.com/paths/angular" }
          ]
        }
      },
      {
        title: "Advanced Angular + NgRx",
        icon: <GitBranch className="w-5 h-5 text-red-400" />,
        learningOutcomes: [
          "Master Angular pipes and directives",
          "Implement lazy loading",
          "Use NgRx for state management",
          "Optimize Angular performance",
          "Handle advanced routing",
          "Integrate with APIs",
          "Build enterprise-level apps"
        ],
        description: [
          "Advanced Angular يركز على بناء تطبيقات ويب معقدة ومحسنة.",
          "يُتيح NgRx إدارة الحالة بشكل مركزي ومنظم للتطبيقات الكبيرة.",
          "يدعم الـ lazy loading لتحسين سرعة تحميل التطبيق.",
          "يوفر الـ pipes والـ directives لتخصيص عرض البيانات والسلوكيات.",
          "يُستخدم لبناء تطبيقات على مستوى المؤسسات مثل أنظمة ERP.",
          "يُحسن أداء التطبيق من خلال تقنيات مثل change detection optimization.",
          "يدعم التوجيه المتقدم لإنشاء تجارب تنقل معقدة.",
          "يُتيح التكامل مع APIs خارجية لجلب البيانات ديناميكيًا.",
          "يُعتبر ضروريًا لتطوير تطبيقات Angular متقدمة.",
          "تُسهل أدوات CLI إدارة المشاريع الكبيرة.",
          "توفر هيكلية قوية لصيانة التطبيقات على المدى الطويل."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "NgRx Docs", url: "https://ngrx.io/docs" },
            { name: "Angular Docs", url: "https://angular.io/docs" }
          ],
          paid: [
            { name: "Udemy Angular Advanced Course", url: "https://www.udemy.com/topic/angular/" },
            { name: "Pluralsight NgRx", url: "https://www.pluralsight.com/courses/ngrx" }
          ]
        }
      }
    ]
  },
  {
    title: "Vue.js Path",
    icon: <Blocks className="w-6 h-6 text-green-400" />,
    children: [
      {
        title: "Vue.js Basics",
        icon: <Puzzle className="w-5 h-5 text-green-300" />,
        learningOutcomes: [
          "Understand Vue components",
          "Use Vue directives",
          "Implement data binding",
          "Work with Vue Router",
          "Handle reactivity",
          "Build reusable UI",
          "Integrate with APIs"
        ],
        description: [
          "Vue.js هو إطار عمل خفيف ومرن لبناء واجهات مستخدم تفاعلية.",
          "يعتمد على المكونات (components) لتقسيم الواجهة إلى وحدات صغيرة.",
          "يستخدم التوجيهات (directives) لإضافة سلوكيات ديناميكية للعناصر.",
          "يدعم الـ data binding لربط البيانات بالواجهة بسهولة.",
          "يوفر Vue Router لإنشاء تطبيقات متعددة الصفحات بسهولة.",
          "تُستخدم لبناء تطبيقات ويب حديثة مثل لوحات التحكم والمتاجر.",
          "يتميز بنظام التفاعلية (reactivity) لتحديث الواجهة تلقائيًا.",
          "يُعتبر سهل التعلم مقارنة بأطر العمل الأخرى مثل Angular.",
          "تُسهل أدوات CLI الخاصة به إنشاء وإدارة المشاريع.",
          "يدعم التكامل مع إطار Nuxt.js لتطبيقات محسنة.",
          "يُوفر أداء عالي وتجربة تطوير سلسة."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Vue.js Docs", url: "https://vuejs.org/guide/introduction.html" },
            { name: "Vue Mastery", url: "https://www.vuemastery.com/" }
          ],
          paid: [
            { name: "Udemy Vue.js Course", url: "https://www.udemy.com/topic/vue-js/" },
            { name: "Frontend Masters Vue", url: "https://frontendmasters.com/courses/vue-3/" }
          ]
        }
      },
      {
        title: "Nuxt.js",
        icon: <Server className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Understand Nuxt.js structure",
          "Create static and dynamic pages",
          "Use server-side rendering",
          "Implement Vue Router",
          "Optimize SEO",
          "Integrate with APIs",
          "Deploy Nuxt.js apps"
        ],
        description: [
          "Nuxt.js هو إطار عمل مبني على Vue.js لتطوير تطبيقات ويب محسنة.",
          "يوفر ميزات مثل Server-Side Rendering (SSR) وStatic Site Generation (SSG).",
          "يُستخدم لبناء مواقع ويب محسنة لمحركات البحث (SEO).",
          "يدعم إنشاء صفحات ديناميكية وثابتة باستخدام نظام الملفات.",
          "يُحسن أداء الموقع من خلال تحسين تحميل الموارد.",
          "تُستخدم في تطوير تطبيقات مثل المدونات والمتاجر الإلكترونية.",
          "يوفر نظام توجيه (routing) مدمج مع Vue Router لتجربة سلسة.",
          "تُسهل عملية النشر على منصات مثل Vercel وNetlify.",
          "يُعتبر خيارًا شائعًا لتطوير تطبيقات Vue.js متقدمة.",
          "يدعم التكامل مع مكتبات إدارة الحالة مثل Pinia.",
          "يُوفر هيكلية منظمة لإدارة المشاريع الكبيرة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Nuxt.js Docs", url: "https://nuxt.com/docs" },
            { name: "Vue Mastery", url: "https://www.vuemastery.com/" }
          ],
          paid: [
            { name: "Udemy Nuxt.js Course", url: "https://www.udemy.com/topic/nuxtjs/" },
            { name: "Frontend Masters Nuxt", url: "https://frontendmasters.com/courses/nuxt/" }
          ]
        }
      }
    ]
  },
  {
    title: "TypeScript",
    icon: <Type className="w-6 h-6 text-blue-600" />,
    children: [
      {
        title: "TypeScript Basics",
        icon: <Type className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand types and interfaces",
          "Use type annotations",
          "Work with union types",
          "Implement generics",
          "Handle type inference",
          "Configure tsconfig.json",
          "Debug TypeScript errors"
        ],
        description: [
          "TypeScript هي إضافة لـ JavaScript تضيف أنواعًا ثابتة لتحسين جودة الكود.",
          "تُساعد في اكتشاف الأخطاء أثناء التطوير قبل تشغيل التطبيق.",
          "تدعم الـ types والـ interfaces لتحديد هيكلية البيانات بدقة.",
          "تُتيح generics لإنشاء مكونات قابلة لإعادة الاستخدام بمرونة.",
          "تُستخدم في المشاريع الكبيرة لتحسين صيانة الكود.",
          "توفر type inference لتقليل الحاجة إلى تحديد الأنواع يدويًا.",
          "تُعتبر ضرورية لتطوير تطبيقات مع أطر عمل مثل React وAngular.",
          "تُمكن من تكوين المشروع ب-side rendering",
          "تُحسن إنتاجية المطورين من خلال أدوات تصحيح الأخطاء.",
          "تُقلل الأخطاء في التطبيقات الكبيرة بفضل الأنواع الثابتة.",
          "تدعم التوافق مع مكتبات JavaScript القائمة."
        ],
        resources: {
          arabicFree: [
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "TypeScript Docs", url: "https://www.typescriptlang.org/docs/" },
            { name: "Matt Pocock", url: "https://www.youtube.com/@mattpocockuk" }
          ],
          paid: [
            { name: "Udemy TypeScript Course", url: "https://www.udemy.com/topic/typescript/" },
            { name: "Pluralsight TypeScript", url: "https://www.pluralsight.com/paths/typescript" }
          ]
        }
      },
      {
        title: "TypeScript with Frameworks",
        icon: <Blocks className="w-5 h-5 text-cyan-300" />,
        learningOutcomes: [
          "Type React/Angular/Vue components",
          "Use TypeScript with hooks",
          "Define prop types",
          "Handle event types",
          "Work with state management",
          "Optimize type safety",
          "Integrate with APIs"
        ],
        description: [
          "TypeScript يُحسن تطوير تطبيقات الأطر مثل React، Angular، وVue.js.",
          "يُتيح تحديد أنواع props وstate لتقليل الأخطاء في المكونات.",
          "يدعم التعامل مع hooks (في React) أو services (في Angular) بأنواع دقيقة.",
          "يُستخدم لتحديد أنواع الأحداث مثل النقر أو إدخال البيانات.",
          "تُسهل إدارة الحالة العامة مع مكتبات مثل Redux، NgRx، أو Pinia.",
          "تُحسن أداء التطبيق من خلال تحسين أمان الأنواع.",
          "تُستخدم في المشاريع الكبيرة لضمان كود قوي وسهل الصيانة.",
          "تدعم التكامل مع APIs ومكتبات إدارة الحالة.",
          "تُقلل الأخطاء الشائعة في تطبيقات الأطر المعقدة.",
          "تُعتبر مطلوبة في العديد من الوظائف التقنية المتقدمة.",
          "توفر تجربة تطوير أكثر سلاسة مع أدوات مثل VS Code."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Jack Herrington", url: "https://www.youtube.com/@jherr" },
            { name: "TypeScript Docs", url: "https://www.typescriptlang.org/docs/handbook/react.html" }
          ],
          paid: [
            { name: "Udemy TypeScript with Frameworks", url: "https://www.udemy.com/topic/typescript/" },
            { name: "Frontend Masters TypeScript", url: "https://frontendmasters.com/courses/typescript-v3/" }
          ]
        }
      }
    ]
  },
  {
    title: "State Management",
    icon: <Workflow className="w-6 h-6 text-purple-400" />,
    children: [
      {
        title: "State Management Tools",
        icon: <Workflow className="w-5 h-5 text-purple-300" />,
        learningOutcomes: [
          "Understand Redux Toolkit for React",
          "Use Zustand for lightweight state",
          "Implement NgRx for Angular",
          "Work with Pinia for Vue.js",
          "Manage global state",
          "Handle asynchronous actions",
          "Integrate with frameworks"
        ],
        description: [
          "State Management يُستخدم لإدارة بيانات التطبيق بشكل مركزي.",
          "Redux Toolkit يوفر أدوات لتبسيط إدارة الحالة في تطبيقات React.",
          "Zustand هو بديل خفيف لإدارة الحالة في React بسهولة وأداء عالٍ.",
          "NgRx يوفر إدارة حالة قوية لتطبيقات Angular المعقدة.",
          "Pinia هو مكتبة حديثة لإدارة الحالة في تطبيقات Vue.js.",
          "تُتيح إدارة الحالة العامة بين مكونات التطبيق المختلفة.",
          "تدعم التعامل مع العمليات غير المتزامنة مثل جلب البيانات.",
          "تُحسن أداء التطبيق من خلال تحسين تحديثات الحالة.",
          "تُعتبر ضرورية لتطبيقات الأطر المعقدة مثل لوحات التحكم.",
          "تُسهل التكامل مع أطر العمل مثل React، Angular، وVue.js.",
          "توفر هيكلية منظمة لتتبع التغييرات في الحالة."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Redux Docs", url: "https://redux.js.org/" },
            { name: "NgRx Docs", url: "https://ngrx.io/docs" },
            { name: "Pinia Docs", url: "https://pinia.vuejs.org/" }
          ],
          paid: [
            { name: "Udemy State Management Course", url: "https://www.udemy.com/topic/redux/" },
            { name: "Frontend Masters Redux", url: "https://frontendmasters.com/courses/redux-fundamentals/" }
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
        title: "Unit Testing",
        icon: <TestTube className="w-5 h-5 text-red-300" />,
        learningOutcomes: [
          "Write unit tests with Jest",
          "Test React/Angular/Vue components",
          "Mock functions and APIs",
          "Use testing libraries",
          "Handle edge cases",
          "Measure test coverage",
          "Integrate with CI/CD"
        ],
        description: [
          "Unit Testing يضمن جودة الكود من خلال اختبار الوحدات الصغيرة.",
          "Jest هي أداة شائعة لكتابة اختبارات سريعة وموثوقة لجميع الأطر.",
          "تُستخدم لاختبار مكونات React، Angular، أو Vue.js لضمان عملها.",
          "تدعم الـ mocking لمحاكاة الوظائف وAPIs الخارجية.",
          "تُتيح التعامل مع الحالات الحدية لتحسين موثوقية التطبيق.",
          "تُقيس تغطية الاختبار لتحديد مدى شمولية الاختبارات.",
          "تُستخدم في المشاريع الكبيرة لتقليل الأخطاء قبل النشر.",
          "تدعم التكامل مع أنظمة CI/CD لأتمتة عمليات الاختبار.",
          "تُحسن صيانة الكود من خلال الكشف المبكر عن المشكلات.",
          "توفر أدوات مثل React Testing Library وAngular Testing لتسهيل الاختبار.",
          "تُعتبر ضرورية لتطوير تطبيقات ويب قوية ومستقرة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" }
          ],
          englishFree: [
            { name: "Jest Docs", url: "https://jestjs.io/docs/getting-started" },
            { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified" }
          ],
          paid: [
            { name: "Udemy Testing Course", url: "https://www.udemy.com/topic/software-testing/" },
            { name: "Pluralsight Testing", url: "https://www.pluralsight.com/courses/react-testing-library" }
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
          "Deploy to Vercel",
          "Deploy to Netlify",
          "Configure CI/CD pipelines",
          "Optimize build times",
          "Handle environment variables",
          "Monitor app performance"
        ],
        description: [
          "CI/CD يُحسن عملية نشر التطبيقات من خلال الأتمتة.",
          "GitHub Actions يُتيح إعداد خطوط أنابيب للاختبار والنشر.",
          "Vercel وNetlify هما منصتان شائعتان لنشر تطبيقات React، Angular، وVue.js.",
          "تُستخدم لتقليل الأخطاء أثناء النشر وضمان الاستقرار.",
          "تُحسن سرعة تسليم الميزات الجديدة للمستخدمين.",
          "تدعم إدارة متغيرات البيئة لتأمين التطبيقات.",
          "تُتيح مراقبة أداء التطبيق بعد النشر لتحسين التجربة.",
          "تُستخدم في المشاريع الكبيرة لضمان عمليات نشر موثوقة.",
          "تُسهل التكامل مع أدوات مثل Docker وKubernetes.",
          "تُعتبر ضرورية لتطوير تطبيقات الإنتاج الحديثة.",
          "توفر أدوات لتحسين أوقات البناء وتقليل الموارد."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Vercel Docs", url: "https://vercel.com/docs" },
            { name: "Netlify Docs", url: "https://docs.netlify.com/" }
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
        title: "Material-UI",
        icon: <Box className="w-5 h-5 text-teal-300" />,
        learningOutcomes: [
          "Use pre-built components",
          "Customize themes",
          "Implement responsive design",
          "Integrate with React",
          "Optimize component performance",
          "Handle accessibility",
          "Build consistent UIs"
        ],
        description: [
          "Material-UI هي مكتبة مكونات React تتبع إرشادات Material Design.",
          "توفر مكونات جاهزة مثل الأزرار، النماذج، ولوحات التنقل.",
          "تدعم التخصيص الشامل للثيمات لتتناسب مع هوية العلامة التجارية.",
          "تُستخدم لبناء واجهات مستخدم متجاوبة ومتسقة.",
          "تُحسن إمكانية الوصول (accessibility) لتطبيقات الويب.",
          "تُسهل التكامل مع تطبيقات React بفضل واجهتها البسيطة.",
          "تُستخدم في تطبيقات مثل لوحات التحكم وتطبيقات الأعمال.",
          "تدعم تحسين الأداء من خلال الـ lazy loading للمكونات.",
          "توفر أدوات لتخصيص الأنماط باستخدام CSS-in-JS.",
          "تُقلل وقت التطوير بفضل مكوناتها الجاهزة.",
          "تُعتبر خيارًا شائعًا لتطوير واجهات احترافية."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Material-UI Docs", url: "https://mui.com/material-ui/" },
            { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" }
          ],
          paid: [
            { name: "Udemy Material-UI Course", url: "https://www.udemy.com/topic/material-ui/" },
            { name: "Frontend Masters React", url: "https://frontendmasters.com/courses/react/" }
          ]
        }
      },
      {
        title: "Framer Motion",
        icon: <Palette className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "Create smooth animations",
          "Implement transitions",
          "Use motion components",
          "Handle gesture animations",
          "Build complex animation sequences",
          "Optimize animation performance",
          "Integrate with React"
        ],
        description: [
          "Framer Motion هي مكتبة لإنشاء رسوم متحركة سلسة في تطبيقات React.",
          "توفر مكونات Motion لتحريك العناصر بسهولة وكفاءة.",
          "تدعم التحولات (transitions) لإنشاء حركات بصرية جذابة.",
          "تُتيح التعامل مع إيماءات المستخدم مثل السحب والنقر.",
          "تُستخدم لبناء تسلسلات رسوم متحركة معقدة لتحسين تجربة المستخدم.",
          "تُحسن أداء الرسوم المتحركة من خلال تحسين عمليات الـ rendering.",
          "تُعتبر خيارًا شائعًا لإضافة حركة ديناميكية في واجهات React.",
          "تدعم التكامل السلس مع مكونات React وJSX.",
          "تُسهل إنشاء واجهات تفاعلية مثل القوائم المنبثقة والانتقالات.",
          "توفر واجهة برمجية بسيطة لتخصيص الرسوم المتحركة.",
          "تُستخدم في تطبيقات الويب الحديثة لإضفاء طابع احترافي."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Framer Motion Docs", url: "https://www.framer.com/motion/" },
            { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified" }
          ],
          paid: [
            { name: "Udemy Framer Motion Course", url: "https://www.udemy.com/topic/framer-motion/" },
            { name: "Frontend Masters Animations", url: "https://frontendmasters.com/courses/advanced-animations-transitions/" }
          ]
        }
      },
      {
        title: "Formik",
        icon: <FormInput className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Build complex forms",
          "Handle form validation",
          "Manage form state",
          "Integrate with Yup for schema validation",
          "Handle form submissions",
          "Optimize form performance",
          "Integrate with React"
        ],
        description: [
          "Formik هي مكتبة لإدارة النماذج في تطبيقات React بسهولة وكفاءة.",
          "تُستخدم لبناء نماذج معقدة مع إدارة حالة الإدخال والتحقق.",
          "تدعم التحقق من البيانات باستخدام مكتبة Yup لتحديد المخططات.",
          "تُتيح التعامل مع إرسال النماذج ومعالجة الأخطاء بسهولة.",
          "تُحسن تجربة المستخدم من خلال تقديم تعليقات فورية على الإدخال.",
          "تُعتبر خيارًا شائعًا لتطبيقات React التي تحتوي على نماذج كبيرة.",
          "تدعم التكامل السلس مع مكونات React ومكتبات أخرى.",
          "تُسهل إدارة حالة النماذج بدون كتابة كود معقد.",
          "توفر أدوات لتحسين أداء النماذج في التطبيقات الكبيرة.",
          "تُستخدم في تطبيقات مثل التسجيل، تسجيل الدخول، ونماذج الدفع.",
          "تُقلل الأخطاء الشائعة في إدارة النماذج."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Formik Docs", url: "https://formik.org/docs/overview" },
            { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified" }
          ],
          paid: [
            { name: "Udemy Formik Course", url: "https://www.udemy.com/topic/react/" },
            { name: "Frontend Masters React Forms", url: "https://frontendmasters.com/courses/react/" }
          ]
        }
      },
      {
        title: "Chakra UI",
        icon: <Box className="w-5 h-5 text-blue-300" />,
        learningOutcomes: [
          "Use composable components",
          "Customize themes",
          "Implement accessible UIs",
          "Integrate with React",
          "Handle responsive design",
          "Optimize component rendering",
          "Build consistent UIs"
        ],
        description: [
          "Chakra UI هي مكتبة مكونات React تركز على البساطة وإمكانية الوصول.",
          "توفر مكونات قابلة للتكوين مثل الأزرار، النماذج، والتخطيطات.",
          "تدعم التخصيص بسهولة باستخدام نظام الثيمات المرن.",
          "تُستخدم لبناء واجهات مستخدم متجاوبة وسهلة الاستخدام.",
          "تُحسن إمكانية الوصول (accessibility) بما يتماشى مع معايير WCAG.",
          "تُسهل التكامل مع تطبيقات React بفضل تصميمها المعياري.",
          "تُستخدم في تطبيقات مثل المتاجر الإلكترونية ولوحات التحكم.",
          "تدعم تحسين الأداء من خلال التحميل الفعال للمكونات.",
          "توفر أدوات لتخصيص الأنماط باستخدام CSS-in-JS.",
          "تُقلل وقت التطوير بفضل مكوناتها الجاهزة.",
          "تُعتبر خيارًا حديثًا لتطوير واجهات سهلة التخصيص."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Chakra UI Docs", url: "https://chakra-ui.com/docs" },
            { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified" }
          ],
          paid: [
            { name: "Udemy Chakra UI Course", url: "https://www.udemy.com/topic/react/" },
            { name: "Frontend Masters React", url: "https://frontendmasters.com/courses/react/" }
          ]
        }
      },
      {
        title: "Styled-Components",
        icon: <Box className="w-5 h-5 text-pink-300" />,
        learningOutcomes: [
          "Write CSS-in-JS",
          "Create styled components",
          "Manage themes",
          "Handle dynamic styling",
          "Optimize rendering",
          "Integrate with React",
          "Build reusable styles"
        ],
        description: [
          "Styled-Components هي مكتبة لكتابة CSS داخل JavaScript في تطبيقات React.",
          "تُتيح إنشاء مكونات منسقة باستخدام أنماط CSS مباشرة في الكود.",
          "تدعم إدارة الثيمات لتخصيص الأنماط عبر التطبيق بسهولة.",
          "تُستخدم لتطبيق أنماط ديناميكية بناءً على الحالة أو الـ props.",
          "تُحسن أداء التطبيق من خلال تحميل الأنماط حسب الحاجة.",
          "تُسهل التكامل مع تطبيقات React بفضل واجهتها البسيطة.",
          "تُستخدم في تطبيقات مثل المتاجر الإلكترونية وتطبيقات الوسائط.",
          "توفر أدوات لإنشاء أنماط قابلة لإعادة الاستخدام.",
          "تُقلل تعقيد إدارة الأنماط في المشاريع الكبيرة.",
          "تُعتبر خيارًا شائعًا لتطوير واجهات ديناميكية.",
          "تدعم تحسين تجربة التطوير باستخدام أدوات مثل VS Code."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Styled-Components Docs", url: "https://styled-components.com/docs" },
            { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" }
          ],
          paid: [
            { name: "Udemy Styled-Components Course", url: "https://www.udemy.com/topic/react/" },
            { name: "Frontend Masters CSS-in-JS", url: "https://frontendmasters.com/courses/css-in-js/" }
          ]
        }
      },
      {
        title: "Axios",
        icon: <Box className="w-5 h-5 text-green-300" />,
        learningOutcomes: [
          "Make HTTP requests",
          "Handle API responses",
          "Manage request configurations",
          "Implement interceptors",
          "Handle errors",
          "Integrate with React/Angular/Vue",
          "Optimize API calls"
        ],
        description: [
          "Axios هي مكتبة لإجراء طلبات HTTP في تطبيقات الويب بسهولة.",
          "تُستخدم لجلب البيانات من APIs وإرسال البيانات إلى الخوادم.",
          "تدعم تكوين الطلبات مثل الرؤوس (headers) والمعاملات (params).",
          "تُتيح استخدام الـ interceptors لتعديل الطلبات أو الردود.",
          "تُسهل معالجة الأخطاء لتحسين تجربة المستخدم.",
          "تُستخدم في تطبيقات مثل لوحات التحكم والمتاجر الإلكترونية.",
          "تدعم التكامل مع أطر العمل مثل React، Angular، وVue.js.",
          "تُحسن أداء التطبيق من خلال تحسين إدارة الطلبات.",
          "توفر واجهة برمجية بسيطة وسهلة الاستخدام.",
          "تُقلل تعقيد التعامل مع APIs في التطبيقات الكبيرة.",
          "تُعتبر بديلاً شائعًا لمكتبة Fetch المدمجة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" }
          ],
          englishFree: [
            { name: "Axios Docs", url: "https://axios-http.com/docs/intro" },
            { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified" }
          ],
          paid: [
            { name: "Udemy Axios Course", url: "https://www.udemy.com/topic/javascript/" },
            { name: "Frontend Masters APIs", url: "https://frontendmasters.com/courses/api-design-nodejs-v3/" }
          ]
        }
      },
      {
        title: "React Query",
        icon: <Box className="w-5 h-5 text-yellow-300" />,
        learningOutcomes: [
          "Manage data fetching",
          "Handle caching",
          "Implement mutations",
          "Use query invalidation",
          "Optimize API calls",
          "Integrate with React",
          "Handle loading states"
        ],
        description: [
          "React Query هي مكتبة لإدارة البيانات في تطبيقات React بطريقة فعالة وسهلة.",
          "تُستخدم لجلب البيانات من APIs وإدارة التخزين المؤقت (caching) تلقائيًا.",
          "تدعم التحديثات (mutations) لتعديل البيانات على الخادم بسهولة.",
          "تُتيح إبطال الاستعلامات (query invalidation) لتحديث البيانات ديناميكيًا.",
          "تُحسن أداء التطبيق من خلال تقليل طلبات API غير الضرورية.",
          "تُسهل التكامل مع تطبيقات React بفضل واجهتها البسيطة.",
          "تُستخدم في تطبيقات مثل لوحات التحكم والمتاجر الإلكترونية.",
          "توفر أدوات لإدارة حالات التحميل والأخطاء بشكل سلس.",
          "تُقلل تعقيد إدارة البيانات في التطبيقات الكبيرة.",
          "تُعتبر بديلاً قويًا لإدارة الحالة مقارنة بـ Redux في بعض الحالات.",
          "تدعم التكامل مع مكتبات أخرى مثل Axios أو Fetch."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "React Query Docs", url: "https://tanstack.com/query/latest/docs/react/overview" },
            { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified" }
          ],
          paid: [
            { name: "Udemy React Query Course", url: "https://www.udemy.com/topic/react/" },
            { name: "Frontend Masters React Query", url: "https://frontendmasters.com/courses/react-query/" }
          ]
        }
      }
    ]
  }
]
// إضافة أنماط CSS لإخفاء شريط التمرير وتحسين الأنيميشن
const styles = `
  /* إخفاء شريط التمرير مع الإبقاء على إمكانية التمرير */
  ::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style  /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  /* تأثير glow للبطاقات */
  .glow-effect {
    position: relative;
    transition: all 0.3s ease;
  }
  .glow-effect:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  }
  .glow-effect::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 12px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }
  .glow-effect:hover::before {
    opacity: 0.7;
  }
`;

export default function FrontEnd() {
  const bgColor = useContext(BgContext);
  const [completedSkills, setCompletedSkills] = useState({});
  const [selectedSkill, setSelectedSkill] = useState(null);

  // استرجاع حالة المهارات من localStorage عند تحميل المكون
  useEffect(() => {
    const savedSkills = localStorage.getItem('completedSkills');
    if (savedSkills) {
      setCompletedSkills(JSON.parse(savedSkills));
    }
  }, []);

  const toggleSkillCompletion = (skillTitle) => {
    setCompletedSkills((prev) => {
      const newSkills = {
        ...prev,
        [skillTitle]: !prev[skillTitle]
      };
      // تخزين الحالة الجديدة في localStorage
      localStorage.setItem('completedSkills', JSON.stringify(newSkills));
      return newSkills;
    });
  };

  const openMenu = (skill) => {
    setSelectedSkill(skill);
  };

  const closeMenu = () => {
    setSelectedSkill(null);
  };

  // تحديث أنيميشن القائمة لتظهر من اليمين
  const menuVariants = {
    hidden: { opacity: 0, x: "100vw" }, // تبدأ من خارج الشاشة على اليمين
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, x: "100vw", transition: { duration: 0.3 } }
  };

  return (
    <>
      <style>{styles}</style>
      <div className={`p-8 mx-auto h-0 pt-20 ${bgColor.color} min-h-screen flex flex-col items-center w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-x-hidden`}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-cyan-400"
        >
          Front-End Roadmap 🚀
        </motion.h1>
        <div className="w-full max-w-7xl space-y-16">
          {sections.map((section, sectionIdx) => (
            <motion.div
              key={sectionIdx}
              initial={{ opacity: 0, y: -100 }}
              viewport={{ once: true, amount: .6 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: .2 }}
              className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700"
            >
              <div className="flex items-center gap-4 mb-8">
                {section.icon}
                <h2 className="text-3xl font-bold">{section.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.children.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, scale: 0.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: skillIdx * 0.4 }}
                    className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-600 cursor-pointer glow-effect"
                    onClick={() => openMenu(skill)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {skill.icon}
                        <h3 className="text-xl font-semibold text-amber-300">{skill.title}</h3>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSkillCompletion(skill.title);
                        }}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
                          completedSkills[skill.title]
                            ? "bg-green-500 text-white"
                            : "bg-gray-600 text-gray-200 hover:bg-gray-500"
                        }`}
                      >
                        {completedSkills[skill.title] ? "مكتمل" : "غير مكتمل"}
                      </button>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">مخرجات التعلم</h4>
                        <ul className="list-disc list-inside text-sm text-gray-200">
                          {skill.learningOutcomes.map((outcome, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                            >
                              {outcome}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* القائمة المنبثقة */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-5 right-0 h-[90vh] w-[40vw] max-w-[90vw] bg-gray-900/90 backdrop-blur-md rounded-l-2xl p-8 shadow-2xl border border-gray-700 z-50 overflow-y-auto no-scrollbar"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-amber-300">{selectedSkill.title}</h3>
                <motion.button whileHover={{scale: 1.5 , rotate: 180}} whileTap={{scale: .7 , rotate: 0}} transition={{duration: .2}} 
                  onClick={closeMenu} className="text-gray-400 hover:text-white cursor-pointer"
                  >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              <div className="space-y-6" style={{direction: "rtl"}}>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">عن {selectedSkill.title} </h4>
                  <ul className="list-disc list-inside text-sm text-gray-200"> 
                    {selectedSkill.description.map((desc, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        {desc}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">مصادر عربية مجانية</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.resources.arabicFree.map((resource, idx) => (
                      <motion.a
                        key={idx}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-1 rounded-lg text-sm text-white hover:from-cyan-500 hover:to-blue-500 transition-colors duration-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        {resource.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">مصادر أجنبية مجانية</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.resources.englishFree.map((resource, idx) => (
                      <motion.a
                        key={idx}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-1 rounded-lg text-sm text-white hover:from-cyan-500 hover:to-blue-500 transition-colors duration-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        {resource.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">مصادر مدفوعة</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.resources.paid.map((resource, idx) => (
                      <motion.a
                        key={idx}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-1 rounded-lg text-sm text-white hover:from-cyan-500 hover:to-blue-500 transition-colors duration-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        {resource.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}