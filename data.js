/* ATL Tester — bilingual source data
   Extracted from the PDF "ATL Skills & Subskills Question Stems - Upper Primary (ver 2)".
   5 ATL categories, 31 subskills, 4–5 question stems per subskill.
   Every user-facing string carries an English and a Chinese version. */

const ATL_CATEGORIES = [
  { id: "thinking",     en: "Thinking Skills",       zh: "思维技能",
    blurbEn: "Analysing, creating and reflecting on ideas.",
    blurbZh: "分析、创造想法并反思自己的想法。" },
  { id: "social",       en: "Social Skills",          zh: "社交技能",
    blurbEn: "Working with and understanding other people.",
    blurbZh: "与人相处并理解他人。" },
  { id: "self",         en: "Self-Management Skills", zh: "自我管理技能",
    blurbEn: "Organising, staying safe and managing yourself.",
    blurbZh: "组织安排、保持安全并管理自己。" },
  { id: "communication",en: "Communication Skills",   zh: "沟通技能",
    blurbEn: "Reading, writing, speaking and listening.",
    blurbZh: "阅读、写作、口头表达与倾听。" },
  { id: "research",     en: "Research Skills",        zh: "研究技能",
    blurbEn: "Finding, recording and sharing information.",
    blurbZh: "查找、记录并分享信息。" }
];

/* Distractor skills — plausible education-related skills, only 5 of the 20 are real IB ATLs */
const DISTRACTOR_SKILLS = [
  { id: "d01", en: "Curriculum Design", zh: "课程设计",
    blurbEn: "Planning what to teach and why.", blurbZh: "规划教什么以及为什么教。" },
  { id: "d02", en: "Assessment & Evaluation", zh: "评估与评价",
    blurbEn: "Judging learning and improving practice.", blurbZh: "判断学习效果并改进教学。" },
  { id: "d03", en: "Classroom Management", zh: "课堂管理",
    blurbEn: "Keeping a class running smoothly.", blurbZh: "让课堂有序顺畅地进行。" },
  { id: "d04", en: "Differentiation", zh: "差异化教学",
    blurbEn: "Adapting teaching for different learners.", blurbZh: "针对不同学习者调整教学。" },
  { id: "d05", en: "Literacy Instruction", zh: "读写教学",
    blurbEn: "Teaching reading and writing.", blurbZh: "教阅读与写作。" },
  { id: "d06", en: "Numeracy Instruction", zh: "算术教学",
    blurbEn: "Teaching number and calculation.", blurbZh: "教数字与计算。" },
  { id: "d07", en: "Digital Literacy", zh: "数字素养",
    blurbEn: "Using technology safely and skilfully.", blurbZh: "安全且熟练地使用科技。" },
  { id: "d08", en: "Scaffolding", zh: "教学脚手架",
    blurbEn: "Breaking a task into manageable steps.", blurbZh: "把任务分解成可完成的小步骤。" },
  { id: "d09", en: "Formative Feedback", zh: "形成性反馈",
    blurbEn: "Giving comments that move learning forward.", blurbZh: "给出能推动学习前进的评语。" },
  { id: "d10", en: "Behaviour Support", zh: "行为支持",
    blurbEn: "Supporting pupils to self-regulate.", blurbZh: "帮助学生进行自我调节。" },
  { id: "d11", en: "Multilingual Education", zh: "多语言教育",
    blurbEn: "Teaching learners who speak many languages.", blurbZh: "为掌握多种语言的学习者授课。" },
  { id: "d12", en: "Science Inquiry", zh: "科学探究",
    blurbEn: "Questioning and investigating like a scientist.", blurbZh: "像科学家一样提问与探究。" },
  { id: "d13", en: "Student Voice", zh: "学生话语权",
    blurbEn: "Giving learners a say in their learning.", blurbZh: "让学习者在学习中有发言权。" },
  { id: "d14", en: "Inclusive Practice", zh: "融合式教学",
    blurbEn: "Making sure everyone can take part.", blurbZh: "确保每个人都能参与。" },
  { id: "d15", en: "Home–School Partnership", zh: "家校合作",
    blurbEn: "Working together with families.", blurbZh: "与家庭携手合作。" }
];

/* ── The 31 subskills with their question stems ─────────────────────────────
   Each stem is { en, zh } — English and Chinese versions of the same stem. */
const S = (en, zh) => ({ en, zh });

const SUBSKILLS = [
  /* ── THINKING SKILLS ── */
  { id: "critical", cat: "thinking",
    en: "Critical Thinking", zh: "批判性思维",
    descEn: "Looking carefully at information and ideas", descZh: "仔细审视信息和观点",
    stems: [
      S("What do you notice about…?", "你注意到了什么……？"),
      S("What makes you think that?", "你为什么会这样认为？"),
      S("What evidence supports this idea?", "有什么证据支持这个想法？"),
      S("Is there another way to think about this?", "还有别的思考方式吗？"),
      S("Do you agree or disagree? Why?", "你同意还是不同意？为什么？"),
      S("What is most important here?", "这里最重要的是什么？")
    ]},
  { id: "creative", cat: "thinking",
    en: "Creative Thinking", zh: "创造性思维",
    descEn: "Using imagination to make new ideas", descZh: "运用想象力创造新想法",
    stems: [
      S("What could happen if…?", "如果……会发生什么？"),
      S("Can you think of a different idea?", "你能想出一个不同的主意吗？"),
      S("How could you solve this in another way?", "你还能用别的方式解决它吗？"),
      S("What would you change?", "你会做出什么改变？"),
      S("Can you create something new from this?", "你能以此创作出新的东西吗？")
    ]},
  { id: "transfer", cat: "thinking",
    en: "Transfer of Learning", zh: "学习迁移",
    descEn: "Using what you already know in new situations", descZh: "把已有的知识运用到新情境中",
    stems: [
      S("How is this similar to something you already know?", "这和你已经知道的什么内容相似？"),
      S("Where have you seen this before?", "你以前在哪里见过类似的情况？"),
      S("How can you use this in a new situation?", "你能如何在新情境中运用它？"),
      S("How does this connect to our previous learning?", "这与我们之前的学习有什么联系？")
    ]},
  { id: "reflection", cat: "thinking",
    en: "Reflection & Metacognition", zh: "反思与元认知",
    descEn: "Thinking about your own learning and how to improve", descZh: "思考自己的学习并加以改进",
    stems: [
      S("What did you learn from this?", "你从中学到了什么？"),
      S("What helped you understand?", "什么帮助你理解了？"),
      S("What was challenging for you?", "哪方面对你来说是挑战？"),
      S("What would you do differently next time?", "下次你会做哪些不同？"),
      S("How has your thinking changed?", "你的思考方式发生了怎样的改变？")
    ]},

  /* ── SOCIAL SKILLS ── */
  { id: "interpersonal", cat: "social",
    en: "Interpersonal Relationships", zh: "人际关系",
    descEn: "Getting along with people", descZh: "与人友好相处",
    stems: [
      S("How can you show respect here?", "你可以如何表现尊重？"),
      S("How can you include others?", "你可以如何接纳他人？"),
      S("What would be a kind response?", "怎样才是友善的回应？"),
      S("How can you work well with this person?", "你可以如何与此人良好合作？")
    ]},
  { id: "sei", cat: "social",
    en: "Social & Emotional Intelligence", zh: "社会与情感智力",
    descEn: "Understanding feelings – your own and others’", descZh: "理解感受——自己和别人的",
    stems: [
      S("How are you feeling right now?", "你现在感觉如何？"),
      S("How do you think they feel?", "你觉得对方感觉如何？"),
      S("Why might they feel that way?", "他们为什么会有这样的感受？"),
      S("What can you do to respond respectfully?", "你可以如何作出尊重他人的回应？")
    ]},
  { id: "commgroups", cat: "social",
    en: "Communication in Groups", zh: "小组沟通",
    descEn: "Sharing ideas in teams", descZh: "在团队中分享想法",
    stems: [
      S("Can you explain your idea?", "你能解释一下你的想法吗？"),
      S("What do you think about this idea?", "你对这个想法怎么看？"),
      S("Can you add to that idea?", "你能为这个想法补充内容吗？"),
      S("How can we share ideas clearly?", "我们如何清晰地分享想法？")
    ]},
  { id: "roles", cat: "social",
    en: "Adopting Group Roles", zh: "承担小组角色",
    descEn: "Leader, helper, listener when needed", descZh: "在需要时担任领导者、助手或倾听者",
    stems: [
      S("What role are you taking?", "你正在承担什么角色？"),
      S("How can you support your group?", "你可以如何支持你的小组？"),
      S("What does your group need right now?", "你的小组现在需要什么？"),
      S("How can you be a good listener/leader/helper?", "你可以如何成为一名好的倾听者／领导者／助手？")
    ]},
  { id: "conflict", cat: "social",
    en: "Resolving Conflict", zh: "化解冲突",
    descEn: "Solving problems peacefully", descZh: "和平地解决问题",
    stems: [
      S("What is the problem?", "问题是什么？"),
      S("How can we solve this calmly?", "我们如何冷静地解决它？"),
      S("What would be a fair solution?", "怎样才是公平的解决方案？"),
      S("How can we listen to both sides?", "我们如何听取双方的意见？")
    ]},
  { id: "consensus", cat: "social",
    en: "Building Consensus", zh: "达成共识",
    descEn: "Agreeing together as a group", descZh: "共同商定并达成一致",
    stems: [
      S("What ideas do we agree on?", "我们在哪些想法上意见一致？"),
      S("How can we combine our ideas?", "我们如何把想法结合起来？"),
      S("What works best for everyone?", "怎样对大家最好？"),
      S("How can we make a group decision?", "我们如何作出小组决定？")
    ]},

  /* ── SELF-MANAGEMENT SKILLS ── */
  { id: "organisation", cat: "self",
    en: "Organisation", zh: "组织安排",
    descEn: "Keeping materials and tasks in order", descZh: "让材料与任务井然有序",
    stems: [
      S("What do you need to get started?", "开始之前你需要什么？"),
      S("How can you organise your work?", "你可以如何组织你的工作？"),
      S("What is your next step?", "你的下一步是什么？"),
      S("Is your work neat and clear?", "你的工作整洁清楚吗？")
    ]},
  { id: "time", cat: "self",
    en: "Time Management", zh: "时间管理",
    descEn: "Using time wisely to finish tasks", descZh: "善用时间完成任务",
    stems: [
      S("What should you do first?", "你应该先做什么？"),
      S("How will you use your time?", "你打算如何使用时间？"),
      S("How can you stay focused?", "你如何保持专注？"),
      S("Are you using your time well?", "你用好了自己的时间吗？")
    ]},
  { id: "safety", cat: "self",
    en: "Safety", zh: "安全",
    descEn: "Keeping yourself and others safe", descZh: "保障自己和他人的安全",
    stems: [
      S("Is this a safe choice?", "这是安全的选择吗？"),
      S("What could happen if you do this?", "如果你这样做会发生什么？"),
      S("How can you keep others safe?", "你可以如何保障他人的安全？"),
      S("What should you do in this situation?", "在这种情况下你该怎么做？")
    ]},
  { id: "healthy", cat: "self",
    en: "Healthy Lifestyle", zh: "健康的生活方式",
    descEn: "Making good choices for body and mind", descZh: "为身心的健康做出好选择",
    stems: [
      S("What is the best choice for your body?", "对你的身体来说，最好的选择是什么？"),
      S("What do you need right now?", "你现在需要什么？"),
      S("How can you take care of yourself?", "你可以如何照顾自己？"),
      S("What will help you feel ready to learn?", "什么能让你准备好学习？")
    ]},
  { id: "codes", cat: "self",
    en: "Codes of Behaviour", zh: "行为规范",
    descEn: "Following rules and expectations", descZh: "遵守规则和期望",
    stems: [
      S("What is expected here?", "这里有什么要求？"),
      S("Are you following the rules?", "你在遵守规则吗？"),
      S("What should you be doing right now?", "你现在应该做什么？"),
      S("Is this the right choice?", "这是正确的选择吗？")
    ]},
  { id: "stateofmind", cat: "self",
    en: "Managing State of Mind", zh: "情绪管理",
    descEn: "Controlling emotions and stress", descZh: "控制情绪与压力",
    stems: [
      S("How are you feeling?", "你感觉如何？"),
      S("What can you do to calm down?", "你可以做什么让自己平静下来？"),
      S("What strategy will help you?", "哪种策略会有帮助？"),
      S("How can you respond calmly?", "你可以如何冷静地回应？")
    ]},
  { id: "mindfulness", cat: "self",
    en: "Mindfulness", zh: "正念觉察",
    descEn: "Being aware and calm in the moment", descZh: "专注当下并保持平静",
    stems: [
      S("What are you focusing on right now?", "你现在专注于什么？"),
      S("What do you notice?", "你注意到了什么？"),
      S("Can you slow down and think?", "你能慢下来想一想吗？"),
      S("How can you stay calm?", "你可以如何保持平静？")
    ]},
  { id: "perseverance", cat: "self",
    en: "Perseverance", zh: "坚持不懈",
    descEn: "Not giving up when things are hard", descZh: "遇到困难时不放弃",
    stems: [
      S("What can you try next?", "你可以下一步尝试什么？"),
      S("What will you do if it is difficult?", "如果有困难，你会怎么做？"),
      S("How can you keep going?", "你可以如何坚持下去？"),
      S("What did you learn from this challenge?", "你从这个挑战中学到了什么？")
    ]},

  /* ── COMMUNICATION SKILLS ── */
  { id: "listening", cat: "communication",
    en: "Listening", zh: "倾听",
    descEn: "Paying attention to what others say", descZh: "认真听取他人说话",
    stems: [
      S("What did you hear?", "你听到了什么？"),
      S("Can you repeat that in your own words?", "你能用自己的话复述一遍吗？"),
      S("What is the speaker saying?", "发言者在说什么？"),
      S("What is important to remember?", "什么内容是需要记住的？")
    ]},
  { id: "speaking", cat: "communication",
    en: "Speaking", zh: "口头表达",
    descEn: "Sharing ideas clearly with words", descZh: "用语言清晰地分享想法",
    stems: [
      S("What would you like to say?", "你想说什么？"),
      S("How can you explain your idea clearly?", "你可以如何清晰地解释你的想法？"),
      S("Can you say that in a better way?", "你能说得更好吗？"),
      S("What is your main idea?", "你的核心想法是什么？")
    ]},
  { id: "reading", cat: "communication",
    en: "Reading", zh: "阅读",
    descEn: "Understanding written texts", descZh: "理解书面文本",
    stems: [
      S("What is this text about?", "这段文字讲的是什么？"),
      S("What is the main idea?", "主要观点是什么？"),
      S("What questions do you have?", "你有哪些疑问？"),
      S("What does this part mean?", "这一部分是什么意思？")
    ]},
  { id: "writing", cat: "communication",
    en: "Writing", zh: "写作",
    descEn: "Expressing ideas in writing", descZh: "以书面形式表达想法",
    stems: [
      S("What is your main idea?", "你的核心想法是什么？"),
      S("How will you organise your writing?", "你打算如何组织你的写作？"),
      S("Does this make sense?", "这样说得通吗？"),
      S("Did you check your work?", "你检查过自己的作品了吗？")
    ]},
  { id: "viewing", cat: "communication",
    en: "Viewing", zh: "图像解读",
    descEn: "Understanding pictures, charts or media", descZh: "理解图片、图表或媒体",
    stems: [
      S("What do you notice?", "你注意到了什么？"),
      S("What does this show?", "这说明了什么？"),
      S("What is the message?", "这里传递的信息是什么？"),
      S("What can you learn from this?", "你能从中学到什么？")
    ]},
  { id: "presenting", cat: "communication",
    en: "Presenting", zh: "展示",
    descEn: "Showing information to an audience", descZh: "向观众呈现信息",
    stems: [
      S("How will you share your ideas?", "你打算如何分享你的想法？"),
      S("How can you make this clear?", "你可以如何使它清晰明了？"),
      S("What is important to include?", "哪些内容很重要、必须包含？"),
      S("How will you engage your audience?", "你打算如何吸引你的听众？")
    ]},
  { id: "nonverbal", cat: "communication",
    en: "Non-verbal Communication", zh: "非言语沟通",
    descEn: "Using body language, gestures or facial expressions", descZh: "运用肢体语言、手势或面部表情",
    stems: [
      S("What does your body language show?", "你的肢体语言传达了什么？"),
      S("Are you making eye contact?", "你有进行眼神交流吗？"),
      S("What do you notice about others?", "你注意到了他人的哪些表现？"),
      S("How can you show you are listening?", "你可以如何表明自己在倾听？")
    ]},
  { id: "questions", cat: "communication",
    en: "Formulating Questions", zh: "提出好问题",
    descEn: "Asking good questions to guide learning", descZh: "用提问来引导学习",
    stems: [
      S("What do you want to find out?", "你想弄清楚什么？"),
      S("What questions can you ask?", "你可以提出哪些问题？"),
      S("How will your question guide your learning?", "你的问题将如何引导你的学习？"),
      S("What do you wonder about?", "你对什么感到好奇？")
    ]},

  /* ── RESEARCH SKILLS ── */
  { id: "observing", cat: "research",
    en: "Observing", zh: "观察",
    descEn: "Noticing details carefully", descZh: "细致地留意细节",
    stems: [
      S("What do you notice?", "你注意到了什么？"),
      S("What details can you see?", "你看到了哪些细节？"),
      S("What is interesting or different?", "什么是有趣或与众不同的？"),
      S("What do you observe closely?", "你仔细观察到了什么？")
    ]},
  { id: "planning", cat: "research",
    en: "Planning & Collecting Data", zh: "规划与收集资料",
    descEn: "Deciding how to get information", descZh: "决定如何获取信息",
    stems: [
      S("How will you find information?", "你打算如何查找信息？"),
      S("What sources will you use?", "你会使用哪些资料来源？"),
      S("What is your plan?", "你的计划是什么？"),
      S("What information do you need?", "你需要哪些信息？")
    ]},
  { id: "recording", cat: "research",
    en: "Recording & Organising Data", zh: "记录与整理数据",
    descEn: "Keeping information neat and clear", descZh: "保持信息整洁清晰",
    stems: [
      S("How will you organise your information?", "你打算如何整理你的信息？"),
      S("Where will you record your data?", "你会把数据记录在哪里？"),
      S("How can you make it clear?", "你可以如何让它清晰易读？"),
      S("Is your work neat and organised?", "你的记录整洁有序吗？")
    ]},
  { id: "interpreting", cat: "research",
    en: "Interpreting Data", zh: "解读数据",
    descEn: "Making sense of information collected", descZh: "理解所收集到的信息",
    stems: [
      S("What does this tell you?", "这告诉了你什么？"),
      S("What patterns do you notice?", "你注意到了什么规律？"),
      S("What does the data show?", "数据显示了什么？"),
      S("What can you conclude?", "你可以得出什么结论？")
    ]},
  { id: "researchfindings", cat: "research",
    en: "Presenting Research Findings", zh: "展示研究结果",
    descEn: "Sharing what you discovered", descZh: "分享你的研究发现",
    stems: [
      S("What did you discover?", "你发现了什么？"),
      S("How will you share your findings?", "你打算如何分享你的发现？"),
      S("What is most important to show?", "展示时最重要的是什么？"),
      S("How can you explain your learning clearly?", "你可以如何清晰地讲解你的学习？")
    ]}
];

const CAT_BY_ID  = Object.fromEntries(ATL_CATEGORIES.map(c => [c.id, c]));
const SUB_BY_ID  = Object.fromEntries(SUBSKILLS.map(s => [s.id, s]));
