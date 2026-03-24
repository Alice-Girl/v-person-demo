<template>
  <el-dialog 
    v-model="dialogVisible" 
    title="详细信息" 
    width="700px"
    center
    :close-on-click-modal="false"
    destroy-on-close
    @close="handleClose"
    class="detailPage"
  >
    <div v-if="detailData" class="detail-title">
      <h3>项目名称：{{ detailData.name }}</h3>
      <h3>技术栈：{{ detailData.type }}</h3>
      <div class="detail-list">
        <p v-for="item in detailData.list" :key="index">{{ item }}</p>
      </div>
    </div>
    <div v-else>暂无消息！</div>
  </el-dialog>

</template>

<script setup>
import { ref, defineProps, computed } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  detailData: {
    type: Object,
    default: () => []
  },
})

const emit = defineEmits(['update:visible', 'close'])
const handleClose = () => {
  emit('close');
};

const dialogVisible = computed({
  get() {
    return props.visible;
  },
  set(val) {
    emit('update:visible', val);
  }
});

</script>

<style lang="less" scoped>
.detailPage{
  overflow: hidden;
  .detail-title {
    h3 {
      font-size: 24px;
      line-height: 30px;
    }
    .detail-list{
      margin: 10px 0;
      font-size: 18px;
      line-height: 30px;
    }
  }
}
</style>