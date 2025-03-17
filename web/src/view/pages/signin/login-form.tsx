import { cn } from '@/shared/utils/cn'
import { Button } from '@/view/components/ui/button'
import { Card, CardContent } from '@/view/components/ui/card'
import { GoogleLogo } from './google-logo'
import { useController } from './use-controller'

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const { handleSignWithGoogle } = useController()

  return (
    <div className={cn('flex-1 flex flex-col gap-6', className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="p-6 md:p-12 md:py-24">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold font-onest">
                  Bem-vindo de volta!
                </h1>
                <p className="text-balance text-muted-foreground">
                  Entre na sua conta Logo
                </p>
              </div>

              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Continue com
                </span>
              </div>

              <Button
                size="lg"
                className="w-full space-x-2"
                variant="outline"
                onClick={() => handleSignWithGoogle()}
              >
                <GoogleLogo />

                <span>Entrar com o Google</span>
              </Button>

              <div className="text-center text-sm">
                Precisa de ajudar para acessar?{' '}
              </div>
            </div>
          </div>

          <div className="relative hidden bg-muted md:block">
            <img
              src="https://img.freepik.com/vetores-gratis/fundo-ondulado-bonito_23-2148465606.jpg?t=st=1741914472~exp=1741918072~hmac=23ce7be4731225f0e83e76e8a16a40808cc9439a51a17878b7a8bc6c946becd6&w=996"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>

      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        Ao clicar em continuar, você concorda com nossos{' '}
        <a href="#">Termos de Serviço</a> e{' '}
        <a href="#">Política de Privacidade</a>.
      </div>
    </div>
  )
}
