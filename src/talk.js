const t = require('../hide.json');
const axios = require('axios').default;

const gUrl = `https://oapi.dingtalk.com/robot/send?access_token=${t.token}`;

function talk(content, atMobiles = []) {
    console.log('talk?', content);
    axios({
        method: 'post',
        url: gUrl,
        data: {
            msgtype: 'text',
            text: {
                content: `喵 \n${content}`,
            },
            at: {
                atMobiles,
                isAtAll: false,
            },
        },
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
    })
        .then((res) => {
            console.log('fetch success');
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = talk;
