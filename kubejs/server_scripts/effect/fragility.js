EntityEvents.hurt(event => {
	if (event.entity.invulnerableTime != 0) return;
	event.entity.activeEffects.forEach(effect => {
		if (effect.descriptionId != "effect.kubejs.fragility") return;
		
		let Eff_Base = effect.amplifier + 1
		let Eff_Damg = event.getDamage() / 5 * Eff_Base
		
		event.getDamage() / 5 * (effect.amplifier + 1)
		event.entity.setHealth(event.entity.health - Eff_Damg)
	})
})



function EntityHaveEffect(target, effect) {
	target.activeEffects.forEach(effect => {
		if (effect.descriptionId != "${effect}") return;
		return true
	})
	return false
}