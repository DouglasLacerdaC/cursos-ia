import { Github } from 'lucide-react'
import { Player } from '@lottiefiles/react-lottie-player'

import { Button } from '../components/ui/button'
import { Header } from '../components/developer/header'

export function HomePage() {
  return (
    <div className="h-screen w-screen">
      <Header />

      <div className="h-full flex items-center justify-between max-w-7xl mx-auto">
        <div className="space-y-10">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold">@ntec/template-front-end</h1>
            <p>Template para projetos Front-end do time!</p>
          </div>

          <Button asChild>
            <a href="https://github.com/ntec-senai-sp/cli-project-structure">
              <Github size={20} className="mr-2" />
              Github
            </a>
          </Button>
        </div>

        <div>
          <Player
            src="./lotties/construction.json"
            className="w-[32rem]"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  )
}
