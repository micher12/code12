import { LucideProps } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ForwardRefExoticComponent, RefAttributes } from "react"

interface listItems {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    title: string,
    content: string,
}

export default function List({items}: {items: listItems[]}) {
  return (
    <div className="space-y-4 w-full">
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item,index) => (
          <AccordionItem value={item.title} key={index} className="py-2">
            <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline cursor-pointer">
              <span className="flex items-center gap-3">
                <item.icon
                  size={25}
                  className="shrink-0 opacity-60"
                  aria-hidden="true"
                />
                <span className="text-white">{item.title}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground ps-7 pb-2  ">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
