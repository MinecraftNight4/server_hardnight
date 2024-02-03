ServerEvents.loaded(event => {
    const {server, server:{persistentData}} = event
    if (persistentData.DataVersion != 1) {
		if (persistentData.revive == null) {
			persistentData.revive = {}
		}
		
		persistentData.DataVersion = 1
	}
})


PlayerEvents.loggedIn(event => {
	if (event.persistentData.DataVersion != 1) {
		if (event.persistentData.effects == null) {
			event.persistentData.effects = {}
		}		
		if (event.persistentData.tomb == null) {
			event.persistentData.tomb = {}
		}
		
		event.persistentData.DataVersion = 1
	}
})