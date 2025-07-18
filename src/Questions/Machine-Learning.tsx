import React from "react";
import {
  Box,
  Terminal,
  Calculator,
  Table,
  BarChart,
  CloudSnow,
  Target,
  Brain,
  Eye,
  MessageSquare,
  TrendingDown,
  Cloud,
  Search
} from "lucide-react";
import Questions from "../Components/questions";

// بيانات الأسئلة لكل مهارة
const quizData = [
  {
    title: "Python",
    icon: <Terminal className="w-5 h-5 text-green-400" />,
    questions: [
      {
        question: "ما الغرض الأساسي من Python في التعلم الآلي؟",
        options: [
          "إنشاء قواعد بيانات.",
          "معالجة البيانات وتطوير النماذج باستخدام مكتبات قوية.",
          "تصور البيانات فقط.",
          "إدارة الشبكات."
        ],
        answer: "معالجة البيانات وتطوير النماذج باستخدام مكتبات قوية."
      },
      {
        question: "كيف يُمكن إنشاء قائمة في Python؟",
        options: [
          "list = [1, 'b', 3]",
          "array = {1, 'b', 3}",
          "tuple = [1, 'b', 3]",
          "dict = [1: 'b', 3]"
        ],
        answer: "list = [1, 'b', 3]"
      },
      {
        question: "ما الفرق بين list وtuple في Python؟",
        options: [
          "list قابلة للتعديل، وtuple غير قابلة للتعديل.",
          "tuple قابلة للتعديل، وغير قابلة للتعديل.",
          "كلاهما متماثلان تمامًا.",
          "list تُستخدم للقواميس."
        ],
        answer: "list[list قابلة للتعديل، وtuple غير قابلة للتعديل."
      },
      {
        question: "كيف يُمكن تعريف دالة في Python؟",
        options: [
          "def function_name(arg1, arg2):",
          "function function_name(arg1, arg2):",
          "create function_name(arg1, arg2):",
          "lambda function_name(arg1, arg2):"
        ],
        answer: "def function_name(arg1, arg2):"
      },
      {
        question: "ما الغرض من try-except في Python؟",
        options: [
          "إدارة الأخطاء والاستثناءات.",
          "إنشاء حلقات تكرار.",
          "إنشاء قواميس.",
          "تصور البيانات."
        ],
        answer: "إدارة الأخطاء والاستثناءات."
      },
      {
        question: "كيف يُستخدم NumPy لإنشاء مصفوفة؟",
        options: [
          "np.array([[1, 2], [3]])",
          "pd.array([[1, 2], [3]])",
          "np.DataFrame([[1, 2], [3]])",
          "pd.Series([[1, 2], [3]])"
        ],
        answer: "np.array([[1, 2], [3]])"
      },
      {
        question: "ما الغرض من Pandas في Python؟",
        options: [
          "تحليل ومعالجة البيانات باستخدام DataFrames.",
          "إنشاء شبكات عصبية.",
          "تصور البيانات.",
          "إدارة قواعد البيانات."
        ],
        answer: "تحليل ومعالجة البيانات باستخدام DataFrames."
      },
      {
        question: "كيف يُمكن قراءة ملف CSV باستخدام Pandas؟",
        options: [
          "pd.read_csv('file.csv')",
          "np.read_csv('file.csv')",
          "pd.load_csv('file.csv')",
          "np.import_csv('file.csv')"
        ],
        answer: "pd.read_csv('file.csv')"
      },
      {
        question: "ما الغرض من البرمجة كائنية التوجه في Python؟",
        options: [
          "تصميم أنظمة معقدة باستخدام الكائنات والفئات.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تصميم أنظمة معقدة باستخدام الكائنات والفئات."
      },
      {
        question: "كيف يُمكن إنشاء فئة في Python؟",
        options: [
          "class ClassName:",
          "def ClassName:",
          "create ClassName:",
          "function ClassName:"
        ],
        answer: "class ClassName:"
      },
      {
        question: "ما الغرض من Jupyter Notebooks؟",
        options: [
          "كتابة كود تفاعلي واختبار النماذج.",
          "إنشاء قواعد بيانات.",
          "إدارة الشبكات.",
          "تصميم واجهات المستخدم."
        ],
        answer: "كتابة كود تفاعلي واختبار النماذج."
      },
      {
        question: "كيف يُمكن استيراد وحدة في Python؟",
        options: [
          "import module_name",
          "include module_name",
          "require module_name",
          "load module_name"
        ],
        answer: "import module_name"
      },
      {
        question: "ما الفرق بين append وextend في Python؟",
        options: [
          "append تضيف عنصرًا، وextend تضيف قائمة.",
          "extend تضيف عنصرًا، وappend تضيف قائمة.",
          "كلاهما متماثلان تمامًا.",
          "append تُستخدم للقواميس."
        ],
        answer: "append تضيف عنصرًا، وextend تضيف قائمة."
      },
      {
        question: "كيف يُمكن التعامل مع القيم المفقودة في Pandas؟",
        options: [
          "باستخدام df.dropna() أو df.fillna().",
          "باستخدام np.remove().",
          "باستخدام pd.delete().",
          "باستخدام df.clean()."
        ],
        answer: "باستخدام df.dropna() أو df.fillna()."
      },
      {
        question: "ما الغرض من lambda في Python؟",
        options: [
          "إنشاء دوال مجهولة صغيرة.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "إنشاء دوال مجهولة صغيرة."
      },
      {
        question: "كيف يُمكن إجراء عمليات مصفوفية في NumPy؟",
        options: [
          "باستخدام np.dot() أو np.add().",
          "باستخدام pd.dot().",
          "باستخدام df.add().",
          "باستخدام np.plot()."
        ],
        answer: "باستخدام np.dot() أو np.add()."
      },
      {
        question: "ما الغرض من __init__ في Python؟",
        options: [
          "تهيئة الكائنات في الفئات.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تهيئة الكائنات في الفئات."
      },
      {
        question: "كيف يُمكن تجميع البيانات في Pandas؟",
        options: [
          "باستخدام df.groupby().",
          "باستخدام np.groupby().",
          "باستخدام pd.cluster().",
          "باستخدام df.sort()."
        ],
        answer: "باستخدام df.groupby()."
      },
      {
        question: "ما الغرض من zip في Python؟",
        options: [
          "دمج قوائم متعددة في tuples.",
          "إنشاء قواميس.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "دمج قوائم متعددة في tuples."
      },
      {
        question: "كيف يُمكن تحسين أداء الكود في Python؟",
        options: [
          "باستخدام مكتبات مثل NumPy أو multiprocessing.",
          "بتقليل عدد المتغيرات.",
          "بتجاهل الوحدات.",
          "باستخدام Matplotlib."
        ],
        answer: "باستخدام مكتبات مثل NumPy أو multiprocessing."
      }
    ]
  },
  {
    title: "Mathematics",
    icon: <Calculator className="w-5 h-5 text-blue-400" />,
    questions: [
      {
        question: "ما الغرض الأساسي من الرياضيات في التعلم الآلي؟",
        options: [
          "تصميم واجهات المستخدم.",
          "فهم وتحسين الخوارزميات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "فهم وتحسين الخوارزميات."
      },
      {
        question: "ما الغرض من الجبر الخطي في التعلم الآلي؟",
        options: [
          "تمثيل البيانات باستخدام المتجهات والمصفوفات.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تمثيل البيانات باستخدام المتجهات والمصفوفات."
      },
      {
        question: "كيف يُستخدم التفاضل في التعلم الآلي؟",
        options: [
          "تحسين النماذج باستخدام التدرج التنازلي.",
          "إنشاء قواميس.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تحسين النماذج باستخدام التدرج التنازلي."
      },
      {
        question: "ما الغرض من الاحتمالات في التعلم الآلي؟",
        options: [
          "فهم عدم اليقين في البيانات.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "فهم عدم اليقين في البيانات."
      },
      {
        question: "كيف يُمكن تطبيق التدرج التنازلي؟",
        options: [
          "تقليل دالة الخسارة تدريجيًا.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقليل دالة الخسارة تدريجيًا."
      },
      {
        question: "ما الغرض من عمليات المصفوفات؟",
        options: [
          "تسريع الحسابات في الشبكات العصبية.",
          "إنشاء قواميس.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تسريع الحسابات في الشبكات العصبية."
      },
      {
        question: "كيف يُستخدم PCA في التعلم الآلي؟",
        options: [
          "تقليل أبعاد البيانات مع الحفاظ على المعلومات.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقليل أبعاد البيانات مع الحفاظ على المعلومات."
      },
      {
        question: "ما الغرض من الإحصاء في التعلم الآلي؟",
        options: [
          "تحليل البيانات وتقييم النماذج.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تحليل البيانات وتقييم النماذج."
      },
      {
        question: "كيف يُمكن حساب مشتقة دالة؟",
        options: [
          "باستخدام قواعد التفاضل مثل قاعدة السلسلة.",
          "باستخدام قواميس.",
          "باستخدام قواعد البيانات.",
          "باستخدام Matplotlib."
        ],
        answer: "باستخدام قواعد التفاضل مثل قاعدة السلسلة."
      },
      {
        question: "ما الغرض من تحسين النماذج؟",
        options: [
          "تقليل الخطأ وزيادة الدقة.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقليل الخطأ وزيادة الدقة."
      },
      {
        question: "كيف يُستخدم الانحدار الخطي؟",
        options: [
          "التنبؤ بالقيم المستمرة باستخدام معادلة خطية.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "التنبؤ بالقيم المستمرة باستخدام معادلة خطية."
      },
      {
        question: "ما الغرض من القيم الذاتية (eigenvalues)؟",
        options: [
          "فهم خصائص المصفوفات في PCA.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "فهم خصائص المصفوفات في PCA."
      },
      {
        question: "كيف يُمكن تطبيق توزيع بايز (Bayes' theorem)؟",
        options: [
          "في تصنيف البيانات مثل Naive Bayes.",
          "في إنشاء قواميس.",
          "في إدارة قواعد البيانات.",
          "في تصور البيانات."
        ],
        answer: "في تصنيف البيانات مثل Naive Bayes."
      },
      {
        question: "ما الغرض من دالة الخسارة؟",
        options: [
          "قياس أداء النموذج مقارنة بالقيم الحقيقية.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "قياس أداء النموذج مقارنة بالقيم الحقيقية."
      },
      {
        question: "كيف يُستخدم التكامل في التعلم الآلي؟",
        options: [
          "في حساب الاحتمالات المستمرة.",
          "في إنشاء قواميس.",
          "في إدارة قواعد البيانات.",
          "في تصور البيانات."
        ],
        answer: "في حساب الاحتمالات المستمرة."
      },
      {
        question: "ما الغرض من المتجهات الذاتية (eigenvectors)؟",
        options: [
          "تحديد الاتجاهات الرئيسية في PCA.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تحديد الاتجاهات الرئيسية في PCA."
      },
      {
        question: "كيف يُمكن تحسين دالة التكلفة؟",
        options: [
          "باستخدام خوارزميات مثل SGD أو Adam.",
          "باستخدام قواميس.",
          "باستخدام قواعد البيانات.",
          "باستخدام Matplotlib."
        ],
        answer: "باستخدام خوارزميات مثل SGD أو Adam."
      },
      {
        question: "ما الغرض من الانحدار اللوجستي؟",
        options: [
          "تصنيف البيانات الثنائية.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تصنيف البيانات الثنائية."
      },
      {
        question: "كيف يُستخدم تحليل التباين (ANOVA)؟",
        options: [
          "في تقييم الفروق بين المجموعات.",
          "في إنشاء قواميس.",
          "في إدارة قواعد البيانات.",
          "في تصور البيانات."
        ],
        answer: "في تقييم الفروق بين المجموعات."
      },
      {
        question: "ما الغرض من التوزيع الطبيعي؟",
        options: [
          "نمذجة البيانات في الإحصاء.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "نمذجة البيانات في الإحصاء."
      }
    ]
  },
  {
    title: "Data Preprocessing",
    icon: <Table className="w-5 h-5 text-yellow-400" />,
    questions: [
      {
        question: "ما الغرض الأساسي من معالجة البيانات؟",
        options: [
          "إعداد البيانات للتعلم الآلي.",
          "إنشاء شبكات عصبية.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "إعداد البيانات للتعلم الآلي."
      },
      {
        question: "كيف يُمكن التعامل مع القيم المفقودة؟",
        options: [
          "باستخدام df.fillna() أو الاستيفاء.",
          "باستخدام np.remove().",
          "باستخدام pd.delete().",
          "باستخدام df.clean()."
        ],
        answer: "باستخدام df.fillna() أو الاستيفاء."
      },
      {
        question: "ما الفرق بين التطبيع والتوسيع؟",
        options: [
          "التطبيع يضع البيانات بين 0 و1، والتوسيع يعتمد على الانحراف المعياري.",
          "التوسيع يضع البيانات بين 0 و1، والتطبيع يعتمد على الانحراف المعياري.",
          "كلاهما متماثلان تمامًا.",
          "التطبيع يُستخدم للتصنيف."
        ],
        answer: "التطبيع يضع البيانات بين 0 و1، والتوسيع يعتمد على الانحراف المعياري."
      },
      {
        question: "كيف يُمكن ترميز المتغيرات القاطعية؟",
        options: [
          "باستخدام LabelEncoder أو OneHotEncoder.",
          "باستخدام StandardScaler.",
          "باستخدام MinMaxScaler.",
          "باستخدام PCA."
        ],
        answer: "باستخدام LabelEncoder أو OneHotEncoder."
      },
      {
        question: "ما الغرض من هندسة الميزات؟",
        options: [
          "إنشاء ميزات جديدة لتحسين النماذج.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "إنشاء ميزات جديدة لتحسين النماذج."
      },
      {
        question: "كيف يُمكن تقسيم البيانات للتدريب والاختبار؟",
        options: [
          "باستخدام train_test_split من Scikit-learn.",
          "باستخدام df.split().",
          "باستخدام np.divide().",
          "باستخدام pd.partition()."
        ],
        answer: "باستخدام train_test_split من Scikit-learn."
      },
      {
        question: "ما الغرض من StandardScaler؟",
        options: [
          "توسيع البيانات بناءً على المتوسط والانحراف المعياري.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "توسيع البيانات بناءً على المتوسط والانحراف المعياري."
      },
      {
        question: "كيف يُمكن تنظيف البيانات في Pandas؟",
        options: [
          "باستخدام df.drop_duplicates() وdf.dropna().",
          "باستخدام np.clean().",
          "باستخدام pd.remove().",
          "باستخدام df.format()."
        ],
        answer: "باستخدام df.drop_duplicates() وdf.dropna()."
      },
      {
        question: "ما الغرض من MinMaxScaler؟",
        options: [
          "تطبيع البيانات بين 0 و1.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تطبيع البيانات بين 0 و1."
      },
      {
        question: "كيف يُمكن إنشاء ميزة جديدة في Pandas؟",
        options: [
          "بإضافة عمود جديد باستخدام df['new_col'] = ...",
          "باستخدام np.add().",
          "باستخدام pd.create().",
          "باستخدام df.append()."
        ],
        answer: "بإضافة عمود جديد باستخدام df['new_col'] = ..."
      },
      {
        question: "ما الغرض من إزالة القيم الشاذة؟",
        options: [
          "تحسين جودة البيانات ودقة النماذج.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تحسين جودة البيانات ودقة النماذج."
      },
      {
        question: "كيف يُمكن اكتشاف القيم الشاذة؟",
        options: [
          "باستخدام IQR أو Z-score.",
          "باستخدام StandardScaler.",
          "باستخدام MinMaxScaler.",
          "باستخدام PCA."
        ],
        answer: "باستخدام IQR أو Z-score."
      },
      {
        question: "ما الفرق بين LabelEncoder وOneHotEncoder؟",
        options: [
          "LabelEncoder يُرمز إلى أرقام، وOneHotEncoder إلى متجهات.",
          "OneHotEncoder يُرمز إلى أرقام، وLabelEncoder إلى متجهات.",
          "كلاهما متماثلان تمامًا.",
          "LabelEncoder يُستخدم للتوسيع."
        ],
        answer: "LabelEncoder يُرمز إلى أرقام، وOneHotEncoder إلى متجهات."
      },
      {
        question: "كيف يُمكن دمج البيانات في Pandas؟",
        options: [
          "باستخدام pd.merge() أو pd.concat().",
          "باستخدام np.merge().",
          "باستخدام df.join().",
          "باستخدام pd.append()."
        ],
        answer: "باستخدام pd.merge() أو pd.concat()."
      },
      {
        question: "ما الغرض من RobustScaler؟",
        options: [
          "توسيع البيانات مع مقاومة القيم الشاذة.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "توسيع البيانات مع مقاومة القيم الشاذة."
      },
      {
        question: "كيف يُمكن تحويل البيانات المائلة؟",
        options: [
          "باستخدام log أو Box-Cox.",
          "باستخدام StandardScaler.",
          "باستخدام MinMaxScaler.",
          "باستخدام PCA."
        ],
        answer: "باستخدام log أو Box-Cox."
      },
      {
        question: "ما الغرض من Pipeline في Scikit-learn؟",
        options: [
          "أتمتة خطوات معالجة البيانات والتدريب.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "أتمتة خطوات معالجة البيانات والتدريب."
      },
      {
        question: "كيف يُمكن تحليل البيانات في Pandas؟",
        options: [
          "باستخدام df.describe() أو df.corr().",
          "باستخدام np.analyze().",
          "باستخدام pd.stats().",
          "باستخدام df.plot()."
        ],
        answer: "باستخدام df.describe() أو df.corr()."
      },
      {
        question: "ما الغرض من Feature Selection؟",
        options: [
          "اختيار الميزات الأكثر أهمية لتحسين النماذج.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "اختيار الميزات الأكثر أهمية لتحسين النماذج."
      },
      {
        question: "كيف يُمكن إزالة الأعمدة في Pandas؟",
        options: [
          "باستخدام df.drop(columns=['col']).",
          "باستخدام np.remove().",
          "باستخدام pd.delete().",
          "باستخدام df.clean()."
        ],
        answer: "باستخدام df.drop(columns=['col'])."
      }
    ]
  },
  {
    title: "Supervised Learning",
    icon: <BarChart className="w-5 h-5 text-blue-400" />,
    questions: [
      {
        question: "ما الغرض الأساسي من التعلم الموجّه؟",
        options: [
          "تدريب النماذج باستخدام بيانات موسومة.",
          "تجميع البيانات غير الموسومة.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تدريب النماذج باستخدام بيانات موسومة."
      },
      {
        question: "كيف يُمكن تطبيق الانحدار الخطي؟",
        options: [
          "باستخدام LinearRegression من Scikit-learn.",
          "باستخدام KMeans.",
          "باستخدام PCA.",
          "باستخدام OneHotEncoder."
        ],
        answer: "باستخدام LinearRegression من Scikit-learn."
      },
      {
        question: "ما الفرق بين الانحدار والتصنيف؟",
        options: [
          "الانحدار يتنبأ بالقيم المستمرة، والتصنيف بالفئات.",
          "التصنيف يتنبأ بالقيم المستمرة، والانحدار بالفئات.",
          "كلاهما متماثلان تمامًا.",
          "الانحدار يُستخدم للتجميع."
        ],
        answer: "الانحدار يتنبأ بالقيم المستمرة، والتصنيف بالفئات."
      },
      {
        question: "كيف يُمكن تقييم نموذج انحدار؟",
        options: [
          "باستخدام RMSE أو R².",
          "باستخدام Silhouette Score.",
          "باستخدام Davies-Bouldin Index.",
          "باستخدام F1 Score."
        ],
        answer: "باستخدام RMSE أو R²."
      },
      {
        question: "ما الغرض من الانحدار اللوجستي؟",
        options: [
          "تصنيف البيانات الثنائية.",
          "تجميع البيانات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تصنيف البيانات الثنائية."
      },
      {
        question: "كيف يُمكن تطبيق شجرة القرار؟",
        options: [
          "باستخدام DecisionTreeClassifier من Scikit-learn.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام DecisionTreeClassifier من Scikit-learn."
      },
      {
        question: "ما الغرض من التنظيم (Regularization)؟",
        options: [
          "تقليل الإفراط في التدريب.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقليل الإفراط في التدريب."
      },
      {
        question: "كيف يُمكن تقييم نموذج تصنيف؟",
        options: [
          "باستخدام Accuracy أو F1 Score.",
          "باستخدام RMSE.",
          "باستخدام R².",
          "باستخدام Silhouette Score."
        ],
        answer: "باستخدام Accuracy أو F1 Score."
      },
      {
        question: "ما الغرض من Cross-Validation؟",
        options: [
          "تقييم النموذج على عدة تقسيمات للبيانات.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقييم النموذج على عدة تقسيمات للبيانات."
      },
      {
        question: "كيف يُمكن تطبيق Random Forest؟",
        options: [
          "باستخدام RandomForestClassifier من Scikit-learn.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام RandomForestClassifier من Scikit-learn."
      },
      {
        question: "ما الغرض من Confusion Matrix؟",
        options: [
          "تقييم أداء نموذج التصنيف.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقييم أداء نموذج التصنيف."
      },
      {
        question: "كيف يُمكن تحسين نموذج التعلم الموجّه؟",
        options: [
          "باستخدام GridSearchCV لضبط المعلمات.",
          "باستخدام StandardScaler فقط.",
          "باستخدام MinMaxScaler فقط.",
          "باستخدام PCA فقط."
        ],
        answer: "باستخدام GridSearchCV لضبط المعلمات."
      },
      {
        question: "ما الفرق بين L1 وL2 Regularization؟",
        options: [
          "L1 يُنتج ميزات متفرقة، وL2 يُقلل الأوزان.",
          "L2 يُنتج ميزات متفرقة، وL1 يُقلل الأوزان.",
          "كلاهما متماثلان تمامًا.",
          "L1 يُستخدم للتجميع."
        ],
        answer: "L1 يُنتج ميزات متفرقة، وL2 يُقلل الأوزان."
      },
      {
        question: "كيف يُمكن تطبيق SVM؟",
        options: [
          "باستخدام SVC من Scikit-learn.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام SVC من Scikit-learn."
      },
      {
        question: "ما الغرض من ROC Curve؟",
        options: [
          "تقييم أداء نموذج التصنيف عند عتبات مختلفة.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقييم أداء نموذج التصنيف عند عتبات مختلفة."
      },
      {
        question: "كيف يُمكن التعامل مع البيانات غير المتوازنة؟",
        options: [
          "باستخدام SMOTE أو class_weight.",
          "باستخدام StandardScaler.",
          "باستخدام MinMaxScaler.",
          "باستخدام PCA."
        ],
        answer: "باستخدام SMOTE أو class_weight."
      },
      {
        question: "ما الغرض من Gradient Boosting؟",
        options: [
          "تحسين النماذج باستخدام تعزيز التدرج.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تحسين النماذج باستخدام تعزيز التدرج."
      },
      {
        question: "كيف يُمكن تطبيق XGBoost؟",
        options: [
          "باستخدام XGBClassifier من xgboost.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام XGBClassifier من xgboost."
      },
      {
        question: "ما الغرض من Precision وRecall؟",
        options: [
          "قياس دقة واستدعاء نموذج التصنيف.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "قياس دقة واستدعاء نموذج التصنيف."
      },
      {
        question: "كيف يُمكن تقليل الإفراط في التدريب؟",
        options: [
          "باستخدام Dropout أو Regularization.",
          "باستخدام StandardScaler.",
          "باستخدام MinMaxScaler.",
          "باستخدام PCA."
        ],
        answer: "باستخدام Dropout أو Regularization."
      }
    ]
  },
  {
    title: "Unsupervised Learning",
    icon: <CloudSnow className="w-5 h-5 text-purple-400" />,
    questions: [
      {
        question: "ما الغرض الأساسي من التعلم غير الموجّه؟",
        options: [
          "تحليل البيانات غير الموسومة.",
          "تدريب النماذج ببيانات موسومة.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تحليل البيانات غير الموسومة."
      },
      {
        question: "كيف يُمكن تطبيق K-means؟",
        options: [
          "باستخدام KMeans من Scikit-learn.",
          "باستخدام LinearRegression.",
          "باستخدام SVC.",
          "باستخدام OneHotEncoder."
        ],
        answer: "باستخدام KMeans من Scikit-learn."
      },
      {
        question: "ما الفرق بين K-means وHierarchical Clustering؟",
        options: [
          "K-means يقسم البيانات، وHierarchical يبني شجرة.",
          "Hierarchical يقسم البيانات، وK-means يبني شجرة.",
          "كلاهما متماثلان تمامًا.",
          "K-means يُستخدم للتصنيف."
        ],
        answer: "K-means يقسم البيانات، وHierarchical يبني شجرة."
      },
      {
        question: "كيف يُمكن تقييم نتائج التجميع؟",
        options: [
          "باستخدام Silhouette Score أو Davies-Bouldin.",
          "باستخدام RMSE.",
          "باستخدام F1 Score.",
          "باستخدام R²."
        ],
        answer: "باستخدام Silhouette Score أو Davies-Bouldin."
      },
      {
        question: "ما الغرض من PCA؟",
        options: [
          "تقليل أبعاد البيانات.",
          "تصنيف البيانات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقليل أبعاد البيانات."
      },
      {
        question: "كيف يُمكن تطبيق كشف الشذوذ؟",
        options: [
          "باستخدام IsolationForest أو OneClassSVM.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام IsolationForest أو OneClassSVM."
      },
      {
        question: "ما الغرض من DBSCAN؟",
        options: [
          "تجميع البيانات بناءً على الكثافة.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تجميع البيانات بناءً على الكثافة."
      },
      {
        question: "كيف يُمكن تحديد عدد المجموعات في K-means؟",
        options: [
          "باستخدام Elbow Method أو Silhouette Score.",
          "باستخدام RMSE.",
          "باستخدام F1 Score.",
          "باستخدام R²."
        ],
        answer: "باستخدام Elbow Method أو Silhouette Score."
      },
      {
        question: "ما الغرض من t-SNE؟",
        options: [
          "تصور البيانات عالية الأبعاد.",
          "تصنيف البيانات.",
          "إدارة قواعد البيانات.",
          "تجميع البيانات."
        ],
        answer: "تصور البيانات عالية الأبعاد."
      },
      {
        question: "كيف يُمكن تطبيق Hierarchical Clustering؟",
        options: [
          "باستخدام AgglomerativeClustering من Scikit-learn.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام AgglomerativeClustering من Scikit-learn."
      },
      {
        question: "ما الغرض من Autoencoders؟",
        options: [
          "تقليل الأبعاد واكتشاف الأنماط.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقليل الأبعاد واكتشاف الأنماط."
      },
      {
        question: "كيف يُمكن تحسين أداء K-means؟",
        options: [
          "باستخدام K-means++ لتهيئة المراكز.",
          "باستخدام StandardScaler فقط.",
          "باستخدام MinMaxScaler فقط.",
          "باستخدام PCA فقط."
        ],
        answer: "باستخدام K-means++ لتهيئة المراكز."
      },
      {
        question: "ما الفرق بين PCA وt-SNE؟",
        options: [
          "PCA خطي، وt-SNE غير خطي.",
          "t-SNE خطي، وPCA غير خطي.",
          "كلاهما متماثلان تمامًا.",
          "PCA يُستخدم للتجميع."
        ],
        answer: "PCA خطي، وt-SNE غير خطي."
      },
      {
        question: "كيف يُمكن تطبيق Gaussian Mixture Models؟",
        options: [
          "باستخدام GaussianMixture من Scikit-learn.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام GaussianMixture من Scikit-learn."
      },
      {
        question: "ما الغرض من UMAP؟",
        options: [
          "تقليل الأبعاد وتصور البيانات.",
          "تصنيف البيانات.",
          "إدارة قواعد البيانات.",
          "تجميع البيانات."
        ],
        answer: "تقليل الأبعاد وتصور البيانات."
      },
      {
        question: "كيف يُمكن التعامل مع البيانات عالية الأبعاد؟",
        options: [
          "باستخدام PCA أو t-SNE.",
          "باستخدام StandardScaler.",
          "باستخدام MinMaxScaler.",
          "باستخدام KMeans."
        ],
        answer: "باستخدام PCA أو t-SNE."
      },
      {
        question: "ما الغرض من Spectral Clustering؟",
        options: [
          "تجميع البيانات باستخدام التشابه الطيفي.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تجميع البيانات باستخدام التشابه الطيفي."
      },
      {
        question: "كيف يُمكن اكتشاف الشذوذ باستخدام DBSCAN؟",
        options: [
          "باستخدام النقاط خارج المجموعات كشذوذ.",
          "باستخدام StandardScaler.",
          "باستخدام MinMaxScaler.",
          "باستخدام PCA."
        ],
        answer: "باستخدام النقاط خارج المجموعات كشذوذ."
      },
      {
        question: "ما الغرض من Inertia في K-means؟",
        options: [
          "قياس جودة التجميع بناءً على المسافات.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "قياس جودة التجميع بناءً على المسافات."
      },
      {
        question: "كيف يُمكن تحسين أداء PCA؟",
        options: [
          "بتوسيع البيانات قبل التطبيق.",
          "باستخدام StandardScaler فقط.",
          "باستخدام MinMaxScaler فقط.",
          "باستخدام KMeans فقط."
        ],
        answer: "بتوسيع البيانات قبل التطبيق."
      }
    ]
  },
  {
    title: "Reinforcement Learning",
    icon: <Target className="w-5 h-5 text-red-400" />,
    questions: [
      {
        question: "ما الغرض الأساسي من التعلم المعزز؟",
        options: [
          "تعليم الوكلاء اتخاذ القرارات بناءً على المكافآت.",
          "تجميع البيانات غير الموسومة.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تعليم الوكلاء اتخاذ القرارات بناءً على المكافآت."
      },
      {
        question: "كيف يُمكن تطبيق Q-learning؟",
        options: [
          "باستخدام جدول Q لتحديث القيم بناءً على المكافآت.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام جدول Q لتحديث القيم بناءً على المكافآت."
      },
      {
        question: "ما الفرق بين Q-learning وSARSA؟",
        options: [
          "Q-learning خارج السياسة، وSARSA على السياسة.",
          "SARSA خارج السياسة، وQ-learning على السياسة.",
          "كلاهما متماثلان تمامًا.",
          "Q-learning يُستخدم للتجميع."
        ],
        answer: "Q-learning خارج السياسة، وSARSA على السياسة."
      },
      {
        question: "كيف يُمكن تقييم نموذج RL؟",
        options: [
          "بناءً على المكافآت المتراكمة.",
          "باستخدام RMSE.",
          "باستخدام F1 Score.",
          "باستخدام Silhouette Score."
        ],
        answer: "بناءً على المكافآت المتراكمة."
      },
      {
        question: "ما الغرض من Policy Gradients؟",
        options: [
          "تحسين سياسة الوكيل مباشرة.",
          "تجميع البيانات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تحسين سياسة الوكيل مباشرة."
      },
      {
        question: "كيف يُمكن تطبيق Deep RL؟",
        options: [
          "باستخدام DQN أو PPO.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام DQN أو PPO."
      },
      {
        question: "ما الغرض من OpenAI Gym؟",
        options: [
          "توفير بيئات لتدريب نماذج RL.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "توفير بيئات لتدريب نماذج RL."
      },
      {
        question: "كيف يُمكن تحسين وظيفة المكافأة؟",
        options: [
          "بصياغتها لتعكس الهدف بدقة.",
          "باستخدام StandardScaler.",
          "باستخدام MinMaxScaler.",
          "باستخدام PCA."
        ],
        answer: "بصياغتها لتعكس الهدف بدقة."
      },
      {
        question: "ما الغرض من Exploration vs Exploitation؟",
        options: [
          "موازنة البحث عن خيارات جديدة واستغلال المعرفة.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "موازنة البحث عن خيارات جديدة واستغلال المعرفة."
      },
      {
        question: "كيف يُمكن تطبيق Actor-Critic؟",
        options: [
          "باستخدام شبكتين للسياسة والقيمة.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام شبكتين للسياسة والقيمة."
      },
      {
        question: "ما الغرض من Discount Factor في RL؟",
        options: [
          "تقليل تأثير المكافآت المستقبلية.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقليل تأثير المكافآت المستقبلية."
      },
      {
        question: "كيف يُمكن تحسين أداء نموذج RL؟",
        options: [
          "بضبط معدل التعلم وتجربة بيئات مختلفة.",
          "باستخدام StandardScaler فقط.",
          "باستخدام MinMaxScaler فقط.",
          "باستخدام PCA فقط."
        ],
        answer: "بضبط معدل التعلم وتجربة بيئات مختلفة."
      },
      {
        question: "ما الفرق بين Model-Based وModel-Free RL؟",
        options: [
          "Model-Based يعتمد على نموذج البيئة، وModel-Free لا يعتمد.",
          "Model-Free يعتمد على نموذج البيئة، وModel-Based لا يعتمد.",
          "كلاهما متماثلان تمامًا.",
          "Model-Based يُستخدم للتجميع."
        ],
        answer: "Model-Based يعتمد على نموذج البيئة، وModel-Free لا يعتمد."
      },
      {
        question: "كيف يُمكن تطبيق PPO؟",
        options: [
          "باستخام PPO من stable-baselines3.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام PPO من stable-baselines3."
      },
      {
        question: "ما الغرض من Value Function؟",
        options: [
          "تقدير المكافآت المستقبلية للحالات.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقدير المكافآت المستقبلية للحالات."
      },
      {
        question: "كيف يُمكن التعامل مع بيئات معقدة؟",
        options: [
          "باستخدام Deep RL وتقنيات مثل DQN.",
          "باستخدام StandardScaler.",
          "باستخدام MinMaxScaler.",
          "باستخدام KMeans."
        ],
        answer: "باستخدام Deep RL وتقنيات مثل DQN."
      },
      {
        question: "ما الغرض من Monte Carlo Methods؟",
        options: [
          "تقدير القيم باستخدام العينات.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقدير القيم باستخدام العينات."
      },
      {
        question: "كيف يُمكن تطبيق DDPG؟",
        options: [
          "باستخدام DDPG من stable-baselines3.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام DDPG من stable-baselines3."
      },
      {
        question: "ما الغرض من Epsilon-Greedy؟",
        options: [
          "موازنة الاستكشاف والاستغلال.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "موازنة الاستكشاف والاستغلال."
      },
      {
        question: "كيف يُمكن تحسين استقرار RL؟",
        options: [
          "باستخدام تقنيات مثل Experience Replay.",
          "باستخدام StandardScaler فقط.",
          "باستخدام MinMaxScaler فقط.",
          "باستخدام PCA فقط."
        ],
        answer: "باستخدام تقنيات مثل Experience Replay."
      }
    ]
  },
  {
    title: "TensorFlow",
    icon: <Brain className="w-5 h-5 text-orange-400" />,
    questions: [
      {
        question: "ما الغرض الأساسي من TensorFlow في التعلم العميق؟",
        options: [
          "إنشاء قواعد بيانات.",
          "تطوير وتدريب الشبكات العصبية.",
          "تصور البيانات فقط.",
          "إدارة الشبكات."
        ],
        answer: "تطوير وتدريب الشبكات العصبية."
      },
      {
        question: "كيف يُمكن إنشاء نموذج باستخدام Keras في TensorFlow؟",
        options: [
          "باستخدام tf.keras.Sequential().",
          "باستخدام tf.model().",
          "باستخدام keras.create().",
          "باستخدام tf.Sequential()."
        ],
        answer: "باستخدام tf.keras.Sequential()."
      },
      {
        question: "ما الفرق بين CNN وRNN في TensorFlow؟",
        options: [
          "CNN للصور، وRNN للبيانات المتسلسلة.",
          "RNN للصور، وCNN للبيانات المتسلسلة.",
          "كلاهما متماثلان تمامًا.",
          "CNN تُستخدم للتصنيف فقط."
        ],
        answer: "CNN للصور، وRNN للبيانات المتسلسلة."
      },
      {
        question: "كيف يُمكن تحسين نموذج في TensorFlow؟",
        options: [
          "باستخدام optimizers مثل Adam أو SGD.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام optimizers مثل Adam أو SGD."
      },
      {
        question: "ما الغرض من TensorBoard؟",
        options: [
          "تصور تقدم تدريب النماذج.",
          "إنشاء شبكات عصبية.",
          "إدارة قواعد البيانات.",
          "تصميم واجهات المستخدم."
        ],
        answer: "تصور تقدم تدريب النماذج."
      },
      {
        question: "كيف يُمكن نشر نموذج TensorFlow؟",
        options: [
          "باستخدام TensorFlow Serving أو SavedModel.",
          "باستخدام pandas.",
          "باستخدام matplotlib.",
          "باستخدام numpy."
        ],
        answer: "باستخدام TensorFlow Serving أو SavedModel."
      },
      {
        question: "ما الغرض من Conv2D في TensorFlow؟",
        options: [
          "تطبيق الالتفاف على الصور في CNN.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تطبيق الالتفاف على الصور في CNN."
      },
      {
        question: "كيف يُمكن استخدام GPU في TensorFlow؟",
        options: [
          "باستخدام tf.device('/GPU:0').",
          "باستخدام keras.gpu().",
          "باستخدام tf.gpu().",
          "باستخدام numpy.gpu()."
        ],
        answer: "باستخدام tf.device('/GPU:0')."
      },
      {
        question: "ما الغرض من Dropout في TensorFlow؟",
        options: [
          "تقليل الإفراط في التدريب.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقليل الإفراط في التدريب."
      },
      {
        question: "كيف يُمكن إنشاء طبقة مخصصة في TensorFlow؟",
        options: [
          "باستخدام tf.keras.layers.Layer.",
          "باستخدام keras.custom().",
          "باستخدام tf.layer().",
          "باستخدام numpy.layer()."
        ],
        answer: "باستخدام tf.keras.layers.Layer."
      },
      {
        question: "ما الغرض من tf.data.Dataset؟",
        options: [
          "تحميل البيانات بكفاءة للتدريب.",
          "إنشاء شبكات عصبية.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تحميل البيانات بكفاءة للتدريب."
      },
      {
        question: "كيف يُمكن تطبيق LSTM في TensorFlow؟",
        options: [
          "باستخدام tf.keras.layers.LSTM.",
          "باستخدام keras.LSTM().",
          "باستخدام tf.LSTM().",
          "باستخدام numpy.lstm()."
        ],
        answer: "باستخدام tf.keras.layers.LSTM."
      },
      {
        question: "ما الفرق بين Dense وConv2D؟",
        options: [
          "Dense للطبقات المتصلة، وConv2D للالتفاف.",
          "Conv2D للطبقات المتصلة، وDense للالتفاف.",
          "كلاهما متماثلان تمامًا.",
          "Dense تُستخدم للتجميع."
        ],
        answer: "Dense للطبقات المتصلة، وConv2D للالتفاف."
      },
      {
        question: "كيف يُمكن ضبط معدل التعلم في TensorFlow؟",
        options: [
          "باستخدام tf.keras.optimizers.schedules.",
          "باستخدام keras.learning_rate().",
          "باستخدام tf.rate().",
          "باستخدام numpy.schedule()."
        ],
        answer: "باستخدام tf.keras.optimizers.schedules."
      },
      {
        question: "ما الغرض من MaxPooling2D؟",
        options: [
          "تقليل الأبعاد في CNN.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقليل الأبعاد في CNN."
      },
      {
        question: "كيف يُمكن حفظ نموذج في TensorFlow؟",
        options: [
          "باستخدام model.save() أو tf.saved_model.save().",
          "باستخدام keras.save_model().",
          "باستخدام tf.save().",
          "باستخدام numpy.save()."
        ],
        answer: "باستخدام model.save() أو tf.saved_model.save()."
      },
      {
        question: "ما الغرض من EarlyStopping في TensorFlow؟",
        options: [
          "إيقاف التدريب عند توقف التحسن.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "إيقاف التدريب عند توقف التحسن."
      },
      {
        question: "كيف يُمكن تطبيق Transfer Learning في TensorFlow؟",
        options: [
          "باستخدام نماذج مثل VGG أو ResNet.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام نماذج مثل VGG أو ResNet."
      },
      {
        question: "ما الغرض من BatchNormalization؟",
        options: [
          "تسريع التدريب وتحسين الاستقرار.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تسريع التدريب وتحسين الاستقرار."
      },
      {
        question: "كيف يُمكن تطبيق Data Augmentation في TensorFlow؟",
        options: [
          "باستخدام tf.keras.preprocessing.image.ImageDataGenerator.",
          "باستخدام keras.augment().",
          "باستخدام tf.augment().",
          "باستخدام numpy.augment()."
        ],
        answer: "باستخدام tf.keras.preprocessing.image.ImageDataGenerator."
      }
    ]
  },
  {
    title: "PyTorch",
    icon: <Brain className="w-5 h-5 text-red-400" />,
    questions: [
      {
        question: "ما الغرض الأساسي من PyTorch في التعلم العميق؟",
        options: [
          "إنشاء قواعد بيانات.",
          "تطوير شبكات عصبية ديناميكية.",
          "تصور البيانات فقط.",
          "إدارة الشبكات."
        ],
        answer: "تطوير شبكات عصبية ديناميكية."
      },
      {
        question: "كيف يُمكن إنشاء tensor في PyTorch؟",
        options: [
          "torch.tensor([1, 2, 3])",
          "numpy.tensor([1, 2, 3])",
          "pytorch.tensor([1, 2, 3])",
          "tensor([1, 2, 3])"
        ],
        answer: "torch.tensor([1, 2, 3])"
      },
      {
        question: "ما الفرق بين torch.Tensor وtorch.tensor؟",
        options: [
          "torch.tensor يستنتج نوع البيانات، وtorch.Tensor لا يستنتج.",
          "torch.Tensor يستنتج نوع البيانات، وtorch.tensor لا يستنتج.",
          "كلاهما متماثلان تمامًا.",
          "torch.Tensor تُستخدم للتصنيف."
        ],
        answer: "torch.tensor يستنتج نوع البيانات، وtorch.Tensor لا يستنتج."
      },
      {
        question: "كيف يُمكن تحسين نموذج في PyTorch؟",
        options: [
          "باستخدام optimizers مثل torch.optim.Adam.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام optimizers مثل torch.optim.Adam."
      },
      {
        question: "ما الغرض من torch.nn.Module؟",
        options: [
          "إنشاء نماذج شبكات عصبية مخصصة.",
          "إنشاء قواعد بيانات.",
          "إدارة الشبكات.",
          "تصور البيانات."
        ],
        answer: "إنشاء نماذج شبكات عصبية مخصصة."
      },
      {
        question: "كيف يُمكن استخدام GPU في PyTorch؟",
        options: [
          "باستخدام .to('cuda').",
          "باستخدام .gpu().",
          "باستخدام .cuda_device().",
          "باستخدام .device('gpu')."
        ],
        answer: "باستخدام .to('cuda')."
      },
      {
        question: "ما الغرض من DataLoader في PyTorch؟",
        options: [
          "تحميل البيانات على دفعات بكفاءة.",
          "إنشاء شبكات عصبية.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تحميل البيانات على دفعات بكفاءة."
      },
      {
        question: "كيف يُمكن تطبيق CNN في PyTorch؟",
        options: [
          "باستخدام torch.nn.Conv2d.",
          "باستخدام torch.Conv().",
          "باستخدام nn.Conv().",
          "باستخدام numpy.Conv2d()."
        ],
        answer: "باستخدام torch.nn.Conv2d."
      },
      {
        question: "ما الغرض من torch.autograd؟",
        options: [
          "حساب التدرجات تلقائيًا.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "حساب التدرجات تلقائيًا."
      },
      {
        question: "كيف يُمكن حفظ نموذج في PyTorch؟",
        options: [
          "باستخدام torch.save(model.state_dict()).",
          "باستخدام model.save().",
          "باستخدام torch.model_save().",
          "باستخدام numpy.save()."
        ],
        answer: "باستخدام torch.save(model.state_dict())."
      },
      {
        question: "ما الغرض من nn.Dropout؟",
        options: [
          "تقليل الإفراط في التدريب.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقليل الإفراط في التدريب."
      },
      {
        question: "كيف يُمكن تطبيق LSTM في PyTorch؟",
        options: [
          "باستخدام torch.nn.LSTM.",
          "باستخدام torch.LSTM().",
          "باستخدام nn.LSTM().",
          "باستخدام numpy.LSTM()."
        ],
        answer: "باستخدام torch.nn.LSTM."
      },
      {
        question: "ما الفرق بين nn.Linear وnn.Conv2d؟",
        options: [
          "nn.Linear للطبقات المتصلة، وnn.Conv2d للالتفاف.",
          "nn.Conv2d للطبقات المتصلة، وnn.Linear للالتفاف.",
          "كلاهما متماثلان تمامًا.",
          "nn.Linear تُستخدم للتجميع."
        ],
        answer: "nn.Linear للطبقات المتصلة، وnn.Conv2d للالتفاف."
      },
      {
        question: "كيف يُمكن ضبط معدل التعلم في PyTorch؟",
        options: [
          "باستخدام torch.optim.lr_scheduler.",
          "باستخدام torch.lr().",
          "باستخدام nn.lr_scheduler().",
          "باستخدام numpy.scheduler()."
        ],
        answer: "باستخدام torch.optim.lr_scheduler."
      },
      {
        question: "ما الغرض من torchvision؟",
        options: [
          "توفير أدوات لمعالجة الصور.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "توفير أدوات لمعالجة الصور."
      },
      {
        question: "كيف يُمكن تطبيق Data Augmentation في PyTorch؟",
        options: [
          "باستخدام torchvision.transforms.",
          "باستخدام torch.augment().",
          "باستخدام nn.augment().",
          "باستخدام numpy.augment()."
        ],
        answer: "باستخدام torchvision.transforms."
      },
      {
        question: "ما الغرض من nn.BatchNorm2d؟",
        options: [
          "تطبيع الدفعات في CNN.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تطبيع الدفعات في CNN."
      },
      {
        question: "كيف يُمكن تطبيق Transfer Learning في PyTorch؟",
        options: [
          "باستخدام نماذج مثل ResNet من torchvision.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام نماذج مثل ResNet من torchvision."
      },
      {
        question: "ما الغرض من torch.no_grad()؟",
        options: [
          "تقليل استهلاك الذاكرة أثناء التنبؤ.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقليل استهلاك الذاكرة أثناء التنبؤ."
      },
      {
        question: "كيف يُمكن إنشاء شبكة ديناميكية في PyTorch؟",
        options: [
          "باستخدام torch.nn.Module مع منطق مخصص.",
          "باستخدام torch.dynamic().",
          "باستخدام nn.dynamic().",
          "باستخدام numpy.dynamic()."
        ],
        answer: "باستخدام torch.nn.Module مع منطق مخصص."
      }
    ]
  },
  {
    title: "Keras",
    icon: <Brain className="w-5 h-5 text-blue-400" />,
    questions: [
      {
        question: "ما الغرض الأساسي من Keras؟",
        options: [
          "إنشاء قواعد بيانات.",
          "تبسيط بناء الشبكات العصبية.",
          "تصور البيانات فقط.",
          "إدارة الشبكات."
        ],
        answer: "تبسيط بناء الشبكات العصبية."
      },
      {
        question: "كيف يُمكن إنشاء نموذج باستخدام Sequential API؟",
        options: [
          "Sequential([layers.Dense(64)]).",
          "Model([layers.Dense(64)]).",
          "Keras.Sequential([Dense(64)]).",
          "Sequential.Dense(64)."
        ],
        answer: "Sequential([layers.Dense(64)])."
      },
      {
        question: "ما الفرق بين Sequential وFunctional API؟",
        options: [
          "Sequential للنماذج الخطية، وFunctional للمعقدة.",
          "Functional للنماذج الخطية، وSequential للمعقدة.",
          "كلاهما متماثلان تمامًا.",
          "Sequential تُستخدم للتجميع."
        ],
        answer: "Sequential للنماذج الخطية، وFunctional للمعقدة."
      },
      {
        question: "كيف يُمكن تحسين نموذج في Keras؟",
        options: [
          "باستخدام optimizers مثل 'adam'.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام optimizers مثل 'adam'."
      },
      {
        question: "ما الغرض من layers.Dropout؟",
        options: [
          "تقليل الإفراط في التدريب.",
          "إنشاء شبكات عصبية.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقليل الإفراط في التدريب."
      },
      {
        question: "كيف يُمكن تطبيق CNN في Keras؟",
        options: [
          "باستخدام layers.Conv2D.",
          "باستخدام layers.Conv().",
          "باستخدام keras.Conv2D().",
          "باستخدام numpy.Conv2D()."
        ],
        answer: "باستخدام layers.Conv2D."
      },
      {
        question: "ما الغرض من Model.compile؟",
        options: [
          "تهيئة النموذج للتدريب.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تهيئة النموذج للتدريب."
      },
      {
        question: "كيف يُمكن حفظ نموذج في Keras؟",
        options: [
          "باستخدام model.save().",
          "باستخدام keras.save_model().",
          "باستخدام model.save_model().",
          "باستخدام numpy.save()."
        ],
        answer: "باستخدام model.save()."
      },
      {
        question: "ما الغرض من layers.BatchNormalization؟",
        options: [
          "تسريع التدريب وتحسين الاستقرار.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تسريع التدريب وتحسين الاستقرار."
      },
      {
        question: "كيف يُمكن تطبيق LSTM في Keras؟",
        options: [
          "باستخدام layers.LSTM.",
          "باستخدام keras.LSTM().",
          "باستخدام LSTM().",
          "باستخدام numpy.LSTM()."
        ],
        answer: "باستخدام layers.LSTM."
      },
      {
        question: "ما الغرض من ImageDataGenerator؟",
        options: [
          "تطبيق Data Augmentation على الصور.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تطبيق Data Augmentation على الصور."
      },
      {
        question: "كيف يُمكن ضبط معدل التعلم في Keras؟",
        options: [
          "باستخدام optimizers.Adam(learning_rate=0.001).",
          "باستخدام keras.lr().",
          "باستخدام model.lr().",
          "باستخدام numpy.lr()."
        ],
        answer: "باستخدام optimizers.Adam(learning_rate=0.001)."
      },
      {
        question: "ما الفرق بين layers.Dense وlayers.Conv2D؟",
        options: [
          "Dense للطبقات المتصلة، وConv2D للالتفاف.",
          "Conv2D للطبقات المتصلة، وDense للالتفاف.",
          "كلاهما متماثلان تمامًا.",
          "Dense تُستخدم للتجميع."
        ],
        answer: "Dense للطبقات المتصلة، وConv2D للالتفاف."
      },
      {
        question: "كيف يُمكن تطبيق Transfer Learning في Keras؟",
        options: [
          "باستخدام نماذج مثل VGG16 من applications.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام نماذج مثل VGG16 من applications."
      },
      {
        question: "ما الغرض من callbacks.EarlyStopping؟",
        options: [
          "إيقاف التدريب عند توقف التحسن.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "إيقاف التدريب عند توقف التحسن."
      },
      {
        question: "كيف يُمكن معالجة البيانات في Keras؟",
        options: [
          "باستخدام preprocessing.image أو text.",
          "باستخدام keras.preprocess().",
          "باستخدام preprocess().",
          "باستخدام numpy.preprocess()."
        ],
        answer: "باستخدام preprocessing.image أو text."
      },
      {
        question: "ما الغرض من layers.MaxPooling2D؟",
        options: [
          "تقليل الأبعاد في CNN.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقليل الأبعاد في CNN."
      },
      {
        question: "كيف يُمكن إنشاء نموذج مع Functional API؟",
        options: [
          "باستخدام Model(inputs, outputs).",
          "باستخدام Sequential(inputs, outputs).",
          "باستخدام keras.Functional().",
          "باستخدام numpy.Model()."
        ],
        answer: "باستخدام Model(inputs, outputs)."
      },
      {
        question: "ما الغرض من layers.Flatten؟",
        options: [
          "تحويل البيانات إلى متجه أحادي.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تحويل البيانات إلى متجه أحادي."
      },
      {
        question: "كيف يُمكن تكامل Keras مع TensorFlow؟",
        options: [
          "باستخدام tf.keras كواجهة افتراضية.",
          "باستخدام keras.tensorflow().",
          "باستخدام tf.keras_integration().",
          "باستخدام numpy.keras()."
        ],
        answer: "باستخدام tf.keras كواجهة افتراضية."
      }
    ]
  },
  {
    title: "Computer Vision",
    icon: <Eye className="w-5 h-5 text-blue-400" />,
    questions: [
      {
        question: "ما الغرض الأساسي من الرؤية الحاسوبية؟",
        options: [
          "إنشاء قواعد بيانات.",
          "تحليل الصور ومقاطع الفيديو.",
          "تصور البيانات فقط.",
          "إدارة الشبكات."
        ],
        answer: "تحليل الصور ومقاطع الفيديو."
      },
      {
        question: "كيف يُمكن معالجة الصور باستخدام OpenCV؟",
        options: [
          "باستخدام cv2.imread() وcv2.resize().",
          "باستخدام opencv.image().",
          "باستخدام cv.image().",
          "باستخدام numpy.image()."
        ],
        answer: "باستخدام cv2.imread() وcv2.resize()."
      },
      {
        question: "ما الفرق بين تصنيف الصور واكتشاف الأشياء؟",
        options: [
          "تصنيف الصور يُحدد فئة، واكتشاف الأشياء يُحدد المواقع.",
          "اكتشاف الأشياء يُحدد فئة، وتصنيف الصور يُحدد المواقع.",
          "كلاهما متماثلان تمامًا.",
          "تصنيف الصور يُستخدم للتجميع."
        ],
        answer: "تصنيف الصور يُحدد فئة، واكتشاف الأشياء يُحدد المواقع."
      },
      {
        question: "كيف يُمكن تطبيق CNN للرؤية الحاسوبية؟",
        options: [
          "باستخدام طبقات Conv2D وMaxPooling2D.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام طبقات Conv2D وMaxPooling2D."
      },
      {
        question: "ما الغرض من تجزئة الصور؟",
        options: [
          "تحديد مناطق معينة في الصورة.",
          "إنشاء شبكات عصبية.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تحديد مناطق معينة في الصورة."
      },
      {
        question: "كيف يُمكن تطبيق اكتشاف الأشياء؟",
        options: [
          "باستخدام نماذج مثل YOLO أو Faster R-CNN.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام نماذج مثل YOLO أو Faster R-CNN."
      },
      {
        question: "ما الغرض من Transfer Learning في الرؤية الحاسوبية؟",
        options: [
          "تسريع تطوير النماذج باستخدام نماذج مدربة مسبقًا.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تسريع تطوير النماذج باستخدام نماذج مدربة مسبقًا."
      },
      {
        question: "كيف يُمكن استخدام OpenCV للتعرف على الوجوه؟",
        options: [
          "باستخدام Haar Cascades أو DNN.",
          "باستخدام opencv.face().",
          "باستخدام cv.face().",
          "باستخدام numpy.face()."
        ],
        answer: "باستخدام Haar Cascades أو DNN."
      },
      {
        question: "ما الغرض من Data Augmentation في الرؤية الحاسوبية؟",
        options: [
          "زيادة تنوع البيانات لتحسين النماذج.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "زيادة تنوع البيانات لتحسين النماذج."
      },
      {
        question: "كيف يُمكن تطبيق تجزئة الصور؟",
        options: [
          "باستخدام نماذج مثل U-Net أو Mask R-CNN.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام نماذج مثل U-Net أو Mask R-CNN."
      },
      {
        question: "ما الغرض من cv2.Canny؟",
        options: [
          "اكتشاف الحواف في الصور.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "اكتشاف الحواف في الصور."
      },
      {
        question: "كيف يُمكن تحسين أداء نموذج رؤية حاسوبية؟",
        options: [
          "باستخدام Transfer Learning وData Augmentation.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام Transfer Learning وData Augmentation."
      },
      {
        question: "ما الفرق بين YOLO وFaster R-CNN؟",
        options: [
          "YOLO أسرع، وFaster R-CNN أدق.",
          "Faster R-CNN أسرع، وYOLO أدق.",
          "كلاهما متماثلان تمامًا.",
          "YOLO تُستخدم للتجميع."
        ],
        answer: "YOLO أسرع، وFaster R-CNN أدق."
      },
      {
        question: "كيف يُمكن نشر نموذج رؤية حاسوبية؟",
        options: [
          "باستخدام TensorFlow Serving أو ONNX.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام TensorFlow Serving أو ONNX."
      },
      {
        question: "ما الغرض من cv2.threshold؟",
        options: [
          "تقسيم الصور بناءً على قيم العتبة.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تقسيم الصور بناءً على قيم العتبة."
      },
      {
        question: "كيف يُمكن معالجة مقاطع الفيديو باستخدام OpenCV؟",
        options: [
          "باستخدام cv2.VideoCapture().",
          "باستخدام opencv.video().",
          "باستخدام cv.video().",
          "باستخدام numpy.video()."
        ],
        answer: "باستخدام cv2.VideoCapture()."
      },
      {
        question: "ما الغرض من ResNet؟",
        options: [
          "تحسين أداء CNN باستخدام الاتصالات المتبقية.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تحسين أداء CNN باستخدام الاتصالات المتبقية."
      },
      {
        question: "كيف يُمكن اكتشاف النقاط المميزة في الصور؟",
        options: [
          "باستخدام SIFT أو ORB في OpenCV.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام SIFT أو ORB في OpenCV."
      },
      {
        question: "ما الغرض من InceptionV3؟",
        options: [
          "تصنيف الصور باستخدام شبكة عميقة.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تصنيف الصور باستخدام شبكة عميقة."
      },
      {
        question: "كيف يُمكن تحسين سرعة نموذج رؤية حاسوبية؟",
        options: [
          "باستخدام نماذج خفيفة مثل MobileNet.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام نماذج خفيفة مثل MobileNet."
      }
    ]
  },
  {
    title: "Natural Language Processing",
    icon: <MessageSquare className="w-5 h-5 text-purple-400" />,
    questions: [
      {
        question: "ما الغرض الأساسي من معالجة اللغة الطبيعية؟",
        options: [
          "إنشاء قواعد بيانات.",
          "تحليل النصوص واللغة.",
          "تصور البيانات فقط.",
          "إدارة الشبكات."
        ],
        answer: "تحليل النصوص واللغة."
      },
      {
        question: "كيف يُمكن تطبيق التقطيع (Tokenization)؟",
        options: [
          "باستخدام nltk.tokenize أو spaCy.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام nltk.tokenize أو spaCy."
      },
      {
        question: "ما الفرق بين Word2Vec وGloVe؟",
        options: [
          "Word2Vec يعتمد على السياق، وGloVe على الإحصاء.",
          "GloVe يعتمد على السياق، وWord2Vec على الإحصاء.",
          "كلاهما متماثلان تمامًا.",
          "Word2Vec تُستخدم للتجميع."
        ],
        answer: "Word2Vec يعتمد على السياق، وGloVe على الإحصاء."
      },
      {
        question: "كيف يُمكن تطبيق تحليل العاطفة؟",
        options: [
          "باستخدام نماذج مثل BERT أو LSTM.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام نماذج مثل BERT أو LSTM."
      },
      {
        question: "ما الغرض من Transformers؟",
        options: [
          "معالجة النصوص باستخدام آلية الانتباه.",
          "إنشاء شبكات عصبية.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "معالجة النصوص باستخدام آلية الانتباه."
      },
      {
        question: "كيف يُمكن استخدام NLTK؟",
        options: [
          "لمعالجة النصوص مثل التقطيع وتحليل العاطفة.",
          "باستخدام nltk.image().",
          "باستخدام nltk.data().",
          "باستخدام numpy.nltk()."
        ],
        answer: "لمعالجة النصوص مثل التقطيع وتحليل العاطفة."
      },
      {
        question: "ما الغرض من spaCy؟",
        options: [
          "معالجة النصوص بكفاءة عالية.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "معالجة النصوص بكفاءة عالية."
      },
      {
        question: "كيف يُمكن تطبيق Word Embeddings؟",
        options: [
          "باستخدام Word2Vec أو GloVe.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام Word2Vec أو GloVe."
      },
      {
        question: "ما الغرض من Named Entity Recognition؟",
        options: [
          "تحديد الكيانات مثل الأسماء والمؤسسات.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تحديد الكيانات مثل الأسماء والمؤسسات."
      },
      {
        question: "كيف يُمكن تطبيق نموذج BERT؟",
        options: [
          "باستخدام transformers من Hugging Face.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام transformers من Hugging Face."
      },
      {
        question: "ما الغرض من Stop Words؟",
        options: [
          "إزالة الكلمات الشائعة غير المفيدة.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "إزالة الكلمات الشائعة غير المفيدة."
      },
      {
        question: "كيف يُمكن تحسين نموذج NLP؟",
        options: [
          "باستخدام Fine-Tuning لنماذج مثل BERT.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام Fine-Tuning لنماذج مثل BERT."
      },
      {
        question: "ما الفرق بين RNN وTransformers؟",
        options: [
          "Transformers أكثر كفاءة في معالجة السياق الطويل.",
          "RNN أكثر كفاءة في معالجة السياق الطويل.",
          "كلاهما متماثلان تمامًا.",
          "RNN تُستخدم للتجميع."
        ],
        answer: "Transformers أكثر كفاءة في معالجة السياق الطويل."
      },
      {
        question: "كيف يُمكن نشر نموذج NLP؟",
        options: [
          "باستخدام FastAPI أو TensorFlow Serving.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام FastAPI أو TensorFlow Serving."
      },
      {
        question: "ما الغرض من TF-IDF؟",
        options: [
          "قياس أهمية الكلمات في النصوص.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "قياس أهمية الكلمات في النصوص."
      },
      {
        question: "كيف يُمكن تطبيق Text Classification؟",
        options: [
          "باستخدام نماذج مثل LSTM أو BERT.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام نماذج مثل LSTM أو BERT."
      },
      {
        question: "ما الغرض من Lemmatization؟",
        options: [
          "تحويل الكلمات إلى شكلها الأساسي.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تحويل الكلمات إلى شكلها الأساسي."
      },
      {
        question: "كيف يُمكن معالجة النصوص متعددة اللغات؟",
        options: [
          "باستخدام نماذج مثل mBERT.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام نماذج مثل mBERT."
      },
      {
        question: "ما الغرض من Attention Mechanism؟",
        options: [
          "التركيز على أجزاء مهمة من النص.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "التركيز على أجزاء مهمة من النص."
      },
      {
        question: "كيف يُمكن تطبيق Question Answering؟",
        options: [
          "باستخدام نماذج مثل BERT أو RoBERTa.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام نماذج مثل BERT أو RoBERTa."
      }
    ]
  },
  {
    title: "Time Series Analysis",
    icon: <TrendingDown className="w-5 h-5 text-green-400" />,
    questions: [
      {
        question: "ما الغرض الأساسي من تحليل السلاسل الزمنية؟",
        options: [
          "إنشاء قواعد بيانات.",
          "التنبؤ بالبيانات المتغيرة مع الزمن.",
          "تصور البيانات فقط.",
          "إدارة الشبكات."
        ],
        answer: "التنبؤ بالبيانات المتغيرة مع الزمن."
      },
      {
        question: "كيف يُمكن تطبيق نموذج ARIMA؟",
        options: [
          "باستخدام statsmodels.tsa.arima.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام statsmodels.tsa.arima."
      },
      {
        question: "ما الفرق بين ARIMA وSARIMA؟",
        options: [
          "SARIMA تتعامل مع الموسمية، وARIMA لا تتعامل.",
          "ARIMA تتعامل مع الموسمية، وSARIMA لا تتعامل.",
          "كلاهما متماثلان تمامًا.",
          "ARIMA تُستخدم للتجميع."
        ],
        answer: "SARIMA تتعامل مع الموسمية، وARIMA لا تتعامل."
      },
      {
        question: "كيف يُمكن استخدام Prophet؟",
        options: [
          "للتنبؤ بالسلاسل الزمنية مع الموسمية.",
          "باستخدام prophet.plot().",
          "باستخدام prophet.data().",
          "باستخدام numpy.prophet()."
        ],
        answer: "للتنبؤ بالسلاسل الزمنية مع الموسمية."
      },
      {
        question: "ما الغرض من LSTM في تحليل السلاسل الزمنية؟",
        options: [
          "معالجة السلاسل المعقدة باستخدام الذاكرة طويلة المدى.",
          "إنشاء شبكات عصبية.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "معالجة السلاسل المعقدة باستخدام الذاكرة طويلة المدى."
      },
      {
        question: "كيف يُمكن تقييم نموذج سلسلة زمنية؟",
        options: [
          "باستخدام مقاييس مثل MAE أو RMSE.",
          "باستخدام F1 Score.",
          "باستخدام Silhouette Score.",
          "باستخدام R²."
        ],
        answer: "باستخدام مقاييس مثل MAE أو RMSE."
      },
      {
        question: "ما الغرض من التكامل مع Pandas؟",
        options: [
          "معالجة البيانات الزمنية باستخدام DataFrames.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "معالجة البيانات الزمنية باستخدام DataFrames."
      },
      {
        question: "كيف يُمكن التعامل مع الموسمية؟",
        options: [
          "باستخدام SARIMA أو Prophet.",
          "باستخدام LinearRegression.",
          "باستخدام KMeans.",
          "باستخدام PCA."
        ],
        answer: "باستخدام SARIMA أو Prophet."
      },
      {
        question: "ما الغرض من Decomposition؟",
        options: [
          "فصل السلسلة إلى اتجاه وموسمية وبيضاء.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "فصل السلسلة إلى اتجاه وموسمية وبيضاء."
      },
      {
        question: "كيف يُمكن تطبيق Exponential Smoothing؟",
        options: [
          "باستخدام statsmodels.tsa.holtwinters.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام statsmodels.tsa.holtwinters."
      },
      {
        question: "ما الغرض من Stationarity؟",
        options: [
          "ضمان استقرار المتوسط والتفرقة.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "ضمان استقرار المتوسط والتفرقة."
      },
      {
        question: "كيف يُمكن اختبار Stationarity؟",
        options: [
          "باستخدام اختبار ADF أو KPSS.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام اختبار ADF أو KPSS."
      },
      {
        question: "ما الفرق بين LSTM وARIMA؟",
        options: [
          "LSTM للسلاسل المعقدة، وARIMA للبسيطة.",
          "ARIMA للسلاسل المعقدة، وLSTM للبسيطة.",
          "كلاهما متماثلان تمامًا.",
          "LSTM تُستخدم للتجميع."
        ],
        answer: "LSTM للسلاسل المعقدة، وما ARIMA للبسيطة."
      },
      {
        question: "كيف يُمكن تحسين نموذج سلسلة زمنية؟",
        options: [
          "بضبط المعلمات وإضافة ميزات موسمية.",
          "باستخدام matplotlib.",
          "باستخدامي pandas.",
          "باستخدام numpy."
        ],
        answer: "بضبط المعلمات وإضافة ميزات موسمية."
      },
      {
        question: "ما الغرض من Rolling Forecast؟",
        options: [
          "التنبؤ التدريجي باستخدام نافذة متحركة.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "التنبؤ التدريجي باستخدام نافذة متحركة."
      },
      {
        question: "كيف يُمكن معالجة القيم المفقودة في السلسلة الزمنية؟",
        options: [
          "باستخدام الاستيفاء مثل df.interpolate().",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام الاستيفاء مثل df.interpolate()."
      },
      {
        question: "ما الغرض من ACF وPACF؟",
        options: [
          "تحديد النظام في نماذج ARIMA.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تحديد النظام في نماذج ARIMA."
      },
      {
        question: "كيف يُمكن تطبيق GRU في السلسلة الزمنية؟",
        options: [
          "باستخدام layers.GRU في Keras.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام layers.GRU في Keras."
      },
      {
        question: "ما الغرض من Cross-Correlation؟",
        options: [
          "تحديد العلاقة بين سلاسل زمنية.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تحديد العلاقة بين سلاسل زمنية."
      },
      {
        question: "كيف يُمكن نشر نموذج سلسلة زمنية؟",
        options: [
          "باستخدام FastAPI أو TensorFlow Serving.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام FastAPI أو TensorFlow Serving."
      }
    ]
  },
  {
    title: "MLOps",
    icon: <Box className="w-5 h-5 text-yellow-400" />,
    questions: [
      {
        question: "ما الغرض الأساسي من MLOps؟",
        options: [
          "إنشاء قواعد بيانات.",
          "أتمتة وإدارة دورة حياة نماذج ML.",
          "تصور البيانات فقط.",
          "إدارة الشبكات."
        ],
        answer: "أتمتة وإدارة دورة حياة نماذج ML."
      },
      {
        question: "كيف يُمكن تتبع التجارب في MLOps؟",
        options: [
          "باستخدام MLflow Tracking.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام MLflow Tracking."
      },
      {
        question: "ما الفرق بين CI/CD وMLOps؟",
        options: [
          "CI/CD للتطوير العام، وMLOps لنماذج ML.",
          "MLOps للتطوير العام، وCI/CD لنماذج ML.",
          "كلاهما متماثلان تمامًا.",
          "CI/CD تُستخدم للتجميع."
        ],
        answer: "CI/CD للتطوير العام، وMLOps لنماذج ML."
      },
      {
        question: "كيف يُمكن نشر نموذج باستخدام Docker؟",
        options: [
          "بإنشاء صورة تحتوي على النموذج وتشغيلها.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "بإنشاء صورة تحتوي على النموذج وتشغيلها."
      },
      {
        question: "ما الغرض من MLflow؟",
        options: [
          "تتبع التجارب وإدارة النماذج.",
          "إنشاء شبكات عصبية.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تتبع التجارب وإدارة النماذج."
      },
      {
        question: "كيف يُمكن مراقبة أداء نموذج في MLOps؟",
        options: [
          "باستخدام Prometheus أو Grafana.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام Prometheus أو Grafana."
      },
      {
        question: "ما الغرض من Kubeflow؟",
        options: [
          "نشر وإدارة نماذج ML على Kubernetes.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "نشر وإدارة نماذج ML على Kubernetes."
      },
      {
        question: "كيف يُمكن التكامل مع CI/CD في MLOps؟",
        options: [
          "باستخدام Jenkins أو GitHub Actions.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام Jenkins أو GitHub Actions."
      },
      {
        question: "ما الغرض من Model Versioning؟",
        options: [
          "إدارة إصدارات النماذج لضمان الاستقرار.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "إدارة إصدارات النماذج لضمان الاستقرار."
      },
      {
        question: "كيف يُمكن أتمتة خط أنابيب ML؟",
        options: [
          "باستخدام Airflow أو Kubeflow Pipelines.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام Airflow أو Kubeflow Pipelines."
      },
      {
        question: "ما الغرض من Feature Store؟",
        options: [
          "تخزين وإدارة ميزات البيانات لنماذج ML.",
          "إنشاء شبكات عصبية.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تخزين وإدارة ميزات البيانات لنماذج ML."
      },
      {
        question: "كيف يُمكن تحسين أداء نموذج في MLOps؟",
        options: [
          "بتكوين التدريب الموزع ومراقبة الأداء.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "بتكوين التدريب الموزع ومراقبة الأداء."
      },
      {
        question: "ما الفرق بين Model Registry وModel Tracking؟",
        options: [
          "Registry لإدارة النماذج، وTracking لتتبع التجارب.",
          "Tracking لإدارة النماذج، وRegistry لتتبع التجارب.",
          "كلاهما متماثلان تمامًا.",
          "Registry تُستخدم للتجميع."
        ],
        answer: "Registry لإدارة النماذج، وTracking لتتبع التجارب."
      },
      {
        question: "كيف يُمكن نشر نموذج في AWS SageMaker؟",
        options: [
          "بإنشاء endpoint من النموذج المدرب.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "بإنشاء endpoint من النموذج المدرب."
      },
      {
        question: "ما الغرض من A/B Testing في MLOps؟",
        options: [
          "مقارنة أداء نموذجين في الإنتاج.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "مقارنة أداء نموذجين في الإنتاج."
      },
      {
        question: "كيف يُمكن التعامل مع Data Drift؟",
        options: [
          "بمراقبة توزيع البيانات وإعادة التدريب.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "بمراقبة توزيع البيانات وإعادة التدريب."
      },
      {
        question: "ما الغرض من DVC؟",
        options: [
          "إدارة إصدارات البيانات والنماذج.",
          "إنشاء شبكات عصبية.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "إدارة إصدارات البيانات والنماذج."
      },
      {
        question: "كيف يُمكن تأمين نموذج في MLOps؟",
        options: [
          "بتكوين التشفير وإدارة الصلاحيات.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "بتكوين التشفير وإدارة الصلاحيات."
      },
      {
        question: "ما الغرض من TensorFlow Serving؟",
        options: [
          "نشر نماذج TensorFlow في الإنتاج.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "نشر نماذج TensorFlow في الإنتاج."
      },
      {
        question: "كيف يُمكن إدارة التجارب في MLflow؟",
        options: [
          "بتسجيل المعلمات والمقاييس باستخدام MLflow Tracking.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "بتسجيل المعلمات والمقاييس باستخدام MLflow Tracking."
      }
    ]
  },
  {
    title: "Cloud Deployment",
    icon: <Cloud className="w-5 h-5 text-blue-400" />,
    questions: [
      {
        question: "ما الغرض الأساسي من النشر على السحابة؟",
        options: [
          "إنشاء قواعد بيانات.",
          "تشغيل نماذج ML في بيئات قابلة للتوسع.",
          "تصور البيانات فقط.",
          "إدارة الشبكات."
        ],
        answer: "تشغيل نماذج ML في بيئات قابلة للتوسع."
      },
      {
        question: "كيف يُمكن نشر نموذج باستخدام AWS SageMaker؟",
        options: [
          "بإنشاء endpoint من النموذج المدرب.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "بإنشاء endpoint من النموذج المدرب."
      },
      {
        question: "ما الفرق بين AWS SageMaker وAzure ML؟",
        options: [
          "كلاهما منصتا سحابة، لكن بأدوات مختلفة.",
          "Azure ML للنماذج فقط، وSageMaker للتطوير العام.",
          "كلاهما متماثلان تمامًا.",
          "SageMaker تُستخدم للتجميع."
        ],
        answer: "كلاهما منصتا سحابة، لكن بأدوات مختلفة."
      },
      {
        question: "كيف يُمكن إدارة استضافة النماذج؟",
        options: [
          "باستخدام خدمات مثل SageMaker Endpoints.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام خدمات مثل SageMaker Endpoints."
      },
      {
        question: "ما الغرض من Autoscaling في النشر السحابي؟",
        options: [
          "توسيع الموارد تلقائيًا بناءً على الحمل.",
          "إنشاء شبكات عصبية.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "توسيع الموارد تلقائيًا بناءً على الحمل."
      },
      {
        question: "كيف يُمكن مراقبة نموذج في السحابة؟",
        options: [
          "باستخدام CloudWatch أو Azure Monitor.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام CloudWatch أو Azure Monitor."
      },
      {
        question: "ما الغرض من Serverless Deployment؟",
        options: [
          "تشغيل النماذج بدون إدارة خوادم.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تشغيل النماذج بدون إدارة خوادم."
      },
      {
        question: "كيف يُمكن التكامل مع Python في النشر السحابي؟",
        options: [
          "باستخدام SDKs مثل boto3 أو azure-ml-sdk.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام SDKs مثل boto3 أو azure-ml-sdk."
      },
      {
        question: "ما الغرض من Model Hosting؟",
        options: [
          "توفير نقطة وصول للتنبؤ بالتكامل مع التطبيقات.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "توفير نقطة وصول للتنبؤ بالتكامل مع التطبيقات."
      },
      {
        question: "كيف يُمكن تحسين تكلفة النشر على السحابة؟",
        options: [
          "باستخدام Spot Instances أو Serverless.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام Spot Instances أو Serverless."
      },
      {
        question: "ما الغرض من Lambda Functions في AWS؟",
        options: [
          "تشغيل كود بدون إدارة خوادم.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تشغيل كود بدون إدارة خوادم."
      },
      {
        question: "كيف يُمكن نشر نموذج في Azure ML؟",
        options: [
          "بإنشاء endpoint باستخدام Azure ML SDK.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "بإنشاء endpoint باستخدام Azure ML SDK."
      },
      {
        question: "ما الفرق بين EC2 وSageMaker في AWS؟",
        options: [
          "EC2 للخوادم العامة، وSageMaker لنماذج ML.",
          "SageMaker للخوادم العامة، وEC2 لنماذج ML.",
          "كلاهما متماثلان تمامًا.",
          "EC2 تُستخدم للتجميع."
        ],
        answer: "EC2 للخوادم العامة، وSageMaker لنماذج ML."
      },
      {
        question: "كيف يُمكن تحسين أداء نموذج في السحابة؟",
        options: [
          "بتكوين التدريب الموزع واستخدام GPUs.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "بتكوين التدريب الموزع واستخدام GPUs."
      },
      {
        question: "ما الغرض من Load Balancing؟",
        options: [
          "توزيع الحمل على عدة خوادم.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "توزيع الحمل على عدة خوادم."
      },
      {
        question: "كيف يُمكن تأمين نموذج في السحابة؟",
        options: [
          "بتكوين IAM وتشفير البيانات.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "بتكوين IAM وتشفير البيانات."
      },
      {
        question: "ما الغرض من SageMaker Pipelines؟",
        options: [
          "أتمتة خطوات تطوير ونشر النماذج.",
          "إنشاء حلقات تكرار.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "أتمتة خطوات تطوير ونشر النماذج."
      },
      {
        question: "كيف يُمكن استخدام Google Cloud AI؟",
        options: [
          "لنشر نماذج باستخدام Vertex AI.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "لنشر نماذج باستخدام Vertex AI."
      },
      {
        question: "ما الغرض من Model Monitoring؟",
        options: [
          "تتبع أداء النماذج في الإنتاج.",
          "إنشاء فئات.",
          "إدارة قواعد البيانات.",
          "تصور البيانات."
        ],
        answer: "تتبع أداء النماذج في الإنتاج."
      },
      {
        question: "كيف يُمكن تحسين سرعة النشر في السحابة؟",
        options: [
          "باستخدام حاويات خفيفة وCDN.",
          "باستخدام matplotlib.",
          "باستخدام pandas.",
          "باستخدام numpy."
        ],
        answer: "باستخدام حاويات خفيفة وCDN."
      }
    ]
  },
  {
    title: "Model Interpretability",
    icon: <Search className="w-5 h-5 text-green-400" />,
    questions: [
      {
        question: "ما الغرض الأساسي من تفسير النماذج في التعلم الآلي؟",
        options: [
          "إنشاء قواعد بيانات.",
          "فهم كيفية اتخاذ النماذج للقرارات.",
          "تصور البيانات فقط.",
          "إدارة الشبكات."
        ],
        answer: "فهم كيفية اتخاذ النماذج للقرارات."
      },
      {
        question: "كيف يُمكن استخدام مكتبة SHAP لتفسير النماذج؟",
        options: [
          "بتحديد أهمية كل ميزة بناءً على قيم Shapley.",
          "بتصنيف البيانات إلى فئات.",
          "بتحسين أداء النموذج مباشرة.",
          "بتنشيط الشبكات العصبية."
        ],
        answer: "بتحديد أهمية كل ميزة بناءً على قيم Shapley."
      },
      {
        question: "ما الفرق بين SHAP وLIME في تفسير النماذج؟",
        options: [
          "SHAP يوفر تفسيرات عالمية ومحلية، بينما LIME يركز على التفسيرات المحلية.",
          "LIME يوفر تفسيرات عالمية، وSHAP يركز على التفسيرات المحلية.",
          "كلاهما متماثلان تمامًا في النهج.",
          "SHAP يُستخدم فقط للنماذج الخطية."
        ],
        answer: "SHAP يوفر تفسيرات عالمية ومحلية، بينما LIME يركز على التفسيرات المحلية."
      },
      {
        question: "ما الغرض من استخدام LIME في تفسير النماذج؟",
        options: [
          "توفير تفسيرات محلية لتنبؤات النموذج الفردية.",
          "تحسين سرعة تدريب النماذج.",
          "إنشاء شبكات عصبية معقدة.",
          "إدارة قواعد البيانات."
        ],
        answer: "توفير تفسيرات محلية لتنبؤات النموذج الفردية."
      },
      {
        question: "كيف يُمكن تصور قرارات النموذج باستخدام SHAP؟",
        options: [
          "باستخدام مخططات مثل Force Plot أو Summary Plot.",
          "باستخدام matplotlib.scatter().",
          "باستخدام pandas.plot().",
          "باستخدام numpy.histogram()."
        ],
        answer: "باستخدام مخططات مثل Force Plot أو Summary Plot."
      },
      {
        question: "ما المقصود بالنماذج الصندوقية (Black-box Models)؟",
        options: [
          "نماذج لا يُمكن فهم عملها الداخلي مثل الشبكات العصبية العميقة.",
          "نماذج بسيطة مثل الانحدار الخطي.",
          "نماذج تُستخدم فقط لتصنيف الصور.",
          "نماذج مُدربة على بيانات مشفرة."
        ],
        answer: "نماذج لا يُمكن فهم عملها الداخلي مثل الشبكات العصبية العميقة."
      },
      {
        question: "كيف يُمكن دمج أدوات تفسير النماذج مع Python؟",
        options: [
          "باستخدام مكتبات مثل SHAP وLIME مع scikit-learn أو TensorFlow.",
          "باستخدام مكتبة matplotlib فقط.",
          "باستخدام pandas لتحليل البيانات.",
          "باستخدام numpy لإنشاء النماذج."
        ],
        answer: "باستخدام مكتبات مثل SHAP وLIME مع scikit-learn أو TensorFlow."
      },
      {
        question: "لماذا يُعتبر تفسير النماذج ضروريًا في التطبيقات الطبية؟",
        options: [
          "لزيادة الثقة في القرارات وزيادة الشفافية.",
          "لتحسين سرعة النماذج فقط.",
          "لإنشاء قواعد بيانات طبية.",
          "لتصميم واجهات المستخدم."
        ],
        answer: "لزيادة الثقة في القرارات وزيادة الشفافية."
      },
      {
        question: "ما الغرض من Permutation Importance؟",
        options: [
          "قياس تأثير خلط الميزات على أداء النموذج.",
          "تحسين سرعة تدريب النماذج.",
          "إنشاء شبكات عصبية ديناميكية.",
          "تصور البيانات الخام."
        ],
        answer: "قياس تأثير خلط الميزات على أداء النموذج."
      },
      {
        question: "كيف يُمكن تفسير نموذج شجرة قرار باستخدام SHAP؟",
        options: [
          "باستخدام TreeExplainer من مكتبة SHAP.",
          "باستخدام LinearExplainer من مكتبة SHAP.",
          "باستخدام matplotlib.tree_plot().",
          "باستخدام numpy.tree()."
        ],
        answer: "باستخدام TreeExplainer من مكتبة SHAP."
      },
      {
        question: "ما الغرض من Partial Dependence Plots (PDP)؟",
        options: [
          "إظهار تأثير ميزة معينة على تنبؤات النموذج.",
          "إنشاء حلقات تكرار لتدريب النماذج.",
          "إدارة قواعد البيانات.",
          "تحسين أداء النماذج مباشرة."
        ],
        answer: "إظهار تأثير ميزة معينة على تنبؤات النموذج."
      },
      {
        question: "كيف يُمكن التعامل مع النماذج المعقدة مثل XGBoost في التفسير؟",
        options: [
          "باستخدام SHAP أو LIME مع دعم النماذج الشجرية.",
          "باستخدام matplotlib.scatter().",
          "باستخدام pandas.groupby().",
          "باستخدام numpy.array()."
        ],
        answer: "باستخدام SHAP أو LIME مع دعم النماذج الشجرية."
      },
      {
        question: "ما الفرق بين التفسير العالمي والمحلي للنماذج؟",
        options: [
          "العالمي يشرح النموذج ككل، والمحلي يشرح تنبؤًا فرديًا.",
          "المحلي يشرح النموذج ككل، والعالمي يشرح تنبؤًا فرديًا.",
          "كلاهما متماثلان تمامًا.",
          "العالمي يُستخدم فقط للتصنيف."
        ],
        answer: "العالمي يشرح النموذج ككل، والمحلي يشرح تنبؤًا فرديًا."
      },
      {
        question: "كيف يُمكن توصيل الأفكار المستخلصة من التفسير لغير التقنيين؟",
        options: [
          "باستخدام تصورات بصرية وتفسيرات مبسطة.",
          "باستخدام معادلات رياضية معقدة.",
          "بتقديم كود Python الخام.",
          "بتصميم قواعد بيانات."
        ],
        answer: "باستخدام تصورات بصرية وتفسيرات مبسطة."
      },
      {
        question: "ما الغرض من ICE Plots (Individual Conditional Expectation)؟",
        options: [
          "إظهار تأثير ميزة على تنبؤات فردية.",
          "تحسين سرعة تدريب النماذج.",
          "إنشاء شبكات عصبية.",
          "إدارة قواعد البيانات."
        ],
        answer: "إظهار تأثير ميزة على تنبؤات فردية."
      },
      {
        question: "كيف يُمكن تفسير نموذج شبكة عصبية عميقة؟",
        options: [
          "باستخدام DeepExplainer من مكتبة SHAP.",
          "باستخدام matplotlib.neural_network().",
          "باستخدام pandas.neural().",
          "باستخدام numpy.deep()."
        ],
        answer: "باستخدام DeepExplainer من مكتبة SHAP."
      },
      {
        question: "ما الغرض من Feature Interaction في SHAP؟",
        options: [
          "تحديد التفاعلات بين الميزات التي تؤثر على التنبؤ.",
          "إنشاء فئات جديدة للبيانات.",
          "تحسين أداء النماذج مباشرة.",
          "تصور البيانات الخام."
        ],
        answer: "تحديد التفاعلات بين الميزات التي تؤثر على التنبؤ."
      },
      {
        question: "كيف يُمكن استخدام LIME لتفسير نموذج تصنيف نصوص؟",
        options: [
          "باستخدام LimeTextExplainer من مكتبة LIME.",
          "باستخدام matplotlib.text().",
          "باستخدام pandas.text().",
          "باستخدام numpy.text()."
        ],
        answer: "باستخدام LimeTextExplainer من مكتبة LIME."
      },
      {
        question: "لماذا تُعتبر التفسيرات القابلة للثقة مهمة في الصناعة؟",
        options: [
          "لضمان الامتثال للوائح وتحسين الثقة.",
          "لزيادة سرعة النماذج فقط.",
          "لإنشاء قواعد بيانات جديدة.",
          "لتصميم واجهات مستخدم."
        ],
        answer: "لضمان الامتثال للوائح وتحسين الثقة."
      },
      {
        question: "كيف يُمكن تحسين دقة التفسيرات باستخدام SHAP؟",
        options: [
          "باستخدام KernelExplainer للنماذج العامة.",
          "باستخدام matplotlib.accuracy().",
          "باستخدام pandas.accuracy().",
          "باستخدام numpy.accuracy()."
        ],
        answer: "باستخدام KernelExplainer للنماذج العامة."
      }
    ]
  }
]

export default function QuestionsML(){
  return (
    <Questions quizData={quizData}/>
  )
}