import Roadmap from "../Components/RoadMap";
import React from "react";
import { 
  Lock, 
  Network, 
  Terminal, 
  Shield, 
  ShieldCheck, 
  AlertTriangle, 
  Monitor, 
  Key, 
  Sword, 
  Bug, 
  Search, 
  Target, 
  Code, 
  Globe, 
  Cloud, 
  Smartphone, 
  Briefcase, 
  BarChart, 
  Gavel, 
  CheckSquare 
} from "lucide-react";
const sections = [
  {
    title: "الأساسيات",
    icon: <Lock className="w-6 h-6 text-blue-400" />,
    children: [
      {
        title: "Networking",
        icon: <Network className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Understand OSI model",
          "Configure network protocols",
          "Analyze network traffic",
          "Implement firewalls",
          "Secure network devices",
          "Use Wireshark",
          "Troubleshoot connectivity"
        ],
        description: [
          "الشبكات هي العمود الفقري للأمن السيبراني لفهم كيفية حماية الأنظمة.",
          "يُستخدم نموذج OSI لفهم طبقات الشبكة وتفاعلها.",
          "تُستخدم بروتوكولات مثل TCP/IP لضمان الاتصال الآمن.",
          "تُساعد تحليلات حركة المرور في اكتشاف التهديدات.",
          "تُستخدم الجدران النارية لحماية الشبكات من الوصول غير المصرح به.",
          "تُؤمن أجهزة الشبكة بتكوينات مثل VLANs.",
          "يُستخدم Wireshark لمراقبة وتحليل البيانات.",
          "يُساعد استكشاف الأخطاء في الحفاظ على استقرار الشبكة.",
          "يُعتبر أساسيًا لفهم هجمات مثل Man-in-the-Middle.",
          "يُستخدم في تصميم شبكات آمنة وقابلة للتوسع.",
          "يُحسن القدرة على اكتشاف التسلل."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Cisco Networking Academy", url: "https://www.netacad.com/" },
            { name: "Professor Messer", url: "https://www.professormesser.com/" }
          ],
          paid: [
            { name: "Udemy Networking Course", url: "https://www.udemy.com/topic/networking/" },
            { name: "Pluralsight Networking", url: "https://www.pluralsight.com/paths/networking-fundamentals" }
          ]
        }
      },
      {
        title: "Operating Systems",
        icon: <Terminal className="w-5 h-5 text-yellow-400" />,
        learningOutcomes: [
          "Master Linux commands",
          "Secure Windows systems",
          "Manage user permissions",
          "Configure system services",
          "Monitor system logs",
          "Implement hardening",
          "Use command-line tools"
        ],
        description: [
          "أنظمة التشغيل هي الأساس لفهم الأمن على مستوى النظام.",
          "تُستخدم أوامر Linux لإدارة الأنظمة وتأمينها.",
          "تُؤمن أنظمة Windows بتطبيق تصحيحات الأمان.",
          "تُدار أذونات المستخدمين للحد من الوصول غير المصرح به.",
          "تُستخدم خدمات النظام لتشغيل التطبيقات بأمان.",
          "تُراقب سجلات النظام لاكتشاف الأنشطة المشبوهة.",
          "تُطبق تقنيات التصليب لتقليل نقاط الضعف.",
          "تُستخدم أدوات سطر الأوامر لأتمتة المهام.",
          "يُعتبر ضروريًا لفهم هجمات مثل التصعيد الامتيازي.",
          "يُساعد في إدارة الأنظمة في بيئات الشركات.",
          "يُحسن كفاءة استجابة الحوادث."
        ],
        resources: {
          arabicFree: [
            { name: "Elzero Web School", url: "https://www.youtube.com/@ElzeroWebSchool" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Linux Journey", url: "https://linuxjourney.com/" },
            { name: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/windows/" }
          ],
          paid: [
            { name: "Udemy Linux Course", url: "https://www.udemy.com/topic/linux/" },
            { name: "Pluralsight Windows", url: "https://www.pluralsight.com/paths/windows-server-administration" }
          ]
        }
      },
      {
        title: "Security Fundamentals",
        icon: <Shield className="w-5 h-5 text-red-400" />,
        learningOutcomes: [
          "Understand CIA triad",
          "Identify common threats",
          "Apply risk management",
          "Use encryption basics",
          "Implement access control",
          "Analyze vulnerabilities",
          "Follow security policies"
        ],
        description: [
          "أساسيات الأمن هي نقطة البداية لفهم الأمن السيبراني.",
          "ثالوث CIA (السرية، السلامة، التوافر) يحدد أهداف الأمن.",
          "تُحدد التهديدات الشائعة مثل الفيروسات والتصيد الاحتيالي.",
          "تُستخدم إدارة المخاطر لتحديد الأولويات الأمنية.",
          "تُطبق التشفير لحماية البيانات الحساسة.",
          "تُستخدم ضوابط الوصول مثل RBAC لتقييد الصلاحيات.",
          "تُحلل الثغرات لاكتشاف نقاط الضعف في الأنظمة.",
          "تُتبع السياسات الأمنية لضمان الامتثال.",
          "يُعتبر أساسيًا لجميع مسارات الأمن السيبراني.",
          "يُساعد في بناء عقلية أمنية قوية.",
          "يُحسن القدرة على التعامل مع الحوادث."
        ],
        resources: {
          arabicFree: [
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" },
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" }
          ],
          englishFree: [
            { name: "Cybrary Cybersecurity Basics", url: "https://www.cybrary.it/" },
            { name: "Cisco Intro to Cybersecurity", url: "https://www.netacad.com/courses/cybersecurity" }
          ],
          paid: [
            { name: "Udemy Cybersecurity Fundamentals", url: "https://www.udemy.com/topic/cyber-security/" },
            { name: "Coursera Cybersecurity Basics", url: "https://www.coursera.org/courses?query=cybersecurity" }
          ]
        }
      }
    ]
  },
  {
    title: "الأمن الدفاعي",
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    children: [
      {
        title: "Incident Response",
        icon: <AlertTriangle className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "Develop IR plans",
          "Identify security incidents",
          "Contain threats",
          "Perform root cause analysis",
          "Use SIEM tools",
          "Document incidents",
          "Recover systems"
        ],
        description: [
          "الاستجابة للحوادث تركز على التعامل مع الهجمات الأمنية بفعالية.",
          "تُطوّر خطط الاستجابة لتوجيه الفرق أثناء الحوادث.",
          "تُحدد الحوادث الأمنية من خلال مراقبة السجلات.",
          "تُحصر التهديدات لمنع انتشارها في النظام.",
          "تُجرى تحليلات الأسباب الجذرية لمنع تكرار الحوادث.",
          "تُستخدم أدوات SIEM مثل Splunk للكشف عن التهديدات.",
          "تُوثق الحوادث لأغراض الامتثال والتحسين.",
          "تُستعاد الأنظمة لاستئناف العمليات بأمان.",
          "يُعتبر ضروريًا لتقليل تأثير الهجمات.",
          "يُستخدم في مراكز العمليات الأمنية (SOC).",
          "يُحسن سرعة الاستجابة للحوادث."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "SANS Incident Response", url: "https://www.sans.org/cyber-security-courses/incident-response/" },
            { name: "Cybrary Incident Response", url: "https://www.cybrary.it/" }
          ],
          paid: [
            { name: "Udemy Incident Response Course", url: "https://www.udemy.com/topic/cyber-security/" },
            { name: "Pluralsight Incident Response", url: "https://www.pluralsight.com/courses/incident-response-fundamentals" }
          ]
        }
      },
      {
        title: "Security Operations",
        icon: <Monitor className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "Monitor security events",
          "Configure IDS/IPS",
          "Manage SOC operations",
          "Analyze threat intelligence",
          "Patch vulnerabilities",
          "Use EDR tools",
          "Automate security tasks"
        ],
        description: [
          "عمليات الأمن تركز على المراقبة المستمرة وحماية الأنظمة.",
          "تُراقب الأحداث الأمنية لاكتشاف الأنشطة المشبوهة.",
          "تُستخدم أنظمة IDS/IPS للكشف عن التسلل ومنعه.",
          "تُدار عمليات SOC لتنسيق الاستجابة الأمنية.",
          "تُحلل المعلومات الاستخباراتية لفهم التهديدات.",
          "تُطبق تصحيحات الثغرات لتقليل المخاطر.",
          "تُستخدم أدوات EDR مثل CrowdStrike للحماية النهائية.",
          "تُؤتمت المهام الأمنية لتحسين الكفاءة.",
          "يُعتبر أساسيًا للحفاظ على الأمان المستمر.",
          "يُستخدم في بيئات المؤسسات الكبيرة.",
          "يُحسن قدرات الكشف عن التهديدات."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "SANS Security Operations", url: "https://www.sans.org/cyber-security-courses/security-operations/" },
            { name: "TryHackMe SOC", url: "https://tryhackme.com/" }
          ],
          paid: [
            { name: "Udemy SOC Course", url: "https://www.udemy.com/topic/cyber-security/" },
            { name: "Pluralsight SOC", url: "https://www.pluralsight.com/courses/security-operations-center-fundamentals" }
          ]
        }
      },
      {
        title: "Cryptography",
        icon: <Key className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Understand encryption algorithms",
          "Implement symmetric cryptography",
          "Use asymmetric cryptography",
          "Manage digital certificates",
          "Apply hashing techniques",
          "Secure communications",
          "Analyze cryptographic attacks"
        ],
        description: [
          "علم التشفير يُركز على حماية البيانات من الوصول غير المصرح به.",
          "تُستخدم خوارزميات مثل AES وRSA لتشفير البيانات.",
          "يُطبق التشفير المتماثل لتأمين البيانات بسرعة.",
          "يُستخدم التشفير غير المتماثل في PKI وSSL/TLS.",
          "تُدار الشهادات الرقمية لضمان الثقة في الاتصالات.",
          "تُستخدم تقنيات التجزئة مثل SHA للتحقق من السلامة.",
          "تُؤمن الاتصالات ببروتوكولات مثل HTTPS.",
          "تُحلل هجمات التشفير لتحسين الأمان.",
          "يُعتبر أساسيًا لحماية البيانات الحساسة.",
          "يُستخدم في تطبيقات مثل VPNs والتوقيعات الرقمية.",
          "يُحسن سرية البيانات ومصادقتها."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Khan Academy Cryptography", url: "https://www.khanacademy.org/computing/computer-science/cryptography" },
            { name: "Crypto101", url: "https://www.crypto101.io/" }
          ],
          paid: [
            { name: "Udemy Cryptography Course", url: "https://www.udemy.com/topic/cryptography/" },
            { name: "Pluralsight Cryptography", url: "https://www.pluralsight.com/courses/cryptography-fundamentals" }
          ]
        }
      }
    ]
  },
  {
    title: "الأمن الهجومي",
    icon: <Sword className="w-6 h-6 text-red-400" />,
    children: [
      {
        title: "Ethical Hacking",
        icon: <Bug className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Perform reconnaissance",
          "Exploit vulnerabilities",
          "Use penetration testing tools",
          "Conduct social engineering",
          "Write pentest reports",
          "Secure exploited systems",
          "Follow ethical guidelines"
        ],
        description: [
          "القرصنة الأخلاقية تُركز على اختبار الأنظمة لاكتشاف الثغرات.",
          "تُجرى الاستطلاعات لجمع معلومات عن الأهداف.",
          "تُستغل الثغرات باستخدام أدوات مثل Metasploit.",
          "تُستخدم أدوات اختبار الاختراق مثل Burp Suite.",
          "تُطبق الهندسة الاجتماعية لاختبار الوعي الأمني.",
          "تُكتب تقارير الاختراق لتوثيق النتائج.",
          "تُؤمن الأنظمة المخترقة لمنع الاستغلال المستقبلي.",
          "تُتبع المبادئ الأخلاقية لضمان الامتثال.",
          "يُعتبر مجالًا مطلوبًا في الصناعة.",
          "يُستخدم لتحسين الأمان التنظيمي.",
          "يُحسن مهارات اكتشاف الثغرات."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "TryHackMe", url: "https://tryhackme.com/" },
            { name: "Hack The Box", url: "https://www.hackthebox.com/" }
          ],
          paid: [
            { name: "Udemy Ethical Hacking Course", url: "https://www.udemy.com/topic/ethical-hacking/" },
            { name: "Pluralsight Ethical Hacking", url: "https://www.pluralsight.com/paths/ethical-hacking" }
          ]
        }
      },
      {
        title: "Penetration Testing",
        icon: <Search className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "Plan pentest engagements",
          "Scan for vulnerabilities",
          "Exploit web applications",
          "Test network security",
          "Perform privilege escalation",
          "Use Kali Linux",
          "Document findings"
        ],
        description: [
          "اختبار الاختراق يُركز على محاكاة الهجمات لاكتشاف الثغرات.",
          "تُخطط عمليات الاختراق لتحديد النطاق والأهداف.",
          "تُمسح الثغرات بأدوات مثل Nmap وNessus.",
          "تُستغل تطبيقات الويب لهجمات مثل SQL Injection.",
          "تُختبر أمان الشبكات لتحديد نقاط الضعف.",
          "تُجرى تصعيد الامتيازات للوصول إلى الأنظمة الحساسة.",
          "تُستخدم Kali Linux كمنصة اختبار رئيسية.",
          "تُوثق النتائج لتحسين الأمان.",
          "يُعتبر أساسيًا لتقييم الأمان التنظيمي.",
          "يُستخدم في الامتثال لمعايير مثل PCI DSS.",
          "يُحسن قدرات تحديد المخاطر."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "TryHackMe Pentesting", url: "https://tryhackme.com/" },
            { name: "Web Security Academy", url: "https://portswigger.net/web-security" }
          ],
          paid: [
            { name: "Udemy Penetration Testing Course", url: "https://www.udemy.com/topic/penetration-testing/" },
            { name: "Pluralsight Penetration Testing", url: "https://www.pluralsight.com/paths/penetration-testing" }
          ]
        }
      },
      {
        title: "Bug Bounty",
        icon: <Target className="w-5 h-5 text-orange-400" />,
        learningOutcomes: [
          "Understand bug bounty programs",
          "Hunt for vulnerabilities",
          "Report bugs responsibly",
          "Exploit XSS and CSRF",
          "Use bug bounty platforms",
          "Follow disclosure policies",
          "Earn bounties"
        ],
        description: [
          "صيد الثغرات يُركز على اكتشاف الثغرات مقابل مكافآت مالية.",
          "تُفهم برامج صيد الثغرات مثل HackerOne وBugcrowd.",
          "تُصطاد الثغرات في تطبيقات الويب والشبكات.",
          "تُبلغ الثغرات بمسؤولية وفقًا لسياسات الكشف.",
          "تُستغل ثغرات مثل XSS وCSRF لاختبار الأمان.",
          "تُستخدم منصات صيد الثغرات لإدارة التقارير.",
          "تُتبع سياسات الكشف لضمان الأخلاقيات.",
          "تُكتسب المكافآت بناءً على خطورة الثغرات.",
          "يُعتبر مجالًا مربحًا للمحترفين.",
          "يُساعد في تحسين أمان التطبيقات العامة.",
          "يُحسن مهارات البحث عن الثغرات."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "Bugcrowd University", url: "https://www.bugcrowd.com/resources/university/" },
            { name: "Hacker101", url: "https://www.hacker101.com/" }
          ],
          paid: [
            { name: "Udemy Bug Bounty Course", url: "https://www.udemy.com/topic/bug-bounty/" },
            { name: "Pluralsight Bug Bounty", url: "https://www.pluralsight.com/courses/bug-bounty-hunting" }
          ]
        }
      }
    ]
  },
  {
    title: "الأمن التطبيقي",
    icon: <Code className="w-6 h-6 text-purple-400" />,
    children: [
      {
        title: "Web Security",
        icon: <Globe className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Secure web applications",
          "Prevent SQL injection",
          "Mitigate XSS attacks",
          "Implement secure authentication",
          "Use OWASP Top 10",
          "Test web vulnerabilities",
          "Apply secure coding"
        ],
        description: [
          "أمان الويب يُركز على حماية تطبيقات الويب من الهجمات.",
          "تُؤمن التطبيقات ضد هجمات مثل SQL Injection.",
          "تُخفف هجمات XSS لحماية المستخدمين.",
          "تُطبق المصادقة الآمنة باستخدام OAuth وJWT.",
          "يُستخدم OWASP Top 10 كدليل لأفضل الممارسات.",
          "تُختبر ثغرات الويب بأدوات مثل Burp Suite.",
          "تُطبق البرمجة الآمنة لتقليل الثغرات.",
          "يُعتبر أساسيًا لحماية التطبيقات العامة.",
          "يُستخدم في تطوير مواقع الويب الآمنة.",
          "يُحسن أمان تجربة المستخدم.",
          "يُساعد في الامتثال لمعايير الأمان."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "OWASP Web Security", url: "https://owasp.org/" },
            { name: "Web Security Academy", url: "https://portswigger.net/web-security" }
          ],
          paid: [
            { name: "Udemy Web Security Course", url: "https://www.udemy.com/topic/web-security/" },
            { name: "Pluralsight Web Security", url: "https://www.pluralsight.com/paths/web-application-security" }
          ]
        }
      },
      {
        title: "Cloud Security",
        icon: <Cloud className="w-5 h-5 text-cyan-400" />,
        learningOutcomes: [
          "Secure cloud environments",
          "Configure IAM policies",
          "Monitor cloud activities",
          "Implement encryption",
          "Use cloud-native tools",
          "Audit cloud configurations",
          "Comply with cloud standards"
        ],
        description: [
          "أمان السحابة يُركز على حماية البنية التحتية السحابية.",
          "تُؤمن البيئات السحابية مثل AWS وAzure.",
          "تُكوّن سياسات IAM للحد من الوصول غير المصرح به.",
          "تُراقب الأنشطة السحابية لاكتشاف التهديدات.",
          "تُطبق التشفير لحماية البيانات في السحابة.",
          "تُستخدم أدوات مثل AWS GuardDuty للأمان.",
          "تُدقق التكوينات السحابية لتقليل المخاطر.",
          "يُمتثل لمعايير مثل GDPR وISO 27001.",
          "يُعتبر ضروريًا مع تزايد اعتماد السحابة.",
          "يُستخدم في حماية البيانات المؤسسية.",
          "يُحسن أمان البنية التحتية الحديثة."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "AWS Security Fundamentals", url: "https://aws.amazon.com/training/" },
            { name: "Azure Security Center", url: "https://learn.microsoft.com/en-us/azure/security-center/" }
          ],
          paid: [
            { name: "Udemy Cloud Security Course", url: "https://www.udemy.com/topic/cloud-security/" },
            { name: "Pluralsight Cloud Security", url: "https://www.pluralsight.com/paths/cloud-security" }
          ]
        }
      },
      {
        title: "Mobile Security",
        icon: <Smartphone className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Secure mobile applications",
          "Analyze app vulnerabilities",
          "Implement secure storage",
          "Test mobile platforms",
          "Prevent reverse engineering",
          "Use mobile security tools",
          "Comply with mobile standards"
        ],
        description: [
          "أمان الهواتف يُركز على حماية التطبيقات والبيانات المحمولة.",
          "تُؤمن تطبيقات الهواتف ضد الثغرات الشائعة.",
          "تُحلل ثغرات التطبيقات باستخدام أدوات مثل MobSF.",
          "تُطبق التخزين الآمن لحماية البيانات الحساسة.",
          "تُختبر منصات مثل Android وiOS للأمان.",
          "تُمنع الهندسة العكسية لحماية التطبيقات.",
          "تُستخدم أدوات أمان الهواتف للاختبارات.",
          "يُمتثل لمعايير مثل OWASP Mobile Top 10.",
          "يُعتبر ضروريًا مع انتشار الهواتف الذكية.",
          "يُستخدم في حماية تطبيقات الشركات.",
          "يُحسن أمان بيانات المستخدمين."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "OWASP Mobile Security", url: "https://owasp.org/www-project-mobile-security/" },
            { name: "NowSecure Academy", url: "https://www.nowsecure.com/academy/" }
          ],
          paid: [
            { name: "Udemy Mobile Security Course", url: "https://www.udemy.com/topic/mobile-security/" },
            { name: "Pluralsight Mobile Security", url: "https://www.pluralsight.com/courses/mobile-application-security" }
          ]
        }
      }
    ]
  },
  {
    title: "الإدارة والامتثال",
    icon: <Briefcase className="w-6 h-6 text-orange-400" />,
    children: [
      {
        title: "Risk Management",
        icon: <BarChart className="w-5 h-5 text-blue-400" />,
        learningOutcomes: [
          "Conduct risk assessments",
          "Identify critical assets",
          "Mitigate risks",
          "Use risk frameworks",
          "Develop risk policies",
          "Monitor risk levels",
          "Report risk findings"
        ],
        description: [
          "إدارة المخاطر تُركز على تحديد المخاطر وتقليل تأثيرها.",
          "تُجرى تقييمات المخاطر لتحديد التهديدات المحتملة.",
          "تُحدد الأصول الحرجة لحمايتها بأولوية.",
          "تُخفف المخاطر بتطبيق ضوابط الأمان.",
          "تُستخدم أطر مثل NIST RMF لتنظيم العملية.",
          "تُطوّر سياسات المخاطر لضمان الامتثال.",
          "تُراقب مستويات المخاطر باستمرار.",
          "تُبلغ النتائج لاتخاذ قرارات استراتيجية.",
          "يُعتبر أساسيًا للأمن التنظيمي.",
          "يُستخدم في تخطيط الأمان طويل المدى.",
          "يُحسن اتخاذ القرارات الأمنية."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "NIST Risk Management", url: "https://www.nist.gov/risk-management" },
            { name: "SANS Risk Management", url: "https://www.sans.org/cyber-security-courses/risk-management/" }
          ],
          paid: [
            { name: "Udemy Risk Management Course", url: "https://www.udemy.com/topic/risk-management/" },
            { name: "Pluralsight Risk Management", url: "https://www.pluralsight.com/courses/risk-management-fundamentals" }
          ]
        }
      },
      {
        title: "Governance",
        icon: <Gavel className="w-5 h-5 text-purple-400" />,
        learningOutcomes: [
          "Develop security policies",
          "Implement compliance programs",
          "Use governance frameworks",
          "Conduct audits",
          "Manage security teams",
          "Align with business goals",
          "Report to stakeholders"
        ],
        description: [
          "الحوكمة تُركز على وضع السياسات وإدارة الأمان التنظيمي.",
          "تُطوّر السياسات الأمنية لتوجيه العمليات.",
          "تُطبق برامج الامتثال مثل ISO 27001.",
          "تُستخدم أطر الحوكمة مثل COBIT للتنظيم.",
          "تُجرى التدقيقات لضمان الامتثال.",
          "تُدار فرق الأمان لتحقيق الأهداف.",
          "تُنسق مع أهداف الأعمال لتحقيق التكامل.",
          "تُبلغ أصحاب المصلحة عن حالة الأمان.",
          "يُعتبر ضروريًا للمؤسسات الكبيرة.",
          "يُستخدم في ضمان الامتثال القانوني.",
          "يُحسن إدارة الموارد الأمنية."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "ISO 27001 Resources", url: "https://www.iso.org/standard/27001" },
            { name: "SANS Governance", url: "https://www.sans.org/cyber-security-courses/governance/" }
          ],
          paid: [
            { name: "Udemy Governance Course", url: "https://www.udemy.com/topic/it-governance/" },
            { name: "Pluralsight Governance", url: "https://www.pluralsight.com/courses/it-governance-fundamentals" }
          ]
        }
      },
      {
        title: "Compliance",
        icon: <CheckSquare className="w-5 h-5 text-green-400" />,
        learningOutcomes: [
          "Understand regulations",
          "Implement GDPR",
          "Comply with PCI DSS",
          "Conduct compliance audits",
          "Manage data privacy",
          "Use compliance tools",
          "Train employees"
        ],
        description: [
          "الامتثال يُركز على تلبية المتطلبات القانونية والتنظيمية.",
          "تُفهم اللوائح مثل GDPR وHIPAA.",
          "تُطبق GDPR لحماية بيانات المستخدمين.",
          "يُمتثل لـ PCI DSS لحماية معاملات البطاقات.",
          "تُجرى تدقيقات الامتثال لضمان الالتزام.",
          "تُدار خصوصية البيانات لتجنب الغرامات.",
          "تُستخدم أدوات الامتثال لأتمتة العمليات.",
          "تُدرب الموظفون على الوعي بالامتثال.",
          "يُعتبر ضروريًا لتجنب العقوبات القانونية.",
          "يُستخدم في حماية سمعة المؤسسة.",
          "يُحسن الثقة مع العملاء."
        ],
        resources: {
          arabicFree: [
            { name: "Tarmeez Academy", url: "https://www.youtube.com/@TarmeezAcademy" },
            { name: "Codezilla", url: "https://www.youtube.com/@Codezilla" }
          ],
          englishFree: [
            { name: "GDPR.eu", url: "https://gdpr.eu/" },
            { name: "PCI Security Standards", url: "https://www.pcisecuritystandards.org/" }
          ],
          paid: [
            { name: "Udemy Compliance Course", url: "https://www.udemy.com/topic/compliance/" },
            { name: "Pluralsight Compliance", url: "https://www.pluralsight.com/courses/compliance-fundamentals" }
          ]
        }
      }
    ]
  }
]

export default function CyberSecurity(){
    return (
        <Roadmap title={"Cuber-Security"} sections={sections}/>
    )
}