/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Usage {
    /** The number of tokens used for the prompt */
    promptTokens: number;
    /** The total number of tokens used */
    totalTokens: number;
    completionTokens?: number;
}
