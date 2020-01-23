$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

	function saveInput(contentNum, input) {
		localStorage.setItem(contentNum, input);
	}

    var input1 = document.querySelector("#note1");
    var saveBtn1 = $("#saveNote1");
    input1.value = localStorage.getItem("content1");
    saveBtn1.on("click", function(){
		saveInput("content1", input1.value)
	});	
	
    var input2 = document.querySelector("#note2");
    var saveBtn2 = $("#saveNote2");
    input2.value = localStorage.getItem("content2");
    saveBtn2.on("click", function(){
		saveInput("content2", input2.value)
	})
	
    var input3 = document.querySelector("#note3");
    var saveBtn3 = $("#saveNote3");
    input3.value = localStorage.getItem("content3");
    saveBtn3.on("click", function(){
		saveInput("content3", input3.value)
	});
	
    var input4 = document.querySelector("#note4");
    var saveBtn4 = $("#saveNote4");
    input4.value = localStorage.getItem("content4");
    saveBtn4.on("click", function(){
		saveInput("content4", input4.value)
	});
	
    var input5 = document.querySelector("#note5");
    var saveBtn5 = $("#saveNote5");
    input5.value = localStorage.getItem("content5");
    saveBtn5.on("click", function(){
		saveInput("content5", input5.value)
	});
	
    var input6 = document.querySelector("#note6");
    var saveBtn6 = $("#saveNote6");
    input6.value = localStorage.getItem("content6");
    saveBtn6.on("click", function(){
		saveInput("content6", input6.value)
	});
	
    var input7 = document.querySelector("#note7");
    var saveBtn7 = $("#saveNote7");
    input7.value = localStorage.getItem("content7");
    saveBtn7.on("click", function(){
		saveInput("content7", input7.value)
	});
	
    var input8 = document.querySelector("#note8");
    var saveBtn8 = $("#saveNote8");
    input8.value = localStorage.getItem("content8");
    saveBtn8.on("click", function(){
		saveInput("content8", input8.value)
	});
	
    var input9 = document.querySelector("#note9");
    var saveBtn9 = $("#saveNote9");
    input9.value = localStorage.getItem("content9");
    saveBtn9.on("click", function(){
		saveInput("content9", input9.value)
	});

	function addTimeClass(noteNum, timeSlot) {
		var now = moment().hour();
		if (now > timeSlot) {
		  $(noteNum).addClass("past");
		} else if (now === timeSlot) {
		  $(noteNum).addClass("present");
		} else {
		  $(noteNum).addClass("future");
		}
	}
	
	addTimeClass("#note1", 9, 10);
	addTimeClass("#note2", 10, 11);
	addTimeClass("#note3", 11, 12);
	addTimeClass("#note4", 12, 13);
	addTimeClass("#note5", 13, 14);
	addTimeClass("#note6", 14, 15);
	addTimeClass("#note7", 15, 16);
	addTimeClass("#note8", 16, 17);
	addTimeClass("#note9", 17, 18);
});