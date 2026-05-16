export default function MovieShowcase() {
  const movies = [
    // Latest movies first
    {
      title: 'Inception',
      year: '2010',
      genre: 'Sci‑Fi',
      rating: '8.8',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'The Dark Knight',
      year: '2008',
      genre: 'Action',
      rating: '9.0',
      image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Interstellar',
      year: '2014',
      genre: 'Adventure',
      rating: '8.7',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Avatar',
      year: '2009',
      genre: 'Fantasy',
      rating: '7.9',
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Joker',
      year: '2019',
      genre: 'Drama',
      rating: '8.4',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Spider‑Man: No Way Home',
      year: '2021',
      genre: 'Superhero',
      rating: '8.2',
      image: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Joker',
      year: '2019',
      genre: 'Drama',
      rating: '8.4',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Interstellar',
      year: '2014',
      genre: 'Adventure',
      rating: '8.7',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Inception',
      year: '2010',
      genre: 'Sci‑Fi',
      rating: '8.8',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Avatar',
      year: '2009',
      genre: 'Fantasy',
      rating: '7.9',
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'The Dark Knight',
      year: '2008',
      genre: 'Action',
      rating: '9.0',
      image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"></div>
      <header className="bg-black/90 border-b border-zinc-900 p-4 shadow-2xl backdrop-blur-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-600 flex items-center justify-center font-black text-xl">
              I
            </div>
            <h1 className="text-3xl font-extrabold tracking-wide">IanMax</h1>
          </div>
          <div className="flex items-center gap-3">
            <input
            type="text"
              placeholder="Search movies, shows, anime..."
              className="bg-zinc-900 border border-zinc-700 rounded-2xl px-4 py-2 outline-none focus:border-red-500"
            />
            <button className="bg-red-600 text-white px-5 py-2 rounded-2xl font-semibold hover:scale-105 transition">
              Browse
            </button>
          </div>
        </div>
      </header>

      <section className="relative h-[560px] flex items-end overflow-hidden rounded-b-[50px] border-b border-zinc-800">
        <img
          src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1600&auto=format&fit=crop"
          alt="Cinema"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 px-8 pb-14 max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Unlimited Entertainment Everywhere
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-6">
            Stream trending blockbusters, action movies, anime, and fan favorites with a sleek modern cinema experience inspired by popular movie streaming apps.
          </p>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl text-lg font-semibold transition">
            Watch Now
          </button>
        </div>
      </section>

      <main className="max-w-[1600px] mx-auto px-4 md:px-6 py-10">
        <section className="mb-14">
          <div className="relative rounded-[45px] overflow-hidden border border-zinc-800 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1800&auto=format&fit=crop"
              alt="Featured"
              className="w-full h-[650px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-8 md:p-14 max-w-3xl">
              <span className="bg-red-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                #1 Trending Worldwide
              </span>

              <h1 className="text-6xl md:text-7xl font-black mt-6 mb-5 leading-none">
                IanMax Originals
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Watch blockbuster movies, exclusive originals, anime, TV shows, sports, podcasts, and premium entertainment in one cinematic platform.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-2xl font-bold transition text-lg">
                  ▶ Play Now
                </button>

                <button className="bg-zinc-800/80 backdrop-blur-xl hover:bg-zinc-700 px-8 py-4 rounded-2xl font-bold transition text-lg border border-zinc-700">
                  + My List
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl md:text-4xl font-black">Continue Watching</h2>
            <button className="text-red-500 font-semibold hover:text-red-400 transition">
              View All
            </button>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="min-w-[320px] rounded-[30px] overflow-hidden border border-zinc-800 bg-zinc-900 hover:scale-[1.03] transition relative group"
              >
                <div className="h-44 bg-black flex items-center justify-center text-2xl font-black">
                  Continue #{index + 1}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <div className="w-full bg-zinc-700 rounded-full h-2 overflow-hidden mb-3">
                    <div className="bg-red-600 h-2 rounded-full w-[65%]"></div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span>65% Watched</span>
                    <span className="text-gray-400">HD</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              'Action',
              'Comedy',
              'Horror',
              'Sci‑Fi',
              'Adventure',
              'Romance',
              'Anime',
              'Crime',
              'Documentary',
              'Thriller',
              'Kids',
              'Fantasy'
            ].map((category, index) => (
              <button
                key={index}
                className="bg-zinc-900 hover:bg-red-600 px-5 py-3 rounded-2xl border border-zinc-800 transition"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="bg-zinc-900 rounded-[40px] p-8 border border-zinc-800">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-3">
                  Massive Streaming Library
                </p>
                <h2 className="text-5xl font-black mb-4">100,000+ Movies & TV Shows</h2>
                <p className="text-gray-400 max-w-2xl">
                  Explore one of the largest entertainment collections with trending movies, classic films, TV shows, anime, documentaries, sports, and new releases added daily.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                <div className="bg-black rounded-3xl p-5 border border-zinc-800">
                  <p className="text-gray-400 text-sm">Movies</p>
                  <h3 className="text-3xl font-bold mt-2">85K+</h3>
                </div>

                <div className="bg-black rounded-3xl p-5 border border-zinc-800">
                  <p className="text-gray-400 text-sm">TV Shows</p>
                  <h3 className="text-3xl font-bold mt-2">15K+</h3>
                </div>

                <div className="bg-black rounded-3xl p-5 border border-zinc-800">
                  <p className="text-gray-400 text-sm">Daily Uploads</p>
                  <h3 className="text-3xl font-bold mt-2">500+</h3>
                </div>

                <div className="bg-black rounded-3xl p-5 border border-zinc-800">
                  <p className="text-gray-400 text-sm">Countries</p>
                  <h3 className="text-3xl font-bold mt-2">120+</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-2">Recently Added</p>
              <h2 className="text-3xl font-bold">New Uploads</h2>
            </div>

            <button className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-2xl font-semibold transition">
              View Library
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-105 transition"
              >
                <div className="h-56 bg-black flex items-center justify-center text-center p-4 font-bold text-lg">
                  New Release #{index + 1}
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-green-400">HD Available</span>
                    <span className="text-xs text-gray-400">2026</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-red-600 hover:bg-red-700 py-2 rounded-xl text-sm font-semibold transition">
                      Watch Now
                    </button>

                    <button className="bg-green-600 hover:bg-green-700 py-2 rounded-xl text-sm font-semibold transition">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-[40px] p-8 border border-zinc-700 mb-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="max-w-2xl">
              <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-3">
                Continue Watching
              </p>
              <h2 className="text-4xl font-black mb-4">Avengers: Endgame</h2>
              <p className="text-gray-400 mb-6">
                Resume your movie from where you stopped streaming.
              </p>

              <div className="w-full bg-zinc-700 rounded-full h-3 mb-3 overflow-hidden">
                <div className="bg-red-600 h-3 rounded-full w-[72%]"></div>
              </div>

              <p className="text-sm text-gray-400 mb-6">72% completed</p>

              <div className="flex flex-wrap gap-3">
                <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-semibold transition">
                  Resume
                </button>
                <button className="bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-2xl font-semibold transition">
                  Add To My List
                </button>
              </div>
            </div>

            <div className="bg-black rounded-[30px] p-4 border border-zinc-700 w-full max-w-md">
              <div className="aspect-video rounded-2xl bg-zinc-900 flex items-center justify-center text-5xl">
                ▶
              </div>

              <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
                <span>1080p HD</span>
                <span>Subtitles: EN</span>
                <span>Ultra Sound</span>
              </div>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-zinc-900 rounded-3xl p-5 border border-zinc-800">
            <p className="text-gray-400 text-sm">Movies</p>
            <h3 className="text-3xl font-bold mt-2">12K+</h3>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-5 border border-zinc-800">
            <p className="text-gray-400 text-sm">Users Online</p>
            <h3 className="text-3xl font-bold mt-2">89K</h3>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-5 border border-zinc-800">
            <p className="text-gray-400 text-sm">TV Series</p>
            <h3 className="text-3xl font-bold mt-2">4K+</h3>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-5 border border-zinc-800">
            <p className="text-gray-400 text-sm">HD Streaming</p>
            <h3 className="text-3xl font-bold mt-2">Ultra 4K</h3>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mb-8">
          {['All', 'Action', 'Sci‑Fi', 'Drama', 'Fantasy', 'Adventure', 'Superhero'].map((genre) => (
            <button
              key={genre}
              className="bg-zinc-900 hover:bg-red-600 transition px-5 py-2 rounded-2xl border border-zinc-700"
            >
              {genre}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
              <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-2">
                Trending Now
              </p>
              <h3 className="text-4xl font-black tracking-tight">Popular Movies</h3>
            </div>

          <input
            type="text"
            placeholder="Search movies..."
            className="bg-black/70 border border-zinc-700 rounded-2xl px-5 py-3 outline-none focus:border-red-500 backdrop-blur-xl w-full md:w-[320px]"
          />
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="min-w-[260px] bg-gradient-to-b from-zinc-900 to-black rounded-[30px] overflow-hidden shadow-2xl hover:scale-[1.05] transition duration-300 border border-zinc-800 hover:border-red-500/70 snap-start relative group"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-5 space-y-3 backdrop-blur-xl bg-black/40">
                <div className="flex items-center gap-2 text-xs text-green-400 font-semibold">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Streaming Now
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-bold">{movie.title}</h4>
                  <span className="bg-red-600 text-sm px-3 py-1 rounded-full">
                    ⭐ {movie.rating}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <span>{movie.genre}</span>
                  <span>{movie.year}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-3">
                  <button className="bg-red-600 hover:bg-red-700 py-3 rounded-2xl font-semibold transition text-sm">
                    Watch
                  </button>

                  <button
                    onClick={() => navigator.clipboard.writeText(`${movie.title} (${movie.year}) - ${movie.genre} ⭐ ${movie.rating}`)}
                    className="bg-zinc-800 hover:bg-zinc-700 py-3 rounded-2xl font-semibold transition text-sm"
                  >
                    Copy
                  </button>

                  <button
                    onClick={() => alert(`Downloading ${movie.title}...`)}
                    className="bg-green-600 hover:bg-green-700 py-3 rounded-2xl font-semibold transition text-sm"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-zinc-900 rounded-[40px] p-8 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-bold mb-2">Create Your Watchlist</h3>
            <p className="text-gray-400">
              Save favorite movies and continue watching anytime.
            </p>
          </div>

          <button className="bg-red-600 hover:bg-red-700 px-6 py-4 rounded-2xl font-semibold transition">
            Create Watchlist
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-2">Top 10 in Uganda</p>
            <h2 className="text-3xl font-bold">Trending This Week</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[1,2,3,4,5].map((num) => (
            <div key={num} className="relative bg-zinc-900 rounded-3xl h-56 border border-zinc-800 overflow-hidden flex items-end p-4 hover:scale-105 transition">
              <span className="absolute top-3 left-3 text-5xl font-black text-red-600 opacity-80">
                {num}
              </span>
              <div>
                <h3 className="font-bold">Top Movie {num}</h3>
                <p className="text-sm text-gray-400">Trending Worldwide</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-zinc-900 rounded-[40px] p-8 border border-zinc-800 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-2">Music Streaming</p>
              <h2 className="text-4xl font-bold">Top Music & Albums</h2>
            </div>

            <button className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-2xl font-semibold transition">
              Open Music
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Starboy',
              'After Hours',
              'Views',
              'Justice',
              'UTOPIA',
              'Dawn FM'
            ].map((album, index) => (
              <div
                key={index}
                className="bg-black rounded-3xl overflow-hidden border border-zinc-800 hover:scale-105 transition"
              >
                <div className="aspect-square bg-zinc-800 flex items-center justify-center text-center p-4 font-bold text-lg">
                  {album}
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-3 text-sm text-gray-400">
                    <span>Music</span>
                    <span>HD Audio</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-red-600 hover:bg-red-700 py-2 rounded-xl text-sm font-semibold transition">
                      Play
                    </button>

                    <button className="bg-green-600 hover:bg-green-700 py-2 rounded-xl text-sm font-semibold transition">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 md:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">Popular TV Shows</h3>
                <p className="text-gray-400">Trending series and fan favorites.</p>
              </div>

              <button className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-2xl font-semibold transition">
                View All
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'Breaking Bad',
                'Stranger Things',
                'Money Heist',
                'The Boys',
                'Wednesday',
                'Game of Thrones',
                'Loki',
                'The Witcher',
                'Peaky Blinders',
                'Squid Game',
                'The Last of Us',
                'Dark'
              ].map((show, index) => (
                <div
                  key={index}
                  className="bg-black rounded-3xl border border-zinc-800 overflow-hidden hover:scale-105 transition"
                >
                  <div className="h-44 bg-zinc-800 flex items-center justify-center text-center p-4 font-bold text-lg">
                    {show}
                  </div>

                  <div className="p-4">
                    <p className="text-sm text-gray-400 mb-3">TV Series • HD</p>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-red-600 hover:bg-red-700 py-2 rounded-xl text-sm font-semibold transition">
                        Watch
                      </button>

                      <button className="flex-1 bg-zinc-800 hover:bg-zinc-700 py-2 rounded-xl text-sm font-semibold transition">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Anime</h3>
            <p className="text-gray-400">Stream trending anime and animated adventures.</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Live Sports</h3>
            <p className="text-gray-400">Watch sports events and live entertainment.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-zinc-900 rounded-[40px] p-8 border border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl font-bold mb-3">Create Your Profile</h3>
              <p className="text-gray-400">
                Personalized recommendations, watch history, downloads, and saved movies.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-semibold transition">
                Login
              </button>

              <button className="bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-2xl font-semibold transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-zinc-900 rounded-[40px] p-8 border border-zinc-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-3">
                Offline Streaming
              </p>
              <h2 className="text-4xl font-black mb-4">Download Any Movie or TV Show</h2>
              <p className="text-gray-400 max-w-2xl">
                Save movies and TV shows directly to your device for offline viewing with multiple quality options and ultra-fast downloads.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 w-full max-w-md">
              <div className="bg-black rounded-3xl p-5 border border-zinc-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold">Avengers Endgame</span>
                  <span className="text-green-400 text-sm">Downloaded</span>
                </div>

                <div className="w-full bg-zinc-700 rounded-full h-2 overflow-hidden">
                  <div className="bg-green-500 h-2 rounded-full w-full"></div>
                </div>
              </div>

              <div className="bg-black rounded-3xl p-5 border border-zinc-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold">Stranger Things</span>
                  <span className="text-yellow-400 text-sm">Downloading...</span>
                </div>

                <div className="w-full bg-zinc-700 rounded-full h-2 overflow-hidden">
                  <div className="bg-yellow-500 h-2 rounded-full w-[68%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {['480p', '720p HD', '1080p Full HD', '4K Ultra HD'].map((quality, index) => (
              <button
                key={index}
                className="bg-zinc-800 hover:bg-red-600 transition px-5 py-3 rounded-2xl border border-zinc-700"
              >
                {quality}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-zinc-900 rounded-[40px] p-8 border border-zinc-800">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-2">AI Features</p>
                <h2 className="text-3xl font-bold">Smart Recommendations</h2>
              </div>

              <span className="bg-green-600 px-4 py-2 rounded-2xl text-sm font-semibold">
                AI Powered
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {['Action Packed', 'Funny', 'Scary', 'Romantic'].map((mood, index) => (
                <button
                  key={index}
                  className="bg-black hover:bg-red-600 transition rounded-2xl p-5 border border-zinc-800 text-left font-semibold"
                >
                  {mood}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-[40px] p-8 border border-zinc-800">
            <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-2">Live Activity</p>
            <h2 className="text-3xl font-bold mb-6">Watch Party & Community</h2>

            <div className="space-y-4">
              <div className="bg-black rounded-2xl p-4 border border-zinc-800 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Global Watch Party</h3>
                  <p className="text-sm text-gray-400">12,450 users watching live</p>
                </div>
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl transition">
                  Join
                </button>
              </div>

              <div className="bg-black rounded-2xl p-4 border border-zinc-800">
                <p className="text-sm text-gray-400 mb-2">Latest Review</p>
                <p>
                  “One of the best streaming platforms for movies and TV shows.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-2">Featured Collections</p>
            <h2 className="text-3xl font-bold">Because You Watched Action</h2>
          </div>

          <button className="bg-zinc-900 hover:bg-zinc-800 px-5 py-3 rounded-2xl border border-zinc-700 transition">
            Explore More
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="min-w-[220px] bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-105 transition"
            >
              <div className="h-72 bg-black flex items-center justify-center text-center p-4 font-bold text-xl">
                Featured Movie {index + 1}
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-yellow-400">⭐ 9.{index}</span>
                  <span className="text-gray-400 text-sm">HD</span>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-2xl font-semibold transition">
                  Play
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-gradient-to-r from-red-700 to-black rounded-[40px] p-8 border border-red-900">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm mb-3 text-red-200">
                Premium Streaming
              </p>
              <h2 className="text-5xl font-black mb-4">IanMax Premium</h2>
              <p className="text-red-100 max-w-2xl">
                Unlock ad-free streaming, 4K Ultra HD, offline downloads, exclusive content, and unlimited devices.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
              <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-5 border border-red-800">
                <h3 className="font-bold mb-2">4K Ultra HD</h3>
                <p className="text-sm text-red-100">Crystal clear streaming quality.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-5 border border-red-800">
                <h3 className="font-bold mb-2">Unlimited Downloads</h3>
                <p className="text-sm text-red-100">Watch offline anytime.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-5 border border-red-800">
                <h3 className="font-bold mb-2">Multi Device</h3>
                <p className="text-sm text-red-100">Phone, TV, tablet, and PC.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-5 border border-red-800">
                <h3 className="font-bold mb-2">No Ads</h3>
                <p className="text-sm text-red-100">Smooth uninterrupted streaming.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-zinc-900 rounded-[40px] p-8 border border-zinc-800">
            <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-2">Podcasts & Radio</p>
            <h2 className="text-3xl font-bold mb-6">Audio Entertainment</h2>

            <div className="space-y-4">
              {['Tech Talks', 'Morning Radio', 'Gaming Podcast'].map((podcast, index) => (
                <div key={index} className="bg-black rounded-2xl p-4 border border-zinc-800 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{podcast}</h3>
                    <p className="text-sm text-gray-400">Live Audio Streaming</p>
                  </div>

                  <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl transition">
                    Play
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-[40px] p-8 border border-zinc-800">
            <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-2">Gaming & Esports</p>
            <h2 className="text-3xl font-bold mb-6">Live Gaming</h2>

            <div className="grid grid-cols-2 gap-4">
              {['Esports', 'Live Streams', 'Gaming News', 'Tournaments'].map((item, index) => (
                <div key={index} className="bg-black rounded-2xl p-5 border border-zinc-800 hover:scale-105 transition">
                  <h3 className="font-semibold mb-2">{item}</h3>
                  <p className="text-sm text-gray-400">Watch live now</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-[40px] p-8 border border-zinc-800">
            <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-2">Smart Features</p>
            <h2 className="text-3xl font-bold mb-6">AI Assistant</h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="What should I watch today?"
                className="w-full bg-black border border-zinc-700 rounded-2xl px-4 py-3 outline-none focus:border-red-500"
              />

              <div className="grid grid-cols-2 gap-3">
                {['Voice Search', 'Mood Scanner', 'AI Search', 'Smart Sync'].map((feature, index) => (
                  <button
                    key={index}
                    className="bg-black hover:bg-red-600 transition rounded-2xl p-4 border border-zinc-800 text-sm font-semibold"
                  >
                    {feature}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-zinc-900 rounded-[40px] p-8 border border-zinc-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
            <div>
              <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-2">Community</p>
              <h2 className="text-4xl font-bold">Social Streaming</h2>
            </div>

            <div className="flex gap-3 flex-wrap">
              {['Friends', 'Followers', 'Watch Parties', 'Live Chat'].map((social, index) => (
                <button
                  key={index}
                  className="bg-black hover:bg-red-600 transition px-5 py-3 rounded-2xl border border-zinc-800"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Create Playlist', 'Share Movies', 'Upload Videos', 'Creator Channels'].map((feature, index) => (
              <div key={index} className="bg-black rounded-3xl p-6 border border-zinc-800 hover:scale-105 transition">
                <h3 className="text-xl font-bold mb-3">{feature}</h3>
                <p className="text-gray-400 text-sm">
                  Interactive entertainment and creator tools.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-zinc-900 to-black rounded-[40px] p-8 border border-zinc-800">
            <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-2">Security & Access</p>
            <h2 className="text-4xl font-bold mb-6">Secure Streaming</h2>

            <div className="grid grid-cols-2 gap-4">
              {['Face Unlock', 'Fingerprint Login', 'Cloud Sync', 'Parental Controls'].map((security, index) => (
                <div key={index} className="bg-black/50 rounded-2xl p-5 border border-zinc-800">
                  <h3 className="font-semibold">{security}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-700 to-black rounded-[40px] p-8 border border-red-900">
            <p className="uppercase tracking-[0.3em] text-sm mb-2 text-red-200">Admin Dashboard</p>
            <h2 className="text-4xl font-bold mb-6">Platform Management</h2>

            <div className="grid grid-cols-2 gap-4">
              {['Analytics', 'User Control', 'Billing', 'Content Moderation'].map((admin, index) => (
                <div key={index} className="bg-black/40 rounded-2xl p-5 border border-red-800">
                  <h3 className="font-semibold">{admin}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 mt-12 py-10 text-center text-gray-500 backdrop-blur-xl bg-black/40">
        <div className="flex justify-center gap-4 mb-4 flex-wrap">
          {['Movies', 'TV Shows', 'Music', 'Sports', 'Anime', 'Premium'].map((item, index) => (
            <button
              key={index}
              className="bg-zinc-900 hover:bg-red-600 transition px-5 py-2 rounded-2xl border border-zinc-800"
            >
              {item}
            </button>
          ))}
        </div>
        © 2026 IanMax — Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
