// countdown.js

export function getElapsedTime(startDateString) {
    const startDate = new Date(startDateString);
    const now = new Date();

    // Si la fecha de inicio es en el futuro, devolvemos 0 en todo
    if (startDate > now) {
        return {
            years: 0,
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    // Ajustar los valores si son negativos
    if (seconds < 0) {
        minutes--;
        seconds += 60;
    }
    if (minutes < 0) {
        hours--;
        minutes += 60;
    }
    if (hours < 0) {
        days--;
        hours += 24;
    }
    if (days < 0) {
        // Calcular los días del mes anterior
        const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 0);
        days += lastMonth.getDate();
        months--;
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days, hours, minutes, seconds };
}