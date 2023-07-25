(function (e) {
  function t(t) {
    for (
      var o, s, r = t[0], c = t[1], l = t[2], u = 0, p = [];
      u < r.length;
      u++
      )
      (s = r[u]),
        Object.prototype.hasOwnProperty.call(i, s) && i[s] && p.push(i[s][0]),
        (i[s] = 0);
      for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
      d && d(t);
      while (p.length) p.shift()();
      return n.push.apply(n, l || []), a();
      }
      function a() {
      for (var e, t = 0; t < n.length; t++) {
      for (var a = n[t], o = !0, r = 1; r < a.length; r++) {
        var c = a[r];
        0 !== i[c] && (o = !1);
      }
      o && (n.splice(t--, 1), (e = s((s.s = a[0]))));
      }
      return e;
      }
      var o = {},
      i = { app: 0 },
      n = [];
      function s(t) {
      if (o[t]) return o[t].exports;
      var a = (o[t] = { i: t, l: !1, exports: {} });
      return e[t].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
      }
      (s.m = e),
      (s.c = o),
      (s.d = function (e, t, a) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
      }),
      (s.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (s.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          s.d(
            a,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return a;
      }),
      (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
      }),
      (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (s.p = "/");
      var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
      c = r.push.bind(r);
      (r.push = t), (r = r.slice());
      for (var l = 0; l < r.length; l++) t(r[l]);
      var d = c;
      n.push([0, "chunk-vendors"]), a();
      })({
      0: function (e, t, a) {
      e.exports = a("56d7");
      },
      "020b": function (e, t, a) {},
      "0380": function (e, t, a) {
      "use strict";
      a("21a1");
      },
      "06ab": function (e, t, a) {
      "use strict";
      a("1c66");
      },
      "08e0": function (e) {
        e.exports = JSON.parse(
        '{"about":{"dev":"Deweloper i projektant","devName":"Manuel Ernesto García","email":"E-mail","inCuba":"na Kubie","madeWith":"Wykonane z","site":"Odwiedź stronę","sponsors":"Sponsorzy","version":"Wersja","about":"O","blog":"Blog","collaborators":"Współpracownicy","contributors":"Współtwórcy","desc":"ImPlanner to minimalistyczny planer tygodniowy skoncentrowany na prywatności.","license":"Licencja"},"donate":{"address":"Adres zamieszkania","buyMeACoffee":"Kup mi kawę","buyMeACryptoCoffee":"Kup mi kawę kryptograficzną","comment":"Wyślij opinię","contribute":"Przyczynić się","contributeSponsor":"Wkład / Sponsor","copiedAddres":"Skopiowany adres !!!","copy":"Kopiuj","crypto":"Cripto","cryptocurrencies":"kryptowaluty","goBack":"Wróć","paymentType":"Typ płatności","rate":"Oceń nas","share":"Dzielić","shareWithFriends":"Podziel się z przyjaciółmi","translate":"Tłumaczyć","shareMessage":"Planuję mój tydzień z ImPlanner, darmowym, minimalistycznym tygodniowym planerem skoncentrowanym na prywatności i myślę, że Tobie też się spodoba. \\nSprawdź to!","supportMessage1":"ImPlanner to darmowa aplikacja wspierana przez użytkowników takich jak Ty! \\nJeśli uważasz, że ImPlanner jest przydatne, rozważ wsparcie nas w każdy możliwy sposób. \\nTwoje wsparcie robi różnicę. \\nDziękujemy za korzystanie z ImPlanner.","supportMessage2":"Twoje wsparcie robi różnicę. \\nDziękujemy za wsparcie ImPlanner 😊","supportUs":"Wesprzyj nas","splashMessage":"Podoba Ci się ImPlanner? \\nProjekt można wesprzeć tutaj!"},"generatedData":{"data10":"Napoje bezalkoholowe","data11":"Kliknij trzy kropki, aby zobaczyć więcej szczegółów na temat tego zadania","data12":"Szybko otwórz szczegóły zadania środkowym kliknięciem myszy","data2":"Kliknij, aby zakończyć zadanie","data3":"Kliknij dwukrotnie, aby edytować zadanie","data4":"Najedź myszą, aby wyświetlić resztę tekstu tego zadania.","data5":"Możesz przeciągać i upuszczać zadania","data6":"To jest lista niestandardowa","data7":"Możesz tworzyć nowe listy z paska bocznego","data8":"Możesz je również ukryć w menu ustawień","data9":"Jabłka","desc1":"Tutaj możesz ustawić swoje notatki dotyczące tego zadania. \\nKliknij dwukrotnie, aby edytować notatki.","list1":"Lista niestandardowa","list2":"Lista zakupów","list3":"Pomysły","subtask1":"jestem podzadaniem","subtask2":"Kliknij, aby zakończyć podzadanie"},"notifications":{"noPendingTasksToday":"Nie masz dzisiaj zaplanowanych zadań.","pendingTasksToday":"Masz dzisiaj {0} zaplanowanych zadań.","pendingTasksYesterday":"Masz wczoraj {0} oczekujących zadań.","pendingTasksYesterdayAndToday":"Masz {0} oczekujących zadań wczoraj i {1} zaplanowanych zadań na dzisiaj."},"settings":{"backup":"Utworzyć kopię zapasową:","calendar":"Kalendarz","checkUpdates":"Sprawdź aktualizacje podczas uruchamiania","clearData":"Wyczyść dane","clearDataDetails":"Czy na pewno chcesz usunąć wszystkie dane aplikacji? \\nTo działanie jest nieodwracalne.","columns":"Kolumny kalendarza","customLists":"Listy niestandardowe","darkTheme":"Ciemny schemat","data":"Dane","display":"Wyświetlacz","export":"Eksport","general":"Ogólny","goToNewDomain":"Zmieniamy witrynę ImPlanner na nową domenę, a ta zostanie wycofana 1 kwietnia 2022 roku. Aby zachować swoje dane, musisz je wyeksportować z tej domeny, a następnie zaimportować w nowej domenie (Z menu konfiguracyjnego). \\nPamiętaj, że jeśli nie przeniesiesz danych, utracisz informacje, które Twoja przeglądarka przechowuje w tej domenie. \\nPrzepraszamy za wszelkie niedogodności z tym związane.","gotoNewDomainBtn":"Przejdź do nowej domeny","import":"Import","invalidFile":"Niepoprawny plik","language":"Język","notificationOnStartup":"Powiadomienie o uruchomieniu","notificationSound":"Dźwięk powiadomienia","notifications":"Powiadomienia","openOnStartup":"Otwórz przy starcie","settings":"Ustawienia","zoom":"Powiększenie","exportData":"Eksportuj dane","importData":"Zaimportować dane","moveOldTasks":"Automatycznie przenoś stare zadania","runInBackground":"Uruchom w tle","runInBackgroundInfo":"Zezwala na działanie powiadomień przy zamkniętej aplikacji.\\n \\nTa opcja może powodować problemy w niektórych wersjach systemu macOS.","importing":"Importowanie...","darkTrayIcon":"Ikona ciemnej tacy","exporting":"Eksportowanie...","darkIcon":"Ciemna ikona","lists_columns":"Kolumny list niestandardowych","reportErrors":"Wyślij raport o błędach","compactView":"Widok kompaktowy","behavior":"Zachowanie","startCalendarYesterday":"Kalendarz zaczął się wczoraj","notificationIndicator":"Wskaźnik powiadomień","autoReorderTasks":"Automatycznie zmieniaj kolejność zadań","moveCompletedTaskToBottom":"Przenieś ukończone zadania na dół","clear":"Usuwać","fullscreenToDoModal":"Szczegóły zadań na pełnym ekranie","moveCompletedSubTaskToBottom":"Przenieś ukończone zadania podrzędne na dół","weekStartOnMonday":"Tydzień zaczyna się w poniedziałek"},"tips":{"back":"Poprzednia wskazówka","next":"Następna wskazówka","tip1":"Możesz utworzyć nowe zadanie, klikając dowolny obszar list.","tip13":"ImPlanner przechowuje informacje na Twoim komputerze. \\nJeśli chcesz zmienić komputer lub przeglądarkę, pamiętaj o utworzeniu kopii zapasowej. \\nMożesz to zrobić w menu ustawień.","tip14":"Kliknij i przeciągnij środkowy podział, aby zmienić wysokość kalendarza i list niestandardowych. \\nKliknij dwukrotnie, aby przywrócić rozmiar.","tip15":"Liczbę kolumn i powiększenie aplikacji możesz zmienić w panelu konfiguracyjnym.","tip16":"Kliknij trzy kropki w zadaniach, aby zobaczyć szczegóły.","tip17":"Możesz przeciągnąć i upuścić podzadanie w oknie szczegółów zadania.","tip18":"W górnej części okna szczegółów zadania możesz zmienić dzień lub listę zadania.","tip2":"Zadania można przeciągać i upuszczać z jednej listy na drugą lub zmieniając ich kolejność.","tip3":"Aby edytować nazwę listy lub zadania, kliknij je dwukrotnie.","tip4":"Po prawej stronie daty każdej listy znajduje się ikona Drzemka, która umożliwia wysłanie wszystkich oczekujących zadań z bieżącej listy na następny dzień.","tip5":"Jeśli nie zamierzasz korzystać z list niestandardowych, możesz je ukryć w menu konfiguracyjnym.","tip6":"Kalendarz na pasku bocznym umożliwia szybkie przewijanie do daty.","tip7":"Umieszczając kursor na nazwie listy, pojawi się ikona Zaznacz wszystko, która pozwala zaznaczyć wszystkie zadania, które zawiera lista.","tip8":"Możesz utworzyć nową listę niestandardową za pomocą przycisku Dodaj nową listę znajdującego się na panelu bocznym.","tip9":"Przycisk Start umieszcza Cię w bieżącym dniu.","tips":"Porady"},"todoDetails":{"addSubTask":"Dodaj podzadanie","cancel":"Anulować","copiedTaskToClipboard":"Tekst skopiowany do schowka !!!","daily":"Codzienny","done":"Gotowe","duplicate":"Duplikować","indefinitely":"W sposób nieokreślony","interval":"Interwał:","markdown":"Obsługiwany styl przecen","monthly":"Miesięczny","noRepeat":"Bez powtórzeń","notes":"Uwagi","occurrences":"Zdarzenia","recurrentTaskRemoved":"Usunięto zadanie cykliczne","split":"Rozdzielać","subtasks":"Podzadania","taskDuplicated":"Zadanie zduplikowane !!!","taskRemoved":"Zadanie usunięte !!!","taskTitle":"Tytuł zadania","untilDate":"Do daty","weekly":"Co tydzień","yearly":"Rocznie","actions":"działania","alarm":"Alarm","close":"Blisko","color":"Kolor","time":"Czas","weekdays":"pon-pt","customWeekdays":"Niestandardowe dni tygodnia"},"ui":{"calendar":"Kalendarz","cancel":"Anulować","changeLog":"Dziennik zmian","compatible":"Przepraszamy, ImPlanner nie jest kompatybilny z twoją przeglądarką internetową. \\nSpróbuj go zaktualizować lub użyj innego.","completeAll":"Ukończ wszystko","download":"(Ściągnij)","mobileWarning":"ImPlanner to aplikacja desktopowa i na razie nie jest gotowa do wyświetlania w tej rozdzielczości. \\n:(","newCustomList":"Nowa lista niestandardowa","newVersionAvailable":"Nowa wersja dostępna","postpone":"Odłożyć","recurringTasks":"Zadania cykliczne","remove":"Usuwać","removeAll":"Usuń wszystko","removeList":"Usuń listę","rmList":"Usuń listę","rmListConfirm":"Czy na pewno chcesz usunąć listę?","seeChanges":"(Zobacz Zmiany)","softwareUpdated":"Aktualizacja oprogramowania","splashSub":"Minimalistyczny terminarz tygodniowy","sponsoredBy":"Sponsorowane przez","today":"Dziś","updateAll":"Aktualizuj wszystko","reorderCustomLists":"Zmień kolejność list niestandardowych","ok":"Ok","removeRepeatingTask":"Usuń powtarzające się zadanie","repeatingTaskRemoveConfirm":"Czy na pewno chcesz usunąć to cykliczne zadanie?","undo":"Cofnij","clear":"Jasne","clearList":"Czysta lista","clearListConfirm":"Czy na pewno chcesz wyczyścić listę?","maximizeCalendarPanel":"Maksymalizuj panel kalendarza","maximizeListPanel":"Panel Maksymalizuj listę","restorePanel":"Przywróć rozmiar panelu","reorder":"Zmień kolejność","open":"otwarty","quit":"Zrezygnować","copyTasks":"Kopiuj zadania","Frecuency":"Częstotliwość","task":"Zadanie","newTask":"Nowe zadanie"},"welcome":{"allReady":"Wszystko gotowe","allReadySub":"Jeśli masz jakieś pytania, możesz znaleźć wskazówki na pasku bocznym","allReadyText":"Wszystko jest gotowe, abyś mógł cieszyć się ImPlanner.","back":"Poprzedni","next":"Następny","privacy":"Prywatność","privacySub":"W przypadku błędów w aplikacji możesz wysłać raport o błędach do programisty.","privacyText":"Wszystkie Twoje dane są przechowywane na Twoim komputerze. \\nJeśli musisz zmienić komputer lub przeglądarkę, pamiętaj o utworzeniu kopii zapasowej.","ready":"gotowy","theme":"Motyw","themeText":"Możesz wybrać jasny lub ciemny motyw zgodnie z własnymi preferencjami.","welcome":"Witamy w ImPlanner","welcomeText":"Minimalistyczny Tygodniowy Menedżer Zadań skoncentrowany na prywatności. \\nAby rozpocząć, wybierz swój język."}}'
        );
        },
        "094e": function (e, t, a) {
        "use strict";
        a("020b");
        },
        1200: function (e) {
        e.exports = JSON.parse(
        '{"settings":{"settings":"الإعدادات","language":"اللغة","customLists":"القوائم المخصصة","darkTheme":"الوضع الليلي","data":"البيانات","import":"استيراد","export":"تصدير","backup":"نسخ احتياطي:","invalidFile":"ملف غير صالح","checkUpdates":"تحقق من وجود تحديثات عند التشغيل","calendar":"التقويم","zoom":"تقريب","columns":"أعمدة التقويم","goToNewDomain":"نحن بصدد تغيير موقع ImPlanner على الويب إلى مجال جديد وسيتم إيقاف هذا النطاق في الأول من أبريل 2022. من أجل الاحتفاظ ببياناتك ، يجب عليك تصديرها من هذا المجال ثم استيرادها في المجال الجديد (من قائمة التكوين). ضع في اعتبارك أنك إذا لم تقم بترحيل البيانات ، فستفقد المعلومات التي يخزنها متصفحك في هذا المجال. آسف علي ازعاج قد يسببه هذا.","gotoNewDomainBtn":"انتقل إلى مجال جديد","general":"عام","notifications":"إشعارات","display":"عرض","openOnStartup":"افتح عند بدء التشغيل","notificationOnStartup":"إعلام عند بدء التشغيل","notificationSound":"صوت الإشعار","clearData":"امسح البيانات","clearDataDetails":"هل أنت متأكد أنك تريد حذف جميع بيانات التطبيق؟ هذا العمل لا رجوع فيه.","exportData":"تصدير البيانات","importData":"بيانات الاستيراد","moveOldTasks":"نقل المهام القديمة تلقائيًا","runInBackground":"تشغيل في الخلفية","runInBackgroundInfo":"يسمح للإخطارات بالعمل مع التطبيق مغلق.\\n \\nقد يحتوي هذا الخيار على مشكلات في بعض إصدارات macOS.","importing":"استيراد ...","darkTrayIcon":"أيقونة صينية داكنة","exporting":"تصدير ...","darkIcon":"أيقونة الظلام","lists_columns":"قوائم أعمدة مخصصة","reportErrors":"تخزين","compactView":"عرض مضغوط","behavior":"سلوك","startCalendarYesterday":"التقويم يبدأ أمس","notificationIndicator":"مؤشر الإخطار","autoReorderTasks":"إعادة ترتيب المهام تلقائيًا","moveCompletedTaskToBottom":"انقل المهام المكتملة إلى الأسفل","clear":"يمسح","fullscreenToDoModal":"تفاصيل المهام في وضع ملء الشاشة","moveCompletedSubTaskToBottom":"انقل المهام الفرعية المكتملة إلى الأسفل","weekStartOnMonday":"يبدأ الأسبوع يوم الاثنين"},"donate":{"contribute":"ساهِم","contributeSponsor":"المساهمة / الراعي","comment":"أخبرنا برأيك","crypto":"Cripto","goBack":"عودة","paymentType":"طريقة الدفع","address":"العنوان","copy":"نسخ","copiedAddres":"تم نسخ العنوان !!!","share":"مشاركة","rate":"قيمنا","cryptocurrencies":"العملات المشفرة","buyMeACoffee":"Buy Me A Coffee","buyMeACryptoCoffee":"Buy Me A Crypto Coffee","translate":"Translate","shareMessage":"أقوم بجدولة أسبوعي معImPlanner ، مخطط أسبوعي بسيط يركز على الخصوصية وأعتقد أنك ستحبه أيضًا. \\nتحقق من ذلك!","shareWithFriends":"شارك مع الاصدقاء","supportMessage2":"دعمك يصنع الفارق \\nشكرا لدعمك ImPlanner 😊","supportMessage1":"ImPlanner هو تطبيق مجاني يدعمه مستخدمون مثلك! \\nإذا وجدت ImPlanner مفيدة ، فيرجى التفكير في دعمنا بأي طريقة ممكنة. \\nدعمك يصنع الفارق \\nشكرا لاستخدام ImPlanner.","supportUs":"ادعمنا","splashMessage":"هل تستمتع بـ ImPlanner؟ \\nيمكنك دعم المشروع هنا!"},"about":{"about":"حول التطبيق","madeWith":"صنع بالـ","inCuba":"في كوبا","dev":"المطور والمصمم","devName":"Manuel Ernesto García","version":"الإصدار","desc":"ImPlanner هو مخطط أسبوعي بواجهة مبسطة يركز على خصوصيتك.","site":"زُر الموقع الإلكتروني","contributors":"المساهمون","sponsors":"الرعاة","collaborators":"المتعاونون","email":"بريد الالكتروني","blog":"مدونة","license":"رخصة"},"generatedData":{"data2":"أُنقر لإكمال المهمة","data3":"أُنقر مرتين لتعديل المهمة","data4":"عيّن بالمؤشر فوق الواجب لإظهار باقي النص الخاص به.","data5":"يمكنك سحب وإقلات المهام","data6":"هذه قائمة مخصصة","data7":"يمكنك إنشاء قوائم جديدة من الشريط الجانبي","data8":"يمكنك أيضًا إخفائهم من الإعدادات","data9":"تفاح","data10":"مشروبات خفيفة","list1":"قائمة مخصصة","list2":"قائمة التسوق","list3":"أفكار","data11":"أنقر على الثلاث نقاط بجانب المهمة ﻹظهار معلومات أكثر عنها","data12":"افتح تفاصيل المهمة بسرعة باستخدام النقر بالماوس الأوسط","subtask1":"أنا واجب فرعي","subtask2":"أُنقر ﻹكمال المهمة الفرعية","desc1":"هنا يمكنك وضع ملاحظاتك عن هذه المهمة، أُنقر مرتين لتعديل ملاحظاتك."},"tips":{"tips":"نصائح","next":"النصيحة التالية","back":"النصيحة السابقة","tip1":"يمكنك إنشاء مهمة جديد عن طريق النقر في أي مكان داخل القائمة.","tip2":"يمكنك سحب المهام من قائمة لأخرى وتغيير ترتيبهم.","tip3":"لتعديل اسم قائمة أو مهمة ما, أنقر نقرة مزدوجة.","tip4":"على يمين التاريخ لكل قائمة، يوجد زر التأجيل الذي يتيح لك تأجيل كل مهام اليوم المتبقية لليوم التالي.","tip5":"إن لم تُرِد استخدام القوائم المخصصة, يمكنك إخفائهم في الإعدادات.","tip6":"التقويم في الشريط الجانبي يتيح لك إمكانية الوصول لتاريخ معين بسرعة.","tip7":" عند وضع مؤشر الفأرة على اسم القائمة، سيظهر زر يتيح لك تحديد كل المهام في القائمة.","tip8":"يمكنك إنشاء قائمة مخصصة جديدة من الزر في الشريط الجانبي.","tip9":"زر البداية ينقلك إلى اليوم الحالي.","tip13":"يخزن هذا التطبيق البيانات على جهازك. إن أردت تغيير جهازك أو متصفحك, تذكر أن تنشئ نسخة احتياطية من الإعدادات.","tip14":"يمكنك سحب أطراف القوائم الجانبية لتغيير حجمها. أنقر مرتين عليها ﻹعادتها للحجم الطبيعي.","tip15":"يمكنك تغيير عدد الأعمدة ومقدار التقريب في صفحة الإعدادات.","tip16":"اضغط على النقاط الثلاث على كل مهمة لرؤية تفاصيلها.","tip17":"يمكنك سحب وإقلات المهام الفرعية داخل كل مهمة.","tip18":"يمكنك تغيير اليوم أو القائمة التي تتبع لها المهمة من أعلى قائمة تفاصيل المهمة."},"welcome":{"next":"التالي","back":"السابق","ready":"مستعد","allReady":"كل شيء جاهز","allReadyText":"كل شيء جاهز حتى تستمتع بـ ImPlanner.","allReadySub":"في حال وجود أي سؤال، ستجد النصائح في الشريط الجانبي","welcome":"مرحبا بك في ImPlanner","welcomeText":"المخطط الأسبوعي المبسط الذي يركز على خصوصيتك. قبل أن تبدأ، اختر لغتك.","privacy":"الخصوصية","privacyText":"يتم تخزين جميع البيانات الخاصة بك على جهاز الكمبيوتر الخاص بك. \\nإذا كنت بحاجة إلى تغيير جهاز الكمبيوتر أو المتصفح ، فتذكر إنشاء نسخة احتياطية.","privacySub":"في حالة وجود أخطاء في التطبيق ، يمكنك إرسال تقرير بالأخطاء إلى المطوّر.","theme":"السمة","themeText":"يمكنك الاختيار بين الوضع الليلي والعادي في الإعدادات."},"ui":{"rmList":"حذف القائمة","rmListConfirm":"هل أنت متأكد من أنك تريد حذف هذه القائمة؟","cancel":"إلغاء","remove":"حذف","splashSub":"مخطط أسبوعي مبسط","mobileWarning":"ImPlanner هو تطبيق لسطح المكتب فقط حاليًا ومازال غير مستعد ليتم عرضه في هذه الدقة. :(","today":"اليوم","calendar":"التقويم","newCustomList":"قائمة مخصصة جديدة","softwareUpdated":"تم تحديث التطبيق","seeChanges":"(عرض التغييرات)","changeLog":"سجل التغييرات","compatible":"عذرًا، ImPlanner غير متوافق مع متصفحك، قم بتحديثه أو جرب متصفح آخر.","removeList":"احذف القائمة","completeAll":"أكمل الكل","postpone":"تأجيل","newVersionAvailable":"هناك إصدار جديد متاح","download":"(تنزيل)","sponsoredBy":"بدعمٍ من","recurringTasks":"المهام المتكررة","removeAll":"حذف الكل","updateAll":"تحديث الجميع","reorderCustomLists":"إعادة ترتيب القوائم المخصصة","ok":"موافق","removeRepeatingTask":"إزالة تكرار المهمة","repeatingTaskRemoveConfirm":"هل أنت متأكد أنك تريد حذف هذه المهمة المتكررة؟","undo":"الغاء التحميل","clear":"صافي","clearList":"لائحة خالية","clearListConfirm":"هل أنت متأكد أنك تريد مسح القائمة؟","maximizeCalendarPanel":"تكبير لوحة التقويم","maximizeListPanel":"تكبير لوحة القائمة","restorePanel":"استعادة حجم اللوحة","reorder":"إعادة ترتيب","open":"فتح","quit":"يترك","copyTasks":"نسخ المهام","Frecuency":"الطموح","task":"مهمة","newTask":"مهمة جديدة"},"todoDetails":{"taskTitle":"عنوان الواجب","notes":"الملاحظات","markdown":"صيغة مارك داون (Markdown) مدعومة","addSubTask":"أضف مهمة فرعية","copiedTaskToClipboard":"Text Copied to Clipboard !!!","taskRemoved":"Task Removed !!!","taskDuplicated":"Task Duplicated !!!","duplicate":"Duplicate","actions":"أجراءات","alarm":"إنذار","cancel":"يلغي","close":"قريب","color":"اللون","daily":"اليومي","done":"فعله","indefinitely":"إلى أجل غير مسمى","interval":"فترة:","monthly":"شهريا","noRepeat":"لا تكرار","occurrences":"حوادث","recurrentTaskRemoved":"تمت إزالة المهمة المتكررة","split":"انشق، مزق","subtasks":"المهام الفرعية","time":"زمن","untilDate":"حتى تاريخ","weekly":"أسبوعي","yearly":"سنوي","weekdays":"من الإثنين إلى الجمعة","customWeekdays":"أيام الأسبوع المخصصة"},"notifications":{"noPendingTasksToday":"ليس لديك مهام مجدولة اليوم.","pendingTasksYesterday":"لديك {0} مهمة معلقة أمس.","pendingTasksToday":"لديك {0} مهمة مجدولة اليوم.","pendingTasksYesterdayAndToday":"لديك {0} مهمة معلقة أمس و {1} مهمة مجدولة اليوم."}}');
        },
      1600: function (e, t, a) {},
      1799: function (e, t, a) {},
      "1c66": function (e, t, a) {},
      2073: function (e, t, a) {},
      2105: function (e, t, a) {},
      "21a1": function (e, t, a) {},
      "21b0": function (e, t, a) {},
      "23fa": function (e, t, a) {
      "use strict";
      a("f1de");
      },
      2665: function (e, t, a) {
      "use strict";
      a("c171");
    },
    "26ad": function (e) {
    e.exports = JSON.parse(
    '{"settings":{"settings":"設定","language":"言語","customLists":"カスタムリスト","darkTheme":"ダークテーマ","darkTrayIcon":"ダークトレイアイコン","darkIcon":"暗いアイコン","data":"データ","import":"インポート","export":"エクスポート","backup":"バックアップ","invalidFile":"無効ファイル","checkUpdates":"起動時にアップデートを確認","calendar":"カレンダー","zoom":"ズーム","columns":"カレンダーの列","lists_columns":"カスタム リスト列","goToNewDomain":"私たちは ImPlanner サイトを別の新しいドメインに移行しようとしています。このドメインはもうすぐ運用停止します。 新しいドメインから ImPlanner をアクセスしてください。 データを移行したい場合、ここでデータをエクスポートして、設定メニューより他のドメインへインポートをします。 ご不便をおかけしますが、ご了承ください。","gotoNewDomainBtn":"新しいドメインに移動","general":"全般的","notifications":"通知","display":"画面","openOnStartup":"起動時に開く","notificationOnStartup":"起動時の通知","notificationSound":"通知音","clearData":"クリアデータ","exportData":"データのエクスポート","importData":"データのインポート","clearDataDetails":"すべてのアプリデータを削除してもよろしいですか？\\nこのアクションは元に戻せません。","runInBackground":"バックグラウンドで実行","runInBackgroundInfo":"アプリを閉じた状態で通知を機能させる。\\n \\nこのオプションは、一部のmacOSバージョンで問題が発生する可能性があります。","moveOldTasks":"古いタスクを自動的に移動する","importing":"インポート中...","exporting":"エクスポート中...","reportErrors":"エラー レポートの送信","compactView":"コンパクト ビュー","behavior":"行動","startCalendarYesterday":"昨日から始まるカレンダー","notificationIndicator":"通知インジケータ","autoReorderTasks":"タスクを自動的に並べ替える","moveCompletedTaskToBottom":"完了したタスクを一番下に移動","clear":"消去","fullscreenToDoModal":"全画面でのToDo詳細","moveCompletedSubTaskToBottom":"完了したサブタスクを一番下に移動します","weekStartOnMonday":"週は月曜日から始まります"},"donate":{"contribute":"コントリビューション","contributeSponsor":"寄稿/スポンサー","supportMessage1":"ImPlanner は、あなたのようなユーザーが支持する無料のアプリケーションです! \\nImPlanner が役立つと思われる場合は、できる限りのサポートをご検討ください。\\nあなたのサポートが違いを生みます。\\nいつもImPlannerをご利用いただきありがとうございます。","supportMessage2":"あなたのサポートは違いをもたらします。 \\nImPlanner😊をサポートしてくれてありがとう","comment":"コメント","crypto":"暗号化","goBack":"戻る","paymentType":"支払種類","address":"住所","copy":"コピー","copiedAddres":"住所はコピーされました","share":"シェア","shareWithFriends":"友達と分け合う","rate":"私たちを評価してください","cryptocurrencies":"仮想通貨","buyMeACoffee":"私にコーヒーを奢る","buyMeACryptoCoffee":"私にいっぱいのコーヒーを奢る","translate":"翻訳","shareMessage":"私は、プライバシーに焦点を当てた無料のミニマリストウィークリープランナーであるImPlannerを使って週をスケジュールしていますが、あなたもきっと気に入ると思います。\\n見てみな！","supportUs":"私たちを応援してください","splashMessage":"ImPlannerを楽しんでいますか？\\nここでプロジェクトをサポートできます！"},"about":{"about":"私たちについて","madeWith":"使う","inCuba":"キューバーにいる","dev":"開発者と設計者","devName":"Manuel Ernesto García","version":"バージョン","desc":"ImPlanner はプライバシーに焦点を当てたミニマリストな週間タスク管理アプリです。","site":"サイト","contributors":"コントリビューション","sponsors":"スポンサー","collaborators":"協力者","email":"Eメール","blog":"ブログ","license":"ライセンス"},"generatedData":{"data2":"クリックしてタスクを完了される","data3":"ダブルクリックでタスクを編集する","data4":"マウスカーソルを置くことでタスクの詳細を表示する","data5":"ドラッグしてタスクを移動する","data6":"これはカスタムタスクリストです","data7":"サイドバーから新しいリストを作成できます","data8":"設定メニューで非表示にすることもできます","data9":"りんご","data10":"飲み物","data11":"3個の点をクリックしてタスクの詳細情報を編集する","data12":"マウスの中クリックでタスクの詳細をすばやく開く","list1":"カスタムリスト","list2":"買い物リスト","list3":"アイディア","subtask1":"私はサブタスク","subtask2":"クリックしてサブタスクを完了される","desc1":"ここの設定からタスクについて注釈を追加する。ダブルクリックで注釈を編集する。"},"tips":{"tips":"ヒント","next":"次のヒント","back":"前のヒント","tip1":"リストの任意の領域をクリックして、新しいタスクを作成できます。","tip2":"タスクをあるリストから別のリストにドラッグアンドドロップしたり、順序を変更したりできます。","tip3":"リストまたはタスクの名前を編集するには、それをダブルクリックします。","tip4":"各リストの日付の右側にはスヌーズアイコンがあり、現在のリストの保留中のタスクを翌日に送信できます。","tip5":"カスタムリストを使用する予定がない場合は、構成メニューで非表示にすることができます。","tip6":"サイドバーのカレンダーを使用すると、日付まですばやくスクロールできます。","tip7":"リスト名にカーソルを合わせると、[すべてマーク]アイコンが表示され、リストに含まれるすべてのタスクにマークを付けることができます。","tip8":"サイドパネルにある[新しいリストの追加]ボタンを使用して、新しいカスタムリストを作成できます。","tip9":"[スタート]ボタンを押すと、当日が表示されます。","tip13":"ImPlannerはローカルに情報を保存します。コンピューターやブラウザーを変更する場合は、バックアップを作成することを忘れないでください。これは設定メニューで行うことができます。","tip14":"中央のセクションをクリックしてドラッグし、カレンダーとカスタムリストの高さを調整します。それをダブルクリックしてサイズを復元します。","tip15":"構成パネルで、アプリケーションの列数とスケーリングを変更できます。","tip16":"タスクの3つのドットをクリックして、詳細を表示します。","tip17":"タスクの詳細ウィンドウでサブタスクをドラッグアンドドロップできます。","tip18":"タスクの詳細ウィンドウの上部で、日付またはタスクリストを変更できます。"},"welcome":{"next":"次へ","back":"前へ","ready":"準備","allReady":"準備完了","allReadyText":"すべての準備が整い、ImPlannerを楽しむことができます。","allReadySub":"ご不明な点がございましたら、サイドバーでヒントをご覧ください。","welcome":"ImPlanner へようこそ","welcomeText":"プライバシーに焦点を当てたミニマリストな週間タスク管理アプリ。言語の選択を開始します。","privacy":"プライバシーポリシー","privacyText":"すべてのデータはコンピューターに保存されます。\\nコンピューターまたはブラウザーを変更する必要がある場合は、忘れずにバックアップを作成してください。","privacySub":"アプリでエラーが発生した場合は、エラーのレポートを開発者に送信できます。","theme":"テーマ","themeText":"好みに応じて、明るいテーマと暗いテーマのどちらかを選択できます。"},"ui":{"rmList":"リストを削除","rmListConfirm":"リストを削除してもよろしいですか","repeatingTaskRemoveConfirm":"この定期的なタスクを削除してもよろしいですか？","removeRepeatingTask":"繰り返しタスクを削除する","cancel":"キャンセル","ok":"Ok","remove":"削除","splashSub":"ミニマリストな週間タスク管理アプリ","mobileWarning":"ImPlanner はデスクトップアプリです、その解像度で表示する準備はまだできていません。 :(","today":"今日","calendar":"カレンダー","newCustomList":"新しいカスタムリスト","reorderCustomLists":"カスタムリストを並べ替える","softwareUpdated":"ソフトウエアアップデート","seeChanges":"（変更を参照）","changeLog":"変更ログ","compatible":"申し訳ありませんが、ImPlannerはお使いのWebブラウザと互換性がありません。更新するか、別のものを使用してみてください。","removeList":"リストを削除","completeAll":"すべて完了する","newTask":"新しい仕事","postpone":"延期する","newVersionAvailable":"新しいバージョンが利用可能です。","download":"（ダウンロード）","sponsoredBy":"スポンサー","updateAll":"すべて更新","removeAll":"すべて削除","recurringTasks":"定期的なタスク","undo":"元に戻す","clearList":"明確なリスト","clear":"クリア","clearListConfirm":"リストをクリアしてもよろしいですか？","reorder":"再注文","maximizeCalendarPanel":"カレンダーパネルを最大化","restorePanel":"パネルサイズを復元","maximizeListPanel":"リストパネルを最大化","open":"開ける","quit":"終了する","copyTasks":"タスクのコピー","task":"仕事","Frecuency":"周波数"},"todoDetails":{"taskTitle":"タスクタイトル","notes":"注釈","markdown":"Markdown スタイルをサポート","addSubTask":"サブタスクを追加","copiedTaskToClipboard":"テキストがクリップボードにコピーされました!!!","taskRemoved":"タスクを削除しました!!!","taskDuplicated":"タスクはコピーされました!!!","duplicate":"コピー","subtasks":"サブタスク","interval":"間隔：","indefinitely":"無期限に","occurrences":"発生","untilDate":"日付まで","done":"終わり","cancel":"キャンセル","noRepeat":"繰り返しなし","daily":"毎日","weekly":"毎週","weekdays":"月～金","monthly":"毎月","yearly":"毎年","split":"スプリット","recurrentTaskRemoved":"再発タスクが削除されました","time":"時間","alarm":"警報","color":"色","close":"近い","actions":"行動","customWeekdays":"カスタム平日"},"notifications":{"noPendingTasksToday":"今日、スケジュールされたタスクはありません。","pendingTasksYesterday":"昨日、{0}の保留中のタスクがあります。","pendingTasksToday":"今日、{0}のスケジュールされたタスクがあります。","pendingTasksYesterdayAndToday":"昨日は{0}の保留中のタスクがあり、今日は{1}のスケジュールされたタスクがあります。"}}'
    );
    },
    "27f7": function (e) {
    e.exports = JSON.parse(
    '{"settings":{"settings":"设置","language":"语言","customLists":"自定义列表","darkTheme":"深色主题","darkTrayIcon":"深色托盘图标","darkIcon":"深色图标","data":"数据","import":"导入","export":"导出","backup":"备份：","invalidFile":"无效文件","checkUpdates":"启动时检查更新","calendar":"日历","zoom":"缩放","columns":"日历栏","lists_columns":"自定义列表栏","goToNewDomain":"我们正在将 ImPlanner 网站迁移到一个新的域名，这个域名将很快停止。 请从新域名开始访问 ImPlanner。 要移动您的数据，您必须在此处将其导出，然后从配置菜单将其导入其他域。 如有不便，敬请原谅。","gotoNewDomainBtn":"转到新域名","general":"常规","notifications":"通知","display":"显示","openOnStartup":"在启动时打开","notificationOnStartup":"在启动时通知","notificationSound":"通知声音","clearData":"清除数据","exportData":"导出数据","importData":"导入数据","clearDataDetails":"您确定要删除所有应用程序数据吗？ 这个操作是不可恢复的。","runInBackground":"在后台运行","runInBackgroundInfo":"允许通知在应用关闭的情况下工作。 \\n 对于某些 macOS 版本，此选项可能存在问题。","moveOldTasks":"自动移动旧任务","importing":"正在导入...","exporting":"正在导出...","reportErrors":"发送错误报告","compactView":"紧凑视图","behavior":"行为习惯","startCalendarYesterday":"昨天开始的日历","notificationIndicator":"通知指示器","autoReorderTasks":"自动重新排列任务","moveCompletedTaskToBottom":"把已完成的任务移到底部","weekStartOnMonday":"一周从星期一开始"},"donate":{"contribute":"贡献","contributeSponsor":"贡献/赞助者","supportMessage1":"ImPlanner 是由像您这样的用户支持的免费应用程序！ 如果您喜欢 ImPlanner，确保它保持可用的最佳方法是尽您所能或与您的朋友分享该应用程序。","supportMessage2":"您的支持让一切变得不同。感谢您对 ImPlanner 的支持。","comment":"发送反馈","crypto":"Crypto","goBack":"返回","paymentType":"支付类型","address":"地址","copy":"复制","copiedAddres":"地址已复制！！！","share":"分享","shareWithFriends":"分享给朋友","rate":"评价","cryptocurrencies":"加密货币","buyMeACoffee":"请我喝一杯咖啡","buyMeACryptoCoffee":"请我喝一杯加密咖啡","translate":"翻译","shareMessage":"我正在使用 ImPlanner 来安排我的一周，这是一个免费的、注重隐私的、极简主义的每周计划，我想你也会喜欢它的。","supportUs":"支持我们","splashMessage":"喜欢 ImPlanner 吗？你可以在这里支持这个项目 !"},"about":{"about":"关于","madeWith":"用","inCuba":"在古巴","dev":"开发者和设计师","devName":"Manuel Ernesto García","version":"版本","desc":"ImPlanner 是一个专注于隐私的极简主义每周计划。","site":"访问网站","contributors":"贡献者","sponsors":"赞助者","collaborators":"合作者","email":"电子邮箱","blog":"博客","license":"许可证"},"generatedData":{"data2":"点击完成任务","data3":"双击编辑任务","data4":"将鼠标悬停以显示此任务的其余文本。","data5":"您可以拖放任务","data6":"这是一个自定义列表","data7":"您可以从侧边栏创建新列表","data8":"您也可以在设置菜单中隐藏它们","data9":"苹果","data10":"饮料","data11":"单击三个点以查看有关此任务的更多详细信息","data12":"用鼠标点击快速打开任务详细信息","list1":"自定义列表","list2":"购物列表","list3":"想法","subtask1":"我是一个子任务","subtask2":"点击完成子任务","desc1":"您可以在此处设置有关此任务的注释。 双击以编辑注释。"},"tips":{"tips":"提示","next":"下一个提示","back":"上一个提示","tip1":"您可以通过单击列表的任何区域来创建新任务。","tip2":"可以将任务从一个列表拖放到另一个列表或更改它们的顺序。","tip3":"要编辑列表或任务的名称，请双击它。","tip4":"每个列表的日期右侧是贪睡图标，可让您将当前列表的所有待处理任务发送到下一天。","tip5":"如果您不打算使用自定义列表，您可以将它们隐藏在配置菜单中。","tip6":"侧边栏中的日历可让您快速滚动到某个日期。","tip7":"通过将光标放在列表名称上，将出现标记全部图标，这允许您标记列表包含的所有任务。","tip8":"您可以使用位于侧面板上的“添加新列表”按钮创建新的自定义列表。","tip9":"“开始”按钮将您置于当天。","tip13":"ImPlanner 将信息存储在您的计算机上。 如果要更改计算机或浏览器，请记住创建备份。 您可以在设置菜单中执行此操作。","tip14":"单击并拖动中央分区以调整日历和自定义列表的高度。 双击它以恢复大小。","tip15":"您可以在配置面板中修改应用程序的列数和缩放比例。","tip16":"单击任务中的三个点以查看详细信息。","tip17":"您可以在任务详细信息窗口中拖放子任务。","tip18":"在任务详细信息窗口的顶部，您可以更改日期或任务列表。"},"welcome":{"next":"下一步","back":"上一步","ready":"就绪","allReady":"全部就绪","allReadyText":"一切准备就绪，您可以享受 ImPlanner。","allReadySub":"如果您有任何问题，可以在侧边栏中找到提示","welcome":"欢迎使用 ImPlanner","welcomeText":"极简主义每周任务管理器专注于隐私。 开始选择您的语言。","privacy":"隐私","privacyText":"ImPlanner 将信息存储在您的计算机上。 如果您最终要更改计算机或浏览器，请记住创建备份。","privacySub":"您可以在设置菜单中创建备份。","theme":"主题","themeText":"您可以根据自己的喜好在浅色和深色主题之间进行选择。"},"ui":{"rmList":"删除列表","rmListConfirm":"您确定要删除列表吗","repeatingTaskRemoveConfirm":"您确定要删除此重复任务吗？","removeRepeatingTask":"删除重复任务","cancel":"取消","ok":"确定","remove":"删除","splashSub":"极简主义每周计划","mobileWarning":"ImPlanner 是一个桌面应用程序，目前尚未准备好以该分辨率显示。:(","today":"今天","calendar":"日历","newCustomList":"新建自定义列表","reorderCustomLists":"重新排序自定义列表","softwareUpdated":"软件更新","seeChanges":"（查看更改）","changeLog":"更改日志","compatible":"抱歉，ImPlanner 与您的网络浏览器不兼容。 尝试更新它或使用另一个。","removeList":"删除列表","completeAll":"完成所有","newTask":"新建任务","postpone":"推迟","newVersionAvailable":"新版本可用","download":"（下载）","sponsoredBy":"赞助商","updateAll":"更新所有","removeAll":"删除所有","recurringTasks":"重复任务","undo":"撤消","clearList":"清除列表","clear":"清除","clearListConfirm":"您确定要清除列表吗？","reorder":"重新排序","maximizeCalendarPanel":"最大化日历面板","restorePanel":"恢复面板大小","maximizeListPanel":"最大化列表面板","open":"打开","quit":"退出","copyTasks":"复制任务","task":"任务","Frecuency":"频率"},"todoDetails":{"taskTitle":"任务标题","notes":"注释","markdown":"已支持 Markdown 样式","addSubTask":"添加子任务","copiedTaskToClipboard":"文本已复制到剪贴板！！！","taskRemoved":"任务已删除！！！","taskDuplicated":"任务已重复！！！","duplicate":"重复","subtasks":"子任务","interval":"间隔:","indefinitely":"无限期","occurrences":"出现次数","untilDate":"截止日期","done":"完成","cancel":"取消","noRepeat":"无重复","daily":"每天","weekly":"每周","weekdays":"周一至周五","monthly":"每月","yearly":"每年","split":"拆分","recurrentTaskRemoved":"重复任务已删除","time":"时间","alarm":"警报","color":"颜色","close":"关闭","actions":"操作"},"notifications":{"noPendingTasksToday":"你今天没有定期任务。","pendingTasksYesterday":"昨天你有 {0} 个未完成任务。","pendingTasksToday":"您今天有 {0} 个计划任务。","pendingTasksYesterdayAndToday":"您昨天有 {0} 个待办任务和今天的计划任务。"}}'
    );
    },
    "2d50": function (e) {
    e.exports = JSON.parse(
    '{"settings":{"settings":"Налаштування","language":"Мова","customLists":"Власні списки","darkTheme":"Темна тема","darkTrayIcon":"Значок темної панелі","darkIcon":"Темний значок","data":"Дані","import":"Імпорт","export":"Експорт","backup":"Резервна копія:","invalidFile":"Неправильний файл","checkUpdates":"Перевіряти оновлення під час запуску","calendar":"Календар","zoom":"Збільшення","columns":"Стовпці календаря","lists_columns":"Настроювані стовпці списків","goToNewDomain":"Ми перенесли вебсайт ImPlanner на новий домен, а цей скоро припинемо. Будь ласка, запускайте доступ до ImPlanner з нової доменної назви. Щоб перемістити дані, Вам потрібно спочатку експортувати їх, а потім імпортувати на іншому домені з меню конфіґурації. Вибачте за можливі незручності.","gotoNewDomainBtn":"Перейти до нового домену","general":"Генеральний","notifications":"Сповіщення","display":"Дисплей","openOnStartup":"Відкрити під час запуску","notificationOnStartup":"Повідомлення про запуск","notificationSound":"Звук сповіщення","clearData":"Очистити дані","exportData":"Експортувати дані","importData":"Імпорт даних","clearDataDetails":"Ви впевнені, що хочете видалити всі дані програми? \\nЦя дія незворотна.","runInBackground":"Запуск у фоновому режимі","runInBackgroundInfo":"Дозволяє працювати сповіщенням із закритою програмою.\\n \\nЦей параметр може мати проблеми для деяких версій macOS.","moveOldTasks":"Автоматично переміщувати старі завдання","importing":"Імпортування...","exporting":"Експорт...","reportErrors":"Надіслати звіт про помилки","compactView":"Компактний вид","behavior":"Поведінка","startCalendarYesterday":"Календар починається вчора","notificationIndicator":"Індикатор сповіщення","autoReorderTasks":"Автоматично змінюйте порядок завдань","moveCompletedTaskToBottom":"Перемістити виконані завдання вниз","clear":"Видалити","fullscreenToDoModal":"Деталі справ на весь екран","moveCompletedSubTaskToBottom":"Перемістіть виконані підзавдання вниз","weekStartOnMonday":"Початок тижня в понеділок"},"donate":{"contribute":"Співпраця","contributeSponsor":"Внести / Спонсор","supportMessage1":"ImPlanner — це безкоштовна програма, яку підтримують такі користувачі, як ви! \\nЯкщо ви вважаєте ImPlanner корисним, підтримайте нас у будь-який спосіб. \\nВаша підтримка має значення. \\nДякуємо за використання ImPlanner.","supportMessage2":"Ваша підтримка має значення. \\nДякуємо за підтримку ImPlanner 😊","comment":"Надіслати відгук","crypto":"Крипто","goBack":"Назад","paymentType":"Тип оплати","address":"Адреса","copy":"Копіювати","copiedAddres":"Адресу скопійовано !!!","share":"Поділитися","shareWithFriends":"Поділися з друзями","rate":"Оцініть нас","cryptocurrencies":"Криптовалюта","buyMeACoffee":"Купи мені каву","buyMeACryptoCoffee":"Купи мені крипто-каву","translate":"Перекласти","shareMessage":"Я планую свій тиждень за допомогою ImPlanner, безкоштовного мінімалістичного щотижневого планувальника, орієнтованого на конфіденційність, і я думаю, що вам теж він сподобається. \\nПеревір!","supportUs":"Підтримайте нас","splashMessage":"Подобається ImPlanner? \\nПідтримати проект можна тут!"},"about":{"about":"Про програму","madeWith":"Зроблено з","inCuba":"в Кубі","dev":"Розробник і дизайнер","devName":"Manuel Ernesto García","version":"Версія","desc":"ImPlanner — це компактний тижневий планувальник орієнтований на приватність.","site":"Відвідати сайт","contributors":"Співрозробники","sponsors":"Спонсори","collaborators":"Співробітники","email":"Електронна пошта","blog":"Блог","license":"Ліцензія"},"generatedData":{"data2":"Клацніть, щоб завершити завдання","data3":"Подвійне клацання, щоб змінити завдання","data4":"Наведіть курсор миші, щоб показати весь текст завдання.","data5":"Ви можете перетягувати завдання","data6":"Це власний список","data7":"Нові списки можна створювати з бічної панелі","data8":"Їх можна сховати в меню налаштувань","data9":"Яблука","data10":"Легкі напої","data11":"Клацніть три крапки, щоб детальніше переглянути це завдання","data12":"Швидко відкривайте деталі завдання за допомогою середнього клацання миші","list1":"Власний список","list2":"Список продуктів","list3":"Задуми","subtask1":"Я підзавдання","subtask2":"Клацніть, щоб завершити підзавдання","desc1":"Тут можна вказати свої нотатки до завдання. Клацніть два рази, щоб редагувати нотатки."},"tips":{"tips":"Поради","next":"Наступна порада","back":"Попередня порада","tip1":"Ви можете створити нове завдання клацнувши в будь-якому місці списків.","tip2":"Завдання можна перетягувати з одного списку в інший або змінювати їхній порядок.","tip3":"Щоб змінити назву списку або завдання, клацніть два рази по ньому.","tip4":"Праворуч дати кожного списку є значок Відкласти, який дозволяє перекинути всі незавершені завдання з поточного списку на наступний день.","tip5":"Якщо Ви не збираєтеся користуватися власними списками, то їх можна сховати в меню конфіґурації.","tip6":"Календар на бічній панелі дозволяє швидко переходити до потрібної дати.","tip7":"Розмістивши курсор на назві списку, зʼявиться значок Позначити все, що дозволяє позначити всі завдання в цьому списку.","tip8":"Ви можете створити новий власний список за допомогою кнопки Додати новий список, яка розташована на бічній панелі.","tip9":"Кнопка Старт переміщає на поточний день.","tip13":"ImPlanner зберігає інформацію на Вашому компʼютері. Якщо бажаєте змінити компʼютер або оглядач, не забудьте зробити резервну копію. Її можна зробити в меню налаштувань.","tip14":"Клацніть і потягніть центральний роздільник, щоб змінити висоту календаря і власних списків. Клацніть два рази, щоб відновити розмір.","tip15":"Ви можете змінити кількість стовпців і збільшити програму на панелі конфіґурації.","tip16":"Клацніть на три крапки, щоб переглянути подробиці завдання.","tip17":"Ви можете перетягувати підзавдання у вікно подробиць завдання.","tip18":"Вгорі вікна подробиць завдання можна змінити день або список завдання."},"welcome":{"next":"Далі","back":"Назад","ready":"готово","allReady":"Усе готово","allReadyText":"Усе готово, отримуйте задоволення від ImPlanner.","allReadySub":"Якщо у Вас є питання, можете знайти поради на бічній панелі","welcome":"Вітаємо у ImPlanner","welcomeText":"Компактний тижневий керівник завдань орієнтований на приватність. Для початку виберіть свою мову.","privacy":"Приватність","privacyText":"Усі ваші дані зберігаються на вашому комп’ютері. \\nЯкщо вам потрібно змінити комп’ютер або браузер, не забудьте створити резервну копію.","privacySub":"У разі виявлення помилок у додатку ви можете надіслати звіт про помилки розробнику.","theme":"Тема","themeText":"Ви можете вибрати між світлою і темною темою на свій смак."},"ui":{"rmList":"Видалити список","rmListConfirm":"Ви справді хочете видалити список","repeatingTaskRemoveConfirm":"Ви впевнені, що хочете видалити це повторюване завдання?","removeRepeatingTask":"Видалити повторюване завдання","cancel":"Скасувати","ok":"В порядку","remove":"Видалити","splashSub":"Компактний тижневий планувальник","mobileWarning":"ImPlanner є стільничною програмою і на разі не може відображатися в цьому розширені. :(","today":"Сьогодні","calendar":"Календар","newCustomList":"Новий власний список","reorderCustomLists":"Змінити порядок користувацьких списків","softwareUpdated":"Програму оновлено","seeChanges":"(Переглянути зміни)","changeLog":"Список змін","compatible":"Вибачте, ImPlanner не сумісна з Вашим оглядачем. Спробуйте оновити його або використовуйте інший.","removeList":"Видалити список","completeAll":"Завершити всі","newTask":"Нове завдання","postpone":"Відкласти","newVersionAvailable":"Доступна нова версія","download":"(Завантажити)","sponsoredBy":"За підтримки","updateAll":"Оновити все","removeAll":"Видалити все","recurringTasks":"Повторювані завдання","undo":"Скасувати","clearList":"Чіткий перелік","clear":"ясно","clearListConfirm":"Ви впевнені, що бажаєте очистити список?","reorder":"Змінити порядок","maximizeCalendarPanel":"Розгорнути панель календаря","restorePanel":"Відновити розмір панелі","maximizeListPanel":"Розгорнути панель списку","open":"ВІДЧИНЕНО","quit":"Вийти","copyTasks":"Копіювати завдання","task":"завдання","Frecuency":"Частота"},"todoDetails":{"taskTitle":"Назва завдання","notes":"Нотатки","markdown":"Підтримується стиль Markdown","addSubTask":"Додати підзавдання","copiedTaskToClipboard":"Текст скопійовано в буфер обміну !!!","taskRemoved":"Завдання вилучено !!!","taskDuplicated":"Завдання дубльовано !!!","duplicate":"Дублювати","subtasks":"Підзавдання","interval":"інтервал:","indefinitely":"На невизначений термін","occurrences":"Випадки","untilDate":"До дати","done":"Готово","cancel":"Скасувати","noRepeat":"Без повтору","daily":"Щодня","weekly":"Щотижня","weekdays":"Пн-Пт","monthly":"Щомісячно","yearly":"Щорічно","split":"Розкол","recurrentTaskRemoved":"Повторювану задачу видалено","time":"Час","alarm":"Сигналізація","color":"Колір","close":"Закрити","actions":"Дії","customWeekdays":"Індивідуальні будні"},"notifications":{"noPendingTasksToday":"У вас сьогодні немає запланованих завдань.","pendingTasksYesterday":"У вас вчора було {0} незавершених завдань.","pendingTasksToday":"На сьогодні у вас є {0} запланованих завдань.","pendingTasksYesterdayAndToday":"У вас є {0} незавершених завдань учора та {1} запланованих завдань сьогодні."}}'
    );
    },
      3537: function (e, t, a) {
      "use strict";
      a("e0ea");
      },
      3829: function (e, t, a) {},
      "3ed1": function (e, t, a) {},
      "3f30": function (e, t, a) {
      "use strict";
      a("a0c0");
      },
      "420e": function (e, t, a) {
      "use strict";
      a("2073");
      },
      4224: function (e, t, a) {},
      "42b3": function (e, t, a) {},
      4300: function (e) {
        e.exports = JSON.parse(
          '{"settings":{"settings":"設置","language":"語言","customLists":"自定義列表","darkTheme":"黑暗主題","darkTrayIcon":"深色托盤圖標","darkIcon":"深色圖標","data":"數據","import":"匯入","export":"匯出","backup":"備份：","invalidFile":"無效的文件","checkUpdates":"在啟動時檢查更新","calendar":"日曆","zoom":"縮放","columns":"欄位","lists_columns":"自定義列表列","goToNewDomain":"我們正在將 ImPlanner 網站更改為新網域，該網域將於 2022 年 4 月 1 日停止使用。為了保留您的數據，您必須從該網域匯出它，然後將其匯入新域（從設置選單）。 請記住，如果您不搬遷數據，您將失去瀏灠器儲存在此網域中的訊息。 如有不便，敬請原諒。","gotoNewDomainBtn":"轉到新網域","general":"一般的","notifications":"通知","display":"展示","openOnStartup":"啟動時打開","notificationOnStartup":"啟動通知","notificationSound":"通知聲音","clearData":"清除數據","exportData":"導出數據","importData":"導入數據","clearDataDetails":"您確定要刪除所有應用數據嗎？ 這個動作是不可逆的。","runInBackground":"背景執行","runInBackgroundInfo":"訊息通知在應用程式關閉後仍可用. \\n 這個選擇可能在某些 macOS 中有問題","moveOldTasks":"自動移動舊任務","importing":"匯入...","exporting":"匯出...","reportErrors":"發送錯誤報告","compactView":"精簡視圖","behavior":"行為","startCalendarYesterday":"日曆從昨天開始","notificationIndicator":"通知指示器","autoReorderTasks":"自動重新排序任務","moveCompletedTaskToBottom":"將完成的任務移至底部","clear":"刪除","fullscreenToDoModal":"全屏待辦事項詳細信息","moveCompletedSubTaskToBottom":"將完成的子任務移至底部","weekStartOnMonday":"一周從星期一開始"},"donate":{"contribute":"貢獻","contributeSponsor":"貢獻/贊助","supportMessage1":"ImPlanner 是一個免費的應用程序，得到像您這樣的用戶的支持！\\n如果您發現 ImPlanner 有用，請考慮以任何方式支持我們。\\n您的支持與眾不同。\\n感謝您使用 ImPlanner。","supportMessage2":"您的支持與眾不同。\\n感謝您對 ImPlanner 的支持😊","comment":"發表評論","crypto":"加密","goBack":"返回","paymentType":"付款類型","address":"地址","copy":"複製","copiedAddres":"複製的地址!!!","share":"分享","shareWithFriends":"和朋友分享","rate":"速度","cryptocurrencies":"加密貨幣","buyMeACoffee":"給我買杯咖啡","buyMeACryptoCoffee":"給我買一杯加密咖啡","translate":"翻譯","shareMessage":"我用 ImPlanner 安排我的每週, 一個免費且注重隱私的極簡主義每週計劃，我想你也會喜歡它. 快來吧!","supportUs":"支持我們","splashMessage":"喜歡 ImPlanner 嗎？\\n您可以在這裡支持該項目！"},"about":{"about":"關於","madeWith":"用","inCuba":"在古巴","dev":"開發人員和設計師","devName":"曼努埃爾·埃內斯托·加西亞（Manuel Ernesto Garcia）","version":"版本","desc":"ImPlanner是專注於隱私的極簡主義每週計劃。","site":"訪問網站。","contributors":"貢獻者","sponsors":"贊助商","collaborators":"合作者","email":"電子郵件","blog":"部落格","license":"執照"},"generatedData":{"data2":"點擊以完成任務","data3":"連點以編輯任務","data4":"將滑鼠放在其上以顯示此任務的其餘內容","data5":"您可以拖放任務","data6":"這是一個自定義列表","data7":"您可以從側邊欄建立新列表","data8":"您也可以將它們隱藏在選項選中中","data9":"蘋果","data10":"茶點","data11":"點擊三個點以查看有關此任務的更多詳細訊息","data12":"點擊滑鼠中鍵快速打開任務詳情","list1":"自定義列表","list2":"購物清單","list3":"想法","subtask1":"我是一個子任務","subtask2":"點擊完成子任務","desc1":"您可以在此處設置有關此任務的註解。 連點以編輯註解。"},"tips":{"tips":"提示","next":"下一個","back":"上一個","tip1":"您可以透過點擊列表的任何區域來建立新任務。","tip2":"可以將任務從一個列表拖放到另一個列表，也可以透過更改其順序將其拖放。","tip3":"要編輯列表或任務的名稱，請連點它。","tip4":"每個列表日期的右側是貪睡圖標，您可以使用該圖標將當前列表的所有待處理任務發送到第二天。","tip5":"如果您不打算使用自定義列表，則可以將其隱藏在配定選單中。","tip6":"側邊欄中的日曆可讓您快速滾動至日期。","tip7":"透過將游標放在列表的名稱上，將顯示”全部標記“圖標，這使您可以標記列表包含的所有任務。","tip8":"您可以使用側面板上的”添加新列表“按鈕來建立新的自定義列表。","tip9":"開始按鈕將您設置在當天。","tip13":"ImPlanner將訊息儲存在您的電腦上。如果要更換電腦或瀏灠器，請記住要建立備份。可以在設置選單中進行此操作。","tip14":"按住並拖動中央劃分以調整日曆和自定義列表的大小。 連點它以恢復其大小。","tip15":"您可以修改配置面板中應用程式的欄數和縮放。","tip16":"點擊任務中的三個點以查看詳細訊息。","tip17":"您可以在任務詳細訊息窗口中拖放子任務。","tip18":"在任務詳細訊息窗口的頂部，您可以更改日期或任務列表。"},"welcome":{"next":"下一個","back":"上一個","ready":"準備好","allReady":"所有準備就緒","allReadyText":"一切都準備就緒，因此您可以享受ImPlanner。","allReadySub":"如果您有任何疑問，可以在側欄中找到提示","welcome":"歡迎來到ImPlanner","welcomeText":"極簡主義每週任務管理器專注於隱私。要開始選擇您的語言。","privacy":"隱私","privacyText":"ImPlanner將訊息儲存在您的電腦上。如果最終要更換電腦或瀏灠器，請記住要建立備份。","privacySub":"您可以在設置選單中建立備份。","theme":"主題","themeText":"您可以根據自己的喜好在淺色和深色主題之間進行選擇。"},"ui":{"rmList":"刪除列表","rmListConfirm":"確定要刪除列表","repeatingTaskRemoveConfirm":"您確定要刪除此重複性任務嗎？","removeRepeatingTask":"刪除重複任務","cancel":"取消","ok":"行","remove":"刪除","splashSub":"極簡主義每週計劃","mobileWarning":"ImPlanner是一個桌面應用程式，目前尚未準備好以該解析度顯示。:(","today":"今天","calendar":"日曆","newCustomList":"新的自定義列表","reorderCustomLists":"重新排序自定義列表","softwareUpdated":"軟體已更新","seeChanges":"(查看更改)","changeLog":"更改日誌","compatible":"抱歉，ImPlanner與您的網路瀏灠器不相容。 嘗試更新它或使用另一個。","removeList":"刪除清單","completeAll":"全部完成","newTask":"新任務","postpone":"推遲","newVersionAvailable":"新版本可用","download":"(下載)","sponsoredBy":"贊助","updateAll":"更新全部","removeAll":"刪除全部","recurringTasks":"重複性任務","undo":"複原","clearList":"清空列表","clear":"清除","clearListConfirm":"確定要清空列表?","reorder":"重新排序","maximizeCalendarPanel":"最大化日曆區","restorePanel":"恢復區塊原本大小","maximizeListPanel":"最大化列表區","open":"打開","quit":"離開","copyTasks":"複製任務","task":"任務","Frecuency":"頻率"},"todoDetails":{"taskTitle":"任務名稱","notes":"筆記","markdown":"支援“markdown”樣式","addSubTask":"添加子任務","copiedTaskToClipboard":"已複製到剪貼簿!!!","taskRemoved":"任務刪除！！！","taskDuplicated":"任務重複！！！","duplicate":"重複","subtasks":"子任務","interval":"間隔:","indefinitely":"無限期","occurrences":"發生次數","untilDate":"截止日期","done":"完成","cancel":"取消","noRepeat":"不重複","daily":"每日","weekly":"每週","weekdays":"週一至週五","monthly":"每月","yearly":"每年","split":"分開","recurrentTaskRemoved":"經常性任務已刪除","time":"時間","alarm":"警報","color":"色彩","close":"關閉","actions":"行動","customWeekdays":"自定義工作日"},"notifications":{"noPendingTasksToday":"您今天沒有計劃任務。","pendingTasksYesterday":"您昨天有 {0} 個待處理任務。","pendingTasksToday":"您今天有 {0} 個計劃任務。","pendingTasksYesterdayAndToday":"您昨天有 {0} 個待處理任務，今天有 {1} 個計劃任務。"}}'
          );
      },
  "451d": function (e, t, a) {},
  4678: function (e, t, a) {
    var o = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn-bd": "9686",
      "./bn-bd.js": "9686",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-mx": "b5b7",
      "./es-mx.js": "b5b7",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tk": "5aff",
      "./tk.js": "5aff",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea",
    };
    function i(e) {
      var t = n(e);
      return a(t);
    }
    function n(e) {
      if (!a.o(o, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return o[e];
    }
    (i.keys = function () {
      return Object.keys(o);
    }),
      (i.resolve = n),
      (e.exports = i),
      (i.id = "4678");
  },
  "4c1a": function (e, t, a) {
    "use strict";
    a("1799");
  },
  "51b1": function (e) {
    e.exports = JSON.parse(
      '{"settings":{"settings":"Configurações","language":"Idioma","customLists":"Listas Personalizadas","darkTheme":"Tema escuro","darkTrayIcon":"Ícone de bandeja escura","darkIcon":"Ícone escuro","data":"Dados","import":"Importar","export":"Exportar","backup":"Backup:","invalidFile":"Arquivo inválido","checkUpdates":"Verifique se há atualizações na inicialização","calendar":"Calendário","zoom":"Ampliação","columns":"Colunas do calendário","lists_columns":"Colunas de listas personalizadas","goToNewDomain":"Estamos mudando o site ImPlanner para um novo domínio e este será descontinuado em 1º de abril de 2022. Para manter seus dados, você deve exportá-los deste domínio e depois importá-los no novo domínio (no menu de configuração). Lembre-se de que, se você não migrar dados, perderá as informações que seu navegador armazena neste domínio. Desculpe por qualquer inconveniente que isso possa causar.","gotoNewDomainBtn":"Ir para o novo domínio","general":"Em geral","notifications":"Notificações","display":"Tela","openOnStartup":"Abrir na inicialização","notificationOnStartup":"Notificação na inicialização","notificationSound":"Som de notificação","clearData":"Apagar os dados","exportData":"Exportar dados","importData":"Importar dados","clearDataDetails":"Tem certeza de que deseja excluir todos os dados do aplicativo? Esta ação é irreversível.","runInBackground":"Executado em segundo plano","runInBackgroundInfo":"Permite que as notificações funcionem com o aplicativo fechado.\\n \\nEsta opção pode ter problemas para algumas versões do macOS.","moveOldTasks":"Mover tarefas antigas automaticamente","importing":"Importando...","exporting":"Exportador...","reportErrors":"Enviar relatório de erros","compactView":"Visualização compacta","behavior":"Comportamento","startCalendarYesterday":"Calendário começou ontem","notificationIndicator":"Indicador de notificação","autoReorderTasks":"Reordenar tarefas automaticamente","moveCompletedTaskToBottom":"Mover tarefas concluídas para baixo","clear":"Excluir","fullscreenToDoModal":"Detalhes da tarefa em tela cheia","moveCompletedSubTaskToBottom":"Mover subtarefas concluídas para baixo","weekStartOnMonday":"A semana começa na segunda-feira"},"donate":{"contribute":"Contribuir","contributeSponsor":"Contribuir / Patrocinar","supportMessage1":"ImPlanner é um aplicativo gratuito apoiado por usuários como você! \\nSe você achar o ImPlanner útil, considere nos apoiar da maneira que puder. \\nSeu apoio faz a diferença. \\nObrigado por usar o ImPlanner.","supportMessage2":"Seu apoio faz a diferença. \\nObrigado por apoiar o ImPlanner 😊","comment":"Enviar comentário","crypto":"Cripto","goBack":"Voltar","paymentType":"Payment Type","address":"Endereço","copy":"Copiar","copiedAddres":"Endereço copiado !!!","share":"Compartilhar","shareWithFriends":"Compartilhe com amigos","rate":"Nos avalie","cryptocurrencies":"Criptomoedas","buyMeACoffee":"Compre-me um café","buyMeACryptoCoffee":"Compre-me um café criptográfico","translate":"Traduzir","shareMessage":"Estou agendando minha semana com o ImPlanner, um planejador semanal gratuito e minimalista focado em privacidade e acho que você também vai adorar. \\nConfira!","supportUs":"Apoie-nos","splashMessage":"Gostando do ImPlanner? \\nVocê pode apoiar o projeto aqui!"},"about":{"about":"Sobre","madeWith":"Feito com","inCuba":"em Cuba","dev":"Desenvolvedor e Designer","devName":"Manuel Ernesto García","version":"Versão","desc":"ImPlanner é um planejador semanal minimalista focado na privacidade.","site":"Visite o site","contributors":"Contribuidores","sponsors":"Patrocinadores","collaborators":"Contribuidores","email":"E-mail","blog":"Blogue","license":"Licença"},"generatedData":{"data2":"Clique para concluir a tarefa","data3":"Clique duas vezes para editar a tarefa","data4":"Passe o mouse para exibir o restante do texto para esta tarefa.","data5":"Você pode arrastar e soltar as tarefas","data6":"Esta é uma lista personalizada","data7":"Você pode criar novas listas na barra lateral","data8":"Você também pode ocultá-los no menu de configurações","data9":"Maçãs","data10":"Refrescos","data11":"Clique nos três pontos para ver mais detalhes sobre esta tarefa","data12":"Abra os detalhes da tarefa rapidamente com o clique do meio do mouse","list1":"Lista personalizada","list2":"Lista de compras","list3":"Idéias","subtask1":"Eu sou uma subtarefa","subtask2":"Clique para completar a subtarefa","desc1":"Aqui você pode definir suas notas sobre esta tarefa. Clique duas vezes para editar as notas."},"tips":{"tips":"Dicas","next":"Próxima dica","back":"Dica anterior","tip1":"Você pode criar uma nova tarefa clicando em qualquer área das listas.","tip2":"As tarefas podem ser arrastadas e soltas de uma lista para outra ou alterando sua ordem.","tip3":"Para editar o nome de uma lista ou tarefa, clique duas vezes sobre ela.","tip4":"À direita da data de cada lista está o ícone Snooze que permite enviar todas as tarefas pendentes da lista atual para o dia seguinte.","tip5":"Se você não vai usar as listas personalizadas, pode ocultá-las no menu de configuração.","tip6":"O calendário na barra lateral permite rolar rapidamente para uma data.","tip7":"Ao colocar o cursor sobre o nome da lista, aparecerá o ícone Marcar tudo, o que permite marcar todas as tarefas que uma lista contém.","tip8":"Você pode criar uma nova lista personalizada usando o botão Adicionar nova lista localizado no painel lateral.","tip9":"O botão Iniciar coloca você no dia atual.","tip13":"ImPlanner armazena as informações no seu computador. Se você deseja alterar seu computador ou navegador, lembre-se de fazer um backup. Você pode fazer isso no menu de configurações.","tip14":"Clique e arraste a divisão central para redimensionar a altura do calendário e as listas personalizadas. Clique duas vezes nele para restaurar seu tamanho.","tip15":"Você pode modificar o número de colunas e o zoom do aplicativo no painel de configuração.","tip16":"Clique nos três pontos nas tarefas para ver os detalhes.","tip17":"Você pode arrastar e soltar a subtarefa na janela de detalhes da tarefa.","tip18":"Na parte superior da janela de detalhes da tarefa, você pode alterar o dia ou a lista de uma tarefa."},"welcome":{"next":"Próximo","back":"Anterior","ready":"pronto","allReady":"Tudo pronto","allReadyText":"Está tudo pronto para você aproveitar o ImPlanner.","allReadySub":"Se você tiver alguma dúvida, pode encontrar dicas na barra lateral","welcome":"Welcome to ImPlanner","welcomeText":"O gerenciador de tarefas semanais minimalistas com foco na privacidade. Para começar, selecione seu idioma.","privacy":"Privacidade","privacyText":"Todos os seus dados são armazenados em seu computador. \\nSe você precisar alterar seu computador ou navegador, lembre-se de criar um backup.","privacySub":"Em caso de erros no aplicativo, você pode enviar um relatório dos erros ao dev.","theme":"Tema","themeText":"Você pode selecionar entre o tema claro e escuro de acordo com sua preferência."},"ui":{"rmList":"Excluir lista","rmListConfirm":"Tem certeza de que deseja excluir a lista","repeatingTaskRemoveConfirm":"Tem certeza de que deseja excluir esta tarefa recorrente?","removeRepeatingTask":"Remover tarefa repetitiva","cancel":"Cancelar","ok":"OK","remove":"Remover","splashSub":"Minimalist Weekly Planner","mobileWarning":"ImPlanner é um aplicativo de desktop e por enquanto não está pronto para ser exibido nesta resolução. (\'一 _ 一)","today":"Hoje","calendar":"Calendário","newCustomList":"Nova Lista Personalizada","reorderCustomLists":"Reordenar listas personalizadas","softwareUpdated":"Software Atualizado","seeChanges":"(Ver alterações)","changeLog":"Change Log","compatible":"Desculpe, ImPlanner não é compatível com o seu navegador. Tente atualizá-lo ou usar outro.","removeList":"Remover lista","completeAll":"Completar tudo","newTask":"Nova tarefa","postpone":"Adiar","newVersionAvailable":"Nova versão disponível","download":"(Download)","sponsoredBy":"Patrocinado por","updateAll":"Atualize tudo","removeAll":"Excluir tudo","recurringTasks":"Tarefas recorrentes","undo":"Desfazer","clearList":"Limpar lista","clear":"Apagar","clearListConfirm":"Tem certeza de que deseja limpar a lista?","reorder":"Reordenar","maximizeCalendarPanel":"Maximizar o painel do calendário","restorePanel":"Restaurar tamanho do painel","maximizeListPanel":"Maximizar o painel da lista","open":"Abrir","quit":"Desistir","copyTasks":"Copiar tarefas","task":"Tarefa","Frecuency":"Frequência"},"todoDetails":{"taskTitle":"Título da tarefa","notes":"Notas","markdown":"Estilo Markdown Suportado","addSubTask":"Adicionar Subtarefa","copiedTaskToClipboard":"Texto copiado para a área de transferência !!!","taskRemoved":"Tarefa removida !!!","taskDuplicated":"Tarefa Duplicada !!!","duplicate":"Duplicado","subtasks":"Subtarefas","interval":"Intervalo:","indefinitely":"Indefinidamente","occurrences":"Ocorrências","untilDate":"Até a data","done":"Feito","cancel":"Cancelar","noRepeat":"Sem repetição","daily":"Diário","weekly":"Semanalmente","weekdays":"2a. a 6a","monthly":"Por mês","yearly":"Anual","split":"Dividir","recurrentTaskRemoved":"Tarefa recorrente removida","time":"Tempo","alarm":"Alarme","color":"Cor","close":"Perto","actions":"Ações","customWeekdays":"Dias da semana personalizados"},"notifications":{"noPendingTasksToday":"Você não tem tarefas agendadas hoje.","pendingTasksYesterday":"Você tem {0} tarefas pendentes ontem.","pendingTasksToday":"Você tem {0} tarefas agendadas hoje.","pendingTasksYesterdayAndToday":"Você tem {0} tarefas pendentes ontem e {1} tarefas agendadas hoje."}}'
    );
  },
  "535f": function (e, t, a) {},
  "54d9": function (e, t, a) {
    "use strict";
    a("a82d");
  },
  "56d7": function (e, t, a) {
    "use strict";
    a.r(t);
    var o = a("7a23");
    const i = Object(o["i"])(
        "input",
        { class: "hidden-input-for-focus", type: "text" },
        null,
        -1
      ),
      n = { class: "h-100 d-flex flex-column" },
      s = { class: "todo-slider", ref: "weekListContainer" },
      r = Object(o["i"])(
        "div",
        { class: "inner-main-horizontal-divider" },
        null,
        -1
      ),
      c = { class: "divider-icons-container" },
      l = ["title"],
      d = ["title"],
      u = ["title"],
      p = ["title"],
      m = { class: "todo-slider slides", ref: "customListContainer" },
      b = { style: { margin: "auto" } },
      g = { key: 0, src: "img/LOGO-IM-PDF-LLL.png" },
      h = { key: 1, src: "img/LOGO-IM-PDF-LLL.png" },
      k = {
        class:
          "mobile d-flex flex-column justify-content-center align-items-center",
      },
      f = Object(o["i"])(
        "i",
        {
          class: "bi-exclamation-diamond mb-4",
          style: { "font-size": "100px" },
        },
        null,
        -1
      ),
      v = { style: { "text-align": "center" } },
      y = {
        class: "position-fixed bottom-0 end-0 p-3",
        style: { "z-index": "1056" },
      },
      T = {
        key: 0,
        class:
          "compatible d-flex flex-column justify-content-center align-items-center p-5",
      },
      j = Object(o["i"])(
        "i",
        {
          class: "bi-exclamation-diamond mb-4",
          style: { "font-size": "100px" },
        },
        null,
        -1
      ),
      O = { style: { "text-align": "center" } };
    function w(e, t, a, w, D, x) {
      const C = Object(o["F"])("splash-screen"),
        z = Object(o["F"])("side-bar"),
        L = Object(o["F"])("to-do-list"),
        I = Object(o["F"])("remove-custom-list"),
        S = Object(o["F"])("config-modal"),
        $ = Object(o["F"])("clear-data-modal"),
        M = Object(o["F"])("clear-list-modal"),
        E = Object(o["F"])("about-modal"),
        A = Object(o["F"])("donate-modal"),
        W = Object(o["F"])("welcome-modal"),
        R = Object(o["F"])("tips-modal"),
        B = Object(o["F"])("to-do-modal"),
        P = Object(o["F"])("active-to-do"),
        Y = Object(o["F"])("recurrent-events-modal"),
        _ = Object(o["F"])("importing-modal"),
        N = Object(o["F"])("reorder-custom-lists-modal"),
        V = Object(o["F"])("toast-message");
      return (
        Object(o["y"])(),
        Object(o["h"])(
          o["a"],
          null,
          [
            i,
            Object(o["Q"])(
              Object(o["i"])(
                "div",
                {
                  id: "app-container",
                  class: Object(o["t"])([
                    "app-container",
                    { "dark-theme": x.darkTheme },
                  ]),
                },
                [
                  Object(o["i"])(
                    "div",
                    {
                      class: "hidden-mobile app-body",
                      style: Object(o["u"])({ zoom: x.zoom + "%" }),
                    },
                    [
                      Object(o["l"])(C, { ref: "splash" }, null, 512),
                      Object(o["l"])(
                        z,
                        { onChangeDate: x.setSelectedDate },
                        null,
                        8,
                        ["onChangeDate"]
                      ),
                      Object(o["i"])("div", n, [
                        Object(o["Q"])(
                          Object(o["i"])(
                            "div",
                            {
                              class: Object(o["t"])([
                                "todo-lists-container",
                                {
                                  "full-screen": !x.showCustomList,
                                  "hidden-lists-container":
                                    x.hideTopListContainer,
                                  "full-screen-divider":
                                    x.hideBottomListContainer,
                                },
                              ]),
                              style: Object(o["u"])(x.resizableStyle),
                              ref: "calendarContainer",
                            },
                            [
                              Object(o["i"])(
                                "i",
                                {
                                  class: "bi-chevron-left slider-btn",
                                  ref: "weekLeft",
                                  onClick:
                                    t[0] ||
                                    (t[0] = (...e) =>
                                      x.weekMoveLeft && x.weekMoveLeft(...e)),
                                },
                                null,
                                512
                              ),
                              Object(o["i"])(
                                "div",
                                s,
                                [
                                  (Object(o["y"])(!0),
                                  Object(o["h"])(
                                    o["a"],
                                    null,
                                    Object(o["D"])(
                                      x.dates_array,
                                      (e) => (
                                        Object(o["y"])(),
                                        Object(o["f"])(
                                          L,
                                          {
                                            key: e,
                                            id: e,
                                            showCustomList: x.showCustomList,
                                            onTodoListMounted:
                                              x.todoListMounted,
                                          },
                                          null,
                                          8,
                                          [
                                            "id",
                                            "showCustomList",
                                            "onTodoListMounted",
                                          ]
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ],
                                512
                              ),
                              Object(o["i"])(
                                "i",
                                {
                                  class: "bi-chevron-right slider-btn",
                                  ref: "weekRight",
                                  onClick:
                                    t[1] ||
                                    (t[1] = (...e) =>
                                      x.weekMoveRight && x.weekMoveRight(...e)),
                                },
                                null,
                                512
                              ),
                            ],
                            6
                          ),
                          [[o["M"], x.showCalendar]]
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "div",
                            {
                              class: Object(o["t"])([
                                "main-horizontal-divider",
                                x.mainDividerPositionClass,
                              ]),
                              id: "resizer",
                              onMousedown:
                                t[6] ||
                                (t[6] = (...e) =>
                                  x.resizerMouseDownHandler &&
                                  x.resizerMouseDownHandler(...e)),
                              onDblclick:
                                t[7] ||
                                (t[7] = (...e) =>
                                  x.resizerDblClick && x.resizerDblClick(...e)),
                            },
                            [
                              r,
                              Object(o["i"])("div", c, [
                                Object(o["i"])(
                                  "i",
                                  {
                                    class:
                                      "bi-chevron-up move-to-center-up divider-icons",
                                    onClick:
                                      t[2] ||
                                      (t[2] = (e) => x.setDividerPosition(1)),
                                    title: e.$t("ui.restorePanel"),
                                  },
                                  null,
                                  8,
                                  l
                                ),
                                Object(o["i"])(
                                  "i",
                                  {
                                    class:
                                      "bi-chevron-up move-to-corner-up divider-icons",
                                    onClick:
                                      t[3] ||
                                      (t[3] = (e) => x.setDividerPosition(2)),
                                    title: e.$t("ui.maximizeListPanel"),
                                  },
                                  null,
                                  8,
                                  d
                                ),
                                Object(o["i"])(
                                  "i",
                                  {
                                    class:
                                      "bi-chevron-down move-to-center-down divider-icons",
                                    onClick:
                                      t[4] ||
                                      (t[4] = (e) => x.setDividerPosition(1)),
                                    title: e.$t("ui.restorePanel"),
                                  },
                                  null,
                                  8,
                                  u
                                ),
                                Object(o["i"])(
                                  "i",
                                  {
                                    class:
                                      "bi-chevron-down move-to-corner-down divider-icons",
                                    onClick:
                                      t[5] ||
                                      (t[5] = (e) => x.setDividerPosition(0)),
                                    title: e.$t("ui.maximizeCalendarPanel"),
                                  },
                                  null,
                                  8,
                                  p
                                ),
                              ]),
                            ],
                            34
                          ),
                          [[o["M"], x.showCustomList && x.showCalendar]]
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "div",
                            {
                              class: Object(o["t"])([
                                "todo-lists-container",
                                {
                                  "full-screen": !x.showCalendar,
                                  "flex-grow-1": x.showCalendar,
                                  "hidden-lists-container":
                                    x.hideBottomListContainer,
                                },
                              ]),
                            },
                            [
                              Object(o["i"])(
                                "i",
                                {
                                  class: "bi-chevron-left slider-btn",
                                  onClick:
                                    t[8] ||
                                    (t[8] = (...e) =>
                                      x.customMoveLeft &&
                                      x.customMoveLeft(...e)),
                                  style: Object(o["u"])({
                                    visibility:
                                      D.cTodoList.length > x.customColumns
                                        ? "visible"
                                        : "hidden",
                                  }),
                                },
                                null,
                                4
                              ),
                              Object(o["i"])(
                                "div",
                                m,
                                [
                                  (Object(o["y"])(!0),
                                  Object(o["h"])(
                                    o["a"],
                                    null,
                                    Object(o["D"])(
                                      D.cTodoList,
                                      (e, t) => (
                                        Object(o["y"])(),
                                        Object(o["f"])(
                                          L,
                                          {
                                            key: e.listId,
                                            id: e.listId,
                                            customTodoList: !0,
                                            cTodoListIndex: t,
                                            showCustomList: x.showCustomList,
                                            onTodoListMounted:
                                              x.todoListMounted,
                                          },
                                          null,
                                          8,
                                          [
                                            "id",
                                            "cTodoListIndex",
                                            "showCustomList",
                                            "onTodoListMounted",
                                          ]
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ],
                                512
                              ),
                              Object(o["i"])(
                                "i",
                                {
                                  class: "bi-chevron-right slider-btn",
                                  onClick:
                                    t[9] ||
                                    (t[9] = (...e) =>
                                      x.customMoveRight &&
                                      x.customMoveRight(...e)),
                                  style: Object(o["u"])({
                                    visibility:
                                      D.cTodoList.length > x.customColumns
                                        ? "visible"
                                        : "hidden",
                                  }),
                                },
                                null,
                                4
                              ),
                            ],
                            2
                          ),
                          [[o["M"], x.showCustomList]]
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "div",
                            b,
                            [
                              x.darkTheme
                                ? (Object(o["y"])(), Object(o["h"])("img", g))
                                : (Object(o["y"])(), Object(o["h"])("img", h)),
                            ],
                            512
                          ),
                          [[o["M"], !x.showCustomList && !x.showCalendar]]
                        ),
                      ]),
                      Object(o["l"])(I),
                      Object(o["l"])(
                        S,
                        {
                          onChangeColumns: x.weekResetScroll,
                          configProp: e.$store.getters.config,
                        },
                        null,
                        8,
                        ["onChangeColumns", "configProp"]
                      ),
                      Object(o["l"])($),
                      Object(o["l"])(M),
                      Object(o["l"])(E),
                      Object(o["l"])(A),
                      Object(o["l"])(W),
                      Object(o["l"])(R),
                      Object(o["l"])(
                        B,
                        { selectedTodo: x.selectedTodo },
                        null,
                        8,
                        ["selectedTodo"]
                      ),
                      Object(o["l"])(P, { activeTodo: x.activeTodo }, null, 8, [
                        "activeTodo",
                      ]),
                      Object(o["l"])(Y),
                      Object(o["l"])(
                        _,
                        {
                          id: "importingModal",
                          text: e.$t("settings.importing"),
                        },
                        null,
                        8,
                        ["text"]
                      ),
                      Object(o["l"])(
                        _,
                        {
                          id: "exportingModal",
                          text: e.$t("settings.exporting"),
                        },
                        null,
                        8,
                        ["text"]
                      ),
                      Object(o["l"])(
                        N,
                        { onResetCustomList: x.resetCustomList },
                        null,
                        8,
                        ["onResetCustomList"]
                      ),
                    ],
                    4
                  ),
                  Object(o["i"])("div", k, [
                    f,
                    Object(o["i"])(
                      "h3",
                      v,
                      Object(o["I"])(e.$t("ui.mobileWarning")),
                      1
                    ),
                  ]),
                  Object(o["i"])("div", y, [
                    Object(o["l"])(
                      V,
                      {
                        id: "versionChanges",
                        text: e.$t("ui.softwareUpdated"),
                        "sub-text": e.$t("ui.seeChanges"),
                        onSubTextClick: x.seeChangeLog,
                      },
                      null,
                      8,
                      ["text", "sub-text", "onSubTextClick"]
                    ),
                    Object(o["l"])(
                      V,
                      {
                        id: "newVersionAvailable",
                        text: e.$t("ui.newVersionAvailable"),
                        "sub-text": e.$t("ui.download"),
                        onSubTextClick: x.downloadNewVersion,
                      },
                      null,
                      8,
                      ["text", "sub-text", "onSubTextClick"]
                    ),
                    Object(o["l"])(
                      V,
                      {
                        id: "copiedAddress",
                        text: e.$t("donate.copiedAddres"),
                      },
                      null,
                      8,
                      ["text"]
                    ),
                  ]),
                ],
                2
              ),
              [[o["M"], x.compatible]]
            ),
            x.compatible
              ? Object(o["g"])("", !0)
              : (Object(o["y"])(),
                Object(o["h"])("div", T, [
                  j,
                  Object(o["i"])(
                    "h3",
                    O,
                    Object(o["I"])(e.$t("ui.compatible")),
                    1
                  ),
                ])),
          ],
          64
        )
      );
    }
    a("14d9");
    const D = (e) => (
        Object(o["A"])("data-v-3072d65e"), (e = e()), Object(o["z"])(), e
      ),
      x = ["id"],
      C = { key: 0, class: "loading-spinner" },
      z = D(() =>
        Object(o["i"])(
          "div",
          { class: "spinner-border", role: "status" },
          [Object(o["i"])("span", { class: "visually-hidden" }, "Loading...")],
          -1
        )
      ),
      L = [z],
      I = { class: "to-do-list" },
      S = ["onDrop"],
      $ = { class: "todo-item-container" };
    function M(e, t, a, i, n, s) {
      const r = Object(o["F"])("list-header"),
        c = Object(o["F"])("to-do-item");
      return (
        Object(o["y"])(),
        Object(o["h"])(
          "div",
          {
            id: "list" + a.id,
            class: Object(o["t"])([
              "to-do-list-container d-flex flex-column",
              {
                "old-date":
                  !a.customTodoList && s.moments(a.id).isBefore(Date(), "day"),
              },
            ]),
            ref: "listContainer",
            style: Object(o["u"])(`flex: 0 0 ${100 / s.columns}%;`),
          },
          [
            n.loading
              ? (Object(o["y"])(), Object(o["h"])("div", C, L))
              : Object(o["g"])("", !0),
            Object(o["l"])(
              r,
              {
                id: a.id,
                customTodoList: a.customTodoList,
                cTodoListIndex: a.cTodoListIndex,
                toDoList: s.toDoListState,
              },
              null,
              8,
              ["id", "customTodoList", "cTodoListIndex", "toDoList"]
            ),
            Object(o["i"])("ul", I, [
              (Object(o["y"])(!0),
              Object(o["h"])(
                o["a"],
                null,
                Object(o["D"])(
                  s.toDoListState,
                  (e, i) => (
                    Object(o["y"])(),
                    Object(o["h"])("li", { key: i }, [
                      Object(o["i"])(
                        "div",
                        {
                          class: "drop-zone",
                          onDrop: (e) => s.onDrop(e, a.id, i),
                          onDragover:
                            t[0] ||
                            (t[0] = Object(o["S"])(() => {}, ["prevent"])),
                          onDragenter:
                            t[1] ||
                            (t[1] = Object(o["S"])(() => {}, ["prevent"])),
                        },
                        [
                          Object(o["l"])(
                            c,
                            { "to-do": e, index: i, "to-do-list-id": a.id },
                            null,
                            8,
                            ["to-do", "index", "to-do-list-id"]
                          ),
                        ],
                        40,
                        S
                      ),
                    ])
                  )
                ),
                128
              )),
            ]),
            Object(o["i"])(
              "div",
              {
                class: Object(o["t"])([
                  "fake-drop-zone flex-grow-1 margin-bottom-2",
                  { "fake-drag-hover": n.fakeItemsDragHover },
                ]),
                onDrop: t[7] || (t[7] = (e) => s.onDropAtEnd(e, a.id)),
                onDragenter:
                  t[8] ||
                  (t[8] = Object(o["S"])(
                    (...e) => s.onDragenter && s.onDragenter(...e),
                    ["self"]
                  )),
                onDragleave:
                  t[9] ||
                  (t[9] = Object(o["S"])(
                    (...e) => s.onDragleave && s.onDragleave(...e),
                    ["self"]
                  )),
                onDragover:
                  t[10] || (t[10] = Object(o["S"])(() => {}, ["prevent"])),
              },
              [
                Object(o["i"])("div", $, [
                  Object(o["Q"])(
                    Object(o["i"])(
                      "input",
                      {
                        class: "todo-input new-todo-input",
                        type: "text",
                        ref: "newToDoInput",
                        "onUpdate:modelValue":
                          t[2] || (t[2] = (e) => (n.newToDo.text = e)),
                        onBlur: t[3] || (t[3] = (e) => s.addToDo()),
                        onKeyup: [
                          t[4] ||
                            (t[4] = Object(o["R"])(
                              (e) => s.addToDo(),
                              ["enter"]
                            )),
                          t[5] ||
                            (t[5] = Object(o["R"])(
                              (e) => s.cancelAdd(),
                              ["esc"]
                            )),
                        ],
                      },
                      null,
                      544
                    ),
                    [[o["L"], n.newToDo.text]]
                  ),
                ]),
                Object(o["i"])(
                  "div",
                  {
                    class: Object(o["t"])([
                      "fake-lines",
                      { "custom-list": a.customTodoList },
                    ]),
                    onClick:
                      t[6] || (t[6] = (t) => e.$refs.newToDoInput.focus()),
                  },
                  null,
                  2
                ),
              ],
              34
            ),
          ],
          14,
          x
        )
      );
    }
    const E = { class: "d-flex" },
      A = ["innerHTML"];
    function W(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["h"])(
          "div",
          {
            class: Object(o["t"])([
              "item-drop-zone",
              [{ "drag-hover": n.todoDragHover }],
            ]),
            onDragenter:
              t[5] ||
              (t[5] = Object(o["S"])(
                (...e) => s.onDragenter && s.onDragenter(...e),
                ["self"]
              )),
            onDragleave:
              t[6] ||
              (t[6] = Object(o["S"])(
                (...e) => s.onDragleave && s.onDragleave(...e),
                ["self"]
              )),
            onDrop:
              t[7] || (t[7] = (...e) => s.onDragleave && s.onDragleave(...e)),
          },
          [
            Object(o["i"])(
              "div",
              {
                class: Object(o["t"])([
                  "todo-item-container",
                  { "compact-view": s.compactView },
                ]),
                ref: "itemContainer",
              },
              [
                n.editing
                  ? Object(o["g"])("", !0)
                  : (Object(o["y"])(),
                    Object(o["h"])(
                      "div",
                      {
                        key: 0,
                        class: "inline-todo-item d-flex flex-column",
                        onMouseenter:
                          t[0] ||
                          (t[0] = (...e) =>
                            s.showToDoItem && s.showToDoItem(...e)),
                      },
                      [
                        Object(o["i"])("div", E, [
                          Object(o["i"])(
                            "span",
                            {
                              class: Object(o["t"])([
                                "noselect item-text",
                                {
                                  "checked-todo": a.toDo.checked,
                                  "compact-view": s.compactView,
                                },
                              ]),
                              style: { "flex-grow": "1" },
                            },
                            [
                              "none" != a.toDo.color
                                ? (Object(o["y"])(),
                                  Object(o["h"])(
                                    "span",
                                    {
                                      key: 0,
                                      class: Object(o["t"])([
                                        "cicle-icon",
                                        {
                                          "bi-check-circle-fill":
                                            a.toDo.checked,
                                          "bi-circle-fill": !a.toDo.checked,
                                        },
                                      ]),
                                      style: Object(o["u"])(
                                        "color: " + a.toDo.color
                                      ),
                                    },
                                    null,
                                    6
                                  ))
                                : (Object(o["y"])(),
                                  Object(o["h"])(
                                    "span",
                                    {
                                      key: 1,
                                      class: Object(o["t"])([
                                        "cicle-icon",
                                        {
                                          "bi-check-circle": a.toDo.checked,
                                          "bi-circle": !a.toDo.checked,
                                        },
                                      ]),
                                    },
                                    null,
                                    2
                                  )),
                              Object(o["i"])(
                                "span",
                                { innerHTML: s.todoText },
                                null,
                                8,
                                A
                              ),
                              s.compactView
                                ? Object(o["g"])("", !0)
                                : (Object(o["y"])(),
                                  Object(o["h"])(
                                    "span",
                                    {
                                      key: 2,
                                      class: Object(o["t"])([
                                        "item-time mx-2",
                                        { "checked-todo": a.toDo.checked },
                                      ]),
                                    },
                                    [
                                      Object(o["k"])(
                                        Object(o["I"])(
                                          s.timeFormat(a.toDo.time)
                                        ) + " ",
                                        1
                                      ),
                                      Object(o["i"])(
                                        "div",
                                        {
                                          class: Object(o["t"])([
                                            "alarm-indicator",
                                            {
                                              "show-alarm-indicator":
                                                s.notificationIndicator &&
                                                a.toDo.alarm,
                                            },
                                          ]),
                                        },
                                        null,
                                        2
                                      ),
                                    ],
                                    2
                                  )),
                            ],
                            2
                          ),
                          s.compactView
                            ? (Object(o["y"])(),
                              Object(o["h"])(
                                "span",
                                {
                                  key: 0,
                                  class: Object(o["t"])([
                                    "item-time",
                                    { "checked-todo": a.toDo.checked },
                                  ]),
                                },
                                [
                                  Object(o["k"])(
                                    Object(o["I"])(s.timeFormat(a.toDo.time)) +
                                      " ",
                                    1
                                  ),
                                  Object(o["i"])(
                                    "div",
                                    {
                                      class: Object(o["t"])([
                                        "alarm-indicator",
                                        {
                                          "show-alarm-indicator":
                                            s.notificationIndicator &&
                                            a.toDo.alarm,
                                        },
                                      ]),
                                    },
                                    null,
                                    2
                                  ),
                                ],
                                2
                              ))
                            : Object(o["g"])("", !0),
                        ]),
                      ],
                      32
                    )),
                Object(o["Q"])(
                  Object(o["i"])(
                    "input",
                    {
                      class: "edit todo-input",
                      type: "text",
                      "onUpdate:modelValue":
                        t[1] || (t[1] = (e) => (n.text = e)),
                      ref: "toDoEditInput",
                      onBlur: t[2] || (t[2] = (e) => s.doneEdit()),
                      onKeyup: [
                        t[3] ||
                          (t[3] = Object(o["R"])(
                            (e) => s.doneEdit(),
                            ["enter"]
                          )),
                        t[4] ||
                          (t[4] = Object(o["R"])(
                            (e) => s.cancelEdit(),
                            ["esc"]
                          )),
                      ],
                    },
                    null,
                    544
                  ),
                  [
                    [o["M"], n.editing],
                    [o["L"], n.text],
                  ]
                ),
              ],
              2
            ),
          ],
          34
        )
      );
    }
    var R = {
        open() {
          var e = indexedDB.open("weekToDo", 4);
          return (
            (e.onupgradeneeded = function (e) {
              var t = e.target.result;
              t.objectStoreNames.contains("todo_lists") ||
                t.createObjectStore("todo_lists", { autoIncrement: !1 }),
                t.objectStoreNames.contains("repeating_events") ||
                  t.createObjectStore("repeating_events", {
                    autoIncrement: !1,
                  }),
                t.objectStoreNames.contains("repeating_events_by_date") ||
                  t.createObjectStore("repeating_events_by_date", {
                    autoIncrement: !1,
                  });
            }),
            (e.onerror = function (e) {
              console.log("error opening database " + e.target.errorCode);
            }),
            e
          );
        },
        get(e, t, a) {
          let o = e.transaction([t], "readonly"),
            i = o.objectStore(t),
            n = i.get(a);
          return n;
        },
        add(e, t, a, o) {
          let i = e.transaction([t], "readwrite"),
            n = i.objectStore(t),
            s = n.add(o, a);
          return s;
        },
        update(e, t, a, o) {
          let i = e.transaction([t], "readwrite"),
            n = i.objectStore(t),
            s = JSON.parse(JSON.stringify(o)),
            r = n.put(s, a);
          return r;
        },
        delete(e, t, a) {
          let o = e.transaction([t], "readwrite"),
            i = o.objectStore(t),
            n = i.delete(a);
          return n;
        },
        selectAll(e, t) {
          let a = e.transaction([t], "readwrite"),
            o = a.objectStore(t),
            i = o.openCursor();
          return i;
        },
        clear(e, t) {
          let a = e.transaction([t], "readwrite"),
            o = a.objectStore(t),
            i = o.clear();
          return i;
        },
      },
      B = {
        update(e, t) {
          let a = R.open();
          a.onsuccess = function (a) {
            let o = a.target.result;
            R.update(o, "todo_lists", e, t);
          };
        },
        remove(e) {
          let t = R.open();
          t.onsuccess = function (t) {
            let a = t.target.result;
            R.delete(a, "todo_lists", e);
          };
        },
      },
      P = a("c1df"),
      Y = a.n(P),
      _ = a("8339"),
      N = {
        components: {},
        props: {
          toDo: { required: !0, type: Object },
          index: { required: !0, type: Number },
          toDoListId: { required: !0, type: String },
        },
        data() {
          return {
            editing: !1,
            text: this.toDo.text,
            todoDragHover: !1,
            options: { target: "_blank", defaultProtocol: "https" },
          };
        },
        methods: {
          editToDo: function () {
            (this.text = this.toDo.text),
              (this.editing = !0),
              this.$nextTick(function () {
                this.$refs.toDoEditInput.focus(),
                  this.$refs.toDoEditInput.select();
              }),
              (document.getElementById("todo-item-active").style.display =
                "none");
          },
          doneEdit: function () {
            (this.editing = !1),
              this.$store.commit("updateTodo", {
                toDoListId: this.toDoListId,
                index: this.index,
                text: this.text,
              }),
              B.update(
                this.toDoListId,
                this.$store.getters.todoLists[this.toDoListId]
              );
          },
          cancelEdit: function () {
            (this.text = this.toDo.text), (this.editing = !1);
          },
          onDragenter: function () {
            this.todoDragHover = !0;
          },
          onDragleave: function () {
            this.todoDragHover = !1;
          },
          timeFormat: function (e) {
            if (e) return Y()(e, "HH:mm").format("hh:mm a");
          },
          showToDoItem: function () {
            var e = {
              toDo: this.toDo,
              index: this.index,
              toDoListId: this.toDoListId,
              edit: this.editToDo,
              container: this.$refs.itemContainer,
            };
            this.$store.commit("setActiveTodo", e);
            const t = document.getElementById("todo-item-active");
            this.$nextTick(function () {
              const e = this.$refs.itemContainer.getBoundingClientRect();
              (t.style.width = e.width + "px"),
                (t.style.top = e.y + "px"),
                (t.style.left = e.x + "px"),
                (t.style.display = "block");
              const a = 10;
              var o =
                parseInt(window.innerHeight) -
                (parseInt(e.y) + parseInt(t.offsetHeight)) -
                a;
              o < 0 && (t.style.top = e.y + o + "px");
            });
          },
        },
        computed: {
          todoText: function () {
            return Object(_["a"])(this.toDo.text, this.options);
          },
          compactView: function () {
            return this.$store.getters.config.compactView;
          },
          notificationIndicator: function () {
            return this.$store.getters.config.notificationIndicator;
          },
        },
      },
      V = (a("8784"), a("6b0d")),
      U = a.n(V);
    const q = U()(N, [
      ["render", W],
      ["__scopeId", "data-v-44e81f4e"],
    ]);
    var F = q;
    const H = (e) => (
        Object(o["A"])("data-v-04357d4d"), (e = e()), Object(o["z"])(), e
      ),
      K = { class: "weekly-to-do-header d-flex" },
      G = {
        class:
          "bi-info header-menu-icons align-self-center dropdown-toggle-split",
        style: { visibility: "hidden" },
      },
      Q = { style: { "flex-grow": "1" }, class: "noselect" },
      J = { key: 0 },
      Z = { class: "weekly-to-do-subheader" },
      X = { key: 1 },
      ee = {
        class:
          "bi-three-dots-vertical header-menu-icons dropdown-toggle-split align-self-center",
        type: "button",
        "data-bs-toggle": "dropdown",
      },
      te = { class: "dropdown-menu", "aria-labelledby": "btnTaskOptionMenu" },
      ae = H(() => Object(o["i"])("i", { class: "bi-plus-lg" }, null, -1)),
      oe = H(() => Object(o["i"])("i", { class: "bi-check2-all" }, null, -1)),
      ie = H(() => Object(o["i"])("i", { class: "bi-sort-down" }, null, -1)),
      ne = H(() => Object(o["i"])("i", { class: "bi-reply-all" }, null, -1)),
      se = H(() => Object(o["i"])("i", { class: "bi-clipboard" }, null, -1)),
      re = H(() =>
        Object(o["i"])(
          "li",
          null,
          [Object(o["i"])("hr", { class: "dropdown-divider" })],
          -1
        )
      ),
      ce = H(() => Object(o["i"])("i", { class: "bi-trash" }, null, -1)),
      le = H(() => Object(o["i"])("i", { class: "bi-x-circle" }, null, -1));
    function de(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["h"])("div", K, [
          Object(o["Q"])(Object(o["i"])("i", G, null, 512), [
            [o["M"], !n.editing],
          ]),
          Object(o["i"])("div", Q, [
            a.customTodoList
              ? (Object(o["y"])(),
                Object(o["h"])("div", X, [
                  Object(o["Q"])(
                    Object(o["i"])(
                      "h4",
                      {
                        onDblclick:
                          t[0] ||
                          (t[0] = (...e) =>
                            s.editToDoListName && s.editToDoListName(...e)),
                      },
                      Object(o["I"])(s.todo_list_name),
                      545
                    ),
                    [[o["M"], !n.editing]]
                  ),
                  Object(o["Q"])(
                    Object(o["i"])(
                      "input",
                      {
                        class: "custom-todo-input",
                        type: "text",
                        "onUpdate:modelValue":
                          t[1] || (t[1] = (e) => (n.name = e)),
                        ref: "cTodoInput",
                        onBlur: t[2] || (t[2] = (e) => s.doneEdit()),
                        onKeyup: [
                          t[3] ||
                            (t[3] = Object(o["R"])(
                              (e) => s.doneEdit(),
                              ["enter"]
                            )),
                          t[4] ||
                            (t[4] = Object(o["R"])(
                              (e) => s.cancelEdit(),
                              ["esc"]
                            )),
                        ],
                      },
                      null,
                      544
                    ),
                    [
                      [o["M"], n.editing],
                      [o["L"], n.name],
                    ]
                  ),
                ]))
              : (Object(o["y"])(),
                Object(o["h"])("div", J, [
                  Object(o["i"])(
                    "h4",
                    { class: Object(o["t"])({ "today-date": s.is_today }) },
                    Object(o["I"])(
                      s.moments(a.id).locale(s.language).format("dddd")
                    ),
                    3
                  ),
                  Object(o["i"])(
                    "span",
                    Z,
                    Object(o["I"])(
                      s.moments(a.id).locale(s.language).format("LL")
                    ),
                    1
                  ),
                ])),
          ]),
          Object(o["Q"])(Object(o["i"])("i", ee, null, 512), [
            [o["M"], !n.editing],
          ]),
          Object(o["i"])("ul", te, [
            Object(o["i"])("li", null, [
              Object(o["i"])(
                "button",
                {
                  class: "dropdown-item",
                  type: "button",
                  onClick:
                    t[5] || (t[5] = (...e) => s.newTask && s.newTask(...e)),
                },
                [
                  ae,
                  Object(o["k"])(),
                  Object(o["i"])(
                    "span",
                    null,
                    Object(o["I"])(e.$t("ui.newTask")),
                    1
                  ),
                ]
              ),
            ]),
            Object(o["Q"])(
              Object(o["i"])(
                "li",
                null,
                [
                  Object(o["i"])(
                    "button",
                    {
                      class: "dropdown-item",
                      type: "button",
                      onClick:
                        t[6] ||
                        (t[6] = (...e) =>
                          s.check_all_items && s.check_all_items(...e)),
                    },
                    [
                      oe,
                      Object(o["k"])(),
                      Object(o["i"])(
                        "span",
                        null,
                        Object(o["I"])(e.$t("ui.completeAll")),
                        1
                      ),
                    ]
                  ),
                ],
                512
              ),
              [[o["M"], !s.allTodoChecked()]]
            ),
            Object(o["i"])("li", null, [
              Object(o["i"])(
                "button",
                {
                  class: "dropdown-item",
                  type: "button",
                  onClick:
                    t[7] || (t[7] = (...e) => s.sortItems && s.sortItems(...e)),
                },
                [
                  ie,
                  Object(o["k"])(),
                  Object(o["i"])(
                    "span",
                    null,
                    Object(o["I"])(e.$t("ui.reorder")),
                    1
                  ),
                ]
              ),
            ]),
            Object(o["Q"])(
              Object(o["i"])(
                "li",
                null,
                [
                  Object(o["i"])(
                    "button",
                    {
                      class: "dropdown-item",
                      type: "button",
                      onClick:
                        t[8] ||
                        (t[8] = (...e) =>
                          s.moveUndoneItems && s.moveUndoneItems(...e)),
                    },
                    [
                      ne,
                      Object(o["k"])(),
                      Object(o["i"])(
                        "span",
                        null,
                        Object(o["I"])(e.$t("ui.postpone")),
                        1
                      ),
                    ]
                  ),
                ],
                512
              ),
              [[o["M"], !a.customTodoList && !s.allTodoChecked()]]
            ),
            Object(o["i"])("li", null, [
              Object(o["i"])(
                "button",
                {
                  class: "dropdown-item",
                  type: "button",
                  onClick:
                    t[9] ||
                    (t[9] = (...e) =>
                      s.copyListTasksToClipboard &&
                      s.copyListTasksToClipboard(...e)),
                },
                [
                  se,
                  Object(o["k"])(),
                  Object(o["i"])(
                    "span",
                    null,
                    Object(o["I"])(e.$t("ui.copyTasks")),
                    1
                  ),
                ]
              ),
            ]),
            re,
            Object(o["i"])("li", null, [
              Object(o["i"])(
                "button",
                {
                  class: "dropdown-item",
                  type: "button",
                  onClick:
                    t[10] ||
                    (t[10] = (...e) => s.clearList && s.clearList(...e)),
                  "data-bs-toggle": "modal",
                  "data-bs-target": "#clearListModal",
                },
                [
                  ce,
                  Object(o["k"])(),
                  Object(o["i"])(
                    "span",
                    null,
                    Object(o["I"])(e.$t("ui.clearList")),
                    1
                  ),
                ]
              ),
            ]),
            Object(o["Q"])(
              Object(o["i"])(
                "li",
                null,
                [
                  Object(o["i"])(
                    "button",
                    {
                      class: "dropdown-item",
                      type: "button",
                      "data-bs-dismiss": "modal",
                      onClick:
                        t[11] ||
                        (t[11] = (...e) => s.removeList && s.removeList(...e)),
                      "data-bs-toggle": "modal",
                      "data-bs-target": "#customListRemoveModal",
                    },
                    [
                      le,
                      Object(o["k"])(),
                      Object(o["i"])(
                        "span",
                        null,
                        Object(o["I"])(e.$t("ui.removeList")),
                        1
                      ),
                    ]
                  ),
                ],
                512
              ),
              [[o["M"], a.customTodoList]]
            ),
          ]),
        ])
      );
    }
    var ue = {
        get(e) {
          return JSON.parse(localStorage.getItem(e));
        },
        set(e, t) {
          localStorage.setItem(e, JSON.stringify(t));
        },
        remove(e) {
          localStorage.removeItem(e);
        },
        clean() {
          localStorage.clear();
        },
        as_json() {
          var e = {},
            t = Object.keys(localStorage),
            a = t.length;
          while (a--) e[t[a]] = localStorage.getItem(t[a]);
          return e;
        },
        load_json(e) {
          localStorage.setItem("config", e["config"]),
            localStorage.setItem("customTodoListIds", e["customTodoListIds"]);
        },
      },
      pe = {
        load() {
          let e = ue.get("customTodoListIds");
          return e || (ue.set("customTodoListIds", []), []);
        },
        update(e) {
          ue.set("customTodoListIds", e);
        },
      },
      me = {
        refreshDayNotifications(e, t) {
          let a = e.$store.getters.todoLists[t];
          var o = e.$store.getters.config.notificationSound;
          if (t == Y()().format("YYYYMMDD")) {
            e.$store.getters.notifications.forEach((e) => {
              clearTimeout(e);
            });
            var i = [];
            null != a &&
              a.forEach((e) => {
                e.alarm &&
                  !e.checked &&
                  Y()(e.time, "HH:mm") >= Y()() &&
                  i.push(this.createNotificationAlert(e.time, e.text, o));
              }),
              e.$store.commit("setNotificatios", i);
          }
        },
        createNotificationAlert(e, t, a) {
          var o = new Y.a(),
            i = new Y.a(e, "HH:mm"),
            n = Y.a.duration(i.diff(o)).asMilliseconds(),
            s = setTimeout(
              function () {
                this.createNotification(Y()(e, "HH:mm").format("LT"), t, a);
              }.bind(this),
              n
            );
          return s;
        },
        createNotification(e, t, a) {
          new Notification(e, { body: t, icon: "/favicon.ico", silent: !0 }),
            this.playNotificationSound(a);
        },
        playNotificationSound(e) {
          var t;
          switch (e) {
            case "pop":
              t = new Audio("sounds/pop-alert.ogg");
              break;
            case "positive":
              t = new Audio("sounds/positive.ogg");
              break;
            case "bell":
              t = new Audio("sounds/loud-bell.ogg");
              break;
            case "soft":
              t = new Audio("sounds/soft.ogg");
              break;
            case "tiny":
              t = new Audio("sounds/tiny.ogg");
              break;
            case "piano":
              t = new Audio("sounds/piano.ogg");
              break;
            case "soft-bell":
              t = new Audio("sounds/soft-bell.ogg");
              break;
            case "metal":
              t = new Audio("sounds/metal-gear.ogg");
              break;
            case "none":
              return;
          }
          t.addEventListener("canplaythrough", () => {
            t.play();
          });
        },
      },
      be = {
        pendingTasksCount(e) {
          return null == e || "undefined" === typeof e
            ? 0
            : e.filter((e) => !e.checked).length;
        },
        reorderTasksList(e) {
          var t = e;
          return (
            t.sort(function (e, t) {
              if (t.checked != e.checked) {
                if (t.checked) return -1;
                if (e.checked) return 1;
              }
              if (t.time != e.time) {
                if (null == t.time) return -1;
                if (null == e.time) return 1;
              }
              return t.time < e.time ? 1 : t.time > e.time ? -1 : void 0;
            }),
            t
          );
        },
      },
      ge = a("7b17"),
      he = {
        components: {},
        props: {
          id: { required: !1, type: String },
          customTodoList: { required: !1, default: !1, type: Boolean },
          cTodoListIndex: { required: !1, type: Number },
          toDoList: { required: !1, type: Array },
        },
        data() {
          return { editing: !1, name: "" };
        },
        mounted() {
          this.customTodoList &&
            this.$store.getters.actions.cListCreated &&
            (this.$store.commit("actionsCListCreatedUpdate", !1),
            (this.editing = !0),
            this.$nextTick(function () {
              this.$refs.cTodoInput.focus(), this.$refs.cTodoInput.select();
            }));
        },
        methods: {
          check_all_items: function () {
            this.$store.commit("checkAllItems", this.id),
              this.updateTodoList(
                this.id,
                this.$store.getters.todoLists[this.id]
              );
          },
          moveUndoneItems: function () {
            let e = this.moments(this.id).add(1, "d").format("YYYYMMDD");
            this.$store.commit("moveUndoneItems", {
              origenId: this.id,
              destinyId: e,
            }),
              this.updateTodoList(
                this.id,
                this.$store.getters.todoLists[this.id]
              ),
              this.$store.getters.config.autoReorderTasks
                ? this.updateTodoList(
                    e,
                    be.reorderTasksList(this.$store.getters.todoLists[e])
                  )
                : this.updateTodoList(e, this.$store.getters.todoLists[e]);
          },
          moments: function (e) {
            return Y()(e);
          },
          updateTodoList: function (e, t) {
            me.refreshDayNotifications(this, e), B.update(e, t);
          },
          allTodoChecked: function () {
            let e = !0;
            return (
              this.toDoList.forEach(function (t) {
                t.checked || (e = !1);
              }),
              e
            );
          },
          editToDoListName: function () {
            (this.name =
              this.$store.getters.cTodoListIds[this.cTodoListIndex].listName),
              (this.editing = !0),
              this.$nextTick(function () {
                this.$refs.cTodoInput.focus(), this.$refs.cTodoInput.select();
              });
          },
          doneEdit: function () {
            (this.editing = !1),
              this.$store.commit("updateCustomTodoList", {
                index: this.cTodoListIndex,
                name: this.name,
              }),
              pe.update(this.$store.getters.cTodoListIds);
          },
          cancelEdit: function () {
            (this.name =
              this.$store.getters.cTodoListIds[this.cTodoListIndex].listName ||
              ""),
              (this.editing = !1);
          },
          removeList: function () {
            this.$store.commit("actionsCListToRmvUpdate", {
              id: this.id,
              index: this.cTodoListIndex,
              name: this.$store.getters.cTodoListIds[this.cTodoListIndex]
                .listName,
            });
          },
          sortItems: function () {
            B.update(this.id, be.reorderTasksList(this.toDoList));
          },
          clearList: function () {
            this.$store.commit("setListToClear", this.id);
          },
          copyListTasksToClipboard: async function () {
            await navigator.clipboard.writeText(this.todoListToString());
            let e = new ge["c"](
              document.getElementById("copiedTaskToClipboard")
            );
            e.show();
          },
          todoListToString: function () {
            return this.toDoList
              .map((e) => {
                let t = "- " + e.text;
                return e.time && (t += ` [${e.time}]`), t;
              })
              .join("\n");
          },
          newTask: function () {
            this.$nextTick(function () {
              document
                .getElementById("list" + this.id)
                .getElementsByClassName("new-todo-input")[0]
                .focus();
            });
          },
        },
        computed: {
          is_today: function () {
            return Y()().format("YYYYMMDD") == this.id;
          },
          todo_list_name: function () {
            return this.$store.getters.cTodoListIds[this.cTodoListIndex]
              .listName;
          },
          language: function () {
            return this.$store.getters.config.language;
          },
        },
      };
    a("420e");
    const ke = U()(he, [
      ["render", de],
      ["__scopeId", "data-v-04357d4d"],
    ]);
    var fe = ke,
      ve = {
        update(e, t) {
          let a = R.open();
          a.onsuccess = function (a) {
            let o = a.target.result;
            R.update(o, "repeating_events_by_date", e, t);
          };
        },
        remove(e) {
          let t = R.open();
          t.onsuccess = function (t) {
            let a = t.target.result;
            R.delete(a, "repeating_events_by_date", e);
          };
        },
      },
      ye = {
        generateRepeatingEventsIntances(e, t) {
          let a = t.$store.getters.repeatingEventDateCache[e] || [];
          a.forEach((a) => {
            var o = t.$store.getters.repeatingEventList[a],
              i = t.$store.getters.repeatingEventByDate[e];
            if (!i[a]) {
              var n = JSON.parse(JSON.stringify(o.data));
              (n.listId = e),
                t.$store.commit("addTodo", n),
                t.$store.getters.config.autoReorderTasks
                  ? B.update(
                      e,
                      be.reorderTasksList(t.$store.getters.todoLists[e])
                    )
                  : B.update(e, t.$store.getters.todoLists[e]),
                (i[a] = !0),
                ve.update(e, i);
            }
          });
        },
        removeGeneratedRepeatingEvents(e, t) {
          t.$store.getters.todoLists[e].forEach((e, a) => {
            e.repeatingEvent &&
              !t.$store.getters.repeatingEventList[e.repeatingEvent] &&
              (Y()(e.listId).isBefore(Date(), "day")
                ? (e.repeatingEvent = null)
                : t.$store.commit("removeTodo", {
                    toDoListId: e.listId,
                    index: a,
                  }),
              B.update(e.listId, t.$store.getters.todoLists[e.listId]));
          });
        },
      },
      Te = {
        components: { listHeader: fe, toDoItem: F },
        props: {
          id: { required: !1, type: String },
          customTodoList: { required: !1, default: !1, type: Boolean },
          cTodoListIndex: { required: !1, type: Number },
          showCustomList: { required: !1, type: Boolean },
        },
        data() {
          return {
            newToDo: { text: "", checked: !1 },
            fakeItemCounts: 6,
            fakeItemsDragHover: !1,
            loading: !1,
          };
        },
        mounted() {
          this.setTodoListHeight(),
            window.addEventListener("resize", this.setTodoListHeight);
          let e = this.id;
          (this.loading = !0),
            this.$store.dispatch("loadTodoLists", e).then(() => {
              this.$store
                .dispatch("loadRepeatingEventGeneratedByDate", e)
                .then(() => {
                  (this.loading = !1),
                    ye.generateRepeatingEventsIntances(e, this);
                }),
                this.clearRemovedRepeatingEvents(),
                this.$emit("todoListMounted", e);
            });
        },
        unmounted() {
          window.removeEventListener("resize", this.setTodoListHeight);
        },
        beforeCreate() {
          let e = this.id;
          this.$store.commit("loadTodoLists", { todoListId: e, todoList: [] });
        },
        methods: {
          addToDo: function () {
            if ("" != this.newToDo.text) {
              var e = {
                text: this.newToDo.text,
                checked: !1,
                listId: this.id,
                desc: "",
                subTaskList: [],
                color: "none",
                priority: 0,
                tags: [],
                time: null,
                alarm: !1,
                repeatingEvent: null,
              };
              this.$store.commit("addTodo", e),
                this.updateTodoList(
                  this.id,
                  this.$store.getters.todoLists[this.id]
                ),
                (this.newToDo.text = "");
            }
          },
          cancelAdd: function () {
            this.newToDo.text = "";
          },
          moments: function (e) {
            return Y()(e);
          },
          onDrop: function (e, t, a) {
            let o = JSON.parse(e.dataTransfer.getData("item")),
              i = e.dataTransfer.getData("index");
            this.$store.commit("removeTodo", {
              toDoListId: o.listId,
              index: i,
            }),
              this.updateTodoList(
                o.listId,
                this.$store.getters.todoLists[o.listId]
              ),
              o.listId != t && (o.repeatingEvent = null),
              (o.listId = t),
              this.$store.commit("insertTodo", {
                toDoListId: t,
                index: a,
                toDo: o,
              }),
              this.$store.getters.config.autoReorderTasks
                ? this.updateTodoList(
                    t,
                    be.reorderTasksList(this.$store.getters.todoLists[t])
                  )
                : this.updateTodoList(t, this.$store.getters.todoLists[t]);
          },
          onDropAtEnd: function (e, t) {
            let a = JSON.parse(e.dataTransfer.getData("item")),
              o = e.dataTransfer.getData("index");
            this.$store.commit("removeTodo", {
              toDoListId: a.listId,
              index: o,
            }),
              this.updateTodoList(
                a.listId,
                this.$store.getters.todoLists[a.listId]
              ),
              a.listId != t && (a.repeatingEvent = null),
              (a.listId = t),
              this.$store.commit("addTodo", a),
              this.$store.getters.config.autoReorderTasks
                ? this.updateTodoList(
                    t,
                    be.reorderTasksList(this.$store.getters.todoLists[t])
                  )
                : this.updateTodoList(t, this.$store.getters.todoLists[t]),
              (this.fakeItemsDragHover = !1);
          },
          updateTodoList: function (e, t) {
            me.refreshDayNotifications(this, e), B.update(e, t);
          },
          setTodoListHeight: function () {
            this.showCustomList
              ? (this.fakeItemCounts = Math.floor(
                  this.$refs.listContainer.clientHeight / 40
                ))
              : (this.fakeItemCounts = Math.floor(
                  this.$refs.listContainer.clientHeight / 34
                ));
          },
          onDragenter: function () {
            this.fakeItemsDragHover = !0;
          },
          onDragleave: function () {
            this.fakeItemsDragHover = !1;
          },
          clearRemovedRepeatingEvents: function () {
            this.customTodoList ||
              ye.removeGeneratedRepeatingEvents(this.id, this);
          },
        },
        watch: {
          showCustomList: function () {
            this.$nextTick(function () {
              this.setTodoListHeight();
            });
          },
        },
        computed: {
          toDoListState: function () {
            return this.$store.getters.todoLists[this.id];
          },
          columns: function () {
            return this.customTodoList
              ? this.$store.getters.config.customColumns
              : this.$store.getters.config.columns;
          },
        },
      };
    a("e2c5");
    const je = U()(Te, [
      ["render", M],
      ["__scopeId", "data-v-3072d65e"],
    ]);
    var Oe = je;
    const we = (e) => (
        Object(o["A"])("data-v-e13e95c4"), (e = e()), Object(o["z"])(), e
      ),
      De = { class: "side-bar" },
      xe = ["title"],
      Ce = ["title"],
      ze = ["title"],
      Le = ["title"],
      Ie = ["title"],
      Se = ["title"],
      $e = we(() =>
        Object(o["i"])("span", { style: { "flex-grow": "1" } }, null, -1)
      ),
      Me = ["title"],
      Ee = ["title"],
      Ae = ["title"];
    function We(e, t, a, i, n, s) {
      const r = Object(o["F"])("datepicker");
      return (
        Object(o["y"])(),
        Object(o["h"])("div", De, [
          Object(o["i"])(
            "img",
            {
              class: "logo",
              src: "img/LOGO-IM-png.png",
              width: "31",
              height: "31",
              alt: "ImPlanner Logo",
              "data-bs-toggle": "modal",
              "data-bs-target": "#aboutModal",
              title: e.$t("about.about"),
            },
            null,
            8,
            xe
          ),
          s.showCalendar
            ? (Object(o["y"])(),
              Object(o["h"])(
                "i",
                {
                  key: 0,
                  class: "bi-house",
                  onClick:
                    t[0] ||
                    (t[0] = (...e) => s.setTodayDate && s.setTodayDate(...e)),
                  title: e.$t("ui.today"),
                },
                null,
                8,
                Ce
              ))
            : Object(o["g"])("", !0),
          n.datepickerEnabled
            ? (Object(o["y"])(),
              Object(o["f"])(
                r,
                {
                  key: 1,
                  id: "side-bar-date-picker-input",
                  modelValue: n.pickedDate,
                  "onUpdate:modelValue":
                    t[1] || (t[1] = (e) => (n.pickedDate = e)),
                  locale: s.language,
                  weekStartsOn: s.weekStartOnMonday,
                },
                null,
                8,
                ["modelValue", "locale", "weekStartsOn"]
              ))
            : Object(o["g"])("", !0),
          s.showCalendar
            ? (Object(o["y"])(),
              Object(o["h"])(
                "i",
                {
                  key: 2,
                  class: "bi-calendar-event",
                  onClick:
                    t[2] ||
                    (t[2] = (...e) => s.changeDate && s.changeDate(...e)),
                  title: e.$t("ui.calendar"),
                },
                null,
                8,
                ze
              ))
            : Object(o["g"])("", !0),
          
          s.showCustomList
            ? (Object(o["y"])(),
              Object(o["h"])(
                "i",
                {
                  key: 4,
                  class: "bi bi-clipboard-plus",
                  onClick:
                    t[3] ||
                    (t[3] = (...e) =>
                      s.newCustomTodoList && s.newCustomTodoList(...e)),
                  title: e.$t("ui.newCustomList"),
                },
                null,
                8,
                Ie
              ))
            : Object(o["g"])("", !0),
          s.showCustomList
            ? (Object(o["y"])(),
              Object(o["h"])(
                "i",
                {
                  key: 5,
                  class: "bi bi-arrow-left-right",
                  "data-bs-target": "#ReorderCustomListsModal",
                  "data-bs-toggle": "modal",
                  title: e.$t("ui.reorderCustomLists"),
                },
                null,
                8,
                Se
              ))
            : Object(o["g"])("", !0),
          $e,
          Object(o["i"])(
            "i",
            
            null,
            8,
            Me
          ),
          Object(o["i"])(
            "i",
            
            null,
            8,
            Ee
          ),
          Object(o["i"])(
            "i",
            {
              class: "bi-gear",
              "data-bs-toggle": "modal",
              "data-bs-target": "#configModal",
              title: e.$t("settings.settings"),
              onClick:
                t[5] ||
                (t[5] = (...e) => s.openConfigModal && s.openConfigModal(...e)),
            },
            null,
            8,
            Ae
          ),
        ])
      );
    }
    var Re = a("24e7"),
      Be = a("d546"),
      Pe = a("8923"),
      Ye = a("d481"),
      _e = a("a4c2"),
      Ne = a("601b"),
      Ve = a("171e"),
      Ue = a("a089"),
      qe = a("ad53"),
      Fe = a("a3b1"),
      He = a("8dc0"),
      Ke = a("3f5e"),
      Ge = a("25f0"),
      Qe = a("eda8"),
      Je = a("a455"),
      Ze = a("ab5d"),
      Xe = {
        getLanguagePack(e) {
          let t = null;
          switch (e) {
            case "es":
              t = Be["a"];
              break;
            case "en":
              t = Pe["a"];
              break;
            case "fr":
              t = Ye["a"];
              break;
            case "pt":
              t = _e["a"];
              break;
            case "it":
              t = Ne["a"];
              break;
            case "ar":
              t = Ve["a"];
              break;
            case "pl":
              t = Ue["a"];
              break;
            case "ru":
              t = qe["a"];
              break;
            case "zh_cn":
              t = Fe["a"];
              break;
            case "zh_tw":
              t = He["a"];
              break;
            case "de":
              t = Ke["a"];
              break;
            case "ja":
              t = Ge["a"];
              break;
            case "tr":
              t = Qe["a"];
              break;
            case "uk":
              t = Je["a"];
              break;
            case "ko":
              t = Ze["a"];
              break;
          }
          return t;
        },
      },
      et = {
        name: "sideBar",
        emits: ["changeDate"],
        components: { Datepicker: Re["a"] },
        data() {
          return { pickedDate: new Date(), datepickerEnabled: !1 };
        },
        methods: {
          changeDate: function () {
            (this.datepickerEnabled = !0),
              this.$nextTick(function () {
                document.getElementById("side-bar-date-picker-input").click(),
                  document.getElementById("side-bar-date-picker-input").focus(),
                  document
                    .getElementById("side-bar-date-picker-input")
                    .addEventListener("focusout", this.resetDatePicker),
                  (document.getElementById(
                    "side-bar-date-picker-input"
                  ).onkeydown = function (e) {
                    27 == e.keyCode &&
                      document
                        .getElementById("side-bar-date-picker-input")
                        .blur();
                  });
              });
          },
          setTodayDate: function () {
            this.$emit("changeDate", Y()().format("YYYYMMDD"));
          },
          newCustomTodoList: function () {
            const e = {
              listId: Y()().format("YYYYMMDDTHHmmssS"),
              listName: "",
            };
            this.$store.commit("actionsCListCreatedUpdate", !0),
              this.$store.commit("newCustomTodoList", e),
              pe.update(this.$store.getters.cTodoListIds),
              B.update(e.listId, this.$store.getters.todoLists[e.listId]);
          },
          resetDatePicker: function () {
            document
              .getElementById("side-bar-date-picker-input")
              .removeEventListener("focusout", this.resetDatePicker),
              (this.datepickerEnabled = !1);
          },
         
          
        },
        watch: {
          pickedDate: function (e) {
            this.datepickerEnabled &&
              (document
                .getElementById("side-bar-date-picker-input")
                .removeEventListener("focusout", this.resetDatePicker),
              (this.datepickerEnabled = !1),
              this.$emit("changeDate", Y()(e).format("YYYYMMDD")),
              (this.pickedDate = new Date()));
          },
        },
        computed: {
          showCustomList: function () {
            return this.$store.getters.config.customList;
          },
          showCalendar: function () {
            return this.$store.getters.config.calendar;
          },
          weekStartOnMonday: function () {
            return this.$store.getters.config.weekStartOnMonday ? 1 : 0;
          },
          language: function () {
            let e = this.$store.getters.config.language;
            return Xe.getLanguagePack(e);
          },
        },
      };
    a("2665");
    const tt = U()(et, [
      ["render", We],
      ["__scopeId", "data-v-e13e95c4"],
    ]);
    var at = tt;
    function ot(e, t, a, i, n, s) {
      const r = Object(o["F"])("comfirm-modal");
      return (
        Object(o["y"])(),
        Object(o["f"])(
          r,
          {
            id: "customListRemoveModal",
            title: e.$t("ui.rmList"),
            text: e.$t("ui.rmListConfirm") + " " + s.listId + "?",
            ico: "bi-x-circle",
            okText: e.$t("ui.remove"),
            onOnOk: s.removeCustomList,
          },
          null,
          8,
          ["title", "text", "okText", "onOnOk"]
        )
      );
    }
    const it = (e) => (
        Object(o["A"])("data-v-2d2b92c6"), (e = e()), Object(o["z"])(), e
      ),
      nt = ["id"],
      st = { class: "modal-dialog modal-dialog-centered" },
      rt = { class: "modal-content" },
      ct = { class: "modal-body" },
      lt = { class: "d-flex flex-row" },
      dt = { style: { "margin-top": "2px" } },
      ut = { class: "modal-title" },
      pt = { class: "modal-title", style: { "font-size": "0.9rem" } },
      mt = it(() =>
        Object(o["i"])("div", { class: "horizontal-divider" }, null, -1)
      ),
      bt = { class: "modal-footer d-flex" },
      gt = ["data-bs-target"];
    function ht(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["h"])(
          "div",
          {
            class: "modal fade",
            id: a.id,
            tabindex: "-1",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
          [
            Object(o["i"])("div", st, [
              Object(o["i"])("div", rt, [
                Object(o["i"])("div", ct, [
                  Object(o["i"])("div", lt, [
                    Object(o["i"])(
                      "i",
                      {
                        class: Object(o["t"])([a.ico, "main-icon"]),
                        style: { "font-size": "38px", "margin-right": "30px" },
                      },
                      null,
                      2
                    ),
                    Object(o["i"])("div", dt, [
                      Object(o["i"])("h6", ut, Object(o["I"])(a.title), 1),
                      Object(o["i"])("text", pt, Object(o["I"])(a.text), 1),
                    ]),
                  ]),
                ]),
                mt,
                Object(o["i"])("div", bt, [
                  Object(o["i"])(
                    "button",
                    {
                      type: "button",
                      class: "btn flex-fill",
                      "data-bs-dismiss": "modal",
                      "data-bs-target": "#" + a.id,
                      onClick:
                        t[0] ||
                        (t[0] = (...e) => s.onCancel && s.onCancel(...e)),
                    },
                    Object(o["I"])(e.$t("ui.cancel")),
                    9,
                    gt
                  ),
                  Object(o["i"])(
                    "button",
                    {
                      type: "button",
                      class: "btn flex-fill",
                      "data-bs-dismiss": "modal",
                      onClick:
                        t[1] || (t[1] = (...e) => s.onOk && s.onOk(...e)),
                    },
                    Object(o["I"])(a.okText),
                    1
                  ),
                ]),
              ]),
            ]),
          ],
          8,
          nt
        )
      );
    }
    var kt = {
      name: "comfirmModal",
      props: {
        id: { required: !0 },
        title: { required: !0 },
        text: { required: !0 },
        okText: { required: !0 },
        ico: { required: !0 },
      },
      methods: {
        onOk: function () {
          this.$emit("onOk");
        },
        onCancel: function () {
          this.$emit("onCancel");
        },
      },
    };
    a("b5d6");
    const ft = U()(kt, [
      ["render", ht],
      ["__scopeId", "data-v-2d2b92c6"],
    ]);
    var vt = ft,
      yt = {
        name: "removeCustomList",
        components: { comfirmModal: vt },
        computed: {
          listId: function () {
            return this.$store.getters.actions.cListToRmv
              ? this.$store.getters.actions.cListToRmv.name
              : null;
          },
        },
        methods: {
          removeCustomList: function () {
            this.$store.commit(
              "removeCustomTodoList",
              this.$store.getters.actions.cListToRmv
            );
            var e = document.getElementById("customListRemoveModal"),
              t = ge["b"].getInstance(e);
            pe.update(this.$store.getters.cTodoListIds),
              B.remove(this.$store.getters.actions.cListToRmv.id),
              t.hide();
          },
        },
      };
    const Tt = U()(yt, [["render", ot]]);
    var jt = Tt;
    const Ot = (e) => (
        Object(o["A"])("data-v-6a7662ba"), (e = e()), Object(o["z"])(), e
      ),
      wt = {
        class: "modal fade",
        id: "configModal",
        tabindex: "-1",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true",
      },
      Dt = { class: "modal-dialog modal-dialog-centered" },
      xt = { class: "modal-content" },
      Ct = { class: "modal-header" },
      zt = { class: "modal-title" },
      Lt = Ot(() =>
        Object(o["i"])(
          "i",
          { class: "bi-x close-modal", "data-bs-dismiss": "modal" },
          null,
          -1
        )
      ),
      It = { class: "modal-body px-0", style: { display: "flex" } },
      St = Ot(() =>
        Object(o["i"])(
          "ul",
          {
            class: "nav nav-tabs",
            id: "confTab",
            role: "tablist",
            style: { display: "none" },
          },
          [
           
            Object(o["i"])("li", { class: "nav-item", role: "presentation" }, [
              Object(o["i"])(
                "button",
                {
                  class: "nav-link",
                  id: "config-general-tab",
                  "data-bs-toggle": "tab",
                  "data-bs-target": "#config-general",
                  role: "tab",
                },
                " General "
              ),
            ]),
      
            Object(o["i"])("li", { class: "nav-item", role: "presentation" }, [
              Object(o["i"])(
                "button",
                {
                  class: "nav-link",
                  id: "config-language-tab",
                  "data-bs-toggle": "tab",
                  "data-bs-target": "#config-language",
                  role: "tab",
                },
                " Language "
              ),
            ]),
          ],
          -1
        )
      ),
      $t = {
        id: "config-links-menu",
        class: "tab-pane fade show",
        style: { width: "340px" },
      },
      Mt = {
        class: "tab-content px-4",
        id: "confTab-content",
        style: { width: "100%", height: "400px", "overflow-y": "auto" },
      },
      Et = { class: "tab-pane fade active show", id: "config-general" },
      At = { class: "d-flex flex-column mt-2 h-100" },
      Wt = {
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between",
      },
      Rt = { class: "form-check-label flex-fill", for: "calendarSetting" },
      Bt = {
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between",
      },
      Pt = { class: "form-check-label flex-fill", for: "customListsSetting" },
      Yt = {
        key: 0,
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between",
      },
      _t = { class: "form-check-label", for: "updatesCheckSetting" },
      Nt = {
        key: 1,
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between",
      },
      Vt = { class: "form-check-label", for: "openOnStartup" },
      Ut = {
        key: 2,
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between",
      },
      qt = { class: "form-check-label", for: "runInBackground" },
      Ft = ["title"],
      Ht = {
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between",
      },
      Kt = { class: "form-check-label flex-fill", for: "reportErrors" },
      Gt = { class: "tab-pane fade", id: "config-behavior" },
      Qt = { class: "d-flex flex-column mt-2 h-100" },
      Jt = {
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between",
      },
      Zt = { class: "form-check-label flex-fill", for: "moveOldTasks" },
      Xt = {
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between",
      },
      ea = { class: "form-check-label flex-fill", for: "weekStartOnMonday" },
      ta = {
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between",
      },
      aa = { class: "form-check-label flex-fill", for: "moveOldTasks" },
      oa = {
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between",
      },
      ia = { class: "form-check-label flex-fill", for: "autoReorderTasks" },
      na = {
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between",
      },
      sa = {
        class: "form-check-label flex-fill",
        for: "moveCompletedTaskToBottom",
      },
      ra = {
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between",
      },
      ca = {
        class: "form-check-label flex-fill",
        for: "moveCompletedSubTaskToBottom",
      },
      la = { class: "tab-pane fade", id: "config-display" },
      da = { class: "d-flex flex-column mt-2 h-100" },
      ua = {
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between",
      },
      pa = { class: "form-check-label", for: "darkThemeSetting" },
      ma = {
        key: 0,
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between",
      },
      ba = { class: "form-check-label", for: "darkTrayIcon" },
      ga = Ot(() =>
        Object(o["i"])("div", { class: "horizontal-divider mb-3" }, null, -1)
      ),
      ha = { class: "px-1 mb-3" },
      ka = { for: "columnsConfig", class: "form-check-label" },
      fa = { class: "px-1 mb-3" },
      va = { for: "columnsConfig", class: "form-check-label" },
      ya = { class: "px-1 mb-3 zoom-config" },
      Ta = { for: "zoomConfig", class: "form-check-label" },
      ja = {
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between",
      },
      Oa = { class: "form-check-label", for: "compactViewSetting" },
      wa = {
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between",
      },
      Da = { class: "form-check-label", for: "fullscreenToDoModal" },
      xa = { class: "tab-pane fade", id: "config-notifications" },
      Ca = { class: "d-flex flex-column mt-3 h-100" },
      za = {
        key: 0,
        class: "orm-check form-switch d-flex px-0 mb-3 justify-content-between",
      },
      La = {
        class: "form-check-label",
        style: { "margin-left": "0px" },
        for: "notificationOnStartup",
      },
      Ia = {
        class:
          "form-check form-switch d-flex px-0 mb-3 justify-content-between",
      },
      Sa = {
        class: "form-check-label",
        style: { "margin-left": "0px" },
        for: "notificationIndicator",
      },
      $a = Ot(() =>
        Object(o["i"])("div", { class: "horizontal-divider mb-3" }, null, -1)
      ),
      Ma = { for: "notificationSound", class: "form-label" },
      Ea = { class: "d-flex" },
      Aa = Object(o["j"])(
        '<option value="none" data-v-6a7662ba>None</option><option value="pop" data-v-6a7662ba>Pop</option><option value="bell" data-v-6a7662ba>Bell</option><option value="soft-bell" data-v-6a7662ba>Soft Bell</option><option value="soft" data-v-6a7662ba>Soft</option><option value="tiny" data-v-6a7662ba>Tiny</option><option value="piano" data-v-6a7662ba>Piano</option><option value="positive" data-v-6a7662ba>Positive</option><option value="metal" data-v-6a7662ba>Metal</option>',
        9
      ),
      Wa = [Aa],
      Ra = Ot(() =>
        Object(o["i"])("i", { class: "bi-play-circle a" }, null, -1)
      ),
      Ba = [Ra],
      Pa = { class: "tab-pane fade", id: "config-data" },
      Ya = { class: "d-flex flex-column mt-2 h-100" },
      _a = {
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between align-items-center",
      },
      Na = { class: "form-check-label", for: "export-data-btn" },
      Va = Ot(() =>
        Object(o["i"])(
          "i",
          { class: "icons bi-cloud-arrow-down mx-2" },
          null,
          -1
        )
      ),
      Ua = {
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between align-items-center",
      },
      qa = { class: "form-check-label", for: "import-data-btn" },
      Fa = Ot(() =>
        Object(o["i"])("i", { class: "icons bi-cloud-arrow-up mx-2" }, null, -1)
      ),
      Ha = {
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between align-items-center",
      },
      Ka = { class: "form-check-label", for: "clear-data-btn" },
      Ga = {
        id: "clear-data-btn",
        type: "button",
        class: "btn py-1 px-2 border",
        style: { width: "140px" },
        "data-bs-dismiss": "modal",
        "data-bs-toggle": "modal",
        "data-bs-target": "#clearDataModal",
      },
      Qa = Ot(() =>
        Object(o["i"])("i", { class: "icons bi-x-circle mx-2" }, null, -1)
      ),
      Ja = { class: "tab-pane fade", id: "config-language" },
      Za = { class: "d-flex flex-column mt-2 h-100" },
      Xa = { for: "language", class: "form-label" },
      eo = Object(o["j"])(
        '<option value="en" data-v-6a7662ba>English</option><option value="fr" data-v-6a7662ba>Français</option><option value="ar" data-v-6a7662ba>عربية</option>',
        15
      ),
      to = [eo],
      ao = {
        class: "position-fixed bottom-0 end-0 p-3",
        style: { "z-index": "1056" },
      };
    function oo(e, t, a, i, n, s) {
      const r = Object(o["F"])("link-list"),
        c = Object(o["F"])("toast-message");
      return (
        Object(o["y"])(),
        Object(o["h"])("div", wt, [
          Object(o["i"])("div", Dt, [
            Object(o["i"])("div", xt, [
              Object(o["i"])("div", Ct, [
                Object(o["i"])(
                  "h5",
                  zt,
                  Object(o["I"])(e.$t("settings.settings")),
                  1
                ),
                Lt,
              ]),
              Object(o["i"])("div", It, [
                St,
                Object(o["i"])("div", $t, [
                  Object(o["l"])(r, { linkList: s.configLinks }, null, 8, [
                    "linkList",
                  ]),
                ]),
                Object(o["i"])("div", Mt, [
                  Object(o["i"])("div", Et, [
                    Object(o["i"])("div", At, [
                      Object(o["i"])("div", Wt, [
                        Object(o["i"])(
                          "label",
                          Rt,
                          Object(o["I"])(e.$t("settings.calendar")),
                          1
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              class: "form-check-input",
                              type: "checkbox",
                              id: "calendarSetting",
                              "onUpdate:modelValue":
                                t[0] ||
                                (t[0] = (e) => (n.configData.calendar = e)),
                              onChange:
                                t[1] ||
                                (t[1] = (e) =>
                                  s.changeConfig(
                                    "calendar",
                                    n.configData.calendar
                                  )),
                            },
                            null,
                            544
                          ),
                          [[o["J"], n.configData.calendar]]
                        ),
                      ]),
                      Object(o["i"])("div", Bt, [
                        Object(o["i"])(
                          "label",
                          Pt,
                          Object(o["I"])(e.$t("settings.customLists")),
                          1
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              class: "form-check-input",
                              type: "checkbox",
                              id: "customListsSetting",
                              "onUpdate:modelValue":
                                t[2] ||
                                (t[2] = (e) => (n.configData.customList = e)),
                              onChange:
                                t[3] ||
                                (t[3] = (e) =>
                                  s.changeConfig(
                                    "customList",
                                    n.configData.customList
                                  )),
                            },
                            null,
                            544
                          ),
                          [[o["J"], n.configData.customList]]
                        ),
                      ]),
                      s.isElectron()
                        ? (Object(o["y"])(),
                          Object(o["h"])("div", Yt, [
                            Object(o["i"])(
                              "label",
                              _t,
                              Object(o["I"])(e.$t("settings.checkUpdates")),
                              1
                            ),
                            Object(o["Q"])(
                              Object(o["i"])(
                                "input",
                                {
                                  class: "form-check-input",
                                  type: "checkbox",
                                  id: "updatesCheckSetting",
                                  "onUpdate:modelValue":
                                    t[4] ||
                                    (t[4] = (e) =>
                                      (n.configData.checkUpdates = e)),
                                  onChange:
                                    t[5] ||
                                    (t[5] = (e) =>
                                      s.changeConfig(
                                        "checkUpdates",
                                        n.configData.checkUpdates
                                      )),
                                },
                                null,
                                544
                              ),
                              [[o["J"], n.configData.checkUpdates]]
                            ),
                          ]))
                        : Object(o["g"])("", !0),
                      s.isElectron()
                        ? (Object(o["y"])(),
                          Object(o["h"])("div", Nt, [
                            Object(o["i"])(
                              "label",
                              Vt,
                              Object(o["I"])(e.$t("settings.openOnStartup")),
                              1
                            ),
                            Object(o["Q"])(
                              Object(o["i"])(
                                "input",
                                {
                                  class: "form-check-input",
                                  type: "checkbox",
                                  id: "openOnStartup",
                                  "onUpdate:modelValue":
                                    t[6] ||
                                    (t[6] = (e) =>
                                      (n.configData.openOnStartup = e)),
                                  onChange:
                                    t[7] || (t[7] = (e) => s.setOpenOnStart()),
                                },
                                null,
                                544
                              ),
                              [[o["J"], n.configData.openOnStartup]]
                            ),
                          ]))
                        : Object(o["g"])("", !0),
                      s.isElectron()
                        ? (Object(o["y"])(),
                          Object(o["h"])("div", Ut, [
                            Object(o["i"])("label", qt, [
                              Object(o["i"])("span", null, [
                                Object(o["k"])(
                                  Object(o["I"])(
                                    e.$t("settings.runInBackground")
                                  ) + " ",
                                  1
                                ),
                                Object(o["i"])("sup", null, [
                                  Object(o["i"])(
                                    "i",
                                    {
                                      class: "bi-info-circle",
                                      style: { cursor: "help" },
                                      title: e.$t(
                                        "settings.runInBackgroundInfo"
                                      ),
                                    },
                                    null,
                                    8,
                                    Ft
                                  ),
                                ]),
                              ]),
                            ]),
                            Object(o["Q"])(
                              Object(o["i"])(
                                "input",
                                {
                                  class: "form-check-input",
                                  type: "checkbox",
                                  id: "runInBackground",
                                  "onUpdate:modelValue":
                                    t[8] ||
                                    (t[8] = (e) =>
                                      (n.configData.runInBackground = e)),
                                  onChange:
                                    t[9] ||
                                    (t[9] = (e) => s.setRunInBackground()),
                                },
                                null,
                                544
                              ),
                              [[o["J"], n.configData.runInBackground]]
                            ),
                          ]))
                        : Object(o["g"])("", !0),
                      Object(o["i"])("div", Ht, [
                        Object(o["i"])(
                          "label",
                          Kt,
                          Object(o["I"])(e.$t("settings.reportErrors")),
                          1
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              class: "form-check-input",
                              type: "checkbox",
                              id: "reportErrors",
                              "onUpdate:modelValue":
                                t[10] ||
                                (t[10] = (e) =>
                                  (n.configData.reportErrors = e)),
                              onChange:
                                t[11] || (t[11] = (e) => s.setSendErrors()),
                            },
                            null,
                            544
                          ),
                          [[o["J"], n.configData.reportErrors]]
                        ),
                      ]),
                    ]),
                  ]),
                  Object(o["i"])("div", Gt, [
                    Object(o["i"])("div", Qt, [
                      Object(o["i"])("div", Jt, [
                        Object(o["i"])(
                          "label",
                          Zt,
                          Object(o["I"])(e.$t("settings.moveOldTasks")),
                          1
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              class: "form-check-input",
                              type: "checkbox",
                              id: "moveOldTasks",
                              "onUpdate:modelValue":
                                t[12] ||
                                (t[12] = (e) =>
                                  (n.configData.moveOldTasks = e)),
                              onChange:
                                t[13] ||
                                (t[13] = (e) =>
                                  s.changeConfig(
                                    "moveOldTasks",
                                    n.configData.moveOldTasks
                                  )),
                            },
                            null,
                            544
                          ),
                          [[o["J"], n.configData.moveOldTasks]]
                        ),
                      ]),
                      Object(o["i"])("div", Xt, [
                        Object(o["i"])(
                          "label",
                          ea,
                          Object(o["I"])(e.$t("settings.weekStartOnMonday")),
                          1
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              class: "form-check-input",
                              type: "checkbox",
                              id: "weekStartOnMonday",
                              "onUpdate:modelValue":
                                t[14] ||
                                (t[14] = (e) =>
                                  (n.configData.weekStartOnMonday = e)),
                              onChange:
                                t[15] ||
                                (t[15] = (e) =>
                                  s.changeConfig(
                                    "weekStartOnMonday",
                                    n.configData.weekStartOnMonday
                                  )),
                            },
                            null,
                            544
                          ),
                          [[o["J"], n.configData.weekStartOnMonday]]
                        ),
                      ]),
                      Object(o["i"])("div", ta, [
                        Object(o["i"])(
                          "label",
                          aa,
                          Object(o["I"])(
                            e.$t("settings.startCalendarYesterday")
                          ),
                          1
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              class: "form-check-input",
                              type: "checkbox",
                              id: "moveOldTasks",
                              "onUpdate:modelValue":
                                t[16] ||
                                (t[16] = (e) =>
                                  (n.configData.startCalendarYesterday = e)),
                              onChange:
                                t[17] ||
                                (t[17] = (e) =>
                                  s.changeConfig(
                                    "startCalendarYesterday",
                                    n.configData.startCalendarYesterday
                                  )),
                            },
                            null,
                            544
                          ),
                          [[o["J"], n.configData.startCalendarYesterday]]
                        ),
                      ]),
                      Object(o["i"])("div", oa, [
                        Object(o["i"])(
                          "label",
                          ia,
                          Object(o["I"])(e.$t("settings.autoReorderTasks")),
                          1
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              class: "form-check-input",
                              type: "checkbox",
                              id: "autoReorderTasks",
                              "onUpdate:modelValue":
                                t[18] ||
                                (t[18] = (e) =>
                                  (n.configData.autoReorderTasks = e)),
                              onChange:
                                t[19] ||
                                (t[19] = (e) =>
                                  s.changeConfig(
                                    "autoReorderTasks",
                                    n.configData.autoReorderTasks
                                  )),
                            },
                            null,
                            544
                          ),
                          [[o["J"], n.configData.autoReorderTasks]]
                        ),
                      ]),
                      Object(o["i"])("div", na, [
                        Object(o["i"])(
                          "label",
                          sa,
                          Object(o["I"])(
                            e.$t("settings.moveCompletedTaskToBottom")
                          ),
                          1
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              class: "form-check-input",
                              type: "checkbox",
                              id: "moveCompletedTaskToBottom",
                              "onUpdate:modelValue":
                                t[20] ||
                                (t[20] = (e) =>
                                  (n.configData.moveCompletedTaskToBottom = e)),
                              onChange:
                                t[21] ||
                                (t[21] = (e) =>
                                  s.changeConfig(
                                    "moveCompletedTaskToBottom",
                                    n.configData.moveCompletedTaskToBottom
                                  )),
                            },
                            null,
                            544
                          ),
                          [[o["J"], n.configData.moveCompletedTaskToBottom]]
                        ),
                      ]),
                      Object(o["i"])("div", ra, [
                        Object(o["i"])(
                          "label",
                          ca,
                          Object(o["I"])(
                            e.$t("settings.moveCompletedSubTaskToBottom")
                          ),
                          1
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              class: "form-check-input",
                              type: "checkbox",
                              id: "moveCompletedSubTaskToBottom",
                              "onUpdate:modelValue":
                                t[22] ||
                                (t[22] = (e) =>
                                  (n.configData.moveCompletedSubTaskToBottom =
                                    e)),
                              onChange:
                                t[23] ||
                                (t[23] = (e) =>
                                  s.changeConfig(
                                    "moveCompletedSubTaskToBottom",
                                    n.configData.moveCompletedSubTaskToBottom
                                  )),
                            },
                            null,
                            544
                          ),
                          [[o["J"], n.configData.moveCompletedSubTaskToBottom]]
                        ),
                      ]),
                    ]),
                  ]),
                  Object(o["i"])("div", la, [
                    Object(o["i"])("div", da, [
                      Object(o["i"])("div", ua, [
                        Object(o["i"])(
                          "label",
                          pa,
                          Object(o["I"])(e.$t("settings.darkTheme")),
                          1
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              class: "form-check-input",
                              type: "checkbox",
                              id: "darkThemeSetting",
                              "onUpdate:modelValue":
                                t[24] ||
                                (t[24] = (e) => (n.configData.darkTheme = e)),
                              onChange:
                                t[25] ||
                                (t[25] = (e) =>
                                  s.changeConfig(
                                    "darkTheme",
                                    n.configData.darkTheme
                                  )),
                            },
                            null,
                            544
                          ),
                          [[o["J"], n.configData.darkTheme]]
                        ),
                      ]),
                      s.isElectron()
                        ? (Object(o["y"])(),
                          Object(o["h"])("div", ma, [
                            Object(o["i"])(
                              "label",
                              ba,
                              Object(o["I"])(e.$t("settings.darkIcon")),
                              1
                            ),
                            Object(o["Q"])(
                              Object(o["i"])(
                                "input",
                                {
                                  class: "form-check-input",
                                  type: "checkbox",
                                  id: "darkTrayIcon",
                                  "onUpdate:modelValue":
                                    t[26] ||
                                    (t[26] = (e) =>
                                      (n.configData.darkTrayIcon = e)),
                                  onChange:
                                    t[27] ||
                                    (t[27] = (...e) =>
                                      s.setDarkTrayIcon &&
                                      s.setDarkTrayIcon(...e)),
                                },
                                null,
                                544
                              ),
                              [[o["J"], n.configData.darkTrayIcon]]
                            ),
                          ]))
                        : Object(o["g"])("", !0),
                      ga,
                      Object(o["i"])("div", ha, [
                        Object(o["i"])(
                          "label",
                          ka,
                          Object(o["I"])(e.$t("settings.columns")) +
                            ": " +
                            Object(o["I"])(n.configData.columns),
                          1
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              type: "range",
                              class: "form-range mt-2 px-2",
                              min: "1",
                              max: "12",
                              id: "columnsConfig",
                              "onUpdate:modelValue":
                                t[28] ||
                                (t[28] = (e) => (n.configData.columns = e)),
                              onChange:
                                t[29] ||
                                (t[29] = (e) =>
                                  s.changeConfig(
                                    "columns",
                                    n.configData.columns
                                  )),
                            },
                            null,
                            544
                          ),
                          [[o["L"], n.configData.columns]]
                        ),
                      ]),
                      Object(o["i"])("div", fa, [
                        Object(o["i"])(
                          "label",
                          va,
                          Object(o["I"])(e.$t("settings.lists_columns")) +
                            ": " +
                            Object(o["I"])(n.configData.customColumns),
                          1
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              type: "range",
                              class: "form-range mt-2 px-2",
                              min: "1",
                              max: "12",
                              id: "columnsConfig",
                              "onUpdate:modelValue":
                                t[30] ||
                                (t[30] = (e) =>
                                  (n.configData.customColumns = e)),
                              onChange:
                                t[31] ||
                                (t[31] = (e) =>
                                  s.changeConfig(
                                    "customColumns",
                                    n.configData.customColumns
                                  )),
                            },
                            null,
                            544
                          ),
                          [[o["L"], n.configData.customColumns]]
                        ),
                      ]),
                      Object(o["i"])("div", ya, [
                        Object(o["i"])(
                          "label",
                          Ta,
                          Object(o["I"])(e.$t("settings.zoom")) +
                            ": " +
                            Object(o["I"])(n.configData.zoom) +
                            "%",
                          1
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              type: "range",
                              class: "form-range mt-2 px-2",
                              min: "50",
                              max: "200",
                              id: "zoomConfig",
                              step: "5",
                              "onUpdate:modelValue":
                                t[32] ||
                                (t[32] = (e) => (n.configData.zoom = e)),
                              onChange:
                                t[33] ||
                                (t[33] = (e) =>
                                  s.changeConfig("zoom", n.configData.zoom)),
                            },
                            null,
                            544
                          ),
                          [[o["L"], n.configData.zoom]]
                        ),
                      ]),
                      Object(o["i"])("div", ja, [
                        Object(o["i"])(
                          "label",
                          Oa,
                          Object(o["I"])(e.$t("settings.compactView")),
                          1
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              class: "form-check-input",
                              type: "checkbox",
                              id: "compactViewSetting",
                              "onUpdate:modelValue":
                                t[34] ||
                                (t[34] = (e) => (n.configData.compactView = e)),
                              onChange:
                                t[35] ||
                                (t[35] = (e) =>
                                  s.changeConfig(
                                    "compactView",
                                    n.configData.compactView
                                  )),
                            },
                            null,
                            544
                          ),
                          [[o["J"], n.configData.compactView]]
                        ),
                      ]),
                      Object(o["i"])("div", wa, [
                        Object(o["i"])(
                          "label",
                          Da,
                          Object(o["I"])(e.$t("settings.fullscreenToDoModal")),
                          1
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              class: "form-check-input",
                              type: "checkbox",
                              id: "fullscreenToDoModal",
                              "onUpdate:modelValue":
                                t[36] ||
                                (t[36] = (e) =>
                                  (n.configData.fullscreenToDoModal = e)),
                              onChange:
                                t[37] ||
                                (t[37] = (e) =>
                                  s.changeConfig(
                                    "fullscreenToDoModal",
                                    n.configData.fullscreenToDoModal
                                  )),
                            },
                            null,
                            544
                          ),
                          [[o["J"], n.configData.fullscreenToDoModal]]
                        ),
                      ]),
                    ]),
                  ]),
                  Object(o["i"])("div", xa, [
                    Object(o["i"])("div", Ca, [
                      s.isElectron()
                        ? (Object(o["y"])(),
                          Object(o["h"])("div", za, [
                            Object(o["i"])(
                              "label",
                              La,
                              Object(o["I"])(
                                e.$t("settings.notificationOnStartup")
                              ),
                              1
                            ),
                            Object(o["Q"])(
                              Object(o["i"])(
                                "input",
                                {
                                  class: "form-check-input",
                                  type: "checkbox",
                                  id: "notificationOnStartup",
                                  "onUpdate:modelValue":
                                    t[38] ||
                                    (t[38] = (e) =>
                                      (n.configData.notificationOnStartup = e)),
                                  onChange:
                                    t[39] ||
                                    (t[39] = (e) =>
                                      s.changeConfig(
                                        "notificationOnStartup",
                                        n.configData.notificationOnStartup
                                      )),
                                },
                                null,
                                544
                              ),
                              [[o["J"], n.configData.notificationOnStartup]]
                            ),
                          ]))
                        : Object(o["g"])("", !0),
                      Object(o["i"])("div", Ia, [
                        Object(o["i"])(
                          "label",
                          Sa,
                          Object(o["I"])(
                            e.$t("settings.notificationIndicator")
                          ),
                          1
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              class: "form-check-input",
                              type: "checkbox",
                              id: "notificationIndicator",
                              "onUpdate:modelValue":
                                t[40] ||
                                (t[40] = (e) =>
                                  (n.configData.notificationIndicator = e)),
                              onChange:
                                t[41] ||
                                (t[41] = (e) =>
                                  s.changeConfig(
                                    "notificationIndicator",
                                    n.configData.notificationIndicator
                                  )),
                            },
                            null,
                            544
                          ),
                          [[o["J"], n.configData.notificationIndicator]]
                        ),
                      ]),
                      $a,
                      Object(o["i"])(
                        "label",
                        Ma,
                        Object(o["I"])(e.$t("settings.notificationSound")) +
                          ":",
                        1
                      ),
                      Object(o["i"])("div", Ea, [
                        Object(o["Q"])(
                          Object(o["i"])(
                            "select",
                            {
                              id: "notificationSound",
                              class: "col-sm-9 form-select flex-fill",
                              "aria-label": "Default select example",
                              "onUpdate:modelValue":
                                t[42] ||
                                (t[42] = (e) =>
                                  (n.configData.notificationSound = e)),
                              onChange:
                                t[43] ||
                                (t[43] = (e) =>
                                  s.changeConfig(
                                    "notificationSound",
                                    n.configData.notificationSound
                                  )),
                            },
                            Wa,
                            544
                          ),
                          [[o["K"], n.configData.notificationSound]]
                        ),
                        Object(o["i"])(
                          "button",
                          {
                            class: "btn",
                            style: { "margin-left": "8px" },
                            type: "button",
                            onClick:
                              t[44] ||
                              (t[44] = (...e) =>
                                s.playSound && s.playSound(...e)),
                          },
                          Ba
                        ),
                      ]),
                    ]),
                  ]),
                  Object(o["i"])("div", Pa, [
                    Object(o["i"])("div", Ya, [
                      Object(o["i"])("div", null, [
                        Object(o["i"])("div", null, [
                          Object(o["i"])("div", _a, [
                            Object(o["i"])(
                              "label",
                              Na,
                              Object(o["I"])(e.$t("settings.exportData")),
                              1
                            ),
                            Object(o["i"])(
                              "button",
                              {
                                id: "export-data-btn",
                                type: "button",
                                class: "btn py-1 px-2 border",
                                style: { width: "140px" },
                                onClick:
                                  t[45] ||
                                  (t[45] = (...e) =>
                                    s.exportData && s.exportData(...e)),
                              },
                              [
                                Va,
                                Object(o["k"])(
                                  " " + Object(o["I"])(e.$t("settings.export")),
                                  1
                                ),
                              ]
                            ),
                          ]),
                          Object(o["i"])("div", Ua, [
                            Object(o["i"])(
                              "label",
                              qa,
                              Object(o["I"])(e.$t("settings.importData")),
                              1
                            ),
                            Object(o["i"])(
                              "button",
                              {
                                id: "import-data-btn",
                                type: "button",
                                class: "btn py-1 px-2 border",
                                style: { width: "140px" },
                                onClick:
                                  t[46] ||
                                  (t[46] = (...t) =>
                                    e.$refs.loadData.click &&
                                    e.$refs.loadData.click(...t)),
                              },
                              [
                                Fa,
                                Object(o["k"])(
                                  " " + Object(o["I"])(e.$t("settings.import")),
                                  1
                                ),
                              ]
                            ),
                          ]),
                          Object(o["i"])("div", Ha, [
                            Object(o["i"])(
                              "label",
                              Ka,
                              Object(o["I"])(e.$t("settings.clearData")),
                              1
                            ),
                            Object(o["i"])("button", Ga, [
                              Qa,
                              Object(o["k"])(
                                " " + Object(o["I"])(e.$t("settings.clear")),
                                1
                              ),
                            ]),
                          ]),
                        ]),
                        Object(o["i"])(
                          "input",
                          {
                            type: "file",
                            id: "file-selector",
                            class: "d-none",
                            accept: ".wtdb",
                            ref: "loadData",
                            onChange: t[47] || (t[47] = (e) => s.importData(e)),
                          },
                          null,
                          544
                        ),
                      ]),
                    ]),
                  ]),
                  Object(o["i"])("div", Ja, [
                    Object(o["i"])("div", Za, [
                      Object(o["i"])(
                        "label",
                        Xa,
                        Object(o["I"])(e.$t("settings.language")) + ":",
                        1
                      ),
                      Object(o["Q"])(
                        Object(o["i"])(
                          "select",
                          {
                            id: "language",
                            class: "col-sm-9 form-select",
                            "aria-label": "Default select example",
                            "onUpdate:modelValue":
                              t[48] ||
                              (t[48] = (e) => (n.configData.language = e)),
                            onChange:
                              t[49] ||
                              (t[49] = (...e) =>
                                s.setLanguage && s.setLanguage(...e)),
                          },
                          to,
                          544
                        ),
                        [[o["K"], n.configData.language]]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          Object(o["i"])("div", ao, [
            Object(o["l"])(
              c,
              {
                ref: "invalidFile",
                id: "invalidFile",
                text: "$t('settings.invalidFile')",
              },
              null,
              512
            ),
          ]),
        ])
      );
    }
    var io = a("eb32"),
      no = {
        load() {
          let e = ue.get("config");
          if (e) return e;
          {
            let e = {
              darkMode: !1,
              customList: !0,
              calendar: !0,
              firstTimeOpen: !0,
              language: "en",
              version: io.version,
              checkUpdates: !0,
              columns: 5,
              customColumns: 5,
              zoom: 100,
              calendarHeight: "calc(50% - 50px)",
              notificationOnStartup: !0,
              notificationSound: "pop",
              openOnStartup: !0,
              runInBackground: !0,
              moveOldTasks: !0,
              dateToShowInitialDonateModal: Y()()
                .add(15, "d")
                .format("YYYY-MM-DD"),
              InitialDonateModalShown: !1,
              mainDividerPosition: 1,
              darkTrayIcon: !1,
              importing: !1,
              compactView: !0,
              startCalendarYesterday: !1,
              notificationIndicator: !0,
              autoReorderTasks: !1,
              moveCompletedTaskToBottom: !0,
              moveCompletedSubTaskToBottom: !0,
              fullscreenToDoModal: !1,
              weekStartOnMonday: !0,
            };
            return ue.set("config", e), e;
          }
        },
        update(e) {
          ue.set("config", e);
        },
      };
    const so = (e) => (
        Object(o["A"])("data-v-7bb1a610"), (e = e()), Object(o["z"])(), e
      ),
      ro = ["id"],
      co = { class: "d-flex" },
      lo = { class: "toast-body" },
      uo = so(() =>
        Object(o["i"])(
          "i",
          {
            class: "bi-x me-2 m-auto close-toast",
            "data-bs-dismiss": "toast",
            "aria-label": "Close",
          },
          null,
          -1
        )
      );
    function po(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["h"])(
          "div",
          {
            id: a.id,
            class: "toast fade hide",
            role: "alert",
            "aria-live": "assertive",
            "aria-atomic": "true",
          },
          [
            Object(o["i"])("div", co, [
              Object(o["i"])("div", lo, [
                Object(o["k"])(Object(o["I"])(a.text) + " ", 1),
                a.subText
                  ? (Object(o["y"])(),
                    Object(o["h"])(
                      "span",
                      {
                        key: 0,
                        class: "sub-text",
                        onClick:
                          t[0] ||
                          (t[0] = (...e) =>
                            s.subTextClick && s.subTextClick(...e)),
                      },
                      Object(o["I"])(a.subText),
                      1
                    ))
                  : Object(o["g"])("", !0),
              ]),
              uo,
            ]),
          ],
          8,
          ro
        )
      );
    }
    var mo = {
      name: "toastMessage",
      emits: ["subTextClick"],
      props: {
        text: { type: String, required: !0 },
        subText: { type: String, required: !1 },
        id: { type: String, required: !0 },
      },
      methods: {
        show: function () {
          var e = new ge["c"](document.getElementById(this.id));
          e.show();
        },
        subTextClick: function () {
          this.$emit("subTextClick");
        },
      },
    };
    a("c3a1");
    const bo = U()(mo, [
      ["render", po],
      ["__scopeId", "data-v-7bb1a610"],
    ]);
    var go = bo,
      ho = {
        migrate() {
          ko(), fo(), vo(), yo(), To(), jo(), Oo(), wo();
        },
      };
    function ko() {
      let e = no.load();
      "checkUpdates" in e || ((e["checkUpdates"] = !0), no.update(e));
    }
    function fo() {
      let e = no.load();
      "calendar" in e ||
        ((e["calendar"] = !0),
        (e["zoom"] = 100),
        (e["columns"] = 5),
        (e["calendarHeight"] = "calc(50% - 50px)"),
        no.update(e));
    }
    function vo() {
      let e = no.load();
      "startupNotification" in e ||
        ((e["notificationOnStartup"] = !0),
        (e["notificationSound"] = "pop"),
        (e["openOnStartup"] = !0),
        no.update(e));
    }
    function yo() {
      let e = no.load();
      "runInBackground" in e ||
        ((e["runInBackground"] = !0),
        (e["moveOldTasks"] = !0),
        (e["dateToShowInitialDonateModal"] = Y()()
          .add(15, "d")
          .format("YYYY-MM-DD")),
        (e["InitialDonateModalShown"] = !1),
        no.update(e));
    }
    function To() {
      let e = no.load();
      "mainDividerPosition" in e ||
        ((e["mainDividerPosition"] = 1), no.update(e));
    }
    function jo() {
      let e = no.load();
      "darkTrayIcon" in e ||
        ((e["darkTrayIcon"] = !1), (e["importing"] = !1), no.update(e));
    }
    function Oo() {
      let e = no.load();
      "reportErrors" in e ||
        ((e["reportErrors"] = !1),
        (e["customColumns"] = e["columns"]),
        (e["compactView"] = !0),
        (e["startCalendarYesterday"] = !0),
        (e["notificationIndicator"] = !0),
        (e["autoReorderTasks"] = !1),
        (e["moveCompletedTaskToBottom"] = !0),
        no.update(e));
    }
    function wo() {
      let e = no.load();
      "fullscreenToDoModal" in e ||
        ((e["fullscreenToDoModal"] = !1),
        (e["moveCompletedSubTaskToBottom"] = !0),
        (e["weekStartOnMonday"] = !0));
    }
    var Do = a("63a6"),
      xo = a.n(Do),
      Co = {
        export() {
          var e = "WeekToDoBackup.wtdb",
            t = ue.as_json();
          (t.todoLists = {}),
            (t.repeating_events = {}),
            (t.repeating_events_by_date = {});
          let a = R.open();
          a.onsuccess = function (a) {
            var o = a.target.result;
            let i = R.selectAll(o, "todo_lists");
            i.onsuccess = function () {
              let o = i.result;
              o ? ((t.todoLists[o.key] = o.value), o.continue()) : zo(e, t, a);
            };
          };
        },
        import(e) {
          let t = So(e.target.files);
          t.onload = function () {
            var e = new ge["c"](document.getElementById("invalidFile"));
            try {
              var a = JSON.parse(t.result);
              "config" in a ? ($o(a), ho.migrate()) : e.show();
            } catch (o) {
              e.show();
            }
          };
        },
        clear() {
          if (xo()()) {
            const { ipcRenderer: e } = a("bdb9");
            e.send("clear-config");
          }
          ue.clean();
          let e = R.open();
          e.onsuccess = function (e) {
            var t = e.target.result;
            let a = R.clear(t, "todo_lists");
            a.onsuccess = function () {
              let e = R.clear(t, "repeating_events");
              e.onsuccess = function () {
                let e = R.clear(t, "repeating_events_by_date");
                e.onsuccess = function () {
                  location.reload();
                };
              };
            };
          };
        },
      };
    function zo(e, t, a) {
      var o = a.target.result;
      let i = R.selectAll(o, "repeating_events");
      i.onsuccess = function () {
        let o = i.result;
        o ? ((t.repeating_events[o.key] = o.value), o.continue()) : Lo(e, t, a);
      };
    }
    function Lo(e, t, a) {
      var o = a.target.result;
      let i = R.selectAll(o, "repeating_events_by_date");
      i.onsuccess = function () {
        let a = i.result;
        if (a) (t.repeating_events_by_date[a.key] = a.value), a.continue();
        else {
          let a = JSON.stringify(t);
          Io(e, a);
        }
      };
    }
    function Io(e, t) {
      var a = document.createElement("a");
      a.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(t)
      ),
        a.setAttribute("download", e),
        (a.style.display = "none"),
        document.body.appendChild(a),
        a.click(),
        document.body.removeChild(a),
        setTimeout(function () {
          let e = ge["b"].getInstance(
            document.getElementById("exportingModal")
          );
          e.hide();
        }, 1e3);
    }
    function So(e) {
      const t = e;
      var a = null;
      return t[0] && ((a = new FileReader()), a.readAsText(t[0])), a;
    }
    function $o(e) {
      Mo(e), Eo(e, "todo_lists");
    }
    function Mo(e) {
      ue.clean();
      var t = JSON.parse(e.config);
      (t.importing = !0), (e.config = JSON.stringify(t)), ue.load_json(e);
    }
    function Eo(e, t) {
      var a = e;
      let o = R.open();
      o.onsuccess = function (e) {
        let o = e.target.result,
          i = R.clear(o, t);
        i.onsuccess = function () {
          Ao(o, a, t);
        };
      };
    }
    function Ao(e, t, a) {
      var o, i;
      "todo_lists" == a
        ? ((o = Object.keys(t.todoLists)), (i = t.todoLists))
        : "repeating_events" == a
        ? ("repeating_events" in t || location.reload(),
          (o = Object.keys(t.repeating_events)),
          (i = t.repeating_events))
        : ((o = Object.keys(t.repeating_events_by_date)),
          (i = t.repeating_events_by_date));
      var n,
        s = o.length;
      if (0 == s)
        "todo_lists" == a
          ? Eo(t, "repeating_events")
          : "repeating_events" == a
          ? Eo(t, "repeating_events_by_date")
          : location.reload();
      else {
        while (s--) n = R.add(e, a, o[s], i[o[s]]);
        n.onsuccess = function () {
          "todo_lists" == a
            ? Eo(t, "repeating_events")
            : "repeating_events" == a
            ? Eo(t, "repeating_events_by_date")
            : location.reload();
        };
      }
    }
    const Wo = { class: "list-group" },
      Ro = ["onClick"],
      Bo = { class: "item-img" },
      Po = ["src"],
      Yo = { class: "align-self-center w-100" };
    function _o(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["h"])("ul", Wo, [
          (Object(o["y"])(!0),
          Object(o["h"])(
            o["a"],
            null,
            Object(o["D"])(
              a.linkList,
              (e) => (
                Object(o["y"])(),
                Object(o["h"])("li", { key: e, class: "list-group-item" }, [
                  Object(o["i"])(
                    "div",
                    {
                      class: "d-flex list-item justify-content-between",
                      onClick: (t) => s.linkAction(e.link, e.linktype),
                    },
                    [
                      Object(o["i"])("div", Bo, [
                        e.ico
                          ? (Object(o["y"])(),
                            Object(o["h"])(
                              "i",
                              {
                                key: 0,
                                style: Object(o["u"])(
                                  "font-size: 20px; color: " + e.color
                                ),
                                class: Object(o["t"])(e.ico),
                              },
                              null,
                              6
                            ))
                          : Object(o["g"])("", !0),
                        e.img
                          ? (Object(o["y"])(),
                            Object(o["h"])(
                              "img",
                              { key: 1, src: e.img, height: "22" },
                              null,
                              8,
                              Po
                            ))
                          : Object(o["g"])("", !0),
                      ]),
                      Object(o["i"])("div", Yo, Object(o["I"])(e.name), 1),
                    ],
                    8,
                    Ro
                  ),
                ])
              )
            ),
            128
          )),
        ])
      );
    }
    var No = {
      name: "donateModal",
      data() {
        return {};
      },
      props: { linkList: { type: Array, required: !0 } },
      methods: {
        linkAction: function (e, t) {
          switch (t) {
            case "email":
              this.emailLink(e);
              break;
            case "tagId":
              this.tagIdLink(e);
              break;
            case "external":
              this.externaLink(e);
              break;
          }
        },
        emailLink: function (e) {
          window.open(e);
        },
        externaLink: function (e) {
          let t = a("63a6");
          t()
            ? a("bdb9").shell.openExternal(e, "_blank")
            : window.open(e, "_blank");
        },
        tagIdLink: function (e) {
          document.getElementById(e).click();
        },
      },
    };
    a("4c1a");
    const Vo = U()(No, [
      ["render", _o],
      ["__scopeId", "data-v-488b4cdc"],
    ]);
    var Uo = Vo,
      qo = {
        configList(e) {
          return [
            {
              name: e.$t("settings.language"),
              ico: "bi-globe2",
              linktype: "tagId",
              link: "config-language-tab",
            },
          ];
        },
      },
      Fo = {
        name: "configModal",
        components: { toastMessage: go, linkList: Uo },
        props: { configProp: { required: !0 } },
        data() {
          return { configData: this.$store.getters.config };
        },
        methods: {
          changeConfig: function (e, t) {
            this.$nextTick(function () {
              this.$store.commit("updateConfig", { val: t, key: e }),
                no.update(this.$store.getters.config),
                "language" === e &&
                  (this.$i18n.locale = this.configData.language),
                "columns" === e &&
                  setTimeout(
                    function () {
                      this.$emit("changeColumns");
                    }.bind(this),
                    50
                  );
            });
          },
          exportData: function () {
            let e = ge["b"].getInstance(document.getElementById("configModal"));
            e.hide();
            let t = new ge["b"](document.getElementById("exportingModal"), {
              backdrop: "static",
            });
            t.show(), Co.export();
          },
          importData: function (e) {
            let t = ge["b"].getInstance(document.getElementById("configModal"));
            t.hide();
            let a = new ge["b"](document.getElementById("importingModal"), {
              backdrop: "static",
            });
            a.show(), Co.import(e);
          },
          isElectron: function () {
            let e = a("63a6");
            return e();
          },
          goHome: function () {
            document.getElementById("config-home-tab").click();
          },
          setOpenOnStart: function () {
            this.changeConfig("openOnStartup", this.configData.openOnStartup),
              this.$nextTick(function () {
                if (this.isElectron()) {
                  const { ipcRenderer: e } = a("bdb9");
                  e.send("set-open-on-startup", this.configData.openOnStartup);
                }
              });
          },
          setRunInBackground: function () {
            this.changeConfig(
              "runInBackground",
              this.configData.runInBackground
            ),
              this.$nextTick(function () {
                if (this.isElectron()) {
                  const { ipcRenderer: e } = a("bdb9");
                  e.send(
                    "set-run-in-background",
                    this.configData.runInBackground
                  );
                }
              });
          },
          setLanguage: function () {
            this.changeConfig("language", this.configData.language),
              this.$nextTick(function () {
                if (this.isElectron()) {
                  const { ipcRenderer: e } = a("bdb9");
                  e.send("set-tray-context-menu-label", {
                    open: this.$t("ui.open"),
                    quit: this.$t("ui.quit"),
                  });
                }
              });
          },
          setSendErrors: function () {
            this.changeConfig("reportErrors", this.configData.reportErrors),
              (this.$honeybadger.config.reportData =
                this.configData.reportErrors),
              console.log(this.$honeybadger.config);
          },
          setDarkTrayIcon: function () {
            this.changeConfig("darkTrayIcon", this.configData.darkTrayIcon),
              this.$nextTick(function () {
                const { ipcRenderer: e } = a("bdb9");
                e.send("set-dark-tray-icon", this.configData.darkTrayIcon);
              });
          },
          playSound: function () {
            me.playNotificationSound(
              this.$store.getters.config.notificationSound
            );
          },
        },
        computed: {
          configLinks: function () {
            return qo.configList(this);
          },
          watch: {
            configProp: function (e) {
              this.configData = e;
            },
          },
        },
      };
    a("b196");
    const Ho = U()(Fo, [
      ["render", oo],
      ["__scopeId", "data-v-6a7662ba"],
    ]);
    var Ko = Ho,
      Go = a("b4a1"),
      Qo = a.n(Go);
    const Jo = (e) => (
        Object(o["A"])("data-v-775b8ce3"), (e = e()), Object(o["z"])(), e
      ),
      Zo = {
        key: 0,
        id: "splashScreen",
        class: "splash-screen d-flex justify-content-center align-items-center",
        ref: "splashScreen",
      },
      Xo = { class: "d-flex flex-column align-items-center" },
      ei = Jo(() =>
        Object(o["i"])(
          "div",
          {
            class: "d-flex justify-content-center align-items-center",
            style: { "margin-bottom": "2.2rem" },
          },
          [
            Object(o["i"])(
              "h1",
              { style: { display: "inline" }, class: "mb-0" },
              "ImP "
            ),
            Object(o["i"])("img", {
              class: "logo",
              src: "/img/LOGO-IM-png.png",
              alt: "ImPlanner Logo",
              style: { display: "inline" },
            }),
            Object(o["i"])(
              "h1",
              { style: { display: "inline" }, class: "mb-0" },
              "Ingenierie Mesures Planner "
            ),
          ],
          -1
        )
      ),
      ti = {
        class: "d-flex justify-content-center",
        style: { height: "50px" },
      },
      ai = ["href"],
      oi = ["src"],
      ii = { class: "my-2 mx-2" },
      ni = {
        class: "fw-bolder d-inline",
        style: { "text-decoration": "unset !important" },
      },
      si = { class: "opacity-50 mx-2 d-inline" },
      ri = {
        style: { height: "25px", width: "200px" },
        class: "d-flex justify-content-center",
      };
    function ci(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["f"])(
          o["c"],
          { name: "fade" },
          {
            default: Object(o["P"])(() => [
              n.show
                ? (Object(o["y"])(),
                  Object(o["h"])(
                    "div",
                    Zo,
                    [
                      Object(o["i"])("div", Xo, [
                        ei,
                        Object(o["Q"])(
                          Object(o["i"])(
                            "div",
                            ti,
                            [
                              n.sponsor
                                ? (Object(o["y"])(),
                                  Object(o["h"])(
                                    "a",
                                    {
                                      key: 0,
                                      href: n.sponsor.url,
                                      class:
                                        "d-flex sponsor-container align-items-center",
                                      target: "_blank",
                                    },
                                    [
                                     
                                      Object(o["i"])("div", ii, [
                                        Object(o["i"])(
                                          "div",
                                          ni,
                                          Object(o["I"])(n.sponsor.name),
                                          1
                                        ),
                                        Object(o["i"])(
                                          "div",
                                          si,
                                          Object(o["I"])(n.sponsor.message),
                                          1
                                        ),
                                      ]),
                                    ],
                                    8,
                                    ai
                                  ))
                                : Object(o["g"])("", !0),
                            ],
                            512
                          ),
                          [[o["M"], n.sponsor]]
                        ),
                        Object(o["i"])("div", ri, [
                          Object(o["Q"])(
                            Object(o["i"])(
                              "div",
                              {
                                class: "opacity-25",
                                style: { "font-size": "0.7rem" },
                              },
                              Object(o["I"])(e.$t("ui.sponsoredBy")),
                              513
                            ),
                            [[o["M"], n.sponsor]]
                          ),
                        ]),
                      ]),
                    ],
                    512
                  ))
                : Object(o["g"])("", !0),
            ]),
            _: 1,
          }
        )
      );
    }
    var li = {
      name: "splashScreen",
      data() {
        return { show: !0, sponsor: null };
      },
     
      methods: {
        hideSplash: function () {
          this.show = !1;
        },
        renderSponsor: function (e) {
          var t = [];
          t.push({
            name: "ImPlanner",
            message: this.$t("donate.splashMessage"),
            url: "",
            img: "/icons/ko-fi.png",
          }),
            e.data.bronze.forEach(function (e) {
              t.push(e);
            }),
            e.data.silver.forEach(function (e) {
              for (let a = 0; a < 3; a++) t.push(e);
            }),
            e.data.golden.forEach(function (e) {
              for (let a = 0; a < 7; a++) t.push(e);
            }),
            e.data.diamond.forEach(function (e) {
              for (let a = 0; a < 15; a++) t.push(e);
            }),
            (this.sponsor = t[Math.floor(Math.random() * t.length)]);
        },
      },
    };
    a("c8a6");
    const di = U()(li, [
      ["render", ci],
      ["__scopeId", "data-v-775b8ce3"],
    ]);
    var ui = di;
    const pi = (e) => (
        Object(o["A"])("data-v-b38344be"), (e = e()), Object(o["z"])(), e
      ),
      mi = {
        class: "modal fade",
        id: "aboutModal",
        tabindex: "-1",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true",
      },
      bi = { class: "modal-dialog modal-dialog-centered" },
      gi = { class: "modal-content" },
      hi = { class: "modal-header" },
      ki = { class: "modal-title" },
      fi = pi(() =>
        Object(o["i"])(
          "i",
          { class: "bi-x close-modal", "data-bs-dismiss": "modal" },
          null,
          -1
        )
      ),
      vi = { class: "modal-body" },
      yi = {
        class: "d-flex flex-column",
        style: { "text-align": "center", "margin-top": "10px" },
      },
      Ti = pi(() =>
        Object(o["i"])(
          "img",
          {
            class: "logo align-self-center",
            src: "/img/LOGO-IM-png.png",
            alt: "ImPlanner",
            title: "ImPlanner Logo",
            width: "64",
          },
          null,
          -1
        )
      ),
      ji = pi(() =>
        Object(o["i"])(
          "h5",
          { style: { "margin-top": "15px", "margin-bottom": "2px" } },
          "ImPlanner",
          -1
        )
      ),
      Oi = { class: "mt-1", style: { "font-size": "0.75rem" } },
      wi = {
        href: "",
        target: "_blank",
        style: {
          "font-size": "0.75rem",
          cursor: "pointer",
          opacity: ".7",
          "text-decoration": "none",
        },
      },
      Di = { class: "visit-site mt-2 mb-3", style: { "font-size": "0.75rem" } },
      xi = { href: "", target: "_blank" },
      Ci = { class: "d-flex align-self-center" },
      zi = Object(o["j"])(
        '<a href="" target="_blank" title="Blog" data-v-b38344be><i class="bi-rss mx-2" data-v-b38344be></i></a><a href="https://twitter.com/" target="_blank" title="Twitter" data-v-b38344be><i class="bi-twitter mx-2" data-v-b38344be></i></a><a href="https://github.com/" target="_blank" title="Github" data-v-b38344be><i class="bi-github mx-2" data-v-b38344be></i></a>',
        3
      ),
      Li = { href: "mailto:anassjr02@gmail.com" },
      Ii = ["title"],
      Si = pi(() =>
        Object(o["i"])(
          "div",
          { class: "horizontal-divider mt-3 mb-3" },
          null,
          -1
        )
      ),
      $i = { style: { "margin-top": "10px" } },
      Mi = { class: "row" },
      Ei = {
        href: "https://manuelernestog.github.io",
        target: "_blank",
        class: "row",
        style: { "text-decoration": "none" },
      },
      Ai = pi(() =>
        Object(o["i"])(
          "div",
          { class: "col-md-3" },
          [
            Object(o["i"])("img", {
              class: "logo align-self-center",
              src: "Avatar.webp",
              alt: "Manuel Ernesto Garcia",
              title: "Manuel Ernesto Garcia",
              width: "64",
            }),
          ],
          -1
        )
      ),
      Wi = { class: "col-md-9 pt-3" },
      Ri = { class: "mb-1" },
      Bi = { style: { "font-size": "0.7rem", opacity: ".7" } },
      Pi = pi(() =>
        Object(o["i"])(
          "div",
          { class: "horizontal-divider mt-3 mb-2" },
          null,
          -1
        )
      ),
      Yi = {
        class:
          "text-center text-uppercase px-2 d-flex justify-content-center flex-wrap",
        style: { "font-size": "0.8rem", opacity: ".8", "line-height": "20px" },
      },
      
      Ni = {
        class: "mx-2",
        style: { "text-decoration": "none" },
        href: "#",
        target: "_blank",
      },
      Vi = {
        class: "mx-2",
        style: { "text-decoration": "none" },
        href: "",
        target: "_blank",
      },
      Ui = pi(() =>
        Object(o["i"])(
          "div",
          { class: "horizontal-divider mt-2 mb-3" },
          null,
          -1
        )
      ),
      qi = { class: "d-flex" },
      Fi = { style: { "margin-top": "10px", "margin-right": "10px" } },
      Hi = pi(() =>
        Object(o["i"])(
          "i",
          { class: "bi-heart-fill", style: { color: "red" } },
          null,
          -1
        )
      ),
      Ki = {
        class: "btn flex-fill",
        href: "",
        target: "_blank",
      };
    function Gi(e, t, a, i, n, s) {
      const r = Object(o["F"])("sponsor-modal"),
        c = Object(o["F"])("collaborators-modal");
      return (
        Object(o["y"])(),
        Object(o["h"])(
          o["a"],
          null,
          [
            Object(o["i"])("div", mi, [
              Object(o["i"])("div", bi, [
                Object(o["i"])("div", gi, [
                  Object(o["i"])("div", hi, [
                    Object(o["i"])(
                      "h5",
                      ki,
                      Object(o["I"])(e.$t("about.about")),
                      1
                    ),
                    fi,
                  ]),
                  Object(o["i"])("div", vi, [
                    Object(o["i"])("div", yi, [
                      Ti,
                      ji,
                      Object(o["i"])("span", Oi, [
                        Object(o["k"])(
                          Object(o["I"])(e.$t("about.version")) +
                            " " +
                            Object(o["I"])(n.version) +
                            " • ",
                          1
                        ),
                        Object(o["i"])(
                          "a",
                          wi,
                          Object(o["I"])(e.$t("ui.changeLog")),
                          1
                        ),
                      ]),
                      Object(o["i"])("span", null, [
                        Object(o["i"])("div", Di, [
                          Object(o["i"])(
                            "a",
                            xi,
                            Object(o["I"])(e.$t("about.site")),
                            1
                          ),
                        ]),
                      ]),
                      Object(o["i"])("div", Ci, [
                        zi,
                        Object(o["i"])("a", Li, [
                          Object(o["i"])(
                            "i",
                            {
                              class: "bi-envelope mx-2",
                              title: e.$t("about.email"),
                            },
                            null,
                            8,
                            Ii
                          ),
                        ]),
                      ]),
                    ]),
                    Si,
                    Object(o["i"])("div", null, [
                      Object(o["i"])("div", $i, [
                        Object(o["i"])("div", Mi, [
                          Object(o["i"])("a", Ei, [
                            Ai,
                            Object(o["i"])("div", Wi, [
                              Object(o["i"])(
                                "h6",
                                Ri,
                                Object(o["I"])(e.$t("about.devName")),
                                1
                              ),
                              Object(o["i"])(
                                "div",
                                Bi,
                                Object(o["I"])(e.$t("about.dev")),
                                1
                              ),
                            ]),
                          ]),
                        ]),
                        Pi,
                        Object(o["i"])("div", Yi, [
                          Object(o["i"])(
                            "a",
                            _i,
                            Object(o["I"])(e.$t("about.sponsors")),
                            1
                          ),
                          Object(o["i"])(
                            "a",
                            Ni,
                            Object(o["I"])(e.$t("about.contributors")),
                            1
                          ),
                          Object(o["i"])(
                            "a",
                            Vi,
                            Object(o["I"])(e.$t("about.license")),
                            1
                          ),
                        ]),
                        Ui,
                        Object(o["i"])("div", qi, [
                          Object(o["i"])("span", Fi, [
                            Object(o["k"])(
                              Object(o["I"])(e.$t("about.madeWith")) + " ",
                              1
                            ),
                            Hi,
                            Object(o["k"])(
                              " " + Object(o["I"])(e.$t("about.inCuba")),
                              1
                            ),
                          ]),
                          Object(o["i"])(
                            "a",
                            Ki,
                            Object(o["I"])(e.$t("donate.supportUs")),
                            1
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            Object(o["l"])(r, { ref: "sponsorsModal" }, null, 512),
            Object(o["l"])(c, { ref: "collaboratorsModal" }, null, 512),
          ],
          64
        )
      );
    }
    var Qi = {
      name: "aboutModal",
      data() {
        return { version: io.version };
      },
    };
    a("54d9");
    const Ji = U()(Qi, [
      ["render", Gi],
      ["__scopeId", "data-v-b38344be"],
    ]);
    var Zi = Ji;
    const Xi = (e) => (
        Object(o["A"])("data-v-2dda8f11"), (e = e()), Object(o["z"])(), e
      ),
      en = {
        class: "modal fade",
        id: "donateModal",
        tabindex: "-1",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true",
      },
      tn = { class: "modal-dialog modal-dialog-centered" },
      an = { class: "modal-content" },
      on = { class: "modal-header" },
      nn = { class: "modal-title" },
      sn = Xi(() =>
        Object(o["i"])(
          "i",
          { class: "bi-x close-modal", "data-bs-dismiss": "modal" },
          null,
          -1
        )
      ),
      rn = { class: "modal-body" },
      cn = { class: "row" },
      ln = { style: { "text-align": "justify", "line-height": "21px" } },
      dn = Xi(() =>
        Object(o["i"])(
          "ul",
          {
            class: "nav nav-tabs",
            id: "myTab",
            role: "tablist",
            style: { display: "none" },
          },
          [
            Object(o["i"])("li", { class: "nav-item", role: "presentation" }, [
              Object(o["i"])(
                "button",
                {
                  class: "nav-link active",
                  id: "homeTab",
                  "data-bs-toggle": "tab",
                  "data-bs-target": "#donate-home",
                  role: "tab",
                },
                "Home "
              ),
            ]),
            Object(o["i"])("li", { class: "nav-item", role: "presentation" }, [
              Object(o["i"])(
                "button",
                {
                  class: "nav-link",
                  id: "shareTab",
                  "data-bs-toggle": "tab",
                  "data-bs-target": "#donate-share",
                  role: "tab",
                },
                "Share "
              ),
            ]),
          ],
          -1
        )
      ),
      un = { class: "tab-content mt-0", id: "nav-tabContent" },
      pn = { class: "tab-pane fade show active", id: "donate-home" },
      mn = { class: "tab-pane fade", id: "donate-share" },
      bn = { class: "d-flex flex-column mt-3 h-100" },
      gn = { class: "input-group mt-2 mb-3 px-3" },
      hn = Xi(() =>
        Object(o["i"])(
          "input",
          {
            type: "text",
            class: "form-control",
            value: "#",
            disabled: "",
          },
          null,
          -1
        )
      ),
      kn = Xi(() =>
        Object(o["i"])(
          "i",
          { class: "bi-clipboard", style: { "padding-left": "5px" } },
          null,
          -1
        )
      ),
      fn = Xi(() =>
        Object(o["i"])("i", { class: "bi-arrow-left a" }, null, -1)
      );
    function vn(e, t, a, i, n, s) {
      const r = Object(o["F"])("link-list");
      return (
        Object(o["y"])(),
        Object(o["h"])("div", en, [
          Object(o["i"])("div", tn, [
            Object(o["i"])("div", an, [
              Object(o["i"])("div", on, [
                Object(o["i"])(
                  "h5",
                  nn,
                  Object(o["I"])(e.$t("donate.supportUs")),
                  1
                ),
                sn,
              ]),
              Object(o["i"])("div", rn, [
                Object(o["i"])("div", cn, [
                  Object(o["i"])(
                    "div",
                    ln,
                    Object(o["I"])(e.$t("donate.supportMessage1")),
                    1
                  ),
                  Object(o["i"])("div", null, [
                    dn,
                    Object(o["i"])("div", un, [
                      Object(o["i"])("div", pn, [
                        Object(o["l"])(r, { linkList: s.donateList }, null, 8, [
                          "linkList",
                        ]),
                      ]),
                      Object(o["i"])("div", mn, [
                        Object(o["i"])("div", bn, [
                          Object(o["l"])(
                            r,
                            { linkList: s.shareList },
                            null,
                            8,
                            ["linkList"]
                          ),
                          Object(o["i"])("div", gn, [
                            hn,
                            Object(o["i"])(
                              "button",
                              {
                                class: "btn btn-outline-secondary",
                                type: "button",
                                onClick:
                                  t[0] ||
                                  (t[0] = (...e) => s.copy && s.copy(...e)),
                              },
                              [
                                Object(o["k"])(
                                  Object(o["I"])(e.$t("donate.copy")) + " ",
                                  1
                                ),
                                kn,
                              ]
                            ),
                          ]),
                          Object(o["i"])(
                            "button",
                            {
                              class: "btn mt-auto",
                              type: "button",
                              onClick:
                                t[1] ||
                                (t[1] = (...e) => s.goHome && s.goHome(...e)),
                            },
                            [
                              fn,
                              Object(o["k"])(
                                " " + Object(o["I"])(e.$t("donate.goBack")),
                                1
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    }
    var yn = {
        donateList(e) {
          return [
            
          ];
        },
        shareList(e) {
          return [
           
            {
              name: "Facebook",
              ico: "bi-facebook",
              color: "#4b6cad",
              linktype: "external",
              link: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fw%2F",
            },
            {
              name: "Reddit",
              ico: "bi-reddit",
              color: "#ed4f1c",
              linktype: "external",
              link: "https://www.reddit.com/submit?title=".concat(
                "",
                e.$t("donate.shareMessage"),
                "&url=https%3A%2F%2F%2F"
              ),
            },
          ];
        },
      },
      Tn = {
        name: "donateModal",
        components: { linkList: Uo },
        methods: {
          goHome: function () {
            document.getElementById("homeTab").click();
          },
          async copy() {
            await navigator.clipboard.writeText("#");
            var e = new ge["c"](document.getElementById("copiedAddress"));
            e.show();
          },
        },
        computed: {
          donateList: function () {
            return yn.donateList(this);
          },
          shareList: function () {
            return yn.shareList(this);
          },
        },
      };
    a("c488");
    const jn = U()(Tn, [
      ["render", vn],
      ["__scopeId", "data-v-2dda8f11"],
    ]);
    var On = jn;
    const wn = (e) => (
        Object(o["A"])("data-v-16671909"), (e = e()), Object(o["z"])(), e
      ),
      Dn = {
        class: "modal fade",
        id: "welcomeModal",
        tabindex: "-1",
        "aria-hidden": "true",
        "data-bs-backdrop": "static",
      },
      xn = { class: "modal-dialog modal-dialog-centered" },
      Cn = { class: "modal-content" },
      zn = { class: "modal-body pb-2" },
      Ln = wn(() =>
        Object(o["i"])(
          "ul",
          { class: "nav nav-tabs d-none", id: "myTab", role: "tablist" },
          [
            Object(o["i"])("li", { class: "nav-item", role: "presentation" }, [
              Object(o["i"])(
                "button",
                {
                  class: "nav-link active",
                  "data-bs-toggle": "tab",
                  "data-bs-target": "#welcome-1",
                  id: "welcome-1-tab",
                  role: "tab",
                },
                "1 "
              ),
            ]),
            Object(o["i"])("li", { class: "nav-item", role: "presentation" }, [
              Object(o["i"])(
                "button",
                {
                  class: "nav-link",
                  "data-bs-toggle": "tab",
                  "data-bs-target": "#welcome-2",
                  id: "welcome-2-tab",
                  role: "tab",
                },
                "2 "
              ),
            ]),
            Object(o["i"])("li", { class: "nav-item", role: "presentation" }, [
              Object(o["i"])(
                "button",
                {
                  class: "nav-link",
                  "data-bs-toggle": "tab",
                  "data-bs-target": "#welcome-2-1",
                  id: "welcome-2-1-tab",
                  role: "tab",
                },
                "2-1 "
              ),
            ]),
            Object(o["i"])("li", { class: "nav-item", role: "presentation" }, [
              Object(o["i"])(
                "button",
                {
                  class: "nav-link",
                  "data-bs-toggle": "tab",
                  "data-bs-target": "#welcome-3",
                  id: "welcome-3-tab",
                  role: "tab",
                },
                "3 "
              ),
            ]),
            Object(o["i"])("li", { class: "nav-item", role: "presentation" }, [
              Object(o["i"])(
                "button",
                {
                  class: "nav-link",
                  "data-bs-toggle": "tab",
                  "data-bs-target": "#welcome-4",
                  id: "welcome-4-tab",
                  role: "tab",
                },
                "4 "
              ),
            ]),
          ],
          -1
        )
      ),
      In = { class: "tab-content mt-4", id: "nav-tabContent" },
      Sn = { class: "tab-pane fade show active", id: "welcome-1" },
      $n = { class: "tab-pane fade", id: "welcome-2" },
      Mn = { class: "tab-pane fade", id: "welcome-2-1" },
      En = { class: "tab-pane fade", id: "welcome-3" },
      An = { class: "tab-pane fade", id: "welcome-4" };
    function Wn(e, t, a, i, n, s) {
      const r = Object(o["F"])("language-view"),
        c = Object(o["F"])("theme-view"),
        l = Object(o["F"])("app-view"),
        d = Object(o["F"])("backup-view"),
        u = Object(o["F"])("done-view");
      return (
        Object(o["y"])(),
        Object(o["h"])("div", Dn, [
          Object(o["i"])("div", xn, [
            Object(o["i"])("div", Cn, [
              Object(o["i"])("div", zn, [
                Ln,
                Object(o["i"])("div", In, [
                  Object(o["i"])("div", Sn, [Object(o["l"])(r)]),
                  Object(o["i"])("div", $n, [Object(o["l"])(c)]),
                  Object(o["i"])("div", Mn, [Object(o["l"])(l)]),
                  Object(o["i"])("div", En, [Object(o["l"])(d)]),
                  Object(o["i"])("div", An, [Object(o["l"])(u)]),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    }
    const Rn = (e) => (
        Object(o["A"])("data-v-46c8087a"), (e = e()), Object(o["z"])(), e
      ),
      Bn = { class: "row" },
      Pn = Rn(() =>
        Object(o["i"])(
          "div",
          { class: "col-md-4" },
          [
            Object(o["i"])("img", {
              class: "logo info-image",
              src: "/img/LOGO-IM-png.png",
              alt: "ImPlanner",
              title: "Implanner Logo",
              width: "110",
            }),
          ],
          -1
        )
      ),
      Yn = { class: "col-md-8" },
      _n = Rn(() =>
        Object(o["i"])(
          "label",
          { for: "wizard-language", class: "form-label" },
          null,
          -1
        )
      ),
      Nn = Object(o["j"])(
        '<option value="en" data-v-46c8087a>English</option><option value="fr" data-v-46c8087a>Français</option><option value="ar" data-v-46c8087a>عرب</option>',
        15
      ),
      Vn = [Nn],
      Un = { class: "d-flex btn-footer mt-3" },
      qn = { type: "button", class: "btn flex-fill invisible" },
      Fn = Rn(() =>
        Object(o["i"])("i", { class: "bi-chevron-double-left" }, null, -1)
      ),
      Hn = Rn(() =>
        Object(o["i"])("i", { class: "bi-chevron-double-right" }, null, -1)
      );
    function Kn(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["h"])(
          o["a"],
          null,
          [
            Object(o["i"])("div", Bn, [
              Pn,
              Object(o["i"])("div", Yn, [
                Object(o["i"])("div", null, [
                  Object(o["i"])(
                    "h4",
                    null,
                    Object(o["I"])(e.$t("welcome.welcome")),
                    1
                  ),
                  Object(o["i"])(
                    "text",
                    null,
                    Object(o["I"])(e.$t("welcome.welcomeText")),
                    1
                  ),
                  Object(o["i"])("div", null, [
                    _n,
                    Object(o["Q"])(
                      Object(o["i"])(
                        "select",
                        {
                          id: "wizard-language",
                          class: "col-sm-9 form-select",
                          "aria-label": "Default select example",
                          "onUpdate:modelValue":
                            t[0] || (t[0] = (e) => (n.language = e)),
                          onChange:
                            t[1] ||
                            (t[1] = (...e) =>
                              s.changeLanguage && s.changeLanguage(...e)),
                        },
                        Vn,
                        544
                      ),
                      [[o["K"], n.language]]
                    ),
                  ]),
                ]),
              ]),
            ]),
            Object(o["i"])("div", Un, [
              Object(o["i"])("button", qn, [
                Fn,
                Object(o["k"])(" " + Object(o["I"])(e.$t("welcome.back")), 1),
              ]),
              Object(o["i"])(
                "button",
                {
                  type: "button",
                  class: "btn flex-fill",
                  onClick: t[2] || (t[2] = (...e) => s.next && s.next(...e)),
                },
                [
                  Object(o["k"])(Object(o["I"])(e.$t("welcome.next")) + " ", 1),
                  Hn,
                ]
              ),
            ]),
          ],
          64
        )
      );
    }
    var Gn = {
      name: "languageView",
      data() {
        return {
          language: this.$store.getters.config.language,
          isElectron: a("63a6"),
        };
      },
      methods: {
        changeLanguage: function () {
          this.$nextTick(function () {
            if (
              (this.$store.commit("updateConfig", {
                val: this.language,
                key: "language",
              }),
              no.update(this.$store.getters.config),
              (this.$i18n.locale = this.language),
              this.isElectron())
            ) {
              const { ipcRenderer: e } = a("bdb9");
              e.send("set-tray-context-menu-label", {
                open: this.$t("ui.open"),
                quit: this.$t("ui.quit"),
              });
            }
          });
        },
        next: function () {
          document.getElementById("welcome-2-tab").click();
        },
      },
    };
    a("3537");
    const Qn = U()(Gn, [
      ["render", Kn],
      ["__scopeId", "data-v-46c8087a"],
    ]);
    var Jn = Qn;
    const Zn = (e) => (
        Object(o["A"])("data-v-49b595b6"), (e = e()), Object(o["z"])(), e
      ),
      Xn = { class: "row" },
      es = Zn(() =>
        Object(o["i"])(
          "div",
          { class: "col-md-4" },
          [
            Object(o["i"])("div", { class: "icon-container" }, [
              Object(o["i"])("i", { class: "bi-circle-half" }),
            ]),
          ],
          -1
        )
      ),
      ts = { class: "col-md-8" },
      as = { style: { "padding-left": "50px" }, class: "pt-4" },
      os = Zn(() =>
        Object(o["i"])(
          "label",
          { class: "form-check-label" },
          [Object(o["i"])("i", { class: "bi-sun" })],
          -1
        )
      ),
      is = { class: "form-check form-switch form-check-inline" },
      ns = Zn(() =>
        Object(o["i"])(
          "label",
          { class: "form-check-label" },
          [Object(o["i"])("i", { class: "bi-moon-stars" })],
          -1
        )
      ),
      ss = { class: "d-flex btn-footer mt-3" },
      rs = Zn(() =>
        Object(o["i"])("i", { class: "bi-chevron-double-left" }, null, -1)
      ),
      cs = Zn(() =>
        Object(o["i"])("i", { class: "bi-chevron-double-right" }, null, -1)
      );
    function ls(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["h"])(
          o["a"],
          null,
          [
            Object(o["i"])("div", Xn, [
              es,
              Object(o["i"])("div", ts, [
                Object(o["i"])("div", null, [
                  Object(o["i"])(
                    "h4",
                    null,
                    Object(o["I"])(e.$t("welcome.theme")),
                    1
                  ),
                 
                  Object(o["i"])("div", as, [
                    os,
                    Object(o["i"])("div", is, [
                      Object(o["Q"])(
                        Object(o["i"])(
                          "input",
                          {
                            class: "form-check-input",
                            type: "checkbox",
                            "onUpdate:modelValue":
                              t[0] || (t[0] = (e) => (n.darkTheme = e)),
                            onChange:
                              t[1] ||
                              (t[1] = (...e) =>
                                s.changeDarkTheme && s.changeDarkTheme(...e)),
                          },
                          null,
                          544
                        ),
                        [[o["J"], n.darkTheme]]
                      ),
                    ]),
                    ns,
                  ]),
                ]),
              ]),
            ]),
            Object(o["i"])("div", ss, [
              
              Object(o["i"])(
                "button",
                {
                  type: "button",
                  class: "btn flex-fill",
                  onClick: t[3] || (t[3] = (...e) => s.next && s.next(...e)),
                },
                [
                  Object(o["k"])(Object(o["I"])(e.$t("welcome.next")) + " ", 1),
                  cs,
                ]
              ),
            ]),
          ],
          64
        )
      );
    }
    var ds = {
      name: "languageView",
      data() {
        return { darkTheme: this.$store.getters.config.darkTheme };
      },
      methods: {
        changeDarkTheme: function () {
          this.$nextTick(function () {
            this.$store.commit("updateConfig", {
              val: this.darkTheme,
              key: "darkTheme",
            }),
              no.update(this.$store.getters.config);
          });
        },
        next: function () {
          xo()()
            ? document.getElementById("welcome-2-1-tab").click()
            : document.getElementById("welcome-3-tab").click();
        },
        back: function () {
          document.getElementById("welcome-1-tab").click();
        },
      },
    };
    a("6204");
    const us = U()(ds, [
      ["render", ls],
      ["__scopeId", "data-v-49b595b6"],
    ]);
    var ps = us;
    const ms = (e) => (
        Object(o["A"])("data-v-3b26c336"), (e = e()), Object(o["z"])(), e
      ),
      bs = { class: "row" },
      gs = ms(() =>
        Object(o["i"])(
          "div",
          { class: "col-md-4" },
          [
            Object(o["i"])("div", { class: "icon-container" }, [
              Object(o["i"])("i", { class: "bi-check-circle" }),
            ]),
          ],
          -1
        )
      ),
      hs = { class: "col-md-8" },
      ks = { class: "sub-header" },
      fs = ms(() => Object(o["i"])("i", { class: "bi-info-square" }, null, -1)),
      vs = { class: "d-flex btn-footer mt-3" },
      ys = ms(() =>
        Object(o["i"])("i", { class: "bi-chevron-double-left" }, null, -1)
      );
    function Ts(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["h"])(
          o["a"],
          null,
          [
            Object(o["i"])("div", bs, [
              gs,
              Object(o["i"])("div", hs, [
                Object(o["i"])("div", null, [
                  Object(o["i"])(
                    "h4",
                    null,
                    Object(o["I"])(e.$t("welcome.allReady")),
                    1
                  ),
                  Object(o["i"])(
                    "h6",
                    null,
                    Object(o["I"])(e.$t("welcome.allReadyText")),
                    1
                  ),
                  Object(o["i"])("span", ks, [
                    Object(o["k"])(
                      Object(o["I"])(e.$t("welcome.allReadySub")) + " ",
                      1
                    ),
                    fs,
                  ]),
                ]),
              ]),
            ]),
            Object(o["i"])("div", vs, [
              Object(o["i"])(
                "button",
                {
                  type: "button",
                  class: "btn flex-fill",
                  onClick: t[0] || (t[0] = (...e) => s.back && s.back(...e)),
                },
                [
                  ys,
                  Object(o["k"])(" " + Object(o["I"])(e.$t("welcome.next")), 1),
                ]
              ),
              Object(o["i"])(
                "button",
                {
                  type: "button",
                  class: "btn flex-fill",
                  "data-bs-dismiss": "modal",
                  onClick:
                    t[1] || (t[1] = (...e) => s.finish && s.finish(...e)),
                },
                Object(o["I"])(e.$t("welcome.ready")),
                1
              ),
            ]),
          ],
          64
        )
      );
    }
    var js = {
      create(e) {
        let t = Y()().format("YYYYMMDD"),
          a = Y()().add(1, "d").format("YYYYMMDD"),
          o = Y()().add(2, "d").format("YYYYMMDD"),
          i = ws(e, e.$t("generatedData.list1")),
          n = ws(e, e.$t("generatedData.list2"));
        ws(e, e.$t("generatedData.list3")),
          Os(e, t, e.$t("generatedData.data2"), !1, "", [], "#77e785"),
          Os(e, t, e.$t("generatedData.data3"), !1, "", [], "#f9d54a"),
          Os(e, t, e.$t("generatedData.data4"), !1),
          Os(e, a, e.$t("generatedData.data5"), !1, "", [], "#5e6ef2");
        let s = [
          { text: e.$t("generatedData.subtask1"), checked: !1, editing: !1 },
          { text: e.$t("generatedData.subtask2"), checked: !1, editing: !1 },
        ];
        Os(
          e,
          a,
          e.$t("generatedData.data11"),
          !1,
          e.$t("generatedData.desc1"),
          s,
          "none",
          "16:20"
        ),
          Os(e, o, e.$t("generatedData.data12"), !1),
          Os(e, i, e.$t("generatedData.data6"), !1),
          Os(e, i, e.$t("generatedData.data7"), !1),
          Os(e, i, e.$t("generatedData.data8"), !1),
          Os(e, n, e.$t("generatedData.data9"), !1, "", [], "#ed544b"),
          Os(e, n, e.$t("generatedData.data10"), !1, "", [], "#ed56a1");
      },
    };
    function Os(e, t, a, o, i = "", n = [], s = "none", r = null) {
      var c = {
        text: a,
        checked: o,
        listId: t,
        desc: i,
        subTaskList: n,
        color: s,
        priority: 0,
        tags: [],
        time: r,
        alarm: !1,
        repeatingEvent: null,
      };
      e.$store.commit("addTodo", c), B.update(t, e.$store.getters.todoLists[t]);
    }
    function ws(e, t) {
      const a = { listId: t, listName: t };
      return (
        e.$store.commit("newCustomTodoList", a),
        pe.update(e.$store.getters.cTodoListIds),
        B.update(a.listId, e.$store.getters.todoLists[a.listId]),
        a.listId
      );
    }
    var Ds = {
      name: "doneView",
      data() {
        return { darkTheme: this.$store.getters.config.darkTheme };
      },
      methods: {
        back: function () {
          document.getElementById("welcome-3-tab").click();
        },
        finish: function () {
          js.create(this);
        },
      },
    };
    a("9d43");
    const xs = U()(Ds, [
      ["render", Ts],
      ["__scopeId", "data-v-3b26c336"],
    ]);
    var Cs = xs;
    const zs = (e) => (
        Object(o["A"])("data-v-41e450da"), (e = e()), Object(o["z"])(), e
      ),
      Ls = { class: "row" },
      Is = zs(() =>
        Object(o["i"])(
          "div",
          { class: "col-md-4" },
          [
            Object(o["i"])("div", { class: "icon-container" }, [
              Object(o["i"])("i", { class: "bi-exclamation-triangle" }),
            ]),
          ],
          -1
        )
      ),
      Ss = { class: "col-md-8" },
      $s = { class: "mb-1" },
      Ms = { class: "sub-header" },
      Es = {
        class:
          "form-check form-switch d-flex px-1 mt-3 mb-0 align-items-center justify-content-center",
      },
      As = { class: "form-check-label", for: "sendReportErrors" },
      Ws = { class: "d-flex btn-footer mt-3" },
      Rs = zs(() =>
        Object(o["i"])("i", { class: "bi-chevron-double-left" }, null, -1)
      ),
      Bs = zs(() =>
        Object(o["i"])("i", { class: "bi-chevron-double-right" }, null, -1)
      );
    function Ps(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["h"])(
          o["a"],
          null,
          [
            Object(o["i"])("div", Ls, [
              Is,
              Object(o["i"])("div", Ss, [
                
                Object(o["i"])("div", Es, [
                  Object(o["i"])(
                    "label",
                    As,
                    Object(o["I"])(e.$t("settings.reportErrors")),
                    1
                  ),
                 
                ]),
              ]),
            ]),
            Object(o["i"])("div", Ws, [
              Object(o["i"])(
                "button",
                {
                  type: "button",
                  class: "btn flex-fill",
                  onClick: t[2] || (t[2] = (...e) => s.back && s.back(...e)),
                },
                [
                  Rs,
                  Object(o["k"])(" " + Object(o["I"])(e.$t("welcome.back")), 1),
                ]
              ),
              Object(o["i"])(
                "button",
                {
                  type: "button",
                  class: "btn flex-fill",
                  onClick: t[3] || (t[3] = (...e) => s.next && s.next(...e)),
                },
                [
                  Object(o["k"])(Object(o["I"])(e.$t("welcome.next")) + " ", 1),
                  Bs,
                ]
              ),
            ]),
          ],
          64
        )
      );
    }
    var Ys = {
      name: "backupView",
      data() {
        return { reportErrors: this.$store.getters.config.reportErrors };
      },
      methods: {
        changeSendErrors: function () {
          this.$nextTick(function () {
            this.$store.commit("updateConfig", {
              val: this.reportErrors,
              key: "reportErrors",
            }),
              no.update(this.$store.getters.config);
          });
        },
        next: function () {
          document.getElementById("welcome-4-tab").click();
        },
        back: function () {
          document.getElementById("welcome-2-tab").click();
        },
      },
    };
    a("b575");
    const _s = U()(Ys, [
      ["render", Ps],
      ["__scopeId", "data-v-41e450da"],
    ]);
    var Ns = _s;
    const Vs = (e) => (
        Object(o["A"])("data-v-4e219a9d"), (e = e()), Object(o["z"])(), e
      ),
      Us = { class: "row" },
      qs = Vs(() =>
        Object(o["i"])(
          "div",
          { class: "col-md-4" },
          [
            Object(o["i"])("div", { class: "icon-container" }, [
              Object(o["i"])("i", { class: "bi-app-indicator" }),
            ]),
          ],
          -1
        )
      ),
      Fs = { class: "col-md-8" },
      Hs = { class: "p-2" },
      Ks = {
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between align-items-center",
      },
      Gs = { class: "form-check-label", for: "welcomeOpenOnStartup" },
      Qs = {
        class:
          "form-check form-switch d-flex px-1 mb-3 justify-content-between align-items-center",
      },
      Js = { class: "form-check-label", for: "wlcomeRunInBackground" },
      Zs = ["title"],
      Xs = { class: "d-flex btn-footer mt-3" },
      er = Vs(() =>
        Object(o["i"])("i", { class: "bi-chevron-double-left" }, null, -1)
      ),
      tr = Vs(() =>
        Object(o["i"])("i", { class: "bi-chevron-double-right" }, null, -1)
      );
    function ar(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["h"])(
          o["a"],
          null,
          [
            Object(o["i"])("div", Us, [
              qs,
              Object(o["i"])("div", Fs, [
                Object(o["i"])("div", null, [
                  Object(o["i"])(
                    "h4",
                    null,
                    Object(o["I"])(e.$t("settings.settings")),
                    1
                  ),
                  Object(o["i"])("div", Hs, [
                    Object(o["i"])("div", Ks, [
                      Object(o["i"])(
                        "label",
                        Gs,
                        Object(o["I"])(e.$t("settings.openOnStartup")),
                        1
                      ),
                      Object(o["Q"])(
                        Object(o["i"])(
                          "input",
                          {
                            class: "form-check-input mx-3",
                            type: "checkbox",
                            id: "welcomeOpenOnStartup",
                            "onUpdate:modelValue":
                              t[0] || (t[0] = (e) => (n.openOnStartup = e)),
                            onChange:
                              t[1] || (t[1] = (e) => s.setOpenOnStart()),
                          },
                          null,
                          544
                        ),
                        [[o["J"], n.openOnStartup]]
                      ),
                    ]),
                    Object(o["i"])("div", Qs, [
                      Object(o["i"])("label", Js, [
                        Object(o["i"])("span", null, [
                          Object(o["k"])(
                            Object(o["I"])(e.$t("settings.runInBackground")) +
                              " ",
                            1
                          ),
                          Object(o["i"])("sup", null, [
                            Object(o["i"])(
                              "i",
                              {
                                class: "bi-info-circle",
                                style: { cursor: "help" },
                                title: e.$t("settings.runInBackgroundInfo"),
                              },
                              null,
                              8,
                              Zs
                            ),
                          ]),
                        ]),
                      ]),
                      Object(o["Q"])(
                        Object(o["i"])(
                          "input",
                          {
                            class: "form-check-input mx-3",
                            type: "checkbox",
                            id: "wlcomeRunInBackground",
                            "onUpdate:modelValue":
                              t[2] || (t[2] = (e) => (n.runInBackground = e)),
                            onChange:
                              t[3] || (t[3] = (e) => s.setRunInBackground()),
                          },
                          null,
                          544
                        ),
                        [[o["J"], n.runInBackground]]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            Object(o["i"])("div", Xs, [
              Object(o["i"])(
                "button",
                {
                  type: "button",
                  class: "btn flex-fill",
                  onClick: t[4] || (t[4] = (...e) => s.back && s.back(...e)),
                },
                [
                  er,
                  Object(o["k"])(" " + Object(o["I"])(e.$t("welcome.back")), 1),
                ]
              ),
              Object(o["i"])(
                "button",
                {
                  type: "button",
                  class: "btn flex-fill",
                  onClick: t[5] || (t[5] = (...e) => s.next && s.next(...e)),
                },
                [
                  Object(o["k"])(Object(o["I"])(e.$t("welcome.next")) + " ", 1),
                  tr,
                ]
              ),
            ]),
          ],
          64
        )
      );
    }
    var or = {
      name: "languageView",
      data() {
        return {
          openOnStartup: this.$store.getters.config.openOnStartup,
          runInBackground: this.$store.getters.config.openOnStartup,
        };
      },
      methods: {
        setOpenOnStart: function () {
          this.$nextTick(function () {
            const { ipcRenderer: e } = a("bdb9");
            e.send("set-open-on-startup", this.openOnStartup),
              this.$store.commit("updateConfig", {
                val: this.openOnStartup,
                key: "openOnStartup",
              }),
              no.update(this.$store.getters.config);
          });
        },
        setRunInBackground: function () {
          this.$nextTick(function () {
            const { ipcRenderer: e } = a("bdb9");
            e.send("set-run-in-background", this.runInBackground),
              this.$store.commit("updateConfig", {
                val: this.runInBackground,
                key: "runInBackground",
              }),
              no.update(this.$store.getters.config);
          });
        },
        next: function () {
          document.getElementById("welcome-3-tab").click();
        },
        back: function () {
          document.getElementById("welcome-2-tab").click();
        },
      },
    };
    a("23fa");
    const ir = U()(or, [
      ["render", ar],
      ["__scopeId", "data-v-4e219a9d"],
    ]);
    var nr = ir,
      sr = {
        name: "aboutModal",
        components: {
          LanguageView: Jn,
          ThemeView: ps,
          doneView: Cs,
          backupView: Ns,
          appView: nr,
        },
        data() {
          return {};
        },
        methods: {},
      };
    a("0380");
    const rr = U()(sr, [
      ["render", Wn],
      ["__scopeId", "data-v-16671909"],
    ]);
    var cr = rr;
    const lr = (e) => (
        Object(o["A"])("data-v-77e907ca"), (e = e()), Object(o["z"])(), e
      ),
      dr = { class: "modal-dialog modal-dialog-centered" },
      ur = { class: "modal-content" },
      pr = { class: "modal-header d-flex" },
      mr = { class: "todo-list-selector" },
      br = { class: "d-flex align-items-center" },
      gr = lr(() =>
        Object(o["i"])("i", { class: "bi-calendar-event mx-2" }, null, -1)
      ),
      hr = { class: "align-items-center date-picker-btn" },
      kr = {
        class: "align-items-center date-picker-btn py-2",
        id: "customListDropDown",
        "data-bs-toggle": "dropdown",
      },
      fr = lr(() =>
        Object(o["i"])("i", { class: "bi-view-list mx-2" }, null, -1)
      ),
      vr = { id: "todo-list-select" },
      yr = { class: "dropdown-menu", "aria-labelledby": "customListDropDown" },
      Tr = ["value"],
      jr = ["onClick"],
      Or = { key: 0, class: "d-flex align-items-center" },
      wr = lr(() =>
        Object(o["i"])("div", { class: "selector-divider" }, null, -1)
      ),
      Dr = lr(() =>
        Object(o["i"])(
          "i",
          {
            id: "btnGroupDrop1",
            class: "bi-chevron-down p-2",
            type: "button",
            "data-bs-toggle": "dropdown",
          },
          null,
          -1
        )
      ),
      xr = { class: "dropdown-menu", "aria-labelledby": "btnGroupDrop1" },
      Cr = lr(() =>
        Object(o["i"])("i", { class: "bi-calendar-check" }, null, -1)
      ),
      zr = lr(() => Object(o["i"])("i", { class: "bi-view-list" }, null, -1)),
      Lr = { class: "d-flex ms-auto align-items-center" },
      Ir = ["title"],
      Sr = ["title"],
      $r = {
        class: "dropdown-menu dropdown-menu-end",
        "aria-labelledby": "btnTaskOptionMenu",
      },
      Mr = lr(() => Object(o["i"])("i", { class: "bi-clipboard" }, null, -1)),
      Er = lr(() => Object(o["i"])("i", { class: "bi-back" }, null, -1)),
      Ar = lr(() =>
        Object(o["i"])(
          "li",
          null,
          [Object(o["i"])("hr", { class: "dropdown-divider" })],
          -1
        )
      ),
      Wr = lr(() => Object(o["i"])("i", { class: "bi-trash" }, null, -1)),
      Rr = { key: 0 },
      Br = lr(() => Object(o["i"])("i", { class: "bi-trash" }, null, -1)),
      Pr = ["title"],
      Yr = { class: "modal-body" },
      _r = { class: "form-check" },
      Nr = { class: "title-container" },
      Vr = ["innerHTML"],
      Ur = ["placeholder"],
      qr = { class: "position-relative" },
      Fr = ["placeholder"],
      Hr = ["title"],
      Kr = ["innerHTML"],
      Gr = lr(() => Object(o["i"])("div", { class: "mt-3" }, null, -1)),
      Qr = lr(() =>
        Object(o["i"])(
          "div",
          { class: "horizontal-divider mb-0 mt-3" },
          null,
          -1
        )
      ),
      Jr = { class: "sub-tasks" },
      Zr = ["onDragstart"],
      Xr = ["onUpdate:modelValue", "id", "onChange"],
      ec = ["for", "onDrop"],
      tc = ["innerHTML"],
      ac = ["title", "onClick"],
      oc = ["onUpdate:modelValue", "onBlur", "onKeyup"],
      ic = { class: "new-sub-task d-flex align-items-center" },
      nc = lr(() =>
        Object(o["i"])(
          "label",
          { for: "new-sub-task" },
          [Object(o["i"])("i", { class: "bi-plus-square mx-3" })],
          -1
        )
      ),
      sc = ["placeholder"],
      rc = {
        class: "position-fixed bottom-0 end-0 p-3",
        style: { "z-index": "1056" },
      };
    function cc(e, t, a, i, n, s) {
      const r = Object(o["F"])("datepicker"),
        c = Object(o["F"])("time-picker"),
        l = Object(o["F"])("repeating-event"),
        d = Object(o["F"])("color-picker"),
        u = Object(o["F"])("toast-message"),
        p = Object(o["F"])("comfirm-modal");
      return (
        Object(o["y"])(),
        Object(o["h"])(
          o["a"],
          null,
          [
            Object(o["i"])(
              "div",
              {
                class: Object(o["t"])([
                  "modal fade",
                  { fullscreen: s.fullscreenToDoModal },
                ]),
                onKeydown:
                  t[28] ||
                  (t[28] = Object(o["R"])(
                    (...e) => s.pressEsc && s.pressEsc(...e),
                    ["esc"]
                  )),
                id: "toDoModal",
                tabindex: "-1",
                "aria-hidden": "true",
              },
              [
                Object(o["i"])("div", dr, [
                  Object(o["i"])("div", ur, [
                    Object(o["i"])("div", pr, [
                      Object(o["i"])("div", mr, [
                        Object(o["i"])("div", br, [
                          Object(o["Q"])(
                            Object(o["i"])(
                              "div",
                              {
                                class: "align-items-center date-picker-btn",
                                onClick:
                                  t[1] || (t[1] = (e) => s.showCalendar()),
                              },
                              [
                                gr,
                                Object(o["l"])(
                                  r,
                                  {
                                    id: "todo-date-picker-input",
                                    class: "py-2",
                                    modelValue: n.pickedDate,
                                    "onUpdate:modelValue":
                                      t[0] ||
                                      (t[0] = (e) => (n.pickedDate = e)),
                                    locale: s.language,
                                    "input-format": "dd/MM/yyyy",
                                    weekStartsOn: s.weekStartOnMonday,
                                  },
                                  null,
                                  8,
                                  ["modelValue", "locale", "weekStartsOn"]
                                ),
                              ],
                              512
                            ),
                            [[o["M"], n.showingCalendar]]
                          ),
                          Object(o["Q"])(
                            Object(o["i"])(
                              "div",
                              hr,
                              [
                                Object(o["i"])("div", kr, [
                                  fr,
                                  Object(o["i"])(
                                    "div",
                                    vr,
                                    Object(o["I"])(n.pickedCListName),
                                    1
                                  ),
                                ]),
                                Object(o["i"])("ul", yr, [
                                  (Object(o["y"])(!0),
                                  Object(o["h"])(
                                    o["a"],
                                    null,
                                    Object(o["D"])(
                                      n.cListOptions,
                                      (e) => (
                                        Object(o["y"])(),
                                        Object(o["h"])(
                                          "li",
                                          { key: e.listId, value: e.listId },
                                          [
                                            Object(o["i"])(
                                              "button",
                                              {
                                                class: "dropdown-item",
                                                type: "button",
                                                onClick: (t) =>
                                                  (n.pickedCList = e.listId),
                                              },
                                              [
                                                Object(o["i"])(
                                                  "i",
                                                  {
                                                    class: "bi-check2",
                                                    style: Object(o["u"])({
                                                      visibility:
                                                        e.listId ==
                                                        n.pickedCList
                                                          ? "visible"
                                                          : "hidden",
                                                    }),
                                                  },
                                                  null,
                                                  4
                                                ),
                                                Object(o["i"])(
                                                  "span",
                                                  null,
                                                  Object(o["I"])(e.listName),
                                                  1
                                                ),
                                              ],
                                              8,
                                              jr
                                            ),
                                          ],
                                          8,
                                          Tr
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]),
                              ],
                              512
                            ),
                            [[o["M"], !n.showingCalendar]]
                          ),
                          s.showCL && s.showCal
                            ? (Object(o["y"])(),
                              Object(o["h"])("div", Or, [
                                wr,
                                Dr,
                                Object(o["i"])("ul", xr, [
                                  Object(o["i"])("li", null, [
                                    Object(o["i"])(
                                      "button",
                                      {
                                        class: "dropdown-item",
                                        type: "button",
                                        onClick:
                                          t[2] ||
                                          (t[2] = (e) =>
                                            (n.showingCalendar = !0)),
                                      },
                                      [
                                        Cr,
                                        Object(o["i"])(
                                          "span",
                                          null,
                                          Object(o["I"])(
                                            e.$t("settings.calendar")
                                          ),
                                          1
                                        ),
                                      ]
                                    ),
                                  ]),
                                  Object(o["i"])("li", null, [
                                    Object(o["i"])(
                                      "button",
                                      {
                                        class: "dropdown-item",
                                        type: "button",
                                        onClick:
                                          t[3] ||
                                          (t[3] = (e) =>
                                            (n.showingCalendar = !1)),
                                      },
                                      [
                                        zr,
                                        Object(o["i"])(
                                          "span",
                                          null,
                                          Object(o["I"])(
                                            e.$t("settings.customLists")
                                          ),
                                          1
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]))
                            : Object(o["g"])("", !0),
                        ]),
                      ]),
                      Object(o["i"])("div", Lr, [
                        Object(o["l"])(
                          c,
                          { time: n.todo.time, onTimeSelected: s.changeTime },
                          null,
                          8,
                          ["time", "onTimeSelected"]
                        ),
                        Object(o["i"])(
                          "i",
                          {
                            class: Object(o["t"])([
                              {
                                "bi-bell": !n.todo.alarm,
                                "bi-bell-fill": n.todo.alarm,
                              },
                              "header-menu-icons",
                            ]),
                            onClick:
                              t[4] ||
                              (t[4] = (...e) =>
                                s.changeAlarm && s.changeAlarm(...e)),
                            title: e.$t("todoDetails.alarm"),
                          },
                          null,
                          10,
                          Ir
                        ),
                        n.showingCalendar
                          ? (Object(o["y"])(),
                            Object(o["f"])(
                              l,
                              {
                                key: 0,
                                repeatingEvent: n.todo.repeatingEvent,
                                todo: n.todo,
                                onRepeatingEventSelected:
                                  s.changeRepeatingEvent,
                              },
                              null,
                              8,
                              [
                                "repeatingEvent",
                                "todo",
                                "onRepeatingEventSelected",
                              ]
                            ))
                          : Object(o["g"])("", !0),
                        Object(o["l"])(
                          d,
                          {
                            color: n.todo.color,
                            onColorSelected: s.changeColor,
                          },
                          null,
                          8,
                          ["color", "onColorSelected"]
                        ),
                        Object(o["i"])(
                          "i",
                          {
                            id: "btnTaskOptionMenu",
                            class: "bi-three-dots-vertical header-menu-icons",
                            type: "button",
                            "data-bs-toggle": "dropdown",
                            title: e.$t("todoDetails.actions"),
                          },
                          null,
                          8,
                          Sr
                        ),
                        Object(o["i"])("ul", $r, [
                          Object(o["i"])("li", null, [
                            Object(o["i"])(
                              "button",
                              {
                                class: "dropdown-item",
                                type: "button",
                                onClick:
                                  t[5] ||
                                  (t[5] = (...e) =>
                                    s.copyTodo && s.copyTodo(...e)),
                              },
                              [
                                Mr,
                                Object(o["i"])(
                                  "span",
                                  null,
                                  Object(o["I"])(e.$t("donate.copy")),
                                  1
                                ),
                              ]
                            ),
                          ]),
                          Object(o["i"])("li", null, [
                            Object(o["i"])(
                              "button",
                              {
                                class: "dropdown-item",
                                type: "button",
                                onClick:
                                  t[6] ||
                                  (t[6] = (...e) =>
                                    s.duplicateTodo && s.duplicateTodo(...e)),
                                "data-bs-dismiss": "modal",
                              },
                              [
                                Er,
                                Object(o["i"])(
                                  "span",
                                  null,
                                  Object(o["I"])(e.$t("todoDetails.duplicate")),
                                  1
                                ),
                              ]
                            ),
                          ]),
                          Ar,
                          Object(o["i"])("li", null, [
                            Object(o["i"])(
                              "button",
                              {
                                class: "dropdown-item",
                                type: "button",
                                onClick:
                                  t[7] ||
                                  (t[7] = (...e) =>
                                    s.removeTodo && s.removeTodo(...e)),
                                "data-bs-dismiss": "modal",
                              },
                              [
                                Wr,
                                Object(o["k"])(),
                                Object(o["i"])(
                                  "span",
                                  null,
                                  Object(o["I"])(e.$t("ui.remove")),
                                  1
                                ),
                              ]
                            ),
                          ]),
                          n.todo.repeatingEvent
                            ? (Object(o["y"])(),
                              Object(o["h"])("li", Rr, [
                                Object(o["i"])(
                                  "button",
                                  {
                                    class: "dropdown-item",
                                    type: "button",
                                    onClick:
                                      t[8] ||
                                      (t[8] = (...e) =>
                                        s.removeAll && s.removeAll(...e)),
                                    "data-bs-dismiss": "modal",
                                  },
                                  [
                                    Br,
                                    Object(o["k"])(),
                                    Object(o["i"])(
                                      "span",
                                      null,
                                      Object(o["I"])(e.$t("ui.removeAll")),
                                      1
                                    ),
                                  ]
                                ),
                              ]))
                            : Object(o["g"])("", !0),
                        ]),
                        Object(o["i"])("div", null, [
                          Object(o["i"])(
                            "i",
                            {
                              class: "bi-x close-modal header-menu-icons",
                              ref: "closeModal",
                              "data-bs-dismiss": "modal",
                              title: e.$t("todoDetails.close"),
                            },
                            null,
                            8,
                            Pr
                          ),
                        ]),
                      ]),
                    ]),
                    Object(o["i"])("div", Yr, [
                      Object(o["i"])("div", _r, [
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              class: "form-check-input",
                              type: "checkbox",
                              value: "",
                              id: "todo-header",
                              "onUpdate:modelValue":
                                t[9] || (t[9] = (e) => (n.todo.checked = e)),
                              onChange:
                                t[10] ||
                                (t[10] = (e) => s.checkTodoClickhandler(!1)),
                            },
                            null,
                            544
                          ),
                          [[o["J"], n.todo.checked]]
                        ),
                        Object(o["i"])("div", Nr, [
                          Object(o["Q"])(
                            Object(o["i"])(
                              "label",
                              {
                                class: Object(o["t"])([
                                  "form-check-label todo-title",
                                  { "completed-task": n.todo.checked },
                                ]),
                                for: "todo-header",
                                onDblclick:
                                  t[11] ||
                                  (t[11] = (...e) =>
                                    s.editTitle && s.editTitle(...e)),
                              },
                              [
                                Object(o["i"])(
                                  "span",
                                  { innerHTML: s.todoText },
                                  null,
                                  8,
                                  Vr
                                ),
                              ],
                              34
                            ),
                            [[o["M"], !n.editingTitle]]
                          ),
                          Object(o["Q"])(
                            Object(o["i"])(
                              "label",
                              {
                                class:
                                  "form-check-label todo-title todo-title-empty-title",
                                for: "todo-header",
                                onDblclick:
                                  t[12] ||
                                  (t[12] = (...e) =>
                                    s.editTitle && s.editTitle(...e)),
                              },
                              Object(o["I"])(e.$t("todoDetails.taskTitle")),
                              545
                            ),
                            [[o["M"], !n.editingTitle && "" == n.todo.text]]
                          ),
                          Object(o["Q"])(
                            Object(o["i"])(
                              "input",
                              {
                                class: "todo-title-input",
                                type: "text",
                                "onUpdate:modelValue":
                                  t[13] || (t[13] = (e) => (n.todo.text = e)),
                                ref: "titleInput",
                                placeholder: e.$t("todoDetails.taskTitle"),
                                onBlur:
                                  t[14] || (t[14] = (e) => s.doneEditTitle()),
                                onKeyup:
                                  t[15] ||
                                  (t[15] = Object(o["R"])(
                                    (e) => s.doneEditTitle(),
                                    ["enter"]
                                  )),
                              },
                              null,
                              40,
                              Ur
                            ),
                            [
                              [o["M"], n.editingTitle],
                              [o["L"], n.todo.text],
                            ]
                          ),
                          Object(o["Q"])(
                            Object(o["i"])(
                              "div",
                              qr,
                              [
                                Object(o["Q"])(
                                  Object(o["i"])(
                                    "textarea",
                                    {
                                      class: "todo-description-textarea mt-2",
                                      "onUpdate:modelValue":
                                        t[16] ||
                                        (t[16] = (e) => (n.todo.desc = e)),
                                      placeholder: e.$t("todoDetails.notes"),
                                      ref: "descriptionInput",
                                      onBlur:
                                        t[17] ||
                                        (t[17] = (...e) =>
                                          s.doneEditDescription &&
                                          s.doneEditDescription(...e)),
                                    },
                                    "\n                ",
                                    40,
                                    Fr
                                  ),
                                  [[o["L"], n.todo.desc]]
                                ),
                                Object(o["i"])(
                                  "i",
                                  {
                                    class: "bi-markdown-fill",
                                    onMousedown:
                                      t[18] ||
                                      (t[18] = (...e) =>
                                        s.goToMarkDown && s.goToMarkDown(...e)),
                                    title: e.$t("todoDetails.markdown"),
                                  },
                                  null,
                                  40,
                                  Hr
                                ),
                              ],
                              512
                            ),
                            [[o["M"], n.editingDescription]]
                          ),
                          Object(o["Q"])(
                            Object(o["i"])(
                              "div",
                              {
                                class: "mt-2 todo-description",
                                onDblclick:
                                  t[19] ||
                                  (t[19] = (...e) =>
                                    s.editDescription &&
                                    s.editDescription(...e)),
                                innerHTML: s.todoDescription,
                              },
                              null,
                              40,
                              Kr
                            ),
                            [
                              [
                                o["M"],
                                !n.editingDescription && "" != n.todo.desc,
                              ],
                            ]
                          ),
                          Object(o["Q"])(
                            Object(o["i"])(
                              "div",
                              {
                                onDblclick:
                                  t[20] ||
                                  (t[20] = (...e) =>
                                    s.editDescription &&
                                    s.editDescription(...e)),
                                class: "description-empty mt-2",
                              },
                              Object(o["I"])(e.$t("todoDetails.notes")),
                              545
                            ),
                            [
                              [
                                o["M"],
                                !n.editingDescription &&
                                  "" ==
                                    n.todo.desc.replace(
                                      /^\s*$(?:\r\n?|\n)/gm,
                                      ""
                                    ),
                              ],
                            ]
                          ),
                        ]),
                      ]),
                      Gr,
                      Qr,
                      Object(o["i"])("ul", Jr, [
                        (Object(o["y"])(!0),
                        Object(o["h"])(
                          o["a"],
                          null,
                          Object(o["D"])(
                            n.todo.subTaskList,
                            (a, i) => (
                              Object(o["y"])(),
                              Object(o["h"])(
                                "li",
                                { key: i, class: "sub-task" },
                                [
                                  Object(o["Q"])(
                                    Object(o["i"])(
                                      "div",
                                      {
                                        draggable: "true",
                                        onDragstart: (e) => s.startDrag(e, i),
                                        onDragover:
                                          t[24] ||
                                          (t[24] = Object(o["S"])(() => {}, [
                                            "prevent",
                                          ])),
                                      },
                                      [
                                        Object(o["i"])(
                                          "div",
                                          {
                                            class: Object(o["t"])([
                                              "d-flex flex-row align-items-center",
                                              { checked: a.checked },
                                            ]),
                                          },
                                          [
                                            Object(o["Q"])(
                                              Object(o["i"])(
                                                "input",
                                                {
                                                  class:
                                                    "form-check-input flex-grow-1 mx-3 mt-0",
                                                  type: "checkbox",
                                                  "onUpdate:modelValue": (e) =>
                                                    (a.checked = e),
                                                  id: "sub-task-" + i,
                                                  onChange: (e) =>
                                                    s.changeSubTaskClickhandler(
                                                      i
                                                    ),
                                                },
                                                null,
                                                40,
                                                Xr
                                              ),
                                              [[o["J"], a.checked]]
                                            ),
                                            Object(o["i"])(
                                              "label",
                                              {
                                                class: "form-check-label",
                                                for: "sub-task-" + i,
                                                onDragenter:
                                                  t[21] ||
                                                  (t[21] = Object(o["S"])(
                                                    (e) => s.onDragenter(e),
                                                    ["self"]
                                                  )),
                                                onDragleave:
                                                  t[22] ||
                                                  (t[22] = Object(o["S"])(
                                                    (e) => s.onDragleave(e),
                                                    ["self"]
                                                  )),
                                                onDrop: (e) => s.onDrop(e, i),
                                                onDragover:
                                                  t[23] ||
                                                  (t[23] = Object(
                                                    o["S"]
                                                  )(() => {}, ["prevent"])),
                                              },
                                              [
                                                Object(o["i"])(
                                                  "span",
                                                  {
                                                    innerHTML: s.linkifyText(
                                                      a.text
                                                    ),
                                                  },
                                                  null,
                                                  8,
                                                  tc
                                                ),
                                              ],
                                              40,
                                              ec
                                            ),
                                            Object(o["i"])(
                                              "i",
                                              {
                                                class: "bi-trash mx-2",
                                                title: e.$t("ui.remove"),
                                                onClick: (e) =>
                                                  s.removeSubTask(i),
                                              },
                                              null,
                                              8,
                                              ac
                                            ),
                                          ],
                                          2
                                        ),
                                      ],
                                      40,
                                      Zr
                                    ),
                                    [[o["M"], !a.editing]]
                                  ),
                                  Object(o["Q"])(
                                    Object(o["i"])(
                                      "input",
                                      {
                                        "onUpdate:modelValue": (e) =>
                                          (a.text = e),
                                        onBlur: (e) => s.doneEditSubTask(i),
                                        onKeyup: Object(o["R"])(
                                          (e) => s.doneEditSubTask(i),
                                          ["enter"]
                                        ),
                                        ref_for: !0,
                                        ref: "subTaskEdit" + i,
                                        class: "edit-sub-task",
                                      },
                                      null,
                                      40,
                                      oc
                                    ),
                                    [
                                      [o["M"], a.editing],
                                      [o["L"], a.text],
                                    ]
                                  ),
                                ]
                              )
                            )
                          ),
                          128
                        )),
                        Object(o["i"])("div", ic, [
                          nc,
                          Object(o["Q"])(
                            Object(o["i"])(
                              "input",
                              {
                                type: "text",
                                id: "new-sub-task",
                                placeholder: e.$t("todoDetails.addSubTask"),
                                autocomplete: "off",
                                onBlur:
                                  t[25] || (t[25] = (e) => s.addSubTask()),
                                onKeyup:
                                  t[26] ||
                                  (t[26] = Object(o["R"])(
                                    (e) => s.addSubTask(),
                                    ["enter"]
                                  )),
                                "onUpdate:modelValue":
                                  t[27] ||
                                  (t[27] = (e) => (n.newSubTask.text = e)),
                                ref: "newSubTask",
                              },
                              null,
                              40,
                              sc
                            ),
                            [[o["L"], n.newSubTask.text]]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ],
              34
            ),
            Object(o["i"])("div", rc, [
              Object(o["l"])(
                u,
                {
                  id: "copiedTaskToClipboard",
                  text: e.$t("todoDetails.copiedTaskToClipboard"),
                },
                null,
                8,
                ["text"]
              ),
              Object(o["l"])(
                u,
                {
                  id: "taskRemoved",
                  text: e.$t("todoDetails.taskRemoved"),
                  "sub-text": "(" + e.$t("ui.undo") + ")",
                  onSubTextClick: s.undoRemoveTask,
                },
                null,
                8,
                ["text", "sub-text", "onSubTextClick"]
              ),
              Object(o["l"])(
                u,
                {
                  id: "recurrentTaskRemoved",
                  text: e.$t("todoDetails.recurrentTaskRemoved"),
                },
                null,
                8,
                ["text"]
              ),
              Object(o["l"])(
                u,
                {
                  id: "taskDuplicated",
                  text: e.$t("todoDetails.taskDuplicated"),
                },
                null,
                8,
                ["text"]
              ),
            ]),
            Object(o["l"])(
              p,
              {
                id: "removeReModalToDoDetails",
                title: e.$t("ui.removeRepeatingTask"),
                text: e.$t("ui.repeatingTaskRemoveConfirm"),
                ico: "bi-x-circle",
                okText: e.$t("ui.remove"),
                onOnOk: s.removeAllComfirmed,
                onOnCancel: s.removeAllCanceled,
              },
              null,
              8,
              ["title", "text", "okText", "onOnOk", "onOnCancel"]
            ),
          ],
          64
        )
      );
    }
    var lc = a("d4cd"),
      dc = a.n(lc);
    const uc = { class: "dropdown-center" },
      pc = ["title"],
      mc = {
        class: "dropdown-menu color-picker-dropdown px-2",
        "aria-labelledby": "btnTaskTimePicker",
      },
      bc = { class: "d-flex align-items-center" };
    function gc(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["h"])("div", uc, [
          Object(o["i"])(
            "i",
            {
              id: "btnTaskColorPicker",
              class: "header-menu-icons bi-circle-fill",
              type: "button",
              "data-bs-toggle": "dropdown",
              style: Object(o["u"])("color: " + a.color),
              title: e.$t("todoDetails.color"),
            },
            null,
            12,
            pc
          ),
          Object(o["i"])("ul", mc, [
            Object(o["i"])("div", bc, [
              Object(o["i"])("i", {
                class: "bi-circle colors-menu-icons",
                type: "button",
                onClick: t[0] || (t[0] = (e) => s.selectColor("none")),
              }),
              Object(o["i"])("i", {
                class: "bi-circle-fill colors-menu-icons",
                type: "button",
                onClick: t[1] || (t[1] = (e) => s.selectColor("#77e785")),
                style: { color: "#77e785" },
              }),
              Object(o["i"])("i", {
                class: "bi-circle-fill colors-menu-icons",
                type: "button",
                onClick: t[2] || (t[2] = (e) => s.selectColor("#06b6d4")),
                style: { color: "#06b6d4" },
              }),
              Object(o["i"])("i", {
                class: "bi-circle-fill colors-menu-icons",
                type: "button",
                onClick: t[3] || (t[3] = (e) => s.selectColor("#5e6ef2")),
                style: { color: "#5e6ef2" },
              }),
            ]),
            Object(o["i"])("div", null, [
              Object(o["i"])("i", {
                class: "bi-circle-fill colors-menu-icons",
                type: "button",
                onClick: t[4] || (t[4] = (e) => s.selectColor("#8b5cf6")),
                style: { color: "#8b5cf6" },
              }),
              Object(o["i"])("i", {
                class: "bi-circle-fill colors-menu-icons",
                type: "button",
                onClick: t[5] || (t[5] = (e) => s.selectColor("#ed56a1")),
                style: { color: "#ed56a1" },
              }),
              Object(o["i"])("i", {
                class: "bi-circle-fill colors-menu-icons",
                type: "button",
                onClick: t[6] || (t[6] = (e) => s.selectColor("#ed544b")),
                style: { color: "#ed544b" },
              }),
              Object(o["i"])("i", {
                class: "bi-circle-fill colors-menu-icons",
                type: "button",
                onClick: t[7] || (t[7] = (e) => s.selectColor("#f97316")),
                style: { color: "#f97316" },
              }),
            ]),
            Object(o["i"])("div", null, [
              Object(o["i"])("i", {
                class: "bi-circle-fill colors-menu-icons",
                type: "button",
                onClick: t[8] || (t[8] = (e) => s.selectColor("#f9d54a")),
                style: { color: "#f9d54a" },
              }),
              Object(o["i"])("i", {
                class: "bi-circle-fill colors-menu-icons",
                type: "button",
                onClick: t[9] || (t[9] = (e) => s.selectColor("#ba7956")),
                style: { color: "#ba7956" },
              }),
              Object(o["i"])("i", {
                class: "bi-circle-fill colors-menu-icons",
                type: "button",
                onClick: t[10] || (t[10] = (e) => s.selectColor("#6b7280")),
                style: { color: "#6b7280" },
              }),
              Object(o["i"])("i", {
                class: "bi-circle-fill colors-menu-icons",
                type: "button",
                onClick: t[11] || (t[11] = (e) => s.selectColor("#030712")),
                style: { color: "#030712" },
              }),
            ]),
          ]),
        ])
      );
    }
    var hc = {
      name: "colorPicker",
      emits: ["ColorSelected"],
      data() {
        return { colorPicker: "" };
      },
      props: { color: { required: !0, type: [String, null] } },
      methods: {
        selectColor(e) {
          this.$emit("ColorSelected", e);
        },
        updateBtnShape(e) {
          "none" == e
            ? (document
                .getElementById("btnTaskColorPicker")
                .classList.remove("bi-circle-fill"),
              document
                .getElementById("btnTaskColorPicker")
                .classList.add("bi-circle"))
            : (document
                .getElementById("btnTaskColorPicker")
                .classList.add("bi-circle-fill"),
              document
                .getElementById("btnTaskColorPicker")
                .classList.remove("bi-circle"));
        },
      },
      watch: {
        color: function (e) {
          this.updateBtnShape(e);
        },
      },
    };
    a("f08d");
    const kc = U()(hc, [
      ["render", gc],
      ["__scopeId", "data-v-b8bbf28e"],
    ]);
    var fc = kc;
    const vc = ["title"],
      yc = {
        class: "dropdown-menu color-picker-dropdown",
        "aria-labelledby": "btnTaskTimePicker",
      },
      Tc = { class: "d-flex align-items-center mx-3" };
    function jc(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["h"])(
          o["a"],
          null,
          [
            Object(o["i"])(
              "div",
              {
                class: "header-menu-icons",
                type: "button",
                "data-bs-toggle": "dropdown",
                "data-bs-auto-close": "outside",
                title: e.$t("todoDetails.time"),
              },
              [
                Object(o["i"])(
                  "i",
                  {
                    id: "btnTaskTimePicker",
                    class: Object(o["t"])({
                      "bi-alarm": !n.selectedTime,
                      "bi-alarm-fill": n.selectedTime,
                    }),
                  },
                  null,
                  2
                ),
              ],
              8,
              vc
            ),
            Object(o["i"])("ul", yc, [
              Object(o["i"])("div", Tc, [
                Object(o["Q"])(
                  Object(o["i"])(
                    "input",
                    {
                      type: "time",
                      "onUpdate:modelValue":
                        t[0] || (t[0] = (e) => (n.selectedTime = e)),
                      onBlur:
                        t[1] || (t[1] = (e) => s.selectTime(n.selectedTime)),
                    },
                    null,
                    544
                  ),
                  [[o["L"], n.selectedTime]]
                ),
                Object(o["i"])("i", {
                  class: "header-menu-icons bi-trash",
                  type: "button",
                  onClick:
                    t[2] || (t[2] = (...e) => s.clearTime && s.clearTime(...e)),
                }),
              ]),
            ]),
          ],
          64
        )
      );
    }
    var Oc = {
      name: "timePicker",
      emits: ["timeSelected"],
      data() {
        return { selectedTime: "" };
      },
      props: { time: { required: !0, type: [String, null] } },
      methods: {
        selectTime(e) {
          this.$emit("timeSelected", e);
        },
        clearTime() {
          (this.selectedTime = null), this.selectTime(this.selectedTime);
        },
      },
      watch: {
        time: function (e) {
          this.selectedTime = e;
        },
      },
    };
    a("06ab");
    const wc = U()(Oc, [
      ["render", jc],
      ["__scopeId", "data-v-03566f6c"],
    ]);
    var Dc = wc;
    const xc = ["title"],
      Cc = {
        class: "dropdown-menu repeating-event-dropdown",
        "aria-labelledby": "btnRepeatingEvent",
      },
      zc = { class: "mx-3 d-flex flex-column drop-container" },
      Lc = ["disabled"],
      Ic = { value: "" },
      Sc = { value: "3" },
      $c = { value: "2" },
      Mc = { value: "4" },
      Ec = { value: "5" },
      Ac = { value: "1" },
      Wc = { value: "0" },
      Rc = { key: 0, class: "d-flex flex-column" },
      Bc = { class: "weekDays-selector mt-3 mb-1" },
      Pc = ["disabled"],
      Yc = { for: "weekday-mon" },
      _c = ["disabled"],
      Nc = { for: "weekday-tue" },
      Vc = ["disabled"],
      Uc = { for: "weekday-wed" },
      qc = ["disabled"],
      Fc = { for: "weekday-thu" },
      Hc = ["disabled"],
      Kc = { for: "weekday-fri" },
      Gc = ["disabled"],
      Qc = { for: "weekday-sat" },
      Jc = ["disabled"],
      Zc = { for: "weekday-sun" },
      Xc = {
        class: "d-flex align-items-center justify-content-between re-input",
      },
      el = { class: "opacity-50" },
      tl = ["disabled"],
      al = ["disabled"],
      ol = { value: "" },
      il = { value: "ocurrences" },
      nl = { value: "untilDate" },
      sl = ["disabled"],
      rl = ["disabled"],
      cl = { class: "d-flex flex-row re-form-row re-input" };
    function ll(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["h"])(
          o["a"],
          null,
          [
            Object(o["i"])(
              "div",
              {
                id: "reDropDown",
                class: "header-menu-icons",
                type: "button",
                "data-bs-toggle": "dropdown",
                "data-bs-auto-close": "outside",
                title: e.$t("ui.recurringTasks"),
              },
              [
                Object(o["i"])(
                  "i",
                  {
                    id: "btnRepeatingEvent",
                    class: Object(o["t"])({
                      "bi-arrow-clockwise": !a.repeatingEvent,
                      "bi-arrow-repeat": a.repeatingEvent,
                    }),
                  },
                  null,
                  2
                ),
              ],
              8,
              xc
            ),
            Object(o["i"])("ul", Cc, [
              Object(o["i"])("div", zc, [
                Object(o["Q"])(
                  Object(o["i"])(
                    "select",
                    {
                      class: "form-select re-input",
                      "aria-label": "Default select example",
                      "onUpdate:modelValue":
                        t[0] || (t[0] = (e) => (n.repeatingType = e)),
                      disabled: a.repeatingEvent,
                    },
                    [
                      Object(o["i"])(
                        "option",
                        Ic,
                        Object(o["I"])(e.$t("todoDetails.noRepeat")),
                        1
                      ),
                      Object(o["i"])(
                        "option",
                        Sc,
                        Object(o["I"])(e.$t("todoDetails.daily")),
                        1
                      ),
                      Object(o["i"])(
                        "option",
                        $c,
                        Object(o["I"])(e.$t("todoDetails.weekly")),
                        1
                      ),
                      Object(o["i"])(
                        "option",
                        Mc,
                        Object(o["I"])(e.$t("todoDetails.weekdays")),
                        1
                      ),
                      Object(o["i"])(
                        "option",
                        Ec,
                        Object(o["I"])(e.$t("todoDetails.customWeekdays")),
                        1
                      ),
                      Object(o["i"])(
                        "option",
                        Ac,
                        Object(o["I"])(e.$t("todoDetails.monthly")),
                        1
                      ),
                      Object(o["i"])(
                        "option",
                        Wc,
                        Object(o["I"])(e.$t("todoDetails.yearly")),
                        1
                      ),
                    ],
                    8,
                    Lc
                  ),
                  [[o["K"], n.repeatingType]]
                ),
                n.repeatingType
                  ? (Object(o["y"])(),
                    Object(o["h"])("div", Rc, [
                      Object(o["Q"])(
                        Object(o["i"])(
                          "div",
                          Bc,
                          [
                            Object(o["Q"])(
                              Object(o["i"])(
                                "input",
                                {
                                  type: "checkbox",
                                  disabled: a.repeatingEvent,
                                  id: "weekday-mon",
                                  class: "weekday",
                                  "onUpdate:modelValue":
                                    t[1] ||
                                    (t[1] = (e) => (n.weekdays.mon = e)),
                                },
                                null,
                                8,
                                Pc
                              ),
                              [[o["J"], n.weekdays.mon]]
                            ),
                            Object(o["i"])(
                              "label",
                              Yc,
                              Object(o["I"])(
                                s
                                  .moments()
                                  .isoWeekday(1)
                                  .locale(s.language)
                                  .format("dd")[0]
                              ),
                              1
                            ),
                            Object(o["Q"])(
                              Object(o["i"])(
                                "input",
                                {
                                  type: "checkbox",
                                  disabled: a.repeatingEvent,
                                  id: "weekday-tue",
                                  class: "weekday",
                                  "onUpdate:modelValue":
                                    t[2] ||
                                    (t[2] = (e) => (n.weekdays.tue = e)),
                                },
                                null,
                                8,
                                _c
                              ),
                              [[o["J"], n.weekdays.tue]]
                            ),
                            Object(o["i"])(
                              "label",
                              Nc,
                              Object(o["I"])(
                                s
                                  .moments()
                                  .isoWeekday(2)
                                  .locale(s.language)
                                  .format("dd")[0]
                              ),
                              1
                            ),
                            Object(o["Q"])(
                              Object(o["i"])(
                                "input",
                                {
                                  type: "checkbox",
                                  disabled: a.repeatingEvent,
                                  id: "weekday-wed",
                                  class: "weekday",
                                  "onUpdate:modelValue":
                                    t[3] ||
                                    (t[3] = (e) => (n.weekdays.wed = e)),
                                },
                                null,
                                8,
                                Vc
                              ),
                              [[o["J"], n.weekdays.wed]]
                            ),
                            Object(o["i"])(
                              "label",
                              Uc,
                              Object(o["I"])(
                                s
                                  .moments()
                                  .isoWeekday(3)
                                  .locale(s.language)
                                  .format("dd")[0]
                              ),
                              1
                            ),
                            Object(o["Q"])(
                              Object(o["i"])(
                                "input",
                                {
                                  type: "checkbox",
                                  disabled: a.repeatingEvent,
                                  id: "weekday-thu",
                                  class: "weekday",
                                  "onUpdate:modelValue":
                                    t[4] ||
                                    (t[4] = (e) => (n.weekdays.thu = e)),
                                },
                                null,
                                8,
                                qc
                              ),
                              [[o["J"], n.weekdays.thu]]
                            ),
                            Object(o["i"])(
                              "label",
                              Fc,
                              Object(o["I"])(
                                s
                                  .moments()
                                  .isoWeekday(4)
                                  .locale(s.language)
                                  .format("dd")[0]
                              ),
                              1
                            ),
                            Object(o["Q"])(
                              Object(o["i"])(
                                "input",
                                {
                                  type: "checkbox",
                                  disabled: a.repeatingEvent,
                                  id: "weekday-fri",
                                  class: "weekday",
                                  "onUpdate:modelValue":
                                    t[5] ||
                                    (t[5] = (e) => (n.weekdays.fri = e)),
                                },
                                null,
                                8,
                                Hc
                              ),
                              [[o["J"], n.weekdays.fri]]
                            ),
                            Object(o["i"])(
                              "label",
                              Kc,
                              Object(o["I"])(
                                s
                                  .moments()
                                  .isoWeekday(5)
                                  .locale(s.language)
                                  .format("dd")[0]
                              ),
                              1
                            ),
                            Object(o["Q"])(
                              Object(o["i"])(
                                "input",
                                {
                                  type: "checkbox",
                                  disabled: a.repeatingEvent,
                                  id: "weekday-sat",
                                  class: "weekday",
                                  "onUpdate:modelValue":
                                    t[6] ||
                                    (t[6] = (e) => (n.weekdays.sat = e)),
                                },
                                null,
                                8,
                                Gc
                              ),
                              [[o["J"], n.weekdays.sat]]
                            ),
                            Object(o["i"])(
                              "label",
                              Qc,
                              Object(o["I"])(
                                s
                                  .moments()
                                  .isoWeekday(6)
                                  .locale(s.language)
                                  .format("dd")[0]
                              ),
                              1
                            ),
                            Object(o["Q"])(
                              Object(o["i"])(
                                "input",
                                {
                                  type: "checkbox",
                                  disabled: a.repeatingEvent,
                                  id: "weekday-sun",
                                  class: "weekday",
                                  "onUpdate:modelValue":
                                    t[7] ||
                                    (t[7] = (e) => (n.weekdays.sun = e)),
                                },
                                null,
                                8,
                                Jc
                              ),
                              [[o["J"], n.weekdays.sun]]
                            ),
                            Object(o["i"])(
                              "label",
                              Zc,
                              Object(o["I"])(
                                s
                                  .moments()
                                  .isoWeekday(7)
                                  .locale(s.language)
                                  .format("dd")[0]
                              ),
                              1
                            ),
                          ],
                          512
                        ),
                        [
                          [
                            o["M"],
                            "5" == n.repeatingType ||
                              (a.repeatingEvent && "2" == n.repeatingType),
                          ],
                        ]
                      ),
                      Object(o["i"])("div", Xc, [
                        Object(o["i"])(
                          "label",
                          el,
                          Object(o["I"])(e.$t("todoDetails.interval")),
                          1
                        ),
                        Object(o["Q"])(
                          Object(o["i"])(
                            "input",
                            {
                              type: "number",
                              class: "form-control lex-shrink-1 counter",
                              "onUpdate:modelValue":
                                t[8] || (t[8] = (e) => (n.interval = e)),
                              disabled: a.repeatingEvent,
                            },
                            null,
                            8,
                            tl
                          ),
                          [[o["L"], n.interval]]
                        ),
                      ]),
                      Object(o["Q"])(
                        Object(o["i"])(
                          "select",
                          {
                            class: "form-select re-input",
                            "aria-label": "Default select example",
                            "onUpdate:modelValue":
                              t[9] || (t[9] = (e) => (n.ocurrencesType = e)),
                            disabled: a.repeatingEvent,
                          },
                          [
                            Object(o["i"])(
                              "option",
                              ol,
                              Object(o["I"])(e.$t("todoDetails.indefinitely")),
                              1
                            ),
                            Object(o["i"])(
                              "option",
                              il,
                              Object(o["I"])(e.$t("todoDetails.occurrences")),
                              1
                            ),
                            Object(o["i"])(
                              "option",
                              nl,
                              Object(o["I"])(e.$t("todoDetails.untilDate")),
                              1
                            ),
                          ],
                          8,
                          al
                        ),
                        [[o["K"], n.ocurrencesType]]
                      ),
                      "ocurrences" == n.ocurrencesType
                        ? Object(o["Q"])(
                            (Object(o["y"])(),
                            Object(o["h"])(
                              "input",
                              {
                                key: 0,
                                type: "number",
                                class: "form-control re-input last-input",
                                "onUpdate:modelValue":
                                  t[10] || (t[10] = (e) => (n.ocurrences = e)),
                                disabled: a.repeatingEvent,
                              },
                              null,
                              8,
                              sl
                            )),
                            [[o["L"], n.ocurrences]]
                          )
                        : Object(o["g"])("", !0),
                      "untilDate" == n.ocurrencesType
                        ? Object(o["Q"])(
                            (Object(o["y"])(),
                            Object(o["h"])(
                              "input",
                              {
                                key: 1,
                                type: "date",
                                class: "form-control re-input last-input",
                                "onUpdate:modelValue":
                                  t[11] || (t[11] = (e) => (n.untilDate = e)),
                                disabled: a.repeatingEvent,
                              },
                              null,
                              8,
                              rl
                            )),
                            [[o["L"], n.untilDate]]
                          )
                        : Object(o["g"])("", !0),
                    ]))
                  : Object(o["g"])("", !0),
                Object(o["i"])("div", cl, [
                  a.repeatingEvent
                    ? Object(o["g"])("", !0)
                    : (Object(o["y"])(),
                      Object(o["h"])(
                        "button",
                        {
                          key: 0,
                          type: "button",
                          class: "btn flex-fill",
                          onClick:
                            t[12] || (t[12] = (...e) => s.done && s.done(...e)),
                        },
                        Object(o["I"])(e.$t("todoDetails.done")),
                        1
                      )),
                  a.repeatingEvent
                    ? (Object(o["y"])(),
                      Object(o["h"])(
                        "button",
                        {
                          key: 1,
                          type: "button",
                          class: "btn flex-fill",
                          onClick:
                            t[13] ||
                            (t[13] = (...e) => s.split && s.split(...e)),
                        },
                        Object(o["I"])(e.$t("todoDetails.split")),
                        1
                      ))
                    : Object(o["g"])("", !0),
                ]),
              ]),
            ]),
          ],
          64
        )
      );
    }
    var dl = a("570a"),
      ul = {
        update(e, t) {
          let a = R.open();
          a.onsuccess = function (a) {
            let o = a.target.result;
            R.update(o, "repeating_events", e, t);
          };
        },
        remove(e) {
          let t = R.open();
          t.onsuccess = function (t) {
            let a = t.target.result;
            R.delete(a, "repeating_events", e);
          };
        },
      },
      pl = {
        name: "RepatingEvent",
        emits: ["repeatingEventSelected"],
        data() {
          return {
            repeatingType: "",
            interval: 1,
            ocurrencesType: "",
            ocurrences: 1,
            untilDate: null,
            weekdays: {
              mon: !1,
              tue: !1,
              wed: !1,
              thu: !1,
              fri: !1,
              sat: !1,
              sun: !1,
            },
          };
        },
        props: {
          repeatingEvent: { required: !0, type: [String, null] },
          todo: { required: !0, type: [Object, null] },
        },
        methods: {
          done() {
            const e = this.repeatingEventRule();
            var t = this.repeatingEvent
              ? this.repeatingEvent
              : Y()().format("x");
            if (e) {
              let o = this.todo.listId;
              var a = this.$store.getters.repeatingEventByDate[o];
              a || (a = {}), (a[t] = !0), ve.update(o, a);
              const i = this.generateRepeatingEvent(e, t);
              ul.update(t, i),
                this.$store.commit("updateRepeatingEvent", { key: t, val: i }),
                this.$store.commit("addRepeatingEventToDateCache", i),
                this.$store.getters.selectedDates.forEach((e) => {
                  ye.generateRepeatingEventsIntances(e, this);
                });
            } else ul.remove(t), (t = null);
            let o = document.getElementById("reDropDown"),
              i = new ge["a"](o);
            i.hide(), this.$emit("repeatingEventSelected", t);
          },
          split() {
            ul.remove(this.repeatingEvent);
            let e = document.getElementById("reDropDown"),
              t = new ge["a"](e);
            t.hide(), this.$emit("repeatingEventSelected", null);
          },
          repeatingEventRule() {
            if (!this.repeatingType) return null;
            var e = {
              freq: this.repeatingType,
              interval: this.interval,
              dtstart: Y.a.utc(this.todo.listId, "YYYYMMDD").toDate(),
            };
            return (
              4 == this.repeatingType &&
                ((e.byweekday = [
                  dl["a"].MO,
                  dl["a"].TU,
                  dl["a"].WE,
                  dl["a"].TH,
                  dl["a"].FR,
                ]),
                (e.freq = 2)),
              5 == this.repeatingType &&
                ((e.byweekday = []),
                this.weekdays.mon && e.byweekday.push(dl["a"].MO),
                this.weekdays.tue && e.byweekday.push(dl["a"].TU),
                this.weekdays.wed && e.byweekday.push(dl["a"].WE),
                this.weekdays.thu && e.byweekday.push(dl["a"].TH),
                this.weekdays.fri && e.byweekday.push(dl["a"].FR),
                this.weekdays.sat && e.byweekday.push(dl["a"].SA),
                this.weekdays.sun && e.byweekday.push(dl["a"].SU),
                (e.freq = 2)),
              "ocurrences" == this.ocurrencesType
                ? (e.count = this.ocurrences)
                : "untilDate" == this.ocurrencesType &&
                  (e.until = Y()(this.untilDate)),
              new dl["a"](e)
            );
          },
          generateRepeatingEvent(e, t) {
            var a = JSON.parse(JSON.stringify(this.todo));
            a.repeatingEvent = t;
            const o = Object(dl["b"])(e.toString());
            var i = {
              start_date: e.options.dtstart,
              repeating_rule: e.toString(),
              type: this.repeatingType,
              ocurrencesType: this.ocurrencesType,
              data: a,
              id: t,
            };
            if ("ocurrences" == this.ocurrencesType)
              i.end_date = Y()(o.all().slice(-1)[0]);
            else if ("untilDate" == this.ocurrencesType)
              i.end_date = Y()(e.options.until).toDate();
            else {
              var n = new Date();
              n.setFullYear(n.getFullYear() + 15), (i.end_date = n);
            }
            return i;
          },
          moments: function (e) {
            return Y()(e);
          },
        },
        watch: {
          repeatingEvent: function (e) {
            let t = this.$store.getters.repeatingEventList[e];
            if (
              ((this.weekdays = {
                mon: !1,
                tue: !1,
                wed: !1,
                thu: !1,
                fri: !1,
                sat: !1,
                sun: !1,
              }),
              t)
            ) {
              const e = Object(dl["b"])(t.repeating_rule);
              (this.repeatingType = e.options.freq),
                (this.interval = e.options.interval),
                (this.ocurrences = e.options.count),
                (this.ocurrencesType = t.ocurrencesType),
                (this.untilDate = e.options.until
                  ? e.options.until
                      .toLocaleDateString("en-GB")
                      .split("/")
                      .reverse()
                      .join("-")
                  : null),
                e.options.byweekday &&
                  (e.options.byweekday.includes(0) && (this.weekdays.mon = !0),
                  e.options.byweekday.includes(1) && (this.weekdays.tue = !0),
                  e.options.byweekday.includes(2) && (this.weekdays.wed = !0),
                  e.options.byweekday.includes(3) && (this.weekdays.thu = !0),
                  e.options.byweekday.includes(4) && (this.weekdays.fri = !0),
                  e.options.byweekday.includes(5) && (this.weekdays.sat = !0),
                  e.options.byweekday.includes(6) && (this.weekdays.sun = !0));
            } else
              (this.repeatingType = ""),
                (this.ocurrencesType = ""),
                (this.interval = 1),
                (this.untilDate = ""),
                (this.ocurrences = null),
                (this.untilDate = null);
          },
        },
        computed: {
          language: function () {
            return this.$store.getters.config.language;
          },
        },
      };
    a("3f30");
    const ml = U()(pl, [
      ["render", ll],
      ["__scopeId", "data-v-593edd53"],
    ]);
    var bl = ml,
      gl = a("f2bd"),
      hl = {
        renderBlankLinks(e) {
          var t =
            e.renderer.rules.link_open ||
            function (e, t, a, o, i) {
              return i.renderToken(e, t, a);
            };
          e.renderer.rules.link_open = function (e, a, o, i, n) {
            var s = e[a].attrIndex("target");
            return (
              s < 0
                ? e[a].attrPush(["target", "_blank"])
                : (e[a].attrs[s][1] = "_blank"),
              t(e, a, o, i, n)
            );
          };
        },
      },
      kl = {
        name: "toDoModal",
        data() {
          return {
            pickedDate: new Date(),
            pickedCList: "",
            pickedCListName: "",
            cListOptions: [],
            todo: {
              text: "",
              checked: !1,
              desc: "",
              subTaskList: [],
              alarm: !1,
            },
            todoList: null,
            index: 0,
            newSubTask: { text: "", checked: !1, editing: !1 },
            editingDescription: !1,
            tempTitle: "",
            tempSubTask: "",
            editingTitle: !1,
            showingCalendar: !0,
            loadingView: !1,
            options: { target: "_blank", defaultProtocol: "https" },
            clickhandler: new gl["a"](),
            md: new dc.a(),
          };
        },
        mounted() {
          hl.renderBlankLinks(this.md);
        },
        props: { selectedTodo: { required: !0, type: Object } },
        components: {
          colorPicker: fc,
          Datepicker: Re["a"],
          toastMessage: go,
          timePicker: Dc,
          repeatingEvent: bl,
          comfirmModal: vt,
        },
        methods: {
          removeSubTask: function (e) {
            this.todo.subTaskList.splice(e, 1), this.updateTodo();
          },
          addSubTask: function () {
            if ("" != this.newSubTask.text) {
              var e = { text: this.newSubTask.text, checked: !1, editing: !1 };
              this.todo.subTaskList.push(e), (this.newSubTask.text = "");
            }
            this.updateTodo();
          },
          cancelAddSubTask: function () {
            (this.newSubTask.text = ""), this.$refs["newSubTask"].blur();
          },
          editSubTask: function (e) {
            (this.todo.subTaskList[e].editing = !0),
              this.$nextTick(function () {
                this.$refs["subTaskEdit" + e][0].focus(),
                  this.$refs["subTaskEdit" + e][0].select(),
                  (this.tempSubTask = this.todo.subTaskList[e].text);
              });
          },
          doneEditSubTask: function (e) {
            (this.todo.subTaskList[e].editing = !1), this.updateTodo();
          },
          cancelEditSubTask: function (e) {
            (this.todo.subTaskList[e].text = this.tempSubTask),
              this.$refs["subTaskEdit" + e].blur();
          },
          editDescription: function () {
            (this.editingDescription = !0),
              this.$nextTick(function () {
                this.$refs["descriptionInput"].focus(),
                  this.$refs["descriptionInput"].setSelectionRange(0, 0),
                  (this.$refs["descriptionInput"].scrollTop = 0);
              });
          },
          doneEditDescription: function () {
            (this.editingDescription = !1), this.updateTodo();
          },
          editTitle: function () {
            (this.editingTitle = !0),
              this.$nextTick(function () {
                (this.tempTitle = this.todo.text),
                  this.$refs["titleInput"].focus(),
                  this.$refs["titleInput"].select();
              });
          },
          cancelEditTitle: function () {
            (this.todo.text = this.tempTitle), this.$refs["titleInput"].blur();
          },
          doneEditTitle: function () {
            (this.editingTitle = !1), this.updateTodo();
          },
          goToMarkDown: function () {
            window.open("https://commonmark.org/help/", "_blank");
          },
          startDrag: function (e, t) {
            e.dataTransfer.setData("index", t);
          },
          onDragenter: function (e) {
            e.target.parentElement.classList.add("drag-hover");
          },
          onDragleave: function (e) {
            e.target.parentElement.classList.remove("drag-hover");
          },
          onDrop: function (e, t) {
            let a = e.dataTransfer.getData("index"),
              o = this.todo.subTaskList.splice(parseInt(a), 1)[0];
            this.todo.subTaskList.splice(t, 0, o),
              e.target.parentElement.classList.remove("drag-hover"),
              this.updateTodo();
          },
          showCalendar: function () {
            document.getElementById("todo-date-picker-input").focus();
          },
          checkTodoClickhandler: function (e = !0) {
            this.clickhandler.handle(
              function () {
                this.checkTodo(e);
              }.bind(this),
              function () {}
            );
          },
          checkTodo: function (e = !0) {
            this.todo.checked &&
              (this.$store.getters.config.moveCompletedTaskToBottom &&
                this.$store.commit("moveTodoToEnd", {
                  toDoListId: this.todo.listId,
                  index: this.index,
                }),
              (this.index = this.todoList.length - 1)),
              this.updateTodoWithReorder(e);
          },
          updateTodo: function (e = !0) {
            e && (this.todo.repeatingEvent = null),
              this.updateTodoList(this.todo.listId, this.todoList);
          },
          updateTodoWithReorder: function (e = !0) {
            e && (this.todo.repeatingEvent = null),
              this.$store.getters.config.autoReorderTasks
                ? this.updateTodoList(
                    this.todo.listId,
                    be.reorderTasksList(this.todoList)
                  )
                : this.updateTodoList(this.todo.listId, this.todoList);
          },
          updateTodoList: function (e, t) {
            me.refreshDayNotifications(this, e), B.update(e, t);
          },
          getCListOptions: function () {
            this.cListOptions = this.$store.getters.cTodoListIds;
          },
          moveToTodoList: function (e) {
            if ("Invalid date" == e || "" == e) return;
            Y()(e, "YYYYMMDD", !0).isValid()
              ? ((this.pickedCListName = ""), (this.pickedCList = ""))
              : this.cListOptions.forEach((e) => {
                  e.listId == this.pickedCList &&
                    (this.pickedCListName = e.listName);
                });
            let t = this.todo.listId;
            this.todoList.splice(this.index, 1),
              this.updateTodoList(t, this.todoList),
              (this.todo.listId = e),
              (this.todo.repeatingEvent = null),
              this.$store.getters.todoLists[e]
                ? (this.$store.commit("addTodo", this.todo),
                  (this.todoList =
                    this.$store.getters.todoLists[this.todo.listId]),
                  (this.index = this.todoList.length - 1),
                  (this.todo = this.todoList[this.index]),
                  this.$store.getters.config.autoReorderTasks
                    ? this.updateTodoList(e, be.reorderTasksList(this.todoList))
                    : this.updateTodoList(e, this.todoList))
                : this.loadToDoFormDB(e);
          },
          loadToDoFormDB: function (e) {
            let t = R.open();
            var a = this;
            t.onsuccess = function (t) {
              let o = t.target.result;
              var i = R.get(o, "todo_lists", e);
              i.onsuccess = function (t) {
                let o = t.target.result ? t.target.result : [];
                o.push(a.todo),
                  (a.todoList = o),
                  (a.index = o.length - 1),
                  this.updateTodoList(e, a.todoList);
              }.bind(this);
            }.bind(this);
          },
          removeTodo: function () {
            this.$store.commit("setUndoElement", {
              type: "task",
              todo: this.todo,
              index: this.index,
            }),
              this.$store.commit("removeTodo", {
                toDoListId: this.todo.listId,
                index: this.index,
              }),
              this.updateTodoList(
                this.todo.listId,
                this.$store.getters.todoLists[this.todo.listId]
              );
            let e = new ge["c"](document.getElementById("taskRemoved"));
            e.show();
          },
          undoRemoveTask: function () {
            let e = this.$store.getters.undoElement;
            this.$store.commit("insertTodo", {
              toDoListId: e.todo.listId,
              index: e.index,
              toDo: e.todo,
            }),
              this.updateTodoList(
                e.todo.listId,
                this.$store.getters.todoLists[e.todo.listId]
              );
            let t = new ge["c"](document.getElementById("taskRemoved"));
            t.hide();
          },
          removeAll: function () {
            let e = new ge["b"](
              document.getElementById("removeReModalToDoDetails"),
              { backdrop: "static" }
            );
            e.show();
          },
          removeAllComfirmed() {
            ul.remove(this.todo.repeatingEvent),
              this.$store.commit(
                "removeRepeatingEvent",
                this.todo.repeatingEvent
              ),
              this.$store.getters.selectedDates.forEach((e) => {
                ye.removeGeneratedRepeatingEvents(e, this);
              }),
              this.$store.commit("resetRepeatingEventDateCache"),
              this.$store.commit(
                "loadRepeatingEventDateCache",
                this.$store.getters.repeatingEventList
              );
            let e = new ge["c"](
              document.getElementById("recurrentTaskRemoved")
            );
            e.show();
          },
          removeAllCanceled() {
            let e = new ge["b"](document.getElementById("toDoModal"));
            e.show();
          },
          duplicateTodo: function () {
            var e = {
              text: this.todo.text,
              checked: this.todo.checked,
              listId: this.todo.listId,
              desc: this.todo.desc,
              subTaskList: this.todo.subTaskList,
              color: this.todo.color,
              priority: 0,
              tags: [],
              time: this.todo.time,
              alarm: this.todo.alarm,
              repeatingEvent: null,
            };
            this.$store.commit("addTodo", e),
              this.$store.getters.config.autoReorderTasks
                ? this.updateTodoList(
                    this.todo.listId,
                    be.reorderTasksList(
                      this.$store.getters.todoLists[this.todo.listId]
                    )
                  )
                : this.updateTodoList(
                    this.todo.listId,
                    this.$store.getters.todoLists[this.todo.listId]
                  );
            let t = new ge["c"](document.getElementById("taskDuplicated"));
            t.show();
          },
          async copyTodo() {
            await navigator.clipboard.writeText(this.todoToString());
            let e = new ge["c"](
              document.getElementById("copiedTaskToClipboard")
            );
            e.show();
          },
          todoToString() {
            var e = "";
            return (
              (e += this.todo.text),
              "" != this.todo.desc &&
                ((e += "\n\n"),
                (e += this.$t("todoDetails.notes") + ":\n\n"),
                (e += this.todo.desc)),
              this.todo.subTaskList.length > 0 &&
                ((e += "\n\n"),
                (e += this.$t("todoDetails.subtasks") + ":\n\n"),
                this.todo.subTaskList.forEach(function (t) {
                  e += "- " + t.text + "\n";
                })),
              e
            );
          },
          changeColor(e) {
            (this.todo.color = e), this.updateTodo();
          },
          changeTime(e) {
            (this.todo.time = e),
              e || (this.todo.alarm = !1),
              this.updateTodoWithReorder();
          },
          changeAlarm() {
            this.todo.time &&
              ((this.todo.alarm = !this.todo.alarm), this.updateTodo());
          },
          changeRepeatingEvent(e) {
            (this.todo.repeatingEvent = e), this.updateTodo(!1);
          },
          changeSubTaskClickhandler: function (e) {
            this.clickhandler.handle(
              function () {
                this.changeSubTask(e);
              }.bind(this),
              function () {
                this.editSubTask(e);
              }.bind(this),
              e
            );
          },
          changeSubTask: function (e) {
            this.todo.subTaskList[e].checked &&
              this.moveSubtaskToBotttom &&
              this.todo.subTaskList.push(this.todo.subTaskList.splice(e, 1)[0]),
              this.updateTodo();
          },
          linkifyText: function (e) {
            return Object(_["a"])(e, this.options);
          },
          pressEsc: function () {
            "toDoModal" == document.activeElement.id &&
              this.$refs.closeModal.click();
          },
        },
        watch: {
          selectedTodo: function (e) {
            (this.todoList = this.$store.getters.todoLists[e.toDo.listId]),
              (this.index = e.index),
              (this.todo = this.todoList[this.index]),
              void 0 == this.todo["desc"] &&
                ((this.todo["desc"] = ""),
                (this.todo["subTaskList"] = []),
                (this.todo["color"] = "none"),
                (this.todo["priority"] = 0),
                (this.todo["tags"] = []),
                (this.todo["time"] = null),
                (this.todo["alarm"] = !1),
                (this.todo["repeatingEvent"] = null)),
              (this.showingCalendar = Y()(
                this.todo.listId,
                "YYYYMMDD",
                !0
              ).isValid()),
              this.getCListOptions(),
              (this.loadingView = !0),
              this.showingCalendar
                ? ((this.pickedDate = Y()(this.todo.listId).toDate()),
                  (this.pickedCList = ""),
                  (this.pickedCListName = ""))
                : (this.cListOptions.forEach((e) => {
                    e.listId == this.todo.listId &&
                      (this.pickedCListName = e.listName);
                  }),
                  (this.pickedCList = this.todo.listId),
                  (this.pickedDate = null)),
              this.$nextTick(function () {
                this.loadingView = !1;
              });
          },
          pickedDate: function (e) {
            if (!this.loadingView) {
              var t = Y()(e).format("YYYYMMDD");
              t != this.todo.listId && this.moveToTodoList(t);
            }
          },
          pickedCList: function (e) {
            this.loadingView || this.moveToTodoList(e);
          },
        },
        computed: {
          language: function () {
            let e = this.$store.getters.config.language;
            return Xe.getLanguagePack(e);
          },
          showCL: function () {
            return this.$store.getters.config.customList;
          },
          showCal: function () {
            return this.$store.getters.config.calendar;
          },
          todoText: function () {
            return Object(_["a"])(this.todo.text, this.options);
          },
          fullscreenToDoModal: function () {
            return this.$store.getters.config.fullscreenToDoModal;
          },
          moveSubtaskToBotttom: function () {
            return this.$store.getters.config.moveCompletedSubTaskToBottom;
          },
          weekStartOnMonday: function () {
            return this.$store.getters.config.weekStartOnMonday ? 1 : 0;
          },
          todoDescription: function () {
            return this.md.render(this.todo.desc);
          },
        },
      };
    a("83f3");
    const fl = U()(kl, [
      ["render", cc],
      ["__scopeId", "data-v-77e907ca"],
    ]);
    var vl = fl;
    const yl = (e) => (
        Object(o["A"])("data-v-52deb224"), (e = e()), Object(o["z"])(), e
      ),
      Tl = {
        class: "modal fade",
        id: "tipsModal",
        tabindex: "-1",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true",
      },
      jl = { class: "modal-dialog modal-dialog-centered" },
      Ol = { class: "modal-content" },
      wl = { class: "modal-header" },
      Dl = { class: "modal-title" },
      xl = yl(() =>
        Object(o["i"])(
          "i",
          { class: "bi-x close-modal", "data-bs-dismiss": "modal" },
          null,
          -1
        )
      ),
      Cl = { class: "modal-body d-flex" },
      zl = yl(() =>
        Object(o["i"])(
          "div",
          { style: { margin: "5px" } },
          [
            Object(o["i"])("i", {
              class: "bi-info-circle",
              style: { "font-size": "38px", "margin-right": "30px" },
            }),
          ],
          -1
        )
      ),
      Ll = { style: { "margin-top": "9px" } },
      Il = { class: "modal-footer d-flex" },
      Sl = yl(() =>
        Object(o["i"])("i", { class: "bi-chevron-double-left" }, null, -1)
      ),
      $l = yl(() =>
        Object(o["i"])("i", { class: "bi-chevron-double-right" }, null, -1)
      );
    function Ml(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["h"])("div", Tl, [
          Object(o["i"])("div", jl, [
            Object(o["i"])("div", Ol, [
              Object(o["i"])("div", wl, [
                Object(o["i"])("h5", Dl, Object(o["I"])(e.$t("tips.tips")), 1),
                xl,
              ]),
              Object(o["i"])("div", Cl, [
                zl,
                Object(o["i"])(
                  "div",
                  Ll,
                  Object(o["I"])(s.tips[n.index].text),
                  1
                ),
              ]),
              Object(o["i"])("div", Il, [
                Object(o["i"])(
                  "button",
                  {
                    type: "button",
                    class: "btn flex-fill",
                    onClick: t[0] || (t[0] = (...e) => s.back && s.back(...e)),
                  },
                  [
                    Sl,
                    Object(o["k"])(" " + Object(o["I"])(e.$t("tips.back")), 1),
                  ]
                ),
                Object(o["i"])(
                  "button",
                  {
                    type: "button",
                    class: "btn flex-fill",
                    onClick: t[1] || (t[1] = (...e) => s.next && s.next(...e)),
                  },
                  [
                    Object(o["k"])(Object(o["I"])(e.$t("tips.next")) + " ", 1),
                    $l,
                  ]
                ),
              ]),
            ]),
          ]),
        ])
      );
    }
    var El = {
      name: "tipsModal",
      data() {
        return { index: 0 };
      },
      methods: {
        next: function () {
          this.index == this.tips.length - 1 ? (this.index = 0) : this.index++;
        },
        back: function () {
          0 == this.index ? (this.index = this.tips.length - 1) : this.index--;
        },
      },
      computed: {
        tips: function () {
          return [
            { text: this.$t("tips.tip1") },
            { text: this.$i18n.t("tips.tip2") },
            { text: this.$i18n.t("tips.tip3") },
            { text: this.$i18n.t("tips.tip4") },
            { text: this.$i18n.t("tips.tip5") },
            { text: this.$i18n.t("tips.tip6") },
            { text: this.$i18n.t("tips.tip7") },
            { text: this.$i18n.t("tips.tip8") },
            { text: this.$i18n.t("tips.tip9") },
            { text: this.$i18n.t("tips.tip13") },
            { text: this.$i18n.t("tips.tip14") },
            { text: this.$i18n.t("tips.tip15") },
            { text: this.$i18n.t("tips.tip16") },
            { text: this.$i18n.t("tips.tip17") },
            { text: this.$i18n.t("tips.tip18") },
          ];
        },
      },
    };
    a("eed0");
    const Al = U()(El, [
      ["render", Ml],
      ["__scopeId", "data-v-52deb224"],
    ]);
    var Wl = Al;
    function Rl(e, t, a, i, n, s) {
      const r = Object(o["F"])("comfirm-modal");
      return (
        Object(o["y"])(),
        Object(o["f"])(
          r,
          {
            id: "clearDataModal",
            title: e.$t("settings.clearData"),
            text: e.$t("settings.clearDataDetails"),
            ico: "bi-x-circle",
            okText: e.$t("settings.clearData"),
            onOnOk: s.clearData,
          },
          null,
          8,
          ["title", "text", "okText", "onOnOk"]
        )
      );
    }
    var Bl = {
      name: "clearDataModal",
      components: { comfirmModal: vt },
      methods: {
        clearData: function () {
          let e = a("63a6");
          if (e()) {
            const { ipcRenderer: e } = a("bdb9");
            e.send("set-tray-context-menu-label", {
              open: "Open",
              quit: "Quit",
            }),
              e.send("set-dark-tray-icon", !1);
          }
          Co.clear();
        },
      },
    };
    const Pl = U()(Bl, [["render", Rl]]);
    var Yl = Pl;
    function _l(e, t, a, i, n, s) {
      const r = Object(o["F"])("comfirm-modal");
      return (
        Object(o["y"])(),
        Object(o["f"])(
          r,
          {
            id: "clearListModal",
            title: e.$t("ui.clearList"),
            text: e.$t("ui.clearListConfirm"),
            ico: "bi-trash",
            okText: e.$t("ui.clear"),
            onOnOk: s.clearList,
          },
          null,
          8,
          ["title", "text", "okText", "onOnOk"]
        )
      );
    }
    var Nl = {
      name: "clearListModal",
      components: { comfirmModal: vt },
      methods: {
        clearList: function () {
          let e = this.$store.getters.listToClearId;
          this.$store.commit("clearTodoList", e),
            B.update(e, []),
            me.refreshDayNotifications(this, e);
        },
      },
    };
    const Vl = U()(Nl, [["render", _l]]);
    var Ul = Vl;
    const ql = (e) => (
        Object(o["A"])("data-v-73761066"), (e = e()), Object(o["z"])(), e
      ),
      Fl = ["id"],
      Hl = { class: "modal-dialog modal-dialog-centered" },
      Kl = { class: "modal-content" },
      Gl = {
        class: "modal-body d-flex align-items-center justify-content-center",
      },
      Ql = ql(() =>
        Object(o["i"])(
          "div",
          { class: "loading-spinner" },
          [
            Object(o["i"])("div", { class: "spinner-border", role: "status" }, [
              Object(o["i"])(
                "span",
                { class: "visually-hidden" },
                "Loading..."
              ),
            ]),
          ],
          -1
        )
      );
    function Jl(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["h"])(
          "div",
          {
            class: "modal fade",
            id: a.id,
            tabindex: "-1",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
          [
            Object(o["i"])("div", Hl, [
              Object(o["i"])("div", Kl, [
                Object(o["i"])("div", Gl, [
                  Ql,
                  Object(o["i"])("div", null, Object(o["I"])(a.text), 1),
                ]),
              ]),
            ]),
          ],
          8,
          Fl
        )
      );
    }
    var Zl = {
      name: "importingModal",
      props: {
        text: { type: String, required: !0 },
        id: { type: String, required: !0 },
      },
    };
    a("848e");
    const Xl = U()(Zl, [
      ["render", Jl],
      ["__scopeId", "data-v-73761066"],
    ]);
    var ed = Xl;
    const td = (e) => (
        Object(o["A"])("data-v-2b670fe8"), (e = e()), Object(o["z"])(), e
      ),
      ad = {
        class: "modal fade",
        id: "RecurrentEventsModal",
        tabindex: "-1",
        "aria-hidden": "true",
      },
      od = { class: "modal-dialog modal-dialog-centered" },
      id = { class: "modal-content" },
      nd = { class: "modal-header" },
      sd = { class: "modal-title" },
      rd = td(() =>
        Object(o["i"])(
          "i",
          { class: "bi-x close-modal", "data-bs-dismiss": "modal" },
          null,
          -1
        )
      ),
      cd = { class: "modal-body" },
      ld = { class: "table table-hover" },
      dd = { scope: "col" },
      ud = { scope: "col" },
      pd = td(() => Object(o["i"])("th", { scope: "col" }, null, -1)),
      md = ["title", "onClick"];
    function bd(e, t, a, i, n, s) {
      const r = Object(o["F"])("comfirm-modal");
      return (
        Object(o["y"])(),
        Object(o["h"])(
          o["a"],
          null,
          [
            Object(o["i"])("div", ad, [
              Object(o["i"])("div", od, [
                Object(o["i"])("div", id, [
                  Object(o["i"])("div", nd, [
                    Object(o["i"])(
                      "h5",
                      sd,
                      Object(o["I"])(e.$t("ui.recurringTasks")),
                      1
                    ),
                    rd,
                  ]),
                  Object(o["i"])("div", cd, [
                    Object(o["i"])("table", ld, [
                      Object(o["i"])("thead", null, [
                        Object(o["i"])("tr", null, [
                          Object(o["i"])(
                            "th",
                            dd,
                            Object(o["I"])(e.$t("ui.task")),
                            1
                          ),
                          Object(o["i"])(
                            "th",
                            ud,
                            Object(o["I"])(e.$t("ui.Frecuency")),
                            1
                          ),
                          pd,
                        ]),
                      ]),
                      Object(o["i"])("tbody", null, [
                        (Object(o["y"])(!0),
                        Object(o["h"])(
                          o["a"],
                          null,
                          Object(o["D"])(
                            s.recurringTasks,
                            (t) => (
                              Object(o["y"])(),
                              Object(o["h"])("tr", { key: t.id }, [
                                Object(o["i"])(
                                  "td",
                                  null,
                                  Object(o["I"])(t.data.text),
                                  1
                                ),
                                Object(o["i"])(
                                  "td",
                                  null,
                                  Object(o["I"])(s.frecuency(t)),
                                  1
                                ),
                                Object(o["i"])("td", null, [
                                  Object(o["i"])(
                                    "i",
                                    {
                                      class: "bi-trash mx-2",
                                      title: e.$t("ui.remove"),
                                      onClick: (e) =>
                                        s.removeRecurringTask(t.id),
                                      "data-bs-dismiss": "modal",
                                    },
                                    null,
                                    8,
                                    md
                                  ),
                                ]),
                              ])
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            Object(o["l"])(
              r,
              {
                id: "removeReModal",
                title: e.$t("ui.removeRepeatingTask"),
                text: e.$t("ui.repeatingTaskRemoveConfirm"),
                ico: "bi-x-circle",
                okText: e.$t("ui.remove"),
                onOnOk: s.removeRepeatingTaskComfirmed,
                onOnCancel: s.removeRepeatingTaskCanceled,
              },
              null,
              8,
              ["title", "text", "okText", "onOnOk", "onOnCancel"]
            ),
          ],
          64
        )
      );
    }
    var gd = {
      name: "RecurrentEventsModal",
      components: { comfirmModal: vt },
      data() {
        return { index: 0, idToRemove: null };
      },
      methods: {
        frecuency: function (e) {
          switch (e.type) {
            case "0":
              return (
                this.$t("todoDetails.yearly") +
                " / " +
                Y()(e.start_date).locale(this.language).format("MMM Do")
              );
            case "1":
              return (
                this.$t("todoDetails.monthly") +
                " / " +
                Y()(e.start_date).locale(this.language).format("Do")
              );
            case "2":
              return (
                this.$t("todoDetails.weekly") +
                " / " +
                Y()(e.start_date).locale(this.language).format("dddd")
              );
            case "3":
              return this.$t("todoDetails.daily");
            case "4":
              return this.$t("todoDetails.weekdays");
            case "5":
              return this.$t("todoDetails.customWeekdays");
          }
        },
        removeRecurringTask: function (e) {
          this.idToRemove = e;
          let t = new ge["b"](document.getElementById("removeReModal"), {
            backdrop: "static",
          });
          t.show();
        },
        removeRepeatingTaskComfirmed: function () {
          ul.remove(this.idToRemove),
            this.$store.commit("removeRepeatingEvent", this.idToRemove),
            this.$store.getters.selectedDates.forEach((e) => {
              ye.removeGeneratedRepeatingEvents(e, this);
            }),
            this.$store.commit("resetRepeatingEventDateCache"),
            this.$store.commit(
              "loadRepeatingEventDateCache",
              this.$store.getters.repeatingEventList
            );
          let e = new ge["b"](document.getElementById("RecurrentEventsModal"));
          e.show();
          let t = new ge["c"](document.getElementById("recurrentTaskRemoved"));
          t.show();
        },
        removeRepeatingTaskCanceled: function () {
          let e = new ge["b"](document.getElementById("RecurrentEventsModal"));
          e.show();
        },
      },
      computed: {
        recurringTasks: function () {
          return this.$store.getters.repeatingEventList;
        },
        language: function () {
          return this.$store.getters.config.language;
        },
      },
    };
    a("869b");
    const hd = U()(gd, [
      ["render", bd],
      ["__scopeId", "data-v-2b670fe8"],
    ]);
    var kd = hd;
    const fd = (e) => (
        Object(o["A"])("data-v-6c960bf5"), (e = e()), Object(o["z"])(), e
      ),
      vd = {
        class: "modal fade",
        id: "ReorderCustomListsModal",
        tabindex: "-1",
        "aria-hidden": "true",
      },
      yd = { class: "modal-dialog modal-dialog-centered" },
      Td = { class: "modal-content" },
      jd = { class: "modal-header" },
      Od = { class: "modal-title" },
      wd = fd(() =>
        Object(o["i"])(
          "i",
          { class: "bi-x close-modal", "data-bs-dismiss": "modal" },
          null,
          -1
        )
      ),
      Dd = { class: "modal-body" },
      xd = { class: "custom-lists" },
      Cd = ["onDragstart"],
      zd = { class: "d-flex flex-row align-items-center" },
      Ld = ["onDrop"],
      Id = ["title"];
    function Sd(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["h"])("div", vd, [
          Object(o["i"])("div", yd, [
            Object(o["i"])("div", Td, [
              Object(o["i"])("div", jd, [
                Object(o["i"])(
                  "h5",
                  Od,
                  Object(o["I"])(e.$t("ui.reorderCustomLists")),
                  1
                ),
                wd,
              ]),
              Object(o["i"])("div", Dd, [
                Object(o["i"])("ul", xd, [
                  (Object(o["y"])(!0),
                  Object(o["h"])(
                    o["a"],
                    null,
                    Object(o["D"])(
                      s.customTodoLists,
                      (a, i) => (
                        Object(o["y"])(),
                        Object(o["h"])("li", { key: i, class: "custom-list" }, [
                          Object(o["i"])(
                            "div",
                            {
                              draggable: "true",
                              onDragstart: (e) => s.startDrag(e, i),
                              onDragover:
                                t[3] ||
                                (t[3] = Object(o["S"])(() => {}, ["prevent"])),
                            },
                            [
                              Object(o["i"])("div", zd, [
                                Object(o["i"])(
                                  "label",
                                  {
                                    class: "form-check-label mx-3",
                                    onDragenter:
                                      t[0] ||
                                      (t[0] = Object(o["S"])(
                                        (e) => s.onDragenter(e),
                                        ["self"]
                                      )),
                                    onDragleave:
                                      t[1] ||
                                      (t[1] = Object(o["S"])(
                                        (e) => s.onDragleave(e),
                                        ["self"]
                                      )),
                                    onDrop: (e) => s.onDrop(e, i),
                                    onDragover:
                                      t[2] ||
                                      (t[2] = Object(o["S"])(() => {}, [
                                        "prevent",
                                      ])),
                                  },
                                  Object(o["I"])(a.listName),
                                  41,
                                  Ld
                                ),
                                Object(o["i"])(
                                  "i",
                                  {
                                    class: "bi-grip-horizontal mx-3",
                                    title: e.$t("ui.remove"),
                                  },
                                  null,
                                  8,
                                  Id
                                ),
                              ]),
                            ],
                            40,
                            Cd
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    }
    var $d = {
      name: "RecurrentEventsModal",
      data() {
        return { index: 0 };
      },
      methods: {
        startDrag: function (e, t) {
          e.dataTransfer.setData("index", t);
        },
        onDragenter: function (e) {
          e.target.parentElement.classList.add("drag-hover");
        },
        onDragleave: function (e) {
          e.target.parentElement.classList.remove("drag-hover");
        },
        onDrop: function (e, t) {
          let a = e.dataTransfer.getData("index"),
            o = this.$store.getters.cTodoListIds,
            i = o.splice(parseInt(a), 1)[0];
          o.splice(t, 0, i),
            e.target.parentElement.classList.remove("drag-hover"),
            pe.update(o),
            this.$emit("resetCustomList");
        },
      },
      computed: {
        customTodoLists: function () {
          return this.$store.getters.cTodoListIds;
        },
      },
    };
    a("81bf");
    const Md = U()($d, [
      ["render", Sd],
      ["__scopeId", "data-v-6c960bf5"],
    ]);
    var Ed = Md;
    const Ad = { class: "d-flex" },
      Wd = ["innerHTML"],
      Rd = { class: "time-details" },
      Bd = { key: 0, class: "todo-item-sub-tasks" },
      Pd = { class: "sub-tasks" },
      Yd = ["onUpdate:modelValue", "onChange"],
      _d = ["onClick"],
      Nd = ["innerHTML"];
    function Vd(e, t, a, i, n, s) {
      return (
        Object(o["y"])(),
        Object(o["h"])(
          "div",
          {
            id: "todo-item-active",
            class: Object(o["t"])(["todo-item", { dragging: n.todoDragging }]),
            ref: "currentTodo",
            draggable: "true",
            onDragstart:
              t[4] ||
              (t[4] = (e) =>
                s.startDrag(e, a.activeTodo.toDo, a.activeTodo.index)),
            onDragend: t[5] || (t[5] = (e) => s.endDrag()),
            onWheel:
              t[6] || (t[6] = (...e) => s.movingWheel && s.movingWheel(...e)),
            onMouseleave:
              t[7] || (t[7] = (...e) => s.hideToDoItem && s.hideToDoItem(...e)),
          },
          [
            Object(o["i"])("div", Ad, [
              Object(o["i"])(
                "span",
                {
                  class: Object(o["t"])([
                    "noselect item-text",
                    { "checked-todo": a.activeTodo.toDo.checked },
                  ]),
                  style: { "flex-grow": "1" },
                  onClick:
                    t[0] ||
                    (t[0] = (...e) =>
                      s.checkTodoClickhandler && s.checkTodoClickhandler(...e)),
                  onMouseup:
                    t[1] ||
                    (t[1] = Object(o["S"])(
                      (...e) => s.showToDoDetails && s.showToDoDetails(...e),
                      ["middle"]
                    )),
                },
                [
                  "none" != a.activeTodo.toDo.color
                    ? (Object(o["y"])(),
                      Object(o["h"])(
                        "span",
                        {
                          key: 0,
                          class: Object(o["t"])([
                            "cicle-icon",
                            {
                              "bi-check-circle-fill": a.activeTodo.toDo.checked,
                              "bi-circle-fill": !a.activeTodo.toDo.checked,
                            },
                          ]),
                          style: Object(o["u"])(
                            "color: " + a.activeTodo.toDo.color
                          ),
                        },
                        null,
                        6
                      ))
                    : (Object(o["y"])(),
                      Object(o["h"])(
                        "span",
                        {
                          key: 1,
                          class: Object(o["t"])([
                            "cicle-icon",
                            {
                              "bi-check-circle": a.activeTodo.toDo.checked,
                              "bi-circle": !a.activeTodo.toDo.checked,
                            },
                          ]),
                        },
                        null,
                        2
                      )),
                  Object(o["i"])(
                    "span",
                    { innerHTML: s.todoText },
                    null,
                    8,
                    Wd
                  ),
                  Object(o["i"])("span", Rd, [
                    Object(o["k"])(
                      Object(o["I"])(s.timeFormat(a.activeTodo.toDo.time)) +
                        " ",
                      1
                    ),
                    Object(o["i"])(
                      "div",
                      {
                        class: Object(o["t"])([
                          "alarm-indicator",
                          {
                            "show-alarm-indicator":
                              s.notificationIndicator &&
                              a.activeTodo.toDo.alarm,
                          },
                        ]),
                      },
                      null,
                      2
                    ),
                  ]),
                ],
                34
              ),
              Object(o["i"])("i", {
                class: "bi-three-dots todo-item-menu",
                type: "button",
                onClick:
                  t[2] ||
                  (t[2] = (...e) =>
                    s.showToDoDetails && s.showToDoDetails(...e)),
              }),
              Object(o["i"])("i", {
                class: "bi-x todo-item-remove",
                onClick:
                  t[3] || (t[3] = (...e) => s.removeTodo && s.removeTodo(...e)),
              }),
            ]),
            a.activeTodo.toDo.subTaskList &&
            a.activeTodo.toDo.subTaskList.length > 0
              ? (Object(o["y"])(),
                Object(o["h"])("div", Bd, [
                  Object(o["i"])("ul", Pd, [
                    (Object(o["y"])(!0),
                    Object(o["h"])(
                      o["a"],
                      null,
                      Object(o["D"])(
                        a.activeTodo.toDo.subTaskList,
                        (e, t) => (
                          Object(o["y"])(),
                          Object(o["h"])("li", { key: t, class: "sub-task" }, [
                            Object(o["i"])(
                              "div",
                              {
                                class: Object(o["t"])([
                                  "d-flex flex-row mt-1",
                                  { "checked-sub-task": e.checked },
                                ]),
                              },
                              [
                                Object(o["Q"])(
                                  Object(o["i"])(
                                    "input",
                                    {
                                      class: "form-check-input",
                                      type: "checkbox",
                                      "onUpdate:modelValue": (t) =>
                                        (e.checked = t),
                                      onChange: (a) => s.checkSubTask(e, t, a),
                                    },
                                    null,
                                    40,
                                    Yd
                                  ),
                                  [[o["J"], e.checked]]
                                ),
                                Object(o["i"])(
                                  "label",
                                  {
                                    class: "form-check-label",
                                    onClick: (a) => s.checkSubTask(e, t, a),
                                  },
                                  [
                                    Object(o["i"])(
                                      "span",
                                      { innerHTML: s.linkifyText(e.text) },
                                      null,
                                      8,
                                      Nd
                                    ),
                                  ],
                                  8,
                                  _d
                                ),
                              ],
                              2
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                ]))
              : Object(o["g"])("", !0),
          ],
          34
        )
      );
    }
    var Ud = {
      components: {},
      props: { activeTodo: { required: !0, type: Object } },
      data() {
        return {
          editing: !1,
          todoDragHover: !1,
          todoDragging: !1,
          options: { target: "_blank", defaultProtocol: "https" },
          clickhandler: new gl["a"](),
          scrollingTimeOut: null,
        };
      },
      methods: {
        removeTodo: function () {
          this.$store.commit("setUndoElement", {
            type: "task",
            todo: this.activeTodo.toDo,
            index: this.activeTodo.index,
          }),
            this.$store.commit("removeTodo", {
              toDoListId: this.activeTodo.toDoListId,
              index: this.activeTodo.index,
            }),
            me.refreshDayNotifications(this, this.activeTodo.toDoListId),
            B.update(
              this.activeTodo.toDoListId,
              this.$store.getters.todoLists[this.activeTodo.toDoListId]
            );
          let e = new ge["c"](document.getElementById("taskRemoved"));
          e.show(), this.hideToDoItem();
        },
        showToDoDetails: function () {
          this.$store.commit("actionsSelectedTodoIdUpdate", {
            toDo: this.activeTodo.toDo,
            index: this.activeTodo.index,
          });
          let e = new ge["b"](document.getElementById("toDoModal"), {
            keyboard: !1,
          });
          e.show();
        },
        checkTodoClickhandler: function (e) {
          if (!e.target.href) {
            this.$store.commit("checkTodo", {
              toDoListId: this.activeTodo.toDoListId,
              index: this.activeTodo.index,
            });
            var t = this.activeTodo.toDoListId,
              a = this.activeTodo.index;
            this.clickhandler.handle(
              () => {
                this.checkToDo(t, a);
              },
              this.activeTodo.edit,
              `${this.activeTodo.toDoListId}${this.activeTodo.index}`
            );
          }
        },
        checkToDo: function (e, t) {
          this.$store.getters.todoLists[e][t].checked &&
            this.$store.getters.config.moveCompletedTaskToBottom &&
            ((this.$refs.currentTodo.style.display = "none"),
            this.$store.commit("moveTodoToEnd", { toDoListId: e, index: t })),
            this.$store.getters.config.autoReorderTasks
              ? ((this.$refs.currentTodo.style.display = "none"),
                B.update(
                  e,
                  be.reorderTasksList(this.$store.getters.todoLists[e])
                ))
              : B.update(e, this.$store.getters.todoLists[e]),
            me.refreshDayNotifications(this, this.activeTodo.toDoListId);
        },
        startDrag: function (e, t, a) {
          (e.dataTransfer.dropEffect = "move"),
            (e.dataTransfer.effectAllowed = "move"),
            e.dataTransfer.setData("item", JSON.stringify(t)),
            e.dataTransfer.setData("index", a),
            e.dataTransfer.setDragImage(this.activeTodo.container, 0, 0),
            setTimeout(() => {
              (this.$refs.currentTodo.style.display = "none"),
                (this.todoDragging = !0);
            }, 40),
            document
              .getElementById("app-container")
              .classList.add("dragging-item");
        },
        endDrag: function () {
          (this.todoDragging = !1),
            document
              .getElementById("app-container")
              .classList.remove("dragging-item");
        },
        onDragenter: function () {
          this.todoDragHover = !0;
        },
        onDragleave: function () {
          this.todoDragHover = !1;
        },
        checkSubTask: function (e, t, a) {
          if (!a.target.href) {
            a.target.value || (e.checked = !e.checked);
            var o = this.activeTodo.toDo.subTaskList;
            e.checked && this.moveSubtaskToBotttom && o.push(o.splice(t, 1)[0]),
              B.update(
                this.activeTodo.toDoListId,
                this.$store.getters.todoLists[this.activeTodo.toDoListId]
              );
          }
        },
        timeFormat: function (e) {
          if (e) return Y()(e, "HH:mm").format("hh:mm a");
        },
        linkifyText: function (e) {
          return Object(_["a"])(e, this.options);
        },
        hideToDoItem: function () {
          this.$refs.currentTodo.style.display = "none";
        },
        movingWheel() {
          (this.$refs.currentTodo.style.display = "none"),
            this.$refs.currentTodo.classList.add("scrolling"),
            document.getElementById("app-container").classList.add("scrolling"),
            null == this.scrollingTimeOut &&
              (this.scrollingTimeOut = setTimeout(() => {
                (this.scrollingTimeOut = null),
                  (document.onmousemove = function () {
                    (document.onmousemove = null),
                      document
                        .getElementById("todo-item-active")
                        .classList.remove("scrolling"),
                      document
                        .getElementById("app-container")
                        .classList.remove("scrolling");
                  });
              }, 400));
        },
      },
      computed: {
        todoText: function () {
          return Object(_["a"])(this.activeTodo.toDo.text, this.options);
        },
        notificationIndicator: function () {
          return this.$store.getters.config.notificationIndicator;
        },
        moveSubtaskToBotttom: function () {
          return this.$store.getters.config.moveCompletedSubTaskToBottom;
        },
      },
    };
    a("8538");
    const qd = U()(Ud, [
      ["render", Vd],
      ["__scopeId", "data-v-38a721f8"],
    ]);
    var Fd = qd,
      Hd = {
        name: "App",
        components: {
          donateModal: On,
          configModal: Ko,
          toDoList: Oe,
          sideBar: at,
          removeCustomList: jt,
          splashScreen: ui,
          aboutModal: Zi,
          welcomeModal: cr,
          tipsModal: Wl,
          toDoModal: vl,
          clearDataModal: Yl,
          RecurrentEventsModal: kd,
          importingModal: ed,
          ReorderCustomListsModal: Ed,
          clearListModal: Ul,
          toastMessage: go,
          activeToDo: Fd,
        },
        data() {
          return {
            selected_date: null,
            cTodoList: this.$store.getters.cTodoListIds,
            calendarHeight: "calc(50% - 50px)",
            ipcRenderer: null,
            initialLoadCompleted: !1,
            initialListToLoad: 0,
            initialListLoaded: 0,
          };
        },
        beforeCreate() {
          let e = no.load();
          io.version != e.version && ho.migrate(),
            "undefined" !== typeof Boniato &&
              "denied" !== Notification.permission &&
              Notification.requestPermission(),
            this.$store.commit("loadCustomTodoListsIds", pe.load()),
            this.$store.commit("loadConfig", no.load()),
            (this.$i18n.locale = this.$store.getters.config.language),
            this.$store.dispatch("loadAllRepeatingEvent").then(
              function () {
                let e = parseInt(this.$store.getters.config.columns) + 2,
                  t = this.$store.getters.cTodoListIds.length;
                (this.initialListToLoad = e + t),
                  this.deleteOldRepeatingEvents(),
                  (this.selected_date = Y()().format("YYYYMMDD")),
                  this.$nextTick(() => {
                    this.weekResetScroll();
                  }),
                  this.$store.commit(
                    "loadRepeatingEventDateCache",
                    this.$store.getters.repeatingEventList
                  );
              }.bind(this)
            );
        },
        mounted() {
          if (
            (this.setupTelemetric(),
            (this.$refs.weekListContainer.scrollLeft = this.todoListWidth()),
            (this.calendarHeight = this.$store.getters.config.calendarHeight),
            window.addEventListener("resize", this.weekResetScroll),
            (document.onreadystatechange = () => {
              "complete" == document.readyState &&
                setTimeout(this.hideSplash, 4500);
            }),
            xo()())
          ) {
            const { ipcRenderer: e } = a("bdb9");
            (this.ipcRenderer = e),
              this.$store.getters.config.firstTimeOpen &&
                this.ipcRenderer.send("show-current-window"),
              this.ipcRenderer.send(
                "match-open-on-startup",
                this.$store.getters.config.openOnStartup
              );
          }
          this.$store.getters.config.importing &&
            (this.$store.commit("updateConfig", { val: !1, key: "importing" }),
            no.update(this.$store.getters.config),
            xo()() && this.syncElectronConfig()),
            this.resetAppOnDayChange();
        },
        methods: {
          weekMoveLeft: function () {
            (this.selected_date = Y()(this.selected_date)
              .subtract(1, "d")
              .format("YYYYMMDD")),
              (this.$refs.weekListContainer.scrollLeft =
                2 * this.todoListWidth()),
              this.$refs.weekListContainer.scroll({
                left:
                  this.$refs.weekListContainer.scrollLeft -
                  this.todoListWidth(),
                top: 0,
                behavior: "smooth",
              });
          },
          weekMoveRight: function () {
            (this.selected_date = Y()(this.selected_date)
              .add(1, "d")
              .format("YYYYMMDD")),
              (this.$refs.weekListContainer.scrollLeft = 0),
              this.$refs.weekListContainer.scroll({
                left:
                  this.$refs.weekListContainer.scrollLeft +
                  this.todoListWidth(),
                top: 0,
                behavior: "smooth",
              });
          },
          deleteOldRepeatingEvents: function () {
            for (const e of Object.entries(
              this.$store.getters.repeatingEventList
            ))
              Y()(e[1].end_date).isBefore(Y()()) &&
                (ul.remove(e[0]),
                this.$store.commit("removeRepeatingEvent", e[0]));
          },
          weekResetScroll: function () {
            this.$refs.weekListContainer.scrollLeft = this.todoListWidth();
          },
          customMoveRight: function () {
            this.$refs.customListContainer.scrollLeft =
              this.$refs.customListContainer.scrollLeft +
              this.customTodoListWidth() -
              13;
          },
          customMoveLeft: function () {
            this.$refs.customListContainer.scrollLeft =
              this.$refs.customListContainer.scrollLeft -
              this.customTodoListWidth();
          },
          resetCustomList: function () {
            this.$nextTick(function () {
              this.$refs.customListContainer.scrollLeft = 0;
            });
          },
          todoListWidth: function () {
            return this.$refs.weekListContainer.clientWidth / this.columns;
          },
          customTodoListWidth: function () {
            return (
              this.$refs.customListContainer.clientWidth / this.customColumns
            );
          },
          setSelectedDate: function (e) {
            (this.selected_date = e),
              this.$nextTick(function () {
                document
                  .getElementById("list" + e)
                  .getElementsByClassName("new-todo-input")[0]
                  .focus();
              });
          },
          isElectron: function () {
            let e = a("63a6");
            return e();
          },
          hideSplash: function () {
            this.isElectron()
              ? this.ipcRenderer.sendSync("is-windows-visible") &&
                this.$refs.splash.hideSplash()
              : this.$refs.splash.hideSplash(),
              this.checksOnLoadApp(),
              this.$store.getters.config.firstTimeOpen &&
                this.showWelcomeModal();
          },
          showWelcomeModal: function () {
            let e = new ge["b"](document.getElementById("welcomeModal"), {
              backdrop: "static",
            });
            e.show(),
              this.$store.commit("updateConfig", {
                val: !1,
                key: "firstTimeOpen",
              }),
              no.update(this.$store.getters.config);
          },
          compatible: function () {
            return window.IndexedDB;
          },
          resizerDblClick: function () {
            1 == this.$store.getters.config.mainDividerPosition &&
              ((this.calendarHeight = "calc(50% - 50px)"),
              this.$store.commit("updateConfig", {
                val: this.calendarHeight,
                key: "calendarHeight",
              }),
              no.update(this.$store.getters.config));
          },
          resizerMouseDownHandler: function (e) {
            1 == this.$store.getters.config.mainDividerPosition &&
              ((this.resizerY = e.clientY - 50),
              document.addEventListener(
                "mousemove",
                this.resizerMouseMoveHandler
              ),
              document.addEventListener("mouseup", this.resizerMouseUpHandler));
          },
          resizerMouseMoveHandler: function (e) {
            this.calendarHeight = (100 * (e.clientY - 50)) / this.zoom + "px";
          },
          resizerMouseUpHandler: function () {
            document.removeEventListener(
              "mousemove",
              this.resizerMouseMoveHandler
            ),
              document.removeEventListener(
                "mouseup",
                this.resizerMouseUpHandler
              ),
              this.$store.commit("updateConfig", {
                val: this.calendarHeight,
                key: "calendarHeight",
              }),
              no.update(this.$store.getters.config);
          },
          refreshTodayNotifications: function () {
            me.refreshDayNotifications(this, Y()().format("YYYYMMDD"));
          },
          todoListMounted: function () {
            this.methodsAfterInitialLoad();
          },
          methodsAfterInitialLoad: function () {
            this.initialLoadCompleted ||
              (this.initialListLoaded++,
              this.initialListLoaded == this.initialListToLoad &&
                ((this.initialLoadCompleted = !0),
                this.$store.getters.config.moveOldTasks
                  ? this.moveOldTasksToToday().then(() => {
                      this.refreshTodayNotifications(),
                        xo()() && this.showInitialNotification();
                    })
                  : (this.refreshTodayNotifications(),
                    xo()() && this.showInitialNotification())));
          },
          showInitialNotification: function () {
            this.$store.getters.config.notificationOnStartup &&
              !this.$store.getters.config.firstTimeOpen &&
              setTimeout(
                function () {
                  (new Notification("WeekToDo", {
                    body: this.initialNotificationText(),
                    icon: "/favicon.ico",
                    silent: !0,
                  }).onclick = () => {
                    this.ipcRenderer.send("show-current-window"),
                      setTimeout(() => {
                        document.getElementById("splashScreen") &&
                          document
                            .getElementById("splashScreen")
                            .classList.add("hiddenSplashScreen");
                      }, 3e3);
                  }),
                    me.playNotificationSound(
                      this.$store.getters.config.notificationSound
                    );
                }.bind(this),
                2e3
              );
          },
          initialNotificationText: function () {
            let e =
                this.$store.getters.todoLists[
                  Y()().subtract(1, "d").format("YYYYMMDD")
                ],
              t = this.$store.getters.todoLists[Y()().format("YYYYMMDD")],
              a = be.pendingTasksCount(e),
              o = be.pendingTasksCount(t);
            return 0 == a && 0 == o
              ? this.$t("notifications.noPendingTasksToday")
              : 0 == a
              ? this.$t("notifications.pendingTasksToday", [o])
              : 0 == o
              ? this.$t("notifications.pendingTasksYesterday", [a])
              : this.$t("notifications.pendingTasksYesterdayAndToday", [a, o]);
          },
          resetAppOnDayChange: function () {
            var e = new Y.a(),
              t = new Y.a().add(1, "d").startOf("date"),
              a = Y.a.duration(t.diff(e)).asMilliseconds();
            setTimeout(
              function () {
                xo()() &&
                  !this.ipcRenderer.sendSync("is-windows-visible") &&
                  window.location.reload(),
                  this.refreshTodayNotifications(),
                  this.resetAppOnDayChange();
              }.bind(this),
              a
            );
          },
          moveOldTasksToToday: async function () {
            var e = new Promise((e) => {
              var t = Y()(this.id).format("YYYYMMDD");
              for (let a = 1; a <= 7; a++) {
                let o = Y()().subtract(a, "d").format("YYYYMMDD");
                this.$store.dispatch("loadTodoLists", o).then(() => {
                  this.$store.commit("moveUndoneItems", {
                    origenId: o,
                    destinyId: t,
                  }),
                    B.update(o, this.$store.getters.todoLists[o]),
                    this.$store.getters.config.autoReorderTasks
                      ? B.update(
                          t,
                          be.reorderTasksList(this.$store.getters.todoLists[t])
                        )
                      : B.update(t, this.$store.getters.todoLists[t]),
                    7 == a && e("done!");
                });
              }
            });
            return e;
          },
          setDividerPosition: function (e) {
            this.$nextTick(function () {
              document
                .getElementById("app-container")
                .classList.add("scrolling"),
                setTimeout(() => {
                  document
                    .getElementById("app-container")
                    .classList.remove("scrolling");
                }, 400),
                this.$store.commit("updateConfig", {
                  val: e,
                  key: "mainDividerPosition",
                }),
                no.update(this.$store.getters.config);
            });
          },
          checkVersion: function () {
            if (io.version != this.$store.getters.config.version) {
              this.$store.commit("updateConfig", {
                val: io.version,
                key: "version",
              }),
                no.update(this.$store.getters.config);
              var e = new ge["c"](document.getElementById("versionChanges"));
              e.show();
            }
          },
          checkForUpdates: function () {
            if (this.isElectron() && this.$store.getters.config.checkUpdates) {
              const e = a("bc3a").default;
              e.get("version.json")
                .then((e) => this.showNewVersionToast(e))
                .catch((e) => console.log(e.message));
            }
          },
          checksOnLoadApp: function () {
            this.isElectron()
              ? a("bdb9").ipcRenderer.on("initial-checks", () => {
                  this.checkVersion(), this.checkForUpdates();
                })
              : this.checkVersion();
          },
          showNewVersionToast: function (e) {
            if (e.data.version != io.version) {
              var t = new ge["c"](
                document.getElementById("newVersionAvailable")
              );
              t.show();
            }
          },
          downloadNewVersion: function () {
            let e = a("63a6");
            e()
              ? a("bdb9").shell.openExternal("#", "_blank")
              : window.open("#", "_blank");
          },
          seeChangeLog: function () {
            window.open("#", "_blank");
          },
          syncElectronConfig: function () {
            const { ipcRenderer: e } = a("bdb9");
            e.send("set-tray-context-menu-label", {
              open: this.$t("ui.open"),
              quit: this.$t("ui.quit"),
            }),
              e.send(
                "set-open-on-startup",
                this.$store.getters.config.openOnStartup
              ),
              e.send(
                "set-run-in-background",
                this.$store.getters.config.runInBackground
              ),
              e.send(
                "set-dark-tray-icon",
                this.$store.getters.config.darkTrayIcon
              );
          },
          setupTelemetric: function () {
            this.$honeybadger.setContext({
              version: "2.0.0",
              lang: this.$store.getters.config.language,
            }),
              (this.$honeybadger.config.reportData =
                this.$store.getters.config.reportErrors);
          },
        },
        computed: {
          dates_array: function () {
            if (!this.selected_date) return [];
            var e = [
              Y()(this.selected_date).subtract(1, "d").format("YYYYMMDD"),
              this.selected_date,
            ];
            for (let t = 1; t < this.columns; t++)
              e.push(Y()(this.selected_date).add(t, "d").format("YYYYMMDD"));
            return (
              this.$store.getters.config.startCalendarYesterday
                ? e.unshift(
                    Y()(this.selected_date).subtract(2, "d").format("YYYYMMDD")
                  )
                : e.push(
                    Y()(this.selected_date)
                      .add(this.columns, "d")
                      .format("YYYYMMDD")
                  ),
              this.$store.commit("updateSelectedDates", e),
              e
            );
          },
          showCustomList: function () {
            return this.$store.getters.config.customList;
          },
          showCalendar: function () {
            return this.$store.getters.config.calendar;
          },
          columns: function () {
            return this.$store.getters.config.columns;
          },
          customColumns: function () {
            return this.$store.getters.config.customColumns;
          },
          zoom: function () {
            return this.$store.getters.config.zoom;
          },
          darkTheme: function () {
            return this.$store.getters.config.darkTheme;
          },
          resizableStyle: function () {
            return this.showCalendar && this.showCustomList
              ? { height: this.calendarHeight }
              : {};
          },
          selectedTodo: function () {
            return this.$store.getters.actions.selectedTodo
              ? this.$store.getters.actions.selectedTodo
              : null;
          },
          activeTodo: function () {
            return this.$store.getters.activeTodo
              ? this.$store.getters.activeTodo
              : null;
          },
          mainDividerPositionClass: function () {
            return 0 == this.$store.getters.config.mainDividerPosition
              ? "on-bottom"
              : 1 == this.$store.getters.config.mainDividerPosition
              ? "on-center"
              : "on-top";
          },
          hideTopListContainer: function () {
            return (
              !(
                !this.$store.getters.config.customList ||
                !this.$store.getters.config.calendar
              ) && 2 == this.$store.getters.config.mainDividerPosition
            );
          },
          hideBottomListContainer: function () {
            return (
              !(
                !this.$store.getters.config.customList ||
                !this.$store.getters.config.calendar
              ) && 0 == this.$store.getters.config.mainDividerPosition
            );
          },
        },
      };
    a("094e");
    const Kd = U()(Hd, [["render", w]]);
    var Gd = Kd,
      Qd = a("5502");
    const Jd = { todoLists: {}, cTodoListIds: [], selectedDates: [] },
      Zd = {
        todoLists(e) {
          return e.todoLists;
        },
        cTodoListIds(e) {
          return e.cTodoListIds;
        },
        selectedDates(e) {
          return e.selectedDates;
        },
      },
      Xd = {
        loadTodoLists(e, t) {
          e.todoLists[t.todoListId] = t.todoList;
        },
        clearTodoList(e, t) {
          e.todoLists[t] = [];
        },
        checkTodo(e, t) {
          e.todoLists[t.toDoListId][t.index].checked =
            !e.todoLists[t.toDoListId][t.index].checked;
        },
        moveTodoToEnd(e, t) {
          e.todoLists[t.toDoListId].push(
            e.todoLists[t.toDoListId].splice(t.index, 1)[0]
          );
        },
        addTodo(e, t) {
          e.todoLists[t.listId].push(t);
        },
        updateTodo(e, t) {
          (e.todoLists[t.toDoListId][t.index].repeatingEvent = null),
            (e.todoLists[t.toDoListId][t.index].text = t.text);
        },
        removeTodo(e, t) {
          e.todoLists[t.toDoListId].splice(t.index, 1);
        },
        insertTodo(e, t) {
          e.todoLists[t.toDoListId].splice(t.index, 0, t.toDo);
        },
        checkAllItems(e, t) {
          e.todoLists[t].forEach((e) => {
            e.checked = !0;
          });
        },
        moveUndoneItems(e, t) {
          for (let a = e.todoLists[t.origenId].length - 1; a >= 0; a--)
            e.todoLists[t.origenId][a].checked ||
              ((e.todoLists[t.origenId][a].repeatingEvent = null),
              (e.todoLists[t.origenId][a].listId = t.destinyId),
              e.todoLists[t.destinyId].unshift(e.todoLists[t.origenId][a]),
              e.todoLists[t.origenId].splice(a, 1));
        },
        loadCustomTodoListsIds(e, t) {
          e.cTodoListIds = t;
        },
        newCustomTodoList(e, t) {
          e.cTodoListIds.push(t),
            this.commit("loadTodoLists", {
              todoListId: t.listId,
              todoList: [],
            });
        },
        removeCustomTodoList(e, t) {
          delete e.todoLists[t.id], e.cTodoListIds.splice(t.index, 1);
        },
        updateCustomTodoList(e, t) {
          e.cTodoListIds[t.index].listName = t.name;
        },
        updateSelectedDates(e, t) {
          e.selectedDates = t;
        },
      },
      eu = {
        loadTodoLists({ commit: e }, t) {
          return new Promise((a) => {
            let o = R.open();
            o.onsuccess = function (o) {
              let i = o.target.result;
              var n = R.get(i, "todo_lists", t);
              n.onsuccess = function (o) {
                let n = o.target.result;
                n
                  ? e("loadTodoLists", { todoListId: t, todoList: n })
                  : (e("loadTodoLists", { todoListId: t, todoList: [] }),
                    R.add(i, "todo_lists", t, [])),
                  a();
              };
            };
          });
        },
      };
    var tu = {
      namespaced: !1,
      state: Jd,
      getters: Zd,
      actions: eu,
      mutations: Xd,
    };
    const au = { config: {} },
      ou = {
        config(e) {
          return e.config;
        },
      },
      iu = {
        loadConfig(e, t) {
          e.config = t;
        },
        updateConfig(e, t) {
          e.config[t.key] = t.val;
        },
      },
      nu = {};
    var su = {
      namespaced: !1,
      state: au,
      getters: ou,
      actions: nu,
      mutations: iu,
    };
    const ru = {
        actions: { cListCreated: !1, cListToRmv: null, selectedTodo: null },
      },
      cu = {
        actions(e) {
          return e.actions;
        },
      },
      lu = {
        actionsCListCreatedUpdate(e, t) {
          e.actions.cListCreated = t;
        },
        actionsCListToRmvUpdate(e, t) {
          e.actions.cListToRmv = t;
        },
        actionsSelectedTodoIdUpdate(e, t) {
          e.actions.selectedTodo = t;
        },
      },
      du = {};
    var uu = {
      namespaced: !1,
      state: ru,
      getters: cu,
      actions: du,
      mutations: lu,
    };
    const pu = { notifications: [] },
      mu = {
        notifications(e) {
          return e.notifications;
        },
      },
      bu = {
        setNotificatios(e, t) {
          e.notifications = t;
        },
      },
      gu = {};
    var hu = {
      namespaced: !1,
      state: pu,
      getters: mu,
      actions: gu,
      mutations: bu,
    };
    const ku = { repeatingEventList: {}, repeatingEventByDate: {} },
      fu = {
        repeatingEventList(e) {
          return e.repeatingEventList;
        },
        repeatingEventByDate(e) {
          return e.repeatingEventByDate;
        },
      },
      vu = {
        loadRepeatingEvent(e, t) {
          e.repeatingEventList[t.id] = t;
        },
        updateRepeatingEvent(e, t) {
          e.repeatingEventList[t.key] = t.val;
        },
        removeRepeatingEvent(e, t) {
          delete e.repeatingEventList[t];
        },
        loadRepeatingEventList(e, t) {
          e.repeatingEventList = t;
        },
        loadRepeatingEventGeneratedByDate(e, t) {
          e.repeatingEventByDate[t.key] = t.val ? t.val : {};
        },
      },
      yu = {
        loadRepeatingEvent({ commit: e }, t) {
          let a = R.open();
          a.onsuccess = function (a) {
            let o = a.target.result;
            var i = R.get(o, "repeating_events", t);
            i.onsuccess = function (t) {
              let a = t.target.result;
              e("loadRepeatingEvent", a);
            };
          };
        },
        loadAllRepeatingEvent({ commit: e }) {
          return new Promise((t) => {
            let a = R.open();
            a.onsuccess = function (a) {
              let o = a.target.result,
                i = R.selectAll(o, "repeating_events");
              var n = {};
              i.onsuccess = function () {
                let a = i.result;
                a
                  ? ((n[a.key] = a.value), a.continue())
                  : (e("loadRepeatingEventList", n), t());
              };
            };
          });
        },
        loadRepeatingEventGeneratedByDate({ commit: e }, t) {
          return new Promise((a) => {
            let o = R.open();
            o.onsuccess = function (o) {
              let i = o.target.result;
              var n = R.get(i, "repeating_events_by_date", t);
              n.onsuccess = function (o) {
                let i = o.target.result;
                e("loadRepeatingEventGeneratedByDate", { key: t, val: i }), a();
              };
            };
          });
        },
      };
    var Tu = {
      namespaced: !1,
      state: ku,
      getters: fu,
      actions: yu,
      mutations: vu,
    };
    const ju = { repeatingEventDateCache: {} },
      Ou = {
        repeatingEventDateCache(e) {
          return e.repeatingEventDateCache;
        },
      },
      wu = {
        resetRepeatingEventDateCache(e) {
          e.repeatingEventDateCache = {};
        },
        loadRepeatingEventDateCache(e, t) {
          var a = new Date(),
            o = new Date();
          o.setFullYear(a.getFullYear() + 10);
          for (const [i, n] of Object.entries(t)) {
            const t = Object(dl["b"])(n.repeating_rule);
            t.between(a, o).forEach((t) => {
              e.repeatingEventDateCache[Y.a.utc(t).format("YYYYMMDD")]
                ? e.repeatingEventDateCache[Y.a.utc(t).format("YYYYMMDD")].push(
                    i
                  )
                : (e.repeatingEventDateCache[Y.a.utc(t).format("YYYYMMDD")] = [
                    i,
                  ]);
            });
          }
        },
        addRepeatingEventToDateCache(e, t) {
          var a = new Date(),
            o = new Date();
          o.setFullYear(a.getFullYear() + 10);
          const i = Object(dl["b"])(t.repeating_rule);
          i.between(a, o).forEach((a) => {
            e.repeatingEventDateCache[Y.a.utc(a).format("YYYYMMDD")]
              ? e.repeatingEventDateCache[Y.a.utc(a).format("YYYYMMDD")].push(
                  t.id
                )
              : (e.repeatingEventDateCache[Y.a.utc(a).format("YYYYMMDD")] = [
                  t.id,
                ]);
          });
        },
      };
    var Du = { namespaced: !1, state: ju, getters: Ou, mutations: wu };
    const xu = {
        activeTodo: {
          toDo: {
            text: "Text",
            checked: !1,
            listId: 1,
            desc: "",
            subTaskList: [],
            color: "none",
            priority: 0,
            tags: [],
            time: null,
            alarm: !1,
            repeatingEvent: null,
          },
        },
      },
      Cu = {
        activeTodo(e) {
          return e.activeTodo;
        },
      },
      zu = {
        setActiveTodo(e, t) {
          e.activeTodo = t;
        },
      },
      Lu = {};
    var Iu = {
      namespaced: !1,
      state: xu,
      getters: Cu,
      actions: Lu,
      mutations: zu,
    };
    const Su = {
        clicks: 0,
        clicksTimer: null,
        undoElement: null,
        listToClearId: null,
      },
      $u = {
        clicks(e) {
          return e.clicks;
        },
        clicksTimer(e) {
          return e.clicksTimer;
        },
        undoElement(e) {
          return e.undoElement;
        },
        listToClearId(e) {
          return e.listToClearId;
        },
      },
      Mu = {
        setClicks(e, t) {
          e.clicks = t;
        },
        setClicksTimer(e, t) {
          e.clicksTimer = t;
        },
        setUndoElement(e, t) {
          e.undoElement = t;
        },
        setListToClear(e, t) {
          e.listToClearId = t;
        },
      };
    var Eu = { namespaced: !1, state: Su, getters: $u, mutations: Mu };
    const Au = Object(Qd["a"])({
      modules: {
        config: su,
        todoLists: tu,
        actions: uu,
        notifications: hu,
        repeatingEvents: Tu,
        repeatingEventsDataCache: Du,
        mainStore: Eu,
        activeTodo: Iu,
      },
      state: {},
      getters: {},
      mutations: {},
      actions: {},
    });
    var Wu = a("8fa7"),
      Ru = a.n(Wu),
      Bu = a("47e2"),
      Pu = a("5eeb"),
      Yu = a("fa45"),
      _u = a("f217"),
      Nu = a("90e4"),
      Vu = a("51b1"),
      Uu = a("27f7"),
      qu = a("4300"),
      Fu = a("5e72"),
      Hu = a("b424"),
      Ku = a("1200"),
      Gu = a("08e0"),
      Qu = a("26ad"),
      Ju = a("6c45"),
      Zu = a("2d50"),
      Xu = a("e87a");
    const ep = {
      en: Pu,
      es: Yu,
      ru: _u,
      fr: Nu,
      pt: Vu,
      zh_cn: Uu,
      zh_tw: qu,
      de: Fu,
      it: Hu,
      ar: Ku,
      pl: Gu,
      ja: Qu,
      tr: Ju,
      uk: Zu,
      ko: Xu,
      };
      a("ab8b"), a("cd74"), a("21b0"), a("3ed1"), a("66f5");
      const tp = Object.assign(ep),
      ap = Object(Bu["a"])({
        locale: "en",
        fallbackLocale: "en",
        messages: tp,
      }),
      op = {
        apiKey: "hbp_tN8ddzEROj1wHJa7cqfyOoHuQi7it723jzef",
        environment: "production",
        reportData: !0,
        developmentEnvironments: ["dev", "development", "test"],
      },
      ip = Object(o["e"])(Gd);
      ip.use(Ru.a, op), ip.use(Au), ip.use(ap), ip.mount("#app");
      },
      "5e72": function (e) {
      e.exports = JSON.parse(
      '{"settings":{"settings":"Einstellungen","language":"Sprache","customLists":"Benutzerdefinierte Listen","darkTheme":"Dunkles Thema","darkTrayIcon":"Dunkles Tray-Icon","darkIcon":"Dunkles Symbol","data":"Daten","import":"Importieren","export":"Exportieren","backup":"Backup:","invalidFile":"Ungültige Datei","checkUpdates":"Beim Start nach Updates suchen","calendar":"Kalender","zoom":"Zoomen","columns":"Kalenderspalten","lists_columns":"Benutzerdefinierte Listenspalten","goToNewDomain":"Wir stellen die ImPlanner-Website auf eine neue Domain um und diese wird am 1. April 2022 eingestellt. Um Ihre Daten zu behalten, müssen Sie sie aus dieser Domain exportieren und dann in die neue Domain importieren (aus dem Konfigurationsmenü). Denken Sie daran, dass Sie die Informationen verlieren, die Ihr Browser in dieser Domain speichert, wenn Sie keine Daten migrieren. Wir entschuldigen uns für eventuelle Unannehmlichkeiten.","gotoNewDomainBtn":"Gehen Sie zu einer neuen Domäne","general":"Allgemein","notifications":"Benachrichtigungen","display":"Anzeige","openOnStartup":"Beim Start öffnen","notificationOnStartup":"Benachrichtigung beim Start","notificationSound":"Benachrichtigungston","clearData":"Daten löschen","exportData":"Daten exportieren","importData":"Daten importieren","clearDataDetails":"Möchten Sie wirklich alle App-Daten löschen? Diese Aktion ist irreversibel.","runInBackground":"Im Hintergrund laufen","runInBackgroundInfo":"Ermöglicht Benachrichtigungen bei geschlossener App.\\n \\nDiese Option kann bei einigen macOS-Versionen zu Problemen führen.","moveOldTasks":"Alte Aufgaben automatisch verschieben","importing":"Importieren...","exporting":"Exportieren...","reportErrors":"Fehlerbericht senden","compactView":"Kompakte Ansicht","behavior":"Verhalten","startCalendarYesterday":"Kalenderstart gestern","notificationIndicator":"Benachrichtigungsanzeige","autoReorderTasks":"Aufgaben automatisch neu anordnen","moveCompletedTaskToBottom":"Erledigte Aufgaben nach unten verschieben","clear":"Löschen","fullscreenToDoModal":"Aufgabendetails im Vollbildmodus","moveCompletedSubTaskToBottom":"Abgeschlossene Unteraufgaben nach unten verschieben","weekStartOnMonday":"Die Woche beginnt am Montag"},"donate":{"contribute":"Beitragen","contributeSponsor":"Beitrag leisten / Sponsor","supportMessage1":"ImPlanner ist eine kostenlose Anwendung, die von Benutzern wie Ihnen unterstützt wird! \\nWenn Sie ImPlanner nützlich finden, erwägen Sie bitte, uns auf jede erdenkliche Weise zu unterstützen. \\nIhre Unterstützung macht den Unterschied. \\nVielen Dank, dass Sie ImPlanner verwenden.","supportMessage2":"Ihre Unterstützung macht den Unterschied. \\nDanke für die Unterstützung von ImPlanner 😊","comment":"Kommentar senden","crypto":"Krypto","goBack":"Zurück","paymentType":"Zahlungstyp","address":"Richtung","copy":"Kopieren","copiedAddres":"Kopierte Adresse !!!","share":"Teilen","shareWithFriends":"Mit Freunden teilen","rate":"Bewerten Sie uns","cryptocurrencies":"Kryptowährungen","buyMeACoffee":"Kauf mir einen Kaffee","buyMeACryptoCoffee":"Kauf mir einen Krypto-Kaffee","translate":"Übersetzen","shareMessage":"Ich plane meine Woche mit ImPlanner, einem kostenlosen minimalistischen Wochenplaner mit Schwerpunkt auf Privatsphäre, und ich denke, Sie werden es auch lieben. \\nHör zu!","supportUs":"Unterstütze uns","splashMessage":"Gefällt Ihnen ImPlanner? \\nHier können Sie das Projekt unterstützen!"},"about":{"about":"Über","madeWith":"Ich stimme mit","inCuba":"in Kuba","dev":"Entwickler und Designer","devName":"Manuel Ernesto García","version":"ausführung","desc":"ImPlanner ist ein minimalistischer Wochenplaner, der sich auf Datenschutz konzentriert.","site":"Website besuchen","contributors":"Mitwirkende","sponsors":"Sponsoren","collaborators":"Mitarbeiter","email":"Email","blog":"Bloggen","license":"Lizenz"},"generatedData":{"data2":"Klicken, um die Aufgabe abzuschließen","data3":"Doppelklicken, um die Aufgabe zu bearbeiten","data4":"Bewegen Sie die Maus darüber, um den Rest des Textes dieser Aufgabe anzuzeigen","data5":"Sie können die Aufgaben ziehen und ablegen","data6":"Dies ist eine benutzerdefinierte Liste","data7":"Sie können neue Listen über die Seitenleiste erstellen","data8":"Sie können sie auch im Optionsmenü ausblenden","data9":"Äpfel","data10":"Erfrischungen","data11":"Klicken Sie auf die drei Punkte, um weitere Details zu dieser Aufgabe anzuzeigen","data12":"Öffnen Sie Aufgabendetails schnell mit dem mittleren Mausklick","list1":"Benutzerdefinierte Liste","list2":"Einkaufsliste","list3":"Ideen","subtask1":"Ich bin eine Teilaufgabe","subtask2":"Klicken Sie auf , um die Unteraufgabe abzuschließen","desc1":"Hier können Sie Ihre Notizen zu dieser Aufgabe machen. Doppelklicken Sie, um die Notizen zu bearbeiten."},"tips":{"tips":"Tipps","next":"Nächster Tipp","back":"Vorheriger Tipp","tip1":"Sie können eine neue Aufgabe erstellen, indem Sie auf einen beliebigen Bereich der Listen klicken.","tip2":"Aufgaben können per Drag & Drop von einer Liste in eine andere oder durch Ändern ihrer Reihenfolge gezogen werden.","tip3":"Um den Namen einer Liste oder Aufgabe zu bearbeiten, doppelklicken Sie darauf.","tip4":"Rechts vom Datum jeder Liste befindet sich das Snooze-Symbol, mit dem Sie alle ausstehenden Aufgaben der aktuellen Liste an den nächsten Tag senden können.","tip5":"Wenn Sie die benutzerdefinierten Listen nicht verwenden möchten, können Sie sie im Konfigurationsmenü ausblenden.","tip6":"Mit dem Kalender in der Seitenleiste können Sie schnell zu einem Datum scrollen.","tip7":"Wenn Sie den Cursor auf den Namen der Liste setzen, wird das Symbol Alle abschließen angezeigt. Auf diese Weise können Sie alle Aufgaben markieren, die eine Liste enthält.","tip8":"Sie können eine neue benutzerdefinierte Liste erstellen, indem Sie auf die Schaltfläche Neue Liste hinzufügen im Seitenbereich klicken.","tip9":"Mit der Schaltfläche Start werden Sie auf den aktuellen Tag gesetzt.","tip13":"ImPlanner speichert die Informationen auf Ihrem Computer. Wenn Sie Ihren Computer oder Browser ändern möchten, denken Sie daran, ein Backup zu erstellen. Sie können dies im Einstellungsmenü tun.","tip14":"Klicken Sie auf und ziehen Sie die zentrale Division, um die Größe des Kalenders und der benutzerdefinierten Liste zu ändern. Doppelklicken Sie darauf, um seine Größe wiederherzustellen.","tip15":"Sie können die Anzahl der Spalten und den Zoom der Anwendung im Konfigurationsfeld ändern.","tip16":"Klicken Sie auf die drei Punkte in den Aufgaben, um Details anzuzeigen.","tip17":"Sie können die Unteraufgabe per Drag & Drop in das Aufgabendetailsfenster ziehen.","tip18":"Im oberen Bereich des Aufgabendetailsfensters können Sie den Tag oder die Liste einer Aufgabe ändern."},"welcome":{"next":"Nächster","back":"Zurück","ready":"Klug","allReady":"Alles bereit","allReadyText":"Alles ist fertig, damit Sie ImPlanner genießen können.","allReadySub":"Wenn Sie Fragen haben, finden Sie Tipps in der Seitenleiste","welcome":"Willkommen bei ImPlanner","welcomeText":"Der Minimalist Weekly Task Manager hat sich auf den Datenschutz konzentriert. Wählen Sie zunächst Ihre Sprache aus.","privacy":"Datenschutz","privacyText":"Alle Ihre Daten werden auf Ihrem Computer gespeichert. \\nWenn Sie Ihren Computer oder Browser ändern müssen, denken Sie daran, ein Backup zu erstellen.","privacySub":"Im Falle von Fehlern in der App können Sie einen Fehlerbericht an den Entwickler senden.","theme":"Thema","themeText":"Sie können je nach Wunsch zwischen hellem und dunklem Thema wählen."},"ui":{"rmList":"Liste löschen","rmListConfirm":"Möchten Sie die Liste wirklich löschen?","repeatingTaskRemoveConfirm":"Möchten Sie diese wiederkehrende Aufgabe wirklich löschen?","removeRepeatingTask":"Wiederkehrende Aufgabe entfernen","cancel":"Abbrechen","ok":"OK","remove":"Entfernen","splashSub":"Minimalistischer Wochenplaner","mobileWarning":"ImPlanner ist eine Desktop-Anwendung und kann derzeit nicht in dieser Auflösung angezeigt werden. :(","today":"heute","calendar":"Kalender","newCustomList":"Neue benutzerdefinierte Liste","reorderCustomLists":"Benutzerdefinierte Listen neu anordnen","softwareUpdated":"Software aktualisiert","seeChanges":"(Siehe Änderungen)","changeLog":"Änderungsprotokoll","compatible":"Leider ist ImPlanner nicht mit Ihrem Webbrowser kompatibel. Bitte versuchen Sie es zu aktualisieren oder verwenden Sie einen anderen.","removeList":"Liste entfernen","completeAll":"Schließe alle ab","newTask":"Neue Aufgabe","postpone":"verschieben","newVersionAvailable":"Neue Version verfügbar","download":"(Download)","sponsoredBy":"Gesponsert von","updateAll":"Alle aktualisieren","removeAll":"Alles löschen","recurringTasks":"Wiederkehrende Aufgaben","undo":"Rückgängig machen","clearList":"Liste leeren","clear":"Klar","clearListConfirm":"Möchten Sie die Liste wirklich löschen?","reorder":"Neu anordnen","maximizeCalendarPanel":"Kalenderbereich maximieren","restorePanel":"Panelgröße wiederherstellen","maximizeListPanel":"Listenfeld maximieren","open":"Offen","quit":"Aufhören","copyTasks":"Aufgaben kopieren","task":"Aufgabe","Frecuency":"Häufigkeit"},"todoDetails":{"taskTitle":"Aufgabentitel","notes":"Anmerkungen","markdown":"Markdown-Stil unterstützt","addSubTask":"Unteraufgabe hinzufügen","copiedTaskToClipboard":"Text in Zwischenablage kopiert !!!","taskRemoved":"Aufgabe entfernt !!!","taskDuplicated":"Aufgabe dupliziert !!!","duplicate":"Duplizieren","subtasks":"Unteraufgaben","interval":"Intervall:","indefinitely":"Unbegrenzt","occurrences":"Vorkommen","untilDate":"Bis zum Datum","done":"Fertig","cancel":"Absagen","noRepeat":"Keine Wiederholung","daily":"Täglich","weekly":"Wöchentlich","weekdays":"Mo-Fr","monthly":"Monatlich","yearly":"Jährlich","split":"Teilt","recurrentTaskRemoved":"Wiederkehrende Aufgabe entfernt","time":"Zeit","alarm":"Alarm","color":"Farbe","close":"Nah dran","actions":"Aktionen","customWeekdays":"Benutzerdefinierte Wochentage"},"notifications":{"noPendingTasksToday":"Sie haben heute keine geplanten Aufgaben.","pendingTasksYesterday":"Sie haben gestern {0} ausstehende Aufgaben.","pendingTasksToday":"Sie haben heute {0} geplante Aufgaben.","pendingTasksYesterdayAndToday":"Sie haben gestern {0} ausstehende Aufgaben und heute {1} geplante Aufgaben."}}'
      );
      },
      "5eeb": function (e) {
      e.exports = JSON.parse(
      '{"settings":{"settings":"Settings","language":"Language","customLists":"Custom Lists","darkTheme":"Dark Theme","darkTrayIcon":"Dark Tray Icon","darkIcon":"Dark Icon","data":"Data","import":"Import","export":"Export","clear":"Clear","backup":"Backup:","invalidFile":"Invalid File","checkUpdates":"Check for Updates on startup","calendar":"Calendar","zoom":"Zoom","columns":"Calendar Columns","lists_columns":"Custom Lists Columns","goToNewDomain":"We are changing the ImPlanner website to a new domain and this one will be discontinued on April 1st 2022. In order to keep your data, you must export it from this domain and then import it in the new domain (From the configuration menu). Keep in mind that if you do not migrate data, you will lose the information your browser stores in this domain. Sorry for any inconvenience this may cause.","gotoNewDomainBtn":"Go to new domain","general":"General","notifications":"Notifications","display":"Display","openOnStartup":"Open on startup","notificationOnStartup":"Notification on startup","notificationSound":"Notification sound","clearData":"Clear data","exportData":"Export data","importData":"Import data","clearDataDetails":"Are you sure you want to delete all app data? This action is irreversible.","runInBackground":"Run in background","runInBackgroundInfo":"Allows notifications to work with the app closed. \\n This option may have issues for some macOS versions.","moveOldTasks":"Automatically move old tasks","importing":"Importing...","exporting":"Exporting...","reportErrors":"Synch","compactView":"Compact View","behavior":"Behavior","startCalendarYesterday":"Calendar start yesterday","notificationIndicator":"Notification Indicator","autoReorderTasks":"Automatically reorder tasks","moveCompletedTaskToBottom":"Move completed tasks to bottom","moveCompletedSubTaskToBottom":"Move completed sub-tasks to bottom","fullscreenToDoModal":"To-do Details in full screen","weekStartOnMonday":"The Week start on Monday"},"donate":{"contribute":"Contribute","contributeSponsor":"Contribute / Sponsor","supportMessage1":"ImPlanner is a free application backed by users like you! If you find ImPlanner useful please consider supporting us in any way you can. Your support makes the difference. Thanks for using ImPlanner.","supportMessage2":"Your support makes the difference. Thanks for supporting ImPlanner 😊","comment":"Send feedback","crypto":"Cripto","goBack":"Go Back","paymentType":"Payment Type","address":"Address","copy":"Copy","copiedAddres":"Copied Address !!!","share":"Share","shareWithFriends":"Share with friends","rate":"Rate Us","cryptocurrencies":"Cryptocurrencies","buyMeACoffee":"Buy me a Coffee","buyMeACryptoCoffee":"Buy me a Crypto Coffee","translate":"Translate","shareMessage":"I\'m scheduling my week with ImPlanner, a free minimalist privacy-focused weekly planner and I think you\'ll love it too. Check it out!","supportUs":"Support Us","splashMessage":"Enjoying ImPlanner? You can support the project here !"},"about":{"about":"About","madeWith":"Made with","inCuba":"in Cuba","dev":"Developer and Designer","devName":"Manuel Ernesto García","version":"Version","desc":"ImPlanner is a Minimalist Weekly Planner focused on privacy.","site":"Visit Website","contributors":"Contributors","sponsors":"Sponsors","collaborators":"Collaborators","email":"E-mail","blog":"Blog","license":"License"},"generatedData":{"data2":"Click to complete task","data3":"Double click to edit task","data4":"Mouse over to display the rest of the text for this task.","data5":"You can drag and drop the tasks","data6":"This is a custom list","data7":"You can create new lists from the side bar","data8":"You can also hide them in the settings menu","data9":"à Faire","data10":"Contact ....","data11":"Click the three dots for see more details about this task","data12":"Open task details quickly with the middle mouse click","list1":"Custom List","list2":"Urgent","list3":"Ideas","subtask1":"I\'m a subtask","subtask2":"Click to complete subtask","desc1":"Here you can set your notes about this task. Double click to edit the notes."},"tips":{"tips":"Tips","":"Next Tip","back":"Previous Tip","tip1":"You can create a new task by clicking on any area of ​​the lists.","tip2":"Tasks can be dragged and dropped from one list to another or by changing their order.","tip3":"To edit the name of a list or a task, double click on it.","tip4":"To the right of the date of each list is the Snooze icon which allows you to send all the pending tasks of the current list to the next day.","tip5":"If you are not going to use the custom lists, you can hide them in the configuration menu.","tip6":"The calendar in the sidebar allows you to quickly scroll to a date.","tip7":"By placing the cursor on the name of the list, the Mark All icon will appear, this allows you to mark all the tasks that a list contains.","tip8":"You can create a new custom list using the Add New List button located on the side panel.","tip9":"The Start button places you on the current day.","tip13":"ImPlanner stores the information on your computer. If you want to change your computer or browser, remember to create a backup. You can do it in the settings menu.","tip14":"Click and drag the central division to resize the height of the calendar and the custom lists. Double click on it to restore the size.","tip15":"You can modify the number of columns and the zoom of the application in the configuration panel.","tip16":"Click the three dots in the tasks to see details.","tip17":"You can drag and drop the sub task in the task details window.","tip18":"In the top of the task details window you can change the day or the list of a task."},"welcome":{"next":"Next","back":"Previous","ready":"ready","allReady":"All ready","allReadyText":"Everything is ready so you can enjoy ImPlanner.","allReadySub":"","welcome":"Welcome to ImPlanner","welcomeText":"Your Task Manager relying on privacy. To start select your language."},"ui":{"rmList":"Delete List","rmListConfirm":"Are you sure you want to delete the list","repeatingTaskRemoveConfirm":"Are you sure you want to delete this recurring task ?","removeRepeatingTask":"Remove Repeating Task","cancel":"Cancel","ok":"Ok","remove":"Delete","splashSub":"Minimalist Weekly Planner","mobileWarning":"ImPlanner is a Desktop application ;) for now it is not ready to be displayed in this resolution. :(","today":"Today","calendar":"Calendar","newCustomList":"New Custom List","reorderCustomLists":"Reorder Custom lists","softwareUpdated":"Software Updated","seeChanges":"(See Changes)","changeLog":"Change Log","compatible":"Sorry, ImPlanner is not compatible with your web browser. Try to update it or use another one.","removeList":"Delete List","completeAll":"Complete All","newTask":"New Task","postpone":"Postpone","newVersionAvailable":"New Version Available","download":"(Download)","sponsoredBy":"Sponsored by","updateAll":"Update All","removeAll":"Delete All","recurringTasks":"Recurring tasks","undo":"Undo","clearList":"Clear List","clear":"Clear","clearListConfirm":"Are you sure you want to clear the list ?","reorder":"Reorder","maximizeCalendarPanel":"Maximize Calendar Panel","restorePanel":"Restore Panel Size","maximizeListPanel":"Maximize list Panel","open":"Open","quit":"Quit","copyTasks":"Copy Tasks","task":"Task","Frecuency":"Frecuency"},"todoDetails":{"taskTitle":"Task title","notes":"Notes","markdown":"Markdown Style Supported","addSubTask":"Add Subtask","copiedTaskToClipboard":"Text Copied to Clipboard !!!","taskRemoved":"Task Removed !!!","taskDuplicated":"Task Duplicated !!!","duplicate":"Duplicate","subtasks":"Subtasks","interval":"Interval:","indefinitely":"Indefinitely","occurrences":"Occurrences","untilDate":"Until Date","done":"Done","cancel":"Cancel","noRepeat":"No Repeat","daily":"Daily","weekly":"Weekly","weekdays":"Mon-Fri","monthly":"Monthly","yearly":"Yearly","split":"Split","recurrentTaskRemoved":"Recurrent Task Removed","time":"Time","alarm":"Alarm","color":"Color","close":"Close","actions":"Actions","customWeekdays":"Custom Weekdays"},"notifications":{"noPendingTasksToday":"You have no scheduled tasks today.","pendingTasksYesterday":"You have {0} pending tasks yesterday.","pendingTasksToday":"You have {0} scheduled tasks today.","pendingTasksYesterdayAndToday":"You have {0} pending tasks yesterday and {1} scheduled tasks today."}}'
      );
      },
      6204: function (e, t, a) {
      "use strict";
      a("4224");
      },
      "66f5": function (e, t, a) {},
      "6c45": function (e) {
      e.exports = JSON.parse(
      '{"settings":{"settings":"Ayarlar","language":"Dil","customLists":"Özel Listeler","darkTheme":"Karanlık Tema","darkTrayIcon":"Karanlık Tepsi Simgesi","darkIcon":"Karanlık Simge","data":"Veri","import":"İçeri Aktar","export":"Dışarı Aktar","backup":"Yedekle:","invalidFile":"Geçersiz Dosya","checkUpdates":"Başlangıçta Güncellemeleri Kontrol Et","calendar":"Takvim","zoom":"Yakınlaştır","columns":"Takvim Sütunları","lists_columns":"Özel Listeler Sütunları","goToNewDomain":"ImPlanner web sitesini yeni bir alana taşıyoruz ve bu alan kısa süre içinde kullanımdan kaldırılacak. Lütfen yeni alan adından ImPlanner\'ya erişmeye başlayın. Verilerinizi taşımak için buraya aktarmanız ve ardından yapılandırma menüsünden diğer etki alanına aktarmanız gerekir. Bunun neden olabileceği herhangi bir rahatsızlık için özür dileriz.","gotoNewDomainBtn":"Yeni etki alanına git","general":"Genel","notifications":"Bildirimler","display":"Görüntülemek","openOnStartup":"Başlangıçta aç","notificationOnStartup":"Açılışta bildirim","notificationSound":"Bilgilendirme sesi","clearData":"Net veriler","exportData":"Verileri dışa aktar","importData":"Verileri içe aktar","clearDataDetails":"Tüm uygulama verilerini silmek istediğinizden emin misiniz? \\nBu eylem geri döndürülemez.","runInBackground":"Arka planda çalıştır","runInBackgroundInfo":"Bildirimlerin uygulama kapalıyken çalışmasına izin verir.\\n \\nBu seçeneğin bazı macOS sürümlerinde sorunları olabilir.","moveOldTasks":"Eski görevleri otomatik olarak taşı","importing":"İçe aktarılıyor...","exporting":"Dışa aktarılıyor...","reportErrors":"Hata Raporu Gönder","compactView":"Kompakt Görünüm","behavior":"Davranış","startCalendarYesterday":"Takvim dün başlıyor","notificationIndicator":"Bildirim Göstergesi","autoReorderTasks":"Görevleri otomatik olarak yeniden sırala","moveCompletedTaskToBottom":"Tamamlanan görevleri en alta taşı","clear":"Silmek","fullscreenToDoModal":"Yapılacaklar Ayrıntıları tam ekranda","moveCompletedSubTaskToBottom":"Tamamlanan alt görevleri en alta taşı","weekStartOnMonday":"Hafta Pazartesi günü başlar"},"donate":{"contribute":"Katkıda bulun","contributeSponsor":"Katkıda Bulun / Sponsor olun","supportMessage1":"ImPlanner, sizin gibi kullanıcılar tarafından desteklenen ücretsiz bir uygulamadır! \\nImPlanner\'yu yararlı bulursanız, lütfen bizi mümkün olan her şekilde desteklemeyi düşünün. \\nDesteğiniz fark yaratıyor. \\nImPlanner\'yu kullandığınız için teşekkürler.","supportMessage2":"Desteğiniz fark yaratır. \\nImPlanner\'yu desteklediğiniz için teşekkürler 😊","comment":"Geri bildirim gönderin","crypto":"Kripto","goBack":"Geri Git","paymentType":"Ödeme Türü","address":"Adres","copy":"Kopyala","copiedAddres":"Adres Kopyalandı !!!","share":"Paylaş","shareWithFriends":"Arkadaşlarınla ​​paylaş","rate":"Bizi değerlendirin","cryptocurrencies":"kripto para birimleri","buyMeACoffee":"Buy me a Coffee","buyMeACryptoCoffee":"Buy me a Crypto Coffee","translate":"Çeviri","shareMessage":"Haftamı ücretsiz minimalist gizlilik odaklı haftalık planlayıcı ImPlanner ile planlıyorum ve sizin de seveceğinizi düşünüyorum. \\nBuna bir bak!","supportUs":"Bizi destekle","splashMessage":"ImPlanner\'dan hoşlanıyor musunuz? \\nProjeye buradan destek olabilirsiniz!"},"about":{"about":"Hakkında","madeWith":"Tarafından","inCuba":"in Cuba","dev":"Geliştirici ve Tasarımcı","devName":"Manuel Ernesto García","version":"Versiyon","desc":"ImPlanner gizliliğe odaklanan minimalist bir Haftalık Planlayıcıdır.","site":"Websitesini ziyaret edin","contributors":"Katkıda Bulunanlar","sponsors":"Sponsorlar","collaborators":"ortak çalışanlar","email":"e-posta","blog":"Blog","license":"Lisans"},"generatedData":{"data2":"Görevi tamamlamak için tıklayın","data3":"Görevi düzenlemek için çift tıklayın","data4":"Bu görev metninin geri kalanını görüntülemek için fareyi üzerine getirin.","data5":"Görevleri tutup sürükleyebilirsiniz","data6":"Bu özel bir listedir","data7":"Yan menüden yeni listeler oluşturabilirsiniz","data8":"Bunları ayarlar menüsünden de gizleyebilirsiniz.","data9":"Elmalar","data10":"İçecekler","data11":"Bu görev hakkında daha fazla detay görmek için üç noktaya tıklayın","data12":"Orta fare tıklamasıyla görev ayrıntılarını hızla açın","list1":"Kişisel Liste","list2":"Alışveriş Listesi","list3":"Fikirler","subtask1":"Ben bir altgörevim","subtask2":"Altgörevi tamamlamak için tıklayın","desc1":"Burada bu görevle ilgili notlarınızı ayarlayabilirsiniz. Notları düzenlemek için çift tıklayın."},"tips":{"tips":"Öneriler","next":"Sonraki Öneri","back":"Önceki Öneri","tip1":"Listelerin herhangi bir alanına tıklayarak yeni bir görev oluşturabilirsiniz.","tip2":"Görevler bir listeden diğerine veya sıraları değiştirilerek sürüklenip bırakılabilir.","tip3":"Bir listenin veya görevin adını düzenlemek için üzerine çift tıklayın.","tip4":"Her listenin tarihinin sağ tarafında, mevcut listenin bekleyen tüm görevlerini bir sonraki güne göndermenizi sağlayan Erteleme simgesi bulunur.","tip5":"Özel listeleri kullanmayacaksanız, bunları yapılandırma menüsünde gizleyebilirsiniz.","tip6":"Kenar çubuğundaki takvim, bir tarihe hızlıca kaydırmanıza olanak tanır.","tip7":"İmleci liste adının üzerine getirdiğinizde, Tümünü İşaretle simgesi görünür, bu, bir listenin içerdiği tüm görevleri işaretlemenize olanak tanır.","tip8":"Yan panelde bulunan Yeni Liste Ekle düğmesini kullanarak yeni bir özel liste oluşturabilirsiniz.","tip9":"Başlat düğmesi sizi geçerli güne yerleştirir.","tip13":"ImPlanner bilgileri bilgisayarınızda saklar. Bilgisayarınızı veya tarayıcınızı değiştirmek isterseniz, yedek oluşturmayı unutmayın. Bunu ayarlar menüsünden yapabilirsiniz.","tip14":"Takvimin ve özel listelerin yüksekliğini yeniden boyutlandırmak için merkezi bölmeye tıklayın ve sürükleyin. Boyutu geri yüklemek için üzerine çift tıklayın.","tip15":"Yapılandırma panelinden sütun sayısını ve uygulamanın yakınlaştırmasını değiştirebilirsiniz.","tip16":"Ayrıntıları görmek için görevlerdeki üç noktayı tıklayın.","tip17":"Alt görevi, görev ayrıntıları penceresine sürükleyip bırakabilirsiniz.","tip18":"Görev ayrıntıları penceresinin üst kısmında bir görevin gününü veya listesini değiştirebilirsiniz."},"welcome":{"next":"Sonraki","back":"Önceki","ready":"hazır","allReady":"Tümü hazır","allReadyText":"ImPlanner\'nun keyfini çıkarabilmeniz için her şey hazır.","allReadySub":"Herhangi bir sorunuz varsa, kenar çubuğunda ipuçlarını bulabilirsiniz.","welcome":"ImPlanner\'ya Hoşgeldiniz","welcomeText":"Gizliliğe odaklanan Minimalist Haftalık Görev Yöneticisi. Başlamak için dilinizi seçin.","privacy":"Gizlilik","privacyText":"Tüm verileriniz bilgisayarınızda saklanır. \\nBilgisayarınızı veya tarayıcınızı değiştirmeniz gerekirse, bir yedek oluşturmayı unutmayın.","privacySub":"Uygulamada hata olması durumunda, geliştiriciye hataların bir raporunu gönderebilirsiniz.","theme":"Tema","themeText":"Tercihinize göre açık ve koyu tema arasında seçim yapabilirsiniz."},"ui":{"rmList":"Listeyi Kaldır","rmListConfirm":"Listeyi silmek istediğinizden emin misiniz?","repeatingTaskRemoveConfirm":"Bu yinelenen görevi silmek istediğinizden emin misiniz?","removeRepeatingTask":"Yinelenen Görevi Kaldır","cancel":"İptal Et","ok":"Tamam","remove":"Kaldır","splashSub":"Minimalist Haftalık Planlayıcı","mobileWarning":"ImPlanner bir Masaüstü uygulamasıdır ve şimdilik bu çözünürlükte görüntülenmeye hazır değil. :(","today":"Bugün","calendar":"Takvim","newCustomList":"Yeni Özel Liste","reorderCustomLists":"Özel listeleri yeniden sıralayın","softwareUpdated":"Yazılım Güncellendi","seeChanges":"(Değişiklikleri Gör)","changeLog":"Değişiklik Günlüğü","compatible":"Üzgünüz, ImPlanner web tarayıcınızla uyumlu değil. Güncellemeyi deneyin veya başka bir tane kullanın.","removeList":"Listeyi Sil","completeAll":"Hepsini Tamamla","newTask":"Yeni görev","postpone":"Ertele","newVersionAvailable":"Yeni Versiyon Mevcut","download":"(İndir)","sponsoredBy":"Sponsored by","updateAll":"Tümünü Güncelle","removeAll":"Hepsini sil","recurringTasks":"Yinelenen görevler","undo":"Geri alma","clearList":"Listeyi temizle","clear":"Temizlemek","clearListConfirm":"Listeyi temizlemek istediğinizden emin misiniz?","reorder":"yeniden sırala","maximizeCalendarPanel":"Takvim Panelini Büyüt","restorePanel":"Panel Boyutunu Geri Yükle","maximizeListPanel":"Listeyi büyüt Panel","open":"Açık","quit":"Çıkış yapmak","copyTasks":"Görevleri Kopyala","task":"Görev","Frecuency":"frekans"},"todoDetails":{"taskTitle":"Görev Başlığı","notes":"Notlar","markdown":"Markdown Destekleniyor","addSubTask":"Alt Görev Ekle","copiedTaskToClipboard":"Metin Panoya Kopyalandı !!!","taskRemoved":"Görev Kaldırıldı !!!","taskDuplicated":"Görev Kopyalandı !!!","duplicate":"Kopyala","subtasks":"Alt Görevler","interval":"Aralık:","indefinitely":"süresiz","occurrences":"Olaylar","untilDate":"Tarihine kadar","done":"Tamamlandı","cancel":"İptal","noRepeat":"Tekrar Yok","daily":"Günlük","weekly":"Haftalık","weekdays":"Pzt-Cum","monthly":"Aylık","yearly":"Yıllık","split":"Bölmek","recurrentTaskRemoved":"Tekrarlayan Görev Kaldırıldı","time":"Zaman","alarm":"alarm","color":"Renk","close":"Kapat","actions":"Hareketler","customWeekdays":"Özel Hafta İçi"},"notifications":{"noPendingTasksToday":"Bugün planlanmış bir göreviniz yok.","pendingTasksYesterday":"Dün bekleyen {0} görevin var.","pendingTasksToday":"Bugün {0} planlanmış göreviniz var.","pendingTasksYesterdayAndToday":"Dün bekleyen {0} göreviniz ve bugün {1} zamanlanmış göreviniz var."}}'
      );
      },
  "75ed": function (e, t, a) {},
  7627: function (e, t, a) {},
  7807: function (e, t, a) {},
  7901: function (e, t, a) {},
  "81bf": function (e, t, a) {
    "use strict";
    a("451d");
  },
  "83f3": function (e, t, a) {
    "use strict";
    a("42b3");
  },
  "848e": function (e, t, a) {
    "use strict";
    a("b6d8");
  },
  8538: function (e, t, a) {
    "use strict";
    a("2105");
  },
  "869b": function (e, t, a) {
    "use strict";
    a("9050");
  },
  8784: function (e, t, a) {
    "use strict";
    a("1600");
  },
  9050: function (e, t, a) {},
  "90e4": function (e) {
    e.exports = JSON.parse(
      '{"settings":{"settings":"Réglages","language":"Langue","customLists":"Listes personnalisées","darkTheme":"Thème sombre","darkTrayIcon":"Icône de plateau sombre","darkIcon":"Icône sombre","data":"Data","import":"Importer","export":"Exporter","backup":"Sauvegarde:","invalidFile":"Fichier non valide","checkUpdates":"Rechercher des mises à jour au démarrage","calendar":"Calendrier","zoom":"Zoom","columns":"Colonnes du calendrier","lists_columns":"Colonnes de listes personnalisées","goToNewDomain":"Nous changeons le site Web ImPlanner vers un nouveau domaine et celui-ci sera interrompu le 1er avril 2022. Afin de conserver vos données, vous devez les exporter depuis ce domaine puis les importer dans le nouveau domaine (Depuis le menu de configuration). Gardez à l\'esprit que si vous ne migrez pas les données, vous perdrez les informations stockées par votre navigateur dans ce domaine. Désolé pour tout inconvénient que cela pourrait causer.","gotoNewDomainBtn":"Aller au nouveau domaine","general":"Général","notifications":"Avis","display":"Afficher","openOnStartup":"Ouvrir au démarrage","notificationOnStartup":"Notification au démarrage","notificationSound":"Son de notification","clearData":"Effacer les données","exportData":"Exporter des données","importData":"Importer des données","clearDataDetails":"Voulez-vous vraiment supprimer toutes les données de l\'application ? Cette action est irréversible.","runInBackground":"De fonctionner en arrière-plan","runInBackgroundInfo":"Autorise les notifications à fonctionner avec l\'application fermée.\\n \\nCette option peut poser des problèmes pour certaines versions de macOS.","moveOldTasks":"Déplacer automatiquement les anciennes tâches","importing":"Importation...","exporting":"Exportation...","reportErrors":"Synchroniser","compactView":"Vue compacte","behavior":"Comportement","startCalendarYesterday":"Le calendrier a commencé hier","notificationIndicator":"Indicateur de notification","autoReorderTasks":"Réorganiser automatiquement les tâches","moveCompletedTaskToBottom":"Déplacer les tâches terminées vers le bas","clear":"Supprimer","fullscreenToDoModal":"Détails de la tâche en plein écran","moveCompletedSubTaskToBottom":"Déplacer les sous-tâches terminées vers le bas","weekStartOnMonday":"La semaine commence le lundi"},"donate":{"contribute":"Contribuer","contributeSponsor":"Contribuer / Parrainer","supportMessage1":"ImPlanner est une application gratuite soutenue par des utilisateurs comme vous ! \\nSi vous trouvez ImPlanner utile, pensez à nous soutenir de toutes les manières possibles. \\nVotre soutien fait la différence. \\nMerci d\'utiliser ImPlanner.","supportMessage2":"Votre soutien fait la différence. \\nMerci de soutenir ImPlanner 😊","comment":"Envoyer un commentaire","crypto":"Crypto","goBack":"Revenir en arrière","paymentType":"Type de paiement","address":"adresse","copy":"Copier","copiedAddres":"Adresse copiée !!!","share":"Partager","shareWithFriends":"Partager avec des amis","rate":"Évaluez nous","cryptocurrencies":"Crypto-monnaies","buyMeACoffee":"Achetez-moi un café","buyMeACryptoCoffee":"Achetez-moi un café crypto","translate":"Traduire","shareMessage":"Je planifie ma semaine avec ImPlanner, un planificateur hebdomadaire minimaliste gratuit axé sur la confidentialité et je pense que vous l\'aimerez aussi. \\nVérifiez-le!","supportUs":"Soutenez-nous","splashMessage":"Vous aimez ImPlanner ? \\nVous pouvez soutenir le projet ici !"},"about":{"about":"à propos à propos","madeWith":"Fabriqué avec","inCuba":"à Cuba","dev":"Développeur et concepteur","devName":"Manuel Ernesto García","version":"Version","desc":"ImPlanner est un agenda hebdomadaire minimaliste axé sur la confidentialité.","site":"Visiter le site Web","contributors":"Contributrice","sponsors":"Commanditaires","collaborators":"Collaborateurs","email":"E-mail","blog":"Blogue","license":"Licence"},"generatedData":{"data2":"Cliquez pour terminer la tâche","data3":"Double-cliquez pour éditer la tâche","data4":"Passez la souris pour afficher le reste du texte de cette tâche.","data5":"Vous pouvez faire glisser et déposer les tâches","data6":"Ceci est une liste personnalisée","data7":"Vous pouvez créer de nouvelles listes à partir de la barre latérale","data8":"Vous pouvez également les masquer dans le menu des paramètres","data9":"Pommes","data10":"Rafraîchissements","data11":"Cliquez sur les trois points pour voir plus de détails sur cette tâche","data12":"Ouvrez rapidement les détails de la tâche avec le clic central de la souris","list1":"Liste personnalisée","list2":"Liste d\'épicerie","list3":"Idées","subtask1":"Je suis une sous-tâche","subtask2":"Cliquez pour terminer la sous-tâche","desc1":"Ici, vous pouvez définir vos notes sur cette tâche. Double-cliquez pour modifier les notes."},"tips":{"tips":"des astuces","next":"Prochain conseil","back":"Conseil précédent","tip1":"Vous pouvez créer une nouvelle tâche en cliquant sur n\'importe quelle zone des listes.","tip2":"Les tâches peuvent être glissées et déposées d\'une liste à une autre ou en modifiant leur ordre.","tip3":"Pour modifier le nom d\'une liste ou d\'une tâche, double-cliquez dessus.","tip4":"À droite de la date de chaque liste se trouve l\'icône Répéter qui vous permet d\'envoyer toutes les tâches en attente de la liste actuelle au jour suivant.","tip5":"Si vous n\'utilisez pas les listes personnalisées, vous pouvez les masquer dans le menu de configuration.","tip6":"Le calendrier de la barre latérale vous permet de faire défiler rapidement jusqu\'à une date.","tip7":"En plaçant le curseur sur le nom de la liste, l\'icône Marquer tout apparaîtra, cela vous permet de marquer toutes les tâches qu\'une liste contient.","tip8":"Vous pouvez créer une nouvelle liste personnalisée à l\'aide du bouton Ajouter une nouvelle liste situé sur le panneau latéral.","tip9":"Le bouton Démarrer vous place sur la journée en cours.","tip13":"ImPlanner stocke les informations sur votre ordinateur. Si vous souhaitez changer d\'ordinateur ou de navigateur, n\'oubliez pas de créer une sauvegarde. Vous pouvez le faire dans le menu des paramètres.","tip14":"Cliquez et faites glisser la division centrale pour redimensionner la hauteur du calendrier et des listes personnalisées. Double-cliquez dessus pour restaurer sa taille.","tip15":"Vous pouvez modifier le nombre de colonnes et le zoom de l\'application dans le panneau de configuration.","tip16":"Cliquez sur les trois points dans les tâches pour voir les détails.","tip17":"Vous pouvez faire glisser et déposer la sous-tâche dans la fenêtre des détails de la tâche.","tip18":"En haut de la fenêtre des détails de la tâche, vous pouvez modifier le jour ou la liste d\'une tâche."},"welcome":{"next":"Suivant","back":"Précédent","ready":"prêt","allReady":"Tout est prêt","allReadyText":"Tout est prêt pour que vous puissiez profiter de ImPlanner.","allReadySub":"","welcome":"Bienvenue dans ImPlanner","welcomeText":"Le gestionnaire de tâches hebdomadaire minimaliste axé sur la confidentialité. Pour commencer, sélectionnez votre langue.","privacy":"Privacy","privacyText":"Toutes vos données sont stockées sur votre ordinateur. \\nSi vous devez changer d\'ordinateur ou de navigateur, pensez à créer une sauvegarde.","privacySub":"En cas d\'erreurs dans l\'application, vous pouvez envoyer un rapport des erreurs au développeur.","theme":"Thème","themeText":"Vous pouvez choisir entre le thème clair et sombre selon vos préférences."},"ui":{"rmList":"Supprimer la liste","rmListConfirm":"Êtes-vous sûr de vouloir supprimer la liste","repeatingTaskRemoveConfirm":"Voulez-vous vraiment supprimer cette tâche récurrente ?","removeRepeatingTask":"Supprimer la tâche répétitive","cancel":"Annuler","ok":"D\'accord","remove":"Remove","splashSub":"Agenda hebdomadaire minimaliste","mobileWarning":"ImPlanner est une application de bureau et pour l\'instant elle n\'est pas prête à être affichée dans cette résolution. :(","today":"Aujourd\'hui","calendar":"Calendrier","newCustomList":"Nouvelle liste personnalisée","reorderCustomLists":"Réorganiser les listes personnalisées","softwareUpdated":"Logiciel mis à jour","seeChanges":"(Voir les changements)","changeLog":"Journal des modifications","compatible":"Désolé, ImPlanner n\'est pas compatible avec votre navigateur Web. Essayez de le mettre à jour ou d\'en utiliser un autre.","removeList":"Supprimer la liste","completeAll":"Compléter tout","newTask":"Nouvelle tâche","postpone":"Remettre à plus tard","newVersionAvailable":"Nouvelle version disponible","download":"(Télécharger)","sponsoredBy":"Sponsorisé par","updateAll":"Tout mettre à jour","removeAll":"Supprimer tout","recurringTasks":"Tâches récurrentes","undo":"annuler","clearList":"Effacer la liste","clear":"Dégager","clearListConfirm":"Voulez-vous vraiment effacer la liste ?","reorder":"Réorganiser","maximizeCalendarPanel":"Agrandir le panneau du calendrier","restorePanel":"Restaurer la taille du panneau","maximizeListPanel":"Agrandir le panneau de liste","open":"Ouvert","quit":"Quitter","copyTasks":"Copier des tâches","task":"Tâche","Frecuency":"Fréquence"},"todoDetails":{"taskTitle":"Titre de la tâche","notes":"Remarques","markdown":"Style Markdown pris en charge","addSubTask":"Ajouter une sous-tâche","copiedTaskToClipboard":"Texte copié dans le presse-papiers !!!","taskRemoved":"Tâche supprimée !!!","taskDuplicated":"Tâche dupliquée !!!","duplicate":"Dupliquer","subtasks":"Sous-tâches","interval":"Intervalle:","indefinitely":"Indéfiniment","occurrences":"Occurrences","untilDate":"Jusqu\'à ce jour","done":"Fait","cancel":"Annuler","noRepeat":"Pas de répétition","daily":"du quotidien","weekly":"Hebdomadaire","weekdays":"Lun-ven","monthly":"Mensuel","yearly":"Annuel","split":"Diviser","recurrentTaskRemoved":"Tâche récurrente supprimée","time":"Temps","alarm":"Alarme","color":"Couleur","close":"proche","actions":"Actions","customWeekdays":"Jours de semaine personnalisés"},"notifications":{"noPendingTasksToday":"Vous n\'avez aucune tâche planifiée aujourd\'hui.","pendingTasksYesterday":"Vous avez {0} tâches en attente hier.","pendingTasksToday":"Vous avez {0} tâches planifiées aujourd\'hui.","pendingTasksYesterdayAndToday":"Vous avez {0} tâches en attente hier et {1} tâches planifiées aujourd\'hui."}}'
    );
  },
  "9d43": function (e, t, a) {
    "use strict";
    a("fe71");
  },
  a0c0: function (e, t, a) {},
  a695: function (e, t, a) {},
  a82d: function (e, t, a) {},
  b196: function (e, t, a) {
    "use strict";
    a("7807");
  },
  b424: function (e) {
    e.exports = JSON.parse(
      '{"settings":{"settings":"Impostazioni","language":"Lingua","customLists":"Liste personalizzate","darkTheme":"Tema scuro","darkTrayIcon":"Icona del vassoio scuro","darkIcon":"Icona scura","data":"Dati","import":"Importa","export":"Esporta","backup":"Copia di sicurezza:","invalidFile":"File invalido","checkUpdates":"Verifica aggiornamenti all\'avvio","calendar":"Calendario","zoom":"Ingrandimento","columns":"Colonne del calendario","lists_columns":"Colonne degli elenchi personalizzati","goToNewDomain":"Stiamo cambiando il sito Web ImPlanner in un nuovo dominio e questo verrà interrotto il 1 aprile 2022. Per conservare i tuoi dati, devi esportarli da questo dominio e quindi importarli nel nuovo dominio (dal menu di configurazione). Tieni presente che se non esegui la migrazione dei dati, perderai le informazioni memorizzate dal tuo browser in questo dominio. Ci scusiamo per gli eventuali disagi che ciò potrebbe causare.","gotoNewDomainBtn":"Vai al nuovo dominio","general":"Generale","notifications":"Notifiche","display":"Schermo","openOnStartup":"Apri all\'avvio","notificationOnStartup":"Notifica all\'avvio","notificationSound":"Suono di notifica","clearData":"Elimina i dati","exportData":"Esporta dati","importData":"Importa dati","clearDataDetails":"Sei sicuro di voler eliminare tutti i dati dell\'app? Questa azione è irreversibile.","runInBackground":"Esegui in background","runInBackgroundInfo":"Consente alle notifiche di funzionare con l\'app chiusa.\\n \\nQuesta opzione potrebbe presentare problemi per alcune versioni di macOS.","moveOldTasks":"Sposta automaticamente le vecchie attività","importing":"Importazione...","exporting":"Esportazione...","reportErrors":"Invia rapporto errori","compactView":"Vista compatta","behavior":"Comportamento","startCalendarYesterday":"Il calendario inizia ieri","notificationIndicator":"Indicatore di notifica","autoReorderTasks":"Riordina automaticamente le attività","moveCompletedTaskToBottom":"Sposta le attività completate in basso","clear":"Eliminare","fullscreenToDoModal":"Dettagli attività a schermo intero","moveCompletedSubTaskToBottom":"Sposta le attività secondarie completate in basso","weekStartOnMonday":"La settimana inizia lunedì"},"donate":{"contribute":"Contribuisci","contributeSponsor":"Contribuisci / Sponsorizza","supportMessage1":"ImPlanner è un\'applicazione gratuita supportata da utenti come te! \\nSe trovi utile ImPlanner, considera di supportarci in ogni modo possibile. \\nIl tuo supporto fa la differenza. \\nGrazie per aver utilizzato ImPlanner.","supportMessage2":"Il tuo supporto fa la differenza. \\nGrazie per aver supportato ImPlanner 😊","comment":"Invia un parere","crypto":"Cripto","goBack":"Indietro","paymentType":"Tipo di pagamento","address":"Indirizzo","copy":"Copia","copiedAddres":"Indirizzo copiato !!!","share":"Condividi","shareWithFriends":"Condividere con gli amici","rate":"Valutaci","cryptocurrencies":"Criptomonete","buyMeACoffee":"Buy Me A Coffee","buyMeACryptoCoffee":"Buy Me A Crypto Coffee","translate":"Translate","shareMessage":"Sto programmando la mia settimana con ImPlanner, un pianificatore settimanale gratuito e minimalista incentrato sulla privacy e penso che lo adorerai anche tu. \\nControlla!","supportUs":"Supportaci","splashMessage":"Ti piace ImPlanner? \\nPuoi sostenere il progetto qui!"},"about":{"about":"A proposito di","madeWith":"Realizzato","inCuba":"a Cuba","dev":"Sviluppatore e realizzatore","devName":"Manuel Ernesto García","version":"Versione","desc":"ImPlanner è un\'agenda settimanale focalizzata sulla privacy.","site":"Visita il sito internet","contributors":"Contributrici","sponsors":"Sponsors","collaborators":"Collaboratori","email":"E-mail","blog":"Blog","license":"Licenza"},"generatedData":{"data2":"Clicca per completare un\'attività","data3":"Doppio click per modificare un\'attività","data4":"Scorri con il mouse sopra un\'attività per vederne il testo completo.","data5":"Puoi trascinare e rilasciare le attività","data6":"Questa è una lista personalizzata","data7":"Puoi creare una nuova lista dalla barra laterale","data8":"Puoi anche nasconderle tramite il menu impostazioni","data9":"Mele","data10":"Aperitivi analcolici","data11":"Clicca sui tre puntini per visualizzare maggiori dettagli su questa attività","data12":"Apri rapidamente i dettagli dell\'attività con il clic centrale del mouse","list1":"Lista personalizzata","list2":"Lista della spesa","list3":"Ideee","subtask1":"Sono una sotto attività","subtask2":"Clicca per completare la sotto attività","desc1":"Qui puoi impostare le tue annotazioni su questa attività. Doppio click per editare le annotazioni."},"tips":{"tips":"Suggerimenti","next":"Prossimo suggerimento","back":"Suggerimento precedente","tip1":"Puoi creare una nuova attività facendo un click in qualunque punto delle liste.","tip2":"Le attivitià possono essere trascinate e rilasciate da una lista ad un\'altra oppure cambiandole di ordine.","tip3":"Fai doppio click sul nome di una lista o di una attività per editarne il nome.","tip4":"Alla destra della data di ogni lista c\'è l\'icona Snooze che permetterà di spostare tutte le attività della lista stessa selezionata al giorno successivo.","tip5":"Se non stai usando le liste personalizzate, puoi nasconderle tramite il menu impostazioni.","tip6":"Il calendario nella barra laterale ti permetterà di scorrere velocemente ad una data specifica.","tip7":"Posizionando il cursore sul nome di una lista, comparirà l\'icona Seleziona tutto, avrai modo così di selezionare tutte le attività contenute nella lista.","tip8":"Puoi creare una nuova lista personalizzata utilizzando il tasto Aggiungi Nuova Lista, situato nella barra laterale.","tip9":"Il pulsante Inizia ti posizionerà al giorno attuale.","tip13":"ImPlanner salva le informazioni sul tuo computer. Se vuoi cambiare computer o il programma di navigazione, ricordati di eseguire un salvataggio dei dati. Puoi farlo tramite il menu impostazioni.","tip14":"Clicca e trascina la linea centrale divisoria per cambiare le dimensioni dell\'altezza del calendario e delle liste personalizzate. Fai doppio click per ripristinare la dimensione originale.","tip15":"Puoi modificare il numero delle colonne e l\'ingrandimento dell\'applicazione tramite il pannello di configurazione.","tip16":"Clicca sui tre puntini di una attività per vedere i dettagli.","tip17":"Puoi trascinare e rilasciare le sotto attività nella finestra dei dettagli dell\'attività.","tip18":"Nella parte alta della finestra dell\'attività puoi cambiare il giorno oppure la lista dell\'attività."},"welcome":{"next":"Prossimo","back":"Precedente","ready":"pronto","allReady":"Tutto pronto","allReadyText":"Tutto è pronto e ora puoi iniziare a goderti ImPlanner.","allReadySub":"Se hai domande, potrai trovare vari suggerimenti nella barra laterale","welcome":"Benvenuto in ImPlanner","welcomeText":"Gestore delle attività settimanali minimalista, focalizzato sulla privacy. Per iniziare seleziona la tua lingua.","privacy":"Privacy","privacyText":"Tutti i tuoi dati sono archiviati sul tuo computer. \\nSe hai bisogno di cambiare il tuo computer o browser, ricordati di creare un backup.","privacySub":"In caso di errori nell\'app, puoi inviare un report degli errori allo sviluppatore.","theme":"Tema","themeText":"A seconda delle tue preferenze puoi scegliere tra il tema scuro o quello luminoso."},"ui":{"rmList":"Cancella Lista","rmListConfirm":"Sei sicuro di voler cancellare la lista","repeatingTaskRemoveConfirm":"Sei sicuro di voler eliminare questa attività ricorrente?","removeRepeatingTask":"Rimuovi attività ripetuta","cancel":"Annulla","ok":"Ok","remove":"Elimina","splashSub":"Pianificatore settimanale minimalista","mobileWarning":"ImPlanner è un\'applicazione Desktop e per adesso non è in grado di essere visualizzato a questa risoluzione. :(","today":"Oggi","calendar":"Calendario","newCustomList":"Nuova Lista Personalizzata","reorderCustomLists":"Riordina elenchi personalizzati","softwareUpdated":"Software aggiornato","seeChanges":"(Guarda le modifiche)","changeLog":"Log delle modifiche","compatible":"Spiacente, ImPlanner non è compatibile con il tuo navigatore web. Prova ad aggiornarlo o ad usarne un altro.","removeList":"Elimina la lista","completeAll":"Fatto tutto","newTask":"Nuovo compito","postpone":"Posticipa","newVersionAvailable":"Nuova versione disponibile","download":"(Scarica)","sponsoredBy":"Sponsorizzato da","updateAll":"Aggiorna tutto","removeAll":"Cancella tutto","recurringTasks":"Compiti ricorrenti","undo":"Annullare","clearList":"Cancella tutto","clear":"Cancella","clearListConfirm":"Sei sicuro di voler cancellare la lista?","reorder":"Riordina","maximizeCalendarPanel":"Massimizza il pannello del calendario","restorePanel":"Ripristina dimensioni pannello","maximizeListPanel":"Ingrandisci pannello elenco","open":"Aprire","quit":"Uscire","copyTasks":"Copia compiti","task":"Compito","Frecuency":"Frequenza"},"todoDetails":{"taskTitle":"Nome attività","notes":"Note","markdown":"Stile Markdown supportato","addSubTask":"Aggiungi sotto attività","copiedTaskToClipboard":"Testo copiato negli appunti !!!","taskRemoved":"Attività rimossa !!!","taskDuplicated":"Attività duplicata !!!","duplicate":"Duplica","subtasks":"Sottocompiti","interval":"Intervallo:","indefinitely":"Indefinitamente","occurrences":"Occorrenze","untilDate":"Fino a data","done":"Fatto","cancel":"Annulla","noRepeat":"Nessuna ripetizione","daily":"Quotidiano","weekly":"settimanalmente","weekdays":"lun-ven","monthly":"Mensile","yearly":"Annuale","split":"Diviso","recurrentTaskRemoved":"Attività ricorrente rimossa","time":"Orario","alarm":"Allarme","color":"Colore","close":"Chiudere","actions":"Azioni","customWeekdays":"Giorni feriali personalizzati"},"notifications":{"noPendingTasksToday":"Non hai attività programmate oggi.","pendingTasksYesterday":"Hai {0} attività in sospeso ieri.","pendingTasksToday":"Hai {0} attività pianificate oggi.","pendingTasksYesterdayAndToday":"Hai {0} attività in sospeso ieri e {1} attività pianificate oggi."}}'
    );
  },
  b4a1: function (e, t, a) {
    e.exports = a.p + "img/ImPlanner-Logo-Color.4c453658.svg";
  },
  b575: function (e, t, a) {
    "use strict";
    a("c507");
  },
  b5d6: function (e, t, a) {
    "use strict";
    a("f328");
  },
  b6d8: function (e, t, a) {},
  c171: function (e, t, a) {},
  c3a1: function (e, t, a) {
    "use strict";
    a("3829");
  },
  c488: function (e, t, a) {
    "use strict";
    a("a695");
  },
  c507: function (e, t, a) {},
  c8a6: function (e, t, a) {
    "use strict";
    a("535f");
  },
  e0ea: function (e, t, a) {},
  e2c5: function (e, t, a) {
    "use strict";
    a("75ed");
  },
  e87a: function (e) {
    e.exports = JSON.parse(
      '{"settings":{"settings":"설정","language":"언어","customLists":"사용자 지정 목록","darkTheme":"어두운 테마","darkTrayIcon":"다크 트레이 아이콘","darkIcon":"다크 아이콘","data":"데이터","import":"수입","export":"내보내다","backup":"지원:","invalidFile":"유효하지 않은 파일","checkUpdates":"시작 시 업데이트 확인","calendar":"달력","zoom":"줌","columns":"달력 열","lists_columns":"사용자 지정 목록 열","goToNewDomain":"ImPlanner 웹사이트를 새 도메인으로 변경하고 있으며 이 웹사이트는 2022년 4월 1일에 중단됩니다. 데이터를 유지하려면 이 도메인에서 데이터를 내보낸 다음 새 도메인으로 가져와야 합니다(구성 메뉴에서). \\n데이터를 마이그레이션하지 않으면 브라우저에서 이 도메인에 저장한 정보를 잃게 됩니다. \\n불편을 끼쳐드려 죄송합니다.","gotoNewDomainBtn":"새 도메인으로 이동","general":"일반적인","notifications":"알림","display":"표시하다","openOnStartup":"시작 시 열기","notificationOnStartup":"시작 시 알림","notificationSound":"알림 소리","clearData":"데이터 지우기","exportData":"데이터 내보내기","importData":"데이터 가져오기","clearDataDetails":"모든 앱 데이터를 삭제하시겠습니까? \\n이 작업은 되돌릴 수 없습니다.","runInBackground":"백그라운드에서 실행","runInBackgroundInfo":"앱이 닫힌 상태에서 알림이 작동하도록 허용합니다.\\n \\n이 옵션은 일부 macOS 버전에서 문제가 있을 수 있습니다.","moveOldTasks":"오래된 작업을 자동으로 이동","importing":"가져오는 중...","exporting":"내보내기 중...","reportErrors":"오류 보고서 보내기","compactView":"컴팩트 뷰","behavior":"행동","startCalendarYesterday":"어제 일정 시작","notificationIndicator":"알림 표시기","autoReorderTasks":"자동으로 작업 재정렬","moveCompletedTaskToBottom":"완료된 작업을 맨 아래로 이동","clear":"삭제","fullscreenToDoModal":"전체 화면으로 할 일 세부 정보","moveCompletedSubTaskToBottom":"완료된 하위 작업을 맨 아래로 이동","weekStartOnMonday":"주 시작 월요일"},"donate":{"contribute":"기여하다","contributeSponsor":"기부/후원","supportMessage1":"ImPlanner는 귀하와 같은 사용자가 지원하는 무료 애플리케이션입니다! \\nImPlanner가 유용하다고 생각되면 가능한 모든 방법으로 저희를 지원해 주세요. \\n당신의 지원이 차이를 만듭니다. \\nImPlanner를 이용해 주셔서 감사합니다.","supportMessage2":"당신의 지원이 차이를 만듭니다. \\n위크토도 응원해주셔서 감사합니다 😊","comment":"피드백 보내기","crypto":"크립토","goBack":"돌아가기","paymentType":"지불 유형","address":"주소","copy":"복사","copiedAddres":"주소 복사!!!","share":"공유하다","shareWithFriends":"친구와 공유","rate":"우리를 평가","cryptocurrencies":"암호화폐","buyMeACoffee":"커피 사줘","buyMeACryptoCoffee":"크립토 커피를 사주세요","translate":"번역하다","shareMessage":"개인 정보 보호에 중점을 둔 무료 미니멀리스트 주간 플래너인 ImPlanner로 한 주를 계획하고 있으며 여러분도 좋아할 것 같습니다. \\n확인 해봐!","supportUs":"당신의 도움이 필요합니다","splashMessage":"위크토도를 즐기고 계신가요? \\n여기에서 프로젝트를 지원할 수 있습니다!"},"about":{"about":"에 대한","madeWith":"로 만든","inCuba":"쿠바에서","dev":"개발자 및 디자이너","devName":"마누엘 에르네스토 가르시아","version":"버전","desc":"ImPlanner는 개인 정보 보호에 중점을 둔 미니멀리스트 주간 플래너입니다.","site":"웹사이트 방문","contributors":"기여자","sponsors":"스폰서","collaborators":"협력자","email":"이메일","blog":"블로그","license":"특허"},"generatedData":{"data2":"작업을 완료하려면 클릭하세요.","data3":"작업을 편집하려면 두 번 클릭하십시오.","data4":"이 작업에 대한 나머지 텍스트를 표시하려면 마우스를 가져갑니다.","data5":"작업을 끌어다 놓을 수 있습니다.","data6":"이것은 사용자 정의 목록입니다","data7":"사이드 바에서 새 목록을 만들 수 있습니다.","data8":"설정 메뉴에서 숨길 수도 있습니다.","data9":"사과","data10":"청량 음료","data11":"이 작업에 대한 자세한 내용을 보려면 점 3개를 클릭하세요.","data12":"마우스 가운데 버튼으로 빠르게 작업 세부 정보 열기","list1":"사용자 지정 목록","list2":"식료품 목록","list3":"아이디어","subtask1":"나는 부업이다","subtask2":"하위 작업을 완료하려면 클릭하세요.","desc1":"여기에서 이 작업에 대한 메모를 설정할 수 있습니다. \\n메모를 편집하려면 두 번 클릭하십시오."},"tips":{"tips":"팁","next":"다음 팁","back":"이전 팁","tip1":"목록의 아무 영역이나 클릭하여 새 작업을 만들 수 있습니다.","tip2":"한 목록에서 다른 목록으로 또는 순서를 변경하여 작업을 끌어다 놓을 수 있습니다.","tip3":"목록 또는 작업의 이름을 편집하려면 해당 항목을 두 번 클릭합니다.","tip4":"각 목록의 날짜 오른쪽에는 현재 목록의 보류 중인 모든 작업을 다음 날로 보낼 수 있는 다시 알림 아이콘이 있습니다.","tip5":"사용자 지정 목록을 사용하지 않으려면 구성 메뉴에서 숨길 수 있습니다.","tip6":"사이드바의 캘린더를 사용하면 날짜로 빠르게 스크롤할 수 있습니다.","tip7":"목록 이름에 커서를 놓으면 모두 표시 아이콘이 나타나 목록에 포함된 모든 작업을 표시할 수 있습니다.","tip8":"측면 패널에 있는 새 목록 추가 버튼을 사용하여 새 사용자 지정 목록을 만들 수 있습니다.","tip9":"시작 버튼을 누르면 현재 날짜가 표시됩니다.","tip13":"ImPlanner는 컴퓨터에 정보를 저장합니다. \\n컴퓨터나 브라우저를 변경하려면 백업을 생성하는 것을 잊지 마십시오. \\n설정 메뉴에서 할 수 있습니다.","tip14":"중앙 부분을 클릭하고 끌어 달력 및 사용자 지정 목록의 높이 크기를 조정합니다. \\n크기를 복원하려면 두 번 클릭하십시오.","tip15":"구성 패널에서 열 수와 애플리케이션 확대/축소를 수정할 수 있습니다.","tip16":"세부 사항을 보려면 작업에서 세 개의 점을 클릭하십시오.","tip17":"작업 세부 정보 창에서 하위 작업을 끌어다 놓을 수 있습니다.","tip18":"작업 세부 정보 창 상단에서 날짜 또는 작업 목록을 변경할 수 있습니다."},"welcome":{"next":"다음","back":"이전의","ready":"준비가 된","allReady":"모든 준비","allReadyText":"ImPlanner를 즐길 수 있도록 모든 것이 준비되었습니다.","allReadySub":"질문이 있는 경우 사이드바에서 팁을 찾을 수 있습니다.","welcome":"ImPlanner에 오신 것을 환영합니다","welcomeText":"개인 정보 보호에 중점을 둔 Minimalist Weekly Task Manager. \\n시작하려면 언어를 선택하세요.","privacy":"은둔","privacyText":"모든 데이터는 컴퓨터에 저장됩니다. \\n컴퓨터나 브라우저를 변경해야 하는 경우 백업을 생성하는 것을 잊지 마십시오.","privacySub":"앱에 오류가 있는 경우 개발자에게 오류 보고서를 보낼 수 있습니다.","theme":"주제","themeText":"취향에 따라 밝은 테마와 어두운 테마를 선택할 수 있습니다."},"ui":{"rmList":"목록 삭제","rmListConfirm":"목록을 삭제하시겠습니까?","repeatingTaskRemoveConfirm":"이 반복 작업을 삭제하시겠습니까?","removeRepeatingTask":"반복 작업 제거","cancel":"취소","ok":"확인","remove":"삭제","splashSub":"미니멀리스트 주간 플래너","mobileWarning":"ImPlanner는 데스크탑 애플리케이션이며 현재로서는 이 해상도로 표시할 준비가 되지 않았습니다. \\n:(","today":"오늘","calendar":"달력","newCustomList":"새 사용자 지정 목록","reorderCustomLists":"사용자 지정 목록 재정렬","softwareUpdated":"소프트웨어 업데이트","seeChanges":"(변경 사항 참조)","changeLog":"변경 로그","compatible":"죄송합니다. ImPlanner는 웹 브라우저와 호환되지 않습니다. \\n업데이트하거나 다른 것을 사용하십시오.","removeList":"목록 삭제","completeAll":"모두 완료","newTask":"새 작업","postpone":"연기하다","newVersionAvailable":"새 버전 사용 가능","download":"(다운로드)","sponsoredBy":"후원","updateAll":"모두 업데이트","removeAll":"모두 삭제","recurringTasks":"반복 작업","undo":"실행 취소","clearList":"목록 지우기","clear":"분명한","clearListConfirm":"목록을 지우시겠습니까?","reorder":"재 주문","maximizeCalendarPanel":"캘린더 패널 최대화","restorePanel":"패널 크기 복원","maximizeListPanel":"목록 패널 최대화","open":"열려 있는","quit":"그만두다","copyTasks":"복사 작업","task":"일","Frecuency":"빈도"},"todoDetails":{"taskTitle":"작업 제목","notes":"메모","markdown":"마크다운 스타일 지원","addSubTask":"하위 작업 추가","copiedTaskToClipboard":"클립보드에 복사된 텍스트 !!!","taskRemoved":"작업이 제거되었습니다 !!!","taskDuplicated":"작업이 복제되었습니다!!!","duplicate":"중복","subtasks":"하위 작업","interval":"간격:","indefinitely":"무기한","occurrences":"발생","untilDate":"종료일","done":"완료","cancel":"취소","noRepeat":"반복 없음","daily":"일일","weekly":"주간","weekdays":"월-금","monthly":"월간 간행물","yearly":"매년","split":"나뉘다","recurrentTaskRemoved":"반복 작업 제거됨","time":"시간","alarm":"경보","color":"색깔","close":"닫다","actions":"행위","customWeekdays":"맞춤 평일"},"notifications":{"noPendingTasksToday":"오늘은 예약된 작업이 없습니다.","pendingTasksYesterday":"어제 보류 중인 작업이 {0}개 있습니다.","pendingTasksToday":"오늘 예약된 작업이 {0}개 있습니다.","pendingTasksYesterdayAndToday":"어제 보류 중인 작업이 {0}개 있고 오늘 예약된 작업이 {1}개 있습니다."}}'
    );
  },
  eb32: function (e) {
    e.exports = JSON.parse('{"version":"2.1.0"}');
  },
  eed0: function (e, t, a) {
    "use strict";
    a("7901");
  },
  f08d: function (e, t, a) {
    "use strict";
    a("7627");
  },
  f1de: function (e, t, a) {},
  f217: function (e) {
    e.exports = JSON.parse(
      '{"settings":{"settings":"Настройки","language":"Язык","customLists":"Пользовательские списки","darkTheme":"Темная тема","darkTrayIcon":"Темная иконка в трее","darkIcon":"Темная иконка","data":"Данные","import":"Импорт","export":"Экспорт","backup":"Резервная копия:","invalidFile":"Неверный файл","checkUpdates":"Проверять обновления при запуске","calendar":"Календарь","zoom":"Увеличить","columns":"Столбцы календаря","lists_columns":"Пользовательские столбцы списков","goToNewDomain":"Мы меняем веб-сайт ImPlanner на новый домен, и этот домен будет прекращен 1 апреля 2022 года. Чтобы сохранить ваши данные, вы должны экспортировать их из этого домена, а затем импортировать в новый домен (из меню конфигурации). Имейте в виду, что если вы не перенесете данные, вы потеряете информацию, которую ваш браузер хранит в этом домене. Приносим извинения за возможные неудобства.","gotoNewDomainBtn":"Перейти на новый домен","general":"Общий","notifications":"Уведомления","display":"Отображать","openOnStartup":"Открыть при запуске","notificationOnStartup":"Уведомление при запуске","notificationSound":"Звук уведомления","clearData":"Очистить данные","exportData":"Экспорт данных","importData":"Импорт данных","clearDataDetails":"Вы уверены, что хотите удалить все данные приложения? Это действие необратимо.","runInBackground":"Работать в фоновом режиме","runInBackgroundInfo":"Позволяет уведомлениям работать с закрытым приложением.\\n \\nЭта опция может иметь проблемы для некоторых версий macOS.","moveOldTasks":"Автоматически перемещать старые задачи","importing":"Импорт...","exporting":"Экспорт...","reportErrors":"Отправить отчет об ошибках","compactView":"Компактный вид","behavior":"Поведение","startCalendarYesterday":"Календарь начинается вчера","notificationIndicator":"Индикатор уведомлений","autoReorderTasks":"Автоматически переупорядочивать задачи","moveCompletedTaskToBottom":"Переместить выполненные задачи вниз","clear":"Удалить","fullscreenToDoModal":"Подробная информация о делах в полноэкранном режиме","moveCompletedSubTaskToBottom":"Переместить выполненные подзадачи вниз","weekStartOnMonday":"Неделя начинается в понедельник"},"donate":{"contribute":"Способствовать","contributeSponsor":"Поддержать / Спонсировать","supportMessage1":"ImPlanner — это бесплатное приложение, поддерживаемое такими же пользователями, как и вы! \\nЕсли вы найдете ImPlanner полезным, поддержите нас любым возможным способом. \\nВаша поддержка имеет значение. \\nСпасибо за использование ImPlanner.","supportMessage2":"Ваша поддержка имеет значение. \\nСпасибо за поддержку ImPlanner 😊","comment":"Оставить комментарий","crypto":"крипто","goBack":"Вернуться","paymentType":"Тип платежа","address":"Адрес","copy":"Копировать","copiedAddres":"Адрес скопирован !!!","share":"Поделиться","shareWithFriends":"Поделиться с друзьями","rate":"Оцените нас","cryptocurrencies":"Криптовалюты","buyMeACoffee":"Купи мне кофе","buyMeACryptoCoffee":"Купи мне крипто-кофе","translate":"Перевести","shareMessage":"Я планирую свою неделю с помощью ImPlanner, бесплатного минималистского еженедельного планировщика, ориентированного на конфиденциальность, и я думаю, что вам это тоже понравится. \\nПроверьте это!","supportUs":"Поддерживать нас","splashMessage":"Наслаждаетесь ImPlanner? \\nПоддержать проект можно здесь!"},"about":{"about":"О нас","madeWith":"Сделано с","inCuba":"на Кубе","dev":"Разработчик и дизайнер","devName":"Мануэль Эрнесто Гарсия","version":"Версия","desc":"ImPlanner - минималистичный еженедельник, ориентированный на конфиденциальность.","site":"Посетить веб-сайт","contributors":"Авторы","sponsors":"Спонсоры","collaborators":"Соавторы","email":"Электронная почта","blog":"Блог","license":"Лицензия"},"generatedData":{"data2":"Нажмите, чтобы выполнить задачу","data3":"Дважды щелкните для редактирования задачи","data4":"Наведите указатель мыши, чтобы отобразить остальной текст для этой задачи.","data5":"Задачи можно перетаскивать","data6":"Это настраиваемый список","data7":"Вы можете создавать новые списки из боковой панели","data8":"Вы также можете скрыть их в меню настроек","data9":"Яблоки","data10":"Закуски","data11":"Нажмите на три точки, чтобы увидеть более подробную информацию об этой задаче.","data12":"Быстрое открытие сведений о задаче средним щелчком мыши","list1":"Пользовательский список","list2":"Список покупок","list3":"Идеи","subtask1":"Я подзадача","subtask2":"Нажмите, чтобы завершить подзадачу","desc1":"Здесь вы можете сделать заметки об этой задаче. Дважды щелкните, чтобы редактировать заметки."},"tips":{"tips":"Советы","next":"Следующий совет","back":"Предыдущий совет","tip1":"Вы можете создать новую задачу, щелкнув любую область списков.","tip2":"Задачи можно перетаскивать из одного списка в другой или менять их порядок.","tip3":"Чтобы изменить название списка или задачи, дважды щелкните по нему.","tip4":"Справа от даты каждого списка находится значок «Отложить», который позволяет вам отправить все отложенные задачи текущего списка на следующий день.","tip5":"Если вы не собираетесь использовать настраиваемые списки, вы можете скрыть их в меню конфигурации.","tip6":"Календарь на боковой панели позволяет быстро перейти к дате.","tip7":"При наведении курсора на название списка появится значок Отметить все , который позволяет отметить все задачи, которые содержит список.","tip8":"Вы можете создать новый настраиваемый список, используя кнопку Добавить новый список, расположенную на боковой панели.","tip9":"Кнопка Пуск помещает вас в текущий день.","tip13":"ImPlanner хранит информацию на вашем компьютере. Если вы хотите сменить компьютер или браузер, не забудьте создать резервную копию. Это можно сделать в меню настроек.","tip14":"Нажмите и перетащите центральную дивизию, чтобы изменить размер высоты календаря и пользовательских списков. Дважды щелкните по нему, чтобы восстановить его размер.","tip15":"Вы можете изменить количество столбцов и зума приложения на панели конфигурации.","tip16":"Щелкните три точки в задачах, чтобы просмотреть подробности.","tip17":"Вы можете перетащить подзадачу в окно сведений о задаче.","tip18":"В верхней части окна сведений о задаче вы можете изменить день или список задачи."},"welcome":{"next":"Далее","back":"Назад","ready":"готово","allReady":"Все готово","allReadyText":"Все готово, так что вы можете наслаждаться ImPlanner.","allReadySub":"Если у вас есть вопросы, вы можете найти советы на боковой панели","welcome":"Добро пожаловать в ImPlanner","welcomeText":"Минималистичный еженедельный диспетчер задач, ориентированный на конфиденциальность. Для начала выберите свой язык.","privacy":"Конфиденциальность","privacyText":"Все ваши данные хранятся на вашем компьютере. \\nЕсли вам нужно сменить компьютер или браузер, не забудьте создать резервную копию.","privacySub":"В случае ошибок в приложении вы можете отправить отчет об ошибках разработчику.","theme":"Тема","themeText":"Вы можете выбрать между светлой и темной темой в соответствии с вашими предпочтениями."},"ui":{"rmList":"Удалить список","rmListConfirm":"Вы действительно хотите удалить список","repeatingTaskRemoveConfirm":"Вы уверены, что хотите удалить эту повторяющуюся задачу?","removeRepeatingTask":"Удалить повторяющуюся задачу","cancel":"Отменить","ok":"Ok","remove":"Удалить","splashSub":"Минималистский еженедельник","mobileWarning":"ImPlanner - это настольное приложение, и пока оно не готово для отображения в этом разрешении. :(","today":"Сегодня","calendar":"Календарь","newCustomList":"Новый настраиваемый список","reorderCustomLists":"Изменение порядка пользовательских списков","softwareUpdated":"Программное обеспечение обновлено","seeChanges":"(См. изменения)","changeLog":"Журнал изменений","compatible":"К сожалению, ImPlanner несовместим с вашим веб-браузером. Попробуйте обновить его или воспользуйтесь другим.","removeList":"Удалить список","completeAll":"Завершить все","newTask":"Новое задание","postpone":"Откладывать","newVersionAvailable":"Доступна новая версия","download":"(Скачать)","sponsoredBy":"При финансовой поддержке","updateAll":"Обновить все","removeAll":"Удалить все","recurringTasks":"Повторяющиеся задачи","undo":"Отменить","clearList":"Очистить список","clear":"Очистить","clearListConfirm":"Вы уверены, что хотите очистить список?","reorder":"Изменение порядка","maximizeCalendarPanel":"Развернуть панель календаря","restorePanel":"Восстановить размер панели","maximizeListPanel":"Развернуть панель списка","open":"Открыть","quit":"Выход","copyTasks":"Копировать задачи","task":"Задача","Frecuency":"Частота"},"todoDetails":{"taskTitle":"Заголовок задачи","notes":"Примечания","markdown":"Поддерживается стиль Markdown","addSubTask":"Добавить подзадачу","copiedTaskToClipboard":"Текст скопирован в буфер обмена !!!","taskRemoved":"Задача удалена !!!","taskDuplicated":"Задача дублирована !!!","duplicate":"Дублировать","subtasks":"Подзадачи","interval":"Интервал:","indefinitely":"Бессрочно","occurrences":"Вхождения","untilDate":"До даты","done":"Сделанный","cancel":"Отмена","noRepeat":"Нет повтора","daily":"Повседневная","weekly":"Еженедельно","weekdays":"пн-пт","monthly":"Ежемесячно","yearly":"Ежегодно","split":"Разделить","recurrentTaskRemoved":"Повторяющаяся задача удалена","time":"Время","alarm":"Будильник","color":"Цвет","close":"Закрывать","actions":"Действия","customWeekdays":"Пользовательские дни недели"},"notifications":{"noPendingTasksToday":"У вас нет запланированных задач на сегодня.","pendingTasksYesterday":"Вчера у вас было {0} ожидающих выполнения задач.","pendingTasksToday":"У вас сегодня запланировано {0} задач.","pendingTasksYesterdayAndToday":"У вас есть {0} отложенных задач вчера и {1} запланированных задач сегодня."}}'
    );
  },
  f328: function (e, t, a) {},
  fa45: function (e) {
    e.exports = JSON.parse(
      '{"settings":{"settings":"Configuración","language":"Lenguaje","customLists":"Listas Personalizadas","darkTheme":"Tema Oscuro","darkTrayIcon":"Icono de bandeja oscuro","darkIcon":"Icono oscuro","data":"Datos","import":"Importar","export":"Exportar","backup":"Copia de Seguridad:","invalidFile":"Archivo Inválido","checkUpdates":"Buscar actualizaciones al inicio","calendar":"Calendario","zoom":"Zoom","columns":"Columnas del calendario","lists_columns":"Columnas de listas personalizadas","goToNewDomain":"Estamos cambiando el sitio web de ImPlanner a un nuevo dominio y este se suspenderá el 1 de abril de 2022. Para conservar sus datos, debe exportarlos desde este dominio y luego importarlos en el nuevo dominio (Desde el menú de configuración). Tenga en cuenta que si no migra los datos, perderá la información que su navegador almacena en este dominio. Lamentamos cualquier inconveniente que esto pueda causar.","gotoNewDomainBtn":"Ir al nuevo dominio","general":"General","notifications":"Notificaciones","display":"Vista","openOnStartup":"Abrir al inicio","notificationOnStartup":"Notificación al iniciar","notificationSound":"Sonido de notificaciones","clearData":"Borrar datos","exportData":"Exportar datos","importData":"Importar datos","clearDataDetails":"¿Está seguro de que desea eliminar todos los datos de la aplicación? Esta acción es irreversible.","runInBackground":"Ejecutar en segundo plano","runInBackgroundInfo":"Permite que las notificaciones funcionen con la aplicación cerrada.\\n \\nEsta opción puede tener problemas para algunas versiones de macOS.","moveOldTasks":"Mover tareas antiguas automáticamente","importing":"Importando...","exporting":"Exportando...","reportErrors":"Enviar informe de errores","compactView":"Vista compacta","behavior":"Comportamiento","startCalendarYesterday":"El calendario empieza ayer","notificationIndicator":"Indicador de notificación","autoReorderTasks":"Reordenar tareas automáticamente","moveCompletedTaskToBottom":"Mover las tareas completadas al final"},"donate":{"contribute":"Contribuir","contributeSponsor":"Contribuir / Patrocinar","supportMessage1":"¡ImPlanner es una aplicación gratuita respaldada por usuarios como tú! \\nSi encuentra útil ImPlanner, considere apoyarnos de cualquier manera que pueda. \\nTu apoyo hace la diferencia. \\nGracias por usar ImPlanner.","supportMessage2":"Tu apoyo hace la diferencia. \\nGracias por apoyar a ImPlanner 😊","comment":"Enviar Comentario","crypto":"Cripto","goBack":"Ir Atrás","paymentType":"Tipo de Pago","address":"Dirección","copy":"Copiar","copiedAddres":"¡¡¡Dirección Copiada!!!","share":"Compartir","shareWithFriends":"Compartir con amigos","rate":"Califícanos","cryptocurrencies":"Criptomonedas","buyMeACoffee":"Cómprame un café","buyMeACryptoCoffee":"Invítame a un café","translate":"Traducir","shareMessage":"Estoy programando mi semana con ImPlanner, un planificador semanal minimalista gratuito enfocado en la privacidad y espero que te encante.\\n¡Pruébalo!","supportUs":"Apóyanos","splashMessage":"¿Disfrutando de ImPlanner? \\n¡Puedes apoyar el proyecto aquí!"},"about":{"about":"Acerca de","madeWith":"Hecho con","inCuba":"en Cuba","dev":"Desarrollador y Diseñador","devName":"Manuel Ernesto García","version":"Versión","desc":"ImPlanner es un Planificador Semanal Minimalista enfocado en la privacidad.","site":"Visita el sitio web","contributors":"Contribuidores","sponsors":"Patrocinadores","collaborators":"Colaboradores","email":"Correo electrónico","blog":"Blog","license":"Licencia"},"generatedData":{"data2":"Clic para completar tarea","data3":"Doble clic para editar tarea","data4":"Sitúa el cursor encima para mostrar el resto del texto de esta tarea.","data5":"Puedes arrastrar y soltar las tareas","data6":"Esto es una lista personalizada","data7":"Puedes crear nuevas listas desde la barra lateral","data8":"También puedes ocultarlas en el menú de opciones","data9":"Manzanas","data10":"Refrescos","data11":"Haga clic en los tres puntos para ver más detalles sobre esta tarea","data12":"Abra los detalles de la tarea rápidamente con el clic central del ratón","list1":"Lista Personalizada","list2":"Lista de Compras","list3":"Ideas","subtask1":"Soy una subtarea","subtask2":"Haga clic para completar la subtarea","desc1":"Aquí puede configurar sus notas sobre esta tarea. Haga doble clic para editar las notas."},"tips":{"tips":"Consejos","next":"Siguiente Consejo","back":"Consejo Anterior","tip1":"Puedes crear una nueva tarea cliqueando en cualquier área de las listas.","tip2":"Las tareas se pueden arrastrar y soltar de una lista a otra o cambiando su orden.","tip3":"Para editar el nombre de una lista o una tarea haz doble clic sobre ella.","tip4":"A la derecha de la fecha de cada lista se encuentra el icono Posponer el cual te permite enviar al próximo día todas las tareas pendientes de la lista actual.","tip5":"Si no vas a utilizar las listas personalizadas, puedes ocultarlas en menú de configuración.","tip6":"El calendario en la barra lateral te permite desplazarte rápidamente a una fecha.","tip7":"Situando el cursor en el nombre de la lista aparecerá el icono Completar Todo, este te permite marcar todas las tareas que contiene una lista.","tip8":"Puedes crear una nueva lista personalizada utilizando el botón de Adicionar Nueva Lista situado en el panel lateral.","tip9":"El botón Inicio te sitúa en el día actual.","tip13":"ImPlanner almacena la información en tu equipo. Si deseas cambiar de equipo o navegador recuerda crear una copia de seguridad. Puedes hacerlo en el menú de configuración.","tip14":"Haz clic y arrastra la división central para redimensionar la altura del calendario y las listas personalizadas. Haz doble clic sobre ella para restablecer su tamaño.","tip15":"Puedes modificar la cantidad de columnas y el Zoom de la aplicación en el panel de configuración.","tip16":"Haga clic en los tres puntos en las tareas para ver los detalles.","tip17":"Puede arrastrar y soltar la subtarea en la ventana de detalles de la tarea.","tip18":"En la parte superior de la ventana de detalles de la tarea, puede cambiar el día o la lista de una tarea."},"welcome":{"next":"Siguiente","back":"Anterior","ready":"listo","allReady":"Todo listo","allReadyText":"Ya todo está listo para que puedas disfrutar de ImPlanner.","allReadySub":"Si tienes alguna duda puedes encontrar consejos en la barra lateral","welcome":"Bienvenido a ImPlanner","welcomeText":"El Gestor de Tareas Semanales Minimalista enfocado en la privacidad. Para comenzar selecciona tu idioma.","privacy":"Privacidad","privacyText":"Todos sus datos se almacenan en su computadora. \\nSi necesita cambiar su computadora o navegador, recuerde crear una copia de seguridad.","privacySub":"En caso de errores en la aplicación, puede enviar un informe de los errores al desarrollador.","theme":"Tema","themeText":"Puedes seleccionar entre el tema claro y oscuro según prefieras."},"ui":{"rmList":"Eliminar Lista","rmListConfirm":"Estás seguro de que deseas eliminar la lista","repeatingTaskRemoveConfirm":"¿Está seguro de que desea eliminar esta tarea recurrente?","removeRepeatingTask":"Eliminar tarea repetitiva","cancel":"Cancelar","ok":"Ok","remove":"Eliminar","splashSub":"Planificador Semanal Minimalista","mobileWarning":"ImPlanner es una aplicación de Escritorio y por ahora no esta lista para mostrarse en esta resolución. :(","today":"Hoy","calendar":"Calendario","newCustomList":"Nueva Lista Personalizada","reorderCustomLists":"Reordenar listas personalizadas","softwareUpdated":"Software Actualizado","seeChanges":"(Ver Cambios)","changeLog":"Lista de Cambios","compatible":"Lo sentimos, ImPlanner no es compatible con tu navegador Web. Intenta actualizarlo o utilizar otro.","removeList":"Eliminar Lista","completeAll":"Completar Todo","newTask":"Nueva tarea","postpone":"Posponer","newVersionAvailable":"Nueva versión disponible","download":"(Descargar)","sponsoredBy":"Patrocinado por","updateAll":"Actualizar todo","removeAll":"Eliminar todos","recurringTasks":"Tareas recurrentes","undo":"Deshacer","clearList":"Limpiar lista","clear":"Borrar","clearListConfirm":"¿Estás seguro de que quieres borrar la lista?","reorder":"Reordenar","maximizeCalendarPanel":"Maximizar panel de calendario","restorePanel":"Restaurar tamaño del panel","maximizeListPanel":"Maximizar panel de lista","open":"Abrir","quit":"Salir","copyTasks":"Copiar tareas","task":"Tarea","Frecuency":"Frecuencia"},"todoDetails":{"taskTitle":"Título de la tarea","notes":"Notas","markdown":"Estilo Markdown","addSubTask":"Agregar subtarea","copiedTaskToClipboard":"¡Texto Copiado al Portapapeles!!!","taskRemoved":"¡Tarea Eliminada!!!","taskDuplicated":"¡Tarea Duplicada!!!","duplicate":"Duplicar","subtasks":"Subtareas","interval":"Intervalo:","indefinitely":"Indefinidamente","occurrences":"Ocurrencias","untilDate":"Hasta la fecha","done":"Hecho","cancel":"Cancelar","noRepeat":"Sin repetición","daily":"Diariamente","weekly":"Semanalmente","weekdays":"Lun-Vie","monthly":"Mensual","yearly":"Anual","split":"Separar","recurrentTaskRemoved":"Tarea recurrente eliminada","time":"Tiempo","alarm":"Alarma","color":"Color","close":"Cerca","actions":"Acciones"},"notifications":{"noPendingTasksToday":"No tienes tareas programadas hoy.","pendingTasksYesterday":"Tienes {0} tareas pendientes ayer.","pendingTasksToday":"Tienes {0} tareas programadas hoy.","pendingTasksYesterdayAndToday":"Tienes {0} tareas pendientes ayer y {1} tareas programadas hoy."}}'
    );
  },
  fe71: function (e, t, a) {},
  });
  //# sourceMappingURL=app.43a8e80f.js.map
  