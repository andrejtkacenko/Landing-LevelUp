import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What are the club's opening hours?",
    answer: "We are open 24/7! Our facilities are accessible to members at any time, day or night.",
  },
  {
    question: "Can I bring my own peripherals?",
    answer: "Absolutely! We encourage members to bring their own keyboard, mouse, headset, and controller to feel right at home.",
  },
  {
    question: "Is there a food and drink policy?",
    answer: "We have a dedicated lounge area for food and drinks. We offer a variety of snacks and beverages for sale. To protect the equipment, no food or open drinks are allowed at the gaming stations.",
  },
  {
    question: "How do I sign up for tournaments?",
    answer: "You can sign up for any upcoming tournament through our website's event calendar section or at the front desk in the club. Spots can be limited, so we recommend signing up early!",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <HelpCircle className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl lg:text-4xl font-bold font-headline">Frequently Asked Questions</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have questions? We've got answers.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-headline text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
