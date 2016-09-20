// in es5

function CrewMember(position){
	this.position = position

	this.currentShip = "Looking for a Rig"

	this.chargePhasers = function(){
		if (this.position === "Gunner" && this.currentShip != "Looking for a Rig"){
			this.currentShip.phasersCharge = 'charged!'
		} else {
			return 'had no effect'
		}
	}

	this.engageWarpDrive = function(){
		if (this.position === "Pilot" && this.currentShip != "Looking for a Rig"){
			this.currentShip.warpDrive = 'engaged!'
		} else {
			return 'had no effect'		
		}
	}

	this.setsInvisibility = function(){
		if (this.position === "Defender" && this.currentShip != "Looking for a Rig"){
			this.currentShip.cloaked = true
		} else {
			return 'had no effect'
		}
	}
}

// these could be convenient in certain situations
// CrewMember.prototype.engageWarpDrive = function(){
// 	return 'had no effect'
// }

// CrewMember.prototype.chargePhasers = function(){

// 	return 'had no effect'
// }

// CrewMember.prototype.setsInvisibility = function(){
// 	return 'had no effect'
// }

function Spaceship(name, crewMembers){
	this.name = name
	this.phasers = 5
	this.shields = 4
	this.cloaked = false
	this.warpDrive = 'disengaged'
	// not necessary bc the array is not an attribute of
	// Spaceship
	// this.crewMembers = crewMembers

	// arrow functions let you sleekly name a function
	// and allow the function to an attribute of Spaceship
	// so 'this' will actually refer to this object
	crewMembers.forEach((member) => {
		member.currentShip = this
	})
	// this weird thing also works:
	// crewMembers.forEach(function(member){
	// 	member.currentShip = this
	// }.bind(this)
	// )

	this.docked = true;
	this.phasersCharge = "uncharged"

	if (!!crewMembers.length){
		this.docked = false;
	}

}
