/* ATL Tester — UI strings (English / 简体中文)
   t('key') returns the string for the active language. */

const STRINGS = {
  en: {
    langName: "English",
    siteTitle: "IB ATL Skills Tester",
    siteSubtitle: "Test your knowledge of the IB Approaches to Learning",
    switchTo: "中文",
    switchAria: "Switch to Chinese",

    /* Stage 1 */
    s1Badge: "Stage 1 of 3",
    s1Title: "Identify the 5 IB ATL Skills",
    s1Intro: "The IB has exactly five Approaches to Learning (ATLs). They are listed below alongside 15 other education-related skills that are NOT ATLs. Pick the five that are.",
    s1Hint: "20 options — only 5 are correct. Select five to continue.",
    s1Counter: "selected",
    s1Continue: "Continue to Stage 2 →",
    s1WrongTitle: "Not quite!",
    s1WrongBody: "Some of the skills you chose are NOT official IB Approaches to Learning.\n\nThe five ATLs are:\n• Thinking Skills\n• Social Skills\n• Self-Management Skills\n• Communication Skills\n• Research Skills\n\nPlease try again.",
    s1WrongTitleZhNote: "",

    /* Stage 2 */
    s2Badge: "Stage 2 of 3",
    s2Title: "Match each Subskill to its ATL",
    s2Intro: "Every subskill belongs to exactly one of the five ATLs. Your job is to sort them: click a subskill on the left, then choose its ATL from the pop-up menu. The subskill will move into that ATL box automatically.",
    s2PanelTitle: "All subskills",
    s2PanelSub: "Click any subskill to place it",
    s2BoxHint: "Click a subskill here to move it",
    s2NotPlaced: "Not placed",
    s2StatusFmt: "{placed} / {total} placed",
    s2Check: "✓ Check answers",
    s2Reset: "↺ Reset",
    s2Back: "← Back",
    s2Continue: "Continue to Stage 3 →",
    s2CheckTitle: "Check answers",
    s2CheckBody: "You placed {correct} of {total} correctly.",
    s2CheckAllRight: "All correct — brilliant!",
    s2CheckFix: "{wrong} marked in red. Click a red subskill and choose the right ATL to fix it — mistakes stay red until you correct them.",
    s2CheckEmpty: "Place some subskills first.",
    s2BelongsIn: "belongs in: {cat}",
    s2Correct: "✓ correct",

    /* Stage 3 */
    s3Badge: "Stage 3 of 3",
    s3Title: "Identify each stem cluster",
    s3Intro: "Each card shows a cluster of question stems taken from ONE subskill. Decide which ATL the cluster belongs to, then which subskill it comes from. You get instant feedback — if you get it wrong, you can try that cluster again.",
    s3Step1: "Step 1 — Which ATL skill does this cluster belong to?",
    s3Step2: "Step 2 — Which subskill?",
    s3ClusterLabel: "Question stem cluster ({n} stems)",
    s3Of: "of {n} clusters",
    s3Next: "Next →",
    s3Prev: "← Previous",
    s3Finish: "Finish 🏆",
    s3CorrectTitle: "✓ Correct!",
    s3CorrectBody: "This cluster is from the subskill “{sub}” in {cat}.",
    s3WrongTitle: "✗ Not quite — try again",
    s3WrongAtl: "That ATL is not right for this cluster. Choose another ATL.",
    s3WrongSub: "“{sub}” is not the right subskill. Look at the stems again and pick another one.",
    s3WrongBoth: "Not this ATL or subskill. Try again — read each stem carefully.",
    s3AllAnswered: "All clusters answered — click “See Results”.",
    s3PickFirst: "First choose an ATL.",

    /* Results */
    rTitle: "Your Results",
    rScore: "Your Final Score",
    rAtl: "ATL identified",
    rSub: "Subskill identified",
    rTableStem: "Stem cluster",
    rYourAtl: "Your ATL",
    rCorrectAtl: "Correct ATL",
    rYourSub: "Your Subskill",
    rCorrectSub: "Correct Subskill",
    rTryAgain: "🔄 Try Again",
    rScored: "{n} of {total} clusters correct",
    rFirstTry: "First-try correct",
    rRetries: "needed a retry",

    /* Modal */
    mTitle: "Choose the ATL",
    mSub: "Which ATL does this subskill belong to?",
    mCancel: "Cancel",
    mRemove: "Remove",

    /* Common */
    cBack: "← Back"
  },

  zh: {
    langName: "简体中文",
    siteTitle: "IB ATL 技能测试",
    siteSubtitle: "测试你对 IB 学习方法（ATL）的掌握情况",
    switchTo: "English",
    switchAria: "切换为英文",

    /* Stage 1 */
    s1Badge: "第 1 步，共 3 步",
    s1Title: "找出 5 项 IB ATL 技能",
    s1Intro: "IB 官方只有五种学习方法（ATLs）。它们与另外 15 项与教育相关的技能一起列在下面，但那 15 项并不是 ATL。请选出真正的五项。",
    s1Hint: "共 20 个选项，只有 5 个正确。选满五项即可继续。",
    s1Counter: "已选",
    s1Continue: "进入第 2 步 →",
    s1WrongTitle: "还不太对！",
    s1WrongBody: "你选择的部分技能并不是 IB 官方的学习方法。\n\n五种 ATL 是：\n• 思维技能\n• 社交技能\n• 自我管理技能\n• 沟通技能\n• 研究技能\n\n请再试一次。",

    /* Stage 2 */
    s2Badge: "第 2 步，共 3 步",
    s2Title: "把每个子技能归入对应的 ATL",
    s2Intro: "每个子技能都只属于五项 ATL 中的一项。请进行分类：点击左侧任意子技能，在弹出的菜单中选择它所属的 ATL，子技能就会自动进入对应的方框。",
    s2PanelTitle: "全部子技能",
    s2PanelSub: "点击任意子技能进行归类",
    s2BoxHint: "点击此处的子技能可移动它",
    s2NotPlaced: "未归类",
    s2StatusFmt: "已归类 {placed} / {total}",
    s2Check: "✓ 检查答案",
    s2Reset: "↺ 重置",
    s2Back: "← 上一步",
    s2Continue: "进入第 3 步 →",
    s2CheckTitle: "检查答案",
    s2CheckBody: "你归对了 {correct} 项，共 {total} 项。",
    s2CheckAllRight: "全部正确，太棒了！",
    s2CheckFix: "有 {wrong} 项标为红色。点击红色的子技能并选择正确的 ATL 即可订正——在改对之前会一直保持红色。",
    s2CheckEmpty: "请先归类一些子技能。",
    s2BelongsIn: "应属于：{cat}",
    s2Correct: "✓ 正确",

    /* Stage 3 */
    s3Badge: "第 3 步，共 3 步",
    s3Title: "辨认每组问题语",
    s3Intro: "每张卡片显示的是取自某一个子技能的一组问题语。请判断这组问题语属于哪一项 ATL，再判断它出自哪个子技能。作答后会立即反馈——答错可以重新作答。",
    s3Step1: "第一步 —— 这组问题语属于哪一项 ATL？",
    s3Step2: "第二步 —— 属于哪个子技能？",
    s3ClusterLabel: "问题语组（共 {n} 条）",
    s3Of: "共 {n} 组",
    s3Next: "下一组 →",
    s3Prev: "← 上一组",
    s3Finish: "完成 🏆",
    s3CorrectTitle: "✓ 回答正确！",
    s3CorrectBody: "这组问题语出自「{sub}」，属于{cat}。",
    s3WrongTitle: "✗ 还不对 —— 再试一次",
    s3WrongAtl: "这组问题语并不属于该 ATL，请另选一个。",
    s3WrongSub: "「{sub}」不是正确的子技能。请再读一遍问题语，重新选择。",
    s3WrongBoth: "ATL 和子技能都不对。再试一次——请仔细阅读每一条问题语。",
    s3AllAnswered: "所有问题语组都已作答——点击「查看结果」。",
    s3PickFirst: "请先选择一项 ATL。",

    /* Results */
    rTitle: "测试结果",
    rScore: "你的最终得分",
    rAtl: "ATL 答对",
    rSub: "子技能答对",
    rTableStem: "问题语组",
    rYourAtl: "你的 ATL",
    rCorrectAtl: "正确 ATL",
    rYourSub: "你的子技能",
    rCorrectSub: "正确子技能",
    rTryAgain: "🔄 再测一次",
    rScored: "答对 {n} / {total} 组",
    rFirstTry: "首次答对",
    rRetries: "需要重试",

    /* Modal */
    mTitle: "选择所属的 ATL",
    mSub: "这个子技能属于哪一项 ATL？",
    mCancel: "取消",
    mRemove: "移除",

    /* Common */
    cBack: "← 上一步"
  }
};

let LANG = "en";
function t(key) {
  const pack = STRINGS[LANG];
  return (pack && pack[key] !== undefined) ? pack[key] : (STRINGS.en[key] || key);
}
/** Fill in {placeholder} tokens */
function tf(key, vars) {
  let s = t(key);
  Object.keys(vars || {}).forEach(k => { s = s.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]); });
  return s;
}
/** Localised text for a category */
function catName(cat){ return LANG === "zh" ? cat.zh : cat.en; }
function catBlurb(cat){ return LANG === "zh" ? cat.blurbZh : cat.blurbEn; }
/** Localised text for a subskill */
function subName(sub){ return LANG === "zh" ? sub.zh : sub.en; }
function subDesc(sub){ return LANG === "zh" ? sub.descZh : sub.descEn; }
/** Localised text for a stem */
function stemText(stem){ return LANG === "zh" ? stem.zh : stem.en; }
/** Localised name for a distractor skill */
function skillName(s){ return LANG === "zh" ? s.zh : s.en; }
function skillBlurb(s){ return LANG === "zh" ? s.blurbZh : s.blurbEn; }
