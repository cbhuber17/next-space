let host: string;

if (process.env.NEXT_ENV === "dev") host = "http://localhost:3000";
else host = "https://next-space-lf4c5iby3-cbhuber17.vercel.app";

export default host;
