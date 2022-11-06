let statsText = document.getElementById("statsText");
let statsClients = document.getElementById("statsClients");
let statsPercent = document.getElementById("statsPercent");
let socialsGrowthPercent = document.getElementById("socialsGrowthPercent");
let pipelineStat = document.getElementById("pipelineStat");
let counterStats = 0;
let counterPercent = 0;
let counterSocialsGrowth = 0;
let counterPipelineStat = 0;
setInterval(() => {
  if (counterStats <= 24) {
    counterStats += 1;
    statsClients.innerHTML = `${counterStats}+`;
  }
}, 86);
setInterval(() => {
  if (counterPercent <= 94) {
    counterPercent += 1;
    statsPercent.innerHTML = `${counterPercent}%`;
  }
}, 22);
setInterval(() => {
  if (counterSocialsGrowth <= 1479) {
    counterSocialsGrowth += 40;
    socialsGrowthPercent.innerHTML = `${counterSocialsGrowth}%`;
  }
}, 55);
setInterval(() => {
  if (counterPipelineStat <= 199) {
    counterPipelineStat += 5;
    pipelineStat.innerHTML = `${counterPipelineStat}%`;
  }
}, 55);
