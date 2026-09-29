// Italiano
import type { Docs } from './types';

export const docs: Docs = {
  meta: {
    home: {
      title: 'Penko Plaza di Penko Software | App gratuite e Penko Vox: Japanese',
      description: 'App gratuite, private e open source di Penko Software, più Penko Vox: Japanese, un\'app di IA offline per imparare il giapponese, ora in accesso anticipato su Steam.',
    },
    plazaPrivacy: {
      title: 'Informativa sulla privacy | Penko Plaza',
      description: 'Informativa sulla privacy di Penko Plaza e delle sue app gratuite e open source. Non raccogliamo dati personali.',
    },
    products: {
      title: 'App a pagamento | Penko Software',
      description: 'App a pagamento di Penko Software che finanziano le nostre app gratuite e open source di Penko Plaza. Si comincia con Penko Vox: Japanese.',
    },
    vox: {
      title: 'Penko Vox: Japanese | Immersione nel giapponese con IA offline',
      description: 'Impara il giapponese parlando. Penko Vox: Japanese è un tutor di IA privato e offline con 38 scenari di conversazione dal JLPT N5 a N1, chiamate vocali e l\'RPG Kotoba Islands. Ora in accesso anticipato su Steam.',
    },
    voxPrivacy: {
      title: 'Informativa sulla privacy | Penko Vox: Japanese',
      description: 'Informativa sulla privacy di Penko Vox: Japanese. IA, riconoscimento vocale e sintesi vocale funzionano in locale; non raccogliamo dati personali.',
    },
    voxTerms: {
      title: 'Termini di utilizzo (EULA) | Penko Vox: Japanese',
      description: 'Contratto di licenza con l\'utente finale e termini di utilizzo di Penko Vox: Japanese.',
    },
    voxGuide: {
      title: 'Guida introduttiva | Penko Vox: Japanese',
      description: 'Come configurare e sfruttare al meglio Penko Vox: Japanese: requisiti, configurazione del microfono, conversazioni, Kotoba Islands, Study Hub e risoluzione dei problemi.',
    },
    voxPress: {
      title: 'Press kit | Penko Vox: Japanese',
      description: 'Press kit di Penko Vox: Japanese: scheda informativa, descrizioni, loghi e contatti.',
    },
  },

  common: {
    lastUpdated: 'Ultimo aggiornamento',
    updatedDate: '29 settembre 2026',
    translationNotice: 'Questa traduzione è fornita per comodità. In caso di differenze con la versione inglese, prevale la versione inglese.',
    onThisPage: 'In questa pagina',
    privacy: 'Privacy',
    terms: 'Termini (EULA)',
    guide: 'Guida',
    press: 'Kit stampa',
    comingSoon: 'In arrivo',
    learnMore: 'Scopri di più',
  },

  products: {
    title: 'App a pagamento',
    intro: 'App specializzate di Penko Software. Ogni acquisto finanzia le app gratuite e open source di Penko Plaza.',
    voxJapaneseDesc: 'Impara il giapponese parlando. Un tutor IA privato e offline con scenari di conversazione per tutti i livelli JLPT N5–N1, chiamate vocali naturali e il GdR Kotoba Islands.',
    teaserTitle: 'Altre novità in arrivo',
    teaserBody: 'Stiamo lavorando a nuove app. Segui Penko Software su Steam e GitHub per saperlo per primo.',
    whyTitle: 'Perché app a pagamento?',
    whyBody: [
      'Le app di Penko Plaza sono gratuite, open source con licenza GPL-3.0 e resteranno tali. Crearle e mantenerle richiede tempo, quindi finanziamo il lavoro realizzando un piccolo numero di app a pagamento specializzate.',
      'Le nostre app a pagamento sono closed source e vendute tramite negozi come Steam. Seguono gli stessi valori: funzionano sul tuo dispositivo, senza connessione a internet, e non raccolgono i tuoi dati personali.',
    ],
  },

  vox: {
    heroTitle: 'Impara il giapponese parlando',
    priceNote: 'Il prezzo varia in base alla regione. Consulta il prezzo attuale su Steam.',
    hardwareNote: 'Esegue un modello di IA completo sul tuo PC: richiede una CPU con AVX2 e almeno 16 GB di RAM.',
    checkRequirements: 'Controlla i requisiti',
    media: {
      title: 'Guardalo in azione',
      playTrailer: 'Guarda il trailer',
      trailerNotice: 'Il trailer viene trasmesso da Steam quando premi play.',
      screenshot: 'Screenshot {n}',
      previous: 'Screenshot precedente',
      next: 'Screenshot successivo',
      close: 'Chiudi',
    },
    sectionFeatures: 'Funzionalità',
    pillarsTitle: 'Come funziona: tutto gira sul tuo computer',
    pillars: [
      { title: 'Ascolta', body: 'Riconoscimento vocale e analisi parola per parola del tuo giapponese, eseguiti in locale.' },
      { title: 'Pensa', body: 'Un tutor IA offline porta avanti la conversazione e adatta la storia a ciò che dici.' },
      { title: 'Corregge', body: 'Correzioni gentili si intrecciano al dialogo, così impari senza interrompere il flusso.' },
      { title: 'Parla', body: 'Voce giapponese dal suono naturale, generata sul tuo computer.' },
    ],
    features: [
      { title: 'Kotoba Islands', body: 'Un GdR in cui esplori e parli liberamente con ogni abitante, usando il giapponese che stai imparando.' },
      { title: 'Chiamate vocali naturali', body: 'Parla ad alta voce con turni di conversazione naturali. Puoi interrompere, e la cancellazione dell\'eco ti permette di usare gli altoparlanti.' },
      { title: 'Study Hub e dizionario', body: 'Le parole che incontri finiscono in ripassi pianificati con la ripetizione dilazionata FSRS, e un dizionario offline ti permette di toccare qualsiasi parola per cercarla.' },
      { title: 'Esercizio di scrittura dei kana', body: 'Esercitati a scrivere hiragana e katakana con feedback visivo in tempo reale.' },
      { title: 'Padronanza usando la lingua', body: 'I tuoi progressi crescono quando usi correttamente una parola o una struttura grammaticale in una conversazione reale, non sfogliando flashcard.' },
      { title: 'Privato e offline', body: 'La tua voce, le tue ricerche e le tue conversazioni non lasciano mai il tuo computer. Nessun account, nessun cloud, nessuna telemetria.' },
      { title: 'Tuo per sempre', body: 'Un acquisto una tantum. Nessun abbonamento, nessun limite di token e nessun livello di utilizzo.' },
    ],
    steamFeatures: 'Obiettivi Steam · Steam Cloud · Condivisione in famiglia',
    earlyAccess: {
      title: 'Il piano dell\'Accesso anticipato',
      why: 'L\'apprendimento linguistico con IA locale cambia rapidamente, quindi abbiamo scelto l\'Accesso anticipato per dare forma a Penko Vox insieme a studenti e persone che imparano le lingue.',
      plan: 'Prevediamo la versione completa per agosto 2027. Fino ad allora, gli aggiornamenti aggiungono contenuti e miglioramenti con regolarità.',
      fullVersionTitle: 'Previsto per la versione completa',
      fullVersion: [
        'Una libreria molto più ampia di scenari di conversazione, con l\'obiettivo di superare i 100',
        'Più percorsi di apprendimento JLPT specializzati',
        'Più opzioni di voce per la sintesi vocale',
        'Analisi dei progressi più approfondite e più funzionalità Steam',
      ],
      pricing: 'Il prezzo è più basso durante l\'Accesso anticipato e salirà gradualmente con l\'arrivo dei grandi aggiornamenti.',
      community: 'Leggiamo i forum della Community di Steam e vi organizziamo sondaggi, così i giocatori possono votare i prossimi scenari.',
    },
    requirements: {
      title: 'Requisiti di sistema',
      intro: 'Penko Vox esegue un modello linguistico IA completo sul tuo computer, quindi le prestazioni dipendono dal tuo hardware. È richiesta una CPU con supporto AVX2.',
      minimum: 'Minimi',
      recommended: 'Consigliati',
      labels: { os: 'SO', processor: 'Processore', memory: 'Memoria', graphics: 'Grafica', storage: 'Spazio su disco', sound: 'Audio', notes: 'Note' },
      windows: {
        minimum: {
          os: 'Windows 10 (64 bit)',
          processor: 'CPU quad-core con AVX2 (Intel Core i5-8400 / AMD Ryzen 3 3100)',
          memory: '16 GB di RAM',
          graphics: 'Intel UHD Graphics 630 / AMD Radeon Vega 8 (DirectX 11)',
          storage: '15 GB di spazio disponibile',
          sound: 'Scheda audio compatibile con Windows',
          notes: 'Supporto AVX2 richiesto; SSD vivamente consigliato',
        },
        recommended: {
          os: 'Windows 11 (64 bit)',
          processor: '6 core / 12 thread o superiore (Intel Core i5-12400 / AMD Ryzen 5 5600X)',
          memory: '32 GB di RAM',
          graphics: 'NVIDIA GeForce RTX 3050 / RTX 3060 (4 GB+ di VRAM) o AMD Radeon RX 6600 (DirectX 12)',
          storage: '20 GB di spazio disponibile',
          sound: 'Scheda audio compatibile con Windows',
          notes: 'Un SSD e una GPU dedicata offrono le risposte più veloci',
        },
      },
      linux: {
        minimum: {
          os: 'SteamOS 3.0 o un Linux recente (Fedora 40+, Ubuntu 22.04+)',
          processor: 'CPU quad-core con AVX2 (APU di Steam Deck / AMD Ryzen 3 / Intel Core i5)',
          memory: '16 GB di RAM',
          graphics: 'GPU integrata o dedicata con supporto Vulkan',
          storage: '15 GB di spazio disponibile',
          sound: 'PulseAudio o PipeWire',
          notes: 'Testato su Steam Deck; AVX2 richiesto',
        },
        recommended: {
          os: 'SteamOS 3.5+ o Fedora 43',
          processor: 'AMD Ryzen 5 5600G / Intel Core i7 (10ª gen.) o superiore',
          memory: '32 GB di RAM',
          graphics: 'GPU dedicata con 4 GB+ di VRAM e supporto Vulkan',
          storage: '20 GB di spazio disponibile',
          sound: 'PulseAudio o PipeWire',
          notes: 'Un SSD NVMe offre le risposte conversazionali più veloci',
        },
      },
    },
    languages: {
      title: 'Lingue',
      intro: 'Tu impari il giapponese; l\'interfaccia e le spiegazioni dell\'app sono disponibili in queste lingue.',
      interface: 'Interfaccia',
      audio: 'Audio',
      subtitles: 'Sottotitoli',
    },
    aiDisclosure: {
      title: 'Informazioni sull\'IA',
      body: 'Penko Vox: Japanese usa un\'IA generativa che gira in locale. Un modello linguistico di grandi dimensioni fa da tutor di giapponese e scrive dialoghi in tempo reale in base a ciò che dici, mentre un motore neurale di sintesi vocale li pronuncia. Come ogni IA, può commettere errori, quindi consideralo un compagno di pratica e non un\'autorità.',
    },
    faqTitle: 'Domande frequenti',
    faq: [
      { q: 'Mi serve una connessione a internet?', a: 'Non per usarlo. Una volta installato tramite Steam, l\'IA, il riconoscimento vocale e la sintesi vocale girano tutti sul tuo computer.' },
      { q: 'La mia voce viene registrata o caricata?', a: 'No. L\'audio del microfono viene elaborato sul tuo computer e non viene mai caricato né salvato.' },
      { q: 'Perché servono 16 GB di RAM e una CPU con AVX2?', a: 'Penko Vox esegue un modello linguistico IA completo in locale invece che su un server. Questo richiede memoria e una CPU con istruzioni AVX2. È ciò che mantiene privati i tuoi dati e l\'app utilizzabile offline.' },
      { q: 'Funziona su Steam Deck?', a: 'Sì. È stato testato su Steam Deck, e il supporto al controller è arrivato con la versione 2.1 come funzionalità sperimentale.' },
      { q: 'Esiste una versione per Mac?', a: 'Al momento no. Penko Vox è disponibile per Windows e Linux, incluso SteamOS.' },
      { q: 'Che livello di giapponese mi serve?', a: 'Gli scenari di conversazione vanno dal livello JLPT N5 (principiante) a N1 (avanzato), e l\'esercizio sui kana aiuta se stai appena iniziando a leggere.' },
      { q: 'È un abbonamento?', a: 'No. È un acquisto una tantum su Steam, senza abbonamenti, limiti di token o livelli di utilizzo.' },
      { q: 'L\'IA ha sempre ragione?', a: 'No. È un ottimo compagno di pratica, ma può commettere errori. Per esami o traduzioni importanti, ricontrolla con un insegnante o con un riferimento affidabile.' },
      { q: 'Penko Vox è open source?', a: 'No. Penko Vox è un\'app a pagamento closed source. Le sue vendite finanziano Penko Plaza, le nostre app gratuite e open source.' },
      { q: 'Posso ottenere un rimborso?', a: 'Gli acquisti avvengono tramite Steam, quindi si applica la politica di rimborso di Steam.' },
    ],
    support: {
      title: 'Assistenza',
      body: 'Sei bloccato, hai trovato un bug o hai un\'idea? Leggi la guida introduttiva, chiedi sui forum di Steam o scrivici via email.',
      email: 'Scrivi all\'assistenza',
      forums: 'Forum della Community di Steam',
      guideLink: 'Guida introduttiva',
    },
  },

  voxGuide: {
    title: 'Introduzione a Penko Vox: Japanese',
    intro: 'Tutto ciò che ti serve per configurare Penko Vox e sfruttarlo al meglio.',
    sections: [
      {
        id: 'before-you-start',
        title: 'Prima di iniziare',
        blocks: [
          'Penko Vox esegue un modello IA completo sul tuo computer, quindi verifica che il tuo hardware sia pronto:',
          { ul: [
            'Una CPU con supporto AVX2. La maggior parte delle CPU Intel dal 2013 (Haswell) in poi e le CPU AMD Ryzen ce l\'hanno. Se non sei sicuro, cerca il modello della tua CPU insieme a "AVX2".',
            'Almeno 16 GB di RAM (32 GB consigliati).',
            '15–20 GB di spazio libero, preferibilmente su un SSD.',
            'Windows 10/11 (64 bit), SteamOS o una distribuzione Linux recente.',
          ] },
          'L\'elenco completo è nei requisiti di sistema sulla pagina del prodotto.',
        ],
      },
      {
        id: 'install',
        title: 'Installazione e primo avvio',
        blocks: [
          { ol: [
            'Acquista e installa Penko Vox: Japanese da Steam.',
            'Avvialo dalla tua libreria Steam.',
            'Il primo avvio può richiedere più tempo mentre l\'IA si carica per la prima volta. Gli avvii successivi sono più rapidi.',
          ] },
        ],
      },
      {
        id: 'microphone',
        title: 'Configura il microfono',
        blocks: [
          'Parlare è il cuore di Penko Vox. Una cuffia con microfono offre i risultati più nitidi, ma funzionano anche gli altoparlanti grazie alla cancellazione dell\'eco.',
          { ul: [
            'Windows: apri Impostazioni › Privacy e sicurezza › Microfono e assicurati che le app desktop possano usarlo.',
            'Linux: seleziona il microfono come ingresso predefinito nelle impostazioni audio del sistema (PipeWire o PulseAudio).',
            'Steam Deck: il microfono integrato funziona, e una cuffia migliora il riconoscimento nei luoghi rumorosi.',
          ] },
        ],
      },
      {
        id: 'first-conversation',
        title: 'La tua prima conversazione',
        blocks: [
          { ol: [
            'Scegli uno scenario di conversazione adatto al tuo livello JLPT, da N5 (principiante) a N1 (avanzato), oppure crea uno scenario personalizzato.',
            'Rispondi in giapponese, a voce o scrivendo.',
            'Il tutor risponde restando nel personaggio e inserisce le correzioni nella conversazione.',
            'Tocca qualsiasi parola per cercarla nel dizionario offline.',
          ] },
          { callout: 'Non preoccuparti degli errori. Sono il modo in cui il tutor capisce su cosa aiutarti.' },
        ],
      },
      {
        id: 'voice-calls',
        title: 'Chiamate vocali',
        blocks: [
          'Le chiamate vocali sembrano una conversazione con una persona: parla in modo naturale, fai pause e intervieni. Puoi interrompere il tutor, e i turni di conversazione si adattano a te.',
        ],
      },
      {
        id: 'kotoba-islands',
        title: 'Kotoba Islands',
        blocks: [
          'Kotoba Islands è un GdR integrato in Penko Vox. Esplora le isole e parla liberamente con ogni abitante. Non c\'è un copione da seguire, quindi usa il giapponese che conosci e prova parole nuove.',
        ],
      },
      {
        id: 'study-hub',
        title: 'Study Hub, dizionario ed esercizio sui kana',
        blocks: [
          { ul: [
            'Study Hub: le parole che incontri nelle conversazioni diventano ripassi, pianificati con la ripetizione dilazionata FSRS così le rivedi poco prima di dimenticarle. Pochi minuti al giorno funzionano meglio.',
            'Dizionario: tocca qualsiasi parola per cercarla, completamente offline.',
            'Esercizio sui kana: impara a scrivere hiragana e katakana tratto per tratto, con feedback in tempo reale.',
          ] },
        ],
      },
      {
        id: 'progress',
        title: 'Come funzionano i progressi',
        blocks: [
          'La padronanza cresce quando usi correttamente una parola o una struttura grammaticale in una conversazione reale. I ripassi aiutano a ricordare, ma ciò che conta è usare la lingua.',
        ],
      },
      {
        id: 'controller',
        title: 'Controller e Steam Deck',
        blocks: [
          'Il supporto al controller è arrivato con la versione 2.1 ed è sperimentale. Se qualcosa non risponde come previsto, passa a mouse e tastiera (o al touchscreen su Steam Deck) e faccelo sapere.',
        ],
      },
      {
        id: 'saves',
        title: 'I tuoi salvataggi e la privacy',
        blocks: [
          'Conversazioni, vocabolario e progressi sono salvati in un file locale, saveData.json. Eliminarlo azzera i tuoi progressi. Se attivi Steam Cloud, Steam sincronizza quel file tra i tuoi computer.',
          'Nulla di ciò che dici o scrivi viene inviato da nessuna parte. Consulta l\'informativa sulla privacy per i dettagli.',
        ],
      },
      {
        id: 'performance',
        title: 'Consigli sulle prestazioni',
        blocks: [
          { ul: [
            'Installa su un SSD, meglio se NVMe, per caricamenti e risposte più rapidi.',
            'Chiudi le app che usano molta memoria, come i browser con molte schede, prima di sessioni lunghe.',
            'Una GPU dedicata con 4 GB o più di VRAM offre le risposte più veloci.',
          ] },
        ],
      },
      {
        id: 'troubleshooting',
        title: 'Risoluzione dei problemi',
        blocks: [
          { ul: [
            'Non si avvia: verifica che la tua CPU supporti AVX2 e che tu abbia almeno 16 GB di RAM.',
            'Le risposte sono lente: chiudi le altre app e verifica che il gioco sia installato su un SSD.',
            'Il microfono non viene rilevato: controlla i permessi del microfono e il dispositivo di ingresso predefinito del sistema, poi riavvia Penko Vox.',
            'Il tutor sente se stesso: usa una cuffia o abbassa il volume degli altoparlanti.',
          ] },
        ],
      },
      {
        id: 'help',
        title: 'Come ottenere aiuto',
        blocks: [
          'Chiedi sui forum della Community di Steam o scrivi a contact@penkosoftware.org. Indica il tuo sistema operativo, la CPU, la RAM e cosa è successo.',
        ],
      },
    ],
  },

  voxPrivacy: {
    title: 'Informativa sulla privacy di Penko Vox: Japanese',
    summary: 'Penko Vox: Japanese gira interamente sul tuo computer. Non raccogliamo i tuoi dati personali: nessun account, telemetria, analisi o pubblicità.',
    sections: [
      {
        id: 'who',
        title: 'Chi siamo',
        blocks: ['Penko Vox: Japanese è realizzato da Penko Software, uno studio indipendente di software. Per domande sulla privacy: contact@penkosoftware.org.'],
      },
      {
        id: 'on-device',
        title: 'Cosa succede sul tuo computer',
        blocks: [
          { ul: [
            'L\'IA, il riconoscimento vocale e la sintesi vocale girano tutti in locale sul tuo computer.',
            'L\'audio del microfono viene elaborato sul tuo computer. Non viene mai caricato e non viene mai salvato.',
            'Le tue conversazioni, il tuo vocabolario e i tuoi progressi sono salvati in un file locale, saveData.json, che puoi eliminare in qualsiasi momento.',
            'Nessun account, telemetria, analisi o pubblicità.',
            'Non serve alcuna connessione a internet per usare l\'app.',
          ] },
        ],
      },
      {
        id: 'steam',
        title: 'Cosa gestisce Steam',
        blocks: ['Penko Vox: Japanese è venduto tramite Steam. Gli acquisti, gli obiettivi e, se li attivi, i salvataggi su Steam Cloud (che sincronizzano il tuo file di salvataggio) sono gestiti da Valve secondo l\'Informativa sulla privacy di Steam: https://store.steampowered.com/privacy_agreement/. Non riceviamo i tuoi dati di pagamento.'],
      },
      {
        id: 'website',
        title: 'Questo sito web',
        blocks: ['Il nostro sito web è ospitato su GitHub Pages. Come la maggior parte degli host web, GitHub può registrare informazioni tecniche, come il tuo indirizzo IP, per mantenere il servizio sicuro e in funzione (consulta l\'Informativa sulla privacy di GitHub). Non abbiamo accesso a questi log e non li utilizziamo. Il sito memorizza sul tuo dispositivo la lingua e il tema che hai scelto, e non usa cookie, analisi o tracker. Gli screenshot sono serviti dal nostro sito; il trailer viene trasmesso dai server di Steam solo dopo che premi play.'],
      },
      {
        id: 'children',
        title: 'Minori e scuole',
        blocks: ['Poiché l\'app non raccoglie dati personali, è adatta all\'uso in classe, anche con i minori. Scuole e università possono contattarci all\'indirizzo contact@penkosoftware.org per maggiori dettagli, progetti pilota in classe o licenze istituzionali.'],
      },
      {
        id: 'changes',
        title: 'Modifiche e contatti',
        blocks: ['Se questa informativa cambia, la aggiorneremo qui e modificheremo la data in alto. Domande o richieste: contact@penkosoftware.org.'],
      },
    ],
  },

  voxTerms: {
    title: 'Termini di utilizzo (EULA) di Penko Vox: Japanese',
    summary: 'In breve: puoi usare Penko Vox sui tuoi dispositivi, i tuoi salvataggi sono tuoi, l\'IA può commettere errori e nulla di quanto qui riportato ti toglie i diritti che hai come consumatore.',
    sections: [
      {
        id: 'agreement',
        title: '1. Accordo',
        blocks: ['Questi termini sono un accordo tra te e Penko Software ("noi") relativo a Penko Vox: Japanese (il "Software"). Installando o usando il Software, li accetti. Il tuo acquisto tramite Steam è inoltre disciplinato dal Contratto di abbonamento Steam.'],
      },
      {
        id: 'licence',
        title: '2. La tua licenza',
        blocks: [
          'Ti concediamo una licenza personale, non esclusiva e non trasferibile per installare e usare il Software su dispositivi di tua proprietà o sotto il tuo controllo, per il tuo apprendimento personale, nei limiti consentiti da Steam (inclusa la Condivisione in famiglia di Steam).',
          'Usare il Software per tenere lezioni o sui dispositivi di un\'organizzazione richiede una licenza istituzionale. Contattaci all\'indirizzo contact@penkosoftware.org.',
        ],
      },
      {
        id: 'restrictions',
        title: '3. Cosa non puoi fare',
        blocks: [
          { ul: [
            'Copiare, vendere, noleggiare o distribuire il Software, se non tramite le funzionalità fornite da Steam.',
            'Effettuare il reverse engineering, decompilare o disassemblare il Software, salvo nei casi in cui la legge lo consenta espressamente.',
            'Estrarre i modelli IA, le voci o altre risorse del Software per usarli separatamente.',
            'Rimuovere o modificare le note sul copyright o sulla licenza.',
          ] },
        ],
      },
      {
        id: 'ownership',
        title: '4. Proprietà',
        blocks: ['Il Software e i suoi contenuti appartengono a Penko Software e ai suoi licenzianti; ricevi una licenza, non la proprietà. I tuoi dati di salvataggio e qualsiasi cosa crei nel Software ti appartengono.'],
      },
      {
        id: 'ai',
        title: '5. Contenuti generati dall\'IA',
        blocks: ['Il Software usa un\'IA generativa che gira sul tuo computer. I suoi dialoghi, le sue correzioni e la sua voce sono generati automaticamente e possono essere inesatti o inattesi. Il Software è uno strumento di supporto all\'apprendimento, non un sostituto di un insegnante qualificato, di un esame ufficiale o di una traduzione professionale.'],
      },
      {
        id: 'early-access',
        title: '6. Accesso anticipato',
        blocks: ['Il Software è in Accesso anticipato. Le funzionalità possono cambiare, essere aggiunte o rimosse, e potresti riscontrare dei bug. Ci impegniamo a mantenere compatibili i dati di salvataggio tra gli aggiornamenti, ma non possiamo garantirlo. Gli aggiornamenti vengono distribuiti tramite Steam.'],
      },
      {
        id: 'privacy',
        title: '7. Privacy',
        blocks: ['Il Software elabora la tua voce e le tue conversazioni in locale e non ci invia dati personali. Consulta l\'Informativa sulla privacy di Penko Vox: Japanese.'],
      },
      {
        id: 'third-party',
        title: '8. Componenti di terze parti',
        blocks: ['Il Software può includere componenti di terze parti, concessi in licenza secondo i loro termini. Tali termini si applicano a quei componenti.'],
      },
      {
        id: 'warranty',
        title: '9. Garanzia',
        blocks: ['Nella misura consentita dalla legge, il Software è fornito "così com\'è", senza garanzie di alcun tipo. Nulla in questi termini limita i diritti di cui godi come consumatore ai sensi della legge messicana, inclusa la Legge federale sulla protezione dei consumatori, o ai sensi delle leggi imperative del tuo paese.'],
      },
      {
        id: 'liability',
        title: '10. Limitazione di responsabilità',
        blocks: ['Nella misura consentita dalla legge, non siamo responsabili per danni indiretti o consequenziali, e la nostra responsabilità totale è limitata all\'importo che hai pagato per il Software.'],
      },
      {
        id: 'termination',
        title: '11. Risoluzione',
        blocks: ['Questa licenza termina automaticamente se violi questi termini. Quando termina, devi smettere di usare il Software ed eliminarlo.'],
      },
      {
        id: 'law',
        title: '12. Legge applicabile',
        blocks: ['Questi termini sono disciplinati dalle leggi federali degli Stati Uniti Messicani. Le controversie saranno risolte dai tribunali competenti del Messico, fatti salvi i tuoi diritti di consumatore, incluso il diritto di rivolgerti alla Procura federale per la protezione dei consumatori (PROFECO).'],
      },
      {
        id: 'changes',
        title: '13. Modifiche e contatti',
        blocks: ['Possiamo aggiornare questi termini; la data in alto indica la versione più recente e le modifiche significative saranno annunciate sulla pagina Steam. Domande: contact@penkosoftware.org.'],
      },
    ],
  },

  plazaPrivacy: {
    title: 'Informativa sulla privacy di Penko Plaza',
    summary: 'Non raccogliamo i tuoi dati personali. Le app di Penko Plaza girano nel tuo browser, conservano lì i tuoi dati e non hanno account, analisi, pubblicità o tracker.',
    sections: [
      {
        id: 'who',
        title: 'Chi siamo',
        blocks: ['Penko Plaza è la raccolta di app gratuite e open source realizzate da Penko Software, uno studio indipendente di software. Per domande sulla privacy: contact@penkosoftware.org.'],
      },
      {
        id: 'apps',
        title: 'App di Penko Plaza',
        blocks: [
          { ul: [
            'Tutto gira nel tuo browser. Le app non ci inviano i tuoi documenti, le tue note o altri contenuti.',
            'I tuoi dati sono memorizzati solo nel tuo browser (ad esempio, nella sua memoria locale o nel suo database). Cancellare i dati del browser li elimina.',
            'Nessun account, analisi, pubblicità o tracciamento, e nessun cookie.',
            'Il tuo browser conserva una copia dei file del sito in modo che le app funzionino offline. Il sito ricorda inoltre sul tuo dispositivo la lingua e il tema che hai scelto.',
            'Alcune app offrono funzionalità online facoltative, come la collaborazione in tempo reale con altre persone o una modalità IA cloud facoltativa. Se scegli di usarne una, i contenuti coinvolti vengono inviati agli altri partecipanti o al servizio che fornisce quella funzionalità, secondo l\'informativa sulla privacy di tale servizio.',
          ] },
        ],
      },
      {
        id: 'website',
        title: 'Questo sito web',
        blocks: ['penkosoftware.org è ospitato su GitHub Pages. Come la maggior parte degli host web, GitHub può registrare informazioni tecniche, come il tuo indirizzo IP, per mantenere il servizio sicuro e in funzione (consulta l\'Informativa sulla privacy di GitHub). Non abbiamo accesso a questi log e non li utilizziamo.'],
      },
      {
        id: 'children',
        title: 'Minori e scuole',
        blocks: ['Poiché non raccogliamo dati personali, le app di Penko Plaza sono adatte all\'uso in classe, anche con i minori. Le scuole possono contattarci all\'indirizzo contact@penkosoftware.org per maggiori dettagli.'],
      },
      {
        id: 'paid-apps',
        title: 'Le nostre app a pagamento',
        blocks: ['Le app a pagamento come Penko Vox: Japanese hanno una propria informativa sulla privacy, collegata dalle rispettive pagine del prodotto.'],
      },
      {
        id: 'changes',
        title: 'Modifiche e contatti',
        blocks: ['Se questa informativa cambia, la aggiorneremo qui e modificheremo la data in alto. Domande o richieste: contact@penkosoftware.org.'],
      },
    ],
  },

  press: {
    title: 'Kit stampa',
    intro: 'Tutto ciò che ti serve per scrivere di Penko Vox: Japanese. Puoi usare liberamente questi testi e queste immagini nei tuoi articoli sull\'app.',
    factsTitle: 'Scheda informativa',
    facts: [
      { label: 'Sviluppatore ed editore', value: 'Penko Software' },
      { label: 'Uscita in Accesso anticipato', value: '10 agosto 2026' },
      { label: 'Versione completa', value: 'Prevista per agosto 2027' },
      { label: 'Piattaforme', value: 'Windows, Linux, SteamOS (Steam Deck)' },
      { label: 'Prezzo', value: 'Varia in base alla regione; vedi Steam' },
      { label: 'Lingue dell\'interfaccia', value: 'inglese, francese, tedesco, giapponese, coreano, cinese semplificato, spagnolo (America Latina), vietnamita' },
    ],
    shortTitle: 'Descrizione breve',
    short: 'Penko Vox: Japanese è un tutor IA privato e offline che insegna il giapponese attraverso la conversazione. Parla in 38 scenari per i livelli JLPT N5–N1, fai chiamate vocali naturali ed esplora il GdR Kotoba Islands, tutto in esecuzione in locale sul tuo computer.',
    longTitle: 'Informazioni su Penko Vox: Japanese',
    long: [
      'La maggior parte delle app per le lingue funziona come un libro di testo digitale. Penko Vox: Japanese è pensato per il passo successivo: usare davvero il giapponese in una conversazione. Chi impara parla con un tutor IA che ascolta, risponde restando nel personaggio e inserisce correzioni gentili nel dialogo.',
      'Tutto gira sul computer di chi impara. Il riconoscimento vocale, il tutor IA e la sintesi vocale funzionano completamente offline, quindi voci e conversazioni non lasciano mai il dispositivo, e non ci sono account, abbonamenti o limiti di utilizzo.',
      'La versione 2.1 aggiunge Kotoba Islands, un GdR in cui i giocatori parlano liberamente con ogni abitante, chiamate vocali naturali con turni di conversazione e interruzioni, uno Study Hub con ripetizione dilazionata FSRS, un dizionario offline con ricerca al tocco e un supporto sperimentale per controller e Steam Deck.',
      'Penko Vox: Japanese è realizzato da Penko Software, le cui vendite finanziano Penko Plaza, una raccolta di app gratuite e open source.',
    ],
    featuresTitle: 'Funzionalità principali',
    assetsTitle: 'Loghi e grafica',
    assetsNote: 'Screenshot e un trailer arriveranno presto. Per altri formati o dimensioni, scrivici via email.',
    icon: 'Icona dell\'app (SVG)',
    capsule: 'Grafica capsule (SVG)',
    download: 'Scarica',
    contactTitle: 'Contatto stampa',
    contactBody: 'Per interviste, chiavi di recensione o domande, scrivi a contact@penkosoftware.org.',
  },
};
