import React, { useRef } from 'react'
import './Sifariset.css'
import { useFormik } from 'formik';
import axios from 'axios';

const Sifariset = () => {
  const formik = useFormik({
    initialValues: {
      orderURL: "",
      price: 0,
      localCargoPrice: 0,
      count: 0,
      color: "",
      size: "",
      notes: "",
      warehouseId: null,
      countryId: 1
    },
    onSubmit: async (values) => {
      await axios.post('https://localhost:7211/orders', values).then(res => {
        console.log(res)
      })
      console.log(values)
    },
  });

  const turkiyRef = useRef()
  const amerikaRef = useRef()
  const turkeyActiveRef = useRef()
  const amerikaActiveRef = useRef()
  const handleActive = () => {
    turkiyRef.current.classList.add('act-agd')
    amerikaRef.current.classList.remove('act-agd')

    turkeyActiveRef.current.classList.replace('d-none', 'd-flex')
    amerikaActiveRef.current.classList.replace('d-flex', 'd-none')
  }

  const handleDeactive = () => {
    turkiyRef.current.classList.remove('act-agd')
    amerikaRef.current.classList.add('act-agd')

    amerikaActiveRef.current.classList.replace('d-none', 'd-flex')
    turkeyActiveRef.current.classList.replace('d-flex', 'd-none')
  }


  const calculateTotal = () => {
    const totalPrice = parseFloat(formik.values.price);
    const totalCargoPrice = parseFloat(formik.values.localCargoPrice);
    
    if (isNaN(totalPrice) || isNaN(totalCargoPrice)) {
      return 0;
    }
  
    const subtotal = totalPrice + totalCargoPrice;
    const total = subtotal + (subtotal * 0.05);
  
    return total.toFixed(2); 


    function calculateTotal(formikValues) {
      const price = formikValues.price || 0; 
      const localCargoPrice = formikValues.localCargoPrice || 0; 
    
      const total = parseFloat(price) + parseFloat(localCargoPrice); 
    
      const totalWithTax = total + (total * 0.07); 
      return totalWithTax;
    }
    
  };
  return (
    <div>
      <div class="container-jhj style-WBAON" id="style-WBAON">
        <main>
          <div class="row-wv3">
            <div class="col-gy8 col-wly">
              <div>
                <div>
                  <div>
                    <ul class="nav-3ba tabs-yxn card-8m7">
                      <li class="nav-item-sed">
                        <button ref={turkiyRef} onClick={handleActive} class="nav-link-wod act-agd ">
                          <img src="https://limak.az/new_front/assets/img/dashboard/icons/tr-circle.svg" class="card-lz9" />
                          <span>
                            Türkiyə
                          </span>
                        </button>
                      </li>
                      <li class="nav-item-sed">
                        <button onClick={handleDeactive} ref={amerikaRef} class="nav-link-wod">
                          <img src="https://limak.az/new_front/assets/img/dashboard/icons/usa-circle.svg" class="card-lz9" />
                          <span>
                            Amerika
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div ref={turkeyActiveRef} class="content-whe d-flex card-eze">
                    <div class="tab-2ga act-agd" >
                    </div>
                    <div class="tab-2ga style-mGtTE" id="__B-2tl">
                    </div>
                    <div class="content-whe card-eze">
                      <div>
                        <div>
                          <div class="card-qvb mb-cjw">
                            <div class="card-sei">
                              <form class="card-hod" onSubmit={formik.handleSubmit}>
                                <div class="row-wv3">
                                  <div class="col-ia3 col-wly">
                                    <div class="form-group-88a label-cen">
                                      <label for="product-link" class="block-5ze">
                                        Məhsulun linki *
                                      </label>
                                      <div>
                                        <input type="url" name='orderURL' value={formik.values.orderURL} onChange={formik.handleChange} placeholder="Məhsulun linki" class="form-control-k7w" id="__B-cgz" />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xok col-wly">
                                    <div class="form-group-88a label-cen">
                                      <label for="product-price" class="block-5ze">
                                        Məbləğ *
                                      </label>
                                      <div>
                                        <div class="input-oi5 input-o42">
                                          <input type="number" name='price' value={formik.values.price} onChange={formik.handleChange} class="form-control-k7w" id="__B-m31" />
                                          <div class="input-6yv">
                                            <div class="input-6vm">
                                              TRY
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-vaj col-wly">
                                    <fieldset class="form-group-88a label-cen">
                                      <legend class="label-dag pt-vw3">
                                        Türkiyə içi kargo
                                      </legend>
                                      <div>
                                        <div class="check-qw5 custom-p6z radio-6kz">
                                          <input type="radio" name="some-radios" class="input-xcs" value="true" id="__B-o4h" />
                                          <label class="label-yyb" for="__BVID__21">
                                            Bəli
                                          </label>
                                        </div>
                                        <div class="check-qw5 custom-p6z radio-6kz">
                                          <input type="radio" name="some-radios" class="input-xcs" value="false" id="__B-3sm" />
                                          <label class="label-yyb" for="__BVID__22">
                                            Xeyr
                                          </label>
                                        </div>
                                      </div>
                                    </fieldset>
                                  </div>
                                  <div class="col-xok col-wly">
                                    <div class="form-group-88a label-cen">
                                      <label for="product-kargo" class="block-5ze">
                                        Karqo məbləği*
                                      </label>
                                      <div>
                                        <div class="input-oi5 input-o42">
                                          <input name='localCargoPrice' value={formik.values.localCargoPrice} onChange={formik.handleChange} id="ord-cy6" type="number" placeholder="Məbləğ" class="form-control-k7w" />
                                          <div class="input-6yv">
                                            <div class="input-6vm">
                                              TRY
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xok col-wly">
                                    <div class="form-group-88a label-cen product-rc5">
                                      <div>
                                        <label>
                                          <span>
                                            Cəmi(+5%)
                                          </span>
                                        </label>
                                        <div class="input-oi5 input-o42">
                                          <input type="number" class="form-control-k7w" id="__B-wco" readOnly value={calculateTotal()} />
                                          <div class="input-6yv">
                                            <div class="input-6vm">
                                              TRY
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sow col-wly">
                                    <div class="form-group-88a label-cen">
                                      <label for="product-count" class="block-5ze">
                                        Say
                                      </label>
                                      <div>
                                        <input name='count' type="number" value={formik.values.count} onChange={formik.handleChange} placeholder="Say" class="form-control-k7w" id="__B-41s" />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sow col-wly">
                                    <div class="form-group-88a label-cen">
                                      <label for="color-0" class="block-5ze">
                                        Məhsulun rəngi *
                                      </label>
                                      <div>
                                        <input name='color' value={formik.values.color} onChange={formik.handleChange} id="col-yn9" type="text" placeholder="Məhsulun rəngi" class="form-control-k7w" />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sow col-wly">
                                    <div class="form-group-88a label-cen">
                                      <label for="size-0" class="block-5ze">
                                        Məhsulun ölçüsü *
                                      </label>
                                      <div>
                                        <input id="siz-sbf" name='size' value={formik.values.size} onChange={formik.handleChange} type="text" placeholder="Məhsulun ölçüsü" class="form-control-k7w" />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-wly">
                                    <div class="form-group-88a label-cen">
                                      <label for="product-desc" class="block-5ze">
                                        Qeydlər
                                      </label>
                                      <div>
                                        <input type="text" name='notes' value={formik.values.notes} onChange={formik.handleChange} placeholder="Ölçü, rəng və s. üçün qeydlər" class="form-control-k7w" id="__B-mdp" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="card-7cb d-z2l item-mh4 content-2z4">
                                  <div>
                                  </div>
                                  <div>
                                    <button type="submit" class="btn-f5x button-bmz link-7ry btn-primary-fms">
                                      <div class="d-z2l item-mh4">
                                        Səbətə get &nbsp;

                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div ref={amerikaActiveRef} class="content-whe d-none card-eze">
                    <div class="tab-2ga act-agd" >
                    </div>
                    <div class="tab-2ga style-mGtTE" id="__B-2tl">
                    </div>
                    <div class="content-whe card-eze">
                      <div>
                        <div>
                          <div class="card-qvb mb-cjw">
                            <div class="card-sei">
                              <form class="card-hod" onSubmit={formik.handleSubmit}>
                                <div class="row-wv3">
                                  <div class="col-ia3 col-wly">
                                    <div class="form-group-88a label-cen">
                                      <label for="product-link" class="block-5ze">
                                        Məhsulun linki *amerika
                                      </label>
                                      <div>
                                        <input type="url" name='orderURL' value={formik.values.orderURL} onChange={formik.handleChange} placeholder="Məhsulun linki" class="form-control-k7w" id="__B-cgz" />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xok col-wly">
                                    <div class="form-group-88a label-cen">
                                      <label for="product-price" class="block-5ze">
                                        Məbləğ *
                                      </label>
                                      <div>
                                        <div class="input-oi5 input-o42">
                                          <input type="number" name='price' value={formik.values.price} onChange={formik.handleChange} class="form-control-k7w" id="__B-m31" />
                                          <div class="input-6yv">
                                            <div class="input-6vm">
                                              USD
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-vaj col-wly">
                                    <fieldset class="form-group-88a label-cen">
                                      <legend class="label-dag pt-vw3">
                                      Amerika içi kargo
                                      </legend>
                                      <div>
                                        <div class="check-qw5 custom-p6z radio-6kz">
                                          <input type="radio" name="some-radios" class="input-xcs" value="true" id="__B-o4h" />
                                          <label class="label-yyb" for="__BVID__21">
                                            Bəli
                                          </label>
                                        </div>
                                        <div class="check-qw5 custom-p6z radio-6kz">
                                          <input type="radio" name="some-radios" class="input-xcs" value="false" id="__B-3sm" />
                                          <label class="label-yyb" for="__BVID__22">
                                            Xeyr
                                          </label>
                                        </div>
                                      </div>
                                    </fieldset>
                                  </div>
                                  <div class="col-xok col-wly">
                                    <div class="form-group-88a label-cen">
                                      <label for="product-kargo" class="block-5ze">
                                        Karqo məbləği*
                                      </label>
                                      <div>
                                        <div class="input-oi5 input-o42">
                                          <input name='localCargoPrice' value={formik.values.localCargoPrice} onChange={formik.handleChange} id="ord-cy6" type="number" placeholder="Məbləğ" class="form-control-k7w" />
                                          <div class="input-6yv">
                                            <div class="input-6vm">
                                              USD
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-xok col-wly">
                                    <div class="form-group-88a label-cen product-rc5">
                                      <div>
                                        <label>
                                          <span>
                                            Cəmi(+7%)
                                          </span>
                                        </label>
                                        <div class="input-oi5 input-o42">
                                          <input type="number" class="form-control-k7w" id="__B-wco" readOnly value={calculateTotal()}  />
                                          <div class="input-6yv">
                                            <div class="input-6vm">
                                              USD
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sow col-wly">
                                    <div class="form-group-88a label-cen">
                                      <label for="product-count" class="block-5ze">
                                        Say
                                      </label>
                                      <div>
                                        <input name='count' type="number" value={formik.values.count} onChange={formik.handleChange} placeholder="Say" class="form-control-k7w" id="__B-41s" />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sow col-wly">
                                    <div class="form-group-88a label-cen">
                                      <label for="color-0" class="block-5ze">
                                        Məhsulun rəngi *
                                      </label>
                                      <div>
                                        <input name='color' value={formik.values.color} onChange={formik.handleChange} id="col-yn9" type="text" placeholder="Məhsulun rəngi" class="form-control-k7w" />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sow col-wly">
                                    <div class="form-group-88a label-cen">
                                      <label for="size-0" class="block-5ze">
                                        Məhsulun ölçüsü *
                                      </label>
                                      <div>
                                        <input id="siz-sbf" name='size' value={formik.values.size} onChange={formik.handleChange} type="text" placeholder="Məhsulun ölçüsü" class="form-control-k7w" />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-wly">
                                    <div class="form-group-88a label-cen">
                                      <label for="product-desc" class="block-5ze">
                                        Qeydlər
                                      </label>
                                      <div>
                                        <input type="text" name='notes' value={formik.values.notes} onChange={formik.handleChange} placeholder="Ölçü, rəng və s. üçün qeydlər" class="form-control-k7w" id="__B-mdp" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="card-7cb d-z2l item-mh4 content-2z4">
                                  <div>
                                  </div>
                                  <div>
                                    <button type="submit" class="btn-f5x button-bmz link-7ry btn-primary-fms">
                                      <div class="d-z2l item-mh4">
                                        Səbətə get &nbsp;

                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xog col-wly">
              <div>
                <aside>
                  <div class="card-qvb">
                    <div class="card-sei">
                      <form class="card-rxi">
                        <fieldset class="form-group-88a">
                          <div>
                            <div class="check-qw5 custom-p6z radio-6kz">
                              <input type="radio" name="some-radios" class="input-xcs" value="1" id="__B-8di" />
                              <label class="label-yyb" for="__BVID__37">
                                <h4>
                                  Kart ilə ödəniş
                                </h4>
                                <p>
                                  İstənilən kredit və ya debet kartı ilə ödəniş edə bilərsiniz
                                </p>
                              </label>
                            </div>
                            <div class="check-qw5 custom-p6z radio-6kz">
                              <input type="radio" name="some-radios" class="input-xcs" value="2" id="__B-itz" />
                              <label class="label-yyb" for="__BVID__38">
                                <h4>
                                  TRY balansı ilə ödəniş
                                </h4>
                                <p>
                                  TRY balansınızda kifayət qədər vəsait varsa, ödəniş edə bilərsiniz TRY balansınız:
                                  <b>
                                    0.00TRY
                                  </b>
                                </p>
                              </label>
                            </div>
                            <div class="check-qw5 custom-p6z radio-6kz">
                              <input type="radio" name="some-radios" class="input-xcs" value="3" id="__B-1ay" />
                              <label class="label-yyb" for="__BVID__39">
                                <h4>
                                  BirKart ilə ödə
                                </h4>
                                <p>
                                  İstədiyin məhsulu seç, birkart ilə 3 aya ödə
                                </p>
                              </label>
                            </div>
                          </div>
                        </fieldset>
                        <div class="payment-qon">
                          <span>
                            Cəmi:
                          </span>
                          <strong>
                            0 TRY
                          </strong>
                        </div>
                        <div class="checkbox-rq3 custom-p6z checkbox-fnh style-iwVsI" id="style-iwVsI">
                          <input id="che-8dp" type="checkbox" name="checkbox-terms" class="input-xcs" value="true" />
                          <label for="checkbox-terms" class="label-yyb">
                            <a href="javascript:void(0)">
                              Məsafəli satış şərtləri
                            </a>
                          </label>
                        </div>
                        <select id="rer-emg" class="select-67j">
                          <option value="">
                            -- Anbar seçin --
                          </option>
                          <option value="1">
                            Bakı - İçərişəhər
                          </option>
                          <option value="2">
                            Gəncə
                          </option>
                          <option value="3">
                            Sumqayıt
                          </option>
                          <option value="4">
                            Zaqatala
                          </option>
                          <option value="6">
                            Bakı - Xalqlar Dostluğu
                          </option>
                          <option value="7">
                            Xırdalan
                          </option>
                          <option value="8">
                            Balakən
                          </option>
                          <option value="11">
                            Bakı - Gənclik
                          </option>
                          <option value="13">
                            Bakıxanov
                          </option>
                          <option value="14">
                            Xətai
                          </option>
                          <option value="15">
                            İnşaatçılar
                          </option>
                          <option value="16">
                            Həzi Aslanov
                          </option>
                          <option value="17">
                            Badamdar
                          </option>
                          <option value="22">
                            Zabrat
                          </option>
                        </select>
                        <button type="button" class="btn-f5x btn-ca4 upp-fa8 d-z2l item-mh4 content-oti btn-primary-fms block-wlq dis-1hv">
                          ÖDƏNİŞ ET
                        </button>
                        <div class="pay-jpv">
                          <span class="des-xm6">
                            və ya səbətə gedin
                          </span>

                        </div>
                      </form>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

  )
}

export default Sifariset
