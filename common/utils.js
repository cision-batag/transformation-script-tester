/**
 * Common utilities which is intended to check value existence and normalization.
 */
const commonUtils = {
    NOT_PROVIDED: null,

    /**
     * Get normalized value, i.e. null for not defined value, otherwise null
     * @param {Object} value - value to be normalized
     * @returns {string}
     */
    normalize: function (value) {
        return this.isNull(value) ? this.NOT_PROVIDED : value;
    },

    /**
     * Checks if the value is defined or not empty
     * @param {Object} value - value to be chekced
     * @returns {boolean}
     */
    isDefined: function (value) {
        if (this.isNull(value)) {
            return false;
        }
        if (typeof (value) === 'string') {
            return value.trim() !== '';
        }
        return true;
    },

    /**
     * Checks if the provided value is not defined or null
     * @param {Object} value - value to be checked
     * @returns {boolean}
     */
    isNull: function (value) {
        return value === undefined || value === null || value === "null";
    },

    stringifyNonEmptyValues: function (transformed) {
        Object.keys(transformed).forEach(
            (field) => (!commonUtils.isDefined(transformed[field]) || transformed[field].length === 0) && delete transformed[field]
        );
        return JSON.stringify(transformed);
    }
};