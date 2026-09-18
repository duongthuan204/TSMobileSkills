import React from 'react';
import '../dialog.css';

class Dialog extends React.Component {

    getRandomNpc() {
        const npcList = 21
        const randomNpc = Math.floor(Math.random() * npcList) + 1
        const npcId = randomNpc.toString().padStart(2, '0')
        return npcId
    }

    closeModal() {
        if (!this.props.isLock) {
            document.getElementById('welcome-dialog').remove()
        }
    }

    render() {
        const randomNpc = this.getRandomNpc()
        return (
            <div id="welcome-dialog" className="modal is-active" onClick={() => this.closeModal()}>
                <div className="modal-background"></div>
                <div className={'dialog-box ' + (this.props.isLock ? 'is-lock' : '')}>
                    <div className="dialog-content">
                        <div className="dialog-npc">
                            <img src={"./assets/npc/" + randomNpc + ".gif"} alt="npc" width="150" height="150" />
                        </div>
                        {this.props.isLock ? <div className="dialog-text">
                            <p className="mb-3">
                                Hiện tại trang web đang tạm khóa. Vui lòng quay lại sau. Liên hệ <a href="https://www.facebook.com/shunbrvt" target="_blank" rel="noreferrer">Facebook</a> hoặc <a href="https://zalo.me/0357232898" target="_blank" rel="noreferrer">Zalo</a> để biết thêm chi tiết.
                            </p>
                            </div> : <div className="dialog-text">
                            <p className="mb-3">Chào mừng bạn đến với Đại Chu Thiên - công cụ tính điểm kĩ năng game TS Online được phát triển bởi tác giả Dương Thuận.</p>
                            <span className="text-white">
                                <p>Hướng dẫn sử dụng:</p>
                                <ul>
                                    <li>* Hỗ trợ học nhanh các kĩ năng cuối nhánh</li>
                                    <li>* Có thể xóa kĩ năng đã học với điều kiện không có kĩ năng nào phụ thuộc (có thì chỉ giảm điểm về 1)</li>
                                    <li>* Đối với Tái Sinh thì mỗi kĩ năng Nghề sẽ mở khóa 2 slot kĩ năng Hệ (chưa tính Ball)</li>
                                </ul>
                            </span>
                        </div>}
                    </div>
                </div>
            </div>

        );
    }
}
export default Dialog;