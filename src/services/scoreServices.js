export const fetchTopTenScores = () => {
  return fetch('http://ec2-54-244-23-29.us-west-2.compute.amazonaws.com:7890/api/v1/score/topscores')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    });
};

export const createNewScore = (score) => {
  return fetch('http://ec2-54-244-23-29.us-west-2.compute.amazonaws.com:7890/api/v1/score/newscore', {
    method: 'POST',
    body: JSON.stringify(score), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    } })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    });
};

