"use strict";

var barWars = require("./barWars.js");
var classes = require("./classes.js");
var attacks = require("./attacks.js");
var specials = require("./specialAbilities.js"); //for future-proofing


/////***Event Listeners***\\\\\


/////***DropDown Populating Functions***\\\\\
function populatePatronClasses(){
	for(let i = 0; i < classes.patronClassArray.length; i++){
		let currentClass = classes.patronClassArray[i];
		let currentClassName = currentClass.name; 
		let currentClassDisplayName = currentClassName.replace(/_/g, " ");

		$("#patronClasses").append(`<option value="${currentClassName}">${currentClassDisplayName}</option>`);
	}
}

function populatePatronAttacks(){
	for(let i = 0; i < attacks.patronAttacksArray.length; i++){
		let currentAttack = attacks.patronAttacksArray[i];
		let currentAttackName = currentAttack.name; 
		let currentAttackDisplayName = currentAttackName.replace(/_/g, " ");

		$("#patronAttacks").append(`<option value="${currentAttackName}">${currentAttackDisplayName}</option>`);
	}
}
////////Add a populateStaffClasses() ::: Dont forget to call functions
////////Add a populateStaffAttacks() ::: Dont Forget to call functions


/////***Call Functions to populate DOM***\\\\\
populatePatronClasses();
populatePatronAttacks();
