const scenarios = [
  {
    id: 'cortis',
    brand: '포카리 스웨트',
    title: '새로운 소비자층 공략 (코르티스)',
    situation: '소비자층의 연령대 확대를 위한 노력(10대)',
    features: ['시원함', '갈증 해소'],
    goal: '10대 소비자들에게 다이어트 식품으로서 구매유도를 해야 함',
    methods: {
      SNS: [
        {
          title: '10대 타깃 숏폼 챌린지',
          detail: '“#포카리 청춘 챌린지"를 시작하여 우수 영상에는 추첨을 통해 굿즈나 음료 제공 -> 10대의 SNS 이용 습관 활용',
          score: 8
        },
        {
          title: '포카리 공감 밈 콘텐츠',
          detail: '“시험이 끝난 고1 상태”,“체육부 최고의 음료”처럼 10대가 공감할 만한 상황을 밈으로 제작 -> 재미있는 콘텐츠라고 인지 후 접근 가능',
          score: 7
        }
      ],
      영상: [
        {
          title: '드라마 형식 숏폼 광고',
          detail: '등교 -> 체육시간 -> 학원 같은 10대의 하루를 짧게 드라마화 하여 제품을 10대의 일상과 연결',
          score: 8
        },
        {
          title: '가수·배우와의 연계 광고',
          detail: '10대가 좋아하는 인기 인물과 연결해 시원하고 건강한 이미지를 전달 -> 10대에게 자연스럽게 음료를 노출시킴',
          score: 9
        }
      ],
      오프라인: [
        {
          title: '스쿨 프리미엄 체험존',
          detail: '학교 주변 체육관, 카페, 서점 앞에서 짧은 체험 이벤트를 진행해 직접 마셔보는 경험을 제공 “한 번 마셔봄”을 유도',
          score: 7
        },
        {
          title: '도보·자전거 루트 홍보',
          detail: '자전거 도로와 산책로에 포카리 스웨트 홍보 배너를 설치하고, 시원함과 갈증 해소를 한 번에 강조하는 메시지를 부착',
          score: 6
        }
      ],
      인플루언서: [
        {
          title: '인기 크리에이터와 협업',
          detail: '10대가 선호하는 인플루언서와 협업해 ‘크리에이터가 마시는 음료’라는 이미지를 만들고, 실사용 후기 영상으로 분위기와 신뢰를 높임',
          score: 9
        },
        {
          title: '학생 커뮤니티 인플루언서',
          detail: '학생 커뮤니티에서 활동하는 인플루언서를 활용해 포카리 스웨트가 일상 속 쉽게 선택할 수 있는 음료라는 점을 강조합니다.',
          score: 7
        }
      ],
      '할인/이벤트': [
        {
          title: 'SNS 인증 이벤트',
          detail: '포카리 스웨트 뒤에 QR을 이용하여 이벤트를 열수 있음 추첨을 통해 참여자에게 할인 쿠폰을 제공하며 10대의 참여를 유도합니다.',
          score: 8
        },
        {
          title: '묶음 할인',
          detail: '2개 구매 시 1개를 더 제공하여 10대에 비용적 부담을 줄임',
          score: 6
        }
      ]
    }
  },
  {
    id: 'promise9',
    brand: '포카리 스웨트',
    title: '판매 촉진 (프로미스나인)',
    situation: '판매 촉진을 위해 노력 중',
    features: ['시원함', '갈증 해소'],
    goal: '운동 및 야외 활동 시 자연스럽게 포카리 스웨트를 떠올리게 하기',
    methods: {
      SNS: [
        {
          title: '운동 순간 포카리 스웨트 인증',
          detail: '운동 중 마시는 순간을 담은 짧은 인증 콘텐츠를 올려 “지금 이 순간, 포카리 스웨트”라는 이미지를 심어줌',
          score: 8
        },
        {
          title: '오늘의 포카리 미션',
          detail: '친구와 포카리 마시기, 운동 후 포카리 인증 등 매일 다른 미션을 제시한 후 참여자에게 추첨으로 상품을 제공',
          score: 7
        }
      ],
      영상: [
        {
          title: '필드형 운동 광고',
          detail: '운동장, 산책로, 캠핑장 같은 야외에서 포카리 스웨트가 필요한 순간을 영상으로 보여주며 컨셉을 강화함',
          score: 9
        },
        {
          title: '스포츠 애니메이션 광고',
          detail: '움직이는 장면과 함께 시원함과 갈증 해소를 강조하는 애니메이션 광고를 제작해 기억에 남게함',
          score: 8
        }
      ],
      오프라인: [
        {
          title: '야외 이벤트 스탠드',
          detail: '운동회, 축제, 러닝 이벤트 곳곳에 스탠드를 설치해 직접 마시고 경험',
          score: 8
        },
        {
          title: '필드 투어 팝업',
          detail: '사람들이 많이 모이는 공원이나 체육관에 팝업스토어를 열어 즉석 체험과 샘플 제공',
          score: 7
        }
      ],
      인플루언서: [
        {
          title: '운동 인플루언서 협업',
          detail: '운동 유튜버나 스포츠 관련 인플루언서와 콜라보해 현실적인 운동 루틴 속 포카리 스웨트의 필수성 강조',
          score: 9
        },
        {
          title: '10대 크리에이터와 협업',
          detail: '10대 크리에이터가 내 가방 속 필수템 으로 포카리를 일상 속에서 소개하여 관심 유도',
          score: 8
        }
      ],
      '할인/이벤트': [
        {
          title: '한정판 쿠폰',
          detail: '운동 후 쿠폰 증정 이벤트를 통해 소비자가 포카리 스웨트를 다시 찾게 만드는 방식',
          score: 7
        },
        {
          title: '2개 구매 시 1개 무료',
          detail: '테이크아웃, 야외 활동용 제품 묶음을 이용해 한 번에 더 많이 선택하게 만듦',
          score: 8
        }
      ]
    }
  },
  {
    id: 'cheese',
    brand: '비누 말랑이',
    title: '경쟁 제품 등장 (고윤정)',
    situation: '치즈 말랑이 제품의 등장으로 경쟁이 일어남',
    features: ['말랑함', '스트레스 해소'],
    goal: '치즈 말랑이보다 더 높은 수익화',
    methods: {
      SNS: [
        {
          title: '말랑한 감성 저격',
          detail: '“스트레스 날리는 비누 말랑이”라는 컨셉으로 감성적인 이미지를 전달하고, 사용자 후기와 반응을 자연스럽게 자극함',
          score: 8
        },
        {
          title: '비주얼 공유 유도',
          detail: '비누 말랑이의 색감과 촉감을 직접 보여주는 콘텐츠를 만들어 소비자들이 자발적으로 공유 하도록 유도함',
          score: 7
        }
      ],
      영상: [
        {
          title: 'ASMR 체험 광고',
          detail: '체험자들을 섭외해 비누 말랑이를 만지게 하고 그 영상을 ASMR로 제작하여 소비자들의 호기심을 자극함',
          score: 9
        },
        {
          title: '스트레스 해소 시리즈',
          detail: '일상 속 스트레스를 줄여주는 제품임을 강조하는 짧은 영상을 반복 배포해 정서적 연결을 만듦',
          score: 8
        }
      ],
      오프라인: [
        {
          title: '나만의 말랑이 만들기 팝업',
          detail: '제품을 직접 만져보고 체험자들에게 말랑이에 그림을 그리고 직접 꾸미게 하여 자신만의 말랑이를 제작할 수 있게 도와줌',
          score: 8
        },
        {
          title: '말랑 체험존',
          detail: '말랑이를 직접 만져보게 하여 구매욕을 자극 시켜줌',
          score: 7
        }
      ],
      인플루언서: [
        {
          title: '인플루언서 협업',
          detail: '스트레스 해소와 귀여운 감성을 중심으로 인플루언서가 리뷰하고, 친근한 메시지로 제품에 대한 호감을 높임',
          score: 9
        },
        {
          title: '후기 커뮤니티 활용',
          detail: '실제 사용 후기를 중심으로 소비자의 신뢰를 확보하고, 경쟁 제품과의 비교 포인트를 강조',
          score: 7
        }
      ],
      '할인/이벤트': [
        {
          title: '한정 수량 패키지 할인',
          detail: '한정 수량 패키지를 내세워 긴급하게 구매하게 만드는 동시에 수익을 높이는 전략',
          score: 8
        },
        {
          title: '구매 후 선물 증정',
          detail: '구매 시 소품과 함께 선물을 증정해 체감가치를 높이고 재구매를 유도',
          score: 7
        }
      ]
    }
  },
  {
    id: 'lissence',
    brand: '비누 말랑이',
    title: '신제품 출시 (리센느)',
    situation: '제품을 아는 사람이 많지 않음',
    features: ['촉감', '디자인'],
    goal: '10대 소비자에게 제품을 알리고 구매 유도',
    methods: {
      SNS: [
        {
          title: '신제품 공개 챌린지',
          detail: '10대가 좋아하는 감성적인 문구와 함께 신제품의 디자인을 공개하고, 사용자 참여형 챌린지를 진행',
          score: 8
        },
        {
          title: '말랑이 애호가 투표 이벤트',
          detail: '말랑이를 좋아하는 사람들에게 설문 형식의 투표를 진행하는 이벤트를 함. 그 후 다음 말랑이에 적용하여 출시',
          score: 7
        }
      ],
      영상: [
        {
          title: '시크릿 언박싱 영상',
          detail: '신제품을 언박싱하는 순간의 설렘과 촉감을 영상으로 보여주며 반응을 유도',
          score: 9
        },
        {
          title: '디자인 스토리 광고',
          detail: '비누 말랑이의 디자인 요소와 브랜드 컨셉을 하나씩 소개해 제품의 매력을 확실히 전달',
          score: 8
        }
      ],
      오프라인: [
        {
          title: '말랑이 교환소',
          detail: '사용하던 말랑이 제품이나 교환하고 싶은 말랑이가 있을 때 교환소에 가져오면 말랑이를 교환해줌 (개인당 1회)',
          score: 8
        },
        {
          title: '전단지+포토존',
          detail: '이쁜 사진이 남는 포토존과 함께 스티커 및 전단지를 배포해 인지도를 높임',
          score: 7
        }
      ],
      인플루언서: [
        {
          title: '10대 인플루언서 협업',
          detail: '10대가 좋아하는 인플루언서와 협업해 신제품에 대한 관심과 신뢰를 높임',
          score: 9
        },
        {
          title: '브랜드 리뷰 콘텐츠',
          detail: '리뷰 영상과 함께 소품, 디자인, 촉감을 살린 세부 표현으로 실제 구매욕을 자극',
          score: 8
        }
      ],
      '할인/이벤트': [
        {
          title: '첫 구매 10% 할인',
          detail: '처음 구매하는 고객에게 할인 혜택을 주어 신규 고객 유입을 높이고, 인지도를 함께 끌어올림',
          score: 7
        },
        {
          title: '신제품 출시 한정판 세트',
          detail: '제품과 장식품, 포토카드 등을 묶어 적은량으로 구성해 특별함과 희소성을 강조하고 구매를 유도',
          score: 8
        }
      ]
    }
  }
];

const IMAGE_STORAGE_KEY = 'marketing-game-card-images';
const IMAGE_DB_NAME = 'marketing-game-image-store';
const IMAGE_DB_STORE = 'images';

function loadSavedImages() {
  try {
    return JSON.parse(localStorage.getItem(IMAGE_STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function openImageDatabase() {
  if (!('indexedDB' in window)) {
    return Promise.resolve(null);
  }

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(IMAGE_DB_NAME, 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(IMAGE_DB_STORE)) {
        db.createObjectStore(IMAGE_DB_STORE);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('IndexedDB를 열 수 없습니다.'));
  });
}

async function saveImages() {
  const payload = JSON.stringify(state.images);

  try {
    const db = await openImageDatabase();
    if (db) {
      await new Promise((resolve, reject) => {
        const transaction = db.transaction(IMAGE_DB_STORE, 'readwrite');
        const store = transaction.objectStore(IMAGE_DB_STORE);
        const request = store.put(payload, IMAGE_STORAGE_KEY);

        request.onsuccess = () => resolve(true);
        request.onerror = () => reject(request.error || new Error('이미지 저장 실패'));
      });

      try {
        localStorage.setItem(IMAGE_STORAGE_KEY, payload);
      } catch {
        // IndexedDB가 기본 저장소이므로, 로컬스토리지 실패는 무시한다.
      }

      return true;
    }

    localStorage.setItem(IMAGE_STORAGE_KEY, payload);
    return true;
  } catch {
    try {
      localStorage.setItem(IMAGE_STORAGE_KEY, payload);
      return true;
    } catch {
      return false;
    }
  }
}

async function hydrateSavedImages() {
  try {
    const db = await openImageDatabase();
    if (!db) {
      return;
    }

    const result = await new Promise((resolve) => {
      const transaction = db.transaction(IMAGE_DB_STORE, 'readonly');
      const request = transaction.objectStore(IMAGE_DB_STORE).get(IMAGE_STORAGE_KEY);

      request.onsuccess = () => {
        const storedValue = request.result;
        if (!storedValue) {
          resolve(null);
          return;
        }

        try {
          resolve(JSON.parse(storedValue));
        } catch {
          resolve(null);
        }
      };

      request.onerror = () => resolve(null);
    });

    if (result && typeof result === 'object') {
      state.images = result;
      render();
    }
  } catch {
    // 로컬스토리지로 저장된 값이 있으면 그대로 사용한다.
  }
}

function resizeImageForStorage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener('error', () => reject(reader.error));
    reader.addEventListener('load', () => {
      const image = new Image();
      image.addEventListener('error', () => reject(new Error('이미지를 불러올 수 없습니다.')));
      image.addEventListener('load', () => {
        const maxSize = 720;
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);

        const context = canvas.getContext('2d');
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.68));
      });
      image.src = reader.result;
    });
    reader.readAsDataURL(file);
  });
}

const state = {
  scenarioId: null,
  method: '',
  planIndex: null,
  currentStep: 'scenario',
  score: 8,
  images: loadSavedImages()
};

hydrateSavedImages();

const refs = {
  scenarioGrid: document.getElementById('scenarioGrid'),
  methodGrid: document.getElementById('methodGrid'),
  planGrid: document.getElementById('planGrid'),
  scenarioSummary: document.getElementById('scenarioSummary'),
  planSummary: document.getElementById('planSummary'),
  resultSummary: document.getElementById('resultSummary'),
  resultBox: document.getElementById('resultBox'),
  caseExamples: document.getElementById('caseExamples'),
  backBtn: document.getElementById('backBtn'),
  randomBtn: document.getElementById('randomBtn'),
  resultBtn: document.getElementById('resultBtn'),
  scoreInput: document.getElementById('scoreInput'),
  steps: Array.from(document.querySelectorAll('.page-step')),
  progressSteps: Array.from(document.querySelectorAll('.progress-step'))
};

function getScenario() {
  return scenarios.find((scenario) => scenario.id === state.scenarioId);
}

function getCurrentPlan() {
  const scenario = getScenario();
  if (!scenario || !state.method || state.planIndex === null) {
    return null;
  }

  return scenario.methods[state.method][state.planIndex] || null;
}

function clampScore(value) {
  const parsed = Number(value);
  if (Number.isNaN(parsed)) {
    return 8;
  }

  return Math.max(1, Math.min(10, parsed));
}

function cardImageMarkup(imageKey) {
  const image = state.images[imageKey];
  return `
    <div class="card-image-wrap">
      ${
        image
          ? `<img class="card-image" src="${image}" alt="첨부한 이미지" />
             <button type="button" class="image-remove-btn" data-image-remove="${imageKey}">이미지 삭제</button>`
          : `<label class="image-upload-label">이미지 삽입
               <input class="image-input" type="file" accept="image/*" data-image-key="${imageKey}" />
             </label>`
      }
    </div>
  `;
}

function bindImageControls() {
  document.querySelectorAll('.image-upload-label').forEach((label) => {
    label.addEventListener('click', (event) => event.stopPropagation());
  });

  document.querySelectorAll('.image-input').forEach((input) => {
    input.addEventListener('click', (event) => event.stopPropagation());
    input.addEventListener('change', async (event) => {
      event.stopPropagation();
      const [file] = input.files;
      if (!file) return;

      try {
        const imageData = await resizeImageForStorage(file);
        state.images[input.dataset.imageKey] = imageData;

        if (!(await saveImages())) {
          delete state.images[input.dataset.imageKey];
          window.alert('저장 공간이 부족합니다. 더 작은 이미지로 다시 시도해 주세요.');
        }

        render();
      } catch {
        window.alert('이미지를 저장하지 못했습니다. 다른 이미지로 다시 시도해 주세요.');
      }
    });
  });

  document.querySelectorAll('[data-image-remove]').forEach((button) => {
    button.addEventListener('click', async (event) => {
      event.stopPropagation();
      delete state.images[button.dataset.imageRemove];
      await saveImages();
      render();
    });
  });
}

function showStep(stepName) {
  state.currentStep = stepName;

  refs.steps.forEach((step) => {
    step.classList.toggle('active', step.id === `${stepName}Step`);
  });

  refs.progressSteps.forEach((step) => {
    step.classList.toggle('active', step.dataset.step === stepName);
  });

  refs.backBtn.classList.toggle('hidden', stepName === 'scenario');
}

function renderScenarioGrid() {
  refs.scenarioGrid.innerHTML = scenarios
    .map(
      (scenario) => `
        <div class="choice-card scenario-card ${scenario.id === state.scenarioId ? 'active' : ''}" data-scenario-id="${scenario.id}" role="button" tabindex="0">
          ${cardImageMarkup(`scenario-${scenario.id}`)}
          <span class="card-brand">${scenario.brand}</span>
          <h3>${scenario.title}</h3>
          <p>${scenario.situation}</p>
        </div>
      `
    )
    .join('');

  refs.scenarioGrid.querySelectorAll('.scenario-card').forEach((button) => {
    button.addEventListener('click', () => {
      state.scenarioId = button.dataset.scenarioId;
      state.method = Object.keys(getScenario().methods)[0];
      state.planIndex = 0;
      state.currentStep = 'method';
      render();
    });
  });
}

function renderScenarioSummary() {
  const scenario = getScenario();

  if (!scenario) {
    refs.scenarioSummary.innerHTML = '';
    return;
  }

  refs.scenarioSummary.innerHTML = `
    <h3>${scenario.brand} ${scenario.title}</h3>
    <div class="summary-meta">
      <span class="meta-pill">상황: ${scenario.situation}</span>
      <span class="meta-pill">특징: ${scenario.features.join(', ')}</span>
      <span class="meta-pill">목표: ${scenario.goal}</span>
    </div>
  `;
}

function renderMethodGrid() {
  const scenario = getScenario();

  if (!scenario) {
    refs.methodGrid.innerHTML = '';
    return;
  }

  const methods = Object.keys(scenario.methods);

  refs.methodGrid.innerHTML = methods
    .map(
      (method) => `
        <div class="choice-card method-card ${state.method === method ? 'active' : ''}" data-method="${method}" role="button" tabindex="0">
          ${cardImageMarkup(`method-${scenario.id}-${method}`)}
          <span class="card-brand">${method}</span>
          <h3>${method}</h3>
          <p>${scenario.methods[method].slice(0, 2).map((plan) => plan.title).join(' & ')}</p>
        </div>
      `
    )
    .join('');

  refs.methodGrid.querySelectorAll('.method-card').forEach((button) => {
    button.addEventListener('click', () => {
      state.method = button.dataset.method;
      state.planIndex = 0;
      state.currentStep = 'plan';
      render();
    });
  });
}

function renderPlanSummary() {
  const scenario = getScenario();

  if (!scenario) {
    refs.planSummary.innerHTML = '';
    return;
  }

  refs.planSummary.innerHTML = `
    <h3>${scenario.brand} ${scenario.title}</h3>
    <div class="summary-meta">
      <span class="meta-pill">방법: ${state.method || '선택 전'}</span>
      <span class="meta-pill">특징: ${scenario.features.join(', ')}</span>
      <span class="meta-pill">목표: ${scenario.goal}</span>
    </div>
  `;
}

function renderPlanGrid() {
  const scenario = getScenario();

  if (!scenario || !state.method) {
    refs.planGrid.innerHTML = '';
    return;
  }

  const plans = scenario.methods[state.method] || [];

  refs.planGrid.innerHTML = plans
    .map(
      (plan, index) => `
        <div class="choice-card plan-card ${state.planIndex === index ? 'active' : ''}" data-plan-index="${index}" role="button" tabindex="0">
          ${cardImageMarkup(`plan-${scenario.id}-${state.method}-${index}`)}
          <span class="card-brand">${state.method}</span>
          <h3>${plan.title}</h3>
          <p>${plan.detail}</p>
          <span class="plan-score">예상 효과: ${plan.score}/10</span>
        </div>
      `
    )
    .join('');

  refs.planGrid.querySelectorAll('.plan-card').forEach((button) => {
    button.addEventListener('click', () => {
      state.planIndex = Number(button.dataset.planIndex);
      state.currentStep = 'result';
      render();
    });
  });
}

function renderResultSummary() {
  const scenario = getScenario();

  if (!scenario) {
    refs.resultSummary.innerHTML = '';
    return;
  }

  const plan = getCurrentPlan();

  refs.resultSummary.innerHTML = `
    <h3>${scenario.brand} ${scenario.title}</h3>
    <div class="summary-meta">
      <span class="meta-pill">방법: ${state.method || '선택 전'}</span>
      <span class="meta-pill">방안: ${plan ? plan.title : '선택 전'}</span>
      <span class="meta-pill">목표: ${scenario.goal}</span>
    </div>
  `;
}

function renderResultBox() {
  const scenario = getScenario();
  const plan = getCurrentPlan();

  if (!scenario || !plan) {
    refs.resultBox.className = 'result-box';
    refs.resultBox.innerHTML = `
      <h3>결과 확인</h3>
      <p>먼저 시나리오, 방법, 방안을 선택해 주세요.</p>
    `;
    return;
  }

  const score = clampScore(refs.scoreInput.value);
  const isGood = score >= plan.score;

  refs.resultBox.className = `result-box ${isGood ? 'success' : 'warning'}`;
  refs.resultBox.innerHTML = `
    <h3>결과 확인</h3>
    <p><strong>시나리오:</strong> ${scenario.brand} / ${scenario.title}</p>
    <p><strong>선택한 방법:</strong> ${state.method}</p>
    <p><strong>세부 방안:</strong> ${plan.title}</p>
    <p><strong>효과 예측 점수:</strong> ${score}/10</p>
    <p><strong>기대치 비교:</strong> ${plan.score}/10 기준으로 ${isGood ? '좋은 방향으로 보입니다.' : '조금 더 강한 메시지가 필요할 수 있어요.'}</p>
    <p>${
      isGood
        ? '이 전략은 목표에 잘 맞는 선택으로 보이며, 소비자 반응도 기대할 수 있습니다.'
        : '이 전략은 좋은 기반이지만, 더 강한 메시지나 더 많은 체험 요소를 추가하면 성과가 한 단계 더 올라갈 수 있어요.'
    }</p>
  `;
}

function renderCaseExamples() {
  const scenario = getScenario();
  const plan = getCurrentPlan();

  if (!scenario || !plan) {
    refs.caseExamples.innerHTML = `
      <h3>성공사례와 실패사례</h3>
      <p>시나리오와 방안을 선택하면 참고 사례가 표시됩니다.</p>
    `;
    return;
  }

  refs.caseExamples.innerHTML = `
    <h3>성공사례와 실패사례</h3>
    <div class="case-grid">
      <article class="case-card case-success">
        <span class="case-label">성공사례</span>
        <h4>${plan.title}을(를) 타깃에 맞게 실행한 경우</h4>
        <p>${scenario.features.join(', ')} 특성을 콘텐츠와 체험에 일관되게 반영하고, ${state.method} 채널에서 참여를 유도해 목표 행동으로 연결합니다.</p>
      </article>
      <article class="case-card case-failure">
        <span class="case-label">실패사례</span>
        <h4>타깃과 메시지가 어긋난 경우</h4>
        <p>채널만 사용하고 ${scenario.goal}에 맞는 구체적인 혜택·참여 요소를 제공하지 않으면 관심은 생겨도 실제 반응과 전환으로 이어지기 어렵습니다.</p>
      </article>
    </div>
  `;
}

function render() {
  refs.scoreInput.value = state.score;
  renderScenarioGrid();
  renderScenarioSummary();
  renderMethodGrid();
  renderPlanSummary();
  renderPlanGrid();
  renderResultSummary();
  renderResultBox();
  renderCaseExamples();
  showStep(state.currentStep);
  bindImageControls();
}

refs.backBtn.addEventListener('click', () => {
  if (state.currentStep === 'method') {
    state.currentStep = 'scenario';
  } else if (state.currentStep === 'plan') {
    state.currentStep = 'method';
  } else if (state.currentStep === 'result') {
    state.currentStep = 'plan';
  }

  render();
});

refs.randomBtn.addEventListener('click', () => {
  const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
  state.scenarioId = randomScenario.id;
  state.method = Object.keys(randomScenario.methods)[0];
  state.planIndex = 0;
  state.currentStep = 'method';
  render();
});

refs.resultBtn.addEventListener('click', () => {
  state.score = clampScore(refs.scoreInput.value);
  renderResultBox();
  renderCaseExamples();
});

refs.scoreInput.addEventListener('input', () => {
  refs.scoreInput.value = clampScore(refs.scoreInput.value);
});

showStep('scenario');
render();
