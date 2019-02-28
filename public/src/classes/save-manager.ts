export abstract class SaveManager {
    public static getSaveNames(): any { // return all named instrument saves
        const waves = JSON.parse(localStorage.getItem('waves'));
        if (waves) {
            waves.forEach( (wave, idx) => {
                waves[idx] = wave.name;
            });
            return waves;
        } else {
            return 0;
        }
    }

    public static retrieveAllSaves() {
        return JSON.parse(localStorage.getItem('waves'));
    }

    public static retrieveSave(saveName) {
        const waves = JSON.parse(localStorage.getItem('waves'));
        if (waves) {
            return waves.find(x => x.name === saveName);
        } else {
            return 0;
        }
    }

    public static save(saveName, waves) {
        waves = {name: saveName,  waves: waves};
        let saves = this.retrieveAllSaves();
        if (!saves) {
            saves = [];
        }

        const saveIndex = saves.findIndex(x => x.name === saveName);
        if (saveIndex > -1) {
            saves[saveIndex] = waves;
        } else {
            saves.push(waves);
        }

        localStorage.setItem('waves', JSON.stringify(saves));
    }
}
