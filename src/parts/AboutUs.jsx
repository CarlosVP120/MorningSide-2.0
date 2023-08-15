import { useEffect } from "react";
const About = () => {
  const leftImage = "/images/avatar.png";

  // useEffect(() => {
  //   const image = document.getElementById("image");
  //   const paragraph = document.getElementById("paragraph");

  //   // Set initial height of image to match paragraph
  //   image.style.height = `${paragraph.offsetHeight}px`;

  // });
  return (
    <div className="text-mainf container flex flex-col items-center justify-center py-20 md:flex-row lg:py-32">
      <div id="paragraph" className="w-full">
        <div className="my-0">
          <p className="title">About Us</p>

          <p class="md:line-h mx-auto max-w-[790px] text-center text-base text-[#4D5761] md:text-xl">
            Apeiron AI is your full-cycle AI development partner, from concept
            to production and beyond. We're not just machine learning
            specialists, we're the team that helps startups and enterprises
            create cutting-edge AI products that optimize efficiency and
            accelerate growth. Led by founder Carlos Veryan, we guide you
            through the entire process and shape your ideas into ready-to-go
            solutions. With our expertise across multiple industries, we'll help
            you build an innovative product that fosters your company's success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
