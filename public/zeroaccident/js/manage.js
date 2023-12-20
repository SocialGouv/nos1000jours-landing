var init1 = false;
var init3 = false;
function resultat_P1(resultats_from_unity)
{
	setCookie("P1", resultats_from_unity, 365);
	display_game_progression()
}
function resultat_P2(res)
{
	setCookie("P2", res, 365);
	display_game_progression()
	//$("#id_btn_close_P1").show();
}
function resultat_P3(resultats_from_unity)
{
	setCookie("P3", resultats_from_unity, 365);
	display_game_progression()
	//$("#id_btn_close_P1").show();
}

function games_hide()
{
	//$("#svgpath").contents().find("#p1_res_text").text("");
	$("#id_btn_close_P1").hide();
	$("#id_part1_Unity").hide();
	$("#id_part2_CESIM").hide();
	$("#id_intro").show();
	$("#unity-fullscreen-button").off('click');
	$("#quizz-fullscreen-button").off('click');
	if($("#id_part1_Unity_iframe")[0].contentWindow.myGameInstance)
		$("#id_part1_Unity_iframe")[0].contentWindow.myGameInstance.SendMessage('JSInterface', 'FocusLost');
	$("#unity-fullscreen-button").click(function(e){
		$("#id_part1_Unity_iframe")[0].contentWindow.myGameInstance.SetFullscreen(1);
	});
	$("#quizz-fullscreen-button").click(function(e){
		$("#id_part2_CESIM > iframe")[0].requestFullscreen();
	});
}

function display_game_progression()
{
	//
	//
	//$("#svgpath").contents().find('#p1').off('click');
	//$("#svgpath").contents().find("#p1").attr('xlink:href', "img/p1.svg");
	$("#p1_res_text").text("");
	$("#p2_res_text").text("");
	$("#p3_res_text").text("");
	
	$("#p1").click(function() {
		$("#id_intro").hide();
		$("#id_part2_CESIM").hide();
		$("#id_part1_Unity").show();
		$("#id_btn_close_P1").show();
		if($("#id_part1_Unity_iframe")[0].contentWindow.myGameInstance)
		{
			$("#id_part1_Unity_iframe")[0].contentWindow.myGameInstance.SendMessage('JSInterface', 'InitPart1', getCookie("P1"));
		}
		else
		{
			init1=true;
		}
	});
	//
	//
	$('#p2').off('click');
	$('#p3').off('click');
	$('#p2').removeClass("enabled");
	$('#p3').removeClass("enabled");
	$('#p2').addClass("disabled");
	$('#p3').addClass("disabled");
	let data = getUnityData("P1");
	let p1Done = getCookie("P1Done") == "OK";
	if (data !== null)
	{
		$("#p1_res img").attr('src', "img/p1_res.svg");
		$("#p1_res_text").text(scoreP1());
		if(data.score == data.maxScore || p1Done)
		{
			setCookie("P1Done", "OK");
			$("#p2 img.img-fluid").attr('src', "img/p2.svg");
			$("#p2_text").addClass("selected");
			$('#p2').addClass("enabled");
			$('#p2').removeClass("disabled");
			$("#p2").click(function(e) {
				if (!e) e = window.event;
  
				$("#id_part1_Unity").hide();
				$("#id_intro").hide();
				$("#id_part2_CESIM").show();
				$("#id_btn_close_P1").show();
				if($("#id_part1_Unity_iframe")[0].contentWindow.myGameInstance)
					$("#id_part1_Unity_iframe")[0].contentWindow.myGameInstance.SendMessage('JSInterface', 'FocusLost');
			});
			$("#p3 img.img-fluid").attr('src', "img/p3.svg");
			$("#p3_text").addClass("selected");
			$('#p3').addClass("enabled");
			$('#p3').removeClass("disabled");
			$("#p3").click(function() {
				$("#id_part2_CESIM").hide();
				$("#id_intro").hide();
				$("#id_part1_Unity").show();
				$("#id_btn_close_P1").show();
				if($("#id_part1_Unity_iframe")[0].contentWindow.myGameInstance)
				{
					$("#id_part1_Unity_iframe")[0].contentWindow.myGameInstance.SendMessage('JSInterface', 'InitPart3', getCookie("P3"));
				}
				else
				{
					init3=true;
				}
				
			});
			
		}
	}
	
	data = getUnityData("P2");
	if (data !== null)
	{
		$("#p2_res img").attr('src', "img/p2_res.svg");
		$("#p2_res_text").text(scoreP2());
	}
	//
	//
	data = getUnityData("P3");
	if (data !== null)
	{
		$("#p3_res img").attr('src', "img/p3_res.svg");
		$("#p3_res_text").text(scoreP3());
	}
}

function scoreP1()
{
	let resultats = "";
	let data = getUnityData("P1");
	if (data !== null)
	{
		resultats = "" + data.score + "/" + data.maxScore;
	}
	return resultats;
}
function scoreP2()
{
	let resultats = "";
	let data = getUnityData("P2");
	if (data !== null)
	{
		resultats = "" + data + "%";
	}
	return resultats;
}
function scoreP3()
{
	let resultats = "";
	let data = getUnityData("P3");
	if (data !== null)
	{
		var score = 0;
		for(var i=0;i<data.missions.length;i++)
		{
			if(data.missions[i].value)
				score+=1;
		}
		resultats = "" + score + "/" + data.missions.length;
	}
	return resultats;
}
function getUnityData(name)
{
	var str=getCookie(name);
	if (str !== "")
	{
		let data = JSON.parse(str);
		return data;
	}
	return null;
}