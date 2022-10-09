const favoriteBlog = (Blogs) => {
    let oneElement;
    if(Blogs){
       let  result = Math.max(...Blogs.map(item => item.likes));
         oneElement = Blogs.find(data => data.likes === result)
    }
    return oneElement;
}

module.exports = favoriteBlog;