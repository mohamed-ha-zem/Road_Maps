import { BarChart, Box, Brain, Cloud, Code, Cpu, Database, PieChart, Server, Table, Terminal } from "lucide-react";
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
          "Understand Python syntax",
          "Work with data structures",
          "Use functions and modules",
          "Implement object-oriented programming",
          "Handle exceptions",
          "Work with libraries like NumPy",
          "Use Jupyter notebooks"
        ],
        description: [
          "Python هي لغة البرمجة الأساسية لعلم البيانات بسبب بساطتها ومكتباتها القوية.",
          "تُستخدم لمعالجة البيانات باستخدام هياكل مثل القوائم والقواميس.",
          "تدعم الدوال والوحدات لتنظيم الكود وإعادة استخدامه.",
          "تُتيح البرمجة كائنية التوجه لتصميم الكود بشكل منظم.",
          "تُساعد في معالجة الأخطاء باستخدام استثناءات (exceptions).",
          "تُستخدم مكتبات مثل NumPy وPandas لتحليل البيانات.",
          "تُسهل Jupyter Notebooks الكتابة التفاعلية للكود وتصور البيانات.",
          "تُعتبر ضرورية لمعظم أدوات ومكتبات علم البيانات.",
          "تُستخدم في التعلم الآلي وتحليل البيانات الضخمة.",
          "تُحسن إنتاجية العاملين في علم البيانات.",
          "تُعتبر الخيار الأول للمبتدئين في علم البيانات."
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
        title: "Statistics",
        icon: <BarChart className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand descriptive statistics",
          "Apply probability concepts",
          "Use hypothesis testing",
          "Work with distributions",
          "Perform regression analysis",
          "Interpret statistical results",
          "Use statistical tools"
        ],
        description: [
          "الإحصاء هو أساس علم البيانات لفهم البيانات وتحليلها.",
          "يتضمن الإحصاء الوصفي مثل المتوسط والانحراف المعياري.",
          "تُستخدم الاحتمالات لفهم الأحداث العشوائية.",
          "يُساعد اختبار الفرضيات في التحقق من صحة الافتراضات.",
          "تُستخدم التوزيعات مثل التوزيع الطبيعي في تحليل البيانات.",
          "يُتيح تحليل الانحدار فهم العلاقات بين المتغيرات.",
          "يُساعد في تفسير النتائج الإحصائية لاتخاذ القرارات.",
          "يُستخدم في أدوات مثل Python وR لتحليل البيانات.",
          "يُعتبر ضروريًا لتصميم التجارب وتحليل النتائج.",
          "يُحسن دقة النماذج في التعلم الآلي.",
          "يُستخدم في مجالات مثل التمويل والتسويق."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Khan Academy Statistics", url: "https://www.khanacademy.org/math/statistics-probability" },
            { name: "StatQuest", url: "https://www.youtube.com/@statquest" }
          ],
          paid: [
            { name: "Udemy Statistics Course", url: "https://www.udemy.com/topic/statistics/" },
            { name: "Coursera Statistics", url: "https://www.coursera.org/courses?query=statistics" }
          ]
        }
      },
      {
        title: "Data Wrangling",
        icon: <Table className="w-5 h-5 text-yellow-400" />,
        learningOutcomes: [
          "Clean messy data",
          "Handle missing values",
          "Transform data formats",
          "Merge datasets",
          "Use Pandas for data manipulation",
          "Perform data aggregation",
          "Validate data quality"
        ],
        description: [
          "تنظيف البيانات هو عملية تهيئة البيانات للتحليل.",
          "يتضمن معالجة القيم المفقودة وإزالة التكرارات.",
          "يُستخدم لتحويل تنسيقات البيانات مثل CSV وJSON.",
          "يُتيح دمج مجموعات البيانات لتحليل شامل.",
          "تُستخدم مكتبة Pandas في Python لمعالجة البيانات.",
          "يُساعد في تجميع البيانات مثل حساب المتوسطات.",
          "يُضمن جودة البيانات من خلال التحقق من سلامتها.",
          "يُعتبر خطوة أساسية قبل بناء نماذج التعلم الآلي.",
          "يُحسن دقة التحليل من خلال بيانات نظيفة.",
          "يُستخدم في تحليل البيانات الضخمة والصغيرة.",
          "يُسهل العمل مع أدوات مثل Jupyter Notebooks."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Pandas Docs", url: "https://pandas.pydata.org/docs/" },
            { name: "Kaggle Data Cleaning", url: "https://www.kaggle.com/learn/data-cleaning" }
          ],
          paid: [
            { name: "Udemy Data Wrangling Course", url: "https://www.udemy.com/topic/data-science/" },
            { name: "Pluralsight Data Wrangling", url: "https://www.pluralsight.com/courses/python-data-wrangling" }
          ]
        }
      }
    ]
  },
  {
    title: "تصور البيانات",
    icon: <PieChart className="w-6 h-6 text-cyan-400" />,
    children: [
      {
        title: "Matplotlib",
        icon: <BarChart className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Create line and scatter plots",
          "Design bar and pie charts",
          "Customize visualizations",
          "Handle multiple plots",
          "Use subplots",
          "Integrate with Pandas",
          "Export visualizations"
        ],
        description: [
          "Matplotlib هي مكتبة Python لتصور البيانات بصريًا.",
          "تُستخدم لإنشاء رسوم بيانية مثل الخطوط والنقاط.",
          "تُتيح تصميم الرسوم البيانية العمودية والدائرية.",
          "تدعم تخصيص الألوان والعناوين والتسميات.",
          "تُساعد في إنشاء رسوم متعددة في لوحة واحدة.",
          "تتكامل مع Pandas لتصور البيانات بسهولة.",
          "تُتيح تصدير الرسوم إلى صيغ مثل PNG وPDF.",
          "يُعتبر أداة أساسية لتحليل وتفسير البيانات.",
          "يُستخدم في تقارير الأعمال والأبحاث العلمية.",
          "يُحسن فهم البيانات من خلال التصورات البصرية.",
          "يُعتبر سهل التعلم للمبتدئين في علم البيانات."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Matplotlib Docs", url: "https://matplotlib.org/stable/contents.html" },
            { name: "freeCodeCamp Visualization", url: "https://www.youtube.com/@freecodecamp" }
          ],
          paid: [
            { name: "Udemy Matplotlib Course", url: "https://www.udemy.com/topic/data-visualization/" },
            { name: "Pluralsight Matplotlib", url: "https://www.pluralsight.com/courses/python-data-visualization" }
          ]
        }
      },
      {
        title: "Seaborn",
        icon: <BarChart className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "Create statistical plots",
          "Visualize distributions",
          "Design heatmaps",
          "Customize plot aesthetics",
          "Work with categorical data",
          "Integrate with Pandas",
          "Handle complex datasets"
        ],
        description: [
          "Seaborn هي مكتبة Python مبنية على Matplotlib لتصور إحصائي.",
          "تُستخدم لإنشاء رسوم بيانية إحصائية مثل التوزيعات.",
          "تُتيح تصميم خرائط الحرارة (heatmaps) لتحليل العلاقات.",
          "تدعم تخصيص الرسوم بمظهر جذاب وسهل القراءة.",
          "تُساعد في تصور البيانات القاطعية مثل الفئات.",
          "تتكامل مع Pandas لتحليل البيانات بسهولة.",
          "تُستخدم للتعامل مع مجموعات البيانات المعقدة.",
          "يُعتبر أداة قوية لتحليل البيانات الاستكشافي.",
          "يُحسن جودة التصورات مقارنة بـ Matplotlib الأساسية.",
          "يُستخدم في الأبحاث والتقارير العلمية.",
          "يُعتبر مناسبًا للمبتدئين والمحترفين."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Seaborn Docs", url: "https://seaborn.pydata.org/" },
            { name: "DataCamp Visualization", url: "https://www.datacamp.com/community/tutorials/seaborn-python-tutorial" }
          ],
          paid: [
            { name: "Udemy Seaborn Course", url: "https://www.udemy.com/topic/data-visualization/" },
            { name: "Pluralsight Seaborn", url: "https://www.pluralsight.com/courses/python-data-visualization" }
          ]
        }
      },
      {
        title: "Tableau",
        icon: <BarChart className="w-5 h-5 text-blue-500" />,
        learningOutcomes: [
          "Create interactive dashboards",
          "Visualize complex datasets",
          "Use drag-and-drop interface",
          "Connect to data sources",
          "Design custom visualizations",
          "Share dashboards",
          "Perform data blending"
        ],
        description: [
          "Tableau هي أداة تصور بيانات قوية لإنشاء لوحات تحكم تفاعلية.",
          "تُستخدم لتصور مجموعات البيانات الكبيرة والمعقدة.",
          "توفر واجهة السحب والإفلات لتسهيل التصميم.",
          "تُتيح الاتصال بمصادر بيانات مثل SQL وExcel.",
          "تدعم إنشاء تصورات مخصصة لتحليل البيانات.",
          "تُسهل مشاركة لوحات التحكم مع الفرق والعملاء.",
          "تُستخدم لدمج البيانات من مصادر متعددة (data blending).",
          "يُعتبر أداة شائعة في الأعمال والتحليلات.",
          "يُحسن اتخاذ القرارات من خلال التصورات البصرية.",
          "يُستخدم في مجالات مثل التسويق والتمويل.",
          "يُعتبر سهل التعلم مقارنة بأدوات البرمجة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Tableau Public", url: "https://public.tableau.com/" },
            { name: "Tableau Training", url: "https://www.tableau.com/learn/training" }
          ],
          paid: [
            { name: "Udemy Tableau Course", url: "https://www.udemy.com/topic/tableau/" },
            { name: "Pluralsight Tableau", url: "https://www.pluralsight.com/paths/tableau" }
          ]
        }
      }
    ]
  },
  {
    title:" التعلم الآلي",
    icon: <Cpu className="w-6 h-6 text-red-400" />,
    children: [
      {
        title: "Scikit-learn",
        icon: <Brain className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Understand ML algorithms",
          "Implement regression models",
          "Build classification models",
          "Use clustering techniques",
          "Evaluate model performance",
          "Perform feature engineering",
          "Integrate with Pandas"
        ],
        description: [
          "Scikit-learn هي مكتبة Python لتطبيق خوارزميات التعلم الآلي.",
          "تُستخدم لتطوير نماذج الانحدار مثل الانحدار الخطي.",
          "تُتيح بناء نماذج التصنيف مثل SVM والشجرة القرارات.",
          "تدعم تقنيات التجميع (clustering) مثل K-means.",
          "تُساعد في تقييم أداء النماذج باستخدام مقاييس مثل الدقة.",
          "تُتيح هندسة الميزات لتحسين جودة البيانات.",
          "تتكامل مع Pandas لتحليل البيانات بسهولة.",
          "يُعتبر أداة أساسية للمبتدئين في التعلم الآلي.",
          "يُستخدم في تطبيقات مثل التنبؤ والتصنيف.",
          "يُحسن دقة النماذج من خلال الأدوات المدمجة.",
          "يُعتبر خيارًا شائعًا في علم البيانات."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Scikit-learn Docs", url: "https://scikit-learn.org/stable/" },
            { name: "Kaggle ML Tutorials", url: "https://www.kaggle.com/learn/machine-learning" }
          ],
          paid: [
            { name: "Udemy Scikit-learn Course", url: "https://www.udemy.com/topic/scikit-learn/" },
            { name: "Pluralsight Scikit-learn", url: "https://www.pluralsight.com/courses/scikit-learn-machine-learning-python" }
          ]
        }
      },
      {
        title: "TensorFlow",
        icon: <Brain className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "Build neural networks",
          "Implement deep learning models",
          "Use Keras API",
          "Handle large datasets",
          "Optimize model training",
          "Deploy ML models",
          "Visualize training progress"
        ],
        description: [
          "TensorFlow هي مكتبة مفتوحة المصدر لتطوير نماذج التعلم العميق.",
          "تُستخدم لبناء الشبكات العصبية لمهام مثل تصنيف الصور.",
          "تدعم واجهة Keras لتبسيط تطوير النماذج.",
          "تُتيح التعامل مع مجموعات البيانات الكبيرة بكفاءة.",
          "تُساعد في تحسين تدريب النماذج باستخدام GPUs.",
          "تُستخدم لنشر النماذج في بيئات الإنتاج.",
          "تُتيح تصور تقدم التدريب باستخدام أدوات مثل TensorBoard.",
          "يُعتبر أداة قوية للتعلم العميق والذكاء الاصطناعي.",
          "يُستخدم في تطبيقات مثل معالجة الصور والصوت.",
          "يُحسن أداء النماذج من خلال الأدوات المتقدمة.",
          "يُعتبر خيارًا شائعًا في الأبحاث والصناعة."
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
          "Optimize model training",
          "Deploy PyTorch models",
          "Work with research pipelines"
        ],
        description: [
          "PyTorch هي مكتبة مفتوحة المصدر لتطوير التعلم العميق بمرونة عالية.",
          "تُستخدم لبناء شبكات عصبية ديناميكية لمهام متنوعة.",
          "تدعم التعامل مع الـ tensors للحسابات الرياضية.",
          "تُتيح استخدام GPU لتسريع تدريب النماذج.",
          "تُساعد في تحسين تدريب النماذج باستخدام أدوات متقدمة.",
          "تُستخدم لنشر النماذج في بيئات الإنتاج.",
          "تُعتبر مثالية للأبحاث بسبب مرونتها العالية.",
          "يُستخدم في تطبيقات مثل معالجة اللغة الطبيعية.",
          "يُحسن إنتاجية الباح الباحثين في التعلم العميق.",
          "يتكامل مع مكتبات مثل NumPy وPandas.",
          "يُعتبر خيارًا شائعًا في الأوساط الأكاديمية."
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
      }
    ]
  },
  {
    title:" البيانات الضخمة",
    icon: <Database className="w-6 h-6 text-blue-400" />,
    children: [
      {
        title: "Hadoop",
        icon: <Server className="w-5 h-5 text-yellow-400" />,
        learningOutcomes: [
          "Understand Hadoop ecosystem",
          "Use HDFS for storage",
          "Implement MapReduce",
          "Manage big data workflows",
          "Integrate with Hive",
          "Monitor Hadoop clusters",
          "Optimize data processing"
        ],
        description: [
          "Hadoop هو إطار عمل مفتوح المصدر لمعالجة البيانات الضخمة.",
          "يُستخدم HDFS لتخزين البيانات الضخمة بطريقة موزعة.",
          "يُتيح MapReduce معالجة البيانات بشكل متوازي.",
          "يُساعد في إدارة سير عمل البيانات الضخمة بكفاءة.",
          "يتكامل مع Hive لتحليل البيانات باستخدام SQL.",
          "يُستخدم لمراقبة العناقيد (clusters) وتحسين الأداء.",
          "يُحسن معالجة البيانات في التطبيقات الكبيرة.",
          "يُعتبر أداة أساسية في تحليل البيانات الضخمة.",
          "يُستخدم في مجالات مثل التمويل والتجارة الإلكترونية.",
          "يُتيح التعامل مع كميات هائلة من البيانات.",
          "يُحسن قابلية التوسع في الأنظمة الموزعة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Hadoop Docs", url: "https://hadoop.apache.org/docs/" },
            { name: "Edureka Hadoop", url: "https://www.youtube.com/@edurekaIN" }
          ],
          paid: [
            { name: "Udemy Hadoop Course", url: "https://www.udemy.com/topic/hadoop/" },
            { name: "Pluralsight Hadoop", url: "https://www.pluralsight.com/paths/hadoop" }
          ]
        }
      },
      {
        title: "Spark",
        icon: <Server className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "Understand Spark architecture",
          "Use RDDs and DataFrames",
          "Implement distributed computing",
          "Perform real-time processing",
          "Integrate with Hadoop",
          "Optimize Spark jobs",
          "Work with Spark SQL"
        ],
        description: [
          "Spark هو إطار عمل لمعالجة البيانات الضخمة بسرعة عالية.",
          "يُستخدم RDDs وDataFrames لمعالجة البيانات الموزعة.",
          "يُتيح الحوسبة الموزعة لتحليل البيانات الضخمة.",
          "تدعم المعالجة في الوقت الفعلي باستخدام Spark Streaming.",
          "يتكامل مع Hadoop HDFS وHive لتحليل البيانات.",
          "يُساعد في تحسين أداء المهام باستخدام الذاكرة.",
          "يُتيح Spark SQL استخدام استعلامات SQL لتحليل البيانات.",
          "يُعتبر أداة قوية لتحليل البيانات في الوقت الفعلي.",
          "يُستخدم في تطبيقات مثل تحليل السجلات والتنبؤ.",
          "يُحسن سرعة معالجة البيانات مقارنة بـ Hadoop.",
          "يُعتبر خيارًا شائعًا في صناعة البيانات الضخمة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Spark Docs", url: "https://spark.apache.org/docs/latest/" },
            { name: "Databricks Community", url: "https://community.databricks.com/" }
          ],
          paid: [
            { name: "Udemy Spark Course", url: "https://www.udemy.com/topic/apache-spark/" },
            { name: "Pluralsight Spark", url: "https://www.pluralsight.com/paths/apache-spark" }
          ]
        }
      }
    ]
  },
  {
    title:" قواعد البيانات",
    icon: <Database className="w-6 h-6 text-purple-400" />,
    children: [
      {
        title: "SQL",
        icon: <Table className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Write SQL queries",
          "Manage relational databases",
          "Perform joins and aggregations",
          "Optimize queries",
          "Handle indexes",
          "Use database management systems",
          "Integrate with Python"
        ],
        description: [
          "SQL هي لغة استعلام لإدارة قواعد البيانات العلائقية.",
          "تُستخدم لكتابة الاستعلامات لاسترداد وتحديث البيانات.",
          "تُتيح عمليات الدمج (joins) لربط الجداول.",
          "تدعم التجميع مثل حساب المتوسطات والمجموعات.",
          "تُساعد في تحسين الاستعلامات لتسريع الأداء.",
          "تُستخدم الفهرسة (indexes) لتحسين سرعة البحث.",
          "تتكامل مع أنظمة مثل MySQL وPostgreSQL.",
          "يُعتبر أداة أساسية لتحليل البيانات في علم البيانات.",
          "يُستخدم في تطبيقات الأعمال والتقارير.",
          "يُحسن إدارة البيانات في المشاريع الكبيرة.",
          "يُتيح التكامل مع Python باستخدام مكتبات مثل SQLAlchemy."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "SQLZoo", url: "https://sqlzoo.net/" },
            { name: "Mode Analytics SQL", url: "https://mode.com/sql-tutorial/" }
          ],
          paid: [
            { name: "Udemy SQL Course", url: "https://www.udemy.com/topic/sql/" },
            { name: "Pluralsight SQL", url: "https://www.pluralsight.com/paths/sql" }
          ]
        }
      },
      {
        title: "NoSQL",
        icon: <Database className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Understand NoSQL databases",
          "Work with MongoDB",
          "Handle JSON/BSON data",
          "Perform CRUD operations",
          "Scale NoSQL databases",
          "Integrate with Python",
          "Manage unstructured data"
        ],
        description: [
          "NoSQL هي قواعد بيانات غير علائقية للتعامل مع البيانات غير المهيكلة.",
          "تُستخدم MongoDB لتخزين البيانات بتنسيق JSON/BSON.",
          "تُتيح عمليات CRUD (إنشاء، قراءة، تحديث، حذف) بسهولة.",
          "تدعم التوسع الأفقي لمعالجة البيانات الضخمة.",
          "تُستخدم لإدارة البيانات غير المهيكلة مثل السجلات.",
          "تتكامل مع Python باستخدام مكتبات مثل PyMongo.",
          "يُعتبر أداة قوية لتطبيقات الويب والتحليلات.",
          "يُستخدم في مجالات مثل التجارة الإلكترونية والسوشيال ميديا.",
          "يُحسن مرونة إدارة البيانات مقارنة بـ SQL.",
          "يُتيح التعامل مع كميات كبيرة من البيانات بسرعة.",
          "يُعتبر خيارًا شائعًا في مشاريع البيانات الضخمة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "MongoDB University", url: "https://university.mongodb.com/" },
            { name: "freeCodeCamp NoSQL", url: "https://www.youtube.com/@freecodecamp" }
          ],
          paid: [
            { name: "Udemy NoSQL Course", url: "https://www.udemy.com/topic/nosql/" },
            { name: "Pluralsight MongoDB", url: "https://www.pluralsight.com/paths/mongodb" }
          ]
        }
      }
    ]
  },
  {
    title:" السحابة والنشر",
    icon: <Cloud className="w-6 h-6 text-blue-400" />,
    children: [
      {
        title: "AWS",
        icon: <Cloud className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "Understand AWS services",
          "Use S3 for data storage",
          "Manage EC2 instances",
          "Deploy ML models",
          "Use SageMaker",
          "Monitor with CloudWatch",
          "Integrate with Python"
        ],
        description: [
          "AWS هي منصة سحابية لتخزين ومعالجة البيانات في علم البيانات.",
          "تُستخدم S3 لتخزين مجموعات البيانات الكبيرة.",
          "تُتيح EC2 تشغيل خوارزميات التعلم الآلي على الخوادم.",
          "تُساعد SageMaker في بناء ونشر نماذج التعلم الآلي.",
          "يُستخدم CloudWatch لمراقبة أداء التطبيقات.",
          "تتكامل مع Python لأتمتة المهام السحابية.",
          "تُعتبر أداة أساسية لنشر حلول علم البيانات.",
          "تُستخدم في مجالات مثل التحليلات والتنبؤ.",
          "تُحسن قابلية التوسع لمشاريع البيانات الضخمة.",
          "يُتيح التعامل مع البيانات في الوقت الفعلي.",
          "يُعتبر مطلوبًا بشدة في سوق العمل."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "AWS Training", url: "https://aws.amazon.com/training/" },
            { name: "freeCodeCamp AWS", url: "https://www.youtube.com/@freecodecamp" }
          ],
          paid: [
            { name: "Udemy AWS Course", url: "https://www.udemy.com/topic/aws/" },
            { name: "Pluralsight AWS", url: "https://www.pluralsight.com/paths/aws-certified-solutions-architect-associate" }
          ]
        }
      },
      {
        title: "Azure",
        icon: <Cloud className="w-5 h-5 text-blue-500" />,
        learningOutcomes: [
          "Understand Azure services",
          "Use Blob Storage",
          "Manage virtual machines",
          "Deploy ML models",
          "Use Azure Machine Learning",
          "Monitor with Azure Monitor",
          "Integrate with Python"
        ],
        description: [
          "Azure هي منصة سحابية من Microsoft لمعالجة البيانات.",
          "تُستخدم Blob Storage لتخزين البيانات غير المهيكلة.",
          "تُتيح الآلات الافتراضية تشغيل تطبيقات علم البيانات.",
          "تُساعد Azure Machine Learning في بناء نماذج التعلم الآلي.",
          "يُستخدم Azure Monitor لمراقبة أداء النماذج.",
          "تتكامل مع Python باستخدام مكتبات مثل Azure SDK.",
          "تُعتبر أداة قوية لنشر حلول علم البيانات.",
          "تُستخدم في مجالات مثل التحليلات والذكاء الاصطناعي.",
          "تُحسن قابلية التوسع لمشاريع البيانات.",
          "يُتيح التعامل مع البيانات في بيئات الإنتاج.",
          "يُعتبر مطلوبًا في سوق العمل للمشاريع الكبيرة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Azure Docs", url: "https://learn.microsoft.com/en-us/azure/" },
            { name: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/azure/" }
          ],
          paid: [
            { name: "Udemy Azure Course", url: "https://www.udemy.com/topic/microsoft-azure/" },
            { name: "Pluralsight Azure", url: "https://www.pluralsight.com/paths/microsoft-azure-architect" }
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
        title: "R",
        icon: <Code className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand R syntax",
          "Work with data frames",
          "Perform statistical analysis",
          "Create visualizations",
          "Use tidyverse packages",
          "Integrate with Jupyter",
          "Handle data manipulation"
        ],
        description: [
          "R هي لغة برمجة متخصصة في الإحصاء وتحليل البيانات.",
          "تُستخدم لمعالجة البيانات باستخدام إطارات البيانات (data frames).",
          "تُتيح إجراء تحليلات إحصائية متقدمة بسهولة.",
          "تدعم إنشاء تصورات بصرية باستخدام ggplot2.",
          "تُستخدم حزم tidyverse لتبسيط معالجة البيانات.",
          "تتكامل مع Jupyter لكتابة كود تفاعلي.",
          "تُساعد في معالجة البيانات وتنظيفها بكفاءة.",
          "يُعتبر أداة قوية في الأبحاث العلمية والإحصائية.",
          "يُستخدم في مجالات مثل الطب والتمويل.",
          "يُحسن إنتاجية الباحثين في تحليل البيانات.",
          "يُعتبر خيارًا شائعًا بجانب Python في علم البيانات."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "R Docs", url: "https://www.r-project.org/" },
            { name: "R for Data Science", url: "https://r4ds.had.co.nz/" }
          ],
          paid: [
            { name: "Udemy R Course", url: "https://www.udemy.com/topic/r-programming-language/" },
            { name: "Pluralsight R", url: "https://www.pluralsight.com/paths/r-programming" }
          ]
        }
      },
      {
        title: "Deep Learning Frameworks",
        icon: <Brain className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "Understand deep learning concepts",
          "Use Keras for neural networks",
          "Implement CNNs and RNNs",
          "Work with transfer learning",
          "Optimize model performance",
          "Deploy deep learning models",
          "Handle image and text data"
        ],
        description: [
          "إطارات التعلم العميق تُستخدم لبناء نماذج ذكاء اصطناعي متقدمة.",
          "تُتيح Keras تبسيط بناء الشبكات العصبية.",
          "تُستخدم CNNs لمعالجة الصور وRNNs للبيانات المتسلسلة.",
          "تدعم التعلم المنقول (transfer learning) لتسريع التدريب.",
          "تُساعد في تحسين أداء النماذج باستخدام تقنيات متقدمة.",
          "تُستخدم لنشر النماذج في بيئات الإنتاج.",
          "تُتيح معالجة بيانات الصور والنصوص بكفاءة.",
          "يُعتبر أداة أساسية في تطبيقات الذكاء الاصطناعي.",
          "يُستخدم في مجالات مثل الرؤية الحاسوبية وNLP.",
          "يُحسن دقة النماذج في المهام المعقدة.",
          "يُعتبر جزءًا من TensorFlow وPyTorch."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "DeepLearning.AI", url: "https://www.deeplearning.ai/" },
            { name: "Keras Docs", url: "https://keras.io/" }
          ],
          paid: [
            { name: "Udemy Deep Learning Course", url: "https://www.udemy.com/topic/deep-learning/" },
            { name: "Pluralsight Deep Learning", url: "https://www.pluralsight.com/paths/deep-learning-with-tensorflow" }
          ]
        }
      },
      {
        title: "Data Engineering",
        icon: <Box className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Understand ETL processes",
          "Build data pipelines",
          "Use Apache Airflow",
          "Manage data warehouses",
          "Integrate with cloud platforms",
          "Optimize data workflows",
          "Ensure data quality"
        ],
        description: [
          "هندسة البيانات تُركز على إنشاء وإدارة خطوط أنابيب البيانات.",
          "تتضمن عمليات ETL (استخراج، تحويل، تحميل) لتهيئة البيانات.",
          "تُستخدم Apache Airflow لأتمتة سير عمل البيانات.",
          "تُتيح إدارة مستودعات البيانات مثل Snowflake وBigQuery.",
          "تتكامل مع منصات السحابة مثل AWS وAzure.",
          "تُساعد في تحسين سير عمل البيانات لتقليل التأخير.",
          "تُضمن جودة البيانات من خلال التحقق والتنظيف.",
          "يُعتبر مجالًا أساسيًا في مشاريع البيانات الضخمة.",
          "يُستخدم في تطبيقات مثل التحليلات في الوقت الفعلي.",
          "يُحسن كفاءة معالجة البيانات في المؤسسات.",
          "يُعتبر مكملًا لعلم البيانات في الصناعة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Airflow Docs", url: "https://airflow.apache.org/docs/" },
            { name: "DataCamp Data Engineering", url: "https://www.datacamp.com/tracks/data-engineer" }
          ],
          paid: [
            { name: "Udemy Data Engineering Course", url: "https://www.udemy.com/topic/data-engineering/" },
            { name: "Pluralsight Data Engineering", url: "https://www.pluralsight.com/paths/data-engineering" }
          ]
        }
      },
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
          "MLOps هي ممارسة لأتمتة وإدارة دورة حياة نماذج التعلم الآلي.",
          "تُستخدم لأتمتة خطوط أنابيب التعلم الآلي من التدريب إلى النشر.",
          "تُتيح MLflow تتبع التجارب وإدارة النماذج.",
          "يُستخدم Docker لنشر النماذج في بيئات الإنتاج.",
          "تُساعد في مراقبة أداء النماذج في الوقت الفعلي.",
          "تتكامل مع أدوات CI/CD لأتمتة النشر.",
          "تُتيح إدارة إصدارات النماذج لضمان الاستقرار.",
          "يُعتبر مجالًا ناشئًا في علم البيانات.",
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
            { name: "MLflow Docs", url: "https://mlflow.org/docs/latest/" },
            { name: "DataCamp MLOps", url: "https://www.datacamp.com/tracks/mlops" }
          ],
          paid: [
            { name: "Udemy MLOps Course", url: "https://www.udemy.com/topic/mlops/" },
            { name: "Pluralsight MLOps", url: "https://www.pluralsight.com/courses/mlops-fundamentals" }
          ]
        }
      }
    ]
  }
]

export default function DataScience(){
  return (
    <Roadmap title={"Data-Science"} sections={sections}/>
  )
}