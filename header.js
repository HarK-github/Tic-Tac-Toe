function player(playing){
    this.score = 0;
    this.playing = playing;
}


function game(){
    this.pl1 =new player(true);
    this.pl2 =new player(false);


    this.gen_cross = function(){
        const h = document.querySelector("div.m");
        h.innerHTML = "";
        var playedx = true;
        var m=[
            [10,10,10],
            [10,10,10],
            [10,10,10]
        ];

        for (var i = 0;i<3;i++){
            var np=document.createElement("br");
            h.appendChild(np);
            for(var j =0;j<3;j++){
                let str = `a${i}${j}`;
                
                var newchld=document.createElement("button");
                newchld.classList.add(str);
                newchld.style = "width:50px;height:50px;border-radius:5px;border:0px;margin:5px";

                newchld.style["background-size"] ="contain";
                newchld.textContent = "X";
                newchld.addEventListener("click", function(){
                    var a = document.querySelector("."+str);
                    if (a.textContent!= "Xd" && a.textContent != "Od"){
                        var butt=document.querySelector("."+str);
                        console.log(str);
                        butt.style = "width:50px;height:50px;border-radius:5px;border:0px;margin:5px";
                        if (playedx){
                            butt.style["backgroundImage"] = "url(./z.png)";
                            playedx = false;
                            butt.textContent = "Od";
                            m[str[1]][str[2]] = 0;
                        }else{
                            butt.style["backgroundImage"] = "url(./x.png)";
                            playedx = true;
                            butt.textContent = "Xd";
                            
                            m[str[1]][str[2]] = 1;
                        }
                        console.log(m);
                        butt.style["background-size"] ="contain";
                        for (var k = 0;k<3;k++){
                        console.log(m[k][0]+m[k][1]+m[k][2]);
                        if(m[k][0]+m[k][1]+m[k][2]==3 || m[0][k]+m[1][k]+m[2][k]==3||m[0][0]+m[1][1]+m[2][2]==3){
                            alert("plaer X won");
                            setInterval(3);
                            this.gen_cross();
                        }else if(m[k][0]+m[k][1]+m[k][2]==0 ||m[0][k]+m[1][k]+m[2][k]==3||m[0][0]+m[1][1]+m[2][2]==0){
                            alert("Player 0 won");
                            
                            this.gen_cross();
                        }
                    }
                        
                     } 

                }.bind(this));
                h.appendChild(newchld);

            }
        }
    };
    this.start = function(){
        this.gen_cross();
    };
}

var game_1 = new game();
game_1.start();