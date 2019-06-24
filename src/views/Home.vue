<template>
    <div>
        <div class="c-home">
            <FullPage :type="backgroundType">
                <div class="container">
                    <img class="c-home__logo" src="../assets/images/JuwaiLogo.svg" alt="logo">
                    <span class="c-home__sub-title">分时渡假测试</span>
                    <div class="c-home__content">
                        <p class="c-home__title c-home__title--normal">1分钟测试出</p>
                        <p class="c-home__title">最适合你的<span class="c-home__title--large">度假模式</span></p>
                        <router-link class="c-home__btn" :to="{ name: 'questions' }">
                            开始 <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </router-link>
                    </div>
                </div>
            </FullPage>
            <div class="container">
                <div class="c-home__img-container">
                    <img v-for="(value, index) in [1, 2, 3]" :key="index"
                        :src="getImgUrl(value)" class="img-fluid" alt="">
                </div>
            </div>
            <div class="c-home__cta">
                <div class="container">
                    <p class="c-home__cta-title">哪种度假方式适合你？</p>
                    <router-link class="c-home__btn" :to="{ name: 'questions' }">
                        1分钟小测试 <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="c-enquiry__container" id="c-enquiry__container">
            <div class="container">
                <Enquiry />
            </div>
        </div>
    </div>
</template>

<script>
import FullPage from '@/components/FullPage';
import Enquiry from '@/components/Enquiry';

export default {
    name: 'home',
    components: {
        FullPage,
        Enquiry,
    },
    data() {
        return {
            backgroundType: 'home',
        };
    },
    computed: {
        device() {
            let isMobile = false;
            if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                isMobile = true;
            }
            return isMobile ? 'mobile' : 'desktop';
        },
    },
    methods: {
        getImgUrl(index) {
            return require(`../assets/images/homepage/${this.device}/timeshare-intro-${index}.jpg`);
        },
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

        .c-home__title {
            @include mobile {
                font-size: 26px;
            }

            font-size: 50px;
        }

        .c-home__title--normal {
            font-weight: 300;
        }

        .c-home__title--large {
            @include mobile {
                font-size: 30px;
            }

            margin-bottom: 50px;
            font-size: 60px;
            font-weight: 900;
        }

        .c-home__sub-title {
            @include mobile {
                font-size: $font-size--h4;
            }

            margin-left: 30px;
            border-bottom: 2px solid $color__white;
            padding-bottom: 18px;
            font-size: $font-size--h2;
            color: $color__white;
        }

        .c-home__img-container {
            @include mobile {
                margin: 0 0 -100px;
            }

            margin: 0 auto -175px;
            border-radius: 10px;
            padding: 10px 0;
            background-image: linear-gradient($color__red, $color__black);
            box-shadow: $box-shadow;
            transform: translateY(-175px);
        }

        .c-home__cta {
            @include mobile {
                margin-top: 0;
                padding-top: 0;
                text-align: center;
                background-position: right;
            }

            height: 300px;
            margin-top: 70px;
            padding-top: 58px;
            background: url(../assets/images/homepage/homeBg.png) no-repeat;
            background-position: center;
            background-size: cover;
        }

        .c-home__cta-title {
            @include mobile {
                font-size: 32px;
            }

            font-size: 38px;
            color: $color__grey--dark2;
        }

        .c-home__btn {
            display: inline-block;
            margin-top: 20px;
            border-radius: 42px;
            padding: 10px 30px;
            font-size: $font-size--h1;
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

    .c-enquiry__container {
        padding: 50px 0;
        background-color: $color__red--dark;

        .container {
            @include mobile {
                padding: 0 30px;
            }

            padding: 0 100px;
        }
    }
</style>
