import ImageKit, { NotFoundError } from "@imagekit/nodejs";
import type { Env } from "./env.js";

/** deletes an ImageKit file by `fileId` from our DB */
export async function deleteImageKitAsset(env: Env, storedFileId: string | null) {
  if (!storedFileId) return;
  const client = new ImageKit({
    publicKey: env.IMAGEKIT_PUBLIC_KEY || "",
    privateKey: env.IMAGEKIT_PRIVATE_KEY || "",
    urlEndpoint: env.IMAGEKIT_URL_ENDPOINT || "",
  });
  try {
    await client.files.delete(storedFileId);
  } catch (e: unknown) {
    if (e instanceof NotFoundError) return;
    throw e;
  }
}
