/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Truncation strategies for sentence embeddings
 */
export type TruncationStrategy = "start" | "end" | "none";

export const TruncationStrategy = {
    Start: "start",
    End: "end",
    None: "none",
} as const;
