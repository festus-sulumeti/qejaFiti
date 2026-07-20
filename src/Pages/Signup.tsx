// import type { JSX, SVGProps } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';



export default function Signup() {
  return (
    <div className="flex min-h-dvh items-center justify-center">
      <div className="flex flex-1 flex-col justify-center px-4 py-10 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          
          <h3 className="mt-2 text-balance text-center font-bold text-foreground text-lg dark:text-foreground">
            Create new account for workspace
          </h3>
        </div>

        <Card className="mt-4 shadow-2xs sm:mx-auto sm:w-full sm:max-w-md">
          <CardContent>
            <form action="#" className="space-y-4" method="post">
              <div>
                <Label
                  className="font-medium text-foreground text-sm dark:text-foreground"
                  htmlFor="name-login-05"
                >
                  Name
                </Label>
                <Input
                  autoComplete="name-login-05"
                  className="mt-2"
                  id="name-login-05"
                  name="name-login-05"
                  placeholder="Name"
                  type="text"
                />
              </div>

              <div>
                <Label
                  className="font-medium text-foreground text-sm dark:text-foreground"
                  htmlFor="email-login-05"
                >
                  Email
                </Label>
                <Input
                  autoComplete="email-login-05"
                  className="mt-2"
                  id="email-login-05"
                  name="email-login-05"
                  placeholder="ephraim@blocks.so"
                  type="email"
                />
              </div>

              <div>
                <Label
                  className="font-medium text-foreground text-sm dark:text-foreground"
                  htmlFor="password-login-05"
                >
                  Password
                </Label>
                <Input
                  autoComplete="password-login-05"
                  className="mt-2"
                  id="password-login-05   "
                  name="password-login-05"
                  placeholder="Password"
                  type="password"
                />
              </div>

              <div>
                <Label
                  className="font-medium text-foreground text-sm dark:text-foreground"
                  htmlFor="confirm-password-login-05"
                >
                  Confirm password
                </Label>
                <Input
                  autoComplete="confirm-password-login-05"
                  className="mt-2"
                  id="confirm-password-login-05"
                  name="confirm-password-login-05"
                  placeholder="Password"
                  type="password"
                />
              </div>

              <div className="mt-2 flex items-start">
                <div className="flex h-6 items-center">
                  <Checkbox
                    className="size-4"
                    id="newsletter-login-05"
                    name="newsletter-login-05"
                  />
                </div>
                <Label
                  className="ml-3 text-muted-foreground text-sm leading-6 dark:text-muted-foreground"
                  htmlFor="newsletter-login-05"
                >
                  Sign up to our newsletter
                </Label>
              </div>

              <Button className="mt-4 w-full py-2 font-medium" type="submit">
                Create account
              </Button>

              <p className="text-pretty text-center text-muted-foreground text-xs dark:text-muted-foreground">
                By signing in, you agree to our{' '}
                <a
                  className="text-primary capitalize hover:text-primary/90 dark:text-primary hover:dark:text-primary/90"
                  href="#"
                >
                  Terms of use
                </a>{' '}
                and{' '}
                <a
                  className="text-primary capitalize hover:text-primary/90 dark:text-primary hover:dark:text-primary/90"
                  href="#"
                >
                  Privacy policy
                </a>
              </p>
            </form>
          </CardContent>
        </Card>

        <p className="mt-6 text-pretty text-center text-muted-foreground text-sm dark:text-muted-foreground">
          Already have an account?{' '}
          <a
            className="font-medium text-primary hover:text-primary/90 dark:text-primary hover:dark:text-primary/90"
            href="#"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
