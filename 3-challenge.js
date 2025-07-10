let Image = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

let images = {
    list: [],
    contains: function(title) {
        let retVal = false;
        for(image of this.list) {
            if(image.title === title) {
                retVal = true;
                break;
            }
        }
        return retVal;
    },
    add: function(title, artist, date) {
        if(!this.contains(title)) {
            this.list.push(new Image(title, artist, date));
        }
    },
    show: function() {
        if (this.list.length === 0) {
            console.log("No images.");
            return;
        }
        for (let image of this.list) {
            console.log(`${image.title} by ${image.artist} (${image.date})`);
        }
    },
    clear: function() {
        this.list = [];
    }
}

images.add("Mona Lisa", "Leonardo da Vinci", "1503");
images.add("The Last Supper", "Leonardo da Vinci", "1495");
images.add("The Starry Night", "Vincent van Gogh", "1889");
images.add("Mona Lisa", "Leonardo da Vinci", "1503");
images.show();
images.clear();
images.show();