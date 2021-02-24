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
  data () {
    return {}
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
