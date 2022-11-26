/**
 * Turns a map of breakpoints into customMedia rules:
 * ```css
 * --mq-small: 496ch;
 * --mq-medium: 768ch;
 * ```
 * @param {[string, number][]} breakpointTable
 * @param {Record<string, string>} dict
 * @returns {Record<string, string>}
 */
export function getCustomMedia(breakpointTable, dict = {}) {
	for (const [k, v] of breakpointTable) {
		dict["--mq-" + k] = `(min-width: ${v}ch)`;
	}

	return dict;
}

/**
 * Turns a map of breakpoints into Custom Properties:
 * ```css
 * --viewport-small: 496ch;
 * --viewport-medium: 768ch;
 * ```
 * @param {string} prefix
 * @param {[string, number][]} entries
 * @param {Record<string, string>} dict
 * @returns {Record<string, string>}
 */
export function getCustomProps(prefix, entries, dict = {}) {
	for (const [k, v] of entries) {
		dict[`--${prefix}-` + k] = v + "ch";
	}

	return dict;
}
