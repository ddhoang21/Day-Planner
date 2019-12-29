$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    var input1 = document.querySelector("#note1");
    var saveBtn1 = $("#saveNote1");
    input1.value = localStorage.getItem("content1");
    saveBtn1.on("click", saveInput1);
    function saveInput1() {
        localStorage.setItem("content1", input1.value);
    };
    var input2 = document.querySelector("#note2");
    var saveBtn2 = $("#saveNote2");
    input2.value = localStorage.getItem("content2");
    saveBtn2.on("click", saveInput2);
    function saveInput2() {
        localStorage.setItem("content2", input2.value);
    };
    var input3 = document.querySelector("#note3");
    var saveBtn3 = $("#saveNote3");
    input3.value = localStorage.getItem("content3");
    saveBtn3.on("click", saveInput3);
    function saveInput3() {
        localStorage.setItem("content3", input3.value);
    };
    var input4 = document.querySelector("#note4");
    var saveBtn4 = $("#saveNote4");
    input4.value = localStorage.getItem("content4");
    saveBtn4.on("click", saveInput4);
    function saveInput4() {
        localStorage.setItem("content4", input4.value);
    };
    var input5 = document.querySelector("#note5");
    var saveBtn5 = $("#saveNote5");
    input5.value = localStorage.getItem("content5");
    saveBtn5.on("click", saveInput5);
    function saveInput5() {
        localStorage.setItem("content5", input5.value);
    };
    var input6 = document.querySelector("#note6");
    var saveBtn6 = $("#saveNote6");
    input6.value = localStorage.getItem("content6");
    saveBtn6.on("click", saveInput6);
    function saveInput6() {
        localStorage.setItem("content6", input6.value);
    };
    var input7 = document.querySelector("#note7");
    var saveBtn7 = $("#saveNote7");
    input7.value = localStorage.getItem("content7");
    saveBtn7.on("click", saveInput7);
    function saveInput7() {
        localStorage.setItem("content7", input7.value);
    };
    var input8 = document.querySelector("#note8");
    var saveBtn8 = $("#saveNote8");
    input8.value = localStorage.getItem("content8");
    saveBtn8.on("click", saveInput8);
    function saveInput8() {
        localStorage.setItem("content8", input8.value);
    };
    var input9 = document.querySelector("#note9");
    var saveBtn9 = $("#saveNote9");
    input9.value = localStorage.getItem("content9");
    saveBtn9.on("click", saveInput9);
    function saveInput9() {
        localStorage.setItem("content9", input9.value);
    };

    var now= new Date().getHours();
    
    if (now > 9) {
        $("#note1").addClass("past");
        }	
        else if (now >= 9 && now < 10) {
            $("#note1").addClass("present");
        }
        else if (now < 9) {
            $("#note1").addClass("future");
        }
    
    if (now > 10) {
        $("#note2").addClass("past");
        }
        else if (now >= 10 && now < 11) {
            $("#note2").addClass("present");
        }
        else if (now < 10) {
            $("#note2").addClass("future");
        }
    
    if (now > 11) {
        $("#note3").addClass("past");
        }
        else if (now >= 11 && now < 12) {
            $("#note3").addClass("present");
        }
        else if (now < 11) {
            $("#note3").addClass("future");
        }
    
    if (now > 12) {
        $("#note4").addClass("past");
        }
        else if (now >= 12 && now < 13) {
            $("#note4").addClass("present");
        }
        else if (now < 12) {
            $("#note4").addClass("future");
        }
    
    if (now > 13) {
        $("#note5").addClass("past");
        }
        else if (now >= 13 && now < 14) {
            $("#note5").addClass("present");
        }
        else if (now < 13) {
            $("#note5").addClass("future");
        }
    
    if (now > 14) {
        $("#note6").addClass("past");
        }
        else if (now >= 14 && now < 15) {
            $("#note6").addClass("present");
        }
        else if (now < 14) {
            $("#note6").addClass("future");
        }
    
    if (now > 15) {
        $("#note7").addClass("past");
        }
        else if (now >= 15 && now < 16) {
            $("#note7").addClass("present");
        }
        else if (now < 15) {
            $("#note7").addClass("future");
        }
    
    if (now > 16) {
        $("#note8").addClass("past");
        }
        else if (now >= 16 && now < 17) {
            $("#note8").addClass("present");
        }
        else if (now < 16) {
            $("#note8").addClass("future");
        }
    
    if (now > 17) {
        $("#note9").addClass("past");
        }
        else if (now >= 17 && now < 18) {
            $("#note9").addClass("present");
        }
        else if (now < 17) {
            $("#note9").addClass("future");
        }
});
