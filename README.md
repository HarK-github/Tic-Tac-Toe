# Tic-Tac-Toe

<h1>Notable issue:</h1>
The issue you're facing arises due to how JavaScript closures capture variables. In your code, the variable str is being captured by the anonymous function inside the addEventListener. Since str is being updated in the loop, by the time the event listener is invoked, str holds the final value from the loop, which is the same for all buttons.

To make each str unique, you can create a new scope for each iteration. This can be done using an Immediately Invoked Function Expression (IIFE) or by using let instead of var when declaring str.

Solution using let:
By using let, a new str variable is created for each iteration, ensuring it holds the correct value when the event listener is invoked.

javascript
Copy code
const h = document.querySelector("div.m");
for (let i = 0; i < 3; i++) {
    var np = document.createElement("br");
    h.appendChild(np);
    for (let j = 0; j < 3; j++) {
        let str = "box" + i + j;  // Use `let` here to create a block-scoped variable
        var newchld = document.createElement("button");
        newchld.classList.add(str);
        newchld.style = "width:50px;height:50px;border-radius:5px;border:0px;margin:5px";
        newchld.style["backgroundImage"] = "url(./x.png)";
        newchld.style["background-size"] = "contain";
        newchld.textContent = "X";
        newchld.addEventListener("click", function () {
            var a = document.querySelector("." + str);
            if (a.textContent != "Xd" || a.textContent != "Od") {
                var butt = document.querySelector("." + str);
                console.log(str);
                butt.style = "width:50px;height:50px;border-radius:5px;border:0px;margin:5px";
                butt.style["backgroundImage"] = "url(./z.png)";
                butt.style["background-size"] = "contain";
                butt.textContent = "Xd";
            }
        });
        h.appendChild(newchld);
    }
}
Solution using an IIFE:
Alternatively, you can use an Immediately Invoked Function Expression (IIFE) to create a new scope for each iteration.

javascript
Copy code
const h = document.querySelector("div.m");
for (var i = 0; i < 3; i++) {
    var np = document.createElement("br");
    h.appendChild(np);
    for (var j = 0; j < 3; j++) {
        (function(i, j) {
            var str = "box" + i + j;
            var newchld = document.createElement("button");
            newchld.classList.add(str);
            newchld.style = "width:50px;height:50px;border-radius:5px;border:0px;margin:5px";
            newchld.style["backgroundImage"] = "url(./x.png)";
            newchld.style["background-size"] = "contain";
            newchld.textContent = "X";
            newchld.addEventListener("click", function () {
                var a = document.querySelector("." + str);
                if (a.textContent != "Xd" || a.textContent != "Od") {
                    var butt = document.querySelector("." + str);
                    console.log(str);
                    butt.style = "width:50px;height:50px;border-radius:5px;border:0px;margin:5px";
                    butt.style["backgroundImage"] = "url(./z.png)";
                    butt.style["background-size"] = "contain";
                    butt.textContent = "Xd";
                }
            });
            h.appendChild(newchld);
        })(i, j);  // Pass `i` and `j` to the IIFE
    }
}
In both solutions, each button's event listener will correctly reference its own unique str, making it unique across all buttons. The first solution using let is generally preferred in modern JavaScript due to its simplicity and readability.






