// Import all images from Rhinoplasty folder
import rhinoplasty1 from '../../assets/Rhinoplasty/Rhinoplasty.jpg';
import rhinoplasty2 from '../../assets/Rhinoplasty/7D143E5F-3B76-4935-8F21-014058C2F2BB.JPG';
import rhinoplasty3 from '../../assets/Rhinoplasty/B06E650B-93FB-4220-BEDF-65DE167CCE3B.jpg';
import rhinoplasty4 from '../../assets/Rhinoplasty/F4A5EE8A-6EB1-40BC-824F-0C242007F74E.JPG';
import rhinoplasty5 from '../../assets/Rhinoplasty/52EFFB8D-2B6C-45B9-94D5-2DFB56713E3C.JPG';
import rhinoplasty6 from '../../assets/Rhinoplasty/27F0928B-81D6-4F9F-BA63-E551E8040FE8.JPG';
import rhinoplasty7 from '../../assets/Rhinoplasty/C999F4FC-C984-47FD-B50F-01B58353511C.JPG';
import rhinoplasty8 from '../../assets/Rhinoplasty/F3D51437-01D4-496C-86E3-608A29DE84AE.JPG';

// Import all images from Facial Nerve Reanimation folder
import facialNerve1 from '../../assets/Facial Nerve Reanimation/IMG_0672.jpg';

// Import all images from Blepharoplasty folder
import blepharoplasty1 from '../../assets/Blepharoplasty/058BFA7B-A66A-4845-96C0-5C24620C06DC.jpg';
import blepharoplasty2 from '../../assets/Blepharoplasty/B6404D78-B71B-4009-B87F-BD31A9B869DD 2.jpg';

// Import all images from Botox_Filler folder
import botox1 from '../../assets/Botox_Filler/17DF12A7-2456-41C8-B440-BC5BD00F0D6A.JPG';
import botox2 from '../../assets/Botox_Filler/6F7CCC3A-53E0-4BCE-A617-B9158732FE95.JPG';

// Import all images from Cancer Reconstruction folder
import cancer1 from '../../assets/Cancer Reconstruction/ClassificationFlaps_ObayemiPatel_4.jpg';
import cancer2 from '../../assets/Cancer Reconstruction/Classification of Flaps_ObayemiPatel_3.jpg';
import cancer3 from '../../assets/Cancer Reconstruction/D77B2759-AAAE-4DDC-8954-CEEB93ADE6B0.jpg';
import cancer4 from '../../assets/Cancer Reconstruction/2853AA78-866F-4E6D-A6B5-6CA7DC345A65.JPG';
import cancer5 from '../../assets/Cancer Reconstruction/DC438B22-EA1A-4FF0-9A20-85DDC4ECDE99 2.jpg';
import cancer6 from '../../assets/Cancer Reconstruction/78864581-2B50-441D-83DE-C76053D9D4F5.jpg';
import cancer7 from '../../assets/Cancer Reconstruction/895D0BBE-D573-4159-AA5B-5629613D01E5.jpg';
import cancer8 from '../../assets/Cancer Reconstruction/IMG_1784.JPEG';
import cancer9 from '../../assets/Cancer Reconstruction/F6BB4EAE-9898-4B4F-9BF3-DC6F5A46F08C.jpg';
import cancer10 from '../../assets/Cancer Reconstruction/A8964547-4CA8-4CB8-BA5C-79EECE2AB1D8.jpg';

// Import all images from Congenital folder
import congenital1 from '../../assets/Congenital/IMG_8293 2.jpg';

// Import all images from Mission Trips folder (excluding HEIC files for now)
import mission1 from '../../assets/Mission Trips/05e2e90c-4f96-46ef-b149-aefaf633343a.JPG';
import mission2 from '../../assets/Mission Trips/b99d2b24-6a72-41a1-9da1-8be6a296be1c.JPG';
import mission3 from '../../assets/Mission Trips/735A8AC7-38DB-4A91-9834-6204BD5DA884 2.JPG';

export const galleryItems = [
  {
    id: 'rhinoplasty',
    category: 'Rhinoplasty',
    image: rhinoplasty1, // Cover image (first image from folder)
    images: [
      rhinoplasty1,
      rhinoplasty2,
      rhinoplasty3,
      rhinoplasty4,
      rhinoplasty5,
      rhinoplasty6,
      rhinoplasty7,
      rhinoplasty8,
    ], // All images from Rhinoplasty folder
    description: 'Refine and reshape the nose to achieve facial balance and confidence.',
    detailedContent: {
      overview:
        'Rhinoplasty, commonly known as a nose job, is a surgical procedure that reshapes the nose to improve its appearance and/or function. Look your natural best. With his exceptional training and unique artistic vision, Dr. Obayemi is able to perform surgical transformation of the nose to achieve flawless results.',
      benefits: [
        'Improved facial balance and proportion',
        'Enhanced breathing function',
        'Increased self-confidence',
        'Natural-looking results',
        'Long-lasting outcomes',
      ],
      procedure:
        'The procedure is typically performed under general anesthesia and can take 2-4 hours depending on the complexity. Dr. Obayemi uses advanced techniques to reshape the nasal bones and cartilage, creating a nose that complements your facial features while maintaining or improving breathing function.',
      recovery:
        'Most patients can return to work within 1-2 weeks. Swelling and bruising typically subside within 2-3 weeks, with final results becoming apparent after several months as the nose fully heals.',
    },
  },
  {
    id: 'facial-nerve-reanimation',
    category: 'Facial Nerve Reanimation',
    image: facialNerve1,
    images: [facialNerve1], // All images from Facial Nerve Reanimation folder
    description: 'Restore facial movement, helping patients regain confidence and natural symmetry.',
    detailedContent: {
      overview:
        'Our faces are the fundamental canvas of expression. After an injury of the facial nerve, Dr. Obayemi is trained to utilize multiple restorative techniques to achieve improvement in facial movement. ',
      benefits: [
        'Restored facial movement and expression',
        'Improved symmetry',
        'Enhanced quality of life',
        'Natural-looking results',
        'Comprehensive rehabilitation support',
      ],
      procedure:
        'The procedure involves nerve grafting, muscle transfer, or other advanced techniques to restore facial function. Dr. Obayemi works closely with physical therapists to ensure optimal recovery and functional outcomes.',
      recovery:
        'Recovery involves a rehabilitation period with physical therapy. The timeline varies based on the specific procedure performed, but most patients see gradual improvement over several months.',
    },
  },
  {
    id: 'blepharoplasty',
    category: 'Blepharoplasty',
    image: blepharoplasty1,
    images: [blepharoplasty1, blepharoplasty2], // All images from Blepharoplasty folder
    description: 'Eyelid surgery to rejuvenate the eyes by removing excess skin and restoring a youthful appearance.',
    detailedContent: {
      overview:
        'Eyelid surgery, or blepharoplasty, is a procedure to improve the appearance of the eyelids by removing excess skin, fat, and muscle. This procedure can address drooping upper eyelids, puffy bags under the eyes, and other age-related changes around the eyes.',
      benefits: [
        'More youthful, alert appearance',
        'Improved vision (if excess skin was blocking vision)',
        'Reduced under-eye bags',
        'Smoother eyelid contours',
        'Long-lasting results',
      ],
      procedure:
        'The procedure involves making precise incisions along the natural creases of the eyelids. Excess skin and fat are removed, and the remaining tissue is repositioned for a more youthful appearance. The incisions are carefully placed to minimize visible scarring.',
      recovery:
        'Recovery typically takes 1-2 weeks. Patients may experience some swelling and bruising initially, which subsides within the first week. Most can return to normal activities within 10-14 days.',
    },
  },
  {
    id: 'botox-filler',
    category: 'Botox & Filler',
    image: botox1,
    images: [botox1, botox2], // All images from Botox_Filler folder
    description: 'Non-surgical treatments for facial rejuvenation with minimal downtime.',
    detailedContent: {
      overview:
        'Botox and dermal fillers offer effective non-surgical alternatives for facial rejuvenation. Dr. Obayemi provides these treatments to address wrinkles, volume loss, and other signs of aging without surgery.',
      benefits: [
        'Minimal to no downtime',
        'Natural-looking results',
        'Less invasive than surgery',
        'Quick treatment sessions',
        'Maintenance and prevention options',
      ],
      procedure:
        'Treatments may include Botox for dynamic wrinkles, dermal fillers for volume loss, and other non-invasive procedures. Each treatment plan is customized to address individual concerns and goals.',
      recovery:
        'Most non-surgical treatments have minimal to no downtime, allowing patients to return to normal activities immediately or within a day.',
    },
  },
  {
    id: 'cancer-reconstruction',
    category: 'Cancer Reconstruction',
    image: cancer1,
    images: [
      cancer1,
      cancer2,
      cancer3,
      cancer4,
      cancer5,
      cancer6,
      cancer7,
      cancer8,
      cancer9,
      cancer10,
    ], // All images from Cancer Reconstruction folder
    description: 'Reconstruct damaged skin and restore confidence with expert skin cancer reconstruction.',
    detailedContent: {
      overview:
        'Dr. Obayemi’s training is extensive in the field of maxillofacial trauma and facial reconstruction. As a double-board certified facial plastic and head and neck surgeon, his unique skillset allows him to perform the most complex of facial reconstruction with minimal scarring—so in spite of what may be devastating facial injury, you can leave feeling most like yourself.',
      benefits: [
        'Restored appearance and function',
        'Minimized visible scarring',
        'Advanced surgical techniques',
        'Improved quality of life',
        'Comprehensive care approach',
      ],
      procedure:
        'The procedure uses advanced reconstructive techniques including local flaps, skin grafts, and microsurgery to achieve optimal results while minimizing visible scarring.',
      recovery:
        'Recovery time varies significantly based on the complexity of the procedure. Dr. Obayemi provides detailed post-operative instructions and closely monitors the healing process.',
    },
  },
  {
    id: 'congenital',
    category: 'Congenital Procedures',
    image: congenital1,
    images: [congenital1], // All images from Congenital folder
    description: 'Specialized procedures to address congenital conditions and abnormalities.',
    detailedContent: {
      overview:
        'Procedures designed to address congenital facial conditions and abnormalities. Dr. Obayemi provides specialized care for patients with congenital facial differences, working to improve both function and appearance.',
      benefits: [
        'Improved function and appearance',
        'Enhanced quality of life',
        'Natural-looking results',
        'Comprehensive care',
        'Specialized expertise',
      ],
      procedure:
        'Procedures are customized based on individual needs and conditions. Dr. Obayemi works closely with each patient and their family to develop a treatment plan that addresses specific concerns.',
      recovery:
        'Recovery varies depending on the specific procedure performed. Dr. Obayemi provides comprehensive post-operative care and support throughout the healing process.',
    },
  },
  {
    id: 'mission-trips',
    category: 'Mission Trips',
    image: mission1,
    images: [mission1, mission2, mission3], // Available images from Mission Trips folder (HEIC files excluded)
    description: 'Medical missions providing care to underserved communities worldwide.',
    detailedContent: {
      overview:
        'Dr. Obayemi is passionate about volunteer work, serving as a medical director for an annual mission trip to Tanzania where he performed reconstructive procedures for cleft lip, cleft palate, and thyroid disease. He also has performed medical mission work in Ghana, Nigeria, and South Africa throughout his career.',
      benefits: [
        'Providing care to underserved communities',
        'Global health impact',
        'Training and education',
        'Cultural exchange',
        'Lifesaving procedures',
      ],
      procedure:
        'Mission trips involve traveling to underserved areas to provide surgical care. Dr. Obayemi works with local medical teams to deliver high-quality care to patients in need.',
      recovery:
        'Patients receive post-operative care as part of the mission program, with follow-up care coordinated with local medical providers when possible.',
    },
  },
];
