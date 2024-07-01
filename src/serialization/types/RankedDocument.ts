/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as MixedbreadAI from "../../api/index";
import * as core from "../../core";
import { ObjectType } from "./ObjectType";

export const RankedDocument: core.serialization.ObjectSchema<
    serializers.RankedDocument.Raw,
    MixedbreadAI.RankedDocument
> = core.serialization.object({
    index: core.serialization.number(),
    score: core.serialization.number(),
    input: core.serialization.unknown(),
    object: ObjectType.optional(),
});

export declare namespace RankedDocument {
    interface Raw {
        index: number;
        score: number;
        input?: unknown;
        object?: ObjectType.Raw | null;
    }
}
