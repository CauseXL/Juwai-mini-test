<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
    @import "assets/styles/settings";

    #app {
        background: $color__grey--light2;
    }

    #LXB_CONTAINER_SHOW {
        display: none !important;
    }
</style>
