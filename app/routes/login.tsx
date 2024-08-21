import { ActionFunctionArgs } from "@remix-run/cloudflare";
import { Form } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export default function Screen() {
  return (
    <>
    <Form method="post">
      <input type="email" name="email" required />
      <input
        type="password"
        name="password"
        autoComplete="current-password"
        required
      />
      <button>Sign In</button>
    </Form>
  </>
  );
}

export async function action({request}: ActionFunctionArgs) {
  return await authenticator.authenticate("user-login", request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
}
