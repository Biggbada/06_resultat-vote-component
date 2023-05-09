let reactionScore = document.getElementById('reaction-score');
let memoryScore = document.getElementById('memory-score');
let verbalScore = document.getElementById('verbal-score');
let visualScore = document.getElementById('visual-score');

fetch("./data.json")
    .then(data => data.json())
    .then(votes => {
        reactionScore.textContent = (votes[0].score);
        memoryScore.textContent = (votes[1].score);
        verbalScore.textContent = (votes[2].score);
        visualScore.textContent = (votes[3].score);
    })