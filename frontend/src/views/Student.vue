<template>
  <el-container>
    <el-header>
      <div>
        <img
          src="../assets/zjut.png"
          alt=""
        >
        <span>浙江工业大学导师双向选择系统</span>
      </div>
      <div class="logout">
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-user" /><i class="el-icon-arrow-down el-icon--right" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="logout">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <studentAside />
      <el-scrollbar>
        <el-main>
          <transition name="student">
            <router-view />
          </transition>
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script>
    import studentAside from '../components/StudentAside.vue'

    export default {
        components: { studentAside },
        data: function () {
            return {
                
            }
        },
        created () {
          this.loading = true
          this.get_user_type().then(
            res => {
              if (res !== 'student') {
                this.$router.push('/' + res)
              }
            }
          )
          this.loading = false 
      },
      methods: {
        logout () {
          window.sessionStorage.clear()
          this.$router.push('/login')
        }
      }
    }
</script>

<style lang="less" scoped>
.el-header{
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    position: relative;
    background-color: #F4F7ED;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    border: 1px solid #E4E4E4;
    > div {
        display: flex;
        align-items: center;
        > img{
            height: 40px;
            width: 40px;
        }
        > span{
            margin-left: 10px;
        }
    }
}
.el-container{
    height: 100%;
}
.el-main{
    width: 100%;
    height: 100%;
    padding: 0 24px 24px 24px;
    background-color: #F0F2F5;
}
.el-scrollbar{
    height: 100%;
    width: 100%;
    background-color: #F0F2F5;
}
</style>
