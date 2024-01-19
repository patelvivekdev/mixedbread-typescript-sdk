/* tslint:disable */
/* eslint-disable */
/**
 * mixedbread-ai
 * Discover how to convert text into embeddings with the Embeddings API. Ideal for NLP tasks like text similarity and clustering. Use top open source models or your own fine-tuned models.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Embedding } from './Embedding';
import {
    EmbeddingFromJSON,
    EmbeddingFromJSONTyped,
    EmbeddingToJSON,
} from './Embedding';
import type { ModelUsage } from './ModelUsage';
import {
    ModelUsageFromJSON,
    ModelUsageFromJSONTyped,
    ModelUsageToJSON,
} from './ModelUsage';

/**
 * 
 * @export
 * @interface EmbeddingsResponse
 */
export interface EmbeddingsResponse {
    /**
     * Indicates if the embeddings were normalized.
     * @type {boolean}
     * @memberof EmbeddingsResponse
     */
    normalized: boolean;
    /**
     * 
     * @type {Array<Embedding>}
     * @memberof EmbeddingsResponse
     */
    data: Array<Embedding>;
    /**
     * The embeddings model used.
     * @type {string}
     * @memberof EmbeddingsResponse
     */
    model: string;
    /**
     * 
     * @type {ModelUsage}
     * @memberof EmbeddingsResponse
     */
    usage: ModelUsage;
}

/**
 * Check if a given object implements the EmbeddingsResponse interface.
 */
export function instanceOfEmbeddingsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "normalized" in value;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "model" in value;
    isInstance = isInstance && "usage" in value;

    return isInstance;
}

export function EmbeddingsResponseFromJSON(json: any): EmbeddingsResponse {
    return EmbeddingsResponseFromJSONTyped(json, false);
}

export function EmbeddingsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddingsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'normalized': json['normalized'],
        'data': ((json['data'] as Array<any>).map(EmbeddingFromJSON)),
        'model': json['model'],
        'usage': ModelUsageFromJSON(json['usage']),
    };
}

export function EmbeddingsResponseToJSON(value?: EmbeddingsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'normalized': value.normalized,
        'data': ((value.data as Array<any>).map(EmbeddingToJSON)),
        'model': value.model,
        'usage': ModelUsageToJSON(value.usage),
    };
}

