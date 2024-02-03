StartupEvents.registry('mob_effect', event => {
	event.create('paralize')
		.displayName('Aturdido')
		.effectTick(entity => {
			if (entity.player) global.effect_paralize(entity)
		})
		.color(0x154c79)
		.harmful();
})


global.effect_paralize = (entity) => {
	if (!entity.isPlayer()) return;

	let hand_a = entity.getHeldItem('main_hand').id;
	let hand_b = entity.getHeldItem('off_hand').id;
	
	entity.addItemCooldown(hand_a, 60)
	entity.addItemCooldown(hand_b, 60)
	entity.potionEffects.add("minecraft:mining_fatigue", 60, 8, true, false)
}