<template>
    <div class="c-enquiry row">
        <div class="col-sm-8 col-xs-12 c-enquiry__left">
            <h3><strong>免费</strong>咨询</h3>
            <form class="c-enquiry__enquiry row">
                <div class="col-sm-5">
                    <div class="form-group">
                        <input class="form-control" type="text" name="name" placeholder="姓名*" required>
                    </div>
                    <div class="form-group">
                        <vue-tel-input class="form-control c-enquiry__phone" placeholder="电话*"
                            v-model="phone"
                            @onInput="onInput"
                            :preferredCountries="['cn', 'hk', 'us']"
                            disabledFetchingCountry
                            required>
                        </vue-tel-input>
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="email" v-model="email" placeholder="邮箱*" required>
                    </div>
                </div>
                <div class="col-sm-7">
                    <textarea class="form-control c-enquiry__description" name="description"
                        placeholder="（选填）您可输入对分时度假的疑问"
                    ></textarea>
                    <input type="hidden" name="web_case_id" id="web_case_id" value="">
                    <div class="c-enquiry__footer">
                        <span class="c-enquiry__disclaimer">
                            提交即为接受
                            <a class="c-enquiry__link" href="http://www.juwai.com/general/legal/" target="_blank">
                                居外使用条款
                            </a>
                            和
                            <a class="c-enquiry__link" href="http://www.juwai.com/general/privacy/" target="_blank">
                                隐私政策
                            </a>
                        </span>
                        <button class="btn btn-danger" type="submit">提交</button>
                    </div>
                </div>
            </form>
        </div>

        <div class="col-sm-4 col-xs-12 c-enquiry__right">
            <div class="c-enquiry__call-us">
                <h3 class="u-margin__top--0"><strong>买家服务热线</strong></h3>
                <span class="c-enquiry__text--small">周一至周日 9:00 - 21:00</span>
                <a class="c-enquiry__phone-number" href="tel:+86 400 041 7515">
                    400 041 7515
                </a>
            </div>
            <div class="c-enquiry__call-you-back">
                <h3 class="u-margin__top--0"><strong>免费通话</strong></h3>
                <span class="c-enquiry__text--small">
                    我们将立即回电。该通话对您免费，请放心接听。
                    手机请直接输入，座机前加区号：如0105992xxxx
                </span>

                <div class="input-group c-enquiry__lxb">
                    <input type="text" class="form-control c-enquiry__lxb-number" placeholder="请输入您的电话">
                    <span class="input-group-btn">
                        <button class="btn btn-danger c-enquiry__cal-btn" type="button"
                        >给您回电</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueTelInput from 'vue-tel-input';
    export default {
        components: {
            VueTelInput,
        },
        data() {
            return {
                phone: '',
                email: '',
            };
        },
        methods: {
            onInput({ number, isValid, country }) {
                console.log(number, isValid, country);
            },
        },
    }
</script>

<style scoped lang="scss">
    @import '~vue-tel-input/dist/vue-tel-input.css';
    @import 'assets/styles/settings';
    .c-enquiry {
        border-radius: 7px;
        background-color: $color__white;
        box-shadow: $box-shadow;

        // stylelint-disable-next-line
        h3 {
            font-size: 1.5rem;
            font-weight: 300;
        }

        .c-enquiry__right {
            border-radius: 0 7px 7px 0;
            padding: 20px;
            color: $color__white;
            background: $color__grey--dark2;
        }

        .c-enquiry__left {
            padding: 20px;
        }

        .c-enquiry__enquiry {
            margin-right: 10px;

            .c-enquiry__phone {
                padding: 8px 0;
            }

            .c-enquiry__description {
                height: 175px;
                resize: none;
            }
        }

        .c-enquiry__footer {
            display: flex;
            margin-top: 15px;
            align-items: center;
            justify-content: space-between;
        }

        .c-enquiry__disclaimer {
            font-size: $font-size--h6;
        }

        .c-enquiry__link {
            color: $color__red;
        }

        .c-enquiry__call-us {
            border-bottom: 1px solid $color__grey;
            padding-bottom: 20px;
        }

        .c-enquiry__text--small {
            font-size: $font-size--h6;
            color: $color__grey--light;
        }

        .c-enquiry__phone-number {
            display: block;
            font-size: $font-size--h1;
            font-weight: 300;
            color: $color__white;
        }

        .c-enquiry__call-you-back {
            margin-top: 20px;
        }

        .c-enquiry__lxb {
            margin-top: 20px;
        }

        .c-enquiry__cal-btn {
            height: 50px;
            border-radius: 0 4px 4px 0;
        }

        .c-enquiry__lxb-number {
            font-size: $font-size--h4;
        }

        .form-group {
            position: relative;
            margin-bottom: 20px;
        }

        .form-control {
            height: auto;
            border-color: $color__grey--light;
            padding: 12px;
        }

        .btn {
            &:focus {
                outline: none;
            }
        }

        .btn-danger {
            background: $color__red;
        }
    }
</style>
