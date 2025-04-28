import Image from 'next/image';
import Head from 'next/head';
import SectionDivider from "@/common/components/shared/section-divider";
import { useSectionInView } from "@/common/lib/hooks";
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import SectionHeading from '../../shared/section-heading';

const certificates = [
  {
    title: "Object-Oriented C++: Inheritance and Encapsulation",
    issuer: "Coursera",
    year: "2025",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~K3NAB62LE72B/CERTIFICATE_LANDING_PAGE~K3NAB62LE72B.jpeg",
    url: "https://www.coursera.org/account/accomplishments/verify/K3NAB62LE72B",
  },
  {
    title: "Web and Mobile Testing with Selenium",
    issuer: "Coursera",
    year: "2024",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~T7SS7K74I4PO/CERTIFICATE_LANDING_PAGE~T7SS7K74I4PO.jpeg",
    url: "https://www.coursera.org/account/accomplishments/verify/T7SS7K74I4PO",
  },
  {
    title: "Algorithms on Strings",
    issuer: "Coursera",
    year: "2024",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~3M3EY83U9KSC/CERTIFICATE_LANDING_PAGE~3M3EY83U9KSC.jpeg",
    url: "https://coursera.org/share/b937e329a2ec862e8948093a0480b346",
  },
  {
    title: "ChatGPT Advanced Data Analysis",
    issuer: "Coursera",
    year: "2024",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~PB2BDCFJHL44/CERTIFICATE_LANDING_PAGE~PB2BDCFJHL44.jpeg",
    url: "https://coursera.org/share/b669ef6a9e4f7a58e86da982013b560d",
  },
  {
    title: "Dynamic Programming, Greedy Algorithms",
    issuer: "Coursera",
    year: "2024",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~6VGKSF6XRNFS/CERTIFICATE_LANDING_PAGE~6VGKSF6XRNFS.jpeg",
    url: "https://coursera.org/share/241518321d3d536207cad0d7d7d70d15",
  },
  {
    title: "GenAI for Everyone",
    issuer: "Coursera",
    year: "2023",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~WPS53SNLKC7Q/CERTIFICATE_LANDING_PAGE~WPS53SNLKC7Q.jpeg",
    url: "https://coursera.org/share/df0e4d9af5d59f63317043f416558457",
  },
  
];


export default function Certificate() {
  const { ref } = useSectionInView('Certificate');
  const { theme } = useTheme();

  return (
    <>
      <section id='Certificate' ref={ref} className="min-h-screen dar px-4 py-16 dark:bg-darkBg dark:text-white">
        <SectionHeading>Certificates</SectionHeading>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.09 }}
              className="dark:bg-white/5 dark:border-white/10 rounded-xl p-4 shadow-xl border hover:shadow-[#ffcbb4]/90 dark:hover:shadow-[#ffcbb4]/20 transition transform cursor-pointer"
            >
              <Image
                src={cert.image}
                alt={cert.title}
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold">{cert.title}</h2>
              <p className="text-sm text-neutral-400">{cert.issuer} • {cert.year}</p>
            </motion.a>
          ))}
        </div>
      </section>

      <div className="mt-20 flex w-full justify-center">
        <SectionDivider />
      </div>
    </>
  );
}
