class ShowsController {
    filterShows(req, res, next) {

        let shows = req.body.payload;

        if(!shows){
            res.json({text: "No valid payload was detected"});
        }

        const filtered= shows.filter(show => show.drm && show.episodeCount > 0)
            .map(show => ({ image: show.image.showImage, slug: show.slug, title: show.title }))

        res.json({response: filtered});
    }
}
module.exports = new ShowsController();

