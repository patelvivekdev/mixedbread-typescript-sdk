/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as MixedbreadAI from "../../api";
import * as core from "../../core";

export const Embedding: core.serialization.ObjectSchema<serializers.Embedding.Raw, MixedbreadAI.Embedding> =
    core.serialization.object({
        embedding: core.serialization.lazy(async () => (await import("..")).EmbeddingItem),
        index: core.serialization.number(),
        object: core.serialization.stringLiteral("embedding"),
    });

export declare namespace Embedding {
    interface Raw {
        embedding: serializers.EmbeddingItem.Raw;
        index: number;
        object: "embedding";
    }
}
