// REGISTRO DE NUEVOS ITEMS
StartupEvents.registry('item', event => {
	event.create('totem_fragment').displayName('FRAGMENTO DE TÓTEM')
	.texture('kubejs:item/tokens/totem_fragment')
	.maxStackSize(16)
})