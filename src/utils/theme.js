/**
 * Turns a map of breakpoints into customMedia rules:
 * ```css
 * --mq-small: 496ch;
 * --mq-medium: 768ch;
 * ```
 * @param {[string, number][]} breakpointTable
 * @param {string} condition
 * @param {Record<string, string>} dict
 * @returns {Record<string, string>}
 */
export function getCustomMedia(breakpointTable, condition, dict = {}) {
	const prefix = condition === "min-width" ? "mq" : "mq-max";
	for (const [k, v] of breakpointTable) {
		const key = `--${prefix}-${k}`;
		const value = `(${condition}: ${v}ch)`;
		dict[key] = value;
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
