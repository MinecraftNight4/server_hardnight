EntityEvents.spawned(event => {
	if (event.entity.type.toString() != 'minecraft:phantom') return;
	let rng = toRandom(1,5)
	let mob = event.entity
	event.server.scheduleInTicks(1, callback =>{
		if (rng == 1) {
			mob.server.runCommandSilent(`execute as ${mob.uuid.toString()} run function extras:harder/spawn/phantom_1`)
		}else if (rng == 2) {
			mob.server.runCommandSilent(`execute as ${mob.uuid.toString()} run function extras:harder/spawn/phantom_2`)
		}else if (rng == 3) {
			mob.server.runCommandSilent(`execute as ${mob.uuid.toString()} run function extras:harder/spawn/phantom_3`)
		}
	})
})











function toRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}