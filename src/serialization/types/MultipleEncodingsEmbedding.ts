/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as MixedbreadAI from "../../api";
import * as core from "../../core";

export const MultipleEncodingsEmbedding: core.serialization.ObjectSchema<
    serializers.MultipleEncodingsEmbedding.Raw,
    MixedbreadAI.MultipleEncodingsEmbedding
> = core.serialization.object({
    embedding: core.serialization.lazyObject(async () => (await import("..")).MultipleEncodingsEmbeddingItem),
    index: core.serialization.number(),
    object: core.serialization.lazy(async () => (await import("..")).ObjectType).optional(),
});

export declare namespace MultipleEncodingsEmbedding {
    interface Raw {
        embedding: serializers.MultipleEncodingsEmbeddingItem.Raw;
        index: number;
        object?: serializers.ObjectType.Raw | null;
    }
}
