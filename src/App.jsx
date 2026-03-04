import React from 'react';
import { 
  Database, Layers, KeyRound, 
  ArrowRight, ShieldCheck, Server, Monitor, Users, 
  Bot, PhoneCall, LineChart, Mic, Cog, Network, FolderTree,
  MessageSquare, ShieldAlert
} from 'lucide-react';

// --- 세부 컴포넌트 ---

// 콤팩트한 서브 기능 태그 (Frontend Pages용)
const CompactTag = ({ text }) => (
  <span className="bg-slate-100 text-slate-700 text-[8px] px-1 py-0.5 rounded border border-slate-200 shadow-sm whitespace-nowrap leading-none">
    {text}
  </span>
);

// 기본 서브 기능 태그 (Backend용)
const FeatureTag = ({ text }) => (
  <span className="bg-white/60 text-stone-700 text-[9px] px-1.5 py-0.5 rounded border border-stone-200 shadow-sm whitespace-nowrap">
    {text}
  </span>
);

// 상세 서비스 카드 (Backend 기능 목록 포함)
const DetailedServiceBlock = ({ title, icon: Icon, features, colorFrom, colorTo }) => (
  <div className="flex flex-col bg-white rounded-lg shadow-md border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow">
    <div className={`bg-gradient-to-r ${colorFrom} ${colorTo} p-2 flex items-center justify-between`}>
      <span className="text-white font-bold text-xs flex items-center gap-1.5">
        <Icon size={14} />
        {title}
      </span>
      <span className="text-white/80 text-[8px] border border-white/30 px-1 rounded bg-black/10">Spring Boot</span>
    </div>
    <div className="p-2 bg-stone-50 flex-1">
      <div className="flex flex-wrap gap-1">
        {features.map((feat, idx) => (
          <FeatureTag key={idx} text={feat} />
        ))}
      </div>
    </div>
    <div className="flex text-[8px] border-t border-stone-200 text-center">
      <div className="flex-1 bg-stone-100 text-stone-600 py-1 border-r border-stone-200">Core (@Service)</div>
      <div className="flex-1 bg-amber-50 text-amber-700 py-1 font-bold">Project (@Primary)</div>
    </div>
  </div>
);

// Frontend Page 카테고리 데이터
const pageCategories = [
  {
    title: "설정 (U Admin)",
    path: "/settings",
    items: ["전화", "옴니채널", "비즈메시지", "상담운영", "보안", "PDS", "캠페인/CM", "상담앱", "AI상담 봇", "서비스 AI", "클라우드 오토메이션", "메신저"]
  },
  {
    title: "상담앱 (U AGENT)",
    path: "/agent",
    items: ["콜", "채팅", "게시판", "이메일", "1:1문의", "비상담", "문자", "SNS", "알림톡", "친구톡", "고객정보", "기간계", "티켓 이력", "상담지원", "관리지원", "통계분석", "메신저"]
  },
  {
    title: "통계/분석",
    path: "/stats",
    items: ["상담채널", "IPCC/상담 자원", "상담운영(상담앱)", "캠페인/CM", "AI상담 봇", "고객 여정", "티켓", "서비스 AI", "IVR", "PDS", "분석/KPI", "시나리오", "녹취"]
  },
  {
    title: "AI Agent",
    path: "/aiagent",
    items: ["상담사 조수", "상담사 코칭", "후처리 자동화", "웹브라우저 자동화", "상담품질 분석", "통계 제작", "액션 제안", "티켓 분류", "실시간 대화전사", "설정자동화 챗봇", "운영HelpDesk 챗봇"]
  },
  {
    title: "모니터링",
    path: "/monitoring",
    items: ["대시보드", "상담채널", "IPCC/상담자원", "고객", "시나리오", "AI상담 봇", "상담운영", "시스템", "PDS", "이력", "캠페인/CM", "상담품질", "서비스 AI", "대화"]
  },
  {
    title: "상담품질 (U ANALYZER)",
    path: "/quality",
    items: ["QA평가", "교육", "예측", "만족도", "VoC"]
  },
  {
    title: "시나리오",
    path: "/scenario",
    items: ["PBX", "IVR", "CTI", "PDS", "상담분배"]
  },
  {
    title: "스케줄",
    path: "/schedule",
    items: ["공지", "알림", "일정"]
  },
  {
    title: "관제/유지보수(RMS)",
    path: "/control",
    items: ["시스템", "서비스", "장애", "로그", "라이선스", "알림"]
  }
];

const App = () => {
  return (
    <div className="min-h-screen bg-[#f4f7f6] p-4 lg:p-6 flex flex-col items-center justify-start font-sans overflow-auto text-stone-800">
      
      <div className="text-center mb-6">
        <h1 className="text-2xl font-extrabold text-slate-800">UCONNECT 통합 아키텍처</h1>
        <p className="text-sm text-slate-500 mt-1">Frontend (FSD) ↔ API Gateway ↔ Backend (MSA & Core/Project Isolation)</p>
      </div>

      {/* 가로 공간 확보를 위해 전체 컨테이너 폭 최대화 */}
      <div className="flex flex-col xl:flex-row items-stretch gap-4 w-full max-w-[1600px]">
        
        {/* ==========================================
            SECTION 1: FRONTEND (UCONNECT)
        ========================================== */}
        <div className="flex flex-col w-full xl:w-[800px] bg-white rounded-xl shadow-xl border border-blue-100 overflow-hidden shrink-0">
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-2.5 text-white flex justify-between items-center">
            <h2 className="font-bold text-sm flex items-center gap-1.5"><Monitor size={16}/> Frontend Application (U CONNECT)</h2>
            <p className="text-[10px] text-blue-100 bg-black/20 px-2 py-0.5 rounded">Next.js 16 + React 19 + Zustand</p>
          </div>
          
          <div className="p-3 flex flex-col gap-3 flex-1 bg-blue-50/30">
            {/* App Layer */}
            <div className="flex justify-between items-center text-[10px] bg-white border border-blue-200 p-2 rounded shadow-sm">
              <span className="font-bold text-blue-800 flex items-center gap-1"><FolderTree size={12}/> App Layer</span>
              <span className="text-slate-500">라우팅 진입점 / 전역 레이아웃 및 설정</span>
            </div>

            {/* Core & Projects Area */}
            <div className="flex flex-col md:flex-row gap-3">
              {/* Core (표준) 박스 */}
              <div className="flex-1 bg-slate-50 border border-slate-300 rounded p-2.5 shadow-sm">
                <div className="font-bold text-slate-700 text-xs mb-2 border-b border-slate-200 pb-1">Core (표준 모듈)</div>
                
                <div className="flex flex-col gap-2">
                  {/* Pages 박스 (가장 큼, 통합 Application 내용) */}
                  <div className="bg-white border-2 border-blue-200 rounded p-2 shadow-sm">
                    <div className="font-bold text-blue-700 text-[11px] mb-2 flex items-center gap-1">
                      📄 Pages <span className="text-[9px] font-normal text-slate-500">(U CONNECT 통합 Application 기능별 화면)</span>
                    </div>
                    
                    {/* 기능 카테고리 그리드 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {pageCategories.map((cat, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-200 rounded px-2 py-1.5 flex flex-col gap-1">
                          <div className="flex items-center gap-1">
                            <span className="text-[9px] font-bold text-slate-800">{cat.title}</span>
                            <span className="text-[6px] font-bold text-slate-800">{cat.path}</span>
                          </div>
                          <div className="flex flex-wrap gap-0.5">
                            {cat.items.map((item, i) => (
                              <CompactTag key={i} text={item} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 하위 레이어 박스들 (수평 배치) */}
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-white border border-indigo-200 rounded p-1.5 text-center shadow-sm">
                      <span className="block text-[10px] font-bold text-indigo-700">🧩 Widgets</span>
                      <span className="block text-[8px] text-slate-500 leading-tight mt-0.5">복합 UI, 레이아웃</span>
                    </div>
                    <div className="bg-white border border-teal-200 rounded p-1.5 text-center shadow-sm">
                      <span className="block text-[10px] font-bold text-teal-700">⚡ Features</span>
                      <span className="block text-[8px] text-slate-500 leading-tight mt-0.5">비즈니스 로직, 훅</span>
                    </div>
                    <div className="bg-white border border-rose-200 rounded p-1.5 text-center shadow-sm">
                      <span className="block text-[10px] font-bold text-rose-700">📦 Entities</span>
                      <span className="block text-[8px] text-slate-500 leading-tight mt-0.5">데이터 모델, API</span>
                    </div>
                    <div className="bg-white border border-stone-300 rounded p-1.5 text-center shadow-sm">
                      <span className="block text-[10px] font-bold text-stone-700">🔧 Shared</span>
                      <span className="block text-[8px] text-slate-500 leading-tight mt-0.5">공용 컴포넌트, 유틸</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects (고객사) 박스 */}
              <div className="w-full md:w-32 bg-amber-50 border border-amber-300 rounded p-2 shadow-sm flex flex-col shrink-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-amber-400 border-r-transparent"></div>
                <div className="font-bold text-amber-800 text-xs mb-1">Projects</div>
                <div className="text-[9px] text-amber-700 mb-2 leading-tight">고객사별 커스텀 폴더</div>
                
                <div className="flex-1 flex flex-col gap-1 justify-center">
                  <div className="bg-white border border-amber-200 rounded p-1 text-center text-[9px] text-slate-600 shadow-sm">Client A</div>
                  <div className="bg-white border border-amber-200 rounded p-1 text-center text-[9px] text-slate-600 shadow-sm">Client B</div>
                  <div className="text-center text-[10px] text-amber-500 mt-1">Overrides Pages/Widgets</div>
                </div>
              </div>
            </div>

            {/* State & Data Fetching */}
            <div className="bg-indigo-50/50 border border-indigo-200 rounded p-2 shadow-sm flex items-center justify-between gap-2 mt-auto">
              <span className="text-[10px] font-bold text-indigo-800 ml-1">상태 관리</span>
              <div className="flex gap-2 flex-1">
                <div className="flex-1 bg-white border border-indigo-100 rounded text-center py-1 text-[9px] text-slate-600 shadow-sm">Zustand (UI 상태)</div>
                <div className="flex-1 bg-white border border-indigo-100 rounded text-center py-1 text-[9px] text-slate-600 shadow-sm">TanStack Query (서버 캐시)</div>
              </div>
            </div>
          </div>
        </div>


        {/* ==========================================
            SECTION 2: CONNECTION & GATEWAY
        ========================================== */}
        <div className="flex flex-col items-center justify-center shrink-0 w-full xl:w-36 relative gap-2">
          
          <div className="flex flex-col items-center text-slate-400 my-2 xl:my-0">
             <span className="text-[8px] font-bold text-blue-600 mb-1">REST API</span>
             <div className="hidden xl:flex items-center">
               <div className="w-10 h-0.5 bg-blue-300"></div>
               <ArrowRight size={16} className="text-blue-500 -ml-1" />
             </div>
             <div className="xl:hidden h-6 w-0.5 bg-blue-300"></div>
          </div>

          <div className="bg-gradient-to-b from-orange-50 to-orange-100 border-2 border-orange-300 rounded-lg shadow-lg w-full text-center overflow-hidden z-10">
            <div className="bg-orange-500 text-white py-1.5 px-1 font-bold text-[10px] flex justify-center items-center gap-1">
              <Network size={12} /> Cloud Gateway
            </div>
            <div className="p-2 space-y-1.5">
              <div className="bg-white rounded border border-orange-200 text-[9px] py-1 text-orange-800 font-semibold shadow-sm">라우팅</div>
              <div className="bg-white rounded border border-orange-200 text-[8px] p-1 text-stone-600 text-left space-y-1">
                <div className="flex items-center gap-1"><ShieldCheck size={8} className="text-green-600"/> 토큰 검증</div>
                <div className="flex items-center gap-1"><ShieldCheck size={8} className="text-red-500"/> 중복 로그인 차단</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-full mt-1">
            <div className="bg-amber-50 border border-amber-300 rounded w-full p-1.5 shadow-sm text-center">
              <div className="flex items-center justify-center gap-1 text-amber-800 text-[10px] font-bold">
                <KeyRound size={10} /> Auth
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-slate-400 my-2 xl:my-0">
             <span className="text-[8px] font-bold text-teal-600 mb-1">내부망 MSA</span>
             <div className="hidden xl:flex items-center">
               <div className="w-10 h-0.5 bg-teal-300"></div>
               <ArrowRight size={16} className="text-teal-500 -ml-1" />
             </div>
             <div className="xl:hidden h-6 w-0.5 bg-teal-300"></div>
          </div>

        </div>


        {/* ==========================================
            SECTION 3: BACKEND (NEXUS)
        ========================================== */}
        <div className="flex flex-col flex-1 bg-white rounded-xl shadow-xl border border-teal-100 overflow-hidden min-w-[300px]">
          <div className="bg-gradient-to-r from-teal-700 to-teal-500 p-2.5 text-white flex justify-between items-center">
            <div>
              <h2 className="font-bold text-sm flex items-center gap-1.5"><Server size={16}/> Backend Services</h2>
              <p className="text-[10px] text-teal-100 mt-0.5">Spring Boot + MyBatis + Multi-tenancy</p>
            </div>
          </div>
          
          <div className="p-3 bg-teal-50/20 flex-1 flex flex-col justify-center">
            {/* Backend 기능을 다단 그리드로 압축하여 공간 확보 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
              
              <DetailedServiceBlock 
                title="U Admin" 
                icon={Cog}
                colorFrom="from-slate-600" colorTo="to-slate-500"
                features={['설정', '통계', '모니터링', '공지/일정', '시나리오']}
              />
              
              <DetailedServiceBlock 
                title="U AGENT" 
                icon={Users}
                colorFrom="from-emerald-600" colorTo="to-emerald-500"
                features={['상담', '설정', '통계', '모니터링', 'KMS', '공지/일정', '알림(제주항공)', 'AI후처리']}
              />

              <DetailedServiceBlock 
                title="U PBX" 
                icon={PhoneCall}
                colorFrom="from-cyan-600" colorTo="to-cyan-500"
                features={['설정', '통계', '모니터링', '시나리오']}
              />

              <DetailedServiceBlock 
                title="U Record" 
                icon={Mic}
                colorFrom="from-indigo-600" colorTo="to-indigo-500"
                features={['설정']}
              />

              <DetailedServiceBlock 
                title="U ANALYZER" 
                icon={LineChart}
                colorFrom="from-rose-600" colorTo="to-rose-500"
                features={['설정', '통계', '모니터링', 'QA', 'KMS', '코칭/교육', '공지/일정', '알림', 'AI후처리']}
              />

              <DetailedServiceBlock 
                title="U IVR" 
                icon={Network}
                colorFrom="from-amber-600" colorTo="to-amber-500"
                features={['설정(U Admin 포함)', '시나리오']}
              />

              <DetailedServiceBlock 
                title="U RMS" 
                icon={ShieldAlert}
                colorFrom="from-teal-600" colorTo="to-teal-500"
                features={['설정', '통계', '모니터링', '공지/일정', '알림']}
              />

              <DetailedServiceBlock 
                title="라우팅봇(콜봇)" 
                icon={Bot}
                colorFrom="from-violet-600" colorTo="to-violet-500"
                features={['설정(U Admin+IVR+AI G/W)', '통계(AICC)', '시나리오']}
              />

            </div>
          </div>

          {/* DATABASES */}
          <div className="bg-stone-100 border-t border-stone-200 p-3">
            <h3 className="text-[10px] font-bold text-stone-600 text-center mb-2">공유 데이터 모델 및 캐시</h3>
            <div className="flex justify-center gap-4">
              
              <div className="flex items-center gap-2 bg-white px-2 py-1.5 rounded shadow-sm border border-red-100">
                <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center shadow-inner">
                  <Database size={12} className="text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-stone-800">Redis</div>
                  <div className="text-[8px] text-stone-500">세션/캐시</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 bg-white px-2 py-1.5 rounded shadow-sm border border-blue-100">
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center shadow-inner">
                  <Layers size={12} className="text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-stone-800">RDBMS</div>
                  <div className="text-[8px] text-stone-500">비즈니스/통계</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default App;