import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';

const CandidateSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const [searchResults, setSearchResults] = useState<{ name: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResults = async () => {
      if (searchTerm) {
        setLoading(true);
        setError('');
        try {
          const results = await searchGithub();
          setSearchResults(results);
        } catch (err) {
          setError('Failed to fetch results');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchResults();
  }, [searchTerm]);

  return (
    <div>
      <h1>CandidateSearch</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for a candidate"
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateSearch;
