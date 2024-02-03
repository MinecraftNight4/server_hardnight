// REGISTRO DE NUEVOS ITEMS
StartupEvents.registry('item', event => {
	event.create('rune_healthboost').displayName('RUNA DE CORAZÓN')
	.texture('kubejs:item/tokens/healthboost_rune')
	.finishUsing((itemstack, level, entity) => {
        if (entity.player) global.item_rune_healthboost(entity)
        return itemstack;
    })
	.useDuration(() => 64)
	.useAnimation("bow")
	.maxStackSize(1)
	.use(() => true)
})


global.item_rune_healthboost = entity => {
	if (entity.maxHealth == 20) return;
	let MaxHealth = entity.maxHealth + 2
	let item = entity.getHeldItem('main_hand');
	if (item.id == 'kubejs:rune_healthboost') {
		if (MaxHealth < 20){
			Utils.server.runCommandSilent(`attribute ${entity.username} minecraft:generic.max_health base set ${MaxHealth}`)
			entity.addItemCooldown('kubejs:rune_healthboost', 60)
			item.count--
		}else if (MaxHealth = 19){
			Utils.server.runCommandSilent(`attribute ${entity.username} minecraft:generic.max_health base set 20`)
			entity.addItemCooldown('kubejs:rune_healthboost', 1200)
			item.count--
		}
	}
}