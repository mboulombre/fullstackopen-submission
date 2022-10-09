const totalLikes = (likes) => {
    let valeurInitiale = 0;
    let result;
    if(likes){
         result = likes.reduce((acc, value) => {
            return acc + value.likes
        }, valeurInitiale)
    }
    return result;
}

module.exports = totalLikes;