let p=Math.floor(Math.random()*(10));

let test;
let flag=true;
let qCount=0;
let data=[1254.6,578.6,114.5,419.4,117.2,621.6,811.5];
let data1=[1254.6,578.6, 675.6, 49.8,11.3,114.5];

function navNext()
{
	for(temp=0;temp<=18;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

function checkInputValid(e) {
	e.value = e.value.match(/\d*(\.\d*)?/)[0];
}
function blinkStop()
{
	document.getElementById("alertId").style.visibility = "hidden";
	document.getElementById("alertId").style.animation = "";
	document.getElementById("alertId2").style.visibility = "hidden";
	document.getElementById("alertId2").style.animation = "";
}
function magic()
{
	
	if(simsubscreennum==1)
	{
		
		// document.getElementById("incanvas_12").style.visibility="hidden";
		// document.getElementById("circlebg_12").style.visibility="hidden";
		// document.getElementById("p12").style.visibility="hidden";
			// document.getElementById("can18-1").style.visibility="hidden";
			// document.getElementById("can18-1a").style.visibility="hidden";
			// document.getElementById("ph16").style.visibility="visible";
			// document.getElementById("ph16").style.transformOrigin="45% 80%";
			// document.getElementById("ph16").style.animation="fadeIn 2.5s forwards";
			
			setTimeout(function(){

				document.getElementById("btn2").style.visibility="hidden";
				document.getElementById("resbtn2").style.visibility="hidden";
				document.getElementById("incanvas_1").style.visibility="visible";
				document.getElementById("circlebg_1").style.visibility="visible";
				document.getElementById("p1").style.visibility="visible";
				
				document.getElementById('can16-3').style.visibility = "visible";
				document.getElementById("can16-1").style.visibility="visible";
				document.getElementById('can16-2').style.visibility = "visible";
    			document.getElementById('can16-2').style.transformOrigin="45% 80%";
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:420.5px; top:274px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		    	// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		    	// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(90deg)";
				document.getElementById("can16-2").onclick=function()
				{
					myStopFunction();
					// document.getElementById('can16-3').style.animation = "lid_move 1s forwards";
					document.getElementById('can16-2').style.animation = "move_vernier 1s forwards";

				
				// document.getElementById('can16-2').style.animation="fadeIn 3.5s forwards";
				setTimeout(function(){
					document.getElementById("pv1").style.visibility="visible";
					document.getElementById('ivi').style.visibility = "visible";
					document.getElementById('buttonVer').style.visibility = "visible";
					document.getElementById("can16-1").style.visibility="hidden";
					document.getElementById('can16-2').style.visibility = "hidden";
					document.getElementById('resbutton').style.visibility = "visible";
					document.getElementById("nextButton").style.visibility="visible";
				},1500);
			}
			});
		
	}
	else if(simsubscreennum==2)
	{
		document.getElementById("incanvas_1").style.visibility="hidden";
			document.getElementById("circlebg_1").style.visibility="hidden";
			document.getElementById("p1").style.visibility="hidden";
			document.getElementById("ph1").style.visibility="visible";
			document.getElementById("ph1").style.transformOrigin="45% 80%";
			document.getElementById("ph1").style.animation="fadeIn 3.5s forwards";
			
			// document.getElementById("p19").style.visibility="hidden";
			document.getElementById('can16-3').style.visibility = "hidden";
			document.getElementById('pv1').style.visibility = "hidden";
			document.getElementById('ivi').style.visibility = "hidden";
			setTimeout(function(){
			
				document.getElementById("incanvas_2").style.visibility="visible";
				document.getElementById("circlebg_2").style.visibility="visible";
				document.getElementById("p1s").style.visibility="visible";
				document.getElementById("can2-1").style.visibility="visible"
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:277.5px; top:463px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(90deg)";
				document.getElementById("can2-4").style.visibility="visible"
				document.getElementById("can2-4").onclick=function()
				{
					myStopFunction();
					document.getElementById("can2-4").onclick="";
					document.getElementById("can2-4").style.visibility="hidden";
					setTimeout(function()
					{
						// document.getElementById("p1-1").innerHTML="1254.6";
						document.getElementById("p1-1").innerHTML="00.01";
					},650);
					document.getElementById("can2-1").style.backgroundColor="lightgrey";
					setTimeout(function(){
						document.getElementById("can2-5").style.visibility="visible"
						
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:672.5px; top:178px; height: 30px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
						// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
						// Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(360deg)";
						document.getElementById("can2-5").onclick=function()
						{
							myStopFunction();
							document.getElementById("can2-5").style.animation = "moveempty 1s forwards";
							setTimeout(function()
							{
								// document.getElementById("p1-1").innerHTML="1254.6";
								document.getElementById("p1-1").innerHTML="150.00";
							},650);
							setTimeout(function()
							{  
						
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:392.5px; top:456px; height: 30px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
								// Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(90deg)";
					
								document.getElementById("1-3").style.visibility="visible"
								document.getElementById("1-3").onclick=function()
								{
										myStopFunction();
										document.getElementById("p1-1").innerHTML="00.00";
										document.getElementById("1-3").onclick="";
										document.getElementById("can2-2").style.visibility="visible"
										myInt = setInterval(function(){ animatearrow(); }, 500);
										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:630px; top:140px; height: 40px; z-index: 10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
										// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
										// Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(360deg)";
						
										document.getElementById("can2-2").onclick=function()
										{
											myStopFunction();
											document.getElementById("can2-2").onclick="";
											document.getElementById('can2-2').style.transformOrigin = "100% 80%";
											document.getElementById('can2-2').style.animation = "shiftCa 1s forwards ";
											setTimeout(function(){
												document.getElementById('can2-2').style.visibility="hidden";
												document.getElementById('can2-5').style.visibility="hidden";
												document.getElementById('can2-3').style.visibility="visible";
												setTimeout(function()
												{
													// document.getElementById("p1-1").innerHTML="1254.6";
													document.getElementById("p1-2").style.visibility="visible"
												},650);
												document.getElementById("p1-2").innerHTML="Mass of the container and initial volume of the soil (g) = <span style='border-bottom-style:double'>"+data[0]+ "</span>g";
												document.getElementById("p1-1").innerHTML=data[0];
			
												document.getElementById("can2-1").style.backgroundColor="lightgrey";
												document.getElementById("nextButton").style.visibility="visible"
											},1000);

										}
								}
							});

						}
					},750);
				}
			},3600);

	}
	
	else if(simsubscreennum==3)
	{

			document.getElementById("incanvas_2").style.visibility="hidden";
			document.getElementById("circlebg_2").style.visibility="hidden";
			document.getElementById("p1s").style.visibility="hidden";
			document.getElementById("can2-1").style.visibility="hidden"
			document.getElementById("can2-3").style.visibility="hidden"
			document.getElementById("can2-4").style.visibility="hidden"
			document.getElementById("p1-2").style.visibility="hidden";
			document.getElementById("1-3").style.visibility="hidden"
			document.getElementById("can3-1").style.visibility="visible"
			document.getElementById("can3-11").style.visibility="visible"
			document.getElementById("can3-2").style.visibility="visible"
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:706.5px; top:142px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
		    // Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
		    // Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(0deg)";
			document.getElementById("can3-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("can3-2").style.visibility="hidden"
				document.getElementById("can3-3").style.visibility="visible"
				document.getElementById('can3-3').style.animation = "movePlane 0.5s forwards";
				setTimeout(function(){
					document.getElementById("can3-3").style.visibility="hidden"
					document.getElementById("can3-4").style.visibility="visible"
					setTimeout(function(){
						document.getElementById("can3-5").style.visibility="visible"
						document.getElementById("can3-4").style.visibility="hidden"
						document.getElementById("can3-5").style.transform = "rotate(90deg)";
						document.getElementById('can3-5').style.animation = "movebase 1s forwards";
						setTimeout(function(){
							document.getElementById("can3-5").style.visibility="hidden"
							document.getElementById("can3-6").style.visibility="visible"
							
							document.getElementById("can3-6").style.transform = "rotateX(103deg)";
							document.getElementById("can3-7").style.visibility="visible"
							document.getElementById("can3-71").style.visibility="visible"
							document.getElementById("can3-72").style.visibility="visible"
							document.getElementById("can3-73").style.visibility="visible"
							document.getElementById("can3-74").style.visibility="visible"
							document.getElementById("can3-75").style.visibility="visible"
							setTimeout(function(){
								fillCylinder()
								
							});
						},1000);
					});
				},500);
				
			}
		
	}else if(simsubscreennum==4)
	{
		document.getElementById("can3-7").style.visibility="hidden"
		document.getElementById("can3-71").style.visibility="hidden"
		document.getElementById("can3-72").style.visibility="hidden"
		document.getElementById("can3-73").style.visibility="hidden"
		document.getElementById("can3-74").style.visibility="hidden"
		document.getElementById("can3-75").style.visibility="hidden"
		document.getElementById("can3-11").style.visibility="hidden"
		document.getElementById("can3-711b").style.visibility="hidden";
		document.getElementById("can3-1").style.visibility="hidden"
		document.getElementById("can3-2").style.visibility="hidden"
		document.getElementById("can3-6").style.visibility="hidden"
		document.getElementById("can3-14").style.visibility="hidden"
		document.getElementById("can4-1").style.visibility="visible"
		// document.getElementById("nextButton").style.visibility="visible"
		document.getElementById("can4-2").style.visibility="visible";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:539.5px; top:155px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById("can4-2").onclick=function()
		{
			myStopFunction();
			document.getElementById("can4-2").style.animation="movenet 1s forwards";
			document.getElementById("can4-2").style.transform = "rotateX(70deg)";
			setTimeout(function(){
				document.getElementById("can4-4").style.visibility="visible";
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:539.5px; top:179px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(180deg)";
				document.getElementById("can4-4").onclick=function()
				{
					myStopFunction();
					document.getElementById("can4-4").style.animation="movelid 1s forwards";
					document.getElementById("can4-4").style.transform = "rotateX(85deg)";
					setTimeout(function(){
						document.getElementById("can4-3").style.visibility="visible";
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:539.5px; top:155px; height: 30px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
						// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
						// Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(180deg)";
						document.getElementById("can4-3").onclick=function()
						{
							myStopFunction();
							document.getElementById("can4-3").style.animation="movetop 1s forwards";
							document.getElementById("can4-3").style.transform = "rotateX(54deg)";
							setTimeout(function(){
								document.getElementById("can4-5").style.visibility="visible";
								setTimeout(function(){
									document.getElementById("can4-5").style.transformOrigin="0% 100%";
									document.getElementById("can4-5").style.animation="tightenNut 0.5s 2 forwards";
									setTimeout(function(){
										document.getElementById("can4-5").style.visibility="hidden";
										document.getElementById("note1").style.display="block";
									},1500)
									
								},250);
							},1000);
						}
					},1000);
					

				}
			},1000);

		}
	}else if(simsubscreennum==5)
	{
		document.getElementById("can4-1").style.visibility="hidden";
		document.getElementById("can4-2").style.visibility="hidden";
		document.getElementById("can4-6").style.visibility="hidden";
		document.getElementById("can4-4").style.visibility="hidden";
		document.getElementById("can5-1").style.visibility="visible"
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:277.5px; top:463px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(90deg)";
				document.getElementById("can5-4").style.visibility="visible"
				document.getElementById("can5-4").onclick=function()
				{
					myStopFunction();
					document.getElementById("can5-4").onclick="";
					document.getElementById("can5-4").style.visibility="hidden";
					setTimeout(function()
					{
						// document.getElementById("p1-1").innerHTML="1254.6";
						document.getElementById("p5-11").innerHTML="00.01";
					},650);
					document.getElementById("can5-1").style.backgroundColor="lightgrey";
					setTimeout(function(){
						document.getElementById("can5-5").style.visibility="visible"
						
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:672.5px; top:178px; height: 30px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
						// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
						// Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(360deg)";
						document.getElementById("can5-5").onclick=function()
						{
							myStopFunction();
							document.getElementById("can5-5").style.animation = "moveempty 1s forwards";
							setTimeout(function()
							{
								// document.getElementById("p1-1").innerHTML="1254.6";
								document.getElementById("p5-11").innerHTML="150.00";
							},650);
							setTimeout(function()
							{  
						
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:392.5px; top:456px; height: 30px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
								// Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(90deg)";
					
								document.getElementById("5-3").style.visibility="visible"
								document.getElementById("5-3").onclick=function()
								{
										myStopFunction();
										document.getElementById("p5-11").innerHTML="00.00";
										document.getElementById("5-3").onclick="";
										document.getElementById("can5-2").style.visibility="visible"
										myInt = setInterval(function(){ animatearrow(); }, 500);
										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:630px; top:140px; height: 40px; z-index: 10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
										// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
										// Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(360deg)";
						
										document.getElementById("can5-2").onclick=function()
										{
											myStopFunction();
											document.getElementById("can5-2").onclick="";
											document.getElementById('can5-2').style.transformOrigin = "100% 80%";
											document.getElementById('can5-2').style.animation = "shiftCas 1s forwards ";
											setTimeout(function(){
												document.getElementById('can5-2').style.visibility="hidden";
												document.getElementById('can5-5').style.visibility="hidden";
												document.getElementById('can5-3').style.visibility="visible";
												setTimeout(function()
												{
													// document.getElementById("p1-1").innerHTML="1254.6";
													document.getElementById("p5-22").style.visibility="visible"
												},650);
												document.getElementById("p5-22").innerHTML="Mass of the container and remaining soil (g) = <span style='border-bottom-style:double'>"+data[1]+ "</span>g";
												document.getElementById("p5-11").innerHTML=data[1];
			
												document.getElementById("can5-1").style.backgroundColor="lightgrey";
												document.getElementById("nextButton").style.visibility="visible"
											},1000);

										}
								}
							});

						}
					},750);
				}

	}
	else if(simsubscreennum==5)
	{
		document.getElementById("can4-1").style.visibility="hidden";
		document.getElementById("can4-2").style.visibility="hidden";
		document.getElementById("can4-6").style.visibility="hidden";
		document.getElementById("can4-4").style.visibility="hidden";
		document.getElementById("can5-1").style.visibility="visible"
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:277.5px; top:463px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(90deg)";
				document.getElementById("can5-4").style.visibility="visible"
				document.getElementById("can5-4").onclick=function()
				{
					myStopFunction();
					document.getElementById("can5-4").onclick="";
					document.getElementById("can5-4").style.visibility="hidden";
					setTimeout(function()
					{
						// document.getElementById("p1-1").innerHTML="1254.6";
						document.getElementById("p5-11").innerHTML="00.01";
					},650);
					document.getElementById("can5-1").style.backgroundColor="lightgrey";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:393.5px; top:463px; height: 30px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(90deg)";
					document.getElementById("can5-4").style.visibility="visible"
					document.getElementById("5-3").style.visibility="visible"
					document.getElementById("5-3").onclick=function()
					{
						myStopFunction();
						document.getElementById("p5-11").innerHTML="00.00";
						document.getElementById("5-3").onclick="";
						setTimeout(function(){
							document.getElementById("can5-2").style.visibility="visible"
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:630px; top:140px; height: 40px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
							// Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
							// Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(360deg)";
						
							document.getElementById("can5-2").onclick=function()
							{
								myStopFunction();
								document.getElementById("can5-2").onclick="";
								document.getElementById('can5-2').style.animation = "movePlate 1s forwards";
								setTimeout(function(){
									document.getElementById("can5-2").style.visibility="hidden"
									document.getElementById("can5-3").style.visibility="visible"
									setTimeout(function()
									{
										// document.getElementById("p1-1").innerHTML="1254.6";
										document.getElementById("p5-22").style.visibility="visible"
									},650);
										document.getElementById("p5-22").innerHTML="Mass of the container and remaining soil (g) = <span style='border-bottom-style:double'>"+data[1]+ "</span>g";
										document.getElementById("p5-11").innerHTML=data[1];
			
										document.getElementById("can5-1").style.backgroundColor="lightgrey";
										document.getElementById("nextButton").style.visibility="visible"
								},500);
									
									

							

							}
						});
					}
					
				}


			
		
	}else if(simsubscreennum==6)
	{
			document.getElementById("can6-22").style.visibility="visible"
			document.getElementById("can5-4").style.visibility="hidden";
			document.getElementById("5-3").style.visibility="hidden";
			document.getElementById("can5-1").style.visibility="hidden";
			document.getElementById("can5-3").style.visibility="hidden";
			document.getElementById("p5-22").style.visibility="hidden";
			document.getElementById("can6-1").style.visibility="visible"
			document.getElementById("can6-2").style.visibility="visible"
			document.getElementById("can6-3").style.visibility="visible"
			document.getElementById("can6-3").style.transform = "rotateX(44deg)";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:73.5px; top:172px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		    // Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		    // Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById("can6-3").onclick=function()
			{
				myStopFunction();
				document.getElementById("can6-3").onclick="";
				document.getElementById("can6-22").style.visibility="hidden";
				document.getElementById('can6-3').style.animation = "moveHand 1s forwards";
				setTimeout(function(){
					document.getElementById("can6-3").style.visibility="hidden"
					document.getElementById("can6-4").style.visibility="visible"
					document.getElementById('can6-4').style.animation = "moveBg 1s forwards";
					document.getElementById("can6-6").style.visibility="visible"
					document.getElementById('can6-6').style.animation = "moveCap 1s forwards";
					document.getElementById("can6-7").style.visibility="visible"
					document.getElementById('can6-7').style.animation = "moveWire 1s forwards";
					setTimeout(function(){
						document.getElementById("can6-7").style.visibility="hidden"
						document.getElementById("can6-8").style.visibility="visible"
						document.getElementById('can6-8').style.animation = "moveFix 1s forwards";
						setTimeout(function(){
							document.getElementById("can6-8").style.visibility="hidden"
							document.getElementById("can6-4").style.visibility="hidden"
							document.getElementById("can6-6").style.visibility="hidden"
							document.getElementById("can6-1").style.visibility="hidden"
							document.getElementById("can6-2").style.visibility="hidden"
							document.getElementById("can6-17").style.visibility="visible"
							document.getElementById("can6-9").style.visibility="visible"
							document.getElementById("can6-23").style.visibility="visible"
							document.getElementById("can6-9").style.transform = "rotateX(44deg)";
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:73.5px; top:172px; height: 30px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		    				// Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		    				// Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(180deg)";
							document.getElementById("can6-9").onclick=function()
							{
								myStopFunction();
								document.getElementById("can6-9").onclick="";
								document.getElementById("can6-23").style.visibility="hidden"
								document.getElementById('can6-9').style.animation = "moveHandLeft 1s forwards";
								setTimeout(function(){
									document.getElementById("can6-9").style.visibility="hidden"
									document.getElementById("can6-4").style.visibility="visible"
									document.getElementById('can6-4').style.animation = "moveBgs 1s forwards";
									document.getElementById("can6-10").style.visibility="visible"
									document.getElementById('can6-10').style.animation = "moveCylinder 1s forwards";
									document.getElementById("can6-11").style.visibility="visible"
									document.getElementById('can6-11').style.animation = "moveLWire 1s forwards";
									setTimeout(function(){
										document.getElementById("can6-11").style.visibility="hidden"
										document.getElementById("can6-12").style.visibility="visible"
										document.getElementById('can6-12').style.animation = "moveLFix 1s forwards";
										setTimeout(function(){
											document.getElementById("can6-12").style.visibility="hidden"
											document.getElementById("can6-4").style.visibility="hidden"
											document.getElementById("can6-10").style.visibility="hidden"
											document.getElementById("can6-17").style.visibility="hidden"
											document.getElementById("can6-13").style.visibility="visible"
											document.getElementById("can6-24").style.visibility="visible"
											document.getElementById("can6-18").style.visibility="visible"
											document.getElementById("can6-13").style.transform = "rotateX(44deg)";
											myInt = setInterval(function(){ animatearrow(); }, 500);
											document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:73.5px; top:172px; height: 30px; z-index: 10;";
											document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		    								// Code for IE9
											document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		    								// Standard syntax
											document.getElementById("arrow1").style.transform = "rotate(180deg)";
											document.getElementById("can6-13").onclick=function()
											{
												myStopFunction();
												document.getElementById("can6-13").onclick="";
												document.getElementById("can6-24").style.visibility="hidden"
												document.getElementById('can6-13').style.animation = "moveHandLft 1s forwards";
												setTimeout(function(){
													document.getElementById("can6-13").style.visibility="hidden"
													document.getElementById("can6-4").style.visibility="visible"
													document.getElementById('can6-4').style.animation = "moveBgss 1s forwards";
													document.getElementById("can6-14").style.visibility="visible"
													document.getElementById('can6-14').style.animation = "moveTopCylinder 1s forwards";
													document.getElementById("can6-15").style.visibility="visible"
													document.getElementById('can6-15').style.animation = "moveRWire 1s forwards";
													setTimeout(function()
													{
														document.getElementById("can6-15").style.visibility="hidden"
														document.getElementById("can6-16").style.visibility="visible"
														document.getElementById('can6-16').style.animation = "moveRFix 1s forwards";
														setTimeout(function(){
															document.getElementById("can6-18").style.visibility="hidden"
															document.getElementById("can6-4").style.visibility="hidden"
															document.getElementById("can6-14").style.visibility="hidden"
															document.getElementById("can6-16").style.visibility="hidden"
															document.getElementById("can6-19").style.visibility="visible"
															document.getElementById("nextButton").style.visibility="visible"
														},1300);
													},1000);
												},2000);

											}
										},2300);
									},1200);
								},2100);
							}
						},2000);
					},1300);
				},1200);

			}
		
	}else if(simsubscreennum==7)
	{document.getElementById("can6-19").style.visibility="hidden"
	document.getElementById("can7-1").style.visibility="visible"
	document.getElementById("can7-2").style.visibility="visible"
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:411px; top:232px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(360deg)";
	document.getElementById("can7-2").onclick=function()
	{
		myStopFunction();
		document.getElementById("can7-4").style.visibility="visible"
		document.getElementById('can7-4').style.animation = "moveBgd 1s forwards";
		document.getElementById("can7-12").style.visibility="visible"
		document.getElementById('can7-12').style.animation = "moveValve 1s forwards";
		document.getElementById("can7-14").style.visibility="visible"
		document.getElementById('can7-14').style.animation = "rotateValve 1s forwards";
		setTimeout(function()
		{
			document.getElementById("can7-14").style.visibility="visible"
			document.getElementById('can7-14').style.animation = "closeValve 1s forwards";
			document.getElementById("can7-5").style.visibility="visible"
			document.getElementById('can7-5').style.animation = "handUp 1s forwards";
			setTimeout(function()
			{
				document.getElementById("can7-12").style.visibility="hidden"
				document.getElementById("can7-14").style.visibility="hidden"
				document.getElementById("can7-5").style.visibility="hidden"
				document.getElementById("can7-4").style.visibility="hidden"
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:604px; top:334px; height: 40px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(270deg)";
				document.getElementById("can7-1").onclick=function()
				{
					myStopFunction();
					document.getElementById("can7-6").style.visibility="visible"
					document.getElementById('can7-6').style.animation = "Tapon 0.5s  2 forwards";
					setTimeout(function(){
						document.getElementById("can7-8").style.visibility="visible"
						document.getElementById('can7-8').style.animation = "fillWater 2.5s forwards";
						setTimeout(function(){
							document.getElementById("can7-7").style.visibility="visible"
							document.getElementById('can7-7').style.animation = "fillWaters 2.5s forwards";
							setTimeout(function(){
								document.getElementById("can7-9").style.visibility="visible"
								document.getElementById('can7-9').style.animation = "fillTube 2.5s forwards";
								setTimeout(function(){
									document.getElementById("nextButton").style.visibility="visible"
								},2200);
							},2000);
						},2000);	
					},200);
					
					// document.getElementById("note3").style.display = 'block';
				}

			},1500);
		},1000);

	}
		
	}else if(simsubscreennum==8)
	{
		document.getElementById("ph2").style.visibility="visible";
			document.getElementById("ph2").style.transformOrigin="45% 80%";
			document.getElementById("ph2").style.animation="fadeIn 3.5s forwards";
			document.getElementById("can7-1").style.visibility="hidden"
			document.getElementById("can7-6").style.visibility="hidden"
			document.getElementById("can7-2").style.visibility="hidden"
			document.getElementById("can7-7").style.visibility="hidden"
			document.getElementById("can7-8").style.visibility="hidden"
			document.getElementById("can7-9").style.visibility="hidden"
			setTimeout(function()
			{
				
				document.getElementById("incanvas_7").style.visibility="visible";
				document.getElementById("circlebg_7").style.visibility="visible";
				document.getElementById("p2").style.visibility="visible";
				document.getElementById("can8-1").style.visibility="visible"
				document.getElementById("can8-1a").style.visibility="visible"
				document.getElementById("can8-2").style.visibility="visible"
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:411px; top:232px; height: 40px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(360deg)";
				document.getElementById("can8-2").onclick=function()
				{
					myStopFunction();
					document.getElementById("can8-4").style.visibility="visible"
					document.getElementById('can8-4').style.animation = "moveBck 1s forwards";
					document.getElementById("can8-12").style.visibility="visible"
					document.getElementById('can8-12').style.animation = "moveVlv 1s forwards";
					document.getElementById("can8-14").style.visibility="visible"
					document.getElementById('can8-14').style.animation = "rotValve 1s forwards";
					setTimeout(function()
					{
						document.getElementById("can8-14").style.visibility="visible"
						document.getElementById('can8-14').style.animation = "openValve 1s forwards";
						document.getElementById("can8-5").style.visibility="visible"
						document.getElementById('can8-5').style.animation = "handDown 1s forwards";
						setTimeout(function()
						{
							
							document.getElementById("can8-12").style.visibility="hidden"
							document.getElementById("can8-14").style.visibility="hidden"
							document.getElementById("can8-5").style.visibility="hidden"
							document.getElementById("can8-4").style.visibility="hidden"
							document.getElementById("can8-1a").style.visibility="hidden"
							document.getElementById("can8-9").style.visibility="visible"
							setTimeout(function(){
								
								document.getElementById('can8-9').style.animation = "reduceTube 2.5s forwards";
								document.getElementById("can8-10").style.visibility="visible"
								document.getElementById('can8-10').style.animation = "wateringTube 4.5s forwards";
								setTimeout(function(){
									document.getElementById("note4").style.display="block"
								},1500);
							},1000);
						},1000);

					},1000);
				}
			},3600);
			
		
	}
	else if(simsubscreennum==9)
	{
		document.getElementById("incanvas_7").style.visibility="hidden";
			document.getElementById("circlebg_7").style.visibility="hidden";
			document.getElementById("p2").style.visibility="hidden";
			document.getElementById("can8-15").style.visibility="hidden"
			document.getElementById("can8-10").style.visibility="hidden"
			document.getElementById("can8-9").style.visibility="hidden"
			document.getElementById("can8-1a").style.visibility="hidden"
			document.getElementById("can8-16").style.visibility="hidden"
			document.getElementById("can8-17").style.visibility="hidden"
			document.getElementById("can8-2").style.visibility="hidden"
			document.getElementById("can9-1").style.visibility="visible"
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:277.5px; top:463px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(90deg)";
			document.getElementById("can9-4").style.visibility="visible"
			document.getElementById("can9-4").onclick=function(){
			{
				myStopFunction();
				document.getElementById("can9-4").onclick="";
				document.getElementById("can9-4").style.visibility="hidden";
				setTimeout(function()
				{
					// document.getElementById("p1-1").innerHTML="1254.6";
					document.getElementById("p9-111").innerHTML="00.01";
				},650);

					document.getElementById("can9-1").style.backgroundColor="lightgrey";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:393.5px; top:463px; height: 30px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(90deg)";
					document.getElementById("can9-4").style.visibility="visible"
					document.getElementById("9-3").style.visibility="visible"
					document.getElementById("9-3").onclick=function()
					{
						myStopFunction();
						document.getElementById("p9-111").innerHTML="00.00";
						document.getElementById("9-3").style.visibility="hidden"
						document.getElementById("9-3").onclick="";
						document.getElementById("can9-3").style.visibility="visible"
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:541.5px; top:142px; height: 30px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		    			// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		    			// Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(180deg)";
						document.getElementById("can9-3").onclick=function()
						{
							myStopFunction();
							document.getElementById('can9-3').style.animation = "moveBeaker 1s forwards";
							setTimeout(function(){
								document.getElementById("can9-3").style.visibility="hidden"
								document.getElementById("can9-2").style.visibility="visible"
								setTimeout(function()
								{
									// document.getElementById("p1-1").innerHTML="1254.6";
									document.getElementById("p9-222").style.visibility="visible"
								},650);
								document.getElementById("p9-222").innerHTML="Mass of the empty container (g) = <span style='border-bottom-style:double'>"+data[2]+ "</span>g";
								document.getElementById("p9-111").innerHTML=data[2];
			
								document.getElementById("can9-1").style.backgroundColor="lightgrey";
								document.getElementById("nextButton").style.visibility="visible"
							},1000);
						}
					}
				}

			}
	}
	else if(simsubscreennum==10)
	{
		document.getElementById("incanvas_10").style.visibility="visible";
		document.getElementById("circlebg_10").style.visibility="visible";
		document.getElementById("p10").style.visibility="visible";
			document.getElementById("t1").style.visibility="visible";

			document.getElementById("can9-1").style.visibility="hidden"
			document.getElementById("can9-2").style.visibility="hidden"
			document.getElementById("can9-4").style.visibility="hidden"
			document.getElementById("p9-111").style.visibility="hidden"
			document.getElementById("p9-222").style.visibility="hidden"
			document.getElementById("can10-1").style.visibility="visible"
			// document.getElementById("can10-2").style.visibility="visible"
			document.getElementById("can10-1a").style.visibility="visible"
			document.getElementById("can10-4").style.visibility="visible"
			document.getElementById("can10-7").style.visibility="visible"
			document.getElementById("can10-14").style.visibility="visible"
			document.getElementById("can10-15").style.visibility="visible"
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:536.5px; top:439px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		    // Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(270deg)";
			document.getElementById("can10-15").onclick=function()
			{
				myStopFunction();
				document.getElementById("can10-15").style.visibility="hidden"
				document.getElementById("can10-1a").style.visibility="hidden"
				document.getElementById("can10-1b").style.visibility="visible"
				document.getElementById("can10-2").style.visibility="visible"
				document.getElementById("can10-1").style.visibility="visible"
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:601.5px; top:172px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		    	// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(180deg)";
				document.getElementById("can10-7").onclick=function()
				{
					myStopFunction();
					document.getElementById("can10-5").style.visibility="visible"
					document.getElementById("can10-6").style.visibility="visible"
					document.getElementById("can10-7").style.visibility="hidden"
					document.getElementById("can10-14").style.transformOrigin="67% 72%"
					document.getElementById("can10-14").style.animation="4s ease 0s 1 normal forwards running stopwatch"
					document.getElementById("can10-6").style.animation="moveDrop 0.5s 4 forwards"
					setTimeout(function(){
						document.getElementById("can10-2").style.visibility="hidden"
						document.getElementById("can10-6").style.visibility="hidden"
						document.getElementById("can10-8").style.visibility="visible"
						document.getElementById("note5").style.display="block"
					},2000);
					

				}
			}
			
		
	
		
	
	}
	else if(simsubscreennum==11)
	{
		document.getElementById("incanvas_10").style.visibility="hidden";
		document.getElementById("circlebg_10").style.visibility="hidden";
		document.getElementById("p10").style.visibility="hidden";
		document.getElementById("incanvas_11").style.visibility="visible";
		document.getElementById("circlebg_11").style.visibility="visible";
		document.getElementById("p11").style.visibility="visible";

		document.getElementById("can10-1").style.visibility="hidden"
		document.getElementById("can10-1a").style.visibility="hidden"
		document.getElementById("can10-4").style.visibility="hidden"
		document.getElementById("can10-5").style.visibility="hidden"
		document.getElementById("can10-14").style.visibility="hidden"
		document.getElementById("can11-1").style.visibility="visible"
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:277.5px; top:463px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(90deg)";
			document.getElementById("can11-4").style.visibility="visible"
			document.getElementById("can11-4").onclick=function(){
			{
				myStopFunction();
				document.getElementById("can11-4").onclick="";
				document.getElementById("can11-4").style.visibility="hidden";
				setTimeout(function()
				{
					// document.getElementById("p1-1").innerHTML="1254.6";
					document.getElementById("p11-1111").innerHTML="00.01";
				},650);

					document.getElementById("can11-1").style.backgroundColor="lightgrey";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:393.5px; top:463px; height: 30px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(90deg)";
					document.getElementById("can11-4").style.visibility="visible"
					document.getElementById("11-3").style.visibility="visible"
					document.getElementById("11-3").onclick=function()
					{
						myStopFunction();
						document.getElementById("p11-1111").innerHTML="00.00";
						document.getElementById("11-3").style.visibility="hidden"
						document.getElementById("11-3").onclick="";
						document.getElementById("can11-3").style.visibility="visible"
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:541.5px; top:142px; height: 30px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		    			// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		    			// Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(180deg)";
						document.getElementById("can11-3").onclick=function()
						{
							myStopFunction();
							
							document.getElementById('can11-3').style.animation = "moveBeaker 1s forwards";
							setTimeout(function(){
								document.getElementById("can11-3").style.visibility="hidden"
								document.getElementById("can11-2").style.visibility="visible"
								setTimeout(function()
								{
									// document.getElementById("p1-1").innerHTML="1254.6";
									document.getElementById("p11-2222").style.visibility="visible"
								},650);
								document.getElementById("p11-2222").innerHTML="Mass of the beaker and water (g) = <span style='border-bottom-style:double'>"+data[3]+ "</span>g";
								document.getElementById("p11-1111").innerHTML=data[3];
			
								document.getElementById("can11-1").style.backgroundColor="lightgrey";
								document.getElementById("nextButton").style.visibility="visible"
							},1000);
						}
					}

				}
			}

		
	}else if(simsubscreennum==12){
		document.getElementById("incanvas_11").style.visibility="hidden";
		document.getElementById("circlebg_11").style.visibility="hidden";
		document.getElementById("p11").style.visibility="hidden";
		document.getElementById("incanvas_12").style.visibility="visible";
		document.getElementById("circlebg_12").style.visibility="visible";
		document.getElementById("p12").style.visibility="visible";
		document.getElementById("11-3").style.visibility="hidden";
		document.getElementById("p11_1").style.visibility="visible";
		
		document.getElementById("can11-2").style.visibility="hidden"
		document.getElementById("can11-4").style.visibility="hidden"
		
			document.getElementById("can11-1").style.visibility="hidden"
			// document.getElementById("can12-3").style.visibility="hidden"
			document.getElementById("can11-3").style.visibility="hidden"
			document.getElementById("p11-2222").style.visibility="hidden"
			document.getElementById("para_p1").style.visibility="visible"
			document.getElementById("para_p1").innerHTML="Mass of container and initial volume of soil(g) = <span text-align:left; style='border-bottom: 1px solid black; color:black; font-size:12px;font-family:verdana'>"+data1[0]+ "</span>g";
			document.getElementById("para_p2").style.visibility="visible"
			document.getElementById("para_p2").innerHTML="Mass of container and remaining soil (g) = <span style='text-align:left; border-bottom: 1px solid black; color:black; font-size:12px;font-family:verdana'>"+data1[1]+ "</span>g";
			// document.getElementById("nextButton").style.visibility="visible"
			document.getElementById("para_p3").style.visibility="visible"
			document.getElementById("para_p3").innerHTML="Mass of soil in the column(g) = <span style='text-align:left; border-bottom: 1px solid black; color:black; font-size:12px;font-family:verdana'>"+data1[2]+ "</span>g";
			document.getElementById("para_p4").style.visibility="visible"
			document.getElementById("para_p4").innerHTML="Mass of empty beaker(g) = <span style='text-align:left; border-bottom: 1px solid black; color:black; font-size:12px;font-family:verdana'>"+data1[3]+ "</span>g";
			document.getElementById("nextButton").style.visibility="visible";
		
	}else if(simsubscreennum==13)
	{
		document.getElementById("incanvas_10").style.visibility="visible";
			document.getElementById("circlebg_10").style.visibility="visible";
			document.getElementById("p10").style.visibility="visible";
			document.getElementById("t1").style.visibility="hidden";
			document.getElementById("p12").style.visibility="hidden";
			document.getElementById("incanvas_12").style.visibility="hidden";
		document.getElementById("circlebg_12").style.visibility="hidden";
		

			document.getElementById("t2").style.visibility="visible";
			document.getElementById("para_p1").style.visibility="hidden"
			document.getElementById("para_p2").style.visibility="hidden"
			document.getElementById("para_p3").style.visibility="hidden"
			document.getElementById("para_p4").style.visibility="hidden"

			document.getElementById("can13-1").style.visibility="visible"
			document.getElementById("can13-1a").style.visibility="visible"
			document.getElementById("can13-4").style.visibility="visible"
			document.getElementById("can13-5").style.visibility="visible"
			document.getElementById("can13-14").style.visibility="visible"
			document.getElementById("can13-15").style.visibility="visible"
			document.getElementById("can13-14").style.rotate="50deg"
			document.getElementById("can13-14").style.transformOrigin="67% 72%"
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:536.5px; top:439px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		    // Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(270deg)";
			document.getElementById("can13-15").onclick=function()
			{
				myStopFunction();
				document.getElementById("can13-15").style.visibility="hidden"
				document.getElementById("can13-1a").style.visibility="hidden"
				document.getElementById("can13-1b").style.visibility="visible"
				document.getElementById("can13-8").style.visibility="visible"
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:601.5px; top:172px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		    	// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(180deg)";
				document.getElementById("can13-5").onclick=function()
				{
					myStopFunction();
					document.getElementById("can13-6").style.visibility="visible"
					document.getElementById("can13-14").style.transformOrigin="67% 72%"
					document.getElementById("can13-14").style.animation="4s ease 0s 1 normal forwards running stopwatch1"
					document.getElementById("can13-6").style.animation="moveDropping 0.5s 4 forwards"
					setTimeout(function(){
						document.getElementById("can13-8").style.visibility="hidden"
						document.getElementById("can13-6").style.visibility="hidden"
						document.getElementById("can13-9").style.visibility="visible"
						document.getElementById("note6").style.display="block"
					},1500);
				}

			}
		
		
	}else if(simsubscreennum==14)
	{
		document.getElementById("incanvas_10").style.visibility="hidden";
		document.getElementById("circlebg_10").style.visibility="hidden";
		document.getElementById("p10").style.visibility="hidden";
		document.getElementById("incanvas_11").style.visibility="visible";
		document.getElementById("circlebg_11").style.visibility="visible";
		document.getElementById("p11").style.visibility="visible";

		document.getElementById("can13-1").style.visibility="hidden"
		document.getElementById("can13-1a").style.visibility="hidden"
		document.getElementById("can13-4").style.visibility="hidden"
		document.getElementById("can13-5").style.visibility="hidden"
		document.getElementById("can13-14").style.visibility="hidden"
		document.getElementById("can11a-1").style.visibility="visible"
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:277.5px; top:463px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(90deg)";
			document.getElementById("can11a-4").style.visibility="visible"
			document.getElementById("can11a-4").onclick=function(){
			{
				myStopFunction();
				document.getElementById("can11a-4").onclick="";
				document.getElementById("can11a-4").style.visibility="hidden";
				setTimeout(function()
				{
					// document.getElementById("p1-1").innerHTML="1254.6";
					document.getElementById("p11-1111a").innerHTML="00.01";
				},650);

					document.getElementById("can11a-1").style.backgroundColor="lightgrey";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:393.5px; top:463px; height: 30px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(90deg)";
					document.getElementById("can11a-4").style.visibility="visible"
					document.getElementById("11a-3").style.visibility="visible"
					document.getElementById("11a-3").onclick=function()
					{
						myStopFunction();
						document.getElementById("p11-1111a").innerHTML="00.00";
						document.getElementById("11a-3").onclick="";
						document.getElementById("can11a-3").style.visibility="visible"
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:541.5px; top:142px; height: 30px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		    			// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		    			// Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(180deg)";
						document.getElementById("can11a-3").onclick=function()
						{
							myStopFunction();
							document.getElementById("11a-3").style.visibility="hidden"
							document.getElementById('can11a-3').style.animation = "moveBeaker 1s forwards";
							setTimeout(function(){
								document.getElementById("can11a-3").style.visibility="hidden"
								document.getElementById("can11a-2").style.visibility="visible"
								setTimeout(function()
								{
									// document.getElementById("p1-1").innerHTML="1254.6";
									document.getElementById("p11-2222b").style.visibility="visible"
								},650);
								document.getElementById("p11-2222b").innerHTML="Mass of the beaker and water (g) = <span style='border-bottom-style:double'>"+data[5]+ "</span>g";
								document.getElementById("p11-1111a").innerHTML=data[5];
			
								document.getElementById("can11a-1").style.backgroundColor="lightgrey";
								document.getElementById("nextButton").style.visibility="visible"
							},1000);
						}
					}

				}
			}
		

		
	}else if(simsubscreennum==15)
	{
		document.getElementById("incanvas_11").style.visibility="hidden";
		document.getElementById("circlebg_11").style.visibility="hidden";
		document.getElementById("p11").style.visibility="hidden";
		document.getElementById("incanvas_12").style.visibility="visible";
		document.getElementById("circlebg_12").style.visibility="visible";
		document.getElementById("p12").style.visibility="visible";
		
			document.getElementById("can11a-1").style.visibility="hidden"
			document.getElementById("can11a-4").style.visibility="hidden"
			document.getElementById("can11a-2").style.visibility="hidden"
			document.getElementById("p11-2222b").style.visibility="hidden"
			document.getElementById("my_Table").style.visibility="visible";

			document.getElementById("para_p11").style.visibility="visible"
			document.getElementById("para_p11").innerHTML="Mass of container and initial volume of soil(g) = <span text-align:left; style='border-bottom: 1px solid black; color:black; font-size:12px;font-family:verdana'>"+data1[0]+ "</span>g";
			document.getElementById("para_p22").style.visibility="visible"
			document.getElementById("para_p22").innerHTML="Mass of container and remaining soil (g) = <span style='text-align:left; border-bottom: 1px solid black; color:black; font-size:12px;font-family:verdana'>"+data1[1]+ "</span>g";
			// document.getElementById("nextButton").style.visibility="visible"
			document.getElementById("para_p33").style.visibility="visible"
			document.getElementById("para_p33").innerHTML="Mass of soil in the column(g) = <span style='text-align:left; border-bottom: 1px solid black; color:black; font-size:12px;font-family:verdana'>"+data1[2]+ "</span>g";
			document.getElementById("para_p44").style.visibility="visible"
			document.getElementById("para_p44").innerHTML="Mass of empty beaker(g) = <span style='text-align:left; border-bottom: 1px solid black; color:black; font-size:12px;font-family:verdana'>"+data1[3]+ "</span>g";
			document.getElementById("nextButton").style.visibility="visible"
			
		
	}
	
	else if(simsubscreennum==16)
	{
		document.getElementById("incanvas_10").style.visibility="visible";
		document.getElementById("circlebg_10").style.visibility="visible";
		document.getElementById("p10").style.visibility="visible";
		document.getElementById("t2").style.visibility="hidden";
		document.getElementById("incanvas_12").style.visibility="hidden";
		document.getElementById("circlebg_12").style.visibility="hidden";
		document.getElementById("p12").style.visibility="hidden";

		document.getElementById("t3").style.visibility="visible";
			document.getElementById("para_p11").style.visibility="hidden"
			document.getElementById("para_p22").style.visibility="hidden"
			document.getElementById("para_p33").style.visibility="hidden"
			document.getElementById("para_p44").style.visibility="hidden"
			document.getElementById("my_Table").style.visibility="hidden";

			document.getElementById("can15-1").style.visibility="visible"
			document.getElementById("can15-1a").style.visibility="visible"
			document.getElementById("can15-4").style.visibility="visible"
			document.getElementById("can15-5").style.visibility="visible"
			document.getElementById("can15-14").style.visibility="visible"
			document.getElementById("can15-15").style.visibility="visible"
			document.getElementById("can15-14").style.rotate="76deg"
			document.getElementById("can15-14").style.transformOrigin="67% 72%"
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:536.5px; top:439px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		    // Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(270deg)";
			document.getElementById("can15-15").onclick=function()
			{
				myStopFunction();
				document.getElementById("can15-15").style.visibility="hidden"
				document.getElementById("can15-1a").style.visibility="hidden"
				document.getElementById("can15-1b").style.visibility="visible"
				document.getElementById("can15-8").style.visibility="visible"
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:601.5px; top:172px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		    	// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(180deg)";
				document.getElementById("can15-5").onclick=function()
				{
					myStopFunction();
					document.getElementById("can15-6").style.visibility="visible"
					document.getElementById("can15-14").style.transformOrigin="62% 76%"
					document.getElementById("can15-14").style.animation="4s ease 0s 1 normal forwards running stopwatch2"
					document.getElementById("can15-6").style.animation="moveDropping 0.5s 4 forwards"
					setTimeout(function(){
						document.getElementById("can15-8").style.visibility="hidden"
						document.getElementById("can15-6").style.visibility="hidden"
						document.getElementById("can15-9").style.visibility="visible"
						document.getElementById("note7").style.display="block"
					},1500);
				}
			}

		
	}else if(simsubscreennum==17)
	{
		document.getElementById("incanvas_10").style.visibility="hidden";
		document.getElementById("circlebg_10").style.visibility="hidden";
		document.getElementById("p10").style.visibility="hidden";
		document.getElementById("incanvas_11").style.visibility="visible";
		document.getElementById("circlebg_11").style.visibility="visible";
		document.getElementById("p11").style.visibility="visible";

		document.getElementById("can15-1").style.visibility="hidden"
			document.getElementById("can15-1a").style.visibility="hidden"
			document.getElementById("can15-4").style.visibility="hidden"
			document.getElementById("can15-5").style.visibility="hidden"
			document.getElementById("can15-14").style.visibility="hidden"
			document.getElementById("can16a-1").style.visibility="visible"
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:277.5px; top:463px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(90deg)";
			document.getElementById("can16a-4").style.visibility="visible"
			document.getElementById("can16a-4").onclick=function(){
			{
				myStopFunction();
				document.getElementById("can16a-4").onclick="";
				document.getElementById("can16a-4").style.visibility="hidden";
				setTimeout(function()
				{
					// document.getElementById("p1-1").innerHTML="1254.6";
					document.getElementById("p11-1111aa").innerHTML="00.01";
				},650);

					document.getElementById("can16a-1").style.backgroundColor="lightgrey";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:393.5px; top:463px; height: 30px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(90deg)";
					document.getElementById("can16a-4").style.visibility="visible"
					document.getElementById("11aa-3").style.visibility="visible"
					document.getElementById("11aa-3").onclick=function()
					{
						myStopFunction();
						document.getElementById("p11-1111aa").innerHTML="00.00";
						document.getElementById("11aa-3").onclick="";
						document.getElementById("can16a-3").style.visibility="visible"
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:541.5px; top:142px; height: 30px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		    			// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		    			// Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(180deg)";
						document.getElementById("can16a-3").onclick=function()
						{
							myStopFunction();
							document.getElementById("11aa-3").style.visibility="hidden"
							document.getElementById('can16a-3').style.animation = "moveBeaker 1s forwards";
							setTimeout(function(){
								document.getElementById("can16a-3").style.visibility="hidden"
								document.getElementById("can16a-2").style.visibility="visible"
								setTimeout(function()
								{
									// document.getElementById("p1-1").innerHTML="1254.6";
									document.getElementById("p11-2222bb").style.visibility="visible"
								},650);
								document.getElementById("p11-2222bb").innerHTML="Mass of the beaker and water (g) = <span style='border-bottom-style:double'>"+data[6]+ "</span>g";
								document.getElementById("p11-1111aa").innerHTML=data[6];
			
								document.getElementById("can16a-1").style.backgroundColor="lightgrey";
								document.getElementById("nextButton").style.visibility="visible"
							},1000);
						}
					}

				}
			}
		


	}else if(simsubscreennum==18)
	{
		document.getElementById("incanvas_11").style.visibility="hidden";
		document.getElementById("circlebg_11").style.visibility="hidden";
		document.getElementById("p11").style.visibility="hidden";
		document.getElementById("incanvas_12").style.visibility="visible";
		document.getElementById("circlebg_12").style.visibility="visible";
		document.getElementById("p12").style.visibility="visible";
		
			document.getElementById("can16a-1").style.visibility="hidden"
			document.getElementById("can16a-4").style.visibility="hidden"
			document.getElementById("can16a-2").style.visibility="hidden"
			document.getElementById("p11-2222bb").style.visibility="hidden"
			document.getElementById("my_Tables").style.visibility="visible";

			document.getElementById("para_p11").style.visibility="visible"
			document.getElementById("para_p11").innerHTML="Mass of container and initial volume of soil(g) = <span text-align:left; style='border-bottom: 1px solid black; color:black; font-size:12px;font-family:verdana'>"+data1[0]+ "</span>g";
			document.getElementById("para_p22").style.visibility="visible"
			document.getElementById("para_p22").innerHTML="Mass of container and remaining soil (g) = <span style='text-align:left; border-bottom: 1px solid black; color:black; font-size:12px;font-family:verdana'>"+data1[1]+ "</span>g";
			// document.getElementById("nextButton").style.visibility="visible"
			document.getElementById("para_p33").style.visibility="visible"
			document.getElementById("para_p33").innerHTML="Mass of soil in the column(g) = <span style='text-align:left; border-bottom: 1px solid black; color:black; font-size:12px;font-family:verdana'>"+data1[2]+ "</span>g";
			document.getElementById("para_p44").style.visibility="visible"
			document.getElementById("para_p44").innerHTML="Mass of empty beaker(g) = <span style='text-align:left; border-bottom: 1px solid black; color:black; font-size:12px;font-family:verdana'>"+data1[3]+ "</span>g";
			document.getElementById("nextButton").style.visibility="visible"
			
	}
		
	
	
	else if(simsubscreennum==19)
	{
		document.getElementById("incanvas_12").style.visibility="hidden";
		document.getElementById("circlebg_12").style.visibility="hidden";
		document.getElementById("p12").style.visibility="hidden";
		document.getElementById("t3").style.visibility="hidden";
		document.getElementById("incanvas_13").style.visibility="visible";
		document.getElementById("circlebg_13").style.visibility="visible";
		document.getElementById("p13").style.visibility="visible";

			document.getElementById("para_p11").style.visibility="hidden"
			document.getElementById("para_p22").style.visibility="hidden"
			document.getElementById("para_p33").style.visibility="hidden"
			document.getElementById("para_p44").style.visibility="hidden"
			document.getElementById("my_Tables").style.visibility="hidden"
			
			document.getElementById("can18-1").style.visibility="visible"
			document.getElementById("can18-1a").style.visibility="visible"
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:195px; top:307px; height: 40px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById("can18-1").onclick=function()
			{
				myStopFunction();
				document.getElementById("can18-4").style.visibility="visible"
				document.getElementById('can18-4').style.animation = "moveScale 1s forwards";
				setTimeout(function()
				{
					document.getElementById("can18-4").style.visibility="hidden"
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:246px; top:411px; height: 40px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById("can18-1").onclick=function()
					{
						myStopFunction();
						document.getElementById("can18-3").style.visibility="visible"
						document.getElementById('can18-3').style.animation = "moveScale2 1s forwards";
						setTimeout(function()
						{
							document.getElementById("can18-3").style.visibility="hidden"
							document.getElementById("nextButton").style.visibility="visible"
						},2500);
					}

				},2500);
			}
			
		
	}
	

	else if(simsubscreennum==20)
	{
		document.getElementById("nextButton").style.visibility="hidden";
		document.getElementById("incanvas_13").style.visibility="hidden";
		document.getElementById("circlebg_13").style.visibility="hidden";
		document.getElementById("p13").style.visibility="hidden";
		document.getElementById("can18-1").style.visibility="hidden";
		document.getElementById("can18-1a").style.visibility="hidden";
		
		document.getElementById('ivi').style.visibility = "hidden";
		document.getElementById("pv1").style.visibility="hidden";
		document.getElementById("can16-3").style.visibility="hidden";

		document.getElementById("incanvas_14").style.visibility="visible";
		document.getElementById("circlebg_14").style.visibility="visible";
		document.getElementById("p20").style.visibility="visible";
		
		document.getElementById("btn1").style.visibility="visible";
		
		document.getElementById("td4").style.visibility="visible";
		// document.getElementById("td44").style.visibility="visible";
		// document.getElementById("td444").style.visibility="visible";
		
		document.getElementById("can16-1").style.display="none"
			document.getElementById("can16-2").style.display="none"
			
			document.getElementById("my_Table1").style.visibility= "visible";
			document.getElementById("iv").style.visibility="visible"
			
		
	}
		
		
	
		

}
function ok(){
	document.getElementById("can4-3").style.visibility="hidden";
	document.getElementById("note1").style.visibility="hidden";
	document.getElementById("can4-6").style.visibility="visible"
	document.getElementById("can4-6").style.transform = "rotateX(68deg)";
	document.getElementById("nextButton").style.visibility="visible"
}
function ok2(){
	document.getElementById("can8-1").style.visibility="hidden";
	document.getElementById("can8-2").style.visibility="hidden";
}
function ok3(){
	document.getElementById("note4").style.display="none"
	document.getElementById("can8-1").style.visibility="hidden";
	document.getElementById("can8-15").style.visibility="visible";
	document.getElementById("can8-16").style.visibility="visible";
	
	document.getElementById('can8-16').style.animation = "mano 2.5s forwards";
	document.getElementById("can8-17").style.visibility="visible";
	document.getElementById('can8-17').style.animation = "manometer 2.5s forwards";
	setTimeout(function(){
		document.getElementById("nextButton").style.visibility="visible"
	},2000);
}
function ok4(){
	document.getElementById("note5").style.display="none"
	document.getElementById("can10-8").style.visibility="hidden";
	document.getElementById("can10-1b").style.visibility="hidden";
	document.getElementById("can10-1a").style.visibility="visible";
	document.getElementById("nextButton").style.visibility="visible"
}
function ok5(){
	document.getElementById("note6").style.display="none"
	document.getElementById("can13-9").style.visibility="hidden";
	document.getElementById("can13-1b").style.visibility="hidden";
	document.getElementById("can13-1a").style.visibility="visible";
	document.getElementById("nextButton").style.visibility="visible"
	// myInt = setInterval(function(){ animatearrow(); }, 500);
	// document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:601.5px; top:172px; height: 30px; z-index: 10;";
	// document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// // Code for IE9
	// document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// // Standard syntax
	// document.getElementById("arrow1").style.transform = "rotate(180deg)";
	// document.getElementById("can13-5").onclick=function()
	// {
	// 	myStopFunction();
	// 	document.getElementById("can13-6").style.visibility="visible"
	// 	document.getElementById("can13-14").style.transformOrigin="67% 76%"
	// 	document.getElementById("can13-14").style.animation="4s ease 0s 1 normal forwards running stopwatch2"
	// 	document.getElementById("can13-6").style.animation="moveDroppings 0.5s 4 forwards"
	// 	setTimeout(function(){
	// 		document.getElementById("can13-6").style.visibility="hidden"
	// 		document.getElementById("can13-9").style.visibility="hidden"
	// 		document.getElementById("can13-1b").style.visibility="hidden"
	// 		document.getElementById("can13-1a").style.visibility="visible"
	// 		document.getElementById("nextButton").style.visibility="visible"
	// 	},2000);
		
	// }

}
function ok7(){
	document.getElementById("note7").style.display="none"
	document.getElementById("can15-9").style.visibility="hidden";
	document.getElementById("can15-1b").style.visibility="hidden";
	document.getElementById("can15-1a").style.visibility="visible";
	document.getElementById("nextButton").style.visibility="visible"
}
var count=0;
function fillCylinder()
{
	refresh();
	count++;
	document.getElementById("can3-8").style.visibility="visible"
	document.getElementById("can3-8").style.transform = "rotateY(180deg)";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:539.5px; top:142px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById("can3-8").onclick=function()
	{
		myStopFunction();
		document.getElementById("can3-8").onclick="";
		document.getElementById("can3-8").style.animation="moveTrowel 1.5s forwards";
		setTimeout(function(){
			document.getElementById("can3-8").style.visibility="hidden"
			document.getElementById("can3-9").style.visibility="visible"
			document.getElementById("can3-9").style.transform = "rotateY(180deg)";
			document.getElementById("can3-9").style.animation="moveTrowel2  1s forwards";
			setTimeout(function()
			{
				if(count==1)
					document.getElementById("can3-75").style.visibility="hidden";
				if(count==2)
					document.getElementById("can3-74").style.visibility="hidden";
				if(count==3)
					document.getElementById("can3-73").style.visibility="hidden";
				if(count==4)
					document.getElementById("can3-72").style.visibility="hidden";
				
			},50);
			{
				document.getElementById("can3-9").style.visibility="hidden";
				document.getElementById("can3-9a").style.visibility="visible";
				// document.getElementById("can3-9a").style.transform = "rotate(334deg)";
				// document.getElementById("can4-9a").style.transformOrigin="80% 100%";
				document.getElementById("can3-9a").style.animation="rotTrowel 1s forwards";
				setTimeout(function(){
					document.getElementById("can3-9a").style.visibility="hidden";
					document.getElementById("can10").style.visibility="visible";
					document.getElementById("can10").style.animation="fallSand 1s forwards";
					
					setTimeout(function()
					{
						document.getElementById("can10").style.visibility="hidden";
						document.getElementById("can3-6").style.visibility="hidden";
			  			if(count==1)
							document.getElementById("can3-71a").style.visibility="visible";
							
						if(count==2)
							document.getElementById("can3-71b").style.visibility="visible";
						setTimeout(function(){
							tamp();
						},500);
						
				
					
					},1000);
				},1000)
				
				
			}
		},1000);
	}
}

function tamp(){
	refresh();
	document.getElementById("can3-a").style.visibility="visible";	
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById("arrow1").style="visibility:visible; position:absolute; left:377px; top:192px; height:40px; z-index:10;";
	document.getElementById("arrow1").style.WebkitTransform="rotate(360deg)";
	document.getElementById("arrow1").style.msTransform="rotate(360deg)";
	document.getElementById("arrow1").style.transform="rotate(360deg)";
	document.getElementById("can3-a").onclick=function()
	{
		myStopFunction();
		document.getElementById("can3-a").onclick="";
		document.getElementById("can3-a").style.animation="tamp 2s forwards";
		setTimeout(function()
		{
			document.getElementById("can3-a").style.visibility="hidden";
			if(count==1)
			{
				document.getElementById("can3-71a").style.visibility="hidden";
				document.getElementById("can3-711a").style.visibility="visible";
				
			}
			// if(count==2)
			// {
			// 	document.getElementById("can3-71b").style.visibility="hidden";
			// 	document.getElementById("can3-711b").style.visibility="visible";
				
			// }
			
				fill_Cylinder();

			
		},2000);
	}
}

//Fill second Time 

function fill_Cylinder()
{
	document.getElementById("can3-8a").style.visibility="visible"
	document.getElementById("can3-8a").style.transform = "rotateY(180deg)";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:539.5px; top:142px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById("can3-8a").onclick=function()
	{
		myStopFunction();
		document.getElementById("can3-8a").onclick="";
		document.getElementById("can3-8a").style.animation="moveTro 1.5s forwards";
		setTimeout (function(){
			document.getElementById("can3-8a").style.visibility="hidden"
			document.getElementById("can3-9b").style.visibility="visible"
			document.getElementById("can3-9b").style.transform = "rotateY(180deg)";
			document.getElementById("can3-9b").style.animation="moveTro2  1s forwards";
			setTimeout(function()
			{
				document.getElementById("can3-74").style.visibility="hidden";
			},50);
			
			document.getElementById("can3-9b").style.visibility="hidden";
			document.getElementById("can3-9c").style.visibility="visible";
			// document.getElementById("can3-9a").style.transform = "rotate(334deg)";
			// document.getElementById("can4-9a").style.transformOrigin="80% 100%";
			document.getElementById("can3-9c").style.animation="rotTro 1s forwards";
			setTimeout(function(){
				document.getElementById("can3-9c").style.visibility="hidden";
				document.getElementById("can10a").style.visibility="visible";
				document.getElementById("can10a").style.animation="fallSa 1s forwards";
				
				setTimeout(function()
					{
						document.getElementById("can10a").style.visibility="hidden";
						document.getElementById("can3-6").style.visibility="hidden";
						document.getElementById("can3-711a").style.visibility="hidden";
						document.getElementById("can3-71b").style.visibility="visible";
						setTimeout(function(){
							tamping();
						},500);
					})
						
			},1000);
		},1000);
	}

}
function tamping(){
	document.getElementById("can3-b").style.visibility="visible";	
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById("arrow1").style="visibility:visible; position:absolute; left:377px; top:192px; height:40px; z-index:10;";
	document.getElementById("arrow1").style.WebkitTransform="rotate(360deg)";
	document.getElementById("arrow1").style.msTransform="rotate(360deg)";
	document.getElementById("arrow1").style.transform="rotate(360deg)";
	document.getElementById("can3-b").onclick=function()
	{
		myStopFunction();
		document.getElementById("can3-b").onclick="";
		document.getElementById("can3-b").style.animation="tamping 2s forwards";
		setTimeout(function(){
			document.getElementById("can3-b").style.visibility="hidden";
			document.getElementById("can3-71b").style.visibility="hidden";
			
			document.getElementById("can3-711b").style.visibility="visible";
			document.getElementById("note_1").style.display="block";
			// fill_Cyl();
		},2000);
	}
}
function okay(){
	document.getElementById("can3-711b").style.visibility="hidden";
	document.getElementById("can3-1").style.visibility="hidden";
	document.getElementById("can3-11").style.visibility="hidden"
	document.getElementById("can3-14").style.visibility="visible";

	document.getElementById("note_1").style.display="none";
	document.getElementById("nextButton").style.visibility="visible";
}
function refresh()
{
	myStopFunction();
	document.getElementById("can3-8").style.animation="";
	document.getElementById("can3-9").style.animation="";
	document.getElementById("can3-9a").style.transformOrigin="";
	document.getElementById("can3-9a").style.animation="";
	document.getElementById("can3-a").style.animation="";
}
// Fill third Time 

// function fill_Cyl()
// {
// 	document.getElementById("can3-8b").style.visibility="visible"
// 	document.getElementById("can3-8b").style.transform = "rotateY(180deg)";
// 	myInt = setInterval(function(){ animatearrow(); }, 500);
// 	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:539.5px; top:142px; height: 30px; z-index: 10;";
// 	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
// 	// Code for IE9
// 	document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
// 	// Standard syntax
// 	document.getElementById("arrow1").style.transform = "rotate(180deg)";
// 	document.getElementById("can3-8b").onclick=function()
// 	{
// 		myStopFunction();
// 		document.getElementById("can3-8b").onclick="";
// 		document.getElementById("can3-8b").style.animation="moveTrow 1.5s forwards";
// 		setTimeout (function(){
// 			document.getElementById("can3-8b").style.visibility="hidden"
// 			document.getElementById("can3-9d").style.visibility="visible"
// 			document.getElementById("can3-9d").style.transform = "rotateY(180deg)";
// 			document.getElementById("can3-9d").style.animation="moveTro3  1s forwards";
// 			setTimeout(function()
// 			{
// 				document.getElementById("can3-73").style.visibility="hidden";
				
			
// 			},50);
// 			document.getElementById("can3-9d").style.visibility="hidden";
// 			document.getElementById("can3-9e").style.visibility="visible";
// 			// document.getElementById("can3-9a").style.transform = "rotate(334deg)";
// 			// document.getElementById("can4-9a").style.transformOrigin="80% 100%";
// 			document.getElementById("can3-9e").style.animation="rotTrow 1s forwards";
// 			setTimeout(function(){
// 				document.getElementById("can3-9e").style.visibility="hidden";
// 				document.getElementById("can10b").style.visibility="visible";
// 				document.getElementById("can10b").style.animation="fallSan 1s forwards";
// 				document.getElementById("nextButton").style.visibility="visible";
// 				setTimeout(function()
// 					{
// 						document.getElementById("can10b").style.visibility="hidden";
// 						document.getElementById("can3-711b").style.visibility="hidden";
// 						document.getElementById("can3-71c").style.visibility="visible";
// 						// setTimeout(function(){
// 						// 	tamper();
// 						// },500);
// 					})
						
// 			},1000);

// 		},1000);
// 	}
// }
// function tamper(){
// 	document.getElementById("can3-c").style.visibility="visible";	
// 	myInt=setInterval(function(){animatearrow();},500);
// 	document.getElementById("arrow1").style="visibility:visible; position:absolute; left:377px; top:192px; height:40px; z-index:10;";
// 	document.getElementById("arrow1").style.WebkitTransform="rotate(360deg)";
// 	document.getElementById("arrow1").style.msTransform="rotate(360deg)";
// 	document.getElementById("arrow1").style.transform="rotate(360deg)";
// 	document.getElementById("can3-c").onclick=function(){

// 	}
// }
let qCont =0;
function checkResults()
{
	var iddi = document.getElementById("result");
	var idd2 = document.getElementById("check");
	var ansIds = document.getElementById("rightAnss");
	document.getElementById("alertId2").style.visibility = "hidden";
	document.getElementById("alertId2").style.animation = "";
	if(!iddi.value  || !iddi.value!=" ")
	{
		document.getElementById("alertId2").style.visibility = "visible";
		document.getElementById("alertId2").style.animation = "blink_effect 1s infinite";
	}else if(iddi.value== 150)
	{
		idd2.style.visibility = "hidden";
		iddi.parentNode.removeChild(iddi);
		ansIds.classList.add("resultStyles");
		ansIds.style.color = "black";
		ansIds.innerHTML= 150 +"cm<sup>2</sup>/s<span style='color:green'>&#10004;</span>";
		document.getElementById("nextButton").style.visibility="visible";
	}
	else 
	{
		qCont++;
		blinkStop();
		iddi.style.borderColor = "red";
		ansIds.style.color = "red";
		ansIds.innerHTML= "&#10008;";
		ansIds.classList.remove("resultStyles");
		if(qCont == 2)
		{
			idd2.value = "RESULT";
			
		}
		if(qCont == 3)
		{
			idd2.style.visibility = "hidden";
			iddi.parentNode.removeChild(iddi);
			ansIds.classList.add("resultStyles");
			ansIds.style.color = "black";
			ansIds.innerHTML= 150+"cm<sup>2</sup>/s";
			document.getElementById("nextButton").style.visibility="visible";
		}
	}
	
}
function checkResult()
{
	var idd = document.getElementById("res");
	var idd1 = document.getElementById("chk");
	var ansId = document.getElementById("rightAns");
	document.getElementById("alertId").style.visibility = "hidden";
	document.getElementById("alertId").style.animation = "";
	if(!idd.value  || !idd.value!=" ")
	{
		document.getElementById("alertId").style.visibility = "visible";
		document.getElementById("alertId").style.animation = "blink_effect 1s infinite";
	}else if(idd.value== 0.107)
	{
		idd1.style.visibility = "hidden";
		idd.parentNode.removeChild(idd);
		ansId.classList.add("resultStyle");
		ansId.style.color = "black";
		ansId.innerHTML= 0.107 +"cm/s<span style='color:green'>&#10004;</span>";
		
	}
	else 
	{
		qCount++;
		blinkStop();
		idd.style.borderColor = "red";
		ansId.style.color = "red";
		ansId.innerHTML= "&#10008;";
		ansId.classList.remove("resultStyle");
		if(qCount == 2)
		{
			idd1.value = "RESULT";
		}
		if(qCount == 3)
		{
			idd1.style.visibility = "hidden";
			idd.parentNode.removeChild(idd);
			ansId.classList.add("resultStyle");
			ansId.style.color = "black";
			ansId.innerHTML= 0.107+"cm/s";
			
		}
	}
	
}



let clkCount1 = 0;
let arr1 = ["0.108", "0.111", "0.104"];
function checkInput() {
	let inputs = [document.getElementById("td4"), document.getElementById("td44"), document.getElementById("td444")];
	let anyInputEmpty = false;
	for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
			anyInputEmpty = true;
            document.getElementById("alerttxt").style.visibility="visible";
        }
        
    }
	if (anyInputEmpty) {
        return;
    }
	document.getElementById("alerttxt").style.visibility="hidden";
	clkCount1++;
	let allInputsCorrect = true;
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].value === arr1[i]) {
		    inputs[i].style.color = "green";
        
	document.getElementById("nextButton").style.visibility = "visible";
		} else {
			allInputsCorrect = false;
		    inputs[i].style.color = "red";
		}
    setTimeout(() => {
			inputs[i].style.color = "black";
		}, 3000);
			// inputs[i].style.color = "black";
		
	}
	if (clkCount1 == 2) {
		document.getElementById("btn1").style.visibility="hidden";
		document.getElementById("resbtn1").style.visibility = "visible";
	}
	if (allInputsCorrect) {
       
        document.getElementById("btn1").style.visibility = "hidden";
        document.getElementById("resbtn1").style.visibility = "hidden";
    }
}
function getResult1() {
	let inputs = [document.getElementById("td4"), document.getElementById("td44"), document.getElementById("td444")];
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = arr1[i];
    }
	document.getElementById("resbtn1").style.visibility = "hidden";

	
}

let clockCount1 = 0;
let array = ["150"];
// function checkingInputs() {
//     let inputs = [document.getElementById("result")];
//     let anyInputEmpty = false;

//     for (let i = 0; i < inputs.length; i++) {
//         if (inputs[i].value === "") {
//             anyInputEmpty = true;
//             alert("Please Enter Value to proceed");
//             return;
//         }
//     }

//     document.getElementById("alertId2").style.visibility = "hidden";
//     clockCount1++;

//     let allInputsCorrect = true;

//     for (let i = 0; i < inputs.length; i++) {
// 		if (inputs[i].value === array[i]) {
// 			inputs[i].style.color = "green";
// 			inputs[i].value += " ✔";
// 		} else {
// 			allInputsCorrect = false;
// 			inputs[i].style.color = "red";
// 			inputs[i].value += " ✘";
// 		}
// 	}

//     if (clockCount1 >= 1) {
//         document.getElementById("resbutton").disabled = false;
//     }

//     if (allInputsCorrect) {
//         document.getElementById("buttonVer").style.visibility = "hidden";
//         document.getElementById("resbutton").style.visibility = "hidden";
//     }
// }
// function checkingInputs() {
//     let inputs = [document.getElementById("result")];
//     let anyInputEmpty = false;

//     for (let i = 0; i < inputs.length; i++) {
//         if (inputs[i].value === "") {
//             anyInputEmpty = true;
//             alert("Please Enter Value to proceed");
//             return;
//         }
//     }

//     document.getElementById("alertId2").style.visibility = "hidden";
//     clockCount1++;

//     let allInputsCorrect = true;

//     for (let i = 0; i < inputs.length; i++) {
//         let symbolElement = document.createElement('span');
//         symbolElement.style.marginLeft = '5px'; // Adjust margin as needed

//         if (inputs[i].value === array[i]) {
//             inputs[i].style.color = "black";
//             symbolElement.style.color = "green"; // Set symbol color to green
//             symbolElement.innerHTML = "✔";
//         } else {
//             allInputsCorrect = false;
//             inputs[i].style.color = "black";
//             symbolElement.style.color = "red"; // Set symbol color to red
//             symbolElement.innerHTML = "✘";
//         }

//         // Append the symbol element after the input
//         inputs[i].parentNode.appendChild(symbolElement);
//     }

//     if (clockCount1 >= 1) {
//         document.getElementById("resbutton").disabled = false;
//     }

//     if (allInputsCorrect) {
//         document.getElementById("buttonVer").style.visibility = "hidden";
//         document.getElementById("resbutton").style.visibility = "hidden";
//     }
// }
// function gettingResult2() {
//     let inputs = [document.getElementById("result")];
//     for (let i = 0; i < inputs.length; i++) {
//         inputs[i].value = array[i];
//     }
// 	document.getElementById("buttonVer").style.visibility = "hidden";
//     document.getElementById("resbutton").style.visibility = "hidden";
// }
// function checkingInputs() {
//     let inputs = [document.getElementById("result")];
//     let anyInputEmpty = false;

//     for (let i = 0; i < inputs.length; i++) {
//         if (inputs[i].value === "") {
//             anyInputEmpty = true;
//             alert("Please Enter Value to proceed");
//             return;
//         }
//     }

//     document.getElementById("alertId2").style.visibility = "hidden";
//     clockCount1++;

//     let allInputsCorrect = true;

//     for (let i = 0; i < inputs.length; i++) {
//         let symbolElement = document.createElement('span');
//         symbolElement.style.marginLeft = '5px'; // Adjust margin as needed

//         if (inputs[i].value === array[i]) {
//             inputs[i].style.color = "black";
//             symbolElement.classList.add('check-symbol-correct'); // Add a class to correct symbols
//             symbolElement.style.color = "green"; // Set symbol color to green
//             symbolElement.innerHTML = "✔";
//         } else {
//             allInputsCorrect = false;
//             inputs[i].style.color = "black";
//             symbolElement.classList.add('check-symbol-incorrect'); // Add a class to incorrect symbols
//             symbolElement.style.color = "red"; // Set symbol color to red
//             symbolElement.innerHTML = "✘";
//         }

//         // Append the symbol element after the input
//         inputs[i].parentNode.appendChild(symbolElement);
//     }

//     if (clockCount1 >= 1) {
//         document.getElementById("resbutton").disabled = false;
//     }

//     if (allInputsCorrect) {
//         document.getElementById("buttonVer").style.visibility = "hidden";
//         document.getElementById("resbutton").style.visibility = "hidden";
//     }
// }


function checkingInputs() {
    let inputs = [document.getElementById("result")];
    let anyInputEmpty = false;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            anyInputEmpty = true;
            alert("Please Enter Value to proceed");
            return;
        }
    }

    document.getElementById("alertId2").style.visibility = "hidden";
    clockCount1++;

    let allInputsCorrect = true;

    for (let i = 0; i < inputs.length; i++) {
        let symbolElement = document.createElement('span');
        symbolElement.style.marginLeft = '5px'; // Adjust margin as needed

        if (inputs[i].value === array[i]) {
            inputs[i].style.color = "black";
            symbolElement.classList.add('check-symbol-correct');
            symbolElement.style.color = "green";
            symbolElement.innerHTML = "✔";
        } else {
            allInputsCorrect = false;
            inputs[i].style.color = "black";
            symbolElement.classList.add('check-symbol-incorrect');
            symbolElement.style.color = "red";
            symbolElement.innerHTML = "✘";
        }

        inputs[i].parentNode.appendChild(symbolElement);
    }

    if (clockCount1 >= 1) {
        document.getElementById("resbutton").disabled = false;
        document.getElementById("buttonVer").style.pointerEvents = "none";
    }

    if (allInputsCorrect) {
        document.getElementById("buttonVer").style.visibility = "hidden";
        document.getElementById("resbutton").style.visibility = "hidden";
    }
}


function gettingResult2() {
    let inputs = [document.getElementById("result")];
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = array[i];

        // Hide symbols with the 'check-symbol-incorrect' class
        let incorrectSymbols = inputs[i].parentNode.querySelectorAll('.check-symbol-incorrect');
        incorrectSymbols.forEach(element => element.innerHTML = '');

        // Optionally, you can hide correct symbols as well if needed
        // let correctSymbols = inputs[i].parentNode.querySelectorAll('.check-symbol-correct');
        // correctSymbols.forEach(element => element.innerHTML = '');
    }

    document.getElementById("buttonVer").style.visibility = "hidden";
    document.getElementById("resbutton").style.visibility = "hidden";
}





                 