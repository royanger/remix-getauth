import { SignUp } from '@clerk/remix'

export default function SignUpPage() {
  return (
    <div>
      <h1>Sign Up Route</h1>
      <SignUp routing={"path"} path={"/sign-up"} />
    </div>
  )
}
