const baseURL = 'http://localhost:5000/api';

export async function getBookedSeats(trainId, wagonId) {
  const response = await fetch(
    `${baseURL}/bookings?trainId=${trainId}&wagonId=${wagonId}`
  );

  if (!response.ok) {
    throw new Error('Помилка отримання даних про заброньовані місця');
  }

  return response.json();
}

export async function createBooking(bookingData) {
  const response = await fetch(`${baseURL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookingData)
  });

  if (!response.ok) {
    throw new Error('Помилка створення бронювання');
  }

  return response.json();
}