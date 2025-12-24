import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is facial plastic surgery?',
    answer:
      'Facial plastic surgery is a specialized field focused on cosmetic and reconstructive procedures of the face, head, and neck. It includes procedures like rhinoplasty, facelifts, eyelid surgery, and reconstructive surgery for trauma or cancer patients.',
  },
  {
    question: 'How do I know if I\'m a good candidate for facial plastic surgery?',
    answer:
      'The best way to determine if you\'re a good candidate is through a consultation with Dr. Obayemi. During this consultation, we\'ll discuss your goals, medical history, and evaluate your facial structure to determine the best approach for your needs.',
  },
  {
    question: 'What is the recovery time for facial procedures?',
    answer:
      'Recovery time varies depending on the procedure. Minor procedures may require just a few days, while more extensive surgeries may take several weeks. Dr. Obayemi will provide detailed recovery instructions and timelines during your consultation.',
  },
  {
    question: 'Are consultations free?',
    answer:
      'Yes! We offer complimentary consultations for both in-person and virtual visits. This allows you to meet Dr. Obayemi, discuss your goals, and learn about your treatment options without any obligation.',
  },
  {
    question: 'Do you accept insurance?',
    answer:
      'Insurance coverage depends on whether the procedure is considered medically necessary (reconstructive) or cosmetic. Reconstructive procedures often have insurance coverage, while cosmetic procedures are typically self-pay. Our team will help you understand your coverage options.',
  },
  {
    question: 'How long do results last?',
    answer:
      'The longevity of results varies by procedure. Some procedures provide permanent results, while others may require maintenance treatments. During your consultation, Dr. Obayemi will explain the expected duration of results for your specific procedure.',
  },
  {
    question: 'What makes Dr. Obayemi different from other facial plastic surgeons?',
    answer:
      'Dr. Obayemi is dual board-certified in facial plastic and reconstructive surgery and head & neck surgery, providing a unique combination of expertise. His artistic vision, combined with surgical precision and commitment to patient safety, ensures natural-looking, beautiful results.',
  },
  {
    question: 'Can I see before and after photos?',
    answer:
      'Absolutely! During your consultation, we can show you before and after photos of previous patients (with their consent) to help you understand the types of results possible. We also have a gallery section on our website showcasing our work.',
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isInView: boolean;
}

function FAQItem({ question, answer, index, isInView }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-200 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        className="w-full py-6 text-left flex items-center justify-between gap-4 hover:text-[#d4af37] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-[#0a1628] pr-8">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#d4af37]" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-700 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-[#d4af37] tracking-wider uppercase inline-block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            FAQ
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl text-[#0a1628] mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.p
            className="text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Find answers to common questions about facial plastic surgery, procedures, and what to
            expect during your journey with us.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

