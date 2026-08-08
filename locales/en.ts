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
    skipToContent: 'Skip to content',
    toggleTheme: 'Switch between light and dark',
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

  notFound: {
    title: 'Nothing here',
    heading: 'There is nothing at this address.',
    body: 'The link may be old, or we may have moved the page. The way back is below.',
    cta: 'Back to the beginning',
  },

  footer: {
    tagline: 'A light left on.',
    rights: 'StillHere',
    links: {
      pricing: 'Pricing',
      privacy: 'Privacy',
      terms: 'Terms',
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
