/* eslint-disable object-curly-newline */
const Questions = {
    plan: {
        title: '每年有几次旅行计划？',
        questions: [
            { answerId: 1, key: '', name: '1-2天', value: '' },
            { answerId: 2, key: '', name: '3-5天', value: '' },
            { answerId: 3, key: '', name: '更多', value: '' },
        ],
    },
    duration: {
        title: '每次旅行的周期有多长？',
        questions: [
            { answerId: 6, key: '', name: '1-3天', value: '' },
            { answerId: 7, key: '', name: '5-7天', value: '' },
            { answerId: 8, key: '', name: '更长', value: '' },
        ],
    },
    brand: {
        title: '是否有固定入住的酒店品牌？',
        questions: [
            { answerId: 10, key: '', name: '是', value: '' },
            { answerId: 11, key: '', name: '否', value: '' },
        ],
    },
    impression: {
        title: '你对“分时度假”的印象是',
        questions: [
            { answerId: 18, key: '', name: '品质享受', value: 'rich' },
            { answerId: 19, key: '', name: '优惠价格', value: 'adventurer' },
            { answerId: 20, key: '', name: '服务团队', value: 'boheme' },
            { answerId: 21, key: '', name: '不了解', value: 'rich' },
        ],
    },
    value: {
        title: '关于度假旅游的住宿，最看重的是',
        questions: [
            { answerId: 23, key: '', name: '性价比', value: 'boheme' },
            { answerId: 24, key: '', name: '不差钱', value: 'rich' },
            { answerId: 25, key: '', name: '酒店服务', value: 'adventurer' },
            { answerId: 26, key: '', name: '什么都要', value: 'rich' },
        ],
    },
    status: {
        title: '个人状态',
        questions: [
            { answerId: 31, key: '', name: '单身', value: '' },
            { answerId: 32, key: '', name: '已婚', value: '' },
            { answerId: 33, key: '', name: '已育', value: '' },
            { answerId: 34, key: '', name: '退休', value: '' },
        ],
    },
    career: {
        title: '您的职业',
        questions: [
            { answerId: 35, key: 'forest', name: '学生', value: 'boheme' },
            { answerId: 36, key: 'pool', name: '上班族', value: 'rich' },
            { answerId: 37, key: 'hotel', name: '自由职业', value: 'rich' },
            { answerId: 38, key: 'seaside', name: '退休', value: 'adventurer' },
        ],
    },
    purpose: {
        title: '旅游目的',
        questions: [
            { answerId: 41, key: '', name: '观光', value: '' },
            { answerId: 42, key: '', name: '度假', value: '' },
            { answerId: 43, key: '', name: '购物', value: '' },
            { answerId: 44, key: '', name: '探亲', value: '' },
        ],
    },
    style: {
        title: '喜欢的旅游模式',
        questions: [
            { answerId: 35, key: '', name: '旅行团', value: 'boheme' },
            { answerId: 36, key: '', name: '自由行', value: 'rich' },
            { answerId: 37, key: '', name: '私人定制团', value: 'rich' },
            { answerId: 38, key: '', name: '背包客', value: 'adventurer' },
        ],
    },
    type: {
        title: '喜欢的住宿类型',
        questions: [
            { answerId: 35, key: '', name: '星级酒店', value: 'boheme' },
            { answerId: 36, key: '', name: '度假式别墅', value: 'rich' },
            { answerId: 37, key: '', name: '民宿', value: 'rich' },
            { answerId: 38, key: '', name: '露营', value: 'adventurer' },
        ],
    },
    seeing: {
        title: '喜欢的住宿景观',
        questions: [
            { answerId: 35, key: '', name: '酒店泳池', value: 'boheme' },
            { answerId: 36, key: '', name: '阳光海滩', value: 'rich' },
            { answerId: 37, key: '', name: '湖边', value: 'rich' },
            { answerId: 38, key: '', name: '森林', value: 'adventurer' },
            { answerId: 39, key: '', name: '市中心', value: 'adventurer' },
            { answerId: 40, key: '', name: '雪山', value: 'wiser' },
            { answerId: 40, key: '', name: '海岛', value: 'wiser' },
            { answerId: 40, key: '', name: '沙漠', value: 'wiser' },
        ],
    },
    theme: {
        title: '喜欢的旅行主题',
        questions: [
            { answerId: 35, key: '', name: '观光', value: 'boheme' },
            { answerId: 36, key: '', name: '探险', value: 'rich' },
            { answerId: 37, key: '', name: '看房团', value: 'rich' },
            { answerId: 38, key: '', name: '游学夏令营', value: 'adventurer' },
            { answerId: 39, key: '', name: '医疗旅游', value: 'adventurer' },
            { answerId: 40, key: '', name: '博彩游', value: 'wiser' },
        ],
    },
    habit: {
        title: '您的日常出行习惯',
        questions: [
            { answerId: 35, key: '', name: '私家车', value: 'boheme' },
            { answerId: 36, key: '', name: '出租车', value: 'rich' },
            { answerId: 37, key: '', name: '公交车', value: 'rich' },
        ],
    },
    location: {
        title: '喜欢的旅游地区',
        questions: [
            { answerId: 41, key: '', name: '北美', value: '' },
            { answerId: 42, key: '', name: '亚洲', value: '' },
            { answerId: 43, key: '', name: '大洋洲', value: '' },
            { answerId: 44, key: '', name: '欧洲', value: '' },
            { answerId: 45, key: '', name: '中东', value: '' },
            { answerId: 46, key: '', name: '非洲', value: '' },
            { answerId: 47, key: '', name: '中南美洲', value: '' },
        ],
    },
};

export default Questions;
