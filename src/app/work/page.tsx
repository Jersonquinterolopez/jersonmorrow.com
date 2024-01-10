import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="dark:text-neutral-300 tracking-wide">
          Senior front-end engineer with six years of experience in fast-moving
          environments. Extensive background in design principles and UI/UX.
          Greatest strengths include building web architecture and a keen eye
          for design systems.
        </p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-700" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Jakroo</h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          Full-stack software Engineer - July 2023 - Present
        </p>
        <ul
          style={{ listStyleType: "disc" }}
          className="dark:text-neutral-300 tracking-wide"
        >
          <li>
            Designed and developed a comprehensive cloud storage system for user
            designs, involving frontend, backend, and database development.
          </li>
          <br />
          <li>
            Integrated bulk shipping feature into the checkout process and sales
            dashboard, effectively reducing shipping costs by 15% and carbon
            footprint by 10%.
          </li>
          <br />
          <li>
            Designed and built the first product comparison engine, enabling
            users to compare multiple products simultaneously within the
            platform.
          </li>
        </ul>
        <br />
        <hr className="my-6 border-neutral-200 dark:border-neutral-700" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Figuro</h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          Full-stack software Engineer/Team Lead - February 2023 - June 2023
        </p>
        <ul
          style={{ listStyleType: "disc" }}
          className="dark:text-neutral-300 tracking-wide"
        >
          <li>
            Implemented RESTful APIs using Nextjs, NodeJS, Express, and MongoDB,
            delivering real-time quoting for insurance services. Drove the
            development of dynamic forms using Server Side Rendering (SSR) in
            Nextjs with Sanity as CMS, enhancing the user interface and content
            delivery.
          </li>
          <br />
          <li>
            Integrated robust monitoring tools like Sentry, Vercel Log Drains,
            Hotjar, and OpenReplay. Developed design system with React, using
            storybook and mantine UI. Implemented Nextjs middleware to
            strengthen authentication protocols.
          </li>
          <br />
          <li>
            Integrated CRON jobs using Inngest to automate user notifications
            and execute data processing for the sales team.
          </li>
          <br />
          <li>
            Hired and onboard junior engineers after the seed round. Trained
            them on technical aspects of the business.
          </li>
          <br />
          <li>
            Executed the design and development of payment integration for
            travel insurance using Nextjs and PayU API.
          </li>
        </ul>
        <hr className="my-6 border-neutral-200 dark:border-neutral-700" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Figuro</h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          Founder Engineer, March 2021 - January 2022
        </p>
        <ul
          style={{ listStyleType: "disc" }}
          className="dark:text-neutral-300 tracking-wide"
        >
          <li>
            Created and executed a roadmap for the company while packaging
            features into strategic releases. The successful execution of the
            roadmap earned Figuro a place in high-impact LATAM accelerator
            programs including Startup Chile, Latitude, and Utec ventures, as
            well as OnDeck ODX in Silicon Valley.
          </li>
          <br />
          <li>
            Developed an algorithm to provide real-time insurance quotes based
            on historical data and external data sources. This feature bolstered
            debt life insurance product sales, translating into 90% of the
            {`company's`} future revenue.
          </li>
          <br />
          <li>
            Designed front-end architecture using Atomic Design for the user
            dashboard, employing React, Redux, Chakra-UI, Tailwind, and Styled
            Components.
          </li>
          <br />
          <li>
            Conceptualized & implemented a SaaS tool to streamline the policy
            underwriting process for insurance agents.
          </li>
          <br />
          <li>
            Raised $700K in funding through accelerator programs by
            communicating the value of technical aspects and product development
            to future investors and stakeholders.
          </li>
          <br />
          <li>
            Integrated Allianz SOAP client with the Rest API quoting services to
            boost the upselling process. Developed and designed financial
            calculators to boost the upselling strategy.
          </li>
          <br />
          <li>
            Spearheaded the implementation of CI/CD pipelines through GitHub
            Actions and Firebase preview channels.
          </li>
          <br />
          <li>
            Led the migration of serverless services to Vercel, promoting
            scalability and cost-effectiveness by over 10%.
          </li>
        </ul>
        <hr className="my-6 border-neutral-200 dark:border-neutral-700" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Wellbe</h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          Full-stack Engineer - Co-Founder, January - 2018 - December 2020
        </p>
        <ul
          style={{ listStyleType: "disc" }}
          className="dark:text-neutral-300 tracking-wide"
        >
          <li>
            Spearheaded UI prototyping and design for the {`company's`} website,
            implemented an intuitive and responsive interface; followed by
            development using Pure CSS modules, HTML, Vanilla Javascript, and
            Node.js to ensure seamless user experience and functionality.
          </li>
          <br />
          <li>
            Developed a technology to improve how people connect with their
            healthcare system. Packaging healthcare knowledge into a chatbot to
            help users schedule doctor appointments and track their historical
            data in one place.
          </li>
          <br />
          <li>
            Built two MVPs using a Monolithic architecture with React, NodeJs,
            Express, and MongoDB.
          </li>
          <br />
          <li>
            Integrated APIs including Google Maps, Here Maps ( geolocation -
            geocoding ), and Watson IBM Assistance (server-side).
          </li>
        </ul>
      </div>
    </section>
  );
}
