<template>
  <div>
    <ParentLayout></ParentLayout>
    <footer>
      <CustomFooter />
    </footer>
  </div>
</template>
<script>
import ParentLayout from "@parent-theme/components/Home.vue";
import CustomFooter from "@theme/components/Footer.vue";

export default {
  components: {
    ParentLayout,
    CustomFooter
  }
};
</script>