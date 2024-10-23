export const supportsPassive = (force = true): boolean => {
	// simular to jQuery's test
	let supported = false
	try {
		addEventListener(
			'test',
			() => {
				// do nothing
			},
			Object.defineProperty({}, 'passive', {
				get() {
					supported = true
					return true
				},
			}),
		)
		if (force) {
			return force
		}
	} catch (e) {
		// do nothing
	}
	return supported
}
