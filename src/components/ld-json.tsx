import { resumeData } from '@/lib/data';
import { projects } from '@/lib/projects';

const BUILD_DATE = new Date().toISOString();

export default function LdJson() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Najam ul Hassan',
            alternateName: 'najmiter',
            url: 'https://www.najmiter.dev/',
            description: 'Portfolio of Najam ul Hassan, a full stack software developer building web and mobile apps.',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            dateModified: BUILD_DATE,
            mainEntity: {
              '@type': 'Person',
              name: resumeData.personalInfo.name,
              alternateName: 'najmiter',
              url: 'https://www.najmiter.dev/',
              image: {
                '@type': 'ImageObject',
                url: 'https://www.najmiter.dev/najam-ul-hassan.png',
                caption: 'Najam ul Hassan, full stack software developer',
              },
              jobTitle: 'Full Stack Software Developer',
              description: resumeData.professionalSummary,
              knowsAbout: resumeData.skills,
              worksFor: {
                '@type': 'Organization',
                name: 'Knoctal',
              },
              nationality: {
                '@type': 'Country',
                name: 'Pakistan',
              },
              sameAs: [
                'https://www.linkedin.com/in/najmiter',
                'https://x.com/najmiterer',
                'https://www.facebook.com/najmiter',
                'https://www.instagram.com/najmiter',
                'https://github.com/najmiter',
                'https://www.youtube.com/@najmiter',
                'https://blog.najmiter.dev/',
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Projects by Najam ul Hassan',
            itemListElement: projects.map((project, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'SoftwareApplication',
                name: project.projectName,
                url: `https://www.najmiter.dev/${project.id}`,
                sameAs: project.link,
                applicationCategory: project.meta.category,
                operatingSystem: project.meta.platform,
                description: project.meta.about ?? project.details,
                author: {
                  '@type': 'Person',
                  name: resumeData.personalInfo.name,
                  url: 'https://www.najmiter.dev/',
                },
              },
            })),
          }),
        }}
      />
    </>
  );
}
