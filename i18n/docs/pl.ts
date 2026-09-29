// Polski
import type { Docs } from './types';

export const docs: Docs = {
  meta: {
    home: {
      title: 'Penko Plaza od Penko Software | Darmowe aplikacje i Penko Vox: Japanese',
      description: 'Darmowe, prywatne aplikacje open source od Penko Software oraz Penko Vox: Japanese, aplikacja z AI offline do nauki japońskiego, teraz we wczesnym dostępie na Steam.',
    },
    plazaPrivacy: {
      title: 'Polityka prywatności | Penko Plaza',
      description: 'Polityka prywatności Penko Plaza i jego darmowych aplikacji open source. Nie zbieramy danych osobowych.',
    },
    products: {
      title: 'Aplikacje płatne | Penko Software',
      description: 'Płatne aplikacje od Penko Software, które finansują nasze darmowe aplikacje open source w Penko Plaza. Zaczynamy od Penko Vox: Japanese.',
    },
    vox: {
      title: 'Penko Vox: Japanese | Nauka japońskiego z AI offline',
      description: 'Ucz się japońskiego, rozmawiając. Penko Vox: Japanese to prywatny tutor AI działający offline, z 38 scenariuszami rozmów od JLPT N5 do N1, rozmowami głosowymi i RPG Kotoba Islands. Teraz we wczesnym dostępie na Steam.',
    },
    voxPrivacy: {
      title: 'Polityka prywatności | Penko Vox: Japanese',
      description: 'Polityka prywatności Penko Vox: Japanese. AI, rozpoznawanie i synteza mowy działają lokalnie; nie zbieramy danych osobowych.',
    },
    voxTerms: {
      title: 'Warunki użytkowania (EULA) | Penko Vox: Japanese',
      description: 'Umowa licencyjna użytkownika końcowego i warunki użytkowania Penko Vox: Japanese.',
    },
    voxGuide: {
      title: 'Przewodnik na start | Penko Vox: Japanese',
      description: 'Jak skonfigurować Penko Vox: Japanese i w pełni z niego korzystać: wymagania, konfiguracja mikrofonu, rozmowy, Kotoba Islands, Study Hub i rozwiązywanie problemów.',
    },
    voxPress: {
      title: 'Materiały prasowe | Penko Vox: Japanese',
      description: 'Materiały prasowe Penko Vox: Japanese: karta informacyjna, opisy, logotypy i kontakt.',
    },
  },

  common: {
    lastUpdated: 'Ostatnia aktualizacja',
    updatedDate: '29 września 2026',
    translationNotice: 'To tłumaczenie zostało przygotowane dla wygody. W razie rozbieżności z wersją angielską obowiązuje wersja angielska.',
    onThisPage: 'Na tej stronie',
    privacy: 'Prywatność',
    terms: 'Warunki (EULA)',
    guide: 'Poradnik',
    press: 'Materiały prasowe',
    comingSoon: 'Wkrótce',
    learnMore: 'Dowiedz się więcej',
  },

  products: {
    title: 'Aplikacje płatne',
    intro: 'Specjalistyczne aplikacje od Penko Software. Każdy zakup finansuje darmowe aplikacje open source z Penko Plaza.',
    voxJapaneseDesc: 'Ucz się japońskiego, rozmawiając. Prywatny, offline\'owy tutor AI ze scenariuszami rozmów na wszystkich poziomach JLPT N5–N1, naturalnymi rozmowami głosowymi i grą RPG Kotoba Islands.',
    teaserTitle: 'Więcej już wkrótce',
    teaserBody: 'Pracujemy nad nowymi aplikacjami. Obserwuj Penko Software na Steam i GitHub, aby dowiedzieć się o nich jako pierwszy.',
    whyTitle: 'Dlaczego płatne aplikacje?',
    whyBody: [
      'Aplikacje Penko Plaza są darmowe, open source na licencji GPL-3.0 i takie pozostaną. Tworzenie i utrzymywanie ich wymaga czasu, dlatego finansujemy tę pracę, tworząc niewielką liczbę specjalistycznych aplikacji płatnych.',
      'Nasze płatne aplikacje mają zamknięty kod źródłowy i są sprzedawane w sklepach takich jak Steam. Kierują się tymi samymi wartościami: działają na Twoim urządzeniu, działają offline i nie zbierają Twoich danych osobowych.',
    ],
  },

  vox: {
    heroTitle: 'Ucz się japońskiego, rozmawiając',
    priceNote: 'Cena zależy od regionu. Aktualną cenę znajdziesz na Steam.',
    hardwareNote: 'Uruchamia pełny model AI na Twoim komputerze: wymaga procesora z AVX2 i co najmniej 16 GB RAM.',
    checkRequirements: 'Sprawdź wymagania',
    media: {
      title: 'Zobacz, jak działa',
      playTrailer: 'Odtwórz zwiastun',
      trailerNotice: 'Zwiastun jest przesyłany strumieniowo ze Steam po naciśnięciu przycisku odtwarzania.',
      screenshot: 'Zrzut ekranu {n}',
      previous: 'Poprzedni zrzut ekranu',
      next: 'Następny zrzut ekranu',
      close: 'Zamknij',
    },
    sectionFeatures: 'Funkcje',
    pillarsTitle: 'Jak to działa: wszystko działa na Twoim komputerze',
    pillars: [
      { title: 'Słucha', body: 'Rozpoznawanie mowy i analiza Twojego japońskiego słowo po słowie, wykonywane lokalnie.' },
      { title: 'Myśli', body: 'Offline\'owy tutor AI podtrzymuje rozmowę i dostosowuje historię do tego, co mówisz.' },
      { title: 'Poprawia', body: 'Delikatne poprawki są wplecione w dialog, dzięki czemu uczysz się bez przerywania rozmowy.' },
      { title: 'Mówi', body: 'Naturalnie brzmiąca japońska mowa, generowana na Twoim komputerze.' },
    ],
    features: [
      { title: 'Kotoba Islands', body: 'Gra RPG, w której eksplorujesz świat i swobodnie rozmawiasz z każdym mieszkańcem, używając japońskiego, którego się uczysz.' },
      { title: 'Naturalne rozmowy głosowe', body: 'Mów na głos, z naturalną wymianą głosu. Możesz przerywać, a usuwanie echa pozwala korzystać z głośników.' },
      { title: 'Study Hub i słownik', body: 'Słowa, które poznajesz, trafiają do powtórek planowanych metodą powtórek w odstępach FSRS, a offline\'owy słownik pozwala dotknąć dowolnego słowa, by je sprawdzić.' },
      { title: 'Ćwiczenie pisania kana', body: 'Ćwicz pisanie hiragany i katakany z natychmiastową informacją zwrotną.' },
      { title: 'Biegłość przez używanie', body: 'Twoje postępy rosną, gdy poprawnie użyjesz słowa lub struktury gramatycznej w prawdziwej rozmowie, a nie przez przeglądanie fiszek.' },
      { title: 'Prywatnie i offline', body: 'Twój głos, wyszukiwania i rozmowy nigdy nie opuszczają Twojego komputera. Bez kont, bez chmury, bez telemetrii.' },
      { title: 'Na zawsze Twoje', body: 'Jednorazowy zakup. Bez subskrypcji, bez limitów tokenów i bez progów użycia.' },
    ],
    steamFeatures: 'Osiągnięcia Steam · Steam Cloud · Rodzinne udostępnianie',
    earlyAccess: {
      title: 'Plan wczesnego dostępu',
      why: 'Nauka języków z lokalną AI zmienia się szybko, dlatego wystartowaliśmy we wczesnym dostępie, by kształtować Penko Vox razem z uczniami i osobami uczącymi się języków.',
      plan: 'Pełne wydanie planujemy na sierpień 2027. Do tego czasu aktualizacje będą regularnie dodawać treści i ulepszenia.',
      fullVersionTitle: 'Planowane w pełnej wersji',
      fullVersion: [
        'Znacznie większa biblioteka scenariuszy rozmów, z celem ponad 100',
        'Więcej wyspecjalizowanych ścieżek nauki JLPT',
        'Więcej opcji głosu w syntezie mowy',
        'Głębsza analityka postępów i więcej funkcji Steam',
      ],
      pricing: 'W trakcie wczesnego dostępu cena jest niższa i będzie stopniowo rosnąć wraz z premierą większych aktualizacji.',
      community: 'Czytamy fora Społeczności Steam i prowadzimy tam ankiety, by gracze mogli głosować na kolejne scenariusze.',
    },
    requirements: {
      title: 'Wymagania systemowe',
      intro: 'Penko Vox uruchamia pełny model językowy AI na Twoim komputerze, więc wydajność zależy od sprzętu. Wymagany jest procesor z obsługą AVX2.',
      minimum: 'Minimalne',
      recommended: 'Zalecane',
      labels: { os: 'System', processor: 'Procesor', memory: 'Pamięć', graphics: 'Grafika', storage: 'Miejsce na dysku', sound: 'Dźwięk', notes: 'Uwagi' },
      windows: {
        minimum: {
          os: 'Windows 10 (64-bitowy)',
          processor: 'Czterordzeniowy procesor z AVX2 (Intel Core i5-8400 / AMD Ryzen 3 3100)',
          memory: '16 GB RAM',
          graphics: 'Intel UHD Graphics 630 / AMD Radeon Vega 8 (DirectX 11)',
          storage: '15 GB wolnego miejsca',
          sound: 'Karta dźwiękowa zgodna z Windows',
          notes: 'Wymagana obsługa AVX2; zdecydowanie zalecany dysk SSD',
        },
        recommended: {
          os: 'Windows 11 (64-bitowy)',
          processor: '6 rdzeni / 12 wątków lub lepszy (Intel Core i5-12400 / AMD Ryzen 5 5600X)',
          memory: '32 GB RAM',
          graphics: 'NVIDIA GeForce RTX 3050 / RTX 3060 (4 GB+ VRAM) lub AMD Radeon RX 6600 (DirectX 12)',
          storage: '20 GB wolnego miejsca',
          sound: 'Karta dźwiękowa zgodna z Windows',
          notes: 'Dysk SSD i dedykowana karta graficzna zapewniają najszybsze odpowiedzi',
        },
      },
      linux: {
        minimum: {
          os: 'SteamOS 3.0 lub nowoczesny Linux (Fedora 40+, Ubuntu 22.04+)',
          processor: 'Czterordzeniowy procesor z AVX2 (APU Steam Deck / AMD Ryzen 3 / Intel Core i5)',
          memory: '16 GB RAM',
          graphics: 'Zintegrowana lub dedykowana karta graficzna z obsługą Vulkan',
          storage: '15 GB wolnego miejsca',
          sound: 'PulseAudio lub PipeWire',
          notes: 'Przetestowano na Steam Deck; wymagane AVX2',
        },
        recommended: {
          os: 'SteamOS 3.5+ lub Fedora 43',
          processor: 'AMD Ryzen 5 5600G / Intel Core i7 (10. generacji) lub lepszy',
          memory: '32 GB RAM',
          graphics: 'Dedykowana karta graficzna z 4 GB+ VRAM i obsługą Vulkan',
          storage: '20 GB wolnego miejsca',
          sound: 'PulseAudio lub PipeWire',
          notes: 'Dysk NVMe SSD zapewnia najszybsze odpowiedzi w rozmowie',
        },
      },
    },
    languages: {
      title: 'Języki',
      intro: 'Ty uczysz się japońskiego; interfejs aplikacji i objaśnienia są dostępne w tych językach.',
      interface: 'Interfejs',
      audio: 'Dźwięk',
      subtitles: 'Napisy',
    },
    aiDisclosure: {
      title: 'O AI',
      body: 'Penko Vox: Japanese korzysta z generatywnej AI działającej lokalnie. Duży model językowy pełni rolę Twojego tutora japońskiego i w czasie rzeczywistym pisze dialogi na podstawie tego, co mówisz, a neuronowy silnik zamiany tekstu na mowę je wypowiada. Jak każda AI, może popełniać błędy, więc traktuj ją jako partnera do ćwiczeń, a nie autorytet.',
    },
    faqTitle: 'Najczęściej zadawane pytania',
    faq: [
      { q: 'Czy potrzebuję połączenia z internetem?', a: 'Nie, aby z niej korzystać. Po zainstalowaniu przez Steam AI, rozpoznawanie mowy i synteza mowy działają na Twoim komputerze.' },
      { q: 'Czy mój głos jest nagrywany lub wysyłany?', a: 'Nie. Dźwięk z mikrofonu jest przetwarzany na Twoim komputerze i nigdy nie jest wysyłany ani zapisywany.' },
      { q: 'Dlaczego potrzeba 16 GB RAM i procesora z AVX2?', a: 'Penko Vox uruchamia pełny model językowy AI lokalnie, a nie na serwerze. Wymaga to pamięci i procesora z instrukcjami AVX2. Dzięki temu Twoje dane pozostają prywatne, a aplikacja działa offline.' },
      { q: 'Czy działa na Steam Deck?', a: 'Tak. Została przetestowana na Steam Deck, a obsługa kontrolera pojawiła się w wersji 2.1 jako funkcja eksperymentalna.' },
      { q: 'Czy jest wersja na Maca?', a: 'Obecnie nie. Penko Vox jest dostępny na Windows i Linux, w tym SteamOS.' },
      { q: 'Jakiego poziomu japońskiego potrzebuję?', a: 'Scenariusze rozmów obejmują poziomy od JLPT N5 (początkujący) do N1 (zaawansowany), a ćwiczenie kana pomaga, jeśli dopiero zaczynasz czytać.' },
      { q: 'Czy to subskrypcja?', a: 'Nie. To jednorazowy zakup na Steam, bez subskrypcji, limitów tokenów i progów użycia.' },
      { q: 'Czy AI zawsze ma rację?', a: 'Nie. To świetny partner do ćwiczeń, ale może popełniać błędy. W przypadku egzaminów lub ważnych tłumaczeń sprawdź wszystko z nauczycielem lub w wiarygodnym źródle.' },
      { q: 'Czy Penko Vox jest open source?', a: 'Nie. Penko Vox to płatna aplikacja o zamkniętym kodzie źródłowym. Jej sprzedaż finansuje Penko Plaza, nasze darmowe aplikacje open source.' },
      { q: 'Czy mogę dostać zwrot pieniędzy?', a: 'Zakupy są realizowane przez Steam, więc obowiązuje polityka zwrotów Steam.' },
    ],
    support: {
      title: 'Wsparcie',
      body: 'Utknąłeś, znalazłeś błąd albo masz pomysł? Przeczytaj poradnik na start, zapytaj na forach Steam lub napisz do nas.',
      email: 'Napisz do wsparcia',
      forums: 'Fora Społeczności Steam',
      guideLink: 'Poradnik na start',
    },
  },

  voxGuide: {
    title: 'Pierwsze kroki z Penko Vox: Japanese',
    intro: 'Wszystko, czego potrzebujesz, by skonfigurować Penko Vox i wycisnąć z niego jak najwięcej.',
    sections: [
      {
        id: 'before-you-start',
        title: 'Zanim zaczniesz',
        blocks: [
          'Penko Vox uruchamia pełny model AI na Twoim komputerze, więc sprawdź, czy Twój sprzęt jest gotowy:',
          { ul: [
            'Procesor z obsługą AVX2. Ma ją większość procesorów Intel od 2013 roku (Haswell) oraz procesory AMD Ryzen. Jeśli nie jesteś pewien, wyszukaj model swojego procesora wraz z frazą „AVX2”.',
            'Co najmniej 16 GB RAM (zalecane 32 GB).',
            '15–20 GB wolnego miejsca, najlepiej na dysku SSD.',
            'Windows 10/11 (64-bitowy), SteamOS lub nowoczesna dystrybucja Linuksa.',
          ] },
          'Pełną listę znajdziesz w wymaganiach systemowych na stronie produktu.',
        ],
      },
      {
        id: 'install',
        title: 'Instalacja i pierwsze uruchomienie',
        blocks: [
          { ol: [
            'Kup i zainstaluj Penko Vox: Japanese na Steam.',
            'Uruchom go z biblioteki Steam.',
            'Pierwsze uruchomienie może potrwać dłużej, ponieważ AI ładuje się po raz pierwszy. Kolejne uruchomienia są szybsze.',
          ] },
        ],
      },
      {
        id: 'microphone',
        title: 'Skonfiguruj mikrofon',
        blocks: [
          'Mówienie to serce Penko Vox. Najlepsze rezultaty daje zestaw słuchawkowy, ale dzięki usuwaniu echa działają też głośniki.',
          { ul: [
            'Windows: otwórz Ustawienia › Prywatność i zabezpieczenia › Mikrofon i upewnij się, że aplikacje klasyczne mogą go używać.',
            'Linux: wybierz swój mikrofon jako domyślne wejście w systemowych ustawieniach dźwięku (PipeWire lub PulseAudio).',
            'Steam Deck: wbudowany mikrofon działa, a zestaw słuchawkowy poprawia rozpoznawanie w hałaśliwych miejscach.',
          ] },
        ],
      },
      {
        id: 'first-conversation',
        title: 'Twoja pierwsza rozmowa',
        blocks: [
          { ol: [
            'Wybierz scenariusz rozmowy odpowiadający Twojemu poziomowi JLPT, od N5 (początkujący) do N1 (zaawansowany), lub stwórz własny scenariusz.',
            'Odpowiadaj po japońsku, na głos lub pisząc.',
            'Tutor odpowiada w roli postaci i wplata poprawki w rozmowę.',
            'Dotknij dowolnego słowa, by sprawdzić je w offline\'owym słowniku.',
          ] },
          { callout: 'Nie martw się błędami. Dzięki nim tutor wie, w czym Ci pomóc.' },
        ],
      },
      {
        id: 'voice-calls',
        title: 'Rozmowy głosowe',
        blocks: [
          'Rozmowy głosowe przypominają rozmowę z człowiekiem: mów naturalnie, rób pauzy i wchodź w słowo. Możesz przerywać tutora, a wymiana głosu dostosowuje się do Ciebie.',
        ],
      },
      {
        id: 'kotoba-islands',
        title: 'Kotoba Islands',
        blocks: [
          'Kotoba Islands to gra RPG wbudowana w Penko Vox. Eksploruj wyspy i swobodnie rozmawiaj z każdym mieszkańcem. Nie ma scenariusza do odegrania, więc używaj japońskiego, który znasz, i wypróbowuj nowe słowa.',
        ],
      },
      {
        id: 'study-hub',
        title: 'Study Hub, słownik i ćwiczenie kana',
        blocks: [
          { ul: [
            'Study Hub: słowa poznane w rozmowach stają się powtórkami, planowanymi metodą powtórek w odstępach FSRS, więc widzisz je tuż przed zapomnieniem. Najlepiej sprawdza się kilka minut dziennie.',
            'Słownik: dotknij dowolnego słowa, by je sprawdzić, całkowicie offline.',
            'Ćwiczenie kana: naucz się pisać hiraganę i katakanę kreska po kresce, z informacją zwrotną w czasie rzeczywistym.',
          ] },
        ],
      },
      {
        id: 'progress',
        title: 'Jak działają postępy',
        blocks: [
          'Biegłość rośnie, gdy poprawnie użyjesz słowa lub struktury gramatycznej w prawdziwej rozmowie. Powtórki pomagają zapamiętywać, ale liczy się używanie języka.',
        ],
      },
      {
        id: 'controller',
        title: 'Kontroler i Steam Deck',
        blocks: [
          'Obsługa kontrolera pojawiła się w wersji 2.1 i jest eksperymentalna. Jeśli coś nie reaguje zgodnie z oczekiwaniami, przełącz się na mysz i klawiaturę (lub ekran dotykowy na Steam Deck) i daj nam znać.',
        ],
      },
      {
        id: 'saves',
        title: 'Twoje zapisy i prywatność',
        blocks: [
          'Rozmowy, słownictwo i postępy są zapisywane w lokalnym pliku saveData.json. Jego usunięcie resetuje Twoje postępy. Jeśli włączysz Steam Cloud, Steam synchronizuje ten plik między Twoimi komputerami.',
          'Nic, co powiesz lub napiszesz, nie jest nigdzie wysyłane. Szczegóły znajdziesz w polityce prywatności.',
        ],
      },
      {
        id: 'performance',
        title: 'Wskazówki dotyczące wydajności',
        blocks: [
          { ul: [
            'Zainstaluj na dysku SSD, najlepiej NVMe, aby przyspieszyć ładowanie i odpowiedzi.',
            'Przed długimi sesjami zamknij aplikacje zajmujące dużo pamięci, na przykład przeglądarki z wieloma kartami.',
            'Dedykowana karta graficzna z 4 GB lub większą ilością VRAM zapewnia najszybsze odpowiedzi.',
          ] },
        ],
      },
      {
        id: 'troubleshooting',
        title: 'Rozwiązywanie problemów',
        blocks: [
          { ul: [
            'Nie uruchamia się: sprawdź, czy Twój procesor obsługuje AVX2 i czy masz co najmniej 16 GB RAM.',
            'Odpowiedzi są wolne: zamknij inne aplikacje i sprawdź, czy gra jest zainstalowana na dysku SSD.',
            'Mikrofon nie jest wykrywany: sprawdź uprawnienia mikrofonu i domyślne urządzenie wejściowe w systemie, a następnie uruchom Penko Vox ponownie.',
            'Tutor słyszy samego siebie: użyj zestawu słuchawkowego lub zmniejsz głośność głośników.',
          ] },
        ],
      },
      {
        id: 'help',
        title: 'Jak uzyskać pomoc',
        blocks: [
          'Zapytaj na forach Społeczności Steam lub napisz na contact@penkosoftware.org. Podaj system operacyjny, procesor, ilość RAM i opisz, co się stało.',
        ],
      },
    ],
  },

  voxPrivacy: {
    title: 'Polityka prywatności Penko Vox: Japanese',
    summary: 'Penko Vox: Japanese działa w całości na Twoim komputerze. Nie zbieramy Twoich danych osobowych: bez kont, telemetrii, analityki i reklam.',
    sections: [
      {
        id: 'who',
        title: 'Kim jesteśmy',
        blocks: ['Penko Vox: Japanese tworzy Penko Software, niezależne studio oprogramowania. Pytania dotyczące prywatności: contact@penkosoftware.org.'],
      },
      {
        id: 'on-device',
        title: 'Co dzieje się na Twoim komputerze',
        blocks: [
          { ul: [
            'AI, rozpoznawanie mowy i synteza mowy działają lokalnie na Twoim komputerze.',
            'Dźwięk z mikrofonu jest przetwarzany na Twoim komputerze. Nigdy nie jest wysyłany i nigdy nie jest zapisywany.',
            'Twoje rozmowy, słownictwo i postępy są zapisywane w lokalnym pliku saveData.json, który możesz usunąć w dowolnej chwili.',
            'Bez kont, telemetrii, analityki i reklam.',
            'Do korzystania z aplikacji nie jest potrzebne połączenie z internetem.',
          ] },
        ],
      },
      {
        id: 'steam',
        title: 'Czym zajmuje się Steam',
        blocks: ['Penko Vox: Japanese jest sprzedawany przez Steam. Zakupami, osiągnięciami i, jeśli je włączysz, zapisami w Steam Cloud (które synchronizują Twój plik zapisu) zajmuje się firma Valve zgodnie z Polityką prywatności Steam: https://store.steampowered.com/privacy_agreement/. Nie otrzymujemy Twoich danych płatniczych.'],
      },
      {
        id: 'website',
        title: 'Ta strona internetowa',
        blocks: ['Nasza strona jest hostowana na GitHub Pages. Jak większość dostawców hostingu, GitHub może rejestrować informacje techniczne, takie jak Twój adres IP, aby utrzymać bezpieczeństwo i działanie usługi (zobacz Oświadczenie o ochronie prywatności GitHub). Nie mamy dostępu do tych logów i nie korzystamy z nich. Strona zapisuje na Twoim urządzeniu wybrany przez Ciebie język i motyw, a nie używa plików cookie, analityki ani trackerów. Zrzuty ekranu są serwowane z naszej strony; zwiastun jest przesyłany ze serwerów Steam dopiero po naciśnięciu przycisku odtwarzania.'],
      },
      {
        id: 'children',
        title: 'Dzieci i szkoły',
        blocks: ['Ponieważ aplikacja nie zbiera danych osobowych, nadaje się do użytku w szkole, także z dziećmi. Szkoły i uczelnie mogą skontaktować się z nami pod adresem contact@penkosoftware.org, aby uzyskać szczegóły, pilotaże w klasie lub licencje instytucjonalne.'],
      },
      {
        id: 'changes',
        title: 'Zmiany i kontakt',
        blocks: ['Jeśli ta polityka ulegnie zmianie, zaktualizujemy ją tutaj i zmienimy datę u góry. Pytania lub prośby: contact@penkosoftware.org.'],
      },
    ],
  },

  voxTerms: {
    title: 'Warunki użytkowania (EULA) Penko Vox: Japanese',
    summary: 'W skrócie: możesz używać Penko Vox na swoich urządzeniach, Twoje zapisy należą do Ciebie, AI może popełniać błędy, a nic w tym dokumencie nie odbiera Ci praw przysługujących Ci jako konsumentowi.',
    sections: [
      {
        id: 'agreement',
        title: '1. Umowa',
        blocks: ['Niniejsze warunki stanowią umowę między Tobą a Penko Software („my”) dotyczącą Penko Vox: Japanese („Oprogramowanie”). Instalując lub używając Oprogramowania, akceptujesz je. Twój zakup przez Steam podlega również Umowie subskrybenta Steam.'],
      },
      {
        id: 'licence',
        title: '2. Twoja licencja',
        blocks: [
          'Udzielamy Ci osobistej, niewyłącznej, nieprzenoszalnej licencji na instalowanie i używanie Oprogramowania na urządzeniach, które posiadasz lub kontrolujesz, do własnej nauki, w zakresie dozwolonym przez Steam (w tym Rodzinne udostępnianie Steam).',
          'Używanie Oprogramowania do prowadzenia zajęć lub na urządzeniach organizacji wymaga licencji instytucjonalnej. Skontaktuj się z nami pod adresem contact@penkosoftware.org.',
        ],
      },
      {
        id: 'restrictions',
        title: '3. Czego nie wolno Ci robić',
        blocks: [
          { ul: [
            'Kopiować, sprzedawać, wynajmować ani rozpowszechniać Oprogramowania, z wyjątkiem funkcji udostępnianych przez Steam.',
            'Dekompilować, deasemblować ani poddawać Oprogramowania inżynierii wstecznej, z wyjątkiem przypadków, w których prawo wyraźnie na to zezwala.',
            'Wyodrębniać modeli AI, głosów ani innych zasobów Oprogramowania w celu używania ich oddzielnie.',
            'Usuwać ani zmieniać informacji o prawach autorskich lub licencji.',
          ] },
        ],
      },
      {
        id: 'ownership',
        title: '4. Własność',
        blocks: ['Oprogramowanie i jego zawartość należą do Penko Software i jego licencjodawców; otrzymujesz licencję, a nie własność. Twoje dane zapisu i wszystko, co stworzysz w Oprogramowaniu, należy do Ciebie.'],
      },
      {
        id: 'ai',
        title: '5. Treści generowane przez AI',
        blocks: ['Oprogramowanie korzysta z generatywnej AI działającej na Twoim komputerze. Jej dialogi, poprawki i mowa są generowane automatycznie i mogą być niedokładne lub nieoczekiwane. Oprogramowanie jest pomocą w nauce, a nie zamiennikiem wykwalifikowanego nauczyciela, oficjalnego egzaminu ani profesjonalnego tłumaczenia.'],
      },
      {
        id: 'early-access',
        title: '6. Wczesny dostęp',
        blocks: ['Oprogramowanie jest we wczesnym dostępie. Funkcje mogą się zmieniać, być dodawane lub usuwane, a możesz napotkać błędy. Staramy się utrzymywać zgodność danych zapisu między aktualizacjami, ale nie możemy tego zagwarantować. Aktualizacje są dostarczane przez Steam.'],
      },
      {
        id: 'privacy',
        title: '7. Prywatność',
        blocks: ['Oprogramowanie przetwarza Twój głos i rozmowy lokalnie i nie wysyła nam danych osobowych. Zobacz Politykę prywatności Penko Vox: Japanese.'],
      },
      {
        id: 'third-party',
        title: '8. Komponenty stron trzecich',
        blocks: ['Oprogramowanie może zawierać komponenty stron trzecich, licencjonowane na ich własnych warunkach. Te warunki mają zastosowanie do tych komponentów.'],
      },
      {
        id: 'warranty',
        title: '9. Gwarancja',
        blocks: ['W zakresie dozwolonym przez prawo Oprogramowanie jest dostarczane „takie, jakie jest”, bez jakichkolwiek gwarancji. Żadne postanowienie niniejszych warunków nie ogranicza praw przysługujących Ci jako konsumentowi na mocy prawa meksykańskiego, w tym Federalnej ustawy o ochronie konsumentów, ani na mocy bezwzględnie obowiązujących przepisów Twojego kraju.'],
      },
      {
        id: 'liability',
        title: '10. Ograniczenie odpowiedzialności',
        blocks: ['W zakresie dozwolonym przez prawo nie ponosimy odpowiedzialności za szkody pośrednie ani następcze, a nasza całkowita odpowiedzialność jest ograniczona do kwoty, którą zapłaciłeś za Oprogramowanie.'],
      },
      {
        id: 'termination',
        title: '11. Wygaśnięcie',
        blocks: ['Ta licencja wygasa automatycznie, jeśli naruszysz niniejsze warunki. Gdy wygaśnie, musisz zaprzestać używania Oprogramowania i je usunąć.'],
      },
      {
        id: 'law',
        title: '12. Prawo właściwe',
        blocks: ['Niniejsze warunki podlegają prawu federalnemu Meksykańskich Stanów Zjednoczonych. Spory będą rozstrzygane przez właściwe sądy Meksyku, bez uszczerbku dla Twoich praw konsumenckich, w tym prawa do zwrócenia się do Federalnego Urzędu Ochrony Konsumentów (PROFECO).'],
      },
      {
        id: 'changes',
        title: '13. Zmiany i kontakt',
        blocks: ['Możemy aktualizować niniejsze warunki; data u góry wskazuje najnowszą wersję, a istotne zmiany będą ogłaszane na stronie Steam. Pytania: contact@penkosoftware.org.'],
      },
    ],
  },

  plazaPrivacy: {
    title: 'Polityka prywatności Penko Plaza',
    summary: 'Nie zbieramy Twoich danych osobowych. Aplikacje Penko Plaza działają w Twojej przeglądarce, tam przechowują Twoje dane i nie mają kont, analityki, reklam ani trackerów.',
    sections: [
      {
        id: 'who',
        title: 'Kim jesteśmy',
        blocks: ['Penko Plaza to zbiór darmowych aplikacji open source tworzonych przez Penko Software, niezależne studio oprogramowania. Pytania dotyczące prywatności: contact@penkosoftware.org.'],
      },
      {
        id: 'apps',
        title: 'Aplikacje Penko Plaza',
        blocks: [
          { ul: [
            'Wszystko działa w Twojej przeglądarce. Aplikacje nie wysyłają nam Twoich dokumentów, notatek ani innych treści.',
            'Twoje dane są przechowywane wyłącznie w Twojej przeglądarce (na przykład w jej pamięci lokalnej lub bazie danych). Wyczyszczenie danych przeglądarki je usuwa.',
            'Bez kont, analityki, reklam ani śledzenia, i bez plików cookie.',
            'Twoja przeglądarka przechowuje kopię plików strony, aby aplikacje działały offline. Strona zapamiętuje też na Twoim urządzeniu wybrany przez Ciebie język i motyw.',
            'Niektóre aplikacje oferują opcjonalne funkcje online, takie jak współpraca w czasie rzeczywistym z innymi osobami lub opcjonalny tryb AI w chmurze. Jeśli zdecydujesz się z nich skorzystać, odpowiednie treści trafiają do pozostałych uczestników lub do usługi udostępniającej tę funkcję, zgodnie z polityką prywatności tej usługi.',
          ] },
        ],
      },
      {
        id: 'website',
        title: 'Ta strona internetowa',
        blocks: ['penkosoftware.org jest hostowane na GitHub Pages. Jak większość dostawców hostingu, GitHub może rejestrować informacje techniczne, takie jak Twój adres IP, aby utrzymać bezpieczeństwo i działanie usługi (zobacz Oświadczenie o ochronie prywatności GitHub). Nie mamy dostępu do tych logów i nie korzystamy z nich.'],
      },
      {
        id: 'children',
        title: 'Dzieci i szkoły',
        blocks: ['Ponieważ nie zbieramy danych osobowych, aplikacje Penko Plaza nadają się do użytku w szkole, także z dziećmi. Szkoły mogą skontaktować się z nami pod adresem contact@penkosoftware.org, aby uzyskać szczegóły.'],
      },
      {
        id: 'paid-apps',
        title: 'Nasze aplikacje płatne',
        blocks: ['Aplikacje płatne, takie jak Penko Vox: Japanese, mają własne polityki prywatności, do których odnośniki znajdują się na ich stronach produktów.'],
      },
      {
        id: 'changes',
        title: 'Zmiany i kontakt',
        blocks: ['Jeśli ta polityka ulegnie zmianie, zaktualizujemy ją tutaj i zmienimy datę u góry. Pytania lub prośby: contact@penkosoftware.org.'],
      },
    ],
  },

  press: {
    title: 'Materiały prasowe',
    intro: 'Wszystko, czego potrzebujesz, by napisać o Penko Vox: Japanese. Możesz swobodnie używać tych tekstów i obrazów w materiałach o aplikacji.',
    factsTitle: 'Karta informacyjna',
    facts: [
      { label: 'Deweloper i wydawca', value: 'Penko Software' },
      { label: 'Premiera we wczesnym dostępie', value: '10 sierpnia 2026' },
      { label: 'Pełne wydanie', value: 'Planowane na sierpień 2027' },
      { label: 'Platformy', value: 'Windows, Linux, SteamOS (Steam Deck)' },
      { label: 'Cena', value: 'Zależy od regionu; zobacz Steam' },
      { label: 'Języki interfejsu', value: 'angielski, francuski, niemiecki, japoński, koreański, chiński uproszczony, hiszpański (Ameryka Łacińska), wietnamski' },
    ],
    shortTitle: 'Krótki opis',
    short: 'Penko Vox: Japanese to prywatny, offline\'owy tutor AI, który uczy japońskiego przez rozmowę. Rozmawiaj w 38 scenariuszach na poziomach JLPT N5–N1, prowadź naturalne rozmowy głosowe i eksploruj grę RPG Kotoba Islands, a wszystko działa lokalnie na Twoim komputerze.',
    longTitle: 'O Penko Vox: Japanese',
    long: [
      'Większość aplikacji do nauki języków działa jak cyfrowe podręczniki. Penko Vox: Japanese powstał z myślą o kolejnym kroku: prawdziwym używaniu japońskiego w rozmowie. Uczący się rozmawiają z tutorem AI, który słucha, odpowiada w roli postaci i wplata delikatne poprawki w dialog.',
      'Wszystko działa na komputerze osoby uczącej się. Rozpoznawanie mowy, tutor AI i synteza mowy działają całkowicie offline, więc głosy i rozmowy nigdy nie opuszczają urządzenia, a nie ma kont, subskrypcji ani limitów użycia.',
      'Wersja 2.1 dodaje Kotoba Islands, grę RPG, w której gracze swobodnie rozmawiają z każdym mieszkańcem, naturalne rozmowy głosowe z wymianą głosu i przerywaniem, Study Hub z powtórkami w odstępach FSRS, offline\'owy słownik z wyszukiwaniem po dotknięciu oraz eksperymentalną obsługę kontrolera i Steam Deck.',
      'Penko Vox: Japanese tworzy Penko Software, którego sprzedaż finansuje Penko Plaza, zbiór darmowych aplikacji open source.',
    ],
    featuresTitle: 'Najważniejsze funkcje',
    assetsTitle: 'Loga i grafiki',
    assetsNote: 'Zrzuty ekranu i zwiastun pojawią się wkrótce. Inne formaty lub rozmiary uzyskasz, pisząc do nas.',
    icon: 'Ikona aplikacji (SVG)',
    capsule: 'Grafika kapsuły (SVG)',
    download: 'Pobierz',
    contactTitle: 'Kontakt dla prasy',
    contactBody: 'W sprawie wywiadów, kluczy recenzenckich lub pytań napisz na contact@penkosoftware.org.',
  },
};
