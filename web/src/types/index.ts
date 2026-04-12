export interface Route {
  id: string;
  from: string;
  to: string;
  duration: string;
  price: number;
  image: string;
}

export interface Schedule {
  id: string;
  routeId: string;
  departureTime: string;
  arrivalTime: string;
  availableSeats: number;
  totalSeats: number;
  operatorName: string;
  boatName: string;
}

export interface Booking {
  id: string;
  scheduleId: string;
  passengerName: string;
  passengerPhone: string;
  passengerEmail: string;
  emergencyContact: string;
  seats: number;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  qrCode?: string;
  createdAt: string;
}

export interface SearchParams {
  from: string;
  to: string;
  date: string;
  passengers: number;
}
