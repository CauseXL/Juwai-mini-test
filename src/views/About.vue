<template>
    <div class="container">
        <div class="c-channel-enquiry row">
            <div class="col-sm-8 col-xs-12 c-channel-enquiry__left">
                <h3><strong>免费</strong>咨询</h3>
                <form class="c-channel-enquiry__enquiry row">
                    <div class="col-sm-5">
                        <div class="form-group">
                            <input class="form-control" type="text" name="name" placeholder="姓名*">
                        </div>
                        <div class="form-group">
                            <input class="form-control" id="c-channel-enquiry__phone"
                                type="tel" name="phone" placeholder="电话*">
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="email" name="email" placeholder="邮箱*">
                        </div>
                    </div>
                    <div class="col-sm-7">
                        <textarea class="form-control c-channel-enquiry__description" name="description"
                            placeholder=""
                        ></textarea>
                        <input type="hidden" name="web_case_id" id="web_case_id" value="">
                        <div class="c-channel-enquiry__footer">
                            <span class="c-channel-enquiry__disclaimer">
                                提交即为接受
                                <a class="ui-u-color__red" href="http://www.juwai.com/general/legal/" target="_blank">
                                    居外使用条款
                                </a>
                                和
                                <a class="ui-u-color__red" href="http://www.juwai.com/general/privacy/" target="_blank">
                                    隐私政策
                                </a>
                            </span>
                            <button class="btn ui-o-button ui-o-button--enquiry" type="submit">提交</button>
                        </div>
                    </div>
                </form>
            </div>

            <div class="col-sm-4 col-xs-12 c-channel-enquiry__right">
                <div class="c-channel-enquiry__call-us">
                    <h3 class="u-margin__top--0"><strong>买家服务热线</strong></h3>
                    <span class="c-channel-enquiry__text--small">周一至周日 9:00 - 21:00</span>
                    <a class="c-channel-enquiry__phone-number" href="tel:+86 400 041 7515">
                        400 041 7515
                    </a>
                </div>
                <div class="c-channel-enquiry__call-you-back">
                    <h3 class="u-margin__top--0"><strong>免费通话</strong></h3>
                    <span class="c-channel-enquiry__text--small">
                        我们将立即回电。该通话对您免费，请放心接听。
                        手机请直接输入，座机前加区号：如0105992xxxx
                    </span>

                    <div class="input-group c-channel-enquiry__lxb">
                        <input type="text" class="form-control c-channel-enquiry__lxb-number" placeholder="请输入您的电话">
                        <span class="input-group-btn">
                            <button class="btn ui-o-button ui-o-button--lxb
                                js-channel-enquiry__send-to-lxb" type="button"
                            >给您回电</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'assets/styles/settings.scss';
.c-channel-enquiry {
        padding-right: 0;
        padding-left: 30px;
        margin-top: 30px;
        margin-bottom: 30px;

    .c-channel-enquiry__right {
        margin-top: -20px;
        margin-bottom: -20px;
        border-radius: 0 7px 7px 0;
        padding: 20px;
        color: $color__white;
        background: $color__grey--dark2;
    }

    .c-channel-enquiry__enquiry {
        margin-right: 10px;
    }

    .c-channel-enquiry__description {
        height: 175px !important;
        resize: none;
    }

    .c-channel-enquiry__footer {
        display: flex;
        margin-top: 15px;
        align-items: center;
        justify-content: space-between;
    }

    .c-channel-enquiry__disclaimer {
        font-size: $font-size--h6;
    }

    .c-channel-enquiry__call-us {
        border-bottom: 1px solid $color__grey;
        padding-bottom: 20px;
    }

    .c-channel-enquiry__text--small {
        font-size: $font-size--h6;
        color: $color__grey--light;
    }

    .c-channel-enquiry__phone-number {
        display: block;
        font-size: $font-size--h1;
        font-weight: 300;
        color: $color__white;
    }

    .c-channel-enquiry__call-you-back {
        margin-top: 20px;
    }

    .c-channel-enquiry__lxb {
        margin-top: 20px;
    }

    .ui-o-button {
        &:focus {
            outline: none;
        }
    }

    .ui-o-button--enquiry {
        border-radius: 4px;
        padding: 8px 15px;
    }

    .ui-o-button--lxb {

        height: 50px;
        border-radius: 0 4px 4px 0;
    }

    .c-channel-enquiry__lxb-number {
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

    .intl-tel-input {
        width: 100%;
    }
}

</style>
