class Serie {
    constructor(id, title, description, startYear, endYear, rating, modified, thumbnail, comics, stories, events, characters, creators) {
        this.id = id || null;
        this.title = title || "";
        this.description = description || "";
        this.startYear = startYear || null;
        this.endYear = endYear || null;
        this.rating = rating || "";
        this.modified = modified || null;
        this.thumbnail = thumbnail || {};
        this.comics = comics || {};
        this.stories = stories || {};
        this.events = events || {};
        this.characters = characters || {};
        this.creators = creators || {};
    }
}
