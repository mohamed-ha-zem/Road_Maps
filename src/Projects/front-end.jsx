import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  FileJson,
  LayoutTemplate,
  FileTerminal,
  Braces,
  Globe,
  Atom,
  Layers,
  Blocks,
  Puzzle,
  Type,
  Server,
  Workflow,
  TestTube,
  Rocket,
  Box,
  FormInput,
  Palette,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Wind,
  GitBranch,
  Paintbrush,
  Eye,
  EyeOff,
} from "lucide-react";
import { useContext, useState } from "react";
import { BgContext } from "../Context/bgContext";

// بيانات الأسئلة لكل مهارة
const quizData = [
  {
    title: "HTML",
    icon: <LayoutTemplate className="w-5 h-5 text-orange-400" />,
    questions: [
      { question: "ما هو الغرض من وسم <semantic> في HTML؟", answer: "يُستخدم لإضافة معنى دلالي للمحتوى، مما يحسن إمكانية الوصول وSEO." },
      { question: "كيف يمكن إضافة صورة في HTML؟", answer: "باستخدام وسم <img> مع خاصية src لتحديد مسار الصورة." },
      { question: "ما هي خاصية alt في وسم <img>؟", answer: "توفر نصًا بديلًا يظهر إذا لم تُحمل الصورة أو لقارئات الشاشة." },
      { question: "ما الفرق بين <div> و<section>؟", answer: "<div> حاوية عامة، بينما <section> لها دلالة دلالية لتجميع المحتوى." },
      { question: "كيف يمكن ربط ملف CSS بـ HTML؟", answer: "باستخدام وسم <link> داخل <head> مع خاصية href." },
      { question: "ما هو وسم <meta> واستخداماته؟", answer: "يُستخدم لتحديد بيانات وصفية مثل charset أو viewport." },
      { question: "كيف يتم إنشاء نموذج في HTML؟", answer: "باستخدام وسم <form> مع عناصر مثل <input> و<button>." },
      { question: "ما هو HTML5 Canvas؟", answer: "API لرسم الرسومات ثنائية الأبعاد باستخدام JavaScript." },
      { question: "ما هي خاصية data-*؟", answer: "تُستخدم لتخزين بيانات مخصصة في العناصر." },
      { question: "كيف يمكن تحسين إمكانية الوصول في HTML؟", answer: "باستخدام ARIA roles ووسوم دلالية مثل <nav> و<main>." },
      { question: "ما هو وسم <article>؟", answer: "يُستخدم لتحديد محتوى مستقل يمكن توزيعه بشكل منفصل." },
      { question: "كيف يتم إضافة فيديو في HTML؟", answer: "باستخدام وسم <video> مع خاصية src أو مصادر داخلية." },
      { question: "ما هو وسم <header>؟", answer: "يُمثل رأس الصفحة أو القسم، يحتوي على عناصر تمهيدية." },
      { question: "ما هي خاصية defer في وسم <script>؟", answer: "تؤخر تحميل الجافاسكربت حتى يتم تحميل DOM." },
      { question: "ما الفرق بين inline وblock elements؟", answer: "inline تُعرض في نفس السطر، block تأخذ عرضًا كاملاً." },
      { question: "كيف يتم إنشاء جدول في HTML؟", answer: "باستخدام وسم <table> مع <tr>، <th>، و<td>." },
      { question: "ما هو وسم <footer>؟", answer: "يُمثل تذييل الصفحة أو القسم، يحتوي على معلومات إضافية." },
      { question: "ما هي خاصية contenteditable؟", answer: "تسمح بتحرير محتوى العنصر مباشرة من المتصفح." },
      { question: "كيف يتم ربط صفحة HTML بأخرى؟", answer: "باستخدام وسم <a> مع خاصية href." },
      { question: "ما هو وسم <main>؟", answer: "يُمثل المحتوى الرئيسي للصفحة، يُستخدم مرة واحدة." }
    ]
  },
  {
    title: "CSS",
    icon: <FileJson className="w-5 h-5 text-blue-400" />,
    questions: [
      { question: "ما هو Flexbox؟", answer: "نظام تخطيط في CSS لترتيب العناصر في صف أو عمود بمرونة." },
      { question: "كيف يعمل CSS Grid؟", answer: "يوفر تخطيطًا ثنائي الأبعاد باستخدام الصفوف والأعمدة." },
      { question: "ما هي متغيرات CSS؟", answer: "تُستخدم لتخزين قيم مثل الألوان باستخدام --variable-name." },
      { question: "ما الفرق بين position: absolute وrelative؟", answer: "absolute يعتمد على أقرب عنصر موقّع، بينما relative على موقعه الأصلي." },
      { question: "كيف يتم إنشاء انتقال (transition)؟", answer: "باستخدام خاصية transition مع خصائص مثل duration وproperty." },
      { question: "ما هو box-sizing؟", answer: "يحدد كيفية حساب أبعاد العنصر، مثل border-box." },
      { question: "كيف يتم تحقيق التصميم المتجاوب؟", answer: "باستخدام وحدات نسبية (%, vw, rem) وmedia queries." },
      { question: "ما هي pseudo-classes؟", answer: "مثل :hover و:first-child، تُستخدم لتحديد حالات العناصر." },
      { question: "كيف يتم تحسين أداء CSS؟", answer: "بتقليل التعقيد، استخدام selectors بسيطة، وتقليل الـ reflows." },
      { question: "ما هو z-index؟", answer: "يحدد ترتيب تكديس العناصر في المحور Z." },
      { question: "كيف تعمل الرسوم المتحركة في CSS؟", answer: "باستخدام @keyframes وخاصية animation." },
      { question: "ما الفرق بين margin وpadding؟", answer: "margin هو الهامش الخارجي، وpadding هو الهامش الداخلي." },
      { question: "ما هي خاصية display؟", answer: "تُحدد نوع العرض مثل block، inline، أو flex." },
      { question: "كيف تُستخدم media queries؟", answer: "لتحديد أنماط بناءً على شروط مثل عرض الشاشة." },
      { question: "ما هي pseudo-elements؟", answer: "مثل ::before و::after، تُستخدم لتنسيق أجزاء معينة." },
      { question: "ما هو CSS specificity؟", answer: "نظام الأولوية لتحديد أي قاعدة تُطبق على العنصر." },
      { question: "كيف تُستخدم وحدة rem؟", answer: "وحدة نسبية تعتمد على حجم خط الجذر (root)." },
      { question: "ما هو CSS reset؟", answer: "إزالة الأنماط الافتراضية للمتصفح لضمان التوافق." },
      { question: "كيف تُنشئ ظلال في CSS؟", answer: "باستخدام خاصية box-shadow أو text-shadow." },
      { question: "ما هي خاصية clip-path؟", answer: "تُستخدم لقص العناصر إلى أشكال مخصصة." },
      { question: "كيف تُستخدم transform؟", answer: "لتحويل العناصر مثل التدوير أو التحجيم." },
      { question: "ما هي خاصية aspect-ratio؟", answer: "تُحدد نسبة العرض إلى الارتفاع للعنصر." },
      { question: "كيف تُنشئ خلفية متدرجة؟", answer: "باستخدام linear-gradient أو radial-gradient." },
      { question: "ما هي خاصية pointer-events؟", answer: "تُحدد ما إذا كان العنصر يتفاعل مع أحداث المؤشر." },
      { question: "كيف تُستخدم وحدة vw؟", answer: "وحدة نسبية تعتمد على عرض نافذة العرض." },
      { question: "ما هي خاصية overflow؟", answer: "تُحدد كيفية التعامل مع المحتوى الزائد." },
      { question: "كيف تُنشئ تأثير parallax؟", answer: "باستخدام خلفيات ثابتة مع التمرير." },
      { question: "ما هي خاصية filter؟", answer: "تُطبق تأثيرات بصرية مثل التمويه أو تغيير الألوان." },
      { question: "كيف تُستخدم @supports؟", answer: "للتحقق من دعم المتصفح لخاصية معينة." },
      { question: "ما هي خاصية gap في Flexbox؟", answer: "تُحدد المسافة بين العناصر في التخطيط." }
    ]
  },
  {
    title: "JavaScript",
    icon: <FileTerminal className="w-5 h-5 text-yellow-300" />,
    questions: [
      { question: "ما هو الفرق بين let وconst؟", answer: "let يسمح بالتغيير، بينما const لا يسمح بإعادة التعيين." },
      { question: "كيف تعمل البرمجة غير المتزامنة؟", answer: "باستخدام Promises أو async/await للتعامل مع العمليات المتأخرة." },
      { question: "ما هو DOM؟ " ,answer: "واجهة برمجية للتفاعل مع عناصر صفحة الويب." },
      { question: "ما هي closure في JavaScript؟", answer: "دالة تحتفظ بإمكانية الوصول إلى متغيرات نطاقها الخارجي." },
      { question: "كيف يعمل event delegation؟", answer: "إضافة مستمع أحداث إلى عنصر أب لمعالجة أحداث الأبناء." },
      { question: "ما هو hoisting؟", answer: "رفع إعلانات المتغيرات والدوال إلى أعلى النطاق." },
      { question: "ما هي arrow functions؟", answer: "دوال موجزة بدون this خاص بها، ترث من النطاق الأب." },
      { question: "كيف يتم التعامل مع المصفوفات؟", answer: "باستخدام دوال مثل map، filter، وreduce." },
      { question: "ما هو JSON؟", answer: "تنسيق لتبادل البيانات، يُستخدم لتخزين ونقل الكائنات." },
      { question: "ما هي الـ prototype؟", answer: "آلية لإضافة خصائص ودوال إلى الكائنات." },
      { question: "كيف تعمل الـ spread operator؟", answer: "تُستخدم لنشر عناصر المصفوفات أو الكائنات." },
      { question: "ما الفرق بين null وundefined؟", answer: "null قيمة فارغة مُعينة، undefined غير مُعرف." },
      { question: "كيف يتم معالجة الأخطاء؟", answer: "باستخدام try/catch للتعامل مع الاستثناءات." },
      { question: "ما هي event loop؟", answer: "آلية لإدارة العمليات غير المتزامنة في JavaScript." },
      { question: "كيف تُستخدم Promises؟", answer: "للتعامل مع العمليات غير المتزامنة باستخدام .then و.catch." },
      { question: "ما هي الـ IIFE؟", answer: "دالة تُنفذ فور تعريفها (Immediately Invoked Function Expression)." },
      { question: "كيف تُستخدم destructuring؟", answer: "لاستخراج قيم من المصفوفات أو الكائنات بسهولة." },
      { question: "ما هي Map وSet؟", answer: "هياكل بيانات لتخزين القيم، Map للأزواج، Set للقيم الفريدة." },
      { question: "كيف يتم إنشاء كائن في JavaScript؟", answer: "باستخدام {} أو new Object() أو class." },
      { question: "ما هي الـ callback؟", answer: "دالة تُمرر كمعامل وتُنفذ لاحقًا." },
      { question: "كيف تُستخدم forEach؟", answer: "للتكرار على عناصر المصفوفة وتنفيذ دالة لكل عنصر." },
      { question: "ما هي الـ module؟", answer: "ملفات تحتوي على كود قابل لإعادة الاستخدام باستخدام import/export." },
      { question: "كيف يعمل this في JavaScript؟", answer: "يشير إلى الكائن الحالي بناءً على سياق التنفيذ." },
      { question: "ما هي الـ strict mode؟", answer: "وضع يفرض قواعد أكثر صرامة لتجنب الأخطاء." },
      { question: "كيف تُستخدم Array.splice؟", answer: "لإضافة/إزالة عناصر من مصفوفة مع تعديلها." },
      { question: "ما هي الـ rest parameter؟", answer: "تجميع الوسائط الإضافية في مصفوفة باستخدام ...param." },
      { question: "كيف تُستخدم Array.find؟", answer: "لإيجاد أول عنصر يطابق شرطًا معينًا." },
      { question: "ما هي الـ WeakMap؟", answer: "Map يسمح بجمع القمامة للمفاتيح من نوع الكائنات." },
      { question: "كيف تُستخدم Array.filter؟", answer: "لإنشاء مصفوفة جديدة تحتوي على العناصر التي تطابق شرطًا." },
      { question: "ما هي الـ Symbol؟", answer: "نوع بيانات فريد يُستخدم كمفتاح للكائنات." },
      { question: "كيف تُستخدم Array.reduce؟", answer: "لتحويل المصفوفة إلى قيمة واحدة باستخدام دالة تراكمية." },
      { question: "ما هي الـ generator؟", answer: "دالة تُنتج قيمًا على مراحل باستخدام yield." },
      { question: "كيف تُستخدم async/await؟", answer: "لتبسيط التعامل مع Promises بكتابة كود يشبه المتزامن." },
      { question: "ما هي الـ Proxy؟", answer: "كائن يُستخدم لتخصيص سلوك الكائنات." },
      { question: "كيف تُستخدم Array.some؟", answer: "للتحقق إذا كان عنصر واحد على الأقل يطابق شرطًا." },
      { question: "ما هي الـ Reflect API؟", answer: "واجهة لتنفيذ عمليات الكائنات بطريقة برمجية." },
      { question: "كيف تُستخدم Array.every؟", answer: "للتحقق إذا كانت جميع العناصر تطابق شرطًا." },
      { question: "ما هي الـ bind؟", answer: "تُنشئ دالة جديدة مع قيمة this محددة." },
      { question: "كيف تُستخدم Array.slice؟", answer: "لاستخراج جزء من المصفوفة دون تعديلها." },
      { question: "ما هي الـ call وapply؟", answer: "تُستخدم لاستدعاء دالة مع تحديد this والوسائط." },
      { question: "كيف تُستخدم localStorage؟", answer: "لتخزين البيانات في المتصفح باستخدام setItem/getItem." },
      { question: "ما هي الـ event.preventDefault؟", answer: "تُمنع السلوك الافتراضي للحدث مثل إرسال نموذج." },
      { question: "كيف تُستخدم Array.concat؟", answer: "لدمج مصفوفتين أو أكثر في مصفوفة جديدة." },
      { question: "ما هي الـ Promise.all؟", answer: "تُنفذ عدة Promises معًا وتُرجع نتائجها." },
      { question: "كيف تُستخدم Array.includes؟", answer: "للتحقق إذا كانت المصفوفة تحتوي على قيمة معينة." },
      { question: "ما هي الـ Promise.race؟", answer: "تُرجع نتيجة أول Promise يُكتمل (نجاحًا أو فشلاً)." },
      { question: "كيف تُستخدم Array.sort؟", answer: "لفرز عناصر المصفوفة بناءً على دالة مقارنة." },
      { question: "ما هي الـ Object.keys؟", answer: "تُرجع مصفوفة تحتوي على مفاتيح الكائن." },
      { question: "كيف تُستخدم Array.flat؟", answer: "لتحويل المصفوفات المتداخلة إلى مصفوفة مسطحة." },
      { question: "ما هي الـ Object.values؟", answer: "تُرجع مصفوفة تحتوي على قيم الكائن." }
    ]
  },
  {
    title: "ES6+",
    icon: <Code className="w-5 h-5 text-green-400" />,
    questions: [
      { question: "ما هي ميزة let وconst؟", answer: "let وconst يوفران نطاقًا على مستوى الكتلة، على عكس var." },
      { question: "كيف تُستخدم arrow functions؟", answer: "تُستخدم لكتابة دوال موجزة وترث this من النطاق الأب." },
      { question: "ما هي template literals؟", answer: "سلاسل نصية تسمح بتضمين تعبيرات باستخدام ${}." },
      { question: "كيف تُستخدم destructuring؟", answer: "لاستخراج القيم من المصفوفات أو الكائنات بسهولة." },
      { question: "ما هي الـ default parameters؟", answer: "تُحدد قيمًا افتراضية للمعاملات في الدوال." },
      { question: "كيف تُستخدم rest parameters؟", answer: "تجميع الوسائط الإضافية في مصفوفة باستخدام ...param." },
      { question: "ما هي spread operator؟", answer: "تُستخدم لنشر عناصر المصفوفات أو الكائنات." },
      { question: "ما هي Promises؟", answer: "كائنات تُمثل نتيجة عملية غير متزامنة." },
      { question: "كيف تُستخدم async/await؟", answer: "لتبسيط التعامل مع Promises بكتابة كود يشبه المتزامن." },
      { question: "ما هي modules؟", answer: "ملفات تُصدر/تستورد كودًا باستخدام import/export." },
      { question: "ما هي الـ class؟", answer: "صيغة لإنشاء كائنات مع خصائص ودوال باستخدام كلمة class." },
      { question: "كيف تُستخدم Map؟", answer: "هيكل بيانات لتخزين أزواج مفتاح/قيمة مع مفاتيح من أي نوع." },
      { question: "ما هي Set؟", answer: "هيكل بيانات لتخزين قيم فريدة من أي نوع." },
      { question: "كيف تُستخدم for...of؟", answer: "للتكرار على القيم القابلة للتكرار مثل المصفوفات." },
      { question: "ما هي Symbol؟", answer: "نوع بيانات فريد يُستخدم كمفتاح للكائنات." },
      { question: "كيف تُستخدم Array.includes؟", answer: "للتحقق إذا كانت المصفوفة تحتوي على قيمة معينة." },
      { question: "ما هي Array.find؟", answer: "تُرجع أول عنصر يطابق شرطًا معينًا." },
      { question: "كيف تُستخدم Array.filter؟", answer: "تُنشئ مصفوفة جديدة تحتوي على العناصر التي تطابق شرطًا." },
      { question: "ما هي Array.map؟", answer: "تُنشئ مصفوفة جديدة بنتائج استدعاء دالة لكل عنصر." },
      { question: "كيف تُستخدم Array.reduce؟", answer: "تُحول المصفوفة إلى قيمة واحدة باستخدام دالة تراكمية." },
      { question: "ما هي Promise.all؟", answer: "تُنفذ عدة Promises معًا وتُرجع نتائجها." },
      { question: "كيف تُستخدم Promise.race؟", answer: "تُرجع نتيجة أول Promise يُكتمل." },
      { question: "ما هي الـ Proxy؟", answer: "كائن يُستخدم لتخصيص سلوك الكائنات." },
      { question: "كيف تُستخدم Reflect API؟", answer: "واجهة لتنفيذ عمليات الكائنات بطريقة برمجية." },
      { question: "ما هي generators؟", answer: "دوال تُنتج قيمًا على مراحل باستخدام yield." },
      { question: "كيف تُستخدم Array.some؟", answer: "للتحقق إذا كان عنصر واحد على الأقل يطابق شرطًا." },
      { question: "ما هي Array.every؟", answer: "تتحقق إذا كانت جميع العناصر تطابق شرطًا." },
      { question: "كيف تُستخدم Object.keys؟", answer: "تُرجع مصفوفة تحتوي على مفاتيح الكائن." },
      { question: "ما هي Object.values؟", answer: "تُرجع مصفوفة تحتوي على قيم الكائن." },
      { question: "كيف تُستخدم dynamic import؟", answer: "لاستيراد الوحدات ديناميكيًا عند الحاجة." }
    ]
  },
  {
    title: "Asynchronous JavaScript",
    icon: <Workflow className="w-5 h-5 text-purple-400" />,
    questions: [
      { question: "ما هي البرمجة غير المتزامنة؟", answer: "تنفيذ العمليات دون انتظار اكتمالها باستخدام callbacks أو Promises." },
      { question: "كيف تعمل الـ callback؟", answer: "دالة تُمرر كمعامل وتُنفذ بعد اكتمال عملية." },
      { question: "ما هي Promises؟", answer: "كائنات تُمثل نتيجة عملية غير متزامنة (نجاح أو فشل)." },
      { question: "كيف تُستخدم async/await؟", answer: "لتبسيط التعامل مع Promises بكتابة كود يشبه المتزامن." },
      { question: "ما هي event loop؟", answer: "آلية لإدارة العمليات غير المتزامنة في JavaScript." },
      { question: "كيف تُستخدم Promise.all؟", answer: "تُنفذ عدة Promises معًا وتُرجع نتائجها." },
      { question: "ما هي Promise.race؟", answer: "تُرجع نتيجة أول Promise يُكتمل (نجاحًا أو فشلاً)." },
      { question: "كيف تُعالج الأخطاء في async/await؟", answer: "باستخدام try/catch للتعامل مع الاستثناءات." },
      { question: "ما هي setTimeout؟", answer: "دالة تُؤخر تنفيذ كود لفترة زمنية محددة." },
      { question: "كيف تُستخدم setInterval؟", answer: "تُكرر تنفيذ كود على فترات زمنية محددة." },
      { question: "ما هي الـ fetch API؟", answer: "واجهة لإجراء طلبات HTTP مثل GET وPOST." },
      { question: "كيف تُستخدم Promise.resolve؟", answer: "تُنشئ Promise مُكتمل بقيمة معينة." },
      { question: "ما هي Promise.reject؟", answer: "تُنشئ Promise مرفوض بسبب معين." },
      { question: "كيف تُستخدم async في دوال؟", answer: "تُشير إلى أن الدالة تُرجع Promise وتدعم await." },
      { question: "ما هي الـ microtask queue؟", answer: "قائمة تنتظر تنفيذ المهام الدقيقة مثل Promises." },
      { question: "كيف تُلغى عملية setTimeout؟", answer: "باستخدام clearTimeout مع معرف المهمة." },
      { question: "ما هي الـ callback hell؟", answer: "تداخل الـ callbacks مما يجعل الكود صعب القراءة." },
      { question: "كيف تُستخدم Promise chaining؟", answer: "ربط عدة .then لتنفيذ عمليات متسلسلة." },
      { question: "ما هي الـ async iteration؟", answer: "التكرار على بيانات غير متزامنة باستخدام for await...of." },
      { question: "كيف تُعالج الأخطاء في Promises؟", answer: "باستخدام .catch أو معالجة الرفض في .then." }
    ]
  },
  {
    title: "React",
    icon: <Blocks className="w-5 h-5 text-teal-300" />,
    questions: [
      { question: "ما هو JSX؟", answer: "صيغة تشبه HTML تُستخدم لكتابة واجهات React داخل JavaScript." },
      { question: "كيف تعمل useState؟", answer: "Hook لإدارة الحالة في المكونات الوظيفية." },
      { question: "ما هو Virtual DOM؟", answer: "تمثيل افتراضي لـ DOM يُحسن أداء التحديثات." },
      { question: "ما الفرق بين props وstate؟", answer: "props بيانات خارجية، state بيانات داخلية." },
      { question: "كيف يعمل useEffect؟", answer: "Hook للتعامل مع التأثيرات الجانبية مثل جلب البيانات." },
      { question: "ما هي custom hooks؟", answer: "دوال مخصصة تُعيد منطق قابل لإعادة الاستخدام." },
      { question: "كيف يتم تمرير البيانات بين المكونات؟", answer: "عبر props أو Context API." },
      { question: "ما هو React Router؟", answer: "مكتبة لإدارة التنقل بين الصفحات في تطبيقات React." },
      { question: "كيف يتم تحسين أداء React؟", answer: "باستخدام memo، useCallback، وتقليل الـ re-renders." },
      { question: "ما هي component lifecycle؟", answer: "مراحل مثل mounting، updating، وunmounting." },
      { question: "ما هو useReducer؟", answer: "Hook لإدارة الحالات المعقدة مشابه لـ Redux." },
      { question: "كيف يعمل Context API؟", answer: "لتمرير البيانات عبر شجرة المكونات دون props." },
      { question: "ما هي memo؟", answer: "دالة تمنع إعادة الرندر إذا لم تتغير props." },
      { question: "كيف تُستخدم useCallback؟", answer: "لمنع إعادة إنشاء الدوال عند الرندر." },
      { question: "ما هي useMemo؟", answer: "لتحسين الأداء بحفظ نتائج العمليات الحسابية." },
      { question: "كيف تُستخدم PropTypes؟", answer: "للتحقق من نوع props في المكونات." },
      { question: "ما هي higher-order components؟", answer: "دوال تُعيد مكونات مع وظائف إضافية." },
      { question: "كيف تُستخدم React.Fragment؟", answer: "لإرجاع عدة عناصر دون إضافة عقدة إضافية." },
      { question: "ما هي controlled components؟", answer: "مكونات تُدار قيمها بواسطة حالة React." },
      { question: "ما هي uncontrolled components؟", answer: "مكونات تُدار قيمها بواسطة DOM مباشرة." },
      { question: "كيف يعمل useRef؟", answer: "Hook لإنشاء مرجع ثابت يُستخدم للوصول إلى DOM أو تخزين قيم." },
      { question: "ما هي React Hooks؟", answer: "دوال تتيح استخدام ميزات React في المكونات الوظيفية." },
      { question: "كيف تُستخدم lazy loading؟", answer: "لتحميل المكونات ديناميكيًا باستخدام React.lazy." },
      { question: "ما هي Suspense؟", answer: "مكون يُظهر محتوى احتياطي أثناء تحميل المكونات." },
      { question: "كيف تُعالج الأخطاء في React؟", answer: "باستخدام Error Boundaries." },
      { question: "ما هي keys في React؟", answer: "معرفات فريدة تُستخدم لتحديد العناصر في القوائم." },
      { question: "كيف تُستخدم useContext؟", answer: "للوصول إلى قيم Context داخل المكونات." },
      { question: "ما هي React.PureComponent؟", answer: "مكون يتحقق من التغييرات قبل الرندر." },
      { question: "كيف تُستخدم forwardRef؟", answer: "لتمرير ref إلى مكون فرعي." },
      { question: "ما هي render props؟", answer: "نمط لمشاركة الكود بتمرير دالة كـ prop." },
      { question: "كيف تُنشئ portal في React؟", answer: "لعرض المكونات خارج شجرة DOM الرئيسية." },
      { question: "ما هي strict mode في React؟", answer: "وضع يكتشف المشاكل المحتملة في التطبيق." },
      { question: "كيف تُستخدم useLayoutEffect؟", answer: "مشابه لـ useEffect لكن يُنفذ قبل الرسم." },
      { question: "ما هي hydration في React؟", answer: "عملية ربط تطبيقات SSR بالعميل." },
      { question: "كيف تُستخدم code splitting؟", answer: "لتقسيم الكود إلى حزم لتحسين التحميل." },
      { question: "ما هي server components؟", answer: "مكونات تُنفذ على الخادم لتحسين الأداء." },
      { question: "كيف تُدمج Redux مع React؟", answer: "باستخدام react-redux وProvider." },
      { question: "ما هي useDeferredValue؟", answer: "Hook لتأخير تحديثات غير عاجلة." },
      { question: "كيف تُستخدم useTransition؟", answer: "لتحديد التحديثات كانتقالات لتحسين الاستجابة." },
      { question: "ما هي React DevTools؟", answer: "أداة لتصحيح تطبيقات React وتتبع الحالة." },
      { question: "كيف تُنشئ custom hook؟", answer: "بإنشاء دالة تبدأ بـ use وتستخدم Hooks أخرى." },
      { question: "ما هي prop drilling؟", answer: "تمرير props عبر عدة مكونات وسيطة." },
      { question: "كيف تُستخدم useImperativeHandle؟", answer: "لتخصيص الـ ref المُعرّض بواسطة forwardRef." },
      { question: "ما هي concurrent rendering؟", answer: "ميزة لتحسين استجابة التطبيقات في React 18." },
      { question: "كيف تُدمج TypeScript مع React؟", answer: "باستخدام مكونات وprops مع تعريفات الأنواع." },
      { question: "ما هي useId؟", answer: "Hook لإنشاء معرفات فريدة للوصول والنماذج." },
      { question: "كيف تُستخدم React.cloneElement؟", answer: "لنسخ عنصر مع تعديل props." },
      { question: "ما هي static lifecycle methods؟", answer: "مثل getDerivedStateFromProps لتحديث الحالة." },
      { question: "كيف تُدمج React مع Web APIs؟", answer: "باستخدام useEffect للتفاعل مع واجهات مثل DOM." },
      { question: "ما هي React.Children؟", answer: "أدوات للتعامل مع props.children." },
      { question: "كيف تُنشئ animation في React؟", answer: "باستخدام مكتبات مثل Framer Motion أو CSS." },
      { question: "ما هي useDebugValue؟", answer: "Hook لعرض قيم تصحيح في React DevTools." },
      { question: "كيف تُعالج تحديثات الحالة الكبيرة؟", answer: "بتقسيم الحالة أو استخدام useReducer." },
      { question: "ما هي batching في React؟", answer: "تجميع تحديثات الحالة لتقليل الرندر." },
      { question: "كيف تُستخدم React.SuspenseList؟", answer: "للتحكم في ترتيب تحميل المكونات." },
      { question: "ما هي legacy lifecycle methods؟", answer: "مثل componentWillMount، لم تُعد موصى بها." },
      { question: "كيف تُنشئ مكون وظيفي؟", answer: "باستخدام دالة JavaScript تُرجع JSX." },
      { question: "ما هي state lifting؟", answer: "رفع الحالة إلى مكون أب لمشاركتها." },
      { question: "كيف تُدمج React مع SSR؟", answer: "باستخدام مكتبات مثل Next.js أو renderToString." },
      { question: "ما هي reconciler في React؟", answer: "المحرك الذي يقارن الأشجار لتحديث DOM." }
    ]
  },
  {
    title: "Next.js",
    icon: <Rocket className="w-5 h-5 text-gray-300" />,
    questions: [
      { question: "ما هو Next.js؟", answer: "إطار عمل React لتطوير تطبيقات SSR وSSG." },
      { question: "ما هي الـ SSR؟", answer: "Server-Side Rendering، عرض الصفحات على الخادم." },
      { question: "ما هي الـ SSG؟", answer: "Static Site Generation، إنشاء صفحات ثابتة عند البناء." },
      { question: "كيف يعمل getStaticProps؟", answer: "يُصدر بيانات للصفحات الثابتة عند البناء." },
      { question: "ما هو getServerSideProps؟", answer: "يجلب البيانات في وقت الطلب لـ SSR." },
      { question: "كيف يعمل getStaticPaths؟", answer: "يُحدد المسارات الديناميكية لـ SSG." },
      { question: "ما هي API Routes؟", answer: "وظائف خادم تُنشئ نقاط نهاية API داخل Next.js." },
      { question: "كيف يتم التنقل في Next.js؟", answer: "باستخدام مكون Link أو useRouter." },
      { question: "ما هي Image Optimization؟", answer: "ميزة لتحسين الصور تلقائيًا في Next.js." },
      { question: "كيف تُستخدم useRouter؟", answer: "Hook للوصول إلى كائن الموجه وإدارة التنقل." },
      { question: "ما هي الـ middleware؟", answer: "دوال تُنفذ قبل معالجة الطلبات." },
      { question: "كيف يتم تحسين SEO في Next.js؟", answer: "باستخدام Head وSSG/SSR لبيانات وصفية." },
      { question: "ما هي Incremental Static Regeneration؟", answer: "إعادة إنشاء الصفحات الثابتة ديناميكيًا." },
      { question: "كيف تُدمج TypeScript مع Next.js؟", answer: "بإضافة ملف tsconfig.json ومكونات TypeScript." },
      { question: "ما هي الـ preview mode؟", answer: "وضع لمعاينة البيانات قبل النشر." },
      { question: "كيف يعمل next.config.js؟", answer: "ملف لتخصيص إعدادات Next.js." },
      { question: "ما هي App Router؟", answer: "نظام توجيه جديد في Next.js 13 يعتمد على المجلدات." },
      { question: "كيف تُستخدم Dynamic Routes؟", answer: "بإنشاء ملفات بأسماء ديناميكية مثل [id].js." },
      { question: "ما هي Server Components؟", answer: "مكونات تُنفذ على الخادم لتحسين الأداء." },
      { question: "كيف تُدمج CSS في Next.js؟", answer: "باستخدام CSS Modules أو مكتبات مثل Tailwind." },
      { question: "ما هي Vercel؟", answer: "منصة لنشر تطبيقات Next.js بسهولة." },
      { question: "كيف يتم إعداد i18n؟", answer: "باستخدام next.config.js لدعم التدويل." },
      { question: "ما هي الـ fallback في getStaticPaths؟", answer: "تُحدد سلوك المسارات غير المُنشأة مسبقًا." },
      { question: "كيف تُستخدم environment variables؟", answer: "بإضافتها في .env واستخدام process.env." },
      { question: "ما هي الـ revalidate في ISR؟", answer: "تحدد المدة قبل إعادة إنشاء الصفحة." },
      { question: "كيف تُنشئ custom server؟", answer: "باستخدام Express أو Node.js مع Next.js." },
      { question: "ما هي الـ edge functions؟", answer: "وظائف تُنفذ على الحافة لتحسين الأداء." },
      { question: "كيف تُعالج الأخطاء في API Routes؟", answer: "بإرجاع استجابات مع حالات مثل 500." },
      { question: "ما هي الـ next/head؟", answer: "مكون لإدارة العناصر داخل <head>." },
      { question: "كيف تُدمج Web APIs مع Next.js؟", answer: "باستخدام fetch في API Routes أو getServerSideProps." }
    ]
  },
  {
    title: "Angular",
    icon: <Globe className="w-5 h-5 text-red-400" />,
    questions: [
      { question: "ما هو Angular؟", answer: "إطار عمل لتطوير تطبيقات ويب ديناميكية." },
      { question: "ما هي الـ components؟", answer: "مكونات تحتوي على العرض والمنطق لجزء من الواجهة." },
      { question: "كيف يعمل data binding؟", answer: "ربط البيانات بين القالب والمكون بطرق مثل {{}}." },
      { question: "ما هي الـ directives؟", answer: "تعليمات تُضيف سلوكًا إلى العناصر مثل *ngFor." },
      { question: "كيف تُستخدم *ngIf؟", answer: "لعرض/إخفاء العناصر بناءً على شرط." },
      { question: "ما هي الـ modules؟", answer: "حاويات لتنظيم المكونات والخدمات." },
      { question: "كيف يعمل dependency injection؟", answer: "يوفر الكائنات للمكونات عبر المُنشئ." },
      { question: "ما هي الـ services؟", answer: "فئات لمشاركة البيانات أو المنطق عبر المكونات." },
      { question: "كيف يتم التنقل في Angular؟", answer: "باستخدام RouterModule وrouterLink." },
      { question: "ما هي Observables؟", answer: "تيارات بيانات تُستخدم للتعامل مع الأحداث غير المتزامنة." },
      { question: "كيف تُستخدم HttpClient؟", answer: "لإجراء طلبات HTTP مثل GET وPOST." },
      { question: "ما هي pipes؟", answer: "دوال لتحويل البيانات في القوالب مثل {{ value | date }}." },
      { question: "كيف تُنشأ custom directive؟", answer: "باستخدام @Directive وتطبيق منطق على العنصر." },
      { question: "ما هي NgZone؟", answer: "تُدير التغييرات خارج نطاق Angular لتحسين الأداء." },
      { question: "كيف تُستخدم lazy loading؟", answer: "لتحميل الوحدات عند الحاجة باستخدام loadChildren." },
      { question: "ما هي change detection؟", answer: "آلية لتحديث الواجهة عند تغيير البيانات." },
      { question: "كيف تُدمج TypeScript مع Angular؟", answer: "باستخدام فئات وواجهات في المكونات." },
      { question: "ما هي RxJS؟", answer: "مكتبة للتعامل مع التيارات المتفاعلة مثل Observables." },
      { question: "كيف تُنشأ custom pipe؟", answer: "باستخدام @Pipe وتطبيق دالة transform." },
      { question: "ما هي NgRx؟", answer: "مكتبة لإدارة الحالة باستخدام Redux في Angular." },
      { question: "كيف تُعالج الأخطاء في HttpClient؟", answer: "باستخدام catchError من RxJS." },
      { question: "ما هي AOT compilation؟", answer: "تحويل القوالب إلى JavaScript أثناء البناء." },
      { question: "كيف تُستخدم forms في Angular؟", answer: "باستخدام Template-driven أو Reactive Forms." },
      { question: "ما هي Resolver؟", answer: "خدمة تجلب البيانات قبل تحميل المسار." },
      { question: "كيف تُنشأ animation؟", answer: "باستخدام @angular/animations وتعريف triggers." },
      { question: "ما هي standalone components؟", answer: "مكونات لا تتطلب وحدة للعمل." },
      { question: "كيف تُدمج CSS في Angular؟", answer: "باستخدام ملفات CSS أو styles في المكون." },
      { question: "ما هي Ivy؟", answer: "محرك العرض الجديد في Angular لتحسين الأداء." },
      { question: "كيف تُستخدم TestBed؟", answer: "لإعداد بيئة اختبار المكونات." },
      { question: "ما هي signals؟", answer: "ميزة جديدة لإدارة الحالة التفاعلية في Angular." }
    ]
  },
  {
    title: "Vue.js",
    icon: <Layers className="w-5 h-5 text-green-300" />,
    questions: [
      { question: "ما هو Vue.js؟", answer: "إطار عمل لتطوير واجهات مستخدم تفاعلية." },
      { question: "ما هي الـ components؟", answer: "مكونات قابلة لإعادة الاستخدام تحتوي على العرض والمنطق." },
      { question: "كيف يعمل data binding؟", answer: "ربط البيانات باستخدام v-bind أو :." },
      { question: "ما هي directives؟", answer: "تعليمات مثل v-if وv-for لتعديل DOM." },
      { question: "كيف تُستخدم v-if؟", answer: "لعرض/إخفاء العناصر بناءً على شرط." },
      { question: "ما هي computed properties؟", answer: "خصائص تُحسب بناءً على بيانات متفاعلة." },
      { question: "كيف تُستخدم watch؟", answer: "لمراقبة التغييرات في البيانات وتنفيذ منطق." },
      { question: "ما هي Vue Router؟", answer: "مكتبة لإدارة التنقل بين الصفحات." },
      { question: "كيف يتم تمرير البيانات؟", answer: "باستخدام props للأبناء وevents للآباء." },
      { question: "ما هي Vuex؟", answer: "مكتبة لإدارة الحالة المركزية." },
      { question: "كيف تُستخدم slots؟", answer: "لتمرير محتوى مخصص إلى المكونات." },
      { question: "ما هي Composition API؟", answer: "واجهة لتنظيم المنطق في المكونات بشكل مرن." },
      { question: "كيف تُستخدم Options API؟", answer: "لتنظيم المكونات باستخدام خيارات مثل data وmethods." },
      { question: "ما هي reactive؟", answer: "دالة تُنشئ كائنات متفاعلة في Composition API." },
      { question: "كيف تُدمج TypeScript مع Vue؟", answer: "باستخدام defineComponent وتعريفات الأنواع." },
      { question: "ما هي provide/inject؟", answer: "لتمرير البيانات عبر شجرة المكونات." },
      { question: "كيف تُنشأ custom directive؟", answer: "باستخدام app.directive وتعريف السلوك." },
      { question: "ما هي Teleport؟", answer: "لنقل العناصر إلى موقع آخر في DOM." },
      { question: "كيف تُستخدم Vue CLI؟", answer: "لإعداد مشاريع Vue بسهولة." },
      { question: "ما هي Pinia؟", answer: "مكتبة إدارة الحالة الحديثة لـ Vue." },
      { question: "كيف يتم تحسين الأداء؟", answer: "باستخدام lazy loading وv-once." },
      { question: "ما هي Suspense؟", answer: "مكون لعرض محتوى احتياطي أثناء التحميل." },
      { question: "كيف تُنشأ animation؟", answer: "باستخدام <Transition> أو مكتبات خارجية." },
      { question: "ما هي Vue DevTools؟", answer: "أداة لتصحيح تطبيقات Vue." },
      { question: "كيف تُعالج الأخطاء؟", answer: "باستخدام errorHandler أو try/catch." },
      { question: "ما هي keep-alive؟", answer: "مكون للاحتفاظ بحالة المكونات المخزنة." },
      { question: "كيف تُدمج CSS؟", answer: "باستخدام scoped styles أو مكتبات مثل Tailwind." },
      { question: "ما هي SSR في Vue؟", answer: "عرض الصفحات على الخادم باستخدام Nuxt.js." },
      { question: "كيف تُستخدم v-model؟", answer: "لربط البيانات ثنائي الاتجاه مع المدخلات." },
      { question: "ما هي lifecycle hooks؟", answer: "دوال مثل mounted وupdated لتنفيذ منطق في مراحل المكون." }
    ]
  },
  {
    title: "Nuxt.js",
    icon: <Rocket className="w-5 h-5 text-green-400" />,
    questions: [
      { question: "ما هو Nuxt.js؟", answer: "إطار عمل Vue لتطوير تطبيقات SSR وSSG." },
      { question: "ما هي الـ SSR في Nuxt؟", answer: "عرض الصفحات على الخادم لتحسين SEO." },
      { question: "ما هي الـ SSG؟", answer: "إنشاء صفحات ثابتة عند البناء." },
      { question: "كيف يعمل asyncData؟", answer: "يجلب البيانات قبل عرض المكون." },
      { question: "ما هو fetch في Nuxt؟", answer: "يُستخدم لجلب البيانات في المكونات." },
      { question: "كيف يتم التنقل في Nuxt؟", answer: "باستخدام <NuxtLink> أو useRouter." },
      { question: "ما هي middleware Hawkins: Nuxt.js middleware؟", answer: "وظائف تُنفذ قبل معالجة الطلبات." },
      { question: "ما هي layouts؟", answer: "قوالب تحدد هيكلية الصفحات." },
      { question: "كيف تُستخدم plugins؟", answer: "لموسعة وظائف Nuxt مثل إضافة مكتبات." },
      { question: "ما هي modules؟", answer: "إضافات جاهزة لتوسيع وظائف Nuxt." },
      { question: "كيف يتم تحسين SEO؟", answer: "باستخدام nuxt-seo وSSR/SSG." },
      { question: "ما هي nuxt.config.js؟", answer: "ملف لتخصيص إعدادات Nuxt." },
      { question: "كيف تُدمج TypeScript؟", answer: "بإضافة @nuxt/typescript-build." },
      { question: "ما هي static generation؟", answer: "إنشاء جميع الصفحات كملفات HTML ثابتة." },
      { question: "كيف تُستخدم environment variables؟", answer: "بإضافتها في .env واستخدام process.env." },
      { question: "ما هي serverMiddleware؟", answer: "وظائف خادم مخصصة داخل Nuxt." },
      { question: "كيف تُنشأ API Routes؟", answer: "بإنشاء ملفات في مجلد api." },
      { question: "ما هي Nuxt Content؟", answer: "وحدة لإدارة المحتوى باستخدام Markdown." },
      { question: "كيف تُعالج الأخطاء؟", answer: "باستخدام error.vue أو try/catch." },
      { question: "ما هي head في Nuxt؟", answer: "لإدارة عناصر <head> لكل صفحة." }
    ]
  },
  {
    title: "Tailwind CSS",
    icon: <Wind className="w-5 h-5 text-cyan-400" />,
    questions: [
      { question: "ما هو Tailwind CSS؟", answer: "إطار عمل CSS يعتمد على فئات الأدوات المساعدة." },
      { question: "كيف يتم إعداد Tailwind؟", answer: "بتثبيت المكتبة وإضافة tailwind.config.js." },
      { question: "ما هي فئات الأدوات؟", answer: "فئات CSS جاهزة مثل p-4 وbg-blue-500." },
      { question: "كيف تُستخدم الـ responsive classes؟", answer: "بإضافة بادئات مثل sm:، md:، lg:." },
      { question: "ما هي الـ hover classes؟", answer: "فئات تُطبق عند التمرير مثل hover:bg-red-500." },
      { question: "كيف تُخصص Tailwind؟", answer: "بتعديل tailwind.config.js للألوان، المسافات، إلخ." },
      { question: "ما هي الـ purge؟", answer: "إزالة الفئات غير المستخدمة لتقليل حجم CSS." },
      { question: "كيف تُستخدم Flexbox؟", answer: "باستخدام فئات مثل flex وjustify-center." },
      { question: "ما هي الـ Grid classes؟", answer: "فئات لإنشاء شبكات مثل grid وgrid-cols-3." },
      { question: "كيف تُنشأ أنماط مخصصة؟", answer: "باستخدام @apply في ملفات CSS مخصصة." },
      { question: "ما هي JIT mode؟", answer: "وضع يُنشئ CSS عند الطلب لتحسين الأداء." },
      { question: "كيف تُستخدم dark mode؟", answer: "بإضافة فئات dark: مع تفعيل darkMode." },
      { question: "ما هي typography plugin؟", answer: "إضافة لتنسيق النصوص بفئات مثل prose." },
      { question: "كيف تُدمج Tailwind مع React؟", answer: "بتثبيت المكتبة وإعداد PostCSS." },
      { question: "ما هي فئات container؟", answer: "فئة لتحديد عرض مركزي متجاوب." },
      { question: "كيف تُستخدم transitions؟", answer: "بفئات مثل transition وduration-300." },
      { question: "ما هي aspect-ratio؟", answer: "فئات لتحديد نسب العرض إلى الارتفاع." },
      { question: "كيف تُنشأ ظلال؟", answer: "باستخدام فئات مثل shadow-md." },
      { question: "ما هي فئات space؟", answer: "لإضافة مسافات بين العناصر مثل space-x-4." },
      { question: "كيف تُستخدم Tailwind CLI؟", answer: "لتشغيل أوامر بناء CSS." }
    ]
  },
  {
    title: "Bootstrap",
    icon: <Puzzle className="w-5 h-5 text-purple-400" />,
    questions: [
      { question: "ما هو Bootstrap؟", answer: "إطار عمل CSS لتصميم واجهات متجاوبة." },
      { question: "كيف يتم إعداد Bootstrap؟", answer: "بتضمين ملفات CSS وJS عبر CDN أو npm." },
      { question: "ما هي الـ grid system؟", answer: "نظام شبكة بـ 12 عمودًا للتخطيط." },
      { question: "كيف تُستخدم responsive classes؟", answer: "بإضافة فئات مثل col-md-6 وcol-lg-4." },
      { question: "ما هي components؟", answer: "عناصر جاهزة مثل navbars وcards." },
      { question: "كيف تُستخدم navbar؟", answer: "بإضافة فئات مثل navbar وnavbar-expand." },
      { question: "ما هي utilities؟", answer: "فئات مساعدة مثل m-3 وbg-primary." },
      { question: "كيف تُنشأ modal؟", answer: "باستخدام فئات modal وmodal-dialog." },
      { question: "ما هي carousel؟", answer: "مكون لعرض شرائح الصور باستخدام carousel." },
      { question: "كيف تُستخدم forms؟", answer: "بفئات مثل form-control وform-group." },
      { question: "ما هي breakpoint prefixes؟", answer: "بادئات مثل sm-، md-، lg- للتحكم المتجاوب." },
      { question: "كيف تُخصص Bootstrap؟", answer: "بتعديل متغيرات Sass أو إنشاء CSS مخصص." },
      { question: "ما هي popovers؟", answer: "تلميحات تظهر عند النقر أو التمرير." },
      { question: "كيف تُستخدم buttons؟", answer: "بفئات مثل btn وbtn-primary." },
      { question: "ما هي alerts؟", answer: "مكونات لعرض رسائل مثل alert-success." },
      { question: "كيف تُدمج Bootstrap مع React؟", answer: "باستخدام react-bootstrap أو المكتبة الأصلية." },
      { question: "ما هي collapse؟", answer: "مكون لإظهار/إخفاء المحتوى باستخدام data-bs-toggle." },
      { question: "كيف تُنشأ breadcrumb؟", answer: "باستخدام فئات breadcrumb وbreadcrumb-item." },
      { question: "ما هي spinners؟", answer: "مؤشرات تحميل بفئات مثل spinner-border." },
      { question: "كيف تُستخدم tooltips؟", answer: "بتفعيل data-bs-toggle='tooltip'." }
    ]
  },
  {
    title: "Sass",
    icon: <Paintbrush className="w-5 h-5 text-pink-400" />,
    questions: [
      { question: "ما هو Sass؟", answer: "موسع لـ CSS يضيف ميزات مثل المتغيرات والتداخل." },
      { question: "ما الفرق بين SCSS وSass؟", answer: "SCSS يستخدم صيغة مشابهة لـ CSS، Sass يعتمد المسافات." },
      { question: "كيف تُستخدم المتغيرات؟", answer: "بتعريفها بـ $variable: value." },
      { question: "ما هي التداخل (nesting)؟", answer: "كتابة قواعد CSS داخل بعضها مثل .parent { .child {} }." },
      { question: "كيف تُستخدم @mixin؟", answer: "لإنشاء كتل CSS قابلة لإعادة الاستخدام." },
      { question: "ما هي @include؟", answer: "لاستدعاء mixin داخل قاعدة CSS." },
      { question: "كيف تُستخدم @extend؟", answer: "لمشاركة قواعد CSS بين selectors." },
      { question: "ما هي الـ @import؟", answer: "لاستيراد ملفات Sass أخرى." },
      { question: "كيف تُستخدم الدوال؟", answer: "لإنشاء منطق مخصص مثل darken($color, 10%)." },
      { question: "ما هي الـ control directives؟", answer: "مثل @if و@for للتحكم في التدفق." },
      { question: "كيف تُنشأ خريطة (map)؟", answer: "بتعريف $map: (key: value)." },
      { question: "ما هي الـ placeholder selectors؟", answer: "يبدأون بـ % ويُستخدمون مع @extend." },
      { question: "كيف تُستخدم @media في Sass؟", answer: "يمكن تداخلها داخل قواعد CSS." },
      { question: "ما هي الـ @function؟", answer: "لإنشاء دوال مخصصة تُرجع قيمة." },
      { question: "كيف تُدمج Sass مع React؟", answer: "بتثبيت node-sass أو sass وإعداد Webpack." },
      { question: "ما هي الـ @each؟", answer: "للتكرار على قوائم أو خرائط." },
      { question: "كيف تُستخدم interpolation؟", answer: "لتضمين قيم باستخدام #{$variable}." },
      { question: "ما هي الـ @at-root؟", answer: "لإخراج قاعدة من التداخل إلى المستوى الجذر." },
      { question: "كيف تُنشأ قائمة (list)؟", answer: "بتعريف $list: value1, value2." },
      { question: "ما هي الـ @error؟", answer: "لإيقاف الترجمة مع رسالة خطأ مخصصة." }
    ]
  },
  {
    title: "React",
    icon: <Blocks className="w-5 h-5 text-teal-300" />,
    questions: [
      { question: "ما هو React؟", answer: "مكتبة JavaScript لبناء واجهات مستخدم تفاعلية." },
      { question: "ما هي الـ components؟", answer: "وحدات مستقلة تُستخدم لتقسيم الواجهة." },
      { question: "ما هو JSX؟", answer: "صيغة مشابهة لـ HTML تُكتب داخل JavaScript." },
      { question: "كيف تُستخدم props؟", answer: "لتمرير البيانات من مكون إلى آخر." },
      { question: "ما هي الـ state؟", answer: "بيانات داخلية تُحدث الواجهة عند تغييرها." },
      { question: "كيف يعمل useState؟", answer: "Hook لإدارة الحالة في المكونات الوظيفية." },
      { question: "ما هو useEffect؟", answer: "Hook للتعامل مع التأثيرات الجانبية مثل جلب البيانات." },
      { question: "كيف يعمل Virtual DOM؟", answer: "يُحدث العناصر بكفاءة عن طريق مقارنة الأشجار." },
      { question: "ما هي React Router؟", answer: "مكتبة لإنشاء تطبيقات متعددة الصفحات." },
      { question: "كيف تُنشأ مكون وظيفي؟", answer: "بكتابة دالة تُرجع JSX." },
      { question: "ما هي الـ hooks؟", answer: "دوال خاصة لإدارة الحالة والتأثيرات في React." },
      { question: "كيف تُستخدم useContext؟", answer: "للوصول إلى بيانات عامة بين المكونات." },
      { question: "ما هي الـ event handling؟", answer: "التعامل مع أحداث مثل النقر باستخدام onClick." },
      { question: "كيف يتم عرض قائمة؟", answer: "باستخدام map لتكرار العناصر في JSX." },
      { question: "ما هي conditional rendering؟", answer: "عرض المكونات بناءً على شروط معينة." },
      { question: "كيف تُدمج APIs؟", answer: "باستخدام fetch أو axios داخل useEffect." },
      { question: "ما هي memoization؟", answer: "تحسين الأداء بتخزين نتائج الحسابات." },
      { question: "كيف يعمل useMemo؟", answer: "يحفظ قيمة محسوبة لتجنب إعادة الحساب." },
      { question: "ما هي useCallback؟", answer: "تحفظ دالة لتجنب إعادة إنشائها." },
      { question: "كيف يتم تحسين الأداء؟", answer: "باستخدام memo وuseMemo وuseCallback." }
    ]
  },
  {
    title: "Angular",
    icon: <Blocks className="w-5 h-5 text-red-400" />,
    questions: [
      { question: "ما هو Angular؟", answer: "إطار عمل شامل لبناء تطبيقات ويب ديناميكية." },
      { question: "ما هي الـ components؟", answer: "وحدات لتنظيم الواجهة مع منطق وعرض." },
      { question: "كيف يعمل data binding؟", answer: "يربط البيانات بالواجهة بشكل تلقائي." },
      { question: "ما هي الـ directives؟", answer: "تُضيف سلوكيات ديناميكية للعناصر." },
      { question: "كيف تُستخدم services؟", answer: "لإدارة المنطق المشترك بين المكونات." },
      { question: "ما هي dependency injection؟", answer: "حقن الخدمات تلقائيًا في المكونات." },
      { question: "ما هي Angular CLI؟", answer: "أداة لإنشاء وإدارة مشاريع Angular." },
      { question: "كيف يعمل routing؟", answer: "يُنشئ تطبيقات متعددة الصفحات باستخدام RouterModule." },
      { question: "ما هي الـ modules؟", answer: "تجميعات لتنظيم المكونات والخدمات." },
      { question: "كيف تُستخدم pipes؟", answer: "لتحويل البيانات في القوالب مثل {{ value | date }}." },
      { question: "ما هي الـ forms؟", answer: "نماذج تفاعلية مع دعم التحقق من البيانات." },
      { question: "كيف يتم إنشاء form؟", answer: "باستخدام ReactiveFormsModule أو Template-driven." },
      { question: "ما هي TypeScript في Angular؟", answer: "لغة تُضيف أنواعًا ثابتة لتحسين الكود." },
      { question: "كيف تُدمج APIs؟", answer: "باستخدام HttpClientModule لإجراء طلبات." },
      { question: "ما هي lazy loading؟", answer: "تحميل الوحدات حسب الحاجة لتحسين الأداء." },
      { question: "كيف يعمل NgRx؟", answer: "يُدير الحالة العامة بنمط Redux." },
      { question: "ما هي change detection؟", answer: "آلية لتحديث الواجهة عند تغيير البيانات." },
      { question: "كيف تُحسن الأداء؟", answer: "باستخدام lazy loading وOnPush strategy." },
      { question: "ما هي الـ observables؟", answer: "تيارات بيانات للتعامل مع العمليات غير المتزامنة." },
      { question: "كيف تُنشأ directive؟", answer: "باستخدام @Directive وتطبيق منطق مخصص." }
    ]
  },
  {
    title: "Vue.js",
    icon: <Blocks className="w-5 h-5 text-green-400" />,
    questions: [
      { question: "ما هو Vue.js؟", answer: "إطار عمل خفيف لبناء واجهات مستخدم تفاعلية." },
      { question: "ما هي الـ components؟", answer: "وحدات مستقلة لتقسيم الواجهة." },
      { question: "كيف يعمل data binding؟", answer: "يربط البيانات بالواجهة باستخدام v-bind." },
      { question: "ما هي الـ directives؟", answer: "تعليمات مثل v-if وv-for للتحكم في العرض." },
      { question: "ما هي Vue Router؟", answer: "مكتبة لإنشاء تطبيقات متعددة الصفحات." },
      { question: "كيف تُستخدم computed properties؟", answer: "لإنشاء قيم محسوبة تعتمد على البيانات." },
      { question: "ما هي watchers؟", answer: "دوال تتفاعل مع تغييرات البيانات." },
      { question: "كيف يعمل reactivity؟", answer: "يُحدث الواجهة تلقائيًا عند تغيير البيانات." },
      { question: "ما هي Vue CLI؟", answer: "أداة لإنشاء وإدارة مشاريع Vue.js." },
      { question: "كيف تُدمج APIs؟", answer: "باستخدام axios أو fetch لجلب البيانات." },
      { question: "ما هي Vuex؟", answer: "مكتبة لإدارة الحالة العامة في التطبيقات." },
      { question: "كيف يعمل Pinia؟", answer: "بديل حديث لـ Vuex لإدارة الحالة." },
      { question: "ما هي slots؟", answer: "تُتيح إدراج محتوى ديناميكي في المكونات." },
      { question: "كيف تُنشأ component؟", answer: "بتعريف كائن باستخدام Vue.component." },
      { question: "ما هي event handling؟", answer: "التعامل مع الأحداث باستخدام v-on." },
      { question: "كيف تُستخدم filters؟", answer: "لتحويل البيانات في القوالب (في Vue 2)." },
      { question: "ما هي transition؟", answer: "ميزة لإنشاء رسوم متحركة عند تغيير العناصر." },
      { question: "كيف تُحسن الأداء؟", answer: "باستخدام lazy loading وcomputed properties." },
      { question: "ما هي dynamic components؟", answer: "مكونات تُحدد ديناميكيًا باستخدام <component>." },
      { question: "كيف تُستخدم Vue Devtools؟", answer: "أداة لتصحيح وتتبع حالة التطبيق." }
    ]
  },
  {
    title: "React Basics",
    icon: <Puzzle className="w-5 h-5 text-teal-300" />,
    questions: [
      { question: "ما هي الـ components في React؟", answer: "وحدات مستقلة تُشكل الواجهة." },
      { question: "كيف تُكتب JSX؟", answer: "بمزج HTML مع JavaScript داخل المكونات." },
      { question: "ما هو useState؟", answer: "Hook لإدارة الحالة في المكونات الوظيفية." },
      { question: "كيف تُمرر props؟", answer: "بإضافتها كسمات للمكون مثل <Component name='value' />." },
      { question: "ما هي reusable UI؟", answer: "مكونات يمكن استخدامها في أماكن متعددة." },
      { question: "كيف تُعالج الأحداث؟", answer: "باستخدام سمات مثل onClick={handleClick}." },
      { question: "كيف تُعرض قائمة؟", answer: "باستخدام map لتكرار البيانات في JSX." },
      { question: "ما هو Virtual DOM؟", answer: "تمثيل افتراضي للواجهة لتحسين التحديثات." },
      { question: "كيف تُنشأ مكون وظيفي؟", answer: "بكتابة دالة تُرجع JSX." },
      { question: "ما هي state؟", answer: "بيانات داخلية تتحكم في عرض المكون." },
      { question: "كيف يعمل conditional rendering؟", answer: "باستخدام if أو العامل && في JSX." },
      { question: "ما هي key في القوائم؟", answer: "معرف فريد لتحسين تحديث العناصر." },
      { question: "كيف تُستخدم fragments؟", answer: "لتجميع عناصر بدون عقدة أب إضافية." },
      { question: "ما هي controlled components؟", answer: "مكونات نماذج تُدار حالتها بواسطة React." },
      { question: "كيف تُنشأ uncontrolled component؟", answer: "باستخدام ref للوصول إلى قيم الإدخال." },
      { question: "ما هي prop drilling؟", answer: "تمرير props عبر مكونات متعددة." },
      { question: "كيف تُستخدم defaultProps؟", answer: "لتعيين قيم افتراضية لـ props." },
      { question: "ما هي children؟", answer: "محتوى يُمرر بين علامات المكون." },
      { question: "كيف تُحدث الحالة؟", answer: "باستخدام دالة setState أو set في useState." },
      { question: "ما هي lifecycle في المكونات؟", answer: "مراحل مثل التهيئة والتحديث والإزالة." }
    ]
  },
  {
    title: "Hooks + Routing + Context",
    icon: <GitBranch className="w-5 h-5 text-indigo-400" />,
    questions: [
      { question: "ما هو useEffect؟", answer: "Hook للتعامل مع التأثيرات الجانبية." },
      { question: "كيف يعمل useContext؟", answer: "يُتيح الوصول إلى الحالة العامة." },
      { question: "ما هي custom hooks؟", answer: "دوال مخصصة تُعيد منطق قابل لإعادة الاستخدام." },
      { question: "كيف تُستخدم React Router؟", answer: "لإنشاء تطبيقات متعددة الصفحات." },
      { question: "ما هي global state؟", answer: "حالة مشتركة بين مكونات التطبيق." },
      { question: "كيف تُحسن الأداء؟", answer: "باستخدام memo وuseMemo وuseCallback." },
      { question: "ما هي side effects؟", answer: "عمليات مثل جلب البيانات أو تحديث DOM." },
      { question: "كيف تُنشأ multi-page app؟", answer: "باستخدام Routes وRoute في React Router." },
      { question: "ما هي useReducer؟", answer: "Hook لإدارة الحالة المعقدة." },
      { question: "كيف تُستخدم useRef؟", answer: "للوصول إلى عناصر DOM أو تخزين قيم." },
      { question: "ما هي dynamic routes؟", answer: "مسارات تحتوي على معاملات مثل /user/:id." },
      { question: "كيف تُنشأ context؟", answer: "باستخدام createContext وProvider." },
      { question: "ما هي nested routes؟", answer: "مسارات داخل مسارات في React Router." },
      { question: "كيف تُعالج navigation؟", answer: "باستخدام useNavigate أو Link." },
      { question: "ما هي useMemo؟", answer: "يحفظ قيمة محسوبة لتحسين الأداء." },
      { question: "كيف يعمل useCallback؟", answer: "يحفظ دالة لتجنب إعادة إنشائها." },
      { question: "ما هي cleanup في useEffect؟", answer: "دالة تُنفذ لتنظيف التأثيرات." },
      { question: "كيف تُدمج APIs؟", answer: "باستخدام fetch داخل useEffect." },
      { question: "ما هي route guards؟", answer: "منطق للتحكم في الوصول إلى المسارات." },
      { question: "كيف تُستخدم useLocation؟", answer: "للوصول إلى معلومات المسار الحالي." }
    ]
  },
  {
    title: "Next.js",
    icon: <Server className="w-5 h-5 text-gray-400" />,
    questions: [
      { question: "ما هو Next.js؟", answer: "إطار عمل مبني على React لتطبيقات محسنة." },
      { question: "ما هي file-based routing؟", answer: "نظام توجيه يعتمد على هيكل الملفات." },
      { question: "كيف يعمل SSR؟", answer: "يُنشئ الصفحات على الخادم لكل طلب." },
      { question: "ما هي SSG؟", answer: "إنشاء صفحات ثابتة أثناء البناء." },
      { question: "كيف تُنشأ API route؟", answer: "بإنشاء ملف في pages/api." },
      { question: "ما هي dynamic routes؟", answer: "مسارات تحتوي على معاملات مثل [id].js." },
      { question: "كيف تُحسن الصور؟", answer: "باستخدام مكون Image من Next.js." },
      { question: "ما هي getStaticProps؟", answer: "دالة لجلب البيانات لـ SSG." },
      { question: "كيف يعمل getServerSideProps؟", answer: "يجلب البيانات لـ SSR أثناء الطلب." },
      { question: "ما هي getStaticPaths؟", answer: "تُحدد المسارات الديناميكية لـ SSG." },
      { question: "كيف تُنشر تطبيق Next.js؟", answer: "باستخدام Vercel أو Netlify." },
      { question: "ما هي middleware؟", answer: "وظائف تُنفذ قبل معالجة الطلبات." },
      { question: "كيف تُدمج CSS؟", answer: "باستخدام CSS Modules أو مكتبات مثل styled-components." },
      { question: "ما هي incremental static regeneration؟", answer: "تحديث الصفحات الثابتة ديناميكيًا." },
      { question: "كيف تُستخدم environment variables؟", answer: "بتعريفها في .env واستخدام process.env." },
      { question: "ما هي App Router؟", answer: "نظام توجيه متقدم في Next.js 13+." },
      { question: "كيف تُحسن SEO؟", answer: "باستخدام Head وSSR أو SSG." },
      { question: "ما هي useRouter؟", answer: "Hook للوصول إلى كائن التوجيه." },
      { question: "كيف تُنشأ layout؟", answer: "بإنشاء ملف layout.js في App Router." },
      { question: "ما هي error handling؟", answer: "إنشاء صفحات خطأ مثل error.js." }
    ]
  },
  {
    title: "Angular Basics",
    icon: <Puzzle className="w-5 h-5 text-red-300" />,
    questions: [
      { question: "ما هي الـ modules في Angular؟", answer: "تجميعات لتنظيم المكونات والخدمات." },
      { question: "كيف تُنشأ component؟", answer: "باستخدام ng generate component." },
      { question: "ما هي data binding؟", answer: "ربط البيانات بالواجهة باستخدام {{}} أو ngModel." },
      { question: "ما هي directives؟", answer: "تعليمات مثل ngIf وngFor للتحكم في العرض." },
      { question: "كيف تُستخدم services؟", answer: "لإدارة المنطق باستخدام @Injectable." },
      { question: "ما هي dependency injection؟", answer: "حقن الخدمات في المكونات تلقائيًا." },
      { question: "كيف يعمل routing؟", answer: "باستخدام RouterModule وتعريف المسارات." },
      { question: "ما هي Angular CLI؟", answer: "أداة لإنشاء وإدارة المشاريع." },
      { question: "كيف تُنشأ form؟", answer: "باستخدام FormsModule أو ReactiveFormsModule." },
      { question: "ما هي pipes؟", answer: "تحويل البيانات في القوالب مثل {{ value | uppercase }}." },
      { question: "كيف تُدمج APIs؟", answer: "باستخدام HttpClient لإجراء طلبات HTTP." },
      { question: "ما هي template-driven forms؟", answer: "نماذج تعتمد على القوالب مع ngModel." },
      { question: "كيف يعمل reactive forms؟", answer: "نماذج تُدار برمجيًا باستخدام FormGroup." },
      { question: "ما هي change detection؟", answer: "تحديث الواجهة عند تغيير البيانات." },
      { question: "كيف تُنشأ directive؟", answer: "باستخدام ng generate directive." },
      { question: "ما هي TypeScript؟", answer: "لغة تُضيف أنواعًا لتحسين الكود." },
      { question: "كيف تُعالج الأحداث؟", answer: "باستخدام (event)=’handler()’ في القوالب." },
      { question: "ما هي component lifecycle؟", answer: "مراحل مثل ngOnInit وngOnDestroy." },
      { question: "كيف تُنشأ module؟", answer: "باستخدام ng generate module." },
      { question: "ما هي interpolation؟", answer: "عرض البيانات في القوالب باستخدام {{}}." }
    ]
  },
  {
    title: "Advanced Angular + NgRx",
    icon: <GitBranch className="w-5 h-5 text-red-400" />,
    questions: [
      { question: "ما هي pipes في Angular؟", answer: "تحويل البيانات في القوالب مثل {{ value | date }}." },
      { question: "كيف تُنشأ custom pipe؟", answer: "باستخدام ng generate pipe." },
      { question: "ما هي lazy loading؟", answer: "تحميل الوحدات حسب الحاجة لتحسين الأداء." },
      { question: "كيف يعمل NgRx؟", answer: "يُدير الحالة بنمط Redux باستخدام actions وreducers." },
      { question: "ما هي advanced routing؟", answer: "مسارات معقدة مثل nested routes وguards." },
      { question: "كيف تُدمج APIs؟", answer: "باستخدام HttpClient مع interceptors." },
      { question: "ما هي change detection optimization؟", answer: "استخدام OnPush لتقليل التحديثات." },
      { question: "كيف تُنشأ directive؟", answer: "باستخدام @Directive وتطبيق منطق مخصص." },
      { question: "ما هي effects في NgRx؟", answer: "لتعامل مع التأثيرات الجانبية مثل طلبات API." },
      { question: "كيف تُحسن الأداء؟", answer: "باستخدام lazy loading وAOT compilation." },
      { question: "ما هي route guards؟", answer: "منطق للتحكم في الوصول إلى المسارات." },
      { question: "كيف تُستخدم selectors في NgRx؟", answer: "لاستخراج البيانات من الـ store." },
      { question: "ما هي AOT compilation؟", answer: "تجميع القوالب أثناء البناء لتحسين الأداء." },
      { question: "كيف تُنشأ enterprise app؟", answer: "باستخدام modules وlazy loading وNgRx." },
      { question: "ما هي interceptors؟", answer: "تعديل طلبات أو ردود HTTP." },
      { question: "كيف تُعالج errors؟", answer: "باستخدام error handlers وinterceptors." },
      { question: "ما هي dynamic components؟", answer: "مكونات تُنشأ ديناميكيًا باستخدام ComponentFactory." },
      { question: "كيف تُستخدم observables؟", answer: "لتعامل مع البيانات غير المتزامنة." },
      { question: "ما هي store في NgRx؟", answer: "مخزن مركزي للحالة العامة." },
      { question: "كيف تُنشأ action في NgRx؟", answer: "بتعريف نوع وعبء باستخدام createAction." }
    ]
  },
  {
    title: "Vue.js Basics",
    icon: <Puzzle className="w-5 h-5 text-green-300" />,
    questions: [
      { question: "ما هي الـ components في Vue.js؟", answer: "وحدات مستقلة تُشكل الواجهة." },
      { question: "كيف تُستخدم directives؟", answer: "باستخدام v-bind أو v-if للتحكم في العرض." },
      { question: "ما هي data binding؟", answer: "ربط البيانات بالواجهة باستخدام v-model." },
      { question: "كيف يعمل Vue Router؟", answer: "يُنشئ تطبيقات متعددة الصفحات." },
      { question: "ما هي reactivity؟", answer: "تحديث الواجهة تلقائيًا عند تغيير البيانات." },
      { question: "كيف تُنشأ reusable UI؟", answer: "بإنشاء مكونات يمكن استخدامها متعددة المرات." },
      { question: "كيف تُدمج APIs؟", answer: "باستخدام axios أو fetch لجلب البيانات." },
      { question: "ما هي computed properties؟", answer: "قيم محسوبة تعتمد على البيانات." },
      { question: "كيف تُنشأ component؟", answer: "بتعريف كائن باستخدام Vue.component." },
      { question: "ما هي event handling؟", answer: "التعامل مع الأحداث باستخدام v-on." },
      { question: "كيف تُعرض قائمة؟", answer: "باستخدام v-for لتكرار البيانات." },
      { question: "ما هي Vue CLI؟", answer: "أداة لإنشاء وإدارة المشاريع." },
      { question: "كيف تُستخدم slots؟", answer: "لإدراج محتوى ديناميكي في المكونات." },
      { question: "ما هي watchers؟", answer: "دوال تتفاعل مع تغييرات البيانات." },
      { question: "كيف تُنشأ transition؟", answer: "باستخدام <transition> لإضافة رسوم متحركة." },
      { question: "ما هي conditional rendering؟", answer: "عرض العناصر بناءً على شروط باستخدام v-if." },
      { question: "كيف تُستخدم props؟", answer: "لتمرير البيانات إلى المكونات." },
      { question: "ما هي lifecycle hooks؟", answer: "دوال مثل created وmounted لمراحل المكون." },
      { question: "كيف تُستخدم Vue Devtools؟", answer: "لتصحيح وتتبع حالة التطبيق." },
      { question: "ما هي dynamic components؟", answer: "مكونات تُحدد ديناميكيًا باستخدام <component>." }
    ]
  },
  {
    title: "Nuxt.js",
    icon: <Server className="w-5 h-5 text-green-400" />,
    questions: [
      { question: "ما هو Nuxt.js؟", answer: "إطار عمل مبني على Vue.js لتطبيقات محسنة." },
      { question: "ما هي file-based routing؟", answer: "نظام توجيه يعتمد على هيكل الملفات." },
      { question: "كيف يعمل SSR؟", answer: "يُنشئ الصفحات على الخادم لكل طلب." },
      { question: "ما هي SSG؟", answer: "إنشاء صفحات ثابتة أثناء البناء." },
      { question: "كيف تُنشأ dynamic route؟", answer: "بإنشاء ملف مثل _id.vue." },
      { question: "ما هي asyncData؟", answer: "دالة لجلب البيانات قبل عرض الصفحة." },
      { question: "كيف تُحسن SEO؟", answer: "باستخدام meta tags وSSR أو SSG." },
      { question: "ما هي Nuxt middleware؟", answer: "وظائف تُنفذ قبل عرض الصفحات." },
      { question: "كيف تُدمج APIs؟", answer: "باستخدام $axios أو fetch في asyncData." },
      { question: "ما هي plugins؟", answer: "ملفات لإضافة وظائف إضافية للتطبيق." },
      { question: "كيف تُنشر تطبيق Nuxt.js؟", answer: "باستخدام Vercel أو Netlify." },
      { question: "ما هي modules؟", answer: "إضافات جاهزة لتحسين وظائف Nuxt." },
      { question: "كيف تُستخدم Vuex؟", answer: "لإدارة الحالة العامة في التطبيق." },
      { question: "ما هي layouts؟", answer: "قوالب تُحدد هيكلية الصفحات." },
      { question: "كيف تُنشأ layout؟", answer: "بإنشاء ملف في مجلد layouts." },
      { question: "ما هي error handling؟", answer: "إنشاء صفحة خطأ مثل error.vue." },
      { question: "كيف تُستخدم environment variables؟", answer: "بتعريفها في nuxt.config.js." },
      { question: "ما هي static generation؟", answer: "إنشاء صفحات ثابتة باستخدام nuxt generate." },
      { question: "كيف تُحسن الأداء؟", answer: "باستخدام lazy loading وSSG." },
      { question: "ما هي Nuxt Devtools؟", answer: "أداة لتصحيح وتتبع التطبيق." }
    ]
  },
  {
    title: "TypeScript Basics",
    icon: <Type className="w-5 h-5 text-blue-400" />,
    questions: [
      { question: "ما هو TypeScript؟", answer: "لغة تضيف أنواعًا ثابتة إلى JavaScript." },
      { question: "ما هي types؟", answer: "أنواع بيانات مثل string أو number." },
      { question: "كيف تُستخدم interfaces؟", answer: "لتعريف هيكلية الكائنات." },
      { question: "ما هي type annotations؟", answer: "تحديد نوع المتغير مثل let name: string." },
      { question: "كيف يعمل union types؟", answer: "يسمح بأكثر من نوع مثل string | number." },
      { question: "ما هي generics؟", answer: "أنواع ديناميكية لإنشاء مكونات مرنة." },
      { question: "كيف يعمل type inference؟", answer: "يحدد الأنواع تلقائيًا بدون تعريف." },
      { question: "ما هي tsconfig.json؟", answer: "ملف لتكوين إعدادات TypeScript." },
      { question: "كيف تُعالج الأخطاء؟", answer: "باستخدام أدوات مثل VS Code وfsc." },
      { question: "ما هي enums؟", answer: "مجموعة قيم ثابتة مثل enum Color {Red, Blue}." },
      { question: "كيف تُستخدم type assertion؟", answer: "بتحديد النوع يدويًا باستخدام as." },
      { question: "ما هي never type؟", answer: "نوع للدوال التي لا تُرجع قيمة أبدًا." },
      { question: "كيف تُستخدم unknown؟", answer: "نوع أكثر أمانًا من any للقيم غير المعروفة." },
      { question: "ما هي type guards؟", answer: "تحقق من الأنواع باستخدام typeof أو instanceof." },
      { question: "كيف تُنشأ type alias؟", answer: "بتعريف نوع جديد باستخدام type." },
      { question: "ما هي declaration files؟", answer: "ملفات .d.ts لتعريف أنواع المكتبات." },
      { question: "كيف تُستخدم modules؟", answer: "باستخدام import وexport لتنظيم الكود." },
      { question: "ما هي intersection types؟", answer: "دمج أنواع متعددة باستخدام &." },
      { question: "كيف تُستخدم any؟", answer: "للسماح بأي نوع، لكن يُفضل تجنبه." },
      { question: "ما هي mapped types؟", answer: "إنشاء أنواع جديدة من أنواع موجودة." }
    ]
  },
  {
    title: "TypeScript with Frameworks",
    icon: <Blocks className="w-5 h-5 text-cyan-300" />,
    questions: [
      { question: "كيف تُستخدم TypeScript مع React؟", answer: "بتعريف أنواع props وstate." },
      { question: "ما هي typing hooks؟", answer: "تحديد أنواع لـ useState وuseEffect." },
      { question: "كيف تُعرف prop types؟", answer: "باستخدام interface أو type لـ props." },
      { question: "كيف تُعالج event types؟", answer: "باستخدام أنواع مثل React.MouseEvent." },
      { question: "كيف تُدمج مع Redux؟", answer: "بتعريف أنواع لـ actions وstate." },
      { question: "ما هي type safety؟", answer: "ضمان عدم وجود أخطاء أنواع أثناء التطوير." },
      { question: "كيف تُستخدم مع Angular؟", answer: "بتعريف أنواع لـ services وcomponents." },
      { question: "كيف تُدمج APIs؟", answer: "بتعريف أنواع للردود باستخدام interfaces." },
      { question: "كيف تُستخدم مع Vue.js؟", answer: "بتعريف أنواع لـ props وdata." },
      { question: "ما هي generic components؟", answer: "مكونات تستخدم generics لتحديد الأنواع." },
      { question: "كيف تُعرف state types؟", answer: "باستخدام interface لتحديد هيكلية الحالة." },
      { question: "ما هي discriminated unions؟", answer: "أنواع تستخدم خاصية مشتركة للتفريق." },
      { question: "كيف تُحسن الأداء؟", answer: "بتقليل استخدام any وتحسين type inference." },
      { question: "كيف تُستخدم مع NgRx؟", answer: "بتعريف أنواع لـ actions وselectors." },
      { question: "ما هي conditional types؟", answer: "أنواع تعتمد على شروط مثل T extends U." },
      { question: "كيف تُعالج errors؟", answer: "باستخدام try/catch مع أنواع الأخطاء." },
      { question: "كيف تُستخدم utility types؟", answer: "مثل Partial وPick لتعديل الأنواع." },
      { question: "ما هي module augmentation؟", answer: "تعديل أنواع المكتبات الخارجية." },
      { question: "كيف تُدمج مع Pinia؟", answer: "بتعريف أنواع لـ store وactions." },
      { question: "كيف تُستخدم event handlers؟", answer: "بتعريف أنواع الأحداث مثل ChangeEvent." }
    ]
  },
  {
    title: "State Management Tools",
    icon: <Workflow className="w-5 h-5 text-purple-300" />,
    questions: [
      { question: "ما هو Redux Toolkit؟", answer: "مكتبة لتبسيط إدارة الحالة في React." },
      { question: "كيف يعمل Zustand؟", answer: "مكتبة خفيفة لإدارة الحالة في React." },
      { question: "ما هي NgRx؟", answer: "مكتبة لإدارة الحالة في Angular بنمط Redux." },
      { question: "كيف يعمل Pinia؟", answer: "مكتبة لإدارة الحالة في Vue.js." },
      { question: "ما هي global state؟", answer: "حالة مشتركة بين مكونات التطبيق." },
      { question: "كيف تُعالج async actions؟", answer: "باستخدام middleware مثل redux-thunk." },
      { question: "كيف تُدمج مع React؟", answer: "باستخدام react-redux وProvider." },
      { question: "ما هي actions؟", answer: "كائنات تصف التغييرات في الحالة." },
      { question: "كيف يعمل reducer؟", answer: "يحدد كيفية تحديث الحالة بناءً على actions." },
      { question: "ما هي store؟", answer: "مخزن مركزي للحالة العامة." },
      { question: "كيف تُستخدم selectors؟", answer: "لاستخراج البيانات من الـ store." },
      { question: "ما هي createSlice؟", answer: "دالة في Redux Toolkit تُنشئ reducer وactions." },
      { question: "كيف تُدمج مع Angular؟", answer: "باستخدام NgRx/store وeffects." },
      { question: "كيف تُستخدم Pinia مع Vue؟", answer: "بتعريف store باستخدام defineStore." },
      { question: "ما هي devTools؟", answer: "أدوات لتتبع الحالة والإجراءات." },
      { question: "كيف تُحسن الأداء؟", answer: "باستخدام memoized selectors." },
      { question: "ما هي effects في NgRx؟", answer: "لتعامل مع التأثيرات الجانبية." },
      { question: "كيف تُنشأ action؟", answer: "بتعريف نوع وعبء في Redux أو NgRx." },
      { question: "ما هي middleware؟", answer: "وظائف تُنفذ بين dispatch وreducer." },
      { question: "كيف تُدمج مع Vuex؟", answer: "باستخدام Vuex store في Vue 2." }
    ]
  },
  {
    title: "Unit Testing",
    icon: <TestTube className="w-5 h-5 text-red-300" />,
    questions: [
      { question: "ما هو unit testing؟", answer: "اختبار وحدات صغيرة من الكود بشكل مستقل." },
      { question: "ما هي Jest؟", answer: "إطار عمل لكتابة اختبارات JavaScript." },
      { question: "كيف تُختبر مكونات React؟", answer: "باستخدام @testing-library/react." },
      { question: "كيف تُختبر Angular؟", answer: "باستخدام TestBed وJasmine." },
      { question: "كيف تُختبر Vue.js؟", answer: "باستخدام @vue/test-utils." },
      { question: "ما هي mocks؟", answer: "كائنات مزيفة تُحاكي سلوك الوحدات." },
      { question: "كيف تُنشأ mock؟", answer: "باستخدام jest.fn() أو spies." },
      { question: "ما هي test coverage؟", answer: "نسبة الكود المختبَر في الاختبارات." },
      { question: "كيف تُعالج edge cases؟", answer: "بكتابة اختبارات للحالات الحدية." },
      { question: "ما هي snapshot testing؟", answer: "مقارنة مخرجات المكونات مع لقطة." },
      { question: "كيف تُدمج مع CI/CD؟", answer: "بإعداد اختبارات في GitHub Actions." },
      { question: "ما هي spies؟", answer: "دوال تتتبع استدعاءات الدوال." },
      { question: "كيف تُختبر async functions؟", answer: "باستخدام async/await أو .resolves." },
      { question: "ما هي testing libraries؟", answer: "مكتبات مثل React Testing Library لتسهيل الاختبار." },
      { question: "كيف تُختبر APIs؟", answer: "بمحاكاة الطلبات باستخدام msw." },
      { question: "ما هي describe؟", answer: "تُستخدم لتجميع الاختبارات ذات الصلة." },
      { question: "كيف تُستخدم beforeEach؟", answer: "لإعداد بيئة الاختبار قبل كل اختبار." },
      { question: "ما هي test-driven development؟", answer: "كتابة الاختبارات قبل الكود." },
      { question: "كيف تُختبر forms؟", answer: "بمحاكاة إدخال المستخدم والتحقق." },
      { question: "ما هي assertions؟", answer: "تأكيدات مثل expect() للتحقق من النتائج." }
    ]
  },
  {
    title: "CI/CD + Hosting",
    icon: <Rocket className="w-5 h-5 text-green-300" />,
    questions: [
      { question: "ما هو CI/CD؟", answer: "عمليات أتمتة للاختبار والنشر." },
      { question: "كيف يعمل GitHub Actions؟", answer: "يُنشئ خطوط أنابيب للاختبار والنشر." },
      { question: "كيف تُنشر على Vercel؟", answer: "بربط المستودع وتكوين الإعدادات." },
      { question: "كيف تُنشر على Netlify؟", answer: "بربط المستودع وتحديد أمر البناء." },
      { question: "ما هي CI/CD pipeline؟", answer: "سلسلة خطوات للاختبار والنشر." },
      { question: "كيف تُحسن build times؟", answer: "بتقليل الموارد وتحسين الأوامر." },
      { question: "ما هي environment variables؟", answer: "متغيرات تُستخدم لتأمين الإعدادات." },
      { question: "كيف تُراقب الأداء؟", answer: "باستخدام أدوات مثل Vercel Analytics." },
      { question: "ما هي automated testing؟", answer: "تشغيل الاختبارات تلقائيًا في CI." },
      { question: "كيف تُستخدم workflows؟", answer: "بتعريف ملفات YAML في .github/workflows." },
      { question: "ما هي deployment rollback؟", answer: "الرجوع إلى إصدار سابق عند الفشل." },
      { question: "كيف تُعالج الأخطاء؟", answer: "بمراقبة السجلات وإعداد التنبيهات." },
      { question: "ما هي blue-green deployment؟", answer: "نشر إصدار جديد مع الاحتفاظ بالقديم." },
      { question: "كيف تُدمج Docker؟", answer: "بإنشاء صور للتطبيق ونشرها." },
      { question: "ما هي caching؟", answer: "تخزين الموارد لتسريع البناء." },
      { question: "كيف تُستخدم secrets؟", answer: "لتخزين بيانات حساسة في GitHub." },
      { question: "ما هي preview deployments؟", answer: "نشر مؤقت لمعاينة التغييرات." },
      { question: "كيف تُحسن SEO؟", answer: "باستخدام SSG وmeta tags." },
      { question: "ما هي serverless؟", answer: "نشر التطبيقات بدون إدارة خوادم." },
      { question: "كيف تُستخدم CDN؟", answer: "لتوزيع المحتوى بسرعة عبر العالم." }
    ]
  },
  {
    title: "Material-UI",
    icon: <Box className="w-5 h-5 text-teal-300" />,
    questions: [
      { question: "ما هي Material-UI؟", answer: "مكتبة مكونات React تتبع Material Design." },
      { question: "كيف تُستخدم المكونات؟", answer: "باستيرادها مثل Button من @mui/material." },
      { question: "ما هي theming؟", answer: "تخصيص الأنماط باستخدام ThemeProvider." },
      { question: "كيف تُنشأ responsive design؟", answer: "باستخدام Grid وbreakpoints." },
      { question: "ما هي accessibility؟", answer: "ضمان توافق المكونات مع معايير WCAG." },
      { question: "كيف تُدمج مع React؟", answer: "بتثبيت @mui/material واستيراد المكونات." },
      { question: "ما هي styled API؟", answer: "تخصيص المكونات باستخدام styled()." },
      { question: "كيف تُحسن الأداء؟", answer: "باستخدام lazy loading للمكونات." },
      { question: "ما هي sx prop؟", answer: "خاصية لتطبيق أنماط مباشرة على المكونات." },
      { question: "كيف تُنشأ custom theme؟", answer: "بتعريف كائن theme وتمريره إلى ThemeProvider." },
      { question: "ما هي Grid؟", answer: "نظام تخطيط متجاوب لتنظيم المكونات." },
      { question: "كيف تُستخدم icons؟", answer: "باستيرادها من @mui/icons-material." },
      { question: "ما هي typography؟", answer: "مكون لتنسيق النصوص بشكل متسق." },
      { question: "كيف تُنشأ form؟", answer: "باستخدام TextField وFormControl." },
      { question: "ما هي AppBar؟", answer: "مكون لإنشاء شريط التنقل العلوي." },
      { question: "كيف تُعالج الأحداث؟", answer: "باستخدام props مثل onClick في المكونات." },
      { question: "ما هي Drawer؟", answer: "مكون لإنشاء قائمة جانبية قابلة للسحب." },
      { question: "كيف تُستخدم transitions؟", answer: "باستخدام Collapse أو Fade." },
      { question: "ما هي Stack؟", answer: "مكون لتجميع العناصر بشكل متتالي." },
      { question: "كيف تُنشأ modal؟", answer: "باستخدام Modal أو Dialog." }
    ]
  },
  {
    title: "Framer Motion",
    icon: <Palette className="w-5 h-5 text-purple-400" />,
    questions: [
      { question: "ما هي Framer Motion؟", answer: "مكتبة لإنشاء رسوم متحركة في React." },
      { question: "كيف تُستخدم motion components؟", answer: "باستيراد motion.div وإضافة props." },
      { question: "ما هي transitions؟", answer: "خصائص تحدد سلوك الرسوم المتحركة." },
      { question: "كيف تُنشأ animation؟", answer: "بتحديد animate وinitial في motion component." },
      { question: "ما هي gesture animations؟", answer: "رسوم متحركة تستجيب لإيماءات مثل السحب." },
      { question: "كيف تُنشأ complex sequence؟", answer: "باستخدام useAnimationControls." },
      { question: "كيف تُحسن الأداء؟", answer: "بتقليل التحديثات غير الضرورية." },
      { question: "كيف تُدمج مع React؟", answer: "بتثبيت framer-motion واستيراد motion." },
      { question: "ما هي variants؟", answer: "مجموعات من الحالات لتسهيل التحريك." },
      { question: "كيف تُستخدم whileHover؟", answer: "لتطبيق رسوم متحركة عند التمرير." },
      { question: "ما هي whileTap؟", answer: "رسوم متحركة عند النقر على العنصر." },
      { question: "كيف تُستخدم drag؟", answer: "بتفعيل خاصية drag في motion component." },
      { question: "ما هي useMotionValue؟", answer: "Hook لتتبع قيم التحريك ديناميكيًا." },
      { question: "كيف تُنشأ transition؟", answer: "بتحديد type وduration في transition." },
      { question: "ما هي exit animations؟", answer: "رسوم متحركة عند إزالة المكون." },
      { question: "كيف تُستخدم AnimatePresence؟", answer: "لإدارة رسوم إزالة المكونات." },
      { question: "ما هي layout animations؟", answer: "تحريك التغييرات في التخطيط تلقائيًا." },
      { question: "كيف تُنشأ stagger effect؟", answer: "بتحديد تأخير للعناصر في variants." },
      { question: "كيف تُعالج الأحداث؟", answer: "باستخدام onAnimationComplete." },
      { question: "ما هي keyframes؟", answer: "تحديد مراحل متعددة للرسوم المتحركة." }
    ]
  },
  {
    title: "Formik",
    icon: <FormInput className="w-5 h-5 text-blue-400" />,
    questions: [
      { question: "ما هي Formik؟", answer: "مكتبة لإدارة النماذج في React." },
      { question: "كيف تُنشأ form؟", answer: "باستخدام <Formik> وinitialValues." },
      { question: "ما هي form validation؟", answer: "التحقق من الإدخال باستخدام validationSchema." },
      { question: "كيف تُدمج Yup؟", answer: "بتعريف مخطط Yup في validationSchema." },
      { question: "ما هي form state؟", answer: "حالة الإدخال مثل values وerrors." },
      { question: "كيف تُعالج form submission؟", answer: "باستخدام onSubmit في Formik." },
      { question: "ما هي useFormik؟", answer: "Hook لإدارة النماذج برمجيًا." },
      { question: "كيف تُحسن الأداء؟", answer: "بتقليل التحديثات باستخدام enableReinitialize." },
      { question: "ما هي Field؟", answer: "مكون لإنشاء حقول إدخال مرتبطة." },
      { question: "كيف تُستخدم ErrorMessage؟", answer: "لعرض رسائل الخطأ للحقول." },
      { question: "ما هي touched؟", answer: "حالة تُشير إلى تفاعل المستخدم مع الحقل." },
      { question: "كيف تُنشأ custom validation؟", answer: "بكتابة دالة validate في Formik." },
      { question: "ما هي Form؟", answer: "مكون يُغلف النموذج بدلاً من <form>." },
      { question: "كيف تُدمج مع React؟", answer: "بتثبيت formik واستيراد مكوناته." },
      { question: "ما هي handleChange؟", answer: "دالة تُحدث قيم الحقول تلقائيًا." },
      { question: "كيف تُعالج errors؟", answer: "باستخدام errors وtouched في المكونات." },
      { question: "ما هي handleSubmit؟", answer: "دالة تُنفذ عند إرسال النموذج." },
      { question: "كيف تُنشأ dependent fields؟", answer: "بتحديث الحقول بناءً على قيم أخرى." },
      { question: "ما هي resetForm؟", answer: "دالة لإعادة تعيين النموذج." },
      { question: "كيف تُستخدم setFieldValue؟", answer: "لتحديث قيمة حقل برمجيًا." }
    ]
  },
  {
    title: "Chakra UI",
    icon: <Box className="w-5 h-5 text-blue-300" />,
    questions: [
      { question: "ما هي Chakra UI؟", answer: "مكتبة مكونات React تركز على البساطة." },
      { question: "كيف تُستخدم المكونات؟", answer: "باستيرادها مثل Button من @chakra-ui/react." },
      { question: "ما هي theming؟", answer: "تخصيص الأنماط باستخدام extendTheme." },
      { question: "كيف تُنشأ responsive design؟", answer: "باستخدام useBreakpointValue وGrid." },
      { question: "ما هي accessibility؟", answer: "ضمان توافق المكونات مع معايير WCAG." },
      { question: "كيف تُدمج مع React؟", answer: "بتثبيت @chakra-ui/react وChakraProvider." },
      { question: "ما هي style props؟", answer: "خصائص مثل bg وcolor لتطبيق الأنماط." },
      { question: "كيف تُحسن الأداء؟", answer: "بتحميل المكونات حسب الحاجة." },
      { question: "ما هي Box؟", answer: "مكون أساسي يُستخدم كغلاف مرن." },
      { question: "كيف تُنشأ custom theme؟", answer: "بتعريف theme وتمريره إلى ChakraProvider." },
      { question: "ما هي Stack؟", answer: "مكون لتجميع العناصر أفقيًا أو رأسيًا." },
      { question: "كيف تُستخدم icons؟", answer: "باستيرادها من @chakra-ui/icons." },
      { question: "ما هي FormControl؟", answer: "مكون لإدارة حقول النماذج." },
      { question: "كيف تُنشأ modal؟", answer: "باستخدام Modal وModalOverlay." },
      { question: "ما هي useToast؟", answer: "Hook لعرض إشعارات مؤقتة." },
      { question: "كيف تُعالج الأحداث؟", answer: "باستخدام props مثل onClick في المكونات." },
      { question: "ما هي Drawer؟", answer: "مكون لإنشاء قائمة جانبية." },
      { question: "كيف تُستخدم transitions؟", answer: "باستخدام Slide أو Fade." },
      { question: "ما هي color mode؟", answer: "تبديل بين الوضع الفاتح والداكن." },
      { question: "كيف تُنشأ form؟", answer: "باستخدام Input وFormControl." }
    ]
  },
  {
    title: "Styled-Components",
    icon: <Box className="w-5 h-5 text-pink-300" />,
    questions: [
      { question: "ما هي Styled-Components؟", answer: "مكتبة لكتابة CSS داخل JavaScript." },
      { question: "كيف تُنشأ styled component؟", answer: "باستخدام styled.div`` لتحديد الأنماط." },
      { question: "ما هي theming؟", answer: "تخصيص الأنماط باستخدام ThemeProvider." },
      { question: "كيف تُطبق dynamic styling؟", answer: "باستخدام props في الأنماط." },
      { question: "كيف تُحسن الأداء؟", answer: "بتقليل إعادة التحديث باستخدام memo." },
      { question: "كيف تُدمج مع React؟", answer: "بتثبيت styled-components واستيراده." },
      { question: "ما هي reusable styles؟", answer: "أنماط يمكن استخدامها في مكونات متعددة." },
      { question: "كيف تُستخدم CSS؟", answer: "بكتابة أنماط CSS داخل template literals." },
      { question: "ما هي global styles؟", answer: "أنماط تُطبق على التطبيق باستخدام createGlobalStyle." },
      { question: "كيف تُعالج الأحداث؟", answer: "باستخدام props في المكونات المنسقة." },
      { question: "ما هي keyframes؟", answer: "تحديد رسوم متحركة باستخدام keyframes." },
      { question: "كيف تُنشأ animation؟", answer: "بتعريف keyframes وتطبيقها في الأنماط." },
      { question: "ما هي attrs؟", answer: "إضافة سمات HTML إلى المكونات المنسقة." },
      { question: "كيف تُستخدم nested styles؟", answer: "بكتابة أنماط داخل الأنماط مثل CSS." },
      { question: "ما هي shouldForwardProp؟", answer: "تصفية props غير المرغوبة." },
      { question: "كيف تُدمج مع TypeScript؟", answer: "بتعريف أنواع لـ props في المكونات." },
      { question: "ما هي CSS helpers؟", answer: "دوال مثل css لإنشاء أنماط ديناميكية." },
      { question: "كيف تُنشأ theme؟", answer: "بتعريف كائن theme وتمريره إلى ThemeProvider." },
      { question: "ما هي pseudo-classes؟", answer: "أنماط مثل :hover تُطبق في styled-components." },
      { question: "كيف تُستخدم media queries؟", answer: "بكتابتها داخل الأنماط للتجاوب." }
    ]
  },
  {
    title: "Axios",
    icon: <Box className="w-5 h-5 text-green-300" />,
    questions: [
      { question: "ما هي Axios؟", answer: "مكتبة لإجراء طلبات HTTP في الويب." },
      { question: "كيف تُجري طلب GET؟", answer: "باستخدام axios.get(url)." },
      { question: "كيف تُجري طلب POST؟", answer: "باستخدام axios.post(url, data)." },
      { question: "ما هي response handling؟", answer: "معالجة الردود باستخدام .then أو async/await." },
      { question: "كيف تُعالج الأخطاء؟", answer: "باستخدام .catch أو try/catch." },
      { question: "ما هي interceptors؟", answer: "وظائف تُعدل الطلبات أو الردود." },
      { question: "كيف تُنشأ instance؟", answer: "باستخدام axios.create() لتكوين مخصص." },
      { question: "كيف تُدمج مع React؟", answer: "بتنفيذ الطلبات داخل useEffect." },
      { question: "ما هي headers؟", answer: "رؤوس الطلب مثل Authorization." },
      { question: "كيف تُستخدم query params؟", answer: "بإضافتها في params أو URL." },
      { question: "ما هي cancel token؟", answer: "إلغاء الطلبات باستخدام CancelToken." },
      { question: "كيف تُحسن الأداء؟", answer: "بتقليل الطلبات واستخدام caching." },
      { question: "كيف تُدمج مع Angular؟", answer: "بتنفيذ الطلبات في services." },
      { question: "كيف تُدمج مع Vue.js؟", answer: "بتنفيذ الطلبات في methods أو asyncData." },
      { question: "ما هي defaults؟", answer: "إعدادات افتراضية لتكوين Axios." },
      { question: "كيف تُجري concurrent requests؟", answer: "باستخدام axios.all()." },
      { question: "ما هي transformRequest؟", answer: "تعديل البيانات قبل إرسال الطلب." },
      { question: "كيف تُستخدم FormData؟", answer: "لإرسال ملفات أو بيانات معقدة." },
      { question: "ما هي responseType؟", answer: "تحديد نوع الرد مثل json أو blob." },
      { question: "كيف تُستخدم timeout؟", answer: "بتحديد مهلة للطلب في التكوين." }
    ]
  },
  {
    title: "React Query",
    icon: <Box className="w-5 h-5 text-yellow-300" />,
    questions: [
      { question: "ما هي React Query؟", answer: "مكتبة لإدارة البيانات في React." },
      { question: "كيف تُجري data fetching؟", answer: "باستخدام useQuery لجلب البيانات." },
      { question: "ما هي caching؟", answer: "تخزين البيانات مؤقتًا لتقليل الطلبات." },
      { question: "كيف تُنشأ mutation؟", answer: "باستخدام useMutation لتعديل البيانات." },
      { question: "ما هي query invalidation؟", answer: "إبطال البيانات لتحديثها." },
      { question: "كيف تُحسن API calls؟", answer: "بتفعيل caching وrefetching ذكي." },
      { question: "كيف تُدمج مع React؟", answer: "بتثبيت @tanstack/react-query." },
      { question: "ما هي loading states؟", answer: "حالات مثل isLoading لإدارة التحميل." },
      { question: "كيف تُعالج الأخطاء؟", answer: "باستخدام error في useQuery." },
      { question: "ما هي query keys؟", answer: "معرفات فريدة لتخزين البيانات." },
      { question: "كيف تُستخدم useQueries؟", answer: "لإجراء استعلامات متعددة دفعة واحدة." },
      { question: "ما هي refetch؟", answer: "إعادة جلب البيانات يدويًا أو تلقائيًا." },
      { question: "كيف تُنشأ optimistic updates؟", answer: "بتحديث الواجهة قبل تأكيد المصدر." },
      { question: "ما هي staleTime؟", answer: "مدة صلاحية البيانات في الـ cache." },
      { question: "كيف تُستخدم cacheTime؟", answer: "لتحديد مدة بقاء البيانات في الـ cache." },
      { question: "ما هي enabled option؟", answer: "تفعيل أو تعطيل الاستعلام تلقائيًا." },
      { question: "كيف تُدمج مع Axios؟", answer: "بتنفيذ طلبات Axios داخل useQuery." },
      { question: "ما هي useInfiniteQuery؟", answer: "لجلب البيانات بشكل تدريجي مثل التمرير." },
      { question: "كيف تُعالج pagination؟", answer: "باستخدام useInfiniteQuery أو query params." },
      { question: "ما هي Devtools؟", answer: "أداة لتتبع الاستعلامات والـ cache." }
    ]
  }
]

export default function QuestionsFrontEnd (){
  const [selectedSkill, setSelectedSkill] = useState(0); // المهارة المختارة
  const [currentQuestion, setCurrentQuestion] = useState(0); // السؤال الحالي
  const [showAnswer, setShowAnswer] = useState(false); // حالة إظهار/إخفاء الإجابة

  const currentSkill = quizData[selectedSkill];
  const questions = currentSkill.questions;
  const totalQuestions = questions.length;

  // التنقل للسؤال التالي
  const nextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % totalQuestions);
    setShowAnswer(false); // إخفاء الإجابة عند التنقل
  };

  // التنقل للسؤال السابق
  const prevQuestion = () => {
    setCurrentQuestion((prev) => (prev - 1 + totalQuestions) % totalQuestions);
    setShowAnswer(false); // إخفاء الإجابة عند التنقل
  };

  // تبديل إظهار/إخفاء الإجابة
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  // تبديل المهارة
  const changeSkill = (index) => {
    setSelectedSkill(index);
    setCurrentQuestion(0); // إعادة تعيين السؤال للأول
    setShowAnswer(false); // إخفاء الإجابة
  };

  const bgColor = useContext(BgContext)

  return (
    <div className={`min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 ${bgColor.color}/90`}>
      {/* قائمة المهارات */}
      <div className="mb-6 flex flex-wrap gap-4 justify-center">
        {quizData.map((skill, index) => (
          <motion.button
            key={index}
            onClick={() => changeSkill(index)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              selectedSkill === index
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-800"
            } shadow-md hover:bg-blue-400 transition-colors`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill.icon}
            <span>{skill.title}</span>
          </motion.button>
        ))}
      </div>

      {/* كارت السؤال */}
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            {currentSkill.icon}
            {currentSkill.title}
          </h2>
          <span className="text-gray-500">
            {currentQuestion + 1} / {totalQuestions}
          </span>
        </div>

        {/* السؤال */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            <p className="text-lg font-semibold" style={{direction: "rtl"}}>
              {questions[currentQuestion].question}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* الإجابة */}
        <AnimatePresence>
          {showAnswer && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4 p-4 bg-gray-100 rounded-lg"
            >
              <p className="text-gray-700" style={{direction: "rtl"}}>
                {questions[currentQuestion].answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* الأزرار */}
        <div className="flex justify-between items-center">
          <motion.button
            onClick={prevQuestion}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={toggleAnswer}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 hover:bg-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAnswer ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
            <span>{showAnswer ? "إخفاء الإجابة" : "عرض الإجابة"}</span>
          </motion.button>

          <motion.button
            onClick={nextQuestion}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

