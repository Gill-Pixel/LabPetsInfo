const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];

function showInfo() {
    const petNumInput = document.getElementById("petNum");
    const selectedPetInfo = document.querySelector(".selectedPetInfo");

    // user-entered pet number
    const petNum = parseInt(petNumInput.value);

    // Check if the input is a valid number and within the array's index range
    if (!isNaN(petNum) && petNum >= 1 && petNum <= petsData.length) {
        const selectedPet = petsData[petNum - 1]; // 0-based index
        const infoString = `${selectedPet.petName} the ${selectedPet.breed} is ${selectedPet.age} years old. 
        This ${selectedPet.breed.toLowerCase()} weighs ${selectedPet.weightInKilos} kilos.`;

        selectedPetInfo.textContent = infoString;
    } else {
        selectedPetInfo.textContent = "Please enter a valid pet number between 1 and the last animal's number.";
    }
}