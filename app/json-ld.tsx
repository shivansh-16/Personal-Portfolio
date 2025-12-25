
export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shivansh Pawar',
    url: 'https://shivansh-pawar.vercel.app', // Update with actual domain if different
    sameAs: [
      'https://github.com/Shivansh-16',
      'https://www.linkedin.com/in/shivansh-pawar-00a404287/',
    ],
    jobTitle: 'Full Stack Web Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelancer',
    },
    description: 'Full Stack Web Developer specializing in modern web applications. Expert in React, Next.js, Node.js, and TailwindCSS.',
    image: 'https://shivansh-pawar.vercel.app/og-image.png', // Add an actual image path here
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
