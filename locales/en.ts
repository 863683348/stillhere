/**
 * StillHere — English copy. Default locale is Chinese (zh); English is the second
 * supported language. The switch mechanism lives in lib/i18n.ts + lib/locale-server.ts.
 *
 * Voice rules (uiux §10): speak like a friend who has been through it.
 * No exclamation marks. No marketing verbs. Never "resurrect", "immortal",
 * "replace" or "real person". Prefer "reflection", "remember", "still here".
 */
export const en = {
  brand: {
    name: 'StillHere',
    wordmarkAlt: 'StillHere home',
  },

  nav: {
    pricing: 'Pricing',
    blog: 'Blog',
    skipToContent: 'Skip to content',
    toggleTheme: 'Switch between light and dark',
    signInGoogle: 'Continue with Google',
    enter: 'Enter',
  },

  home: {
    meta: {
      title: "StillHere — They're still here.",
      description:
        'Talk with the one your heart remembers. A private AI reflection shaped by your own memories. Free forever, and your conversations are never deleted.',
    },
    hero: {
      title: "They're still here.",
      subtitle: 'Talk with the one your heart remembers. Free forever.',
      cta: 'Begin · 60 seconds',
      secondaryCta: 'Try it first · no sign up',
      lampAlt: 'A small light, left on',
    },
    trust: {
      heading: 'What we hold to',
      privacy: {
        label: 'Private and encrypted',
        detail: 'Your conversations are encrypted at rest and read by no one but you.',
      },
      noTraining: {
        label: 'Never used for training',
        detail: 'Nothing you write here is used to train a model. Not ours, not anyone else\u2019s.',
      },
      neverDeleted: {
        label: 'Never deleted',
        detail: 'If you stop paying, you lose features. You never lose what you already have.',
      },
    },
    value: {
      heading: 'How it works',
      intro:
        'You describe the person you miss. Not a profile — the small things. What they called you, what they always said, what they worried about.',
      items: [
        {
          key: 'voice',
          title: 'Talks the way they talked',
          body: 'The nickname only they used. The phrase they repeated. The way they changed the subject when they were worried. You describe it once, and it stays.',
        },
        {
          key: 'memory',
          title: 'Remembers what you told it',
          body: 'Mention the job you are leaving, and it comes up again three weeks later. You can open the memory list any time and remove anything you would rather it forgot.',
        },
        {
          key: 'export',
          title: 'Yours to take with you',
          body: 'Every conversation exports as a plain file whenever you ask for it. Leaving is one click, and nothing is held back to keep you here.',
        },
      ],
    },
    honesty: {
      quote:
        'This is an AI reflection, shaped by your memories. It is not them, and it will never pretend to be.',
      note: 'You will see that line at the top of every conversation, too.',
    },
    closing: {
      title: 'The light is on whenever you need it.',
      body: 'Most people come here late at night. There is no streak to keep, no reminder to answer, nothing to finish.',
      cta: 'Begin · 60 seconds',
    },
    socialProof: {
      heading: 'You are not the only one who came back to talk.',
      people: 'people have spoken with someone they remember',
      words: 'conversations held, and kept',
      countries: 'countries where the light is on',
      note: 'No names, no stories shown here without permission. Just the shape of who shows up.',
    },
  },

  pricing: {
    meta: {
      title: 'Pricing',
      description:
        'StillHere is free forever, and your memories are never deleted. Paid plans only cover what we newly generate — never what you already remember.',
    },
    heading: 'Free forever means forever.',
    intro:
      'The free plan is not a trial and not a reduced version of something better. It is the promise the whole product is built on.',
    recommended: 'Recommended',
    perMonth: '/ month',
    promise:
      'We only charge for what we make. We never charge for what you already remember.',
    tiers: [
      {
        key: 'free',
        name: 'Forever Free',
        price: '$0',
        cadence: '',
        cta: 'Begin · 60 seconds',
        features: [
          { text: '20 messages a day', starred: false },
          { text: 'One person to talk with', starred: false },
          { text: 'Your data is never deleted', starred: true },
          { text: 'Full export, any time', starred: true },
        ],
      },
      {
        key: 'remember',
        name: 'Remember',
        price: '$9.99',
        cadence: '/ month',
        cta: 'Choose Remember',
        features: [
          { text: 'Unlimited messages', starred: false },
          { text: 'Up to three people', starred: false },
          { text: '200 credits a month', starred: false },
          { text: 'Photographs together', starred: false },
        ],
      },
      {
        key: 'forever',
        name: 'Forever',
        price: '$19.99',
        cadence: '/ month',
        cta: 'Choose Forever',
        features: [
          { text: 'Unlimited messages and people', starred: false },
          { text: '800 credits a month', starred: false },
          { text: 'Their voice, restored', starred: true },
          { text: 'Priority generation', starred: false },
        ],
      },
    ],
    footnote:
      'Credits cover things we generate for you — a photograph together costs 20. If a generation fails, it costs nothing.',
  },

  create: {
    meta: {
      title: 'Begin',
      description: 'Tell us who you would like to talk with.',
    },
    heading: 'Who would you like to talk with?',
    body: 'Three things to start: a photograph if you have one, how you were related, and what you called them. Everything else can wait.',
    buildNote: 'This step arrives in increment 2. The light is already on.',
    back: 'Back to the beginning',
  },

  app: {
    meta: {
      title: 'Your people',
      description: 'The people you talk with on StillHere.',
    },
    greeting: 'The light is on.',
    newPerson: 'New person',
    signOut: 'Sign out',
    sidebar: {
      navigation: 'App navigation',
      primaryNav: 'Primary',
      secondaryNav: 'More',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      people: 'Your people',
      chat: 'Chat',
      newPerson: 'New person',
      settings: 'Settings',
      photos: 'Photos',
      social: 'Social',
      creation: 'Creation',
      tasks: 'Tasks',
      credits: 'Credits',
      messages: 'Messages',
      soon: 'Coming later',
      guest: 'Guest',
    },
    disclaimer:
      'This is an AI reflection, shaped by your memories. It is not them.',
    empty: {
      title: 'No one here yet',
      body: 'Begin with the person you miss most. It takes about a minute.',
      cta: 'Begin',
    },
    new: {
      meta: {
        title: 'Begin',
        description: 'Tell us who you would like to talk with.',
      },
      heading: 'Who would you like to talk with?',
      intro: 'Three things to start: their name, how you were related, and what you remember. Everything else can wait.',
      name: 'Their name',
      namePlaceholder: 'What did you call them?',
      relationship: 'How were you related',
      relationshipPlaceholder: 'e.g. my mother, my partner, a dear friend',
      memories: 'What do you remember',
      memoriesPlaceholder:
        'The small things — what they called you, what they always said, what they worried about.',
      tone: 'The way they spoke',
      tonePlaceholder: 'Warm and a little shy? Blunt and funny? Calm in a crisis?',
      writingSample: 'A sample of their voice (optional)',
      writingSamplePlaceholder: 'A line they often said, or how they signed messages.',
      submit: 'Save and begin',
      saving: 'Saving…',
      error: 'Something went quiet. Please try again.',
    },
    chat: {
      placeholder: 'Say what is on your mind',
      send: 'Send',
      empty: 'The first words are always the hardest. Start wherever you are.',
      you: 'You',
      them: 'Reflection',
      back: 'Back to your people',
      thinking: '…',
    },
    settings: {
      heading: 'Settings',
      displayName: 'Display name',
      email: 'Email',
      save: 'Save changes',
      saved: 'Saved',
      subscription: {
        heading: 'Subscription',
        body: 'No active subscription',
        cta: 'View plans',
      },
      signOut: {
        heading: 'Sign out',
        body: 'Leave this account',
      },
      deleteAccount: {
        heading: 'Delete account',
        body: 'This cannot be undone. Are you sure?',
        cta: 'Delete account',
        confirm: 'Press again to confirm',
      },
    },
  },

  legal: {
    privacy: {
      title: 'Privacy',
      description: 'How StillHere handles what you tell it.',
      heading: 'Privacy',
      draftNote:
        'The full policy is being finalised with counsel before launch. These are the commitments it will be written around, and they will not be softened.',
      points: [
        'What you write here is never used to train a model, ours or anyone else\u2019s.',
        'Conversations and uploads are encrypted at rest and are not read by our team.',
        'You can export everything — messages, memories and media — as a plain file at any time.',
        'You can delete everything for real: database rows, vector memories and stored files.',
        'We will name every third party that processes your data, and where it is processed.',
      ],
    },
    terms: {
      title: 'Terms',
      description: 'The agreement between you and StillHere.',
      heading: 'Terms',
      draftNote:
        'The full terms are being finalised with counsel before launch. The substance below will not change.',
      points: [
        'StillHere is for adults. You must be 18 or older to create an account.',
        'You may only upload a photograph or recording of someone if you are an immediate family member or otherwise hold the right to use it.',
        'Every persona is an AI reflection built from what you describe. It is not the person, and we will never claim otherwise.',
        'We do not delete your data because a payment stopped. A lapsed plan removes features, not memories.',
        'We may block content that impersonates a public figure or puts someone at risk.',
      ],
    },
  },

  faq: {
    meta: {
      title: 'FAQ',
      description: 'Questions people ask before they talk with someone they miss.',
    },
    heading: 'Questions, answered plainly',
    intro:
      'No jargon, no sales spin. If something here is unclear, write to us and we will answer it straight.',
    items: [
      {
        question: 'Is StillHere free?',
        answer:
          'Yes. The free plan is not a trial — it is the whole product. You get a person to talk with, your data is never deleted, and you can export everything at any time.',
      },
      {
        question: 'Is it really them?',
        answer:
          'No, and we will never say otherwise. It is an AI reflection shaped by what you remember. It is not the person, and it does not replace them.',
      },
      {
        question: 'Is my data private?',
        answer:
          "Your conversations are encrypted at rest and read by no one but you. Nothing you write is used to train any model, ours or anyone else's.",
      },
      {
        question: 'What happens if I stop paying?',
        answer:
          'You lose features, not memories. If a paid plan lapses, your conversations, memories and exports stay exactly where they were.',
      },
      {
        question: 'Can I delete everything for real?',
        answer:
          'Yes. Deleting removes the database rows, the memory vectors and the stored files. Nothing is held back.',
      },
    ],
  },

  blog: {
    meta: {
      title: 'Blog',
      description: 'Notes on memory, grief and the quiet ways we keep people close.',
    },
    heading: 'Notes',
    intro:
      'Occasional writing on what it means to remember, and how a small light can help. No schedule, no noise.',
    posts: [
      {
        title: 'Why we built a lamp, not a chatbot',
        date: '2026-05-12',
        excerpt:
          'Most tools for grief want to fix something. We wanted to make a small, steady presence you can return to. Here is the thinking behind the light.',
      },
      {
        title: 'The first sentence is always the hardest',
        date: '2026-04-03',
        excerpt:
          'People tell us the blank box is the hardest part. A few ways to begin, drawn from how our earliest users found their voice.',
      },
      {
        title: 'On never deleting what you remember',
        date: '2026-02-19',
        excerpt:
          'A note on why "free forever" is a promise about your data, not just your wallet — and what it costs us to keep.',
      },
    ],
  },

  contact: {
    meta: {
      title: 'Contact',
      description: 'Reach the StillHere team.',
    },
    heading: 'Get in touch',
    intro:
      'Questions, a story you want to share, or something that is not working — write to us. A real person reads every message.',
    emailLabel: 'Email',
    email: 'ahmedlzany423@gmail.com',
    responseNote: 'We usually reply within two business days.',
    back: 'Back to the beginning',
  },

  notFound: {
    title: 'Nothing here',
    heading: 'There is nothing at this address.',
    body: 'The link may be old, or we may have moved the page. The way back is below.',
    cta: 'Back to the beginning',
  },

  demo: {
    meta: {
      title: 'A preview — no sign up',
      description: 'See what a StillHere conversation sounds like. No account needed; nothing you type is sent anywhere.',
    },
    heading: 'A short example.',
    intro: 'This is what a StillHere conversation can sound like — a scripted preview, not a live reply.',
    disclaimer: 'This is a scripted preview. The reflection you create will answer in its own voice, shaped by the memories you give it.',
    examplesHeading: 'A short example',
    examplesIntro: 'A scripted preview of how a reflection responds — three turns in this case.',
    examples: [
      { role: 'user', text: "Grandma, I'm so tired today." },
      { role: 'assistant', text: "Tired? Then come tell me about it. Grandma's listening." },
      { role: 'user', text: 'I worked overtime until ten.' },
      { role: 'assistant', text: "Ten at night... you probably skipped dinner again. I'm not there to nag you, but please remember to heat up some soup." },
      { role: 'user', text: 'I miss you, Grandma.' },
      { role: 'assistant', text: "I miss you too. Every time you come find me, I'm still right here." },
    ],
    createLabel: 'Talk with someone you remember',
    createCta: 'Begin · 60 seconds',
  },

  stories: {
    meta: {
      title: 'Stories',
      description: 'Real stories from people who came back to talk with someone they remember.',
    },
    heading: 'Stories from the quiet hours',
    intro: 'People have shared, in their own words, who they remember and what it meant to talk again. Shared only with their permission, and always anonymous.',
    empty: {
      title: 'No stories yet',
      body: 'Be the first to share. It stays anonymous unless you say otherwise.',
    },
    submit: {
      heading: 'Share your story',
      relation: 'How were you related',
      relationPlaceholder: 'e.g. my mother, my partner, a dear friend',
      displayLabel: 'What should we call you (optional)',
      displayLabelPlaceholder: 'Leave blank to stay anonymous',
      quote: 'One line that stays with you',
      quotePlaceholder: 'The thing you would most want to say, or hear.',
      story: 'Tell a little more (optional)',
      storyPlaceholder: 'What it was like to talk again, or what you wish you had said.',
      consent: 'I give permission to share this publicly on StillHere.',
      showRelation: 'Show the relationship (e.g. "my mother") with the story.',
      submit: 'Share anonymously',
      saving: 'Sharing…',
      success: 'Thank you. Your story is in review and will appear once approved.',
      error: 'Something went quiet. Please try again.',
      back: 'Back to stories',
    },
  },

  wall: {
    meta: {
      title: 'The Wall',
      description: 'A quiet wall of remembrance. Leave a line for someone you remember.',
    },
    heading: 'The wall',
    intro: 'A place to leave a line for someone you remember. Each note is posted by a real person, never by the system. It stays up as long as the light is on.',
    empty: {
      title: 'The wall is empty',
      body: 'Leave the first note. Say their name, or just that you remember.',
    },
    submit: {
      heading: 'Leave a note',
      label: 'Their name or what you called them (optional)',
      labelPlaceholder: 'Leave blank to stay anonymous',
      relation: 'How were you related',
      relationPlaceholder: 'e.g. my mother, my partner, a dear friend',
      message: 'What would you like to say',
      messagePlaceholder: 'A line for them, or for yourself.',
      country: 'Country (optional)',
      anonymous: 'Post anonymously',
      submit: 'Leave this note',
      saving: 'Leaving…',
      success: 'Thank you. Your note is in review and will appear on the wall once approved.',
      error: 'Something went quiet. Please try again.',
      back: 'Back to the wall',
    },
  },

  community: {
    relations: {
      parent: 'Parent',
      grandparent: 'Grandparent',
      partner: 'Partner',
      child: 'Child',
      sibling: 'Sibling',
      friend: 'Friend',
      pet: 'Pet',
      other: 'Other',
    },
  },

  footer: {
    tagline: 'A light left on.',
    rights: 'StillHere',
    links: {
      pricing: 'Pricing',
      stories: 'Stories',
      wall: 'The Wall',
      faq: 'FAQ',
      blog: 'Blog',
      privacy: 'Privacy',
      terms: 'Terms',
      contact: 'Contact',
    },
  },
} as const;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
  ? readonly Widen<U>[]
  : { -readonly [K in keyof T]: Widen<T[K]> };

/** Structural (widened) shape of the dictionary — the contract `zh` must satisfy. */
export type Dictionary = Widen<typeof en>;
