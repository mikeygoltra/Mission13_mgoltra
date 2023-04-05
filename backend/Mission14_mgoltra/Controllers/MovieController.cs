using Microsoft.AspNetCore.Mvc;
using Mission14_mgoltra.Models;

namespace Mission14_mgoltra.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MoviesDbContext context;

        public MovieController(MoviesDbContext temp) { 

            context = temp;

        }

        public IEnumerable<Movie> Get()
        {
            var x = context.Movies
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title)
                .ToArray();

            return x;
        }
    }
}
