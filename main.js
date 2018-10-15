
var luck = Math.floor((Math.random()*10) + 1);
var scene = 0;
var leftOptions = ["Grab the knife.","Silence the phone.","Help the bird.","Sneaky approach.", "last scene"];
var rightOptions = ["Leave the knife.","Answer the phone.","Leave the bird.","Take a direct approach.", "last scene"];
var display = ["STORY STORY. You want a knife?","Your phone breaks the silence. Do you answer it?", "You found a bird... it flaps helplessly near the broken window. Do you help this bird?", "There's a thump. You investigate it. He's drunk. No jk he's a zombie. Do you sneak?"];
var outcomes = ["Outcome 1 -- die b/c no knife, no bird", "Outcome 2 -- live b/c no knife yes bird high luck", "Outcome 3 -- live b/c yes knife no bird high luck", "Outcome 4 -- die b/c no bird no knife bad luck", "Outcome 5 -- live b/c no knife no bird no phone luck = 8+", "Outcome 5 -- live b/c yes knife no bird no phone luck = 8+"];
var leftButt = 0;
var rightButt = 0;
var survival = 0;

var phoneInterrupts = false;
var birdHelps = false;
var hasKnife = false;
var sneak = false;

function leftCounter() {

    if (scene == 0){
        survival = survival + 1;
    }

    else if (scene == 1){
        survival = survival + 1;
    }

    else if (scene == 2){
        survival = survival - 1;
    }

    else if (scene == 3){
        survival = survival - 1;
    }

    else if (scene == 4){
        survival = survival + 1;
    }

    else if (scene == 5){
        survival = survival + 1;
    }

    leftButt=leftButt+1;
}

function rightCounter() {

    if (scene == 0){
        survival = survival - 1;
    }

    else if (scene == 1){
        survival = survival + 1;
    }

    else if (scene == 2){
        survival = survival + 1;
    }

    else if (scene == 3){
        survival = survival - 1;
    }
    
    else if (scene == 4){
        survival = survival + 1;
    }

    else if (scene == 5){
        survival = survival + 1;
    }

    rightButt=rightButt+1;
}



function doThis() {

    //intro... option: grab knife
    if (scene == 0) {
        console.log(scene);
        document.getElementById("currentScene").innerHTML = "STORY STORY. You want a knife?";
        document.getElementById("chapter").innerHTML = "The House in the Fog";

        document.getElementById("leftButton").innerHTML = leftOptions[0];
        document.getElementById("rightButton").innerHTML = rightOptions[0];
        document.getElementById("currentScene").innerHTML = display[0];
        console.log("luck is " + luck + ". Survival is " + survival + ". Scene is " + scene);

    }

    //second scene... option, answer the phone
    else if (scene == 1) {
        console.log(scene);
        document.getElementById("leftButton").innerHTML = leftOptions[1];
        document.getElementById("rightButton").innerHTML = rightOptions[1];
        document.getElementById("currentScene").innerHTML = display[1];
        console.log("luck is " + luck + ". Survival is " + survival + ". Scene is " + scene);

    }

    //third scene... option help the bird
    else if (scene == 2) {
        console.log(scene);
        document.getElementById("leftButton").innerHTML = leftOptions[2];
        document.getElementById("rightButton").innerHTML = rightOptions[2];
        document.getElementById("currentScene").innerHTML = display[2];
        console.log("luck is " + luck + ". Survival is " + survival + ". Scene is " + scene);

    }

    //fourth scene... answer your phone
    else if (scene == 3) {
        console.log(scene);
        document.getElementById("leftButton").innerHTML = leftOptions[3];
        document.getElementById("rightButton").innerHTML = rightOptions[3];
        document.getElementById("currentScene").innerHTML = display[3];
        console.log("luck is " + luck + ". Survival is " + survival + ". Scene is " + scene);

    }

    //fifth scene sneak
    else if (scene == 4) {
        console.log(scene);
        document.getElementById("leftButton").innerHTML = leftOptions[4];
        document.getElementById("rightButton").innerHTML = rightOptions[4];
        document.getElementById("currentScene").innerHTML = display[4];
        console.log("luck is " + luck + ". Survival is " + survival + ". Scene is " + scene);

    }

    //fifth scene sneak
    else if (scene == 6) {
        console.log("luck is " + luck + ". Survival is " + survival + ". Scene is " + scene);

    }
    //outcome scene
    else if (scene == 5) {
        console.log("luck is " + luck + ". Survival is " + survival + ". Scene is " + scene);


        //close call but lives
        if (luck>8) {
            document.getElementById("currentScene").innerHTML = "FLYING COLORS AWESOME."; //random good outcomes?
         //   document.getElementById("leftButton").innerHTML.visibility = "hidden";
         console.log("luck is " + luck + ". Survival is " + survival + ". Scene is " + scene);

        }
        
        //flying colors
        else if (luck>4 && survival > 2 ) {
            document.getElementById("currentScene").innerHTML = "You punt that zombie's face into the sunset."; //random good outcomes?
          //  document.getElementById("leftButton").innerHTML.visibility = "hidden";
          console.log("luck is " + luck + ". Survival is " + survival + ". Scene is " + scene);


        }

        //close call but dies
        else if (luck>8 && survival <1) {
            document.getElementById("currentScene").innerHTML = "Close call, but you're dead."; //random good outcomes?
        //    document.getElementById("leftButton").innerHTML.visibility = "hidden";
        console.log("luck is " + luck + ". Survival is " + survival + ". Scene is " + scene);


        }

        //dies horrifically.
         else if (luck<3 && survival == 0) {
            document.getElementById("currentScene").innerHTML = "It's a toss up, really."; //random good outcomes?
         //   document.getElementById("leftButton").innerHTML.visibility = "hidden";
         console.log("luck is " + luck + ". Survival is " + survival + ". Scene is " + scene);
        }

         //dies horrifically.
         else if (luck==0) {
            document.getElementById("currentScene").innerHTML = "Horrific death."; //random good outcomes?
         //   document.getElementById("leftButton").innerHTML.visibility = "hidden";
         console.log("luck is " + luck + ". Survival is " + survival + ". Scene is " + scene);
        }

        else {
            document.getElementById("currentScene").innerHTML = "You've hit the end."; //random good outcomes?

        }
    }
    scene=scene+1;
}