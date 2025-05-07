// import React from "react";
// import { PreviousWorkSectionProps, ProjectsListProps } from "../../typings";
// import ProjectMedia from "./displayComponents/projectMedia";
// import ProjectDescription from "./displayComponents/projectDescription";
// import { Icon } from "@iconify/react/dist/iconify.js";
// import clsx from "clsx";

// type ProjectDisplayProps = {
//   companyData: PreviousWorkSectionProps["companies"]["list"][number];
//   projectData: ProjectsListProps;
//   setSelectedProjectIndex: (arg: null) => void;
// };

// const ProjectDisplay = ({
//   companyData,
//   projectData,
//   setSelectedProjectIndex,
// }: ProjectDisplayProps) => {
//   const a11yString = `${projectData.name}-project-details-view`.replace(
//     / /g,
//     "-",
//   );
//   return (
//     <div
//       id={a11yString}
//       className="grid auto-rows-min grid-cols-1 grid-rows-[repeat(3,auto)] items-start justify-items-center gap-y-4 md:p-4 lg:grid-cols-2 lg:grid-rows-[repeat(2,auto)] lg:gap-x-4"
//     >
//       <div
//         className={clsx(
//           "size-full content-start justify-items-center max-lg:row-start-2 md:justify-items-end lg:col-span-1 lg:row-span-full",
//         )}
//       >
//         <ProjectMedia
//           name={projectData.name}
//           mediaDescription={projectData.mediaDescription}
//           mediaType={projectData.mediaType}
//           media={projectData.media}
//           mediaLightbox={projectData.mediaLightbox}
//         />
//       </div>
//       <div className="w-full justify-items-center gap-y-2 max-lg:row-start-3 md:justify-items-center lg:col-span-1 lg:row-span-2 lg:row-start-1 lg:size-full lg:pt-0">
//         <ProjectDescription
//           projectData={projectData}
//           companyData={companyData}
//         />
//       </div>
//       <div className="col-span-full w-full max-lg:row-start-1">
//         <button
//           aria-label={`Return to past work gallery`}
//           className="text-shadow cta-button col-span-1 row-span-1 self-end text-nowrap rounded-lg border bg-brand-purple p-2 text-xl uppercase !text-white hover:translate-y-1 max-lg:w-full lg:ml-auto lg:w-1/2"
//           onClick={() => setSelectedProjectIndex(null)}
//         >
//           <Icon
//             icon="mingcute:exit-door-fill"
//             className="-scale-x-100 text-2xl"
//           />
//           Go back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectDisplay;
