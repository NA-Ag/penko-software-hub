// 한국어
import type { Docs } from './types';

export const docs: Docs = {
  meta: {
    home: {
      title: 'Penko Plaza by Penko Software | 무료 앱과 Penko Vox: Japanese',
      description: 'Penko Software의 무료, 비공개, 오픈 소스 앱과 오프라인 AI로 일본어를 배우는 Penko Vox: Japanese. 현재 Steam 앞서 해보기 중입니다.',
    },
    plazaPrivacy: {
      title: '개인정보 처리방침 | Penko Plaza',
      description: 'Penko Plaza와 무료 오픈 소스 앱의 개인정보 처리방침입니다. 개인 데이터를 수집하지 않습니다.',
    },
    products: {
      title: '유료 앱 | Penko Software',
      description: 'Penko Plaza의 무료 오픈 소스 앱을 지원하는 Penko Software의 유료 앱입니다. 첫 번째 앱은 Penko Vox: Japanese입니다.',
    },
    vox: {
      title: 'Penko Vox: Japanese | 오프라인 AI 일본어 몰입 학습',
      description: '대화로 배우는 일본어. Penko Vox: Japanese는 JLPT N5–N1에 걸친 38개 대화 시나리오, 음성 통화, Kotoba Islands RPG를 갖춘 비공개 오프라인 AI 튜터입니다. 현재 Steam 앞서 해보기 중.',
    },
    voxPrivacy: {
      title: '개인정보 처리방침 | Penko Vox: Japanese',
      description: 'Penko Vox: Japanese의 개인정보 처리방침입니다. AI, 음성 인식, 음성 합성은 모두 로컬에서 실행되며 개인 데이터를 수집하지 않습니다.',
    },
    voxTerms: {
      title: '이용약관(EULA) | Penko Vox: Japanese',
      description: 'Penko Vox: Japanese의 최종 사용자 사용권 계약 및 이용약관입니다.',
    },
    voxGuide: {
      title: '시작 가이드 | Penko Vox: Japanese',
      description: 'Penko Vox: Japanese 설정 및 활용법: 요구 사양, 마이크 설정, 대화, Kotoba Islands, Study Hub, 문제 해결.',
    },
    voxCredits: {
      title: '크레딧 및 라이선스 | Penko Vox: Japanese',
      description: 'Penko Vox: Japanese에 사용된 제3자 소프트웨어, AI 모델, 데이터와 그 라이선스 및 필수 고지 사항.',
    },
    voxPress: {
      title: '프레스 키트 | Penko Vox: Japanese',
      description: 'Penko Vox: Japanese 프레스 키트: 팩트 시트, 소개글, 로고, 연락처.',
    },
  },

  common: {
    lastUpdated: '최종 업데이트',
    updatedDate: '2026년 9월 29일',
    translationNotice: '이 번역은 편의를 위해 제공됩니다. 영어 버전과 내용이 다를 경우 영어 버전이 우선합니다.',
    onThisPage: '이 페이지의 내용',
    privacy: '개인정보 처리방침',
    terms: '이용약관(EULA)',
    guide: '가이드',
    press: '프레스 키트',
    credits: '크레딧',
    comingSoon: '출시 예정',
    learnMore: '자세히 보기',
  },

  products: {
    title: '유료 앱',
    intro: 'Penko Software의 특화된 앱입니다. 모든 구매는 Penko Plaza의 무료 오픈소스 앱을 후원합니다.',
    voxJapaneseDesc: '대화하며 배우는 일본어. JLPT N5–N1 전 단계의 대화 시나리오, 자연스러운 음성 통화, Kotoba Islands RPG를 갖춘 프라이빗 오프라인 AI 튜터입니다.',
    teaserTitle: '더 많은 앱이 준비 중입니다',
    teaserBody: '새로운 앱을 만들고 있습니다. Steam과 GitHub에서 Penko Software를 팔로우하고 가장 먼저 소식을 받아 보세요.',
    whyTitle: '왜 유료 앱인가요?',
    whyBody: [
      'Penko Plaza 앱은 GPL-3.0 라이선스의 무료 오픈소스이며 앞으로도 그렇게 유지됩니다. 앱을 만들고 유지하려면 시간이 필요하기 때문에, 소수의 특화된 유료 앱을 만들어 그 비용을 마련합니다.',
      '유료 앱은 비공개 소스이며 Steam 같은 스토어를 통해 판매됩니다. 같은 가치를 따릅니다. 사용자의 기기에서 실행되고, 오프라인으로 작동하며, 개인 데이터를 수집하지 않습니다.',
    ],
  },

  vox: {
    heroTitle: '대화하며 배우는 일본어',
    priceNote: '가격은 지역에 따라 다릅니다. 현재 가격은 Steam에서 확인하세요.',
    hardwareNote: 'PC에서 전체 AI 모델을 실행합니다. AVX2 CPU와 16 GB 이상의 RAM이 필요합니다.',
    checkRequirements: '요구 사양 확인하기',
    media: {
      title: '실제 모습 보기',
      playTrailer: '트레일러 재생',
      trailerNotice: '트레일러는 재생 버튼을 누르면 Steam에서 스트리밍됩니다.',
      screenshot: '스크린샷 {n}',
      previous: '이전 스크린샷',
      next: '다음 스크린샷',
      close: '닫기',
    },
    sectionFeatures: '기능',
    pillarsTitle: '작동 방식: 모든 것이 내 컴퓨터에서 실행됩니다',
    pillars: [
      { title: '듣기', body: '음성 인식과 일본어 단어 단위 분석이 로컬에서 실행됩니다.' },
      { title: '생각하기', body: '오프라인 AI 튜터가 대화를 이어 가고, 사용자가 하는 말에 맞춰 이야기를 조정합니다.' },
      { title: '교정하기', body: '부드러운 교정이 대화 속에 자연스럽게 녹아 있어, 흐름이 끊기지 않고 배울 수 있습니다.' },
      { title: '말하기', body: '자연스러운 일본어 음성을 사용자의 컴퓨터에서 직접 생성합니다.' },
    ],
    features: [
      { title: 'Kotoba Islands', body: '배우고 있는 일본어를 사용해 모든 주민과 자유롭게 탐험하고 대화하는 RPG입니다.' },
      { title: '자연스러운 음성 통화', body: '자연스러운 말 주고받기로 소리 내어 말하세요. 말을 끊을 수 있고, 에코 캔슬링 덕분에 스피커도 사용할 수 있습니다.' },
      { title: '스터디 허브와 사전', body: '만난 단어는 FSRS 간격 반복으로 복습 일정에 들어가며, 오프라인 사전에서 단어를 탭하여 바로 찾아볼 수 있습니다.' },
      { title: '쓰기 연습', body: '실시간 시각 피드백과 함께 히라가나, 가타카나, 초급 한자와 단어 쓰기를 연습하세요.' },
      { title: '사용하면서 익히기', body: '플래시카드를 넘기는 것이 아니라, 실제 대화에서 단어나 문법 패턴을 올바르게 사용할 때 진행도가 올라갑니다.' },
      { title: '프라이빗 및 오프라인', body: '음성, 검색, 대화는 사용자의 컴퓨터를 떠나지 않습니다. 계정도, 클라우드도, 텔레메트리도 없습니다.' },
      { title: '평생 소장', body: '한 번만 구매하면 됩니다. 구독도, 토큰 제한도, 사용량 요금제도 없습니다.' },
    ],
    steamFeatures: 'Steam 도전 과제 · Steam 클라우드 · 가족 공유',
    earlyAccess: {
      title: '앞서 해보기 계획',
      why: '로컬 AI 언어 학습은 빠르게 변하고 있어, 학생 및 언어 학습자와 함께 Penko Vox를 만들어 가기 위해 앞서 해보기로 출시했습니다.',
      plan: '정식 출시는 2027년 8월로 계획하고 있습니다. 그때까지는 업데이트를 통해 콘텐츠와 개선 사항을 꾸준히 추가합니다.',
      fullVersionTitle: '정식 출시에서 계획 중인 내용',
      fullVersion: [
        '훨씬 더 많은 대화 시나리오',
        '더 다양한 JLPT 특화 학습 경로',
        '음성 합성을 위한 더 많은 음성 옵션',
        '더 깊이 있는 진행도 분석과 더 많은 Steam 기능',
      ],
      pricing: '앞서 해보기 기간에는 가격이 더 낮으며, 주요 업데이트가 출시됨에 따라 점차 인상됩니다.',
      community: 'Steam 커뮤니티 포럼을 읽고 있으며, 플레이어가 다음 시나리오에 투표할 수 있도록 설문도 진행합니다.',
    },
    requirements: {
      title: '시스템 요구 사항',
      intro: 'Penko Vox는 완전한 AI 언어 모델을 사용자의 컴퓨터에서 직접 실행하므로 성능은 하드웨어에 따라 달라집니다. AVX2를 지원하는 CPU가 필요합니다.',
      minimum: '최소 사양',
      recommended: '권장 사양',
      labels: { os: '운영 체제', processor: '프로세서', memory: '메모리', graphics: '그래픽', storage: '저장 공간', sound: '사운드', notes: '참고 사항' },
      windows: {
        minimum: {
          os: 'Windows 10 (64비트)',
          processor: 'AVX2를 지원하는 쿼드 코어 CPU (Intel Core i5-8400 / AMD Ryzen 3 3100)',
          memory: 'RAM 16 GB',
          graphics: 'Intel UHD Graphics 630 / AMD Radeon Vega 8 (DirectX 11)',
          storage: '사용 가능 공간 15 GB',
          sound: 'Windows 호환 사운드 카드',
          notes: 'AVX2 지원 필수, SSD 강력 권장',
        },
        recommended: {
          os: 'Windows 11 (64비트)',
          processor: '6코어 / 12스레드 이상 (Intel Core i5-12400 / AMD Ryzen 5 5600X)',
          memory: 'RAM 32 GB',
          graphics: 'NVIDIA GeForce RTX 3050 / RTX 3060 (VRAM 4 GB 이상) 또는 AMD Radeon RX 6600 (DirectX 12)',
          storage: '사용 가능 공간 20 GB',
          sound: 'Windows 호환 사운드 카드',
          notes: 'SSD와 전용 GPU를 사용하면 가장 빠르게 응답합니다',
        },
      },
      linux: {
        minimum: {
          os: 'SteamOS 3.0 또는 최신 Linux (Fedora 40+, Ubuntu 22.04+)',
          processor: 'AVX2를 지원하는 쿼드 코어 CPU (Steam Deck APU / AMD Ryzen 3 / Intel Core i5)',
          memory: 'RAM 16 GB',
          graphics: 'Vulkan을 지원하는 내장 또는 전용 GPU',
          storage: '사용 가능 공간 15 GB',
          sound: 'PulseAudio 또는 PipeWire',
          notes: 'Steam Deck에서 테스트됨, AVX2 필수',
        },
        recommended: {
          os: 'SteamOS 3.5+ 또는 Fedora 43',
          processor: 'AMD Ryzen 5 5600G / Intel Core i7 (10세대) 이상',
          memory: 'RAM 32 GB',
          graphics: 'VRAM 4 GB 이상, Vulkan을 지원하는 전용 GPU',
          storage: '사용 가능 공간 20 GB',
          sound: 'PulseAudio 또는 PipeWire',
          notes: 'NVMe SSD를 사용하면 대화 응답이 가장 빠릅니다',
        },
      },
    },
    languages: {
      title: '언어',
      intro: '인터페이스와 자막은 8개 언어로 제공됩니다. 튜터는 배우고 있는 언어인 일본어로 말합니다.',
      interface: '인터페이스',
      audio: '오디오',
      subtitles: '자막',
    },
    aiDisclosure: {
      title: 'AI에 대하여',
      body: 'Penko Vox: Japanese는 로컬에서 실행되는 생성형 AI를 사용합니다. 대규모 언어 모델이 일본어 튜터 역할을 하며 사용자가 하는 말에 따라 실시간으로 대화를 작성하고, 신경망 텍스트 음성 변환 엔진이 이를 음성으로 들려줍니다. 모든 AI가 그렇듯 실수할 수 있으므로, 권위자가 아닌 연습 상대로 생각해 주세요.',
    },
    faqTitle: '자주 묻는 질문',
    faq: [
      { q: '인터넷 연결이 필요한가요?', a: '사용할 때는 필요하지 않습니다. Steam을 통해 설치하고 나면 AI, 음성 인식, 음성 합성이 모두 사용자의 컴퓨터에서 실행됩니다.' },
      { q: '내 음성이 녹음되거나 업로드되나요?', a: '아니요. 마이크 오디오는 사용자의 컴퓨터에서 처리되며 업로드되거나 저장되지 않습니다.' },
      { q: '왜 RAM 16 GB와 AVX2 CPU가 필요한가요?', a: 'Penko Vox는 서버가 아닌 로컬에서 완전한 AI 언어 모델을 실행합니다. 이를 위해서는 메모리와 AVX2 명령어를 지원하는 CPU가 필요합니다. 그 덕분에 데이터가 비공개로 유지되고 앱을 오프라인에서 사용할 수 있습니다.' },
      { q: 'Steam Deck에서 작동하나요?', a: '네. Steam Deck에서 테스트되었으며, 컨트롤러 지원은 버전 2.1에서 실험적 기능으로 추가되었습니다.' },
      { q: 'Mac 버전이 있나요?', a: '현재는 없습니다. Penko Vox는 SteamOS를 포함한 Windows와 Linux에서 이용할 수 있습니다.' },
      { q: '어느 정도의 일본어 실력이 필요한가요?', a: '대화 시나리오는 JLPT N5(초급)부터 N1(고급)까지 다양하며, 이제 막 읽기를 시작하는 분에게는 쓰기 연습이 도움이 됩니다.' },
      { q: '구독 방식인가요?', a: '아니요. Steam에서 한 번만 구매하는 방식이며, 구독도, 토큰 제한도, 사용량 요금제도 없습니다.' },
      { q: 'AI는 항상 정확한가요?', a: '아니요. 훌륭한 연습 상대이지만 실수할 수 있습니다. 시험이나 중요한 번역은 선생님이나 신뢰할 수 있는 자료로 다시 확인하세요.' },
      { q: 'Penko Vox는 오픈소스인가요?', a: '아니요. Penko Vox는 비공개 소스의 유료 앱입니다. 판매 수익은 무료 오픈소스 앱인 Penko Plaza를 후원합니다.' },
      { q: '환불받을 수 있나요?', a: '구매는 Steam을 통해 이루어지므로 Steam의 환불 정책이 적용됩니다.' },
    ],
    support: {
      title: '지원',
      body: '막히는 부분이 있거나, 버그를 발견했거나, 아이디어가 있으신가요? 시작 가이드를 읽어 보시거나, Steam 포럼에 질문하시거나, 이메일로 문의해 주세요.',
      email: '이메일 문의',
      forums: 'Steam 커뮤니티 포럼',
      guideLink: '시작 가이드',
    },
  },

  voxGuide: {
    title: 'Penko Vox: Japanese 시작하기',
    intro: 'Penko Vox를 설정하고 최대한 활용하는 데 필요한 모든 것을 안내합니다.',
    sections: [
      {
        id: 'before-you-start',
        title: '시작하기 전에',
        blocks: [
          'Penko Vox는 완전한 AI 모델을 컴퓨터에서 실행하므로 하드웨어가 준비되어 있는지 확인하세요.',
          { ul: [
            'AVX2를 지원하는 CPU. 2013년 이후의 대부분의 Intel CPU(Haswell)와 AMD Ryzen CPU는 AVX2를 지원합니다. 확실하지 않다면 CPU 모델명과 "AVX2"를 함께 검색해 보세요.',
            '최소 16 GB의 RAM(32 GB 권장).',
            '15–20 GB의 여유 공간, 가능하면 SSD.',
            'Windows 10/11(64비트), SteamOS 또는 최신 Linux 배포판.',
          ] },
          '전체 목록은 제품 페이지의 시스템 요구 사항에서 확인할 수 있습니다.',
        ],
      },
      {
        id: 'install',
        title: '설치 및 첫 실행',
        blocks: [
          { ol: [
            'Steam에서 Penko Vox: Japanese를 구매하고 설치합니다.',
            'Steam 라이브러리에서 실행합니다.',
            'AI를 처음 불러오는 동안 첫 실행은 시간이 더 걸릴 수 있습니다. 이후 실행은 더 빠릅니다.',
          ] },
        ],
      },
      {
        id: 'microphone',
        title: '마이크 설정',
        blocks: [
          '말하기는 Penko Vox의 핵심입니다. 헤드셋을 사용하면 가장 선명하지만, 에코 캔슬링 덕분에 스피커도 사용할 수 있습니다.',
          { ul: [
            'Windows: 설정 › 개인 정보 및 보안 › 마이크를 열고 데스크톱 앱이 마이크를 사용할 수 있도록 허용되어 있는지 확인하세요.',
            'Linux: 시스템 사운드 설정에서 마이크를 기본 입력 장치로 선택하세요(PipeWire 또는 PulseAudio).',
            'Steam Deck: 내장 마이크를 사용할 수 있으며, 시끄러운 곳에서는 헤드셋을 사용하면 인식률이 좋아집니다.',
          ] },
        ],
      },
      {
        id: 'first-conversation',
        title: '첫 대화',
        blocks: [
          { ol: [
            'JLPT N5(초급)부터 N1(고급)까지 자신의 수준에 맞는 대화 시나리오를 고르거나, 직접 시나리오를 만드세요.',
            '일본어로 소리 내어 말하거나 입력해서 답하세요.',
            '튜터가 배역에 맞게 대답하며 교정을 대화 속에 자연스럽게 녹여냅니다.',
            '단어를 탭하면 오프라인 사전에서 찾아볼 수 있습니다.',
          ] },
          { callout: '실수를 걱정하지 마세요. 실수를 통해 튜터가 무엇을 도와야 할지 알게 됩니다.' },
        ],
      },
      {
        id: 'voice-calls',
        title: '음성 통화',
        blocks: [
          '음성 통화는 사람과 이야기하는 것 같습니다. 자연스럽게 말하고, 잠시 멈추고, 끼어들어 보세요. 튜터의 말을 끊을 수 있으며, 말 주고받기가 사용자에게 맞춰 조정됩니다.',
        ],
      },
      {
        id: 'kotoba-islands',
        title: 'Kotoba Islands',
        blocks: [
          'Kotoba Islands는 Penko Vox에 내장된 RPG입니다. 섬을 탐험하며 모든 주민과 자유롭게 대화하세요. 따라야 할 대본은 없으니, 알고 있는 일본어를 사용하고 새로운 단어도 시도해 보세요.',
        ],
      },
      {
        id: 'study-hub',
        title: '스터디 허브, 사전, 쓰기 연습',
        blocks: [
          { ul: [
            '스터디 허브: 대화에서 만난 단어는 복습 항목이 되며, FSRS 간격 반복으로 일정이 정해져 잊어버리기 직전에 다시 보게 됩니다. 하루 몇 분씩 하는 것이 가장 좋습니다.',
            '사전: 단어를 탭하면 완전히 오프라인으로 찾아볼 수 있습니다.',
            '쓰기 연습: 실시간 피드백과 함께 히라가나, 가타카나, 초급 한자와 단어를 획순대로 쓰는 법을 익히세요.',
          ] },
        ],
      },
      {
        id: 'progress',
        title: '진행도가 올라가는 방식',
        blocks: [
          '실제 대화에서 단어나 문법 패턴을 올바르게 사용하면 숙련도가 올라갑니다. 복습은 기억하는 데 도움이 되지만, 중요한 것은 언어를 직접 사용하는 것입니다.',
        ],
      },
      {
        id: 'controller',
        title: '컨트롤러와 Steam Deck',
        blocks: [
          '컨트롤러 지원은 버전 2.1에서 추가되었으며 실험적 기능입니다. 예상대로 반응하지 않는 부분이 있다면 마우스와 키보드(Steam Deck에서는 터치스크린)로 전환하고 저희에게 알려 주세요.',
        ],
      },
      {
        id: 'saves',
        title: '저장 데이터와 개인정보',
        blocks: [
          '대화, 어휘, 진행도는 로컬 파일인 saveData.json에 저장됩니다. 이 파일을 삭제하면 진행도가 초기화됩니다. Steam 클라우드를 켜면 Steam이 이 파일을 여러 컴퓨터 간에 동기화합니다.',
          '말하거나 입력한 내용은 어디로도 전송되지 않습니다. 자세한 내용은 개인정보 처리방침을 참조하세요.',
        ],
      },
      {
        id: 'performance',
        title: '성능 팁',
        blocks: [
          { ul: [
            '더 빠른 로딩과 응답을 위해 SSD, 가능하면 NVMe에 설치하세요.',
            '긴 세션 전에 탭이 많이 열린 브라우저처럼 메모리를 많이 쓰는 앱을 닫으세요.',
            'VRAM 4 GB 이상의 전용 GPU를 사용하면 가장 빠르게 응답합니다.',
          ] },
        ],
      },
      {
        id: 'troubleshooting',
        title: '문제 해결',
        blocks: [
          { ul: [
            '실행되지 않는 경우: CPU가 AVX2를 지원하는지, RAM이 최소 16 GB인지 확인하세요.',
            '응답이 느린 경우: 다른 앱을 닫고, 게임이 SSD에 설치되어 있는지 확인하세요.',
            '마이크가 감지되지 않는 경우: 시스템의 마이크 권한과 기본 입력 장치를 확인한 다음 Penko Vox를 다시 시작하세요.',
            '튜터가 자기 목소리를 듣는 경우: 헤드셋을 사용하거나 스피커 볼륨을 낮추세요.',
          ] },
        ],
      },
      {
        id: 'help',
        title: '도움 받기',
        blocks: [
          'Steam 커뮤니티 포럼에 질문하거나 contact@penkosoftware.org로 이메일을 보내 주세요. 운영 체제, CPU, RAM, 그리고 어떤 일이 있었는지 함께 알려 주세요.',
        ],
      },
    ],
  },

  voxPrivacy: {
    title: 'Penko Vox: Japanese 개인정보 처리방침',
    summary: 'Penko Vox: Japanese는 전적으로 사용자의 컴퓨터에서 실행됩니다. 저희는 개인 데이터를 수집하지 않습니다. 계정, 텔레메트리, 분석, 광고가 없습니다.',
    sections: [
      {
        id: 'who',
        title: '저희는 누구인가요',
        blocks: ['Penko Vox: Japanese는 독립 소프트웨어 스튜디오인 Penko Software가 만들었습니다. 개인정보 관련 문의: contact@penkosoftware.org.'],
      },
      {
        id: 'on-device',
        title: '사용자의 컴퓨터에서 일어나는 일',
        blocks: [
          { ul: [
            'AI, 음성 인식, 음성 합성은 모두 사용자의 컴퓨터에서 로컬로 실행됩니다.',
            '마이크 오디오는 사용자의 컴퓨터에서 처리됩니다. 업로드되지 않으며 저장되지도 않습니다.',
            '대화, 어휘, 진행도는 로컬 파일인 saveData.json에 저장되며, 언제든지 삭제할 수 있습니다.',
            '계정, 텔레메트리, 분석, 광고가 없습니다.',
            '앱을 사용하는 데 인터넷 연결이 필요하지 않습니다.',
          ] },
        ],
      },
      {
        id: 'steam',
        title: 'Steam이 처리하는 부분',
        blocks: ['Penko Vox: Japanese는 Steam을 통해 판매됩니다. 구매, 도전 과제, 그리고 사용자가 켠 경우 Steam 클라우드 저장(저장 파일을 동기화합니다)은 Valve가 Steam 개인정보 처리방침에 따라 처리합니다: https://store.steampowered.com/privacy_agreement/. 저희는 결제 정보를 받지 않습니다.'],
      },
      {
        id: 'website',
        title: '이 웹사이트',
        blocks: ['저희 웹사이트는 GitHub Pages에서 호스팅됩니다. 대부분의 웹 호스트와 마찬가지로, GitHub는 서비스를 안전하고 원활하게 유지하기 위해 IP 주소와 같은 기술 정보를 기록할 수 있습니다(GitHub 개인정보 처리방침 참조). 저희는 이러한 로그에 접근할 수 없으며 사용하지 않습니다. 사이트는 선택한 언어와 테마를 사용자의 기기에 저장하며, 쿠키, 분석, 추적기는 없습니다. 스크린샷은 저희 사이트에서 제공되며, 트레일러는 재생 버튼을 누른 후에만 Steam 서버에서 스트리밍됩니다. Steam으로 연결되는 링크에는 캠페인 태그가 포함되어 있어, Steam이 저희 페이지 중 어느 곳에서 방문이 유입되었는지 보여줄 수 있습니다. 이 태그에는 사용자에 관한 정보가 담겨 있지 않습니다.'],
      },
      {
        id: 'children',
        title: '어린이와 학교',
        blocks: ['앱이 개인 데이터를 수집하지 않으므로 어린이를 포함한 수업 환경에서 사용하기에 적합합니다. 학교와 대학은 contact@penkosoftware.org로 문의하여 자세한 내용, 수업용 시범 도입, 기관 라이선스에 대해 상담할 수 있습니다.'],
      },
      {
        id: 'changes',
        title: '변경 사항 및 문의',
        blocks: ['이 방침이 변경되면 여기에서 업데이트하고 상단의 날짜를 변경하겠습니다. 질문이나 요청: contact@penkosoftware.org.'],
      },
    ],
  },

  voxTerms: {
    title: 'Penko Vox: Japanese 이용약관(EULA)',
    summary: '요약하면, Penko Vox를 본인의 기기에서 사용할 수 있고, 저장 데이터는 사용자의 것이며, AI는 실수할 수 있고, 이 약관의 어떤 내용도 소비자로서의 권리를 박탈하지 않습니다.',
    sections: [
      {
        id: 'agreement',
        title: '1. 계약',
        blocks: ['이 약관은 사용자와 Penko Software("저희") 사이의 Penko Vox: Japanese("소프트웨어")에 관한 계약입니다. 소프트웨어를 설치하거나 사용함으로써 이 약관에 동의하게 됩니다. Steam을 통한 구매에는 Steam 구독자 계약도 적용되며, 환불은 Steam의 환불 정책을 따릅니다.'],
      },
      {
        id: 'licence',
        title: '2. 사용자의 라이선스',
        blocks: [
          '저희는 사용자에게 Steam이 허용하는 범위(Steam 가족 공유 포함) 내에서, 본인이 소유하거나 관리하는 기기에 소프트웨어를 설치하고 개인 학습 목적으로 사용할 수 있는 개인적, 비독점적, 양도 불가능한 라이선스를 부여합니다.',
          '학생과 교사는 학업과 수업 과제를 위해 각자의 개인 라이선스를 사용할 수 있습니다. 조직이 소속 학생이나 직원에게 소프트웨어를 제공하거나 조직 소유의 기기에 설치하는 경우에는 기관 라이선스가 필요합니다. contact@penkosoftware.org로 문의해 주세요.',
        ],
      },
      {
        id: 'restrictions',
        title: '3. 금지 사항',
        blocks: [
          { ul: [
            'Steam이 제공하는 기능을 통한 경우를 제외하고, 소프트웨어를 복사, 판매, 대여 또는 배포하는 행위.',
            '법률이 명시적으로 허용하는 경우를 제외하고, 소프트웨어를 리버스 엔지니어링, 디컴파일 또는 디스어셈블하는 행위.',
            '소프트웨어 자체의 콘텐츠(Penko Software가 제작한 아트, 시나리오, 캐릭터 및 기타 자산 등)를 추출하여 별도로 사용하는 행위. 제3자 구성 요소는 각자의 라이선스에 따라 계속 이용할 수 있습니다(제8조).',
            '저작권 또는 라이선스 고지를 제거하거나 변경하는 행위.',
          ] },
        ],
      },
      {
        id: 'ownership',
        title: '4. 소유권',
        blocks: ['소프트웨어와 그 콘텐츠는 Penko Software 및 라이선스 제공자에게 속하며, 사용자는 소유권이 아닌 라이선스를 받습니다. 사용자의 저장 데이터와 소프트웨어에서 사용자가 만든 모든 것은 사용자에게 속합니다.'],
      },
      {
        id: 'ai',
        title: '5. AI 생성 콘텐츠',
        blocks: ['소프트웨어는 사용자의 컴퓨터에서 실행되는 생성형 AI를 사용합니다. 대화, 교정, 음성은 자동으로 생성되며 부정확하거나 예상과 다를 수 있습니다. 소프트웨어는 학습 보조 도구이며, 자격을 갖춘 선생님, 공식 시험 또는 전문 번역을 대체하지 않으며, 소프트웨어가 생성하는 어떠한 내용도 전문적, 법률적 또는 재정적 조언이 아닙니다.'],
      },
      {
        id: 'early-access',
        title: '6. 앞서 해보기',
        blocks: ['소프트웨어는 앞서 해보기 단계에 있습니다. 기능이 변경, 추가 또는 제거될 수 있으며 버그를 만날 수 있습니다. 저희는 업데이트 간에 저장 데이터가 호환되도록 노력하지만 이를 보장할 수는 없습니다. 업데이트는 Steam을 통해 제공됩니다.'],
      },
      {
        id: 'privacy',
        title: '7. 개인정보',
        blocks: ['소프트웨어는 사용자의 음성과 대화를 로컬에서 처리하며 저희에게 개인 데이터를 전송하지 않습니다. Penko Vox: Japanese 개인정보 처리방침을 참조하세요.'],
      },
      {
        id: 'third-party',
        title: '8. 제3자 구성 요소',
        blocks: ['소프트웨어에는 AI 모델, 음성 엔진, 사전 등 제3자 구성 요소가 포함되어 있으며, 이는 각자의 약관에 따라 라이선스됩니다. 해당 구성 요소에는 그 약관이 적용되며, 이 약관의 어떠한 내용도 그 약관에 따른 사용자의 권리를 제한하지 않습니다. 라이선스와 필수 고지 사항이 포함된 전체 목록은 https://penkosoftware.org/vox/credits/ 에서 확인할 수 있습니다.'],
      },
      {
        id: 'warranty',
        title: '9. 보증',
        blocks: ['법률이 허용하는 범위 내에서, 소프트웨어는 어떠한 종류의 보증도 없이 "있는 그대로" 제공됩니다. 이 약관의 어떤 내용도 멕시코 연방 소비자보호법을 포함한 멕시코 법률 또는 사용자 거주 국가의 강행 법규에 따라 소비자로서 사용자가 가지는 권리를 제한하지 않습니다.'],
      },
      {
        id: 'liability',
        title: '10. 책임의 제한',
        blocks: ['법률이 허용하는 범위 내에서, 저희는 간접 손해 또는 결과적 손해에 대해 책임을 지지 않으며, 저희의 총 책임은 사용자가 소프트웨어에 대해 지불한 금액으로 제한됩니다.'],
      },
      {
        id: 'termination',
        title: '11. 종료',
        blocks: ['사용자가 이 약관을 위반하면 이 라이선스는 자동으로 종료됩니다. 종료되면 사용자는 소프트웨어 사용을 중단하고 삭제해야 합니다.'],
      },
      {
        id: 'law',
        title: '12. 준거법',
        blocks: ['이 약관은 멕시코 합중국의 연방법에 따라 규율됩니다. 분쟁은 멕시코의 관할 법원에서 해결되며, 연방 소비자보호청(PROFECO)에 문의할 권리를 포함한 사용자의 소비자 권리를 해치지 않습니다.'],
      },
      {
        id: 'changes',
        title: '13. 변경 사항 및 문의',
        blocks: ['저희는 이 약관을 업데이트할 수 있으며, 상단의 날짜는 최신 버전을 나타내고, 중요한 변경 사항은 Steam 페이지에 공지됩니다. 문의: contact@penkosoftware.org.'],
      },
    ],
  },

  plazaPrivacy: {
    title: 'Penko Plaza 개인정보 처리방침',
    summary: '저희는 개인 데이터를 수집하지 않습니다. Penko Plaza 앱은 브라우저에서 실행되고 데이터를 브라우저에 보관하며, 계정, 분석, 광고, 추적기가 없습니다.',
    sections: [
      {
        id: 'who',
        title: '저희는 누구인가요',
        blocks: ['Penko Plaza는 독립 소프트웨어 스튜디오인 Penko Software가 만든 무료 오픈소스 앱 모음입니다. 개인정보 관련 문의: contact@penkosoftware.org.'],
      },
      {
        id: 'apps',
        title: 'Penko Plaza 앱',
        blocks: [
          { ul: [
            '모든 것이 브라우저에서 실행됩니다. 앱은 사용자의 문서, 메모 또는 기타 콘텐츠를 저희에게 전송하지 않습니다.',
            '사용자의 데이터는 브라우저(예: 로컬 저장소 또는 데이터베이스)에만 저장됩니다. 브라우저 데이터를 삭제하면 함께 삭제됩니다.',
            '계정, 분석, 광고, 추적이 없으며 쿠키도 없습니다.',
            '브라우저는 앱이 오프라인에서 작동하도록 사이트 파일의 사본을 보관합니다. 사이트는 또한 선택한 언어와 테마를 사용자의 기기에 기억합니다.',
            '일부 앱은 다른 사람과의 실시간 협업이나 선택적 클라우드 AI 모드와 같은 선택적 온라인 기능을 제공합니다. 이러한 기능을 사용하기로 선택하면, 관련된 콘텐츠는 다른 참여자 또는 해당 기능을 제공하는 서비스로 전달되며, 그 서비스의 자체 개인정보 처리방침이 적용됩니다.',
          ] },
        ],
      },
      {
        id: 'website',
        title: '이 웹사이트',
        blocks: ['penkosoftware.org는 GitHub Pages에서 호스팅됩니다. 대부분의 웹 호스트와 마찬가지로, GitHub는 서비스를 안전하고 원활하게 유지하기 위해 IP 주소와 같은 기술 정보를 기록할 수 있습니다(GitHub 개인정보 처리방침 참조). 저희는 이러한 로그에 접근할 수 없으며 사용하지 않습니다.'],
      },
      {
        id: 'children',
        title: '어린이와 학교',
        blocks: ['저희는 개인 데이터를 수집하지 않으므로 Penko Plaza 앱은 어린이를 포함한 수업 환경에서 사용하기에 적합합니다. 학교는 contact@penkosoftware.org로 문의하여 자세한 내용을 확인할 수 있습니다.'],
      },
      {
        id: 'paid-apps',
        title: '저희의 유료 앱',
        blocks: ['Penko Vox: Japanese 같은 유료 앱에는 각자의 개인정보 처리방침이 있으며, 제품 페이지에 링크되어 있습니다.'],
      },
      {
        id: 'changes',
        title: '변경 사항 및 문의',
        blocks: ['이 방침이 변경되면 여기에서 업데이트하고 상단의 날짜를 변경하겠습니다. 질문이나 요청: contact@penkosoftware.org.'],
      },
    ],
  },

  credits: {
    title: '크레딧 및 라이선스',
    intro: 'Penko Vox: Japanese는 훌륭한 오픈 소스 소프트웨어, AI 모델, 데이터를 기반으로 만들어졌습니다. 이 구성 요소들은 각자의 라이선스를 유지하며, 해당 라이선스에 따른 사용자의 권리는 저희 약관으로 제한되지 않습니다.',
    component: '구성 요소',
    licence: '라이선스',
    purposes: {
      qwen: 'AI 튜터의 기반이 되는 언어 모델',
      llamacpp: '사용자의 컴퓨터에서 언어 모델 실행',
      kotobawhisper: '일본어 음성 인식 모델',
      whispercpp: '음성 인식 엔진',
      reazonspeech: '일본어 음성 인식 모델',
      sherpaonnx: '음성 인식 및 합성 런타임',
      silerovad: '말을 시작하고 멈추는 시점 감지',
      kokoro: '일본어 음성(음성 합성)',
      kuromoji: '일본어 문장을 단어로 분리',
      jmdict: '일본어 사전 데이터',
      wanakana: '로마자와 가나 간 변환',
      tsfsrs: '스터디 허브 복습 일정 관리(FSRS)',
      threejs: '3D 그래픽',
      react: '사용자 인터페이스',
      electron: '데스크톱 앱 프레임워크',
      chromium: 'Electron에 포함된 웹 엔진',
      steamworksjs: 'Steam 연동(도전 과제, 클라우드 저장)',
    },
    jmdictTitle: '사전 데이터',
    jmdictNotice: 'Penko Vox: Japanese는 JMdict 사전 파일을 사용합니다. 이 파일들은 Electronic Dictionary Research and Development Group (EDRDG)의 자산이며, 해당 그룹의 라이선스(Creative Commons Attribution-ShareAlike 4.0)에 따라 사용됩니다: https://www.edrdg.org/edrdg/licence.html',
    chromiumNote: 'Chromium에는 많은 오픈 소스 구성 요소가 포함되어 있으며, 해당 라이선스는 앱 설치 폴더의 LICENSES.chromium.html 파일에 나열되어 있습니다.',
    fullTexts: '라이선스 전문은 앱에 포함되어 있습니다. 문의: contact@penkosoftware.org.',
  },

  press: {
    title: '프레스 키트',
    intro: 'Penko Vox: Japanese에 대해 쓰는 데 필요한 모든 것입니다. 앱을 다루는 기사에 이 텍스트와 이미지를 자유롭게 사용하셔도 좋습니다.',
    factsTitle: '팩트 시트',
    facts: [
      { label: '개발사 및 배급사', value: 'Penko Software' },
      { label: '앞서 해보기 출시', value: '2026년 8월 10일' },
      { label: '정식 출시', value: '2027년 8월 예정' },
      { label: '플랫폼', value: 'Windows, Linux, SteamOS (Steam Deck)' },
      { label: '가격', value: '지역에 따라 다름, Steam 참조' },
      { label: '인터페이스 및 자막 언어', value: '영어, 프랑스어, 독일어, 일본어, 한국어, 중국어 간체, 스페인어(중남미), 베트남어' },
      { label: '음성', value: '일본어' },
    ],
    shortTitle: '짧은 소개',
    short: 'Penko Vox: Japanese는 대화를 통해 일본어를 가르치는 프라이빗 오프라인 AI 튜터입니다. JLPT N5–N1 전 단계의 38개 시나리오로 대화하고, 자연스러운 음성 통화를 하고, Kotoba Islands RPG를 탐험하세요. 모두 사용자의 컴퓨터에서 로컬로 실행됩니다.',
    longTitle: 'Penko Vox: Japanese 소개',
    long: [
      '대부분의 언어 앱은 디지털 교과서처럼 작동합니다. Penko Vox: Japanese는 그 다음 단계, 즉 실제 대화에서 일본어를 사용하는 것을 위해 만들어졌습니다. 학습자는 듣고, 배역에 맞게 대답하며, 부드러운 교정을 대화 속에 녹여내는 AI 튜터와 이야기합니다.',
      '모든 것이 학습자 본인의 컴퓨터에서 실행됩니다. 음성 인식, AI 튜터, 음성 합성이 완전히 오프라인으로 작동하므로 음성과 대화가 기기를 떠나지 않으며, 계정, 구독, 사용 제한이 없습니다.',
      '버전 2.1에서는 모든 주민과 자유롭게 대화하는 RPG인 Kotoba Islands, 말 주고받기와 끼어들기가 가능한 자연스러운 음성 통화, FSRS 간격 반복을 갖춘 스터디 허브, 오프라인 탭 검색 사전, 그리고 실험적인 컨트롤러 및 Steam Deck 지원이 추가되었습니다.',
      'Penko Vox: Japanese는 Penko Software가 만들었으며, 그 판매 수익은 무료 오픈소스 앱 모음인 Penko Plaza를 후원합니다.',
    ],
    featuresTitle: '주요 기능',
    assetsTitle: '로고와 아트워크',
    assetsNote: '스크린샷과 트레일러는 곧 공개됩니다. 다른 형식이나 크기가 필요하시면 이메일로 문의해 주세요.',
    icon: '앱 아이콘 (SVG)',
    capsule: '캡슐 아트 (SVG)',
    download: '다운로드',
    contactTitle: '언론 문의',
    contactBody: '인터뷰, 리뷰 키 또는 질문이 있으시면 contact@penkosoftware.org로 이메일을 보내 주세요.',
  },
};
