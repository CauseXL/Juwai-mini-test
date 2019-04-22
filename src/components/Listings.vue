<template>
    <div class="c-juwai-select">
        <div class="c-juwai-select__titles">
            <h3 class="c-juwai-select__title">—— <strong>{{resultName}}首选</strong> ——</h3>
            <h1 class="c-juwai-select__title-cover d-none">RECOMMENDATIOIN</h1>
        </div>
        <div class="c-juwai-select row">
            <div class="c-juwai-select__cards col-sm-3" v-for="data in listingsData" :key="data.id">
                <a class="c-juwai-select__card" target="_blank" :href="data.url">
                    <div class="c-juwai-select__image" :style="{ 'background-image': `url(${data.image})` }">
                        <span class="c-juwai-select__location">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            {{data.location}}
                        </span>
                    </div>
                    <div class="c-juwai-select__content">
                        <h5 class="c-juwai-select__content-title">{{data.title}}</h5>
                        <p class="c-juwai-select__content-description">
                            {{data.description}}
                        </p>
                    </div>
                    <div class="c-juwai-select__footer">
                        <img class="c-juwai-select__logo" :src="data.companyLogo" alt="companyLogo">
                        <span>了解更多 <i class="fa fa-angle-right" aria-hidden="true"></i></span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import listingsData from '@/config/listings-data';

export default {
    data() {
        return {
            resultName: '分时度假',
            listingsData,
        };
    },
    methods: {
        onInput({ number, isValid, country }) {
            console.log(number, isValid, country);
        },
    },
};
</script>

<style scoped lang="scss">
    @import "assets/styles/settings";

    .c-juwai-select {
        .c-juwai-select__titles {
            position: relative;
            text-align: center;

            .c-juwai-select__title {
                @include mobile {
                    font-size: $font-size--h3;
                }

                height: 50px;
            }

            .c-juwai-select__title-cover {
                position: absolute;
                bottom: 0;
                width: 100%;
                opacity: 0.1;
            }
        }

        .c-juwai-select__card {
            @include mobile {
                margin-bottom: 20px;
            }

            display: block;
            border-radius: 7px;
            overflow: hidden;
            color: $color__grey--dark;
            box-shadow: $box-shadow;

            &:hover {
                text-decoration: none;
            }
        }

        .c-juwai-select__image {
            position: relative;
            height: 167px;
            background-size: cover;

            .c-juwai-select__location {
                position: absolute;
                bottom: 10px;
                border-radius: 5px;
                padding: 5px;
                font-size: $font-size--h6;
                color: $color__white;
                background-color: transparentize($color__grey--dark, 0.2);
            }
        }

        .c-juwai-select__content {
            padding: 10px;

            .c-juwai-select__content-title {
                font-weight: 600;
            }

            .c-juwai-select__content-description {
                margin: 0;
                font-size: $font-size--h6;
            }
        }

        .c-juwai-select__logo {
            max-width: 100px;
            max-height: 40px;
        }

        .c-juwai-select__footer {
            display: flex;
            padding: 15px;
            font-size: $font-size--h4;
            font-weight: 600;
            color: #7f745b;
            background-color: transparentize($color__gold, 0.8);
            justify-content: space-between;
            align-items: flex-end;
        }
    }
</style>
