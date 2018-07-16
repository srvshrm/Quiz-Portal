var count = 0;
var n = 1;
function start() {
    $.get("Quiz.json",function(data,status) {
        var num = `<h1>Question ${n}</h1>`;
        $("#qNumber").html(num);
        $("#question").text(data[count].question);
        var options = `<input type="radio" name="ans" id="ansId" value="a">${data[count].options.a}</input><br>
                        <input type="radio" name="ans" id="ansId" value="b">${data[count].options.b}</input><br>
                        <input type="radio" name="ans" id="ansId" value="c">${data[count].options.c}</input><br>
                        <input type="radio" name="ans" id="ansId" value="d">${data[count].options.c}</input><br>`
        $("#options").html(options);
        count++;
        n++;
    });
}

