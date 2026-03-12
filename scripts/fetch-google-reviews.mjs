import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY?.trim();
const PLACE_ID = process.env.PLACE_ID?.trim();

if (!API_KEY) {
  console.error("Missing required environment variable: API_KEY");
  process.exit(1);
}

if (!PLACE_ID) {
  console.error("Missing required environment variable: PLACE_ID");
  process.exit(1);
}

const FIELD_MASK = "displayName,rating,userRatingCount,reviews,googleMapsUri";
const endpoint = `https://places.googleapis.com/v1/places/${PLACE_ID}`;

const normalizeReviews = (reviews) =>
  (Array.isArray(reviews) ? reviews : []).slice(0, 5).map((review) => ({
    author: review?.authorAttribution?.displayName ?? "",
    rating: typeof review?.rating === "number" ? review.rating : 0,
    text: review?.text?.text ?? "",
    relativeTime: review?.relativePublishTimeDescription ?? "",
  }));

const main = async () => {
  let response;

  try {
    response = await fetch(endpoint, {
      headers: {
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask": FIELD_MASK,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown network error";
    console.error(`Failed to call Google Places API: ${message}`);
    process.exit(1);
  }

  let payload;
  try {
    payload = await response.json();
  } catch {
    console.error("Google Places API returned a non-JSON response.");
    process.exit(1);
  }

  if (!response.ok) {
    const message =
      payload?.error?.message ??
      payload?.message ??
      `Request failed with status ${response.status}`;
    console.error(`Google Places API error: ${message}`);
    process.exit(1);
  }

  if (typeof payload?.rating !== "number") {
    console.error("Google Places API response missing required field: rating");
    process.exit(1);
  }

  const normalized = {
    name: payload?.displayName?.text ?? "",
    rating: payload.rating,
    totalReviews: typeof payload?.userRatingCount === "number" ? payload.userRatingCount : 0,
    googleUrl: payload?.googleMapsUri ?? "",
    reviews: normalizeReviews(payload?.reviews),
  };

  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const projectRoot = resolve(scriptDir, "..");
  const dataDir = resolve(projectRoot, "src", "data");
  const outputFile = resolve(dataDir, "google-reviews.json");

  await mkdir(dataDir, { recursive: true });
  await writeFile(outputFile, `${JSON.stringify(normalized, null, 2)}\n`, "utf8");

  console.log(`Google reviews saved to ${outputFile}`);
};

main().catch((error) => {
  const message = error instanceof Error ? error.message : "Unknown error";
  console.error(`Failed to fetch and save Google reviews: ${message}`);
  process.exit(1);
});
