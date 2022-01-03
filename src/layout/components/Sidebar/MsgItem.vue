<!-- item -->
<template>
  <div>
    <a-icon :type="menuInfo.meta.icon" />
    <span>{{ menuInfo.meta.title }}</span>
  </div>
</template>

<script>

export default {
  props: {
    menuInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>
