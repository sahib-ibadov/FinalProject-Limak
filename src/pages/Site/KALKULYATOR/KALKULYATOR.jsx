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
    const [aznToUsdRate, setAznToUsdRate] = useState(0.0322707);
    const [usdToAznRate, setUsdToAznRate] = useState(1 / 0.0322707);
    const [aznAmount, setAznAmount] = useState('');
    const [usdAmount, setUsdAmount] = useState('');
    
    const handleAznInputChange = (event) => {
        const aznValue = event.target.value;
        setAznAmount(aznValue);
        const usdValue = (parseFloat(aznValue) * aznToUsdRate).toFixed(2);
        setUsdAmount(usdValue);
    };

    const handleUsdInputChange = (event) => {
        const usdValue = event.target.value;
        setUsdAmount(usdValue);
        const aznValue = (parseFloat(usdValue) * usdToAznRate).toFixed(2);
        setAznAmount(aznValue);
    };


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
            <form className="form-calc snipcss-CzmJt formkal">
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
            <div className="mezene">
                <div className="card-hh8">
            <div className="form-498">
                <div className="header-1kk">
                    <div className="title-8vz">
                        <img src="https://limak.az/new_front/assets/img/icons/calculator.svg" alt="Calculator Icon" />
                        <h3>Məzənnə Kalkulyatoru</h3>
                    </div>
                </div>
                <form>
                    <div className="input-kcf input-kg1 mb-sm-rom">
                        <input type="number" placeholder="0.0" className="form-control-32p" value={aznAmount} onChange={handleAznInputChange} />
                        <div className="input-4xh">
                            <div className="dropdown-oso btn-jwg">
                                <button type="button" className="btn-a3h dropdown-pez btn-pa5">AZN</button>
                                <ul className="dropdown-menu-7wi">
                                    <li><a href="#" className="dropdown-item-wzy act-var">AZN</a></li>
                                    <li><a href="#" className="dropdown-item-wzy">USD</a></li>
                                    <li><a href="#" className="dropdown-item-wzy">TRY</a></li>
                                    <li><a href="#" className="dropdown-item-wzy">RUB</a></li>
                                    <li><a href="#" className="dropdown-item-wzy">CNY</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="input-kcf input-kg1">
                        <input type="number" placeholder="0.0" className="form-control-32p" value={usdAmount} onChange={handleUsdInputChange} />
                        <div className="input-4xh">
                            <div className="dropdown-oso btn-jwg">
                                <button type="button" className="btn-a3h dropdown-pez btn-pa5">USD</button>
                                <ul className="dropdown-menu-7wi">
                                    <li><a href="#" className="dropdown-item-wzy">AZN</a></li>
                                    <li><a href="#" className="dropdown-item-wzy act-var">USD</a></li>
                                    <li><a href="#" className="dropdown-item-wzy">TRY</a></li>
                                    <li><a href="#" className="dropdown-item-wzy">RUB</a></li>
                                    <li><a href="#" className="dropdown-item-wzy">CNY</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="form-od7">Günün məzənnəsinə uyğun hesablanır.</p>
                </form>
                <div className="table-1gn">
                    <div className="title-8vz">
                        <img src="https://limak.az/new_front/assets/img/icons/change.svg" alt="Change Icon" />
                        <h3>Günlük məzənnə</h3>
                    </div>
                    <table className="table-thg table-q7s">
                        <thead>
                            <tr>
                                <th><div>Country</div></th>
                                <th><div>Currency</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src="https://limak.az/new_front/assets/img/icons/tr-circle.svg" alt="TR Icon" /><span>1</span></td>
                                <td><strong>TRY</strong></td>
                            </tr>
                            <tr>
                                <td><img src="https://limak.az/new_front/assets/img/icons/az-circle.svg" alt="AZ Icon" /><span>0.055</span></td>
                                <td><strong>AZN</strong></td>
                            </tr>
                            <tr>
                                <td><img src="https://limak.az/new_front/assets/img/icons/usa-circle.svg" alt="USA Icon" /><span>0.0322707</span></td>
                                <td><strong>USD</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>  

            </div>


        </div>
    );
}

export default KALKULYATOR;
