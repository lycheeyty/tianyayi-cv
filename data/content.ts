export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "TikTok LIVE",
        date: "2025 — 至今",
        description: "主导多人社交直播间中心化入口的探索与设计，构建实时社交心智；整合多人直播间装修布局，提升直播间整体品质感；优化粉丝团加团体验，深化主播与粉丝的长期关系。",
      },
      {
        title: "TikTok Photo-text",
        date: "2024 — 2025",
        description: "主导独立图文社区 App 从 0 到 1 上线，搭建图文创作框架与核心图文功能，设计提升信息价值的产品手段，如文字模式。",
      },
      {
        title: "TikTok Creation",
        date: "2022 — 2024",
        description: "主导创作工具模块的核心体验设计，涵盖贴纸、特效、模板等模块；建立特效图标、引导手势等素材的品质标准，提升整体视觉一致性与品质感。"
      },
      {
        title: "TikTok Foundation",
        date: "2021 — 2022",
        description: "覆盖 Creation、Effect House、Privacy、Analytics 多条业务线，主导从移动端到桌面端的产品设计与体系搭建。"
      },
      {
        title: "Hema @Alibaba",
        date: "2020 — 2021",
        description: "主导门店 IoT 终端工作流优化与设计系统维护；提炼盒马服务体验原则，定义门店体验策略。"
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "Tongji University",
        subTitle: "Bachelor's Degree in Visual Communication Design",
        date: "2016 — 2020",
      },
      {
        title: "ACCD",
        subTitle: "Interaction Design",
        date: "2019",
        description: "交换生项目",
      },
      {
        title: "Aalto University",
        subTitle: "Sustainable Design",
        date: "2018",
        description: "双学士学位项目",
      },
      {
        title: "Tongji University",
        subTitle: "Animation",
        date: "2015",
      },
    ],
  },
  //   @NOTE: You can add more sections here
  //   {
  //     title: "Projects",
  //     items: [
  //       {
  //         title: "Project 1",
  //         subTitle: "Sub Title",
  //         date: "2015 - 2016",
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
  //       },
  //     ],
  //   },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle?: string;
    date: string;
    description?: string;
  }[];
};

export type ContentData = Content[];
