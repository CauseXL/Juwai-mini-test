<template>
    <div class="c-full-page">
        <slot></slot>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
    @import 'assets/styles/settings';
    .c-full-page {
        position: relative;
        width: 100%;
        height: 100vh;
        background: $linear-gradient, url('../assets/images/resultBanner.jpg') no-repeat;
        background-size: cover;
    }
</style>
