ServerEvents.commandRegistry(e => {
	const {commands: Commands, arguments: Arguments} = e
	let cmd = Commands.literal('hardnight_respawn-wait').requires(s => s.hasPermission(2));
	
	cmd.then(Commands.argument('player', Arguments.PLAYERS.create(e))
		.executes(ctx => {
			let pTarget = Arguments.PLAYERS.getResult(ctx, 'player')
			pTarget.forEach(player => {
				let sTime = Math.floor(Date.now()/1000)
				
				if (player.persistentData.tomb.free > sTime){
					let RemMath = Math.floor(player.persistentData.tomb.free - sTime)
					let RemD = Math.floor(RemMath / 86400)
					let RemH = Math.floor((RemMath - (86400*RemD)) / 3600)
					let RemM = Math.floor((RemMath - (86400*RemD + 3600*RemH)) / 60)
					let RemS = RemMath - (86400*RemD + 3600*RemH + 60*RemM)
					
					player.tell(`§4[§6HARD§cNIGHT§4] §r¡No es posible utilizar esta función aun!`)
					player.tell(`§4[§6HARD§cNIGHT§4] §r§7§oTiempo restante: ${RemD}d ${RemH}h ${RemM}m ${RemS}s`)
				
				}else if (player.persistentData.tomb.free < sTime) {
					ctx.source.server.runCommandSilent(`effect give ${player.username} minecraft:resistance 480 10 true`)
					ctx.source.server.runCommandSilent(`execute in minecraft:overworld run tp ${player.username} -43 100 98`)
					
				}
			})
			return 1;
		})
	)
	e.register(cmd)
})