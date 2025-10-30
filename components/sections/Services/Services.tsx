import Title from "@/components/common/Title";
import React from "react";
import data from "@/data.json";

const services = data.servicesSection;

export default function Services() {
  return (
    <section id="services" className="py-10 w-full">
      <Title title="Services" />
      <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <li
            key={service.id}
            className="p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-primary-foreground"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
