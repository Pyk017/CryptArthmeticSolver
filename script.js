"use strict";

function calc(){
	let timeout=10000; //timeout of 10 seconds for the search
	
	let word1=document.getElementById("word1").value;
	let word2=document.getElementById("word2").value;
	let word3=document.getElementById("word3").value;
	let operator = document.querySelector("#operations").value;
	
    let flag = fieldChecker(word1, word2, word3, operator);
    if(!flag){
        return;
    }

	flag = operationChecker(word1, word2, word3, operator);
	if(!flag) return;

	clearResultText(); //clear past result if any
	
	var worker=new Worker("worker.js");

	worker.postMessage([word1,word2,word3,operator,timeout]);
	
	worker.onmessage=function(e){
		
		switch(e.data[0].type){
			case "success":
				let output=e.data[0].result;
				updateSuccessfulResult(output, operator);
				worker.terminate();
			break;
			case "failure":
				updateFailureResult();
				worker.terminate();
			break;
			case "progress":
				updateProgress(e.data[0].iteration,e.data[0].timeElapsed);
			break;
		}
		
	}
	
}

function operationChecker(word1, word2, word3, op){
	if(op == 'sub'){
		if(word2.length > word1.length){
			alert('Smaller Number cannot be substracted from larger number! Try to replace the operands.');
			return false;
		}
	}
	if(op == 'div'){
		if(word2.length > word1.length){
			alert('Smaller Number cannot be divisible by larger number! Try to replace the operands.');
			return false;
		}
	}
	return true;
}


function fieldChecker(word1, word2, word3, op){
    if(word3 == "" && word1 == "" && word2 == ""){
        alert("Please Enter Entries!");
        return false;
    }
    if(word1 == ""){
        alert('INPUT 1 cannot be empty!');
        document.getElementById('word1').focus();
    }
    if(word2 == ""){
        alert('INPUT 2 cannot be empty!');
        document.getElementById('word2').focus();
    }
    if(word3 == ""){
        alert('INPUT 3 cannot be empty!');
        document.getElementById('word3').focus();
    }
	if(op == 'none'){
		alert("Please Select one operation.");
		document.querySelector("#operations").focus();
		// console.log(op);
		return false;
	}
    return true;
}


function resetting(){
    console.log('in it');
    document.getElementById("word1").value = "";
	document.getElementById("word2").value = "";
	document.getElementById("word3").value = "";
    document.getElementById("result").innerHTML = "";
	document.querySelector("#operations").selectedIndex = 0;
}

function clearResultText(){
	document.getElementById("result").innerHTML="";
}

function updateFailureResult(){
	document.getElementById("result").innerHTML="Couldn't find the combination. :(";
}

function updateSuccessfulResult(output, operator){
	let divElement=document.getElementById("result");
	let operatorDict = {
		"add": "+",
		"sub": '-',
		"mul": '*',
		"div": '/'
	}
	let outputText=`Combination found! :)
	${output.number1} ${operatorDict[operator]} ${output.number2} = ${output.number3} \n`;
	for (let i = 0; i<output.letterlist.length; i++){
		outputText += `	${output.letterlist[i]} : ${output.digitlist[i]}\n`
	}
	divElement.innerHTML=outputText;
}

function updateProgress(iterations,elapsedTimeMs){
	document.getElementById("result").innerHTML =`${iterations} iterations done
	${(elapsedTimeMs/1000).toFixed(3)}s elapsed`;
}
