const baseURL = 'http://localhost:5000/api';

export  async function getTrains() {
    try {
        const response = await fetch(`${baseURL}/trains`);
        if (!response.ok) {
            throw new Error('Помилка отримання даних про потяги');
        }
        return await response.json();
    } catch (error) {
        console.error('Помилка отримання даних про потяги:', error);
        throw error;
    }
}