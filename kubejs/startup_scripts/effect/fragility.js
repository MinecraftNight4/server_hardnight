StartupEvents.registry('mob_effect', event => {
	event.create('fragility')
		.displayName('Punto de quiebre')
		.color(0x8f8a88)
		.harmful();
})