// 简体中文
import type { Docs } from './types';

export const docs: Docs = {
  meta: {
    home: {
      title: 'Penko Plaza by Penko Software | 免费应用与 Penko Vox: Japanese',
      description: 'Penko Software 出品的免费、私密、开源应用，以及离线 AI 日语学习应用 Penko Vox: Japanese，现已在 Steam 抢先体验。',
    },
    plazaPrivacy: {
      title: '隐私政策 | Penko Plaza',
      description: 'Penko Plaza 及其免费开源应用的隐私政策。我们不收集任何个人数据。',
    },
    products: {
      title: '付费应用 | Penko Software',
      description: 'Penko Software 的付费应用，为 Penko Plaza 中免费的开源应用提供资金。首款应用是 Penko Vox: Japanese。',
    },
    vox: {
      title: 'Penko Vox: Japanese | 离线 AI 日语沉浸学习',
      description: '在对话中学日语。Penko Vox: Japanese 是一位私密的离线 AI 导师，提供涵盖 JLPT N5–N1 的 38 个对话场景、语音通话和 Kotoba Islands 角色扮演游戏。现已在 Steam 抢先体验。',
    },
    voxPrivacy: {
      title: '隐私政策 | Penko Vox: Japanese',
      description: 'Penko Vox: Japanese 的隐私政策。AI、语音识别和语音合成均在本地运行，我们不收集任何个人数据。',
    },
    voxTerms: {
      title: '使用条款 (EULA) | Penko Vox: Japanese',
      description: 'Penko Vox: Japanese 的最终用户许可协议和使用条款。',
    },
    voxGuide: {
      title: '入门指南 | Penko Vox: Japanese',
      description: '如何设置并用好 Penko Vox: Japanese：系统要求、麦克风设置、对话、Kotoba Islands、学习中心和故障排除。',
    },
    voxPress: {
      title: '媒体资料包 | Penko Vox: Japanese',
      description: 'Penko Vox: Japanese 媒体资料包：概况表、简介、徽标和联系方式。',
    },
  },

  common: {
    lastUpdated: '最后更新',
    updatedDate: '2026 年 9 月 29 日',
    translationNotice: '本译文仅为方便阅读而提供。如与英文版本存在差异，以英文版本为准。',
    onThisPage: '本页内容',
    privacy: '隐私',
    terms: '使用条款 (EULA)',
    guide: '指南',
    press: '媒体资料包',
    comingSoon: '即将推出',
    learnMore: '了解更多',
  },

  products: {
    title: '付费应用',
    intro: 'Penko Software 推出的专业应用。每一次购买都会为 Penko Plaza 中免费的开源应用提供资金。',
    voxJapaneseDesc: '在对话中学日语。一位私密的离线 AI 导师，提供涵盖 JLPT N5–N1 的对话场景、自然的语音通话，以及 Kotoba Islands 角色扮演游戏。',
    teaserTitle: '更多应用即将推出',
    teaserBody: '我们正在开发新的应用。关注 Penko Software 的 Steam 和 GitHub，第一时间了解动态。',
    whyTitle: '为什么要做付费应用？',
    whyBody: [
      'Penko Plaza 的应用免费，依据 GPL-3.0 许可证开源，并且将一直如此。开发和维护它们需要时间，因此我们通过制作少量专业的付费应用来为这项工作提供资金。',
      '我们的付费应用是闭源的，通过 Steam 等商店销售。它们遵循同样的理念：在您自己的设备上运行，可离线使用，并且不收集您的个人数据。',
    ],
  },

  vox: {
    heroTitle: '在对话中学日语',
    priceNote: '价格因地区而异。请在 Steam 上查看当前价格。',
    hardwareNote: '在您的电脑上运行完整的 AI 模型：需要支持 AVX2 的 CPU 和至少 16 GB 内存。',
    checkRequirements: '查看系统要求',
    media: {
      title: '查看实际效果',
      playTrailer: '播放预告片',
      trailerNotice: '按下播放后，预告片才会从 Steam 加载。',
      screenshot: '截图 {n}',
      previous: '上一张截图',
      next: '下一张截图',
      close: '关闭',
    },
    sectionFeatures: '功能',
    pillarsTitle: '工作原理：一切都在您的电脑上运行',
    pillars: [
      { title: '聆听', body: '在本地运行的语音识别，并逐词分析您说的日语。' },
      { title: '思考', body: '离线 AI 导师让对话持续进行，并根据您说的内容调整剧情。' },
      { title: '纠正', body: '温和的纠正自然地融入对话，让您学习时不被打断。' },
      { title: '开口', body: '在您自己的电脑上生成的自然日语语音。' },
    ],
    features: [
      { title: 'Kotoba Islands', body: '一款角色扮演游戏，您可以探索各个岛屿，并用正在学习的日语与每位居民自由交谈。' },
      { title: '自然的语音通话', body: '大声说话，轮流发言自然流畅。您可以随时打断，回声消除让您也能使用扬声器。' },
      { title: '学习中心与词典', body: '您遇到的单词会进入按 FSRS 间隔重复安排的复习，离线词典让您点按任意单词即可查询。' },
      { title: '假名笔顺练习', body: '通过实时的视觉反馈，练习书写平假名和片假名。' },
      { title: '在使用中掌握', body: '当您在真实对话中正确使用某个单词或语法句型时，进度才会增长，而不是靠翻闪卡。' },
      { title: '私密且离线', body: '您的声音、查询和对话永远不会离开您的电脑。无需账号，没有云端，没有遥测。' },
      { title: '一次购买，永久拥有', body: '一次性购买。没有订阅，没有 token 限制，也没有使用档位。' },
    ],
    steamFeatures: 'Steam 成就 · Steam 云存档 · 家庭共享',
    earlyAccess: {
      title: '抢先体验计划',
      why: '本地 AI 语言学习发展迅速，因此我们以抢先体验的形式发布，与学生和语言学习者一起打造 Penko Vox。',
      plan: '我们计划在 2027 年 8 月发布正式版。在此之前，更新会定期加入新内容和改进。',
      fullVersionTitle: '正式版计划内容',
      fullVersion: [
        '规模大得多的对话场景库，目标是 100 个以上',
        '更多专门的 JLPT 学习路径',
        '更多语音合成的声音选择',
        '更深入的学习进度分析，以及更多 Steam 功能',
      ],
      pricing: '抢先体验期间价格较低，随着重大更新的发布将逐步上调。',
      community: '我们会阅读 Steam 社区论坛，并在那里发起投票，让玩家为接下来的场景投票。',
    },
    requirements: {
      title: '系统需求',
      intro: 'Penko Vox 在您自己的电脑上运行完整的 AI 语言模型，因此性能取决于您的硬件。需要支持 AVX2 的 CPU。',
      minimum: '最低配置',
      recommended: '推荐配置',
      labels: { os: '操作系统', processor: '处理器', memory: '内存', graphics: '显卡', storage: '存储空间', sound: '声卡', notes: '备注' },
      windows: {
        minimum: {
          os: 'Windows 10 (64 位)',
          processor: '支持 AVX2 的四核 CPU (Intel Core i5-8400 / AMD Ryzen 3 3100)',
          memory: '16 GB 内存',
          graphics: 'Intel UHD Graphics 630 / AMD Radeon Vega 8 (DirectX 11)',
          storage: '15 GB 可用空间',
          sound: '兼容 Windows 的声卡',
          notes: '需要支持 AVX2；强烈建议使用 SSD',
        },
        recommended: {
          os: 'Windows 11 (64 位)',
          processor: '6 核 12 线程或更高 (Intel Core i5-12400 / AMD Ryzen 5 5600X)',
          memory: '32 GB 内存',
          graphics: 'NVIDIA GeForce RTX 3050 / RTX 3060 (4 GB 以上 VRAM) 或 AMD Radeon RX 6600 (DirectX 12)',
          storage: '20 GB 可用空间',
          sound: '兼容 Windows 的声卡',
          notes: 'SSD 和独立显卡可带来最快的响应速度',
        },
      },
      linux: {
        minimum: {
          os: 'SteamOS 3.0 或较新的 Linux (Fedora 40+、Ubuntu 22.04+)',
          processor: '支持 AVX2 的四核 CPU (Steam Deck APU / AMD Ryzen 3 / Intel Core i5)',
          memory: '16 GB 内存',
          graphics: '支持 Vulkan 的集成或独立显卡',
          storage: '15 GB 可用空间',
          sound: 'PulseAudio 或 PipeWire',
          notes: '已在 Steam Deck 上测试；需要支持 AVX2',
        },
        recommended: {
          os: 'SteamOS 3.5+ 或 Fedora 43',
          processor: 'AMD Ryzen 5 5600G / Intel Core i7 (第 10 代) 或更高',
          memory: '32 GB 内存',
          graphics: '4 GB 以上 VRAM 且支持 Vulkan 的独立显卡',
          storage: '20 GB 可用空间',
          sound: 'PulseAudio 或 PipeWire',
          notes: 'NVMe SSD 可带来最快的对话响应速度',
        },
      },
    },
    languages: {
      title: '语言',
      intro: '您学习的是日语；应用的界面和讲解提供以下语言版本。',
      interface: '界面',
      audio: '音频',
      subtitles: '字幕',
    },
    aiDisclosure: {
      title: '关于 AI',
      body: 'Penko Vox: Japanese 使用在本地运行的生成式 AI。大型语言模型担任您的日语导师，根据您说的内容实时编写对话，神经网络文字转语音引擎则为对话配音。与任何 AI 一样，它也可能出错，因此请把它当作练习伙伴，而不是权威。',
    },
    faqTitle: '常见问题',
    faq: [
      { q: '我需要联网吗？', a: '使用时不需要。通过 Steam 安装后，AI、语音识别和语音合成都在您的电脑上运行。' },
      { q: '我的声音会被录音或上传吗？', a: '不会。麦克风音频在您的电脑上处理，绝不会被上传或存储。' },
      { q: '为什么需要 16 GB 内存和支持 AVX2 的 CPU？', a: 'Penko Vox 在本地运行完整的 AI 语言模型，而不是在服务器上运行。这需要内存和支持 AVX2 指令的 CPU。这正是您的数据保持私密、应用可离线使用的原因。' },
      { q: '能在 Steam Deck 上运行吗？', a: '可以。它已在 Steam Deck 上测试，并且手柄支持作为实验性功能于 2.1 版本加入。' },
      { q: '有 Mac 版本吗？', a: '目前没有。Penko Vox 提供 Windows 和 Linux 版本，包括 SteamOS。' },
      { q: '我需要达到什么日语水平？', a: '对话场景涵盖从 JLPT N5 (初级) 到 N1 (高级)，如果您刚开始学习阅读，假名练习也能帮上忙。' },
      { q: '是订阅制吗？', a: '不是。这是在 Steam 上的一次性购买，没有订阅、token 限制或使用档位。' },
      { q: 'AI 总是对的吗？', a: '不是。它是出色的练习伙伴，但也可能出错。对于考试或重要的翻译，请向老师或可靠的参考资料核实。' },
      { q: 'Penko Vox 是开源的吗？', a: '不是。Penko Vox 是闭源的付费应用。它的销售收入为我们免费的开源应用 Penko Plaza 提供资金。' },
      { q: '可以退款吗？', a: '购买通过 Steam 进行，因此适用 Steam 的退款政策。' },
    ],
    support: {
      title: '支持',
      body: '遇到困难、发现错误，或有好点子？请阅读入门指南，在 Steam 论坛提问，或给我们发送电子邮件。',
      email: '发送邮件联系支持',
      forums: 'Steam 社区论坛',
      guideLink: '入门指南',
    },
  },

  voxGuide: {
    title: 'Penko Vox: Japanese 入门指南',
    intro: '设置 Penko Vox 并充分利用它所需的一切。',
    sections: [
      {
        id: 'before-you-start',
        title: '开始之前',
        blocks: [
          'Penko Vox 在您的电脑上运行完整的 AI 模型，因此请确认您的硬件已准备就绪：',
          { ul: [
            '支持 AVX2 的 CPU。2013 年 (Haswell) 之后的大多数 Intel CPU 和 AMD Ryzen CPU 都支持。如果不确定，请搜索您的 CPU 型号加上 “AVX2”。',
            '至少 16 GB 内存 (推荐 32 GB)。',
            '15–20 GB 可用空间，最好在 SSD 上。',
            'Windows 10/11 (64 位)、SteamOS 或较新的 Linux 发行版。',
          ] },
          '完整列表见产品页面上的系统需求。',
        ],
      },
      {
        id: 'install',
        title: '安装与首次启动',
        blocks: [
          { ol: [
            '从 Steam 购买并安装 Penko Vox: Japanese。',
            '从 Steam 游戏库启动。',
            '首次启动时，AI 需要首次加载，可能耗时较长。之后的启动会更快。',
          ] },
        ],
      },
      {
        id: 'microphone',
        title: '设置麦克风',
        blocks: [
          '开口说话是 Penko Vox 的核心。使用耳机效果最清晰，但得益于回声消除，扬声器同样可用。',
          { ul: [
            'Windows：打开 设置 › 隐私和安全性 › 麦克风，并确保允许桌面应用使用麦克风。',
            'Linux：在系统声音设置中，将您的麦克风选为默认输入设备 (PipeWire 或 PulseAudio)。',
            'Steam Deck：内置麦克风可以使用，在嘈杂的环境中使用耳机可提高识别效果。',
          ] },
        ],
      },
      {
        id: 'first-conversation',
        title: '您的第一次对话',
        blocks: [
          { ol: [
            '选择与您的 JLPT 等级相符的对话场景，从 N5 (初级) 到 N1 (高级)，或创建您自己的自定义场景。',
            '用日语回答，可以说出来，也可以打字。',
            '导师会以角色身份回复，并把纠正融入对话。',
            '点按任意单词，即可在离线词典中查询。',
          ] },
          { callout: '不必担心犯错。导师正是通过错误了解该在哪些方面帮助您。' },
        ],
      },
      {
        id: 'voice-calls',
        title: '语音通话',
        blocks: [
          '语音通话就像与真人交谈：自然地说话、停顿、插话。您可以打断导师，轮流发言的节奏会适应您。',
        ],
      },
      {
        id: 'kotoba-islands',
        title: 'Kotoba Islands',
        blocks: [
          'Kotoba Islands 是内置于 Penko Vox 的角色扮演游戏。探索各个岛屿，并与每位居民自由交谈。这里没有必须遵循的剧本，尽管使用您已掌握的日语，并尝试新单词。',
        ],
      },
      {
        id: 'study-hub',
        title: '学习中心、词典与假名练习',
        blocks: [
          { ul: [
            '学习中心：您在对话中遇到的单词会变成复习内容，按 FSRS 间隔重复安排，让您在快要忘记之前再次看到它们。每天几分钟效果最好。',
            '词典：点按任意单词即可查询，完全离线。',
            '假名练习：逐笔学习书写平假名和片假名，并获得实时反馈。',
          ] },
        ],
      },
      {
        id: 'progress',
        title: '进度如何计算',
        blocks: [
          '当您在真实对话中正确使用某个单词或语法句型时，掌握程度才会提升。复习有助于记忆，但真正重要的是使用语言。',
        ],
      },
      {
        id: 'controller',
        title: '手柄与 Steam Deck',
        blocks: [
          '手柄支持于 2.1 版本加入，目前仍是实验性功能。如果某些操作没有按预期响应，请改用鼠标和键盘 (在 Steam Deck 上则使用触摸屏)，并告诉我们。',
        ],
      },
      {
        id: 'saves',
        title: '您的存档与隐私',
        blocks: [
          '对话、词汇和进度都保存在本地文件 saveData.json 中。删除该文件会重置您的进度。如果您开启 Steam 云存档，Steam 会在您的多台电脑之间同步该文件。',
          '您说的或输入的任何内容都不会被发送到任何地方。详情请参阅隐私政策。',
        ],
      },
      {
        id: 'performance',
        title: '性能提示',
        blocks: [
          { ul: [
            '安装在 SSD 上，最好是 NVMe，以获得更快的加载和响应速度。',
            '在长时间使用之前，关闭占用大量内存的应用，例如打开了很多标签页的浏览器。',
            '拥有 4 GB 或更多 VRAM 的独立显卡可带来最快的响应速度。',
          ] },
        ],
      },
      {
        id: 'troubleshooting',
        title: '故障排除',
        blocks: [
          { ul: [
            '无法启动：请检查您的 CPU 是否支持 AVX2，并且至少有 16 GB 内存。',
            '响应缓慢：请关闭其他应用，并检查游戏是否安装在 SSD 上。',
            '检测不到麦克风：请检查系统的麦克风权限和默认输入设备，然后重新启动 Penko Vox。',
            '导师听到了自己的声音：请使用耳机，或调低扬声器音量。',
          ] },
        ],
      },
      {
        id: 'help',
        title: '获取帮助',
        blocks: [
          '请在 Steam 社区论坛提问，或发送电子邮件至 contact@penkosoftware.org。请附上您的操作系统、CPU、内存以及发生的情况。',
        ],
      },
    ],
  },

  voxPrivacy: {
    title: 'Penko Vox: Japanese 隐私政策',
    summary: 'Penko Vox: Japanese 完全在您的电脑上运行。我们不收集您的个人数据：没有账号、遥测、分析或广告。',
    sections: [
      {
        id: 'who',
        title: '我们是谁',
        blocks: ['Penko Vox: Japanese 由独立软件工作室 Penko Software 制作。有关隐私的问题，请联系 contact@penkosoftware.org。'],
      },
      {
        id: 'on-device',
        title: '您的电脑上会发生什么',
        blocks: [
          { ul: [
            'AI、语音识别和语音合成都在您的电脑上本地运行。',
            '麦克风音频在您的电脑上处理。它绝不会被上传，也绝不会被存储。',
            '您的对话、词汇和进度保存在本地文件 saveData.json 中，您可以随时删除该文件。',
            '没有账号、遥测、分析或广告。',
            '使用本应用无需联网。',
          ] },
        ],
      },
      {
        id: 'steam',
        title: 'Steam 负责处理的内容',
        blocks: ['Penko Vox: Japanese 通过 Steam 销售。购买、成就，以及 (如果您开启) Steam 云存档 (用于同步您的存档文件)，均由 Valve 依据 Steam 隐私政策处理：https://store.steampowered.com/privacy_agreement/。我们不会收到您的支付信息。'],
      },
      {
        id: 'website',
        title: '本网站',
        blocks: ['我们的网站托管在 GitHub Pages 上。与大多数网站主机一样，GitHub 可能会记录 IP 地址等技术信息，以保障服务安全和正常运行 (参见 GitHub 隐私声明)。我们无法访问这些日志，也不会使用它们。本网站会在您的设备上保存您所选择的语言和主题，没有 cookie、分析或跟踪器。截图由我们自己的网站提供；只有在您按下播放后，预告片才会从 Steam 的服务器加载。'],
      },
      {
        id: 'children',
        title: '儿童与学校',
        blocks: ['由于本应用不收集个人数据，因此适合在课堂上使用，包括面向儿童。学校和大学可通过 contact@penkosoftware.org 联系我们，了解详情、课堂试点或机构授权。'],
      },
      {
        id: 'changes',
        title: '变更与联系方式',
        blocks: ['如果本政策有变更，我们会在此处更新，并修改顶部的日期。如有问题或请求，请联系 contact@penkosoftware.org。'],
      },
    ],
  },

  voxTerms: {
    title: 'Penko Vox: Japanese 使用条款 (EULA)',
    summary: '简而言之：您可以在自己的设备上使用 Penko Vox，您的存档归您所有，AI 可能出错，并且这里没有任何内容会剥夺您作为消费者的权利。',
    sections: [
      {
        id: 'agreement',
        title: '1. 协议',
        blocks: ['本条款是您与 Penko Software (“我们”) 之间就 Penko Vox: Japanese (“软件”) 达成的协议。安装或使用本软件，即表示您接受这些条款。您通过 Steam 进行的购买还受 Steam 订户协议约束。'],
      },
      {
        id: 'licence',
        title: '2. 您的许可',
        blocks: [
          '我们授予您个人的、非排他的、不可转让的许可，允许您在您拥有或控制的设备上安装并使用本软件，用于您自己的学习，并以 Steam 允许的方式为限 (包括 Steam 家庭共享)。',
          '使用本软件授课，或在组织的多台设备上使用，需要机构授权。请通过 contact@penkosoftware.org 联系我们。',
        ],
      },
      {
        id: 'restrictions',
        title: '3. 您不得做的事',
        blocks: [
          { ul: [
            '复制、出售、出租或分发本软件，但通过 Steam 提供的功能进行的除外。',
            '对本软件进行逆向工程、反编译或反汇编，但法律明确允许的情况除外。',
            '提取本软件的 AI 模型、声音或其他资源，以单独使用它们。',
            '删除或更改版权或许可声明。',
          ] },
        ],
      },
      {
        id: 'ownership',
        title: '4. 所有权',
        blocks: ['本软件及其内容归 Penko Software 及其许可方所有；您获得的是许可，而不是所有权。您的存档数据以及您在本软件中创建的任何内容归您所有。'],
      },
      {
        id: 'ai',
        title: '5. AI 生成的内容',
        blocks: ['本软件使用在您的电脑上运行的生成式 AI。其对话、纠正和语音均为自动生成，可能不准确或出人意料。本软件是学习辅助工具，不能替代合格的教师、官方考试或专业翻译。'],
      },
      {
        id: 'early-access',
        title: '6. 抢先体验',
        blocks: ['本软件处于抢先体验阶段。功能可能会变更、新增或移除，您也可能遇到错误。我们力求保持更新之间存档数据的兼容性，但无法保证。更新通过 Steam 提供。'],
      },
      {
        id: 'privacy',
        title: '7. 隐私',
        blocks: ['本软件在本地处理您的声音和对话，不会向我们发送个人数据。请参阅 Penko Vox: Japanese 隐私政策。'],
      },
      {
        id: 'third-party',
        title: '8. 第三方组件',
        blocks: ['本软件可能包含第三方组件，这些组件依据其自身条款获得许可。这些条款适用于相应组件。'],
      },
      {
        id: 'warranty',
        title: '9. 保证',
        blocks: ['在法律允许的范围内，本软件按“现状”提供，不附带任何形式的保证。本条款中的任何内容均不限制您作为消费者依据墨西哥法律 (包括《联邦消费者保护法》) 或您所在国家的强制性法律所享有的权利。'],
      },
      {
        id: 'liability',
        title: '10. 责任限制',
        blocks: ['在法律允许的范围内，我们不对间接或后果性损害承担责任，并且我们的全部责任以您为本软件支付的金额为限。'],
      },
      {
        id: 'termination',
        title: '11. 终止',
        blocks: ['如果您违反这些条款，本许可将自动终止。许可终止后，您必须停止使用本软件并将其删除。'],
      },
      {
        id: 'law',
        title: '12. 适用法律',
        blocks: ['本条款受墨西哥合众国联邦法律管辖。争议将由墨西哥有管辖权的法院解决，但不影响您作为消费者的权利，包括向联邦消费者保护局 (PROFECO) 投诉的权利。'],
      },
      {
        id: 'changes',
        title: '13. 变更与联系方式',
        blocks: ['我们可能会更新这些条款；顶部的日期显示最新版本，重大变更将在 Steam 页面上公布。如有问题：contact@penkosoftware.org。'],
      },
    ],
  },

  plazaPrivacy: {
    title: 'Penko Plaza 隐私政策',
    summary: '我们不收集您的个人数据。Penko Plaza 应用在您的浏览器中运行，数据保存在浏览器中，没有账号、分析、广告或跟踪器。',
    sections: [
      {
        id: 'who',
        title: '我们是谁',
        blocks: ['Penko Plaza 是由独立软件工作室 Penko Software 制作的免费开源应用合集。有关隐私的问题，请联系 contact@penkosoftware.org。'],
      },
      {
        id: 'apps',
        title: 'Penko Plaza 应用',
        blocks: [
          { ul: [
            '一切都在您的浏览器中运行。这些应用不会把您的文档、笔记或其他内容发送给我们。',
            '您的数据仅存储在您的浏览器中 (例如其本地存储或数据库)。清除浏览器数据会删除这些数据。',
            '没有账号、分析、广告或跟踪，也没有 cookie。',
            '您的浏览器会保留一份网站文件的副本，以便应用可以离线使用。本网站还会在您的设备上记住您所选择的语言和主题。',
            '少数应用提供可选的在线功能，例如与他人的实时协作，或可选的云端 AI 模式。如果您选择使用其中之一，相关内容将依据该服务自身的隐私政策，发送给其他参与者或提供该功能的服务。',
          ] },
        ],
      },
      {
        id: 'website',
        title: '本网站',
        blocks: ['penkosoftware.org 托管在 GitHub Pages 上。与大多数网站主机一样，GitHub 可能会记录 IP 地址等技术信息，以保障服务安全和正常运行 (参见 GitHub 隐私声明)。我们无法访问这些日志，也不会使用它们。'],
      },
      {
        id: 'children',
        title: '儿童与学校',
        blocks: ['由于我们不收集个人数据，Penko Plaza 应用适合在课堂上使用，包括面向儿童。学校可通过 contact@penkosoftware.org 联系我们了解详情。'],
      },
      {
        id: 'paid-apps',
        title: '我们的付费应用',
        blocks: ['Penko Vox: Japanese 等付费应用有各自的隐私政策，链接位于其产品页面。'],
      },
      {
        id: 'changes',
        title: '变更与联系方式',
        blocks: ['如果本政策有变更，我们会在此处更新，并修改顶部的日期。如有问题或请求，请联系 contact@penkosoftware.org。'],
      },
    ],
  },

  press: {
    title: '媒体资料包',
    intro: '撰写有关 Penko Vox: Japanese 的报道所需的一切。欢迎在应用的报道中使用这些文字和图片。',
    factsTitle: '概况',
    facts: [
      { label: '开发商和发行商', value: 'Penko Software' },
      { label: '抢先体验发布', value: '2026 年 8 月 10 日' },
      { label: '正式版发布', value: '计划于 2027 年 8 月' },
      { label: '平台', value: 'Windows、Linux、SteamOS (Steam Deck)' },
      { label: '价格', value: '因地区而异；请见 Steam' },
      { label: '界面语言', value: '英语、法语、德语、日语、韩语、简体中文、西班牙语 (拉丁美洲)、越南语' },
    ],
    shortTitle: '简短介绍',
    short: 'Penko Vox: Japanese 是一位私密的离线 AI 导师，通过对话教授日语。您可以在涵盖 JLPT N5–N1 的 38 个场景中畅谈，进行自然的语音通话，并探索 Kotoba Islands 角色扮演游戏，一切都在您自己的电脑上本地运行。',
    longTitle: '关于 Penko Vox: Japanese',
    long: [
      '大多数语言应用就像电子教科书。Penko Vox: Japanese 则是为之后的一步而打造：在对话中真正使用日语。学习者与 AI 导师交谈，导师会聆听、以角色身份回复，并把温和的纠正融入对话。',
      '一切都在学习者自己的电脑上运行。语音识别、AI 导师和语音合成完全离线工作，因此声音和对话永远不会离开设备，也没有账号、订阅或使用限制。',
      '2.1 版本加入了 Kotoba Islands (一款玩家可与每位居民自由交谈的角色扮演游戏)、支持轮流发言和打断的自然语音通话、采用 FSRS 间隔重复的学习中心、离线的点按查词词典，以及实验性的手柄和 Steam Deck 支持。',
      'Penko Vox: Japanese 由 Penko Software 制作，其销售收入为 Penko Plaza (一套免费的开源应用) 提供资金。',
    ],
    featuresTitle: '主要功能',
    assetsTitle: '徽标与图片',
    assetsNote: '截图和预告片即将推出。如需其他格式或尺寸，请给我们发送电子邮件。',
    icon: '应用图标 (SVG)',
    capsule: '封面图 (SVG)',
    download: '下载',
    contactTitle: '媒体联系',
    contactBody: '如需采访、评测密钥或有任何问题，请发送电子邮件至 contact@penkosoftware.org。',
  },
};
