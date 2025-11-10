"use client";

export default function Projects() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4">
            <h3 className="text-lg mb-2">Project 1</h3>
            <p className="text-sm">This is a sample project.</p>
          </div>
          <div className="bg-gray-100 p-4">
            <h3 className="text-lg mb-2">Project 2</h3>
            <p className="text-sm">This is another sample project.</p>
          </div>
          <div className="bg-gray-100 p-4">
            <h3 className="text-lg mb-2">Project 3</h3>
            <p className="text-sm">This is yet another sample project.</p>
          </div>
        </div>
      </div>
    </section>
  );
}