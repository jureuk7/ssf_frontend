interface QuestionProps {
  id: number;
  question: string;
  answer: string;
}

export const questionData:QuestionProps[] = [
  {
    id:0,
    question: "캠프는 언제부터 언제까지 진행되나요?",
    answer: "9월 2일 (토) 오후 1시부터 5시까지 진행됩니다!",
  },
  {
    id:1,
    question: "어떻게 신청하나요?",
    answer: "이 웹사이트 아래에 있는 신청버튼을 통해 신청할 수 있습니다!",
  },
  {
    id:2,
    question: "어디에서 진행되나요?",
    answer: "선린인터넷고등학교 동아리 별 실습실에서 진행됩니다!",
  },
  {
    id:3,
    question:"신청 기간이 어떻게 되나요?",
    answer:"8월 21일부터 27일까지 신청이 가능합니다!",
  },
  {
    id:4,
    question: "참가비용은 어떻게 되나요?",
    answer: "참가비는 무료입니다! 참가 시 비용이 들지 않으며 교재 또한 무상으로 지급됩니다.",
  },
  {
    id:6,
    question:"신청 자격이 어떻게 되나요?",
    answer:"수도권에 거주하는 모든 중학생을 대상으로 신청 가능합니다!"
  },
  {
    id:7,
    question: "캠프 중복 지원이 가능한가요?",
    answer: "아니요! 캠프 중복지원은 불가능합니다 ㅠㅠ 캠프는 한 곳만 신청해주세요!",
  },
  {
    id:8,
    question:"기타 문의사항이 있어요!",
    answer:"070-4459-9047 혹은 카카오톡(@소프트웨어나눔축제)를 통해 문의해주세요!"
  }
]
