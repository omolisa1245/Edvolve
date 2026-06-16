"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Shield,
  Briefcase,
  Star,
  Award,
} from "lucide-react";


const team = [
  {
    name: "Executive Director",
    role: "Leadership & Strategy",
    image: "/staff2.webp",
    desc:
      "Provides overall leadership, strategic direction, and ensures alignment with Edvolve Foundation’s mission and long-term vision.",
  },

  {
    name: "Programs Director",
    role: "Programs & Implementation",
    image: "/staff4.jpg",
    desc:
      "Oversees program design, execution, monitoring, and impact evaluation across all initiatives and community projects.",
  },

  {
    name: "Head of Research",
    role: "Learning Lab & Research",
    image: "/staff3.jpg",
    desc:
      "Leads data-driven research, field studies, and evidence-based development of methodologies and interventions.",
  },

  {
    name: "Partnership Lead",
    role: "Stakeholder Engagement",
    image: "/test6.jpeg",
    desc:
      "Manages collaborations with government agencies, NGOs, private sector partners, and international development organizations.",
  },

  {
    name: "Advocacy Lead",
    role: "Social Change & Policy",
    image: "/test5.jpeg",
    desc:
      "Drives advocacy programs focused on human rights, governance reform, civic engagement, and social justice.",
  },

  {
    name: "Operations Manager",
    role: "Operations & Administration",
    image: "/test1.jpeg",
    desc:
      "Ensures smooth day-to-day operations, logistics, resource management, and organizational efficiency.",
  },
];


export default function ManagementTeamPage() {

  return (

    <main className="bg-[#f8f7f4] text-gray-900">


      {/* HERO SECTION */}

      <section className="relative py-32 overflow-hidden">


        {/* BACKGROUND LAYER */}

        <div className="absolute inset-0">

          <Image
            src="/edu1.jpeg"
            alt="Management Team"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

        </div>





        {/* HERO CONTENT */}

        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">


          <motion.div

            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}

          >

            <Users size={50} className="mx-auto mb-6" />

            <h1 className="text-5xl md:text-7xl font-serif mb-6">
              Our Management Team
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-9">
              A dedicated group of leaders, researchers, strategists, and development experts
              committed to transforming lives through education, human capital development,
              and social change action.
            </p>

          </motion.div>


        </div>

      </section>








      {/* LEADERSHIP STATEMENT */}

      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <Shield size={45} className="mx-auto text-yellow-700 mb-6" />

          <h2 className="text-4xl md:text-5xl font-serif mb-8">
            Leadership Built on Purpose
          </h2>

          <p className="text-gray-600 text-lg leading-9">
            Our management team is guided by a shared commitment to impact-driven leadership,
            accountability, transparency, and collaboration. We believe that effective leadership
            is rooted in service — serving communities, empowering people, and building sustainable systems
            for long-term development.
          </p>

        </div>

      </section>








      {/* TEAM GRID */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">


          <div className="text-center mb-16">

            <h2 className="text-5xl font-serif mb-4">
              Meet Our Leadership
            </h2>

            <p className="text-gray-600 text-lg">
              Professionals driving Edvolve Foundation’s mission forward
            </p>

          </div>





          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">


            {team.map((member, index) => (

              <motion.div

                key={index}

                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}

                className="
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-sm
                  border
                  border-gray-100
                  hover:shadow-xl
                  transition
                "
              >

                {/* IMAGE */}

                <div className="relative h-72 w-full">

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />

                </div>





                {/* CONTENT */}

                <div className="p-8">

                  <h3 className="text-2xl font-serif mb-2">
                    {member.name}
                  </h3>

                  <p className="text-yellow-600 font-medium mb-4">
                    {member.role}
                  </p>

                  <p className="text-gray-600 leading-7">
                    {member.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>








      {/* VALUES SECTION */}

      <section className="bg-[#07130d] text-white py-28">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <Award size={50} className="mx-auto mb-6" />

          <h2 className="text-5xl font-serif mb-8">
            Guided by Excellence & Integrity
          </h2>

          <p className="text-gray-300 text-lg leading-9">
            Our leadership culture is built on integrity, excellence, accountability,
            innovation, and a deep commitment to community impact. Every decision we make
            is guided by the goal of building sustainable systems that empower people
            and strengthen society.
          </p>

        </div>

      </section>

    </main>
  );
}