import Link from "next/link";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center pt-40">
      {children}
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;