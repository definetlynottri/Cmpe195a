'use client';

import React, { useState } from 'react';
import MarketCard from '../../components/MarketCard';  
import './market.css';

function MarketPage() {
    const [filter, setFilter] = useState('Trade Volume');  // Default filter

    return (
        <div className="market-page-container">
            {/* Main Grid Layout */}
            <div className="market-page-layout">
                {/* Sidebar Section */}
                <div className="market-sidebar">

                {/* Price Slider Section */}
                <div className="price-slider">
                    <label htmlFor="price-range">Price</label>
                    <input
                        type="range"
                        id="price-range"
                        min="0"
                        max="1000000"
                        step="1000"
                        defaultValue="0"
                        className="slider"
                    />
                    <div className="slider-values">
                        <span>$0</span>
                        <span>∞</span>
                    </div>
                </div>

                    {/* Categories Section */}
                    <h3>Categories</h3>
                    <div className="checkbox-group">
                        <label>
                            <input type="checkbox" />
                            ALL
                        </label>
                        <label>
                            <input type="checkbox" />
                            AI and Big Data
                        </label>
                        <label>
                            <input type="checkbox" />
                            Memes
                        </label>
                        <label>
                            <input type="checkbox" />
                            Solana Ecosystem
                        </label>
                        <label>
                            <input type="checkbox" />
                            Rehypothecated Crypto
                        </label>
                    </div>
                </div>

                {/* Market Cards Section */}
                <div className="market-cards-container">
                    {/* Search and Filter Section */}
                    <div className="market-search-filter">
                        <input type="text" className="market-search" placeholder="Search for a crypto..." />
                        <div className="filter-buttons">
                            <button className={filter === 'Trade Volume' ? 'active' : ''} onClick={() => setFilter('Trade Volume')}>
                                Trade Volume
                            </button>
                            <button className={filter === 'Price Asc' ? 'active' : ''} onClick={() => setFilter('Price Asc')}>
                                Price Asc
                            </button>
                            <button className={filter === 'Price Desc' ? 'active' : ''} onClick={() => setFilter('Price Desc')}>
                                Price Desc
                            </button>
                            <button className={filter === 'Market Cap' ? 'active' : ''} onClick={() => setFilter('Market Cap')}>
                                Market Cap
                            </button>
                        </div>
                    </div>

                    {/* Market Cards */}
                    <div className="market-cards">
                        <MarketCard crypto="BTC" logo="btc.png" amount="$96,737.82" percentage="+0.09%" />
                        <MarketCard crypto="ETH" logo="eth.png" amount="$2,474.55" percentage="+1.12%" />
                        <MarketCard crypto="USDT" logo="usdt.png" amount="$1.00" percentage="0.00%" />
                        <MarketCard crypto="SOL" logo="sol.png" amount="$22.95" percentage="-0.57%" />
                        <MarketCard crypto="XRP" logo="xrp.png" amount="$0.52" percentage="-0.12%" />
                        <MarketCard crypto="DOGE" logo="doge.png" amount="$0.069" percentage="+0.22%" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarketPage;