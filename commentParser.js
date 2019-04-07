const cheerio = require('cheerio');
const axios = require('axios');


async function getComments(){
    const jobPost = [];

    resp = await axios.get('https://news.ycombinator.com/item?id=19543940');

    //Cheerio selector taken from gadogado's collector.js
    const $ = await cheerio.load(resp.data);

    const elems = await $('img[width=0]');

    elems.each((i, elem) => {
        const comment = $(elem)
          .parent()
          .siblings('td.default')
          .children('.comment')
          .clone()
          .find('.reply')
          .remove()
          .end();

        const commentText = `${comment.text()}`;
        jobPost.push(commentText);
    })

    return jobPost;
}



module.exports = getComments;