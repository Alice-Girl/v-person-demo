<script setup>
import { ref, reactive,  onMounted,  } from 'vue'

const getImageUrl = (user) => {
  return new URL(`../assets/images/${user}.png`, import.meta.url).href 
}

const txtList = reactive([
  { id: 1, descript: '1.熟技术基础：具备扎实的H5、CSS3、TS、JS、ES6等混合开发等'},
  { id: 2, descript: '2.框架应用：Vue框架及其相关技术栈（如：Vue2/3、router、Vuex/Pinia等）、uniapp、小程序等混合开发 '},
  { id: 3, descript: '3.熟练掌握数据可视化：Echarts、Hightcharts 等数据可视化研发'},
  { id: 4, descript: '4. 熟练掌握构建⼯具：npm、yarn、pnpm、nrm'},
  { id: 5, descript: '5.熟练掌握⽹络通信机制：ajax、axios、http、https等'},
  { id: 6, descript: '6.熟练掌握CSS预编译：Less、Sass、Stylus 等'},
  { id: 7, descript: '7.性能优化：前端页面优化、交互体验、提升页面加载速度和响应速度等'},
  { id: 8, descript: '8.熟练掌握CICD部署打包等'},
  { id: 9, descript: '9.熟练掌握前端主流UI组件库：Element UI、Element Plus、Vant4、iView、Bootstrap等'},
  { id: 10, descript: '10.熟练掌握动画库：Animate、Hover Css、swiper 等'},
  { id: 11, descript: '11.熟练掌握HTTP协议，熟悉浏览器缓存策略、前后端分离的开发模式等'},
  { id: 12, descript: '12.熟悉前端常用的构建工具：熟练掌握Webpack、Vite、Gulp'},
  { id: 13, descript: '13.AI工具：熟练使用豆包、Deepseek等AI辅助工具'}
])

const countData = reactive([
  {
    name: '太保消保项目（短期保险）',
    type: 'vue3技术生态+Andesign+TS',
    list: [
      '1.独立设计并实现复杂的前端交互，理解交互设计原则，具备良好的代码建设、规范意识、问题排查能力及团对协作能力。',
      '2.独立承担Vue3消保项目消保收集-部门审核模块功能模块的研发。',
      '3.独立承担【消保项目】-队伍管理模块，用户新增模块的研发。',
      '4.独立承担【消保项目】-队伍管理模块，变更申请模块的研发。',
      '5.独立承担【消保项目】-消保审查模块，消保部门审核模块的研发。',
      '6. 具备良好的沟通能力及团对合作能力，处理数据展示与交互、责任心强'
    ]
  },
  {
    name: '信创交易客户端 （银行）',
    type: 'Vue2技术生态+Element UI+JS等',
    list: [
      "1. 参与Vue2信创客户端功能模块的研发，负责产品界面开发包括但不限于页面布局、交互设计、功能落地等",
      "2. 独立完成【在贴现】-意向询价管理，询价展示，询价明细及询价行情等模块的研发",
      "3. 独立完成【在贴现】-买断式-意向询价管理，询价展示，询价明细及询价行情等模块的研发",
      "4. 独立完成【在贴现】-质押式-意向询价管理、询价展示，询价明细及询价行情等模块的研发",
      "5. 独立完成【在贴现】-意向询价公共组件：匹配，挑票、群组，询价详情等模块的研发"
    ]
  },
  {
    name: '在贴现综服 客户端 （银行）',
    type: 'Vue3技术生态+TS等',
    list: [
      "1. 参与Vue3 综服 交易客户端业务模块的研发",
      "2. 独立完成【内管-已生效贴现】-内管列表页查询，详情及分页功能的研发",
      "3. 独立完成【内管-贴现日志】-操作日志列表查询、导出等",
      "4. 独立完成【内管-贴现宣传展示】- 列表查询、新增，修改，导出、撤销、跳票等功能研发",
      "5. 负责功能模块的Bug 修复及上线"
    ]
  },
  {
    name: 'hyMobileUI组件库',
    type: 'Vue3技术生态+Vant+hyMobileUI等',
    list: [
      "1. 独⽴研发基础模块组件(button、Cell、image、layout、Popup、Space、 图⽚预览、Toast等)",
      "2. 独⽴研发表单组件模块(field、 radio、checkbox/checkboxGroup、Switch、 Picker/PickerGroup、 Datepicker、cascader、 search、upload、slider、search、Rate、TimePicker、Signature、Stepper等)",
      "3. 独⽴研发反馈组件模块(Diaog、Notify、 Loading、ActionSheet、 PullRefresh、 Result、Skeleton、 DropdownMenu等)",
      "4. 独⽴研发展⽰组件模块(Collapse 、 Badge 、 ImagePreview 、Tag 、 Card 、 Empty 、Swiper 、 Progress 、 CountDown、 Divider、Avatar、List、NoticeBar等)",
      "5. 独⽴研发导航组件模块(Navbar、Tabbar、Tab、 IndexBar、Grid、Steps、Sidebar等)",
      "6. 独⽴研发数据可视化Echart组件模块(条形图 ，条形堆叠、饼图、漏⽃ 、⽔波纹、折线 ，多条折线等)"
    ]
  },
   {
    name: '移动端标准脚手架模版',
    type: 'Vue3技术生态+Vant+hyMobileUI等',
    list: [
     " 1. 从零搭建移动端标准模版及技术选型、代码规范及",
      "2. 对全局Vant4 样式重构使更贴合公司主题⻛格",
      "3. 使⽤vue实力封装公共Echart模块库,",
      "4. 集成前端⾼频JS类库(Axios、vueCokkies、moment、vuePdf、签名等)"
    ]
  },
  {
    name: '码动未来',
    type: 'Vue3技术生态+hyMobileUI+Echarts等',
    list: [
      "1. 从零搭建移动端标准模版及技术选型和代码规范",
      "2. 对完首页，拍照打卡，打卡排行，抽奖，我的照片等模块研发",
      "3. 使⽤vue封装可视化：Echart库",
      "4. 对接后端调试及数据处理",
      "5. 定位前端问题，修复Bug，负责项目上线"
    ]
  },
  {
    name: 'RatelData 数据系统开发',
    type: 'Vue3技术生态+Element Plus等',
    list: [
      "1. 完成项⽬从零到⼀项⽬搭建（vite构建）、项⽬技术选型及项⽬设计",
      "2. 完成业务公共组件封装，提高项目渲染性能",
      "3. 完成平台业务研发（ ⽐如 ：配置中⼼模块 ：开发参数管理、资源组管理、项⽬管理、数据源管理、消息队列管理及通 知组管理等研发）",
      "4. 完成API接⼝测试、本地数据缓存及后端服务的数据交互",
      "5. 完成后台登录拦截，实现路由动态渲染及权限管理页面",
      "6. 解决优化⾸屏加载问题 ，操作卡顿等问题解决",
      "7. 使⽤Echarts ⼤数据可视化分析展⽰",
      "8. 完成项目构建和打包时间长",
      "9. 使⽤Git版本控制进⾏代码托管"
    ]

  },
  {
    name: 'Sass 后台管理系统',
    type: 'Vue2技术生态+element UI等',
    list: [
      "1. 使⽤vue-cli脚⼿架搭建项⽬ （Vue2全家桶）",
      "2. ⾼可真的复原设计稿",
      "3. 完成动态路由权限菜单渲染及单点登录",
      "4. 设计研发基础功能模块 ：⾸页、账号管理、⼈员管理、⾓⾊管理、 ⽹店管理等基础模块",
      "5. 封装模块公共组件 ，公共样式及请求拦截",
      "6. 使⽤sessionStorage、localStorage本地存储、懒加载等技术优化页⾯性能",
      "7. 封装拦截器request统⼀管理api和错误统⼀处理 ，拦截401请求（token⾝份过期⽤户）",
      "8. 负责前后端联调",
      "9. 使⽤Vuex 管理数据 状态",
      "10. 负责项⽬发布窗⼝的⽇常迭代极维护"
    ]
  },
  {
    name: '嵌入式APP H5卡片管理',
    type: 'Vue2技术生态+vant等',
    list: [
      "1.vue-cli脚手架搭建项目",
      "2.将蓝湖转换成符合W3C标准的web页面",
      "3.完成名片管理、名片发布、名片收藏移动端功能模块",
      "4.负责配合后端老师对接API接口将数据动态渲染至前端页面",
      "5.Bug修复及上线项目"
    ]
  },
  {
    name: '产险2018版数据质量管控',
    type: 'Vue2技术生态+element UI等',
    list: [
      "1. 使⽤vue-cli脚⼿架搭建项⽬",
      "2. 负责以模块进⾏划分 ，封装公共组件及常⽤的⼯具库",
      "3. 使⽤Element UI 库设计数据资产模块研发",
      "4. 使⽤Echarts 开源实现数据资产关系图谱模块可视模块研发",
      "5. 完成项日常迭代及数据交互等",
      "6. 负责数据资产订阅、资产新增及变更等模块统⼀管理与发布订阅业务整理归纳",
      "7. 负责项⽬优化及⽇常维护"
    ]
  },
  {
    name: '风险30指控（保险）',
    type: 'Vue2技术生态+Vant等',
    list: [
      "1. 使⽤vue-cli脚⼿架搭建项⽬",
      "2. 负责以模块进⾏划分 ，封装公共组件及常⽤的⼯具库",
      "3. 使⽤Element UI 库设计数据资产模块研发",
      "4. 使⽤Echarts 开源实现数据资产关系图谱模块可视模块研发",
      "5. 完成项⽬⼦模块研发",
      "6. 负责数据资产订阅、资产新增及变更等模块统⼀管理与发布订阅业务整理归纳",
      "7. 负责项⽬优化及⽇常维护"
    ]
  },
  {
    name: '掌上大师',
    type: 'Vue2技术生态+Vant等等',
    list: [
      "1. 使⽤vue-cli脚⼿架搭建项⽬",
      "2. 负责太保爱享金生成人版及少儿版等模块开发",
      "3. 负责前后端联调并将数据展示至前端页面",
      "4. 使⽤Echarts 开源实现数据资产关系图谱模块可视模块研发",
      "5. 完成项⽬⼦模块研发",
      "6. 负责数据资产订阅、资产新增及变更等模块统⼀管理与发布订阅业务整理归纳",
      "7. 负责项⽬优化及⽇常维护"
    ]
  },
  
])

const detailVisible = ref(false)

const detailData = ref(null)

const handleDetail = (val) => {
  detailVisible.value = true
  detailData.value = val

}

const handleClose = () => {
  detailVisible.value = false
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
            <p class="user-info-admin">刘周杰</p>
            <div class="user-info-txt">
              <p class="user-info-p">岗位：前端开发</p>
              <p class="user-info-p">性别：女</p>
              <p class="user-info-p">居住地：上海松江九亭</p>

            </div>
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
          <li v-for="(txt, index) in txtList" :key="txt.id" >{{ txt.descript }}</li>
        </ul>

       </el-card>
    </el-col>
    <el-col :span="16">
     <div class="num">
      <el-card
        :body-style="{display: 'flex', padding: 0}"
        v-for="item in countData "
        :key="item.name"
        @click="handleDetail(item)"
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
  <card-detail v-model:visible="detailVisible" :detailData=detailData @close="handleClose"></card-detail>
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
      display: flex;
      align-items: center;
      justify-content: space-between;
      p{
          line-height: 40px;
        }
      .user-info-p{
        color: #999;
      }
      .user-info-admin{
        font-size: 38px;
        margin-right: 30px;
      }
      .user-info-txt{
        font-size: 16px;
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
      cursor: pointer;
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
