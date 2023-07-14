import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-slate-50 flex justify-center items-center">
      <div>
        <Cog6ToothIcon className="w-12 h-12 text-slate-600 animate-spin" />
      </div>
    </div>
  );
}
