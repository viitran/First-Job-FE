import partner from "../../assets/homePage/partner.webp";
import "./Partner.css";
export default function Partner() {

    return (
        <>
            <div className="container-fl" style={{marginTop:'50px', marginBottom:'50px'}}>
                <div className="d-flex" style={{ flexWrap: 'wrap', backgroundColor: 'rgb(198 239 213 / 55%)', borderRadius:'60px' }}>
                    <div className="col-lg-6 col-12 d-flex align-items-center rps-in-bl" style={{margin:'70px 0px 0px 0px'}}>
                        <div style={{width:'100%'}}>
                            <div>
                                <h2 className="rps-title1-h" style={{ fontWeight: 'bold', lineHeight: 'normal' }}>ĐĂNG KÝ TRỞ THÀNH <br />
                                    <span style={{ color: 'rgb(51 167 93)' }}> ĐỐI TÁC </span>CỦA CHÚNG TÔI</h2>
                            </div>
                            <div style={{position:'relative'}}>
                                <input className="input-partner" placeholder="Hãy để lại SĐT, chúng tôi sẽ liên lạc lại"/>
                                <button className="btn-partner">Đăng ký</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12" style={{margin:'70px 0px 0px 0px'}}>
                        <img src={partner} alt="..." style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </>
    )
}