import {JsonSerializer} from '../lib/JsonSerializer';

/**
 * This class maintains the structure of a json-serializable model
 * @class
 */
export class JsonSerializable {

    /**
     * This method converts a JSON serialized string into an object instance
     * @param {(string | Buffer)} json
     * @public
     * @returns {TTarget}
     * @static
     * @typedef TTarget
     */
    public static fromJson<TTarget extends JsonSerializable>(json: (string | Buffer)): TTarget {

        // We're done, return the new instance
        return JsonSerializer.deserialize<TTarget>(Buffer.isBuffer(json) ? json.toString('utf-8') : json);
    }

    /**
     * This method converts the instance to JSON
     * @param {boolean?} pretty
     * @public
     * @returns {string}
     */
    public toJson(pretty?: boolean): string {

        // We're done, return the json-serialized instance
        return JsonSerializer.serialize<JsonSerializable>(this, pretty);
    }
}