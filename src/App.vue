<template>
  <div class="container">
    <!-- <div class="box">
      <header class="header">header</header>
      <div class="content">content</div>
    </div> -->
    <router-view></router-view>
    <router-view name="foot"></router-view>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body,.container {
  width: 100%;
  height: 100%;
}
html{ font-size: 26.66666666666666vw;}
@media all and (orientation : landscape) {
  html {
    font-size: 100px;
  }
}
body {
  font-size: 12px;
}
.container {
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #efefef;
  .box {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
    .header {
      height: .44rem;
      background-color: #f66;
    }
    .content {
      flex: 1;
      overflow: auto;
    }
  }
  .footer {
    height:.5rem;
    background-color: #efefef;
    ul{
      width: 100%;
      height: 100%;
      display: flex;
      li{
        display: flex;
        height: 100%;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &.router-link-exact-active.router-link-active{
          color:red
        }
      }
      span{
        font-size: 22px;
      }
    }
  }
}
</style>
