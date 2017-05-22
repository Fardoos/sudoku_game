// left arrow: 37
// up arrow: 38
// right arrow: 39
// down arrow: 40
	window.addEventListener("load", function () {

			
		var chekdiv=document.createElement("checked");
		
		var position=0;
		var valid=2;
		var score;
		 $("td").eq(position).addClass("move");
		 
		$("body").keydown(function (e) {

			switch(e.which){
				case 37://left arrow
					$("td").eq(position).removeClass("move");
                	position--;
                	if(position<0)
                	{
                		position=15;
                	}
                	 $("td").eq(position).addClass("move");

				break;
				case 38:// up arrow
					$("td").eq(position).removeClass("move");
                    position-=4;
                	
                	if(position<0)
                	{
                		position+=4;
                         
                	}
                    $("td").eq(position).addClass("move");
                	
                	 
				break;
				case 39://right arrow
					$("td").eq(position).removeClass("move");
                	position++;
                	if(position>15)
                	{
                		position=0;
                	}
                	 $("td").eq(position).addClass("move");
				break;
				case 40:// down arrow

                	$("td").eq(position).removeClass("move");
                    position+=4;
                	
                	if(position>15)
                	{
                        position-=4;
                		 
                	}
                    $("td").eq(position).addClass("move");
                	
				break;
				
			}// switch close


                
                 if(e.key==1||e.key==2||e.key==3||e.key==4)
                {
                	if(!$("td").eq(position).hasClass( "valid" ))  
           		 	{ 
           		 		
                		$(".move").text(e.key);
                		score=finish();
                		if(score==80)
                		{
							
							$("p").html(" well done !you win....<br>").css("color","green");
						
					
							$("#checked").css("visibility",'visible');
							

							//=========================
							var div = $("#checked");
      						  div.animate({height: '500px'}, "slow");
       						 div.animate({width: '800px'}, "slow");
       						 div.animate({height: '350px'}, "slow");
       						 div.animate({width: '500px'}, "slow");
       						 $("#checked").css("opacity",'1');
       						 clearInterval(timeInterv);
							
                		}
                	 }//if close 
                	 

     
                  }

            });//key down

function shuffle(arr) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor(i * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled;
}// shuffle close
var randcell =[0,1,2,3];
var randnum =[1,2,3,4];
arrcell=shuffle(randcell);
arrnum=shuffle(randnum);
for(var r=0;r<arrcell.length;r++)
{

	
	$("tr:eq("+r+") td:eq("+arrcell[r]+")").addClass("valid").text(arrnum[r]); 
// console.log(arr);
}

	

	//timer===================================
	var timeInterv;
var time=document.getElementById("time");
// if(!dateid)
timeInterv=setInterval(showTimer,1000);
        var m=0;
        var s=59;
    function showTimer()
    {
    	var check;

    time.innerText=m+":"+s;
    s--;
    if(s==0)
    {
        if(m==0)
        {
            clearInterval(timeInterv);
            timeInterv=null;
            check=finish();
            if (check==80) 
    		{
    			$("p").html("well done !win.........<br>").css("color","green");
    			
    		}
    		else
    		{
    			$("p").html("sorry you fail.........<br>").css("color","red");
    		}
    		// $("#mainbody").css("opacity","0.5");
							
							
						
							$("#checked").css("visibility",'visible');
							

							//=========================
							var div = $("#checked");
      						  div.animate({height: '500px'}, "slow");
       						 div.animate({width: '800px'}, "slow");
       						 div.animate({height: '350px'}, "slow");
       						 div.animate({width: '500px'}, "slow");
       						 $("#checked").css("opacity",'1');
       						
        }
        else
        {
            m--;
            s=59;
        }
    }
    else
    {

    }

}
           
    function finish()
{
	var sumr=0;
	var sumc=0;
	var store;
	
		for (var i = 0; i <4; i++) {
			for (var x= 0; x < 4; x++) {
				sumr+=Number($("tr:eq("+i+") td:eq("+x+")").text());
				sumc+=Number($("tr:eq("+x+") td:eq("+i+")").text())
			};
			// console.log(sumr);
			// console.log(sumc);
		};
		
			
	return sumr+sumc;
		}// fun finish

		function checkscore(score)
		{

		}// check function

		$("#okbtn").on("click",function()
			{
				location.reload();
			});
		$("#cancelbtn").on("click",function()
			{
				//location.reload();
				window.close();
                window.location="sudoku.html";
			});

		
});//load close