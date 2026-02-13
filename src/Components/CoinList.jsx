import React, { useContext } from 'react';
import { Link } from 'react-router';
import { CoinCon } from '../../Context/CoinContext';

const CoinList = ({ displayCoin }) => {
  const { curr } = useContext(CoinCon);

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 px-4">
      <div className="overflow-x-auto shadow-2xl rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
        <table className="w-full text-left text-gray-300">
          <thead className="text-xs uppercase bg-slate-700/50 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-4 font-semibold tracking-wider">#</th>
              <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Coin</th>
              <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Price</th>
              <th scope="col" className="px-6 py-4 font-semibold tracking-wider">24h Change</th>
              <th scope="col" className="px-6 py-4 font-semibold tracking-wider text-right">Market Cap</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50">
            {displayCoin.length === 0 ? (
               <tr>
                <td colSpan="5" className="px-6 py-8 text-center text-lg text-gray-500">
                  No coins found matching your search.
                </td>
              </tr>
            ) : (
              displayCoin.slice(0, 10).map((item) => (
                <tr key={item.id} className="hover:bg-slate-700/30 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-400">
                    {item.market_cap_rank}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/coins/${item.id}`} className="flex items-center gap-3 hover:text-purple-400 transition-colors">
                      <img className="w-8 h-8 rounded-full" src={item.image} alt={item.name} />
                      <div className="flex flex-col">
                        <span className="font-bold text-white text-base">{item.name}</span>
                        <span className="text-xs text-gray-500">{item.symbol.toUpperCase()}</span>
                      </div>
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-white">
                    {curr.symbol}{item.current_price.toLocaleString()}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap font-mono font-medium ${item.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {item.price_change_percentage_24h > 0 ? '+' : ''}{item.price_change_percentage_24h?.toFixed(2)}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-mono text-gray-300">
                    {curr.symbol}{item.market_cap.toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinList;
