import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import { signIn, useSession, signOut } from "next-auth/react";

export function SignInButton() {
  const { data: session } = useSession();

  return (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => (!!session ? signOut() : signIn("github"))}
    >
      <FaGithub color={session ? "#04d361" : "#eba417"} />

      {!!session ? "luisescx" : " Sign in With Github"}

      {!!session && <FiX color="#737380" className={styles.closeIcon} />}
    </button>
  );
}
