<!-- 一级路由布局 -->
<template>
  <AppTopnav />
  <AppHeader />
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <AppFooter />
</template>

<script>
import AppTopnav from "@/components/app-topnav";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import { useStore } from "vuex";
export default {
  name: "xtx-layout",
  components: { AppTopnav, AppHeader, AppFooter },
  // 获取分类数据
  setup() {
    const store = useStore();
    store.dispatch("category/getList");
  },
};
</script>
<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>
