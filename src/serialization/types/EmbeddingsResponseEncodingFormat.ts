/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as MixedbreadAI from "../../api";
import * as core from "../../core";

export const EmbeddingsResponseEncodingFormat: core.serialization.Schema<
    serializers.EmbeddingsResponseEncodingFormat.Raw,
    MixedbreadAI.EmbeddingsResponseEncodingFormat
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("..")).EncodingFormat),
    core.serialization.list(core.serialization.lazy(async () => (await import("..")).EncodingFormat)),
]);

export declare namespace EmbeddingsResponseEncodingFormat {
    type Raw = serializers.EncodingFormat.Raw | serializers.EncodingFormat.Raw[];
}
