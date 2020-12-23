var gameState, correct, incorrect, player, background1, backImage, playerImage, score, correctGroup, incorrectGroup, correct1, incorrect1, correct1Group, incorrect1Group, incorrect2, correct2, correct2Group, incorrect3, correct3, incorrect2Group, correct3Group, incorrect3Group, problem, breakFree, intoYou, sevenRings, thankUNext, focus1, loveMeHarder, dangerousWoman, bangBang, stuckWithU, girlOnFire, middle, havana, badRomance, wolves, diamonds, blankSpace, senorita, worthIt, hipsDontLie, wdta, attention, howLong, suffer, dangerously, patient, doneForMe, wayIAm, boy, girlfriend, perfect, stitches, sorry, shapeOfYou, faded, loveYourself, mercy, allOfMe, baby, believer, whatDoYouMean, yummy, intentions, neverSayNever, iDontCare, boyfriend, tenThousandHours, ME, shakeItOff, youBelongWithMe, lookWhatYouMadeMeDo, badBlood, youNeedToCalmDown, loveStory, delicate, style, charlieImage, arianaImage, charlie, ariana, justinImage, justin, taylorImage, taylor, back2, dieSound, correctSound, startSound, restartImage, restart; 
var problemSong, sevenRingsSong, thankUNextSong, loveMeHarderSong, breakFreeSong, stuckWithUSong, dangerousWomanSong, oneLastTimeSong, breathinSong, bangBangSong, buwygSong, focusSong, attentionSong, howLongSong, wdtaSong, doneForMeSong, seeYouAgainSong, girlfriendSong, wayIAmSong, boySong, LAGirlsSong, patientSong, emptyCupsSong, youNeedToCalmDownSong, blankSpaceSong, lwymmdSong, ttHoursSong, yummySong, babySong, intentionsSong, wdymSong, neverSayNeverSong, iDontCareSong, loveYourselfSong, ybwmSong, badBloodSong, miGenteSong, sorrySong, num, num2, fc, fc2;

function preload() {
  playerImage = loadImage("player.png");
  backImage = loadImage("background.png");
  problem = loadImage("Problem.png");
  breakFree = loadImage("Break Free.png");
  intoYou = loadImage("Into You.png");
  sevenRings = loadImage("7 Rings.png");
  thankUNext = loadImage("Thank U, Next.png");
  focus1 = loadImage("focus.png");
  loveMeHarder = loadImage("loveMeHarder.png");
  dangerousWoman = loadImage("Dangerous Woman.png");
  bangBang = loadImage("Bang Bang.png");
  stuckWithU = loadImage("Stuck With U.png");
  girlOnFire = loadImage("Girl on Fire.png");
  middle = loadImage("Middle.png");
  havana = loadImage("Havana.png");
  badRomance = loadImage("Bad Romance.png");
  wolves = loadImage("Wolves.png");
  diamonds = loadImage("Diamonds.png");
  blankSpace = loadImage("Blank Space.png");
  senorita = loadImage("Senorita.png");
  worthIt = loadImage("Worth It.png");
  hipsDontLie = loadImage("Hips Don't Lie.png");
  wdta = loadImage("We Don't Talk Anymore.png");
  attention = loadImage("Attention.png");
  howLong = loadImage("How Long.png");
  suffer = loadImage("Suffer.png");
  dangerously = loadImage("Dangerously.png");
  patient = loadImage("Patient.png");
  doneForMe = loadImage("Done For Me.png");
  wayIAm = loadImage("Way I Am.png");
  boy = loadImage("Boy.png");
  girlfriend = loadImage("Girlfriend.png");
  perfect = loadImage("Perfect.png"); 
  stitches = loadImage("Stitches.png");
  sorry = loadImage("Sorry.png");
  shapeOfYou = loadImage("Shape of You.png");
  faded = loadImage("Faded.png");
  loveYourself = loadImage("Love Yourself.png");
  mercy = loadImage("Mercy.png");
  allOfMe = loadImage("All Of Me.png");
  baby = loadImage("Baby.png");
  believer = loadImage("Believer.png");
  whatDoYouMean = loadImage("What Do You Mean.png");
  yummy = loadImage("Yummy.png");
  intentions = loadImage("Intentions.png");
  neverSayNever = loadImage("Never Say Never.png");
  iDontCare = loadImage("I Don't Care.png");
  boyfriend = loadImage("Boyfriend.png");
  tenThousandHours = loadImage("ttHours.png");
  ME = loadImage("ME.png");
  shakeItOff = loadImage("Shake It Off.png");
  youBelongWithMe = loadImage("You Belong With Me.png");
  lookWhatYouMadeMeDo = loadImage("Look What You Made Me Do.png");
  badBlood = loadImage("Bad Blood.png");
  youNeedToCalmDown = loadImage("You Need to Calm Down.png");
  loveStory = loadImage("Love Story.png");
  delicate = loadImage("Delicate.png");
  style = loadImage("Style.png");
  charlieImage = loadImage("charlie.png");
  arianaImage = loadImage("ariana.png");
  justinImage = loadImage("justin.png");
  taylorImage = loadImage("taylor.png");
  dieSound = loadSound("die.mp3")
  correctSound = loadSound("correct.mp3");
  startSound = loadSound("start.mp3");
  restartImage = loadImage("restart.png");
  problemSong = loadSound("problem.mp3");
  sevenRingsSong = loadSound("sevenRings.mp3");
  thankUNextSong = loadSound("Thank U Next.mp3");
  loveMeHarderSong = loadSound("Love Me Harder.mp3");
  breakFreeSong = loadSound("bf.mp3");
  dangerousWomanSong = loadSound("dw.mp3");
  breathinSong = loadSound("breathin.mp3");
  attentionSong = loadSound("attention.mp3");
  howLongSong = loadSound("howLong.mp3");
  wdtaSong = loadSound("wdta.mp3");
  doneForMeSong = loadSound("doneForMe.mp3");
  wayIAmSong = loadSound("wayIAm.mp3");
  youNeedToCalmDownSong = loadSound("youNeedToCalmDown.mp3");
  blankSpaceSong = loadSound("blankSpace.mp3");
  lwymmdSong = loadSound("lwymmd.mp3");
  yummySong = loadSound("yummy.mp3");
  babySong = loadSound("baby.mp3");
  intentionsSong = loadSound("intentions.mp3");
  wdymSong = loadSound("wdym.mp3");
  neverSayNeverSong = loadSound("nsn.mp3");
  boySong = loadSound("BOY.mp3");
  LAGirlsSong = loadSound("LAGirls.mp3");
  patientSong = loadSound("Patient.mp3");
  ybwmSong = loadSound("ybwm.mp3");
  miGente = loadSound("Mi Gente.mp3");
  sorrySong = loadSound("sorry.mp3");
}

function setup() {
  createCanvas(400,400);
  
  //background
  background1 = createSprite(200,100,10,10);
  background1.addImage(backImage);
  background1.scale = 3;
  
  //player
  player = createSprite(200,250,10,10);
  player.addImage("player",playerImage);
  player.scale = 0.22;
  
  //gameState and score
  gameState = "start";
  score = 0;
  
  //Creating groups
  incorrectGroup = createGroup();
  correctGroup = createGroup();
  correct1Group = createGroup();
  incorrect1Group = createGroup();
  correct2Group = createGroup();
  incorrect2Group = createGroup();
  correct3Group = createGroup();
  incorrect3Group = createGroup();
  
  //ariana beginning image
  ariana = createSprite(100,175,10,10);
  ariana.addImage(arianaImage);
  ariana.scale = 0.1;
  
  //charlie beginning image
  charlie = createSprite(275,170,30,30);
  charlie.addImage(charlieImage);
  charlie.scale = 0.34;
  
  //justin beginning image
  justin = createSprite(300,305,30,30);
  justin.addImage(justinImage);
  justin.scale = 0.14;
  
  //taylor beginning image
  taylor = createSprite(100,315,30,30);
  taylor.addImage(taylorImage);
  taylor.scale = 0.11;
  
  //sprites only for end gameState
  back2 = createSprite(200,200,400,400);
  restart = createSprite(200,300,10,10);
  restart.addImage(restartImage);
  restart.scale = 0.2;
  restart.visible = false;
  
  num = 0;
  num2 = 0;
  fc = Math.round(random(130,170));
  fc2 = Math.round(random(130,170));
}

function draw() {
  background("lightblue");
  
//start game state
if(gameState === "start") {
  
  if(num2===0) {
    sorrySong.play();
    num2++;
  }
  
  //making end variables not visible
  back2.visible = false;
  restart.visible = false;
  
  //background movement
  background1.velocityY = 4;
  if(background1.y > 340) {
    background1.y = 200;
  }
  
  //singer images and functions
  ariana.visible = true;
  charlie.visible = true;
  justin.visible = true;
  taylor.visible = true;
  
  if(mousePressedOver(ariana)) {
    gameState = "playAriana";
    sorrySong.stop();
    num2--;
    startSound.play();
    rand = Math.round(random(1, 7));
    if(rand===1) {
      problemSong.play();
    } else if(rand===2) {
        sevenRingsSong.play();
    } else if(rand===3) {
        thankUNextSong.play();
    } else if(rand===4) {
        loveMeHarderSong.play();
    } else if(rand===5) {
        dangerousWomanSong.play();
    } else if(rand===6) {
        breathinSong.play();
    } else if(rand===7) {
        breakFreeSong.play();
    } 
    } 
  
  if(mousePressedOver(charlie)) {
    gameState = "playCharlie";
    sorrySong.stop();
    num2--;
    startSound.play();
    rand = Math.round(random(1,8))
    if(rand===1) {
      attentionSong.play();
    } else if(rand===2) {
        howLongSong.play();
    } else if(rand===3) {
        wayIAmSong.play();
    } else if(rand===4) {
        doneForMeSong.play();
    } else if(rand===5) {
        wdtaSong.play();
    } else if(rand===6) {
        boySong.play();
    } else if(rand===7) {
        patientSong.play();
    } else if(rand===8) {
        LAGirlsSong.play();
    }
  }
  if(mousePressedOver(justin)) {
    gameState = "playJustin";
    sorrySong.stop();
    num2--;
    startSound.play();
    rand = Math.round(random(1,5));
    if(rand===1) {
        babySong.play();
    } else if(rand===2) {
        yummySong.play();
    } else if(rand===3) {
        intentionsSong.play();
    } else if(rand===4) {
        wdymSong.play();
    } else if(rand===5) {
        neverSayNeverSong.play();
  }
}
  if(mousePressedOver(taylor)) {
    gameState = "playTaylor";
    sorrySong.stop();
    num2--;
    startSound.play();
    rand = Math.round(random(1, 4));
    if(rand===1) {
      lwymmdSong.play();
    } else if(rand===2) {
        blankSpaceSong.play();
    } else if(rand===3) {
        youNeedToCalmDownSong.play();
    } else if(rand===4) {
        ybwmSong.play();
     }
  }
  
  //stopping player
  player.velocityY = 0;
}
  
if(gameState === "playAriana") {
  
  //making certain sprites invisible
  back2.visible = false;
  restart.visible = false;
  ariana.visible = false;
  charlie.visible = false;
  justin.visible = false;
  taylor.visible = false;
  
  //background movement
  background1.velocityY = 4;
  if(background1.y > 340) {
    background1.y = 200;
  }
  
  //player controls
  if(keyDown("space")||keyDown("up")) {
    player.velocityY = -7;
  }
  player.velocityY = player.velocityY+0.2;
  
  if(keyDown("right")) {
    player.x = player.x+10;
  }
  
  if(keyDown("left")) {
    player.x = player.x-10;
  }
  
  //increase in score
  if(correctGroup.isTouching(player)) {
    correctGroup.destroyEach();
    score++;
    correctSound.play();
  }
  
  //switching to end game state
  if(incorrectGroup.isTouching(player)||player.y>400||player.y<0||player.x<0||player.x>400) {
    gameState="end";
    incorrectGroup.destroyEach();
    correctGroup.destroyEach();
    dieSound.play();
    problemSong.stop();
    sevenRingsSong.stop();
    loveMeHarderSong.stop();
    thankUNextSong.stop();
    breakFreeSong.stop();
    dangerousWomanSong.stop();
    breathinSong.stop();
  }
  
  //spawning choices
  spawnIncorrectAriana();
  spawnCorrectAriana();
  }
  
if(gameState === "playCharlie") {
  
  //making certain varaibles invisible
  back2.visible = false;
  restart.visible = false;
  ariana.visible = false;
  charlie.visible = false;
  justin.visible = false;
  taylor.visible = false;
  
  //background movement
  background1.velocityY = 4;
  if(background1.y > 340) {
    background1.y = 200;
  }
  
  //player controls
  if(keyDown("space")||keyDown("up")) {
    player.velocityY = -7;
  }
  player.velocityY = player.velocityY+0.2;
  
  if(keyDown("right")) {
    player.x = player.x+10;
  }
  
  if(keyDown("left")) {
    player.x = player.x-10;
  }
  
  //increasing score
  if(correct1Group.isTouching(player)) {
    correct1Group.destroyEach();
    score++;
    correctSound.play();
  }
  
  //switching to end game state
  if(incorrect1Group.isTouching(player)||player.y>400||player.y<0||player.x<0||player.x>400) {
    gameState="end";
    incorrect1Group.destroyEach();
    correct1Group.destroyEach();
    dieSound.play();
    attentionSong.stop();
    howLongSong.stop();
    doneForMeSong.stop();
    wayIAmSong.stop();
    wdtaSong.stop();
    boySong.stop();
    LAGirlsSong.stop();
    patientSong.stop();
  }
  
  //spawning choices
  spawnIncorrectCharlie();
  spawnCorrectCharlie();
  }
  
  //justin gameState
  if(gameState === "playJustin") {
  
  //making certain sprites invisible
  back2.visible = false;
  restart.visible = false;
  ariana.visible = false;
  charlie.visible = false;
  justin.visible = false;
  taylor.visible = false;
  
  //background movement
  background1.velocityY = 4;
  if(background1.y > 340) {
    background1.y = 200;
  }
  
  //player controls
  if(keyDown("space")||keyDown("up")) {
    player.velocityY = -7;
  }
  player.velocityY = player.velocityY+0.2;
  
  if(keyDown("right")) {
    player.x = player.x+10;
  }
  
  if(keyDown("left")) {
    player.x = player.x-10;
  }
  
  //increase in score
  if(correct2Group.isTouching(player)) {
    correct2Group.destroyEach();
    score++;
    correctSound.play();
  }
  
  //switching to end game state
  if(incorrect2Group.isTouching(player)||player.y>400||player.y<0||player.x<0||player.x>400) {
    gameState="end";
    incorrect2Group.destroyEach();
    correct2Group.destroyEach();
    dieSound.play();
    yummySong.stop();
    babySong.stop();
    intentionsSong.stop();
    wdymSong.stop();
    neverSayNeverSong.stop();
  }
  
  //spawning choices
  spawnIncorrectJustin();
  spawnCorrectJustin();
  }
  
  //taylor gameState
  if(gameState === "playTaylor") {
  
  //making certain sprites invisible
  back2.visible = false;
  restart.visible = false;
  ariana.visible = false;
  charlie.visible = false;
  justin.visible = false;
  taylor.visible = false;
  
  //background movement
  background1.velocityY = 4;
  if(background1.y > 340) {
    background1.y = 200;
  }
  
  //player controls
  if(keyDown("space")||keyDown("up")) {
    player.velocityY = -7;
  }
  player.velocityY = player.velocityY+0.2;
  
  if(keyDown("right")) {
    player.x = player.x+10;
  }
  
  if(keyDown("left")) {
    player.x = player.x-10;
  }
  
  //increase in score
  if(correct3Group.isTouching(player)) {
    correct3Group.destroyEach();
    score++;
    correctSound.play();
  }
  
  //switching to end game state
  if(incorrect3Group.isTouching(player)||player.y>400||player.y<0||player.x<0||player.x>400) {
    gameState="end";
    incorrect3Group.destroyEach();
    correct3Group.destroyEach();
    dieSound.play();
    youNeedToCalmDownSong.stop();
    blankSpaceSong.stop();
    lwymmdSong.stop();
    ybwmSong.stop();
  }
  
  //spawning choices
  spawnIncorrectTaylor();
  spawnCorrectTaylor();
  }
  
  //end game State
  if(gameState==="end") {
      //making certain sprites visible
      back2.visible = true;
      restart.visible = true;
      back2.shapeColor = "red";
      if(num===0) {
        miGente.play(false);
        num++;
      }
      //switching game state to start
    if(mousePressedOver(restart)) {
      miGente.stop();
      num--;
      gameState="start";
      startSound.play();
      score = 0;
      player.x = 200;
      player.y = 250;
    }
  }
  
  drawSprites();
  
  //All text
  
  if(gameState==="start") {
    textFont("georgia");
    textSize(15);
    fill("black");
    text("In this game, you can test your knowledge on four",10,20);
    text("particular pop music artists: Ariana Grande, Charlie Puth,",10,35);
    text("Taylor Swift, & Justin Bieber. You will be climbing up a",10,50);
    text("wall trying to collect the correct songs per artist. Use the",10,65)
    text("space/up, right, & left arrow keys to climb. Every time you ",10,80)
    text("select the right song, you get a point. However, if you hit a ",10,95)
    text("wrong song, its game over. Select an artist to begin!",10,110);
  }
  
  if(gameState==="playAriana" || gameState==="playCharlie" || gameState==="playJustin" || gameState==="playTaylor") {
    textFont("georgia");
    textSize(20);
    fill("black");
    text("Score: " + score,300,20);
  }
  
  if(gameState==="end") {
    textFont("georgia");
    textSize(20);
    fill("white");
    text("Game Over. Press the icon below to restart.",12,200);
    text("Your final score was " + score + "! Great job!",60,220)
  }
}

function spawnCorrectAriana() {
  //creating correct choices for ariana
  if(frameCount%fc===0) {
    correct = createSprite(random(100,300),0,10,10)
    correct.scale = 0.25;
    rand = Math.round(random(1,10))
    if(rand===1) {
      correct.addImage(problem);
    } else if (rand===2) {
      correct.addImage(sevenRings);
    } else if (rand===3) {
      correct.addImage(intoYou);
    } else if (rand===4) {
      correct.addImage(breakFree);
    } else if (rand===5) {
      correct.addImage(thankUNext);
    } else if (rand===6) {
      correct.addImage(focus1);
    } else if (rand===7) {
      correct.addImage(bangBang);
    } else if (rand===8) {
      correct.addImage(stuckWithU);
    } else if (rand===9) {
      correct.addImage(loveMeHarder);
    } else if (rand===10) {
      correct.addImage(dangerousWoman);
    } 
    correct.velocityY = 4;
    correct.lifetime = 150;
    correctGroup.add(correct);
    }
}

function spawnIncorrectAriana() {
  //creating incorrect choices for ariana
  if(frameCount%fc2===0) {
    incorrect = createSprite(random(10,300),0,100,20);
    incorrect.scale = 0.25;
    rand = Math.round(random(1,10))
    if(rand===1) {
      incorrect.addImage(girlOnFire);
    } else if (rand===2) {
      incorrect.addImage(wolves);
    } else if (rand===3) {
      incorrect.addImage(havana);
    } else if (rand===4) {
      incorrect.addImage(middle);
    } else if (rand===5) {
      incorrect.addImage(badRomance);
    } else if (rand===6) {
      incorrect.addImage(diamonds);
    } else if (rand===7) {
      incorrect.addImage(hipsDontLie);
    } else if (rand===8) {
      incorrect.addImage(senorita);
    } else if (rand===9) {
      incorrect.addImage(blankSpace);
    } else if (rand===10) {
      incorrect.addImage(worthIt);
    } 
    incorrect.velocityY = 4;
    incorrect.lifetime = 150;
    incorrectGroup.add(incorrect);
  }
}

function spawnCorrectCharlie() {
  //creating correct choices for charlie
  if(frameCount%fc===0) {
    correct1 = createSprite(random(100,300),0,100,20)
    correct1.scale = 0.25;
    rand = Math.round(random(1,10))
    if(rand===1) {
      correct1.addImage(wdta);
    } else if (rand===2) {
      correct1.addImage(dangerously);
    } else if (rand===3) {
      correct1.addImage(suffer);
    } else if (rand===4) {
      correct1.addImage(attention);
    } else if (rand===5) {
      correct1.addImage(howLong);
    } else if (rand===6) {
      correct1.addImage(boy);
    } else if (rand===7) {
      correct1.addImage(patient);
    } else if (rand===8) {
      correct1.addImage(wayIAm);
    } else if (rand===9) {
      correct1.addImage(girlfriend);
    } else if (rand===10) {
      correct1.addImage(doneForMe);
    }  
    correct1.velocityY = 4;
    correct1.lifetime = 150;
    correct1Group.add(correct1);
    }
}

function spawnIncorrectCharlie() {
  //creating incorrect choices for charlie
  if(frameCount%fc2===0) {
    incorrect1 = createSprite(random(100,300),0,100,20);  
    incorrect1.scale = 0.25;
    rand = Math.round(random(1,10))
    if(rand===1) {
      incorrect1.addImage(shapeOfYou);
    } else if (rand===2) {
      incorrect1.addImage(perfect);
    } else if (rand===3) {
      incorrect1.addImage(faded);
    } else if (rand===4) {
      incorrect1.addImage(stitches);
    } else if (rand===5) {
      incorrect1.addImage(sorry);
    } else if (rand===6) {
      incorrect1.addImage(loveYourself);
    } else if (rand===7) {
      incorrect1.addImage(allOfMe);
    } else if (rand===8) {
      incorrect1.addImage(baby);
    } else if (rand===9) {
      incorrect1.addImage(believer);
    } else if (rand===10) {
      incorrect1.addImage(mercy);
    } 
    incorrect1.velocityY = 4;
    incorrect1.lifetime = 150;
    incorrect1Group.add(incorrect1);
  }
}

function spawnIncorrectJustin() {
  if(frameCount%fc===0) {
    incorrect2 = createSprite(random(100,300),0,100,20);  
    incorrect2.scale = 0.25;
    rand = Math.round(random(1,10))
    if(rand===1) {
      incorrect2.addImage(shapeOfYou);
    } else if (rand===2) {
      incorrect2.addImage(perfect);
    } else if (rand===3) {
      incorrect2.addImage(faded);
    } else if (rand===4) {
      incorrect2.addImage(stitches);
    } else if (rand===5) {
      incorrect2.addImage(wdta);
    } else if (rand===6) {
      incorrect2.addImage(senorita);
    } else if (rand===7) {
      incorrect2.addImage(allOfMe);
    } else if (rand===8) {
      incorrect2.addImage(attention);
    } else if (rand===9) {
      incorrect2.addImage(believer);
    } else if (rand===10) {
      incorrect2.addImage(mercy);
    } 
    incorrect2.velocityY = 4;
    incorrect2.lifetime = 150;
    incorrect2Group.add(incorrect2);
  }
}

function spawnCorrectJustin() {
  if(frameCount%fc2===0) {
    correct2 = createSprite(random(100,300),0,100,20)
    correct2.scale = 0.25;
    rand = Math.round(random(1,10))
    if(rand===1) {
      correct2.addImage(sorry);
    } else if (rand===2) {
      correct2.addImage(loveYourself);
    } else if (rand===3) {
      correct2.addImage(baby);
    } else if (rand===4) {
      correct2.addImage(whatDoYouMean);
    } else if (rand===5) {
      correct2.addImage(yummy);
    } else if (rand===6) {
      correct2.addImage(intentions);
    } else if (rand===7) {
      correct2.addImage(neverSayNever);
    } else if (rand===8) {
      correct2.addImage(boyfriend);
    } else if (rand===9) {
      correct2.addImage(iDontCare);
    } else if (rand===10) {
      correct2.addImage(tenThousandHours);
    }  
    correct2.velocityY = 4;
    correct2.lifetime = 150;
    correct2Group.add(correct2);
    }
}

function spawnIncorrectTaylor() {
  if(frameCount%fc===0) {
    incorrect3 = createSprite(random(100,300),0,100,20);  
    incorrect3.scale = 0.25;
    rand = Math.round(random(1,10))
    if(rand===1) {
      incorrect3.addImage(sevenRings);
    } else if (rand===2) {
      incorrect3.addImage(thankUNext);
    } else if (rand===3) {
      incorrect3.addImage(wolves);
    } else if (rand===4) {
      incorrect3.addImage(havana);
    } else if (rand===5) {
      incorrect3.addImage(diamonds);
    } else if (rand===6) {
      incorrect3.addImage(focus1);
    } else if (rand===7) {
      incorrect3.addImage(problem);
    } else if (rand===8) {
      incorrect3.addImage(girlOnFire);
    } else if (rand===9) {
      incorrect3.addImage(bangBang);
    } else if (rand===10) {
      incorrect3.addImage(worthIt);
    } 
    incorrect3.velocityY = 4;
    incorrect3.lifetime = 150;
    incorrect3Group.add(incorrect3);
  }
}

function spawnCorrectTaylor() {
  if(frameCount%fc2===0) {
    correct3 = createSprite(random(100,300),0,100,20)
    correct3.scale = 0.25;
    rand = Math.round(random(1,10))
    if(rand===1) {
      correct3.addImage(blankSpace);
    } else if (rand===2) {
      correct3.addImage(ME);
    } else if (rand===3) {
      correct3.addImage(shakeItOff);
    } else if (rand===4) {
      correct3.addImage(youBelongWithMe);
    } else if (rand===5) {
      correct3.addImage(lookWhatYouMadeMeDo);
    } else if (rand===6) {
      correct3.addImage(style);
    } else if (rand===7) {
      correct3.addImage(delicate);
    } else if (rand===8) {
      correct3.addImage(loveStory);
    } else if (rand===9) {
      correct3.addImage(badBlood);
    } else if (rand===10) {
      correct3.addImage(youNeedToCalmDown);
    }  
    correct3.velocityY = 4;
    correct3.lifetime = 150;
    correct3Group.add(correct3);
    }
}
