<template>
    <div class="com">
    <div class="ad">
          <van-image src="https://m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg" />
          <van-image src="https://m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg" />
        </div>
        <van-image src="https://m.360buyimg.com/mobilecms/s750x100_jfs/t1/111655/4/10853/142323/5ef22455Eb86abfc1/2bf122bb2e87d6e3.png.webp" />
        <van-image src="https:////m.360buyimg.com/mobilecms/s750x80_jfs/t1/118793/9/10620/23804/5ef008fbE5d9a21ec/55f3eb03ac9e05a4.png!q70.jpg" />
        <van-grid :column-num="4" icon-size="60px">
          <van-grid-item>
            <strong class="title">免息星球</strong>
            <p>白条免息购</p>
            <van-image src="https://m.360buyimg.com/n1/s150x150_jfs/t29566/227/1464891645/10350/a5b133e2/5ce20cdcNd9cdd972.jpg!q70.jpg" />
          </van-grid-item>
          <van-grid-item>
            <strong class="title">每日特价</strong>
            <p>9块9疯抢</p>
            <van-image src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/85072/25/5818/20921/5def3796Eeb18104b/fed4740b6b58d144.jpg!q70.jpg" />
          </van-grid-item>
          <van-grid-item>
            <strong class="title">品牌闪购</strong>
            <p>汇大牌好价</p>
            <van-image src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/88638/33/5675/28468/5def3b04E728e691f/8997a8bf07db66b7.png!q70.jpg" />
          </van-grid-item>
          <van-grid-item>
            <strong class="title">京东直播</strong>
            <p>好货即可买</p>
            <van-image src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/75300/31/13658/33045/5daeb773Ebbbd91bd/47a1bdf9047ed568.jpg!q70.jpg" />
          </van-grid-item>
          <van-grid-item>
            <strong class="title">排行榜</strong>
            <p>热销推荐</p>
            <van-image src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/56939/39/1210/59272/5cefa52dE2f70588a/3174a20e743edd49.png!q70.jpg" />
          </van-grid-item>
          <van-grid-item>
            <strong class="title">拍拍好物</strong>
            <p>二手优品</p>
            <van-image src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/34938/26/11155/70774/5cefa0c6E5a90edb2/47b686712510d44e.png!q70.jpg" />
          </van-grid-item>
          <van-grid-item>
            <strong class="title">精品首发</strong>
            <p>京东小魔方</p>
            <van-image src="https://m.360buyimg.com/n1/s150x150_jfs/t1/116252/24/2308/43604/5ea1359fE61a06adb/6cef94529cd1cf09.png!q70.jpg" />
          </van-grid-item>
          <van-grid-item>
            <strong class="title">发现好货</strong>
            <p>教你买买买</p>
            <van-image src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/50174/30/1230/9784/5cef98bfE318f8d24/4720dc4079dd568b.jpg!q70.jpg" />
          </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.ad {
  padding: 8px 8px;
  display: flex;
  .van-image{
    flex: 1;
  }
}
</style>
