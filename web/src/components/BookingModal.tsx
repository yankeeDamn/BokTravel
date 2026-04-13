import { useState } from 'react';
import type { Route } from '../types';

interface BookingModalProps {
  route: Route;
  onClose: () => void;
}

const schedules = [
  { time: '07:00 AM', operator: 'Sundarban Cruises', boat: 'Sea Eagle', seats: 12 },
  { time: '09:30 AM', operator: 'Bay Riders', boat: 'Ocean Star', seats: 8 },
  { time: '12:00 PM', operator: 'Delta Boats', boat: 'River Queen', seats: 15 },
  { time: '03:00 PM', operator: 'Island Hoppers', boat: 'Blue Wave', seats: 10 },
];

export function BookingModal({ route, onClose }: BookingModalProps) {
  const [selectedSchedule, setSelectedSchedule] = useState<number | null>(null);
  const [passengers, setPassengers] = useState(1);

  const handleBookViaWhatsApp = () => {
    if (selectedSchedule === null) return;
    const schedule = schedules[selectedSchedule];
    const message = encodeURIComponent(
      `Hi! I'd like to book a trip.\nRoute: ${route.from} → ${route.to}\nDate: Tomorrow\nTime: ${schedule.time}\nOperator: ${schedule.operator}\nBoat: ${schedule.boat}\nPassengers: ${passengers}\nTotal: ₹${route.price * passengers}`
    );
    window.open(`https://wa.me/919986418638?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-3xl max-w-2xl w-full border border-gray-700 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative h-40">
          <img
            src={route.image}
            alt={`${route.from} to ${route.to}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
          >
            ✕
          </button>
          <div className="absolute bottom-4 left-6">
            <h3 className="text-2xl font-bold text-white">
              {route.from} → {route.to}
            </h3>
            <p className="text-blue-300 text-sm">
              {route.duration} • ₹{route.price}/person
            </p>
          </div>
        </div>

        <div className="p-6">
          {/* Passengers selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Number of Passengers
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setPassengers(Math.max(1, passengers - 1))}
                className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              >
                −
              </button>
              <span className="text-xl font-bold text-white w-8 text-center">
                {passengers}
              </span>
              <button
                onClick={() => setPassengers(Math.min(10, passengers + 1))}
                className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              >
                +
              </button>
              <span className="text-gray-400 text-sm ml-2">
                Total: ₹{route.price * passengers}
              </span>
            </div>
          </div>

          {/* Schedules */}
          <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
            Available Schedules
          </h4>
          <div className="space-y-3 mb-6">
            {schedules.map((schedule, index) => (
              <button
                key={index}
                onClick={() => setSelectedSchedule(index)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                  selectedSchedule === index
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                      selectedSchedule === index
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    {schedule.time.split(' ')[0]}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-medium">
                      {schedule.time}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {schedule.operator} • {schedule.boat}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 text-sm font-medium">
                    {schedule.seats} seats left
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleBookViaWhatsApp}
              disabled={selectedSchedule === null}
              className={`flex-1 py-3.5 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 ${
                selectedSchedule !== null
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-lg'
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Book via WhatsApp
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3.5 bg-gray-800 text-gray-300 font-semibold rounded-xl hover:bg-gray-700 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
