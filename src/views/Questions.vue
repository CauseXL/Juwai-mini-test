<template>
    <div class="c-questions">
        <vue-progress-bar></vue-progress-bar>
        <div class="c-questions__banner">
            <div class="container">
                <img class="c-questions__logo" src="../assets/images/JuwaiLogo.svg" alt="logo">
                <span class="c-questions__title">以下哪一个最适合形容你？</span>
            </div>
        </div>
        <div class="c-questions__container">
            <div class="container">
                <h3 class="c-questions-list__title">最适合你的{{questionName}}</h3>
                <div class="row">
                    <div class="col-md-3 col-sm-6 col-6" v-for="question in questions" :key="question.key">
                        <img class="c-questions__image" @click="nextQuestions(question.value, question.answerId)"
                            :src="getImgUrl(question)" alt="">
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
            questionsName: ['家庭情况', '生活方式', '地形偏好', '度假动机', '假期安排', '消费习惯', '物业类型', '区域偏好(所在大洲)'],
            types: Object.keys(Questions),
            type: 'family',
            questions: Questions.family.questions,
            step: 0,
            score: {
                rich: 0,
                adventurer: 0,
                boheme: 0,
                wiser: 0,
            },
            answers: [],
        };
    },
    mounted() {

    },
    methods: {
        getImgUrl(question) {
            return require(`../assets/images/questions/${this.type}/${question.name}.jpg`);
        },

        nextQuestions(value, id) {
            this.step += 1;
            const percent = 100 / this.questionsName.length;
            const progress = percent * this.step;
            this.answers.push({
                question: this.step,
                answer: id,
            });
            if (this.step < this.questionsName.length) {
                if (value) this.score[value] += 1;
                this.type = this.types[this.step];
                this.questionName = this.questionsName[this.step];
                this.questions = Questions[this.type].questions;
                this.$Progress.set(progress);
                window.scrollTo(0, 0);
            } else {
                this.getResult();
                this.$Progress.finish();
                this.$router.push('/result');
            }
        },

        getResult() {
            const results = Object.keys(this.score);
            const socres = Object.values(this.score);
            console.log(socres);
            const highestScore = Math.max(...socres);
            const index = socres.indexOf(highestScore);
            const resultId = index + 1;
            this.sendResult(this.answers, resultId);
            // const surveryId = this.generateSurveryId();
            localStorage.setItem('resultName', results[index]);
            // localStorage.setItem('surveryId', surveryId);
        },

        sendResult(answers, resultId) {
            // const url = `http://con-3368-change.www.juwai.io/?c=collect&a=saveSurveyData`;
            const url = `${location.origin}/?c=collect&a=saveSurveyData`;
            const data = {
                'questionAnswer[0][question]': answers[0].question,
                'questionAnswer[0][answer]': answers[0].answer,
                'questionAnswer[1][question]': answers[1].question,
                'questionAnswer[1][answer]': answers[1].answer,
                'questionAnswer[2][question]': answers[2].question,
                'questionAnswer[2][answer]': answers[2].answer,
                'questionAnswer[3][question]': answers[3].question,
                'questionAnswer[3][answer]': answers[3].answer,
                'questionAnswer[4][question]': answers[4].question,
                'questionAnswer[4][answer]': answers[4].answer,
                'questionAnswer[5][question]': answers[5].question,
                'questionAnswer[5][answer]': answers[5].answer,
                'questionAnswer[6][question]': answers[6].question,
                'questionAnswer[6][answer]': answers[6].answer,
                'questionAnswer[7][question]': answers[7].question,
                'questionAnswer[7][answer]': answers[7].answer,
                result: resultId,
            };
            this.$http({
                url,
                data,
                method: 'post',
                transformRequest: [function (data) {
                    let ret = '';
                    for (const it in data) {
                        ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`;
                    }
                    return ret;
                }],
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }).then((res) => {
                if (res.data.code === 100) {
                    console.log('成功！');
                } else {
                    console.log('失败！');
                }
            });
        },

        generateSurveryId() {
            const possible = 'abcdefghijklmnopqrstuvwxyz';
            let text = '';
            for (let i = 0; i < 8; i += 1) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return `${Date.now()}-${text}`;
        },
    },
};
</script>

<style scoped lang="scss">
    @import "assets/styles/settings";

    .c-questions {
        .c-questions__banner {
            width: 100%;
            height: 50vh;
            background: $linear-gradient, url(../assets/images/answerBanner.jpg) no-repeat center;
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
            border-bottom: 2px solid $color__white;
            padding-bottom: 18px;
            font-size: $font-size--h2;
            color: $color__white;
        }

        .c-questions__container {
            @include mobile {
                position: absolute;
                top: 350px;
                margin: 0 20px -100px;
                padding: 20px;
            }

            max-width: 1080px;
            min-height: 723px;
            margin: 0 auto -180px;
            border-radius: 10px;
            padding: 50px 85px;
            box-shadow: $box-shadow;
            text-align: center;
            background-color: $color__white;
            transform: translateY(-180px);
        }

        .c-questions-list__title {
            @include mobile {
                margin-bottom: 20px;
                font-size: $font-size--h3;
            }

            margin-bottom: 50px;
            font-weight: 300;
        }

        .c-questions__image {
            width: 100%;
            max-width: 200px;
            margin-bottom: 30px;
            border-radius: 15px;
            box-shadow: $box-shadow;
            cursor: pointer;
            transition: all 0.2s ease-in-out;

            &:hover {
                transform: scale(1.03);
                box-shadow: 0 0 0 5px $color__red;
            }
        }
    }
</style>
