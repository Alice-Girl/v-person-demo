<script setup>
import { reactive, getCurrentInstance } from 'vue'
import { useAllDataStore } from '@/stores'
import { useRouter } from 'vue-router'

const store = useAllDataStore()
const router = useRouter()

const {proxy} = getCurrentInstance()
const loginForm = reactive({
  username: '',
  password: '',
});

const login = async() => {
  const res = await proxy.$api.getMenu(loginForm)
  // console.log(res)
  // if(res.code === 200) {
    store.updateMenuList(res.menuList)
    store.state.token = res.token
    store.addMenu(router)
    router.push('/home')
    // store.addMenu(router)
  // }
}

</script>

<template>
  <div class="body-login">
    <el-form :model="loginForm" class="login-container">
      <h3>系统登录</h3>
      <el-form-item>
        <el-input
          type="input"
          placeholder="请输入账号"
          v-model="loginForm.username"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="loginForm.password"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login"> 登录 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped>
.body-login {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/background.png');
  background-size: 100%;
  overflow: hidden;
}
.login-container {
  width: 500px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  padding: 35px 35px 15px 35px;
  box-shadow: 0 0 25px #cacaca;
  margin: 180px auto;
  h3 {
    text-align: center;
    margin-bottom: 20px;
    color: #505450;
  }
  :deep(.el-form-item__content) {
    justify-content: center;
  }
}
</style>
