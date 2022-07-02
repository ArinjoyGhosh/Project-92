player_1 = localStorage.getItem("Player 1: ");
player_2 = localStorage.getItem("Player 2: ");

playername_1_score = 0;
playername_2_score = 0;

document.getElementById("player1_name").innerHTML = player_1 + " : ";
document.getElementById("player2_name").innerHTML = player_2 + " : ";
document.getElementById("player1_score").innerHTML = playername_1_score;
document.getElementById("player2_score").innerHTML = playername_2_score;
document.getElementById("question").innerHTML = player_1;
document.getElementById("answer").innerHTML = player_2;

question_turn = "p1";

function send() {
    get_word = document.getElementById("question_word").value;
    word = get_word.toLowerCase();
    console.log("Word in lower case: " + word);

    charAt = word.charAt(1);
    console.log(charAt);

    length_divided_by_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divided_by_2);
    console.log(charAt2);
    
    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt, "_");
    remove_charAt2 = word.replace(charAt2, "_");
    remove_charAt3 = word.replace(charAt3, "_");

    question_word = "<h4 id='word_display'> Q." + remove_charAt3 + "</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>" ;
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}
function check() {
    get_ans = document.getElementById("input_check_box").value;
    ans = get_ans.toLowerCase();
    console.log("Answer given in lower case: " + ans);

    if (ans == word) {
        if (question_turn == "p1") {
            document.getElementById("player2_score").innerHTML = playername_2_score + 1;
            console.log("Player 1:" + playername_1_score + " Player 2: " + playername_2_score)
        }
        else{
            document.getElementById("player1_score").innerHTML = playername_1_score + 1;
            console.log("Player 1:" + playername_1_score + " Player 2: " + playername_2_score)
        }
    }
    if (question_turn == "p1") {
        question_turn = "p2";
        document.getElementById("question").innerHTML = player_2;
        document.getElementById("answer").innerHTML = player_1;
        console.log("Question: " + question_turn + " Answer: " + ans_turn);
    }
    else {
        question_turn = "p1";
        document.getElementById("question").innerHTML = player_1;
        document.getElementById("answer").innerHTML = player_2;
        console.log("Question: " + question_turn + " Answer: " + ans_turn);
    }
    document.getElementById("output") = "";
}