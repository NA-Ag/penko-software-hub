// 日本語
import type { Docs } from './types';

export const docs: Docs = {
  meta: {
    home: {
      title: 'Penko Plaza by Penko Software | 無料アプリと Penko Vox: Japanese',
      description: 'Penko Software の無料・プライベート・オープンソースのアプリと、オフライン AI で日本語を学ぶ Penko Vox: Japanese。Steam でアーリーアクセス中です。',
    },
    plazaPrivacy: {
      title: 'プライバシーポリシー | Penko Plaza',
      description: 'Penko Plaza と無料オープンソースアプリのプライバシーポリシー。個人データは一切収集しません。',
    },
    products: {
      title: '有料アプリ | Penko Software',
      description: 'Penko Plaza の無料オープンソースアプリを支える、Penko Software の有料アプリ。第一弾は Penko Vox: Japanese です。',
    },
    vox: {
      title: 'Penko Vox: Japanese | オフライン AI で日本語イマージョン',
      description: '話して学ぶ日本語。Penko Vox: Japanese は、JLPT N5–N1 にわたる 38 の会話シナリオ、音声通話、Kotoba Islands RPG を備えた、プライベートなオフライン AI 講師です。Steam でアーリーアクセス中。',
    },
    voxPrivacy: {
      title: 'プライバシーポリシー | Penko Vox: Japanese',
      description: 'Penko Vox: Japanese のプライバシーポリシー。AI、音声認識、音声合成はすべてローカルで動作し、個人データは収集しません。',
    },
    voxTerms: {
      title: '利用規約 (EULA) | Penko Vox: Japanese',
      description: 'Penko Vox: Japanese のエンドユーザー使用許諾契約と利用規約。',
    },
    voxGuide: {
      title: 'スタートガイド | Penko Vox: Japanese',
      description: 'Penko Vox: Japanese の設定と活用方法：動作環境、マイク設定、会話、Kotoba Islands、Study Hub、トラブルシューティング。',
    },
    voxCredits: {
      title: 'クレジットとライセンス | Penko Vox: Japanese',
      description: 'Penko Vox: Japanese で使用している第三者のソフトウェア、AI モデル、データと、そのライセンスおよび必要な表示。',
    },
    voxPress: {
      title: 'プレスキット | Penko Vox: Japanese',
      description: 'Penko Vox: Japanese のプレスキット：ファクトシート、紹介文、ロゴ、連絡先。',
    },
  },

  common: {
    lastUpdated: '最終更新',
    updatedDate: '2026 年 9 月 29 日',
    translationNotice: 'この翻訳は利便性のために提供されています。英語版と内容が異なる場合は、英語版が優先されます。',
    onThisPage: 'このページの内容',
    privacy: 'プライバシー',
    terms: '利用規約 (EULA)',
    guide: 'ガイド',
    press: 'プレスキット',
    credits: 'クレジット',
    comingSoon: '近日公開',
    learnMore: '詳しく見る',
  },

  products: {
    title: '有料アプリ',
    intro: 'Penko Software の専門アプリです。購入していただくたびに、Penko Plaza の無料のオープンソースアプリの開発資金になります。',
    voxJapaneseDesc: '話しながら日本語を学べます。プライバシーを守るオフラインの AI チューターが、JLPT N5–N1 にわたる会話シナリオ、自然な音声通話、そして Kotoba Islands RPG で学習を支えます。',
    teaserTitle: '新しいアプリを準備中',
    teaserBody: '新しいアプリを開発しています。最新情報は、Steam と GitHub で Penko Software をフォローしてご確認ください。',
    whyTitle: 'なぜ有料アプリなのか',
    whyBody: [
      'Penko Plaza のアプリは無料で、GPL-3.0 ライセンスの下でオープンソースとして公開されており、これからもそれは変わりません。開発と維持管理には時間がかかるため、少数の専門的な有料アプリを作ることでその資金をまかなっています。',
      '有料アプリはクローズドソースで、Steam などのストアを通じて販売されます。考え方は同じです。お使いのデバイス上で動作し、オフラインで使え、個人データを収集しません。',
    ],
  },

  vox: {
    heroTitle: '話しながら日本語を学ぶ',
    priceNote: '価格は地域によって異なります。現在の価格は Steam でご確認ください。',
    hardwareNote: 'フルサイズの AI モデルを PC 上で実行します。AVX2 対応の CPU と 16 GB 以上の RAM が必要です。',
    checkRequirements: '動作環境を確認する',
    media: {
      title: '実際の動作を見る',
      playTrailer: 'トレーラーを再生',
      trailerNotice: 'トレーラーは、再生ボタンを押したときに Steam からストリーミングされます。',
      screenshot: 'スクリーンショット {n}',
      previous: '前のスクリーンショット',
      next: '次のスクリーンショット',
      close: '閉じる',
    },
    sectionFeatures: '機能',
    pillarsTitle: '仕組み: すべてお使いのコンピューター上で動作します',
    pillars: [
      { title: '聞く', body: '音声認識とあなたの日本語の単語ごとの分析を、ローカルで実行します。' },
      { title: '考える', body: 'オフラインの AI チューターが会話を続け、あなたの発言に合わせて物語を展開します。' },
      { title: '直す', body: 'やさしい訂正が会話の中に自然に織り込まれるので、流れを止めずに学べます。' },
      { title: '話す', body: '自然に聞こえる日本語の音声を、お使いのマシン上で生成します。' },
    ],
    features: [
      { title: 'Kotoba Islands', body: '島々を探検し、学んでいる日本語を使ってすべての住人と自由に話せる RPG です。' },
      { title: '自然な音声通話', body: '自然な間合いで声に出して話せます。会話を遮ることもでき、エコーキャンセルのおかげでスピーカーも使えます。' },
      { title: 'スタディハブと辞書', body: '出会った単語は FSRS 間隔反復で復習スケジュールに入り、オフライン辞書では単語をタップするだけで調べられます。' },
      { title: '書き練習', body: 'リアルタイムの視覚的フィードバックを見ながら、ひらがな、カタカナ、初級の漢字や単語の書き方を練習できます。' },
      { title: '使って身につく', body: '上達はフラッシュカードをめくることではなく、実際の会話で単語や文法パターンを正しく使ったときに積み重なります。' },
      { title: 'プライベートでオフライン', body: '声も、調べた内容も、会話も、コンピューターの外には出ません。アカウントもクラウドもテレメトリーもありません。' },
      { title: 'ずっと使える', body: '買い切りです。サブスクリプションも、トークン制限も、利用ティアもありません。' },
    ],
    steamFeatures: 'Steam 実績 · Steam クラウド · ファミリーシェアリング',
    earlyAccess: {
      title: '早期アクセスの計画',
      why: 'ローカル AI による語学学習は急速に変化しています。そこで、学生や語学学習者の皆さまと一緒に Penko Vox を育てるため、早期アクセスで公開しました。',
      plan: '正式版のリリースは 2027 年 8 月を予定しています。それまでは、アップデートでコンテンツの追加や改善を定期的に行います。',
      fullVersionTitle: '正式版で予定している内容',
      fullVersion: [
        '会話シナリオのライブラリを大幅に拡充',
        'より専門的な JLPT 学習パスの追加',
        '音声合成の音声オプションの追加',
        'より詳しい学習進捗の分析と、Steam 機能のさらなる追加',
      ],
      pricing: '価格は早期アクセス期間中は低めに設定されており、大型アップデートの配信に合わせて徐々に上がります。',
      community: 'Steam コミュニティのフォーラムを読み、そこでアンケートも実施しています。次のシナリオはプレイヤーの皆さまの投票で決められます。',
    },
    requirements: {
      title: '動作環境',
      intro: 'Penko Vox は完全な AI 言語モデルをお使いのコンピューター上で実行するため、性能はハードウェアによって決まります。AVX2 に対応した CPU が必要です。',
      minimum: '最小',
      recommended: '推奨',
      labels: { os: 'OS', processor: 'プロセッサー', memory: 'メモリー', graphics: 'グラフィックス', storage: 'ストレージ', sound: 'サウンド', notes: '備考' },
      windows: {
        minimum: {
          os: 'Windows 10 (64 ビット)',
          processor: 'AVX2 対応のクアッドコア CPU (Intel Core i5-8400 / AMD Ryzen 3 3100)',
          memory: '16 GB RAM',
          graphics: 'Intel UHD Graphics 630 / AMD Radeon Vega 8 (DirectX 11)',
          storage: '15 GB の空き容量',
          sound: 'Windows 互換のサウンドカード',
          notes: 'AVX2 対応が必須です。SSD を強く推奨します',
        },
        recommended: {
          os: 'Windows 11 (64 ビット)',
          processor: '6 コア / 12 スレッド以上 (Intel Core i5-12400 / AMD Ryzen 5 5600X)',
          memory: '32 GB RAM',
          graphics: 'NVIDIA GeForce RTX 3050 / RTX 3060 (4 GB 以上の VRAM) または AMD Radeon RX 6600 (DirectX 12)',
          storage: '20 GB の空き容量',
          sound: 'Windows 互換のサウンドカード',
          notes: 'SSD と専用 GPU があると、最も速く応答します',
        },
      },
      linux: {
        minimum: {
          os: 'SteamOS 3.0 または最新の Linux (Fedora 40+、Ubuntu 22.04+)',
          processor: 'AVX2 対応のクアッドコア CPU (Steam Deck APU / AMD Ryzen 3 / Intel Core i5)',
          memory: '16 GB RAM',
          graphics: 'Vulkan に対応した内蔵または専用 GPU',
          storage: '15 GB の空き容量',
          sound: 'PulseAudio または PipeWire',
          notes: 'Steam Deck で動作確認済み。AVX2 が必須です',
        },
        recommended: {
          os: 'SteamOS 3.5+ または Fedora 43',
          processor: 'AMD Ryzen 5 5600G / Intel Core i7 (第 10 世代) 以上',
          memory: '32 GB RAM',
          graphics: '4 GB 以上の VRAM を搭載し、Vulkan に対応した専用 GPU',
          storage: '20 GB の空き容量',
          sound: 'PulseAudio または PipeWire',
          notes: 'NVMe SSD があると、会話の応答が最も速くなります',
        },
      },
    },
    languages: {
      title: '言語',
      intro: 'インターフェースと字幕は 8 つの言語でご利用いただけます。チューターが話すのは、学習中の言語である日本語です。',
      interface: 'インターフェース',
      audio: '音声',
      subtitles: '字幕',
    },
    aiDisclosure: {
      title: 'AI について',
      body: 'Penko Vox: Japanese は、ローカルで動作する生成 AI を使用しています。大規模言語モデルが日本語チューターとなり、あなたの発言に応じてリアルタイムで会話文を作成し、ニューラルテキスト読み上げエンジンがそれを音声にします。どんな AI とも同じく間違えることがあるため、権威ではなく練習相手として活用してください。',
    },
    faqTitle: 'よくある質問',
    faq: [
      { q: 'インターネット接続は必要ですか?', a: '使用時には不要です。Steam からインストールすれば、AI、音声認識、音声合成はすべてお使いのコンピューター上で動作します。' },
      { q: '声は録音されたり、アップロードされたりしますか?', a: 'いいえ。マイクの音声はお使いのコンピューター上で処理され、アップロードも保存もされません。' },
      { q: 'なぜ 16 GB の RAM と AVX2 対応の CPU が必要なのですか?', a: 'Penko Vox は、サーバーではなくローカルで完全な AI 言語モデルを実行します。そのためにメモリーと、AVX2 命令に対応した CPU が必要です。これが、データのプライバシーを守り、アプリをオフラインで使えるようにしている仕組みです。' },
      { q: 'Steam Deck で動作しますか?', a: 'はい。Steam Deck で動作確認済みで、コントローラーへの対応はバージョン 2.1 で実験的機能として追加されました。' },
      { q: 'Mac 版はありますか?', a: '現時点ではありません。Penko Vox は SteamOS を含む Windows と Linux に対応しています。' },
      { q: 'どのくらいの日本語レベルが必要ですか?', a: '会話シナリオは JLPT N5 (初級) から N1 (上級) までそろっています。読み方を学び始めたばかりの方には、書き練習も役立ちます。' },
      { q: 'サブスクリプションですか?', a: 'いいえ。Steam での買い切りで、サブスクリプション、トークン制限、利用ティアはありません。' },
      { q: 'AI はいつも正しいですか?', a: 'いいえ。頼れる練習相手ですが、間違えることがあります。試験や重要な翻訳では、先生や信頼できる資料で確認してください。' },
      { q: 'Penko Vox はオープンソースですか?', a: 'いいえ。Penko Vox はクローズドソースの有料アプリです。その売上は、無料のオープンソースアプリである Penko Plaza の資金になります。' },
      { q: '返金はできますか?', a: '購入は Steam を通じて行われるため、Steam の返金ポリシーが適用されます。' },
    ],
    support: {
      title: 'サポート',
      body: 'お困りのとき、不具合を見つけたとき、アイデアがあるときは、入門ガイドをお読みいただくか、Steam のフォーラムで質問するか、メールでご連絡ください。',
      email: 'サポートにメールする',
      forums: 'Steam コミュニティフォーラム',
      guideLink: '入門ガイド',
    },
  },

  voxGuide: {
    title: 'Penko Vox: Japanese 入門ガイド',
    intro: 'Penko Vox をセットアップして使いこなすために必要なことをまとめました。',
    sections: [
      {
        id: 'before-you-start',
        title: '始める前に',
        blocks: [
          'Penko Vox はお使いのコンピューター上で完全な AI モデルを実行するため、ハードウェアが対応しているかご確認ください。',
          { ul: [
            'AVX2 に対応した CPU。2013 年以降 (Haswell) のほとんどの Intel CPU と AMD Ryzen CPU が対応しています。不明な場合は、お使いの CPU の型番と「AVX2」で検索してください。',
            '16 GB 以上の RAM (32 GB を推奨)。',
            '15〜20 GB の空き容量。SSD が理想的です。',
            'Windows 10/11 (64 ビット)、SteamOS、または最新の Linux ディストリビューション。',
          ] },
          '完全な一覧は、製品ページの動作環境をご覧ください。',
        ],
      },
      {
        id: 'install',
        title: 'インストールと初回起動',
        blocks: [
          { ol: [
            'Steam で Penko Vox: Japanese を購入してインストールします。',
            'Steam ライブラリから起動します。',
            '初回起動では AI を初めて読み込むため、時間がかかることがあります。2 回目以降は速く起動します。',
          ] },
        ],
      },
      {
        id: 'microphone',
        title: 'マイクの設定',
        blocks: [
          '話すことは Penko Vox の中心です。ヘッドセットを使うと最もはっきり認識されますが、エコーキャンセルのおかげでスピーカーでも使えます。',
          { ul: [
            'Windows: 設定 › プライバシーとセキュリティ › マイク を開き、デスクトップアプリによるマイクの使用が許可されていることを確認します。',
            'Linux: システムのサウンド設定で、お使いのマイクを既定の入力に選択します (PipeWire または PulseAudio)。',
            'Steam Deck: 内蔵マイクが使えます。騒がしい場所ではヘッドセットを使うと認識が良くなります。',
          ] },
        ],
      },
      {
        id: 'first-conversation',
        title: '最初の会話',
        blocks: [
          { ol: [
            'N5 (初級) から N1 (上級) まで、ご自身の JLPT レベルに合った会話シナリオを選ぶか、オリジナルのカスタムシナリオを作成します。',
            '日本語で、声に出すか入力して答えます。',
            'チューターが役になりきって返答し、訂正を会話の中に織り込みます。',
            '単語をタップすると、オフライン辞書で調べられます。',
          ] },
          { callout: '間違いを気にする必要はありません。間違いから、チューターはあなたに何を手伝えばよいかを知ることができます。' },
        ],
      },
      {
        id: 'voice-calls',
        title: '音声通話',
        blocks: [
          '音声通話は、人と話しているような感覚です。自然に話し、間を置き、割り込むこともできます。チューターの話を遮ることもでき、会話の間合いはあなたに合わせて調整されます。',
        ],
      },
      {
        id: 'kotoba-islands',
        title: 'Kotoba Islands',
        blocks: [
          'Kotoba Islands は Penko Vox に組み込まれた RPG です。島々を探検し、すべての住人と自由に話しましょう。従うべき台本はないので、知っている日本語を使い、新しい単語も試してみてください。',
        ],
      },
      {
        id: 'study-hub',
        title: 'スタディハブ、辞書、書き練習',
        blocks: [
          { ul: [
            'スタディハブ: 会話で出会った単語が復習になり、FSRS 間隔反復で、忘れる直前に表示されるようスケジュールされます。1 日数分がいちばん効果的です。',
            '辞書: 単語をタップして調べられます。完全オフラインです。',
            '書き練習: ひらがな、カタカナ、初級の漢字や単語を 1 画ずつ、リアルタイムのフィードバックを見ながら書けるようになります。',
          ] },
        ],
      },
      {
        id: 'progress',
        title: '上達の仕組み',
        blocks: [
          '習熟度は、実際の会話で単語や文法パターンを正しく使ったときに上がります。復習は記憶の助けになりますが、大切なのは言語を実際に使うことです。',
        ],
      },
      {
        id: 'controller',
        title: 'コントローラーと Steam Deck',
        blocks: [
          'コントローラーへの対応はバージョン 2.1 で追加された実験的な機能です。期待どおりに反応しない場合は、マウスとキーボード (Steam Deck ではタッチスクリーン) に切り替えて、お知らせください。',
        ],
      },
      {
        id: 'saves',
        title: 'セーブデータとプライバシー',
        blocks: [
          '会話、語彙、進捗は、ローカルファイルの saveData.json に保存されます。このファイルを削除すると進捗がリセットされます。Steam クラウドをオンにすると、Steam がそのファイルをお使いのコンピューター間で同期します。',
          '話した内容も入力した内容も、どこにも送信されません。詳しくはプライバシーポリシーをご覧ください。',
        ],
      },
      {
        id: 'performance',
        title: 'パフォーマンスのヒント',
        blocks: [
          { ul: [
            '読み込みと応答を速くするため、SSD (できれば NVMe) にインストールしてください。',
            '長時間使う前に、タブをたくさん開いたブラウザなど、メモリーを多く使うアプリを閉じてください。',
            '4 GB 以上の VRAM を搭載した専用 GPU があると、最も速く応答します。',
          ] },
        ],
      },
      {
        id: 'troubleshooting',
        title: 'トラブルシューティング',
        blocks: [
          { ul: [
            '起動しない: CPU が AVX2 に対応していること、そして 16 GB 以上の RAM があることを確認してください。',
            '応答が遅い: ほかのアプリを閉じ、ゲームが SSD にインストールされているか確認してください。',
            'マイクが検出されない: システムのマイクの権限と既定の入力デバイスを確認し、Penko Vox を再起動してください。',
            'チューターが自分の声を拾ってしまう: ヘッドセットを使うか、スピーカーの音量を下げてください。',
          ] },
        ],
      },
      {
        id: 'help',
        title: 'ヘルプ',
        blocks: [
          'Steam コミュニティのフォーラムで質問するか、contact@penkosoftware.org にメールしてください。お使いの OS、CPU、RAM、そして何が起きたかを添えてください。',
        ],
      },
    ],
  },

  voxPrivacy: {
    title: 'Penko Vox: Japanese プライバシーポリシー',
    summary: 'Penko Vox: Japanese は完全にお使いのコンピューター上で動作します。個人データは収集しません。アカウント、テレメトリー、分析、広告はありません。',
    sections: [
      {
        id: 'who',
        title: '運営者について',
        blocks: ['Penko Vox: Japanese は、独立系ソフトウェアスタジオの Penko Software が制作しています。プライバシーに関するお問い合わせ: contact@penkosoftware.org'],
      },
      {
        id: 'on-device',
        title: 'お使いのコンピューター上で行われること',
        blocks: [
          { ul: [
            'AI、音声認識、音声合成はすべて、お使いのコンピューター上でローカルに動作します。',
            'マイクの音声はお使いのコンピューター上で処理されます。アップロードも保存もされません。',
            '会話、語彙、進捗はローカルファイルの saveData.json に保存され、いつでも削除できます。',
            'アカウント、テレメトリー、分析、広告はありません。',
            'アプリの使用にインターネット接続は必要ありません。',
          ] },
        ],
      },
      {
        id: 'steam',
        title: 'Steam が処理する内容',
        blocks: ['Penko Vox: Japanese は Steam を通じて販売されています。購入、実績、そしてオンにした場合の Steam クラウドのセーブ (セーブファイルを同期します) は、Valve が Steam プライバシーポリシーに基づいて処理します: https://store.steampowered.com/privacy_agreement/。お支払いの詳細は当社には送られません。'],
      },
      {
        id: 'website',
        title: '本ウェブサイト',
        blocks: ['当社のウェブサイトは GitHub Pages でホストされています。ほかの多くのウェブホストと同様に、GitHub はサービスの安全と稼働を保つために、IP アドレスなどの技術情報を記録することがあります (GitHub プライバシーステートメントをご覧ください)。当社はこれらのログにアクセスできず、使用もしていません。本サイトは、選択された言語とテーマをお使いのデバイスに保存し、Cookie、分析、トラッカーは使用していません。スクリーンショットは当社のサイトから配信されます。トレーラーは、再生ボタンを押した後にのみ Steam のサーバーからストリーミングされます。Steam へのリンクにはキャンペーンタグが含まれており、Steam が当社のどのページからの訪問かを確認できるようにしています。このタグにはお客様に関する情報は含まれません。'],
      },
      {
        id: 'children',
        title: 'お子さまと学校',
        blocks: ['本アプリは個人データを収集しないため、お子さまを含め、授業での利用に適しています。学校や大学は、詳細、授業でのパイロット導入、機関ライセンスについて、contact@penkosoftware.org までお問い合わせください。'],
      },
      {
        id: 'changes',
        title: '変更とお問い合わせ',
        blocks: ['本ポリシーを変更する場合は、こちらを更新し、冒頭の日付を変更します。ご質問やご要望: contact@penkosoftware.org。'],
      },
    ],
  },

  voxTerms: {
    title: 'Penko Vox: Japanese 利用規約 (EULA)',
    summary: '要点: Penko Vox はご自身のデバイスで使用できます。セーブデータはあなたのものです。AI は間違えることがあります。そして、ここに書かれたいかなる内容も、消費者としてのあなたの権利を奪うものではありません。',
    sections: [
      {
        id: 'agreement',
        title: '1. 契約',
        blocks: ['本規約は、お客様と Penko Software (以下「当社」) との間の、Penko Vox: Japanese (以下「本ソフトウェア」) に関する契約です。本ソフトウェアをインストールまたは使用することにより、お客様は本規約に同意したものとみなされます。Steam を通じたご購入には、Steam サブスクライバー契約も適用され、返金は Steam の返金ポリシーに従います。'],
      },
      {
        id: 'licence',
        title: '2. お客様のライセンス',
        blocks: [
          '当社は、お客様に対し、Steam が認める範囲 (Steam ファミリーシェアリングを含みます) で、お客様が所有または管理するデバイスに本ソフトウェアをインストールし、ご自身の学習のために使用するための、個人的、非独占的かつ譲渡不能なライセンスを付与します。',
          '学生および教師は、ご自身の学習や課題のために、個人のライセンスを使用できます。組織が学生や職員に本ソフトウェアを提供する場合、または組織自身のデバイスにインストールする場合は、機関ライセンスが必要です。contact@penkosoftware.org までご連絡ください。',
        ],
      },
      {
        id: 'restrictions',
        title: '3. 禁止事項',
        blocks: [
          { ul: [
            'Steam が提供する機能を通じた場合を除き、本ソフトウェアを複製、販売、賃貸、または配布すること。',
            '法律が明示的に認めている場合を除き、本ソフトウェアをリバースエンジニアリング、逆コンパイル、または逆アセンブルすること。',
            '本ソフトウェア自体のコンテンツ (Penko Software が制作したアート、シナリオ、キャラクターなどのアセット) を、単独で使用するために抽出すること。第三者のコンポーネントは、それぞれのライセンスに基づいて引き続きご利用いただけます (第 8 条)。',
            '著作権表示またはライセンス表示を削除または変更すること。',
          ] },
        ],
      },
      {
        id: 'ownership',
        title: '4. 権利の帰属',
        blocks: ['本ソフトウェアとそのコンテンツは、Penko Software とそのライセンサーに帰属します。お客様が受け取るのはライセンスであり、所有権ではありません。お客様のセーブデータ、および本ソフトウェア内でお客様が作成したものは、お客様に帰属します。'],
      },
      {
        id: 'ai',
        title: '5. AI が生成するコンテンツ',
        blocks: ['本ソフトウェアは、お客様のコンピューター上で動作する生成 AI を使用しています。その会話、訂正、音声は自動的に生成され、不正確であったり予想外であったりする場合があります。本ソフトウェアは学習の補助であり、資格のある教師、公式の試験、専門的な翻訳の代わりとなるものではなく、本ソフトウェアが生成するものは、専門的、法的、または財務上の助言ではありません。'],
      },
      {
        id: 'early-access',
        title: '6. 早期アクセス',
        blocks: ['本ソフトウェアは早期アクセス中です。機能は変更、追加、または削除されることがあり、不具合が発生する場合があります。当社はアップデート間でセーブデータの互換性を保つよう努めますが、保証はできません。アップデートは Steam を通じて配信されます。'],
      },
      {
        id: 'privacy',
        title: '7. プライバシー',
        blocks: ['本ソフトウェアは、お客様の声と会話をローカルで処理し、個人データを当社に送信しません。Penko Vox: Japanese プライバシーポリシーをご覧ください。'],
      },
      {
        id: 'third-party',
        title: '8. 第三者のコンポーネント',
        blocks: ['本ソフトウェアには、AI モデル、音声エンジン、辞書など、第三者のコンポーネントが含まれており、それらはそれぞれの条件でライセンスされています。それらの条件は該当するコンポーネントに適用され、本規約のいかなる内容も、それらの条件に基づくお客様の権利を制限するものではありません。ライセンスと必要な表示を含む完全な一覧は、https://penkosoftware.org/vox/credits/ をご覧ください。'],
      },
      {
        id: 'warranty',
        title: '9. 保証',
        blocks: ['法律で認められる範囲において、本ソフトウェアは「現状のまま」提供され、いかなる種類の保証もありません。本規約のいかなる内容も、メキシコ法 (連邦消費者保護法を含みます) またはお客様の国の強行法規に基づく、消費者としてのお客様の権利を制限するものではありません。'],
      },
      {
        id: 'liability',
        title: '10. 責任の制限',
        blocks: ['法律で認められる範囲において、当社は間接損害または結果的損害について責任を負わず、当社の責任総額は、お客様が本ソフトウェアに支払った金額を上限とします。'],
      },
      {
        id: 'termination',
        title: '11. 終了',
        blocks: ['お客様が本規約に違反した場合、本ライセンスは自動的に終了します。終了した場合、お客様は本ソフトウェアの使用を中止し、削除しなければなりません。'],
      },
      {
        id: 'law',
        title: '12. 準拠法',
        blocks: ['本規約は、メキシコ合衆国の連邦法に準拠します。紛争は、メキシコの管轄裁判所によって解決されます。ただし、連邦消費者保護庁 (PROFECO) に申し立てる権利を含め、お客様の消費者としての権利を妨げるものではありません。'],
      },
      {
        id: 'changes',
        title: '13. 変更とお問い合わせ',
        blocks: ['当社は本規約を更新することがあります。冒頭の日付が最新版を示し、重要な変更は Steam ページでお知らせします。ご質問: contact@penkosoftware.org'],
      },
    ],
  },

  plazaPrivacy: {
    title: 'Penko Plaza プライバシーポリシー',
    summary: '個人データは収集しません。Penko Plaza のアプリはブラウザ上で動作し、データはブラウザ内に保持され、アカウント、分析、広告、トラッカーはありません。',
    sections: [
      {
        id: 'who',
        title: '運営者について',
        blocks: ['Penko Plaza は、独立系ソフトウェアスタジオの Penko Software が制作した、無料のオープンソースアプリのコレクションです。プライバシーに関するお問い合わせ: contact@penkosoftware.org'],
      },
      {
        id: 'apps',
        title: 'Penko Plaza のアプリ',
        blocks: [
          { ul: [
            'すべてブラウザ上で動作します。アプリがお客様のドキュメント、ノート、その他のコンテンツを当社に送信することはありません。',
            'お客様のデータは、ブラウザ内 (たとえばローカルストレージやデータベース) にのみ保存されます。ブラウザのデータを消去すると、削除されます。',
            'アカウント、分析、広告、トラッキングはなく、Cookie も使用しません。',
            'ブラウザはサイトのファイルのコピーを保持するため、アプリはオフラインで動作します。また、本サイトは選択された言語とテーマをお使いのデバイスに記憶します。',
            '一部のアプリには、ほかの人とのリアルタイムのコラボレーションや、任意で使えるクラウド AI モードなど、オプションのオンライン機能があります。そのような機能を使うことを選択した場合、関連するコンテンツは、その機能を提供するサービス自身のプライバシーポリシーに基づき、ほかの参加者またはそのサービスに送られます。',
          ] },
        ],
      },
      {
        id: 'website',
        title: '本ウェブサイト',
        blocks: ['penkosoftware.org は GitHub Pages でホストされています。ほかの多くのウェブホストと同様に、GitHub はサービスの安全と稼働を保つために、IP アドレスなどの技術情報を記録することがあります (GitHub プライバシーステートメントをご覧ください)。当社はこれらのログにアクセスできず、使用もしていません。'],
      },
      {
        id: 'children',
        title: 'お子さまと学校',
        blocks: ['当社は個人データを収集しないため、Penko Plaza のアプリは、お子さまを含め、授業での利用に適しています。学校は、詳細について contact@penkosoftware.org までお問い合わせください。'],
      },
      {
        id: 'paid-apps',
        title: '有料アプリ',
        blocks: ['Penko Vox: Japanese などの有料アプリには、それぞれ独自のプライバシーポリシーがあり、各製品ページからリンクされています。'],
      },
      {
        id: 'changes',
        title: '変更とお問い合わせ',
        blocks: ['本ポリシーを変更する場合は、こちらを更新し、冒頭の日付を変更します。ご質問やご要望: contact@penkosoftware.org'],
      },
    ],
  },

  credits: {
    title: 'クレジットとライセンス',
    intro: 'Penko Vox: Japanese は、優れたオープンソースソフトウェア、AI モデル、データの上に成り立っています。これらのコンポーネントはそれぞれのライセンスを保持しており、それらのライセンスに基づくお客様の権利が当社の規約によって制限されることはありません。',
    component: 'コンポーネント',
    licence: 'ライセンス',
    purposes: {
      qwen: 'AI チューターの基盤となる言語モデル',
      llamacpp: 'お使いのコンピューター上で言語モデルを実行',
      kotobawhisper: '日本語の音声認識モデル',
      whispercpp: '音声認識エンジン',
      reazonspeech: '日本語の音声認識モデル',
      sherpaonnx: '音声認識・音声合成のランタイム',
      silerovad: '話し始めと話し終わりを検出',
      kokoro: '日本語の音声 (音声合成)',
      kuromoji: '日本語の文を単語に分割',
      jmdict: '日本語辞書データ',
      wanakana: 'ローマ字とかなの相互変換',
      tsfsrs: 'スタディハブの復習をスケジュール (FSRS)',
      threejs: '3D グラフィックス',
      react: 'ユーザーインターフェース',
      electron: 'デスクトップアプリのフレームワーク',
      chromium: 'Electron に含まれるウェブエンジン',
      steamworksjs: 'Steam 連携 (実績、クラウドセーブ)',
    },
    jmdictTitle: '辞書データ',
    jmdictNotice: 'Penko Vox: Japanese は JMdict 辞書ファイルを使用しています。これらのファイルは Electronic Dictionary Research and Development Group (EDRDG) の財産であり、同グループのライセンス (Creative Commons Attribution-ShareAlike 4.0) に従って使用しています: https://www.edrdg.org/edrdg/licence.html',
    chromiumNote: 'Chromium には多くのオープンソースコンポーネントが含まれています。それらのライセンスは、アプリのインストールフォルダー内の LICENSES.chromium.html ファイルに記載されています。',
    fullTexts: 'ライセンスの全文はアプリに同梱されています。お問い合わせ: contact@penkosoftware.org。',
  },

  press: {
    title: 'プレスキット',
    intro: 'Penko Vox: Japanese について書くために必要なものをすべて用意しました。アプリの紹介記事で、これらのテキストや画像を自由にお使いいただけます。',
    factsTitle: 'ファクトシート',
    facts: [
      { label: '開発元・販売元', value: 'Penko Software' },
      { label: '早期アクセス開始', value: '2026 年 8 月 10 日' },
      { label: '正式版', value: '2027 年 8 月を予定' },
      { label: '対応プラットフォーム', value: 'Windows、Linux、SteamOS (Steam Deck)' },
      { label: '価格', value: '地域によって異なります。Steam をご覧ください' },
      { label: '対応インターフェース・字幕言語', value: '英語、フランス語、ドイツ語、日本語、韓国語、中国語 (簡体字)、スペイン語 (ラテンアメリカ)、ベトナム語' },
      { label: '音声', value: '日本語' },
    ],
    shortTitle: '短い紹介文',
    short: 'Penko Vox: Japanese は、会話を通じて日本語を教える、プライバシーを守るオフラインの AI チューターです。JLPT N5–N1 にわたる 38 のシナリオで会話し、自然な音声通話を行い、Kotoba Islands RPG を探検できます。すべてお使いのコンピューター上でローカルに動作します。',
    longTitle: 'Penko Vox: Japanese について',
    long: [
      '多くの語学アプリは、デジタル教科書のように動作します。Penko Vox: Japanese は、その次のステップ、つまり実際に会話で日本語を使うために作られました。学習者は AI チューターと話します。チューターは耳を傾け、役になりきって返答し、やさしい訂正を会話に織り込みます。',
      'すべては学習者自身のコンピューター上で動作します。音声認識、AI チューター、音声合成は完全にオフラインで動くため、声や会話がデバイスの外に出ることはなく、アカウントもサブスクリプションも利用制限もありません。',
      'バージョン 2.1 では、すべての住人と自由に話せる RPG の Kotoba Islands、間合いや割り込みに対応した自然な音声通話、FSRS 間隔反復のスタディハブ、タップで調べられるオフライン辞書、そして実験的なコントローラーと Steam Deck への対応が加わりました。',
      'Penko Vox: Japanese は Penko Software が制作しており、その売上は、無料のオープンソースアプリのコレクションである Penko Plaza の資金になります。',
    ],
    featuresTitle: '主な機能',
    assetsTitle: 'ロゴとアートワーク',
    assetsNote: 'スクリーンショットとトレーラーは近日公開します。ほかの形式やサイズが必要な場合は、メールでご連絡ください。',
    icon: 'アプリアイコン (SVG)',
    capsule: 'カプセルアート (SVG)',
    download: 'ダウンロード',
    contactTitle: '報道関係のお問い合わせ',
    contactBody: '取材、レビュー用キー、ご質問は contact@penkosoftware.org までメールしてください。',
  },
};
