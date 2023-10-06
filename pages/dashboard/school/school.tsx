import React from "react";

interface Section {
  p: string;
  page: string;
  sections: string;
}

const Content = () => {
  const content: Section[] = [
    {
      p: "L",
      page: "landing page",
      sections: "4 sections",
    },
    {
      p: "A",
      page: "About",
      sections: "4 sections",
    },
    {
      p: "A",
      page: "Admission",
      sections: "4 sections",
    },
    {
      p: "E",
      page: "Events",
      sections: "4 sections",
    },
    {
      p: "H",
      page: "HighSchool",
      sections: "4 sections",
    },
    {
      p: "N",
      page: "Nursery school",
      sections: "4 sections",
    },
    {
      p: "C",
      page: "Contact us",
      sections: "4 sections",
    },
  ];

  return (
    <section>
      <main className="grid grid-cols-3 gap-8">
        {content.map(({p, page, sections}, index) => (
          <div className="flex gap-x-4  ml-10 items-center" key={index}>
            <div className="bg-[#E4F2FF] h-6 w-3 p-4 flex rounded-sm justify-center items-center">
              <p className="text-[#018C79] text-2xl p-4">{p}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm">{page}</p>
              <p className="text-xs opacity-40 normal">{sections}</p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Content;
