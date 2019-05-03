

let wins = 0;
let losses = 0;
let tie = 0;

function computersMove() {
    let randint = Math.floor(Math.random()*3);//generates 0, 1 and 2
    if (randint === 0){
        return "kiwi";
    }
    if (randint === 1){
        return "ninjakiwi";
    }
    if (randint === 2){
        return "kiwi's";
    }
}

function updateScore(result) {
    let randint = Math.floor(Math.random()*10)
    if (result === "won") {
    wins = wins + randint
    document.getElementById("wins").innerHTML = wins;
    }
    if (result === "losses") {
        losses = losses + randint
        document.getElementById("losses").innerHTML = losses;
    }
    if (result === "tie") {
        tie = tie + randint
        document.getElementById("tie").innerHTML = tie;
    }
    
}

function onClickkiwi() {
    let cm = computersMove();
    if (cm === "kiwi") {
     //tie
     updateScore ("won");
     alert ("The computer desided to Save you. Lucky you Won")
    }
    if (cm === "ninjakiwi") {
     //lost
     updateScore ("losses");
     alert ("The computer desided to explode you. SORRY you lost")
    }
    if (cm === "kiwi's") {
     //win
     updateScore ("tie");
     alert ("The computer desided to implode you. At least it was cool \(By The Way you tied\) ")
    }
}

function onclickninjakiwi() {
    let cm = computersMove();
    if (cm === "kiwi") {
        //tie
        updateScore ("tie");
        alert ("The computer desided to inplode you. At least it was cool \(By The Way you tied\)")
    }
    if (cm === "ninjakiwi") {
        //lost
        updateScore ("won");
        alert ("The computer desided to Save you. Lucky you Won")
    }
    if (cm === "kiwi's") {
        //win
        updateScore ("losses");
        alert ("The computer desided to explode you. SORRY you lost")
    }
}

function onclickkiwis() {
    let cm = computersMove();
    if (cm === "kiwi") {
        //tie
        updateScore ("losses");
        alert ("The computer desided to explode you. Sorry you lost")
    }
    if (cm === "ninjakiwi") {
        //lost
        updateScore ("tie");
        alert ("The computer desided to inplode you. At least it was cool \(By The Way you tied\)")
    }
    if (cm === "kiwi's") {
        //win
        updateScore ("won");
        alert ("The computer desided to Save you. Lucky you Won")
    }
}

document.getElementById("kiwi").onclick = onClickkiwi;
document.getElementById("ninjakiwi").onclick = onclickninjakiwi;
document.getElementById("kiwi's").onclick = onclickkiwis;