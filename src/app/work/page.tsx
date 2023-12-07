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
          Results-Driven Full Stack Engineer with six years of experience in
          fast-moving environments as a product engineer and senior software
          engineer. Extensive background in design principles and UI/UX.
          Experienced in building software architecture and development
          strategies for startups and e-commerce companies.
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
            Developed a comprehensive cloud system for user design folders
            involving frontend, backend, and database development.
          </li>
          <br />
          <li>
            Integrated BulkShipping feature into the checkout process and sales
            dashboard, effectively reducing shipping costs by 15% and carbon
            footprint by 10%.
          </li>
          <br />
          <li>
            Designed and built the first product comparison engine, enabling
            users to compare multiple products within the platform.
          </li>
          <br />
          <li>
            Implemented a vertical approach to scale database performance,
            improving the {`platform's`} ability to handle increasing data
            loads.
          </li>
          <br />
          <li>
            Identified and implemented caching and memoization in the designer
            dashboard to reduce data querying and increase performance.
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
            Envisioned and executed a roadmap for the company by packaging
            features into strategic releases. As a result, the company became
            part of the high-impact accelerator programs in LATAM including
            Startup Chile, Latitude, and Utec ventures, as well as in Silicon
            Valley including OnDeck ODX.
          </li>
          <br />
          <li>
            Developed an algorithm to provide real-time insurance quotes based
            on historical data and external data sources. This feature bolstered
            debt life insurance product sales, translating into 90% of the
            {`company's`} ongoing revenue.
          </li>
          <br />
          <li>
            Designed front-end architecture of the user dashboard, employing
            React, Redux, Chakra-UI, Tailwind, and Styled Components.
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
            Actions and Firebase preview channels, enabling seamless software
            updates.
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
