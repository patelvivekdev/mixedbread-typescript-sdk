/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MixedbreadAI from "..";

export interface RankedDocument {
    /** The index of the document. */
    index: number;
    /** The score of the document. */
    score: number;
    input?: unknown;
    /** The object type. */
    object?: MixedbreadAI.ObjectType;
}
