import { mapEmbedSrc } from "@/data/site";

export default function MapEmbed() {
  return (
    <iframe
      src={mapEmbedSrc}
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-[25rem] w-full rounded-2xl md:h-[32rem]"
      title="Teo Narte location map"
    />
  );
}
