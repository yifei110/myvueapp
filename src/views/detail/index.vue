<template>
    <div class="box">
      <header class="header">
        <van-nav-bar left-arrow left-text="返回" size="100" @click-left="$router.back()" @click-right="showShare=true">
          <template #right>
            <van-icon name="ellipsis" size="20"/>
          </template>
        </van-nav-bar>
      </header>
      <div class="content">
        <van-share-sheet
          v-model="showShare"
          :options="options"
          title="立即分享给好友"
          description="描述信息"
      />
      <van-swipe class="my-swipe" @change="onChange">
        <van-swipe-item v-for="(item, index) of bannerlist" :key="index" @click="previewImg">
          <van-image :src="item"></van-image>
        </van-swipe-item>
        <template #indicator>
        <div class="custom-indicator">
        {{ current + 1 }}/{{bannerlist.length}}
        </div>
        </template>
      </van-swipe>
      <div class="buy_area">
        <div class="price">
          <p>￥{{price}} 销量 {{sales}} 库存 {{stock}}
          <van-icon name="like-o" size="20" tag="i"/>
          <van-icon name="gold-coin-o" size="20" tag="span"/>
          </p>
        </div>
        <div class="proname">
          <h3>
            <van-tag type="danger">{{brand}}</van-tag>
            {{proname}}
          </h3>
        </div>
      </div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
      </div>
    </div>
</template>

<script>
// 导入Vue组件
import Vue from 'vue'
// 导入详情页请求的模块
import { getProDetail } from '@/api'
// 导入UI库组件
import { NavBar, Icon, ShareSheet, Swipe, SwipeItem, Image as VanImage, ImagePreview, Tag, GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant'

// 使用组件
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(ShareSheet)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(VanImage)
Vue.use(ImagePreview)
Vue.use(Tag)
Vue.use(GoodsAction)
Vue.use(GoodsActionButton)
Vue.use(GoodsActionIcon)

export default {
  data () {
    return {
      showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link', description: '描述信息' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' }
      ],
      current: 0,
      price: 0,
      proid: '',
      proname: '',
      brand: '',
      stock: 0,
      sales: 0,
      bannerlist: [
        'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/94914/18/10888/73156/5e23fd38Ea3d6221c/5d2f838a5c33e730.jpg!q80.dpg.webp',
        'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/88221/9/10990/77067/5e23fd39Ec36dd92f/027d258266de8edb.jpg!q70.dpg.webp',
        'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/50255/36/12883/73512/5d9efa92E373463fb/170e232272908a37.jpg!q70.dpg.webp',
        'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/52320/7/7554/472759/5d9efa95E11d91a13/1fbf9b7cfa4b24ad.png!q80.dpg'
      ]
    }
  },
  methods: {
    previewImg () {
      ImagePreview({
        images: this.bannerlist,
        startPosition: this.current
      })
    },
    onChange (index) {
      this.current = index
    }
  },
  mounted () {
    const { proid } = this.$route.params
    console.log(proid)
    getProDetail({
      proid
    }).then(res => {
      console.log(res)
      const proimg = res.data.data[0].proimg
      this.proid = proid
      this.proname = res.data.data[0].proname
      this.price = res.data.data[0].price
      this.brand = res.data.data[0].brand
      this.stock = res.data.data[0].stock
      this.sales = res.data.data[0].sales
      this.bannerlist.unshift(proimg)
    })
  }
}
</script>

<style lang="scss" scoped>
  .left-text {
    font-size: 22px;
  }
 .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  .buy_area {
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    .price {
      font-size: 14px;
      span {
        float: right;
      }
      i {
        float: right;
        margin-left: 10px;
      }
    }
  }
</style>
