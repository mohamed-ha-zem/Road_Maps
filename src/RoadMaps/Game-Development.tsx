import Roadmap from "../Components/RoadMap";
import React from "react";
import {
  Code,
  Rocket,
  Box,
  Terminal,
  PenBox,
  Calculator,
  Palette,
  PenTool,
  Cuboid,
  Cpu,
  Activity,
  Brain,
  Volume2,
  Mic,
  Globe,
  Users,
  Send,
  Headphones
} from "lucide-react";
const sections = [
  {
    title: "الأساسيات",
    icon: <Code className="w-6 h-6 text-amber-400" />,
    children: [
      {
        title: "Programming",
        icon: <Terminal className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Understand variables and data types",
          "Master control structures",
          "Work with functions and scope",
          "Implement object-oriented programming",
          "Handle arrays and collections",
          "Learn debugging techniques",
          "Use version control with Git"
        ],
        description: [
          "البرمجة هي الأساس لتطوير الألعاب، حيث تُستخدم لإنشاء المنطق والتفاعل.",
          "تتضمن تعلم المتغيرات، الأنواع، والتحكم في تدفق البرنامج.",
          "تُستخدم الدوال لتنظيم الكود وإعادة استخدامه بكفاءة.",
          "تدعم البرمجة كائنية التوجه (OOP) لتصميم الكيانات في الألعاب.",
          "تُتيح المصفوفات والمجموعات إدارة البيانات المعقدة.",
          "تُساعد أدوات التصحيح في اكتشاف وإصلاح الأخطاء.",
          "يُستخدم Git لإدارة الإصدارات والتعاون في المشاريع.",
          "يُعتبر أساسيًا لفهم محركات الألعاب مثل Unity وUnreal.",
          "يُمكن تعلمه بلغات مثل C++, C#, أو Python.",
          "يُحسن إنتاجية المطور من خلال كتابة كود منظم.",
          "يُعتبر الخطوة الأولى لأي مطور ألعاب مبتدئ."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
            { name: "The Cherno", url: "https://www.youtube.com/@TheCherno" }
          ],
          paid: [
            { name: "Udemy Programming Course", url: "https://www.udemy.com/topic/programming/" },
            { name: "Pluralsight C++", url: "https://www.pluralsight.com/paths/c-plus-plus" }
          ]
        }
      },
      {
        title: "Game Design",
        icon: <PenBox className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand game mechanics",
          "Design engaging gameplay",
          "Create storyboards",
          "Balance game difficulty",
          "Develop player progression",
          "Use prototyping tools",
          "Analyze player feedback"
        ],
        description: [
          "تصميم الألعاب يركز على إنشاء تجارب ممتعة وتفاعلية للاعبين.",
          "يتضمن تصميم الميكانيكيات التي تحدد كيفية عمل اللعبة.",
          "يُستخدم لإنشاء لوحات قصصية (storyboards) لتصور اللعبة.",
          "يُساعد في موازنة الصعوبة لضمان تجربة عادلة وممتعة.",
          "يُتيح تصميم تقدم اللاعب مثل المستويات والمكافآت.",
          "يُستخدم أدوات النمذجة الأولية مثل Godot لاختبار الأفكار.",
          "يُعتمد على تعليقات اللاعبين لتحسين التصميم.",
          "يُعتبر ضروريًا لإنشاء ألعاب جذابة ومتماسكة.",
          "يُساعد في تحديد نوع اللعبة مثل RPG أو FPS.",
          "يُحسن جودة اللعبة من خلال التخطيط الجيد.",
          "يُستخدم في جميع مراحل تطوير اللعبة."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Game Design with GDC", url: "https://www.youtube.com/@GDC" },
            { name: "Extra Credits", url: "https://www.youtube.com/@ExtraCredits" }
          ],
          paid: [
            { name: "Udemy Game Design Course", url: "https://www.udemy.com/topic/game-design/" },
            { name: "Coursera Game Design", url: "https://www.coursera.org/courses?query=game%20design" }
          ]
        }
      },
      {
        title: "Math for Games",
        icon: <Calculator className="w-5 h-5 text-yellow-400" />,
        learningOutcomes: [
          "Understand vectors and matrices",
          "Apply trigonometry",
          "Work with physics calculations",
          "Use linear algebra",
          "Implement collision detection",
          "Optimize game calculations",
          "Simulate motion"
        ],
        description: [
          "الرياضيات هي أساس تطوير الألعاب لمحاكاة الحركة والفيزياء.",
          "تُستخدم المتجهات والمصفوفات لتحديد المواقع والتحركات.",
          "تُساعد الزوايا والمثلثات في حساب الاتجاهات والزوايا.",
          "تُستخدم الفيزياء لحساب القوى والجاذبية في الألعاب.",
          "تُتيح الجبر الخطي تحويلات ثلاثية الأبعاد.",
          "تُستخدم لاكتشاف التصادمات بين الكائنات في اللعبة.",
          "تُحسن الأداء من خلال تحسين العمليات الحسابية.",
          "تُستخدم لمحاكاة الحركة الواقعية مثل القفز أو الجري.",
          "تُعتبر ضرورية لتطوير ألعاب ثنائية وثلاثية الأبعاد.",
          "تُساعد في إنشاء رسومات ديناميكية وتفاعلية.",
          "يُمكن تعلمها باستخدام أدوات مثل Khan Academy."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Khan Academy", url: "https://www.khanacademy.org/math" },
            { name: "3Blue1Brown", url: "https://www.youtube.com/@3blue1brown" }
          ],
          paid: [
            { name: "Udemy Game Math Course", url: "https://www.udemy.com/topic/game-development/" },
            { name: "Pluralsight Math for Games", url: "https://www.pluralsight.com/courses/math-game-programmers" }
          ]
        }
      }
    ]
  },
  {
    title:" محركات الألعاب",
    icon: <Box className="w-6 h-6 text-cyan-400" />,
    children: [
      {
        title: "Unity",
        icon: <Box className="w-5 h-5 text-teal-300" />,
        learningOutcomes: [
          "Understand Unity interface",
          "Create 2D and 3D games",
          "Use C# scripting",
          "Implement physics systems",
          "Work with animations",
          "Build UI elements",
          "Deploy games"
        ],
        description: [
          "Unity هو محرك ألعاب قوي لتطوير ألعاب ثنائية وثلاثية الأبعاد.",
          "يُستخدم لإنشاء ألعاب لمنصات متعددة مثل الحاسوب والهواتف.",
          "يعتمد على لغة C# لبرمجة السلوكيات والمنطق.",
          "يوفر نظام فيزياء مدمج لمحاكاة الحركة والتصادمات.",
          "يدعم إنشاء الرسوم المتحركة للشخصيات والكائنات.",
          "يُتيح تصميم واجهات مستخدم (UI) تفاعلية.",
          "يُستخدم لنشر الألعاب على منصات مثل Steam وGoogle Play.",
          "يُسهل التكامل مع أدوات مثل Blender للنماذج ثلاثية الأبعاد.",
          "يُحسن إنتاجية المطور من خلال مكتبة الأصول (Asset Store).",
          "يُعتبر مناسبًا للمبتدئين والمحترفين على حد سواء.",
          "يُستخدم في ألعاب شهيرة مثل Hollow Knight وAmong Us."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Unity Learn", url: "https://learn.unity.com/" },
            { name: "Brackeys", url: "https://www.youtube.com/@Brackeys" }
          ],
          paid: [
            { name: "Udemy Unity Course", url: "https://www.udemy.com/topic/unity/" },
            { name: "Pluralsight Unity", url: "https://www.pluralsight.com/paths/unity-game-development" }
          ]
        }
      },
      {
        title: "Unreal Engine",
        icon: <Box className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand Unreal interface",
          "Use Blueprints for scripting",
          "Write C++ code",
          "Create realistic graphics",
          "Implement multiplayer features",
          "Work with physics and AI",
          "Deploy high-end games"
        ],
        description: [
          "Unreal Engine هو محرك ألعاب متقدم لإنشاء ألعاب بصرية مذهلة.",
          "يُستخدم لتطوير ألعاب ثلاثية الأبعاد عالية الجودة مثل Fortnite.",
          "يوفر نظام Blueprints لبرمجة مرئية بدون كود.",
          "يدعم C++ لتطوير سلوكيات معقدة وأداء عالي.",
          "يُتيح إنشاء رسومات واقعية باستخدام تقنيات الإضاءة المتقدمة.",
          "يوفر أدوات لتطوير ألعاب متعددة اللاعبين بسهولة.",
          "يدعم أنظمة الفيزياء والذكاء الاصطناعي للشخصيات.",
          "يُستخدم لنشر الألعاب على منصات مثل PlayStation وPC.",
          "يتكامل مع أدوات مثل Maya لتصميم النماذج.",
          "يُعتبر مثاليًا للألعاب التي تتطلب رسومات متطورة.",
          "يُستخدم في الصناعات السينمائية والمحاكاة أيضًا."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Unreal Engine Docs", url: "https://docs.unrealengine.com/" },
            { name: "Unreal Sensei", url: "https://www.youtube.com/@UnrealSensei" }
          ],
          paid: [
            { name: "Udemy Unreal Course", url: "https://www.udemy.com/topic/unreal-engine/" },
            { name: "Pluralsight Unreal", url: "https://www.pluralsight.com/paths/unreal-engine" }
          ]
        }
      },
      {
        title: "Godot",
        icon: <Box className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Understand Godot architecture",
          "Use GDScript for scripting",
          "Create 2D and 3D games",
          "Work with scene system",
          "Implement physics",
          "Build UI elements",
          "Deploy cross-platform games"
        ],
        description: [
          "Godot هو محرك ألعاب مفتوح المصدر لتطوير ألعاب ثنائية وثلاثية الأبعاد.",
          "يُستخدم لإنشاء ألعاب خفيفة ومتعددة المنصات بسهولة.",
          "يعتمد على GDScript، وهي لغة تشبه Python للبرمجة.",
          "يوفر نظام المشاهد (scenes) لتنظيم الكائنات في اللعبة.",
          "يدعم الفيزياء لمحاكاة الحركة والتصادمات.",
          "يُتيح إنشاء واجهات مستخدم تفاعلية بسهولة.",
          "يُستخدم لنشر الألعاب على منصات مثل Linux وAndroid.",
          "يُسهل التكامل مع أدوات مفتوحة المصدر.",
          "يُعتبر مناسبًا للمطورين المستقلين والمبتدئين.",
          "يُحسن إنتاجية المطور بفضل واجهته البسيطة.",
          "يُستخدم في ألعاب مستقلة مثل Pixel Platformer."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Godot Docs", url: "https://docs.godotengine.org/" },
            { name: "GDQuest", url: "https://www.youtube.com/@Gdquest" }
          ],
          paid: [
            { name: "Udemy Godot Course", url: "https://www.udemy.com/topic/godot/" },
            { name: "Coursera Godot", url: "https://www.coursera.org/courses?query=godot" }
          ]
        }
      }
    ]
  },
  {
    title: "الرسومات",
    icon: <Palette className="w-6 h-6 text-purple-400" />,
    children: [
      {
        title: "2D Art",
        icon: <PenTool className="w-5 h-5 text-blue-300" />,
        learningOutcomes: [
          "Create pixel art",
          "Design sprites and tilesets",
          "Use animation techniques",
          "Work with color palettes",
          "Optimize assets for games",
          "Integrate with game engines",
          "Understand art pipelines"
        ],
        description: [
          "الفن ثنائي الأبعاد يُستخدم لإنشاء الرسومات في الألعاب مثل الشخصيات.",
          "يتضمن تصميم فن البكسل (pixel art) للألعاب الكلاسيكية.",
          "يُستخدم لإنشاء الـ sprites والـ tilesets لتصميم المستويات.",
          "يدعم تقنيات الرسوم المتحركة لتحريك الشخصيات.",
          "يُتيح اختيار لوحات ألوان لتحسين المظهر البصري.",
          "يُساعد في تحسين الأصول لتقليل استهلاك الموارد.",
          "يتكامل مع محركات مثل Unity وGodot لإضافة الرسومات.",
          "يُعتبر ضروريًا للألعاب ثنائية الأبعاد مثل Hollow Knight.",
          "يُحسن تجربة اللاعب من خلال التصميمات الجذابة.",
          "يُستخدم أدوات مثل Aseprite وPhotoshop.",
          "يُتيح إنشاء ألعاب مستقلة بتكلفة منخفضة."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Pixel Art Tutorials", url: "https://www.youtube.com/@PixelOverload" },
            { name: "Lospec Tutorials", url: "https://lospec.com/pixel-art-tutorials" }
          ],
          paid: [
            { name: "Udemy 2D Art Course", url: "https://www.udemy.com/topic/pixel-art/" },
            { name: "Skillshare Pixel Art", url: "https://www.skillshare.com/classes/Pixel-Art" }
          ]
        }
      },
      {
        title: '3D Modeling',
        icon: <Cuboid className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "Create 3D models",
          "Apply textures and materials",
          "Rig models for animation",
          "Use UV mapping",
          "Optimize 3D assets",
          "Integrate with game engines",
          "Work with lighting"
        ],
        description: [
          "النمذجة ثلاثية الأبعاد تُستخدم لإنشاء الشخصيات والأماكن في الألعاب.",
          "تتضمن تصميم النماذج باستخدام أدوات مثل Blender أو Maya.",
          "يُستخدم لتطبيق القوام (textures) والمواد لتحسين المظهر.",
          "يُتيح تهيئة النماذج (rigging) للرسوم المتحركة.",
          "يُساعد UV mapping في توزيع القوام على النماذج.",
          "يُحسن الأصول ثلاثية الأبعاد لتقليل استهلاك الموارد.",
          "يتكامل مع محركات مثل Unreal وUnity لإضافة النماذج.",
          "يُستخدم لإعداد الإضاءة لتحسين الجو البصري.",
          "يُعتبر ضروريًا للألعاب ثلاثية الأبعاد مثل The Witcher.",
          "يُحسن جودة اللعبة من خلال التصميمات الواقعية.",
          "يُتيح إنشاء عوالم تفاعلية ومذهلة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Blender Guru", url: "https://www.youtube.com/@BlenderGuru" },
            { name: "Grant Abbitt", url: "https://www.youtube.com/@GrantAbbitt" }
          ],
          paid: [
            { name: "Udemy 3D Modeling Course", url: "https://www.udemy.com/topic/3d-modeling/" },
            { name: "Pluralsight 3D Modeling", url: "https://www.pluralsight.com/paths/blender" }
          ]
        }
      }
    ]
  },
  {
    title: "الفيزياء والذكاء الاصطناعي",
    icon: <Cpu className="w-6 h-6 text-red-400" />,
    children: [
      {
        title: "Game Physics",
        icon: <Activity className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Implement rigid body dynamics",
          "Simulate gravity and forces",
          "Handle collision detection",
          "Use physics engines",
          "Optimize physics calculations",
          "Create particle effects",
          "Simulate soft bodies"
        ],
        description: [
          "فيزياء الألعاب تُستخدم لمحاكاة الحركة والتفاعلات الواقعية.",
          "تتضمن ديناميكيات الأجسام الصلبة مثل القفز والسقوط.",
          "تُستخدم لمحاكاة الجاذبية والقوى مثل الدفع والاحتكاك.",
          "تُتيح اكتشاف التصادمات بين الكائنات في اللعبة.",
          "تعتمد على محركات فيزياء مثل PhysX أو Havok.",
          "تُحسن الأداء من خلال تحسين الحسابات الفيزيائية.",
          "تُستخدم لإنشاء تأثيرات الجسيمات مثل الدخان أو النار.",
          "تُتيح محاكاة الأجسام اللينة مثل القماش أو السوائل.",
          "تُعتبر ضرورية للألعاب ثلاثية الأبعاد الواقعية.",
          "تُحسن تجربة اللاعب من خلال التفاعلات الديناميكية.",
          "يُستخدم في محركات مثل Unity وUnreal."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Game Physics Tutorials", url: "https://www.youtube.com/@PardCode" },
            { name: "Unity Physics Docs", url: "https://docs.unity3d.com/Manual/PhysicsSection.html" }
          ],
          paid: [
            { name: "Udemy Game Physics Course", url: "https://www.udemy.com/topic/game-development/" },
            { name: "Pluralsight Game Physics", url: "https://www.pluralsight.com/courses/unity-physics-fundamentals" }
          ]
        }
      },
      {
        title: "Game AI",
        icon: <Brain className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "Implement pathfinding algorithms",
          "Create behavior trees",
          "Use finite state machines",
          "Design NPC behaviors",
          "Apply machine learning",
          "Optimize AI performance",
          "Integrate with game engines"
        ],
        description: [
          "الذكاء الاصطناعي في الألعاب يُستخدم لإنشاء سلوكيات ذكية للكائنات.",
          "يتضمن خوارزميات البحث عن المسار مثل A* لتحرك الشخصيات.",
          "يُستخدم أشجار السلوك (behavior trees) لإدارة قرارات الذكاء.",
          "تُتيح آلات الحالة المحدودة (FSM) تصميم سلوكيات بسيطة.",
          "يُستخدم لتصميم سلوكيات الشخصيات غير القابلة للعب (NPC).",
          "يُمكن تطبيق التعلم الآلي لتحسين سلوكيات الذكاء.",
          "يُحسن الأداء من خلال تحسين حسابات الذكاء الاصطناعي.",
          "يتكامل مع محركات مثل Unity وUnreal لإضافة السلوكيات.",
          "يُعتبر ضروريًا للألعاب التي تتطلب شخصيات ذكية.",
          "يُحسن تجربة اللاعب من خلال التفاعلات الواقعية.",
          "يُستخدم في ألعاب مثل Skyrim وThe Last of Us."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "AI and Games", url: "https://www.youtube.com/@AIandGames" },
            { name: "Gamasutra AI", url: "https://www.gamasutra.com/topic/ai" }
          ],
          paid: [
            { name: "Udemy Game AI Course", url: "https://www.udemy.com/topic/game-development/" },
            { name: "Pluralsight Game AI", url: "https://www.pluralsight.com/courses/artificial-intelligence-unity" }
          ]
        }
      }
    ]
  },
  {
    title: "الصوتيات",
    icon: <Volume2 className="w-6 h-6 text-yellow-400" />,
    children: [
      {
        title: "Sound Design",
        icon: <Mic className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "Create sound effects",
          "Design ambient audio",
          "Work with audio middleware",
          "Implement dynamic audio",
          "Optimize audio assets",
          "Integrate with game engines",
          "Balance audio levels"
        ],
        description: [
          "تصميم الصوت يُستخدم لإنشاء التأثيرات الصوتية والموسيقى في الألعاب.",
          "يتضمن إنشاء تأثيرات صوتية مثل الانفجارات أو الخطوات.",
          "يُستخدم لتصميم الصوتيات المحيطة لتحسين الأجواء.",
          "يُتيح البرمجيات الوسيطة مثل FMOD إدارة الصوت ديناميكيًا.",
          "يُساعد في تحسين الأصول الصوتية لتقليل استهلاك الموارد.",
          "يتكامل مع محركات مثل Unity وUnreal لإضافة الصوت.",
          "يُستخدم لموازنة مستويات الصوت لتجربة سمعية متسقة.",
          "يُعتبر ضروريًا لتحسين تجربة اللاعب.",
          "يُحسن الانغماس في اللعبة من خلال الصوتيات الواقعية.",
          "يُستخدم أدوات مثل Audacity وReaper.",
          "يُتيح إنشاء ألعاب بأجواء غامرة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Game Audio Tutorials", url: "https://www.youtube.com/@GameAudioInstitute" },
            { name: "FMOD Tutorials", url: "https://www.fmod.com/learn" }
          ],
          paid: [
            { name: "Udemy Sound Design Course", url: "https://www.udemy.com/topic/game-audio/" },
            { name: "Skillshare Game Audio", url: "https://www.skillshare.com/classes/Game-Audio" }
          ]
        }
      }
    ]
  },
  {
    title:" الشبكات والألعاب المتعددة",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    children: [
      {
        title: "Multiplayer Development",
        icon: <Users className="w-5 h-5 text-cyan-400" />,
        learningOutcomes: [
          "Understand client-server model",
          "Implement networking protocols",
          "Handle latency and lag",
          "Use Photon or Mirror",
          "Create matchmaking systems",
          "Secure multiplayer games",
          "Test multiplayer functionality"
        ],
        description: [
          "تطوير الألعاب المتعددة يُستخدم لإنشاء تجارب لعب جماعية.",
          "يتضمن نموذج العميل-الخادم لإدارة التفاعلات بين اللاعبين.",
          "يُستخدم بروتوكولات الشبكة مثل TCP وUDP لنقل البيانات.",
          "يُساعد في التعامل مع التأخير (lag) لتحسين الأداء.",
          "يُتيح أدوات مثل Photon وMirror تطوير الشبكات بسهولة.",
          "يُستخدم لإنشاء أنظمة التوفيق (matchmaking) لربط اللاعبين.",
          "يُساعد في تأمين الألعاب ضد الغش والاختراق.",
          "يُعتبر ضروريًا لألعاب مثل Call of Duty وAmong Us.",
          "يُحسن تجربة اللاعب من خلال التفاعل الاجتماعي.",
          "يتكامل مع محركات مثل Unity وUnreal.",
          "يُتيح اختبار الألعاب المتعددة لضمان الاستقرار."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Photon Docs", url: "https://doc.photonengine.com/" },
            { name: "Mirror Networking", url: "https://mirror-networking.com/" }
          ],
          paid: [
            { name: "Udemy Multiplayer Course", url: "https://www.udemy.com/topic/game-development/" },
            { name: "Pluralsight Multiplayer", url: "https://www.pluralsight.com/courses/unity-multiplayer-game-development" }
          ]
        }
      }
    ]
  },
  {
    title:" النشر والتسويق",
    icon: <Rocket className="w-6 h-6 text-green-400" />,
    children: [
      {
        title: "Game Publishing",
        icon: <Send className="w-5 h-5 text-green-300" />,
        learningOutcomes: [
          "Optimize games for platforms",
          "Publish on Steam",
          "Deploy to mobile stores",
          "Create marketing materials",
          "Engage with communities",
          "Analyze player feedback",
          "Monetize games"
        ],
        description: [
          "نشر الألعاب يُستخدم لإيصال اللعبة إلى اللاعبين.",
          "يتضمن تحسين اللعبة لمنصات مثل PC، Xbox، أو الهواتف.",
          "يُتيح النشر على Steam أو Google Play للوصول إلى جمهور واسع.",
          "يُستخدم لإنشاء مواد تسويقية مثل المقاطع والصور.",
          "يُساعد في التفاعل مع المجتمعات عبر Discord أو Reddit.",
          "يُعتمد على تعليقات اللاعبين لتحسين اللعبة.",
          "يُتيح تحقيق الدخل من خلال الإعلانات أو المشتريات داخل اللعبة.",
          "يُعتبر ضروريًا لنجاح الألعاب المستقلة.",
          "يُحسن رؤية اللعبة من خلال استراتيجيات التسويق.",
          "يُستخدم أدوات مثل itch.io لنشر الألعاب التجريبية.",
          "يُتيح تحليل بيانات اللاعبين لتحسين التجربة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Steamworks Docs", url: "https://partner.steamgames.com/doc/home" },
            { name: "Gamasutra Marketing", url: "https://www.gamasutra.com/topic/marketing" }
          ],
          paid: [
            { name: "Udemy Game Marketing Course", url: "https://www.udemy.com/topic/game-development/" },
            { name: "Coursera Game Business", url: "https://www.coursera.org/courses?query=game%20business" }
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
        title: "Shader Programming",
        icon: <Palette className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "Understand shader basics",
          "Write GLSL/HLSL code",
          "Create visual effects",
          "Optimize shaders",
          "Use shader graphs",
          "Integrate with game engines",
          "Debug shader issues"
        ],
        description: [
          "برمجة الـ Shaders تُستخدم لإنشاء تأثيرات بصرية في الألعاب.",
          "تتضمن كتابة كود GLSL أو HLSL لتحريك البكسلات.",
          "تُستخدم لإنشاء تأثيرات مثل الماء، النار، أو الظلال.",
          "تُساعد في تحسين الـ shaders لتقليل استهلاك الموارد.",
          "يُتيح Shader Graph في Unity وUnreal تصميم مرئي للـ shaders.",
          "يتكامل مع محركات الألعاب لتحسين الرسومات.",
          "يُستخدم لتصحيح الأخطاء في الـ shaders لضمان الأداء.",
          "يُعتبر ضروريًا للألعاب ذات الرسومات المتقدمة.",
          "يُحسن المظهر البصري للألعاب ثلاثية الأبعاد.",
          "يُستخدم في ألعاب مثل God of War وCyberpunk 2077.",
          "يُتيح إنشاء تجارب بصرية فريدة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "The Book of Shaders", url: "https://thebookofshaders.com/" },
            { name: "Freya Holmér", url: "https://www.youtube.com/@Acegikmo" }
          ],
          paid: [
            { name: "Udemy Shader Course", url: "https://www.udemy.com/topic/shaders/" },
            { name: "Pluralsight Shaders", url: "https://www.pluralsight.com/courses/unity-shader-graph-fundamentals" }
          ]
        }
      },
      {
        title: "AR/VR Development",
        icon: <Headphones className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand AR/VR concepts",
          "Develop for Oculus/Meta",
          "Use ARCore and ARKit",
          "Create immersive experiences",
          "Optimize for performance",
          "Integrate with Unity/Unreal",
          "Test AR/VR apps"
        ],
        description: [
          "تطوير AR/VR يُستخدم لإنشاء تجارب الواقع المعزز والافتراضي.",
          "يتضمن تطوير ألعاب لأجهزة مثل Oculus Quest أو Hololens.",
          "يُستخدم ARCore وARKit لتطوير تطبيقات الواقع المعزز.",
          "يُتيح إنشاء تجارب غامرة مثل المحاكاة والألعاب.",
          "يُساعد في تحسين الأداء لتقليل دوار الحركة.",
          "يتكامل مع محركات مثل Unity وUnreal لتطوير التطبيقات.",
          "يُستخدم لاختبار التطبيقات لضمان تجربة مستخدم سلسة.",
          "يُعتبر مجالًا متقدمًا في تطوير الألعاب.",
          "يُحسن التفاعل من خلال التحكم بالحركة والإيماءات.",
          "يُستخدم في ألعاب مثل Beat Saber وHalf-Life: Alyx.",
          "يُتيح إنشاء تطبيقات تعليمية وترفيهية."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Unity XR Docs", url: "https://docs.unity3d.com/Manual/XR.html" },
            { name: "Oculus Developer", url: "https://developer.oculus.com/documentation/" }
          ],
          paid: [
            { name: "Udemy AR/VR Course", url: "https://www.udemy.com/topic/virtual-reality/" },
            { name: "Pluralsight VR", url: "https://www.pluralsight.com/courses/unity-vr-development" }
          ]
        }
      },
      {
        title: "PlayFab",
        icon: <Box className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Set up backend services",
          "Manage player data",
          "Implement leaderboards",
          "Handle in-game purchases",
          "Use cloud scripting",
          "Integrate with Unity",
          "Analyze game metrics"
        ],
        description: [
          "PlayFab هي منصة خلفية لإدارة خدمات الألعاب المتعددة.",
          "تُستخدم لإعداد خدمات مثل تسجيل الدخول وحفظ البيانات.",
          "تُتيح إنشاء لوحات صدارة (leaderboards) لتحفيز اللاعبين.",
          "تدعم المشتريات داخل اللعبة لتحقيق الدخل.",
          "تُستخدم السكربتات السحابية لإدارة المنطق الخلفي.",
          "تتكامل مع Unity لتسهيل تطوير الألعاب.",
          "تُساعد في تحليل بيانات اللعبة لتحسين التجربة.",
          "تُعتبر أداة قوية للألعاب المتعددة والمباشرة.",
          "تُحسن إدارة اللاعبين في الألعاب الكبيرة.",
          "تُستخدم في ألعاب مثل Sea of Thieves.",
          "تُتيح إنشاء ألعاب تفاعلية بسهولة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "PlayFab Docs", url: "https://docs.microsoft.com/en-us/gaming/playfab/" },
            { name: "PlayFab Tutorials", url: "https://www.youtube.com/@PlayFab" }
          ],
          paid: [
            { name: "Udemy PlayFab Course", url: "https://www.udemy.com/topic/game-development/" },
            { name: "Pluralsight PlayFab", url: "https://www.pluralsight.com/courses/playfab-multiplayer-services-unity" }
          ]
        }
      },
      {
        title: "GameMaker Studio",
        icon: <Box className="w-5 h-5 text-yellow-400" />,
        learningOutcomes: [
          "Understand GameMaker interface",
          "Use GML for scripting",
          "Create 2D games",
          "Work with sprites and tiles",
          "Implement game mechanics",
          "Optimize for performance",
          "Deploy cross-platform"
        ],
        description: [
          "GameMaker Studio هو محرك ألعاب بسيط لتطوير ألعاب ثنائية الأبعاد.",
          "يُستخدم لإنشاء ألعاب مثل Undertale وHyper Light Drifter.",
          "يعتمد على لغة GML لبرمجة السلوكيات.",
          "يُتيح إنشاء الـ sprites والـ tiles لتصميم المستويات.",
          "يُساعد في تطوير ميكانيكيات اللعب بسهولة.",
          "يُحسن الأداء من خلال تحسين الأصول والكود.",
          "يُستخدم لنشر الألعاب على منصات مثل PC وNintendo Switch.",
          "يُعتبر مناسبًا للمبتدئين بفضل واجهته البسيطة.",
          "يُسهل التكامل مع أدوات التصميم ثنائية الأبعاد.",
          "يُحسن إنتاجية المطور من خلال أدوات السحب والإفلات.",
          "يُتيح إنشاء ألعاب مستقلة بسرعة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "GameMaker Docs", url: "https://manual.gamemaker.io/" },
            { name: "Shaun Spalding", url: "https://www.youtube.com/@ShaunSpalding" }
          ],
          paid: [
            { name: "Udemy GameMaker Course", url: "https://www.udemy.com/topic/gamemaker/" },
            { name: "Pluralsight GameMaker", url: "https://www.pluralsight.com/courses/gamemaker-fundamentals" }
          ]
        }
      }
    ]
  }
]

export default function GameDevelpMent(){
    return (
        <Roadmap title={"Game-Development"} sections={sections}/>
    )
}