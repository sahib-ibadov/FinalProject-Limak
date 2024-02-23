import React, { useState } from 'react';
import './AZNbalans.css';

const AZNbalans = () => {
  const [usdAmount, setUsdAmount] = useState('');
  const [aznAmount, setAznAmount] = useState('');

  const convertUsdToAzn = (usd) => {
    const conversionRate = 1.7;
    const azn = usd * conversionRate;
    return azn.toFixed(2);
  };

  const handleUsdChange = (event) => {
    const usd = event.target.value;
    setUsdAmount(usd);
    const azn = convertUsdToAzn(usd);
    setAznAmount(azn);
  };

  return (
    <div>

      <div class="card-spz ">

        <div class="col-qtn col-4gy ">

          <div class="card-d4k">

            <div class="header-9bh">

              <div class="card-9rd">

                <h3 class="title-qxt">
                  Balansım
                </h3>
                <div class="card-olo">
                  <span>
                    0.00
                    <sup class="man-j5x">
                      M
                    </sup>
                  </span>
                </div>
              </div>
              <div class="card-6hd">
                <p>
                  Son əlavə tarixi
                </p>
                <strong>
                </strong>
              </div>
            </div>
            <div>
              <p class="card-y8p">
                Azərbaycana çatdırılma haqqının ödənilməsi və online kuryer sifarişi üçün balansınızı artıra bilərsiniz.
              </p>
              <h4 class="card-rlb upp-sxe">
                ARTIRILAN BALANS GERİ QAYTARILMIR.
              </h4>
            </div>
          </div>
        </div>


      </div>


      <div className='cevrci'>
        <div className="card-jxh w-10">
          <h3 className="title-q65">
            Ödəniş üçün balans artımı
          </h3>
          <div className="row-i15">
            <div className="col-9zk col-eik">
              <div>
                <form>
                  <div className="row-i15">
                    <div className="col-co4">
                      <input
                        id="new-i8g"
                        name="new_amount"
                        type="number"
                        placeholder="USD"
                        className="form-control-g8w"
                        value={usdAmount}
                        onChange={handleUsdChange}
                      />
                    </div>
                    <div className="col-co4">
                      <input
                        id="amo-6hn"
                        name="amount"
                        type="text"
                        placeholder="AZN"
                        className="form-control-g8w style-jppfj"
                        value={aznAmount}
                        readOnly
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-jax btn-fzo block-z8l btn-primary-l39">
                    Balansı artır
                  </button>
                </form>
              </div>
            </div>
            <div className="col-9zk col-eik">
              <div className="balance-sdf">
                <div className="card-2gq">
                  <img src="https://limak.az/new_front/assets/img/dashboard/visa.svg" alt="visa" />
                  <img src="https://limak.az/new_front/assets/img/dashboard/mastercard.svg" alt="mastercard" />
                </div>
                <p className="text-nam">
                  Min: <strong>1 USD</strong> - Max: <strong>50 USD</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AZNbalans;
