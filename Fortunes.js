const fortunes = require('./fortunes.json');

function getFortune() {
    const ranNum = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[ranNum];
    return fortune;
}

module.exports = getFortune;