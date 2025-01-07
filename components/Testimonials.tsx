import { userTestimonials } from "@/app/constants";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 mt-24 md:mb-24">
        <div className="text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-dark font-dmsans max-w-4xl mx-auto">
            What squaree users say
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-darkGray font-manrope font-semibold leading-relaxed max-w-3xl mx-auto">
            Here is how homely can help you
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 px-4 md:px-8 lg:px-16 mt-12 mb-24 lg:max-w-7xl mx-auto items-stretch">
        {/* Première ligne */}
        <div className="lg:col-span-2">
          <TestimonialCard
            title={userTestimonials[0].title}
            description={userTestimonials[0].description}
            avatar={userTestimonials[0].avatar}
            name={userTestimonials[0].name}
            position={userTestimonials[0].position}
          />
        </div>
        <div className="lg:col-span-3">
          <TestimonialCard
            title={userTestimonials[1].title}
            description={userTestimonials[1].description}
            avatar={userTestimonials[1].avatar}
            name={userTestimonials[1].name}
            position={userTestimonials[1].position}
          />
        </div>

        <div className="lg:col-span-3">
          <TestimonialCard
            title={userTestimonials[2].title}
            description={userTestimonials[2].description}
            avatar={userTestimonials[2].avatar}
            name={userTestimonials[2].name}
            position={userTestimonials[2].position}
          />
        </div>
        <div className="lg:col-span-2">
          <TestimonialCard
            title={userTestimonials[3].title}
            description={userTestimonials[3].description}
            avatar={userTestimonials[3].avatar}
            name={userTestimonials[3].name}
            position={userTestimonials[3].position}
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
