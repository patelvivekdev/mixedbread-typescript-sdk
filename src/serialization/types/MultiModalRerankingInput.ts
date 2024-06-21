/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as MixedbreadAI from "../../api";
import * as core from "../../core";

export const MultiModalRerankingInput: core.serialization.Schema<
    serializers.MultiModalRerankingInput.Raw,
    MixedbreadAI.MultiModalRerankingInput
> = core.serialization.undiscriminatedUnion([
    core.serialization.list(core.serialization.string()),
    core.serialization.list(core.serialization.record(core.serialization.string(), core.serialization.unknown())),
]);

export declare namespace MultiModalRerankingInput {
    type Raw = string[] | Record<string, unknown>[];
}