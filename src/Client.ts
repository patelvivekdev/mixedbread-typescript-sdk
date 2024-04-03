/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import * as MixedbreadAI from "./api";
import * as serializers from "./serialization";
import urlJoin from "url-join";
import * as errors from "./errors";

export declare namespace MixedbreadAIClient {
    interface Options {
        environment?: core.Supplier<environments.MixedbreadAIEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class MixedbreadAIClient {
    constructor(protected readonly _options: MixedbreadAIClient.Options) {}

    /**
     * Create embeddings for text or images using the specified model, encoding format, and normalization.
     * @throws {@link MixedbreadAI.BadRequestError}
     * @throws {@link MixedbreadAI.UnauthorizedError}
     * @throws {@link MixedbreadAI.ForbiddenError}
     * @throws {@link MixedbreadAI.NotFoundError}
     * @throws {@link MixedbreadAI.UnprocessableEntityError}
     * @throws {@link MixedbreadAI.TooManyRequestsError}
     * @throws {@link MixedbreadAI.InternalServerError}
     *
     * @example
     *     await mixedbreadAi.embeddings({
     *         input: "input",
     *         model: "model"
     *     })
     */
    public async embeddings(
        request: MixedbreadAI.EmbeddingsRequest,
        requestOptions?: MixedbreadAIClient.RequestOptions
    ): Promise<MixedbreadAI.EmbeddingsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MixedbreadAIEnvironment.Default,
                "v1/embeddings"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.EmbeddingsRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.EmbeddingsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new MixedbreadAI.BadRequestError(
                        await serializers.BadRequestErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new MixedbreadAI.UnauthorizedError(
                        await serializers.UnauthorizedErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new MixedbreadAI.ForbiddenError(
                        await serializers.ForbiddenErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new MixedbreadAI.NotFoundError(
                        await serializers.NotFoundErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new MixedbreadAI.UnprocessableEntityError(
                        await serializers.ValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new MixedbreadAI.TooManyRequestsError(
                        await serializers.TooManyRequestsErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new MixedbreadAI.InternalServerError(
                        await serializers.InternalError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.MixedbreadAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MixedbreadAIError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MixedbreadAITimeoutError();
            case "unknown":
                throw new errors.MixedbreadAIError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link MixedbreadAI.BadRequestError}
     * @throws {@link MixedbreadAI.UnauthorizedError}
     * @throws {@link MixedbreadAI.ForbiddenError}
     * @throws {@link MixedbreadAI.NotFoundError}
     * @throws {@link MixedbreadAI.UnprocessableEntityError}
     * @throws {@link MixedbreadAI.TooManyRequestsError}
     * @throws {@link MixedbreadAI.InternalServerError}
     *
     * @example
     *     await mixedbreadAi.reranking({
     *         input: [{
     *                 text: "text"
     *             }],
     *         model: "model",
     *         query: {
     *             text: "text"
     *         },
     *         returnInput: false,
     *         topK: 10
     *     })
     */
    public async reranking(
        request: MixedbreadAI.RerankingRequest,
        requestOptions?: MixedbreadAIClient.RequestOptions
    ): Promise<MixedbreadAI.RerankingResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MixedbreadAIEnvironment.Default,
                "v1/reranking"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.RerankingRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.RerankingResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new MixedbreadAI.BadRequestError(
                        await serializers.BadRequestErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new MixedbreadAI.UnauthorizedError(
                        await serializers.UnauthorizedErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 403:
                    throw new MixedbreadAI.ForbiddenError(
                        await serializers.ForbiddenErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new MixedbreadAI.NotFoundError(
                        await serializers.NotFoundErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new MixedbreadAI.UnprocessableEntityError(
                        await serializers.ValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new MixedbreadAI.TooManyRequestsError(
                        await serializers.TooManyRequestsErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new MixedbreadAI.InternalServerError(
                        await serializers.InternalError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.MixedbreadAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MixedbreadAIError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MixedbreadAITimeoutError();
            case "unknown":
                throw new errors.MixedbreadAIError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const value = await core.Supplier.get(this._options.apiKey);
        return value;
    }
}
