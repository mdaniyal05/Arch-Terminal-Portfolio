import { Wifi, Volume2, BatteryFull } from "lucide-react";

export default function SystemIndicators() {
  return (
    <div className="flex items-center gap-3 text-text-muted text-xs">
      <span className="flex items-center gap-1">
        <Wifi size={13} />
      </span>
      <span className="flex items-center gap-1">
        <Volume2 size={13} />
      </span>
      <span className="flex items-center gap-1">
        <BatteryFull size={13} />
        100%
      </span>
    </div>
  );
}
