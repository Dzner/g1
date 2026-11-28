"use strict";

/* حدّث محتوى الموقع من هذا الملف فقط. لا تضع روابط غير منشورة. */
window.G1HubData = {
  site: {
    groupName: "G1 HUB",
    tagline: "منصة طلبة التمريض",
    ownerName: "حسن زايد حياوي",
    ownerRole: "مهندس برمجيات وطالب تمريض",
    social: {
      instagram: "YOUR_INSTAGRAM_USERNAME",
      telegram: "YOUR_TELEGRAM_USERNAME"
    }
  },
  schedule: {
    name: "الجدول الأسبوعي",
    title: "الجدول الأسبوعي",
    description: "مواعيد محاضرات المجموعة وأوقاتها خلال الأسبوع.",
    icon: "schedule",
    color: "#547f9e",
    image: "files/Weekly-Schedule/Weekly-Class-Schedule.jpg"
  },
  subjects: [
    {
      id: "anatomy",
      name: "التشريح",
      description: "بنية جسم الإنسان وأجهزته",
      icon: "anatomy",
      color: "#4b8d83",
      lectures: [],
      resource: {
        title: "تحميل ملف التشريح نظري وعملي",
        description: "الملف الكامل لمادة التشريح، ويشمل النظري والعملي.",
        url: "files/Anatomy/Anatomy-Theory-and-Practical.pdf",
        downloadName: "Anatomy-Theory-and-Practical.pdf"
      }
    },
    {
      id: "medical-surgical-nursing",
      name: "التمريض الباطني الجراحي",
      description: "مبادئ رعاية المريض الباطني والجراحي",
      icon: "care",
      color: "#397e84",
      lectures: [],
      sections: [
        {
          id: "medical-surgical-practical",
          name: "التمريض الباطني الجراحي عملي",
          description: "المحاضرة العملية الأولى",
          icon: "fundamentals",
          color: "#43856f",
          lectures: [
            {
              number: 1,
              title: "المحاضرة الأولى",
              type: "PDF",
              url: "files/Medical-Surgical-Nursing/Medical-Surgical-Practical-Lecture-1-Hospital-Orientation.pdf",
              downloadName: "Medical-Surgical-Practical-Lecture-1-Hospital-Orientation.pdf"
            }
          ]
        },
        {
          id: "medical-surgical-theory",
          name: "التمريض الباطني الجراحي نظري",
          description: "المحاضرة النظرية الأولى",
          icon: "care",
          color: "#397e84",
          lectures: [
            {
              number: 1,
              title: "المحاضرة الأولى",
              type: "PDF",
              url: "files/Medical-Surgical-Nursing/Medical-Surgical-Theory-Lecture-1-Concept-of-Health.pdf",
              downloadName: "Medical-Surgical-Theory-Lecture-1-Concept-of-Health.pdf"
            }
          ]
        }
      ]
    },
    {
      id: "medical-terminology",
      name: "المصطلحات الطبية",
      description: "مفردات العلوم الصحية ومصطلحاتها",
      icon: "terminology",
      color: "#697fa7",
      lectures: [
        {
          number: 1,
          title: "المحاضرتان الأولى والثانية",
          type: "PDF",
          url: "files/Medical-Terminology/Medical-Terminology-Lectures-1-and-2.pdf",
          downloadName: "Medical-Terminology-Lectures-1-and-2.pdf"
        }
      ]
    },
    {
      id: "microbiology",
      name: "الأحياء المجهرية",
      description: "الكائنات الدقيقة وعلاقتها بالصحة",
      icon: "microbiology",
      color: "#638e67",
      lectures: [],
      sections: [
        {
          id: "microbiology-practical",
          name: "الأحياء المجهرية عملي",
          description: "الملف الكامل لمادة العملي",
          icon: "fundamentals",
          color: "#638e67",
          resource: {
            title: "ملف الأحياء المجهرية العملي كامل",
            description: "مادة العملي كاملة في ملف PDF واحد.",
            url: "files/Microbiology/Microbiology-Practical-Complete.pdf",
            downloadName: "Microbiology-Practical-Complete.pdf"
          }
        },
        {
          id: "microbiology-theory",
          name: "الأحياء المجهرية نظري",
          description: "المحاضرات النظرية للمادة",
          icon: "microbiology",
          color: "#4c7d95",
          lectures: [
            {
              number: 1,
              title: "المحاضرة الأولى",
              type: "PDF",
              url: "files/Microbiology/Microbiology-Theory-Lecture-1.pdf",
              downloadName: "Microbiology-Theory-Lecture-1.pdf"
            }
          ]
        }
      ]
    },
    { id: "biochemistry", name: "الكيمياء الحياتية", description: "التفاعلات الكيميائية في الجسم", icon: "biochemistry", color: "#a07853", lectures: [] },
    {
      id: "fundamentals-of-nursing",
      name: "أساسيات التمريض",
      description: "مهارات الرعاية ومبادئ التمريض",
      icon: "fundamentals",
      color: "#4c8c9b",
      lectures: [
        {
          number: 1,
          title: "المحاضرة الأولى",
          type: "PDF",
          url: "files/Fundamentals-of-Nursing/Fundamentals-of-Nursing-Lecture-1.pdf",
          downloadName: "Fundamentals-of-Nursing-Lecture-1.pdf"
        }
      ]
    },
    {
      id: "human-rights",
      name: "حقوق وديمقراطية",
      description: "المبادئ المدنية والحقوق الأساسية",
      icon: "rights",
      color: "#8a7898",
      lectures: [],
      book: {
        url: "files/Human-Rights-and-Democracy/Human-Rights-and-Democracy-Book.pdf",
        downloadName: "Human-Rights-and-Democracy-Book.pdf",
        contents: [
          {
            title: "الباب الأول: حقوق الإنسان",
            chapters: [
              {
                title: "الفصل الأول: مفهوم حقوق الإنسان والشرعة الدولية لحقوق الإنسان",
                mabahith: [
                  "التعريف بحقوق الإنسان والآليات الوطنية والإجرائية لتطبيقها",
                  "مفهوم الشرعة الدولية لحقوق الإنسان"
                ]
              },
              {
                title: "الفصل الثاني: الحقوق النوعية والخاصة",
                mabahith: [
                  "حقوق المرأة والطفل والأقليات وذوي الإعاقة في المواثيق الدولية",
                  "الآليات والإجراءات الوطنية لتطبيق الحقوق الخاصة أو النوعية"
                ]
              },
              {
                title: "الفصل الثالث: الانتهاكات الجسيمة لحقوق الإنسان",
                mabahith: [
                  "مكافحة الانتهاكات الجسيمة لحقوق الإنسان",
                  "القانون الدولي الإنساني وحماية حقوق الإنسان في النزاعات",
                  "الانتهاكات الجسيمة لحقوق الإنسان في العراق"
                ]
              },
              {
                title: "الفصل الرابع: مجلس حقوق الإنسان وآليات حماية الحقوق",
                mabahith: [
                  "مجلس حقوق الإنسان وآلية الاستعراض الدوري الشامل",
                  "آليات الحماية الدولية والإقليمية لحقوق الإنسان وسبل المساءلة"
                ]
              },
              {
                title: "الفصل الخامس: التحديات المعاصرة في مجال حقوق الإنسان",
                mabahith: [
                  "التحديات التي تواجه حقوق الإنسان",
                  "الآليات الوطنية والإجرائية لتعزيز حقوق الإنسان"
                ]
              }
            ]
          },
          {
            title: "الباب الثاني: الديمقراطية",
            chapters: [
              {
                title: "الفصل الأول: الديمقراطية: الأصول التاريخية وتطورات المسار",
                mabahith: [
                  "المفاهيم التاريخية لنشأة الديمقراطية وأسسها",
                  "تطور الديمقراطية في العصر الحديث ومستلزماتها",
                  "الديمقراطية في القرن العشرين بين الشمولية والتوسع العالمي",
                  "أنماط الديمقراطية وتطورها في السياقات المعاصرة",
                  "الإسلام والديمقراطية"
                ]
              },
              {
                title: "الفصل الثاني: المؤسسات وآليات الديمقراطية",
                mabahith: [
                  "فصل السلطات ومبادئ الحكم الديمقراطي",
                  "الانتخابات كآلية للديمقراطية",
                  "الأحزاب السياسية",
                  "المجتمع المدني وجماعات الضغط"
                ]
              },
              {
                title: "الفصل الثالث: الديمقراطية في الممارسة",
                mabahith: [
                  "العلاقة بين الديمقراطية والحريات العامة",
                  "ضمانات وتنظيم الحقوق والحريات في النظام الديمقراطي",
                  "الإعلام والديمقراطية"
                ]
              },
              {
                title: "الفصل الرابع: الديمقراطية في السياق المقارن والمعاصر: قضايا وتطبيقات",
                mabahith: [
                  "الأنظمة الديمقراطية المقارنة",
                  "الديمقراطية في العالم النامي: التحديات والنماذج التطبيقية",
                  "التحول الرقمي في الممارسة الديمقراطية (الديمقراطية الرقمية)",
                  "التجربة الديمقراطية في العراق بعد عام 2003"
                ]
              }
            ]
          }
        ]
      }
    },
    { id: "arabic-language", name: "اللغة العربية", description: "اللغة والتعبير والمهارات الكتابية", icon: "arabic", color: "#a66f77", lectures: [] },
    { id: "english-language", name: "اللغة الإنجليزية", description: "اللغة ومفردات التواصل الدراسي", icon: "english", color: "#5d7d9a", lectures: [] }
  ],
  students: [
    "احمد سالم حسن زغير",
    "احمد عبدالكاظم عباس كعيد",
    "احمد عصام ياسر جاسم",
    "احمد عميد اسماعيل سوادي",
    "احمد لفتة صاحب فاضل",
    "احمد نعمه يوسف عبدالحسين",
    "احمد واثق جميل عذاب",
    "اديان ضياء حسين",
    "اديان فاهم عجمي ظاهر",
    "استبرق علاء هاشم",
    "اسراء محمد كامل غيدان",
    "اكرام محمد عوده عطيه",
    "اكرم احمد مهدي خضير",
    "النور المبين حسين عليوي عبدالحسين",
    "ام البنين مهدي رزاق احمد",
    "امنه عبد الامير لفته فنجان",
    "امير احسان حيدر مرتضى",
    "انتظار فضل علي حارس",
    "انفال شاكر فشاخ محمد",
    "انوار عبد الكاظم نعمه حسين",
    "ايات احمد عويد حنون",
    "ايات علاوي شخير",
    "ايات علي حسين خنجر",
    "ايات محمود ابراهيم والي",
    "اية فرحان سوادي كاظم",
    "ايمان سيف خالد",
    "ايمان محمد هادي",
    "ايناس معد عمران موسى",
    "ايه حيدر فاضل عباس",
    "ايه عباس فاضل عبد الزهره",
    "ايه نعيم ناجي",
    "ايوب فاضل كاظم ظاهر",
    "باقر علاء حميد جبار",
    "بان سالم عبد ساير",
    "بتول عادل صالح عباس",
    "بتول كامل عبدالساده عبدالحسن",
    "بتول نصير حمزه علوان",
    "بدر عزيز فارس سلمان",
    "بسعاد سالم عبيس",
    "بنين باسم كريم فيروز",
    "بنين حسن هلال ابراهيم",
    "بنين داخل هادي حسون",
    "بنين صبار ياسين سرفان",
    "بنين عقيل خضير بارع",
    "تبارك احمد حميد مانع",
    "تبارك حازم دويح بردي",
    "تبارك حسين فاضل عطيه",
    "تبارك عبد الحسين مهدي سلمان",
    "تبارك كريم عبد المحسن حسن",
    "تقى حيدر جبار شمخي",
    "جعفر جابر هاني رحوم",
    "جعفر خالد حسين علاوي",
    "جنه فاضل مهدي صالح",
    "حسن جواد عطيه عباس",
    "حسن حامد حاكم بدر",
    "حسن حمود دويج كزار",
    "حسن زيد حياوي جعفر",
    "حسن ستار حافظ محمود",
    "حسن عقيل حسين مهدي"
  ],
  notes: []
};
