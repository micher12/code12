import { LucideProps } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface listItems {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  title: string;
  content: string;
}

export default function List({ items }: { items: listItems[] }) {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full rounded-2xl border border-white/10 bg-surface/60 px-5 py-2" defaultValue={items[0]?.title}>
        {items.map((item, index) => (
          <AccordionItem value={item.title} key={index} className="border-white/10">
            <AccordionTrigger className="py-4 text-[15px] leading-6 hover:no-underline hover:text-amber-300">
              <span className="flex items-center gap-3">
                <item.icon
                  size={20}
                  className="shrink-0 text-teal-300/70"
                  aria-hidden="true"
                />
                <span className="text-current">{item.title}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="ps-9 text-muted-foreground leading-relaxed">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
