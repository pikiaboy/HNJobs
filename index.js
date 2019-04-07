

var getComments = require('./commentParser');


async function getJobPostings(){
    let jobs = await getComments();

    console.log(jobs);
}



getJobPostings();