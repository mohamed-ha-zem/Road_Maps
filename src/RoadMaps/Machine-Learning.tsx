import { Code, Rocket, Box, Terminal, Calculator, Table, Brain, BarChart, CloudSnow, Target, Cpu, Globe, Eye, Cloud, MessageSquare, Search, TrendingUp } from "lucide-react";
import Roadmap from "../Components/RoadMap";
import React from "react";

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
          "Python هي اللغة الأساسية للتعلم الآلي بسبب بساطتها ومكتباتها القوية.",
          "تُستخدم لمعالجة البيانات باستخدام القوائم والقواميس.",
          "تدعم الدوال والوحدات لتنظيم الكود بكفاءة.",
          "تُتيح البرمجة كائنية التوجه لتصميم أنظمة معقدة.",
          "تُساعد في إدارة الأخطاء باستخدام الاستثناءات.",
          "تُستخدم مكتبات NumPy وPandas لتحليل البيانات.",
          "تُسهل Jupyter Notebooks الكتابة التفاعلية واختبار النماذج.",
          "تُعتبر ضرورية لتطوير نماذج التعلم الآلي.",
          "تُستخدم في معالجة البيانات وتدريب النماذج.",
          "تُحسن إنتاجية المطورين في التعلم الآلي.",
          "تُعتبر نقطة البداية للمبتدئين في هذا المجال."
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
          "الرياضيات هي العمود الفقري للتعلم الآلي لفهم الخوارزميات.",
          "يُستخدم الجبر الخطي في المتجهات والمصفوفات للنماذج.",
          "تُساعد التفاضل والتكامل في تحسين النماذج مثل الانحدار.",
          "تُستخدم الاحتمالات لفهم عدم اليقين في البيانات.",
          "تُتيح تقنيات التحسين تصميم نماذج فعالة.",
          "تُساعد الإحصاء في تحليل البيانات وتقييم النماذج.",
          "تُستخدم عمليات المصفوفات في الشبكات العصبية.",
          "يُعتبر التدرج التنازلي (gradient descent) أساسيًا لتدريب النماذج.",
          "تُحسن فهم الخوارزميات المعقدة مثل SVM.",
          "تُستخدم في جميع مراحل تطوير التعلم الآلي.",
          "تُعتبر ضرورية لتحسين أداء النماذج."
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
            { name: "Udemy Math for ML Course", url: "https://www.udemy.com/topic/machine-learning/" },
            { name: "Coursera Math for ML", url: "https://www.coursera.org/courses?query=mathematics%20for%20machine%20learning" }
          ]
        }
      },
      {
        title: "Data Preprocessing",
        icon: <Table className="w-5 h-5 text-yellow-400" />,
        learningOutcomes: [
          "Clean raw data",
          "Handle missing values",
          "Normalize and scale data",
          "Encode categorical variables",
          "Perform feature engineering",
          "Use Pandas for manipulation",
          "Split data for training"
        ],
        description: [
          "معالجة البيانات هي خطوة أساسية لإعداد البيانات للتعلم الآلي.",
          "تتضمن تنظيف البيانات من الأخطاء والتكرارات.",
          "تُستخدم لمعالجة القيم المفقودة بتقنيات مثل الاستيفاء.",
          "تُساعد التطبيع والتوسيع في تحسين أداء النماذج.",
          "تُتيح ترميز المتغيرات القاطعية لاستخدامها في النماذج.",
          "تُستخدم هندسة الميزات لإنشاء ميزات جديدة من البيانات.",
          "تُسهل Pandas معالجة البيانات بكفاءة.",
          "يُعتبر تقسيم البيانات إلى تدريب واختبار ضروريًا.",
          "تُحسن جودة النماذج من خلال بيانات نظيفة.",
          "تُستخدم في جميع مشاريع التعلم الآلي.",
          "تُعتبر مهارة أساسية لعلماء البيانات."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Kaggle Data Cleaning", url: "https://www.kaggle.com/learn/data-cleaning" },
            { name: "Pandas Docs", url: "https://pandas.pydata.org/docs/" }
          ],
          paid: [
            { name: "Udemy Data Preprocessing Course", url: "https://www.udemy.com/topic/data-science/" },
            { name: "Pluralsight Data Wrangling", url: "https://www.pluralsight.com/courses/python-data-wrangling" }
          ]
        }
      }
    ]
  },
  {
    title: "الخوارزميات الأساسية",
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
          "تُستخدم التصنيفات للتنبؤ بالفئات مثل البريد العشوائي.",
          "يُعتبر الانحدار الخطي أساسيًا لنماذج بسيطة.",
          "يُستخدم الانحدار اللوجستي للتصنيف الثنائي.",
          "تُساعد أشجار القرار في التصنيف والانحدار المعقد.",
          "يُستخدم لتقييم دقة النماذج بمقاييس مثل RMSE.",
          "يُعالج الإفراط في التدريب (overfitting) بتقنيات مثل التنظيم.",
          "يُعتبر أساسيًا لتطبيقات مثل التنبؤ بالمبيعات.",
          "يُستخدم في مكتبات مثل Scikit-learn.",
          "يُحسن دقة التنبؤ في التطبيقات العملية."
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
          "يُستخدم التجميع (clustering) لتجميع البيانات المتشابهة.",
          "يُعتبر K-means خوارزمية شائعة لتقسيم البيانات.",
          "يُستخدم PCA لتقليل الأبعاد وتبسيط البيانات.",
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
            { name: "Kaggle Unsupervised Learning", url: "https://www.kaggle.com/learn" }
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
          "يُستخدم لتحسين وظائف المكافأة لتحقيق أداء أفضل.",
          "يُستخدم لتقييم النماذج بناءً على المكافآت المتراكمة.",
          "يُعتبر مجالًا متقدمًا في التعلم الآلي.",
          "يُستخدم في تطبيقات مثل الروبوتات والألعاب.",
          "يُحسن اتخاذ القرارات في البيئات الديناميكية.",
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
          "TensorFlow هي مكتبة قوية لتطوير نماذج التعلم العميق.",
          "تُستخدم لبناء الشبكات العصبية لمهام مثل تصنيف الصور.",
          "تُتيح Keras تبسيط تصميم النماذج وتدريبها.",
          "تُستخدم CNNs لمعالجة الصور وRNNs للبيانات المتسلسلة.",
          "تُساعد في تحسين النماذج باستخدام GPUs.",
          "تُستخدم لنشر النماذج في بيئات الإنتاج.",
          "تُتيح TensorBoard تصور تقدم تدريب النماذج.",
          "يُعتبر أداة أساسية للتعلم العميق.",
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
          "يُحسن إنتاجية الباحثين في التعلم العميق.",
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
        title: "Keras",
        icon: <Brain className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Build neural networks",
          "Implement deep learning models",
          "Use sequential API",
          "Work with functional API",
          "Optimize model performance",
          "Integrate with TensorFlow",
          "Handle data preprocessing"
        ],
        description: [
          "Keras هي واجهة عالية المستوى لبناء نماذج التعلم العميق.",
          "تُستخدم لبناء الشبكات العصبية بسهولة وسرعة.",
          "تُتيح Sequential API تصميم نماذج بسيطة خطوة بخطوة.",
          "تدعم Functional API بناء نماذج معقدة ومرنة.",
          "تُساعد في تحسين أداء النماذج بتقنيات التنظيم.",
          "تتكامل مع TensorFlow لتدريب النماذج بكفاءة.",
          "تُتيح معالجة البيانات كجزء من خط الأنابيب.",
          "يُعتبر أداة مثالية للمبتدئين في التعلم العميق.",
          "يُستخدم في تطبيقات مثل تصنيف الصور والنصوص.",
          "يُحسن سرعة تطوير النماذج.",
          "يُعتبر جزءًا من نظام TensorFlow البيئي."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Keras Docs", url: "https://keras.io/" },
            { name: "DeepLearning.AI", url: "https://www.deeplearning.ai/" }
          ],
          paid: [
            { name: "Udemy Keras Course", url: "https://www.udemy.com/topic/keras/" },
            { name: "Pluralsight Keras", url: "https://www.pluralsight.com/courses/keras-deep-learning-python" }
          ]
        }
      }
    ]
  },
  {
    title: "تطبيقات التعلم الآلي",
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
          "تتضمن معالجة الصور لتحسين جودتها أو استخراج الميزات.",
          "تُستخدم CNNs لتصنيف الصور واكتشاف الأشياء.",
          "تُتيح OpenCV معالجة الصور بسهولة وكفاءة.",
          "يُستخدم اكتشاف الأشياء في تطبيقات مثل المركبات الذاتية.",
          "تُساعد تجزئة الصور في تحديد مناطق معينة بالصورة.",
          "يُستخدم التعلم المنقول لتسريع تطوير النماذج.",
          "يُعتبر مجالًا رئيسيًا في التعلم الآلي.",
          "يُستخدم في تطبيقات مثل التعرف على الوجوه.",
          "يُحسن أداء الأنظمة في البيئات المرئية.",
          "يُتيح نشر نماذج الرؤية في تطبيقات حقيقية."
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
          "تتضمن التقطيع (tokenization) لتقسيم النصوص إلى كلمات.",
          "تُستخدم مكتبات NLTK و spaCy لمعالجة النصوص بسهولة.",
          "يُستخدم تحليل العاطفة لفهم مشاعر النصوص.",
          "تُتيح المحولات (transformers) نماذج متقدمة مثل BERT.",
          "تُساعد التضمينات مثل Word2Vec في تمثيل الكلمات.",
          "يُعتبر مجالًا رئيسيًا في التعلم الآلي.",
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
        title: "Time Series Analysis",
        icon: <TrendingUp className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Understand time series data",
          "Implement ARIMA models",
          "Use Prophet for forecasting",
          "Work with LSTM models",
          "Handle seasonality",
          "Evaluate time series models",
          "Integrate with Pandas"
        ],
        description: [
          "تحليل السلاسل الزمنية يُستخدم للتنبؤ بالبيانات المتغيرة مع الزمن.",
          "يتضمن فهم البيانات مثل الأسعار والمبيعات.",
          "تُستخدم نماذج ARIMA لتتنبؤ بالسلاسل الزمنية.",
          "تُتيح Prophet التنبؤ بسهولة مع التعامل مع الاتجاهات.",
          "تُستخدم نماذج LSTM لتحليل السلاسل المعقدة.",
          "تُساعد في التعامل مع الموسمية في البيانات.",
          "يُستخدم لتقييم النماذج بمقاييس مثل MAE.",
          "يُعتبر مفيدًا في التمويل والطاقة.",
          "يُستخدم في مكتبات مثل Pandas وStatsmodels.",
          "يُحسن التنبؤ في التطبيقات العملية.",
          "يتكامل مع Python لتحليل فعال."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Statsmodels Docs", url: "https://www.statsmodels.org/" },
            { name: "Prophet Docs", url: "https://facebook.github.io/prophet/" }
          ],
          paid: [
            { name: "Udemy Time Series Course", url: "https://www.udemy.com/topic/time-series/" },
            { name: "Pluralsight Time Series", url: "https://www.pluralsight.com/courses/time-series-analysis-python" }
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
          "MLOps يُركز على أتمتة وإدارة دورة حياة نماذج التعلم الآلي.",
          "تُستخدم لأتمتة خطوط الأنابيب من التدريب إلى النشر.",
          "تُتيح MLflow تتبع التجارب وإدارة النماذج بكفاءة.",
          "يُستخدم Docker لنشر النماذج في بيئات موحدة.",
          "تُساعد في مراقبة أداء النماذج في الوقت الفعلي.",
          "تتكامل مع CI/CD لأتمتة النشر المستمر.",
          "تُتيح إدارة إصدارات النماذج لضمان الاستقرار.",
          "يُعتبر مجالًا ناشئًا في التعلم الآلي.",
          "يُستخدم في تطبيقات مثل التوصيات والتنبؤ.",
          "يُحسن كفاءة نشر النماذج في الصناعة.",
          "يُعتبر مطلوبًا بشدة في سوق."
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
          "النشر على السحابة يُستخدم لتشغيل نماذج التعلم الآلي في بيئات قابلة للتوسع.",
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
            { name: "Pluralsight Azure ML", url: "https://www.pluralsight.com/paths/microsoft/azure-architectures" }
          ]
        }
      },
      {
        title: "Model Interpretability",
        icon: <Search className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Understand model explainability",
          "Use SHAP for feature importance",
          "Apply LIME",
          "Visualize model decisions",
          "Handle black-box models",
          "Integrate with Python",
          "Communicate insights"
        ],
        description: [
            "تفسير النماذج يُركز على فهم قرارات النماذج.",
            "تُستخدم SHAP لتحديد أهمية الميزات في النماذج.",
            "تُتيح LIME تفسير محلية للتنبؤات.",
            "تُساعد في تصور قرارات النماذج لفهمها بشكل بصري.",
            "تُتعامل مع النماذج الصندوقية مثل الشبكات العصبية.",
            "تتكامل مع Python باستخدام مكتبات التفسير.",
            "تُتيح توصيل الأفكار لأصحاب المصلحة غير التقنيين.",
            "يُعتبر ضروريًا لتطبيقات حساسة مثل الطب.",
            "يُحسن الثقة في نماذج التعلم الآلي.",
            "يُستخدم في تحليل القرارات في الصناعة.",
            "يُعتبر مجالًا مهمًا في التعلم الآلي."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "SHAP Docs", url: "https://shap.readthedocs.io/en/latest/" },
            { name: "LIME Docs", url: "https://github.com/marcotcr/lime" }
          ],
          paid: [
            { name: "Udemy Model Interpretability Course", url: "https://www.udemy.com/topic/ml/" },
            { name: "Pluralsight ML Interpretability", url: "https://www.pluralsight.com/courses/explainable-ai-python" }
          ]
        }
      }
    ]
  },
]

export default function MachineLearning(){
    return (
        <Roadmap title={"Machine-Learning"} sections={sections}/>
    )
}