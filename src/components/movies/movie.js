imporet styles from "./movie.module.css";

// tangkap props
function Movie(props) {
    // destructing object props
    const { movie } = props;
    return ( < StyledMovie > <
        div className = { styles.movie } >
        <
        img className = { styles.movie__image }
        src = {
            movie.poster || "image.tmdb.org / t / p / ${movie.poster_path} "
        }
        alt = "" /
        >
        <
        h3 className = { styles.movie__title } > { movie.title } < /h3> <
        p className = { styles.movie__date } > { movie.year || movie.release_date } < /p> < /
        div > <
        div className = { styles.movie } >
        <
        StyledMovie / >
    )
}

export default Movie;