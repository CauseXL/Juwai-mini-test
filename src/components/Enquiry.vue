<template>
    <div class="c-enquiry row">
        <div class="col-sm-8 col-xs-12 c-enquiry__left">
            <h3><strong>免费</strong>咨询</h3>
            <form class="c-enquiry__enquiry row" @submit.prevent="validateBeforeSubmit">
                <div class="col-sm-5">
                    <div class="form-group">
                        <input class="form-control" type="text" name="name" placeholder="姓名*" v-model="name"
                            v-validate="'required'" :class="{ 'c-enquiry__error': errors.has('name') }">
                    </div>
                    <div class="form-group">
                        <vue-tel-input class="form-control c-enquiry__phone" :class="{ 'c-enquiry__error': isError }"
                            placeholder="电话*"
                            v-model="phone"
                            @onInput="onInput"
                            :preferredCountries="['cn', 'hk', 'us']"
                            disabledFetchingCountry
                            required>
                        </vue-tel-input>
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="email" name="email" v-model="email" placeholder="邮箱*"
                            v-validate="'required|email'" :class="{ 'c-enquiry__error': errors.has('email') }">
                    </div>
                </div>
                <div class="col-sm-7">
                    <textarea class="form-control c-enquiry__description" name="description" v-model="desc"
                        placeholder="（选填) 您可输入对分时度假的疑问，举例：你们可以给我更多关于当地房产的资料吗？"
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
                        <button class="btn btn-danger c-enquiry__submit-btn" type="submit">提交</button>
                    </div>
                </div>
            </form>
        </div>

        <div class="col-sm-4 col-xs-12 c-enquiry__right">
            <div class="c-enquiry__call-us">
                <h3 class="u-margin__top--0"><strong>居外服务热线</strong></h3>
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
                    <input type="text" class="form-control c-enquiry__lxb-number" id="c-enquiry__lxb-number"
                        placeholder="请输入您的电话">
                    <span class="input-group-btn">
                        <button class="btn btn-danger c-enquiry__cal-btn" type="button" @click="lxbCall"
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
            name: '',
            phone: '',
            email: '',
            desc: '',
            isError: false,
        };
    },
    methods: {
        onInput({ isValid }) {
            this.isError = !isValid;
        },

        lxbCall() {
            lxb.call(document.getElementById('c-enquiry__lxb-number'));
        },

        validateBeforeSubmit() {
            if (!this.isError && this.phone) {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        const url = `${location.origin}/?c=collect&a=sale_force_data`;
                        // const url = `http://con-3368-change.www.juwai.io/?c=collect&a=sale_force_data`;
                        const {
                            name, phone, email, desc,
                        } = this;
                        const countryCode = phone.split(' ').slice(0, 1).toString();
                        const mobile = phone.split(' ').slice(1, phone.length - 1).join('');
                        // const surveryId = localStorage.getItem('surveryId');
                        this.$http({
                            url,
                            method: 'post',
                            data: {
                                orgid: '00D90000000lh7N',
                                // Case owner
                                // '00G90000000PTnH': 'Consumer Queue',
                                // web case id
                                // '00N6F00000Hs3en': surveryId,
                                name,
                                countryCode,
                                phone: mobile,
                                email,
                                description: desc,
                                type: 'Time Share',
                                originType: 'timeShare',
                                origin: screen.width > 768 ? 'Web' : 'HTML5',
                                source: 'Landing Page',
                                subject: 'Timeshare Property Enquiry',
                            },
                            transformRequest: [function (data) {
                                let ret = ''
                                for (let it in data) {
                                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                                }
                                return ret
                            }],
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'X-Requested-With': 'XMLHttpRequest',
                            }
                        }).then((res) => {
                            if (res.data.result === 1) {
                                alert('提交成功！');
                            } else {
                                alert('提交失败！');
                            }
                        });
                    }
                });
            }
        },
    },
};
</script>

<style scoped lang="scss">
    @import "~vue-tel-input/dist/vue-tel-input.css";
    @import "assets/styles/settings";

    .c-enquiry {
        box-shadow: $box-shadow;

        // stylelint-disable-next-line
        h3 {
            font-size: 1.5rem;
            font-weight: 300;
        }

        .c-enquiry__right {
            @include mobile {
                border-radius: 0 0 7px 7px;
            }

            border-radius: 0 7px 7px 0;
            padding: 20px;
            color: $color__white;
            background: $color__grey--dark2;
        }

        .c-enquiry__left {
            @include mobile {
                border-radius: 7px 7px 0 0;
            }

            border-radius: 7px 0 0 7px;
            padding: 20px;
            background-color: $color__white;
        }

        .c-enquiry__enquiry {
            .c-enquiry__phone {
                padding: 8px 0;
            }

            .c-enquiry__description {
                height: 175px;
                resize: none;
            }
        }

        .c-enquiry__footer {
            @include mobile {
                display: block;
            }

            display: flex;
            margin-top: 15px;
            align-items: center;
            justify-content: space-between;
        }

        .c-enquiry__disclaimer {
            font-size: $font-size--h6;
        }

        .c-enquiry__submit-btn {
            @include mobile {
                width: 100%;
                margin-top: 15px;
            }

            transition: all 0.2s ease-in-out;

            &:hover {
                transform: scale(1.03);
            }
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

        .c-enquiry__error {
            border-color: $color__red;
        }
    }
</style>
