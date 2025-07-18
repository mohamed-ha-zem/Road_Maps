import { Code, TestTube, Rocket, Box, Blocks, FileCode, Workflow } from "lucide-react";
import React from "react";
import Roadmap from "../Components/RoadMap";

const sections = [
  {
    title: "الأساسيات",
    icon: <Code className="w-6 h-6 text-amber-400" />,
    children: [
      {
        title: "Dart",
        icon: <FileCode className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand Dart syntax and variables",
          "Master functions and scope",
          "Work with object-oriented programming",
          "Use collections (lists, maps)",
          "Implement asynchronous programming",
          "Handle null safety",
          "Build basic Dart apps"
        ],
        description: [
          "Dart هي لغة برمجة مفتوحة المصدر تُستخدم بشكل رئيسي مع إطار Flutter لتطوير تطبيقات الموبايل.",
          "تتميز بسهولة التعلم وتدعم كتابة كود نظيف وفعال.",
          "تدعم البرمجة الكائنية (OOP) مثل الكائنات والوراثة.",
          "توفر ميزات مثل null safety لتقليل الأخطاء الشائعة.",
          "تُستخدم للتعامل مع العمليات غير المتزامنة باستخدام async/await.",
          "تدعم إنشاء تطبيقات موبايل متعددة المنصات بكفاءة.",
          "تُعتبر أساسية لتطوير تطبيقات Flutter بأداء عالٍ.",
          "تدعم المجموعات مثل القوائم والخرائط لإدارة البيانات.",
          "تُسهل التكامل مع واجهات برمجة التطبيقات (APIs).",
          "تُستخدم لبناء تطبيقات موبايل مثل التجارة الإلكترونية وتطبيقات التواصل.",
          "توفر أدوات تصحيح أخطاء قوية مع بيئات التطوير مثل VS Code."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Dart Official Docs", url: "https://dart.dev/guides" },
            { name: "Flutter Dev", url: "https://flutter.dev/learn" }
          ],
          paid: [
            { name: "Udemy Dart Course", url: "https://www.udemy.com/topic/dart/" },
            { name: "Pluralsight Dart", url: "https://www.pluralsight.com/courses/dart-fundamentals" }
          ]
        }
      },
      {
        title: "Kotlin",
        icon: <FileCode className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "Understand Kotlin syntax",
          "Master coroutines for async programming",
          "Work with classes and objects",
          "Use null safety features",
          "Implement functional programming",
          "Handle collections",
          "Build basic Android apps"
        ],
        description: [
          "Kotlin هي لغة برمجة حديثة تُستخدم لتطوير تطبيقات Android بكفاءة.",
          "تتميز بميزة null safety لتقليل أخطاء المؤشرات الفارغة.",
          "تدعم البرمجة الوظيفية مع ميزات مثل lambda expressions.",
          "تُستخدم coroutines للتعامل مع العمليات غير المتزامنة بسهولة.",
          "تُسهل بناء تطبيقات Android مع أداء عالٍ وكود نظيف.",
          "تدعم الكائنات والوراثة لتطوير تطبيقات معقدة.",
          "تُستخدم لبناء تطبيقات مثل تطبيقات الألعاب والتجارة الإلكترونية.",
          "توفر أدوات مثل Android Studio لتجربة تطوير سلسة.",
          "تُعتبر اللغة المفضلة لتطوير Android من قِبل Google.",
          "تدعم التكامل مع مكتبات Java للاستفادة من النظام البيئي.",
          "تُقلل تعقيد الكود مقارنة بـ Java."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Kotlin Official Docs", url: "https://kotlinlang.org/docs/home.html" },
            { name: "Android Developers", url: "https://developer.android.com/kotlin" }
          ],
          paid: [
            { name: "Udemy Kotlin Course", url: "https://www.udemy.com/topic/kotlin/" },
            { name: "Pluralsight Kotlin", url: "https://www.pluralsight.com/courses/kotlin-fundamentals" }
          ]
        }
      },
      {
        title: "Swift",
        icon: <FileCode className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "Understand Swift syntax",
          "Work with optionals",
          "Implement protocols and extensions",
          "Use SwiftUI for UI",
          "Handle memory management",
          "Build basic iOS apps",
          "Work with async/await"
        ],
        description: [
          "Swift هي لغة برمجة قوية تُستخدم لتطوير تطبيقات iOS وmacOS.",
          "تتميز بميزة optionals لإدارة القيم الفارغة بأمان.",
          "تدعم البرمجة الكائنية والوظيفية مع ميزات مثل protocols.",
          "تُستخدم SwiftUI لبناء واجهات مستخدم ديناميكية ومتجاوبة.",
          "توفر إدارة ذاكرة تلقائية (ARC) لتقليل أخطاء الذاكرة.",
          "تُستخدم لبناء تطبيقات iullarOS مثل تطبيقات التواصل والألعاب.",
          "تدعم العمليات غير المتزامنة باستخدام async/await.",
          "توفر أدوات مثل Xcode لتجربة تطوير متكاملة.",
          "تُعتبر اللغة المفضلة من Apple لتطوير تطبيقات iOS.",
          "تدعم التكامل مع مكتبات Objective-C.",
          "تُسهل كتابة كود آمن وسهل الصيانة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Swift Official Docs", url: "https://docs.swift.org/swift-book/" },
            { name: "Apple Developer", url: "https://developer.apple.com/swift/" }
          ],
          paid: [
            { name: "Udemy Swift Course", url: "https://www.udemy.com/topic/swift/" },
            { name: "Pluralsight Swift", url: "https://www.pluralsight.com/courses/swift-fundamentals" }
          ]
        }
      }
    ]
  },
  {
    title:" أطر عمل الموبايل",
    icon: <Blocks className="w-6 h-6 text-cyan-400" />,
    children: [
      {
        title: "Flutter",
        icon: <Blocks className="w-5 h-5 text-blue-300" />,
        learningOutcomes: [
          "Build cross-platform apps",
          "Use widgets for UI",
          "Implement state management",
          "Work with navigation",
          "Integrate with APIs",
          "Optimize app performance",
          "Deploy Flutter apps"
        ],
        description: [
          "Flutter هو إطار عمل مفتوح المصدر من Google لبناء تطبيقات موبايل متعددة المنصات.",
          "يستخدم لغة Dart لتطوير تطبيقات لـ iOS وAndroid من قاعدة كود واحدة.",
          "يوفر ودجات (widgets) لإنشاء واجهات مستخدم متجاوبة وجذابة.",
          "يدعم إدارة الحالة باستخدام Provider، Riverpod، أو Bloc.",
          "يُسهل التنقل بين الشاشات باستخدام نظام التوجيه (navigation).",
          "تُستخدم لبناء تطبيقات مثل المتاجر الإلكترونية وتطبيقات التواصل.",
          "يوفر أداء عالي بفضل محرك Skia للرسومات.",
          "تُسهل أدوات مثل Flutter DevTools تحسين الأداء وتصحيح الأخطاء.",
          "تدعم التكامل مع Firebase وAPIs خارجية.",
          "تُعتبر خيارًا شائعًا لتطوير تطبيقات سريعة وفعالة.",
          "تُسهل النشر على متاجر التطبيقات مثل Google Play وApp Store."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Flutter Docs", url: "https://docs.flutter.dev/" },
            { name: "Flutter Dev", url: "https://www.youtube.com/@flutterdev" }
          ],
          paid: [
            { name: "Udemy Flutter Course", url: "https://www.udemy.com/topic/flutter/" },
            { name: "Pluralsight Flutter", url: "https://www.pluralsight.com/courses/flutter-getting-started" }
          ]
        }
      },
      {
        title: "React Native",
        icon: <Blocks className="w-5 h-5 text-teal-300" />,
        learningOutcomes: [
          "Build cross-platform apps",
          "Use React components",
          "Implement navigation",
          "Manage state with Redux",
          "Integrate with APIs",
          "Handle native modules",
          "Deploy to app stores"
        ],
        description: [
          "React Native هو إطار عمل من Meta لبناء تطبيقات موبايل باستخدام JavaScript.",
          "يسمح بتطوير تطبيقات iOS وAndroid من قاعدة كود واحدة.",
          "يعتمد على مكونات React لإنشاء واجهات مستخدم ديناميكية.",
          "يدعم إدارة الحالة باستخدام Redux أو Context API.",
          "يُسهل التنقل بين الشاشات باستخدام React Navigation.",
          "تُستخدم لبناء تطبيقات مثل تطبيقات الشبكات الاجتماعية والتجارة.",
          "يوفر أداء قريب من التطبيقات الأصلية بفضل الجسور (bridges).",
          "تدعم التكامل مع وحدات أصلية (native modules) للوصول إلى ميزات الجهاز.",
          "تُسهل النشر على Google Play وApp Store.",
          "تُعتبر خيارًا شائعًا لمطوري React لتطوير تطبيقات الموبايل.",
          "توفر أدوات تصحيح أخطاء مثل React Native Debugger."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "React Native Docs", url: "https://reactnative.dev/docs/getting-started" },
            { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" }
          ],
          paid: [
            { name: "Udemy React Native Course", url: "https://www.udemy.com/topic/react-native/" },
            { name: "Frontend Masters React Native", url: "https://frontendmasters.com/courses/react-native-v2/" }
          ]
        }
      },
      {
        title: "Native Android (Kotlin)",
        icon: <Blocks className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Understand Android architecture",
          "Use Jetpack Compose",
          "Implement MVVM pattern",
          "Work with Android APIs",
          "Handle permissions",
          "Optimize app performance",
          "Deploy to Google Play"
        ],
        description: [
          "Native Android باستخدام Kotlin هو نهج لتطوير تطبيقات Android الأصلية.",
          "يوفر Jetpack Compose واجهات مستخدم حديثة وديناميكية.",
          "يدعم نمط MVVM لتنظيم الكود بشكل فعال وقابل للصيانة.",
          "يُتيح الوصول إلى Android APIs لاستخدام ميزات الجهاز مثل الكاميرا.",
          "تُستخدم لبناء تطبيقات عالية الأداء مثل الألعاب والتطبيقات المؤسساتية.",
          "يوفر أدوات مثل Android Studio لتجربة تطوير متكاملة.",
          "تدعم إدارة الأذونات لضمان أمان التطبيق.",
          "تُسهل النشر على Google Play مع تحسين الأداء.",
          "تُعتبر الخيار الأمثل لتطبيقات Android عالية التخصيص.",
          "تدعم التكامل مع مكتبات مثل Retrofit وRoom.",
          "تُحسن تجربة المستخدم بفضل الوصول المباشر للنظام."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Android Developers", url: "https://developer.android.com/courses" },
            { name: "Google Codelabs", url: "https://codelabs.developers.google.com/?cat=android" }
          ],
          paid: [
            { name: "Udemy Android Kotlin Course", url: "https://www.udemy.com/topic/android-development/" },
            { name: "Pluralsight Android", url: "https://www.pluralsight.com/paths/android" }
          ]
        }
      },
      {
        title: "Native iOS (Swift)",
        icon: <Blocks className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "Understand iOS architecture",
          "Use SwiftUI for UI",
          "Implement MVC pattern",
          "Work with iOS APIs",
          "Handle permissions",
          "Optimize app performance",
          "Deploy to App Store"
        ],
        description: [
          "Native iOS باستخدام Swift هو نهج لتطوير تطبيقات iOS الأصلية.",
          "يوفر SwiftUI واجهات مستخدم حديثة وسهلة التخصيص.",
          "يدعم نمط MVC لتنظيم الكود بشكل منظم وقابل للصيانة.",
          "يُتيح الوصول إلى iOS APIs لاستخدام ميزات الجهاز مثل Face ID.",
          "تُستخدم لبناء تطبيقات عالية الأداء مثل تطبيقات التواصل والألعاب.",
          "يوفر أدوات مثل Xcode لتجربة تطوير متكاملة.",
          "تدعم إدارة الأذونات لضمان أمان التطبيق.",
          "تُسهل النشر على App Store مع تحسين الأداء.",
          "تُعتبر الخيار الأمثل لتطبيقات iOS عالية التخصيص.",
          "تدعم التكامل مع مكتبات مثل Core Data وAlamofire.",
          "تُحسن تجربة المستخدم بفضل التصميم الأصلي."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Apple Developer", url: "https://developer.apple.com/tutorials/swiftui" },
            { name: "Hacking with Swift", url: "https://www.hackingwithswift.com/" }
          ],
          paid: [
            { name: "Udemy iOS Swift Course", url: "https://www.udemy.com/topic/ios-development/" },
            { name: "Pluralsight Swift", url: "https://www.pluralsight.com/paths/ios" }
          ]
        }
      }
    ]
  },
  {
    title:  "إدارة الحالة",
    icon: <Workflow className="w-6 h-6 text-purple-400" />,
    children: [
      {
        title: "State Management Tools",
        icon: <Workflow className="w-5 h-5 text-purple-300" />,
        learningOutcomes: [
          "Use Provider for Flutter",
          "Implement Redux for React Native",
          "Work with Combine for Swift",
          "Manage global state",
          "Handle asynchronous actions",
          "Optimize state updates",
          "Integrate with frameworks"
        ],
        description: [
          "إدارة الحالة تُستخدم لتنظيم بيانات التطبيق بشكل مركزي.",
          "Provider هو أداة شائعة لإدارة الحالة في تطبيقات Flutter.",
          "Redux يوفر إدارة حالة قوية لتطبيقات React Native المعقدة.",
          "Combine هو إطار عمل من Apple لإدارة الحالة والتفاعلية في Swift.",
          "تُتيح إدارة الحالة العامة بين شاشات التطبيق المختلفة.",
          "تدعم التعامل مع العمليات غير المتزامنة مثل جلب البيانات.",
          "تُحسن أداء التطبيق من خلال تحسين تحديثات الحالة.",
          "تُستخدم في تطبيقات مثل لوحات التحكم والمتاجر الإلكترونية.",
          "تُسهل التكامل مع أطر العمل مثل Flutter وReact Native.",
          "توفر هيكلية منظمة لتتبع التغييرات في الحالة.",
          "تُقلل تعقيد إدارة البيانات في التطبيقات الكبيرة."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Flutter Provider Docs", url: "https://pub.dev/packages/provider" },
            { name: "Redux Docs", url: "https://redux.js.org/" },
            { name: "Apple Combine Docs", url: "https://developer.apple.com/documentation/combine" }
          ],
          paid: [
            { name: "Udemy State Management Course", url: "https://www.udemy.com/topic/flutter/" },
            { name: "Pluralsight State Management", url: "https://www.pluralsight.com/courses/flutter-state-management" }
          ]
        }
      }
    ]
  },
  {
    title: "الاختبارات",
    icon: <TestTube className="w-6 h-6 text-red-400" />,
    children: [
      {
        title: "Unit Testing",
        icon: <TestTube className="w-5 h-5 text-red-300" />,
        learningOutcomes: [
          "Write tests with Flutter Test",
          "Test React Native components",
          "Use XCTest for Swift",
          "Mock APIs and dependencies",
          "Handle edge cases",
          "Measure test coverage",
          "Integrate with CI/CD"
        ],
        description: [
          "Unit Testing يضمن جودة الكود من خلال اختبار الوحدات الصغيرة.",
          "Flutter Test يوفر أدوات لاختبار ودجات ووظائف Flutter.",
          "React Native يدعم اختبار المكونات باستخدام Jest وTesting Library.",
          "XCTest هو إطار عمل Apple لاختبار تطبيقات Swift وiOS.",
          "تُستخدم لمحاكاة APIs والتبعيات لضمان اختبارات موثوقة.",
          "تُتيح التعامل مع الحالات الحدية لتحسين استقرار التطبيق.",
          "تُقيس تغطية الاختبار لتحديد مدى شمولية الاختبارات.",
          "تُستخدم في المشاريع الكبيرة لتقليل الأخطاء قبل النشر.",
          "تدعم التكامل مع أنظمة CI/CD مثل GitHub Actions.",
          "تُحسن صيانة الكود من خلال الكشف المبكر عن المشكلات.",
          "توفر أدوات لاختبار واجهات المستخدم والوظائف."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" }
          ],
          englishFree: [
            { name: "Flutter Testing Docs", url: "https://docs.flutter.dev/testing" },
            { name: "React Native Testing", url: "https://reactnative.dev/docs/testing-overview" },
            { name: "Apple XCTest Docs", url: "https://developer.apple.com/documentation/xctest" }
          ],
          paid: [
            { name: "Udemy Testing Course", url: "https://www.udemy.com/topic/software-testing/" },
            { name: "Pluralsight Testing", url: "https://www.pluralsight.com/courses/flutter-testing" }
          ]
        }
      }
    ]
  },
  {
    title: "النشر",
    icon: <Rocket className="w-6 h-6 text-green-400" />,
    children: [
      {
        title: "CI/CD + App Stores",
        icon: <Rocket className="w-5 h-5 text-green-300" />,
        learningOutcomes: [
          "Set up CI/CD with GitHub Actions",
          "Deploy to Google Play",
          "Deploy to App Store",
          "Configure build pipelines",
          "Optimize build sizes",
          "Handle app signing",
          "Monitor app performance"
        ],
        description: [
          "CI/CD يُحسن عملية نشر تطبيقات الموبايل من خلال الأتمتة.",
          "GitHub Actions يُتيح إعداد خطوط أنابيب للاختبار والنشر.",
          "Google Play وApp Store هما المنصتان الرئيسيتان لنشر تطبيقات الموبايل.",
          "تُستخدم لتقليل الأخطاء أثناء النشر وضمان الاستقرار.",
          "تُحسن سرعة تسليم التحديثات للمستخدمين.",
          "تدعم إدارة توقيع التطبيقات لضمان الأمان.",
          "تُتيح مراقبة أداء التطبيق بعد النشر لتحسين التجربة.",
          "تُستخدم في المشاريع الكبيرة لضمان عمليات نشر موثوقة.",
          "تُسهل التكامل مع أدوات مثل Fastlane لأتمتة النشر.",
          "تُعتبر ضرورية لتطوير تطبيقات إنتاجية حديثة.",
          "توفر أدوات لتحسين حجم التطبيق وتقليل الموارد."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Google Play Console Docs", url: "https://developer.android.com/distribute/console" },
            { name: "Apple App Store Docs", url: "https://developer.apple.com/app-store/" }
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
        title: "Firebase",
        icon: <Box className="w-5 h-5 text-orange-300" />,
        learningOutcomes: [
          "Integrate Firebase Authentication",
          "Use Firestore for databases",
          "Implement push notifications",
          "Handle real-time updates",
          "Use Firebase Analytics",
          "Optimize app backend",
          "Integrate with Flutter/React Native"
        ],
        description: [
          "Firebase هي منصة من Google لتطوير تطبيقات الموبايل بسهولة وكفاءة.",
          "توفر Firebase Authentication لإدارة تسجيل دخول المستخدمين.",
          "يُستخدم Firestore كقاعدة بيانات سحابية لتخزين البيانات.",
          "تدعم الإشعارات الفورية (push notifications) لتحسين التفاعل.",
          "تُتيح تحديثات البيانات في الوقت الفعلي لتجربة ديناميكية.",
          "يوفر Firebase Analytics لتتبع سلوك المستخدمين وأداء التطبيق.",
          "تُستخدم لبناء تطبيقات مثل الدردشة والتجارة الإلكترونية.",
          "تدعم التكامل مع Flutter وReact Native بسهولة.",
          "تُحسن أداء التطبيق من خلال خدمات سحابية فعالة.",
          "تُقلل تعقيد إدارة الخلفية (backend) للتطبيقات.",
          "تُعتبر خيارًا شائعًا لتطوير تطبيقات موبايل حديثة."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Firebase Docs", url: "https://firebase.google.com/docs" },
            { name: "Firebase YouTube", url: "https://www.youtube.com/@Firebase" }
          ],
          paid: [
            { name: "Udemy Firebase Course", url: "https://www.udemy.com/topic/firebase/" },
            { name: "Pluralsight Firebase", url: "https://www.pluralsight.com/courses/firebase-fundamentals" }
          ]
        }
      },
      {
        title: "Dio (Flutter)",
        icon: <Box className="w-5 h-5 text-blue-300" />,
        learningOutcomes: [
          "Make HTTP requests",
          "Handle API responses",
          "Implement interceptors",
          "Manage request configurations",
          "Handle errors",
          "Optimize API calls",
          "Integrate with Flutter"
        ],
        description: [
          "Dio هي مكتبة لإجراء طلبات HTTP في تطبيقات Flutter بسهولة.",
          "تُستخدم لجلب البيانات من APIs وإرسال البيانات إلى الخوادم.",
          "تدعم تكوين الطلبات مثل الرؤوس (headers) والمعاملات (params).",
          "تُتيح استخدام الـ interceptors لتعديل الطلبات أو الردود.",
          "تُسهل معالجة الأخطاء لتحسين تجربة المستخدم.",
          "تُستخدم في تطبيقات مثل لوحات التحكم والمتاجر الإلكترونية.",
          "تُحسن أداء التطبيق من خلال تحسين إدارة الطلبات.",
          "توفر واجهة برمجية بسيطة وسهلة الاستخدام.",
          "تُقلل تعقيد التعامل مع APIs في تطبيقات Flutter.",
          "تُعتبر بديلاً قويًا لمكتبة http المدمجة في Flutter.",
          "تدعم التكامل مع أدوات مثل Provider لإدارة الحالة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Dio Docs", url: "https://pub.dev/packages/dio" },
            { name: "Flutter Dev", url: "https://www.youtube.com/@flutterdev" }
          ],
          paid: [
            { name: "Udemy Flutter Course", url: "https://www.udemy.com/topic/flutter/" },
            { name: "Pluralsight Flutter", url: "https://www.pluralsight.com/courses/flutter-getting-started" }
          ]
        }
      },
      {
        title: "Retrofit (Kotlin)",
        icon: <Box className="w-5 h-5 text-green-300" />,
        learningOutcomes: [
          "Make HTTP requests",
          "Handle API responses",
          "Define API interfaces",
          "Use annotations for requests",
          "Integrate with Kotlin",
          "Handle errors",
          "Optimize API calls"
        ],
        description: [
          "Retrofit هي مكتبة لإجراء طلبات HTTP في تطبيقات Android باستخدام Kotlin.",
          "تُستخدم لتحديد واجهات برمجية (API interfaces) بطريقة بسيطة.",
          "تدعم التعامل مع APIs باستخدام annotations مثل @GET و@POST.",
          "تُسهل معالجة الردود والبيانات بتنسيق JSON أو غيره.",
          "تُستخدم في تطبيقات مثل التجارة الإلكترونية وتطبيقات التواصل.",
          "تُحسن أداء التطبيق من خلال تحسين إدارة الطلبات.",
          "توفر واجهة برمجية نظيفة وسهلة التخصيص.",
          "تُقلل تعقيد التعامل مع APIs في تطبيقات Android.",
          "تدعم التكامل مع مكتبات مثل Gson وCoroutines.",
          "تُعتبر الخيار الأمثل لتطبيقات Android الأصلية.",
          "تُسهل معالجة الأخطاء وتحسين تجربة المستخدم."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Retrofit Docs", url: "https://square.github.io/retrofit/" },
            { name: "Android Developers", url: "https://developer.android.com/kotlin" }
          ],
          paid: [
            { name: "Udemy Android Kotlin Course", url: "https://www.udemy.com/topic/android-development/" },
            { name: "Pluralsight Android", url: "https://www.pluralsight.com/paths/android" }
          ]
        }
      },
      {
        title: "Alamofire (Swift)",
        icon: <Box className="w-5 h-5 text-orange-300" />,
        learningOutcomes: [
          "Make HTTP requests",
          "Handle API responses",
          "Manage request configurations",
          "Use interceptors",
          "Handle errors",
          "Integrate with Swift",
          "Optimize API calls"
        ],
        description: [
          "Alamofire هي مكتبة لإجراء طلبات HTTP في تطبيقات iOS باستخدام Swift.",
          "تُستخدم لجلب البيانات من APIs وإرسال البيانات إلى الخوادم.",
          "تدعم تكوين الطلبات مثل الرؤوس (headers) والمعاملات (params).",
          "تُتيح استخدام الـ interceptors لتعديل الطلبات أو الردود.",
          "تُسهل معالجة الأخطاء لتحسين تجربة المستخدم.",
          "تُستخدم في تطبيقات مثل التجارة الإلكترونية وتطبيقات التواصل.",
          "تُحسن أداء التطبيق من خلال تحسين إدارة الطلبات.",
          "توفر واجهة برمجية بسيطة وسهلة الاستخدام.",
          "تُقلل تعقيد التعامل مع APIs في تطبيقات iOS.",
          "تدعم التكامل مع مكتبات مثل Combine وSwiftUI.",
          "تُعتبر بديلاً قويًا لـ URLSession المدمج في Swift."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Mohamed Elhawary", url: "https://www.youtube.com/@MohamedElhawary" }
          ],
          englishFree: [
            { name: "Alamofire Docs", url: "https://github.com/Alamofire/Alamofire" },
            { name: "Hacking with Swift", url: "https://www.hackingwithswift.com/" }
          ],
          paid: [
            { name: "Udemy iOS Swift Course", url: "https://www.udemy.com/topic/ios-development/" },
            { name: "Pluralsight Swift", url: "https://www.pluralsight.com/paths/ios" }
          ]
        }
      }
    ]
  }
]

export default function MopileApplication(){
  return (
    <Roadmap title={"Mopile Application"} sections={sections}/>
  )
}