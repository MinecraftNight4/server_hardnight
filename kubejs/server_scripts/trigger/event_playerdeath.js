//if (event.entity.type == 'minecraft:player')
EntityEvents.death(event =>{
    if (event.entity.isPlayer()) {
		const {level,entity,player,server} = event
		const {x, y, z} = player
		if (player.persistentData.tomb == null) {
			player.persistentData.tomb = {}
		}
		let pData = player.persistentData.tomb
		pData.posx = x.toFixed(0)
		pData.posy = y.toFixed(0)
		pData.posz = z.toFixed(0)
		pData.posw = level.dimension.toString()
		pData.free = Math.round(Math.floor(Date.now()/1000)+345600)
	}
})


PlayerEvents.respawned(event => {
	const {level,entity,player,server} = event
	event.server.runCommandSilent(`execute in minecraft:overworld run tp ${player.username} -42 -40 103 -90 0`)
	event.server.runCommandSilent(`execute in minecraft:overworld run gamemode survival ${player.username}`)
})