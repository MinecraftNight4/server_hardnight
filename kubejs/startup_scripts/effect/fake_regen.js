//StartupEvents.registry('mob_effect', event => {
//	event.create('fake_regen')
//		.effectTick(entity => {
//			if (entity.player) global.effect_fakeregen(entity)
//		})
//		.displayName('Vida depurada')
//		.color(0xad2450)
//		.harmful();
//})
//
//
//global.effect_
//
//
//
//
//
//
//DepuratedHearth = (entity) => {
//	if (!entity.isPlayer()) {return}
//	if (entity.health === entity.maxHealth) {return}
//	let pData = entity.persistentData.effect;
//
//	if (pData.FakeRegen_expire == null || pData.FakeRegen_expire > Math.floor(Date.now()/1000)) {
//		pData.FakeRegen_static = entity.health;
//		pData.FakeRegen_real = entity.health;
//	}
//	pData.FakeRegen_expire = Math.floor((Date.now()/1000)+2));
//
//	if (pData.FakeRegen_static > entity.health) {
//		pData.FakeRegen_real = pData.FakeRegen_real - (pData.FakeRegen_static - entity.health);
//		if (pData.FakeRegen_real < 0) {
//			entity.setHealth(0);
//		}
//	}
//	if (pData.FakeRegen_static < entity.health) {
//		pData.FakeRegen_real = pData.FakeRegen_real + (entity.health - pData.FakeRegen_static)
//		if (pData.FakeRegen_real < entity.maxHealth) {
//			pData.FakeRegen_real = entity.maxHealth
//		}
//	}
//
//	entity.setHealth(pData.FakeRegen_static);
//}
//
//