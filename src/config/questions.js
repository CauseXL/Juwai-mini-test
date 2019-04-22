const Questions = {
    family: {
        title: '家庭情况',
        questions: [
            { key: 'single-lady', name: '单身女士', value: '' },
            { key: 'single-man', name: '单身男士', value: '' },
            { key: 'couple', name: '夫妻双人', value: '' },
            { key: 'couple-with-child', name: '夫妻加小孩', value: '' },
            { key: 'retire', name: '退休人士', value: '' },
        ],
    },
    lifeStyle: {
        title: '生活方式',
        questions: [
            { key: 'education', name: '教育', value: '' },
            { key: 'business', name: '商务', value: '' },
            { key: 'retire', name: '退休', value: '' },
            { key: 'housewife', name: '家庭主妇', value: '' },
        ],
    },
    location: {
        title: '地形偏好',
        questions: [
            { key: 'beach', name: '海滩', value: '' },
            { key: 'forest', name: '森林', value: '' },
            { key: 'desert', name: '沙漠', value: '' },
            { key: 'mountain', name: '冬季雪山', value: '' },
            { key: 'lake', name: '湖泊', value: '' },
            { key: 'pool', name: '游泳池', value: '' },
            { key: 'downtown', name: '市中心', value: '' },
            { key: 'island', name: '岛屿', value: '' },
        ],
    },
    motivation: {
        title: '度假动机',
        questions: [
            { key: 'treatself', name: '犒劳自己', value: '' },
            { key: 'club', name: '夜总会', value: '' },
            { key: 'sightseeing', name: '旅游观光', value: '' },
            { key: 'experience', name: '体验魅力生活', value: '' },
            { key: 'family', name: '亲子活动', value: '' },
        ],
    },
    plan: {
        title: '假期安排',
        questions: [
            { key: 'sightseeing', name: '文化与休闲观光', value: '' },
            { key: 'property', name: '搜寻房产', value: '' },
            { key: 'experience', name: '体验户外和冒险运动', value: '' },
            { key: 'shopping', name: '购物', value: '' },
            { key: 'visit', name: '探访亲朋好友', value: '' },
            { key: 'school', name: '名校游学之旅', value: '' },
            { key: 'medical', name: '医疗或保健', value: '' },
            { key: 'lottery', name: '博彩', value: '' },
        ],
    },
    consume: {
        title: '消费习惯',
        questions: [
            { key: 'LV', name: 'LV', value: '' },
            { key: 'coach', name: 'coach', value: '' },
            { key: 'zara', name: 'zara', value: '' },
            { key: 'hm', name: 'hm', value: '' },
        ],
    },
    type: {
        title: '物业类型',
        questions: [
            { key: 'forest', name: '森林小屋', value: '' },
            { key: 'pool', name: '带泳池的物业', value: '' },
            { key: 'hotel', name: '宾馆-室内', value: '' },
            { key: 'seaside', name: '海边小屋', value: '' },
            { key: 'resort', name: '滑雪度假村', value: '' },
            { key: 'apartment', name: '城市景观公寓', value: '' },
        ],
    },
    region: {
        title: '区域偏好',
        questions: [
            { key: 'North-America', name: '北美', value: '' },
            { key: 'Asian', name: '亚洲', value: '' },
            { key: 'Australia', name: '新西兰&澳洲', value: '' },
            { key: 'Europe', name: '欧洲', value: '' },
            { key: 'Middle-East', name: '中东', value: '' },
            { key: 'Africa', name: '非洲', value: '' },
            { key: 'South-America', name: '中-南美洲', value: '' },
        ],
    },
};

export default Questions;
