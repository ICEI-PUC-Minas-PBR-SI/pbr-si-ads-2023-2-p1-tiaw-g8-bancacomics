
class Heroi {
    constructor(id, name, description, modified, resourceURI, urls, thumbnail, comics, stories, events, series) {
        this.id = id || null;
        this.name = name || "";
        this.description = description || "";
        this.modified = modified || null;
        this.resourceURI = resourceURI || "";
        this.urls = urls || [];
        this.thumbnail = thumbnail || {};
        this.comics = comics || {};
        this.stories = stories || {};
        this.events = events || {};
        this.series = series || {};
    }
}


