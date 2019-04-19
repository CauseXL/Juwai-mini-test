<template>
    <div class="c-questions">
        <vue-progress-bar></vue-progress-bar>
        <div class="c-questions__banner">
            <div class="container">
                <img class="c-questions__logo" src="../assets/images/JuwaiLogo.svg" alt="logo">
                <span class="c-questions__title">最适合你的{{questionName}}</span>
            </div>
        </div>
        <div class="c-questions__container">
            <div class="container">
                <h3 class="c-questions-list__title">以下哪一个最适合形容你？</h3>
                <div class="row">
                    <div class="col-md-3 col-sm-6 col-6" v-for="question in questions" :key="question.key">
                        <img class="c-questions__image" @click="nextQuestions"
                            :src="`${publicPath}/img/questions/${type}/${question.name}.jpg`" alt="">
                        <p>{{question.name}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Questions from '@/config/questions';

    export default {
        data() {
            return {
                publicPath: process.env.BASE_URL,
                questionName: '家庭情况',
                questionsName: ['家庭情况', '生活方式', '地形偏好', '度假动机', '假期安排', '消费习惯', '物业类型', '区域偏好'],
                types: Object.keys(Questions),
                type: 'family',
                questions: Questions.family.questions,
                step: 0,
            };
        },
        mounted () {

        },
        methods: {
            nextQuestions() {
                this.step +=1;
                const percent = 100 / this.questionsName.length;
                const progress = percent * this.step;
                if ( this.step < this.questionsName.length) {
                    this.type = this.types[this.step];
                    this.questionName = this.questionsName[this.step];
                    this.questions = Questions[this.type].questions;
                    this.$Progress.set(progress);
                } else {
                    this.$Progress.finish();
                    this.$router.push('/result');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import 'assets/styles/settings';

    .c-questions {
        .c-questions__banner {
            width: 100%;
            height: 50vh;
            background: $linear-gradient, url('../assets/images/answerBanner.jpg') no-repeat;
            background-size: cover;
        }

        .c-questions__logo {
            @include mobile {
                width: 100px;
            }

            width: 210px;
            margin-top: 50px;
            margin-bottom: 50px;
        }

        .c-questions__title {
            @include mobile {
                font-size: $font-size--h4;
            }

            margin-left: 30px;
            padding-bottom: 18px;
            border-bottom: 2px solid $color__white;
            color: $color__white;
            font-size: $font-size--h2;
        }

        .c-questions__container {
            @include mobile {
                margin: 0 20px -100px;
                padding: 20px;
                transform: translateY(-120px);
            }

            min-height: 723px;
            margin: 0 50px -180px;
            padding: 50px 85px;
            border-radius: 10px;
            box-shadow: $box-shadow;
            background-color: $color__white;
            text-align: center;
            transform: translateY(-180px);
        }

        .c-questions-list__title {
            @include mobile {
                margin-bottom: 20px;
                font-size: $font-size--h3;
            }

            font-weight: 300;
            margin-bottom: 50px;
        }

        .c-questions__image {
            width: 100%;
            max-width: 200px;
            margin-bottom: 30px;
            border-radius: 15px;
            box-shadow: $box-shadow;
            cursor: pointer;

            &:hover {
                border: 5px solid $color__red;
            }
        }
    }

</style>


