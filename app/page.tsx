import Hero from "@/components/Hero";
import Work from "@/components/sec-2/Home";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const userAgent = (await headers()).get("user-agent") ?? "";
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent,
  );

  if (isMobile) {
    redirect("/dashboard");
  }

  return (
    <>
      <Hero />
      <Work />
    </>
  );
}