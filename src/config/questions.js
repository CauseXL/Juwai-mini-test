/* eslint-disable object-curly-newline */
const Questions = {
    family: {
        title: '家庭情况',
        questions: [
            { answerId: 1, key: 'single-lady', name: '单身女士', value: '' },
            { answerId: 2, key: 'single-man', name: '单身男士', value: '' },
            { answerId: 3, key: 'couple', name: '夫妻双人', value: '' },
            { answerId: 4, key: 'couple-with-child', name: '夫妻加小孩', value: '' },
            { answerId: 5, key: 'retire', name: '退休人士', value: '' },
        ],
    },
    lifeStyle: {
        title: '生活方式',
        questions: [
            { answerId: 6, key: 'education', name: '教育', value: '' },
            { answerId: 7, key: 'business', name: '商务', value: '' },
            { answerId: 8, key: 'retire', name: '退休', value: '' },
            { answerId: 9, key: 'housewife', name: '家庭主妇', value: '' },
        ],
    },
    location: {
        title: '地形偏好',
        questions: [
            { answerId: 10, key: 'beach', name: '海滩', value: '' },
            { answerId: 11, key: 'forest', name: '森林', value: '' },
            { answerId: 12, key: 'desert', name: '沙漠', value: '' },
            { answerId: 13, key: 'mountain', name: '冬季雪山', value: '' },
            { answerId: 14, key: 'lake', name: '湖泊', value: '' },
            { answerId: 15, key: 'pool', name: '游泳池', value: '' },
            { answerId: 16, key: 'downtown', name: '市中心', value: '' },
            { answerId: 17, key: 'island', name: '岛屿', value: '' },
        ],
    },
    motivation: {
        title: '度假动机',
        questions: [
            { answerId: 18, key: 'treatself', name: '犒劳自己', value: 'rich' },
            { answerId: 19, key: 'club', name: '夜总会', value: 'adventurer' },
            { answerId: 20, key: 'sightseeing', name: '旅游观光', value: 'boheme' },
            { answerId: 21, key: 'experience', name: '体验魅力生活', value: 'rich' },
            { answerId: 22, key: 'family', name: '亲子活动', value: 'wiser' },
        ],
    },
    plan: {
        title: '假期安排',
        questions: [
            { answerId: 23, key: 'sightseeing', name: '文化与休闲观光', value: 'boheme' },
            { answerId: 24, key: 'property', name: '搜寻房产', value: 'rich' },
            { answerId: 25, key: 'experience', name: '体验户外和冒险运动', value: 'adventurer' },
            { answerId: 26, key: 'shopping', name: '购物', value: 'rich' },
            { answerId: 27, key: 'visit', name: '探访亲朋好友', value: 'wiser' },
            { answerId: 28, key: 'school', name: '名校游学之旅', value: 'wiser' },
            { answerId: 29, key: 'medical', name: '医疗或保健', value: 'wiser' },
            { answerId: 30, key: 'lottery', name: '博彩', value: 'adventurer' },
        ],
    },
    consume: {
        title: '消费习惯',
        questions: [
            { answerId: 31, key: 'LV', name: 'LV', value: '' },
            { answerId: 32, key: 'coach', name: 'coach', value: '' },
            { answerId: 33, key: 'zara', name: 'zara', value: '' },
            { answerId: 34, key: 'hm', name: 'hm', value: '' },
        ],
    },
    type: {
        title: '物业类型',
        questions: [
            { answerId: 35, key: 'forest', name: '森林小屋', value: 'boheme' },
            { answerId: 36, key: 'pool', name: '带泳池的物业', value: 'rich' },
            { answerId: 37, key: 'hotel', name: '宾馆-室内', value: 'rich' },
            { answerId: 38, key: 'seaside', name: '海边小屋', value: 'adventurer' },
            { answerId: 39, key: 'resort', name: '滑雪度假村', value: 'adventurer' },
            { answerId: 40, key: 'apartment', name: '城市景观公寓', value: 'wiser' },
        ],
    },
    region: {
        title: '区域偏好',
        questions: [
            { answerId: 41, key: 'North-America', name: '北美', value: '' },
            { answerId: 42, key: 'Asian', name: '亚洲', value: '' },
            { answerId: 43, key: 'Australia', name: '新西兰&澳洲', value: '' },
            { answerId: 44, key: 'Europe', name: '欧洲', value: '' },
            { answerId: 45, key: 'Middle-East', name: '中东', value: '' },
            { answerId: 46, key: 'Africa', name: '非洲', value: '' },
            { answerId: 47, key: 'South-America', name: '中-南美洲', value: '' },
        ],
    },
};

export default Questions;
