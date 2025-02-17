import { signOut } from "@/auth";
import Button from "@/app/ui/button";

export default async function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <Button className="absolute top-3 right-3" type="submit">
        Sign Out
      </Button>
    </form>
  );
}
