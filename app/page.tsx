import ContactUs from "@/components/contact.tsx/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/Navbar";
import ProjectHome from "@/components/projects/Home";
import HomeRes from "@/components/responsive.tsx/Home";
import WorkHome from "@/components/work/WorkHome";

export default function Page() {
  return (
    // <>
    //   <div className="min-h-screen flex flex-col">
    //     <Navbar />

    //     {/* ❌ NO overflow-hidden here */}
    //     <main className="flex-1">
    //       <section className="overflow-hidden">
    //         <Hero />
    //       </section>

    //       <section className="overflow-hidden">
    //         <WorkHome />
    //       </section>

    //       <section className="overflow-hidden">
    //         <ProjectHome />
    //       </section>

    //       <section className="overflow-hidden">
    //         <ContactUs />
    //       </section>
    //     </main>

    //     <Footer />
    //   </div>
    // </>

    <>
      <HomeRes />
    </>
  );
}
