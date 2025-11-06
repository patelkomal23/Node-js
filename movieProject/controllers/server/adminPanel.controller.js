import Movie from "../../models/movie.model.js";

export const deshboard = (req,res)=>{
    return res.render('./server/index.ejs');
}

export const addMoviePage = (req,res)=>{
    return res.render('./server/pages/addMovie.ejs');
}

export const addMovie = async(req,res)=>{
    try {
        req.body.image = req.file.path;      
        let data = await Movie.create(req.body);
        console.log(data);        
        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        return res.redirect(req.get('Referrer') || '/');
    }
}