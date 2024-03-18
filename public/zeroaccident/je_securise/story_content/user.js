function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6YflvHg7yog":
        Script1();
        break;
      case "5oFRBXfimAl":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  console.log("Fin du quizz");
println("Results.ScorePercent");
}

window.Script2 = function()
{
 var player = GetPlayer();
  var score = player.GetVar("Monrésultat");
  console.log(score);
  window.parent.resultat_P2(Math.floor(score));
}

};
