<template>
  <div>
    <ParentLayout v-if="showNavBar"></ParentLayout>
  </div>
</template>
<script>
import ParentLayout from "@parent-theme/components/NavLinks.vue";
import DropdownLink from "@theme/components/DropdownLink.vue";
import axios from "axios";

export default {
  data: () => ({
    showNavBar: false
  }),
  components: {
    ParentLayout
  },
  mounted() {
    if (this.$site.themeConfig.hasFetchedVersions) return;
    this.$site.themeConfig.hasFetchedVersions = true;
    axios
      .get("/versions.json")
      .then(res => {
        Object.keys(this.$site.themeConfig.locales).forEach(k => {
          this.$site.themeConfig.locales[k].nav = this.$site.themeConfig.locales[k].nav.concat(
            res.data[k.replace(/\//gi, "")] || []
          );
        });
        this.showNavBar = true;
      })
      .catch(err => {
        this.showNavBar = true;
        console.log(err);
      });
  }
};
</script>
