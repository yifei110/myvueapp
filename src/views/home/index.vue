<template>
    <div class="box">
      <header class="header">home header</header>
      <div class="content" ref="content">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <Banner :bannerlist = "bannerlist"/>
        <Nav />
        <Ad />
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check="false"
        >
          <Prolist :prolist="prolist"/>
        </van-list>
        </van-pull-refresh>
        <div class="backtop" @click="backtop" v-if="flag">
          <van-icon name="back-top" size="34"/>
        </div>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Grid, GridItem, Image as VanImage, List, PullRefresh, Icon } from 'vant'
import Prolist from './compnents/Prolist'
import { getBannerlist, getProlist } from './../../api'
import Banner from './compnents/Banner'
import Nav from './compnents/Nav'
import Ad from './compnents/Ad'

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(VanImage)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Icon)

export default {
  data () {
    return {
      bannerlist: [],
      prolist: [],
      loading: false,
      finished: false,
      count: 2,
      isLoading: false,
      flag: false
    }
  },
  methods: {
    scrollFn () {
      if (this.$refs.content.scrollTop > 400) {
        this.flag = true
      } else {
        this.flag = false
      }
    },
    backtop () {
      this.$refs.content.scrollTop = 0
    },
    onRefresh () {
      this.isLoading = true
      getProlist().then(res => {
        this.prolist = res.data.data
        this.finished = false
        this.count = 2
        this.isLoading = false
      })
      console.log('下拉刷新')
    },
    onLoad () {
      this.loading = true
      getProlist({
        // 以键值 键值对的形式发送数据请求
        limitNum: 10,
        count: this.count
      }).then(res => {
        if (res.data.data.length === 0) {
          this.finished = true
        } else {
          this.prolist = [...this.prolist, ...res.data.data]
        }
        this.loading = false
        this.count++
      })
      console.log('可以加载数据了')
    }
  },
  created () {
    getBannerlist().then(res => {
      console.log(res)
      this.bannerlist = res.data.data
    })
    getProlist().then(res => {
      console.log(res)
      this.prolist = res.data.data
      this.$refs.content.addEventListener('scroll', this.scrollFn)
    })
  },
  components: {
    Prolist,
    Banner,
    Nav,
    Ad
  }
}
</script>

<style lang="scss">
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    // line-height: 150px;
    text-align: center;
    // background-color: #39a9ed;
}

.title{
  background: -webkit-linear-gradient(left,#FF2A2A,#F139D2);
  background: linear-gradient(90deg, #FF2A2A,#F139D2);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 700;
  font-size: 18px;
  display: inline-block;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.backtop{
  position: fixed;
  bottom: .6rem;
  right: .06rem;
  width: 34px;
  height: 34px;
  background: #fff;
  border: 1px solid #efefef;
  border-radius: 50%;
  color: #ccc;
}
</style>
