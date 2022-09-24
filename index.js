function saturdayFun(activity){
    if(activity === undefined) {
        activity = 'roller-skate'
    }
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(obligation){
    if (obligation === undefined) {
        obligation = 'go to the office'
    }
    return `This Monday, I will ${obligation}.`
}

function wrapAdjective(flair) {
    if (flair === undefined) {
        flair = '*'
    }
    return function(adjective) {
        if (adjective=== undefined) {
            adjective = 'special'
        }
        return `You are ${flair}${adjective}${flair}!`
    }
}