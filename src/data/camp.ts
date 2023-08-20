export interface CampProps {
  id: number;
  campName: string;
  clubName: string;
  campInfo: string;
  campTags: string[];
  campVideo: string;
  clubInfo: string;
  clubColor: string;
  clubSubColor: string;
  clubTags: string[];
  clubLinks:{
    website?: string;
    instagram?: string;
    facebook?: string;
  }
}


export const campData:CampProps[] = [
  {
    id:1,
    clubName: 'AnA',
    campName: 'Socket.io를 이용한\n나만의 카톡방 만들기',
    clubColor: '#EDA12F',
    clubInfo: 'AnA는 Application과 Architecture를 합쳐서 탄생하게 된 이름입니다. AnA는 백엔드 개발 동아리로서 Node.js와 Linux서버 구축, MySQL DB 등을 이용해서 웹 서버 구축하는 동아리입니다. 이 밖에도 심화 과정을 통해 Python, Rust 등 다양한 기술을 직접 배울 수 있습니다.',
    campInfo: '여러분들 카카오톡이라는 채팅 어플을 다들 사용해보셨나요? 한번 이번 캠프에서 유사한 환경을 구현 해 보시는건 어떤가요? 웹, 서버, 응용프로그램 등 다양한 프로그램을 구현하는데 사용되는 JS언어와 사용자간의 실시간 통신 방법인 Socket을 이용해 구축하여 이해 할 수 있는 기회를 가질 수 있습니다.',
    clubTags: [
      '웹개발',
      '백엔드',
      '서버',
    ],
    campVideo:'',
    clubSubColor: '#FFF4EA',
    campTags: [
      '소켓',
        '웹개발',
        '카카오톡'
        ],
    clubLinks: {
      instagram: 'https://www.instagram.com/ana_kr_corp/',
      website: 'https://www.sunrin-ana.kr/',
      facebook: 'https://www.facebook.com/sunrinana'
    },
  },
  {
    id:2,
    clubName: 'App:ple PI',
    campName: 'Android Studio를 이용한\n심리테스트 앱 만들기',
    clubColor: '#D1272A',
    clubInfo: 'App:ple Pi는 소프트웨어과 앱 개발 동아리입니다. 주로 안드로이드 스튜디오를 활용한 앱 개발과 UI/UX 디자인을 공부하고, 이를 통해 활발한 교내외 대회 및 활동을 하여 53개의 많은 수상실적을 가지고 있습니다.',
    campInfo: '이번캠프에서 XML과 Kotlin에 대해 배운뒤 Android Studio를 이용해\n교내의 여러동아리중 가장 어울리는 동아리를 찾아주는 심리테스트 앱을 만들어볼 예정입니다.',
    clubTags: [
      '창업',
      '앱개발',
      'UI/UX',
    ],
    campVideo:'',
    clubSubColor: '#FFF4F5',
    campTags: [
      '앱개발',
      '안드로이드',
      '심리테스트'
    ],
    clubLinks: {
      instagram: 'https://www.instagram.com/appple.pi.official/',
      website: 'https://appplepi.com/',
      facebook: 'https://www.facebook.com/app.plepi',
    },
  },
  {
    id:3,
    clubName: 'EDCAN',
    campName: 'Android Studio로\n나만의 퀴즈 앱 만들기',
    clubColor: '#00A9CE',
    clubInfo: 'EDCAN은 2015년에 만들어진 소프트웨어과 소속의 모바일 콘텐츠 개발 동아리로, 안드로이드 앱 개발, 크로스 플랫폼 서비스 개발, UI/UX 디자인을 공부합니다. 타 학교, 타 동아리와 협업을 중심으로 다양한 경험을 쌓을 수 있습니다.',
    campInfo: '앱 개발 동아리 EDCAN에서 여러분의 창의력을 발휘해보세요. 어디서나 볼 수 있는 앱 속의 세계를 Android Studio로 직접 만들어봐요!',
    clubTags: [
      '앱개발',
      '안드로이드',
      'UI/UX',
    ],
    campVideo:'',
    clubSubColor: '#ECF7FA',
    campTags: [
      '앱개발',
        '퀴즈',
        '안드로이드'
    ],
    clubLinks: {
      instagram: 'https://www.instagram.com/sunrin_edcan/',
      website: 'https://edcan.kr',
      facebook: 'https://www.facebook.com/sunrinedcan',
    },
  },
  {
    id:4,
    clubName: 'Emotion',
    campName: '외국에서 살아남자!\n:사진번역 AI모델 제작하기',
    clubColor: '#3198D4',
    clubInfo: 'Emotion은 인공지능 개발에 관심을 가진 학생들이 모여 활동하는 동아리입니다. 선린인터넷고등학교에서 활동하며, 파이썬 프로그래밍 언어를 학습하고 데이터 분석 및 인공지능 개발의 기본 개념들을 배우며, 이를 활용하여 인공지능 모델을 개발합니다. Emotion 동아리는 학생들에게 인공지능 분야에서 필요한 기술과 지식을 전달하고, 창의적인 활동을 지원하며, 학생들의 성장과 발전을 돕는 역할을 합니다.',
    campInfo: '요즘 정말 핫한 인공지능을 배워보고 싶지 않나요? Emotion에서 Python과 인공지능의 기초부터 응용까지 차근차근 알아보고 이해하며, 직접 인공지능 모델까지 만들어 볼 수 있어요. 어렵고 재미없는 수업이 아닌 처음 배우는 사람들도 재밌고 흥미롭게 들을 수 있는 수업입니다. Emotion과 함께라면 여러분도 인공지능과 친해질 수 있어요!',
    clubTags: [
      '데이터분석',
      '인공지능',
      '개발',
    ],
    campVideo:'',
    clubSubColor: '#EFF9FF',
    campTags: [
      'AI',
      '번역',
      'Python'
    ],
    clubLinks: {
      instagram: 'https://www.instagram.com/sunrin_emotion/',
      facebook: 'https://www.facebook.com/sunrinemotion',
      website: 'https://ernotion.kr',
    },
  },
  {
    id:5,
    clubName: 'IWOP',
    campName: '웹을 나만의\n무대로 만들기',
    clubColor: '#66DC3D',
    clubInfo: 'IWOP은 2001년 설립된 소프트웨어과 유일의 웹 개발 동아리로, 지금까지 지속적으로 우수한 실적을 내며 소프트웨어과 학생들의 웹 개발 역량을 한층 높여왔습니다. 또한 IWOP은 소프트웨어과에서 가장 오래된 동아리로서, 다양한 경험과 노하우를 쌓아온 경험있는 동아리입니다. IWOP은 최신 기술을 적용하여 창의적이고 혁신적인 웹 개발 프로젝트를 수행하며, 학교 내외에서 다양한 수상과 입상 경력을 쌓고 있습니다.많은 부원들이 IWOP에서 성장하고, 성공의 발판을 마련했습니다. ',
    campInfo: '내가 좋아하는 모든것을 웹사이트에 담고, 본인만의 개성을 표현해보세요! 웹사이트라는 가능성이 무한한 도화지를 본인의 무대로 만들어, 모두에게 본인만의 웹사이트를 빛내보세요!',
    clubTags: [
      '웹개발',
      '프론트엔드',
      'UI/UX'
    ],
    campVideo:'',
    clubSubColor: '#EAFAE5',
    campTags: [
      '웹개발',
      '프론트엔드',
      '나만의_무대'
    ],
    clubLinks: {
      instagram: 'https://www.instagram.com/sunrin_iwop/',
      facebook: 'https://www.facebook.com/sunriniwop',
      website: 'http://iwop.github.io',
    },
  },
  {
    id:6,
    clubName: 'Layer7',
    campName: 'USB로 친구\n컴퓨터 해킹하기',
    clubColor: '#5842E0',
    clubInfo: 'Layer7은 선린인터넷고등학교 정보보호과의 자랑스러운 동아리로써. 정보보호 분야에 대한 관심과 열정을 가진 학생들이 모여 시스템 해킹, 웹 해킹, 리버싱 등 다양한 분야에서 활동하고 있습니다. 2001년 설립된 Layer7은 선린인터넷고등학교 정보보호과 동아리 중에서 가장 긴 역사를 지니며, 수 많은 수상 실적들과 활동으로 정보보호과를 대표하는 동아리 중 하나입니다. 정보보호에 대한 전문적인 지식과 기술을 배우고, 이를 실제로 활용해보며 끊임없이 발전하는 동아리로, 정보보호 분야에 관심이 있는 학생들에게 매우 유용한 동아리입니다.',
    campInfo: '눈으로 보며 배우는 보안! 아두이노와 Reverse Shell로 BAD USB 공격 직접 체험하고, 안전한 대응법도 마스터하세요.',
    clubTags: [
      '해킹',
      '정보보안',
      '시스템',
    ],
    campVideo:'',
    clubSubColor: '#F4F2FF',
    campTags: [
      '해킹',
        '친구컴퓨터',
        'USB'
    ],
    clubLinks: {
      instagram: 'https://www.instagram.com/sunrin_layer7/',
      facebook: 'https://www.facebook.com/letsgolayer7',
      website: 'https://layer7.kr',
    },
  },
  {
    id:7,
    clubName: 'NEFUS',
    campName: '누가 봐도 좀~~멋있는\n투석기 RC카 만들기',
    clubColor: '#3565DA',
    clubInfo: 'NEFUS는 2003년 개설된 정보보호과 전공 동아리로, IoT와 Network 분야를 연구하는 전공 동아리입니다.',
    campInfo: 'Arduino를 활용하여 “투석기 RC카”와 이를 조종하는 조종기를 직접 만드는 캠프입니다. 초음파 센서, LED, 버저 등의 자신이 원하는 부품을 추가하여 “투석기 RC카”를 원하는 데로 꾸며봅시다.',
    clubTags: [
      'IoT',
      'Network',
      '통신'
    ],
    campVideo:'',
    clubSubColor: '#F4F7FF',
    campTags: [
      'IoT',
      'Arduino',
      'RC카'
    ],
    clubLinks: {
      instagram: 'https://www.instagram.com/sunrin_nefus/',
      website: 'http://nefus.kr',
      facebook: 'https://www.facebook.com/sunrinefus',
    },
  },
  {
    id:8,
    clubName: 'RG',
    campName: 'RG와 함께하는\n유니티의 슈팅게임',
    clubColor: '#666CC1',
    clubInfo: '소프트웨어과 전공 동아리인 RG는 게임개발 전문 동아리로, Unity 등의 게임엔진을 이용해 기초 기본 심화 과정을 거쳐서 직접 개발하고 다양한 디자인 도구를 활용해 게임을 제작합니다.',
    campInfo: '게임 개발 동아리 RG와 함께 Unity 엔진의 활용방법과 기본 요소들을 배워\n기초를 쌓고, 슈팅게임을 이루는 알고리즘과 C#스크립트 작성을 배워 게임\n개발을 체험해보고 프로그래밍과 더욱 가까워지는 시간을 가질 수 있습니다. ',
    clubTags: [
      '게임개발',
        '3D',
        'Unity'
    ],
    campVideo:'',
    clubSubColor: '#F2F3FF',
    campTags: [
      '게임',
      '유니티',
      '슈팅게임'
    ],
    clubLinks: {
      instagram: 'https://www.instagram.com/sunrin_rg/',
      website: 'https://sunrin-rg.github.io',
      facebook: 'https://www.facebook.com/sunrintrg'
    },
  },
  {
    id:9,
    clubName: 'TeamLog',
    campName: 'Javascript로 검 강화\n게임 만들기',
    clubColor: '#F25827',
    clubInfo: 'Teamlog는 서버 프로그래밍, 네트워크, 그리고 웹 개발에 관심 있는 학생들이 모여 함께 동아리 활동을 합니다. 이 동아리에서는 HTML, CSS, JavaScript, Node.js, Vue, React와 같은 프론트엔드와 백엔드 기술을 배울 수 있어요. 또한, TCP/IP, HTTP, Socket 등의 네트워크 분야와 서버 프로그래밍 분야에도 중점을 두어 이를 학습하고, 실제 서버를 구축해보며 이를 적용하는 방법을 익힐 수 있습니다. Teamlog에서는 학생들이 현대적인 IT 기술을 습득하고, 다양한 분야에 대한 지식을 습득할 수 있는 기회를 제공합니다.',
    campInfo: ' 저희 TeamLog에서는 Web 개발의 기초인 HTML, CSS, JavaScript를 학습하는 과정을 제공합니다. 캠프를 통해 Web에 처음으로 관심을 가지는 분들도 많습니다. 이번에는 재미있는 웹 게임인 "검 강화 하기"를 직접 구현해보며 Web 개발의 기초를 배우고 즐겁게 이해할 수 있는 시간을 마련할 예정입니다!',
    clubTags: [
      'Web',
      'Server',
      'Network',
    ],
    campVideo:'',
    clubSubColor: '#FFF7F4',
    campTags: [
      'Js',
        '웹',
        '게임'
    ],
    clubLinks: {
      instagram: 'https://www.instagram.com/sunrin_teamlog/',
      website: 'https://teamlog.kr/',
      facebook: 'https://www.facebook.com/sunrintog'
    },
  },
  {
    id:10,
    clubName: 'UniFox',
    campName: 'Python으로 만드는\n테트리스 게임',
    clubColor: '#EC851A',
    clubInfo: 'Unifox는 선린인터넷고등학교 정보보호과 전공동아리로서 설립되어 개발과 보안 프로그래밍 분야에서 활동하고 있습니다. 보안 프로그래밍의 기본이 되는 알고리즘과 웹, 그리고 해킹을 공부하여 보안에 최적화된 개발을 할 수 있도록 돕습니다. 풍부한 경험을 쌓는 다양한 대회와 컨퍼런스 참여, 각자의 분야에서 깊은 탐구, 지식의 깊이를 더해주는 논문 작성 등 우리는 꿈과 미래에 대한 확신으로 가득 찬 친구들이 모여 함께 만들어 갑니다.',
    campInfo: '오랜 역사와 전통이 있는 게임 테트리스! Unifox와 함께하는 소프트웨어 나눔축제에서는 테트리스를 개발해 볼 겁니다. 세계에서 가장 인기 있는 언어 중 하나인 Python과 Python의 게임 개발 라이브러리 Pygame, 테트리스의 동작 과정과 알고리즘을 배우고 이를 활용해 테트리스를 만드는 실습을 합니다. 평소에 게임 개발에 관심이 있으셨던 분들이나, 게임을 좋아하시는 분들이 신청하시면 좋은 기회가 될 것 같습니다. 그럼 당일 날 뵙겠습니다!',
    clubTags: [
      '보안',
      '알고리즘',
      '웹',
    ],
    campVideo:'',
    clubSubColor: '#FFF4E8',
    campTags: [
      'Python',
        '게임',
        '테트리스'
    ],
    clubLinks: {
      instagram: 'https://www.instagram.com/sunrin_unifox/',
      website: 'https://unifox.kr/',
      facebook: 'https://www.facebook.com/UnifoxToTheWorld'
    },
  },
  {
    id:11,
    clubName: 'Zer0pen',
    campName: '유니티로 만드는\n스릴있는 점프게임',
    clubColor: '#FFB801',
    clubInfo: '저희 제로픈은 게임 개발 동아리로서 C, C++, Unity를 활용해서 게임개발을 배우고 동아리 자체제작엔진 zero엔진을 활용하여 다양한 게임개발엔진을 체험할 수 있습니다. 또한 사운드, 애니매이션, 기획등 쉽게 배울 수 없는 다양한 심화 수업도 진행하고 있습니다. 그리고 저희는 게임 디자이너도 함께 수업하며 협동 조금더 완성도 있는 게임 개발 환경을 만들어 주고 여기서 게임 디자니어들은 게임개발에 필요한 캐릭터 디자인, 모델링을 공부합니다.',
    campInfo: "\"제로픈과 만드는 스릴있는 점프게임\" 캠프에서는 다가오는 적들을 향해 점프하고 밟아서 적을 처치하는 게임을 만들게 됩니다. 이 캠프에 참여하신다면 기본적인 스크립팅 능력과 유니티를 다룰 수 있게됩니다.",
    clubTags: [
      '게임개발',
      '3D',
      'RPG',
    ],
    campVideo:'',
    clubSubColor: '#FFFAED',
    campTags: [
      '게임개발',
      '유니티',
        '점프게임'
    ],
    clubLinks: {
      instagram:'https://www.instagram.com/zer0pen_/',
      website: 'https://zer0pen.github.io/',
      facebook: 'https://www.facebook.com/zer0pen/',
    },
  },
];
