EntityEvents.spawned(event => {
	if (event.entity.type.toString() != 'minecraft:skeleton') return;
	let rng = toRandom(1,100)
	if (rng > 11) return;
	
	event.server.scheduleInTicks(1, callback =>{
		let mob = event.entity
		mob.server.runCommandSilent(`execute as ${mob.uuid.toString()} run function extras:harder/spawn/skeleton`)
	})
})











function toRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}