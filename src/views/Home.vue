<script setup>
import { ref, reactive, getCurrentInstance, onMounted } from 'vue'
import * as echarts from "echarts";

// proxy相当于组件对象   //getCurrentInstance它的作用是获取当前组件的实例对象
const { proxy } = getCurrentInstance()

// const tableData = ref([])
// const tableLabel = ref({
//     name: "课程",
//     todayBuy: "今日购买",
//     monthBuy: "本月购买",
//     totalBuy: "总购买",
// })

const getImageUrl = (user) => {
  return new URL(`../assets/images/${user}.png`, import.meta.url).href 
}

// const getTableData = async() => {
//   const data = await proxy.$api.getTableData()
//   tableData.value = data.tableData
//   // axios({
//   //   url: `/api/home/getTableData`,
//   //   method: 'get',
//   // }).then(res => {
//   //   console.log(res, 'res')
//   //   if(res.status === 200) {
//   //     tableData.value = res.data.data.tableData
//   //   }
//   // })
// }

//卡片
const countData = ref([])
const getCountData = async() => {
  const data = await proxy.$api.getCountData()
  countData.value = data
}

//echart 配置： 折线图和柱状图 两个图表共用的公共配置
const xOptions = reactive({
  // 图例文字颜色
  textStyle: {
    color: "#333",
  },
  legend: {},
  grid: {
    left: "20%",
  },
  // 提示框
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category", // 类目轴
    data: [],
    axisLine: {
      lineStyle: {
        color: "#17b3a3",
      },
    },
    axisLabel: {
      interval: 0,
      color: "#333",
    },
  },
  yAxis: [
    {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#17b3a3",
        },
      },
    },
  ],
      color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
      series: [],
})

const pieOptions = reactive({
  tooltip: {
    trigger: "item",
  },
  legend: {},
  color: [
    "#0f78f4",
    "#dd536b",
    "#9462e5",
    "#a6a6a6",
    "#e1bb22",
    "#39c362",
    "#3ed1cf",
  ],
  series: []
})

//observer 接收观察器实例对象
const observer = ref(null)

// echart
// const chartData = ref([])
const getChartData = async() => {
  const { orderData, userData, videoData } = await proxy.$api.getChartData()
  // 第一个图标的下 series 赋值
  // const oneEchart = echarts.init(proxy.$refs['echart'])
  xOptions.xAxis.data=orderData.date
  xOptions.series = Object.keys(orderData.data[0]).map(val=>({
      name:val,
      data:orderData.data.map(item=>item[val]),
      type: "line"
    })
  )
  //echarts.init方法初始化ECharts实例，需要传入dom对象
  const OneEcharts = echarts.init(proxy.$refs["echart"])
  //setOption方法应用配置对象
  OneEcharts.setOption(xOptions)

  //对第二个图表的xAxis和series赋值
  xOptions.xAxis.data = userData.map((item) => item.date)
  xOptions.series = [
    {
      name: "新增用户",
      data: userData.map((item) => item.new),
      type: "bar",
    },
    {
      name: "活跃用户",
      data: userData.map((item) => item.active),
      type: "bar",
    }
  ]
 //two
  const TwoEcharts = echarts.init(proxy.$refs["userEchart"])
  TwoEcharts.setOption(xOptions)

  // 饼图渲染
  pieOptions.series = [
    {
      data: videoData,
      type: "pie",
    },
  ]
  //three
  const ThreeEcharts = echarts.init(proxy.$refs["videoEchart"])
  ThreeEcharts.setOption(pieOptions);

  //ResizeObserver 如果监视的容器大小变化，如果改变会执行传递的回调
  observer.value = new  ((entries) => {
    OneEcharts.resize()
    TwoEcharts.resize()
    ThreeEcharts.resize()
  })

  // 容器如果存在
  if(proxy.$refs['echart']) {
    observer.value.observer(proxy.$refs['echart'])
  }
}

onMounted(() => {
})

</script>

<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
       <el-card shadow="hover">
        <div class="user">
          <img :src="getImageUrl('user')" class="user" />
          <div class="user-info">
            <p class="user-info-admin ">刘周杰</p>
            <p class="user-info-p">前端开发</p>
          </div>
        </div>
        <div class="login-info">
          <p>本科学历:<span>郑州大学（非统本）</span></p>
          <p>专科学历:<span>郑州理工职业学院（统专）</span></p>
        </div>
      </el-card>

       <el-card shadow="hover" class="user-table">
        列表
       </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card
          :body-style="{display: 'flex', padding: 0}"
          v-for="item in countData "
          :key="item.name"
          >
            <component :is="item.icon" class="icons" :style="{background: item.color}"></component>
            <div class="detail">
              <p class="num">¥  {{ item.value }}</p>
              <p class="txt">{{ item.name }}</p>
            </div>
        </el-card>
      </div>

      <el-card class="top-echart">
        <div ref="echart" style="height: 280px;"></div>
      </el-card>

      <div class="graph">
        <el-card>
          <div ref="userEchart" style="height: 240px;"></div>
        </el-card>
        <el-card>
          <div ref="videoEchart" style="height: 240px;"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template> 

<style lang="less" scoped>
.home{
  height: 100%;
  overflow: hidden;
  .user{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    img{
      width: 150px; 
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
    .user-info{
      p{
          line-height: 40px;
        }
      .user-info-p{
        color: #999;
      }
      .user-info-admin{
        font-size: 35px;
      }
    }
  }

  .login-info{
    p {
      line-height: 30px;
      font-size: 14px;
      color: #999;
      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }
  .user-table{
    margin-top: 20px;

  }
  .num{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card {
      width: 32%;
      margin-bottom: 20px;
      .icons{
        width: 80px;
        height: 80px;
        font-size: 30px;
        text-align: center;
        line-height: 80px;
        color: #fff;
      }
      .detail {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .num {
          font-size: 30px;     
          margin-bottom: 10px;
        }
        .txt{
          font-size: 15px;
          text-align: center;
          color: #999;
        }
      }
    }
    
  }
  .graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 48%;
      height: 260px;
    }
  }
}
</style>
