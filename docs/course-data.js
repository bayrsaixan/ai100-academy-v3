// 2026 course schedule from uploaded syllabus and .ics.
// Learning checkpoints and self-study tasks are suggested additions, not official requirements.
window.AI100_DATA = {
  "modules": [
    {
      "id": "programming",
      "number": "01",
      "name": "Programming Fundamentals",
      "mn": "Программчлалын үндэс",
      "subtitle": "Алгоритм · Python · Өгөгдлийн бүтэц",
      "icon": "code",
      "tone": "violet",
      "lessons": [
        2,
        3,
        4
      ],
      "description": "Алгоритмын сэтгэлгээ, Python анхан шат, хувьсагч, удирдах урсгал, функц, жагсаалт, толь бичиг, файл, сан, мини төсөл.",
      "outcome": "Python программ бичих, ажиллуулах, алдааг засах, функц ба өгөгдлийн бүтэц ашиглах, файл унших/бичих, сан суулгах."
    },
    {
      "id": "foundations",
      "number": "02",
      "name": "AI Foundations & GenAI",
      "mn": "AI ба GenAI суурь",
      "subtitle": "AI ойлголт · Ёс зүй · Чиг хандлага",
      "icon": "brain",
      "tone": "orange",
      "lessons": [
        1,
        11
      ],
      "description": "AI гэж юу болох, түүх, гол ойлголтууд, хариуцлагатай AI, дэлхийн чиг хандлага.",
      "outcome": "Generative AI-ийн ажиллах зарчим, боломж ба алдаа, prompt-ийн чанар, AI ёс зүйн эрсдэлийг таних."
    },
    {
      "id": "ml",
      "number": "03",
      "name": "Machine Learning Modeling",
      "mn": "Machine Learning загварчлал",
      "subtitle": "Pandas · Regression · Classification",
      "icon": "chart",
      "tone": "blue",
      "lessons": [
        5,
        6,
        7,
        8
      ],
      "description": "Pandas-аар өгөгдөл цэвэрлэх ба дүрслэх, регресс, ангилал, загварын үнэлгээ, Hugging Face, загвар байршуулах.",
      "outcome": "Өгөгдөл бэлтгэж, scikit-learn-аар загвар сургаж үнэлэх, accuracy/precision/recall тайлбарлах, урьдчилан сургасан загвар ашиглах."
    },
    {
      "id": "applied",
      "number": "04",
      "name": "Applied AI & Cloud Technology",
      "mn": "Хэрэглээний AI ба Cloud",
      "subtitle": "Vibe Coding · API · GitHub · Cloud",
      "icon": "layers",
      "tone": "mint",
      "lessons": [
        9,
        10,
        13,
        14,
        15,
        16
      ],
      "description": "Vibe coding, AI апп бүтээн байршуулах, no-code автоматжуулалт, API ба LLM API, GitHub, үүлэн үйлчилгээ, бүтээлч AI.",
      "outcome": "AI кодчиллын туслах ашиглах, no-code автоматжуулалт хийх, Python-оос API дуудах, GitHub дээр код удирдах, веб апп үүлэнд байршуулах."
    },
    {
      "id": "capstone",
      "number": "05",
      "name": "Capstone Project",
      "mn": "Төгсөлтийн төсөл",
      "subtitle": "Problem · Prototype · Deployment · Demo",
      "icon": "rocket",
      "tone": "pink",
      "lessons": [
        12,
        17,
        18,
        19,
        20,
        21
      ],
      "description": "Асуудал сонголт, 3–4 хүний баг, project charter, prototype, mentoring, deployment, dry-run, Demo Day танилцуулга.",
      "outcome": "Төслийн хүрээ тодорхойлж, багаар AI апп бүтээж турших, GitHub-д баримтжуулах, шүүгчдэд танилцуулах."
    }
  ],
  "lessons": [
    {
      "num": 1,
      "week": 0,
      "date": "7-Nov",
      "day": "Бямба",
      "time": "10:00–12:30",
      "specialTime": true,
      "topic": "What is AI? History, key concepts (хоёр ангийн нэгдсэн нээлт)",
      "teacher": "Myagmarsuren S.",
      "desc": "Хиймэл оюун ухааны түүх, AI, Machine Learning, Deep Learning-ийн ялгаа ба суурь ухагдахуунууд.",
      "year": 2026,
      "startsAt": "2026-11-07T10:00:00+08:00",
      "endsAt": "2026-11-07T12:30:00+08:00",
      "module": "foundations",
      "concepts": [
        "AI нь дүрэм, өгөгдөл, загвараар шийдвэр гаргах системийн өргөн хүрээний нэр.",
        "Machine Learning (ML) нь өгөгдлөөс хэв маяг сурдаг AI-ийн дэд салбар.",
        "Deep Learning (DL) нь олон давхаргат нейрон сүлжээ ашигладаг ML-ийн арга."
      ],
      "task": "Өдөр бүр хэрэглэдэг 3 AI жишээг сонгож, аль нь дүрэмд, аль нь өгөгдөлд илүү суурилсныг тайлбарла.",
      "quiz": {
        "question": "AI, ML, DL-ийн хамаарлыг аль нь зөв илэрхийлэх вэ?",
        "options": [
          "AI ⊃ ML ⊃ DL",
          "ML ⊃ AI ⊃ DL",
          "Бүгд ижил ойлголт"
        ],
        "answer": 0,
        "explanation": "ML бол AI-ийн, DL бол ML-ийн дэд хэсэг."
      }
    },
    {
      "num": 2,
      "week": 1,
      "date": "9-Nov",
      "day": "Даваа",
      "time": "19:00–20:30",
      "specialTime": false,
      "topic": "Algorithmic Thinking + Python I: setting up, variables, data types, control flow",
      "teacher": "Temuulen M.",
      "desc": "Алгоритм сэтгэлгээ, Python орчин тохируулах, хувьсагч, өгөгдлийн төрлүүд болон нөхцөл шалгах (if/else).",
      "year": 2026,
      "startsAt": "2026-11-09T19:00:00+08:00",
      "endsAt": "2026-11-09T20:30:00+08:00",
      "module": "programming",
      "concepts": [
        "Алгоритм бол асуудлыг шийдэх дараалсан тодорхой алхмууд.",
        "Хувьсагч нь утга хадгалах нэр; төрөл нь түүн дээр ямар үйлдэл хийхийг тодорхойлно.",
        "if/elif/else салбарлалт нь нөхцлөөр гүйцэтгэлийн зам сонгоно."
      ],
      "task": "Шалгалтын оноо 0–100 гэсэн оролт авч, 60-аас дээш эсвэл тэнцүү бол “Тэнцсэн” гэж хэвлэх программ бич.",
      "quiz": {
        "question": "Python-д нөхцөл шалгах түлхүүр үг аль нь вэ?",
        "options": [
          "switch",
          "if",
          "when"
        ],
        "answer": 1,
        "explanation": "Python-д if, elif, else ашиглан нөхцөл салбарлуулдаг."
      },
      "code": "score = 78\nif 0 <= score <= 100:\n    result = \"Тэнцсэн\" if score >= 60 else \"Дахин оролдоно\"\n    print(result)\nelse:\n    print(\"Оноо 0–100 байх ёстой\")"
    },
    {
      "num": 3,
      "week": 1,
      "date": "11-Nov",
      "day": "Лхагва",
      "time": "19:00–20:30",
      "specialTime": false,
      "topic": "Python II: functions, lists, dictionaries, loops",
      "teacher": "Temuulen M.",
      "desc": "Функц бичих, жагсаалт (list), толь бичиг (dict) болон давталтууд (for, while).",
      "year": 2026,
      "startsAt": "2026-11-11T19:00:00+08:00",
      "endsAt": "2026-11-11T20:30:00+08:00",
      "module": "programming",
      "concepts": [
        "Функц нь дахин ашиглагдах логикийг нэрээр нэгтгэнэ.",
        "list нь эрэмбэтэй олон элемент; dict нь түлхүүр-утгын хослол.",
        "for болон while давталтуудыг зогсох нөхцөлтэй ашиглана."
      ],
      "task": "5 оюутны оноог list-д хадгалж, дундажийг нь буцаадаг функц бич.",
      "quiz": {
        "question": "Өгөгдлийг “нэр → оноо” байдлаар хадгалахад аль бүтэц тохиромжтой вэ?",
        "options": [
          "dict",
          "set",
          "int"
        ],
        "answer": 0,
        "explanation": "dict түлхүүр-утгын хослолоор мэдээлэл хадгална."
      },
      "code": "def average_score(scores: list[int]) -> float:\n    if not scores:\n        raise ValueError(\"Онооны жагсаалт хоосон байна\")\n    return sum(scores) / len(scores)\n\nprint(average_score([78, 92, 85, 91]))"
    },
    {
      "num": 4,
      "week": 1,
      "date": "12-Nov",
      "day": "Пүрэв",
      "time": "19:00–20:30",
      "specialTime": false,
      "topic": "Python III: files, libraries and a first mini-project",
      "teacher": "Dr Undral B.",
      "desc": "Файлтай ажиллах, бэлэн сангууд (libraries) импортлох ба эхний мини-төсөл.",
      "year": 2026,
      "startsAt": "2026-11-12T19:00:00+08:00",
      "endsAt": "2026-11-12T20:30:00+08:00",
      "module": "programming",
      "concepts": [
        "Файл унших, бичихэд encoding ба замыг зөв удирдах хэрэгтэй.",
        "Сан (library) нь бэлэн хэрэгслийг импортлон дахин ашиглах боломж олгоно.",
        "Жижиг төслөө оролт → боловсруулалт → гаралт болгон зохион байгуулах нь ойлгомжтой."
      ],
      "task": "CSV файл дахь оюутны оноонуудыг уншиж, дундажийг нь тооцоод шинэ файлд хадгал.",
      "quiz": {
        "question": "Файлыг автоматаар хаах зөв хэлбэр аль нь вэ?",
        "options": [
          "with open(...) as file:",
          "open(...) зөвхөн",
          "print(file)"
        ],
        "answer": 0,
        "explanation": "with контекст менежер нь файл ашигласны дараа хаадаг."
      },
      "code": "import csv\nfrom pathlib import Path\n\npath = Path(\"scores.csv\")\nif path.exists():\n    with path.open(encoding=\"utf-8\", newline=\"\") as file:\n        rows = list(csv.DictReader(file))\n    print(f\"Нийт мөр: {len(rows)}\")\nelse:\n    print(\"scores.csv файл олдсонгүй\")"
    },
    {
      "num": 5,
      "week": 2,
      "date": "16-Nov",
      "day": "Даваа",
      "time": "19:00–20:30",
      "specialTime": false,
      "topic": "Working with data: pandas, cleaning and visualisation",
      "teacher": "Temuulen M.",
      "desc": "Pandas сангаар хүснэгтэн өгөгдөл боловсруулах, өгөгдөл цэвэрлэх болон график дүрслэл.",
      "year": 2026,
      "startsAt": "2026-11-16T19:00:00+08:00",
      "endsAt": "2026-11-16T20:30:00+08:00",
      "module": "ml",
      "concepts": [
        "DataFrame нь багана, мөр бүхий хүснэгтэн өгөгдлийн бүтэц.",
        "Missing values, duplicate, буруу төрөл нь шинжилгээг гажуудуулдаг.",
        "Визуалчлал нь тархалт, хамаарал, outlier-ыг танихад тусална."
      ],
      "task": "Жижиг CSV өгөгдөл дээр хоосон утга, давхардсан мөрийг илрүүлээд цэвэрлэх алхмуудаа тайлбарла.",
      "quiz": {
        "question": "df.isna().sum() ихэвчлэн юуг харуулдаг вэ?",
        "options": [
          "Багана бүрийн хоосон утгын тоо",
          "Нийт мөрийн нэр",
          "Баганын төрлүүд"
        ],
        "answer": 0,
        "explanation": "isna нь хоосон утгыг шалгаж, sum нь тус бүрийн тоог гаргана."
      },
      "code": "import pandas as pd\n\ndata = pd.DataFrame({\"score\": [85, None, 90, 90]})\nprint(data.isna().sum())\ncleaned = data.dropna().drop_duplicates()\nprint(cleaned)"
    },
    {
      "num": 6,
      "week": 2,
      "date": "18-Nov",
      "day": "Лхагва",
      "time": "19:00–20:30",
      "specialTime": false,
      "topic": "Machine learning I: how models learn; regression",
      "teacher": "Temuulen M.",
      "desc": "Машин сургалтын загвар суралцах зарчим болон тоон утга таамаглах Регрессийн загвар.",
      "year": 2026,
      "startsAt": "2026-11-18T19:00:00+08:00",
      "endsAt": "2026-11-18T20:30:00+08:00",
      "module": "ml",
      "concepts": [
        "Supervised learning-д жишээ оролт (features) болон зорилтот утга (target) өгдөг.",
        "Regression нь тасралтгүй тоон утга таамаглах зорилготой.",
        "Train/test хуваалт нь хараагүй өгөгдөл дээр үнэлэхэд чухал."
      ],
      "task": "Суралцсан цаг ба шалгалтын онооны жижиг өгөгдөл зохиож, ямар хувьсагч X, аль нь y болохыг тэмдэглэ.",
      "quiz": {
        "question": "Орон сууцны үнийг таамаглах нь аль төрлийн даалгавар вэ?",
        "options": [
          "Classification",
          "Regression",
          "Clustering"
        ],
        "answer": 1,
        "explanation": "Үнэ нь тасралтгүй тоон утга тул регресс."
      },
      "code": "from sklearn.linear_model import LinearRegression\n\n# Суралцсан цаг → сорилын оноо (жишээ өгөгдөл)\nX = [[1], [2], [3], [4], [5]]\ny = [52, 60, 68, 76, 84]\nmodel = LinearRegression().fit(X, y)\nprint(model.predict([[3.5]])[0])"
    },
    {
      "num": 7,
      "week": 2,
      "date": "19-Nov",
      "day": "Пүрэв",
      "time": "19:00–20:30",
      "specialTime": false,
      "topic": "Machine learning II: classification and evaluating a model",
      "teacher": "Dr Undral B.",
      "desc": "Ангиллын алгоритмууд (Classification) ба загварын гүйцэтгэлийг үнэлэх хэмжүүрүүд.",
      "year": 2026,
      "startsAt": "2026-11-19T19:00:00+08:00",
      "endsAt": "2026-11-19T20:30:00+08:00",
      "module": "ml",
      "concepts": [
        "Classification нь жишээг ангилалд хуваан таамаглана.",
        "Accuracy нь нийт зөв таамаглалын хувь; тэнцвэргүй өгөгдөлд төөрөгдүүлж болно.",
        "Precision ба recall нь false positive/false negative-ийг өөр өнцгөөс үнэлнэ."
      ],
      "task": "10 таамаглалын үр дүнгээс TP, FP, FN-ийг гараар тооцоод precision, recall ол.",
      "quiz": {
        "question": "Өвчтэй хүмүүсийг алдахгүй илрүүлэх нь чухал үед аль хэмжүүрийг анхаарах вэ?",
        "options": [
          "Recall",
          "Зөвхөн accuracy",
          "R²"
        ],
        "answer": 0,
        "explanation": "Recall өндөр байх нь бодит эерэг жишээг аль болох алдахгүй илрүүлнэ."
      },
      "code": "from sklearn.metrics import classification_report\n\ny_true = [1, 0, 1, 1, 0, 0]\ny_pred = [1, 0, 1, 0, 0, 1]\nprint(classification_report(y_true, y_pred, zero_division=0))"
    },
    {
      "num": 8,
      "week": 3,
      "date": "23-Nov",
      "day": "Даваа",
      "time": "19:00–20:30",
      "specialTime": false,
      "topic": "Machine learning III: pre-trained models, Hugging Face and deploying a model",
      "teacher": "Temuulen M.",
      "desc": "Бэлэн сургасан загварууд, Hugging Face платформ ашиглах ба загвараа Deploy хийх.",
      "year": 2026,
      "startsAt": "2026-11-23T19:00:00+08:00",
      "endsAt": "2026-11-23T20:30:00+08:00",
      "module": "ml",
      "concepts": [
        "Pre-trained model нь өмнө нь том хэмжээний өгөгдлөөр сургасан загвар.",
        "Transfer learning нь бэлэн мэдлэгийг шинэ даалгаварт ашиглана.",
        "Deployment нь загварыг хэрэглэгч дуудах боломжтой системд байрлуулах үйл явц."
      ],
      "task": "Hugging Face дээрээс нэг загварын model card судалж, зорилго, хязгаарлалт, license-ийг тэмдэглэ.",
      "quiz": {
        "question": "Model card-ыг унших хамгийн чухал шалтгаан аль вэ?",
        "options": [
          "Загварын зориулалт ба хязгаарлалтыг мэдэх",
          "Файлыг заавал устгах",
          "RAM-г нэмэгдүүлэх"
        ],
        "answer": 0,
        "explanation": "Model card нь хэрэглээ, өгөгдөл, эрсдэл, хязгаарлалтыг ойлгоход тусална."
      }
    },
    {
      "num": 9,
      "week": 3,
      "date": "25-Nov",
      "day": "Лхагва",
      "time": "19:00–20:30",
      "specialTime": false,
      "topic": "Vibe coding: building projects with AI coding assistants",
      "teacher": "Temuulen M.",
      "desc": "AI код бичигч туслахууд ашиглан хурдтай төсөл хөгжүүлэх Vibe coding арга барил.",
      "year": 2026,
      "startsAt": "2026-11-25T19:00:00+08:00",
      "endsAt": "2026-11-25T20:30:00+08:00",
      "module": "applied",
      "concepts": [
        "Vibe coding нь AI туслахаар кодыг хурдан боловсруулах арга боловч үр дүнг заавал шалгана.",
        "Сайн prompt нь зорилго, оролт/гаралт, хязгаарлалт, хүлээн авах шалгуур тодорхойлно.",
        "Жижиг алхам, тест, Git diff ашиглах нь эрсдэл багасгана."
      ],
      "task": "AI туслахаар Python CSV validator бичүүлэх prompt зохиож, 3 edge case нэмж шалга.",
      "quiz": {
        "question": "AI бичсэн кодыг merge хийхийн өмнө юу хийх нь зөв вэ?",
        "options": [
          "Ажиллуулж тестлэх",
          "Шууд production-д тавих",
          "Эх кодыг уншихгүй орхих"
        ],
        "answer": 0,
        "explanation": "AI код алдаатай байж болдог тул тест, review шаардлагатай."
      }
    },
    {
      "num": 10,
      "week": 3,
      "date": "26-Nov",
      "day": "Пүрэв",
      "time": "10:00–11:30",
      "specialTime": true,
      "topic": "Build an AI app end-to-end: from idea to a live demo (deployment)",
      "teacher": "Baigalmaa Z.",
      "desc": "Санаанаас эхлэн бодит ажилладаг демо хүртэл бүтэн AI апп бүтээж, онлайн орчинд байршуулах.",
      "year": 2026,
      "startsAt": "2026-11-26T10:00:00+08:00",
      "endsAt": "2026-11-26T11:30:00+08:00",
      "module": "applied",
      "concepts": [
        "MVP нь хамгийн бага хүрээнд бодит асуудал шийдэх ажилладаг бүтээгдэхүүн.",
        "End-to-end урсгалд UI, логик, өгөгдөл, байршуулалт хамт орно.",
        "Deployment-ийн дараа алдаа, latency, хэрэглэгчийн туршлагыг шалгана."
      ],
      "task": "Нэг AI аппын санааг хэрэглэгч → оролт → AI боловсруулалт → гаралт гэсэн 4 блокоор зур.",
      "quiz": {
        "question": "MVP-ийн гол зорилго юу вэ?",
        "options": [
          "Гол үнэ цэнийг хурдан батлах",
          "Бүх функцийг зэрэг хийх",
          "Зөвхөн дизайн гаргах"
        ],
        "answer": 0,
        "explanation": "MVP нь хамгийн чухал үнэ цэнийг бага хүчин чармайлтаар туршина."
      }
    },
    {
      "num": 11,
      "week": 4,
      "date": "30-Nov",
      "day": "Даваа",
      "time": "19:00–20:30",
      "specialTime": false,
      "topic": "Responsible AI and global AI trends",
      "teacher": "Temuulen M.",
      "desc": "Хариуцлагатай AI, ёс зүй, өгөгдлийн нууцлал болон дэлхийн AI чиг хандлага.",
      "year": 2026,
      "startsAt": "2026-11-30T19:00:00+08:00",
      "endsAt": "2026-11-30T20:30:00+08:00",
      "module": "foundations",
      "concepts": [
        "Хариуцлагатай AI нь шударга байдал, ил тод байдал, аюулгүй байдал, нууцлалыг авч үзнэ.",
        "Hallucination буюу үндэслэлгүй хариулт нь Generative AI-ийн эрсдэл.",
        "Мэдрэмтгий өгөгдлийг AI үйлчилгээ рүү илгээхээс өмнө зөвшөөрөл, хамгаалалтыг шалгана."
      ],
      "task": "Оюутны мэдээлэл ашигладаг AI аппын 3 эрсдэл, тус бүрд нь 1 хамгаалалт санал болго.",
      "quiz": {
        "question": "Хэрэглэгчийн хувийн мэдээллийг model prompt-д хийхийн өмнө юу чухал вэ?",
        "options": [
          "Хэрэгцээ, зөвшөөрөл, хамгаалалт",
          "Илүү олон мэдээлэл илгээх",
          "Нууц үгийг хамт илгээх"
        ],
        "answer": 0,
        "explanation": "Privacy by design зарчмаар шаардлагагүй өгөгдөл дамжуулахгүй."
      }
    },
    {
      "num": 12,
      "week": 4,
      "date": "2-Dec",
      "day": "Лхагва",
      "time": "19:00–20:30",
      "specialTime": false,
      "topic": "Capstone kick-off: problem selection, team formation, project charter",
      "teacher": "Temuulen M.",
      "desc": "Төгсөлтийн төслийн эхлэл: асуудал сонгох, баг бүрдүүлэх, төслийн баримт бичиг боловсруулах.",
      "year": 2026,
      "startsAt": "2026-12-02T19:00:00+08:00",
      "endsAt": "2026-12-02T20:30:00+08:00",
      "module": "capstone",
      "concepts": [
        "Problem statement нь хэнд, ямар асуудлыг, яагаад шийдэхийг хэлнэ.",
        "Project charter нь зорилго, хүрээ, баг, амжилтын шалгуурыг нэгтгэнэ.",
        "3–4 хүний багт эзэнтэй үүрэг, давтамжтай review хэрэгтэй."
      ],
      "task": "Capstone-ийн 1 өгүүлбэр problem statement, 3 MVP feature, 1 success metric бич.",
      "quiz": {
        "question": "Сайн project charter-д аль нь байх вэ?",
        "options": [
          "Зорилго, хүрээ, үүрэг, хэмжүүр",
          "Зөвхөн лого",
          "Зөвхөн код"
        ],
        "answer": 0,
        "explanation": "Төслийг удирдах тулд хамрах хүрээ ба амжилтын шалгуур зайлшгүй."
      }
    },
    {
      "num": 13,
      "week": 4,
      "date": "3-Dec",
      "day": "Пүрэв",
      "time": "19:00–20:30",
      "specialTime": false,
      "topic": "No Code Automation",
      "teacher": "Enkhmanlai B.",
      "desc": "Код бичилгүйгээр ажлын урсгал болон AI процессуудыг автоматжуулах.",
      "year": 2026,
      "startsAt": "2026-12-03T19:00:00+08:00",
      "endsAt": "2026-12-03T20:30:00+08:00",
      "module": "applied",
      "concepts": [
        "Automation нь trigger → action → result хэлбэртэй давтагдах ажлыг гүйцэтгэнэ.",
        "No-code хэрэгсэл нь интеграц хийхэд хурдан ч өгөгдлийн аюулгүй байдлыг шалгана.",
        "Алдаа гарвал retry, log, notification төлөвлөнө."
      ],
      "task": "Шинэ форм бөглөгдөхөд баталгаажуулах мэдэгдэл илгээдэг workflow-ийн схем зур.",
      "quiz": {
        "question": "Автоматжуулалтын trigger гэж юу вэ?",
        "options": [
          "Урсгалыг эхлүүлэх үйл явдал",
          "Сүүлийн үр дүн",
          "Зөвхөн API түлхүүр"
        ],
        "answer": 0,
        "explanation": "Trigger нь workflow хэзээ ажиллахыг шийднэ."
      }
    },
    {
      "num": 14,
      "week": 5,
      "date": "7-Dec",
      "day": "Даваа",
      "time": "19:00–20:30",
      "specialTime": false,
      "topic": "APIs and calling LLMs from Python",
      "teacher": "Temuulen M.",
      "desc": "API ажиллах зарчим ба Python кодоос том хэлний загваруудыг (LLM) дуудаж ажиллуулах.",
      "year": 2026,
      "startsAt": "2026-12-07T19:00:00+08:00",
      "endsAt": "2026-12-07T20:30:00+08:00",
      "module": "applied",
      "concepts": [
        "API нь програмуудын хооронд тодорхой хүсэлт/хариултаар холбогдох интерфейс.",
        "LLM API-д prompt, model, token хэрэглээ, алдаа болон зардлыг хянах шаардлагатай.",
        "Нууц API key-г JavaScript frontend эсвэл GitHub repository-д хадгалж болохгүй."
      ],
      "task": "LLM API ашиглах backend endpoint-ийн request, response, алдаа боловсруулах схем гарга.",
      "quiz": {
        "question": "API key-г хаана хадгалах нь илүү зөв вэ?",
        "options": [
          "Серверийн environment variable",
          "Нээлттэй GitHub repo",
          "HTML source-д"
        ],
        "answer": 0,
        "explanation": "Нууц түлхүүр сервер талд хамгаалагдсан байх ёстой."
      },
      "code": "import os\n\napi_key = os.getenv(\"LLM_API_KEY\")\nif not api_key:\n    raise RuntimeError(\"LLM_API_KEY тохируулаагүй байна\")\n# Энд баталгаажуулсан SDK-ийн client-ийг сервер талд үүсгэнэ."
    },
    {
      "num": 15,
      "week": 5,
      "date": "9-Dec",
      "day": "Лхагва",
      "time": "19:00–20:30",
      "specialTime": false,
      "topic": "GitHub, hosting a web app, introduction to cloud services",
      "teacher": "Temuulen M.",
      "desc": "GitHub дээр багаар ажиллах, веб апп байршуулах ба үүлэн технологийн суурь.",
      "year": 2026,
      "startsAt": "2026-12-09T19:00:00+08:00",
      "endsAt": "2026-12-09T20:30:00+08:00",
      "module": "applied",
      "concepts": [
        "Git нь хувилбарын түүх, GitHub нь хамтын repository үйлчилгээ.",
        "Commit бүр жижиг, утгатай байх нь review-д дөхөм.",
        "Static GitHub Pages нь HTML/CSS/JS сайтад тохиромжтой; серверийн нууц API key хадгалахгүй."
      ],
      "task": "Энэ сайтдаа README сайжруулалт хийж, feature branch үүсгээд pull request бэлд.",
      "quiz": {
        "question": "GitHub Pages дээр аль сайт шууд ажиллах вэ?",
        "options": [
          "Static HTML/CSS/JS",
          "Нууц key-тэй Python backend",
          "Локал database server"
        ],
        "answer": 0,
        "explanation": "GitHub Pages нь статик файлыг нийтэлдэг."
      },
      "code": "git switch -c feature/learning-notes\ngit add .\ngit commit -m \"feat: add learning notes\"\ngit push -u origin feature/learning-notes"
    },
    {
      "num": 16,
      "week": 5,
      "date": "10-Dec",
      "day": "Пүрэв",
      "time": "19:00–20:30",
      "specialTime": false,
      "topic": "Creative AI Workshop",
      "teacher": "Tsetsenbileg D.",
      "desc": "Бүтээлч салбарын AI хэрэгслүүд дээр суурилсан практик воркшоп.",
      "year": 2026,
      "startsAt": "2026-12-10T19:00:00+08:00",
      "endsAt": "2026-12-10T20:30:00+08:00",
      "module": "applied",
      "concepts": [
        "Creative AI нь текст, зураг, дуу зэрэг агуулга үүсгэх боломжтой.",
        "Prompt-д audience, style, constraints, output format тодорхойлбол чанар сайжирна.",
        "Зохиогчийн эрх, лиценз, эх сурвалж, зөвшөөрлийг харгалзана."
      ],
      "task": "Capstone аппын танилцуулгад зориулсан hero текстийн 3 хувилбарын prompt бичээд үр дүнг нь харьцуул.",
      "quiz": {
        "question": "Creative AI-ээр үүсгэсэн контент ашиглахдаа юуг шалгах вэ?",
        "options": [
          "Эрх, баримт, тохирох байдал",
          "Зөвхөн хэмжээ",
          "Зөвхөн хурд"
        ],
        "answer": 0,
        "explanation": "Зохиогчийн эрх болон бодит баримтын алдаа чухал."
      }
    },
    {
      "num": 17,
      "week": 6,
      "date": "14-Dec",
      "day": "Даваа",
      "time": "19:00–20:30",
      "specialTime": false,
      "topic": "Capstone build I: prototype review and technical mentoring",
      "teacher": "Temuulen M.",
      "desc": "Төгсөлтийн төслийн эхний прототайпыг шалгуулж техникийн зөвлөгөө авах.",
      "year": 2026,
      "startsAt": "2026-12-14T19:00:00+08:00",
      "endsAt": "2026-12-14T20:30:00+08:00",
      "module": "capstone",
      "concepts": [
        "Prototype нь гол хэрэглэгчийн урсгалыг харуулах анхны загвар.",
        "Review-д хамгийн эрсдэлтэй таамаглалыг түрүүлж шалгуулна.",
        "Feedback-ийг issue, priority, owner болгон хувиргана."
      ],
      "task": "Prototype-оо 3 минутанд тайлбарлах скрипт, 5 review асуулт бэлд.",
      "quiz": {
        "question": "Prototype review-ийн дараа юу хийх нь зөв вэ?",
        "options": [
          "Feedback-ийг эрэмбэлж action item болгох",
          "Бүх feedback-ийг мартах",
          "Кодыг бүгдийг дахин бичих"
        ],
        "answer": 0,
        "explanation": "Feedback-ийн дагуу дараагийн давталтыг төлөвлөнө."
      }
    },
    {
      "num": 18,
      "week": 6,
      "date": "16-Dec",
      "day": "Лхагва",
      "time": "19:00–20:30",
      "specialTime": false,
      "topic": "Capstone build II: mentoring clinic (optional sponsor guest)",
      "teacher": "Temuulen M.",
      "desc": "Төслийн ганцаарчилсан/багийн менторинг уулзалт ба зочны ярилцлага.",
      "year": 2026,
      "startsAt": "2026-12-16T19:00:00+08:00",
      "endsAt": "2026-12-16T20:30:00+08:00",
      "module": "capstone",
      "concepts": [
        "Mentoring clinic-д шийдвэр гаргах шаардлагатай асуултаа урьдчилан бэлтгэнэ.",
        "Blocker бүрд owner, deadline, next action тодорхойлно.",
        "Data leakage, алдаа, latency зэрэг техникийн эрсдэлийг нягтална."
      ],
      "task": "Capstone-ийн 3 blocker, 3 ментороос асуух асуулт, дараагийн 1 sprint plan бич.",
      "quiz": {
        "question": "Mentoring уулзалтыг үр дүнтэй болгох хамгийн сайн арга юу вэ?",
        "options": [
          "Тодорхой асуулт, demo, blocker бэлтгэх",
          "Асуултгүй очих",
          "Зөвхөн танилцуулга үзүүлэх"
        ],
        "answer": 0,
        "explanation": "Тодорхой асуудалтай очвол зөвлөгөөг action болгон хувиргахад амар."
      }
    },
    {
      "num": 19,
      "week": 6,
      "date": "17-Dec",
      "day": "Пүрэв",
      "time": "16:00–17:30",
      "specialTime": true,
      "topic": "Capstone build III: System Deployment",
      "teacher": "Baigalmaa Z.",
      "desc": "Төгсөлтийн төслийн системийг сервер/клауд орчинд бүрэн байршуулах.",
      "year": 2026,
      "startsAt": "2026-12-17T16:00:00+08:00",
      "endsAt": "2026-12-17T17:30:00+08:00",
      "module": "capstone",
      "concepts": [
        "Deployment нь build → config → release → verification дараалалтай.",
        "Environment variables ба credentials-ийг нууцалж, орчны ялгааг баримтжуулна.",
        "Health check болон rollback төлөвлөгөө эвдрэлээс хурдан сэргийлнэ."
      ],
      "task": "Deploy checklist зохиож, HTTPS, endpoint, error log, rollback-ийг багтаа.",
      "quiz": {
        "question": "Deploy хийсний дараа хамгийн түрүүнд юу баталгаажуулах вэ?",
        "options": [
          "Гол хэрэглэгчийн урсгал ажиллаж буй эсэх",
          "Логоны өнгө",
          "Зөвхөн README"
        ],
        "answer": 0,
        "explanation": "Production smoke test нь гол функц үнэхээр ажиллаж буйг шалгана."
      }
    },
    {
      "num": 20,
      "week": 6,
      "date": "19-Dec",
      "day": "Бямба",
      "time": "19:00–20:30",
      "specialTime": false,
      "topic": "Capstone rehearsal: dry-run presentations and feedback",
      "teacher": "Temuulen M.",
      "desc": "Demo Day-ийн өмнөх урьдчилсан илтгэлийн сургуулилт ба багшийн зөвлөмж.",
      "year": 2026,
      "startsAt": "2026-12-19T19:00:00+08:00",
      "endsAt": "2026-12-19T20:30:00+08:00",
      "module": "capstone",
      "concepts": [
        "Dry-run нь бодит Demo Day нөхцөлд хугацаа, дарааллыг шалгах репетиц.",
        "Demo script-д асуудал → шийдэл → бодит хэрэглээ → үр дүн → дараагийн алхам орно.",
        "Интернет тасрахад offline зураг/видео эсвэл backup төлөвлөгөө хэрэгтэй."
      ],
      "task": "5 минутын demo timeline гаргаад хоёр удаа цаг хэмжиж давт.",
      "quiz": {
        "question": "Live demo тасарсан үед аль нь хамгийн хэрэгтэй вэ?",
        "options": [
          "Урьдчилан бэлтгэсэн backup demo",
          "Асуултгүй дуусгах",
          "Код шууд устгах"
        ],
        "answer": 0,
        "explanation": "Backup demo нь техникийн асуудалтай ч түүхээ дуусгахад тусална."
      }
    },
    {
      "num": 21,
      "week": 7,
      "date": "26-Dec",
      "day": "Бямба",
      "time": "09:00–17:00",
      "specialTime": true,
      "topic": "Demo Day (танхим): presentations, jury, closing, certificates",
      "teacher": "Бүх багш, шүүгчийн бүрэлдэхүүн",
      "desc": "Танхимаар төслөө шүүгчдэд танилцуулах, хаалтын үйл ажиллагаа ба сертификат гардуулах.",
      "year": 2026,
      "startsAt": "2026-12-26T09:00:00+08:00",
      "endsAt": "2026-12-26T17:00:00+08:00",
      "module": "capstone",
      "concepts": [
        "Demo Day-д шийдлийн үнэ цэнэ, нотолгоо, багийн гүйцэтгэл тод байх ёстой.",
        "Шүүгчдийн асуултад мэдэхгүй зүйлээ ил тод хэлж, дараагийн алхмаа тайлбарлана.",
        "Сайн бүтээгдэхүүн зөвхөн model биш: UX, найдвартай ажиллагаа, баримтжуулалт хамарна."
      ],
      "task": "Төслөө 90 секундын elevator pitch болгон товчлоод 3 хүнд туршиж сонсго.",
      "quiz": {
        "question": "Шүүгчдэд хамгийн ойлгомжтой танилцуулга юу вэ?",
        "options": [
          "Асуудал → шийдэл → демо → үр дүн",
          "Зөвхөн кодын хэмжээ",
          "Зөвхөн технологийн нэрс"
        ],
        "answer": 0,
        "explanation": "Энэ дараалал үнэ цэнийг тодорхой харуулдаг."
      }
    }
  ],
  "capstoneSteps": [
    {
      "title": "Асуудал ба хэрэглэгч",
      "hint": "Шийдэх асуудал, зорилтот хэрэглэгч, амжилтын хэмжүүрээ тодорхойл",
      "date": "2026-12-02",
      "lesson": 12
    },
    {
      "title": "Төслийн төлөвлөгөө",
      "hint": "3–4 хүний баг, үүрэг хуваарилалт, Project Charter, MVP хүрээ",
      "date": "2026-12-02",
      "lesson": 12
    },
    {
      "title": "Ажилладаг prototype",
      "hint": "Гол хэрэглэгчийн урсгал ажиллаж, ментороос feedback авсан байх",
      "date": "2026-12-14",
      "lesson": 17
    },
    {
      "title": "Review ба сайжруулалт",
      "hint": "Feedback, тест, blockers, багийн дараагийн алхам",
      "date": "2026-12-16",
      "lesson": 18
    },
    {
      "title": "Deployment & README",
      "hint": "Live URL, ашиглах заавар, нууц түлхүүрийн хамгаалалт",
      "date": "2026-12-17",
      "lesson": 19
    },
    {
      "title": "Dry-run & Demo Day",
      "hint": "5 минутын demo, backup хувилбар, шүүгчийн Q&A",
      "date": "2026-12-26",
      "lesson": 21
    }
  ]
};
