import getRandom from "./getRandom";

const generateRotation = (names: Array<string>) => {
    const rotation = {
        firstWeek: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        },
        secondWeek: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        }
    }

    // Lazy implementation - find a spot in the first week and duplicate it for the second week ¯\_(ツ)_/¯
    names.forEach((name: string) => {
        let needToFindPlace = true;

        while (needToFindPlace) {
            const randomDay = getRandom(1, 5);

            if (rotation.firstWeek[randomDay].length < 2 && rotation.secondWeek[randomDay].length < 2) {
                rotation.firstWeek[randomDay].push(name);
                rotation.secondWeek[randomDay].push(name);

                needToFindPlace = false;
            } 
        }
    });

    return rotation;
}

export default generateRotation;
