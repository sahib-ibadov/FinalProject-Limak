import React, { useState } from 'react';
import './KALKULYATOR.css';

const KALKULYATOR = () => {
    const [weight, setWeight] = useState('');
    const [count, setCount] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [region, setRegion] = useState('1');
    const [branch, setBranch] = useState('1');
    const [packaging, setPackaging] = useState('1');
    const [totalAmount, setTotalAmount] = useState({
        AZN: 0,
        USD: 0
    });

    const calculateTotal = () => {
        const weightValue = parseFloat(weight);
        const countValue = parseInt(count);
        const lengthValue = parseFloat(length);
        const widthValue = parseFloat(width);
        const heightValue = parseFloat(height);

        const totalAZN = (weightValue + countValue + lengthValue + widthValue + heightValue).toFixed(2);
        const totalUSD = (totalAZN * 0.59).toFixed(2);

        setTotalAmount({ AZN: totalAZN, USD: totalUSD });
    };

    return (
        <div className='Kal'>
            <form className="form-calc snipcss-CzmJt">
                <div className="row">
                    <div className="col-6">
                        <select className="custom-select" value={region} onChange={(e) => setRegion(e.target.value)}>
                            <option value="1">Türkiyə</option>
                            <option value="2">Amerika</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <select className="custom-select" value={branch} onChange={(e) => setBranch(e.target.value)}>
                            <option value="1">Bakı - İçərişəhər</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Çəki" step="any" />
                    </div>
                    <div className="col-6">
                        <input type="number" value={count} onChange={(e) => setCount(e.target.value)} placeholder="Bağlama sayı" min="1" />
                    </div>
                    <div className="col-6">
                        <input type="number" value={length} onChange={(e) => setLength(e.target.value)} placeholder="En" step="any" />
                    </div>
                    <div className="col-6">
                        <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="Uzunluq" step="any" />
                    </div>
                    <div className="col-6">
                        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Hündürlük" step="any" />
                    </div>
                    <div className="col-6">
                        <select className="custom-select" value={packaging} onChange={(e) => setPackaging(e.target.value)}>
                            <option value="1">Standart</option>
                            <option value="2">Maye</option>
                        </select>
                    </div>
                </div>

                <div className="col-sm-6 col-12">
                    <button type="button" className="btn form-calc-submit btn-submit btn-primary btn-block" onClick={calculateTotal}>
                        Hesabla
                    </button>
                </div>

                <div className="col-6">
                    <div className="total">
                        <div className="total-label">
                            Cəmi:
                        </div>
                        <div className="total-price">
                            <span className="all_count">
                                AZN {totalAmount.AZN} | ${totalAmount.USD}
                            </span>
                        </div>
                    </div>
                </div>
            </form>

            
        </div>
    );
}

export default KALKULYATOR;
