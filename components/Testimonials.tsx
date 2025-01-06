import { userTestimonials } from "@/app/constants";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 mt-24 mb-24">
        <div className="text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-dark font-dmsans max-w-4xl mx-auto">
            What squaree users say
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-darkGray font-manrope font-semibold leading-relaxed max-w-3xl mx-auto">
            Here is how homely can help you
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4 md:px-8 lg:px-16 mt-12 mb-24 lg:max-w-7xl mx-auto">
        {userTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            title={testimonial.title}
            description={testimonial.description}
            avatar={testimonial.avatar}
            name={testimonial.name}
            position={testimonial.position}
          />
        ))}
      </div>
    </>
  );
};

export default Testimonials;
