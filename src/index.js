const cron = require('node-cron');
const talk = require('./talk');

cron.schedule('0,30,40 10,11,14,15,16,17,18 * * 1-5', () => {
    const d = new Date();
    const y = d.getFullYear();
    const m = d.getMonth();
    const dt = d.getDate();

    const w = d.getDay();
    const h = d.getHours();
    const mi = d.getMinutes();

    if (mi === 40 && h !== 11) {
        return;
    }

    wMap = ['日', '一', '二', '三', '四', '五', '六'];

    const nowDay = `${y}年${m}月${dt}日 星期${wMap[w]} ${h}点${mi} 分`;
    let restText = '休息一下吧';
    let atMobiles = [];
    if (h === 14 && mi === 30) {
        restText = '快去点餐';
        atMobiles.push['15255604360'];
    } else if (w === 5 && h === 10 && mi === 30) {
        restText = '快去点夏日福利';
    } else if (w === 5 && h === 18 && mi === 30) {
        restText = '周五下班快跑';
    } else if (h === 11 && mi === 40) {
        restText = '中午休息啦';
    } else if (mi === 00) {
        restText = '整点休息一下，喝口水';
    } else if (mi === 30) {
        restText = '站起来工作吧，注意身体呀～';
    }

    talk('现在是：' + nowDay + ', ' + restText, atMobiles);
});
