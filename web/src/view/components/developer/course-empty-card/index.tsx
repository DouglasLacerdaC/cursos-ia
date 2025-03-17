import { Player } from '@lottiefiles/react-lottie-player'

interface CourseEmptyCardProps {
  title: string
  description: string
}

export function CourseEmptyCard({ title, description }: CourseEmptyCardProps) {
  return (
    <div className="py-8 rounded-lg bg-white" data-aos="fade-up">
      <div className="px-6 w-full flex flex-col-reverse sm:flex-row items-center justify-center gap-8">
        <Player
          className="w-40 sm:w-80"
          src="/lotties/not-search.json"
          autoplay
          loop
        />

        <div className="text-center sm:text-start">
          <h5 className="text-xl font-onest font-semibold text-primary">
            {title}
          </h5>
          <p className="text-sm text-zinc-500">{description}</p>
        </div>
      </div>
    </div>
  )
}
