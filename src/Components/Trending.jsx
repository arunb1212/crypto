import React, { useContext, useEffect, useState } from 'react';
import { CoinCon } from '../../Context/CoinContext';
import { Link } from 'react-router';

const Trending = () => {
    const { coin, curr } = useContext(CoinCon);
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        if (coin.length > 0) {
            // simulating trending by taking top 4
            setTrending(coin.slice(0, 4));
        }
    }, [coin]);

    return (
        <div className="w-full max-w-6xl mx-auto mt-20 px-4">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Trending Coins
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {trending.map((item) => (
                    <Link to={`/coins/${item.id}`} key={item.id} className="block">
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="font-bold text-lg text-white">{item.symbol.toUpperCase()}</h3>
                                    <span className="text-xs text-slate-400">{item.name}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-end">
                                <span className="text-xl font-mono text-white">{curr.symbol}{item.current_price.toLocaleString()}</span>
                                <span className={`text-sm font-bold ${item.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                    {item.price_change_percentage_24h > 0 ? '+' : ''}{item.price_change_percentage_24h?.toFixed(2)}%
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Trending;
