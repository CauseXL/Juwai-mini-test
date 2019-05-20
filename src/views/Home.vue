<template>
    <div class="c-home">
        <FullPage :type="backgroundType">
            <div class="container">
                <img class="c-home__logo" src="../assets/images/JuwaiLogo.svg" alt="logo">
                <div class="c-home__content">
                    <p class="c-home__title">1分钟小测试</p>
                    <p class="c-home__title--large">找出最适合你的度假模式</p>
                    <router-link class="c-home__btn" :to="{ name: 'questions' }">
                        开始 <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </router-link>
                </div>
            </div>
        </FullPage>
    </div>
</template>

<script>
import FullPage from '@/components/FullPage';

export default {
    name: 'home',
    components: {
        FullPage,
    },
    data() {
        return {
            backgroundType: 'home',
        };
    },
};
</script>

<style scoped lang="scss">
    @import "assets/styles/settings";

    .c-home {
        position: relative;
        font-size: $font-size--h1;
        color: $color__white;

        .c-home__content {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }

        .c-home__logo {
            @include mobile {
                width: 100px;
            }

            width: 210px;
            margin-top: 50px;
            margin-bottom: 50px;
        }

        .c-home__title--large {
            @include mobile {
                font-size: 30px;
            }

            margin-bottom: 50px;
            font-size: 60px;
            font-weight: 900;
        }

        .c-home__btn {
            display: inline-block;
            border-radius: 42px;
            padding: 20px 30px;
            font-size: $font-size--h2;
            color: $color__white;
            background-color: $color__red;
            transition: all 0.2s ease-in-out;

            &:hover {
                transform: scale(1.03);
                text-decoration: none;
            }
        }

        .container {
            max-width: 1320px;
        }
    }
</style>
