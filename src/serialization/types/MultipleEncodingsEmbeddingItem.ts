/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as MixedbreadAI from "../../api/index";
import * as core from "../../core";

export const MultipleEncodingsEmbeddingItem: core.serialization.ObjectSchema<
    serializers.MultipleEncodingsEmbeddingItem.Raw,
    MixedbreadAI.MultipleEncodingsEmbeddingItem
> = core.serialization.object({
    float: core.serialization.list(core.serialization.number()).optional(),
    int8: core.serialization.list(core.serialization.number()).optional(),
    uint8: core.serialization.list(core.serialization.number()).optional(),
    binary: core.serialization.list(core.serialization.number()).optional(),
    ubinary: core.serialization.list(core.serialization.number()).optional(),
    base64: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace MultipleEncodingsEmbeddingItem {
    interface Raw {
        float?: number[] | null;
        int8?: number[] | null;
        uint8?: number[] | null;
        binary?: number[] | null;
        ubinary?: number[] | null;
        base64?: string[] | null;
    }
}
