import React from "react";

const AboutUsSection = () => (
  <section className="flex items-center justify-center min-h-[70vh] bg-white py-12 px-6">
    {/* Kiri: Gambar dengan lingkaran dekorasi */}
    <div className="relative w-[260px] min-w-[260px] mr-10">
      {/* Lingkaran dekorasi */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 w-[250px] h-[250px] bg-[#f8bfb0] rounded-full z-10" />
      {/* Gambar utama */}
      <img
        src="public/img/girl-book.png"
        alt="About Us"
        className="relative z-20 w-[260px] rounded-[16px] object-cover shadow-lg"
      />
    </div>

    {/* Kanan: Konten */}
    <div className="max-w-xl">
      {/* Label About Us */}
      <div className="flex items-center mb-3">
        <span className="inline-flex w-8 h-8 bg-[#f8bfb0] rounded-full items-center justify-center font-bold text-white mr-2 text-lg select-none">
          01
        </span>
        <span className="bg-[#fff6f2] text-[#f76c6c] px-4 py-1 rounded-full font-semibold text-sm tracking-wide select-none">
          About Us
        </span>
      </div>

      {/* Judul */}
      <h2 className="text-4xl font-extrabold mb-3 leading-tight">
        Everything You Need To Grow Your Business
      </h2>

      {/* Deskripsi */}
      <p className="text-gray-600 text-lg mb-5">
        Skywave integrate seamlessly into your existing technology stack. The ease of connecting it to other tools lets you combine it with the integration you need.
      </p>

      {/* Link Learn More */}
      <a
        href="#"
        className="inline-block text-[#f76c6c] font-semibold text-base mb-7 hover:underline"
      >
        Learn More &rarr;
      </a>

      {/* Testimoni */}
      <div className="bg-[#faf8f6] rounded-xl p-5 mt-7 flex items-start gap-4 shadow-sm">
        <span className="text-[#f76c6c] text-4xl leading-none select-none">&#8220;</span>
        <div>
          <p className="italic text-gray-700 mb-3">
            The many integrations that can be linked really help me see data from other tools I also use.
          </p>
          <div className="flex items-center">
            <img
              src="/img/avatar-clayton.jpg"
              alt="Clayton N. Ziegler"
              className="w-9 h-9 rounded-full object-cover mr-3 shadow-sm border border-white"
            />
            <div>
              <div className="font-semibold text-sm">Clayton N. Ziegler</div>
              <div className="text-xs text-gray-400">Service manager @Skywave</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUsSection;
