import Roadmap from "../Components/RoadMap";
import React from "react";
import { 
  Code, 
  Terminal, 
  Calculator, 
  Cpu, 
  Brain, 
  BarChart, 
  Target, 
  Globe, 
  Eye, 
  MessageSquare, 
  Bot, 
  Rocket, 
  Box, 
  Cloud, 
  Sparkles, 
  CloudSnow
} from "lucide-react";

const sections = [
  {
    title: "الأساسيات",
    icon: <Code className="w-6 h-6 text-amber-400" />,
    children: [
      {
        title: "Python",
        icon: <Terminal className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Master Python syntax",
          "Work with data structures",
          "Use functions and modules",
          "Implement object-oriented programming",
          "Handle exceptions",
          "Use NumPy and Pandas",
          "Work with Jupyter notebooks"
        ],
        description: [
          "Python هي اللغة الأساسية للذكاء الاصطناعي بسبب مرونتها ومكتباتها القوية.",
          "تُستخدم لمعالجة البيانات باستخدام القوائم والقواميس.",
          "تدعم الدوال والوحدات لتنظيم الكود بشكل فعال.",
          "تُتيح البرمجة كائنية التوجه لتصميم الأنظمة المعقدة.",
          "تُساعد في إدارة الأخطاء باستخدام الاستثناءات.",
          "تُستخدم مكتبات NumPy وPandas لتحليل البيانات بكفاءة.",
          "تُسهل Jupyter Notebooks الكتابة التفاعلية واختبار النماذج.",
          "تُعتبر ضرورية لبناء أنظمة الذكاء الاصطناعي.",
          "تُستخدم في تطوير نماذج التعلم الآلي والعميق.",
          "تُحسن إنتاجية المطورين في مجال الذكاء الاصطناعي.",
          "تُعتبر نقطة انطلاق مثالية للمبتدئين."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Python Official Docs", url: "https://docs.python.org/3/" },
            { name: "freeCodeCamp Python", url: "https://www.youtube.com/@freecodecamp" }
          ],
          paid: [
            { name: "Udemy Python Course", url: "https://www.udemy.com/topic/python/" },
            { name: "Pluralsight Python", url: "https://www.pluralsight.com/paths/python" }
          ]
        }
      },
      {
        title: "Mathematics",
        icon: <Calculator className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand linear algebra",
          "Apply calculus concepts",
          "Work with probability",
          "Use optimization techniques",
          "Master statistics",
          "Implement matrix operations",
          "Understand gradient descent"
        ],
        description: [
          "الرياضيات هي أساس الذكاء الاصطناعي لفهم الخوارزميات وتطويرها.",
          "يُستخدم الجبر الخطي في المتجهات والمصفوفات للنماذج.",
          "تُساعد التفاضل والتكامل في تحسين النماذج مثل الشبكات العصبية.",
          "تُستخدم الاحتمالات للتعامل مع عدم اليقين في البيانات.",
          "تُتيح تقنيات التحسين تصميم نماذج فعالة.",
          "تُساعد الإحصاء في تحليل البيانات وتقييم الأداء.",
          "تُستخدم عمليات المصفوفات في التعلم العميق.",
          "يُعتبر التدرج التنازلي أساسيًا لتدريب النماذج.",
          "تُحسن فهم الخوارزميات المعقدة مثل المحولات.",
          "تُستخدم في جميع مراحل تطوير الذكاء الاصطناعي.",
          "تُعتبر ضرورية لتحقيق دقة عالية في النماذج."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Khan Academy Math", url: "https://www.khanacademy.org/math" },
            { name: "3Blue1Brown", url: "https://www.youtube.com/@3blue1brown" }
          ],
          paid: [
            { name: "Udemy Math for AI Course", url: "https://www.udemy.com/topic/artificial-intelligence/" },
            { name: "Coursera Math for AI", url: "https://www.coursera.org/courses?query=mathematics%20for%20machine%20learning" }
          ]
        }
      },
      {
        title: "Algorithms",
        icon: <Cpu className="w-5 h-5 text-yellow-400" />,
        learningOutcomes: [
          "Understand search algorithms",
          "Implement sorting algorithms",
          "Work with graph algorithms",
          "Apply dynamic programming",
          "Use divide-and-conquer",
          "Analyze algorithm complexity",
          "Optimize algorithmic performance"
        ],
        description: [
          "الخوارزميات هي أساس بناء أنظمة الذكاء الاصطناعي الفعالة.",
          "تُستخدم خوارزميات البحث مثل BFS وDFS في التخطيط.",
          "تُساعد خوارزميات الفرز في تنظيم البيانات بكفاءة.",
          "تُستخدم خوارزميات الرسوم البيانية في الشبكات والتوصيات.",
          "تُتيح البرمجة الديناميكية حل المشكلات المعقدة.",
          "تُستخدم تقنية قسم وافرض لتسريع الحلول.",
          "يُستخدم تحليل التعقيد لتقييم كفاءة الخوارزميات.",
          "تُحسن الأداء في تطبيقات الذكاء الاصطناعي.",
          "تُعتبر ضرورية لفهم التعلم الآلي والتخطيط.",
          "تُستخدم في مجالات مثل الروبوتات والألعاب.",
          "تُتيح بناء حلول ذكية وقابلة للتوسع."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "GeeksforGeeks Algorithms", url: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/" },
            { name: "freeCodeCamp Algorithms", url: "https://www.youtube.com/@freecodecamp" }
          ],
          paid: [
            { name: "Udemy Algorithms Course", url: "https://www.udemy.com/topic/algorithms/" },
            { name: "Pluralsight Algorithms", url: "https://www.pluralsight.com/courses/algorithms-data-structures-part1" }
          ]
        }
      }
    ]
  },
  {
    title: "التعلم الآلي",
    icon: <Brain className="w-6 h-6 text-cyan-400" />,
    children: [
      {
        title: "Supervised Learning",
        icon: <BarChart className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand regression",
          "Implement classification",
          "Use linear regression",
          "Apply logistic regression",
          "Work with decision trees",
          "Evaluate model accuracy",
          "Handle overfitting"
        ],
        description: [
          "التعلم الموجّه يعتمد على بيانات موسومة لتدريب النماذج.",
          "يُستخدم الانحدار للتنبؤ بالقيم المستمرة مثل الأسعار.",
          "تُستخدم التصنيفات للتنبؤ بالفئات مثل التشخيص الطبي.",
          "يُعتبر الانحدار الخطي أساسيًا للنماذج البسيطة.",
          "يُستخدم الانحدار اللوجستي للتصنيف الثنائي.",
          "تُساعد أشجار القرار في التصنيف والانحدار المعقد.",
          "يُستخدم لتقييم دقة النماذج بمقاييس مثل Accuracy.",
          "يُعالج الإفراط في التدريب بتقنيات مثل التنظيم.",
          "يُعتبر أساسيًا لتطبيقات الذكاء الاصطناعي.",
          "يُستخدم في مكتبات مثل Scikit-learn.",
          "يُحسن التنبؤ في التطبيقات العملية."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Scikit-learn Docs", url: "https://scikit-learn.org/stable/" },
            { name: "StatQuest", url: "https://www.youtube.com/@statquest" }
          ],
          paid: [
            { name: "Udemy Supervised Learning Course", url: "https://www.udemy.com/topic/machine-learning/" },
            { name: "Coursera Supervised Learning", url: "https://www.coursera.org/courses?query=supervised%20learning" }
          ]
        }
      },
      {
        title: "Unsupervised Learning",
        icon: <CloudSnow className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "Understand clustering",
          "Implement K-means",
          "Use PCA for dimensionality reduction",
          "Apply anomaly detection",
          "Work with hierarchical clustering",
          "Evaluate clustering results",
          "Handle high-dimensional data"
        ],
        description: [
          "التعلم غير الموجّه يُستخدم لتحليل البيانات غير الموسومة.",
          "يُستخدم التجميع لتجميع البيانات المتشابهة مثل العملاء.",
          "يُعتبر K-means خوارزمية شائعة لتقسيم البيانات.",
          "يُستخدم PCA لتقليل الأبعاد وتبسيط النماذج.",
          "تُساعد كشف الشذوذ في تحديد البيانات غير الطبيعية.",
          "يُستخدم التجميع الهرمي لفهم العلاقات الهيكلية.",
          "يُستخدم لتقييم نتائج التجميع بمقاييس مثل Silhouette.",
          "يُعتبر مفيدًا في تحليل السوق واكتشاف الأنماط.",
          "يُستخدم في مكتبات مثل Scikit-learn.",
          "يُحسن فهم البيانات في التطبيقات الاستكشافية.",
          "يُتيح التعامل مع البيانات عالية الأبعاد."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Scikit-learn Docs", url: "https://scikit-learn.org/stable/" },
            { name: "Kaggle Tutorials", url: "https://www.kaggle.com/learn" }
          ],
          paid: [
            { name: "Udemy Unsupervised Learning Course", url: "https://www.udemy.com/topic/machine-learning/" },
            { name: "Pluralsight Unsupervised Learning", url: "https://www.pluralsight.com/courses/unsupervised-machine-learning-python" }
          ]
        }
      },
      {
        title: "Reinforcement Learning",
        icon: <Target className="w-5 h-5 text-red-400" />,
        learningOutcomes: [
          "Understand RL concepts",
          "Implement Q-learning",
          "Use policy gradients",
          "Work with environments",
          "Apply deep RL",
          "Optimize reward functions",
          "Evaluate RL models"
        ],
        description: [
          "التعلم المعزز يعتمد على التفاعل مع البيئة لتحقيق أهداف.",
          "يُستخدم Q-learning لتعليم الوكلاء اتخاذ القرارات.",
          "تُساعد تدرجات السياسة في تحسين استراتيجيات الوكيل.",
          "تُستخدم البيئات مثل OpenAI Gym لتدريب النماذج.",
          "يُتيح التعلم المعزز العميق تطبيقات معقدة مثل الألعاب.",
          "يُستخدم لتحسين وظائف المكافأة لأداء أفضل.",
          "يُستخدم لتقييم النماذج بناءً على المكافآت المتراكمة.",
          "يُعتبر مجالًا متقدمًا في الذكاء الاصطناعي.",
          "يُستخدم في الروبوتات والألعاب الذكية.",
          "يُحسن اتخاذ القرارات في الأنظمة الديناميكية.",
          "يُتيح بناء أنظمة ذكية مستقلة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "OpenAI Spinning Up", url: "https://spinningup.openai.com/" },
            { name: "DeepMind RL", url: "https://www.youtube.com/@DeepMind" }
          ],
          paid: [
            { name: "Udemy RL Course", url: "https://www.udemy.com/topic/reinforcement-learning/" },
            { name: "Coursera RL", url: "https://www.coursera.org/courses?query=reinforcement%20learning" }
          ]
        }
      }
    ]
  },
  {
    title: "التعلم العميق",
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    children: [
      {
        title: "TensorFlow",
        icon: <Brain className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "Build neural networks",
          "Use Keras API",
          "Implement CNNs",
          "Work with RNNs",
          "Optimize models",
          "Deploy models",
          "Use TensorBoard"
        ],
        description: [
          "TensorFlow هي منصة قوية لتطوير نماذج التعلم العميق.",
          "تُستخدم لبناء الشبكات العصبية لمهام مثل تصنيف الصور.",
          "تُتيح Keras تبسيط تصميم النماذج وتدريبها.",
          "تُستخدم CNNs لمعالجة الصور وRNNs للبيانات المتسلسلة.",
          "تُساعد في تحسين النماذج باستخدام GPUs.",
          "تُستخدم لنشر النماذج في بيئات الإنتاج.",
          "تُتيح TensorBoard تصور تقدم تدريب النماذج.",
          "يُعتبر أداة أساسية في الذكاء الاصطناعي.",
          "يُستخدم في تطبيقات مثل معالجة اللغة والصوت.",
          "يُحسن أداء النماذج في المهام المعقدة.",
          "يُعتبر خيارًا شائعًا في الصناعة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "TensorFlow Docs", url: "https://www.tensorflow.org/learn" },
            { name: "DeepLearning.AI", url: "https://www.deeplearning.ai/" }
          ],
          paid: [
            { name: "Udemy TensorFlow Course", url: "https://www.udemy.com/topic/tensorflow/" },
            { name: "Pluralsight TensorFlow", url: "https://www.pluralsight.com/paths/tensorflow" }
          ]
        }
      },
      {
        title: "PyTorch",
        icon: <Brain className="w-5 h-5 text-red-400" />,
        learningOutcomes: [
          "Build dynamic neural networks",
          "Implement deep learning models",
          "Use torch tensors",
          "Handle GPU acceleration",
          "Optimize training",
          "Deploy models",
          "Work with research pipelines"
        ],
        description: [
          "PyTorch هي مكتبة مرنة لتطوير نماذج التعلم العميق.",
          "تُستخدم لبناء شبكات عصبية ديناميكية بسهولة.",
          "تدعم الـ tensors للحسابات الرياضية الفعالة.",
          "تُتيح استخدام GPU لتسريع تدريب النماذج.",
          "تُساعد في تحسين التدريب بتقنيات متقدمة.",
          "تُستخدم لنشر النماذج في التطبيقات العملية.",
          "تُعتبر مثالية للأبحاث بسبب مرونتها العالية.",
          "يُستخدم في معالجة اللغة الطبيعية والصور.",
          "يُحسن إنتاجية الباحثين في الذكاء الاصطناعي.",
          "يتكامل مع مكتبات مثل NumPy.",
          "يُعتبر مفضلاً في الأوساط الأكاديمية."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "PyTorch Docs", url: "https://pytorch.org/docs/stable/" },
            { name: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/" }
          ],
          paid: [
            { name: "Udemy PyTorch Course", url: "https://www.udemy.com/topic/pytorch/" },
            { name: "Pluralsight PyTorch", url: "https://www.pluralsight.com/courses/pytorch-fundamentals" }
          ]
        }
      },
      {
        title: "Transformers",
        icon: <Brain className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Understand transformer architecture",
          "Implement BERT models",
          "Use Hugging Face library",
          "Fine-tune pre-trained models",
          "Work with attention mechanisms",
          "Apply transformers to NLP",
          "Deploy transformer models"
        ],
        description: [
          "المحولات هي تقنية متقدمة في التعلم العميق لمعالجة البيانات.",
          "تُستخدم بنية المحولات في نماذج مثل BERT وGPT.",
          "تُتيح مكتبة Hugging Face استخدام نماذج جاهزة بسهولة.",
          "تُساعد في تهيئة النماذج المدربة مسبقًا لمهام محددة.",
          "تُستخدم آليات الانتباه لفهم العلاقات في البيانات.",
          "تُستخدم في معالجة اللغة الطبيعية مثل الترجمة.",
          "تُتيح نشر نماذج المحولات في تطبيقات حقيقية.",
          "يُعتبر أداة رئيسية في الذكاء الاصطناعي الحديث.",
          "يُستخدم في تطبيقات مثل الدردشة والتلخيص.",
          "يُحسن الأداء في المهام اللغوية المعقدة.",
          "يُعتبر أساسيًا لتطوير نماذج متقدمة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Hugging Face Docs", url: "https://huggingface.co/docs" },
            { name: "Transformers Tutorials", url: "https://huggingface.co/docs/transformers" }
          ],
          paid: [
            { name: "Udemy Transformers Course", url: "https://www.udemy.com/topic/transformers/" },
            { name: "Coursera NLP", url: "https://www.coursera.org/courses?query=natural%20language%20processing" }
          ]
        }
      }
    ]
  },
  {
    title: "تطبيقات الذكاء الاصطناعي",
    icon: <Globe className="w-6 h-6 text-green-400" />,
    children: [
      {
        title: "Computer Vision",
        icon: <Eye className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand image processing",
          "Implement CNNs",
          "Use OpenCV",
          "Perform object detection",
          "Apply image segmentation",
          "Work with transfer learning",
          "Deploy vision models"
        ],
        description: [
          "الرؤية الحاسوبية تُستخدم لتحليل الصور ومقاطع الفيديو.",
          "تتضمن معالجة الصور لاستخراج الميزات أو تحسين الجودة.",
          "تُستخدم CNNs لتصنيف الصور واكتشاف الأشياء.",
          "تُتيح OpenCV معالجة الصور بكفاءة وسهولة.",
          "يُستخدم اكتشاف الأشياء في تطبيقات مثل المركبات الذاتية.",
          "تُساعد تجزئة الصور في تحديد مناطق معينة بالصورة.",
          "يُستخدم التعلم المنقول لتسريع تطوير النماذج.",
          "يُعتبر مجالًا رئيسيًا في الذكاء الاصطناعي.",
          "يُستخدم في تطبيقات مثل التعرف على الوجوه.",
          "يُحسن الأداء في الأنظمة المرئية.",
          "يُتيح نشر نماذج الرؤية في بيئات حقيقية."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "OpenCV Docs", url: "https://docs.opencv.org/" },
            { name: "PyImageSearch", url: "https://www.pyimagesearch.com/" }
          ],
          paid: [
            { name: "Udemy Computer Vision Course", url: "https://www.udemy.com/topic/computer-vision/" },
            { name: "Pluralsight Computer Vision", url: "https://www.pluralsight.com/courses/opencv-python-fundamentals" }
          ]
        }
      },
      {
        title: "Natural Language Processing",
        icon: <MessageSquare className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "Understand NLP tasks",
          "Implement tokenization",
          "Use NLTK and spaCy",
          "Build sentiment analysis models",
          "Work with transformers",
          "Apply word embeddings",
          "Deploy NLP models"
        ],
        description: [
          "معالجة اللغة الطبيعية تُستخدم لتحليل النصوص واللغة.",
          "تتضمن التقطيع لتقسيم النصوص إلى كلمات أو جمل.",
          "تُستخدم مكتبات NLTK وspaCy لمعالجة النصوص بسهولة.",
          "يُستخدم تحليل العاطفة لفهم مشاعر النصوص.",
          "تُتيح المحولات نماذج متقدمة مثل BERT وGPT.",
          "تُساعد التضمينات مثل Word2Vec في تمثيل الكلمات.",
          "يُعتبر مجالًا رئيسيًا في الذكاء الاصطناعي.",
          "يُستخدم في تطبيقات مثل الدردشة والترجمة.",
          "يُحسن التفاعل مع النصوص في التطبيقات.",
          "يُتيح بناء أنظمة ذكية مثل المساعدات الافتراضية.",
          "يُستخدم لنشر نماذج NLP في بيئات حقيقية."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Hugging Face Docs", url: "https://huggingface.co/docs" },
            { name: "NLTK Docs", url: "https://www.nltk.org/" }
          ],
          paid: [
            { name: "Udemy NLP Course", url: "https://www.udemy.com/topic/natural-language-processing/" },
            { name: "Pluralsight NLP", url: "https://www.pluralsight.com/courses/nlp-fundamentals" }
          ]
        }
      },
      {
        title: "Robotics",
        icon: <Bot className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Understand robotics principles",
          "Use ROS framework",
          "Implement path planning",
          "Apply computer vision",
          "Work with sensors",
          "Control robotic systems",
          "Integrate AI models"
        ],
        description: [
          "الروبوتات تُستخدم لتطوير أنظمة ذكية تتفاعل مع العالم الحقيقي.",
          "يُستخدم إطار ROS لتطوير تطبيقات الروبوتات بسهولة.",
          "تُستخدم تخطيط المسار لتوجيه الروبوتات في البيئات.",
          "تُساعد الرؤية الحاسوبية في تحليل البيئة المحيطة.",
          "تُستخدم المستشعرات لجمع البيانات مثل المسافة والضوء.",
          "تُتيح التحكم في الأنظمة الروبوتية تنفيذ المهام.",
          "تتكامل مع نماذج الذكاء الاصطناعي لتحسين الأداء.",
          "يُعتبر مجالًا متقدمًا في الذكاء الاصطناعي.",
          "يُستخدم في تطبيقات مثل الروبوتات الصناعية.",
          "يُحسن كفاءة الأنظمة الذكية في البيئات الحقيقية.",
          "يُتيح بناء روبوتات مستقلة وقابلة للتكيف."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "ROS Docs", url: "http://wiki.ros.org/" },
            { name: "Robot Ignite Academy", url: "https://www.robotigniteacademy.com/" }
          ],
          paid: [
            { name: "Udemy Robotics Course", url: "https://www.udemy.com/topic/robotics/" },
            { name: "Pluralsight Robotics", url: "https://www.pluralsight.com/courses/ros-fundamentals" }
          ]
        }
      }
    ]
  },
  {
    title: "النشر والإضافات",
    icon: <Rocket className="w-6 h-6 text-teal-400" />,
    children: [
      {
        title: "MLOps",
        icon: <Box className="w-5 h-5 text-yellow-400" />,
        learningOutcomes: [
          "Understand MLOps principles",
          "Automate ML pipelines",
          "Use MLflow for tracking",
          "Deploy models with Docker",
          "Monitor model performance",
          "Integrate with CI/CD",
          "Manage model versioning"
        ],
        description: [
          "MLOps يُركز على أتمتة وإدارة دورة حياة نماذج الذكاء الاصطناعي.",
          "تُستخدم لأتمتة خطوط الأنابيب من التدريب إلى النشر.",
          "تُتيح MLflow تتبع التجارب وإدارة النماذج بكفاءة.",
          "يُستخدم Docker لنشر النماذج في بيئات موحدة.",
          "تُساعد في مراقبة أداء النماذج في الوقت الفعلي.",
          "تتكامل مع CI/CD لأتمتة النشر المستمر.",
          "تُتيح إدارة إصدارات النماذج لضمان الاستقرار.",
          "يُعتبر مجالًا ناشئًا في الذكاء الاصطناعي.",
          "يُستخدم في تطبيقات مثل التوصيات والتنبؤ.",
          "يُحسن كفاءة نشر النماذج في الصناعة.",
          "يُعتبر مطلوبًا بشدة في سوق العمل."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "MLflow Docs", url: "https://mlflow.org/docs/" },
            { name: "DataCamp MLOps", url: "https://www.datacamp.com/tracks/mlops" }
          ],
          paid: [
            { name: "Udemy MLOps Course", url: "https://www.udemy.com/topic/mlops/" },
            { name: "Pluralsight MLOps", url: "https://www.pluralsight.com/courses/mlops-fundamentals" }
          ]
        }
      },
      {
        title: "Cloud Deployment",
        icon: <Cloud className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand cloud platforms",
          "Use AWS SageMaker",
          "Deploy with Azure ML",
          "Manage model hosting",
          "Optimize for scalability",
          "Integrate with Python",
          "Monitor cloud models"
        ],
        description: [
          "النشر على السحابة يُستخدم لتشغيل نماذج الذكاء الاصطناعي بكفاءة.",
          "تُتيح AWS SageMaker بناء ونشر نماذج بسهولة.",
          "تُساعد Azure ML في إدارة دورة حياة النماذج.",
          "تُستخدم لاستضافة النماذج في بيئات الإنتاج.",
          "تُحسن قابلية التوسع للتعامل مع الأحمال الكبيرة.",
          "تتكامل مع Python لأتمتة النشر.",
          "تُساعد في مراقبة النماذج لضمان الأداء.",
          "يُعتبر ضروريًا للتطبيقات الصناعية.",
          "يُستخدم في مشاريع مثل التحليلات في الوقت الفعلي.",
          "يُحسن كفاءة النشر في بيئات السحابة.",
          "يُعتبر مهارة مطلوبة في السوق."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "AWS Training", url: "https://aws.amazon.com/training/" },
            { name: "Azure Docs", url: "https://learn.microsoft.com/en-us/azure/" }
          ],
          paid: [
            { name: "Udemy AWS SageMaker Course", url: "https://www.udemy.com/topic/aws/" },
            { name: "Pluralsight Azure ML", url: "https://www.pluralsight.com/paths/microsoft-azure-architect" }
          ]
        }
      },
      {
        title: "Generative AI",
        icon: <Sparkles className="w-5 h-5 text-pink-400" />,
        learningOutcomes: [
          "Understand generative models",
          "Implement GANs",
          "Use VAEs",
          "Work with diffusion models",
          "Apply text-to-image models",
          "Fine-tune generative models",
          "Deploy generative AI"
        ],
        description: [
          "الذكاء الاصطناعي التوليدي يُستخدم لإنشاء محتوى جديد مثل الصور والنصوص.",
          "تُستخدم GANs لإنشاء صور واقعية من البيانات.",
          "تُتيح VAEs إنشاء بيانات متنوعة باستخدام التوزيعات.",
          "تُستخدم نماذج الانتشار لإنشاء صور عالية الجودة.",
          "تُساعد نماذج النص إلى الصورة مثل DALL-E في التوليد الإبداعي.",
          "تُتيح التهيئة الدقيقة تخصيص النماذج لمهام معينة.",
          "تُستخدم لنشر نماذج التوليد في تطبيقات حقيقية.",
          "يُعتبر مجالًا مبتكرًا في الذكاء الاصطناعي.",
          "يُستخدم في تطبيقات مثل الفن والتصميم.",
          "يُحسن الإبداع في الأنظمة الذكية.",
          "يُتيح إنشاء محتوى مخصص بكفاءة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Hugging Face Docs", url: "https://huggingface.co/docs" },
            { name: "DeepLearning.AI Generative AI", url: "https://www.deeplearning.ai/" }
          ],
          paid: [
            { name: "Udemy Generative AI Course", url: "https://www.udemy.com/topic/generative-ai/" },
            { name: "Coursera Generative AI", url: "https://www.coursera.org/courses?query=generative%20ai" }
          ]
        }
      }
    ]
  }
]

export default function AI(){
    return (
        <Roadmap title={"AI"} sections={sections}/>
    )
}