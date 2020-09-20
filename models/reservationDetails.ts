export interface ReservationDetails {
    id: string;
    emails?: {
        bookingConfirmationSent: boolean;
        checkInInfosSent: boolean;
    }
    pinCodes: {
        mainDoorCode: number;
        roomDoorCode: number;
    }
}