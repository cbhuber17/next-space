import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import Link from "next/link";
// import { redirect } from "next/navigation";

// export default async function Home() {
export default function Home() {
  // Protect route content only if signed in
  // const session = await getServerSession();

  // if (!session) {
  //   redirect("api/auth/signin");
  // }

  return (
    <div>
      <h1>Welcome to NextSpace!</h1>
      <p>
        A next-gen social media app to connect with friends inspired by MySpace.
      </p>
      <p>
        To get started, <Link href={"/api/auth/signin"}>sign up</Link> for an
        account.
      </p>
    </div>
  );
}
