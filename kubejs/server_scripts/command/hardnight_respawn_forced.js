ServerEvents.commandRegistry(e => {
	const {commands: Commands, arguments: Arguments} = e
	let cmd = Commands.literal('hardnight_respawn-fast').requires(s => s.hasPermission(2));
	
	cmd.then(Commands.argument('player', Arguments.PLAYERS.create(e))
		.executes(ctx => {
			let pTarget = Arguments.PLAYERS.getResult(ctx, 'player')
			pTarget.forEach(player => {
				
				if (player.maxHealth > 1){
					let HP_lost = Math.ceil(player.maxHealth/2).toFixed(0)
					player.server.runCommandSilent(`attribute ${player.username} minecraft:generic.max_health base set ${HP_lost}`)
				}
				ctx.source.server.runCommandSilent(`effect give ${player.username} minecraft:resistance 480 10 true`)
				ctx.source.server.runCommandSilent(`execute in minecraft:overworld run tp ${player.username} -43 100 98`)
				
				player.tell(`§4[§6HARD§cNIGHT§4] §r¡La reaparición fue exitosa!`)
				player.tell(`§4[§6HARD§cNIGHT§4] §cHas perdido un 50% de tu vida maxima...`)
			})
			return 1;
		})
	)
	e.register(cmd)
})