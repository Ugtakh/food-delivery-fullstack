import cloudinary from "cloudinary";

console.log("CLOUD-NAME", process.env.CLOUD_NAME);
console.log("CLOUD-API", process.env.CLOUD_API_KEY);
console.log("CLOUD-SECRET", process.env.CLOUD_API_SECRET);

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

export default cloudinary.v2.uploader;
