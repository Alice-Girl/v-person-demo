<script setup>
import { ref, reactive, onMounted } from 'vue'
import * as echarts from "echarts";


const getImageUrl = (user) => {
  return new URL(`../assets/images/${user}.png`, import.meta.url).href 
}

const txtList = reactive([
  '1.熟技术基础：具备扎实的H5、CSS3、TS、JS、ES6等混合开发等 ',
  '2.框架应用：Vue框架及其相关技术栈（如：Vue2/3、router、Vuex/Pinia等）、uniapp、小程序等混合开发 ',
  '3.熟练掌握数据可视化：Echarts、Hightcharts 等数据可视化研发',
  '4. 熟练掌握构建⼯具：npm、yarn、pnpm、nrm',
  '5.熟练掌握⽹络通信机制：ajax、axios、http、https等 ',
  '6.熟练掌握CSS预编译：Less、Sass、Stylus 等',
  '7.性能优化：前端页面优化、交互体验、提升页面加载速度和响应速度等',
  '8.熟练掌握CICD部署打包等 ',
  '9.熟练掌握前端主流UI组件库：Element UI、Element Plus、Vant4、iView、Bootstrap等',
  '10.熟练掌握动画库：Animate、Hover Css、swiper 等',
  '11.熟练掌握HTTP协议，熟悉浏览器缓存策略、前后端分离的开发模式等',
  '12.熟悉前端常用的构建工具：熟练掌握Webpack、Vite、Gulp ',
  '13.AI工具：熟练使用豆包、Deepseek等AI辅助工具'
])

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

const countData = reactive([
  {
    name: '太保消保项目（短期保险）',
    type: 'vue3技术生态+Andesign+TS'
  },
  {
    name: '信创交易客户端 （银行）',
    type: 'Vue2技术生态+Element UI+JS等'
  },
  {
    name: '在贴现综服 客户端 （银行）',
    type: 'Vue3技术生态+TS等'
  },
  {
    name: 'hyMobileUI组件库',
    type: 'Vue3技术生态+Vant+hyMobileUI等'
  },
   {
    name: '移动端标准脚手架模版',
    type: 'Vue3技术生态+Vant+hyMobileUI等'
  },
  {
    name: '码动未来',
    type: 'Vue3技术生态+hyMobileUI+Echarts等'
  },
  {
    name: '移动端标准框架模版',
    type: 'Vue3技术生态+hyMobileUI+Echarts等'
  },
  {
    name: 'RatelData 数据系统开发',
    type: 'Vue3技术生态+Element Plus等'
  },
  {
    name: 'Sass 后台管理系统',
    type: 'Vue2技术生态+element UI等'
  },
  {
    name: '产险2018版数据质量管控',
    type: 'Vue2技术生态+element UI等'
  },
  {
    name: '风险30指控（保险）',
    type: 'Vue2技术生态+Vant等'
  },
  {
    name: '掌上大师',
    type: 'Vue2技术生态+Vant等等'
  },
  
])

onMounted(() => {
})

</script>

<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
       <el-card shadow="hover" >
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

       <el-card shadow="hover" class="user-list">
        <template #header>技能列表及优势</template>
        <ul class="li-suqare">
          <li v-for="(txt, index) in txtList" :key="index" >{{ txt }}</li>
        </ul>

       </el-card>
    </el-col>
    <el-col :span="16">
     <div class="num">
      <el-card
        :body-style="{display: 'flex', padding: 0}"
        v-for="item in countData "
        :key="item.name"
        >
          <div class="detail">
            <p class="num">项目名称：  {{ item.name }}</p>
            <p class="txt">技术栈：
              <el-text class="mx-1" type="primary">{{ item.type }}</el-text>
            </p>
          </div>
      </el-card>
      </div>

      <!-- <el-card class="top-echart">
        <div ref="echart" style="height: 280px;"></div>
      </el-card> -->

      <!-- <div class="graph">
        <el-card>
          <div ref="userEchart" style="height: 240px;"></div>
        </el-card>
        <el-card>
          <div ref="videoEchart" style="height: 240px;"></div>
        </el-card>
      </div> -->
    </el-col>
  </el-row>


  <card-detail ></card-detail>
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
  :deep(.el-card__body ul){
    li{
      display: flex;
      align-items: center;
      list-style-type: square!important;
      line-height: 36px;
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
  .li-suqare li{
    list-style-type: square!important;
  }
  .user-list{
    margin: 10px 0;
    height: 100%;
  }
  .user-list li{
    display: flex;
    align-items: center;
    list-style-type: square!important;
    line-height: 36px;
  }

  .num{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card {
      width: 32%;
      padding: 15px 0;

      margin-bottom: 20px;
      .detail {
        padding: 15px;
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        .num {
          font-size: 14px;     
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

  // .graph {
  //   margin-top: 20px;
  //   display: flex;
  //   justify-content: space-between;
  //   .el-card {
  //     width: 48%;
  //     height: 260px;
  //   }
  // }
}
</style>
