EntityEvents.spawned(event => {
	if (event.entity.type.toString() != 'minecraft:wandering_trader') return;
	let rng = toRandom(1,3)
	if (rng == 3) return;

	event.server.scheduleInTicks(1, callback =>{
		let mob = event.entity
		if (rng == 1) {
			mob.server.runCommandSilent(`execute as ${mob.uuid.toString()} run function extras:wanderer/rune`)
		}else if (rng == 2) {
			mob.server.runCommandSilent(`execute as ${mob.uuid.toString()} run function extras:wanderer/totem`)
		}
	})
})











function toRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}