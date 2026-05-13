const baseURL = 'http://localhost:5000/api';

export async function getBookedSeats(trainId, wagonId) {
  const response = await fetch(
    `${baseURL}/bookings?trainId=${trainId}&wagonId=${wagonId}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Помилка отримання даних про заброньовані місця');
  }

  return data;
}

export async function createBooking(bookingData) {
  const response = await fetch(`${baseURL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookingData)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Помилка створення бронювання');
  }

  return data;
}