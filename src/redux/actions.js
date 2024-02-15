export   const addCar = (newCar) => {
    return {
        type: 'ADD_CAR',
        value: newCar,
    };
};

export const removeCar = carId => ({
    type: 'REMOVE_CAR',
    id: carId,
});