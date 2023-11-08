class Comic {
    constructor(id, digitalId, title, issueNumber, variantDescription, description, modified, isbn, upc, diamondCode, ean, issn, format, pageCount, textObjects, resourceURI, urls, series, variants, collections, collectedIssues, dates, prices, thumbnail, images, creators, characters, stories, events) {
        this.id = id || 0;
        this.digitalId = digitalId || 0;
        this.title = title || "";
        this.issueNumber = issueNumber || 0;
        this.variantDescription = variantDescription || "";
        this.description = description || "";
        this.modified = modified || null;
        this.isbn = isbn || "";
        this.upc = upc || "";
        this.diamondCode = diamondCode || "";
        this.ean = ean || "";
        this.issn = issn || "";
        this.format = format || "";
        this.pageCount = pageCount || 0;
        this.textObjects = textObjects || [];
        this.resourceURI = resourceURI || "";
        this.urls = urls || [];
        this.series = series || {};
        this.variants = variants || [];
        this.collections = collections || [];
        this.collectedIssues = collectedIssues || [];
        this.dates = dates || [];
        this.prices = prices || [];
        this.thumbnail = thumbnail || {};
        this.images = images || [];
        this.creators = creators || {};
        this.characters = characters || {};
        this.stories = stories || {};
        this.events = events || {};
    }
}