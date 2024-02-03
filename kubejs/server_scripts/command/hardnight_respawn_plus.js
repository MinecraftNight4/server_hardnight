ServerEvents.commandRegistry(e => {
	const {commands: Commands, arguments: Arguments} = e
	let cmd = Commands.literal('hardnight-revivir').requires(s => s.hasPermission(2));
	
	cmd.then(Commands.argument('target', Arguments.STRING.create(e))
		.executes(ctx => {
			let TargetPlayer = Arguments.STRING.getResult(ctx, 'target')
			ctx.source.server.runCommandSilent(`kubejs persistent_data server merge {revive:{${TargetPlayer}: true}}`)
			ctx.source.server.tell(Text.of('§4[§6HARD§cNIGHT§4] §r¡El jugador ').append(TargetPlayer).append(' tendra disponible la opción de revivir!'))
			return 1;
		})
	)
	e.register(cmd)
})





ServerEvents.commandRegistry(e => {
	const {commands: Commands, arguments: Arguments} = e
	let cmd = Commands.literal('hardnight_respawn-plus').requires(s => s.hasPermission(2));
	
	cmd.then(Commands.argument('player', Arguments.PLAYERS.create(e))
		.executes(ctx => {
			let pTarget = Arguments.PLAYERS.getResult(ctx, 'player')
			pTarget.forEach(player => {
				let sTime = Math.floor(Date.now()/1000)
				let PerServ = ctx.source.server.persistentData.revive[player.username]
				let PerPlay = player.persistentData.tomb
				
				if (PerPlay.plus > sTime){
					let RemMath = Math.floor(PerPlay.plus - sTime)
					let RemD = Math.floor(RemMath / 86400)
					let RemH = Math.floor((RemMath - (86400*RemD)) / 3600)
					let RemM = Math.floor((RemMath - (86400*RemD + 3600*RemH)) / 60)
					let RemS = RemMath - (86400*RemD + 3600*RemH + 60*RemM)
					player.tell(`§4[§6HARD§cNIGHT§4] §r¡No es posible utilizar esta función aun!`)
					player.tell(`§4[§6HARD§cNIGHT§4] §r§7§oTiempo restante: ${RemD}d ${RemH}h ${RemM}m ${RemS}s`)

				}else if (PerServ == 0) {
					player.tell(`§4[§6HARD§cNIGHT§4] §rEl sistema no registro puntos canjeados:`)
					player.tell(`§4[§6H§cN§4] §e1. §r¡Visita un canal de Twitch Verificado!`)
					player.tell(`§4[§6H§cN§4] §e2. §rGasta tus puntos en §6REVIVIR - HARDNIGHT`)
					player.tell(`§4[§6H§cN§4] §e3. §rInforma al streamer para que este valide tu compra`)
					
				}else if (PerServ == 1) {
					ctx.source.server.runCommandSilent(`execute in ${PerPlay.posw} run teleport ${player.username} ${PerPlay.posx} ${PerPlay.posy} ${PerPlay.posz}`)
					ctx.source.server.runCommandSilent(`effect give ${player.username} minecraft:resistance 480 10 true`)
					player.tell(`§4[§6HARD§cNIGHT§4] §r¡La reaparición fue exitosa!`)
					PerPlay.plus = Math.round(Math.floor(Date.now()/1000)+345600)
					ctx.source.server.persistentData.revive[player.username] = 0
				}
				
			})
			return 1;
		})
	)
	e.register(cmd)
})