import { useState } from 'react';

function About(props) {

    const { closeAboutPage } = props

    const [levelCS, setLevelCS] = useState(200)
    const [levelTS, setLevelTS] = useState(200)
    const [pointCS, setPointCS] = useState(0)
    const [pointTS, setPointTS] = useState(0)

    const [showQR, setShowQR] = useState(false)

    const calculatePoint = () => {
        setPointCS(Math.floor(levelCS / 5))
        setPointTS(Math.floor(levelCS / 3) + Math.floor(levelTS / 3))
    }

    const resetData = () => {
        setLevelCS(200)
        setLevelTS(200)
        setPointCS(0)
        setPointTS(0)
    }

    const handleChange = (setter) => (e) => {
        const val = e.target.value;
        if (val === '' || /^\d+$/.test(val)) {
            setter(val)
        }
    };

    const handleBlur = (value, setter) => () => {
        setPointCS(0)
        setPointTS(0)
        // if (value === '') {
        //     setter(200)
        //     return
        // }
        const num = Number(value);
        if (num < 120) {
            setter(120)
        } else if (num > 200) {
            setter(200)
        }
    };

    return (
        <div className="about columns">
            <button className="close-about-page" onClick={closeAboutPage}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2 2L18 18M18 2L2 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            </button>
            <div className="column card content mx-4 mb-4 p-5">
                <div className="field">
                    <label className="label">Level khi Chuyển Sinh (120 → 200)</label>
                    <div className="control">
                        <input className="input is-medium" type="text" value={levelCS} disabled={pointCS > 0 || pointTS > 0} onChange={handleChange(setLevelCS)} onBlur={handleBlur(levelCS, setLevelCS)} placeholder="Nhập giá trị từ 120 đến 200" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Level khi Tái Sinh (120 → 200)</label>
                    <div className="control">
                        <input className="input is-medium" type="text" value={levelTS} disabled={pointCS > 0 || pointTS > 0} onChange={handleChange(setLevelTS)} onBlur={handleBlur(levelTS, setLevelTS)} placeholder="Nhập giá trị từ 120 đến 200" />
                    </div>
                </div>
                <div className="field">
                    <div className="control columns is-mobile">
                        <div className="column">
                            <button className="button is-success is-fullwidth" onClick={calculatePoint}>Tính điểm</button>
                        </div>
                        <div className="column">
                            <button className="button is-danger is-fullwidth" onClick={resetData}>Nhập lại</button>
                        </div>
                    </div>
                </div>
                <PointCalculate pointCS={pointCS} pointTS={pointTS} />
            </div>
            <div className="column card content mx-4 mb-4 p-5">
                <p>Trang web này được mình xây dựng vì niềm yêu thích game TS Online và mong muốn đóng góp cho cộng đồng hoàn toàn miễn phí. Tuy nhiên nếu bạn thấy hữu ích và muốn mời một ly cafe thì mình rất cảm ơn 💕</p>
                {showQR ? <div className="qr-code">
                    <img src=".\qr-code.png" alt="qr-code" width="280" />
                    {/* <button className="qr-code-button button is-danger" onClick={() => setShowQR(false)}>Ẩn mã QR</button> */}
                </div> : <div className="qr-code">
                    <img src=".\qr-code-hide.png" alt="qr-code" width="280" />
                    <button className="qr-code-button button is-info" onClick={() => setShowQR(true)}>Hiện mã QR</button>
                </div>}
            </div>
            <div className="column card content mx-4 mb-4 p-5">
                {/* <h3 className="has-text-centered">Giới thiệu</h3> */}
                <ul>
                    <li>Tác giả: <span className="bold">Dương Thuận</span></li>
                    <li>Quân đoàn Exotic - Server Tào Tháo (TS Origin VTC)</li>
                    <li>Liên hệ: <a href="https://www.facebook.com/shunbrvt" target="_blank" rel="noreferrer">Facebook</a> hoặc <a href="https://zalo.me/0357232898" target="_blank" rel="noreferrer">Zalo</a> để góp ý hoặc báo lỗi</li>
                    <li>Đọc truyện chế TS mình làm từ thời Asiasoft <a href="https://drive.google.com/drive/folders/1iJRv72SGp-39JBFN4zr22irrvqvEV3FR?usp=drive_link" target="_blank" rel="noreferrer">ở đây</a></li>
                    <li>Xem hướng dẫn bắt Ba Đậu Yêu <a href="https://www.youtube.com/watch?v=L_1hVpazuVU" target="_blank" rel="noreferrer">ở đây</a></li>
                    <li>Trang web chỉ có giá trị tham khảo</li>
                </ul>
                <img src=".\screenshot.png" alt="screenshot" width="300" />
            </div>
        </div>
    );
}
export default About;

function PointCalculate({ pointCS, pointTS }) {
    if (pointCS === 0 && pointTS === 0) {
        return <div className="mt-5">
            <article className="message is-primary is-small mb-4">
                <div className="message-body">
                    Chuyển Sinh = Level CS : 5
                </div>
            </article>
            <article className="message is-link is-small">
                <div className="message-body">
                    Tái Sinh = (Level CS : 3) + (Level TS : 3)
                </div>
            </article>
        </div>
    }
    return <div className="mt-5">
        <article className="message is-primary">
            <div className="message-body">
                Sau khi Chuyển Sinh bạn sẽ nhận được <strong>{pointCS}</strong> điểm kĩ năng
            </div>
        </article>
        <article className="message is-link">
            <div className="message-body">
                Sau khi Tái Sinh bạn sẽ nhận được <strong>{pointTS}</strong> điểm kĩ năng
            </div>
        </article>
    </div>
}