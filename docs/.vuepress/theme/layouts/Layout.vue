<template>
  <ParentLayout>
    <Content></Content>
    <footer slot="page-bottom">
      <CustomFooter />
    </footer>
  </ParentLayout>
</template>
<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import CustomFooter from "@theme/components/Footer.vue";

export default {
  components: {
    ParentLayout,
    CustomFooter
  } 
};
</script>