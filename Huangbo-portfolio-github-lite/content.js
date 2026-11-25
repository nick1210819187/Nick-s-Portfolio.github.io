const projects = [
  {
    id: "reconstruction",
    title: "AI 驱动的算力平台重构",
    en: "AI INFRASTRUCTURE REDESIGN",
    year: "2026",
    audience: "B 端",
    role: "算力业务体验设计主管",
    summary: "主导 FusionOne Center 体验重构，以 3D 软硬联动、可复用框架与设计 Skill，将设计决策推进到可运行的 HTML。",
    href: "reconstruction.html",
    cover: "assets/reconstruction/cover-1280.webp",
    coverSrcset: "assets/reconstruction/cover-640.webp 640w, assets/reconstruction/cover-960.webp 960w, assets/reconstruction/cover-1280.webp 1280w, assets/reconstruction/cover-1600.webp 1600w",
    slides: []
  },
  {
    id: "training",
    title: "AI 销售培训",
    en: "AI SALES TRAINING",
    year: "2025",
    audience: "B 端",
    role: "主设计师",
    summary: "面向金融、保险一线销售，将 AI 客户对练、实时反馈和评分复盘连接成完整的训练体验。",
    phoneMotion: {
      3: {size: [1920, 1080], screens: [
        {video: "home", rect: [770, 465, 375, 812], radius: 47},
        {video: "conversation", rect: [1209, 135, 375, 812], radius: 47}
      ]},
      10: {size: [1920, 1080], screens: [
        {video: "home", rect: [1058, 203, 375, 813], radius: 47}
      ]},
      14: {size: [1920, 1080], screens: [
        {video: "conversation", rect: [758, 226, 375, 812], radius: 47}
      ]},
      15: {size: [2400, 1349], screens: [
        {video: "badge", rect: [1286, 159, 469, 1016], radius: 58}
      ]}
    },
    slides: [
      [4,"把业务问题转成 AI 训练产品"],
      [5,"AI 工具在设计过程中的应用"],
      [6,"将设计规范接入 AI Coding 工作流"],
      [7,"销售培训的用户调研与反馈"],
      [8,"使用场景与业务流程"],
      [9,"训练产品的设计目标"],
      [10,"学习入口与智能引导"],
      [11,"客户画像 × 场景素材"],
      [12,"语音与文字双模式"],
      [13,"AI 陪练的分层反馈"],
      [14,"从进入对练到结束复盘，一条完整训练路径"],
      [15,"评分复盘与激励反馈"],
      [16,"培训与营销双端"],
      [17,"试点阶段结果验证"]
    ]
  },
  {
    id: "service",
    title: "支付宝客服平台商业化",
    en: "ENTERPRISE SERVICE PLATFORM",
    year: "2024",
    audience: "B 端",
    role: "体验设计",
    summary: "从定制系统走向通用平台，梳理工作台、查询与智能交互，让复杂客服业务更清晰、更高效。",
    slides: [
      [42,"从支付宝定制到开放赋能"],
      [43,"平台商业化的设计目标"],
      [44,"工作台首页：让常用任务与关键信息更容易找到"],
      [45,"页面框架与信息组织"],
      [46,"查询工具优化"],
      [47,"客服平台的 AI 设计语言"],
      [48,"智能交互：从信息查找到任务流转"],
      [49,"AI 建议与人机协同"],
      [50,"个性化推荐"],
      [51,"组件与规则沉淀"],
      [52,"结果验证"]
    ]
  },
  {
    id: "buddy",
    title: "支付宝个人搭子",
    en: "AI PERSONAL ASSISTANT",
    year: "2026",
    audience: "C 端",
    role: "主设计师",
    summary: "从具体服务场景进入 AI 对话，通过角色、引导和多模态反馈，让用户更容易提出问题、推进任务。",
    slides: [
      [23,"个人搭子的设计目标"],
      [24,"同类产品与对话体验对比"],
      [25,"传统金融产品体验分析"],
      [26,"场景化 AI 助手案例"],
      [27,"场景化助手的入口与布局"],
      [28,"场景化助手的视觉表达"],
      [29,"极简 AI 对话产品案例"],
      [30,"极简 AI 对话的交互特点"],
      [31,"三类界面方案对比"],
      [32,"支付宝 AI 产品形态总览"],
      [33,"角色可信感与首页结构"],
      [34,"首页方案取舍：内容卡片还是场景 Tab？"],
      [35,"提问引导与任务推进"],
      [36,"让对话中的处理过程可理解"],
      [37,"持续服务体验"],
      [38,"多模态内容规范"],
      [39,"首页、工具、对话与历史：四个关键触点"]
    ]
  },
  {
    id: "mis",
    title: "MIS OS 设计语言",
    en: "MEDICAL DEVICE DESIGN SYSTEM",
    year: "2022",
    audience: "B 端",
    role: "用户体验设计",
    summary: "从医生的专业使用场景出发，统一色彩、字体、控件与双屏界面，建立可持续迭代的医疗设备设计语言。",
    slides: [
      [54,"迈瑞设备配色现状"],
      [55,"医生使用场景与客户洞察"],
      [56,"产品家族与情绪板"],
      [57,"图标与控件语言"],
      [58,"专业环境下的配色判断"],
      [59,"色板与语义色"],
      [60,"字体与排版"],
      [61,"字体易读性研究"],
      [62,"双屏界面与组件应用"],
      [63,"层级与底部操作区"],
      [64,"设计规范落地"]
    ]
  }
];

const practice=[
 {page:6,title:'把规范写进 AI 工作流',desc:'将 Design Token、组件规则与提示词连接，让设计规范进入实际生产。'},
 {page:18,title:'从 IP 形象到品牌系统',desc:'探索 AI 辅助形象生成、视觉定调与规范沉淀，形成一致的品牌表达。'},
 {page:20,title:'从设计走到官网实现',desc:'用 AI Coding 将官网设计转成可运行页面，衔接设计与交付。'},
 {page:40,title:'AI 原生运营助手',desc:'对话式智能体构建平台的设计探索。'}
];
