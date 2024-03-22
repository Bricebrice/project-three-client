import MyCarousel from "./Carousel";
import Testimonial from "./Testimonial";

function Testimonials() {
  const testimonialData = [
    {
      text: "Amazing planner! VeganEase Planner has revolutionized the way I approach meal planning. As a busy professional with a passion for healthy eating, I struggled to find the time to organize my vegetarian meals effectively.",
      author: "Antonio Montagne",
      role: "CTO at VeganEase Planner",
      image:
        "https://media.revistagq.com/photos/5ec79998db7478f5171ec251/4:3/w_2880,h_2160,c_limit/reloj-tony-montana-scarface.jpg",
    },
    {
      text: "I've been using VeganEase Planner for a few months now, and it's been a game-changer for me. It's incredibly user-friendly, and the variety of recipes available makes meal planning enjoyable.",
      author: "Alice Johnson",
      role: "Lead Developer at VeganEase Planner",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    },
    {
      text: "The VeganEase Planner has simplified my life. As a working parent, finding time to plan and prepare meals can be challenging, but this tool has made it so much easier. I highly recommend it to anyone looking to streamline their meal planning process.",
      author: "Snoop Dog",
      role: "Marketing Manager at VeganEase Planner",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Snoop_Dogg_2019_by_Glenn_Francis.jpg/800px-Snoop_Dogg_2019_by_Glenn_Francis.jpg",
    },
  ];

  return (
    <section className="bg-mantis-400 dark:bg-gray-900 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-xl mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            VeganEase testimonials
          </h2>
        </div>
        <MyCarousel
          items={testimonialData.map((testimonial) => (
            <Testimonial {...testimonial} />
          ))}
        />
      </div>
    </section>
  );
}

export default Testimonials;
