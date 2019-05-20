<template>
    <div>
        <FullPage :type="type">
            <div class="c-result container">
                <div class="row">
                    <router-link class="c-result__retest" :to="{ name: 'home' }">
                        <i class="fa fa-undo" aria-hidden="true"></i>
                        再测一次
                    </router-link>
                    <div class="col-lg-6 c-result__container">
                        <img class="c-result__logo" src="../assets/images/JuwaiLogo.svg" alt="logo">
                        <div class="c-result__content">
                            <p class="c-result__title">最适合你的是
                                <span class="c-result__title--large">{{resultName}}</span>
                            </p>
                            <div class="c-result__desc">{{resultDesc}}</div>
                            <a class="c-result__btn" href="#c-enquiry__container">了解更多</a>
                        </div>
                    </div>
                </div>
            </div>
        </FullPage>
        <div class="c-listings__container" v-if='false'>
            <div class="container">
                <Listings :resultName='resultName' />
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
import Listings from '@/components/Listings';
import Enquiry from '@/components/Enquiry';
import FullPage from '@/components/FullPage';
import Results from '@/config/result';

export default {
    name: 'result',
    components: {
        FullPage,
        Listings,
        Enquiry,
    },
    data() {
        return {
            type: '',
            resultName: '',
            resultDesc: '',
        };
    },
    methods: {
        reTest() {
            this.$router.push('/');
        },
    },
    created() {
        this.type = localStorage.getItem('resultName');
        this.resultName = Results[this.type].title;
        this.resultDesc = Results[this.type].desc;
    },
};
</script>

<style scoped lang="scss">
    @import "assets/styles/settings";

    .c-result {
        @include mobile {
            font-size: $font-size--h2;
        }

        position: relative;
        font-size: $font-size--h1;
        color: $color__white;

        .c-result__retest {
            @include mobile {
                top: 20px;
                padding: 10px 15px;
                font-size: $font-size--h5;
            }

            position: absolute;
            top: 50px;
            right: 0;
            z-index: 1;
            display: inline-block;
            border: 1px solid $color__grey--light;
            border-radius: 42px;
            padding: 15px 25px;
            font-size: $font-size--h2;
            color: $color__grey--dark;
            cursor: pointer;
            background-color: $color__white;
            transition: all 0.2s ease-in-out;

            &:hover {
                transform: scale(1.03);
                text-decoration: none;
            }
        }

        .c-result__container {
            @include mobile {
                margin-top: 20px;
            }

            margin-top: 50px;
        }

        .c-result__logo {
            @include mobile {
                width: 100px;
            }

            width: 210px;
            margin-bottom: 50px;
        }

        .c-result__title--large {
            @include mobile {
                font-size: 30px;
            }

            font-size: 60px;
            font-weight: 900;
        }

        .c-result__desc {
            margin-bottom: 40px;
            border-left: 5px solid $color__red;
            padding-left: 20px;
            font-weight: 300;
        }

        .c-result__btn {
            display: inline-block;
            border-radius: 42px;
            padding: 15px 25px;
            font-size: $font-size--h2;
            color: $color__white;
            background-color: $color__red;
            transition: all 0.2s ease-in-out;

            &:hover {
                transform: scale(1.03);
                text-decoration: none;
            }
        }
    }

    .c-listings__container {
        @include mobile {
            margin: 0 20px -100px;
            padding: 20px;
            transform: translateY(-120px);
        }

        margin: 0 50px -100px;
        border-radius: 10px;
        box-shadow: $box-shadow;
        padding: 50px 85px;
        background-color: $color__white;
        transform: translateY(-180px);
    }

    .c-enquiry__container {
        padding: 50px 0;
        background-color: $color__red--dark;

        .container {
            @include mobile {
                padding: 0 40px;
            }

            padding: 0 100px;
        }
    }
</style>
