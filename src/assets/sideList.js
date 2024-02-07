const sideList = {
  name: 'sideList',
  columns: [
    {
      icon: 'home',
      is_seperator: 1,
      label: '홈 화면',
      path: 'home'
    },
    {
      icon: 'vaccines',
      is_seperator: 0,
      label: '병원 기록',
      path: 'hospital'
    },
    {
      icon: 'heart_broken',
      is_seperator: 1,
      label: '현재 증상',
      path: 'symptom'
    },
    {
      icon: 'medical_services',
      is_seperator: 0,
      label: '복용중인 약',
      path: 'medication'
    },
    {
      icon: 'date_range',
      is_seperator: 1,
      label: '복용중인 비타민',
      path: 'vitamins'
    },
    {
      icon: 'summarize',
      is_seperator: 0,
      label: '전체 요약',
      path: 'summary'
    },
    {
      icon: 'settings',
      is_seperator: 0,
      label: '설정 값',
      path: 'settings'
    },
    {
      icon: 'face_3',
      is_seperator: 0,
      label: '유저 선택',
      path: 'member'
    }
  ]
}

export default sideList
