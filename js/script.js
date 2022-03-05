const targetdiv= document.getElementById('answer1');

const btn= document.getElementById('question1');

const targetdiv2= document.getElementById('answer2');

const btn2= document.getElementById('question2');

const targetdiv3= document.getElementById('answer3');

const btn3= document.getElementById('question3');

const targetdiv4= document.getElementById('answer4');

const btn4= document.getElementById('question4');

const targetdiv5= document.getElementById('answer5');

const btn5= document.getElementById('question5');

const targetdiv6= document.getElementById('answer6');

const btn6= document.getElementById('question6');


btn.onclick= function(){

    if (targetdiv.style.display=="none") {
        targetdiv.style.display="block";
    }
    else{
        targetdiv.style.display="none";
    }

    targetdiv2.style.display="none";
    targetdiv3.style.display="none";
    targetdiv4.style.display="none";
    targetdiv5.style.display="none";
    targetdiv6.style.display="none";

}




btn2.onclick= function(){

    if (targetdiv2.style.display=="none") {
        targetdiv2.style.display="block";
    }
    else{
        targetdiv2.style.display="none";
    }

    targetdiv.style.display="none";
    targetdiv3.style.display="none";
    targetdiv4.style.display="none";
    targetdiv5.style.display="none";
    targetdiv6.style.display="none";

}

btn3.onclick= function(){

    if (targetdiv3.style.display=="none") {
        targetdiv3.style.display="block";
    }
    else{
        targetdiv3.style.display="none";
    }

    targetdiv.style.display="none";
    targetdiv2.style.display="none";
    targetdiv4.style.display="none";
    targetdiv5.style.display="none";
    targetdiv6.style.display="none";

}

btn4.onclick= function(){

    if (targetdiv4.style.display=="none") {
        targetdiv4.style.display="block";
    }
    else{
        targetdiv4.style.display="none";
    }

    targetdiv.style.display="none";
    targetdiv2.style.display="none";
    targetdiv3.style.display="none";
    targetdiv5.style.display="none";
    targetdiv6.style.display="none";

}

btn5.onclick= function(){

    if (targetdiv5.style.display=="none") {
        targetdiv5.style.display="block";
    }
    else{
        targetdiv5.style.display="none";
    }

    targetdiv.style.display="none";
    targetdiv2.style.display="none";
    targetdiv3.style.display="none";
    targetdiv4.style.display="none";
    targetdiv6.style.display="none";

}

btn6.onclick= function(){

    if (targetdiv6.style.display=="none") {
        targetdiv6.style.display="block";
    }
    else{
        targetdiv6.style.display="none";
    }

    targetdiv.style.display="none";
    targetdiv2.style.display="none";
    targetdiv3.style.display="none";
    targetdiv4.style.display="none";
    targetdiv5.style.display="none";

}
