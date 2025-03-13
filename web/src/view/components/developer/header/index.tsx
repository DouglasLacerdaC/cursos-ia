import LogoSmall from '@/assets/images/logos/small.png'

export function Header() {
  return (
    <header className="py-4 border-b">
      <div className="max-w-7xl mx-auto">
        <img src={LogoSmall} width={40} className="rounded-lg" />
      </div>
    </header>
  )
}
