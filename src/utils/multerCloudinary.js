import multer from "multer";
import { fileTypeFromBuffer } from "file-type";
import fs from "fs";
import { asyncHandler } from "./errorHandling.js";
import { dangerousExtensions } from "./dangerousExtensions.js";

// Centralized allowed types for each field
export const allowedTypesMap = {
  categoryImage: ["image/png", "image/jpeg"],
  subcategoryImage: ["image/png", "image/jpeg"],
  brandImage: ["image/png", "image/jpeg"],
  couponImage: ["image/png"],
  mainImage: ["image/png", "image/jpeg", "image/jpg"],
  subImages: ["image/png", "image/jpeg", "image/jpg"]
};

const fileValidation = (allowedTypesMap = {}) => {
  return asyncHandler(async (req, file, cb) => {
    const fileExtension = file.originalname.split(".").pop().toLowerCase();
    if (dangerousExtensions.includes(fileExtension)) {
      return cb(
        new Error(`File type '${fileExtension}' not allowed`, { cause: 400 }),
        false
      );
    }

    const allowedMimeTypes = allowedTypesMap[file.fieldname] || [];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      return cb(
        new Error(`Invalid MIME type for ${file.fieldname}`, { cause: 400 }),
        false
      );
    }

    cb(null, true);

    req.on("end", async () => {
      if (!file.path) return;

      const buffer = fs.readFileSync(file.path);
      const type = await fileTypeFromBuffer(buffer);
      if (!type || !allowedMimeTypes.includes(type.mime)) {
        fs.unlinkSync(file.path);
        return new Error("Invalid file type based on content", { cause: 400 });
      }
    });
  });
};

export function fileUpload(size, allowedTypesMap) {
  const storage = multer.diskStorage({});
  const limits = { fileSize: size * 1024 * 1024 };
  const fileFilter = fileValidation(allowedTypesMap);
  const upload = multer({ fileFilter, storage, limits });
  return upload;
}
