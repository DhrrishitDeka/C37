class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
      question.hide();
      background("Yellow");
      fill(0);
      textSize(30);
      text("Result of the Quiz",340,50);
      Contestant.getPlayerInfo();
      if(allContestants !== undefined){
        debugger;
        var display_Answers = 230;
        fill("Black");
        textSize(20);
        text("The contestant who answered correct are highlighted in Blue color!!",130,230);
      for(var plr in allContestants){
        debugger;
        var correctAns
        if (correctAns === allContestants[plr].answers)
        fill("Blue");
        else
        fill("Red");

        display_Answers+=30;
        textSize(29);
        text(allContestants[plr].name + ":" + allContestants[plr].amswer, 250,display_Answers)
      }
    
      
      
      }
    
  }

}
