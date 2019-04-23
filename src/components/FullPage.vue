<template>
    <div class="c-full-page" :class='background'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['type'],
    computed: {
        background() {
            return {
                'c-full-page__home': this.type === 'home',
                'c-full-page__rich': this.type === 'rich',
                'c-full-page__adventurer': this.type === 'adventurer',
                'c-full-page__boheme': this.type === 'boheme',
                'c-full-page__wiser': this.type === 'wiser',
            };
        },
    },
};
</script>

<style scoped lang="scss">
    @import "assets/styles/settings";

    .c-full-page {
        position: relative;
        width: 100%;
        height: 100vh;
    }

    .c-full-page__home {
        @include mobile {
            background: $linear-gradient-mobile, url(../assets/images/homeBanner.jpg) no-repeat center;
            background-size: cover;
        }

        background: $linear-gradient, url(../assets/images/homeBanner.jpg) no-repeat center;
        background-size: cover;
    }

    .c-full-page__rich {
        @include mobile {
            background: $linear-gradient-mobile, url(../assets/images/result/土豪.jpg) no-repeat center;
            background-size: cover;
        }

        background: $linear-gradient, url(../assets/images/result/土豪.jpg) no-repeat center;
        background-size: cover;
    }

    .c-full-page__adventurer {
        @include mobile {
            background: $linear-gradient-mobile, url(../assets/images/result/冒险家.jpg) no-repeat center;
            background-size: cover;
        }

        background: $linear-gradient, url(../assets/images/result/冒险家.jpg) no-repeat center;
        background-size: cover;
    }

    .c-full-page__boheme {
        @include mobile {
            background: $linear-gradient-mobile, url(../assets/images/result/波西米亚人.jpg) no-repeat center;
            background-size: cover;
        }

        background: $linear-gradient, url(../assets/images/result/波西米亚人.jpg) no-repeat center;
        background-size: cover;
    }

    .c-full-page__wiser {
        @include mobile {
            background: $linear-gradient-mobile, url(../assets/images/result/智者.jpg) no-repeat center;
            background-size: cover;
        }

        background: $linear-gradient, url(../assets/images/result/智者.jpg) no-repeat center;
        background-size: cover;
    }
</style>
