<template>
  <div class="wec-essay">
    <div class="box">
      <div class="item item1">
        <div class="title">相遇</div>
        <div class="content">
          缘分是相遇的开始，一个缘字，让多少男女为了爱而疯狂。茫茫人海，我们生命中会遇到很多人，有的只是过客，有的遇到了就是一辈子。总会有很多朋友抱怨，为什么我爱的那个还没出现？是啊，为什么还没出现，或许是你的缘分还没到吧。缘分总是会在你不经意的时候来到你的身边，缘分到了，一切水到渠成。有人相遇因为彼此的一个眼神，而碰撞出爱情的火花，有人因为一件事，有人因为对方的容颜而无法自拔。走在一起是缘分，一起在走是相守！
        </div>
      </div>
      <div class="item item2">
        <div class="title">相识</div>
        <div class="content">
          当我们想要去认识某个人的时候，我们总会用尽所有的办法，为自己能和他/她的相识创造机会。当然不是所有的相遇都能相识，相识了未必就能相知。两个人从相识到相知，是一个必要的过程，这个过程是最美好的。你会因为和他/她多说了一句话而开心，会因为知道他/她还是单身而高兴一天。当相识到一定的程度，就会走进一个美好的世界里，这在个世界里，互相更多的去了解双方，将两个的距离拉近。
        </div>
      </div>
      <div class="item item3">
        <div class="title">相知</div>
        <div class="content">
          相知在我们从相遇到相守中是个非常重要的环节。这一步走的好，就能一起到相爱，走的不好，就会从此形同陌路。很多人因为没有相知，没有去互相过多的了解彼此，直接从相识到相爱，后面就会出现很多的矛盾，而无法再走下去。因为你们在相爱之前根本就没有去仔细的了解对方的性格等是否和你合适。要是跟一个不合适的人过一辈子，真的是件很痛苦的事。不要等到后面矛盾出来了你才去后悔当初没有好好了解对方。
        </div>
      </div>
      <div class="item item4">
        <div class="title">相恋</div>
        <div class="content">
          相恋是一种幸福，相恋是一种甜蜜;愿我如星君若月，夜夜流光相皎洁;玲珑骰子安红豆，入骨相思知不知!你我的相恋相爱，随到自然，浑然天成;无曾经沧海难为水的缠绵，无一日三秋的嘶磨;有的只是，浸入彼此内心的不可缺的思念;有的是，言无多，意已明的心有灵犀;有的是淡然淳朴的时光里，伴晨钟，随暮鼓流连于青砖绿瓦，粗布长衫;有的是素如棉衣、淡若清文的岁月积淀;有的是清风细雨，平淡至然的恒久温暖!有的是……
        </div>
      </div>
      <div class="item item5">
        <div class="title">相爱</div>
        <div class="content">
          爱情是美好的，古往今来多少痴情男女深陷其中无法自拔。爱情也是痛苦的，多少人因爱生恨，相忘于江湖湖。两个人在一起，难免会在生活中出现摩擦，这个时候就要相互理解，相互包容。既然当初选择了相爱，就要好好珍惜对方，走到这一步不容易，他/她在万千人中选择了你，你在茫茫人海中爱上了他/她。
        </div>
      </div>
      <div class="item item6">
        <div class="title">相伴</div>
        <div class="content">
          相伴是一种是一种承诺，相守是一种坚持，相伴相守是一种长情;虽清淡，却恒远，无所比肩!春蚕到死丝方尽，蜡炬成灰泪始干，牵手只为一生，相守到老，白发相伴，富不抛，贫不弃，生同寝，死同穴，不渝至死!你我无千年之许，万年之诺;有的只是与君同，与君语，与君老的淡情相惜;有的是不弃不离，相扶相持;有的是粗茶淡饭，柴米油盐;有的是同哭同笑，同戏同闹，同苦共难，同享微笑淡然;有的是信任执着，理解宽容;因而能耐得住寂寞诱惑，困境艰险;受得住平淡清贫，做得到相濡以沫，共度时艰!
        </div>
      </div>
      <div class="item item7">
        <div class="title">相守</div>
        <div class="content">
          相濡以沫，牵手一生，相伴到老。当我们老了，迈着老迈的步伐，我牵着你，你扶着我。行走在街头，回忆曾经一起走过的路，内心波荡起伏，感叹这个世界的变幻万千。很多情侣会对另一半说，等我们老了，以后年纪大了，我希望你比我先离开这个世界。是啊，留下来的那个要去承受陪伴了我们一辈子的枕边人离你而去后的那种孤单和悲伤。
        </div>
      </div>
    </div>

    <p v-html="htmlContent"></p>
  </div>
</template>
<script>
import axios from 'axios'
import config from '~/config'
export default {
  async fetch ({ store, params }) {
    store.dispatch('article/getArticleList')
    // 获取网站基本信息
    const baseData = await axios.get(
      `${config.BASE_URL}api/blog/v1/base/base`
    )
    store.commit('setBase', baseData.data.data)
  },
  head () {
    const base = this.$store.state.base
    return {
      title: `${base.name}${base.split || '-'}${base.title}`,
      meta: [
        { hid: 'keywords', name: 'keywords', content: base.keywords },
        { hid: 'description', name: 'description', content: base.description }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: base.ico
        }
      ]
    }
  },
  data () {
    return {
      htmlContent: `<p >
      <h4 style="text-align:center;">百分百女孩 —— 树上春树</h4
      <div>
        &emsp;&emsp;
      </div>
      <div style="max-width:1000px;margin:0 auto;font-family:Menlo, Monaco, &quot;font-size:16px;">
      <div>
        &emsp;&emsp;四月一个晴朗的早晨，我在原宿后街同一个百分之百的女孩擦肩而过。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;不讳地说，女孩算不得怎么漂亮，并无吸引人之处，衣着也不出众，脑后的头发执着地带有睡觉挤压的痕迹。年龄也已不小了—应该快有30了。严格地说来，恐怕很难称之为女孩。然而，相距50米开外我便一眼看出：对于我来说，她是个百分之百的女孩。从看见她身姿的那一瞬间，我的胸口便如发生地鸣一般的震颤，口中如沙漠干得沙沙作响。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;或许你也有你的理想女孩。例如喜欢足颈细弱的女孩，毕竟眼睛大的女孩，十指绝对好看的女孩，或不明所以地迷上慢慢花时间进食的女孩。我当然有自己的偏爱。在饭店时就曾看邻桌一个女孩的鼻形看得发呆。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;但要明确勾勒百分之百的女孩形象，任何人都无法做到。我就绝对想不起她长有怎样的鼻子。甚至是否有鼻子都已记不真切，现在我所能记的，只有她并非十分漂亮这一点。事情也真是不可思议。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;“昨天在路上同一个百分之百的女孩擦肩而过。”我对一个人说。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;“唔，”他应道，“人可漂亮？”
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;“不，不是说这个。”
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;“那，是合你口味那种类型喽？”
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;“记不得了。眼睛什么样啦，胸部是大是小啦，统统忘得一干二净。”
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;“莫名其妙啊！”
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;“是莫名其妙。”
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;“那么，”他显得兴味索然，“你做什么了？搭话了？还是跟踪了？”
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;“什么都没有做。”我说，“仅仅是擦肩而过。”
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;她由东往西走，我从西向东去，在四月里一个神清气爽的早晨。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;我想和她说话，哪怕30分钟也好。想打听她的身世，也想全盘托出自己的身世。而更重要的，是想弄清导致1981年4月一个晴朗的早晨我们在原宿后街擦肩而过这一命运的原委。里面肯定充满和平时代的古老机器般温馨的秘密。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;如此谈罢，我们可以找地方吃午饭，看伍迪。爱伦的影片，再顺路到宾馆里的酒吧喝鸡尾酒什么的。弄得好，喝完说不定能同她睡上一觉。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;可能性在扣击我的心扉。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;我和她之间的距离以近至十五六米了。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;问题是，我到底该如何向她搭话呢？
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;“你好！和我说说话可以吗？哪怕30分钟也好。”
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;过于傻气，简直象劝人加入保险。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;“请问，这一带有24小时营业的洗衣店吗？”
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;这也同样傻里傻气。何况我岂非连洗衣袋都没带！有谁能相信我的道白呢？
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;也许开门见山好些。“你好！你对我可是百分之百的女孩哟！”
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;不，不成，她恐怕不会相信我的表白。纵然相信，也未必愿同我说什么话。她可能这样说：即便我对你是百分之百的女孩，你对我可不是百分之百的男人，抱歉！而这是大有可能的。假如陷入这般境地，我肯定全然不知所措。这一打击说不定使我一蹶不振。我已32岁，所谓上年纪归根结底便是这么一回事。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;我是在花店门前和她擦肩而过的，那暖暖的小小的气块儿触到我的肌肤。柏油路面洒了水，周围荡漾着玫瑰花香。连向她打声招呼我都未能做到。她身穿白毛衣，右手拿一个尚未贴邮票的四方信封。她给谁写了封信。那般睡眼惺忪，说不定整整写了一个晚上。那四方信封里有可能装有她的全部秘密。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;走几步回头时，她的身影早已消失在人群中。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;当然，今天我已完全清楚当时应怎样向她搭话。但不管怎么说，那道白实在太长，我笃定表达不好──就是这样，我所想到的每每不够实用。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;总之，道白自“很久很久以前”开始，而以“你不觉得这是个忧伤的故事吗”结束。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;很久很久以前，有个地方有一个少男和一个少女。少男18，少女16。少男算不得英俊，少女也不怎么漂亮，无非随处可见的孤独而平常的少男少女。但两人一直坚信世上某个地方一定存在百分之百适合自己的少女和少男。是的，两人相信奇迹，而奇迹果真发生了。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;一天两人在街头不期而遇。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;“真巧！我一直在寻找你。也许你不相信，你对我是百分之百的男孩。从头到脚跟我想象的一模一样。简直是在做梦。’
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;两人坐在公园长椅上，手拉手，百谈不厌。两人已不再孤独。百分之百需求对方，百分之百已被对方需求。而百分之百需求对方和百分之百地被对方需求是何等美妙的事情啊！这已是宇宙奇迹！
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;但两人心中掠过一个小小的，的确小而又小的疑虑：梦想如此轻易成真是否就是好事？
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;交谈突然中断时，少男这样说道：
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;“我说，再尝试一次吧！如果我们两人真是一对百分之百的恋人的话，肯定还会有一天在哪里相遇。下次相遇时如果仍觉得对方百分之百，就马上在那里结婚，好么？
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;“好的。”少女回答。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;于是两人分开，各奔东西。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;然而说实在话，根本没有必要尝试，纯属多此一举。为什么呢？因为两人的的确确是一对百分之百的恋人，因为那是奇迹般的邂逅。但两人过于年轻，没办法知道这许多。于是无情的命运开始捉弄两人。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;一年冬天，两人都染上了那年肆虐的恶性流感。在死亡线徘徊几个星期后，过去的记忆丧失殆尽。事情也真是离奇。当两人睁眼醒来时，脑袋里犹如D。H劳伦斯少年时代的贮币盒一样空空如也。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;但这对青年男女毕竟聪颖豁达且极有毅力，经过不懈努力，终于再度获得了新的知识新的情感，胜任愉快地重返社会生活。啊，我的上帝！这两人真是无可挑剔！他们完全能够换乘地铁，能够在邮局寄交快信了。并且分别体验了百分之七十五和百分之八十五的恋爱。如此一来二去，少男32，少女31岁了。时光以惊人的速度流逝。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;四月一个晴朗的早晨，少男为喝折价早咖啡沿原宿后街由西向东走，少女为买快信邮票沿同一条街由东向西去，两人恰在路中间失之交臂。失却的记忆的微光刹那间照亮两颗心。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;两人胸口陡然悸颤，并且得知：
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;她对我是百分之百的女孩。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;他对我是百分之百的男孩。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;然而两人记忆的烛光委实过于微弱，两人的话语也不似十四年前那般清晰。结果连句话也没说便擦身而过，径直消失在人群中，永远永远。
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;你不觉得这是个令人感伤的故事么？
      </div>
      <div>
        &emsp;&emsp;
      </div>
      <div>
        &emsp;&emsp;是的，我本该这样向她搭话。
      </div>
  </div>
</p>`
    }
  },
  computed: {},
  mounted () {},
  methods: {}
}
</script>
<style  scoped>
.wec-essay {
}
.box {
  width: 770px;
  height: 450px;
  margin: 20px auto;
  overflow: hidden;
  /* background: linear-gradient(
    to right,
    rgba(255, 0, 0,1),
    rgba(255, 165, 0,1),
    rgba(255, 255, 0,1),
    rgba(0, 255, 0,1),
    rgba(0, 127, 255,1),
    rgba(0, 0, 255,1),
    rgba(139, 0, 255,1)
  ); */
}

.box .item {
  width: 14.28%;
  float: left;
  transition: all 2s;
  height: 100%;
  text-align: center;
  color: #fff;
  font-size: 50px;
  cursor: pointer;
  /* border-right: 1px solid black; */
}
.content {
  width: 960px;
  cursor: pointer;
}
.box:hover .item {
  width: 8.3%;
  line-height: 20px;
}
.title {
  line-height: 200px;
  width: 80%;
  margin: 0 auto;
  /* height: 100%; */
}
.content {
  display: none;
  width: 100%;
  word-break: break-all;
  font-size: 16px;
  padding: 0 20px;
}
.box .item:hover {
  width: 50%;
}

.box .item:hover .content {
  display: inline-block;
}

/*  */
.item1 {
  /* background: linear-gradient(
    to right,
    rgb(255, 0, 0),
    rgb(255, 165, 0)
  ); */
  /* background: rgb(52, 152, 219); */
  background: #00d2ff;
}
.item2 {
  /* background: linear-gradient(
    to right,
    rgb(255, 165, 0),
    rgb(255, 255, 0)
  ); */
  /* background: rgb(34, 167, 240); */
  background: #00bfff;
}
.item3 {
  /* background: linear-gradient(
    to right,
    rgb(255, 255, 0),
    rgb(0, 255, 0)
  ); */
  /* background: rgb(197, 239, 247); */
  background: #00acff;
}
.item4 {
  /* background: linear-gradient(
    to right,
    rgb(0, 255, 0),
    rgb(0, 127, 255)
  ); */
  /* background: rgb(82, 179, 217); */
  background: #0099ff;
}
.item5 {
  /* background: linear-gradient(
    to right,
    rgb(0, 127, 255),
    rgb(0, 0, 255)
  ); */
  /* background: rgb(129, 207, 224); */
  background: #0086ff;
}
.item6 {
  /* background: linear-gradient(
    to right,
    rgb(0, 0, 255),
    rgb(139, 0, 255)
  ); */
  /* background: rgb(89, 171, 227); */
  background: #0073ff;
}
.item7 {
  /* background: rgb(139, 0, 255); */
  /* background: rgb(137, 196, 244); */
  background: #0060ff;
}
</style>
