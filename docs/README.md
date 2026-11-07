# AI100 Academy 3.0

Үнэгүй хувийн AI сургалтын workspace. 21 хичээл, тэмдэглэл, сорил, ахиц, Capstone төлөвлөгөө, prompt бэлтгэгч, 25 минутын таймер.

## Технологийн шийдэл

HTML5, modern JavaScript, CSS Grid, native dialog, localStorage, Service Worker, Web App Manifest. Runtime npm dependency, backend, API key шаардлагагүй. Сайтын хэмжээнд framework нэмэх нь зайлшгүй биш: одоогийн контент, өгөгдлийн нийцлийг хадгалж, build/dependency засварын зардлыг багасгасан. PWA офлайн кэш нь эхний амжилттай online ачаалалтын дараа ажиллана; суулгах боломж нь хөтчөөс хамаарна. Таймер нь цонх нээлттэй үед ажиллаж, tab солиход хугацааг timestamp-аар тооцно; reload хийвэл дахин эхэлнэ.

## GitHub Pages дээр $0 байршуулалт

1. GitHub дээр `ai100-academy` нэртэй **public** repository үүсгэ.
2. Энэ ZIP-ийн `` доторх файлуудыг repository-ийн **root** хэсэгт байрлуул. `index.html` root-д байх ёстой. `.nojekyll` файлыг хамт оруул.
3. Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/(root)` → Save.
4. Pages-ийн харуулсан URL-аар нээ. Custom domain авах шаардлагагүй.
5. Шинэчлэлт хийхдээ ижил repository, URL дээр файлуудаа шинэчил. Service worker өөрчлөгдвөл `sw.js` дахь CACHE хувилбарыг өсгө; бүх хуучин цонхыг хааж дахин нээ.

Энэ багц нь шууд branch publishing ашиглана. npm install, Actions workflow тохируулах шаардлагагүй. Public repository дээр сайт болон сургалтын материал нийтэд харагдана; хувийн note нь repository-д бичигдэхгүй. Student Pack дууссан ч public Pages нь одоогийн Free төлөвлөгөөний хүрээнд ажиллах боломжтой. Үйлчилгээний нөхцөл өөрчлөгдөж болно.

## Өгөгдөл ба v2 шилжилт

- `ai100_learning_hub_v2` түлхүүрийг зориуд хадгалсан. Ижил origin / браузерт v2-ийн тэмдэглэл, ахиц шууд уншигдана.
- Өөр URL, өөр браузер, шинэ компьютер: хуучин сайтаас **Миний тэмдэглэл → Backup татах**, шинэ сайтаас **Backup оруулах**.
- JSON backup нь тэмдэглэл, ахиц, quiz, Capstone-ыг агуулна. Markdown нь зөвхөн тэмдэглэлийн унших/засах хувилбар бөгөөд JSON импорт орлохгүй.
- Импорт одоогийн өгөгдлийг солино. Эхлээд backup тат. Зөвхөн таньдаг backup файлаа ашигла.
- localStorage нь cloud sync эсвэл encryption биш. Browser data цэвэрлэх, private browsing, төхөөрөмж эвдрэхэд алдагдаж болно. Долоо хоног бүр JSON нөөцөл.
- AI Mentor нь prompt үүсгэгч. LLM API дуудлага, token төлбөр байхгүй. Prompt-оо өөрийн ChatGPT эсвэл сонгосон AI чат руу хуулна.
- Нууц key, password, хувийн мэдээлэл source кодонд оруулахгүй.

## GitHub Student Pack-ийг үр дүнтэй ашиглах

- GitHub: source control, issue/task tracking, Pages hosting.
- Student Pack доторх Copilot / JetBrains эрхийн одоогийн боломжийг https://education.github.com/pack/ дээр өөрийн бүртгэлээр шалгаж идэвхжүүл. Эдгээр нь хөгжүүлэх хэрэгсэл; сайт ажиллах урьдчилсан нөхцөл биш.
- PyCharm / WebStorm-доо энэ folder-ийг нээгээд засварлана. AI-аас жижиг өөрчлөлт хүсэж, diff шалгаад өөрөө турш.
- Хугацаатай cloud кредит, үнэгүй жилийн domain-ийг үндсэн сайтын зайлшгүй хамаарал болгоогүй. Сервер эсвэл cloud sync хэрэгтэй болсон үед тусдаа шийднэ.

## macOS дээр ажиллуулах

```bash
cd docs
python3 -m http.server 8000
```

http://localhost:8000 хаягаар нээ. Stop: Control+C. `file://`-оор нээхэд offline worker ажиллахгүй.

## Шалгах жагсаалт

- Хичээл нээх, note бичих, reload дараа хадгалагдсан эсэх.
- Хичээл дуусгах/буцаах, сорил, хайлт, week/status filter.
- JSON backup татаж шинэ browser profile-д импортлох.
- Офлайнаар хуудас дахин нээх (эхлээд online бүрэн ачаалсан байх).
- 390px, 768px, desktop өргөн; keyboard Tab / Escape.
- Хадгалалтын quota/permission алдаа үед save status үнэн зөв эсэх.

Хичээлийн анхны агуулгыг v2 багцаас хадгалсан. Нэмэлт дасгал, сорил нь өөрөө суралцах материал; багшийн албан ёсны үнэлгээ биш. Хичээлийн цагийг зохион байгуулагчийн шинэчилсэн хуваарьтай тулгана.

## Албан эх сурвалж (2026-11-07 шалгасан)

- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://education.github.com/pack/
