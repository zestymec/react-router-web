import React, { useState } from 'react';

function Github() {
  const [githubUser, setGithubUser] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const handleSearch = () => {
    if (!githubUser.trim()) return;
    
    setError(false); // Reset error
    fetch(`https://api.github.com/users/${githubUser}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not Found");
        return res.json();
      })
      .then((result) => {
        setData(result);
        setError(false);
      })
      .catch((err) => {
        setData(null);
        setError(true);
      });
  };

  // Enter key press handler
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-[#e9eaec] text-white p-8 font-sans">
      {/* Search Section */}
      <div className="max-w-md mx-auto mb-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#c9d1d9]">GitHub Profile Finder</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Type GitHub username..."
            className="w-full px-4 py-3 bg-[#161b22] border border-[#30363d] rounded-lg focus:border-[#58a6ff] outline-none text-[#c9d1d9] transition-all"
            value={githubUser}
            onChange={(e) => setGithubUser(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button 
            onClick={handleSearch} 
            className="w-full py-3 bg-[#238636] hover:bg-[#2ea043] font-bold rounded-lg transition-all active:scale-95"
          >
            Search Profile
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="max-w-md mx-auto p-4 bg-red-900/30 border border-red-500 rounded-lg text-center text-red-400">
          ⚠️ User not found. Please check the spelling.
        </div>
      )}

      {/* Profile Card UI */}
      {data && (
        <div className="max-w-2xl mx-auto bg-[#161b22] border border-[#30363d] rounded-2xl p-8 shadow-2xl overflow-hidden animate-fadeIn">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img 
              className='w-32 h-32 rounded-full border-4 border-[#30363d] shadow-lg' 
              src={data.avatar_url} 
              alt="git pfp" 
            />
            
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-extrabold text-[#58a6ff]">{data.name || "No Name Set"}</h1>
              <p className="text-xl text-[#8b949e]">@{data.login}</p>
              {data.company && <p className="mt-2 text-gray-400">🏢 {data.company}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-[#0d1117] p-4 rounded-xl border border-[#30363d] text-center">
              <p className="text-sm text-gray-400">Followers</p>
              <p className="text-xl font-bold text-white">{data.followers}</p>
            </div>
            <div className="bg-[#0d1117] p-4 rounded-xl border border-[#30363d] text-center">
              <p className="text-sm text-gray-400">Following</p>
              <p className="text-xl font-bold text-white">{data.following}</p>
            </div>
            <div className="bg-[#0d1117] p-4 rounded-xl border border-[#30363d] text-center">
              <p className="text-sm text-gray-400">Repositories</p>
              <p className="text-xl font-bold text-pink-500">{data.public_repos}</p>
            </div>
            <div className="bg-[#0d1117] p-4 rounded-xl border border-[#30363d] text-center">
              <p className="text-sm text-gray-400">Last Activity</p>
              <p className="text-sm font-bold text-white">
                {new Date(data.updated_at).toLocaleDateString('en-GB')}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Github;