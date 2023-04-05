using Microsoft.EntityFrameworkCore;

namespace Mission14_mgoltra.Models
{
    public class MoviesDbContext : DbContext
    {

        public MoviesDbContext (DbContextOptions<MoviesDbContext> options) : base(options) 
        {

        }
        
        public DbSet<Movie> Movies { get; set; }

    }
}
