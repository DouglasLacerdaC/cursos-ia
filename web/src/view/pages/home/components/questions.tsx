import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/view/components/ui/accordion'
import { faq } from '../data'

export function Questions() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full bg-white p-6 rounded-lg"
    >
      {faq.map((question) => (
        <AccordionItem value={`${question.id}`}>
          <AccordionTrigger className="py-6 text-start">
            {question.question}
          </AccordionTrigger>
          <AccordionContent>{question.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
