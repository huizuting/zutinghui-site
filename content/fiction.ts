// ─── FICTION ─────────────────────────────────────────────────────────────────
//
// To ADD a story:
//   1. Copy one entry from the TEMPLATE at the bottom of this file.
//   2. Paste it into the `fiction` array above the closing bracket.
//   3. Fill in each field (see field guide below).
//   4. Save. The story appears on /fiction and gets its own page at /fiction/your-slug.
//
// To REMOVE a story: delete its entry from the array.
// To REORDER stories: cut and paste entries — they appear in the order listed.
//
// FIELD GUIDE
//   slug        URL-safe identifier, no spaces. E.g. "the-last-ferry"
//               Sets the URL: /fiction/the-last-ferry
//   title       Title as it appears on the page.
//   date        Publication or completion date. E.g. "May 2025"
//   type        Genre label shown in small caps. E.g. "Short story", "Novella excerpt"
//   description One or two sentences shown on the index page. Keep it brief.
//   body        The full text of the piece, as an array of paragraphs.
//               Each paragraph is a string enclosed in backticks.
//               Italics: <em>word</em>   Bold: <strong>word</strong>
//               A line break within a paragraph: <br />
//               Em dash: — (just type it directly)
// ─────────────────────────────────────────────────────────────────────────────

export type Piece = {
  slug: string;
  title: string;
  subtitle?: string;   // English title or alternate title, shown below the main title
  date: string;
  type: string;
  lang?: string;       // Language code. Set to "zh" for Chinese pieces.
  description: string;
  body: string[];
};

export const fiction: Piece[] = [
  {
    slug: "johnny-joestar",
    title: "《乔尼·乔斯达》",
    subtitle: "Johnny Joestar",
    date: "June 2021",
    type: "Short story",
    lang: "zh",
    description: "Written in June 2021 for a Chinese literature assignment during Grade 7. One of the earliest fiction pieces I completed seriously. Influenced at the time by Sherwood Anderson's Winesburg, Ohio.",
    body: [
      `这天大雨倾盆，镇上所有的人都待在房子里，周围除了雷声雨声，什么也没有，虽然曾冒出来几声呼喊，但是很快就被淹没在了雨滴中。一个老人在人行道上匆匆地走着，他的耳朵有点背了，时不时地停下来左顾右盼，雨水令他不多的头发一缕缕地贴在脸上遮住一只眼睛。他穿着灰色邋遢的衣服，没有穿鞋子，嘴里不停地念叨着："哦，我的宝贝，凯特，凯特……你在哪里？快出来，快出来，我们回家……麦克、裘斯他们还等着你呢……"`,
      `这个老人叫乔尼·乔斯达，他是温土堡镇最没有存在感的人之一，说是没有存在感，并不是因为他身上没有一点能让人注意的东西，而是人们刻意回避、忽略他。没有人知道他到底是六十岁还是五十岁，人们只知道，远离主街的林子里住着个叫乔尼的糟老头，整天待在家里几乎不出来，也从来不主动跟别人说话。`,
      `要说起人们对他有什么印象，他们绝对都会说："他是个怪物，他是个彻头彻尾的疯子"。`,
      `乔尼刚刚搬来的时候，有一辆车，车里装着很多大小各异的木箱子，它们多得奇怪。虽然是个新搬来的邻居，但是人们对他并没有什么敌意，直到一群调皮的小孩透过门缝看见了他的家。`,
      `一个夏天的午后，阳光透过淡薄的云层，洒在地面上。一群七八岁的孩子在乔尼房子旁的一块空地上玩耍，他们出于好奇，一直想打探这个神秘的房子，不过乔尼总是紧拉着窗帘，但是这次孩子们发现乔尼的房门没有关紧。透过门缝，他们看见乔尼的客厅中摆满了大大小小的玻璃箱子，箱子一个叠一个，整齐地排列着，形成了一面墙，而这些玻璃箱里全是各种爬行动物，蜥蜴、蛇等等。孩子们没有见过这样的场景，他们很惊讶，同时也很不解，房子的主人为什么要这么做。`,
      `就在他们惊讶的时候，乔尼从黑暗的走廊里走了出来，他这时的样子和人们在街上看到的他完全不同，他微笑着，眼神和善，脚步轻盈，手上拎着一只挣扎的野兔。他转向走廊，一边拿着野兔摇了摇，一边说着"来，我的孩子，来，你最爱吃的"。话音刚落，一阵指甲抓地板的声音从走廊深处传来。随着诡异的声音越来越近，一个灰色的庞然大物爬了出来，一口咬住乔尼手上的兔子，猛地甩了两下，乔尼露出了欣慰的笑容。孩子们从来没有见过这样的东西，它跟他们见过的鳄鱼不一样，孩子们被吓坏了，惊叫着跑回了家。来自未知的恐惧，萦绕在温土堡居民身边，那东西，对于他们来说，就像是地狱中爬出来的恶灵一般。`,
      `之后，温土堡渐渐温存的空气中开始飘散着关于乔尼的信息，消息来源于远处的几个村镇，没过多久，人们就用碎片信息拼凑出了这个乔尼老头的故事。`,
      `乔尼早年生活在一个繁华的小城，他家境富裕，住在市区的一所大房子里，还在郊外拥有大片的土地。他父母的婚姻应该是一桩门当户对的婚姻，但不知为何，他的父母从内到外都没表现出幸福感，而这样的家庭中最不幸的肯定是小乔尼，好在家境富裕，他在学校里还有一些阳光和快乐。`,
      `从某一天开始，他的肩上总会趴着一只绿色的蜥蜴，和他一起出现在学校和大街上。没过多久，人们又发现他手指上皮肤龟裂，像是大块的鳞片覆盖在手上，变得像一只爪子。几乎同时，他的母亲在和父亲争吵时，失足跌下楼梯，摔断了脖子，父亲也因为这件事情精神失常。人们将这些短期内发生的事情联系起来，都说乔尼身上携带着诅咒，他和地狱来的东西相伴，会带来灾厄。`,
      `多年后乔尼的父亲去世了，他变卖了所有家产，开始在各处辗转，在他每次搬家的物品中，都只有一个又一个奇怪的木箱子。`,
      `温土堡虽然压抑灰败，但还是个民风温和的镇子，孤僻的和爬行动物一起生活的乔尼，只引起了短暂的恐慌。他没有打扰到别人，又没再发生什么怪事，人们便没有攻击他、驱赶他，只是离他远远的，不相往来，主动忽略他的存在，毕竟谁都不想在提起他时脑海里出现那些恐怖扭曲的爬行动物。温土堡就成了乔尼生活时间最久的地方。`,
      `被大雨泥水弄得更不成人样的乔尼跌跌撞撞地往回走，他没找到凯特，但他不能一直找下去，家里还有很多宝贝要照顾，尤其是他不能确定，在风雨中离家时是否锁上了屋门。一想到这种可能他就更加恐慌焦虑，在刚刚失去的焦急伤心之外，还有一种更大的恐惧感要把他的世界压碎。`,
      `他绝不能再让那种恐惧感出现，虽然那只是幼年时的感觉，但从来都没有远离他，那种感觉一旦出现，便使他战栗不止仿佛会窒息死去。他出生在豪华的大房子里，但从有记忆起就是孤独一人，父母从来没抱过他、亲吻过他，甚至连一句话都不会和他说，他是被父母嫌弃至极的孩子，如果不是因为父母是天主教徒，乔尼在没出生前就被弄死了。父母没打骂过他没殴过他，相反，他有丰富的食物和考究的衣服，但是他却时常感觉被密闭在一个灰黑色的空间里，父母则是同样灰黑色的移动的模糊物体，这个空间大到无边并且寂静，他曾走到癫狂也走不出去，怎么呼喊也听不到自己的声音，怎样挥打自己也没有知觉。还只是幼儿的乔尼极度痛苦极度恐惧。`,
      `直到有一天，他正躺在落满灰尘的阁楼地板上，又深陷在灰黑色的密闭空间里，突然感到手背上痒痒的凉凉的。这让他一激灵，天哪，他能感知到除了恐惧思绪之外的感觉。此时，灰黑色的空间逐渐变化，出现色彩和声音，他低头，看到一个小精灵般的东西爬到他的手上，那是一只壁虎，有着小小的鼓鼓的眼睛。`,
      `哦，那是一个有眼神的活物，不是个移动的物体！乔尼和小壁虎说话，小壁虎也会回应他，他能感受到小壁虎的体温慢慢变暖，它被他温暖，它需要他，彼此需要。`,
      `小壁虎经常爬到外面的墙缝里不出来，乔尼就去树林里找到更多小蜥蜴和小蛇，这些活物都能被乔尼的体温变暖，它们都是需要乔尼来温暖的宝贝，也是驱散乔尼灰黑色世界的精灵。乔尼需要它们，彼此需要。虽然在校园里乔尼有少许舒适，但是有这些动物的世界更加艳丽，于是乔尼决定带上他最漂亮的小蜥蜴去学校，展示给对他最友善的女孩，一起分享他的世界。显然，乔尼的分享失败了，再也没有一个孩子会靠近他，整个城市的人都不再靠近他，他也听不到被人议论成恶灵附身，那个家和整个城市连成一整个灰黑色的空间，却再也与他无关。乔尼的宝贝则越来越多，它们照耀着乔尼的世界明亮而温暖，鸟语花香。它们需要乔尼，他也需要它们。自此，乔尼没有再进入那个无声无色无感的恐惧里。`,
    ],
  },
  // Paste your entries here.
  // ── TEMPLATE (copy from here) ──────────────────────────────────────────────
  // {
  //   slug: "story-title",
  //   title: "Story Title",
  //   date: "May 2025",
  //   type: "Short story",
  //   description: "One sentence that describes the story for the index page.",
  //   body: [
  //     `First paragraph of your story goes here. Just type normally.`,
  //     `Second paragraph. Each paragraph is its own string, separated by a comma.`,
  //     `Third paragraph. And so on.`,
  //   ],
  // },
  // ── END TEMPLATE ──────────────────────────────────────────────────────────
];
