<template>
    <div class="prolist">
    <van-image src="https://img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png" />
        <ul>
            <router-link :to="'/detail/' + item.proid" tag="li" v-for="item of prolist" :key="item.proid">
                <div class="itemimg">
                <van-image :src= "item.proimg" />
                </div>
                <div class="iteminfo">
                    <p class="van-multi-ellipsis--l2"> {{item.proname}} </p>
                    <p> ${{item.price}} </p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'
import { Image as VanImage } from 'vant'
Vue.use(VanImage)
export default {
  props: {
    prolist: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.prolist{
    ul {
        overflow: hidden;
        li {
            width:49%;
            height: 2.67rem;
            float: left;
            margin: 0.5%;
            background-color: #fff;
            p:nth-child(2){
            color: red;
            }
            .itemimg {
                height: 2.0rem;
                overflow: hidden;
                .van-image {
                    width: 100%;
                }
            }
            .iteminfo{
                padding: 5px 8px;
            }
        }
    }
}
</style>
