import React, { useState } from 'react';

function Github() {
  const [githubUser, setGithubUser] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const handleSearch = () => {
    if (!githubUser.trim()) return;
    
    setError(false); 
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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-1/2 bg-[#e9eaec] p-4 md:p-8 font-sans">
      <div className="max-w-md mx-auto mb-6"> 
        <h2 className="text-2xl font-bold text-center mb-4 text-[#161b22]">GitHub Profile Finder</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Type GitHub username..."
            className="w-full px-4 py-3 bg-[#dce1e7] border border-[#9ca4ad] rounded-lg focus:border-[#ff5858] outline-none text-[#0b0c0c] transition-all"
            value={githubUser}
            onChange={(e) => setGithubUser(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button 
            onClick={handleSearch} 
            className="w-full py-2.5 bg-[#15cc3a] hover:bg-[#2ea043] text-white font-bold rounded-lg transition-all active:scale-95"
          >
            Search Profile
          </button>
        </div>
      </div>

      {error && (
        <div className="max-w-md mx-auto p-3 bg-red-900/30 border border-red-500 rounded-lg text-center text-red-400 text-sm">
          ⚠️ User not found. Please check the spelling.
        </div>
      )}

      {data && (
        <div className="max-w-2xl mx-auto bg-[#161b22] border border-[#30363d] rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden animate-fadeIn text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img 
              className='w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-[#30363d] shadow-lg' 
              src={data.avatar_url} 
              alt="git pfp" 
            />
            
            <div className="text-center md:text-left flex-1">
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#58a6ff]">{data.name || "No Name Set"}</h1>
              <p className="text-lg md:text-xl text-[#8b949e]">@{data.login}</p>
              {data.company && <p className="mt-1 text-gray-400 text-sm md:text-base">🏢 {data.company}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6"> 
            <div className="bg-[#0d1117] p-3 rounded-xl border border-[#30363d] text-center">
              <p className="text-xs text-gray-400">Followers</p>
              <p className="text-lg font-bold">{data.followers}</p>
            </div>
            <div className="bg-[#0d1117] p-3 rounded-xl border border-[#30363d] text-center">
              <p className="text-xs text-gray-400">Following</p>
              <p className="text-lg font-bold">{data.following}</p>
            </div>
            <div className="bg-[#0d1117] p-3 rounded-xl border border-[#30363d] text-center">
              <p className="text-xs text-gray-400">Repositories</p>
              <p className="text-lg font-bold text-pink-500">{data.public_repos}</p>
            </div>
            <div className="bg-[#0d1117] p-3 rounded-xl border border-[#30363d] text-center">
              <p className="text-xs text-gray-400">Last Activity</p>
              <p className="text-xs font-bold">
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

const githubinfoloader = async ()=> {
 const response = await fetch(`https://api.github.com/users/${githubUser}`)
 return response.json()
}