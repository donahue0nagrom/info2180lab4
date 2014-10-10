#Maze.js

var loser = false; // whether the user has hit a wall
var startcount = 0;
window.onload = function() 
{
$("start").onclick = startClick;
$("start").onmouseover = cheatCheck;
$("end").onmouseover = overEnd;

var boundaries = $$("div#maze div.boundary");
for (var i = 0; i < boundaries.length; i++) 
{
    boundaries[i].onmouseover = overBoundary;
}
};

function cheatCheck()
{
if (startcount < 1)
{
startcount++;
}
else
{
loser = true;
overBoundary();
cheater();
}
}

function overBoundary() 
{
loser = true;
var boundaries = $$("div#maze div.boundary");
for (var i = 0; i < boundaries.length; i++) 
{
boundaries[i].addClassName("youlose");
}
overEnd();
}

function startClick() 
{
startcount = 0;
loser = false;
$('status').update("Move your mouse over the 'S' to begin.");
var boundaries = $$("div#maze div.boundary");
for (var i = 0; i < boundaries.length; i++) 
{
boundaries[i].removeClassName("youlose");
}
}

function overEnd() 
{
if(loser) 
{
$('status').update("You're a loser... HAHA Better Luck Next Time You'll Need It ");
} 
else 
{
$('status').update("You're a winner...Buck Ups");
}
}

function cheater()
{
$('status').update("Nigguh why's you cheating son? ");
}
