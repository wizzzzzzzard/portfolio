"use client";

export default function Contact() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-3xl mb-4">Get in Touch</h2>
        <p className="text-lg mb-8">Contact me at <a href="mailto:example@example.com" className="text-orange-500">example@example.com</a></p>
        <form>
          <input type="text" placeholder="Name" className="bg-gray-100 p-2 mb-4" />
          <input type="email" placeholder="Email" className="bg-gray-100 p-2 mb-4" />
          <textarea placeholder="Message" className="bg-gray-100 p-2 mb-4" />
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Send</button>
        </form>
      </div>
    </section>
  );
}