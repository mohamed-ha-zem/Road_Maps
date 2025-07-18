import Roadmap from "../Components/RoadMap"
import React from "react";
import {
  Code,
  GitBranch,
  Server,
  Workflow,
  Rocket,
  Box,
  Terminal,
  Network,
  Settings,
  Cloud,
  Monitor,
  Shield
} from "lucide-react";

const sections = [
  {
    title: "الأساسيات",
    icon: <Code className="w-6 h-6 text-amber-400" />,
    children: [
      {
        title: "Linux",
        icon: <Terminal className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Understand Linux file system",
          "Master command-line operations",
          "Manage users and permissions",
          "Work with shell scripting",
          "Configure networking",
          "Monitor system performance",
          "Handle package management"
        ],
        description: [
          "نظام Linux هو أساس بيئات DevOps لتشغيل الخوادم وإدارة الأنظمة.",
          "يُستخدم لإدارة الملفات، العمليات، والموارد بكفاءة عالية.",
          "يتيح التحكم في الأذونات والمستخدمين لضمان الأمان.",
          "يدعم كتابة الـ shell scripts لأتمتة المهام الروتينية.",
          "يوفر أدوات لإعداد الشبكات ومراقبة الأداء.",
          "يُسهل إدارة الحزم باستخدام أدوات مثل apt وyum.",
          "يُعتبر أساسيًا لتشغيل التطبيقات في بيئات الإنتاج.",
          "يدعم التكامل مع أدوات DevOps مثل Docker وKubernetes.",
          "يُستخدم لإعداد الخوادم السحابية والبيئات الافتراضية.",
          "يوفر بيئة مرنة لتطوير ونشر التطبيقات.",
          "يُعتبر ضروريًا لفهم الأنظمة الموزعة."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Linux Journey", url: "https://linuxjourney.com/" },
            { name: "The Linux Foundation", url: "https://training.linuxfoundation.org/" }
          ],
          paid: [
            { name: "Udemy Linux Course", url: "https://www.udemy.com/topic/linux/" },
            { name: "Pluralsight Linux", url: "https://www.pluralsight.com/paths/linux-system-administration" }
          ]
        }
      },
      {
        title: "Git",
        icon: <GitBranch className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "Understand version control",
          "Master branching and merging",
          "Resolve merge conflicts",
          "Work with remote repositories",
          "Use Git workflows",
          "Write meaningful commit messages",
          "Integrate with CI/CD"
        ],
        description: [
          "Git هو نظام التحكم في الإصدارات الأساسي لإدارة الكود في DevOps.",
          "يُستخدم لتتبع التغييرات في الكود وإدارة النسخ.",
          "يدعم الفروع (branches) لتطوير الميزات بشكل منفصل.",
          "يُتيح دمج التغييرات (merge) وحل التعارضات بسهولة.",
          "يُستخدم مع مستودعات بعيدة مثل GitHub وGitLab.",
          "يوفر سير عمل مثل GitFlow لتنظيم التطوير.",
          "يُساعد في كتابة رسائل commit واضحة لتحسين التوثيق.",
          "يتكامل مع أدوات CI/CD لأتمتة النشر.",
          "يُعتبر ضروريًا للتعاون بين فرق التطوير.",
          "يُسهل إدارة المشاريع الكبيرة متعددة المطورين.",
          "يُستخدم في جميع مراحل دورة حياة التطوير."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Git SCM Docs", url: "https://git-scm.com/doc" },
            { name: "Atlassian Git Tutorial", url: "https://www.atlassian.com/git" }
          ],
          paid: [
            { name: "Udemy Git Course", url: "https://www.udemy.com/topic/git/" },
            { name: "Pluralsight Git", url: "https://www.pluralsight.com/courses/git-fundamentals" }
          ]
        }
      },
      {
        title: "Networking",
        icon: <Network className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand TCP/IP model",
          "Configure DNS and DHCP",
          "Work with subnets and routing",
          "Monitor network traffic",
          "Implement security protocols",
          "Troubleshoot network issues",
          "Use networking tools"
        ],
        description: [
          "الشبكات هي أساس البنية التحتية لتطبيقات DevOps.",
          "يُستخدم نموذج TCP/IP لفهم كيفية عمل الشبكات.",
          "يُتيح إعداد DNS وDHCP لتوصيل الأجهزة بالشبكة.",
          "يُساعد في إدارة الشبكات الفرعية (subnets) والتوجيه (routing).",
          "يوفر أدوات مثل Wireshark لمراقبة حركة الشبكة.",
          "يدعم تنفيذ بروتوكولات الأمان مثل SSL/TLS.",
          "يُستخدم لحل مشكلات الشبكة مثل انقطاع الاتصال.",
          "يوفر أدوات مثل ping وtraceroute للتشخيص.",
          "يُعتبر ضروريًا لإدارة الخوادم السحابية.",
          "يُساعد في تحسين أداء التطبيقات الموزعة.",
          "يُستخدم في إعداد بيئات الإنتاج والتطوير."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Professor Messer", url: "https://www.professormesser.com/" },
            { name: "NetworkChuck", url: "https://www.youtube.com/@NetworkChuck" }
          ],
          paid: [
            { name: "Udemy Networking Course", url: "https://www.udemy.com/topic/networking/" },
            { name: "Pluralsight Networking", url: "https://www.pluralsight.com/paths/networking-fundamentals" }
          ]
        }
      }
    ]
  },
  {
    title:" إدارة الخوادم",
    icon: <Server className="w-6 h-6 text-gray-400" />,
    children: [
      {
        title: "Docker",
        icon: <Box className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand containerization",
          "Build Docker images",
          "Manage containers",
          "Use Docker Compose",
          "Optimize Dockerfiles",
          "Handle networking in Docker",
          "Deploy containers"
        ],
        description: [
          "Docker هو أداة لتطبيقات الحاويات (containerization) لتشغيل التطبيقات بسهولة.",
          "يُستخدم لبناء صور (images) تحتوي على التطبيقات وتبعياتها.",
          "يُتيح إدارة الحاويات لتشغيل التطبيقات في بيئات معزولة.",
          "يوفر Docker Compose لإدارة تطبيقات متعددة الحاويات.",
          "يُساعد في تحسين ملفات Dockerfile لتقليل حجم الصور.",
          "يدعم إعداد الشبكات بين الحاويات لتحسين التواصل.",
          "يُستخدم لنشر التطبيقات في بيئات الإنتاج والتطوير.",
          "يُسهل التكامل مع أدوات مثل Kubernetes.",
          "يُحسن قابلية نقل التطبيقات بين البيئات المختلفة.",
          "يُقلل مشكلات التوافق بين بيئات التطوير والإنتاج.",
          "يُعتبر أساسيًا في سير عمل DevOps الحديث."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Docker Docs", url: "https://docs.docker.com/" },
            { name: "TechWorld with Nana", url: "https://www.youtube.com/@TechWorldwithNana" }
          ],
          paid: [
            { name: "Udemy Docker Course", url: "https://www.udemy.com/topic/docker/" },
            { name: "Pluralsight Docker", url: "https://www.pluralsight.com/paths/docker" }
          ]
        }
      },
      {
        title: "Kubernetes",
        icon: <Box className="w-5 h-5 text-blue-500" />,
        learningOutcomes: [
          "Understand Kubernetes architecture",
          "Manage pods and deployments",
          "Use services and ingress",
          "Implement auto-scaling",
          "Handle persistent storage",
          "Monitor clusters",
          "Deploy applications"
        ],
        description: [
          "Kubernetes هو نظام لإدارة الحاويات على نطاق واسع في بيئات الإنتاج.",
          "يُستخدم لتنظيم وتوزيع الحاويات عبر مجموعات الخوادم.",
          "يدعم إدارة العناصر (pods) والتوزيعات (deployments) بكفاءة.",
          "يوفر خدمات (services) وإعدادات ingress للتواصل بين التطبيقات.",
          "يتيح التوسع التلقائي (auto-scaling) بناءً على الحمل.",
          "يُسهل إدارة التخزين الدائم (persistent storage) للتطبيقات.",
          "يُستخدم لمراقبة الأداء وإدارة الموارد في العناقيد (clusters).",
          "يُعتبر أساسيًا لنشر التطبيقات الموزعة في السحابة.",
          "يتكامل مع أدوات مثل Docker وHelm.",
          "يُحسن استقرار التطبيقات وتوافرها.",
          "يُستخدم في بيئات الإنتاج الكبيرة مثل المتاجر الإلكترونية."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Kubernetes Docs", url: "https://kubernetes.io/docs/" },
            { name: "TechWorld with Nana", url: "https://www.youtube.com/@TechWorldwithNana" }
          ],
          paid: [
            { name: "Udemy Kubernetes Course", url: "https://www.udemy.com/topic/kubernetes/" },
            { name: "Pluralsight Kubernetes", url: "https://www.pluralsight.com/paths/kubernetes" }
          ]
        }
      },
      {
        title: "Ansible",
        icon: <Settings className="w-5 h-5 text-red-400" />,
        learningOutcomes: [
          "Understand configuration management",
          "Write Ansible playbooks",
          "Manage infrastructure as code",
          "Automate server setup",
          "Handle roles and variables",
          "Integrate with CI/CD",
          "Troubleshoot Ansible tasks"
        ],
        description: [
          "Ansible هي أداة لإدارة التكوين وأتمتة إعداد الخوادم.",
          "تُستخدم لكتابة الـ playbooks لأتمتة المهام المتكررة.",
          "تدعم إدارة البنية التحتية ككود (Infrastructure as Code).",
          "تُسهل إعداد الخوادم وتثبيت التطبيقات بسرعة.",
          "توفر الـ roles والمتغيرات لتنظيم التكوينات المعقدة.",
          "تتكامل مع أدوات CI/CD لأتمتة النشر.",
          "تُستخدم لحل مشكلات الخوادم وإدارة الأنظمة بكفاءة.",
          "تُحسن إنتاجية فرق DevOps من خلال الأتمتة.",
          "تُستخدم في إدارة بيئات السحابة والخوادم المحلية.",
          "توفر واجهة بسيطة تعتمد على YAML.",
          "تُعتبر أداة شائعة في سوق العمل لإدارة البنية التحتية."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Ansible Docs", url: "https://docs.ansible.com/" },
            { name: "Red Hat Ansible", url: "https://www.redhat.com/en/technologies/management/ansible" }
          ],
          paid: [
            { name: "Udemy Ansible Course", url: "https://www.udemy.com/topic/ansible/" },
            { name: "Pluralsight Ansible", url: "https://www.pluralsight.com/courses/ansible-fundamentals" }
          ]
        }
      }
    ]
  },
  {
    title: "CI/CD",
    icon: <Rocket className="w-6 h-6 text-green-400" />,
    children: [
      {
        title: "Jenkins",
        icon: <Workflow className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Set up Jenkins pipelines",
          "Automate builds and deployments",
          "Integrate with Git",
          "Manage plugins",
          "Handle multi-branch pipelines",
          "Monitor build status",
          "Secure Jenkins instances"
        ],
        description: [
          "Jenkins هي أداة مفتوحة المصدر لأتمتة عمليات CI/CD.",
          "تُستخدم لإنشاء خطوط أنابيب (pipelines) لتطوير ونشر التطبيقات.",
          "تتكامل مع Git لتتبع التغييرات وأتمتة البناء.",
          "توفر مكونات إضافية (plugins) لدعم أدوات DevOps المختلفة.",
          "تدعم خطوط أنابيب متعددة الفروع لإدارة المشاريع الكبيرة.",
          "تُتيح مراقبة حالة البناء وإصلاح الأخطاء بسرعة.",
          "يُستخدم لتأمين مثيلات Jenkins ضد الوصول غير المصرح به.",
          "يُعتبر أساسيًا في بيئات DevOps لأتمتة النشر.",
          "يُسهل التكامل مع السحابة وأدوات مثل Docker.",
          "يُستخدم في المشاريع الكبيرة لضمان استقرار النشر.",
          "يوفر واجهة سهلة لإعداد وإدارة المهام."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Jenkins Docs", url: "https://www.jenkins.io/doc/" },
            { name: "TechWorld with Nana", url: "https://www.youtube.com/@TechWorldwithNana" }
          ],
          paid: [
            { name: "Udemy Jenkins Course", url: "https://www.udemy.com/topic/jenkins/" },
            { name: "Pluralsight Jenkins", url: "https://www.pluralsight.com/courses/jenkins-2-introduction" }
          ]
        }
      },
      {
        title: "GitHub Actions",
        icon: <GitBranch className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "Create workflows",
          "Automate testing and deployment",
          "Use actions marketplace",
          "Handle environment variables",
          "Integrate with Docker",
          "Monitor workflow runs",
          "Secure workflows"
        ],
        description: [
          "GitHub Actions هي أداة CI/CD مدمجة مع GitHub لأتمتة سير العمل.",
          "تُستخدم لإنشاء مهام سير عمل (workflows) للاختبار والنشر.",
          "توفر سوقًا للإجراءات (actions) لتوسيع الوظائف بسهولة.",
          "تدعم إدارة متغيرات البيئة لتأمين التكوينات.",
          "تتكامل مع Docker لنشر الحاويات بكفاءة.",
          "تُتيح مراقبة تشغيل المهام وحل المشكلات بسرعة.",
          "يُستخدم لتأمين سير العمل ضد الوصول غير المصرح به.",
          "يُسهل أتمتة عمليات التطوير في المشاريع المستضافة على GitHub.",
          "يُستخدم في بيئات السحابة والمشاريع مفتوحة المصدر.",
          "يوفر واجهة YAML بسيطة لتكوين المهام.",
          "يُعتبر خيارًا شائعًا لتطوير ونشر التطبيقات الحديثة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "GitHub Actions Docs", url: "https://docs.github.com/en/actions" },
            { name: "TechWorld with Nana", url: "https://www.youtube.com/@TechWorldwithNana" }
          ],
          paid: [
            { name: "Udemy GitHub Actions Course", url: "https://www.udemy.com/topic/github-actions/" },
            { name: "Pluralsight GitHub Actions", url: "https://www.pluralsight.com/courses/building-ci-cd-pipeline-github-actions" }
          ]
        }
      },
      {
        title: "GitLab CI",
        icon: <GitBranch className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "Set up CI/CD pipelines",
          "Automate builds and deployments",
          "Use GitLab runners",
          "Manage pipeline stages",
          "Integrate with Kubernetes",
          "Monitor pipeline performance",
          "Secure CI/CD workflows"
        ],
        description: [
          "GitLab CI هي أداة مدمجة مع GitLab لأتمتة عمليات CI/CD.",
          "تُستخدم لإنشاء خطوط أنابيب (pipelines) لتطوير ونشر التطبيقات.",
          "تعتمد على الـ runners لتشغيل المهام في بيئات مختلفة.",
          "تدعم تقسيم المهام إلى مراحل (stages) لتنظيم سير العمل.",
          "تتكامل مع Kubernetes لنشر الحاويات بكفاءة.",
          "تُتيح مراقبة أداء خطوط الأنابيب وحل المشكلات.",
          "يُستخدم لتأمين سير العمل ضد الوصول غير المصرح به.",
          "يُسهل إدارة المشاريع الكبيرة متعددة الفرق.",
          "يوفر واجهة YAML لتكوين خطوط الأنابيب بسهولة.",
          "يُستخدم في بيئات السحابة والمشاريع الخاصة.",
          "يُعتبر خيارًا قويًا لإدارة دورة حياة التطوير."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "GitLab CI Docs", url: "https://docs.gitlab.com/ee/ci/" },
            { name: "TechWorld with Nana", url: "https://www.youtube.com/@TechWorldwithNana" }
          ],
          paid: [
            { name: "Udemy GitLab CI Course", url: "https://www.udemy.com/topic/gitlab/" },
            { name: "Pluralsight GitLab CI", url: "https://www.pluralsight.com/courses/gitlab-ci-cd-fundamentals" }
          ]
        }
      }
    ]
  },
  {
    title: "السحابة",
    icon: <Cloud className="w-6 h-6 text-blue-400" />,
    children: [
      {
        title: "AWS",
        icon: <Cloud className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "Understand AWS services",
          "Manage EC2 instances",
          "Use S3 for storage",
          "Configure VPC and networking",
          "Implement IAM for security",
          "Deploy applications on AWS",
          "Monitor with CloudWatch"
        ],
        description: [
          "AWS هي منصة سحابية رائدة توفر خدمات لتطوير ونشر التطبيقات.",
          "تُستخدم EC2 لتشغيل الخوادم الافتراضية بمرونة عالية.",
          "توفر S3 لتخزين البيانات بأمان وكفاءة.",
          "تُتيح VPC إعداد شبكات خاصة آمنة للتطبيقات.",
          "يُستخدم IAM لإدارة الأذونات والوصول بشكل آمن.",
          "يُسهل نشر التطبيقات باستخدام خدمات مثل Elastic Beanstalk.",
          "يوفر CloudWatch لمراقبة الأداء وتسجيل الأحداث.",
          "يُستخدم في بيئات الإنتاج لتشغيل التطبيقات الموزعة.",
          "يدعم التكامل مع أدوات DevOps مثل Docker وKubernetes.",
          "يُحسن قابلية التوسع والتوافر للتطبيقات.",
          "يُعتبر مطلوبًا بشدة في سوق العمل."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "AWS Training", url: "https://aws.amazon.com/training/" },
            { name: "FreeCodeCamp AWS", url: "https://www.youtube.com/@freecodecamp" }
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
          "Manage virtual machines",
          "Use Blob storage",
          "Configure virtual networks",
          "Implement Azure AD",
          "Deploy apps on Azure",
          "Monitor with Azure Monitor"
        ],
        description: [
          "Azure هي منصة سحابية من Microsoft لتطوير ونشر التطبيقات.",
          "تُستخدم الآلات الافتراضية لتشغيل التطبيقات بمرونة.",
          "توفر Blob Storage لتخزين البيانات غير المهيكلة.",
          "تُتيح الشبكات الافتراضية إعداد بيئات آمنة.",
          "يُستخدم Azure AD لإدارة الهوية والوصول.",
          "يُسهل نشر التطبيقات باستخدام App Service.",
          "يوفر Azure Monitor لمراقبة الأداء وتحليل السجلات.",
          "يُستخدم في بيئات الإنتاج لتشغيل التطبيقات الموزعة.",
          "يدعم التكامل مع أدوات DevOps مثل Docker.",
          "يُحسن قابلية التوسع والأداء للتطبيقات.",
          "يُعتبر مطلوبًا في سوق العمل للمشاريع الكبيرة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Azure Docs", url: "https://docs.microsoft.com/en-us/azure/" },
            { name: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/azure/" }
          ],
          paid: [
            { name: "Udemy Azure Course", url: "https://www.udemy.com/topic/microsoft-azure/" },
            { name: "Pluralsight Azure", url: "https://www.pluralsight.com/paths/microsoft-azure-architect" }
          ]
        }
      },
      {
        title: "GCP",
        icon: <Cloud className="w-5 h-5 text-yellow-400" />,
        learningOutcomes: [
          "Understand GCP services",
          "Manage Compute Engine",
          "Use Cloud Storage",
          "Configure networking",
          "Implement IAM policies",
          "Deploy apps on GCP",
          "Monitor with Stackdriver"
        ],
        description: [
          "GCP هي منصة سحابية من Google لتطوير ونشر التطبيقات.",
          "تُستخدم Compute Engine لتشغيل الخوادم الافتراضية.",
          "توفر Cloud Storage لتخزين البيانات بكفاءة.",
          "تُتيح إعداد الشبكات لتوصيل التطبيقات بأمان.",
          "يُستخدم IAM لإدارة الأذونات والوصول.",
          "يُسهل نشر التطبيقات باستخدام App Engine.",
          "يوفر Stackdriver لمراقبة الأداء وتسجيل الأحداث.",
          "يُستخدم في بيئات الإنتاج لتشغيل التطبيقات الموزعة.",
          "يدعم التكامل مع أدوات مثل Kubernetes.",
          "يُحسن قابلية التوسع والأداء للتطبيقات.",
          "يُعتبر خيارًا قويًا لتطوير تطبيقات السحابة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "GCP Docs", url: "https://cloud.google.com/docs" },
            { name: "Google Cloud Skills Boost", url: "https://www.cloudskillsboost.google/" }
          ],
          paid: [
            { name: "Udemy GCP Course", url: "https://www.udemy.com/topic/google-cloud/" },
            { name: "Pluralsight GCP", url: "https://www.pluralsight.com/paths/google-cloud-platform" }
          ]
        }
      }
    ]
  },
  {
    title: "المراقبة",
    icon: <Monitor className="w-6 h-6 text-purple-400" />,
    children: [
      {
        title: "Prometheus",
        icon: <Monitor className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "Understand Prometheus architecture",
          "Configure metrics collection",
          "Write PromQL queries",
          "Set up alerts",
          "Integrate with Grafana",
          "Monitor containers",
          "Optimize performance"
        ],
        description: [
          "Prometheus هو نظام مراقبة مفتوح المصدر لتتبع أداء التطبيقات.",
          "يُستخدم لجمع المقاييس (metrics) من الخوادم والتطبيقات.",
          "يوفر PromQL لكتابة استعلامات لتحليل البيانات.",
          "يُتيح إعداد تنبيهات (alerts) بناءً على المقاييس.",
          "يتكامل مع Grafana لعرض البيانات بشكل مرئي.",
          "يُستخدم لمراقبة الحاويات في بيئات مثل Kubernetes.",
          "يُحسن أداء التطبيقات من خلال الكشف عن المشكلات مبكرًا.",
          "يُعتبر أساسيًا في بيئات DevOps لضمان التوافر.",
          "يدعم التكامل مع السحابة والأنظمة الموزعة.",
          "يوفر أدوات لتحسين جمع البيانات وتخزينها.",
          "يُستخدم في المشاريع الكبيرة لمراقبة الأداء."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Prometheus Docs", url: "https://prometheus.io/docs/" },
            { name: "Robust Perception", url: "https://www.robustperception.io/" }
          ],
          paid: [
            { name: "Udemy Prometheus Course", url: "https://www.udemy.com/topic/prometheus/" },
            { name: "Pluralsight Prometheus", url: "https://www.pluralsight.com/courses/prometheus-monitoring-fundamentals" }
          ]
        }
      },
      {
        title: "Grafana",
        icon: <Monitor className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Create dashboards",
          "Visualize metrics",
          "Integrate with Prometheus",
          "Set up alerts",
          "Manage data sources",
          "Customize visualizations",
          "Monitor app performance"
        ],
        description: [
          "Grafana هي أداة مفتوحة المصدر لعرض البيانات ومراقبة الأداء.",
          "تُستخدم لإنشاء لوحات تحكم (dashboards) لتصور المقاييس.",
          "تتكامل مع Prometheus ومصادر بيانات أخرى.",
          "تُتيح إعداد تنبيهات بناءً على البيانات المرصودة.",
          "تدعم إدارة مصادر البيانات مثل MySQL وInfluxDB.",
          "تُسهل تخصيص التصورات البصرية لتحليل الأداء.",
          "تُستخدم لمراقبة التطبيقات في بيئات الإنتاج.",
          "تُحسن تجربة المراقبة من خلال واجهة سهلة الاستخدام.",
          "تُستخدم في بيئات السحابة والأنظمة الموزعة.",
          "توفر أدوات لتحليل البيانات وتحسين الأداء.",
          "يُعتبر خيارًا شائعًا في سوق العمل لمراقبة التطبيقات."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Grafana Docs", url: "https://grafana.com/docs/" },
            { name: "TechWorld with Nana", url: "https://www.youtube.com/@TechWorldwithNana" }
          ],
          paid: [
            { name: "Udemy Grafana Course", url: "https://www.udemy.com/topic/grafana/" },
            { name: "Pluralsight Grafana", url: "https://www.pluralsight.com/courses/grafana" }
          ]
        }
      }
    ]
  },
  {
    title: "الأمان",
    icon: <Shield className="w-6 h-6 text-red-400" />,
    children: [
      {
        title: "Security Best Practices",
        icon: <Shield className="w-5 h-5 text-red-300" />,
        learningOutcomes: [
          "Implement secure CI/CD",
          "Manage secrets",
          "Use IAM roles",
          "Scan for vulnerabilities",
          "Secure Docker images",
          "Apply network security",
          "Monitor security events"
        ],
        description: [
          "الأمان في DevOps يضمن حماية التطبيقات والبنية التحتية.",
          "يُستخدم لتأمين خطوط CI/CD ضد الوصول غير المصرح به.",
          "يُتيح إدارة الأسرار (secrets) باستخدام أدوات مثل Vault.",
          "يوفر IAM لإدارة الأذونات بشكل آمن.",
          "يُستخدم لفحص الثغرات الأمنية في الكود والصور.",
          "يُتيح تأمين صور Docker ضد الثغرات المعروفة.",
          "يدعم تطبيق بروتوكولات أمان الشبكة مثل firewalls.",
          "يُستخدم لمراقبة الأحداث الأمنية في الوقت الفعلي.",
          "يُحسن حماية التطبيقات في بيئات السحابة.",
          "يُقلل المخاطر الأمنية في دورة حياة التطوير.",
          "يُعتبر ضروريًا لتطبيقات الإنتاج الحساسة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "OWASP", url: "https://owasp.org/" },
            { name: "Snyk Learn", url: "https://learn.snyk.io/" }
          ],
          paid: [
            { name: "Udemy DevSecOps Course", url: "https://www.udemy.com/topic/devsecops/" },
            { name: "Pluralsight Security", url: "https://www.pluralsight.com/paths/devsecops" }
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
        title: "Terraform",
        icon: <Box className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "Understand Infrastructure as Code",
          "Write Terraform configurations",
          "Manage cloud resources",
          "Use modules for reusability",
          "Handle state management",
          "Integrate with CI/CD",
          "Optimize infrastructure"
        ],
        description: [
          "Terraform هي أداة لإدارة البنية التحتية ككود (Infrastructure as Code).",
          "تُستخدم لإنشاء وإدارة الموارد السحابية بسهولة.",
          "تدعم كتابة ملفات تكوين باستخدام HCL.",
          "تُتيح استخدام الوحدات (modules) لإعادة استخدام التكوينات.",
          "تُسهل إدارة الحالة (state) لتتبع الموارد.",
          "تتكامل مع أدوات CI/CD لأتمتة النشر.",
          "تُستخدم لإدارة موارد AWS، Azure، وGCP بكفاءة.",
          "تُحسن صيانة البنية التحتية في المشاريع الكبيرة.",
          "توفر أدوات لتحسين تكوين الموارد وتقليل التكاليف.",
          "تُقلل الأخطاء في إعداد البنية التحتية.",
          "تُعتبر أداة شائعة في سوق العمل لإدارة السحابة."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Terraform Docs", url: "https://www.terraform.io/docs/" },
            { name: "HashiCorp Learn", url: "https://learn.hashicorp.com/terraform" }
          ],
          paid: [
            { name: "Udemy Terraform Course", url: "https://www.udemy.com/topic/terraform/" },
            { name: "Pluralsight Terraform", url: "https://www.pluralsight.com/courses/terraform-getting-started" }
          ]
        }
      },
      {
        title: "Helm",
        icon: <Box className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand Helm charts",
          "Package Kubernetes apps",
          "Manage releases",
          "Use Helm repositories",
          "Customize chart values",
          "Integrate with CI/CD",
          "Optimize deployments"
        ],
        description: [
          "Helm هي أداة لإدارة تطبيقات Kubernetes باستخدام الـ charts.",
          "تُستخدم لتجميع تطبيقات Kubernetes في حزم قابلة للنشر.",
          "تُتيح إدارة الإصدارات (releases) للتطبيقات بسهولة.",
          "توفر مستودعات (repositories) لمشاركة الـ charts.",
          "تدعم تخصيص القيم (values) لتكوين التطبيقات.",
          "تتكامل مع أدوات CI/CD لأتمتة النشر.",
          "تُستخدم لتبسيط إدارة التطبيقات المعقدة في Kubernetes.",
          "تُحسن صيانة التطبيقات من خلال هيكلية منظمة.",
          "تُقلل تعقيد نشر التطبيقات في العناقيد.",
          "تُوفر أدوات CLI لتسهيل إدارة الـ charts.",
          "تُعتبر خيارًا شائعًا في بيئات Kubernetes."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Helm Docs", url: "https://helm.sh/docs/" },
            { name: "TechWorld with Nana", url: "https://www.youtube.com/@TechWorldwithNana" }
          ],
          paid: [
            { name: "Udemy Helm Course", url: "https://www.udemy.com/topic/kubernetes/" },
            { name: "Pluralsight Helm", url: "https://www.pluralsight.com/courses/kubernetes-package-administration-helm" }
          ]
        }
      },
      {
        title: "Vault",
        icon: <Box className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Manage secrets",
          "Implement secure storage",
          "Use dynamic secrets",
          "Configure access policies",
          "Integrate with Kubernetes",
          "Monitor Vault performance",
          "Secure CI/CD pipelines"
        ],
        description: [
          "Vault هي أداة لإدارة الأسرار (secrets) في بيئات DevOps.",
          "تُستخدم لتخزين البيانات الحساسة مثل كلمات المرور ومفاتيح API.",
          "تدعم إنشاء أسرار ديناميكية (dynamic secrets) للحد من المخاطر.",
          "تُتيح إعداد سياسات الوصول لتأمين البيانات.",
          "تتكامل مع Kubernetes لإدارة الأسرار في العناقيد.",
          "تُستخدم لمراقبة أداء Vault وحل المشكلات.",
          "تُساعد في تأمين خطوط CI/CD ضد التسريبات.",
          "تُحسن الأمان في بيئات السحابة والموزعة.",
          "توفر واجهة سهلة لإدارة الأسرار بكفاءة.",
          "تُقلل المخاطر الأمنية في التطبيقات الكبيرة.",
          "تُعتبر أداة أساسية في DevSecOps."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Vault Docs", url: "https://www.vaultproject.io/docs/" },
            { name: "HashiCorp Learn", url: "https://learn.hashicorp.com/vault" }
          ],
          paid: [
            { name: "Udemy Vault Course", url: "https://www.udemy.com/topic/vault/" },
            { name: "Pluralsight Vault", url: "https://www.pluralsight.com/courses/hashicorp-vault" }
          ]
        }
      },
      {
        title: "ELK Stack",
        icon: <Box className="w-5 h-5 text-yellow-400" />,
        learningOutcomes: [
          "Understand ELK architecture",
          "Configure Elasticsearch",
          "Set up Logstash pipelines",
          "Create Kibana dashboards",
          "Monitor logs",
          "Analyze system performance",
          "Integrate with Kubernetes"
        ],
        description: [
          "ELK Stack هي مجموعة أدوات لإدارة وتحليل السجلات (logs).",
          "تتكون من Elasticsearch، Logstash، وKibana.",
          "يُستخدم Elasticsearch لتخزين البيانات والبحث فيها.",
          "يُتيح Logstash معالجة السجلات وتحويلها.",
          "يوفر Kibana لوحات تحكم لتصور البيانات.",
          "تُستخدم لمراقبة السجلات في بيئات الإنتاج.",
          "تُساعد في تحليل أداء النظام واكتشاف المشكلات.",
          "تتكامل مع Kubernetes لمراقبة الحاويات.",
          "تُحسن إدارة السجلات في الأنظمة الموزعة.",
          "تُستخدم في بيئات السحابة لتحليل البيانات.",
          "تُعتبر أداة شائعة لمراقبة التطبيقات."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Elastic Docs", url: "https://www.elastic.co/guide/index.html" },
            { name: "TechWorld with Nana", url: "https://www.youtube.com/@TechWorldwithNana" }
          ],
          paid: [
            { name: "Udemy ELK Stack Course", url: "https://www.udemy.com/topic/elk-stack/" },
            { name: "Pluralsight ELK Stack", url: "https://www.pluralsight.com/courses/elasticsearch-logstash-kibana-getting-started" }
          ]
        }
      }
    ]
  }
]

export default function DevOps(){
    return (
        <Roadmap title={"DevOps"} sections={sections}/>
    )
}