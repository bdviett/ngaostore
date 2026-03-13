"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import SupportHeader from "./SupportHeader";
import SimGrid from "./SimGrid";
import SimGuide from "./SimGuide";
import CarrierCheck from "./CarrierCheck";
import Troubleshoot from "./Troubleshoot";
import ContactSupport from "./ContactSupport";
import { SIM_GUIDES } from "@/data/sim-guides";
import MaiSim from "./MaiSim";

export default function SupportPageClient() {
  const searchParams = useSearchParams();
  const simSlug = searchParams.get("sim");
  const tool = searchParams.get("tool");

  const sim = simSlug ? SIM_GUIDES.find((s) => s.slug === simSlug) : null;

  const renderContent = () => {
    if (sim) {
      return <SimGuide sim={sim} />;
    }
    if (tool === "carrier-check") {
      return <CarrierCheck />;
    }
    if (tool === "troubleshoot") {
      return <Troubleshoot />;
    }
    if (tool === "mai-sim") {
      return <MaiSim />;
    }
    return <SimGrid />;
  };

  return (
    <>
      <SupportHeader />
      {renderContent()}
      <ContactSupport />
    </>
  );
}
