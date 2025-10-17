import { Header } from "@/components/header"
import { Breadcrumb } from "@/components/breadcrumb"
import { ProjectsShowcase } from "@/components/projects-showcase"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Projects - Verlix Tech",
  description:
    "Explore our portfolio of innovative web applications, mobile apps, 3D designs, and digital solutions. See how we transform ideas into reality.",
  keywords:
    "projects, portfolio, web applications, mobile apps, 3D design, case studies, digital solutions, software development",
  openGraph: {
    title: "Our Projects - Verlix Tech",
    description: "Explore our portfolio of innovative digital solutions and designs",
    type: "website",
    url: "https://verlix.tech/projects",
  },
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main>
        <ProjectsShowcase />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://verlix.tech",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Projects",
                item: "https://verlix.tech/projects",
              },
            ],
          }),
        }}
      />
    </>
  )
}
