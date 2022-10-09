const favoriteBlog = require("../utils/favoriteBlog");
const listBlog = require("./blogdb");
describe('favoriteBlog', () => {
        test('renvoi l\'element qui à plus de like', () => {
            const element = {
                _id: "5a422b3a1b54a676234d17f9",
                title: "Canonical string reduction",
                author: "Edsger W. Dijkstra",
                url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
                likes: 12,
                __v: 0
              };
            expect(favoriteBlog(listBlog)).toEqual(element)
        })
        
})
