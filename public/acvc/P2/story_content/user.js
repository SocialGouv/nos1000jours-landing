function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Fb7uCwsrRS":
        Script1();
        break;
      case "6KpObsUOdSS":
        Script2();
        break;
  }
}

function Script1()
{
  console.log("Fin du quizz");
println("Results.ScorePercent");
}

function Script2()
{
  var player = GetPlayer();
var score = player.GetVar("Monrésultat");
console.log(score);
window.parent.resultat_P2(Math.floor(score));

}

