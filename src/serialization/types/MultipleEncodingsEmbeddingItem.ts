/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as MixedbreadAI from "../../api";
import * as core from "../../core";

export const MultipleEncodingsEmbeddingItem: core.serialization.ObjectSchema<
    serializers.MultipleEncodingsEmbeddingItem.Raw,
    MixedbreadAI.MultipleEncodingsEmbeddingItem
> = core.serialization.object({
    base64: core.serialization.list(core.serialization.string()),
    binary: core.serialization.list(core.serialization.number()),
    float: core.serialization.list(core.serialization.number()),
    int8: core.serialization.list(core.serialization.number()),
    ubinary: core.serialization.list(core.serialization.number()),
    uint8: core.serialization.list(core.serialization.number()),
});

export declare namespace MultipleEncodingsEmbeddingItem {
    interface Raw {
        base64: string[];
        binary: number[];
        float: number[];
        int8: number[];
        ubinary: number[];
        uint8: number[];
    }
}