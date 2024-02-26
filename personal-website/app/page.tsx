import { getProjects } from "@/sanity/sanity-utils";
import { PortableTextBlock } from "sanity";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div id="intro">
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-extrabold">Hi! I'm Aprameya 🚀</h1>
        <p className="text-lg mt-4">
          I’m a Computer Science student at UBC Vancouver with passion for creating
          impactful software. My tech toolkit includes Flutter, React, Next.js, and Tailwind CSS for
          frontend full-stack work, and Python for backend solutions. I’ve also dabbled
          in C/C++, Java, R, and Shell/Batch Script for more technical projects.
          Explore my creations on <a target="_blank" href="https://github.com/Apps247">GitHub</a> and connect with me on <a target="_blank" href="https://linkedin.com/in/aprameya-aithal/">LinkedIn</a>!
        </p>
      </div>
    </div>
    // <div>
    //   {projects.map((project) => (
    //     <div key={project._id}>
    //       <h1 className="text-4xl">{project.name}</h1>

    //     </div>
    //   ))}
    // </div>
  );
}
