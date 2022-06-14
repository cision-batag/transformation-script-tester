/**
 * Date parsing and formatting related functions.
 */
const commonDateUtils = {

    /**
     * Converts the given date to UTC string with
     * yyyy-MM-dd'T'HH:mm:ss'Z' format e.g.: 2022-02-14T20:52:30Z
     *
     * @param {Date} date - input date, or the current date if nothing has provided
     * @returns {string} - UTC date in string
     */
    toUtcString: function(date = new Date()) {
        if (!(date instanceof Date)) {
            date = new Date(parseInt(date));
        }
        const pad = num => num.toString().padStart(2, '0');
        const utcDate = [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate()].map(pad);
        const utcTime = [date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()].map(pad);
        return `${utcDate.join('-')}T${utcTime.join(':')}Z`;
    }
};