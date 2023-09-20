let host: string;

if (process.env.NEXT_ENV === "dev") host = "http://localhost:3000";
else host = "";

export default host;
