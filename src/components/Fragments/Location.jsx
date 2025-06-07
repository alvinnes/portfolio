import { MapTrifold } from "@phosphor-icons/react";

const Location = () => {
  return (
    <div className="flex w-full flex-col items-center gap-6">
      <h2 className="mt-4 flex items-center gap-2 text-xl font-semibold text-slate-700">
        <span className="size-8 rounded-sm bg-indigo-200/50 p-1 text-white shadow-md">
          <MapTrifold className="size-full rounded-sm bg-indigo-300 p-1" />
        </span>
        Location
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d990.7969809553769!2d110.72349423269253!3d-6.623564109938255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snayla%20snack!5e0!3m2!1sid!2sid!4v1749311095041!5m2!1sid!2sid"
        loading="lazy"
        className="h-80 w-full border-0 shadow-md sm:h-full"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
