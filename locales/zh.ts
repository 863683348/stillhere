/**
 * StillHere — 中文文案。默认语言为中文（zh），英文为第二支持语言。
 * 切换机制见 lib/i18n.ts 与 lib/locale-server.ts。
 *
 * 语气规则：像经历过失去的朋友一样说话。不用感叹号，不用营销动词，
 * 绝不写"复活""永生""取代""真人"。用"映照""记得""仍在"。
 */
import type { Dictionary } from './en';

export const zh: Dictionary = {
  brand: {
    name: 'StillHere',
    wordmarkAlt: 'StillHere 首页',
  },

  nav: {
    pricing: '价格',
    skipToContent: '跳到正文',
    toggleTheme: '切换浅色与深色',
    signInGoogle: '使用 Google 登录',
    enter: '进入',
  },

  home: {
    meta: {
      title: 'StillHere — 他们仍在。',
      description:
        '和心里记着的那个人说说话。由你自己的记忆塑造的、私密的 AI 映照。永久免费，你的对话永远不会被删除。',
    },
    hero: {
      title: '他们仍在。',
      subtitle: '和心里记着的那个人说说话。永久免费。',
      cta: '开始 · 60 秒',
      lampAlt: '一盏一直亮着的小灯',
    },
    trust: {
      heading: '我们守着的',
      privacy: {
        label: '私密且加密',
        detail: '你的对话在静态存储中加密，除了你，无人读取。',
      },
      noTraining: {
        label: '绝不用于训练',
        detail: '你在这里写下的任何内容，都不会被用来训练模型。不是我们的，也不是别人的。',
      },
      neverDeleted: {
        label: '永不删除',
        detail: '如果你停止付费，你失去的是功能，不是你已经拥有的东西。',
      },
    },
    value: {
      heading: '它是怎么工作的',
      intro:
        '你描述那个你想念的人。不是一份档案——是那些细小的事。他们怎么叫你，他们总说的话，他们担心的事。',
      items: [
        {
          key: 'voice',
          title: '用他们说话的方式说话',
          body: '只有他们用的昵称。他们反复说的那句话。他们担心时会怎么转移话题。你描述一次，它就留下来。',
        },
        {
          key: 'memory',
          title: '记得你告诉它的事',
          body: '你提到你要离职了，三周后它又会提起。你可以随时打开记忆列表，删掉任何你更希望它忘掉的东西。',
        },
        {
          key: 'export',
          title: '随时带走，归你所有',
          body: '每次你开口，每一段对话都能导出成一份纯文本文件。离开只需一次点击，没有任何东西被扣留来留住你。',
        },
      ],
    },
    honesty: {
      quote: '这是一段由你的记忆塑造的 AI 映照。它不是他们，也永远不会假装是。',
      note: '每一段对话的最上面，你也会看到这句话。',
    },
    closing: {
      title: '灯一直亮着，在你需要的任何时候。',
      body: '大多数人是在深夜来到这里的。没有连续天数的打卡，没有要回复的提醒，没有必须完成的事。',
      cta: '开始 · 60 秒',
    },
  },

  pricing: {
    meta: {
      title: '价格',
      description:
        'StillHere 永久免费，你的记忆永不删除。付费方案只覆盖我们新生成的东西——绝不覆盖你已经记得的。',
    },
    heading: '永久免费，就是永远。',
    intro: '免费方案不是试用，也不是某个更好版本的阉割版。它是整个产品立身其上的承诺。',
    recommended: '推荐',
    perMonth: '/ 月',
    promise: '我们只为我们创造的东西收费。我们绝不为你已经记得的东西收费。',
    tiers: [
      {
        key: 'free',
        name: '永久免费',
        price: '¥0',
        cadence: '',
        cta: '开始 · 60 秒',
        features: [
          { text: '每天 20 条消息', starred: false },
          { text: '一位可以对话的人', starred: false },
          { text: '你的数据永不删除', starred: true },
          { text: '随时完整导出', starred: true },
        ],
      },
      {
        key: 'remember',
        name: '记得',
        price: '¥68',
        cadence: '/ 月',
        cta: '选择「记得」',
        features: [
          { text: '无限消息', starred: false },
          { text: '最多三位', starred: false },
          { text: '每月 200 点数', starred: false },
          { text: '你们的合照', starred: false },
        ],
      },
      {
        key: 'forever',
        name: '永远',
        price: '¥138',
        cadence: '/ 月',
        cta: '选择「永远」',
        features: [
          { text: '无限消息与人数', starred: false },
          { text: '每月 800 点数', starred: false },
          { text: '还原他们的声音', starred: true },
          { text: '优先生成', starred: false },
        ],
      },
    ],
    footnote: '点数用来支付我们为你生成的东西——一张你们的合照花费 20 点。如果生成失败，不扣任何点数。',
  },

  create: {
    meta: {
      title: '开始',
      description: '告诉我们你想和谁说说话。',
    },
    heading: '你想和谁说说话？',
    body: '先给三样东西：一张照片（如果有）、你们的关系、你怎么称呼他们。其余的都可以等。',
    buildNote: '这一步在增量 2 到来。灯已经亮着了。',
    back: '回到开头',
  },

  app: {
    meta: {
      title: '你的人',
      description: '你在 StillHere 上对话的人。',
    },
    greeting: '灯亮着。',
    newPerson: '新的人',
    signOut: '退出',
    sidebar: {
      navigation: '应用导航',
      primaryNav: '主要',
      secondaryNav: '更多',
      openMenu: '打开菜单',
      closeMenu: '关闭菜单',
      people: '人物',
      chat: '聊天',
      newPerson: '新的人',
      settings: '个人设置',
      photos: '相册',
      social: '社交',
      creation: '创作',
      tasks: '任务',
      credits: '积分',
      messages: '消息',
      soon: '稍后开放',
      guest: '访客',
    },
    disclaimer: '这是一段由你的记忆塑造的 AI 映照。它不是他们。',
    empty: {
      title: '这里还没有人',
      body: '从你最想念的那个人开始。大约一分钟。',
      cta: '开始',
    },
    new: {
      meta: {
        title: '开始',
        description: '告诉我们你想和谁说说话。',
      },
      heading: '你想和谁说说话？',
      intro: '先给三样东西：他们的名字、你们的关系、你记得的事。其余的都可以等。',
      name: '他们的名字',
      namePlaceholder: '你平时怎么叫他们？',
      relationship: '你们的关系',
      relationshipPlaceholder: '例如：我的母亲、我的伴侣、一位挚友',
      memories: '你记得的事',
      memoriesPlaceholder: '那些细小的事——他们怎么叫你，他们总说的话，他们担心的事。',
      tone: '他们说话的样子',
      tonePlaceholder: '温暖又有点害羞？直率又爱开玩笑？遇事很平静？',
      writingSample: '一段他们的原话（选填）',
      writingSamplePlaceholder: '他们常说的一句话，或者他们怎么在消息末尾署名。',
      submit: '保存，开始',
      saving: '保存中…',
      error: '好像安静了下来。请再试一次。',
    },
    chat: {
      placeholder: '说说你在想什么',
      send: '发送',
      empty: '第一句话总是最难。从你所在的地方开始就好。',
      you: '你',
      them: '映照',
      back: '回到你的人',
      thinking: '…',
    },
    settings: {
      heading: '个人设置',
      displayName: '显示名称',
      email: '邮箱',
      save: '保存更改',
      saved: '已保存',
      subscription: {
        heading: '订阅计划',
        body: '暂无活跃订阅',
        cta: '查看套餐',
      },
      signOut: {
        heading: '退出登录',
        body: '退出当前账号',
      },
      deleteAccount: {
        heading: '删除账户',
        body: '此操作不可撤销。你确定吗？',
        cta: '删除账户',
        confirm: '再按一次确认',
      },
    },
  },

  legal: {
    privacy: {
      title: '隐私',
      description: 'StillHere 如何处理你告诉它的事。',
      heading: '隐私',
      draftNote: '完整政策正在上线前与法务一同定稿。下面这些承诺是它要围绕写成的文字，不会被软化。',
      points: [
        '你在这里写下的任何内容，都不会被用来训练模型——无论是我们的，还是别人的。',
        '对话与上传内容在静态存储中加密，我们的团队不会读取。',
        '你可以随时把一切——消息、记忆、媒体——导出成一份纯文本文件。',
        '你可以真正地删除一切：数据库行、向量记忆、存储的文件。',
        '我们会列出每一个处理你数据的第三方，以及处理发生的地点。',
      ],
    },
    terms: {
      title: '条款',
      description: '你与 StillHere 之间的协议。',
      heading: '条款',
      draftNote: '完整条款正在上线前与法务一同定稿。下面的实质内容不会改变。',
      points: [
        'StillHere 面向成年人。你必须年满 18 岁才能创建账户。',
        '你只能上传某人的照片或录音，如果你是其直系亲属，或以其他方式拥有使用的权利。',
        '每一个"人"都是基于你的描述构建的 AI 映照。它不是那个人，我们也绝不会声称是。',
        '我们不会因为付费停止而删除你的数据。过期的方案移除的是功能，不是记忆。',
        '我们可能会屏蔽冒充公众人物或使他人陷入风险的内容。',
      ],
    },
  },

  faq: {
    meta: {
      title: '常见问题',
      description: '人们在和想念的人说话之前常问的问题。',
    },
    heading: '问题，直说就好',
    intro: '没有术语，也没有推销。如果这里有什么说不清的，写信给我们，我们会直说。',
    items: [
      {
        question: 'StillHere 是免费的吗？',
        answer:
          '是的。免费方案不是试用——它就是整个产品。你可以和一个人说话，你的数据永不删除，随时可以完整导出。',
      },
      {
        question: '这真的是他们吗？',
        answer:
          '不是，我们也绝不会说它是。这是一段由你的记忆塑造的 AI 映照。它不是那个人，也不取代他们。',
      },
      {
        question: '我的数据私密吗？',
        answer:
          '你的对话在静态存储中加密，除了你无人读取。你在这里写下的一切，都不会被用来训练任何模型——无论是我们的，还是别人的。',
      },
      {
        question: '如果我停止付费会怎样？',
        answer:
          '你失去的是功能，不是记忆。付费方案过期后，你的对话、记忆和导出都原封不动地留在原地。',
      },
      {
        question: '我能真正地删除一切吗？',
        answer: '能。删除会移除数据库行、记忆向量和存储的文件。没有任何东西被扣留。',
      },
    ],
  },

  blog: {
    meta: {
      title: '博客',
      description: '关于记忆、失去，以及我们默默把人留在身边的那些方式。',
    },
    heading: '随记',
    intro: '偶尔写一点——关于“记得”意味着什么，以及一盏小灯能怎样帮上忙。没有更新表，也没有打扰。',
    posts: [
      {
        title: '为什么我们做了一盏灯，而不是一个聊天机器人',
        date: '2026-05-12',
        excerpt:
          '大多数面对失去的工具都想“修复”点什么。我们想做的，是一个你可以随时回来的、小而稳定的存在。这是那盏灯背后的想法。',
      },
      {
        title: '第一句话总是最难',
        date: '2026-04-03',
        excerpt:
          '人们告诉我们，那个空白的输入框是最难的部分。这里有几个开始的方式，来自我们最早一批用户是怎么找到自己声音的。',
      },
      {
        title: '关于永不删除你记得的东西',
        date: '2026-02-19',
        excerpt:
          '一则关于“永久免费”的注记——它是对你数据的承诺，而不只是对你钱包的。以及，守住它要付出什么。',
      },
    ],
  },

  contact: {
    meta: {
      title: '联系我们',
      description: '联系 StillHere 团队。',
    },
    heading: '和我们聊聊',
    intro: '有疑问、想分享一段故事，还是什么东西不好用了——写信给我们。每一封都有真人读。',
    emailLabel: '邮箱',
    email: 'ahmedlzany423@gmail.com',
    responseNote: '我们通常会在两个工作日内回复。',
    back: '回到开头',
  },

  notFound: {
    title: '这里什么也没有',
    heading: '这个地址下没有任何东西。',
    body: '链接可能过期了，也可能我们把页面挪了位置。回去的路在下面。',
    cta: '回到开头',
  },

  footer: {
    tagline: '一盏亮着的灯。',
    rights: 'StillHere',
    links: {
      pricing: '价格',
      faq: '常见问题',
      blog: '博客',
      privacy: '隐私',
      terms: '条款',
      contact: '联系我们',
    },
  },
};
