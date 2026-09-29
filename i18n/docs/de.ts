// Deutsch
import type { Docs } from './types';

export const docs: Docs = {
  meta: {
    home: {
      title: 'Penko Plaza von Penko Software | Kostenlose Apps & Penko Vox: Japanese',
      description: 'Kostenlose, private Open-Source-Apps von Penko Software sowie Penko Vox: Japanese, eine Offline-KI-App zum Japanischlernen, jetzt im Early Access auf Steam.',
    },
    plazaPrivacy: {
      title: 'Datenschutzerklärung | Penko Plaza',
      description: 'Datenschutzerklärung für Penko Plaza und seine kostenlosen Open-Source-Apps. Wir erheben keine personenbezogenen Daten.',
    },
    products: {
      title: 'Kostenpflichtige Apps | Penko Software',
      description: 'Kostenpflichtige Apps von Penko Software, die unsere kostenlosen Open-Source-Apps in Penko Plaza finanzieren. Den Anfang macht Penko Vox: Japanese.',
    },
    vox: {
      title: 'Penko Vox: Japanese | Offline-KI-Eintauchen ins Japanische',
      description: 'Japanisch lernen durch Sprechen. Penko Vox: Japanese ist ein privater Offline-KI-Tutor mit 38 Gesprächsszenarien von JLPT N5–N1, Sprachanrufen und dem Kotoba-Islands-RPG. Jetzt im Early Access auf Steam.',
    },
    voxPrivacy: {
      title: 'Datenschutzerklärung | Penko Vox: Japanese',
      description: 'Datenschutzerklärung für Penko Vox: Japanese. KI, Spracherkennung und Sprachsynthese laufen lokal; wir erheben keine personenbezogenen Daten.',
    },
    voxTerms: {
      title: 'Nutzungsbedingungen (EULA) | Penko Vox: Japanese',
      description: 'Endbenutzer-Lizenzvertrag und Nutzungsbedingungen für Penko Vox: Japanese.',
    },
    voxGuide: {
      title: 'Einstiegsleitfaden | Penko Vox: Japanese',
      description: 'So richten Sie Penko Vox: Japanese ein und nutzen es optimal: Anforderungen, Mikrofon-Einrichtung, Gespräche, Kotoba Islands, Study Hub und Fehlerbehebung.',
    },
    voxPress: {
      title: 'Pressekit | Penko Vox: Japanese',
      description: 'Pressekit für Penko Vox: Japanese: Datenblatt, Beschreibungen, Logos und Kontakt.',
    },
  },

  common: {
    lastUpdated: 'Zuletzt aktualisiert',
    updatedDate: '29. September 2026',
    translationNotice: 'Diese Übersetzung dient nur der Bequemlichkeit. Bei Abweichungen von der englischen Fassung gilt die englische Fassung.',
    onThisPage: 'Auf dieser Seite',
    privacy: 'Datenschutz',
    terms: 'Nutzungsbedingungen (EULA)',
    guide: 'Anleitung',
    press: 'Pressekit',
    comingSoon: 'Demnächst verfügbar',
    learnMore: 'Mehr erfahren',
  },

  products: {
    title: 'Kostenpflichtige Apps',
    intro: 'Spezialisierte Apps von Penko Software. Jeder Kauf finanziert die kostenlosen Open-Source-Apps von Penko Plaza.',
    voxJapaneseDesc: 'Lernen Sie Japanisch durch Sprechen. Ein privater, offline arbeitender KI-Tutor mit Gesprächsszenarien von JLPT N5 bis N1, natürlichen Sprachanrufen und dem Rollenspiel Kotoba Islands.',
    teaserTitle: 'Weitere Apps in Arbeit',
    teaserBody: 'Wir arbeiten an neuen Apps. Folgen Sie Penko Software auf Steam und GitHub, um als Erste davon zu erfahren.',
    whyTitle: 'Warum kostenpflichtige Apps?',
    whyBody: [
      'Die Apps von Penko Plaza sind kostenlos, Open Source unter der GPL-3.0-Lizenz und bleiben es auch. Sie zu entwickeln und zu pflegen kostet Zeit, deshalb finanzieren wir diese Arbeit mit einer kleinen Zahl spezialisierter kostenpflichtiger Apps.',
      'Unsere kostenpflichtigen Apps sind Closed Source und werden über Stores wie Steam verkauft. Sie folgen denselben Werten: Sie laufen auf Ihrem eigenen Gerät, funktionieren offline und erfassen keine persönlichen Daten von Ihnen.',
    ],
  },

  vox: {
    heroTitle: 'Japanisch lernen durch Sprechen',
    priceNote: 'Der Preis variiert je nach Region. Den aktuellen Preis finden Sie auf Steam.',
    hardwareNote: 'Führt ein vollständiges KI-Modell auf Ihrem PC aus: erfordert eine AVX2-CPU und mindestens 16 GB RAM.',
    checkRequirements: 'Anforderungen prüfen',
    media: {
      title: 'So sieht es in Aktion aus',
      playTrailer: 'Trailer abspielen',
      trailerNotice: 'Der Trailer wird von Steam gestreamt, sobald Sie auf Wiedergabe klicken.',
      screenshot: 'Screenshot {n}',
      previous: 'Vorheriger Screenshot',
      next: 'Nächster Screenshot',
      close: 'Schließen',
    },
    sectionFeatures: 'Funktionen',
    pillarsTitle: 'So funktioniert es: Alles läuft auf Ihrem Computer',
    pillars: [
      { title: 'Hört zu', body: 'Spracherkennung und Wort-für-Wort-Analyse Ihres Japanisch, lokal ausgeführt.' },
      { title: 'Denkt nach', body: 'Ein Offline-KI-Tutor hält das Gespräch am Laufen und passt die Geschichte an das an, was Sie sagen.' },
      { title: 'Korrigiert', body: 'Sanfte Korrekturen sind in den Dialog eingewoben, sodass Sie lernen, ohne den Fluss zu unterbrechen.' },
      { title: 'Spricht', body: 'Natürlich klingendes Japanisch, erzeugt auf Ihrem eigenen Rechner.' },
    ],
    features: [
      { title: 'Kotoba Islands', body: 'Ein Rollenspiel, in dem Sie die Inseln erkunden und sich mit jedem Bewohner frei unterhalten, mit dem Japanisch, das Sie gerade lernen.' },
      { title: 'Natürliche Sprachanrufe', body: 'Sprechen Sie laut, mit natürlichem Sprecherwechsel. Sie können unterbrechen, und dank Echounterdrückung können Sie Lautsprecher verwenden.' },
      { title: 'Study Hub und Wörterbuch', body: 'Wörter, die Ihnen begegnen, landen in Wiederholungen, die per FSRS-Spaced-Repetition geplant werden, und ein Offline-Wörterbuch lässt Sie jedes Wort antippen, um es nachzuschlagen.' },
      { title: 'Kana-Schreibübung', body: 'Üben Sie das Schreiben von Hiragana und Katakana mit visuellem Feedback in Echtzeit.' },
      { title: 'Meisterschaft durch Anwendung', body: 'Ihr Fortschritt wächst, wenn Sie ein Wort oder ein Grammatikmuster in einem echten Gespräch richtig verwenden, nicht durch das Umblättern von Karteikarten.' },
      { title: 'Privat und offline', body: 'Ihre Stimme, Ihre Wörterbuchabfragen und Ihre Gespräche verlassen niemals Ihren Computer. Keine Konten, keine Cloud, keine Telemetrie.' },
      { title: 'Für immer Ihr Eigen', body: 'Ein einmaliger Kauf. Keine Abonnements, keine Token-Limits und keine Nutzungsstufen.' },
    ],
    steamFeatures: 'Steam-Errungenschaften · Steam Cloud · Familienbibliothek',
    earlyAccess: {
      title: 'Der Plan für den Early Access',
      why: 'Lokales KI-Sprachenlernen entwickelt sich schnell, deshalb sind wir im Early Access gestartet, um Penko Vox gemeinsam mit Studierenden und Sprachlernenden zu gestalten.',
      plan: 'Die Vollversion planen wir für August 2027. Bis dahin bringen Updates regelmäßig neue Inhalte und Verbesserungen.',
      fullVersionTitle: 'Geplant für die Vollversion',
      fullVersion: [
        'Eine deutlich größere Bibliothek an Gesprächsszenarien, mit dem Ziel von über 100',
        'Mehr spezialisierte JLPT-Lernpfade',
        'Mehr Stimmoptionen für die Sprachsynthese',
        'Tiefere Fortschrittsanalysen und mehr Steam-Funktionen',
      ],
      pricing: 'Der Preis ist während des Early Access niedriger und steigt schrittweise mit größeren Updates.',
      community: 'Wir lesen die Steam-Community-Foren und führen dort Umfragen durch, damit Spielerinnen und Spieler über die nächsten Szenarien abstimmen können.',
    },
    requirements: {
      title: 'Systemanforderungen',
      intro: 'Penko Vox führt ein vollständiges KI-Sprachmodell auf Ihrem eigenen Computer aus, daher hängt die Leistung von Ihrer Hardware ab. Eine CPU mit AVX2-Unterstützung ist erforderlich.',
      minimum: 'Minimum',
      recommended: 'Empfohlen',
      labels: { os: 'Betriebssystem', processor: 'Prozessor', memory: 'Arbeitsspeicher', graphics: 'Grafik', storage: 'Speicherplatz', sound: 'Sound', notes: 'Hinweise' },
      windows: {
        minimum: {
          os: 'Windows 10 (64-Bit)',
          processor: 'Vierkern-CPU mit AVX2 (Intel Core i5-8400 / AMD Ryzen 3 3100)',
          memory: '16 GB RAM',
          graphics: 'Intel UHD Graphics 630 / AMD Radeon Vega 8 (DirectX 11)',
          storage: '15 GB verfügbarer Speicherplatz',
          sound: 'Windows-kompatible Soundkarte',
          notes: 'AVX2-Unterstützung erforderlich; SSD dringend empfohlen',
        },
        recommended: {
          os: 'Windows 11 (64-Bit)',
          processor: '6 Kerne / 12 Threads oder besser (Intel Core i5-12400 / AMD Ryzen 5 5600X)',
          memory: '32 GB RAM',
          graphics: 'NVIDIA GeForce RTX 3050 / RTX 3060 (4 GB+ VRAM) oder AMD Radeon RX 6600 (DirectX 12)',
          storage: '20 GB verfügbarer Speicherplatz',
          sound: 'Windows-kompatible Soundkarte',
          notes: 'Eine SSD und eine dedizierte GPU sorgen für die schnellsten Antworten',
        },
      },
      linux: {
        minimum: {
          os: 'SteamOS 3.0 oder ein aktuelles Linux (Fedora 40+, Ubuntu 22.04+)',
          processor: 'Vierkern-CPU mit AVX2 (Steam-Deck-APU / AMD Ryzen 3 / Intel Core i5)',
          memory: '16 GB RAM',
          graphics: 'Integrierte oder dedizierte GPU mit Vulkan-Unterstützung',
          storage: '15 GB verfügbarer Speicherplatz',
          sound: 'PulseAudio oder PipeWire',
          notes: 'Auf dem Steam Deck getestet; AVX2 erforderlich',
        },
        recommended: {
          os: 'SteamOS 3.5+ oder Fedora 43',
          processor: 'AMD Ryzen 5 5600G / Intel Core i7 (10. Generation) oder besser',
          memory: '32 GB RAM',
          graphics: 'Dedizierte GPU mit 4 GB+ VRAM und Vulkan-Unterstützung',
          storage: '20 GB verfügbarer Speicherplatz',
          sound: 'PulseAudio oder PipeWire',
          notes: 'Eine NVMe-SSD sorgt für die schnellsten Gesprächsantworten',
        },
      },
    },
    languages: {
      title: 'Sprachen',
      intro: 'Sie lernen Japanisch; die Oberfläche und die Erklärungen der App sind in diesen Sprachen verfügbar.',
      interface: 'Oberfläche',
      audio: 'Audio',
      subtitles: 'Untertitel',
    },
    aiDisclosure: {
      title: 'Über die KI',
      body: 'Penko Vox: Japanese verwendet generative KI, die lokal läuft. Ein großes Sprachmodell fungiert als Ihr Japanisch-Tutor und schreibt in Echtzeit Dialoge auf Grundlage dessen, was Sie sagen, und eine neuronale Text-to-Speech-Engine spricht sie aus. Wie jede KI kann sie Fehler machen, betrachten Sie sie daher als Übungspartner und nicht als Autorität.',
    },
    faqTitle: 'Häufig gestellte Fragen',
    faq: [
      { q: 'Brauche ich eine Internetverbindung?', a: 'Nicht zur Nutzung. Nach der Installation über Steam laufen KI, Spracherkennung und Sprachsynthese vollständig auf Ihrem Computer.' },
      { q: 'Wird meine Stimme aufgezeichnet oder hochgeladen?', a: 'Nein. Das Mikrofonsignal wird auf Ihrem Computer verarbeitet und weder hochgeladen noch gespeichert.' },
      { q: 'Warum werden 16 GB RAM und eine AVX2-CPU benötigt?', a: 'Penko Vox führt ein vollständiges KI-Sprachmodell lokal statt auf einem Server aus. Dafür sind Arbeitsspeicher und eine CPU mit AVX2-Befehlen nötig. So bleiben Ihre Daten privat und die App offline nutzbar.' },
      { q: 'Funktioniert es auf dem Steam Deck?', a: 'Ja. Es wurde auf dem Steam Deck getestet, und die Controller-Unterstützung kam mit Version 2.1 als experimentelle Funktion hinzu.' },
      { q: 'Gibt es eine Mac-Version?', a: 'Derzeit nicht. Penko Vox ist für Windows und Linux erhältlich, einschließlich SteamOS.' },
      { q: 'Welches Japanischniveau brauche ich?', a: 'Die Gesprächsszenarien reichen von JLPT N5 (Anfänger) bis N1 (fortgeschritten), und die Kana-Übung hilft, wenn Sie gerade erst mit dem Lesen beginnen.' },
      { q: 'Ist es ein Abonnement?', a: 'Nein. Es ist ein einmaliger Kauf auf Steam, ohne Abonnements, Token-Limits oder Nutzungsstufen.' },
      { q: 'Hat die KI immer recht?', a: 'Nein. Sie ist ein starker Übungspartner, kann aber Fehler machen. Prüfen Sie bei Prüfungen oder wichtigen Übersetzungen die Ergebnisse mit einer Lehrkraft oder einer verlässlichen Quelle.' },
      { q: 'Ist Penko Vox Open Source?', a: 'Nein. Penko Vox ist eine kostenpflichtige Closed-Source-App. Ihre Verkäufe finanzieren Penko Plaza, unsere kostenlosen Open-Source-Apps.' },
      { q: 'Kann ich eine Rückerstattung bekommen?', a: 'Käufe erfolgen über Steam, daher gilt die Rückerstattungsrichtlinie von Steam.' },
    ],
    support: {
      title: 'Support',
      body: 'Sie kommen nicht weiter, haben einen Fehler gefunden oder eine Idee? Lesen Sie die Einstiegsanleitung, fragen Sie in den Steam-Foren oder schreiben Sie uns eine E-Mail.',
      email: 'E-Mail an den Support',
      forums: 'Steam-Community-Foren',
      guideLink: 'Einstiegsanleitung',
    },
  },

  voxGuide: {
    title: 'Erste Schritte mit Penko Vox: Japanese',
    intro: 'Alles, was Sie brauchen, um Penko Vox einzurichten und das Beste daraus zu machen.',
    sections: [
      {
        id: 'before-you-start',
        title: 'Bevor Sie beginnen',
        blocks: [
          'Penko Vox führt ein vollständiges KI-Modell auf Ihrem Computer aus. Prüfen Sie daher, ob Ihre Hardware bereit ist:',
          { ul: [
            'Eine CPU mit AVX2-Unterstützung. Die meisten Intel-CPUs ab 2013 (Haswell) und AMD-Ryzen-CPUs haben sie. Wenn Sie unsicher sind, suchen Sie nach Ihrem CPU-Modell zusammen mit „AVX2“.',
            'Mindestens 16 GB RAM (32 GB empfohlen).',
            '15–20 GB freier Speicherplatz, idealerweise auf einer SSD.',
            'Windows 10/11 (64-Bit), SteamOS oder eine aktuelle Linux-Distribution.',
          ] },
          'Die vollständige Liste finden Sie in den Systemanforderungen auf der Produktseite.',
        ],
      },
      {
        id: 'install',
        title: 'Installation und erster Start',
        blocks: [
          { ol: [
            'Kaufen und installieren Sie Penko Vox: Japanese über Steam.',
            'Starten Sie es aus Ihrer Steam-Bibliothek.',
            'Der erste Start kann länger dauern, während die KI zum ersten Mal geladen wird. Spätere Starts sind schneller.',
          ] },
        ],
      },
      {
        id: 'microphone',
        title: 'Mikrofon einrichten',
        blocks: [
          'Sprechen ist das Herzstück von Penko Vox. Ein Headset liefert die klarsten Ergebnisse, aber dank Echounterdrückung funktionieren auch Lautsprecher.',
          { ul: [
            'Windows: Öffnen Sie Einstellungen › Datenschutz & Sicherheit › Mikrofon und stellen Sie sicher, dass Desktop-Apps es verwenden dürfen.',
            'Linux: Wählen Sie Ihr Mikrofon in den Sound-Einstellungen Ihres Systems als Standardeingang aus (PipeWire oder PulseAudio).',
            'Steam Deck: Das eingebaute Mikrofon funktioniert, und ein Headset verbessert die Erkennung in lauten Umgebungen.',
          ] },
        ],
      },
      {
        id: 'first-conversation',
        title: 'Ihr erstes Gespräch',
        blocks: [
          { ol: [
            'Wählen Sie ein Gesprächsszenario, das zu Ihrem JLPT-Niveau passt, von N5 (Anfänger) bis N1 (fortgeschritten), oder erstellen Sie ein eigenes Szenario.',
            'Antworten Sie auf Japanisch, laut oder per Tastatur.',
            'Der Tutor antwortet in seiner Rolle und webt Korrekturen in das Gespräch ein.',
            'Tippen Sie ein beliebiges Wort an, um es im Offline-Wörterbuch nachzuschlagen.',
          ] },
          { callout: 'Machen Sie sich keine Sorgen wegen Fehlern. Daran erkennt der Tutor, wobei er Ihnen helfen soll.' },
        ],
      },
      {
        id: 'voice-calls',
        title: 'Sprachanrufe',
        blocks: [
          'Sprachanrufe fühlen sich an wie ein Gespräch mit einem Menschen: Sprechen Sie natürlich, machen Sie Pausen und werfen Sie etwas ein. Sie können den Tutor unterbrechen, und der Sprecherwechsel passt sich Ihnen an.',
        ],
      },
      {
        id: 'kotoba-islands',
        title: 'Kotoba Islands',
        blocks: [
          'Kotoba Islands ist ein in Penko Vox integriertes Rollenspiel. Erkunden Sie die Inseln und unterhalten Sie sich frei mit jedem Bewohner. Es gibt kein Skript, dem Sie folgen müssen: Nutzen Sie das Japanisch, das Sie können, und probieren Sie neue Wörter aus.',
        ],
      },
      {
        id: 'study-hub',
        title: 'Study Hub, Wörterbuch und Kana-Übung',
        blocks: [
          { ul: [
            'Study Hub: Wörter, die Ihnen in Gesprächen begegnen, werden zu Wiederholungen, geplant per FSRS-Spaced-Repetition, sodass Sie sie kurz vor dem Vergessen wiedersehen. Ein paar Minuten pro Tag funktionieren am besten.',
            'Wörterbuch: Tippen Sie ein beliebiges Wort an, um es nachzuschlagen, vollständig offline.',
            'Kana-Übung: Lernen Sie, Hiragana und Katakana Strich für Strich zu schreiben, mit Feedback in Echtzeit.',
          ] },
        ],
      },
      {
        id: 'progress',
        title: 'So funktioniert der Fortschritt',
        blocks: [
          'Die Beherrschung wächst, wenn Sie ein Wort oder ein Grammatikmuster in einem echten Gespräch richtig verwenden. Wiederholungen helfen beim Erinnern, aber entscheidend ist, die Sprache anzuwenden.',
        ],
      },
      {
        id: 'controller',
        title: 'Controller und Steam Deck',
        blocks: [
          'Die Controller-Unterstützung kam mit Version 2.1 hinzu und ist experimentell. Wenn etwas nicht wie erwartet reagiert, wechseln Sie zu Maus und Tastatur (oder auf dem Steam Deck zum Touchscreen) und teilen Sie uns das mit.',
        ],
      },
      {
        id: 'saves',
        title: 'Ihre Spielstände und der Datenschutz',
        blocks: [
          'Gespräche, Vokabeln und Fortschritt werden in einer lokalen Datei gespeichert, saveData.json. Wenn Sie sie löschen, wird Ihr Fortschritt zurückgesetzt. Wenn Sie Steam Cloud aktivieren, synchronisiert Steam diese Datei zwischen Ihren Computern.',
          'Nichts, was Sie sagen oder eingeben, wird irgendwohin gesendet. Einzelheiten finden Sie in der Datenschutzerklärung.',
        ],
      },
      {
        id: 'performance',
        title: 'Tipps zur Leistung',
        blocks: [
          { ul: [
            'Installieren Sie auf einer SSD, idealerweise NVMe, für schnelleres Laden und schnellere Antworten.',
            'Schließen Sie vor langen Sitzungen speicherhungrige Apps wie Browser mit vielen Tabs.',
            'Eine dedizierte GPU mit 4 GB oder mehr VRAM sorgt für die schnellsten Antworten.',
          ] },
        ],
      },
      {
        id: 'troubleshooting',
        title: 'Fehlerbehebung',
        blocks: [
          { ul: [
            'Es startet nicht: Prüfen Sie, ob Ihre CPU AVX2 unterstützt und ob Sie mindestens 16 GB RAM haben.',
            'Die Antworten sind langsam: Schließen Sie andere Apps und prüfen Sie, ob das Spiel auf einer SSD installiert ist.',
            'Das Mikrofon wird nicht erkannt: Prüfen Sie die Mikrofonberechtigungen und das Standard-Eingabegerät Ihres Systems und starten Sie dann Penko Vox neu.',
            'Der Tutor hört sich selbst: Verwenden Sie ein Headset oder verringern Sie die Lautstärke Ihrer Lautsprecher.',
          ] },
        ],
      },
      {
        id: 'help',
        title: 'Hilfe erhalten',
        blocks: [
          'Fragen Sie in den Steam-Community-Foren oder schreiben Sie an contact@penkosoftware.org. Geben Sie Ihr Betriebssystem, Ihre CPU, Ihren RAM und an, was passiert ist.',
        ],
      },
    ],
  },

  voxPrivacy: {
    title: 'Datenschutzerklärung von Penko Vox: Japanese',
    summary: 'Penko Vox: Japanese läuft vollständig auf Ihrem Computer. Wir erheben keine personenbezogenen Daten von Ihnen: keine Konten, keine Telemetrie, keine Analysen und keine Werbung.',
    sections: [
      {
        id: 'who',
        title: 'Wer wir sind',
        blocks: ['Penko Vox: Japanese wird von Penko Software entwickelt, einem unabhängigen Softwarestudio. Fragen zum Datenschutz: contact@penkosoftware.org.'],
      },
      {
        id: 'on-device',
        title: 'Was auf Ihrem Computer geschieht',
        blocks: [
          { ul: [
            'KI, Spracherkennung und Sprachsynthese laufen alle lokal auf Ihrem Computer.',
            'Das Mikrofonsignal wird auf Ihrem Computer verarbeitet. Es wird niemals hochgeladen und niemals gespeichert.',
            'Ihre Gespräche, Vokabeln und Ihr Fortschritt werden in einer lokalen Datei gespeichert, saveData.json, die Sie jederzeit löschen können.',
            'Keine Konten, keine Telemetrie, keine Analysen und keine Werbung.',
            'Zur Nutzung der App ist keine Internetverbindung erforderlich.',
          ] },
        ],
      },
      {
        id: 'steam',
        title: 'Was Steam übernimmt',
        blocks: ['Penko Vox: Japanese wird über Steam verkauft. Käufe, Errungenschaften und, wenn Sie sie aktivieren, Steam-Cloud-Speicherstände (die Ihre Speicherdatei synchronisieren) werden von Valve gemäß der Steam-Datenschutzrichtlinie abgewickelt: https://store.steampowered.com/privacy_agreement/. Wir erhalten Ihre Zahlungsdaten nicht.'],
      },
      {
        id: 'website',
        title: 'Diese Website',
        blocks: ['Unsere Website wird auf GitHub Pages gehostet. Wie die meisten Webhoster kann GitHub technische Informationen wie Ihre IP-Adresse protokollieren, um den Dienst sicher und funktionsfähig zu halten (siehe die GitHub-Datenschutzerklärung). Wir haben keinen Zugriff auf diese Protokolle und nutzen sie nicht. Die Website speichert Ihre gewählte Sprache und Ihr Design auf Ihrem Gerät und verwendet keine Cookies, Analysen oder Tracker. Screenshots werden von unserer eigenen Website ausgeliefert; der Trailer wird erst gestreamt, nachdem Sie auf Wiedergabe geklickt haben, und zwar von den Servern von Steam.'],
      },
      {
        id: 'children',
        title: 'Kinder und Schulen',
        blocks: ['Da die App keine personenbezogenen Daten erhebt, eignet sie sich für den Einsatz im Unterricht, auch mit Kindern. Schulen und Universitäten können uns unter contact@penkosoftware.org für Einzelheiten, Pilotprojekte im Unterricht oder institutionelle Lizenzen kontaktieren.'],
      },
      {
        id: 'changes',
        title: 'Änderungen und Kontakt',
        blocks: ['Wenn sich diese Erklärung ändert, aktualisieren wir sie hier und ändern das Datum oben. Fragen oder Anliegen: contact@penkosoftware.org.'],
      },
    ],
  },

  voxTerms: {
    title: 'Nutzungsbedingungen (EULA) von Penko Vox: Japanese',
    summary: 'Die Kurzfassung: Sie dürfen Penko Vox auf Ihren eigenen Geräten nutzen, Ihre Spielstände gehören Ihnen, die KI kann Fehler machen, und nichts hier nimmt Ihnen Ihre Rechte als Verbraucher.',
    sections: [
      {
        id: 'agreement',
        title: '1. Vereinbarung',
        blocks: ['Diese Bedingungen sind eine Vereinbarung zwischen Ihnen und Penko Software („wir“) über Penko Vox: Japanese (die „Software“). Mit der Installation oder Nutzung der Software akzeptieren Sie sie. Ihr Kauf über Steam unterliegt zusätzlich dem Steam-Abonnentenvertrag.'],
      },
      {
        id: 'licence',
        title: '2. Ihre Lizenz',
        blocks: [
          'Wir gewähren Ihnen eine persönliche, nicht ausschließliche, nicht übertragbare Lizenz, die Software auf Geräten zu installieren und zu nutzen, die Sie besitzen oder kontrollieren, für Ihr eigenes Lernen, soweit von Steam erlaubt (einschließlich der Steam-Familienbibliothek).',
          'Die Nutzung der Software zum Unterrichten von Kursen oder auf den Geräten einer Organisation erfordert eine institutionelle Lizenz. Kontaktieren Sie uns unter contact@penkosoftware.org.',
        ],
      },
      {
        id: 'restrictions',
        title: '3. Was Sie nicht tun dürfen',
        blocks: [
          { ul: [
            'Die Software kopieren, verkaufen, vermieten oder verbreiten, außer über Funktionen, die Steam bereitstellt.',
            'Die Software zurückentwickeln (Reverse Engineering), dekompilieren oder disassemblieren, außer wo das Gesetz es ausdrücklich erlaubt.',
            'KI-Modelle, Stimmen oder andere Inhalte der Software extrahieren, um sie getrennt zu verwenden.',
            'Urheberrechts- oder Lizenzhinweise entfernen oder ändern.',
          ] },
        ],
      },
      {
        id: 'ownership',
        title: '4. Eigentum',
        blocks: ['Die Software und ihre Inhalte gehören Penko Software und deren Lizenzgebern; Sie erhalten eine Lizenz, kein Eigentum. Ihre Speicherdaten und alles, was Sie in der Software erstellen, gehören Ihnen.'],
      },
      {
        id: 'ai',
        title: '5. KI-generierte Inhalte',
        blocks: ['Die Software verwendet generative KI, die auf Ihrem Computer läuft. Ihre Dialoge, Korrekturen und Sprachausgabe werden automatisch erzeugt und können ungenau oder unerwartet sein. Die Software ist ein Lernhilfsmittel und kein Ersatz für eine qualifizierte Lehrkraft, eine offizielle Prüfung oder eine professionelle Übersetzung.'],
      },
      {
        id: 'early-access',
        title: '6. Early Access',
        blocks: ['Die Software befindet sich im Early Access. Funktionen können sich ändern, hinzukommen oder entfallen, und es können Fehler auftreten. Wir bemühen uns, Speicherdaten zwischen Updates kompatibel zu halten, können dies aber nicht garantieren. Updates werden über Steam bereitgestellt.'],
      },
      {
        id: 'privacy',
        title: '7. Datenschutz',
        blocks: ['Die Software verarbeitet Ihre Stimme und Ihre Gespräche lokal und sendet uns keine personenbezogenen Daten. Siehe die Datenschutzerklärung von Penko Vox: Japanese.'],
      },
      {
        id: 'third-party',
        title: '8. Komponenten Dritter',
        blocks: ['Die Software kann Komponenten Dritter enthalten, die unter deren eigenen Bedingungen lizenziert sind. Diese Bedingungen gelten für diese Komponenten.'],
      },
      {
        id: 'warranty',
        title: '9. Gewährleistung',
        blocks: ['Soweit gesetzlich zulässig, wird die Software „wie besehen“ ohne jegliche Gewährleistung bereitgestellt. Nichts in diesen Bedingungen schränkt die Rechte ein, die Ihnen als Verbraucher nach mexikanischem Recht zustehen, einschließlich des Bundesgesetzes zum Verbraucherschutz, oder nach den zwingenden Gesetzen Ihres Landes.'],
      },
      {
        id: 'liability',
        title: '10. Haftungsbeschränkung',
        blocks: ['Soweit gesetzlich zulässig, haften wir nicht für mittelbare Schäden oder Folgeschäden, und unsere Gesamthaftung ist auf den Betrag begrenzt, den Sie für die Software bezahlt haben.'],
      },
      {
        id: 'termination',
        title: '11. Beendigung',
        blocks: ['Diese Lizenz endet automatisch, wenn Sie gegen diese Bedingungen verstoßen. Mit ihrem Ende müssen Sie die Nutzung der Software einstellen und sie löschen.'],
      },
      {
        id: 'law',
        title: '12. Anwendbares Recht',
        blocks: ['Diese Bedingungen unterliegen den Bundesgesetzen der Vereinigten Mexikanischen Staaten. Streitigkeiten werden von den zuständigen Gerichten Mexikos entschieden, unbeschadet Ihrer Verbraucherrechte, einschließlich des Rechts, sich an die Bundesbehörde für Verbraucherschutz (PROFECO) zu wenden.'],
      },
      {
        id: 'changes',
        title: '13. Änderungen und Kontakt',
        blocks: ['Wir können diese Bedingungen aktualisieren; das Datum oben zeigt die neueste Fassung, und wesentliche Änderungen werden auf der Steam-Seite bekannt gegeben. Fragen: contact@penkosoftware.org.'],
      },
    ],
  },

  plazaPrivacy: {
    title: 'Datenschutzerklärung von Penko Plaza',
    summary: 'Wir erheben keine personenbezogenen Daten von Ihnen. Die Apps von Penko Plaza laufen in Ihrem Browser, behalten Ihre Daten dort und haben keine Konten, Analysen, Werbung oder Tracker.',
    sections: [
      {
        id: 'who',
        title: 'Wer wir sind',
        blocks: ['Penko Plaza ist die Sammlung kostenloser Open-Source-Apps von Penko Software, einem unabhängigen Softwarestudio. Fragen zum Datenschutz: contact@penkosoftware.org.'],
      },
      {
        id: 'apps',
        title: 'Die Apps von Penko Plaza',
        blocks: [
          { ul: [
            'Alles läuft in Ihrem Browser. Die Apps senden Ihre Dokumente, Notizen oder andere Inhalte nicht an uns.',
            'Ihre Daten werden nur in Ihrem Browser gespeichert (zum Beispiel im lokalen Speicher oder in der Datenbank des Browsers). Wenn Sie Ihre Browserdaten löschen, werden sie gelöscht.',
            'Keine Konten, keine Analysen, keine Werbung und kein Tracking, und keine Cookies.',
            'Ihr Browser speichert eine Kopie der Dateien der Website, damit die Apps offline funktionieren. Die Website merkt sich außerdem Ihre gewählte Sprache und Ihr Design auf Ihrem Gerät.',
            'Einige Apps bieten optionale Online-Funktionen, etwa Echtzeit-Zusammenarbeit mit anderen Personen oder einen optionalen Cloud-KI-Modus. Wenn Sie sich für eine solche Funktion entscheiden, gelangen die betroffenen Inhalte an die anderen Teilnehmenden oder an den Dienst, der diese Funktion bereitstellt, gemäß der eigenen Datenschutzerklärung dieses Dienstes.',
          ] },
        ],
      },
      {
        id: 'website',
        title: 'Diese Website',
        blocks: ['penkosoftware.org wird auf GitHub Pages gehostet. Wie die meisten Webhoster kann GitHub technische Informationen wie Ihre IP-Adresse protokollieren, um den Dienst sicher und funktionsfähig zu halten (siehe die GitHub-Datenschutzerklärung). Wir haben keinen Zugriff auf diese Protokolle und nutzen sie nicht.'],
      },
      {
        id: 'children',
        title: 'Kinder und Schulen',
        blocks: ['Da wir keine personenbezogenen Daten erheben, eignen sich die Apps von Penko Plaza für den Einsatz im Unterricht, auch mit Kindern. Schulen können uns unter contact@penkosoftware.org für Einzelheiten kontaktieren.'],
      },
      {
        id: 'paid-apps',
        title: 'Unsere kostenpflichtigen Apps',
        blocks: ['Kostenpflichtige Apps wie Penko Vox: Japanese haben eigene Datenschutzerklärungen, die von ihren Produktseiten aus verlinkt sind.'],
      },
      {
        id: 'changes',
        title: 'Änderungen und Kontakt',
        blocks: ['Wenn sich diese Erklärung ändert, aktualisieren wir sie hier und ändern das Datum oben. Fragen oder Anliegen: contact@penkosoftware.org.'],
      },
    ],
  },

  press: {
    title: 'Pressekit',
    intro: 'Alles, was Sie brauchen, um über Penko Vox: Japanese zu schreiben. Sie dürfen diese Texte und Bilder gerne in der Berichterstattung über die App verwenden.',
    factsTitle: 'Datenblatt',
    facts: [
      { label: 'Entwickler und Publisher', value: 'Penko Software' },
      { label: 'Early-Access-Veröffentlichung', value: '10. August 2026' },
      { label: 'Vollversion', value: 'Geplant für August 2027' },
      { label: 'Plattformen', value: 'Windows, Linux, SteamOS (Steam Deck)' },
      { label: 'Preis', value: 'Variiert je nach Region; siehe Steam' },
      { label: 'Oberflächensprachen', value: 'Englisch, Französisch, Deutsch, Japanisch, Koreanisch, Vereinfachtes Chinesisch, Spanisch (Lateinamerika), Vietnamesisch' },
    ],
    shortTitle: 'Kurzbeschreibung',
    short: 'Penko Vox: Japanese ist ein privater, offline arbeitender KI-Tutor, der Japanisch durch Gespräche vermittelt. Sprechen Sie 38 Szenarien von JLPT N5 bis N1 durch, führen Sie natürliche Sprachanrufe und erkunden Sie das Rollenspiel Kotoba Islands, alles lokal auf Ihrem eigenen Computer.',
    longTitle: 'Über Penko Vox: Japanese',
    long: [
      'Die meisten Sprach-Apps funktionieren wie digitale Lehrbücher. Penko Vox: Japanese ist für den nächsten Schritt gebaut: Japanisch tatsächlich im Gespräch anzuwenden. Lernende sprechen mit einem KI-Tutor, der zuhört, in seiner Rolle antwortet und sanfte Korrekturen in den Dialog einwebt.',
      'Alles läuft auf dem eigenen Computer der Lernenden. Spracherkennung, KI-Tutor und Sprachsynthese arbeiten vollständig offline, sodass Stimmen und Gespräche das Gerät nie verlassen, und es gibt keine Konten, Abonnements oder Nutzungslimits.',
      'Version 2.1 bringt Kotoba Islands, ein Rollenspiel, in dem die Spielenden sich frei mit jedem Bewohner unterhalten, natürliche Sprachanrufe mit Sprecherwechsel und Unterbrechungen, einen Study Hub mit FSRS-Spaced-Repetition, ein Offline-Wörterbuch zum Antippen sowie experimentelle Unterstützung für Controller und Steam Deck.',
      'Penko Vox: Japanese wird von Penko Software entwickelt, dessen Verkäufe Penko Plaza finanzieren, eine Sammlung kostenloser Open-Source-Apps.',
    ],
    featuresTitle: 'Wichtige Funktionen',
    assetsTitle: 'Logos und Grafiken',
    assetsNote: 'Screenshots und ein Trailer folgen in Kürze. Für andere Formate oder Größen schreiben Sie uns eine E-Mail.',
    icon: 'App-Symbol (SVG)',
    capsule: 'Kapsel-Grafik (SVG)',
    download: 'Herunterladen',
    contactTitle: 'Pressekontakt',
    contactBody: 'Für Interviews, Rezensionsschlüssel oder Fragen schreiben Sie an contact@penkosoftware.org.',
  },
};
