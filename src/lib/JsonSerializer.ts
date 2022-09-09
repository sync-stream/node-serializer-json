/**
 * This class maintains our JSON serializer
 * @class
 */
export class JsonSerializer {

    /**
     * This method provides a factory for deserializing an object from JSON
     * @param {string} json
     * @returns {TTarget}
     * @static
     * @typedef TTarget
     */
    public static deserialize<TTarget extends any>(json: string): TTarget {

        // We're done, return the deserialized json
        return (JSON.parse(json) as TTarget);
    }

    /**
     * This method serializes a value into JSON
     * @param {TSource} value
     * @param {boolean?} pretty
     * @returns {string}
     * @static
     * @typedef TSource
     */
    public static serialize<TSource extends any>(value: TSource, pretty?: boolean): string {

        // We're done, serialize the object
        return ((pretty === true) ? JSON.stringify(value, undefined, 4) : JSON.stringify(value));
    }
}
