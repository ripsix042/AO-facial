import { Eye, ScanFace, Heart, Sparkles, User, Users } from 'lucide-react';
import noseImage from '../../assets/nose2.jpeg';
import eyeImage from '../../assets/eye1.jpg';
import faceImage from '../../assets/face1.jpg';
import genderImage from '../../assets/gender1.webp';
import surgeryImage from '../../assets/surgery1.jpg';
import nonSurgicalImage from '../../assets/non1.jpg';

export const services = [
  {
    id: 'rhinoplasty',
    icon: ScanFace,
    title: 'Rhinoplasty',
    description: 'Surgical reshaping of the nose to enhance facial harmony and improve breathing function.',
    image: noseImage,
    detailedContent: {
      overview: 'Rhinoplasty, commonly known as a nose job, is a surgical procedure that reshapes the nose to improve its appearance and/or function. Dr. Obayemi specializes in both cosmetic and functional rhinoplasty, ensuring natural-looking results that enhance your facial harmony.',
      benefits: [
        'Improved facial balance and proportion',
        'Enhanced breathing function',
        'Increased self-confidence',
        'Natural-looking results',
        'Long-lasting outcomes'
      ],
      procedure: 'The procedure is typically performed under general anesthesia and can take 2-4 hours depending on the complexity. Dr. Obayemi uses advanced techniques to reshape the nasal bones and cartilage, creating a nose that complements your facial features while maintaining or improving breathing function.',
      recovery: 'Most patients can return to work within 1-2 weeks. Swelling and bruising typically subside within 2-3 weeks, with final results becoming apparent after several months as the nose fully heals.'
    }
  },
  {
    id: 'eyelid-surgery',
    icon: Eye,
    title: 'Eyelid Surgery',
    description: 'Blepharoplasty to rejuvenate the eyes by removing excess skin and restoring a youthful appearance.',
    image: eyeImage,
    detailedContent: {
      overview: 'Eyelid surgery, or blepharoplasty, is a procedure to improve the appearance of the eyelids by removing excess skin, fat, and muscle. This procedure can address drooping upper eyelids, puffy bags under the eyes, and other age-related changes around the eyes.',
      benefits: [
        'More youthful, alert appearance',
        'Improved vision (if excess skin was blocking vision)',
        'Reduced under-eye bags',
        'Smoother eyelid contours',
        'Long-lasting results'
      ],
      procedure: 'The procedure involves making precise incisions along the natural creases of the eyelids. Excess skin and fat are removed, and the remaining tissue is repositioned for a more youthful appearance. The incisions are carefully placed to minimize visible scarring.',
      recovery: 'Recovery typically takes 1-2 weeks. Patients may experience some swelling and bruising initially, which subsides within the first week. Most can return to normal activities within 10-14 days.'
    }
  },
  {
    id: 'facial-rejuvenation',
    icon: Sparkles,
    title: 'Facial Rejuvenation',
    description: 'Comprehensive facelift and neck lift procedures for natural, long-lasting anti-aging results.',
    image: faceImage,
    detailedContent: {
      overview: 'Facial rejuvenation encompasses a range of procedures designed to restore a more youthful appearance. Dr. Obayemi offers comprehensive facelift and neck lift procedures that address sagging skin, deep wrinkles, and loss of facial volume.',
      benefits: [
        'Reduced appearance of wrinkles and fine lines',
        'Tighter, more youthful-looking skin',
        'Improved facial contours',
        'Enhanced jawline definition',
        'Natural-looking results that last years'
      ],
      procedure: 'The procedure involves lifting and repositioning facial tissues, removing excess skin, and potentially adding volume through fat transfer. Dr. Obayemi uses advanced techniques to ensure natural-looking results that don\'t appear "pulled" or overdone.',
      recovery: 'Recovery time varies but typically involves 2-3 weeks of downtime. Most swelling and bruising resolve within the first 2 weeks, with final results becoming apparent after several months.'
    }
  },
  {
    id: 'gender-affirmation',
    icon: Users,
    title: 'Gender Affirmation',
    description: 'Specialized facial feminization and masculinization procedures to align appearance with identity.',
    image: genderImage,
    detailedContent: {
      overview: 'Gender affirmation facial surgery helps individuals align their facial features with their gender identity. Dr. Obayemi offers both facial feminization and masculinization procedures, working closely with each patient to achieve their desired appearance.',
      benefits: [
        'Enhanced alignment with gender identity',
        'Improved self-confidence and well-being',
        'Natural-looking, harmonious results',
        'Comprehensive approach to facial features',
        'Supportive, understanding care'
      ],
      procedure: 'Procedures are customized based on individual goals and may include forehead contouring, rhinoplasty, jaw and chin reshaping, and other facial modifications. Each treatment plan is developed in collaboration with the patient.',
      recovery: 'Recovery varies depending on the specific procedures performed. Dr. Obayemi provides comprehensive post-operative care and support throughout the healing process.'
    }
  },
  {
    id: 'reconstructive-surgery',
    icon: Heart,
    title: 'Reconstructive Surgery',
    description: 'Advanced techniques for skin cancer reconstruction, trauma repair, and congenital corrections.',
    image: surgeryImage,
    detailedContent: {
      overview: 'Reconstructive surgery addresses functional and aesthetic concerns resulting from trauma, cancer removal, congenital conditions, or other medical issues. Dr. Obayemi combines surgical expertise with aesthetic principles to restore both form and function.',
      benefits: [
        'Restored function and appearance',
        'Advanced surgical techniques',
        'Minimized scarring',
        'Improved quality of life',
        'Comprehensive care approach'
      ],
      procedure: 'The specific procedure depends on the individual case. Dr. Obayemi uses advanced reconstructive techniques including local flaps, skin grafts, and microsurgery to achieve optimal results while minimizing visible scarring.',
      recovery: 'Recovery time varies significantly based on the complexity of the procedure. Dr. Obayemi provides detailed post-operative instructions and closely monitors the healing process.'
    }
  },
  {
    id: 'non-surgical-treatments',
    icon: User,
    title: 'Non-Surgical Treatments',
    description: 'Concierge aesthetic services including injectables, skin treatments, and preventative care.',
    image: nonSurgicalImage,
    detailedContent: {
      overview: 'Non-surgical treatments offer effective alternatives to surgery for those seeking facial rejuvenation with minimal downtime. Dr. Obayemi offers a comprehensive range of non-surgical options including injectables, skin treatments, and preventative care.',
      benefits: [
        'Minimal to no downtime',
        'Natural-looking results',
        'Less invasive than surgery',
        'Quick treatment sessions',
        'Maintenance and prevention options'
      ],
      procedure: 'Treatments may include Botox, dermal fillers, chemical peels, laser treatments, and other non-invasive procedures. Each treatment plan is customized to address individual concerns and goals.',
      recovery: 'Most non-surgical treatments have minimal to no downtime, allowing patients to return to normal activities immediately or within a day.'
    }
  },
];

