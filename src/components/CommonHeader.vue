<template>
  <div class="header">
    <div class="l-content">
      <el-button size="small" @click="handleCollapse">
        <component class="icons" is="menu"></component>
      </el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }" :style="{ color: '#fff' }" >个人信息</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="r-content">
        <el-dropdown>
          <span class="el-dropdown-link">
            <img :src="getImageUrl('user')" class="user" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useAllDataStore } from "@/stores" 

const getImageUrl = (user) => {
  return new URL(`../assets/images/${user}.png`, import.meta.url).href
}

const store = useAllDataStore()
const handleCollapse = () => {
  store.state.isCollapse = !store.state.isCollapse 
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #333;
}
.icons{
    width: 20px;
    height: 20px;
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}

:deep(.bread span) {
  color: #fff !important;
  cursor: pointer !important;
  
}
</style>