import type { ReactNode } from 'react'

export interface ToolItem {
  name: string
  icon: ReactNode
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  dates: string
  description: string
  tech: string[]
}

export interface ProjectItem {
  id: string
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

export interface SocialLink {
  label: string
  href: string
  icon: ReactNode
}

export interface PortfolioData {
  personal: {
    name: string
    initials: string
    role: string
    description: string
    email: string
  }
  about: {
    title: string
    bio: string
    tools: ToolItem[]
  }
  experiences: ExperienceItem[]
  projects: ProjectItem[]
  socials: SocialLink[]
}

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Juan Cruz Del Valle',
    initials: 'JCDV.',
    role: 'Desarrollador Full Stack',
    description: 'Creo experiencias digitales que combinan diseño elegante con código limpio. Especializado en React, Node.js y todo lo que hay en medio.',
    email: 'juancruzdelvalle12@gmail.com',
  },
  about: {
    title: 'Construyo productos digitales con intención y foco.',
    bio: 'Soy un desarrollador apasionado por construir productos que resuelvan problemas reales. Cuando no estoy escribiendo código, estoy explorando nuevas herramientas de diseño, optimizando flujos de trabajo o compartiendo conocimiento con la comunidad. Mi enfoque principal es crear interfaces que se sientan vivas y sistemas que escalen con gracia.',
    tools: [
      {
        name: 'React',
        icon: (
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="12" rx="6" ry="10" />
            <ellipse cx="12" cy="12" rx="10" ry="6" transform="rotate(90 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        ),
      },
      {
        name: 'TypeScript',
        icon: (
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
            <path d="M8.5 7.5h3.5v9" />
            <path d="M12 12h3.5" />
          </svg>
        ),
      },
      {
        name: 'Node.js',
        icon: (
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 4h8l4 2v12l-4 2H8l-4-2V6z" />
            <path d="M8 8h8" />
            <path d="M8 16h8" />
          </svg>
        ),
      },
      {
        name: 'PostgreSQL',
        icon: (
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 7c1.5-2 4-3 6-3s4.5 1 6 3c-1.5 2.5-4 4-6 4s-4.5-1.5-6-4Z" />
            <path d="M12 18c-2.5 0-4-1-4-2.5S9.5 13 12 13s4 1 4 2.5S14.5 18 12 18Z" />
            <path d="M10 9.5c.75 1 1.75 1.5 2.5 1.5" />
          </svg>
        ),
      },
      {
        name: 'Tailwind CSS',
        icon: (
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 13c3-4 6-5 10-4 0 4-3 6-6 7" />
            <path d="M4 17c4-2 7-1 10 1" />
          </svg>
        ),
      },
      {
        name: 'Next.js',
        icon: (
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 19V5h6l6 6v8" />
            <path d="M12 12l5-5" />
          </svg>
        ),
      },
    ],
  },
  experiences: [
    {
      id: 'senior',
      role: 'Lead Frontend Developer & Project Manager',
      company: 'Loteo La Alameda',
      dates: 'Abril 2026',
      description:
        'Lideré el desarrollo integral de la web y el CMS administrativo. Gestioné el diseño UI/UX, el despliegue técnico y la comunicación directa con el cliente, asegurando una plataforma escalable y una gestión eficiente de contenidos.',
      tech: ['Angular', 'Node.js', 'TypeScript', 'PostgreSQL'],
    },
    {
      id: 'freelance',
      role: 'Co-Founder & Full Stack Developer',
      company: 'Clientes independientes',
      dates: '2025 - presente',
      description:
        'Co-fundador de la agencia enfocada en el ciclo de vida completo de software. Gestiono la prospección de clientes, diseño de propuestas personalizadas, desarrollo técnico integral, despliegue y mantenimiento de soluciones digitales a medida.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
    },
    {
      id: 'junior',
      role: 'Founder, Profesor & Drum Doctor',
      company: 'JCDVDrumming',
      dates: '2022 - Presente',
      description:
        'Desarrollé y gestiono una plataforma web dedicada a la oferta de servicios técnicos y educativos. La plataforma facilita la solicitud de clases personalizadas y consultoría especializada en audio, integrando una experiencia de usuario orientada a la gestión eficiente de turnos y requerimientos técnicos.',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
    },
  ],
  projects: [
    {
      id: '1',
      title: 'Portfolio UI',
      description: 'Landing responsive con animaciones y diseño dark.',
      tech: ['React', 'TypeScript', 'Tailwind'],
      github: 'https://github.com/',
      demo: 'https://demo.com/',
    },
    {
      id: '2',
      title: 'API Rest',
      description: 'API en Node.js con autenticación y tests.',
      tech: ['Node.js', 'Express', 'Postgres'],
      github: 'https://github.com/',
      demo: 'https://demo.com/',
    },
    {
      id: '3',
      title: 'E-commerce',
      description: 'Tienda online con carrito y pasarela de pago.',
      tech: ['React', 'Stripe', 'Prisma'],
      github: 'https://github.com/',
      demo: 'https://demo.com/',
    },
  ],
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.7.115 2.5.338 1.9-1.3 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.72 0 .27.18.59.69.49A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.348V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.268 2.367 4.268 5.451v6.292zM5.337 7.433a2.069 2.069 0 1 1 0-4.138 2.069 2.069 0 0 1 0 4.138zM7.119 20.452H3.553V9h3.566v11.452z" />
        </svg>
      ),
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.54 8.54 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.16 12.16 0 0 1 3.16 4.86a4.28 4.28 0 0 0 1.32 5.72 4.24 4.24 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.59 8.59 0 0 1 2 18.57a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.39-.02-.58A8.73 8.73 0 0 0 22.46 6z" />
        </svg>
      ),
    },
  ],
}
