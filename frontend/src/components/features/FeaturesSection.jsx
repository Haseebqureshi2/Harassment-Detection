import FeatureCard from "./FeatureCard";
import {
  Shield,
  Layers,
  Mic,
  Clock,
  Globe,
} from "lucide-react";

import { useTranslation } from "react-i18next";

export default function FeaturesSection() {

  const { t } = useTranslation();

  const features = [
    {
      title: t("escalationTitle"),
      description: t("escalationDesc"),
      icon: <Shield size={18} className="text-red-500" />,
    },
    {
      title: t("multiContextTitle"),
      description: t("multiContextDesc"),
      icon: <Layers size={18} className="text-purple-500" />,
    },
    {
      title: t("speakerTitle"),
      description: t("speakerDesc"),
      icon: <Mic size={18} className="text-blue-500" />,
    },
    {
      title: t("timestampTitle"),
      description: t("timestampDesc"),
      icon: <Clock size={18} className="text-yellow-500" />,
    },
    {
      title: t("multiLanguageTitle"),
      description: t("multiLanguageDesc"),
      icon: <Globe size={18} className="text-cyan-500" />,
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-10 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex gap-6 animate-scroll">

          {[...features, ...features].map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}

        </div>

      </div>

    </section>
  );
}