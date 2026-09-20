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
  {
    slug: 'set-up-first-memory-capsule-5-minutes',
    date: '2026-08-12',
    en: {
      title: 'Set up your first memory capsule in 5 minutes',
      excerpt:
        'A memory capsule is one person, a few specific details, and a place you can return to. A calm, five-minute walkthrough for creating your first one on StillHere.',
      body: `<h2>What a memory capsule is</h2>
<p>A memory capsule is the smallest container of remembering: one person you miss, three or four specific details about them, and a place you can come back to. No life story required, no perfect writing. Just the details that made them them.</p>
<h2>The five-minute setup</h2>
<p>Open the app, start a new capsule, and answer only what comes easily. Start with the name. Then the detail you would hate to forget: the phrase, the habit, the way they did something ordinary. Add one voice note if you have the patience, a single sentence in your own words. That is enough.</p>
<p>You do not need to fill every field. An empty field is not homework. A capsule with one true detail is worth more than a complete one that feels like paperwork.</p>
<h2>Keep it small on purpose</h2>
<ul>
<li>One person, not a list. Focus is what makes it returnable.</li>
<li>Specific over general. "The joke she told at every wedding" beats "she was funny".</li>
<li>Write the way you talk. If it sounds like you, it will hold.</li>
</ul>
<h2>Return to it, gently</h2>
<p>The capsule does its job when you come back to it, on a hard day or a quiet one, and the details are still there waiting. That is the whole point of StillHere: not to fix grief, but to keep the small, specific things close in a way you can return to.</p>`,
      faq: [
        {
          q: 'What should go into a memory capsule?',
          a: 'One person, a few specific details that made them them, and anything you would hate to forget. Small and true beats long and generic.',
        },
        {
          q: 'Do I need to write a lot?',
          a: 'No. A single specific detail is enough to start. You can add more over time; the capsule grows with you.',
        },
        {
          q: 'Can I create more than one capsule?',
          a: 'Yes. Each capsule is one person, so you can create as many as you need, whenever you are ready.',
        },
      ],
    },
    zh: {
      title: '5 分钟创建你的第一个记忆胶囊',
      excerpt:
        '记忆胶囊就是一个人、几个具体的细节、一个你随时能回来的地方。一篇安静的 5 分钟上手指南，教你在 StillHere 上创建第一个。',
      body: `<h2>记忆胶囊是什么</h2>
<p>记忆胶囊是"记得"的最小容器：一个你想念的人、三四个关于他们的具体细节、一个你能常回来的地方。不需要完整生平，不需要漂亮的文字。只要那些让他们成为他们的细节。</p>
<h2>5 分钟搭建步骤</h2>
<p>打开应用，新建一个胶囊，只回答那些自然浮现的内容。先写下名字。然后写下你最不想忘记的那个细节：那句话、那个习惯、他们做某件平凡事的方式。有耐心的话，加一条语音，或者一句你自己的话。这就够了。</p>
<p>不需要填满每一个字段。空的字段不是作业。一个只有一个真实细节的胶囊，比一个填满却像填表的强。</p>
<h2>刻意保持小而具体</h2>
<ul>
<li>一个人，不是一份名单。专注才让它值得回来。</li>
<li>具体胜过笼统。"每场婚礼她都讲的那个笑话"，好过"她很幽默"。</li>
<li>用你说话的方式写。如果它读起来像你，它就留得住。</li>
</ul>
<h2>轻轻地，常回来</h2>
<p>胶囊的意义，在于你回来的时候——在一个难熬的日子，或一个安静的傍晚——那些细节还在那里等你。这就是 StillHere 的全部：不是修补悲伤，而是让那些细小而具体的事，以你能回来的方式，一直留在身边。</p>`,
      faq: [
        {
          q: '记忆胶囊里应该放什么？',
          a: '一个人、几个让他们成为他们的具体细节、任何你不想忘记的东西。小而真实，胜过长而笼统。',
        },
        {
          q: '需要写很多吗？',
          a: '不需要。一个具体的细节就足够开始。之后随时可以补充，胶囊会和你一起生长。',
        },
        {
          q: '可以创建多个胶囊吗？',
          a: '可以。每个胶囊对应一个人，你需要多少就建多少，任何时候都可以。',
        },
      ],
    },
  },
  {
    slug: 'import-photos-and-voice-into-capsule',
    date: '2026-08-13',
    en: {
      title: 'Import photos and voice notes into a capsule',
      excerpt:
        'Text remembers facts, a photo remembers a moment, a voice note remembers the person. How to add photos and voice to a StillHere memory capsule, what to pick, and what to skip.',
      body: `<h2>Why photos and voice belong in a capsule</h2>
<p>Text remembers facts. A photo remembers a moment, and a voice note remembers the person, the tone, the way a sentence ended. A memory capsule built on text alone stays flat. Add a photo and a voice note and it becomes something you can feel again. This is the one upgrade worth doing for the people you miss most.</p>
<h2>What to import, and what to skip</h2>
<p>Pick the photo that actually carries the person: the one where they are mid-laugh, not the posed one. One photo beats ten. For voice, a single sentence in their own words, or yours about them, carries more than a long recording. Skip blurry shots, group photos where you cannot find them, and audio with a lot of background noise. Quality over quantity is the whole trick.</p>
<ul>
<li>One photo that captures their expression, not their pose</li>
<li>One voice note: a sentence, a phrase, a laugh, thirty seconds is plenty</li>
<li>Skip duplicates and low-quality files, they dilute what matters</li>
</ul>
<h2>How importing works in StillHere</h2>
<p>Open the capsule, tap the add button, choose the photo from your gallery or camera roll. For voice, hold to record, or import an existing clip. Everything is attached to that one person, stored privately, visible only to you. The photo sits with the text, the voice note plays inline, and the capsule becomes a small room you can walk back into.</p>
<h2>What changes when you add them</h2>
<p>Text says what you remember. The photo shows it. The voice brings back the sound of them. Together they do what none of them can do alone: make a person present again for a moment. That is the entire point of a memory capsule, and photos and voice are the fastest way to get there.</p>`,
      faq: [
        {
          q: 'What kind of photo should I add to a capsule?',
          a: 'One photo that captures their expression, mid-laugh or mid-sentence, beats ten posed ones. Quality over quantity. Skip blurry shots and group photos where you cannot clearly find them.',
        },
        {
          q: 'How long should a voice note be?',
          a: 'Thirty seconds is plenty. A single sentence in their own words, or yours about them, carries more than a long recording. The tone matters more than the length.',
        },
        {
          q: 'Are the photos and voice notes private?',
          a: 'Yes. Everything in a capsule is stored privately and visible only to you. Nothing is shared or published unless you explicitly choose to share a capsule.',
        },
        {
          q: 'Can I add media to an existing capsule?',
          a: 'Yes. Open the capsule, tap add, and attach a photo or record a voice note at any time. Capsules are meant to grow as you remember more.',
        },
      ],
    },
    zh: {
      title: '把照片和语音存进记忆胶囊',
      excerpt:
        '文字记住事实，照片记住瞬间，语音记住人本身。怎么往 StillHere 记忆胶囊里加照片和语音、选什么、跳过什么。',
      body: `<h2>为什么照片和语音该进胶囊</h2>
<p>文字记住事实。照片记住一个瞬间，语音记住一个人：语气、语调、一句话结束的方式。只靠文字的胶囊是平的。加一张照片、一条语音，它就变成你能再次感觉到的东西。这是最值得为你想念的人做的升级。</p>
<h2>导什么，不导什么</h2>
<p>选那张真正带着人的照片：笑到一半的那张，而不是摆好姿势的那张。一张胜过十张。语音方面，一句话、用他们自己的话，或者你关于他们的话，比一段长录音更有分量。跳过模糊的照片、找不到人的合影、背景噪音大的音频。质量优先于数量，这就是全部诀窍。</p>
<ul>
<li>一张捕捉到表情的照片，而不是姿势</li>
<li>一条语音：一句话、一个短语、一声笑，三十秒足够</li>
<li>跳过重复和低质量文件，它们会稀释真正重要的东西</li>
</ul>
<h2>在 StillHere 里怎么导入</h2>
<p>打开胶囊，点添加按钮，从相册选择照片。语音按住录音，或导入已有的片段。所有内容都挂在同一个人名下，私密存储，只有你可见。照片和文字放在一起，语音可以内联播放，胶囊变成一个你随时能走回去的小房间。</p>
<h2>加上之后，什么变了</h2>
<p>文字说出你记得的事。照片展示它。语音带回他们的声音。三者合在一起，做到了任何单一形式都做不到的事：让一个人重新在场片刻。这就是记忆胶囊的全部意义，而照片和语音是抵达那里最快的路。</p>`,
      faq: [
        {
          q: '胶囊里该放什么样的照片？',
          a: '一张捕捉到表情的照片，笑到一半、说到一半，胜过十张摆拍的。质量优先于数量。跳过模糊的照片和找不到人的合影。',
        },
        {
          q: '语音要多长？',
          a: '三十秒足够。他们自己的一句话，或者你关于他们的一句话，比一段长录音更有分量。语气比时长重要。',
        },
        {
          q: '照片和语音是私密的吗？',
          a: '是。胶囊里的所有内容都是私密存储，只有你可见。除非你明确选择分享某个胶囊，否则不会分享或公开任何内容。',
        },
        {
          q: '能给已有的胶囊加媒体吗？',
          a: '能。任何时候打开胶囊，点添加，附上照片或录一条语音。胶囊本来就是用来随着你记得更多而成长的。',
        },
      ],
    },
  },
  {
    slug: 'share-capsule-with-family',
    date: '2026-08-14',
    en: {
      title: 'Share a capsule with family — privately',
      excerpt:
        'A capsule holds things you would not say at a dinner table. How to share a memory capsule with family privately: one person, one piece, and what to keep back.',
      body: `<h2>A capsule is private before it is anything else</h2>
<p>You built the capsule for yourself, probably at an hour when nobody else was awake. Then a cousin asks what you remember about Grandma, and suddenly you want to share a memory capsule with family privately, without it becoming a group thread or a post that strangers can read. That instinct is right. A capsule holds the kind of detail you would not say out loud at a dinner table, and it should stay behind a door you control.</p>
<p>So the starting position is simple: nothing is shared. Not with our team, not with your family, not by accident. If something leaves your account, it is because you carried it out yourself.</p>
<h2>What private capsule sharing actually means</h2>
<p>Private capsule sharing is not a broadcast with a smaller audience. It is closer to handing someone a letter and sitting there while they read it. Three things are worth being clear about before you do it.</p>
<ul>
<li>You choose the person. One name, not the family group by default.</li>
<li>You choose the piece. A single memory, one photo, one paragraph, rather than the whole capsule.</li>
<li>You can stop at any point. What you have not sent stays yours.</li>
</ul>
<p>The longer reasoning behind how this is built sits in <a href="/blog/private-by-design">private by design</a>.</p>
<h2>How to share memories with family securely, one person at a time</h2>
<p>The practical version, in the order that tends to work:</p>
<ul>
<li>Pick one relative. Usually the one who can hear his name without changing the subject.</li>
<li>Read the capsule yourself first. You will find a line or two you are not ready to hand over yet.</li>
<li>Copy or export only that part. A plain file you send directly is easier to live with than a link you cannot take back.</li>
<li>Use a channel your family already uses for family things, and say what it is before they open it.</li>
<li>Say what you want back. "You do not have to reply" is a complete sentence.</li>
</ul>
<p>That last step matters more than it sounds. Relatives often read a shared memory as an invitation to fix your grief, so they arrive with advice. Telling them what you need, a read rather than a response, keeps the whole thing gentle.</p>
<h2>What to share and what to hold back</h2>
<p>Some of what is in a capsule is not for anyone. The argument you never resolved. The version of him only you saw. Holding those back is not dishonesty, it is the reason the capsule works at all. Once a capsule has been edited for an audience, it stops being a place where you can be unguarded.</p>
<p>A rough sort, if it helps:</p>
<ul>
<li>Share: stories, small habits, the way she answered the phone, the photo everyone already loves.</li>
<li>Hold: unfinished conflict, private guilt, whatever you say to him at two in the morning.</li>
<li>Ask first: anything about a living relative who never agreed to be in it.</li>
</ul>
<h2>If sharing goes badly</h2>
<p>Sometimes you send it and the reply lands wrong. Someone corrects your memory, or goes quiet for a week, or turns it into a story about themselves. This happens, and it does not mean you were wrong to try. Two people can remember the same person differently and both be telling the truth. Close the thread, go back to the capsule, and write the line you wish they had said. The capsule will not argue with you.</p>
<h2>Keep it yours</h2>
<p>A capsule you can share is more useful than one you never open, and a capsule you can keep private is the only kind worth building. Both are true at the same time. Start one at stillherememory.com, see how the privacy works on the <a href="/privacy">privacy page</a>, or read the rest of the <a href="/blog">notes</a> when it is late and you would like some company.</p>`,
      faq: [
        {
          q: 'Can my family see my capsule if I have not shared it?',
          a: 'No. A capsule is private by default and visible only to you. Nothing is sent to a relative unless you copy, export or send it yourself.',
        },
        {
          q: 'What is the safest way to share memories with family securely?',
          a: 'Send one piece to one person, in a channel your family already trusts, and tell them what it is before they open it. A plain file sent directly is easier to control than a link that can be forwarded.',
        },
        {
          q: 'Should I share the whole capsule?',
          a: 'Usually not. One memory or one photo gives a relative what they came for, and it lets you keep the parts that are only yours. A capsule edited for an audience stops being useful to you.',
        },
        {
          q: 'What if a relative remembers it differently?',
          a: 'That is normal. Two people can hold different versions of the same person and both be honest. Your capsule stays your record, and you can add their version to it if you want to.',
        },
      ],
    },
    zh: {
      title: '私密地把胶囊分享给家人',
      excerpt:
        '胶囊里装着你在饭桌上不会说出口的细节。怎么把记忆胶囊私密地分享给家人：一个人、一小段，以及哪些该留给自己。',
      body: `<h2>胶囊首先是私密的</h2>
<p>你做这个胶囊是给自己的，大概是在别人都睡了的某个时刻。后来表姐问你还记得奶奶什么，你忽然想私密分享记忆里的那一段，把记忆胶囊分享给家人，但又不想它变成一个家庭群聊，或者一条陌生人能看到的帖子。这个直觉是对的。胶囊里装着你在饭桌上不会说出口的细节，它应该待在一扇由你控制的门后面。</p>
<p>所以起点很简单：什么都没有被分享。没有给我们团队，没有给你的家人，也不会因为误触而发生。如果有东西离开了你的账号，那是你自己把它带出去的。</p>
<h2>私密分享记忆到底意味着什么</h2>
<p>私密分享不是"观众更少的广播"。它更接近把一封信递给某个人，然后坐在旁边看他读完。动手之前，有三件事值得先说清楚。</p>
<ul>
<li>人由你选。一个名字，而不是默认发到家庭群。</li>
<li>内容由你选。一段记忆、一张照片、一个段落，而不是整个胶囊。</li>
<li>你随时可以停。没发出去的，仍然是你的。</li>
</ul>
<p>关于这件事背后更长的思考，写在<a href="/blog/private-by-design">私密是设计本身</a>里。</p>
<h2>怎么安全地把记忆分享给家人，一次一个人</h2>
<p>实际操作的顺序，通常这样最顺：</p>
<ul>
<li>挑一个亲人。一般是那个听到他名字不会立刻换话题的人。</li>
<li>先自己把胶囊读一遍。你会发现有一两句，你还没准备好交出去。</li>
<li>只复制或导出那一部分。直接发一个文件，比发一个收不回的链接更让人安心。</li>
<li>用家里本来就在用的渠道发，并且在他们点开之前先说清楚这是什么。</li>
<li>说出你想要什么回应。"你不用回我"本身就是一句完整的话。</li>
</ul>
<p>最后这一步比听起来要紧。亲人往往把你分享的记忆读成一个"请帮我修好悲伤"的请求，于是带着建议来了。提前告诉他们你需要的只是"读一下"而不是"回一段"，整件事就会温和很多。</p>
<h2>分享什么，留下什么</h2>
<p>胶囊里有些东西不属于任何人。那场没有和解的争吵。只有你见过的那个版本的他。把这些留下来不是不诚实，恰恰是胶囊之所以有用的原因。一旦胶囊是为观众修过的，它就不再是那个你可以不设防的地方了。</p>
<p>如果需要一个粗略的分法：</p>
<ul>
<li>可以分享：故事、小习惯、她接电话的方式、大家本来就喜欢的那张照片。</li>
<li>留给自己：没结束的冲突、私下的愧疚、你凌晨两点对他说的那些话。</li>
<li>先问一句：任何涉及在世亲人、而对方并未同意出现在里面的内容。</li>
</ul>
<h2>如果分享的结果不好</h2>
<p>有时候你发出去了，回来的话却落错了地方。有人纠正你的记忆，有人沉默一个星期，有人把它变成关于自己的故事。这会发生，但不说明你不该试。两个人可以记得同一个人的不同版本，而且都在说真话。关掉对话，回到胶囊，把你希望他们说的那句话自己写下来。胶囊不会跟你争。</p>
<h2>它仍然是你的</h2>
<p>一个你能分享的胶囊，比一个你从不打开的胶囊有用；而一个你能保持私密的胶囊，才是唯一值得做的那种。这两句同时成立。到 stillherememory.com 建一个，在<a href="/privacy">隐私页面</a>看看它是怎么运作的，或者在夜深、想要一点陪伴的时候，读读其他<a href="/blog">随记</a>。</p>`,
      faq: [
        {
          q: '我没有分享，家人能看到我的胶囊吗？',
          a: '不能。胶囊默认是私密的，只有你可见。除非你自己复制、导出或发送，否则不会有任何内容到达亲人那里。',
        },
        {
          q: '把记忆安全地分享给家人，最稳妥的方式是什么？',
          a: '一次只把一小段发给一个人，用家里本来就信任的渠道，并在对方点开之前说清楚这是什么。直接发一个文件，比一个可以被转发的链接更好控制。',
        },
        {
          q: '要不要把整个胶囊分享出去？',
          a: '通常不需要。一段记忆或一张照片，已经能给亲人他想要的东西，同时让你留住只属于你的部分。为观众修改过的胶囊，对你自己就不再有用了。',
        },
        {
          q: '如果亲人记得的不一样怎么办？',
          a: '这很正常。两个人可以持有同一个人的不同版本，而且都是诚实的。你的胶囊仍然是你的记录，如果你愿意，也可以把他们的版本加进去。',
        },
      ],
    },
  },
  {
    slug: 'export-your-words-always',
    date: '2026-08-15',
    en: {
      title: "Export Everything You Wrote, and Why You Always Can",
      excerpt: "Two years ago I switched note apps. I'd used the old one for four years, over two thousand notes, and the export was a format nightmare. I burned a whole weekend on it and still lost a few dozen entries completely. After that weekend one thing became clear: an app that won't let you take your own data out isn't keeping your memories safe. It's holding them hostage.",
      body: `<p>Two years ago I switched note apps. I'd used the old one for four years, over two thousand notes, and the export was a format nightmare. I burned a whole weekend on it and still lost a few dozen entries completely. After that weekend one thing became clear: an app that won't let you take your own data out isn't keeping your memories safe. It's holding them hostage.</p>
<p>When we built StillHere, my first rule was simple. **Every word you write can be exported in one click, any time. We never lock you in.**</p>
<h2>Why being able to leave matters so much</h2>
<p>Data portability sounds like jargon. Strip it down and it's plain language: these are my words, and when I want to leave, I leave with them.</p>
<p>It gives you three things.</p>
<p>First, **peace of mind**. Knowing you can take everything out at any moment is what lets you write freely in the first place. No fear that a platform redesign, a shutdown, or a new phone will erase your memories. Second, **freedom to switch**. A tool is a servant, not a master. Use it today, swap it tomorrow, and walk out with your data. No memory gets held as collateral. Third, **the legal layer**. GDPR spells out the right to data portability. Your data belongs to you. That's a right, not a favor from the platform.</p>
<h2>Choosing a format: Markdown, JSON, and plain text</h2>
<p>One export format would never be enough, because the formats serve different jobs. StillHere supports three, each with its own purpose.</p>
<p>**Markdown** is the best all-around choice. It's readable, open it and you see clean text and headings. It's portable, almost every notes app, blog, and writing tool understands it. Choose it if you plan to keep writing somewhere else.</p>
<p>**JSON** is for preserving structure. Timestamps, tags, and links stay intact as structured data. It suits technical people, or anyone preparing a bulk migration or building their own backup system.</p>
<p>**Plain text** is the final safety net. No format dependency at all, open it a hundred years from now and your words are still there. Pick it for archiving, or when the only thing that matters is that the text survives.</p>
<p>Three formats isn't a flex. It's the same promise delivered three ways: give you back what you wrote, shaped the way you want it.</p>
<h2>What you can do after exporting</h2>
<p>Most people treat export as a moving-day thing. It's actually useful every week.</p>
<ul>
<li>**Local backups**: export Markdown once a month, drop it on your own drive or cloud, and say goodbye to cloud-only storage</li>
<li>**Migration**: switching platforms or tools, export then import, no gaps in between</li>
<li>**Print a book**: turn a year of journal entries into a PDF, bind it, and you get a real book on your shelf</li>
<li>**Review**: feed the JSON to your own script, count how many words you wrote, find out when you write most</li>
</ul>
<p>The data is yours, and so are these uses. Our job is just to hand it over.</p>
<h2>The StillHere export promise</h2>
<p>Here's the commitment in writing:</p>
<ul>
<li>One-click export of everything, in Markdown, JSON, or plain text</li>
<li>Full content, timestamps, and tags included, nothing truncated, nothing sanitized, nothing cherry-picked</li>
<li>Export is free forever, no subscription, no request process</li>
<li>Your data is never used to train models, more in <a href="/blog/your-words-are-not-training-data">Your Words Are Not Training Data</a></li>
</ul>
<p>These terms aren't complicated, because this should be the default, not a selling point.</p>`,
      faq: [
        {
                "q": "Q: Does exporting cost anything?",
                "a": "A: No. Export is a basic right, not a premium feature. Free forever, available anytime."
        },
        {
                "q": "Q: Is the exported file processed in any way?",
                "a": "A: No. Export packs up your data as-is. No analysis, no sanitizing, no rewriting."
        },
        {
                "q": "Q: What happens to my data if StillHere ever shuts down?",
                "a": "A: You're never trapped. Exporting whenever you want is already your capability. And if that day ever came, we'd announce it well in advance, so everyone has plenty of time to take their memories with them."
        },
        {
                "q": "Q: Should I pick Markdown or JSON?",
                "a": "A: If you want to keep writing somewhere else, Markdown. If you want full structure for migration or backup, JSON. If you can't decide, export both, they take no space."
        }
],
    },
    zh: {
      title: "你写下的每一个字，永远都能带走",
      excerpt: "两年前我换过一次笔记软件。旧应用用了四年，两千多条笔记，导出的时候被格式卡住，折腾了整整一个周末，最后还有几十条内容彻底读不出来。那个周末之后我想通了一件事：一个不让你带走自己数据的应用，本质上是在托管你的记忆，而不是为你保管记忆。",
      body: `<p>两年前我换过一次笔记软件。旧应用用了四年，两千多条笔记，导出的时候被格式卡住，折腾了整整一个周末，最后还有几十条内容彻底读不出来。那个周末之后我想通了一件事：一个不让你带走自己数据的应用，本质上是在托管你的记忆，而不是为你保管记忆。</p>
<p>现在做 StillHere，我给自己立的第一条规矩就是：**用户写的每一个字，随时可以一键导出，永远不锁死。**</p>
<h2>为什么"随时能带走"这么重要</h2>
<p>数据可携带，听起来像个技术术语，其实就是一句大白话：这是我写的字，我想走的时候就能带着走。</p>
<p>它带来三样东西。</p>
<p>第一是**安全感**。知道自己随时能拿走，写的时候才敢真正放开。你不用担心哪天平台改版、产品停摆、或者自己换了手机，那些回忆就没了。第二是**换平台的自由**。工具是仆人，不是主人。今天用它，明天想换，带着数据走，没有任何一段记忆被扣下当人质。第三是**法律层面**。GDPR 明确写了数据可携带权，你的数据属于你，这是权利，不是平台的施舍。</p>
<h2>格式怎么选：Markdown、JSON 和纯文本</h2>
<p>导出不能只给一种格式，因为用途不同，格式要求也不同。StillHere 支持三种，各有各的用处。</p>
<p>**Markdown** 是最好的通用格式。可读，打开就是干净的文字和标题；可迁移，几乎所有笔记、博客、写作工具都认它。想带走之后继续用，选它。</p>
<p>**JSON** 是给"保结构"用的。时间戳、标签、关联关系，全部保留成结构化数据。适合技术背景的人，或者准备做批量迁移、备份到自己的系统里。</p>
<p>**纯文本** 是最后一道保险。没有任何格式依赖，一百年后打开也还是你的字。适合归档，适合那些"只想确保文字永远在"的人。</p>
<p>三种格式，不是技术上的炫耀，是同一个承诺的不同兑现方式：按你想要的样子，把你写的东西还给你。</p>
<h2>导出之后能干什么</h2>
<p>很多人以为导出数据是"搬家"才用的事，其实日常就有用。</p>
<ul>
<li>**本地备份**：一个月导一次 Markdown，存进自己的硬盘或者网盘，和"云端即一切"说再见</li>
<li>**迁移**：换平台、换工具，导出再导入，全程没有断点</li>
<li>**打印成册**：把一年的日记导成 PDF，打印装订，变成书架上真实存在的书</li>
<li>**回顾**：JSON 数据喂给自己写的脚本，统计自己写了多少字、最常深夜记录</li>
</ul>
<p>数据是你的，这些用法也是你的。我们只负责把它交到你手里。</p>
<h2>StillHere 的导出承诺</h2>
<p>具体承诺写在这里，白纸黑字：</p>
<ul>
<li>所有内容一键导出，Markdown / JSON / 纯文本三种格式任选</li>
<li>导出包含完整内容、时间戳和标签，不截断、不脱敏、不挑挑拣拣</li>
<li>导出功能永久免费，不需要订阅，也不需要申请</li>
<li>你的数据不被用来训练模型，详见<a href="/blog/your-words-are-not-training-data">《你的文字不是训练数据》</a></li>
</ul>
<p>这些条款不复杂，因为我们觉得这本来就该是标配，而不是卖点。</p>
<h2>常见问题</h2>
<p>**Q：导出会收费吗？**</p>
<p>A：不会。导出是基础权利，不是增值功能，永久免费，随时可用。</p>
<p>**Q：导出的文件会不会被处理？**</p>
<p>A：不会。导出只是把你的数据原样打包，不经过任何分析、脱敏或改写。</p>
<p>**Q：如果哪天 StillHere 不运营了，我的数据怎么办？**</p>
<p>A：你不会被困住。随时导出带走，这是你本来就有的能力。万一真有那一天，也会提前足够的时间通知，让每个人都能从容带走自己的回忆。</p>
<p>**Q：Markdown 和 JSON 该选哪个？**</p>
<p>A：想继续在别处写作，选 Markdown；想完整保留结构做迁移或备份，选 JSON。拿不准就两个都导，反正不占地方。</p>
<p>**Q：导出的数据包含图片吗？**</p>
<p>A：包含。图片文件和文字内容会一起导出，路径在文档里列清楚，方便你归档或重新组织。</p>
<h2>记忆该由你保管</h2>
<p>那些深夜写下的话，那些怕忘了所以记下来的小事，它们值不值得被一个"未知何时会停服的应用"锁着？答案是显而易见的。数据可携带不是功能列表里的一项，是信任的底线。你写的每一个字，永远都能带走。</p>
<p>**<a href="/">现在就把你的回忆导出一份试试 →</a>**</p>`,
      faq: [],
    },
  },
  {
    slug: 'use-stillhere-on-phone-vs-desktop',
    date: '2026-08-16',
    en: {
      title: 'Use StillHere on Phone vs Desktop: Where Memories Live Best',
      excerpt: 'StillHere works on any screen, but the experience changes depending on whether you open it on your phone or your desktop. Here is when each device makes sense, and how to pick the right one for the memory you are about to write.',
      body: `<p>I opened StillHere on my phone this morning. The screen was small, the notifications were loud, and I forgot why I had picked it up in the first place. A week later I sat at my desk, opened it on a proper keyboard, and wrote three entries before I realized how much time had passed.</p>
<p>The app does not care where you use it. It is just a place to keep words. But the way you use it changes depending on the device in front of you, and knowing that difference makes the whole experience better.</p>
<h2>Phone: quick captures, real moments</h2>
<p>Your phone is always with you. That is the whole point. When something happens that you want to remember — a comment your child made, a weird cloud, a meal that looked better than it tasted — you can open StillHere and type it before the feeling fades.</p>
<p>The mobile experience is built for this. The interface stays out of the way. You open it, you write, you close it. There is no pressure to make it perfect. A sentence is enough. A fragment is enough.</p>
<p>I use my phone for things that happen fast. A conversation snippet. A photo caption I want to keep. A thought that would otherwise disappear by dinner.</p>
<h2>Desktop: longer writes, deeper reflection</h2>
<p>When I sit down at my computer, I am usually looking for something else. I am not waiting for a moment to strike. I am deciding to write. That changes the whole rhythm.</p>
<p>The desktop lets me think longer. I can revisit an old entry, rewrite a paragraph, connect two memories that I did not see as related when I first wrote them. The bigger screen means I can keep more context open at once.</p>
<p>I use the desktop for entries that matter. Not because they are more important, but because I give them more time. A memory I want to get right. A reflection I want to sit with.</p>
<h2>What syncs, what stays local</h2>
<p>StillHere keeps your entries in sync across devices. Write something on your phone, find it on your desktop. Start something on your desk, finish it on the train. The data moves with you, not the other way around.</p>
<p>That means you can treat the two devices as one continuous space. Your phone is the pocket version. Your desktop is the desk version. They are the same library, just accessed differently.</p>
<h2>When to use which</h2>
<p>There is no rule that says you have to pick one. Use both. Use whichever one is nearby when the memory happens. Use the desktop when you have twenty minutes to spare. Use the phone when you have twenty seconds.</p>
<p>The habit that matters is not the device. It is the act of writing something down before you forget it. The device is just the tool you happen to have in your hand.</p>
<h2>One memory, two screens</h2>
<p>Sometimes I write something on my phone and later open it on my desktop to add more. Sometimes I start on my desk and finish on the couch. Both are normal. Both are part of the same record.</p>
<p>StillHere does not judge how you use it. It only cares that you show up and write. Wherever you are, whatever screen is in front of you, the memory stays.</p>
<p>**<a href="/">Start writing your memories today →</a>**</p>`,
      faq: [
        { q: 'Does StillHere sync between my phone and computer?', a: 'Yes. Entries written on one device appear on the other automatically, as long as you are signed in to the same account.' },
        { q: 'Can I edit an entry I started on my phone later on my desktop?', a: 'Absolutely. Every entry is available on every device, and you can edit it anywhere without losing anything.' },
        { q: 'Does the mobile version have all the same features?', a: 'The core writing and browsing experience is the same. Some interface details adjust for smaller screens, but no content is hidden.' },
      ],
    },
    zh: {
      title: 'StillHere 手机版 vs 桌面版：记忆该在哪写',
      excerpt: 'StillHere 在手机和电脑上都能用，但体验完全不同。这篇讲清楚什么时候用哪个设备，以及为什么两个都用才是最好的习惯。',
      body: `<p>今天早上我在手机上打开了 StillHere。屏幕很小，通知很吵，我甚至忘了自己为什么打开它。一周后我坐在电脑前，用实体键盘写了三条记录，才意识到时间已经过了多久。</p>
<p>这个应用不在乎你在哪里用。它只是一个存放文字的地方。但你在不同设备上用的方式确实不一样，了解这一点会让整个体验好很多。</p>
<h2>手机：快速捕捉，真实瞬间</h2>
<p>手机随时都在你身边。这才是它的意义所在。当你想记住一件事——孩子说的话、一片奇怪的云、一顿看起来比吃起来更好的饭——你可以打开 StillHere，在感觉消失之前把内容写下来。</p>
<p>移动端的设计就是为这个场景服务的。界面不抢戏。打开、写、关掉。不需要把它写得完美。一个句子就够了，一个片段也够。</p>
<p>我用手机记那些发生得很快的东西。一段对话。一张想保留的照片说明。一个不到晚饭就会忘掉的念头。</p>
<h2>桌面：长文写作，深度思考</h2>
<p>当我坐到电脑前，我通常是在找别的事情做。我不是在等某个瞬间出现，我是在决定要写。这改变了整个节奏。</p>
<p>桌面让我能想得更久。我可以回头看一条旧记录，重写一个段落，把两条我之前没意识到的记忆连起来。更大的屏幕意味着我能同时看到更多的上下文。</p>
<p>我用桌面写那些需要认真对待的内容。不是因为它们更重要，而是因为我愿意花更多时间在上面。一段我想写好的记忆。一段我想慢慢咀嚼的反思。</p>
<h2>同步机制：手机和桌面互通</h2>
<p>StillHere 会在设备之间同步你的记录。在手机写的东西，在电脑上立刻能看到。在 desk 上开始写的，在地铁上也能继续。数据跟着你走，而不是反过来。</p>
<p>这意味着你可以把两个设备当成一个连续的空间。手机是口袋版，桌面是书桌版。它们是同一本书，只是打开方式不同。</p>
<h2>什么时候用哪个</h2>
<p>没有规则说你必须选一个。两个都用。哪个设备在身边就用哪个。有二十分钟就用桌面，有二十秒就用手机。</p>
<p>真正重要的习惯不是选设备，而是在忘记之前把东西写下来。设备只是你手里恰好有的工具。</p>
<h2>一条记忆，两块屏幕</h2>
<p>我有时在手机写一条，后来在桌面打开补内容。有时在 desk 开始写，在沙发上完成。两种都正常，都是同一条记录的一部分。</p>
<p>StillHere 不在乎你怎么用。它只在乎你有没有出现、有没有写。不管你在哪，不管面前的屏幕多大，记忆都会留下。</p>
<p>**<a href="/">现在开始记录你的记忆 →</a>**</p>`,
      faq: [
        { q: 'StillHere 能在手机和电脑之间同步吗？', a: '可以。只要登录同一个账号，手机写的记录会自动出现在电脑上。' },
        { q: '我在手机上开始写的记录，能在电脑上继续编辑吗？', a: '当然可以。所有记录在所有设备上都可用，你可以在任何地方编辑，不会丢失任何内容。' },
        { q: '手机版的功能和桌面版一样吗？', a: '核心写作和浏览体验完全一致。界面细节会根据小屏幕调整，但不会有内容被隐藏。' },
      ],
    },
  },

  {
    slug: 'adjust-reflection-tone',
    date: '2026-08-17',
    en: {
      title: 'Adjust the Reflection Tone: Gentler or More Direct',
      excerpt: 'StillHere lets you tune how the AI speaks back to you — gentler or more direct. Here is what each mode actually sounds like, when to use it, and why changing tone never touches your entries.',
      body: `StillHere's reply tone is not fixed. You can make the AI gentler or more direct, depending on what you want to hear today. This guide covers how tone settings work, what changes when you move the slider, and why 'gentler' does not mean 'vague'.

## Why tune the tone at all

The same person wants different words on different days. At 2am, you need to be held — a softer sentence does more than a lecture. In the afternoon, you might want it direct, no detours. Tone settings are the remote control for that. It does not change the content, it changes the way things are said.

## What gentler mode sounds like

Gentler mode responds slower and softer. It leans on 'I hear you' and 'that genuinely sounds hard', meeting the feeling first, then easing into anything else. It does not rush to advice unless you ask.

Good for: late nights, hard days, the early weeks after a loss.

## What direct mode sounds like

Direct mode is shorter and more grounded. Fewer cushions, more substance: 'That reading is fair, and here is another angle.' It assumes you want clarity right now, not comfort.

Good for: daytime, when you want a next step, when you have been grieving a while and want a hand pulling you up.

## How to change it: three seconds in settings

Open settings, find 'reply tone', and drag the slider between gentler and more direct. Middle is the default. The difference shows within a few exchanges.

Change it anytime, it applies immediately, and it never touches what you have written. Tone is a filter on the conversation, not part of the memory.

## Gentler is not vague, direct is not cold

A common worry: gentler mode means robotic soothing, direct mode means ice. Both are actually listening to you seriously, just by different routes. Gentler puts the feeling first, direct puts the facts first. Use whichever you need today.

**Does changing tone affect my entries?** No. Tone only shapes how the AI responds. Everything you write stays exactly as it is, never rewritten or analyzed.

**Which mode is better?** Neither is better; each fits a moment. Many people run direct by day and gentler by night, or just switch on how they feel.

**Does the tone change on its own?** The default is warm and neutral. Once you set it, it stays at your preference until you move it again.

Want to feel the difference? Open

**[StillHere](/) settings, set the tone where it fits you, and write down what you want to say today.**`,
      faq: [],
    },
    zh: {
      title: '调整回应的语气：更温柔或更直接',
      excerpt: 'StillHere 可以调 AI 回话的语气，更温柔或更直接。这篇讲清两种模式实际听起来什么样、什么时候用哪个，以及为什么调语气绝不会碰你的内容。',
      body: `StillHere 的回应语气不是写死的。你可以把 AI 的回话调得更温柔，也可以调得更直接——取决于今天你想听什么。这篇讲清楚语气设置怎么调、调了之后会怎么变，以及为什么“温柔”不等于“敷衍”。

## 为什么要调语气

同一个人，在不同日子里想听的话不一样。深夜emo的时候，需要的是被接住的感觉，一句软一点的话比一句讲道理的话有用得多；而白天想振作的时候，你可能希望它直接一点，别绕弯子。

语气设置就是给你这个遥控器。它不是改内容，是改说话的方式。

## 温柔模式是什么样的

温柔模式下，回应会更慢、更软。它多用“我听到你了”“这确实不容易”这类句式，先接住情绪，再慢慢说别的。它不会急着给你建议，除非你问。

适合：深夜、难过的时候、刚失去某个人没多久的时候。

## 直接模式是什么样的

直接模式下，回应更短、更实。它少铺垫，直接给观点：“你现在这样想也没错，但还有另一个角度。”它默认你此刻想要的是清醒，不是安慰。

适合：白天、想要行动建议的时候、已经难过了一段时间、想被拉一把的时候。

## 怎么调：设置里三秒搞定

打开设置，找到“回应语气”，在“更温柔”和“更直接”之间拖一个滑杆就行。滑杆中间是默认值，两端的差别在几次对话里就能明显感觉到。

随时可以改，改了立即生效，不影响你写下的任何内容。语气只是对话的滤镜，不是记忆的一部分。

## 温柔不是敷衍，直接不是冷

一个常见的误会：温柔模式=机器人式安抚，直接模式=冷冰冰。其实两者都在认真对待你，只是路径不同。温柔是把情绪放前面，直接是把事实放前面。你需要哪个，就用哪个。

**调语气会影响我写的内容吗？** 不会。语气只影响 AI 怎么回应你，你写下的每一个字都原样保留，不会被改写或分析。

**哪个模式更好？** 没有更好，只有更适合当下。建议白天直接、晚上温柔，或者按心情随时切。

**语气会变吗？** 默认值温和偏中性。你手动调过之后，就固定在你的偏好上，直到你再改。

想试试不同语气吗？打开

**[StillHere](/) 设置页，把语气调到你觉得舒服的位置，再写下今天想说的话。**`,
      faq: [],
    },
  },

  {
    slug: 'turn-on-two-factor-and-lock-your-account',
    date: '2026-08-19',
    en: {
      title: 'Turn on two-factor and lock your account',
      excerpt: 'Two-factor auth is the one setting that stops almost every account takeover. Here is how to turn it on in StillHere, what it protects, and why a private journal is worth locking down.',
      body: `<p>Most accounts get taken over not because a hacker is clever, but because a password leaked somewhere else and got reused. Two-factor authentication (2FA) closes that gap. If you keep a private journal on StillHere, turning it on is the single most useful thing you can do today.</p>
<h2>What 2FA actually blocks</h2>
<p>With 2FA on, logging in needs two things: your password and a second proof that it is really you, usually a code from an app on your phone. A leaked password alone is useless, because the attacker has no second factor. That is the whole point.</p>
<h2>How to turn it on in StillHere</h2>
<p>Open settings, find "account security," and choose two-factor authentication. StillHere will ask you to scan a QR code with an authenticator app (any standard one works), then type the six-digit code back to confirm. Save the backup codes it shows you, somewhere offline.</p>
<p>The setup takes under two minutes. After that, every new device you sign in from will ask for a code. Devices you already trust stay signed in.</p>
<h2>Why a private journal is worth locking down</h2>
<p>The things you write in StillHere are not the kind of posts you would ever want strangers reading. They are raw, personal, sometimes the only place a memory lives. A private journal like this is exactly what 2FA is for: it keeps the door closed even when the password is out there.</p>
<h2>What to do if you lose your phone</h2>
<p>This is the part people worry about. The backup codes you saved are the answer. StillHere lets you use one backup code to get back in, then you can re-enroll a new authenticator. If you did not save them, account recovery takes longer, because we cannot read your data to verify you another way.</p>
<p>The honest trade is this: 2FA adds one small step to logging in, and removes the chance that a password leak anywhere ends up exposing your private journal. For something this personal, that is an easy yes.</p>
<p>About StillHere: StillHere is a private memory companion that lets you speak with someone you have lost, in their voice, encrypted and never used for training. Visit stillherememory.com to start. To see how we keep your words yours, read <a href="/blog/private-by-design">Private by design</a> or <a href="/blog/your-words-are-not-training-data">Your words are not training data</a>.</p>`,
      faq: [
        { q: 'Does turning on 2FA log me out of my other devices?', a: 'No. Devices you are already signed in on stay signed in. Only new sign-ins will ask for a code.' },
        { q: 'What if I lose my phone and the authenticator app?', a: 'Use one of the backup codes you saved during setup to get back in, then re-enroll a new authenticator. If you skipped the backup codes, recovery takes longer because we cannot read your entries to verify you.' },
        { q: 'Is 2FA required to use StillHere?', a: 'No, it is optional, but strongly recommended for any account holding private writing. You can turn it on or off anytime in account security settings.' },
      ],
    },
    zh: {
      title: '开启两步验证，锁住账号',
      excerpt: '两步验证能挡掉几乎每一种账号被盗。这里讲清楚怎么在 StillHere 里打开它、它保护的是什么，以及为什么私密日记值得被锁好。',
      body: `<p>大多数账号被盗，不是因为黑客多聪明，而是因为密码在别处泄露、又被复用了。两步验证（2FA）正好补上这个洞。如果你在 StillHere 上写的是私密日记，今天最值得做的一件事，就是把两步验证打开。</p>
<h2>两步验证到底挡住了什么</h2>
<p>开了 2FA，登录就需要两样东西：你的密码，加上“真的是你”的第二重证明，通常是手机里验证 app 给的临时码。光泄露的密码没用，因为攻击者拿不到第二重。这就是它的全部意义。</p>
<h2>在 StillHere 里怎么开</h2>
<p>打开设置，找到“账号安全”，选择两步验证。StillHere 会让你用验证 app 扫一个二维码（任何标准验证器都行），再把六位码填回去确认。它会显示一组备用码，存到离线地方。</p>
<p>整个设置不到两分钟。之后，每个新设备登录都会要验证码，已经信任的设备保持登录。</p>
<h2>为什么私密日记值得锁</h2>
<p>你在 StillHere 里写的，不是那种愿意给陌生人看的内容。它们 raw、私人，有时是一段记忆唯一存放的地方。像这样的私密日记，正是 2FA 存在的理由：哪怕密码已经在外面，门也还是关着的。</p>
<h2>手机丢了怎么办</h2>
<p>这是大家最担心的部分。答案就是你存好的备用码。用其中一张就能登回来，然后重新绑定新的验证器。如果你当初没存备用码，找回会更慢，因为我们读不到你的内容来用别的方式确认是你。</p>
<p>说白了就是一笔交易：2FA 给登录多加一小步，换掉“任何地方密码泄露就暴露私密日记”的可能。对这么私人的东西，这笔买卖很好做。</p>
<p>关于 StillHere：StillHere 是一个私密记忆陪伴，让你用思念之人的方式说话，端到端加密、绝不拿去训练。访问 stillherememory.com 即可开始。想了解我们怎么把文字留给你自己，可以读 <a href="/blog/private-by-design">为私密而设计</a> 或 <a href="/blog/your-words-are-not-training-data">你的话不是训练数据</a>。</p>`,
      faq: [
        { q: '开了两步验证，其他设备会登出吗？', a: '不会。已经登录的设备保持登录，只有新的登录才会要验证码。' },
        { q: '手机丢了，验证 app 也没了怎么办？', a: '用设置时存好的备用码里的一张登回来，再重新绑定新的验证器。如果当初没存备用码，找回会更慢，因为我们读不到你的内容去用别的方式确认是你。' },
        { q: '用 StillHere 必须开两步验证吗？', a: '不是强制，但对任何存了私密写作的账号都强烈建议。你可以随时在账号安全里打开或关闭。' },
      ],
    },
  },
  {
    slug: 'set-yearly-reminder-revisit-memory',
    date: '2026-08-20',
en: {
      title: 'Set a yearly reminder to revisit a memory',
      excerpt: 'Yearly reminders help you stay connected to what matters. Here is how to set one in StillHere, why it works, and what to do when the reminder arrives.',
      body: `<p>Memory fades not because it is unimportant, but because life moves fast. A yearly reminder is a small tool that fights that drift — not by forcing you to remember everything, but by giving you a scheduled moment to return to what matters.</p>
<h2>What a yearly reminder actually does</h2>
<p>A yearly reminder is not a obligation. It is an invitation. It does not say "you must remember this perfectly." It says "this moment is worth returning to, once a year." That distinction matters, because guilt is the enemy of memory work. You remember better when you choose to, not when you feel you should.</p>
<h2>How to set one in StillHere</h2>
<p>Open StillHere and go to the memory you want to revisit. Look for the reminder option — it is usually near the memory details or in the settings menu. Set it to recur yearly on a date that feels right: the anniversary of a moment, a birthday, or simply a day you know you will be reflective. Save it. The reminder will arrive like any other notification, but the content behind it is yours.</p>
<h2>What to do when the reminder arrives</h2>
<p>When the reminder appears, do not treat it as a chore. Sit with it. Read the memory. Notice what feels different from last year — what has changed, what has stayed the same, what you had forgotten. You do not need to write anything new. Sometimes the act of reading is enough. Sometimes it is not, and that is also okay.</p>
<h2>Why this works</h2>
<p>Yearly reminders work because they respect the rhythm of grief and memory. We do not process loss in a straight line. We circle back. A scheduled reminder gives that circling a structure, so it does not depend on motivation or chance. It becomes a practice, not a project.</p>
<p>About StillHere: StillHere is a private memory companion that lets you speak with someone you have lost, in their voice, encrypted and never used for training. Visit stillherememory.com to start. To learn how we keep your words yours, read <a href="/blog/private-by-design">Private by design</a>.</p>`,
      faq: [
        { q: 'Do I have to respond to the reminder every year?', a: 'No. The reminder is an invitation, not a requirement. You can skip a year and come back later. The point is availability, not obligation.' },
        { q: 'What if I do not want to remember on that date?', a: 'You can change the date or delete the reminder at any time. The system is yours to control. If the date feels wrong, pick a different one.' },
        { q: 'Can I set reminders for multiple memories?', a: 'Yes. You can set yearly reminders for as many memories as you like. Each reminder is independent and can have its own date.' },
      ],
    },
    zh: {
      title: '设置年度提醒，重温一段记忆',
      excerpt: '年度提醒帮助你与重要的人保持联系。这里讲清楚怎么在 StillHere 里设置它、它为什么有效，以及提醒到来时该怎么做。',
      body: `<p>记忆褪色不是因为不重要，而是因为生活走得太快。年度提醒是一个小而有力的工具——它不强迫你记住一切，而是给你一个 scheduled 的时刻，回到那些值得回望的东西。</p>
<h2>年度提醒真正的作用</h2>
<p>年度提醒不是义务，是邀请。它不说"你必须完美地记住"，而是说"这一刻值得每年回来一次"。这个区别很重要，因为愧疚是记忆工作的敌人。你更愿意记起的东西，是在你选择的时候，而不是你觉得应该的时候。</p>
<h2>在 StillHere 里怎么设置</h2>
<p>打开 StillHere，进入你想重温的记忆。找到提醒选项——通常在记忆详情或设置菜单里。设置为每年重复，选一个你觉得有意义的日期：某个时刻的周年、一个生日，或者 simply 你知道自己会反思的那一天。保存。提醒会像普通通知一样到来，但背后的内容是你自己的。</p>
<h2>提醒到来时该做什么</h2>
<p>提醒出现时，不要把它当成任务。坐下来，阅读那段记忆。注意什么和去年不同——什么变了，什么没变，什么你忘记了。你不一定要写新内容。有时阅读本身就够了。有时不够，那也没关系。</p>
<h2>为什么这有效</h2>
<p>年度提醒有效，因为它尊重哀悼和记忆的节奏。我们不是在直线中处理失去的。我们是在循环中前进。一个 scheduled 的提醒给这个循环提供了结构，让它不依赖动力或运气。它成为一种 practice，不是一个 project。</p>
<p>关于 StillHere：StillHere 是一个私密记忆陪伴，让你用思念之人的方式说话，端到端加密、绝不拿去训练。访问 stillherememory.com 即可开始。想了解我们怎么把文字留给你自己，可以读 <a href="/blog/private-by-design">为私密而设计</a>。</p>`,
      faq: [
        { q: '我必须每年都对提醒做出回应吗？', a: '不用。提醒是邀请，不是要求。你可以跳过一年，之后再来。重点是可获得性，不是义务。' },
        { q: '如果那天我不想记起怎么办？', a: '你可以随时更改日期或删除提醒。系统由你控制。如果日期不对，换一个。' },
        { q: '我可以为多个记忆设置提醒吗？', a: '可以。你可以为任意数量的记忆设置年度提醒。每个提醒是独立的，可以有不同的日期。' },
      ],
    },
  },

{
    slug: 'how-long-does-capsule-stay',
    date: '2026-08-21',
    en: {
      title: 'How Long Does a Capsule Stay After You Stop Paying',
      excerpt: 'When your subscription ends, your capsule does not disappear immediately. Here is what you need to know about the grace period, archiving, and data retention.',
      body: `<p>When you stop paying for StillHere, your capsule does not disappear immediately. We understand this is a sensitive topic, so here is what you need to know.</p>
<h2>The Grace Period</h2>
<p>After your subscription ends, you have a 30-day grace period. During this time: your capsule remains accessible, you can still read and interact with your memories, and no data is deleted.</p>
<h2>After the Grace Period</h2>
<p>Once the 30 days pass: your capsule enters archived status, you can still access it by logging in, but we begin the deletion process.</p>
<h2>Data Retention Policy</h2>
<ul>
  <li>Days 1-30: Full access, no changes</li>
  <li>Days 31-60: Archived status, read-only access</li>
  <li>Days 61-90: Deletion process begins</li>
  <li>Day 90: All personal data is permanently deleted</li>
</ul>
<h2>What You Can Do</h2>
<ol>
  <li>Export your memories before your subscription ends</li>
  <li>Extend your subscription at any time to keep your capsule active</li>
  <li>Download an encrypted backup to your own device</li>
</ol>
<h2>FAQ</h2>
<p><strong>Can I reactivate my capsule after deletion?</strong> No. Once data is deleted, it cannot be recovered. Please export before your subscription ends.</p>
<p><strong>Does the encryption key get deleted too?</strong> Yes. Without the key, your data cannot be decrypted even if fragments remain.</p>
<p><strong>Can I pause my subscription instead of canceling?</strong> Yes. Pausing keeps your capsule active without charging you.</p>`,
      faq: [
        { q: 'Can I reactivate my capsule after deletion?', a: 'No. Once data is deleted, it cannot be recovered. Please export before your subscription ends.' },
        { q: 'Does the encryption key get deleted too?', a: 'Yes. Without the key, your data cannot be decrypted even if fragments remain.' },
        { q: 'Can I pause my subscription instead of canceling?', a: 'Yes. Pausing keeps your capsule active without charging you.' },
      ],
    },
    zh: {
      title: '停止付费后胶囊还能保留多久',
      excerpt: '停止支付后，您的胶囊不会立即消失。以下是关于宽限期、归档和数据保留政策的详细说明。',
      body: `<p>停止支付 StillHere 费用后，您的胶囊不会立即消失。我们理解这是敏感话题，所以以下是您需要了解的信息。</p>
<h2>宽限期</h2>
<p>订阅结束后，您有 30 天的宽限期。在此期间：您的胶囊仍可访问，您仍然可以阅读和与您的记忆互动，不会删除任何数据。</p>
<h2>宽限期之后</h2>
<p>30 天后：您的胶囊进入"归档"状态，您仍然可以通过登录访问它，但是，我们开始删除流程。</p>
<h2>数据保留政策</h2>
<ul>
  <li>第 1-30 天：完全访问，无变化</li>
  <li>第 31-60 天：归档状态，只读访问</li>
  <li>第 61-90 天：开始删除流程</li>
  <li>第 90 天：所有个人数据永久删除</li>
</ul>
<h2>您可以做什么</h2>
<ol>
  <li>在订阅结束前导出您的记忆</li>
  <li>随时延长订阅以保持胶囊活跃</li>
  <li>将加密备份下载到您的设备</li>
</ol>
<h2>常见问题</h2>
<p><strong>删除后我能重新激活胶囊吗？</strong> 不能。数据删除后无法恢复。请在订阅结束前导出。</p>
<p><strong>加密密钥也会被删除吗？</strong> 是的。没有密钥，即使有片段也无法解密您的数据。</p>
<p><strong>我可以暂停订阅而不是取消吗？</strong> 可以。暂停会保持胶囊活跃而不会收费。</p>`,
      faq: [
        { q: '删除后我能重新激活胶囊吗？', a: '不能。数据删除后无法恢复。请在订阅结束前导出。' },
        { q: '加密密钥也会被删除吗？', a: '是的。没有密钥，即使有片段也无法解密您的数据。' },
        { q: '我可以暂停订阅而不是取消吗？', a: '可以。暂停会保持胶囊活跃而不会收费。' },
      ],
    },
  },
  {
    slug: 'draft-vs-published-memory',
    date: '2026-08-22',
    en: {
      title: 'Draft vs. Published Memory: Understanding StillHere Statuses',
      excerpt: 'When you write a memory in StillHere, it can exist in two states: draft or published. Understanding the difference helps you decide when to share and when to keep private.',
      body: `<p>When you write a memory in StillHere, it can exist in two states: draft or published. Understanding the difference helps you decide when to share and when to keep private.</p>
<h2>What is a Draft?</h2>
<p>A draft is your private working space. It's where you:</p>
<ul>
  <li>Start writing without pressure</li>
  <li>Edit and revise freely</li>
  <li>Keep thoughts that aren't ready to share</li>
  <li>Test different ways to express feelings</li>
</ul>
<p>Drafts are invisible to others. Only you can see them. They don't appear in your capsule timeline until you publish.</p>
<h2>What is a Published Memory?</h2>
<p>A published memory is one you've chosen to make part of your permanent record. When published:</p>
<ul>
  <li>It appears in your capsule timeline</li>
  <li>It can be shared with selected people</li>
  <li>It becomes part of your archived story</li>
  <li>It's protected by your encryption</li>
</ul>
<p>Published memories are the ones you want to keep — for yourself, for your loved ones, or for future you.</p>
<h2>When to Keep Something as a Draft</h2>
<ul>
  <li>You're still processing emotions</li>
  <li>The memory feels incomplete</li>
  <li>You're not sure how you'll feel about it later</li>
  <li>It's too raw to share yet</li>
  <li>You want to revisit it before deciding</li>
</ul>
<h2>When to Publish</h2>
<ul>
  <li>You've reviewed it and feel at peace with it</li>
  <li>You want to preserve it for the future</li>
  <li>You're ready to share it with someone specific</li>
  <li>It feels complete and meaningful to you</li>
</ul>
<h2>The Grace Period</h2>
<p>Even after publishing, you can change your mind. Drafts and unpublished memories follow the same retention policy as published content — 90 days after subscription ends before deletion begins.</p>
<h2>FAQ</h2>
<p><strong>Can I convert a draft to published anytime?</strong> Yes. Simply click publish when you're ready.</p>
<p><strong>Do drafts count toward my storage limit?</strong> Yes. All memories, draft or published, count toward your capsule storage.</p>
<p><strong>Can others see my drafts?</strong> No. Drafts are strictly private.</p>
<p><strong>What happens to drafts if I cancel my subscription?</strong> They follow the same 90-day grace period as published memories.</p>`,
      faq: [
        { q: 'Can I convert a draft to published anytime?', a: 'Yes. Simply click publish when you\'re ready.' },
        { q: 'Do drafts count toward my storage limit?', a: 'Yes. All memories, draft or published, count toward your capsule storage.' },
        { q: 'Can others see my drafts?', a: 'No. Drafts are strictly private.' },
        { q: 'What happens to drafts if I cancel my subscription?', a: 'They follow the same 90-day grace period as published memories.' },
      ],
    },
    zh: {
      title: '草稿与已发布记忆：理解 StillHere 状态',
      excerpt: '当你在 StillHere 中撰写记忆时，它可以处于两种状态：草稿或已发布。理解区别有助于你决定何时分享、何时保持私密。',
      body: `<p>当你在 StillHere 中撰写记忆时，它可以处于两种状态：草稿或已发布。理解区别有助于你决定何时分享、何时保持私密。</p>
<h2>什么是草稿？</h2>
<p>草稿是你的私人工作空间。在这里你可以：</p>
<ul>
  <li>无压力地开始写作</li>
  <li>自由编辑和修改</li>
  <li>保留尚未准备好分享的想法</li>
  <li>尝试不同的方式表达感受</li>
</ul>
<p>草稿对其他人不可见。只有你能看到。在发布之前，它们不会出现在你的胶囊时间线中。</p>
<h2>什么是已发布记忆？</h2>
<p>已发布记忆是你选择成为永久记录一部分的记忆。发布后：</p>
<ul>
  <li>它出现在你的胶囊时间线中</li>
  <li>可以与选定的人分享</li>
  <li>成为你存档故事的一部分</li>
  <li>受你的加密保护</li>
</ul>
<p>已发布记忆是你想要保留的——为自己、为所爱之人、为未来的你。</p>
<h2>何时保持草稿状态</h2>
<ul>
  <li>你仍在处理情绪</li>
  <li>记忆感觉不完整</li>
  <li>不确定以后对此的感受</li>
  <li>太过原始，尚不能分享</li>
  <li>想在决定前重新审视</li>
</ul>
<h2>何时发布</h2>
<ul>
  <li>你已审阅过，感到安心</li>
  <li>想为未来保存它</li>
  <li>准备好与特定的人分享</li>
  <li>对你来说感觉完整且有意义</li>
</ul>
<h2>宽限期</h2>
<p>即使发布后，你也可以改变主意。草稿和未发布记忆遵循与发布内容相同的保留政策——订阅结束后 90 天开始删除。</p>
<h2>常见问题</h2>
<p><strong>我可以随时将草稿转为已发布吗？</strong> 可以。只需在你准备好时点击发布。</p>
<p><strong>草稿算入我的存储限额吗？</strong> 算。所有记忆，无论是草稿还是已发布，都计入你的胶囊存储。</p>
<p><strong>别人能看到我的草稿吗？</strong> 不能。草稿严格私密。</p>
<p><strong>如果我取消订阅，草稿会怎样？</strong> 它们遵循与已发布记忆相同的 90 天宽限期。</p>`,
      faq: [
        { q: '我可以随时将草稿转为已发布吗？', a: '可以。只需在你准备好时点击发布。' },
        { q: '草稿算入我的存储限额吗？', a: '算。所有记忆，无论是草稿还是已发布，都计入你的胶囊存储。' },
        { q: '别人能看到我的草稿吗？', a: '不能。草稿严格私密。' },
        { q: '如果我取消订阅，草稿会怎样？', a: '它们遵循与已发布记忆相同的 90 天宽限期。' },
      ],
    },
  },

  {
    slug: "stuck-use-prompt-me-feature",
    date: "2026-08-23",
    en: {
      title: "Stuck? Use the Prompt Me Feature",
      excerpt: "How the AI prompt feature helps you continue when writer's block hits.",
      body: "<h2>When Writer's Block Hits</h2><p>We've all been there — staring at a blank memory, knowing you want to write something but not knowing where to start.</p><h2>How Prompt Me Works</h2><p>Our AI prompt feature analyzes your previous memories and suggests relevant starting points. It's not a complete ghostwritten entry — it's a nudge to get you moving.</p><h2>Tips for Using Prompts</h2><ul><li>Use prompts as starting points, not final drafts</li><li>Personalize the AI suggestion with your own voice</li><li>Don't overthink — just start writing</li></ul>",
      faq: []
    },
    zh: {
      title: "卡住了？用给我提示功能",
      excerpt: "写作卡壳时，AI 提示功能如何帮你继续",
      body: "<h2>写作卡壳怎么办？</h2><p>我们都经历过——盯着空白记忆，知道想写点什么但不知从何开始。</p><h2>给我提示功能如何工作</h2><p>AI 提示功能分析你之前的记忆，建议相关的起点。这不是完整的代写——它是让你动笔的推动。</p><h2>使用提示的技巧</h2><ul><li>把提示作为起点，不是终稿</li><li>用你自己的声音个性化 AI 建议</li><li>不要过度思考——先开始写</li></ul>",
      faq: []
    }
  },

  {
    slug: "organize-memory-person-year",
    date: "2026-08-24",
    en: {
      title: "Organize Memories by Person or by Year",
      excerpt: "Two approaches to organizing your memory capsules: by person or by year. Find the system that works for you.",
      body: "<h2>Two Ways to Organize: By Person or By Year</h2><p><strong>By Person</strong><br>Group all memories related to one person together. This works well if: You have capsules for multiple people, each person has many memories, or you want to explore one relationship deeply at a time.</p><p>Pros: Clear boundaries, easy to focus on one relationship<br>Cons: Hard to see how relationships evolved over time</p><p><strong>By Year</strong><br>Group memories by when they were created or when the events happened. This works well if: You want to see how your grief changed over time, you're tracking anniversaries and milestones, or you prefer chronological storytelling.</p><p>Pros: Shows evolution, connects related events<br>Cons: Can mix memories about different people</p><h2>Combining Both Approaches</h2><p>Most users find success using both systems together: primary organization by person (separate capsules for each person), secondary organization within each capsule sorted by date or tag.</p><h2>Practical Organization Tips</h2><ul><li>Use consistent naming: Name your capsules clearly</li><li>Tag strategically: Add tags like birthday, holiday, everyday, sad, happy</li><li>Set a regular review rhythm: Once a month, look through your recent entries</li><li>Don't over-organize: If it takes more than 5 minutes to organize, simplify</li><li>Trust your intuition: If you naturally feel like organizing by year, do it</li></ul>",
      faq: [
        { q: "Can I change my organization system later?", a: "Yes. You can reorganize anytime. Most platforms let you move memories between capsules and change tags freely." },
        { q: "What if I have memories about multiple people in one entry?", a: "Tag it with all relevant people. Organization should serve you, not complicate your life." },
        { q: "Should I organize before or after creating memories?", a: "Create first, organize later. Perfectionism about organization can block the vulnerable act of sharing your grief." },
      ]
    },
    zh: {
      title: "按人或按年整理记忆",
      excerpt: "两种组织记忆胶囊的方法：按人或按年。找到适合你的系统。",
      body: "<h2>两种组织方式：按人或按年</h2><p><strong>按人</strong><br>将与一个人相关的所有记忆分组在一起。这适用于：你有多个人的胶囊、每个人都有许多记忆、或你想一次深入探索一段关系。</p><p>优点：清晰的边界，易于专注于一段关系<br>缺点：难以看到关系随时间的演变</p><p><strong>按年</strong><br>按创建时间或事件发生的时间分组记忆。这适用于：你想看到你的悲伤如何随时间变化、跟踪周年纪念和里程碑、或喜欢编年史叙事。</p><p>优点：显示演变，连接相关事件<br>缺点：可能混合关于不同人的记忆</p><h2>结合两种方法</h2><p>大多数用户发现两种系统一起使用效果最好：主要组织按人（每个人单独的胶囊），次要组织在每个胶囊内按日期或标签排序。</p><h2>实用组织技巧</h2><ul><li>使用一致命名：清晰命名你的胶囊</li><li>策略性标签：添加标签如生日、节日、日常、悲伤、快乐</li><li>设定定期回顾节奏：每月一次，查看你最近的条目</li><li>不要过度组织：如果组织花费超过 5 分钟，简化</li><li>信任你的直觉：如果你自然感觉按年组织，就做它</li></ul>",
      faq: [
        { q: "我以后可以改变组织系统吗？", a: "可以。你可以随时重新组织。大多数平台让你自由地在胶囊之间移动记忆和更改标签。" },
        { q: "如果我在一个条目中有多个人的记忆怎么办？", a: "用所有相关的人标记它。组织应该服务你，而不是复杂化你的生活。" },
        { q: "我应该在创建记忆之前还是之后组织？", a: "先创建，后组织。关于组织的完美主义可能阻碍分享你悲伤的脆弱行为。" },
      ]
    }
  },


    {
    slug: "use-voice-to-text-instead-of-typing",
    date: "2026-08-25",
    en: {
      title: "Use Voice-to-Text Instead of Typing",
      excerpt: "Voice-to-text has reached the point where it's often faster than typing.",
      body: "<h2>Why Voice-to-Text Is Worth Trying</h2><p>Most people speak at 150 words per minute. Even with pauses and corrections, voice typing can outpace average typing speed — around 40 words per minute for most people.</p><h2>The Four Reasons</h2><ul><li>Speed: dictation is 2-3x faster than typing</li><li>Accessibility: easier on hands and wrists</li><li>Natural flow: thoughts come out more fluidly when speaking</li><li>Multitasking: capture ideas while walking or cooking</li></ul><h2>A Gentle Reminder</h2><p>Voice input still needs editing. Read back what you dictated and refine it. The goal is to capture more of your thinking — not to stop writing altogether.</p>",
      faq: [
        { q: "Is voice-to-text accurate?", a: "Modern tools are 90-95% accurate for clear speech in quiet environments." },
        { q: "Can I use voice-to-text on my phone?", a: "Yes. Both iOS and Android have built-in voice typing." }
      ]
    },
    zh: {
      title: "用语音转文字，代替打字",
      excerpt: "语音转文字已经发展到通常比打字更快的程度。",
      body: "<h2>为什么值得试试语音转文字</h2><p>大多数人每分钟说 150 个字。即使算上停顿和修改，语音输入也能超过平均打字速度——大多数人每分钟约 40 个字。</p><h2>四个理由</h2><ul><li>速度：口述比打字快 2-3 倍</li><li>无障碍：对手和手腕更友好</li><li>自然流畅：说话时思路更容易连贯</li><li>多任务：走路或做饭时也能记录想法</li></ul><h2>一句温柔的提醒</h2><p>语音输入仍然需要编辑。把你口述的内容读回来再润色。目标是捕捉更多思考——而不是完全停止书写。</p>",
      faq: [
        { q: "语音转文字准确吗？", a: "在安静环境中，现代工具的清晰语音准确率可达 90-95%。" },
        { q: "可以在手机上用语音转文字吗？", a: "可以。iOS 和 Android 都内置了语音输入。" }
      ]
    }
  },
  {
    slug: "keep-private-memory-pet",
    date: "2026-08-26",
    en: {
      title: "Keep a Private Memory of a Pet",
      excerpt: "Digital memorials let you hold onto a pet's memory without sharing it with the world.",
      body: "<h2>Why Keep a Private Memorial?</h2><p>Sometimes a memory is too personal to share. A pet's final days, a quiet moment at home, a private grief — these belong to you, not to social media. StillHere lets you create a private digital memorial that only you can access.</p><h2>What You Can Keep</h2><ul><li>A written tribute with your own words</li><li>Photos that capture the moment</li><li>Private notes about what they meant to you</li><li>A date reminder for anniversaries</li></ul><h2>The Value of Privacy</h2><p>A private memorial removes the pressure to perform grief. You don't need likes or comments. You don't need to explain why you're sad. It's just you and the memory, exactly as you want it.</p><h2>When to Go Private</h2><p>Not every memorial needs to be public. Some are for family only. Some are for you alone. That's okay. StillHere respects both choices.</p><h2>A Gentle Reminder</h2><p>Keeping a private memory doesn't mean you're hiding anything. It means you're protecting something precious. The memory exists because the bond was real. That doesn't change because you choose to keep it quiet.</p>",
      faq: [
        { q: "Can anyone see my private memorial?", a: "No. Private memorials are only visible to you." },
        { q: "Can I make a memorial public later?", a: "Yes. You can change the privacy setting at any time." },
        { q: "Is there a limit to private memorials?", a: "No. You can create as many as you need." }
      ]
    },
    zh: {
      title: "为宠物保留一份私密纪念",
      excerpt: "数字纪念让你可以在不分享给世界的情况下珍藏宠物的记忆。",
      body: "<h2>为什么保留私密纪念？</h2><p>有些记忆太过私人，不适合分享。宠物生命的最后时光、家中的安静时刻、私人的悲伤——这些属于你，不属于社交媒体。StillHere 让你可以创建只有你自己能访问的私密数字纪念。</p><h2>你可以保留什么</h2><ul><li>用你自己的文字写下的纪念文</li><li>捕捉那个瞬间的照片</li><li>关于它们对你意义的私密笔记</li><li>纪念日的日期提醒</li></ul><h2>隐私的价值</h2><p>私密纪念消除了表演悲伤的压力。你不需要点赞或评论。你不需要解释为什么难过。只是你和记忆，正如你所希望的那样。</p><h2>何时选择私密</h2><p>不是每个纪念都需要公开。有些只属于家人。有些只属于你。这没关系。StillHere 尊重两种选择。</p><h2>一句温柔的提醒</h2><p>保留私密记忆并不意味着你在隐藏什么。这意味着你在保护珍贵的东西。记忆存在是因为那段羁绊是真实的。这不会因为你选择保持安静而改变。</p>",
      faq: [
        { q: "任何人都能看到我的私密纪念吗？", a: "不能。私密纪念只对你自己可见。" },
        { q: "我以后可以改成公开吗？", a: "可以。你可以随时更改隐私设置。" },
        { q: "私密纪念有限制吗？", a: "没有。你可以根据需要创建任意数量。" }
      ]
    }
  }
  ,
  {
    slug: 'neuroscience-why-we-miss-people',
    date: '2026-08-29',
    en: {
      title: 'The neuroscience of why we miss people',
      excerpt: 'Missing someone is not a weakness — it is a biological signal. Here is what your brain is doing when you feel that ache of absence.',
      body: `<h2>Why it hurts</h2><p>When you miss someone, the same brain regions light up as when you feel physical pain. The anterior cingulate cortex and the insula activate — areas that process distress. Your brain does not know the difference between social loss and physical harm. That is why grief feels like a wound.</p><h2>The attachment system</h2><p>Humans are wired for connection. The attachment system, first described by Bowlby, is what keeps us bonded to the people we love. When that bond is broken, the system goes into alert. You feel it as restlessness, searching, an urge to check your phone.</p><p>This is not a flaw. It is the same system that kept our ancestors safe in groups. Loneliness triggered the same survival pathways as hunger or thirst.</p><h2>Dopamine and anticipation</h2><p>Missing someone is partly about dopamine. When you think about the person, your brain rewards you with a hit of anticipation. Then the reward does not arrive. The gap between expectation and reality is where the ache lives.</p><p>This is why memories can be both comforting and painful. They activate the reward system, but they also remind you that the person is not there.</p><h2>What helps</h2><p>Understanding the biology does not erase the feeling, but it can reframe it. You are not broken. Your brain is doing exactly what it evolved to do: hold on to what matters.</p><p>Writing about them, keeping a private memory, or talking to someone who understands — these all help the nervous system process the loss. StillHere lets you do that privately, on your own terms.</p>`,
      faq: [
        { q: "Is missing someone a sign of weakness?", a: "No. It is a biological response, not a character flaw." },
        { q: "Why do memories feel both good and painful?", a: "The same brain reward system that makes memories comforting also highlights the absence." },
        { q: "How long does missing someone last?", a: "There is no timeline. Grief is not linear, and that is normal." },
      ]
    },
    zh: {
      title: '我们为什么会想念一个人（神经科学）',
      excerpt: '想念一个人不是软弱，而是一个生物信号。当你感到那种缺失的痛楚时，你的大脑正在做什么？',
      body: `<h2>为什么会有痛感</h2><p>当你想念一个人时，大脑中与感受肉体疼痛相同的区域会被激活。前扣带回皮层和岛叶会亮起——这些区域处理的是痛苦信号。你的大脑无法区分社交损失和身体伤害。这就是为什么悲伤感觉像一道伤口。</p><h2>依恋系统</h2><p>人类天生需要连接。博尔比最早描述的依恋系统，正是让我们与被爱的人保持纽带的那个系统。当纽带断裂，系统会进入警报状态。你感受到的那种坐立不安、不断查看手机、想要寻找的感觉，就是它在工作。</p><p>这不是缺陷。这是同样的系统让我们在群体中保持安全。孤独触发的生存路径与饥饿或口渴如出一辙。</p><h2>多巴胺与期待</h2><p>想念一个人，部分与多巴胺有关。当你想起那个人时，大脑会奖励你一阵期待感。然后奖励没有到来。期待与现实之间的落差，就是痛楚所在。</p><p>这就是为什么回忆既能带来安慰，又能带来痛苦。它们激活了奖励系统，但同时也提醒了你那个人已经不在了。</p><h2>什么能帮忙</h2><p>理解其中的生物机制并不能消除这种感觉，但它可以改变你对自己的看法。你不是脆弱的。你的大脑正在做它进化出来该做的事：抓住对你重要的东西。</p><p>写下关于他们的文字、保留一份私密记忆、或者和懂你的人谈谈——这些都能帮助神经系统处理失落。StillHere 让你在私密的空间里，以自己的方式做到这一切。</p>`,
      faq: [
        { q: '想念一个人是软弱的表现吗？', a: '不是。这是一种生物反应，不是性格缺陷。' },
        { q: '为什么回忆既能让人安慰又让人痛苦？', a: '让回忆变得舒适的同一个大脑奖励系统，也放大了缺失感。' },
        { q: '想念一个人会持续多久？', a: '没有时间表。悲伤不是线性的，这是正常的。' },
      ]
    }
  }
  ,
  {
    slug: 'when-grief-becomes-anger',
    date: '2026-09-02',
    en: {
      title: 'When Grief Becomes Anger',
      excerpt: 'Anger is one of the most common but least understood expressions of grief. Here is what angry grief means, and how to move through it without shame.',
      body: `<h2>The Anger-Grief Connection</h2><p>Grief doesn't always look like sadness. Sometimes it shows up as anger — sudden, sharp, and directed at people who loved the person you lost.</p><p>If you've ever snapped at someone during a funeral, felt resentful toward friends who seem to be "moving on," or wondered why you're so irritable all the time, you're not broken. You're grieving.</p><p>But anger serves a purpose in the grieving process:</p><p><strong>It's a protective emotion.</strong> Anger creates distance between you and the pain of loss. It's easier to be mad at someone than to feel the void they left behind.</p><p><strong>It's a sign of love.</strong> The intensity of your anger often reflects the intensity of your love. You're angry because someone important is gone, and that absence hurts.</p><p><strong>It's energy.</strong> Grief is exhausting. Anger gives you a surge of energy when you feel weakest. It can help you take action, set boundaries, or simply get through the day.</p><h2>When Anger Becomes a Problem</h2><p>Anger is healthy when it helps you process loss. It becomes problematic when:</p><ul><li>You direct it at people who didn't cause the loss</li><li>It damages relationships that could support you</li><li>You use it to avoid feeling the deeper sadness</li><li>It persists long after the initial grief has settled</li></ul><p>If your anger is isolating you or causing harm, it might be time to seek support.</p><h2>How to Navigate Angry Grief</h2><p><strong>Acknowledge it.</strong> Say out loud: "I'm angry, and that's okay." Naming the emotion reduces its power to control you.</p><p><strong>Find safe outlets.</strong> Physical exercise, writing, or talking to a therapist can channel anger productively.</p><p><strong>Communicate your needs.</strong> Tell people around you: "I'm grieving, and sometimes I get angry. It's not about you."</p><p><strong>Don't blame yourself.</strong> Anger is not a failure of grief work. It's part of the process.</p><h2>The Bigger Picture</h2><p>Grief is not linear. You won't "get over" it in stages. Some days you'll feel sad, some days angry, some days numb. All of it is normal.</p><p>Your anger is not a sign that you're not grieving properly. It's a sign that you loved deeply, and that love has nowhere to go right now.</p><p>Give it time. The anger will shift, sometimes slowly, sometimes in sudden waves. But it will change.</p><p>If this sounds familiar, you might also find it helpful to read <a href="/blog/its-not-them-and-ok">why grief can make us push people away</a>.</p>`,
      faq: []
    },
    zh: {
      title: '当悲伤变成愤怒',
      excerpt: '愤怒是悲伤最常见却最不被理解的表征之一。它意味着什么，又该如何不带羞耻地度过？',
      body: `<h2>愤怒与悲伤的联系</h2><p>悲伤并不总是看起来像悲伤。有时它表现为愤怒——突然、尖锐，并指向那些爱你失去之人的人。</p><p>如果你曾经在葬礼上对某人发火，对似乎"继续前进"的朋友感到愤恨，或想知道为什么你总是如此易怒，你不是出了问题。你在悲伤。</p><p>但愤怒在悲伤过程中自有其意义：</p><p><strong>它是一种保护性情绪。</strong> 愤怒在你与失去带来的痛苦之间拉开距离。对某人发火，总比直面他们留下的空虚容易。</p><p><strong>它是爱的标志。</strong> 你愤怒的强度，往往映射出你爱的深度。你生气，是因为一个重要的人不在了，而这份缺席让人刺痛。</p><p><strong>它是能量。</strong> 悲伤令人精疲力竭。愤怒却在你最软弱时给你一股劲。它能帮你采取行动、划清界限，或只是熬过这一天。</p><h2>当愤怒成为问题</h2><p>愤怒若能帮你处理失落，便是健康的。当以下情况出现时，它便成了问题：</p><ul><li>你把它发泄在并未造成损失的人身上</li><li>它损害了本可以支持你的关系</li><li>你用它来回避更深的悲伤</li><li>在最初的悲伤平复之后，它依然挥之不去</li></ul><p>如果你的愤怒正在孤立你或造成伤害，也许是时候寻求支持了。</p><h2>如何安放愤怒的悲伤</h2><p><strong>承认它。</strong> 大声说出："我很生气，这没关系。" 为情绪命名，就削弱了它掌控你的力量。</p><p><strong>寻找安全的出口。</strong> 体育锻炼、书写，或与治疗师交谈，都能有建设性地疏导愤怒。</p><p><strong>表达你的需要。</strong> 告诉身边人："我在悲伤，有时我会生气。这和你无关。"</p><p><strong>不要责怪自己。</strong> 愤怒不是悲伤"做得不好"的证明，它是过程的一部分。</p><h2>更大的图景</h2><p>悲伤不是线性的。你不会在几个"阶段"里"走出来"。有些日子你悲伤，有些日子你愤怒，有些日子你麻木。这一切都正常。</p><p>你的愤怒并不意味着你悲伤得"不对"。它意味着你曾爱得深沉，而这份爱此刻无处安放。</p><p>给它时间。愤怒会改变，有时缓慢，有时如突来的浪潮。但它终会变。</p><p>如果这说中了你，也许你也会想读读 <a href="/blog/its-not-them-and-ok">为什么悲伤会让我们把人推开</a>。</p>`,
      faq: []
    }
  },
  {
    slug: 'writing-to-someone-who-cant-reply',
    date: '2026-09-03',
    en: {
      title: "Writing to someone who can't reply",
      excerpt: "Writing to someone who can't reply won't bring them back. Here are specific ways to start, what to do when you stall, and how to keep the letter afterward.",
      body: `<h2>You don't write to be answered</h2><p>The first thing to say, plainly: a letter to someone who can't reply will not shrink the loss. It will not bring them back, and it will not tie the loose ends you keep replaying. If you came for relief, you may not find it — not in the form you hoped for. People write these letters anyway, because the words are already inside them and they need somewhere to go that isn't your own head at 2 a.m.</p><h2>Start with one true sentence</h2><p>You don't need a greeting. You don't need "Dear." You can open with the thing you actually keep thinking, even if it sounds small: "I still set the table for two." "The dog waited by the door for a week." "I forgot your voice on the third day and I hated myself for it." A true sentence, not a polished one, is the only opening that holds.</p><p>If nothing comes, write the date and the weather. Write what you ate. The hand warms up. The real sentence usually arrives by the third or fourth line, once you stop performing for an audience that isn't there.</p><h2>What to do when you stall</h2><p>Most letters die in the middle, where you run out of things you're allowed to say. Three ways through it:</p><ul><li>Move from events to physical facts. "Your coat still smells like your shampoo" carries more weight than a summary of the year.</li><li>Write the angry part. Tell them you're furious they left, or furious about what they did. The unsaid angry letter is the one that curdles and turns sour.</li><li>Write the ordinary. "The mortgage, the plant you watered, the show we watched" — the boring details are often what you miss most, and they are the easiest to get down.</li></ul><p>If you still can't, stop. Leave it open. Come back in two days. A letter written across three sittings is still one letter.</p><h2>What to do with it after</h2><p>The letter is not a message to send, and that is the whole point. You have four honest options:</p><ul><li>Keep it. Save the file, or fold the paper into the book they lent you. Knowing it exists is sometimes enough.</li><li>Seal it. Put it in an envelope, undated, in a drawer. You are not required to read it again.</li><li>Burn or bury it. Some people need the physical act of letting go. Do it somewhere safe, and don't film it for anyone.</li><li>Keep it private and lasting. On StillHere you can hold it as a private memory only you can open — not a post, not a performance for strangers.</li></ul><p>None of these is more correct than another. The mistake is treating the letter like a task to finish. It isn't. It is a place the feeling can sit until you're ready to leave it.</p><h2>If you're writing to someone who hurt you</h2><p>Not every letter goes to a loved one. Some go to a parent who was cruel, a friend who disappeared, a version of yourself you've left behind. The same rules hold, with one addition: you are allowed to write the unkind sentences. The page does not owe them gentleness. A letter you'd be ashamed to show anyone can still be the one that finally lets you put the matter down.</p><h2>A harder truth about timing</h2><p>You may write it and feel worse for an hour afterward. That doesn't mean it failed. Some feelings get louder before they get manageable, and a letter can be the thing that lets them speak instead of staying stuck under the surface. Write another next month, to the same person, with a different sentence. The willingness to return to it is the part that matters. You are not behind, and there is no right amount.</p><p>About StillHere: stillherememory.com is a quiet place to keep what you want to say to someone who's gone — private, openable only by you. If you haven't started, read <a href="/blog/what-to-say-first">what to write first</a>, <a href="/blog/keep-them-by-remembering">keeping them by remembering</a>, or <a href="/blog/talking-with-someone-who-is-gone">talking with someone who is gone</a>.</p>`,
      faq: [
        { q: "Do I have to send the letter?", a: "No. These letters are not messages. Keep them, seal them, or let them go — sending is never required." },
        { q: "What if I cannot find the first line?", a: "Write the date, the weather, what you ate. The hand warms up and the real sentence arrives once you stop performing." },
        { q: "Is it normal to feel worse after writing?", a: "Sometimes. Feeling louder before it gets manageable is common. The letter lets it speak instead of staying stuck." }
      ]
    },
    zh: {
      title: '给无法回复的人写信',
      excerpt: '给无法回复的人写信，不会把人带回来。这里有几个具体的开头、卡住时怎么继续，以及写完之后如何处置这封信。',
      body: `<h2>你写信，不是为了收到回信</h2><p>先说一句实话：给无法回复的人写信，不会让失去变小。它不会把人带回来，也不会把你反复回放的那些未了之事补齐。如果你是想求一个解脱，未必能得到——至少不是你想象中的那种。可人还是会写，因为那些话已经在心里，需要一个去处，而不是凌晨两点在自己的脑子里打转。</p><h2>从一句真话开始</h2><p>你不必写称呼，不必写"亲爱的"。你可以用那句一直盘旋的话开头，哪怕听起来很小："我还是会摆两副碗筷。""狗在门口守了一个星期。""第三天我就忘了你的声音，我恨自己这样。"一句真话，而不是漂亮话，才是唯一立得住的开头。</p><p>如果什么也写不出，就先写日期和天气，写你吃了什么。手会暖起来。真正的那句，通常在你不再对着一个并不在场的观众表演时，第三四行才出现。</p><h2>卡住的时候怎么办</h2><p>大多数信死在中间——那里你写完了所有"被允许说"的话。三条走过去的路：</p><ul><li>从事件转到具体的物。比起一年的总结，"你的外套还有你洗发水的味道"分量更重。</li><li>把生气的部分写出来。告诉他们你气他们走了，或者气他们做过的事。那封没说出口的怒气信，最容易发酵变味。</li><li>写那些平常事。"房贷、你浇的那盆花、我们一起看的剧"——最无聊的细节往往最让你想念，也最容易下笔。</li></ul><p>如果还是写不出，就停下，留着不结尾，过两天再来。分三次写完的信，也还是一封信。</p><h2>写完之后怎么处置</h2><p>这封信不是要寄出的消息，这一点才是关键。你有四种诚实的处置：</p><ul><li>留着。存成文件，或者折进他们借你的那本书里。知道它存在，有时就够了。</li><li>封存。装进信封，不写日期，放进抽屉。你不一定要再读它。</li><li>烧掉或埋掉。有些人需要"放手"这个具体的动作。在安全的地方做，别拍给任何人看。</li><li>私密地留存。在 StillHere，你可以把它作为只有自己能打开的私密记忆留下——不是动态，不是给陌生人看的表演。</li></ul><p>这些没有哪个更"正确"。错的是把这封信当成一项要完成的任务。它不是。它是那种情绪可以暂时安坐的地方，直到你愿意放下。</p><h2>如果你写的是伤害过你的人</h2><p>不是每封信都写给所爱的人。有些写给残忍过的父母、消失的朋友、被你抛下的那个自己。规则一样，只多一条：你被允许写那些不善良的句子。纸不欠他们温柔。一封你羞于给任何人看的信，也可能正是那封终于让你放下的信。</p><h2>关于时间的更难真相</h2><p>你可能写完之后反而难受了一个小时。这不代表它失败了。有些情绪是先变响、才变得能对付的；一封信能让它们说出来，而不是闷在表面之下。下个月再写一封，写给同一个人，换一句不同的话。愿意回来写，才是要紧的部分。你没有落后，也没有"该写多少"的标准。</p><p>关于 StillHere：stillherememory.com 是一个让你把想对已经离开的人说的话安静留下的地方，只有你能打开。如果还没动笔，可以看看 <a href="/blog/what-to-say-first">第一次该写什么</a>、<a href="/blog/keep-them-by-remembering">用记忆留住他们</a>，或 <a href="/blog/talking-with-someone-who-is-gone">和已经离开的人说话</a>。</p>`,
      faq: [
        { q: '信一定要寄出去吗？', a: '不用。这些信不是消息。留着、封存，或放手都行——寄出从来不是必须的。' },
        { q: '如果第一句怎么也写不出？', a: '先写日期、天气、你吃了什么。手会暖起来，等你不再表演，真正的那句就来了。' },
        { q: '写完反而更难受正常吗？', a: '有时会。先变响、才变得能对付，这很常见。信是让情绪说出来，而不是闷着。' }
      ]
    },
  },
  {
    slug: 'the-empty-chair-at-the-dinner-table',
    date: '2026-09-04',
    en: {
      title: 'The empty chair at the dinner table',
      excerpt: 'When someone is gone, the empty chair at the dinner table can take up more room than the people present. A few quiet ways to let the seat belong.',
      body: `<h2>Why that chair takes up so much room</h2>
<p>The empty chair at the dinner table is not really about the chair. It is about the person who used to fill it, the noise they brought, the way the room balanced when they were in it. On an ordinary evening the gap is easy to ignore. On a holiday, or a birthday, or the first meal after the funeral, it widens until no one knows where to look.</p>
<h2>What people say, and what actually helps</h2>
<p>Well-meaning guests reach for fixes. "At least you have each other." "He wouldn't want you sad." These land as instructions to hurry up, and they rarely fit the shape of the loss. What tends to help more is small and unforced: naming the person once, out loud, without a speech. A story about the time they burned the rice. The chair they always claimed by the window. The loss does not need solving. It needs to be allowed to sit at the table too.</p>
<h2>Small ways to let the seat belong</h2>
<ul>
<li>Set the chair, or leave it empty on purpose, and let that be a quiet yes rather than a thing to explain.</li>
<li>Put something of theirs where they used to sit, a mug, a book, a card. Not as a shrine, just as a hello.</li>
<li>Open one story. Not a eulogy, just the odd detail nobody else would remember.</li>
<li>Let a child ask, and answer simply. Kids handle an empty chair better when the adults do not pretend it is not there.</li>
</ul>
<h2>When the holiday is yours alone</h2>
<p>Some of us eat that meal with no one across from us. The chair is empty because the whole table is ours, and the silence is its own kind of company. On those nights it can help to write the thing you would have said out loud, or to keep a private memory of them somewhere only you can open. You are not performing grief for an audience. You are just keeping the seat warm in your own way.</p>
<p>If the empty chair is hard to carry alone, you might find it steadier to read <a href="/blog/talking-with-someone-who-is-gone">talking with someone who is gone</a>, or <a href="/blog/what-to-say-first">what to write first</a>, or <a href="/blog/keep-them-by-remembering">keeping them by remembering</a>. StillHere is a quiet place at stillherememory.com to hold what you want to say to someone who is no longer at the table, openable only by you.</p>`,
      faq: [
        { q: 'Should we set a place for the person who died?', a: 'Only if it helps. Some families find comfort in leaving the seat; others find it too sharp. There is no right answer, only the one that fits your table.' },
        { q: 'How do I help a child with the empty chair?', a: 'Answer simply and let the gap be real. Children cope better when adults name the loss instead of hiding it.' },
        { q: 'Is it normal to feel the loss more on holidays?', a: 'Yes. Meals are where a person absence is most physical. The feeling eases and returns, and both are ordinary.' },
      ]
    },
    zh: {
      title: '饭桌上的那把空椅子',
      excerpt: '有人离开后，饭桌上的那把空椅子，往往比在座的人占去更多位置。几个安静的办法，让那把椅子有处安放。',
      body: `<h2>为什么那把椅子占了那么多位置</h2>
<p>饭桌上的空椅子，其实不在椅子本身。它在那个曾经坐满它的人，在ta带来的吵闹，在ta在时房间那种平衡。平常的晚上，那道空隙容易被忽略。到了节日、生日，或葬礼后的第一餐，它就拓宽，宽到没人知道该把目光放哪儿。</p>
<h2>人们怎么说，什么才真的有用</h2>
<p>好心的客人是来"解决"的。"好在你们还有彼此。""ta肯定不希望你难过。"这些话听来像在催你快点好，很少贴合失落的形状。更常有用的，是细小而不刻意的：把那个人名字念出声一次，不用致辞。一段ta烧糊米饭的故事。ta总占着的靠窗那把椅子。失落不需要被解决，它需要被允许也坐在桌上。</p>
<h2>让那把椅子有处安放的小办法</h2>
<ul>
<li>摆上那把椅子，或者故意留空，让这成为一个安静的"是"，而不是一件要解释的事。</li>
<li>在他们常坐的地方放点什么，一个杯子、一本书、一张卡片。不是祭坛，只是一次打招呼。</li>
<li>讲一个故事。不是悼词，只是别人不会记得的那个奇怪细节。</li>
<li>让孩子问，简单地答。大人若不假装椅子不在，孩子反而更接得住那道空。</li>
</ul>
<h2>当这个节只剩你一个人过</h2>
<p>我们有人那餐饭桌对面空无一人。椅子空着，因为整张桌子都是自己的，而安静本身就是一种陪伴。这样的夜里，把想说出口的话写下来会有帮助，或者把关于他们的私密记忆留在只有自己能打开的地方。你不是在给谁表演悲伤，只是用自己的方式，替那把椅子留着暖。</p>
<p>如果那把空椅子一个人扛着太沉，读读 <a href="/blog/talking-with-someone-who-is-gone">和已经离开的人说话</a>、<a href="/blog/what-to-say-first">第一次该写什么</a>，或 <a href="/blog/keep-them-by-remembering">用记忆留住他们</a>，或许会稳一些。StillHere 是 stillherememory.com 上一个安静的地方，用来安放你想对那个不再上桌的人说的话，只有你能打开。</p>`,
      faq: [
        { q: '该不该给离开的人摆一副碗筷？', a: '只有当你觉得舒服才摆。有些家庭留着座位感到安慰，有些觉得太刺眼。没有标准答案，只有适合你这张桌子的那个。' },
        { q: '怎么帮孩子面对那把空椅子？', a: '简单地答，让空隙成为真实。大人若直呼失落、而非藏起它，孩子反而更接得住。' },
        { q: '节日里更觉得失落，正常吗？', a: '正常。饭桌是那个人缺席最具体的地方。感觉会来也会退，两种都平常。' },
      ]
    }
  },
  {
    slug: 'talking-on-their-birthday-years-later',
    date: '2026-09-06',
    en: {
      title: 'Talking to a parent on their birthday, years later',
      excerpt: 'Years after a parent is gone, their birthday can land harder than the anniversary of their death. A quiet note on what to say, and how to say it, when no one is there to answer.',
      body: `<h2>Why the birthday can hit harder than the death day</h2>
<p>The anniversary of a death gets marked, almost by ritual. A parent's birthday arrives quietly, with no card to buy and no one expecting a call. Years later that silence is its own weight. You reach for the phone out of habit, then remember. The person who taught you to blow out candles is not on the other end, and the day that used to be about them now belongs to the gap.</p>
<h2>What to say when no one answers</h2>
<p>You do not need a speech. You need the small, specific things: the way they overcooked the noodles, the song they hummed, the advice you only now understand. Say it out loud if you are alone, or write it where only you can open it. The point is not to be heard. It is to keep the person shaped, instead of letting the date flatten them into a mark on a calendar.</p>
<h2>A few ways the day can hold them</h2>
<ul>
<li>Light a candle, or make the dish they loved, without turning it into a performance.</li>
<li>Write the sentence you would have said on the phone, and let it stay.</li>
<li>Visit a place they liked, or just sit with the memory for the length of one cup of tea.</li>
<li>Share one story with a sibling or a child, the odd detail nobody else would keep.</li>
</ul>
<h2>If the day is yours alone</h2>
<p>Some birthdays you spend with no one across from you. That is allowed. On those mornings it can steady you to read <a href="/blog/talking-with-someone-who-is-gone">talking with someone who is gone</a>, or <a href="/blog/what-to-say-first">what to write first</a>. StillHere is a quiet place at stillherememory.com to hold what you want to say to a parent who is no longer there to hear it, openable only by you.</p>`,
      faq: [
        { q: 'Is it normal to feel worse on a parent\'s birthday than on the day they died?', a: 'Yes. The death day gets ritual and company; the birthday arrives alone. The quiet can weigh more because no one expects anything of you, and there is no script.' },
        { q: 'What should I do on my late parent\'s birthday?', a: 'Whatever fits. Some cook the favorite meal, some write a note, some do nothing but remember. There is no right observance, only the one that feels true to them.' },
        { q: 'Can I still talk to them even years later?', a: 'Of course. Talking, writing, or simply sitting with the memory is a way to keep the relationship present. StillHere gives that a private, steady place.' },
      ]
    },
    zh: {
      title: '多年后，在父母生日那天说话',
      excerpt: '父母离开多年后，他们的生日有时比忌日更沉。几句安静的话，关于在那一天该说什么、又该怎么说，当没有人能回答。',
      body: `<h2>为什么生日可能比忌日更沉</h2>
<p>忌日有仪式，几乎会被记起。父母的生日却悄悄来，没有卡片要买，也没人等着你打电话。多年以后，那片安静本身就是重量。你习惯性地伸手拿手机，然后想起。那个教你吹蜡烛的人不在另一端，而本属于ta的日子，如今属于那道空。</p>
<h2>没有回答时，该说什么</h2>
<p>你不需要致辞。你要的是细小而具体的东西：ta把面条煮过头的方式，ta哼过的歌，你到现在才懂的叮嘱。独处时就念出声，或者写在一个只有你能打开的地方。重点不在被听见，而在让那个人保持形状，而不是让日期把ta压平成一个日历上的数字。</p>
<h2>让那一天安放他们的几种方式</h2>
<ul>
<li>点一支蜡烛，或做一道ta爱吃的菜，别把它变成表演。</li>
<li>写下你本会在电话里说的那句话，让它留在那儿。</li>
<li>去一个ta喜欢的地方，或者只是就着一杯茶，和记忆坐一会儿。</li>
<li>和兄弟姐妹或孩子讲一个故事，那个别人不会记得的奇怪细节。</li>
</ul>
<h2>当这一天只剩你一个人</h2>
<p>有些生日你桌对面空无一人，那也OK。那样的早晨，读读 <a href="/blog/talking-with-someone-who-is-gone">和已经离开的人说话</a>、<a href="/blog/what-to-say-first">第一次该写什么</a>，或许会稳一些。StillHere 是 stillherememory.com 上一个安静的地方，用来安放你想对那个不再能听见你的父母说的话，只有你能打开。</p>`,
      faq: [
        { q: '在父母生日那天比忌日更难受，正常吗？', a: '正常。忌日有仪式也有人陪，生日却是独自来的。那片安静更沉，因为没人向你期待什么，也没有剧本。' },
        { q: '我该在离世父母的生日做点什么？', a: '顺你心意。有人做那道爱吃的菜，有人写句话，有人只是记得。没有标准仪式，只有贴合ta的那个。' },
        { q: '多年以后还能跟他们说话吗？', a: '当然。说话、写字，或者只是和记忆坐一会儿，都是让这段关系仍在的方式。StillHere 给这份想念一个私密而安稳的所在。' },
      ]
    }
  },
  {
    slug: 'guilt-about-moving-on',
    date: '2026-09-11',
    en: {
      title: 'Guilt About Moving On: Why It Shows Up and What to Do With It',
      excerpt: 'Moving on is not forgetting. Here is why guilt shows up exactly when life starts to feel lighter, and three things that actually help.',
      body: `<p>There is a specific kind of guilt that shows up not when you are stuck in grief, but when you start to move. You laugh at something and then feel bad. You have a good week and then feel like you have betrayed someone.</p>
<p>It helps to name what is actually happening. Moving on is not forgetting. It is not ranking the person lower. It is your life reorganising itself around a loss that does not go away — and that reorganisation feels like a betrayal only because love was the thing holding you still.</p>
<h3>Where the guilt actually comes from</h3>
<p>Most of it is a mistaken equation: rest = loyalty, movement = leaving. Grief taught you that staying close to the pain was a way of staying close to them. So any ease feels like distance.</p>
<p>The second source is simpler and harder to admit: other people are watching. If you are the one who is still sad, moving on means giving up a role that has become part of how you are seen.</p>
<h3>What moving on is not</h3>
<p>It is not a deadline. It is not closure, which is a word borrowed from paperwork and does not describe how this works. It is not a single decision you make once.</p>
<h3>Three things that actually help</h3>
<p><strong>Give the guilt a name when it arrives.</strong> Not "I feel awful" but "this is the loyalty reflex". Naming it turns a flood into a signal you can look at.</p>
<p><strong>Keep a deliberate thread.</strong> A ritual, a date, a photo that stays up. When you know the connection has a place, moving forward stops feeling like abandoning it.</p>
<p><strong>Write to them, not about them.</strong> Speaking directly, in the present tense, keeps the relationship in your life instead of in your past.</p>
<h3>If someone you love is the one moving</h3>
<p>Do not tell them it is time. Tell them you are glad to see them laugh. That sentence does more than any timeline.</p>
<h3>FAQ</h3>
<p><strong>Does moving on mean the grief is over?</strong> No. It means the grief has stopped being the only thing your days are built around.</p>
<p><strong>Why does a good day feel worse than a bad one?</strong> Because a bad day matches the grief. A good day breaks the pattern, and the break itself is what startles you.</p>
<p><strong>Is it disloyal to feel happy again?</strong> The people who loved you would not have wanted your happiness to end at the same time as theirs.</p>
<p>If you want somewhere to keep writing to them, Still Here is built for exactly that — a quiet place to say the things you never got to finish.</p>`,
      faq: [
            {
                  "q": "Does moving on mean the grief is over?",
                  "a": "No. It means the grief has stopped being the only thing your days are built around."
            },
            {
                  "q": "Why does a good day feel worse than a bad one?",
                  "a": "Because a bad day matches the grief. A good day breaks the pattern, and the break itself is what startles you."
            },
            {
                  "q": "Is it disloyal to feel happy again?",
                  "a": "The people who loved you would not have wanted your happiness to end at the same time as theirs."
            }
      ],
    },
    zh: {
      title: '向前走，却感到内疚',
      excerpt: '往前走不是遗忘。这篇讲清为什么内疚偏偏在你开始轻松时出现，以及真正有用的三件事。',
      body: `<p>有一种内疚，不是你卡在悲伤里的时候出现的，而是你开始往前走的时候出现的。你笑了一下，然后觉得不该笑。你这周过得不错，然后觉得自己像是背叛了谁。</p>
<p>先把它说清楚。往前走不是遗忘，也不是把那个人在心里的位置往后排。它只是你的生活开始围绕一个不会消失的失去重新排列——而这个过程之所以像背叛，只是因为爱曾经是让你停在原地的那个东西。</p>
<h3>内疚到底从哪来</h3>
<p>大部分来自一个错误的等式：停在原地等于忠诚，往前等于离开。悲伤教会你，靠近疼痛就是靠近对方。所以任何一点轻松，都会被读成距离。</p>
<p>第二个来源更简单也更难承认：有人在看着你。如果你是那个一直很伤心的人，往前走意味着放弃一个已经变成你标签的角色。</p>
<h3>往前走不是什么</h3>
<p>不是一个截止日期。不是释怀——那是从公文里借来的词，描述不了这件事。也不是你只做一次就完的决定。</p>
<h3>真正有用的三件事</h3>
<p><strong>给内疚起个名字。</strong>不是「我很难受」，而是「这是忠诚反射」。命名能把一股洪水变成你能看清楚的一个信号。</p>
<p><strong>留一条刻意的线。</strong>一个仪式、一个日子、一张一直摆着的照片。当你知道这段连接有地方安放，往前走就不再像是抛下它。</p>
<p><strong>写给ta，而不是写ta。</strong>用现在时直接说，能让这段关系留在你的生活里，而不是关在过去。</p>
<h3>如果是你爱的人正在往前走</h3>
<p>别告诉ta该走出来了。告诉ta，看到ta笑你很高兴。这一句比任何时间表都有用。</p>
<h3>常见问题</h3>
<p><strong>往前走意味着悲伤结束了吗？</strong>没有。它意味着悲伤不再是你每一天唯一围着转的东西。</p>
<p><strong>为什么好日子比坏日子更难受？</strong>因为坏日子和悲伤是匹配的。好日子打破了那个模式，而打破本身才让你惊到。</p>
<p><strong>重新感到快乐是背叛吗？</strong>爱你的人，不会希望你的快乐和他们一起结束。</p>
<p>如果你想找个地方一直写给ta，Still Here 就是为此做的——一个安静的地方，说那些你没能说完的话。</p>`,
      faq: [
            {
                  "q": "往前走意味着悲伤结束了吗？",
                  "a": "没有。它意味着悲伤不再是你每一天唯一围着转的东西。"
            },
            {
                  "q": "为什么好日子比坏日子更难受？",
                  "a": "因为坏日子和悲伤是匹配的。好日子打破了那个模式，而打破本身才让你惊到。"
            },
            {
                  "q": "重新感到快乐是背叛吗？",
                  "a": "爱你的人，不会希望你的快乐和他们一起结束。"
            }
      ],
    },
  },
  {
    slug: 'music-and-memory',
    date: '2026-09-12',
    en: {
      title: 'Music and memory: why a song undoes you',
      excerpt: 'A song triggers grief memory faster than a photograph. Here is why sound ambushes you, what to do when it lands, and why letting it finish helps.',
      body: `<p>A song triggers grief memory faster than a photograph, and it never asks first. You are in a supermarket, or a car, or a waiting room. Three notes land and a whole year rewrites itself. There is a reason sound ambushes you this way and pictures do not, and knowing the reason takes some of the jolt out of the next time it happens.</p>
<h3>Why sound reaches memory first</h3>
<p>Smell and sound sit closest to the part of the brain where emotion and memory meet. Sound arrives there without passing through the language centres that would let you argue with it. A photograph makes you think. A song makes you remember before you have decided to.</p>
<p>It is why a person can lose the ability to recognise a face and still light up at a melody. The memory was never kept in the picture. It was kept in the feeling that came with it, and the melody goes straight to the feeling.</p>
<h3>Why it is the song and not the words</h3>
<p>If the lyrics were the trigger, you could brace yourself by reading them. Usually the words are not what gets you. It is the interval, the tempo, the exact texture of that recording. A cover of the same song can leave you untouched while the original flattens you, because the version itself is part of the memory.</p>
<h3>What the body does before the mind catches up</h3>
<p>The body reacts first. Your throat tightens, your eyes sting, your breathing changes, and only afterwards do you find words for what just happened. That order is normal. It is not a sign that you are worse at this than you should be. It is simply the shape of how memory works.</p>
<h3>Things that help when a song lands</h3>
<ul>
<li><strong>Let it finish.</strong> Skipping the song does not delete the memory. It teaches you that the song is dangerous, and that makes the next meeting harder.</li>
<li><strong>Name the year, not the loss.</strong> "This is 2019" is easier to stand inside than "this is everything I have lost".</li>
<li><strong>Put it somewhere.</strong> A playlist for them, played on purpose, turns an ambush into a visit.</li>
<li><strong>Tell someone the song.</strong> Saying it out loud moves it from a private jolt to a shared fact.</li>
</ul>
<h3>If you are the one whose song it is</h3>
<p>When someone you love is undone by a song, do not reach for the skip button on their behalf. Sit with them through the chorus. If you want to say something afterwards, "I am glad you still have that" lands better than "are you okay".</p>
<p>Songs also arrive at midnight, the way they do in <a href="/blog/the-people-who-come-at-midnight">the people who come at midnight</a>. The hour and the music work on the same part of you.</p>
<h3>The song does not fade, and that is allowed</h3>
<p>People often wait for the day the song stops hurting, and read it as failure when it does not. The song is doing its job. It is holding something that mattered enough to be held. You are not trying to make the music neutral. You are learning to stand in it without being knocked over, and that is a skill you build by practice, not by waiting.</p>
<p>There are longer notes on grief and what it does to a day on the <a href="/blog">blog</a>.</p>
<h3>FAQ</h3>
<p><strong>Why does a song hit harder than a photo?</strong> Because sound reaches the emotional part of memory without passing through the thinking part first. There is nothing to argue with on the way in.</p>
<p><strong>Should I avoid the song?</strong> Avoidance makes it louder over time. Letting it play, on purpose, turns a trap into a place you can visit.</p>
<p><strong>Will it always hurt like this?</strong> The first seconds usually stay sharp. What changes is what you do with them, and how quickly you come back.</p>
<p><strong>Can I use music to remember on purpose?</strong> Yes. A playlist played on a birthday or an anniversary gives the memory a time and a place instead of letting it surprise you.</p>
<p>If you want somewhere to keep the song and the person together, Still Here is built for exactly that. stillherememory.com is a quiet place to write what the music brought back, whenever it arrives.</p>`,
      faq: [
            {
                  "q": "Why does a song hit harder than a photo?",
                  "a": "Because sound reaches the emotional part of memory without passing through the thinking part first. There is nothing to argue with on the way in."
            },
            {
                  "q": "Should I avoid the song?",
                  "a": "Avoidance makes it louder over time. Letting it play, on purpose, turns a trap into a place you can visit."
            },
            {
                  "q": "Will it always hurt like this?",
                  "a": "The first seconds usually stay sharp. What changes is what you do with them, and how quickly you come back."
            },
            {
                  "q": "Can I use music to remember on purpose?",
                  "a": "Yes. A playlist played on a birthday or an anniversary gives the memory a time and a place instead of letting it surprise you."
            }
      ],
    },
    zh: {
      title: '音乐与记忆：为什么一首歌就把你击垮',
      excerpt: '一首歌比一张照片更快唤回关于失去的记忆。这篇讲清声音为什么能偷袭你、被击中时可以做什么，以及为什么让它放完反而更好。',
      body: `<p>一首歌比一张照片更快唤回关于失去的记忆，而且从不提前问你。你在超市、在车里、在候诊室，三个音落下，整整一年就在脑子里重新排了一遍。声音能这样偷袭你、照片却做不到，是有原因的；知道这个原因，下一次被击中时会稍微好受一点。</p>
<h3>为什么声音先到记忆</h3>
<p>嗅觉和听觉离情绪与记忆交汇的那块脑区最近。声音到那里时，不必先经过语言中枢，所以你没法在半路上跟它讲道理。照片让你先想，歌让你还没决定要记得，就已经记得了。</p>
<p>所以一个人可能已经认不出熟悉的脸，却仍会在一段旋律里亮起来。记忆从来不在那张照片里，而在照片带来的感觉里，旋律走的是直达感觉的那条路。</p>
<h3>为什么是这首歌，而不是歌词</h3>
<p>如果触发点是歌词，你读一遍就能先给自己打个底。但真正击垮你的，通常不是词。是那个音程、那个速度、那个录音独有的质感。同一首歌的翻唱可能对你毫无作用，原版却让你塌下去，因为版本本身就是记忆的一部分。</p>
<h3>身体总比脑子先反应</h3>
<p>先是身体。喉咙发紧，眼睛发热，呼吸变了，然后你才找到词去说刚才发生了什么。这个顺序很正常。它不代表你处理得不好，它就是记忆本来的运作方式。</p>
<h3>被一首歌击中时可以做的几件事</h3>
<ul>
<li><strong>让它放完。</strong>跳过这首歌并不会删掉记忆。它只会教你「这首歌很危险」，于是下一次更难面对。</li>
<li><strong>说出年份，而不是失去。</strong>「这是 2019 年」比「这是我失去的一切」更容易站得住。</li>
<li><strong>给它一个位置。</strong>为他们建一个歌单，主动去听，把偷袭变成探访。</li>
<li><strong>把这首歌告诉一个人。</strong>说出来，它就从一个私人的刺痛，变成一件被分享的事实。</li>
</ul>
<h3>如果你爱的人正被这首歌击中</h3>
<p>当你在意的人被一首歌击垮，别替ta按下跳过。陪ta把副歌唱完。事后想说点什么的话，「你还留着这个，我很高兴」比「你还好吗」更接得住人。</p>
<p>歌也常在半夜来，就像<a href="/blog/the-people-who-come-at-midnight">那些在午夜到来的人</a>里写的那样。那个钟点和音乐，作用在你身上的是同一块地方。</p>
<h3>这首歌不会变淡，这也没关系</h3>
<p>很多人等着某天这首歌不再让人难受，真到那天没来，就以为自己失败。这首歌只是在干活，它托着一件值得被托住的事。你要做的不是让音乐变得中性，而是学会站在里面不被打倒，而这是一件练出来的事，不是等出来的事。</p>
<p>关于失去，以及它如何改变一整天，<a href="/blog">博客</a>里还有更多这样的记录。</p>
<h3>常见问题</h3>
<p><strong>为什么一首歌比一张照片更狠？</strong>因为声音先到情绪，再到思考。进门的路上没有东西可以跟你讲道理。</p>
<p><strong>要避开这首歌吗？</strong>回避只会让它越来越响。主动让它放完，才能把陷阱变成一个可以去的地方。</p>
<p><strong>会一直这么疼吗？</strong>开头那几秒通常一直是锐的。变的是你拿这几秒做什么，以及你多快能回来。</p>
<p><strong>可以用音乐主动去记起吗？</strong>可以。在生日或纪念日主动放一份歌单，等于给这段记忆一个时间和地点，而不是让它突然扑上来。</p>
<p>如果你想找一个地方，把这首歌和这个人放在一起，Still Here 就是为此做的。stillherememory.com 是一个安静的地方，随时可以写下音乐带回来的东西。</p>`,
      faq: [
            {
                  "q": "为什么一首歌比一张照片更狠？",
                  "a": "因为声音先到情绪，再到思考。进门的路上没有东西可以跟你讲道理。"
            },
            {
                  "q": "要避开这首歌吗？",
                  "a": "回避只会让它越来越响。主动让它放完，才能把陷阱变成一个可以去的地方。"
            },
            {
                  "q": "会一直这么疼吗？",
                  "a": "开头那几秒通常一直是锐的。变的是你拿这几秒做什么，以及你多快能回来。"
            },
            {
                  "q": "可以用音乐主动去记起吗？",
                  "a": "可以。在生日或纪念日主动放一份歌单，等于给这段记忆一个时间和地点，而不是让它突然扑上来。"
            }
      ],
    },
  },
  {
    slug: 'when-friends-stop-asking',
    date: '2026-09-09',
    en: {
      title: 'When friends stop asking how you are',
      excerpt: 'The check-ins taper off after a few weeks, and the silence can feel like being forgotten. Here is why friends pull back, what you can do about it, and why the quiet does not last.',
      body: `<h2>The check-ins taper off, and nobody warns you</h2>
<p>There is a loneliness that arrives after grief, and it keeps a schedule. The first weeks, the messages come. Food shows up, people call, someone offers to sit with you. Then the calls get shorter, the texts turn into reactions, and one day nobody asks. This is normal. It still hurts.</p>
<p>Knowing why it happens does not take the sting away, but it does take the personal edge off it. The silence is rarely about you.</p>
<h2>Why friends pull back</h2>
<p>It is usually not that they stopped caring. It is that they ran out of things they know how to say. Grief makes people uncomfortable, discomfort makes them careful, and carefulness turns into silence. They are afraid of saying the wrong thing, so they say nothing at all, and the nothing looks exactly like not caring.</p>
<p>There is a timing problem underneath it too. Your grief does not end when someone else's attention span does. Most people can hold space for a few weeks. Loss runs for years.</p>
<h2>What you can do</h2>
<p>You do not have to wait to be asked.</p>
<ul>
<li><strong>Reach out first.</strong> Waiting for others to initiate is the surest way to feel forgotten. Being the one who sends the first message is not a failure. It is upkeep.</li>
<li><strong>Ask for something specific.</strong> "Can we talk for ten minutes?" is far easier to answer than "I need support". Most people freeze at abstract needs and can meet concrete ones.</li>
<li><strong>Let people be bad at it.</strong> A friend who says the wrong thing and stays is worth more than one who says the perfect thing once and disappears.</li>
<li><strong>Find your people.</strong> Not everyone can be your support system, and that is not a verdict on the friendship. Some friends are for ordinary days. A support group, a counselor, or one person who has been through it can carry what a whole circle cannot.</li>
</ul>
<h2>On the friends who did stay</h2>
<p>Notice them. The silence gets all the attention because it is loud, but the people who kept checking in, awkwardly and imperfectly, are the ones to keep close. Tell them it mattered. Most of them have no idea they were doing anything unusual.</p>
<h2>The silence is not forever</h2>
<p>This phase passes. New people arrive, and some of them come through grief itself. Old friendships change shape and sometimes survive in a quieter form. The loneliness you feel now is real, but it is not a forecast. It does not tell you what your life will hold.</p>
<h2>FAQ</h2>
<p><strong>How long does this phase last?</strong> There is no fixed length. For some people it is months, for others a few years. The friends who stay tend to come back after the first quiet stretch, not during it.</p>
<p><strong>Is it wrong to reach out first?</strong> No. Most people are relieved, not burdened. Being honest about what you need is a kind of strength, and it gives them something they can actually do.</p>
<p><strong>What if it feels like no one cares?</strong> That feeling is worth taking seriously instead of arguing with. A support group or a counselor can hold the part friends cannot, and neither is a last resort.</p>
<p>If you want a place to put the things you would say if someone asked, StillHere is built for that. stillherememory.com is quiet, private, and open whenever the silence gets loud.</p>`,
      faq: [
            {
                  "q": "How long does this phase last?",
                  "a": "There is no fixed length. For some people it is months, for others a few years. The friends who stay tend to come back after the first quiet stretch, not during it."
            },
            {
                  "q": "Is it wrong to reach out first?",
                  "a": "No. Most people are relieved, not burdened. Being honest about what you need is a kind of strength, and it gives them something they can actually do."
            },
            {
                  "q": "What if it feels like no one cares?",
                  "a": "That feeling is worth taking seriously instead of arguing with. A support group or a counselor can hold the part friends cannot, and neither is a last resort."
            }
      ],
    },
    zh: {
      title: '当朋友不再问你近况',
      excerpt: '头几周消息不断，之后慢慢就没人问了，那种安静容易被听成被遗忘。这篇讲清朋友为什么会退后、你可以做什么，以及这段沉默为什么不会一直持续。',
      body: `<h2>问候慢慢停了，没人提醒过你会这样</h2>
<p>失去之后会来一种孤独，它有时间表。头几周，消息是不断的。有人送饭，有人打电话，有人愿意来陪你坐一会。然后电话变短，消息变成点赞，某一天，就再也没人问了。这很正常。可它照样扎人。</p>
<p>知道这是怎么回事，并不能让疼消失，但能把它从「针对我」变成「就是这样」。沉默很少是关于你的。</p>
<h2>朋友为什么会退后</h2>
<p>通常不是他们不在乎了，而是他们不知道该说什么。悲伤让人不自在，不自在让人变得谨慎，谨慎最后变成了沉默。他们怕说错话，于是干脆不说，而不说的样子，看起来和不在乎一模一样。</p>
<p>底下还有一个时间差的问题。你的悲伤不会在对方的注意力用完时结束。多数人能撑住几周的陪伴，而失去要持续几年。</p>
<h2>你可以做什么</h2>
<p>你不必等人先开口。</p>
<ul>
<li><strong>主动联系。</strong>等着别人来开头，是最容易让自己觉得被忘掉的方式。先发那条消息不是失败，是维护。</li>
<li><strong>把需求说具体。</strong>「我们能聊十分钟吗」比「我需要支持」好回答得多。抽象的需求会让人卡住，具体的请求大多数人都能接。</li>
<li><strong>容许朋友做得不好。</strong>一个说错话却留下来的人，胜过一个把话说得漂亮、只出现一次就消失的人。</li>
<li><strong>找到你的人。</strong>不是每个人都能成为你的支持系统，这不是对友情的判决。有些朋友是陪你过平常日子的。支持小组、咨询师，或者一个同样走过这段路的人，能接住一整圈人都接不住的部分。</li>
</ul>
<h2>也看看留下来的人</h2>
<p>留意他们。沉默因为响，抢走了全部注意力；但那些笨拙地、不完美地继续问你近况的人，才是该留在身边的人。告诉他们这对你有用。他们往往并不知道自己做了什么特别的事。</p>
<h2>沉默不是永恒的</h2>
<p>这个阶段会过去。新的人会出现，其中一些正是通过悲伤认识的。旧的友谊会换一种形状，有时会以更安静的方式活下来。你现在感到的孤独是真的，但它不是预言，它不告诉你往后的生活会装下什么。</p>
<h2>常见问题</h2>
<p><strong>这个阶段会持续多久？</strong>没有固定时长。有人几个月，有人几年。留下来的那些人，往往是在头一段安静过去之后才回来，而不是在安静里。</p>
<p><strong>主动联系是不是不好？</strong>不是。多数人是松了口气，不是被添了负担。把自己的需要说实话，是一种力量，也给了他们一件真的能做的事。</p>
<p><strong>如果感觉没人在乎怎么办？</strong>这种感觉值得认真对待，而不是跟它讲道理。支持小组或咨询师能接住朋友接不住的那部分，他们都不是最后的退路。</p>
<p>如果你想找一个地方，放下那些「如果有人问，你会说」的话，StillHere 就是为此做的。stillherememory.com 很安静，很私密，在沉默变得很响的时候，随时都在。</p>`,
      faq: [
            {
                  "q": "这个阶段会持续多久？",
                  "a": "没有固定时长。有人几个月，有人几年。留下来的那些人，往往是在头一段安静过去之后才回来，而不是在安静里。"
            },
            {
                  "q": "主动联系是不是不好？",
                  "a": "不是。多数人是松了口气，不是被添了负担。把自己的需要说实话，是一种力量，也给了他们一件真的能做的事。"
            },
            {
                  "q": "如果感觉没人在乎怎么办？",
                  "a": "这种感觉值得认真对待，而不是跟它讲道理。支持小组或咨询师能接住朋友接不住的那部分，他们都不是最后的退路。"
            }
      ],
    },
  },
  {
    slug: 'relief-that-comes-with-remembering',
    date: '2026-09-10',
    en: {
      title: 'The relief that comes with remembering',
      excerpt: 'Memory feels like something you hold on to, but remembering is often what lets you let go. Here is the difference between remembering and rumination, and a small practice for the harder days.',
      body: `<h2>Remembering is not the same as holding on</h2>
<p>We tend to think of memory as something we grip, something to keep tightening so nothing slips out. Sometimes the opposite is true. Remembering is what lets us let go.</p>
<h2>The paradox of grief memory</h2>
<p>When someone dies, everyone says to remember them. But remembering hurts. Every photo, every voice memo, every shared joke can work as a trigger, and the first months make memory feel like a series of small ambushes.</p>
<p>There is another side to it. When you remember someone who is gone, you are not only feeling the loss. You are confirming that they mattered, and that confirmation is where the relief lives. They existed. They were loved. That love did not leave when they did.</p>
<h2>Why remembering brings relief</h2>
<ul>
<li><strong>The connection persists.</strong> Remembering keeps the relationship alive in the only form it can take now.</li>
<li><strong>The meaning is preserved.</strong> Their story does not get erased, and you are the one keeping it.</li>
<li><strong>Love has no expiry.</strong> What you felt together is still valid, even when there is nowhere new to put it.</li>
<li><strong>You are not the only one.</strong> Other people remember them too, and that shared memory is a kind of company.</li>
</ul>
<h2>Remembering versus rumination</h2>
<p>The two can feel identical from the inside, and they lead in opposite directions.</p>
<ul>
<li><strong>Remembering:</strong> "I remember when we..." It brings warmth, gratitude, and something like peace.</li>
<li><strong>Rumination:</strong> "Why did they leave?" It brings anxiety, regret, and a loop that never closes.</li>
</ul>
<p>The difference is intention. One is a visit. The other is an interrogation. You can choose to remember with love instead of questioning the past for an answer it will not give.</p>
<h2>A simple practice</h2>
<p>When the weight of the loss comes back, try this.</p>
<ol>
<li>Close your eyes.</li>
<li>Recall one specific moment with them, not the whole story, just one moment.</li>
<li>Feel whatever comes without pushing it away.</li>
<li>Say thank you, out loud or inside.</li>
<li>Let the memory stay with you for a moment before you move on.</li>
</ol>
<p>This is not about moving on. It is about carrying forward, which is a different motion and a kinder one. There is more on that in <a href="/blog/keep-them-by-remembering">keeping them by remembering</a>.</p>
<h2>FAQ</h2>
<p><strong>Does remembering ever stop hurting?</strong> The first seconds usually stay sharp. What changes is what you do with them and how quickly you come back.</p>
<p><strong>How do I know if I am remembering or ruminating?</strong> Check where it leaves you. Warmth and gratitude mean you are visiting. Anxiety and a closed loop mean you are interrogating.</p>
<p><strong>What if no memory comes?</strong> Try a smaller door: a smell, a song, a meal they liked. Memory often arrives sideways.</p>
<p>If you want somewhere to keep the memories that matter, Still Here is built for exactly that. stillherememory.com is a quiet place to write what you remember, whenever it arrives. There are more reflections on the <a href="/blog">blog</a>, and gentler guidance in the <a href="/guides">guides</a>.</p>`,
      faq: [
            {
                  "q": "Does remembering ever stop hurting?",
                  "a": "The first seconds usually stay sharp. What changes is what you do with them and how quickly you come back."
            },
            {
                  "q": "How do I know if I am remembering or ruminating?",
                  "a": "Check where it leaves you. Warmth and gratitude mean you are visiting. Anxiety and a closed loop mean you are interrogating."
            },
            {
                  "q": "What if no memory comes?",
                  "a": "Try a smaller door: a smell, a song, a meal they liked. Memory often arrives sideways."
            }
      ],
    },
    zh: {
      title: '记得，带来的那口气松下来',
      excerpt: '记忆总像是要紧紧抓住的东西，但有时记住正是让你放下的方式。这篇讲清记住和反刍的区别，也给一个难熬时可以做的练习。',
      body: `<h2>记住，不等于攥住不放</h2>
<p>我们习惯把记忆想成一种攥紧的动作，越攥越用力，好让什么也别漏出去。有时恰好相反。记住，正是让我们放下的方式。</p>
<h2>悲伤记忆的悖论</h2>
<p>当某人去世时，所有人都在说要「记住他们」。但记住会疼。每张照片、每条语音、每个共同的玩笑都可能成为触发器，头几个月里，记忆像一连串小小的伏击。</p>
<p>它还有另一面。当你记住一个已经离开的人，你不只是在感受失去，你是在确认他们曾经重要。那口气之所以能松下来，就来自这份确认。他们存在过，他们被爱过，那份爱没有随他们一起走。</p>
<h2>为什么记住会带来那一口气</h2>
<ul>
<li><strong>连接还在。</strong>记住让这段关系以它现在唯一能有的形式继续活着。</li>
<li><strong>意义被保住了。</strong>他们的故事没有被抹去，而留住它的人是你。</li>
<li><strong>爱没有有效期。</strong>你们一起感受过的，仍然是有效的，哪怕已经没有新的地方安放它。</li>
<li><strong>你不是唯一记得的人。</strong>还有别人也记得他们，这份共同的记忆本身就是一种陪伴。</li>
</ul>
<h2>记住与反刍的区别</h2>
<p>这两件事从里面感受起来几乎一样，方向却完全相反。</p>
<ul>
<li><strong>记住：</strong>「我记得那时我们……」带来温暖、感激，和一种近似平静的东西。</li>
<li><strong>反刍：</strong>「他们为什么离开？」带来焦虑、遗憾，和一个永远合不上的循环。</li>
</ul>
<p>区别在意图。一个是探访，一个是审讯。你可以选择带着爱去记住，而不是反复审问过去，逼它给出一个它给不了的答案。</p>
<h2>一个简单的练习</h2>
<p>当失去的重量又压回来时，试试这个。</p>
<ol>
<li>闭上眼睛。</li>
<li>想起与他们有关的一个具体瞬间，不用整段故事，只要一个瞬间。</li>
<li>感受随之而来的情绪，不要把它推开。</li>
<li>说一声谢谢，出声或在心里都可以。</li>
<li>让这个记忆陪你待一会，再继续往前走。</li>
</ol>
<p>这不是关于放下，而是关于带着往前走，这是另一个方向的动作，也更温和一些。这一点在<a href="/blog/keep-them-by-remembering">用记忆留住他们</a>里讲得更细。</p>
<h2>常见问题</h2>
<p><strong>记住会有一天不再疼吗？</strong>开头那几秒通常会一直是锐的。变的是你拿这几秒做什么，以及你多快能回来。</p>
<p><strong>怎么知道自己是在记住还是反刍？</strong>看它把你留在哪里。温暖和感激，说明你在探访；焦虑和一个合不上的循环，说明你在审讯。</p>
<p><strong>如果一个记忆都想不起来怎么办？</strong>换一扇小一点的门：一种气味、一首歌、一道他们爱吃的菜。记忆常常是从侧面来的。</p>
<p>如果你想找一个地方，安放那些要紧的记忆，Still Here 就是为此做的。stillherememory.com 是一个安静的地方，随时可以写下你记得的东西，无论它什么时候回来。更多这样的记录在<a href="/blog">博客</a>，更轻的指引在<a href="/guides">指南</a>里。</p>`,
      faq: [
            {
                  "q": "记住会有一天不再疼吗？",
                  "a": "开头那几秒通常会一直是锐的。变的是你拿这几秒做什么，以及你多快能回来。"
            },
            {
                  "q": "怎么知道自己是在记住还是反刍？",
                  "a": "看它把你留在哪里。温暖和感激，说明你在探访；焦虑和一个合不上的循环，说明你在审讯。"
            },
            {
                  "q": "如果一个记忆都想不起来怎么办？",
                  "a": "换一扇小一点的门：一种气味、一首歌、一道他们爱吃的菜。记忆常常是从侧面来的。"
            }
      ],
    },
  },
{
    "slug": "supporting-a-grieving-friend",
    "date": "2026-09-14",
    "en": {
      "title": "Supporting a Grieving Friend Without Words",
      "excerpt": "When someone you love is grieving, the kindest thing is rarely a clever sentence. It is your steady presence and the small logistics you quietly remove.",
      "body": "<p>When a friend loses someone they love, most of us freeze. We want to help but fear saying the wrong thing, so we stay silent or say too much. The useful part is almost never a clever sentence or a fix. It is your steady presence and the small logistics you quietly remove. Sitting with someone, even in silence, tells them they are not carrying this alone.</p><h2>The trap of \"let me know if you need anything\"</h2><p>This sentence sounds generous, and it is meant to be. But it hands the work back to the one person who has the least energy for it. A grieving person is already making hundreds of small decisions they did not ask for. Adding one more, the decision of what to ask for and from whom, is a burden dressed as an offer. If you want to help, decide something and name it. \"I am bringing dinner Thursday\" is worth more than ten open invitations.</p><h2>Ask a small question instead of \"how are you\"</h2><p>\"How are you\" is honest but hard to answer. The only truthful reply is enormous, and most people shrink it to \"fine\" because they do not want to manage your discomfort. Try a narrow, concrete question instead. \"Did you eat today.\" \"Can I take the dog out this afternoon.\" \"Do you want company at the appointment on Friday.\" Small questions are answerable. They let your friend stay in the present moment instead of performing for you.</p><h2>Offers that actually help</h2><p>The best offers are specific and low-commitment. They do not require the grieving person to plan, host, or reciprocate. A few that tend to land:</p><ul><li>Bring a meal that reheats, and leave it without needing to be thanked at length.</li><li>Take the dog out, or walk the kids to school, for one ordinary morning.</li><li>Sit in the same room and say nothing. Read, fold laundry, exist nearby.</li><li>Drive them to the appointment, the bank, or the place they keep avoiding.</li><li>Handle one phone call they have been dreading, if they trust you with it.</li></ul><p>None of these require the right words. They require you to show up and notice what is concrete.</p><h2>What each season asks of you</h2><p>The first two weeks are loud with casseroles and visitors. Help then by catching what others miss, the trash, the inbox, the sibling who needs a call. By month three the crowd is gone and the second wave arrives. This is when grief gets quiet and heavy, and when your steady Tuesday text means the most. At the one-year mark, the world assumes they are fine. Mark the date. Send the message. Say the name. The anniversary is rarely easy, and being remembered on it is a gift.</p><h2>What not to say, and what to say instead</h2><p>A few phrases close the door instead of opening it. \"They are in a better place\" answers a question no one asked. \"Everything happens for a reason\" turns pain into a lesson. \"At least you had time\" or \"at least it was quick\" measures a loss that should not be measured. \"I know how you feel\" swaps their grief for yours. Comparing losses ranks sorrow, and no one wins. If you are unsure, say so plainly. \"I don't know what to say, but I am here\" is enough, every time.</p><h2>Staying close without burning out</h2><p>You cannot pour from an empty cup, and a friend who disappears from exhaustion helps no one. Choose one or two things you can sustain, not ten you will abandon. A standing walk, a recurring text, a monthly visit. Tell yourself the goal is not to fix the grief but to be a calm reflection of the fact that your friend is still here, still loved, still remembered. That steadiness is the help. Look after your own rest so the friendship can last past the headlines and into the long middle, where the real support lives.</p><p>If you have already said the wrong thing, repair is simple and possible. Name it briefly, without making them comfort you. \"I said something clumsy the other day and I'm sorry.\" Then return to showing up. Most grieving people are not keeping a scorecard of your words. They remember who stayed. For more on how quiet presence fits a remembering practice, see <a href=\"/blog/its-not-them-and-ok\">what this is not</a>, or browse <a href=\"/blog\">the blog</a> and <a href=\"/guides\">the guides</a>.</p><h2>FAQ</h2><p><strong>Q: What should I do in the first few days after a death.</strong> A: Take something concrete off their plate without being asked, a meal, a ride, a phone call, and resist the urge to explain the loss. Presence beats explanation.</p><p><strong>Q: Is it okay to talk about the person who died.</strong> A: Yes. Saying their name keeps them present in the room and shows you remember them too. Most people who are grieving want the person mentioned, not avoided.</p><p><strong>Q: How do I help a friend months later when others have moved on.</strong> A: Keep a small, steady rhythm. A text on a hard day, a walk, a note near the anniversary. The long middle is when quiet support matters most.</p>",
      "faq": [
        {
          "q": "What should I do in the first few days after a death",
          "a": "Take something concrete off their plate without being asked, a meal, a ride, a phone call, and resist the urge to explain the loss. Presence beats explanation."
        },
        {
          "q": "Is it okay to talk about the person who died",
          "a": "Yes. Saying their name keeps them present in the room and shows you remember them too. Most people who are grieving want the person mentioned, not avoided."
        },
        {
          "q": "How do I help a friend months later when others have moved on",
          "a": "Keep a small, steady rhythm. A text on a hard day, a walk, a note near the anniversary. The long middle is when quiet support matters most."
        }
      ]
    },
    "zh": {
      "title": "陪一个悲伤的朋友，不靠语言",
      "excerpt": "当朋友失去重要的人，我们常因怕说错话而长久地沉默，或反过来说得太多而让人更累。其实最温柔的帮助很少是一句聪明的话，也不是某个现成答案，而是你稳定的陪伴，以及你悄悄替他卸下的那些具体琐事——一顿能热好的饭、遛一次狗、一趟顺路的车、一个他一直不想拨的电话。",
      "body": "<p>朋友失去重要的人，多数人都会僵住。我们想帮忙，又怕说错话，于是沉默或说得太满。其实真正有用的很少是一句话或办法，而是你稳定的陪伴，以及你悄悄替他卸下的具体琐事。</p><h2>“有事随时找我”是一个温柔的陷阱</h2><p>这句话把力气交回最没力气的人手里。正在悲伤的人已在应付无数没主动要过的小决定，“该向谁开口”是额外负担。想帮就替他定一件事：“我周四带晚饭过来”比十句邀请实在。</p><h2>问一个小问题，而不是“你最近还好吗”</h2><p>“你最近还好吗”难答，多数人缩成“还行”。换成窄而具体的问题：“你今天吃饭了吗”“下午我帮你遛狗行吗”“周五预约陪你去吗”。小问题可答，让他留在当下。</p><h2>真正帮得上忙的，是具体的事</h2><p>最好的帮忙都具体、几乎不要求回报：带能热好的饭放下就走；遛一次狗；同屋坐着什么都不说；开车送他去预约或银行；替他拨一个拖延的电话。它们不需要你说对话，只需你出现。</p><h2>不同的阶段，需要不同的你</h2><p>头两周热闹，你补别人忽略的垃圾、邮箱。第三个月人群散了，你每周二的信息最值钱。到一年，世界当他“好了”，替他记住日子、叫出名字，被记得是礼物。</p><h2>别说这些，改说这些</h2><p>“他在更好的地方了”答了没人问的问题。“一切都是最好的安排”把痛变道理。“至少……”在称量失去。“我懂你的感受”把他的悲伤换成你的。不确定就老实说：“我不知说什么，但我在。”</p><h2>靠近，但不把自己烧干</h2><p>空杯倒不出水。选一两件能长期坚持的事，固定的散步、信息或每月探望。你不必治好悲伤，只需做一面安静的镜子，照出“他还在、仍被爱、仍被记得”。照顾好自己，让友情走进很长的中间。</p><p>若已说错话，修补很简单：简短认一下，别让他反过来安慰你，“前几天我说了句笨拙的话，抱歉”，然后继续出现。多数人不记你的话的账，只记得谁留了下来。延伸阅读：<a href=\"/blog/its-not-them-and-ok\">这篇“它不是什么”</a>、<a href=\"/blog\">博客</a>、<a href=\"/guides\">指南</a>。</p><h2>常见问题</h2><p><strong>问：头几天我该做什么。</strong> 答：不请自来替他卸下一件具体事——一顿饭、一趟车、一个电话，忍住解释失去的冲动。陪伴胜过解释。</p><p><strong>问：能提起离开的人吗。</strong> 答：能。叫出名字让他留在屋里，也说明你记得他。多数想被提起，而非被避开。</p><p><strong>问：几个月后别人走开了，怎么帮。</strong> 答：保持小而稳的节奏，难日发信息、散步、临近纪念日写纸条。安静陪伴最要紧。</p>",
      "faq": [
        {
          "q": "刚失去亲人的头几天，我该做什么",
          "a": "不请自来替他卸下一件具体的事——一顿饭、一趟车、一个电话，并且忍住想去解释这份失去的冲动。陪伴胜过解释。"
        },
        {
          "q": "可以提起那个离开的人吗",
          "a": "可以。叫出他的名字，让他留在房间里，也说明你同样记得他。多数正在悲伤的人，想被提起，而不是被避开。"
        },
        {
          "q": "几个月后别人都走开了，我该怎么帮",
          "a": "保持一个小小的、稳定的节奏。难的那天发条信息，散个步，临近纪念日写张纸条。那段很长的中间，安静的陪伴最要紧。"
        }
      ]
    }
  },
{
    "slug": "writing-quiet-therapy",
    "date": "2026-09-13",
    "en": {
      "title": "Writing as a Quiet Form of Therapy",
      "excerpt": "Writing will not make a loss smaller, but a short, regular practice can quiet the memory that keeps interrupting you. Here is how expressive writing actually works, and where it stops.",
      "body": "<h2>Why writing works when talking does not</h2>\n<p>Some mornings the words will not come out loud. You open your mouth and the sentence collapses. That is one reason many grieving people find writing easier than talking. In the 1980s, James Pennebaker ran studies where people wrote about difficult experiences for short, structured sessions. He called the pattern expressive writing: pick a topic, write continuously for a set time, do not edit. The effects were modest but real in early studies.</p>\n<p>The honest caveat matters. Later work showed the benefits are not large and not guaranteed. Writing is not a cure, and it will not make a loss smaller. What it can do is change how often the memory interrupts you. When a moment with someone lives only in your head, it keeps asking to be replayed. Putting it on paper externalises it. The unsent letter and the Still Here recording practice are the same mechanism in two forms: you move a memory out of the loop in your mind and give it a place to sit.</p>\n<p>If you want to read more about how this fits with remembering rather than replacing, see <a href=\"/blog/its-not-them-and-ok\">our piece on what this practice is not</a>.</p>\n<h2>Writing to a person versus writing about one</h2>\n<p>There are two kinds of writing, and they feel different. Journaling for insight is writing about yourself: what you noticed, what you felt, what you are learning to carry. It is useful and it can be calm. Writing to someone is different. You address the person who died. You tell them what happened this week. You ask the question you never got to ask. This second kind is the one people describe as a conversation that finally had a place to go.</p>\n<p>You do not need to decide which is correct. Many people do both on different days. The point is to notice the difference, because writing to a person tends to surface the small specifics, the phrase they used, the thing you wish they had known, and those are what you will want later.</p>\n<h2>Fifteen minutes and a timer</h2>\n<p>Waiting until you feel like writing is a trap. Grief does not announce a convenient hour. A timer removes the decision. Set it for fifteen minutes. That is long enough to get past the first stiff sentences and short enough that it does not feel like a second job. When the timer ends, stop. You can always come back tomorrow. The constraint is the kindness: a fixed block means you are not deciding all day whether to start.</p>\n<p>If fifteen minutes feels like too much on a hard day, drop to eight. The length is less important than the regularity. A short page twice a week leaves more behind than one long page you never repeat.</p>\n<h2>One memory, not the whole story</h2>\n<p>It is tempting to write the whole relationship at once, from the beginning. That is also where people get stuck, because the whole story is too big to finish and too heavy to hold. Worse, retelling the same story over and over, especially on the anniversary of a death or a birthday, can deepen the rut instead of softening it. The mind rehearses the narrative and the sadness stays sharp.</p>\n<p>Try writing toward one specific memory instead. Not the life, just the afternoon you drove somewhere with them, or the way they made tea. A single clear scene is easier to write and easier to return to. Small and exact beats large and vague almost every time.</p>\n<h2>When the page is blank, or the day is hard</h2>\n<p>Some days you sit down and have nothing to say. Start from the senses. A scent in the kitchen, a meal they cooked, a phrase they used that you still hear. Write that one thing. It does not need to become a paragraph about loss. A single concrete detail is a valid page.</p>\n<p>On a bad day, watch for the moment writing turns into interrogation: when the questions stop being gentle and start demanding why, or when you are digging for a feeling to prove you cared enough. That is the signal to stop. Writing should not become a way to punish yourself. Close the page while it is still honest, not when it has turned cold.</p>\n<p>One more thing, and it is the part people skip. Re-reading later matters more than the writing in the moment. The page you write today is for the you in three months, or next year, who needs to be reminded that the person is still here in some form. Our <a href=\"/guides\">guides</a> walk through simple ways to keep these pages where you will actually find them.</p>\n<h2>FAQ</h2>\n<p><strong>Does writing really help, or is it just a distraction?</strong> The research suggests small, real effects for many people, not a dramatic one. Think of it as a quiet practice that lowers how often a memory interrupts you, not a treatment that removes the loss.</p>\n<p><strong>How often should I write?</strong> Two or three short sessions a week is enough for most people. A timer of fifteen minutes keeps it from becoming a chore you avoid.</p>\n<p><strong>What if I cannot finish what I am writing?</strong> Stop wherever you are. Leave the sentence mid-thought if you need to. The unfinished page is still a record, and you can return to it later or not at all.</p>",
      "faq": [
        {
          "q": "Does writing really help, or is it just a distraction?",
          "a": "The research suggests small, real effects for many people, not a dramatic one. Think of it as a quiet practice that lowers how often a memory interrupts you, not a treatment that removes the loss."
        },
        {
          "q": "How often should I write?",
          "a": "Two or three short sessions a week is enough for most people. A timer of fifteen minutes keeps it from becoming a chore you avoid."
        },
        {
          "q": "What if I cannot finish what I am writing?",
          "a": "Stop wherever you are. Leave the sentence mid-thought if you need to. The unfinished page is still a record, and you can return to it later or not at all."
        }
      ]
    },
    "zh": {
      "title": "写作，作为一种安静的疗愈",
      "excerpt": "写作不会让失去变小，但短而规律的书写，能让那个不断打断你的记忆安静下来。这里说说表达性写作到底怎样起作用，以及它的边界。",
      "body": "<h2>为什么写作有时比说话更有效</h2>\n<p>有些早晨话到嘴边却说不出来，也是经历丧失的人更爱用写作的原因。彭尼贝克在八十年代让人做简短、有结构的书写，总结出表达性写作：选定话题，连续写一段固定时间，不修改。早期影响虽温和却真实。</p>\n<p>诚实说：后来研究发现好处不大，也不必然。写作不是解药，不会让失去变小，只能改变记忆打断的频率。写下来是外化，未寄出的信和 Still Here 的录音是同一机制。</p>\n<p>若想了解这与记得而非替代的关系，可读 <a href=\"/blog/its-not-them-and-ok\">我们谈这件事不是什么的那篇</a>。</p>\n<h2>写给一个人，和写关于一个人</h2>\n<p>写作有两种。为洞见的日记写给自己，平静也有用。写给某个人不同：你对着逝者说话，告诉他这周的事。第二种，是终于有了去处的对话。</p>\n<p>不必决定哪个才对。许多人不同日子两种都写。重点在觉察区别：写给一个人时，更容易浮现具体细节，他常说的那句话、你希望他知道的事，正是你日后想找回来的。</p>\n<h2>十五分钟，和一个计时器</h2>\n<p>等心情再写是陷阱。悲伤不会提前通知方便的钟点。计时器替你决定：设十五分钟，越过开头生硬几句。一响就停，明天再来。</p>\n<p>难熬的日子十五分钟太长就减到八分钟。长度不如规律。一周两页短的，胜过一页长从不重复。</p>\n<h2>写一个记忆，而不是整个故事</h2>\n<p>人总想一口气写完整段关系，这正是卡住处：故事太大写不完、太重抱不动。更麻烦的是把同一故事一遍遍重述，尤其在忌日或生日，反而把沟挖得更深，悲伤一直锋利。</p>\n<p>不如朝一个具体记忆写：某下午你和他开车去哪，或他泡茶的样子。清晰小场景更好写、更好回头读。</p>\n<h2>当空白摊在面前，或日子很难</h2>\n<p>有些日子坐下来无话可说。从感官开始：厨房的气味、他做过的菜，他常说你至今听见的那句话。就写这一件。一个具体细节，就是一页合格的纸。</p>\n<p>难熬的日子留意写作变成审问的那刻：问题不再温和，开始逼问为什么，或你为证明够在乎而挖感觉。那便是该停的信号。写作不该变惩罚自己。在还诚实时合上，而非等它变冷。</p>\n<p>常被跳过的一点：日后重读比当下写更重要。今天这页给三个月后或明年的你，那个仍要被提醒那人 still here 的你。我们的 <a href=\"/guides\">指南</a> 有简单方法，把纸页放在你真会翻到的地方。</p>\n<h2>常见问题</h2>\n<p><strong>写作真的有用吗，还是只是一种 distraction？</strong> 研究显示对许多人有微小真实影响，并非戏剧性。把它看作安静练习，降低记忆打断频率，而非消除失去的治疗。</p>\n<p><strong>我应该多久写一次？</strong> 对多数人一周两三次短书写足够。十五分钟计时器能防它变你总逃避的杂务。</p>\n<p><strong>如果写不完怎么办？</strong> 在任意处停下，需要就让句子停一半。没写完的纸仍是记录，可日后回来，也可不回。</p>",
      "faq": [
        {
          "q": "写作真的有用吗，还是只是一种 distraction？",
          "a": "研究显示对许多人有微小而真实的影响，并非戏剧性。把它看作安静的练习，降低记忆打断你的频率，而非消除失去的治疗。"
        },
        {
          "q": "我应该多久写一次？",
          "a": "对多数人，一周两三次短时间书写足够。十五分钟计时器能防止它变成你总逃避的杂务。"
        },
        {
          "q": "如果写不完怎么办？",
          "a": "在任意处停下，需要就让句子停一半。没写完的纸仍是记录，你可日后回来，也可不回。"
        }
      ]
    }
  },
  {
    slug: 'compounded-grief-when-loss-follows-loss',
    date: '2026-09-15',
    en: {
      title: 'Stacking Grief: When Loss Follows Loss',
      excerpt: 'A second loss does not arrive on rested ground. It lands on a person still carrying the first one, and that changes what support actually helps.',
      body: `<h2>A second loss lands on tired ground</h2>
<p>Most support written for grief assumes one loss with room around it. When a second loss arrives before the first has settled, the usual advice stops fitting. There is no rebuilt baseline to absorb it.</p>
<p>People in this position often describe feeling like they have lost the ability to grieve properly, as if they are doing the first loss an injustice by not finishing it. That feeling is common and it is not a failure.</p>
<h2>Why stacking is different</h2>
<ul>
<li>The first loss is still unfinished, so there is no rest between them.</li>
<li>Support networks thin out after the first loss. The people who showed up then have often gone back to normal.</li>
<li>Rituals repeat. A second funeral in a short span carries none of the structure the first one did.</li>
<li>Anniversaries cluster, so certain months become heavy for more than one reason at once.</li>
</ul>
<h2>What helps, and what does not</h2>
<p>The advice to take it one day at a time works less well here, because each day contains more than one loss. What tends to help is narrowing further rather than planning further.</p>
<p>Practical things that people in this situation report as useful:</p>
<ul>
<li>Naming the losses separately when you talk about them, instead of referring to "everything".</li>
<li>Letting the second loss be acknowledged on its own terms, even if the first one is louder.</li>
<li>Keeping one small routine that belongs to neither loss, so the day has something in it that is not grief.</li>
<li>Telling one or two people specifically what you need, rather than waiting to be asked.</li>
</ul>
<h2>On feeling numb</h2>
<p>Numbness after a second loss is not coldness. It is often what a person looks like when the system is protecting itself. It also tends to lift slowly rather than all at once.</p>
<p>If it does not lift, and especially if it comes with not eating, not sleeping, or not being able to work, that is a reason to talk to a professional. Nothing in this piece replaces that.</p>
<h2>For the people around them</h2>
<p>The most common mistake is assuming the second loss is easier because the person has practice. Grief does not work like a skill. It is usually harder, because the reserves are gone and the support has thinned.</p>
<p>What helps is showing up without needing the loss explained. Saying the name of the person who died. Doing something concrete instead of asking what to do.</p>
<h2>FAQ</h2>
<ul>
<li><strong>Does a second loss reopen the first?</strong> It often does. That is not regression. The two losses become linked in memory, which is normal.</li>
<li><strong>Is it wrong to grieve one more than the other?</strong> No. Different relationships carry different weight, and unequal grief is not a ranking of love.</li>
<li><strong>How long should this take?</strong> There is no schedule. What matters more is whether the intensity is slowly easing, not whether a date has passed.</li>
</ul>
<p>If you want to write about both losses in one place, StillHere keeps a quiet space for that. Start on the <a href="/">home page</a>, and read more reflections on the <a href="/blog">blog</a>.</p>`,
      faq: [
        { q: 'Does a second loss reopen the first?', a: 'It often does. That is not regression. The two losses become linked in memory, which is normal.' },
        { q: 'Is it wrong to grieve one more than the other?', a: 'No. Different relationships carry different weight, and unequal grief is not a ranking of love.' },
        { q: 'How long should this take?', a: 'There is no schedule. What matters more is whether the intensity is slowly easing, not whether a date has passed.' },
      ],
    },
    zh: {
      title: '悲伤叠加：当失去接二连三',
      excerpt: '第二次失去不是在休息好的土地上发生的。它落在还在背负第一次失去的人身上，这改变了什么样的支持真正有用。',
      body: `<h2>第二次失去，落在疲惫的土地上</h2>
<p>大多数关于悲伤的文字都假设只有一次失去，而且周围还有余地。当第二次失去在第一次还没落定之前到来，那些惯常建议就不适用了，因为没有一个重建好的基准去承受它。</p>
<p>处在这个位置的人常说，自己好像失去了正常悲伤的能力，好像没能把第一次悲伤完成就是在亏欠它。这种感觉很常见，它不是失败。</p>
<h2>为什么叠加起来不一样</h2>
<ul>
<li>第一次失去还没结束，两次之间没有休息。</li>
<li>支持网络在第一次之后就变薄了。当时出现的人大多已经回到各自正常的生活。</li>
<li>仪式重复。短时间内第二场告别，完全没有第一场那种结构感。</li>
<li>纪念日扎堆。某些月份会因为不止一个原因同时变得沉重。</li>
</ul>
<h2>什么有用，什么没用</h2>
<p>「一天一天来」在这里效果更差，因为每一天里都不止一件事。真正有帮助的往往是收得更窄，而不是把事情往前排。</p>
<p>处在这个处境的人提到过有用的具体做法：</p>
<ul>
<li>谈起来的时候把两次失去分开说，不要笼统说成「所有事」。</li>
<li>让第二次失去以它自己的分量被看见，哪怕第一次的声音更大。</li>
<li>保留一件不属于任何一次失去的小习惯，让一天里有东西不是悲伤。</li>
<li>直接告诉一两个人你需要什么，不要等着被问到。</li>
</ul>
<h2>关于麻木</h2>
<p>第二次失去之后的麻木不是冷漠。它通常是一个人正在自我保护时的样子。它退去的方式也往往是缓慢的，不会一次消失。</p>
<p>如果它一直不退，尤其伴随吃不下、睡不着、无法工作，那是一个去找专业人士谈一谈的理由。这篇文字不能替代那件事。</p>
<h2>给身边的人</h2>
<p>最常见的误解，是以为第二次会容易些，因为这个人已经练习过了。悲伤不是技能。第二次通常更难，因为储备已经用掉，支持也已经变薄。</p>
<p>有用的是在不要求解释的情况下出现。说出那个离开的人的名字。做一件具体的事，而不是问该做什么。</p>
<h2>常见问题</h2>
<ul>
<li><strong>第二次失去会重新撕开第一次吗？</strong> 经常会。这不是倒退。两次失去在记忆里被连在一起，是正常的。</li>
<li><strong>悲伤程度不一样是错的吗？</strong> 不是。不同的关系分量不同，悲伤有轻重不代表爱有排序。</li>
<li><strong>这个过程要多久？</strong> 没有时间表。更值得看的是强度是否在缓慢下降，而不是某个日期有没有过去。</li>
</ul>
<p>如果你想给两次失去留一个共同的位置，StillHere 提供了一个安静的空间。从<a href="/">首页</a>开始，也可以到<a href="/blog">博客</a>读更多文字。</p>`,
      faq: [
        { q: '第二次失去会重新撕开第一次吗？', a: '经常会。这不是倒退。两次失去在记忆里被连在一起，是正常的。' },
        { q: '悲伤程度不一样是错的吗？', a: '不是。不同的关系分量不同，悲伤有轻重不代表爱有排序。' },
        { q: '这个过程要多久？', a: '没有时间表。更值得看的是强度是否在缓慢下降，而不是某个日期有没有过去。' },
      ],
    },
  },
  {
    slug: 'e2e-encryption-explained',
    date: '2026-09-17',
    en: {
      title: 'End-to-End Encryption, Explained Simply',
      excerpt: 'End-to-end encryption means only you and the person you are writing to can read what is stored. Not the company, not an employee, not a subpoena against the server. Here is how it works and what it does and does not cover.',
      body: `<p>End-to-end encryption is easier to grasp than its name suggests. It means the data leaves your device already scrambled, and only the intended recipient holds the key to unscramble it. The company running the service stores the scrambled version. Even if someone copies the whole database, they get ciphertext, not your words.</p>
<h2>What it actually protects</h2>
<p>It protects the content of the messages and notes: what you wrote, to whom, in what words. It does not protect the fact that you sent something, or when, or how often. Metadata is usually visible to the provider. That distinction matters when people promise you total privacy.</p>
<h2>How the keys work</h2>
<p>Your device creates a pair of keys: a public one that others can use to encrypt to you, and a private one that never leaves your device. When you write a note, it is encrypted with a key only you hold. When you share with someone, their public key encrypts it for them. The server passes the ciphertext around; it never has the private keys.</p>
<h2>What end-to-end does not cover</h2>
<ul>
<li><strong>Device compromise:</strong> if someone has your unlocked phone, encryption does not help. The data is decrypted on your device by design.</li>
<li><strong>Metadata:</strong> who you communicate with and when can still be recorded.</li>
<li><strong>Forgotten keys:</strong> if you lose the private key and there is no recovery, the data is gone. That is the trade-off for provider-side secrecy.</li>
<li><strong>What you type into other apps:</strong> encryption only covers the app that uses it.</li>
</ul>
<h2>Why this matters for private journaling</h2>
<p>For a private memory space, end-to-end encryption changes the threat model. The provider cannot read the entries, sell them, or hand them over on request. The remaining risks are on your side of the screen: device access and key loss. A service that is honest about both gives you a realistic picture instead of a slogan.</p>
<h2>FAQ</h2>
<ul>
<li><strong>Can the company read my journal if it is end-to-end encrypted?</strong> No. It only holds the encrypted version and has no key to decrypt it.</li>
<li><strong>What happens if I lose my device?</strong> Without a recovery key, the journal stays encrypted and cannot be restored. Keep the recovery key somewhere safe.</li>
<li><strong>Does end-to-end encryption stop someone with my password?</strong> No. Whoever can unlock your device or session sees the plaintext. Treat the device as part of the secret.</li>
</ul>
<p>StillHere stores your reflections encrypted end to end, and the key stays on your device. Start on the <a href="/">home page</a>, or read more about privacy on the <a href="/blog">blog</a>.</p>`,
      faq: [
        { q: 'Can the company read my journal if it is end-to-end encrypted?', a: 'No. It only holds the encrypted version and has no key to decrypt it.' },
        { q: 'What happens if I lose my device?', a: 'Without a recovery key, the journal stays encrypted and cannot be restored. Keep the recovery key somewhere safe.' },
        { q: 'Does end-to-end encryption stop someone with my password?', a: 'No. Whoever can unlock your device or session sees the plaintext. Treat the device as part of the secret.' },
      ],
    },
    zh: {
      title: '端到端加密，通俗讲',
      excerpt: '端到端加密的意思是，只有你和对方能读到存储的内容。公司读不到、员工读不到、针对服务器调证也拿不到。这篇讲它怎么工作，以及它管不到什么。',
      body: `<h2>端到端加密保护的是什么</h2>
<p>它保护的是内容的本身：你写了什么、写给谁、用的什么词。它不保护「你发过一条消息」这个事实，也不保护发送时间和频率。这些元数据通常对服务商可见。别人把「完全隐私」挂在嘴边时，这个区别值得记住。</p>
<h2>密钥是怎么运作的</h2>
<p>你的设备会生成一对密钥：公钥给别人用来加密发给你，私钥永远留在你的设备上。写一条笔记时，它用只有你持有的密钥加密。要分享给某人时，对方的公钥负责加密。服务器只负责传递密文，它从来拿不到私钥。</p>
<h2>端到端加密管不到什么</h2>
<ul>
<li><strong>设备被入侵：</strong>如果有人拿到你已解锁的手机，加密帮不上忙。数据在你的设备上本来就是明文，这是设计使然。</li>
<li><strong>元数据：</strong>你和谁通信、什么时候通信，仍然可能被记录。</li>
<li><strong>忘记密钥：</strong>私钥丢失且没有恢复手段时，数据就没了。这是「服务商也读不到」的代价。</li>
<li><strong>你在其他 App 里输入的内容：</strong>加密只覆盖使用它的那个应用。</li>
</ul>
<h2>为什么这对私密记录很重要</h2>
<p>对一个私密记忆空间来说，端到端加密改变了威胁模型。服务商读不到内容，不能出售，也不能应要求交出。剩下的风险在屏幕这一侧：设备访问和密钥丢失。把这两点讲清楚的服务，给的是现实而非口号。</p>
<h2>常见问题</h2>
<ul>
<li><strong>端到端加密后，公司还能读我的日记吗？</strong> 不能。它只持有加密版本，没有解密的密钥。</li>
<li><strong>设备丢了怎么办？</strong> 没有恢复密钥的话，日记保持加密状态，无法找回。请把恢复密钥放在安全的地方。</li>
<li><strong>端到端加密挡得住知道我密码的人吗？</strong> 挡不住。能解锁设备或会话的人看到的就是明文。设备本身要当作秘密的一部分。</li>
</ul>
<p>StillHere 用端到端加密保存你的记录，密钥留在你的设备上。从<a href="/">首页</a>开始，或在<a href="/blog">博客</a>读更多关于隐私的文字。</p>`,
      faq: [
        { q: '端到端加密后，公司还能读我的日记吗？', a: '不能。它只持有加密版本，没有解密的密钥。' },
        { q: '设备丢了怎么办？', a: '没有恢复密钥的话，日记保持加密状态，无法找回。请把恢复密钥放在安全的地方。' },
        { q: '端到端加密挡得住知道我密码的人吗？', a: '挡不住。能解锁设备或会话的人看到的就是明文。设备本身要当作秘密的一部分。' },
      ],
    },
  },
  {
    slug: 'gdpr-and-your-right-to-your-data',
    date: '2026-09-21',
    en: {
      title: 'GDPR and your right to your data',
      excerpt:
        'The GDPR gives you specific, enforceable rights over your own data — including a right to be forgotten. Here is what those rights actually cover, and what they do not.',
      body: `<h2>What the GDPR actually gives you</h2><p>The General Data Protection Regulation is often described as a privacy law. More precisely, it is a set of rights you can exercise against anyone holding your data in the EU. There are eight of them, and most people use three.</p><h2>The rights that matter most</h2><ul><li><strong>Access.</strong> You can ask what data a company holds about you and get a copy. They have one month to respond.</li><li><strong>Erasure.</strong> Often called the right to be forgotten. It is not absolute — it does not override legal obligations to keep records.</li><li><strong>Portability.</strong> You can request your data in a machine-readable format and take it elsewhere.</li><li><strong>Rectification.</strong> If something is wrong, you can have it corrected.</li><li><strong>Objection.</strong> You can object to processing based on legitimate interest, including some profiling.</li></ul><h2>What the right to be forgotten does not cover</h2><p>Erasure requests fail more often than people expect, and usually for good reasons. A bank has to keep transaction records. A hospital has to keep clinical notes. A company may keep a record that you were a customer if it needs it to defend a legal claim.</p><p>The right applies to data that no longer has a lawful basis to be held. It is not a switch that deletes your history everywhere.</p><h2>How to actually make a request</h2><p>Write to the company's data protection contact, state which right you are exercising, and be specific about what you want. You do not need a template or a lawyer for access, rectification, or erasure requests.</p><p>Keep a copy of the request and the date. If a month passes with no substantive response, you can escalate to your national data protection authority.</p><h2>Why this matters for what you write and store</h2><p>If you write letters, journals, or memories into a hosted service, those are personal data about you, and the same rights apply. It is worth knowing which jurisdiction the service sits in and what its deletion process actually does.</p><p>For anything you would not want adjudicated by a support ticket, local-first storage is the simpler answer. See <a href='/blog/e2e-encryption-explained'>how end-to-end encryption works</a> for the version of this that does not depend on anyone's policy.</p><h2>FAQ</h2><ul><li><strong>Can I be charged for an access request?</strong> Usually no. A fee is only allowed for manifestly unfounded or excessive requests.</li><li><strong>Does the GDPR apply outside the EU?</strong> It applies to companies processing data of people in the EU, wherever the company is based.</li><li><strong>Is deletion permanent?</strong> Not always. Companies may retain data in backups for a period, and legal retention rules can override erasure.</li></ul>`,
      faq: [
        { q: 'Can a company charge me for a data access request?', a: 'Generally no. A reasonable fee is only permitted for requests that are manifestly unfounded or excessive, which usually means repeated or clearly abusive ones.' },
        { q: 'Does the right to be forgotten delete everything?', a: 'No. It removes data that no longer has a lawful basis to be held. Legal retention obligations, such as financial or medical records, override erasure requests.' },
        { q: 'How long does a company have to respond?', a: 'One month from receiving the request, extendable by two further months for complex requests, and you must be told if an extension is used.' },
        { q: 'Do I need a lawyer to make a request?', a: 'No. Access, rectification, erasure and portability requests can be made directly to the organisation by email or through their data protection contact.' },
      ],
    },
    zh: {
      title: 'GDPR，与你的数据权利',
      excerpt:
        'GDPR 赋予你对个人数据的具体、可执行的权利，包括被遗忘权。这篇讲清这些权利实际覆盖什么，以及不覆盖什么。',
      body: `<h2>GDPR 到底给了你什么</h2><p>《通用数据保护条例》常被说成一部隐私法。更准确的说法是：它给了你一组可以针对数据持有者行使的权利。一共八项，多数人真正会用到的只有三项。</p><h2>最常用的几项权利</h2><ul><li><strong>访问权。</strong>你可以询问一家公司持有哪些关于你的数据，并索取副本。对方须在一个月内答复。</li><li><strong>删除权。</strong>常被称为被遗忘权。它不是绝对的，不能压倒保留记录的法定要求。</li><li><strong>可携带权。</strong>你可以要求以机器可读格式拿到自己的数据，并带到别处。</li><li><strong>更正权。</strong>数据有误，你可以要求更正。</li><li><strong>反对权。</strong>你可以反对基于正当利益的处理，包括某些画像分析。</li></ul><h2>被遗忘权不覆盖什么</h2><p>删除请求失败的概率比多数人预想的高，而且往往有正当理由。银行必须保留交易记录，医院必须保留临床记录，公司为了应对潜在法律主张也可能保留你的客户记录。</p><p>这项权利针对的是已经失去合法依据的数据，不是一个能在所有地方抹掉你痕迹的开关。</p><h2>怎么真正提出请求</h2><p>写信给该公司的数据保护联系人，说明你要行使哪项权利，并具体说明你要什么。访问、更正、删除这三类请求不需要模板，也不需要律师。</p><p>保留请求内容和日期。一个月过去仍无实质答复，可以向本国的数据保护机构投诉升级。</p><h2>为什么这关系到你写下的东西</h2><p>如果你把信件、日记或纪念内容写进托管服务，那些同样是关于你的个人数据，同样适用上述权利。值得先弄清服务在哪个司法辖区、它的删除流程实际做了什么。</p><p>对于任何你不想拿客服工单来裁决的内容，本地优先存储是更简单的答案。不依赖任何一方政策的那套做法，见<a href='/blog/e2e-encryption-explained'>端到端加密是怎么工作的</a>。</p><h2>常见问题</h2><ul><li><strong>访问请求会被收费吗？</strong>通常不会。只有在请求明显无理或过度时才允许收费。</li><li><strong>GDPR 在欧盟以外适用吗？</strong>只要处理的是欧盟境内个人的数据，公司注册在哪里都适用。</li><li><strong>删除是永久的吗？</strong>不一定。公司可能在备份中保留一段时间，法定留存要求也可能压过删除权。</li></ul>`,
      faq: [
        { q: '数据访问请求会被收费吗？', a: '一般不会。只有在请求明显无理或明显过度，比如反复提交或明显滥用时，才允许收取合理费用。' },
        { q: '被遗忘权会删除一切吗？', a: '不会。它删除的是已经失去合法依据的数据。财务、医疗等法定留存义务会压过删除请求。' },
        { q: '公司需要多久答复？', a: '收到请求起一个月，复杂请求可再延长两个月，且必须告知你已延长。' },
        { q: '提请求需要律师吗？', a: '不需要。访问、更正、删除、可携带这几类请求，直接发邮件给机构或其数据保护联系人就够了。' },
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
