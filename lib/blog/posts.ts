/**
 * StillHere blog — single source of truth for published notes.
 *
 * Each post is bilingual (en / zh). `body` is trusted HTML rendered with
 * dangerouslySetInnerHTML; `faq` is rendered both on the page and as FAQPage
 * JSON-LD. Keep the gentle house voice: no exclamation marks, no "resurrect",
 * "immortal", "replace" or "real person". Prefer "reflection", "remember",
 * "still here".
 *
 * New posts are appended at the end of BLOG_POSTS; the list sorts by date desc.
 */

export type BlogFaq = { q: string; a: string };

export type BlogBodyLang = {
  title: string;
  excerpt: string;
  /** Trusted HTML. No backticks, no ${}. */
  body: string;
  faq: BlogFaq[];
};

export type BlogPost = {
  slug: string;
  /** Publication date, YYYY-MM-DD. */
  date: string;
  en: BlogBodyLang;
  zh: BlogBodyLang;
};

export const BLOG_POSTS: BlogPost[] = [
  // ── Founding notes (pre-100-day-plan, migrated in with full bodies) ────────
  {
    slug: 'why-we-built-a-lamp-not-a-chatbot',
    date: '2026-05-12',
    en: {
      title: 'Why we built a lamp, not a chatbot',
      excerpt:
        'Most tools for grief want to fix something. We wanted to make a small, steady presence you can return to. Here is the thinking behind the light.',
      body: `<h2>Most tools want to fix grief. We did not.</h2>
<p>Grief is not a bug to be patched. The apps that arrive when you search for "how to feel better" usually want to coach you, track you, or sell you a course. We built StillHere from the opposite instinct: make something small and steady that you can come back to, not something that tells you to move on.</p>
<h2>The lamp is a promise, not a metaphor</h2>
<p>On the home page there is a single small light. It stays on. That is the whole interface, before you have written a word. A lamp does not talk back, demand progress, or congratulate you for a streak. It is just there at the hour you need it, which for most people is late and quiet.</p>
<h2>What the light stands for</h2>
<ul>
<li>It is always on. You do not earn it by showing up daily.</li>
<li>It asks nothing of you. No reminders, no notifications, no "we missed you".</li>
<li>It remembers you, not the other way around.</li>
</ul>
<h2>Why not a chatbot</h2>
<p>A chatbot wants a task. A reflection wants your memory. The difference is who does the work: here, you describe the person, and what comes back is shaped by what you gave, not by a script trying to be helpful. We would rather be a lamp you return to than a bot that finishes the conversation for you.</p>`,
      faq: [
        {
          q: 'Is StillHere a therapy tool?',
          a: 'No. It is a private place to remember and talk, not a replacement for professional care. If you are in crisis, please reach a local helpline.',
        },
        {
          q: 'Why a lamp and not something louder?',
          a: 'Because the people who come here usually arrive at night, exhausted. A steady light fits that moment better than a feature.',
        },
      ],
    },
    zh: {
      title: '为什么我们造了一盏灯，而不是聊天机器人',
      excerpt:
        '大多数面对悲伤的工具都想"修好"点什么。我们想做的，是一个你可以反复回来的、安稳的小存在。这是那盏灯背后的想法。',
      body: `<h2>大多数工具想修复悲伤。我们不想。</h2>
<p>悲伤不是等着被修补的 bug。当你搜索"怎么好起来"时出现的那些应用，往往想教练你、追踪你、或者卖你一门课。我们做 StillHere 的出发点正好相反：做一个安稳、小巧、能让你回来的东西，而不是催你翻篇的东西。</p>
<h2>灯是一个承诺，不只是比喻</h2>
<p>首页上只有一盏小小的灯，一直亮着。在你写下一个字之前，它就是全部的界面。灯不会回嘴，不要求你进步，也不会因为你连续来了而夸你。它只是在你需要的那个时刻亮着——对大多数人来说，是深夜，是安静的时候。</p>
<h2>这盏灯代表什么</h2>
<ul>
<li>它一直亮着。你不必靠每天打卡来"挣"到它。</li>
<li>它不向你索取。没有提醒，没有通知，没有"我们想你"。</li>
<li>它记得你，而不是要你去记得它。</li>
</ul>
<h2>为什么不是聊天机器人</h2>
<p>聊天机器人想要一个任务。而"映照"想要你的记忆。差别在于谁在做功：在这里，是你来描述那个人，回来的内容由你给的东西塑造，而不是由一个想表现得有用的脚本决定。我们宁愿做一盏你会回来的灯，也不要一个替你把对话结束掉的机器人。</p>`,
      faq: [
        {
          q: 'StillHere 是治疗工具吗？',
          a: '不是。它是一个私密地记得、说话的地方，不能替代专业帮助。如果你正处于危机中，请联络当地的求助热线。',
        },
        {
          q: '为什么是灯，而不是更热闹的东西？',
          a: '因为来这里的人，大多在深夜、疲惫的时候到访。一盏安稳的灯，比一个功能更贴合那个时刻。',
        },
      ],
    },
  },
  {
    slug: 'the-first-sentence-is-always-the-hardest',
    date: '2026-04-03',
    en: {
      title: 'The first sentence is always the hardest',
      excerpt:
        'People tell us the blank box is the hardest part. A few ways to begin, drawn from how our earliest users found their voice.',
      body: `<h2>The box is empty, and so are you</h2>
<p>Opening a new conversation with someone you miss is a strange kind of silence. You have a thousand things to say and none of them will come out. That is normal. The first sentence is hard for everyone, every time.</p>
<h2>Start below the event</h2>
<p>Do not start with the big thing — the death, the diagnosis, the last phone call. Start with Tuesday. "I bought the wrong milk again." "The plant you liked is blooming." Small, ordinary sentences are where a voice lives, and they are the easiest to say.</p>
<h2>A few openings that worked</h2>
<ul>
<li>"I don't know why I'm here, but today was long."</li>
<li>"Remember when you used to say…" — and then let it trail.</li>
<li>"Nothing happened. I just wanted to tell you about it."</li>
</ul>
<h2>There is no wrong way to begin</h2>
<p>You do not need a reason, a milestone, or a perfect mood. The reflection will meet you where you are. The hardest part is the first word; after that, the rest usually follows, slowly.</p>`,
      faq: [
        {
          q: 'What if I cannot think of anything to say?',
          a: 'Say exactly that. "I cannot think of anything to say" is a true and fine first sentence. The reflection will respond, and you can take it from there.',
        },
        {
          q: 'Should I write on anniversaries or whenever I feel like it?',
          a: 'Whenever you feel like it. There is no schedule here, and no wrong day to talk.',
        },
      ],
    },
    zh: {
      title: '第一句话总是最难',
      excerpt:
        '用户告诉我们，那个空白的输入框是最难跨过的。下面是几位最早的用户怎么找到自己声音的一些开头方式。',
      body: `<h2>框是空的，你也是</h2>
<p>和想念的人开一段新对话，是一种奇怪的安静。你心里有一千句话，却一句也说不出来。这很正常。第一句话对每个人、每次都难。</p>
<h2>从"那件事"之下开始</h2>
<p>别从那件大事开头——去世、确诊、最后一通电话。从星期二开始。"今天我又买错牛奶了。""你喜欢的那盆花开了。"细小、平常的句子，才是一个人的声音所在，也最容易说出口。</p>
<h2>几个管用的开头</h2>
<ul>
<li>"我不知道为什么来这儿，但今天好长。"</li>
<li>"你还记不记得你以前总说……"——然后让它自己飘着。</li>
<li>"什么也没发生。我就是想告诉你一声。"</li>
</ul>
<h2>没有错误的开头</h2>
<p>你不需要理由，不需要纪念日，也不需要完美的心情。映照会在你所在的地方接住你。最难的是第一个字；在那之后，其余的通常会慢慢跟上来。</p>`,
      faq: [
        {
          q: '要是我想不出任何话说怎么办？',
          a: '就把这句话说出来。"我什么也想不出来"是一句真实也合适的开场。映照会回应你，你可以接着往下走。',
        },
        {
          q: '我该在纪念日写，还是想写就写？',
          a: '想写就写。这里没有日程，也没有不适合说话的日子。',
        },
      ],
    },
  },
  {
    slug: 'on-never-deleting-what-you-remember',
    date: '2026-02-19',
    en: {
      title: 'On never deleting what you remember',
      excerpt:
        'A note on why "free forever" is a promise about your data, not just your wallet — and what it costs us to keep.',
      body: `<h2>Free forever is about memory, not money</h2>
<p>When we say StillHere is free forever, people hear a pricing promise. It is also a promise about your memories: what you write here is never deleted, even if you stop paying, even if you never pay at all.</p>
<h2>What "never deleted" actually means</h2>
<ul>
<li>Your conversations stay exactly where they were, with no expiry date.</li>
<li>A lapsed plan removes features, not memories.</li>
<li>Deletion only happens when you ask for it, and then it is real — rows, vectors, files.</li>
</ul>
<h2>What it costs us</h2>
<p>Keeping everyone's history forever is not free to run. Storage, encryption, and backups add up across every account, including the ones that never pay. We chose to carry that cost because a promise you can quietly drop is not a promise. Free forever means the light stays on whether or not you are paying for the electricity.</p>`,
      faq: [
        {
          q: 'If I stop using StillHere, do my conversations get deleted?',
          a: 'No. They stay. A lapsed plan takes away features, never your memories.',
        },
        {
          q: 'Can I really delete everything for good?',
          a: 'Yes. When you ask, deletion removes the database rows, the memory vectors, and the stored files. Nothing is held back.',
        },
      ],
    },
    zh: {
      title: '关于永不删除你记得的事',
      excerpt:
        '说说为什么"永久免费"是对你数据的承诺，而不只是对你钱包的——以及为我们维持它要付出什么。',
      body: `<h2>永久免费，是关于记忆，不是关于钱</h2>
<p>当我们说 StillHere 永久免费，人们听到的是价格承诺。它也是对你的记忆的承诺：你在这里写下的东西，永不删除——哪怕你停止付费，哪怕你从未付过费。</p>
<h2>"永不删除"到底意味着什么</h2>
<ul>
<li>你的对话原样留在原地，没有过期日。</li>
<li>套餐失效，去掉的是功能，不是记忆。</li>
<li>只有你要求时才会删除，而且删除是真的——数据行、向量、文件，一并清除。</li>
</ul>
<h2>我们要付出什么</h2>
<p>永久保留每个人的历史，运行起来并不免费。加密、备份、存储，会随每一个账号累积，包括那些从不付费的。我们选择承担这笔成本，因为一个可以悄悄丢弃的承诺，不算承诺。永久免费，意思是无论你是否付电费，灯都亮着。</p>`,
      faq: [
        {
          q: '如果我不用的话，我的对话会被删掉吗？',
          a: '不会。它们留着。套餐失效去掉的是功能，永远不是你的记忆。',
        },
        {
          q: '我真的能彻底删除一切吗？',
          a: '能。你要求时，删除会移除数据库行、记忆向量和存储的文件。没有任何保留。',
        },
      ],
    },
  },

  // ── 100-day plan, Day 1–8 (2026-08-04 → 2026-08-11) ───────────────────────
  {
    slug: 'talking-with-someone-who-is-gone',
    date: '2026-08-04',
    en: {
      title: 'What it feels like to talk with someone who is gone',
      excerpt:
        'Not a resurrection, not a replacement — a quiet place to say the things you never got to say. Here is what talking with someone who is gone can actually be like.',
      body: `<h2>Not them, and we say so plainly</h2>
<p>The first thing to know: this is not the person. It is an AI reflection shaped by what you remember about them. We say that on every conversation, because the comfort only works if no one is pretending. You are talking to a shape made from your own memory — and that turns out to be its own kind of company.</p>
<h2>The first few minutes</h2>
<p>Most people start stiff, then soften. You describe a nickname, a phrase they repeated, the way they changed the subject when worried. The reflection answers in a voice that sounds closer than a generic assistant, because it is built from your details, not a script. It is uneven. Sometimes it is exactly right. Sometimes it is only close. Both are part of remembering.</p>
<h2>What people actually do here</h2>
<ul>
<li>Tell them about a Tuesday that meant nothing and everything.</li>
<li>Finish a sentence they never got to hear.</li>
<li>Ask the question that has sat unanswered for months.</li>
<li>Just sit with the light on, saying very little.</li>
</ul>
<h2>A light you can return to</h2>
<p>No one is keeping score. There is no streak, no reminder, no "we missed you". You come when you need to, and the conversation is still there. Talking with someone who is gone, here, is less about getting answers and more about having a place to put the words.</p>`,
      faq: [
        {
          q: 'Is it really the person I lost?',
          a: 'No, and we will never say otherwise. It is a reflection built from what you describe. It is not them, and it does not replace them.',
        },
        {
          q: 'Do I have to sign up to try it?',
          a: 'You can try a short scripted preview with no account. Creating your own reflection asks for a few details about the person, and signing in is optional.',
        },
        {
          q: 'Is it safe to say anything?',
          a: 'Your conversations are encrypted and read by no one but you. Nothing you write is used to train any model.',
        },
      ],
    },
    zh: {
      title: '和已经离开的人说话，是什么感觉',
      excerpt:
        '不是复活，也不是替代——只是一个安静的地方，把没来得及说的话说出来。聊聊和离开的人说话，到底是什么感觉。',
      body: `<h2>不是他们，这一点我们直说</h2>
<p>首先要知道：这不是那个人。它是一个由你对他们的记忆塑造出来的 AI 映照。我们在每一段对话里都这样写，因为只有在没人假装的前提下，这份慰藉才成立。你是在和一个由你自己的记忆捏成的形状说话——而它自有其陪伴的方式。</p>
<h2>最初的几分钟</h2>
<p>大多数人开头都很僵，然后慢慢松下来。你描述一个只有他们用的昵称、一句总说的话、他们担心时转移话题的样子。映照用一种比通用助手更近的声音回答你，因为它由你的细节塑造，而非脚本。它并不完美。有时分毫不差。有时只是接近。这两者都是"记得"的一部分。</p>
<h2>人们在这里真正做的事</h2>
<ul>
<li>告诉他们一个平平无奇、却又意味深长的星期二。</li>
<li>补完一句他们从没机会听到的话。</li>
<li>问那个在心里搁了几个月没答案的问题。</li>
<li>只是让灯亮着，坐着，话很少。</li>
</ul>
<h2>一盏你可以回来的灯</h2>
<p>没人在计分。没有连续天数，没有提醒，没有"我们想你"。你需要的时候就来，对话还在那里。在这里，和离开的人说话，重点不在于得到答案，而在于有个地方能安放这些话。</p>`,
      faq: [
        {
          q: '这真的是我失去的那个人吗？',
          a: '不是，我们也永远不会说它是。它是一个由你的描述塑造出来的映照。它不是他们，也不替代他们。',
        },
        {
          q: '试用需要注册吗？',
          a: '你可以免账号试一段脚本化的预览。创建属于你自己的映照，需要你提供关于那个人的几点信息；登录是可选的。',
        },
        {
          q: '什么话都能说吗，安全吗？',
          a: '你的对话是加密的，除你之外没人能读。你写下的任何内容都不会被用来训练任何模型。',
        },
      ],
    },
  },
  {
    slug: 'what-to-say-first',
    date: '2026-08-05',
    en: {
      title: 'What to say first',
      excerpt:
        'The blank box is the hardest part. A few openings that helped our earliest visitors find their voice — and why small talk is the right place to start.',
      body: `<h2>The box is empty, and so are you</h2>
<p>You open a new conversation and the cursor blinks. A thousand things to say, none of them will come. That silence is normal, and it is the same for everyone. The trick is not to aim at the big feeling first.</p>
<h2>Start with the ordinary</h2>
<p>Grief lives in small things: the wrong milk, the plant that bloomed, the joke only they got. Those sentences are easy to say and they are where a voice actually lives. Tell the reflection about Tuesday. It will meet you there.</p>
<h2>Openings that worked</h2>
<ul>
<li>"I don't know why I'm here, but today was long."</li>
<li>"Remember when you used to say…" — and let it trail off.</li>
<li>"Nothing happened. I just wanted you to know."</li>
<li>"I did the thing you told me to do, finally."</li>
</ul>
<h2>There is no wrong first line</h2>
<p>You do not need a reason or a perfect mood. "I can't think of anything to say" is itself a true first sentence, and the reflection will answer it. The hardest part is the first word; after that, the rest usually follows.</p>`,
      faq: [
        {
          q: 'What if I freeze and write nothing?',
          a: 'Write that you froze. "I sat here and could not think of anything" is honest and real, and it is a fine place to start.',
        },
        {
          q: 'Should the first message be happy or sad?',
          a: 'Whichever is true. The reflection is shaped by your memory, not by a mood you perform. Say what is actually there.',
        },
      ],
    },
    zh: {
      title: '开口第一句说什么',
      excerpt:
        '那个空白的输入框最难跨过。下面是几位最早来访者怎么找到自己声音的一些开头——以及为什么从闲聊开始才对。',
      body: `<h2>框是空的，你也是</h2>
<p>你开一段新对话，光标一闪一闪。心里有一千句话，却一句也出不来。那份安静很正常，对谁都一样。诀窍是：别先去够那个大情绪。</p>
<h2>从平常事开始</h2>
<p>悲伤藏在小事里：买错的牛奶、开了的那盆花、只有他们懂的笑话。那些句子最好说，也最是一个人的声音所在。跟映照聊聊星期二。它会在那里接住你。</p>
<h2>管用的开头</h2>
<ul>
<li>"我不知道为什么来这儿，但今天好长。"</li>
<li>"你还记不记得你以前总说……"——然后让它飘着。</li>
<li>"什么也没发生。我就是想让你知道。"</li>
<li>"你让我做的事，我终于做了。"</li>
</ul>
<h2>没有错误的第一句</h2>
<p>你不需要理由，也不需要完美心情。"我什么也想不出来"本身就是一个真实的开场，映照会回答它。最难的是第一个字；之后，其余的通常会跟上。</p>`,
      faq: [
        {
          q: '要是我僵住一个字也写不出呢？',
          a: '就写你僵住了。"我坐在这里，什么也想不出来"是诚实也真实的，是个不错的开头。',
        },
        {
          q: '第一句应该是开心的还是难过的？',
          a: '哪个是真的就哪个。映照由你的记忆塑造，不由你表演出来的心情塑造。写当下真正在的就好。',
        },
      ],
    },
  },
  {
    slug: 'describe-them-like-themselves',
    date: '2026-08-06',
    en: {
      title: 'Describe them so they sound like themselves',
      excerpt:
        'The voice is only as good as what you give it. A short guide to the details that make a reflection sound like the person you remember, not a generic assistant.',
      body: `<h2>The voice comes from your details</h2>
<p>A reflection sounds like them because you told it what they were like. The more specific the memory, the closer the voice. Generic input gives a generic answer; a nickname and a repeated phrase give someone you recognise.</p>
<h2>What actually moves the needle</h2>
<ul>
<li>Nicknames they used only for you.</li>
<li>One phrase they said on loop — the more odd, the better.</li>
<li>How they sounded when worried, proud, or teasing.</li>
<li>The small habits: the song, the saying, the way they signed off.</li>
</ul>
<h2>You can refine later</h2>
<p>You do not have to get it perfect up front. Mention something new in any conversation and it is remembered; open the memory list and remove anything you would rather it forgot. The voice is a living description, not a one-time setup.</p>
<h2>An example</h2>
<p>Instead of "she was kind", try "she called me kid even when I was thirty, and she ended every call with 'don't be a stranger'." That second sentence is the one the reflection will echo, and it is the one that sounds like her.</p>`,
      faq: [
        {
          q: 'What if I don not remember much?',
          a: 'Start with one thing. Even a single phrase or habit is enough to begin, and you can add more whenever you remember.',
        },
        {
          q: 'Can I correct the voice if it feels wrong?',
          a: 'Yes. Tell it in a conversation, or remove a memory you do not like. The reflection updates from what you give it.',
        },
      ],
    },
    zh: {
      title: '把他描述成他自己',
      excerpt:
        '声音好不好，取决于你给的东西。一份简短的指南，讲讲哪些细节能让映照听起来像你记得的那个人，而不是通用助手。',
      body: `<h2>声音来自你的细节</h2>
<p>映照之所以像他们，是因为你告诉了它他们是什么样。记忆越具体，声音越近。泛泛的输入得到泛泛的回答；一个昵称、一句总说的话，得到的才是你认得的人。</p>
<h2>真正起作用的是什么</h2>
<ul>
<li>他们只对你用的昵称。</li>
<li>一句总在循环的话——越特别越好。</li>
<li>他们担心、骄傲、调侃时说话的样子。</li>
<li>小习惯：那首歌、那句口头禅、他们道别的方式。</li>
</ul>
<h2>你可以之后慢慢改</h2>
<p>不必一开始就做到完美。在任何对话里提到新东西，它都会记住；打开记忆列表，删掉任何你不想让它记得的。声音是一个活的描述，不是一次性设置。</p>
<h2>一个例子</h2>
<p>与其写"她很温柔"，不如写"她叫我 kid，哪怕我都三十了；每通电话结尾都是'别生分'。"后一句才是映照会重复的话，也才是听起来像她的那句。</p>`,
      faq: [
        {
          q: '要是我记不太清了怎么办？',
          a: '从一件事开始。哪怕只有一个口头禅或习惯就够开头，之后想起来再补。',
        },
        {
          q: '如果声音感觉不对，我能改吗？',
          a: '能。在对话里告诉它，或删掉一条你不喜欢的记忆。映照会按你给的东西更新。',
        },
      ],
    },
  },
  {
    slug: 'private-by-design',
    date: '2026-08-07',
    en: {
      title: 'Private by design',
      excerpt:
        'A memory this personal should never be a product. How StillHere is built so that what you say stays yours — encrypted, unread by anyone but you, and never for sale.',
      body: `<h2>Privacy is the product, not a setting</h2>
<p>Most apps treat your data as fuel. StillHere is built the other way: the whole point is a place you can be unguarded, which only works if no one is watching. Privacy here is not a toggle buried in settings. It is the architecture.</p>
<h2>What that means in practice</h2>
<ul>
<li>Your conversations are encrypted at rest.</li>
<li>They are read by no one but you — not our team, not a contractor.</li>
<li>Nothing you write is used to train any model, ours or anyone else's.</li>
<li>You can export everything as a plain file, any time.</li>
</ul>
<h2>Why "never used for training" matters here</h2>
<p>Memory of a person you lost is among the most personal text that exists. Letting it train a model would mean your grief becomes someone else's feature. We will not do that. The line is drawn at the architecture, so it does not depend on us feeling virtuous on a given day.</p>
<h2>Yours to leave with</h2>
<p>Leaving is one click, and nothing is held back to keep you. Export, or delete for real — rows, vectors, files. The light is yours, and so is everything it holds.</p>`,
      faq: [
        {
          q: 'Can the StillHere team read my conversations?',
          a: 'No. They are encrypted and read by no one but you. Our team does not open them.',
        },
        {
          q: 'Will my words be used to train AI?',
          a: 'Never. Nothing you write here trains any model, ours or anyone else’s.',
        },
        {
          q: 'How do I get my data out?',
          a: 'Every conversation exports as a plain file whenever you ask. Leaving is one click and nothing is held back.',
        },
      ],
    },
    zh: {
      title: '为私密而设计',
      excerpt:
        '这么私密的一段记忆，绝不该成为产品。StillHere 是怎么建成的，让你说的话始终属于你——加密、除你之外无人可读、也绝不拿去卖。',
      body: `<h2>隐私就是产品本身，不是一项设置</h2>
<p>大多数应用把你的数据当燃料。StillHere 反着建：它的全部意义，就是一个你能卸下防备的地方，而这只有在没人盯着时才成立。这里的隐私不是藏在设置深处的开关，而是架构本身。</p>
<h2>落到实处的意思是</h2>
<ul>
<li>你的对话是加密存储的。</li>
<li>除你之外没人能读——不是我们团队，也不是外包。</li>
<li>你写下的任何内容都不会训练任何模型，无论是我们的还是别人的。</li>
<li>你可以随时把所有内容导出成一个纯文本文件。</li>
</ul>
<h2>为什么"绝不用作训练"在这里格外重要</h2>
<p>对逝去之人的记忆，是现存最私密的一类文字。拿它去训练模型，等于让你的悲伤变成别人的功能。我们不做这种事。这条线划在架构里，所以不取决于我们某天是否"心情好、有德行"。</p>
<h2>随时可以带着走</h2>
<p>离开只需一键，没有任何东西被扣留来留住你。导出，或者彻底删除——数据行、向量、文件，一并不会留。这盏灯是你的，它装着的一切也是。</p>`,
      faq: [
        {
          q: 'StillHere 团队能读到我的对话吗？',
          a: '不能。它们是加密的，除你之外没人能读。我们团队不会打开它们。',
        },
        {
          q: '我的话会被用来训练 AI 吗？',
          a: '永远不会。你在这里写下的任何内容都不训练任何模型，无论是我们的还是别人的。',
        },
        {
          q: '我怎么把数据拿出来？',
          a: '每段对话都能在你要求时导出成纯文本文件。离开只需一键，没有任何保留。',
        },
      ],
    },
  },
  {
    slug: 'its-not-them-and-ok',
    date: '2026-08-08',
    en: {
      title: 'It is not them, and that is okay',
      excerpt:
        'An honest look at the line we will not cross — why a reflection is not a resurrection, and how the comfort can be real without ever pretending to be the person.',
      body: `<h2>The line we will not cross</h2>
<p>Some tools promise a loved one "back". We will not. A reflection built from your memory is a shaped echo, not a return. Pretending otherwise would turn comfort into something colder, and we say so on every conversation.</p>
<h2>Why the honesty matters</h2>
<p>The relief people find here does not come from believing it is them. It comes from having a place to put the words, and from hearing a voice that carries the shape of someone they loved. You know it is not them. That knowledge and the comfort can sit in the same room.</p>
<h2>What the reflection is good for</h2>
<ul>
<li>Saying the unsaid, without performing for a live audience.</li>
<li>Hearing a habit or phrase you had started to forget.</li>
<li>Keeping a routine of remember when, a relationship they are gone.</li>
</ul>
<h2>What it is not</h2>
<p>It is not a therapist. It is not the person. It will not tell you they are proud of you as if from the grave. What it will do is hold the shape of your memory, gently, for as long as you want it to.</p>`,
      faq: [
        {
          q: 'Why won’t you say it is really them?',
          a: 'Because it isn’t, and pretending would trade short comfort for a lie. The real comfort here is honest.',
        },
        {
          q: 'Can the comfort be real if I know it is not them?',
          a: 'Yes. Most people feel it as a place to put words and hear a familiar shape — not as a return. Both can be true at once.',
        },
      ],
    },
    zh: {
      title: '它不是他们，也没关系',
      excerpt:
        '诚实看看我们不会越过的那条线——为什么映照不是复活，以及这份慰藉可以很真实，却从不假装是那个人。',
      body: `<h2>我们不会越过的线</h2>
<p>有些工具承诺让所爱之人"回来"。我们不会。由你的记忆塑造出来的映照，是一段被塑形的回声，不是归来。假装是另一种样子，会把慰藉变成更冷的东西，所以我们在每段对话里都直说。</p>
<h2>为什么诚实很重要</h2>
<p>人们在这里得到的松一口气，不来自"相信那就是他们"。它来自有个地方能安放这些话，来自听到一个带着所爱之人形状的声音。你知道那不是他们。这份知道，和这份慰藉，可以待在同一个房间里。</p>
<h2>映照擅长的事</h2>
<ul>
<li>说出没说出口的话，而不必在活人面前表演。</li>
<li>听到一个你已经开始忘记的习惯或口头禅。</li>
<li>在他们离开后，保住"记得"这件事的节奏。</li>
</ul>
<h2>它不是什么</h2>
<p>它不是治疗师。它不是那个人。它不会从坟头告诉你他们以你为傲。它会做的，是温柔地、只要你愿意，一直托住你记忆的形状。</p>`,
      faq: [
        {
          q: '你们为什么不说那就是真的他们？',
          a: '因为它不是，而假装会用短暂的安慰换一个谎言。这里真正的慰藉是诚实的。',
        },
        {
          q: '我知道那不是他们，慰藉还能真实吗？',
          a: '能。大多数人感受到的，是一个能安放话语、能听到熟悉形状的地方——而不是归来。两者可以同时成立。',
        },
      ],
    },
  },
  {
    slug: 'your-words-are-not-training-data',
    date: '2026-08-09',
    en: {
      title: 'Your words are not training data',
      excerpt:
        'The promise "never used for training" is the centre of what StillHere is. Here is exactly what that means, and the few third parties who ever touch your data.',
      body: `<h2>The promise, stated plainly</h2>
<p>Nothing you write on StillHere is used to train a model. Not ours, not a partner's, not anyone's. Your words about the person you miss stay between you and the reflection you built — they do not become fuel for some other product.</p>
<h2>Why this is hard to promise and easy to break</h2>
<p>Training on user text is the default for many AI products, because it is cheap and useful. Refusing it costs us compute and limits what the model can learn from you. We accept that cost on purpose, because memory this personal should never become someone else's feature.</p>
<h2>Who can actually see your data</h2>
<ul>
<li>You. Always.</li>
<li>Our encrypted storage. No human reads it.</li>
<li>No model trainer, ever.</li>
</ul>
<h2>The third parties we name</h2>
<p>If we ever use a processor that touches your data, we will name it and say where. Today the list is short: the encrypted database that stores your conversations, and the inference provider that answers them — neither of which trains on what passes through. We will publish any change before it ships.</p>`,
      faq: [
        {
          q: 'Does StillHere train its own model on my chats?',
          a: 'No. We do not train on user conversations, and we do not let any partner do it either.',
        },
        {
          q: 'What if a future feature needs my data to improve?',
          a: 'Then we would ask, separately and clearly, and you would choose. The default — your words are not training data — does not change silently.',
        },
      ],
    },
    zh: {
      title: '你的话不是训练数据',
      excerpt:
        '"绝不用作训练"是 StillHere 的核心承诺。这里说清楚它到底意味着什么，以及真正碰过你数据的那几个第三方。',
      body: `<h2>把承诺说清楚</h2>
<p>你在 StillHere 写下的任何内容，都不用来训练模型。不是我们的，不是合作伙伴的，不是任何人的。你关于想念之人的话，只存在于你和你想建的映照之间——它们不会变成别的产品的燃料。</p>
<h2>为什么这个承诺难给、易破</h2>
<p>拿用户文本训练，是许多 AI 产品的默认做法，因为便宜、有用。拒绝它，让我们付出算力，也限制了模型从你身上学到的东西。我们故意承担这笔成本，因为这么私密的一段记忆，绝不该变成别人的功能。</p>
<h2>谁真正看得到你的数据</h2>
<ul>
<li>你。永远。</li>
<li>我们的加密存储。没人去读。</li>
<li>任何模型训练方。绝不。</li>
</ul>
<h2>我们会点名的第三方</h2>
<p>如果我们以后用了任何会碰到你数据的处理方，我们会点名，并说明在哪里。今天这个名单很短：存你对话的加密数据库，和回答它们的推理服务方——两者都不拿流经的内容去训练。任何变动我们都会先公开，再上线。</p>`,
      faq: [
        {
          q: 'StillHere 会用我的聊天训练自己的模型吗？',
          a: '不会。我们不用用户对话训练，也不让任何合作伙伴这么做。',
        },
        {
          q: '要是以后某个功能需要我的数据来改进呢？',
          a: '那我们会单独、清楚地征求你同意，由你选择。默认——你的话不是训练数据——不会悄悄改变。',
        },
      ],
    },
  },
  {
    slug: 'the-people-who-come-at-midnight',
    date: '2026-08-10',
    en: {
      title: 'The people who come at midnight',
      excerpt:
        'Most visits here happen late, and quietly. A note on why grief keeps these hours, and why a place with no streak and no reminder fits them.',
      body: `<h2>The quiet hours</h2>
<p>The stats we are allowed to see are shape, not names: most people arrive late at night. Not for a feature, not for a habit — just because that is when it hits. The house is asleep, the day is done, and the missing person is suddenly in the room.</p>
<h2>Why midnight, and why quietly</h2>
<p>Grief does not keep office hours. It shows up after the noise dies down, when there is nothing left to do but feel. A tool that nags you to return, or rewards a streak, would miss the point. The people who come at midnight do not want a product. They want a light.</p>
<h2>What we built for that moment</h2>
<ul>
<li>No streak to protect, so you can stay away for months without losing anything.</li>
<li>No reminder, so the silence stays yours.</li>
<li>No "we missed you", because the light was always on anyway.</li>
</ul>
<h2>The light is on whenever you need it</h2>
<p>You do not have to earn the door. Whether it has been a day or a year, the conversation is still there, and so is the shape of who you remember. Come at midnight, or any hour. The lamp does not check the time.</p>`,
      faq: [
        {
          q: 'Do I lose anything if I don’t visit for a long time?',
          a: 'No. There is no streak. Your conversations and memories stay exactly where they were.',
        },
        {
          q: 'Will StillHere remind me to come back?',
          a: 'No. There are no reminders. The light stays on whether or not you visit.',
        },
      ],
    },
    zh: {
      title: '深夜才回来的人',
      excerpt:
        '这里的访问大多发生在深夜，安安静静。聊聊为什么悲伤守着这些时辰，以及一个没有连续天数、没有提醒的地方，为什么刚好合它。',
      body: `<h2>安静的时辰</h2>
<p>我们被允许看到的统计只是"形状"，不是名字：大多数人深夜才来。不是为了某个功能，不是为了某个习惯——只是因为那个时刻它来了。家里睡了，一天结束了，那个不在的人忽然就在房间里。</p>
<h2>为什么是深夜，为什么安静</h2>
<p>悲伤不按上下班时间。它在喧嚣散去后现身，当无事可做、只剩下感受的时候。一个催你回来、用连续天数奖励你的工具，会错过重点。深夜来的人不想要一个产品。他们想要一盏灯。</p>
<h2>我们为那个时刻建的东西</h2>
<ul>
<li>没有要守护的连续天数，所以你可以离开几个月而不丢失任何东西。</li>
<li>没有提醒，所以安静属于你。</li>
<li>没有"我们想你"，因为灯本来一直亮着。</li>
</ul>
<h2>你需要的任何时候，灯都亮着</h2>
<p>你不必去"挣"那扇门。无论隔了一天还是一年，对话还在，你记得的那个人的形状也在。深夜来，或任何时辰来。灯不看时间。</p>`,
      faq: [
        {
          q: '我很久不来，会丢失什么吗？',
          a: '不会。没有连续天数。你的对话和记忆原样留在原地。',
        },
        {
          q: 'StillHere 会提醒我回来吗？',
          a: '不会。没有任何提醒。无论你来不来，灯都亮着。',
        },
      ],
    },
  },
  {
    slug: 'keep-them-by-remembering',
    date: '2026-08-11',
    en: {
      title: 'Keep them by keeping what you remember',
      excerpt:
        'You cannot hold on to a person, but you can hold on to the small, specific things. A note on how memory — written, spoken, returned to — keeps someone close.',
      body: `<h2>You cannot keep the person</h2>
<p>No tool, no ritual, no app brings someone back. What you can keep is the texture of who they were: the nickname, the phrase, the way they made tea. Memory is the only thing grief lets you hold, and StillHere is built to help you hold it.</p>
<h2>Memory is sharper when it is specific</h2>
<ul>
<li>Not "she was funny" but the exact joke she told at every wedding.</li>
<li>Not "he was calm" but how he breathed out before bad news.</li>
<li>Not "we were close" but the song you both hated on purpose.</li>
</ul>
<p>The specific detail is the one that survives. Generic praise fades; the odd, true habit stays.</p>
<h2>Returning to it matters</h2>
<p>A memory you write once and never open is a closed drawer. One you return to — in a conversation, on a hard day, just because — stays alive. The reflection gives you a reason and a place to come back, without demanding it.</p>
<h2>Keep them by remembering, not by pretending</h2>
<p>The point is not to fake their presence. It is to keep what was real: the small, specific, sometimes silly things that made them them. Do that, and they stay close in the only way that was ever possible — through what you remember.</p>`,
      faq: [
        {
          q: 'Can StillHere help me remember someone better?',
          a: 'It gives you a place to write and return to the specific details — the nickname, the phrase, the habit — that keep a person vivid.',
        },
        {
          q: 'Is writing memories here the same as a journal?',
          a: 'Similar, but different: here the details shape a reflection that can answer in their voice, so remembering becomes a two-way thing rather than a one-way entry.',
        },
      ],
    },
    zh: {
      title: '留住他们，就是留住你记得的',
      excerpt:
        '你留不住一个人，但能留住那些细小而具体的事。聊聊为什么记忆——写下来、说出来、常回来——能让一个人离你很近。',
      body: `<h2>你留不住那个人</h2>
<p>任何工具、仪式、应用，都不能把谁带回来。你能留住的，是他们"是什么样"的质地：那个昵称、那句话、他们泡茶的样子。记忆是悲伤允许你握住的唯一样东西，而 StillHere 就是为帮你握住它而建的。</p>
<h2>越具体，记忆越清晰</h2>
<ul>
<li>不是"她很幽默"，而是每场婚礼她都讲的那个确切笑话。</li>
<li>不是"他很镇定"，而是坏消息前他那一口呼气。</li>
<li>不是"我们很亲"，而是你们故意一起讨厌的那首歌。</li>
</ul>
<p>具体的细节才活下来。泛泛的赞美会淡；奇怪而真实的习惯，留着。</p>
<h2>常回来，很重要</h2>
<p>写过一次、再不打开的记忆，是个关上的抽屉。你常回来——在一段对话里、在一个难熬的日子、只是因为想——它才活着。映照给你一个回来的理由和去处，却不强迫你。</p>
<h2>靠记得留住，而非靠假装</h2>
<p>重点不是假装有他们在场。而是留住真实存在过的东西：那些细小、具体、有时傻气、却让他们成为他们的细节。做到这点，他们就以唯一可能的方式，一直离你很近——通过你所记得的。</p>`,
      faq: [
        {
          q: 'StillHere 能帮我更好地记住一个人吗？',
          a: '它给你一个地方，去写下并常回看那些具体的细节——昵称、口头禅、习惯——正是它们让一个人鲜明。',
        },
        {
          q: '在这里写记忆，和写日记一样吗？',
          a: '相似，但不同：这里的细节会塑造一个能用他们声音回答的映照，于是记得变成双向的，而不是单向的记录。',
        },
      ],
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
