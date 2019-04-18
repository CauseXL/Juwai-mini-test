<template>
    <div>
        <FullPage>
            <div class="c-result container">
                <div class="row">
                    <div class="col-sm-6 c-result__container">
                        <img class="c-result__logo" src="../assets/images/JuwaiLogo.png" alt="logo">
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
        <div class="c-listings__container container">
            <Listings />
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

export default {
    name: 'result',
    components: {
        FullPage,
        Listings,
        Enquiry,
    },
    data() {
        return {
            resultName: '分时度假',
            resultDesc: '分时度假就是把酒店或度假村的一间客房或一套旅游公寓，以会员制的方式一次性出售给客户，会员获得每年到酒店或度假村住宿7天的一种休闲度假方式 。',
        };
    },
};
</script>

<style scoped lang="scss">
    @import 'assets/styles/settings';
    .c-result {
        font-size: $font-size--h1;
        color: $color__white;

        .c-result__container {
            margin-top: 100px;
        }

        .c-result__logo {
            margin-bottom: 50px;
        }

        .c-result__title--large {
            font-size: 60px;
            font-weight: 900;
        }

        .c-result__btn {
            font-size: $font-size--h2;
            background-color: $color__red;
        }
    }

    .c-listings__container {
        @include mobile {
            margin-bottom: 20px;
            padding: 20px;
            transform: none;
        }

        margin-bottom: -180px;
        padding: 50px 85px;
        border-radius: 10px;
        box-shadow: $box-shadow;
        background-color: $color__white;
        transform: translateY(-250px);
    }

    .c-enquiry__container {
        padding: 50px 0;
        background-color: $color__red--dark;

        .container {
            padding: 0 100px;
        }
    }
</style>
